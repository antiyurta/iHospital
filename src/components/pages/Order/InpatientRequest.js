import { Button, Form, InputNumber, Modal, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import jwtInterceopter from '../../jwtInterceopter';

import inpatientIcon from './NewOrder/inpatientIcon.svg';
import { openNofi } from '../../common';

function InpatientRequest({ selectedPatient, handleClick }) {
   const [InpatientRequestForm] = Form.useForm();
   const [isDuration, setIsDuration] = useState(true);
   const [doctors, setDoctors] = useState([]);
   const [structures, setStructures] = useState([]);
   const [isOpenModal, setIsOpenModal] = useState(false);

   const checkDuration = (e) => {
      if (e === 'PLAN') {
         setIsDuration(false);
      } else {
         setIsDuration(true);
      }
   };
   const getStructures = async () => {
      await jwtInterceopter
         .get('organization/structure', {
            params: {
               type: 2
            }
         })
         .then((response) => {
            setStructures(response.data.response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const getDoctor = async (value) => {
      await jwtInterceopter
         .get('organization/employee', {
            params: {
               depId: value
            }
         })
         .then((response) => {
            setDoctors(response.data.response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const getConfirm = () => {
      Modal.confirm({
         title: 'Хэвтүүлэх хүсэлт',
         content: (
            <div>
               <p>Та хэвтүүлэх хүсэлт илгээх гэж байна</p>
            </div>
         ),
         okText: 'Захиалах',
         async onOk() {
            handleClick({
               patientId: selectedPatient.id
            });
         }
      });
   };

   useEffect(() => {
      // getStructures();
   }, []);

   return (
      <>
         <button
            className="yellow-order"
            onClick={() => {
               if (!selectedPatient.hasOwnProperty('id')) {
                  openNofi('error', 'Алдаа', 'Өвчтөн сонгогдоогүй байна');
               } else {
                  getConfirm();
               }
               // setIsOpenModal(true);
            }}
         >
            <img src={inpatientIcon} />
            Хэвтүүлэх
         </button>

         {/* <Modal
            title="Хэвтүүлэх хүсэлт"
            open={isOpenModal}
            onCancel={() => {
               setIsOpenModal(false);
            }}
            okText="Захиалах"
            cancelText="Болих"
            onOk={() => {
               InpatientRequestForm.validateFields().then((values) => {
                  handleClick(values);
               });
               setIsOpenModal(false);
            }}
         >
            <Form form={InpatientRequestForm} wrapperCol={{ span: 15 }} labelCol={{ span: 9 }}>
               <div className="flex flex-wrap">
                  <div className="w-full">
                     <Form.Item
                        label="Тасаг"
                        name="inDepartmentId"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <Select
                           allowClear
                           onChange={getDoctor}
                           placeholder="Тасаг сонгох"
                           options={structures.map((structure) => ({ value: structure.id, label: structure.name }))}
                        />
                     </Form.Item>
                     <Form.Item
                        label="Эмч"
                        name="doctorId"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <Select
                           allowClear
                           placeholder="Эмч сонгох"
                           options={doctors.map((doctor) => ({ value: doctor.id, label: doctor.firstName }))}
                        />
                     </Form.Item>
                     <Form.Item
                        label="Хүндийн зэрэг"
                        name="severity"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <Select
                           options={[
                              { value: 0, label: 'Маш хүнд' },
                              { value: 1, label: 'Хүнд' },
                              { value: 2, label: 'Хүндэвтэр' },
                              { value: 3, label: 'Дунд' },
                              { value: 4, label: 'Хөнгөн' }
                           ]}
                        ></Select>
                     </Form.Item>
                  </div>

                  <div className="w-full">
                     <Form.Item
                        label="Хэвтэнгийн төлөв"
                        name="InType"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <Select
                           onChange={(e) => checkDuration(e)}
                           options={[
                              { value: 'EMERGENCY', label: 'Яаралтай' },
                              { value: 'PLAN', label: 'Төлөвлөгөөт' }
                           ]}
                        />
                     </Form.Item>
                  </div>
                  <div className="w-full">
                     <Form.Item
                        label="Хэвтэх хоног"
                        name="duration"
                        rules={[
                           {
                              required: !isDuration,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <InputNumber disabled={isDuration} />
                     </Form.Item>
                  </div>
               </div>
            </Form>
         </Modal> */}
      </>
   );
}
export default InpatientRequest;
