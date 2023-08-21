import { Button, Form, InputNumber, Modal, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentInsurance } from '../../../features/authReducer';
import jwtInterceopter from '../../jwtInterceopter';
const { Option, OptGroup } = Select;

function InpatientRequest({ handleClick }) {
   const isInsurance = useSelector(selectCurrentInsurance);
   const [InpatientRequestForm] = Form.useForm();
   const [isDuration, setIsDuration] = useState(true);
   const [doctors, setDoctors] = useState([]);
   const [structures, setStructures] = useState([]);
   const [selectedDep, setSelectedDep] = useState();
   const [selectedDoctor, setSelectedDoctor] = useState();
   const [insuranceServices, setInsurranceServices] = useState([]);
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
      setSelectedDep(structures.filter((e) => e['id'] === value));
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
   const selectDoctor = (value) => {
      const selectedDoctor = doctors.filter((e) => e.id === value);
      setSelectedDoctor(selectedDoctor[0]);
   };
   const getInsuranceServices = async () => {
      await jwtInterceopter
         .get('insurance/hics-service-group', {
            params: {
               usageType: 'IN'
            }
         })
         .then((response) => {
            setInsurranceServices(response.data.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   useEffect(() => {
      getStructures();
      getInsuranceServices();
   }, []);

   return (
      <>
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
               // setSelectedExaminationId(null);
               // setSelectedExaminations([]);
            }}
         >
            Хэвтүүлэх
         </Button>
         <Modal
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
                        <Select allowClear onChange={getDoctor} placeholder="Тасаг сонгох">
                           {structures.map((structure, index) => {
                              return (
                                 <Option key={index} value={structure.id}>
                                    {structure.name}
                                 </Option>
                              );
                           })}
                        </Select>
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
                        <Select allowClear onChange={selectDoctor} placeholder="Эмч сонгох">
                           {doctors.map((doctor, index) => {
                              return (
                                 <Option key={index} value={doctor.id}>
                                    {doctor.firstName}
                                 </Option>
                              );
                           })}
                        </Select>
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
                        <Select>
                           <Option value={0}>Маш хүнд</Option>
                           <Option value={1}>Хүнд</Option>
                           <Option value={2}>Хүндэвтэр</Option>
                           <Option value={3}>Дунд</Option>
                           <Option value={4}>Хөнгөн</Option>
                        </Select>
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
                        <Select onChange={(e) => checkDuration(e)}>
                           <Option value="EMERGENCY">Яаралтай</Option>
                           <Option value="PLAN">Төлөвлөгөөт</Option>
                        </Select>
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
                  {isInsurance && (
                     <div className="w-full">
                        <Form.Item
                           label="Эмнэлэгт хэвтэх шалтгаан"
                           name="insuranceServiceId"
                           rules={[
                              {
                                 required: true,
                                 message: 'Заавал'
                              }
                           ]}
                        >
                           <Select>
                              {insuranceServices?.map((service, index) => {
                                 return (
                                    <OptGroup key={index} label={service.name}>
                                       {service?.hicsServices?.map((item, idx) => {
                                          return (
                                             <Option key={`${index - idx}`} value={item.id}>
                                                {item.name}
                                             </Option>
                                          );
                                       })}
                                    </OptGroup>
                                 );
                              })}
                           </Select>
                        </Form.Item>
                     </div>
                  )}
               </div>
            </Form>
         </Modal>
      </>
   );
}
export default InpatientRequest;
