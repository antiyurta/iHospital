import { Button, DatePicker, Form, Select } from 'antd';
import moment from 'moment';
import React, { useRef } from 'react';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import { useState } from 'react';
import { numberToCurrency } from '../../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalName } from '../../../../features/authReducer';
import { useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';

import PaymentService from '../../../../services/payment/payment';
import OrganizationEmployeeService from '../../../../services/organization/employee';

const { Option } = Select;
function PrintIndex() {
   const printRef = useRef();
   const [form] = Form.useForm();
   const [paymentShape, setPaymentShape] = useState([]);
   const hospitalName = useSelector(selectCurrentHospitalName);
   const [today, setToday] = useState(new Date());
   const [discounts, setDiscounts] = useState([]);
   const [employees, setEmployees] = useState([]);
   const [employee, setEmployee] = useState({
      lastName: '',
      firstName: ''
   });
   const [incomes, setIncomes] = useState([]);
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   const filter = async (start, end, employeeId) => {
      var start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      var end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      setToday(start);
      const filteredEmployee = employees.filter((e) => e.userId == employeeId);
      setEmployee(filteredEmployee[0]);
      await PaymentService.getPayment({
         params: {
            isReturn: false,
            createdBy: employeeId,
            startDate: moment(start).format('YYYY-MM-DD HH:mm'),
            endDate: moment(end).format('YYYY-MM-DD HH:mm')
         }
      }).then((response) => {
         setIncomes(response.data.response.data);
      });
   };
   const getEmployees = async (id) => {
      await OrganizationEmployeeService.getEmployee({
         params: {
            depId: id
         }
      }).then((response) => {
         setEmployees(response.data.response.data);
      });
   };
   const getDiscounts = async () => {
      await PaymentService.getDiscount().then((response) => {
         setDiscounts(response.data.response.data);
      });
   };
   const getDiscountPercent = (id) => {
      return discounts.find((e) => e.id === id)?.percent;
   };
   const getDiscountName = (id) => {
      return discounts.find((e) => e.id === id)?.name;
   };
   const getPaymentType = async () => {
      await PaymentService.getPaymentType().then((response) => {
         setPaymentShape(response.data.response);
      });
   };
   const checkPaymentShape = (id) => {
      return paymentShape.find((e) => e.id === id)?.name;
   };
   useEffect(() => {
      getEmployees(50);
      // getEmployees(1);
      getDiscounts();
      getPaymentType();
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
                     <Select onChange={() => setIncomes([])}>
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
            <div className="p-3">
               <div className="flex flex-col gap-2">
                  <div className="flow-root">
                     <p
                        className="float-right"
                        style={{
                           fontSize: 10
                        }}
                     >
                        {hospitalName}
                     </p>
                  </div>
                  <p
                     className="text-center"
                     style={{
                        fontSize: 14,
                        fontWeight: 'bold'
                     }}
                  >
                     Өдрийн орлогын тайлан
                  </p>
                  <div className="flow-root">
                     <p
                        className="float-left"
                        style={{
                           fontSize: 10
                        }}
                     >
                        Тайлант огноо: {moment(today).format('YYYY/MM/DD')}
                     </p>
                  </div>
                  <table className="dailyTable">
                     <thead>
                        <tr>
                           <th>№</th>
                           <th>Овог</th>
                           <th>Нэр</th>
                           <th
                              style={{
                                 minWidth: 150
                              }}
                           >
                              Үйлчилгээний төрөл
                           </th>
                           <th
                              style={{
                                 minWidth: 100
                              }}
                           >
                              Нийт төлбөр
                           </th>
                           <th
                              style={{
                                 minWidth: 50
                              }}
                           >
                              Хөнгөлөлтийн хувь
                           </th>
                           <th>Хөнгөлөлтийн утга</th>
                           <th>Төлсөн урьдчилгаа</th>
                           <th
                              style={{
                                 minWidth: 100
                              }}
                           >
                              Төлсөн дүн
                           </th>
                           <th>Төлбөрийн хэлбэр</th>
                           <th
                              style={{
                                 minWidth: 100
                              }}
                           >
                              Төлсөн огноо, цаг
                           </th>
                           <th>И-баримтын дүн</th>
                        </tr>
                     </thead>
                     <tbody>
                        {incomes?.map((item, index) => {
                           return (
                              <tr key={index}>
                                 <td>{index + 1}</td>
                                 <td
                                    style={{
                                       textAlign: 'start'
                                    }}
                                 >
                                    {item.patient?.lastName}
                                 </td>
                                 <td
                                    style={{
                                       textAlign: 'start'
                                    }}
                                 >
                                    {item.patient?.firstName}
                                 </td>
                                 <td>
                                    {item.invoices?.map((invoice, indx) => {
                                       return (
                                          <p
                                             key={indx}
                                             style={{
                                                fontSize: 10,
                                                textAlign: 'start',
                                                color: 'black'
                                             }}
                                          >
                                             -{invoice?.name}
                                          </p>
                                       );
                                    })}
                                 </td>
                                 <td
                                    style={{
                                       textAlign: 'end'
                                    }}
                                 >
                                    {item.status != 'pre' ? numberToCurrency(item.plusAmount) : null}
                                 </td>
                                 <td>{getDiscountPercent(item.discountPercentId)}</td>
                                 <td>{getDiscountName(item.discountPercentId)}</td>
                                 <td
                                    style={{
                                       textAlign: 'end'
                                    }}
                                 >
                                    {numberToCurrency(item.preAmount)}
                                 </td>
                                 <td
                                    style={{
                                       textAlign: 'end'
                                    }}
                                 >
                                    {numberToCurrency(item.paidAmount)}
                                 </td>
                                 <td>{checkPaymentShape(item.paymentTypeId)}</td>
                                 <td>{moment(item.createdAt).format('YYYY-MM-DD HH:mm')}</td>
                                 <td
                                    style={{
                                       textAlign: 'end'
                                    }}
                                 >
                                    {numberToCurrency(item.isEbarimt ? item.totalAmount : 0)}
                                 </td>
                              </tr>
                           );
                        })}
                        <tr>
                           <th
                              colSpan={4}
                              style={{
                                 textAlign: 'end'
                              }}
                           >
                              Нийт дүн:
                           </th>
                           <th
                              style={{
                                 textAlign: 'end'
                              }}
                           >
                              {numberToCurrency(
                                 incomes.reduce((total, current) => {
                                    if (current.status != 'pre') {
                                       return total + current.plusAmount;
                                    }
                                    return total + 0;
                                 }, 0)
                              )}
                           </th>
                           <th></th>
                           <th></th>
                           <th></th>
                           <th
                              style={{
                                 textAlign: 'end'
                              }}
                           >
                              {numberToCurrency(
                                 incomes.reduce((total, current) => {
                                    return total + current.paidAmount;
                                 }, 0)
                              )}
                           </th>
                           <th></th>
                           <th></th>
                           <th
                              style={{
                                 textAlign: 'end'
                              }}
                           >
                              {numberToCurrency(
                                 incomes.reduce((total, current) => {
                                    return total + current.totalAmount;
                                 }, 0)
                              )}
                           </th>
                        </tr>
                     </tbody>
                  </table>
                  <div className="w-1/2">
                     <table className="dailyTable">
                        <thead>
                           <tr>
                              <th
                                 style={{
                                    minWidth: 120
                                 }}
                              >
                                 Төлбөрийн хэлбэр
                              </th>
                              <th
                                 style={{
                                    minWidth: 120
                                 }}
                              >
                                 Нийт төлбөр
                              </th>
                              <th
                                 style={{
                                    minWidth: 120
                                 }}
                              >
                                 Төлсөн дүн
                              </th>
                              <th
                                 style={{
                                    maxWidth: 120
                                 }}
                              >
                                 Үүнээс төлсөн урьдчилгаа дүн
                              </th>
                              <th
                                 style={{
                                    minWidth: 120
                                 }}
                              >
                                 И-баримтын дүн
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {paymentShape?.map((shape, index) => {
                              return (
                                 <tr key={index}>
                                    <td
                                       style={{
                                          textAlign: 'start'
                                       }}
                                    >
                                       {shape.name}
                                    </td>
                                    <td>
                                       {numberToCurrency(
                                          incomes.reduce((total, current) => {
                                             if (current.paymentTypeId === shape.id) {
                                                return total + current.plusAmount;
                                             }
                                             return total + 0;
                                          }, 0)
                                       )}
                                    </td>
                                    <td>
                                       {numberToCurrency(
                                          incomes.reduce((total, current) => {
                                             if (current.paymentTypeId === shape.id) {
                                                return total + current.paidAmount;
                                             }
                                             return total + 0;
                                          }, 0)
                                       )}
                                    </td>
                                    <td>
                                       {numberToCurrency(
                                          incomes.reduce((total, current) => {
                                             if (current.paymentTypeId === shape.id && current.status === 'pre') {
                                                return total + current.preAmount;
                                             }
                                             return total + 0;
                                          }, 0)
                                       )}
                                    </td>
                                    <td>
                                       {numberToCurrency(
                                          incomes.reduce((total, current) => {
                                             if (current.paymentTypeId === shape.id) {
                                                return total + current.totalAmount;
                                             }
                                             return total + 0;
                                          }, 0)
                                       )}
                                    </td>
                                 </tr>
                              );
                           })}
                           <tr>
                              <th
                                 style={{
                                    textAlign: 'start'
                                 }}
                              >
                                 Нийт
                              </th>
                              <th>
                                 {numberToCurrency(
                                    incomes.reduce((total, current) => {
                                       return total + current.plusAmount;
                                    }, 0)
                                 )}
                              </th>
                              <th>
                                 {numberToCurrency(
                                    incomes.reduce((total, current) => {
                                       return total + current.paidAmount;
                                    }, 0)
                                 )}
                              </th>
                              <th>
                                 {numberToCurrency(
                                    incomes.reduce((total, current) => {
                                       if (current.status === 'pre') {
                                          return total + current.preAmount;
                                       }
                                       return total + 0;
                                    }, 0)
                                 )}
                              </th>
                              <th>
                                 {numberToCurrency(
                                    incomes.reduce((total, current) => {
                                       return total + current.totalAmount;
                                    }, 0)
                                 )}
                              </th>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div className="text-center">
                     <br />
                     <p>
                        Тайлан гаргасан: Бүртгэлийн ажилтан ........................................./
                        {employee.lastName.substring(0, 1)}.{employee.firstName}/
                     </p>
                     <br />
                     <p>Тайланг хянасан: Нягтлан бодогч: ........................................./_______________/</p>
                  </div>
               </div>
            </div>
         </div>
         <Button type="primary" onClick={handlePrint}>
            Хэвлэх
         </Button>
      </>
   );
}
export default PrintIndex;
