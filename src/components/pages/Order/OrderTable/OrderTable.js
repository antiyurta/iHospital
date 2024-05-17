import React, { useState } from 'react';
import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Modal, Space, Table, message } from 'antd';
import OrderForm from './OrderForm';
import TextArea from 'antd/lib/input/TextArea';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import { ClockCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { NewInputNumber } from '../../../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import Appointment from '@Pages/Appointment/Index';
//api
import regularApi from '@ApiServices/regular.api';
//redux
import { selectCurrentEmrData, selectCurrentOtsData, setOtsData } from '@Features/emrReducer';

const checkNumber = (event) => {
   var charCode = event.charCode;
   if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      event.preventDefault();
   } else {
      return true;
   }
};

const urlMapPost = {
   1: 'service/xrayRequest',
   2: 'service/treatmentRequest'
};

const appointmentMap = {
   1: 3,
   2: 2
};

const requestTypeMap = (id, typeId) => ({
   1: {
      xrayId: id,
      xrayTypeId: typeId
   },
   2: {
      treatmentId: id,
      treatmentTypeId: typeId
   }
});

function OrderTable(props) {
   const { selectedPatient, setLoading, isLoading, usageType, services, form, remove, setTotal } = props;
   const dispatch = useDispatch();
   const incomeOtsData = useSelector(selectCurrentOtsData);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const [lastResponse, setLastResponse] = useState({});
   const [isOpenAppointment, setOpenAppointment] = useState(false);
   const [appointmentTypeId, setAppointmentTypeId] = useState();
   const [invoiceData, setInvoiceData] = useState({});
   const minRule = (index) => {
      const type = form.getFieldValue(['services', index, 'type']);
      const state = type === 8 || type === 2 ? true : false;
      return [
         {
            required: state,
            message: 'Заавал'
         },
         {
            validator: async (_, item) => {
               if (state && item < 1) {
                  return Promise.reject(new Error('Хамгийн багадаа 1'));
               }
            }
         }
      ];
   };
   const totalCalculator = (key, value, name) => {
      form.setFieldValue(['services', key, `${name}`], value);
      let repeatTime = form.getFieldValue(['services', key, 'repeatTime']);
      let dayCount = form.getFieldValue(['services', key, 'dayCount']);
      const oPrice = form.getFieldValue(['services', key, 'oPrice']);
      form.setFieldValue(['services', key, 'total'], repeatTime * dayCount);
      form.setFieldValue(['services', key, 'price'], repeatTime * dayCount * oPrice);
      const services = form.getFieldValue('services');
      var total = 0;
      services.map((service) => {
         if (service.price) {
            total += service.price;
         }
      });
      setTotal(total);
   };
   const isDisable = (index, name) => {
      if (name === 'repeatTime' || name === 'dayCount') {
         const type = form.getFieldValue(['services', index, 'type']);
         if (type === 8 || type === 2) {
            return false;
         } else {
            return true;
         }
      }
   };
   const createOtsRequest = async (service, formIndex) => {
      console.log(service);
      setLoading(true);
      return await regularApi
         .post('payment/invoice', {
            patientId: selectedPatient.id,
            amount: service.oPrice,
            type: service.type,
            typeId: service.typeId
         })
         .then(async ({ data: { response } }) => {
            try {
               form.setFieldValue(['services', formIndex, 'invoiceId'], response.id);
               setInvoiceData({
                  invoiceId: response.id,
                  type: service.type
               });
               setAppointmentTypeId(appointmentMap[service.type]);
               return await regularApi
                  .post(urlMapPost[service.type], {
                     ...requestTypeMap(service.id, service.typeId)[service.type],
                     patientId: selectedPatient.id,
                     name: response.name,
                     invoiceId: response.id,
                     isActive: false,
                     price: response.amount,
                     inpatientPrice: response.amount,
                     requestDate: new Date(),
                     usageType: usageType,
                     xrayProcess: 0,
                     scheduleId: null,
                     isPayment: false,
                     deviceType: service.deviceType,
                     startAt: null,
                     isInsurance: incomeEmrData.isInsurance
                  })
                  .then(({ data: { response } }) => response)
                  .catch(() => false);
            } catch (error) {
               message.error(error.message || 'An error occurred');
            }
         })
         .then((lastResponse) => {
            if (lastResponse) {
               form.setFieldValue(['services', formIndex, 'xrayRequestId'], lastResponse.id);
               setLastResponse({
                  responseId: lastResponse.id,
                  formIndex: formIndex
               });
               setOpenAppointment(true);
            }
         })
         .catch((error) => {
            console.log('error', error);
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const replaceOtsData = () => {
      dispatch(
         setOtsData({
            services: form.getFieldValue('services'),
            total: incomeOtsData.total
         })
      );
   };
   return (
      <>
         <Table
            rowKey="fieldKey"
            loading={isLoading}
            columns={[
               {
                  title: '№',
                  width: 50,
                  render: (_, _row, index) => index + 1
               },
               {
                  title: 'Cito',
                  width: 40,
                  dataIndex: 'isCito',
                  render: (_value, _row, index) => (
                     <OrderForm noStyle name={[index, 'isCito']} valuePropName="checked" editing={true}>
                        <Checkbox />
                     </OrderForm>
                  )
               },
               {
                  title: 'Нэр',
                  dataIndex: 'name',
                  render: (_value, _row, index) => (
                     <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) =>
                           prevValues?.services?.[index]?.isCito !== currentValues.services?.[index]?.isCito
                        }
                     >
                        {({ getFieldValue }) =>
                           getFieldValue(['services', index, 'isCito']) ? (
                              <OrderForm noStyle name={[index, 'name']} editing={false}>
                                 <Input />
                              </OrderForm>
                           ) : (
                              <Space>
                                 <Button
                                    icon={<ClockCircleOutlined />}
                                    disabled={getFieldValue(['services', index, 'responseId']) ? true : false}
                                    onClick={() => {
                                       createOtsRequest(getFieldValue(['services', index]), index);
                                    }}
                                 />
                                 <Form.Item name={[index, 'invoiceId']}>
                                    <InputNumber />
                                 </Form.Item>
                                 <Form.Item name={[index, 'xrayRequestId']}>
                                    <InputNumber />
                                 </Form.Item>
                                 <Form.Item name={[index, 'slotId']}>
                                    <InputNumber />
                                 </Form.Item>
                                 <OrderForm noStyle name={[index, 'name']} editing={false}>
                                    <Input />
                                 </OrderForm>
                              </Space>
                           )
                        }
                     </Form.Item>
                  )
               },
               {
                  title: 'Цаг',
                  dataIndex: 'orderTime',
                  render: (_value, _row, index) => (
                     <OrderForm name={[index, 'orderTime']} editing={false}>
                        <TextArea />
                     </OrderForm>
                  )
               },
               {
                  title: 'Хэлбэр',
                  dataIndex: 'medicineType',
                  render: (_value, _row, index) => (
                     <OrderForm name={[index, 'medicineType']} editing={false}>
                        <TextArea />
                     </OrderForm>
                  )
               },
               {
                  title: 'Тун',
                  dataIndex: 'dose',
                  render: (_value, _row, index) => (
                     <OrderForm
                        name={[index, 'dose']}
                        editing={form.getFieldValue(['services', index, 'type']) === 8 ? true : false}
                     >
                        <Input />
                     </OrderForm>
                  )
               },
               {
                  title: 'Сорьц',
                  dataIndex: 'specimen',
                  render: (_value, _row, index) => (
                     <OrderForm
                        name={[index, 'specimen']}
                        editing={form.getFieldValue(['services', index, 'type']) === 0 ? true : false}
                     >
                        <TextArea />
                     </OrderForm>
                  )
               },
               {
                  title: 'Тайлбар',
                  dataIndex: 'description',
                  render: (_value, _row, index) => (
                     <OrderForm name={[index, 'description']} editing={true}>
                        <TextArea />
                     </OrderForm>
                  )
               },
               {
                  title: 'Өдөрт хэдэн удаа',
                  width: 130,
                  dataIndex: 'repeatTime',
                  render: (_value, _row, index) => (
                     <OrderForm
                        name={[index, 'repeatTime']}
                        rules={minRule(index, 'repeatTime')}
                        editing={!isDisable(index, 'repeatTime')}
                     >
                        <NewInputNumber
                           onChange={(e) => totalCalculator(index, e, 'repeatTime')}
                           defualtvalue={1}
                           controls={false}
                           min={1}
                           onKeyPress={checkNumber}
                        />
                     </OrderForm>
                  )
               },
               {
                  title: 'Хэдэн өдөр',
                  width: 130,
                  dataIndex: 'dayCount',
                  render: (_value, _row, index) => (
                     <OrderForm
                        name={[index, 'dayCount']}
                        rules={minRule(index, 'dayCount')}
                        editing={!isDisable(index, 'dayCount')}
                     >
                        <NewInputNumber
                           onChange={(e) => totalCalculator(index, e, 'dayCount')}
                           defualtvalue={1}
                           controls={false}
                           min={1}
                           onKeyPress={checkNumber}
                        />
                     </OrderForm>
                  )
               },
               {
                  title: 'Нийт',
                  width: 60,
                  dataIndex: 'total',
                  render: (_value, _row, index) => (
                     <OrderForm noStyle name={[index, 'total']} editing={false}>
                        <InputNumber onKeyPress={checkNumber} />
                     </OrderForm>
                  )
               },
               {
                  title: 'Эхлэх өдөр',
                  dataIndex: 'startAt',
                  render: (_value, _row, index) => {
                     const type = form.getFieldValue(['services', index, 'type']);
                     if (type === 2 || type === 8) {
                        return (
                           <OrderForm name={[index, 'startAt']} editing={true}>
                              <DatePicker
                                 showTime={{
                                    format: 'HH:mm'
                                 }}
                                 locale={mnMN}
                                 placeholder="Өдөр сонгох"
                              />
                           </OrderForm>
                        );
                     }
                     return;
                  }
               },
               {
                  title: 'Үнэ',
                  width: 200,
                  dataIndex: 'price',
                  render: (_value, _row, index) => (
                     <OrderForm noStyle name={[index, 'price']} isNumber={true} editing={false}>
                        <InputNumber onKeyPress={checkNumber} />
                     </OrderForm>
                  )
               },
               {
                  title: '',
                  width: 40,
                  render: (_value, _row, index) => (
                     <Button onClick={() => remove(index)} icon={<MinusCircleOutlined style={{ color: 'red' }} />} />
                  )
               }
            ]}
            dataSource={services}
            pagination={false}
         />
         <Modal
            width={'85%'}
            open={isOpenAppointment}
            onCancel={() => {
               setOpenAppointment(false);
            }}
         >
            <div className="pt-10">
               <Appointment
                  selectedPatient={selectedPatient}
                  type={appointmentTypeId}
                  invoiceData={invoiceData}
                  handleClick={(state, _id, info) => {
                     if (state) {
                        form.setFieldsValue({
                           services: {
                              [`${lastResponse.formIndex}`]: {
                                 slotId: info.slotId,
                                 orderTime: `${info?.time?.start?.substr(0, 5)}->${info?.time?.end?.substr(0, 5)}`
                              }
                           }
                        });
                        replaceOtsData();
                        setOpenAppointment(false);
                     }
                  }}
                  isExtraGrud={{
                     isCreate: true,
                     isChange: true,
                     isDelete: true
                  }}
               />
            </div>
         </Modal>
      </>
   );
}
export default OrderTable;
