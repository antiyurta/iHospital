import '../../../style/Hospital.css';
import React, { useEffect, useState } from 'react';
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
                  return Promise.reject(new Error('asdasdasdad'));
               }
            }
         }
      ],
      isView: true,
      input: 'input',
      col: 12
   },
   {
      index: 'address',
      label: 'Хаяг',
      isView: false,
      input: 'textarea',
      col: 12
   },
   {
      index: 'phone',
      label: 'Утас',
      isView: false,
      input: 'input',
      col: 12
   },
   {
      index: 'isActive',
      label: 'Идэвхтэй эсэх',
      isView: false,
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
   }
];
function Hospital() {
   const token = useSelector(selectCurrentToken);
   const [insuranceForm] = Form.useForm();
   const [isOpenInsurance, setIsOpenInsurance] = useState(false);
   const [selectedRow, setSelectedRow] = useState({});
   const [isRefresh, setIsRefresh] = useState(true);
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
            column={column}
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
