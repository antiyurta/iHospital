import '../../../style/Hospital.css';
import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Modal, Select, Form, Input } from 'antd';

import UTable from '../../UTable';
import { DefualtGet, Get, Patch } from '../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';

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
      col: 12
   },
   {
      index: 'isInsurance',
      label: 'Даатгалтай эсэх',
      isView: false,
      input: 'switch',
      col: 12
   }
];
const { Option } = Select;
function Hospital() {
   const token = useSelector(selectCurrentToken);
   const [form] = Form.useForm();
   const [insuranceForm] = Form.useForm();
   const [isOpenHospital, setIsOpenHospital] = useState(false);
   const [isOpenInsurance, setIsOpenInsurance] = useState(false);
   const [financeClients, setFinanceClients] = useState([]);
   const [selectedRow, setSelectedRow] = useState({});
   const [financeAccounts, setFinanceAccounts] = useState([]);
   const [isRefresh, setIsRefresh] = useState(true);
   const hospitalFunction = (row) => {
      if (row) {
         setIsOpenHospital(true);
         setSelectedRow(row);
      }
   };
   const getFinanceClient = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await DefualtGet('finance/client', token, conf);
      setFinanceClients(response.response?.data);
   };
   const getAccounts = async (id) => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get('finance/account/' + id, token, conf);
      setFinanceAccounts(response.data);
   };
   const updateHospital = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Patch('organization/hospital/' + selectedRow.id, token, conf, values);
      if (response === 200) {
         setIsOpenHospital(false);
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
   const insuranceSyncFunction = async (type, hospitalId) => {
      const conf = {
         headers: {},
         params: {
            isSync: type,
            hospitalId: hospitalId
         }
      };
      const response = await DefualtGet('health-insurance/hics-exam', token, conf);
      const response1 = await DefualtGet('health-insurance/hics-service-group', token, conf);
      console.log(response);
      console.log(response1);
   };
   useEffect(() => {
      // getFinanceClient();
   }, [selectedRow]);
   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full">
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
                  isHospital={true}
                  insuranceSync={true}
                  hospitalFunction={hospitalFunction}
                  insuranceFunction={insuranceFunction}
                  insuranceSyncFunction={insuranceSyncFunction}
                  isRefresh={isRefresh}
               />
            </div>
         </div>
         <Modal
            title="Байгууллага сонгох"
            open={isOpenHospital}
            onCancel={() => setIsOpenHospital(false)}
            onOk={() =>
               form.validateFields().then((values) => {
                  updateHospital(values);
               })
            }
            okText="Хадгалах"
            cancelText="Болих"
         >
            <Form form={form} layout="vertical">
               <Form.Item name="financeOrganizationId" label="Байгууллага сонгох">
                  <Select
                     allowClear
                     showSearch
                     style={{
                        minWidth: '100%'
                     }}
                     onChange={(e) => getAccounts(e)}
                     size="small"
                     placeholder="Сонгох"
                     optionFilterProp="children"
                     filterOption={(input, option) => option.children.includes(input)}
                     filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                     }
                  >
                     {financeClients?.map((el, index) => {
                        return (
                           <Option value={el.b_id} key={index}>
                              {el.b_name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.Item label="Авлагын данс" name="receiveAccountId">
                  <Select
                     allowClear
                     showSearch
                     style={{
                        minWidth: '100%'
                     }}
                     size="small"
                     placeholder="Сонгох"
                     optionFilterProp="children"
                     filterOption={(input, option) => option.children.includes(input)}
                     filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                     }
                  >
                     {financeAccounts?.map((el, index) => {
                        return (
                           <Option value={el.accid} key={index}>
                              {el.a_name + '->' + el.a_code}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.Item label="Борлуулалтын данс" name="saleAccountId">
                  <Select
                     allowClear
                     showSearch
                     style={{
                        minWidth: '100%'
                     }}
                     size="small"
                     placeholder="Сонгох"
                     optionFilterProp="children"
                     filterOption={(input, option) => option.children.includes(input)}
                     filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                     }
                  >
                     {financeAccounts?.map((el, index) => {
                        return (
                           <Option value={el.accid} key={index}>
                              {el.a_name + '->' + el.a_code}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
            </Form>
         </Modal>
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
      </>
   );
}

export default Hospital;
