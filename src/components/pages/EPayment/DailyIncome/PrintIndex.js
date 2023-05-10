import { Button, DatePicker, Form, Select, Table } from 'antd';
import moment from 'moment';
import React, { Children, useRef } from 'react';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import { useState } from 'react';
import { Get, numberToCurrency } from '../../../comman';
import { useSelector } from 'react-redux';
import {
   selectCurrentFirstName,
   selectCurrentLastName,
   selectCurrentToken,
   selectCurrentUserInfo
} from '../../../../features/authReducer';
import { useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
const { Option } = Select;
function PrintIndex({ data }) {
   // const today = new Date();
   const [today, setToday] = useState(new Date());
   const userFirstName = useSelector(selectCurrentFirstName);
   const userLastName = useSelector(selectCurrentLastName);
   const token = useSelector(selectCurrentToken);
   const [employees, setEmployees] = useState([]);
   const [employee, setEmployee] = useState({
      lastName: '',
      firstName: ''
   });
   const [employeeId, setEmployeeId] = useState(Number);
   const [incomes, setIncomes] = useState([]);
   const [meta, setMeta] = useState({});
   const [spinner, setSpinner] = useState(false);
   const printRef = useRef();
   const [form] = Form.useForm();
   const [start, setStart] = useState('');
   const [end, setEnd] = useState('');
   const [totalAmount, setTotalAmount] = useState(Number);
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   const dayColumns = [
      {
         title: 'Овог',
         dataIndex: ['patient', 'lastName']
      },
      {
         title: 'Нэр',
         dataIndex: ['patient', 'firstName']
      },
      {
         title: 'Төлбөр төлсөн огноо',
         render: (_, row) => {
            return moment(row.updatedAt).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Үйлчилгээний төрөл',
         render: (_, row) => {
            return (
               <div className="whitespace-pre-wrap">
                  <ul className="list-disc list-inside">
                     {row.invoices?.map((invoice, index) => {
                        return <li key={index}>{invoice.name}</li>;
                     })}
                  </ul>
               </div>
            );
         }
      },
      {
         title: 'Бэлэн',
         render: (_, row) => {
            return numberToCurrency(row.totalAmount);
         }
      },
      {
         title: 'Нийт',
         render: (_, row) => {
            return numberToCurrency(row.totalAmount);
         }
      }
   ];
   const calcutorTotalAmount = (data) => {
      var amount = 0;
      data.map((item) => {
         amount += item.totalAmount;
      });
      setTotalAmount(amount);
   };
   const filter = async (start, end, employeeId) => {
      setSpinner(true);
      var start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      var end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      setToday(start);
      setStart(start);
      setEnd(end);
      setEmployeeId(employeeId);
      console.log(employeeId);
      const filteredEmployee = employees.filter((e) => e.userId == employeeId);
      setEmployee(filteredEmployee[0]);
      const conf = {
         headers: {},
         params: {
            createdBy: employeeId,
            startDate: moment(start).format('YYYY-MM-DD HH:mm'),
            endDate: moment(end).format('YYYY-MM-DD HH:mm')
         }
      };
      const response = await Get('payment/payment', token, conf);
      calcutorTotalAmount(response.data);
      setIncomes(response.data);
      setMeta(response.meta);
      setSpinner(false);
   };
   const getEmployees = async (id) => {
      const conf = {
         headers: {},
         params: {
            depId: id
         }
      };
      const response = await Get('organization/employee', token, conf);
      setEmployees(response.data);
   };
   useEffect(() => {
      getEmployees(50);
   }, []);
   return (
      <>
         <Form form={form}>
            <div className="flex flex-wrap">
               <div className="basis-1/2 p-1">
                  <Form.Item
                     label="Өдөр"
                     name="date"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал'
                        }
                     ]}
                  >
                     <DatePicker placeholder="Өдөр сонгох" locale={mnMN} />
                  </Form.Item>
               </div>
               <div className="basis-1/2 p-1">
                  <Form.Item
                     label="Ажилтан"
                     name="employeeId"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал'
                        }
                     ]}
                  >
                     <Select>
                        {employees.map((employee, index) => {
                           return (
                              <Option key={index} value={employee.userId}>
                                 {employee.lastName.substring(0, 1) + '.' + employee.firstName}
                              </Option>
                           );
                        })}
                     </Select>
                  </Form.Item>
               </div>
            </div>
         </Form>
         <Button
            type="primary"
            className="w-full"
            onClick={() => form.validateFields().then((values) => filter(values.date, values.date, values.employeeId))}
         >
            Шүүх
         </Button>
         <div ref={printRef}>
            <p className="text-center py-10" style={{ fontSize: '20px', fontWeight: 'bold' }}>
               ӨДРИЙН ОРЛОГО({moment(today).format('YYYY-MM-DD')})
            </p>
            <div className="printBody">
               <Table
                  rowKey={'id'}
                  bordered
                  locale={{ emptyText: 'Мэдээлэл байхгүй' }}
                  loading={spinner}
                  columns={dayColumns}
                  dataSource={incomes}
                  pagination={false}
               />
            </div>
            <p className="text-center py-1" style={{ fontSize: '15px', fontWeight: 'bold' }}>
               Хэвлэх огноо: {moment().format('YYYY-MM-DD HH:mm')}
            </p>
            <p className="text-center py-1" style={{ fontSize: '15px', fontWeight: 'bold' }}>
               Бэлнээр: {numberToCurrency(totalAmount)}
            </p>
            <p className="text-center py-1" style={{ fontSize: '15px', fontWeight: 'bold' }}>
               Нийт мөнгөн дүн: {numberToCurrency(totalAmount)}
            </p>
            <p className="text-center py-1" style={{ fontSize: '12px', fontWeight: 'bold' }}>
               Тайлан гаргасан: {employee?.lastName?.substring(0, 1) + '.' + employee?.firstName} /.............../
            </p>
            <p className="text-center py-1" style={{ fontSize: '12px', fontWeight: 'bold' }}>
               Хэвлэсэн: {userLastName?.substring(0, 1) + '.' + userFirstName} /.............../
            </p>
         </div>
         <Button type="primary" onClick={handlePrint}>
            Хэвлэх
         </Button>
      </>
   );
}
export default PrintIndex;
