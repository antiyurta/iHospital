import '../../../style/Hospital.css';
import React, { Suspense, useEffect, useState } from 'react';
import { Modal, Form, Input, message } from 'antd';

import UTable from '../../UTable';
import { Patch } from '../../common';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import apiInsuranceService from '../../../services/healt-insurance/insurance';

const column = [
   {
      index: 'name',
      label: 'Нэр',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'databaseName',
      label: 'Дата басс нэр',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'hospitalType',
      label: 'Лавлагаа ЭМБ гм',
      isView: true,
      input: 'input',
      col: 12
   },

   {
      index: 'registerNumber',
      label: 'Регистр дугаар',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'email',
      label: 'И-мэйл',
      rules: [
         {
            required: true,
            message: 'Хоосон байж болохгүй'
         },
         {
            type: 'email',
            message: 'Хэлбэрийн алдаа'
         },
         {
            validator: async (_, email) => {
               if (email.length < 10) {
                  return Promise.reject(new Error(''));
               }
            }
         }
      ],
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'phone',
      label: 'Утас(1)',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'hsPersonPhone',
      label: 'Утас(2)',
      isView: false,
      input: 'input',
      col: 12
   },
   {
      index: 'hsLng',
      label: 'Уртраг',
      isView: false,
      input: 'numberInput',
      col: 12
   },
   {
      index: 'hsLat',
      label: 'Өргөрөг',
      isView: false,
      input: 'numberInput',
      col: 12
   },
   {
      index: 'hsCapacity',
      label: 'Нийт орны тоо',
      isView: true,
      input: 'numberInput',
      col: 12
   },
   {
      index: 'hsSocial',
      label: 'Сошиал хаяг',
      isView: false,
      input: 'input',
      col: 12
   },
   {
      index: 'hsIntroduction',
      label: 'Танилцуулга',
      isView: false,
      input: 'textarea',
      col: 12
   },
   {
      index: 'hsTimetable',
      label: 'Цагийн хуваарь',
      isView: false,
      input: 'date',
      col: 12
   },
   {
      index: 'address',
      label: 'Хаяг байршил',
      isView: false,
      input: 'textarea',
      col: 12
   },
   {
      index: 'hasInsurance',
      label: 'ЭМД гэрээтэй эсэх',
      isView: false,
      input: 'switch',
      col: 8
   },
   {
      index: 'isActive',
      label: 'Идэвхтэй эсэх',
      isView: true,
      input: 'switch',
      col: 8
   },
   {
      index: 'isXyp',
      label: 'Xyp-тай эсэх',
      isView: true,
      input: 'switch',
      col: 8
   },
   {
      index: 'isInsurance',
      label: 'Даатгалтай эсэх',
      isView: false,
      input: 'switch',
      col: 8
   },
   {
      index: 'isAfterPay',
      label: 'Дараа төлбөрт эсэх',
      isView: true,
      input: 'switch',
      col: 8
   },
   {
      index: 'hasBranch',
      label: 'Салбартай эсэх',
      isView: true,
      input: 'switch',
      col: 8,
      child: true
   }
];

const columnBranch = [
   {
      label: 'Салбарын мэдээлэл',
      isView: true,
      input: 'branch_title',
      col: 24
   },
   {
      index: 'branch_hospitalName',
      label: 'Нэр',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branch_branchId',
      label: 'Дугаар (ID)',
      isView: true,
      input: 'numberInput',
      col: 12
   },
   {
      index: 'branch_hsPhone',
      label: 'Утас(1)',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branch_hsPersonPhone',
      label: 'Утас(2)',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branch_hsEmail',
      label: 'Имэйл хаяг',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branch_hsSocial',
      label: 'Салбарын сошиал хаяг',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branch_address',
      label: 'Хаяг, байршил',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branch_hsLng',
      label: 'Уртраг',
      isView: true,
      input: 'numberInput',
      col: 12
   },
   {
      index: 'branch_hsLat',
      label: 'Өргөрөг',
      isView: true,
      input: 'numberInput',
      col: 12
   },

   {
      index: 'branch_hsTimetable',
      label: 'Цагийн хуваарь',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branch_hsCapacity',
      label: 'Нийт орны тоо',
      isView: true,
      input: 'numberInput',
      col: 12
   },
   {
      index: 'branch_status',
      label: 'Төлөв',
      isView: true,
      input: 'switch',
      col: 12
   },
   {
      index: 'branch_numberOfBeds',
      label: 'Сул орны тоо',
      isView: true,
      input: 'numberInput',
      col: 12
   },
   {
      index: 'branch_hsIntroduction',
      label: 'Товч танилцуулга',
      isView: false,
      input: 'textarea',
      col: 12
   }
];

