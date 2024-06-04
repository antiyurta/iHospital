import '../../../style/Hospital.css';
import React, { Suspense, useEffect, useState } from 'react';
import { Modal, Form, Input, message } from 'antd';

import UTable from '../../UTable';
import { Patch } from '../../common';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import apiInsuranceService from '../../../services/healt-insurance/insurance';
import jwtInterceopter from '../../jwtInterceopter';

const columnBranch = [
   {
      label: 'Салбарын мэдээлэл (Заавал биш)',
      isView: true,
      input: 'title',
      col: 24
   },
   {
      index: 'branchList_hospitalName',
      extraIndex: 'branchList',
      label: 'Нэр',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branchList_branchId',
      extraIndex: 'branchList',
      label: 'Дугаар (ID)',
      isView: true,
      input: 'numberInput',
      col: 12
   },
   {
      index: 'branchList_hsPhone',
      extraIndex: 'branchList',
      label: 'Утас(1)',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branchList_hsPersonPhone',
      extraIndex: 'branchList',
      label: 'Утас(2)',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branchList_hsEmail',
      extraIndex: 'branchList',
      label: 'Имэйл хаяг',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branchList_hsSocial',
      extraIndex: 'branchList',
      label: 'Салбарын сошиал хаяг',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branchList_address',
      extraIndex: 'branchList',
      label: 'Хаяг, байршил',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branchList_hsLng',
      extraIndex: 'branchList',
      label: 'Уртраг',
      isView: true,
      input: 'numberInput',
      col: 12
   },
   {
      index: 'branchList_hsLat',
      extraIndex: 'branchList',
      label: 'Өргөрөг',
      isView: true,
      input: 'numberInput',
      col: 12
   },

   {
      index: 'branchList_hsTimetable',
      extraIndex: 'branchList',
      label: 'Цагийн хуваарь',
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'branchList_hsCapacity',
      extraIndex: 'branchList',
      label: 'Нийт орны тоо',
      isView: true,
      input: 'numberInput',
      col: 12
   },
   {
      index: 'branchList_status',
      extraIndex: 'branchList',
      label: 'Төлөв',
      isView: true,
      input: 'switch',
      col: 12
   },
   {
      index: 'branchList_numberOfBeds',
      extraIndex: 'branchList',
      label: 'Сул орны тоо',
      isView: true,
      input: 'numberInput',
      col: 12
   },
   {
      index: 'branchList_hsIntroduction',
      extraIndex: 'branchList',
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
   const [operationList, setOperationList] = useState([]);

   useEffect(() => {
      const fetchOperationList = async () => {
         try {
            const res = await jwtInterceopter.get('health-insurance/hospital-operation');
            const operations = res.data.result || [];
            setOperationList(
               operations.map((op) => ({
                  id: op.id,
                  label: op.name,
                  value: op.id
               }))
            );
         } catch (error) {
            console.error('Error fetching operation list:', error);
         }
      };

      fetchOperationList();
   }, []);

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
      },
      {
         label: 'Үйл ажиллагааны чиглэлийн мэдээлэл',
         isView: false,
         input: 'title',
         col: 24
      },
      {
         index: 'operationList_id',
         extraIndex: 'operationList',
         label: 'Чиглэлийн дугаар',
         inputData: operationList,
         isView: false,
         input: 'select',
         col: 15,
         relValueIndex: 'value',
         relIndex: 'label'
      },
      {
         index: 'operationList_status',
         extraIndex: 'operationList',
         label: 'Төлөв',
         isView: false,
         input: 'switch',
         col: 9
      }
   ];

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

   return (
      <div className="w-full bg-[#f5f6f7] p-3">
         <UTable
            title={'Байгууллага'}
            url={'organization/hospital'}
            column={[...column, ...columnBranch]}
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
            // initialValues={{
            //    hospitalType: 'test',
            //    address: 'dasd',
            //    branchList_address: 'asd',
            //    branchList_branchId: 123,
            //    branchList_hospitalName: 'asd',
            //    branchList_hsCapacity: 123,
            //    branchList_hsEmail: 'asd12@gmail.com',
            //    branchList_hsLat: 1223,
            //    branchList_hsLng: 213,
            //    branchList_hsPersonPhone: 'asd',
            //    branchList_hsPhone: 'asd',
            //    branchList_hsSocial: 'as',
            //    branchList_hsTimetable: 'asdsa',
            //    branchList_numberOfBeds: 100,
            //    branchList_status: undefined,
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
