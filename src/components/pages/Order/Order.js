import {
   Button,
   Checkbox,
   DatePicker,
   Form,
   Input,
   InputNumber,
   Modal,
   Select
} from 'antd';
import RecentRecipe from './RecentRecipe';
import SetOrder from './SetOrder';
import Medicine from './Medicine';
import Examination from './Examination';
import Xray from './Xray';
import Treatment from './Treatment';
import Surgery from './Surgery';
import Endo from './Endo';
import Package from './Package';
import InpatientRequest from './InpatientRequest';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { MinusCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import {
   DefaultPost,
   Get,
   numberToCurrency,
   openNofi,
   Post
} from '../../comman';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import DoctorInspection from './DoctorInspection';
import Reinspection from './Reinspection';
import mnMN from 'antd/es/calendar/locale/mn_MN';
function Order({
   isPackage,
   selectedPatient,
   isDoctor,
   usageType,
   categories,
   save
}) {
   const token = useSelector(selectCurrentToken);
   const IncomePatientId = useLocation()?.state?.patientId;
   const IncomeCabinetId = useLocation()?.state?.cabinetId;
   const IncomeAppointmentId = useLocation()?.state?.appointmentId;
   const config = {
      headers: {},
      params: {}
   };
   const [total, setTotal] = useState(Number);

   const handleclick = async (value) => {
      if (isPackage) {
         var services = [];
         value.map((item) => {
            const service = {};
            service.serviceId = item.id;
            service.serviceName = item.name;
            service.serviceType = item.type;
            services.push(service);
         });
         var datas = await orderForm.getFieldsValue();
         var data = [];
         if (datas.services === undefined) {
            data = services;
         } else {
            data = datas.services.concat(services);
         }
         orderForm.setFieldsValue({ services: data });
      } else {
         var services = [];
         var subTotal = 0;
         value.map((item) => {
            const service = {};
            service.id = item.id;
            service.name = item.name;
            if (usageType === 'IN') {
               service.price = item.inpatientPrice;
               service.oPrice = item.inpatientPrice;
            } else {
               service.price = item.price;
               service.oPrice = item.price;
            }
            service.type = item.types?.type;
            if (item.type === 8) {
               service.id = item.id;
               service.name = item.name;
               service.dose = '';
               service.price = 0;
               service.oPrice = item.price;
               service.type = item.type;
               service.medicineType = null;
               service.description = '';
               service.dayCount = 1;
               service.total = 0;
            } else if (item.type === 2) {
               service.name = item.name;
               service.qty = item.qty ? item.qty : 1;
               if (service.qty != 1) {
                  service.price = item.calCprice;
                  service.oPrice = item.price;
               }
            } else if (item.type === 7) {
               service.type = item.type;
               service.services = item.services;
            }
            service.isCito = false;
            if (item.type === 1) {
               service.deviceType = item.device?.deviceType;
               service.deviceId = item.deviceId;
               service.typeId = item.xrayTypeId;
            } else if (item.type === 0) {
               service.typeId = item.examinationTypeId;
               service.requestDate = new Date();
            } else {
               service.requestDate = new Date();
            }
            service.requestDate = moment(new Date()).format('YYYY-MM-DD');
            service.usageType = usageType;
            subTotal += service.price;
            services.push(service);
         });
         var datas = await orderForm.getFieldsValue();
         var data = [];
         if (datas.services === undefined) {
            data = services;
         } else {
            data = datas.services.concat(services);
         }
         orderForm.setFieldsValue({ services: data });
         setTotal(total + subTotal);
      }
   };
   const removeOrder = (name) => {
      const orders = orderForm.getFieldsValue('services');
      var arr = [...orders.services];
      arr.splice(name, 1);
      setTotal(total - orders.services[name].price);
      orderForm.setFieldValue('services', arr);
   };

   const [showMedicine, setShowMedicine] = useState(false);
   const [showExamination, setShowExamination] = useState(false);
   const [showTreatment, setShowTreatment] = useState(false);
   const [showXray, setShowXray] = useState(false);
   const [showInpatient, setShowInpatient] = useState(false);
   const [showPackage, setShowPackage] = useState(false);
   //
   const [showDoctorInspection, setShowDoctorInspection] = useState(false);
   const [showReinspection, setShowReinspection] = useState(false);
   const [inPatientId, setInPatientId] = useState(Number);
   //
   const [orderForm] = Form.useForm();
   const checkNumber = (event) => {
      var charCode = event.charCode;
      if (
         charCode > 31 &&
         (charCode < 48 || charCode > 57) &&
         charCode !== 46
      ) {
         event.preventDefault();
      } else {
         return true;
      }
   };
   const totalCalculator = (value, key) => {
      const repeatTime = orderForm.getFieldValue([
         'services',
         key,
         'repeatTime'
      ]);
      const oPrice = orderForm.getFieldValue(['services', key, 'oPrice']);
      orderForm.setFieldValue(['services', key, 'total'], repeatTime * value);
      orderForm.setFieldValue(
         ['services', key, 'price'],
         repeatTime * value * oPrice
      );
      const services = orderForm.getFieldValue('services');
      var total = 0;
      services.map((service) => {
         total += service.price;
      });
      setTotal(total);
   };
   const calc = (e, key) => {
      const oPrice = orderForm.getFieldValue(['services', key, 'oPrice']);
      orderForm.setFieldValue(['services', key, 'qty'], e);
      orderForm.setFieldValue(['services', key, 'price'], e * oPrice);
   };
   const isClose = (name, state) => {
      if (name === 'inpatient') {
         setShowInpatient(state);
      } else if (name === 'medicine') {
         setShowMedicine(state);
      } else if (name === 'examination') {
         setShowExamination(state);
      } else if (name === 'treatment') {
         setShowTreatment(state);
      } else if (name === 'xray') {
         setShowXray(state);
      } else if (name === 'package') {
         setShowPackage(state);
      } else if (name === 'doctorInspection') {
         setShowDoctorInspection(state);
      } else if (name === 'Reinspection') {
         setShowReinspection(state);
      }
   };
   const inpatientRequestClick = async (values) => {
      values.patientId = IncomePatientId;
      values.cabinetId = IncomeCabinetId;
      values.appointmentId = IncomeAppointmentId;
      const response = await DefaultPost(
         'service/inpatient-request',
         token,
         config,
         values
      );
      if (response) {
         setInPatientId(response.id);
         setShowInpatient(false);
      }
   };
   const newModalCategory = (category) => {
      if (selectedPatient?.id || isPackage) {
         if (category.name === 'Examination') {
            setShowExamination(true);
         } else if (category.name === 'Xray') {
            setShowXray(true);
         } else if (category.name === 'Medicine') {
            setShowMedicine(true);
         } else if (category.name === 'SetOrder') {
            // setModalBody(<SetOrder handleclick={handleclick} />);
            // setModalTitle('СетОрдер сонгох');
         } else if (category.name === 'RecentRecipe') {
            // setModalBody(<RecentRecipe handleclick={handleclick} />);
            // setModalTitle('Өмнөх жор сонгох');
         } else if (category.name === 'Treatment') {
            setShowTreatment(true);
         } else if (category.name === 'Surgery') {
            // setModalBody(<Surgery handleclick={handleclick} />);
            // setModalTitle('Мэс, засал сонгох');
         } else if (category.name === 'Endo') {
            // setModalBody(<Endo handleclick={handleclick} />);
            // setModalTitle('Дуран сонгох');
         } else if (category.name === 'Package') {
            setShowPackage(true);
         } else if (category.name === 'Inpatient') {
            setShowInpatient(true);
         } else if (category.name === 'doctorInspection') {
            setShowDoctorInspection(true);
         } else if (category.name === 'Reinspection') {
            setShowReinspection(true);
         }
      } else {
         openNofi('error', 'Өвчтөн', 'Өвчтөн сонгоно уу');
      }
   };
   useEffect(() => {
      orderForm.resetFields();
      setTotal(0);
   }, [selectedPatient]);
   useEffect(() => {
      console.log('asdasdas');
   }, [orderForm.getFieldValue('services')]);
   return (
      <>
         {showExamination && (
            <Examination
               isOpen={showExamination}
               isClose={isClose}
               handleclick={handleclick}
            />
         )}
         {showXray && (
            <Xray
               isOpen={showXray}
               isClose={isClose}
               handleclick={handleclick}
            />
         )}
         {showTreatment && (
            <Treatment
               isOpen={showTreatment}
               isClose={isClose}
               handleclick={handleclick}
            />
         )}
         {showMedicine && (
            <Medicine
               isOpen={showMedicine}
               isClose={isClose}
               handleclick={handleclick}
            />
         )}
         {showPackage && (
            <Package
               isOpen={showPackage}
               isClose={isClose}
               handleclick={handleclick}
            />
         )}
         {showInpatient && (
            <InpatientRequest
               isOpen={showInpatient}
               isClose={isClose}
               handleClick={inpatientRequestClick}
            />
         )}
         {showDoctorInspection && (
            <DoctorInspection
               isOpen={showDoctorInspection}
               isClose={isClose}
               handleclick={handleclick}
            />
         )}
         {showReinspection && (
            <Reinspection
               isOpen={showReinspection}
               isClose={isClose}
               selectedPatient={selectedPatient}
            />
         )}
         <div className="flex flex-wrap">
            <div className="w-full pb-4">
               {categories.map((category, index) => {
                  return (
                     <Button
                        style={{ marginRight: 1, marginLeft: 1 }}
                        type="primary"
                        key={index}
                        onClick={() => newModalCategory(category)}
                     >
                        {category.label}
                     </Button>
                  );
               })}
               <Button
                  className="float-right"
                  type="primary"
                  onClick={() =>
                     orderForm.validateFields().then((values) => {
                        save(values.services);
                        orderForm.resetFields();
                     })
                  }
               >
                  {isPackage ? 'Багц хадгалах' : 'OCS Хадгалах'}
               </Button>
            </div>
            <div className="w-full">
               <Form form={orderForm}>
                  <Form.List name="services">
                     {(fields, { add, remove }) => (
                        <>
                           <div
                              className="table-responsive pb-4"
                              id="style-8"
                              style={{ maxHeight: '420px' }}
                           >
                              <Table
                                 className="ant-border-space"
                                 style={{ width: '100%' }}
                                 bordered
                              >
                                 <thead className="ant-table-thead bg-slate-200">
                                    {isPackage ? (
                                       <tr>
                                          <th>Нэр</th>
                                          <th></th>
                                       </tr>
                                    ) : (
                                       <tr>
                                          <th className="font-bold text-sm align-middle">
                                             cito
                                          </th>
                                          <th className="font-bold text-sm align-middle">
                                             Нэр
                                          </th>
                                          <th className="font-bold text-sm align-middle">
                                             Хэлбэр
                                          </th>
                                          <th className="font-bold text-sm align-middle">
                                             Тун
                                          </th>
                                          <th className="font-bold text-sm align-middle">
                                             Сорьц
                                          </th>
                                          <th className="font-bold text-sm align-middle">
                                             Тайлбар
                                          </th>
                                          <th className="font-bold text-sm align-middle">
                                             Өдөрт хэдэн удаа
                                          </th>
                                          <th className="font-bold text-sm align-middle w-5">
                                             Хэдэн өдөр
                                          </th>
                                          <th className="font-bold text-sm align-middle">
                                             Нийт хэмжээ
                                          </th>
                                          {usageType === 'IN' && (
                                             <th className="font-bold text-sm align-middle">
                                                Хэрэгжүүлэх өдөр
                                             </th>
                                          )}
                                          <th className="font-bold text-sm align-middle">
                                             Үнэ
                                          </th>
                                          <th className="font-bold text-sm align-middle">
                                             Үйлдэл
                                          </th>
                                       </tr>
                                    )}
                                 </thead>
                                 <tbody className="ant-table-tbody p-0">
                                    {fields?.map(({ key, name }) => (
                                       <tr key={key}>
                                          {isPackage ? (
                                             <>
                                                <td>
                                                   {orderForm.getFieldValue([
                                                      'services',
                                                      name,
                                                      'serviceName'
                                                   ])}
                                                </td>
                                                <td>
                                                   <MinusCircleOutlined
                                                      style={{ color: 'red' }}
                                                      onClick={() =>
                                                         remove(name)
                                                      }
                                                   />
                                                </td>
                                             </>
                                          ) : (
                                             <>
                                                <td>
                                                   <Form.Item
                                                      name={[name, 'isCito']}
                                                      valuePropName="checked"
                                                      className="mb-0 hover:bg-transparent"
                                                   >
                                                      <Checkbox className="bg-transparent align-middle items-center" />
                                                   </Form.Item>
                                                </td>
                                                <td className="whitespace-pre-line">
                                                   {orderForm.getFieldValue([
                                                      'services',
                                                      name,
                                                      'name'
                                                   ])}
                                                </td>
                                                <td>
                                                   {orderForm.getFieldValue([
                                                      'services',
                                                      name,
                                                      'medicineType'
                                                   ])}
                                                </td>
                                                <td>
                                                   <Form.Item
                                                      name={[name, 'dose']}
                                                      className="mb-0"
                                                   >
                                                      <Input
                                                         disabled={
                                                            orderForm.getFieldValue(
                                                               [
                                                                  'services',
                                                                  name,
                                                                  'type'
                                                               ]
                                                            ) === 8
                                                               ? false
                                                               : true
                                                         }
                                                      />
                                                   </Form.Item>
                                                </td>
                                                <td>
                                                   <Form.Item
                                                      name={[name, 'specimen']}
                                                      className="mb-0"
                                                   >
                                                      <Input
                                                         disabled={
                                                            orderForm.getFieldValue(
                                                               [
                                                                  'services',
                                                                  name,
                                                                  'type'
                                                               ]
                                                            ) === 0
                                                               ? false
                                                               : true
                                                         }
                                                      />
                                                   </Form.Item>
                                                </td>
                                                <td>
                                                   <Form.Item
                                                      name={[
                                                         name,
                                                         'description'
                                                      ]}
                                                      className="mb-0"
                                                   >
                                                      <Input
                                                      // disabled={
                                                      //    orderForm.getFieldValue(
                                                      //       [
                                                      //          'services',
                                                      //          name,
                                                      //          'type'
                                                      //       ]
                                                      //    ) === 8
                                                      //       ? false
                                                      //       : true
                                                      // }
                                                      />
                                                   </Form.Item>
                                                </td>
                                                <td>
                                                   <Form.Item
                                                      name={[
                                                         name,
                                                         'repeatTime'
                                                      ]}
                                                      className="mb-0"
                                                   >
                                                      <InputNumber
                                                         onKeyPress={
                                                            checkNumber
                                                         }
                                                         disabled={
                                                            orderForm.getFieldValue(
                                                               [
                                                                  'services',
                                                                  name,
                                                                  'type'
                                                               ]
                                                            ) === 8 ||
                                                            orderForm.getFieldValue(
                                                               [
                                                                  'services',
                                                                  name,
                                                                  'type'
                                                               ]
                                                            ) === 2
                                                               ? false
                                                               : true
                                                         }
                                                      />
                                                   </Form.Item>
                                                </td>
                                                <td>
                                                   <Form.Item
                                                      name={[name, 'dayCount']}
                                                      className="mb-0"
                                                   >
                                                      <InputNumber
                                                         onChange={(e) =>
                                                            totalCalculator(
                                                               e,
                                                               name
                                                            )
                                                         }
                                                         disabled={
                                                            orderForm.getFieldValue(
                                                               [
                                                                  'services',
                                                                  name,
                                                                  'type'
                                                               ]
                                                            ) === 8 ||
                                                            orderForm.getFieldValue(
                                                               [
                                                                  'services',
                                                                  name,
                                                                  'type'
                                                               ]
                                                            ) === 2
                                                               ? false
                                                               : true
                                                         }
                                                      />
                                                   </Form.Item>
                                                </td>
                                                <td>
                                                   <Form.Item
                                                      name={[name, 'total']}
                                                      className="mb-0"
                                                   >
                                                      <InputNumber
                                                         onChange={(e) =>
                                                            calc(e, name)
                                                         }
                                                         disabled={
                                                            orderForm.getFieldValue(
                                                               [
                                                                  'services',
                                                                  name,
                                                                  'type'
                                                               ]
                                                            ) === 8 ||
                                                            orderForm.getFieldValue(
                                                               [
                                                                  'services',
                                                                  name,
                                                                  'type'
                                                               ]
                                                            ) === 2
                                                               ? false
                                                               : true
                                                         }
                                                      />
                                                   </Form.Item>
                                                </td>
                                                {usageType === 'IN' && (
                                                   <td>
                                                      <Form.Item
                                                         name={[
                                                            name,
                                                            'startAt'
                                                         ]}
                                                         className="mb-0"
                                                      >
                                                         <DatePicker
                                                            showTime={{
                                                               format: 'HH:mm'
                                                            }}
                                                            locale={mnMN}
                                                            placeholder="Өдөр сонгох"
                                                         />
                                                      </Form.Item>
                                                   </td>
                                                )}
                                                <td>
                                                   <Form.Item
                                                      shouldUpdate
                                                      className="mb-0"
                                                   >
                                                      {() => {
                                                         const price =
                                                            orderForm.getFieldValue(
                                                               [
                                                                  'services',
                                                                  name,
                                                                  'price'
                                                               ]
                                                            );
                                                         return numberToCurrency(
                                                            price
                                                         );
                                                      }}
                                                   </Form.Item>
                                                </td>
                                                <td>
                                                   <MinusCircleOutlined
                                                      style={{ color: 'red' }}
                                                      onClick={() =>
                                                         removeOrder(name)
                                                      }
                                                   />
                                                </td>
                                             </>
                                          )}
                                       </tr>
                                    ))}
                                 </tbody>
                              </Table>
                           </div>
                        </>
                     )}
                  </Form.List>
               </Form>
               <div>
                  <p className="float-left font-extrabold">Нийт Үнэ</p>
                  <p className="float-right font-extrabold">
                     {total.toLocaleString('mn-MN', {
                        style: 'currency',
                        currency: 'MNT'
                     })}
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}
export default Order;