function Hospital() {
   const token = useSelector(selectCurrentToken);
   const [insuranceForm] = Form.useForm();
   const [isOpenInsurance, setIsOpenInsurance] = useState(false);
   const [selectedRow, setSelectedRow] = useState({});
   const [isRefresh, setIsRefresh] = useState(true);
   const [havebranch, setHaveBranch] = useState(false);

   const updateHospital = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Patch('organization/hospital/' + selectedRow.id, token, conf, values);
      if (response === 200) {
         setIsOpenInsurance(false);
      }
      setIsRefresh(!isRefresh);
   };
   const insuranceFunction = async (row) => {
      if (row) {
         setIsOpenInsurance(true);
         insuranceForm.setFieldValue('insuranceUsername', row.insuranceUsername);
         insuranceForm.setFieldValue('insurancePassword', row.insurancePassword);
         setSelectedRow(row);
      }
   };
   const insuranceSyncFunction = async () => {
      await apiInsuranceService.createHicsExams().then(({ data }) => {
         if (data.code == 200) {
            message.success(data.description);
         } else {
            message.warn(data.description);
         }
      });
   };

   const isColumns = havebranch ? [...column, ...columnBranch] : [...column];
   return (
      <div className="w-full bg-[#f5f6f7] p-3">
         <UTable
            title={'Байгууллага'}
            url={'organization/hospital'}
            column={isColumns}
            extraColumn={columnBranch}
            isCreate={true}
            isRead={true}
            isUpdate={true}
            isDelete={true}
            width="50%"
            isInsurance={true}
            insuranceSync={true}
            insuranceFunction={insuranceFunction}
            insuranceSyncFunction={insuranceSyncFunction}
            isRefresh={isRefresh}
            setChild={setHaveBranch}
            child={havebranch}
            // initialValues={{
            //    hospitalType: 'test',
            //    address: 'dasd',
            //    branch_address: 'asd',
            //    branch_branchId: 123,
            //    branch_hospitalName: 'asd',
            //    branch_hsCapacity: 123,
            //    branch_hsEmail: 'asd12@gmail.com',
            //    branch_hsLat: 1223,
            //    branch_hsLng: 213,
            //    branch_hsPersonPhone: 'asd',
            //    branch_hsPhone: 'asd',
            //    branch_hsSocial: 'as',
            //    branch_hsTimetable: 'asdsa',
            //    branch_numberOfBeds: 100,
            //    branch_status: undefined,
            //    databaseName: 'as',
            //    email: 'dasd@gmail.com',
            //    hasBranch: undefined,
            //    hasInsurance: 1,
            //    hsCapacity: 123,
            //    hsIntroduction: 'asdas',
            //    hsLat: 123,
            //    hsLng: 123,
            //    hsPersonPhone: 'das',
            //    hsSocial: 'as',
            //    isActive: undefined,
            //    isAfterPay: undefined,
            //    isInsurance: undefined,
            //    isXyp: undefined,
            //    name: 'asdas',
            //    phone: 'asdasd',
            //    registerNumber: 'asasd'
            // }}
         />
         <Modal
            open={isOpenInsurance}
            onCancel={() => {
               setIsOpenInsurance(false);
               insuranceForm.resetFields();
            }}
            onOk={() => insuranceForm.validateFields().then((values) => updateHospital(values))}
            okText="Хадагалах"
            cancelText="Болих"
         >
            <Form form={insuranceForm} layout="vertical">
               <Form.Item
                  label="Даатгалын нэвтрэх нэр"
                  name="insuranceUsername"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  label="Даатгалын нууц үг"
                  name="insurancePassword"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Form>
         </Modal>
      </div>
   );
}

export default Hospital;
