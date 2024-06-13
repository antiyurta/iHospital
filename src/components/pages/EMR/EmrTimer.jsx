import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ClockCircleOutlined, SwapOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal, Radio, Select, message } from 'antd';
//redux
import {
   selectCurrentAddHics,
   selectCurrentEmrData,
   selectCurrentHicsSeal,
   // setAddHics,
   // setEmrData,
   setHicsSeal
} from '@Features/emrReducer';
import { selectPatient } from '@Features/patientReducer';
import { selectCurrentInsurance, selectCurrentUserId } from '@Features/authReducer';
//common
import { openNofi } from '@Comman/common';
//api
import inspectionNoteApi from '@ApiServices/emr/inspectionNote';
import insuranceApi from '@ApiServices/healt-insurance/insurance';
import healtInsurance from '@ApiServices/healt-insurance/healtInsurance';
import appointmentApi from '@ApiServices/appointment/api-appointment-service';
//comp
import Clock from './Clock';
import Finger from '@Comman/Finger/Finger';
import { getPersonalInfo } from '@Utils/config/insurance';

const EmrTimer = ({ startDate, endDate, inspection }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const location = useLocation();
   const [form] = Form.useForm();
   // const [swapFormHics] = Form.useForm();
   const [isDisable, setDisable] = useState(true);
   ///
   const hicsSeal = useSelector(selectCurrentHicsSeal);
   const addHics = useSelector(selectCurrentAddHics);
   const currentPatient = useSelector(selectPatient);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const { inspectionNoteId, appointmentId, appointmentType } = incomeEmrData;
   const userId = useSelector(selectCurrentUserId);
   const isInsurance = useSelector(selectCurrentInsurance);
   const [isOpenModal, setIsOpenModal] = useState(false);
   // tuslamj uilcihge solih
   // const [isOpenModalSwap, setOpenModalSwap] = useState(false);
   // const [hicsSupports, setHicsSupports] = useState([]);

   // uzlegin temdeglel tatah
   const getInspectionNote = async () => {
      if (inspectionNoteId) {
         return await inspectionNoteApi.getById(inspectionNoteId).then(({ data: { response } }) => {
            if (response.inspection) return JSON.parse(response.inspection)?.['Бодит үзлэг'];
            return undefined;
         });
      }
      return 'TEST';
   };
   // uzleg duusgah
   const endInspection = async (values) => {
      const isEndEMD = values.conclusion?.includes('confirmed');
      if (isInsurance) {
         if (hicsSeal.process === 0) {
            if (hicsSeal.hicsServiceId === 20120 && addHics?.checkupId > 1) {
               await addHicsService(hicsSeal.hicsSealCode);
            } else {
               const data = {
                  patientRegno: currentPatient.registerNumber,
                  patientFingerprint: values.finger,
                  patientFirstname: currentPatient.firstName,
                  patientLastname: currentPatient.lastName,
                  startDate: hicsSeal.startAt,
                  endDate: new Date(),
                  hicsServiceId: hicsSeal.hicsServiceId,
                  parentServiceNumber: null,
                  doctorServiceNumber: hicsSeal.doctorServiceNumber,
                  sent13RequestNo: hicsSeal.sent13RequestNo,
                  departNo: hicsSeal.department?.id,
                  departName: hicsSeal.department?.name,
                  isForeign: 0,
                  freeTypeId: 0,
                  historyCode: hicsSeal.patientHistoryCode,
                  phoneNo: currentPatient.phoneNo,
                  bloodType: hicsSeal.bloodType,
                  diagnosis: {
                     ...(hicsSeal.diagnosis || addHics.diagnosis),
                     description: hicsSeal.description || (await getInspectionNote())
                  },
                  isLiver: currentPatient.isLiver ? 1 : 2,
                  startCode: hicsSeal.hicsStartCode,
                  xypResponse: {
                     requestId: currentPatient.requestId,
                     resultMsg: currentPatient.resultMsg
                  },
                  personalInfo: getPersonalInfo(currentPatient),
                  employment: {
                     ...hicsSeal.employment,
                     employmentId: currentPatient.employmentId || '1',
                     employmentName: currentPatient.employmentName || '- Цалин хөлстэй ажиллагч',
                     isEmployment: currentPatient.isEmployment,
                     emplessDescriptionId: currentPatient.emplessDescriptionId,
                     emplessDescription: currentPatient.emplessDescription
                  },
                  healthInfo: hicsSeal.healthInfo,
                  paymentType: isInsurance ? 0 : 1
               };
               await healtInsurance.saveHics(data).then(async ({ data }) => {
                  if (data.code === 200) {
                     openNofi('success', 'Амжилттай', data.description);
                     await insuranceApi
                        .requestHicsSeal(hicsSeal.id, {
                           ...hicsSeal,
                           hicsSealCode: data.result.serviceNumber,
                           process: 1
                        })
                        .then(async ({ data: { response: ourHicsResponse } }) => {
                           dispatch(setHicsSeal(ourHicsResponse));
                           if (ourHicsResponse.hicsServiceId === 20120) {
                              await addHicsService(ourHicsResponse.hicsSealCode);
                           }
                        });
                  } else if (data.code === 400) {
                     openNofi('error', 'Амжилтгүй', data.description);
                  }
               });
            }
         }
         if (isEndEMD) {
            const data = await insuranceApi.requestHicsSealSent(hicsSeal.id, {
               patientFingerprint: values?.finger,
               addHicsId: addHics?.id
            });
            console.log('==============>', data);
         }
      } else {
         await patchAppointment({
            slotId: appointmentType === 0 ? location?.state?.slotId : null,
            endDate: new Date(),
            doctorId: appointmentType === 0 ? null : userId,
            status: values?.conclusion?.includes('confirmed') ? 5 : 4
         }).then(({ data: { success } }) => {
            if (success) {
               setIsOpenModal(false);
               openNofi('success', 'Амжиллтай', 'Үзлэг амжиллтай хадгалагдлаа ');
               navigate(-1);
            }
         });
      }
   };

   const addHicsService = async (hicsSealCode) => {
      await healtInsurance
         .postAddHicsService({
            regNo: currentPatient.registerNumber,
            firstName: currentPatient.firstName,
            lastName: currentPatient.lastName,
            serviceList: [
               {
                  checkupId: addHics.checkupId,
                  startDate: addHics.startDate,
                  endDate: new Date(),
                  parentServiceNumber: hicsSealCode,
                  startCode: addHics.startCode,
                  departNo: hicsSeal.departmentId.toString(),
                  departName: hicsSeal.department?.name,
                  hasExams: addHics.hasExam ? 1 : 0,
                  diagnosis: {
                     ...addHics.diagnosis,
                     description: await getInspectionNote()
                  }
               }
            ]
         })
         .then(async ({ data }) => {
            if (data.code === 200) {
               openNofi('success', 'Амжилттай', data.description);
               await insuranceApi.requestAddHics(addHics.id, {
                  hasExam: addHics.hasExam
               });
            } else if (data.code === 400) {
               openNofi('error', 'Амжилтгүй', data.description);
            }
         });
   };

   // const getHicsService = async () => {
   //    await healtInsurance.getHicsService().then(({ data: { code, description, result } }) => {
   //       if (code === 200) {
   //          const currentGroupId = (hicsSeal.hicsServiceId || '')?.toString().substring(0, 3);
   //          if (currentGroupId) {
   //             setHicsSupports(
   //                result.filter(
   //                   (hicsService) =>
   //                      [Number(currentGroupId)].includes(hicsService.groupId) &&
   //                      hicsService.id != hicsSeal.hicsServiceId
   //                )
   //             );
   //             setOpenModalSwap(true);
   //          }
   //       } else {
   //          openNofi('error', 'Амжилттгүй', description);
   //       }
   //    });
   // };

   // const createAddHics = async (startCode) => {
   //    return await insuranceApi
   //       .createAddHics({
   //          checkupId: 1,
   //          departName: hicsSeal.department.name,
   //          departNo: hicsSeal.departNo,
   //          hicsSealId: hicsSeal.id,
   //          startDate: new Date(),
   //          startCode: startCode
   //       })
   //       .then(({ data: { response } }) => response);
   // };

   // const deleteAddHics = async () => {
   //    addHics.id &&
   //       (await insuranceApi.deleteAddHics(addHics.id).then(() => {
   //          dispatch(setAddHics(null));
   //       }));
   // };

   // const updateHicsSeal = async (startCode, hicsServiceId) => {
   //    await insuranceApi.requestHicsSeal(hicsSeal.id, {
   //       hicsServiceId: hicsServiceId,
   //       startAt: new Date(),
   //       hicsStartCode: startCode,
   //       diagnosis: null
   //    });
   // };

   const patchAppointment = async (data) => {
      try {
         const apiMap = {
            0: appointmentApi.patchAppointment,
            1: appointmentApi.patchPreOrder
         };
         const selectedApi = apiMap[appointmentType];
         if (!selectedApi) throw new Error('Unknown service type');
         return await selectedApi(appointmentId, data).then(({ data }) => data);
      } catch (error) {
         message.error(error);
      }
   };

   // const updateHics = async (result, hicsServiceId) => {
   //    try {
   //       let newAddHicsId = null;
   //       if (hicsServiceId === 20120) {
   //          const addHicsResponse = await createAddHics(result.code);
   //          await patchAppointment({
   //             addHicsId: addHicsResponse.id
   //          }).then(() => {
   //             newAddHicsId = addHicsResponse.id;
   //          });
   //       } else {
   //          const oldHicsServiceId = hicsSeal.hicsServiceId;
   //          if (oldHicsServiceId === 20120) {
   //             await patchAppointment({
   //                addHicsId: null
   //             }).then(async (response) => {
   //                if (response.success) {
   //                   await deleteAddHics();
   //                }
   //             });
   //          }
   //       }
   //       await updateHicsSeal(result.code, hicsServiceId);
   //       dispatch(
   //          setEmrData({
   //             ...incomeEmrData,
   //             addHicsId: newAddHicsId,
   //             startDate: new Date()
   //          })
   //       );
   //       navigate(0);
   //    } catch (error) {
   //       message.error(error);
   //    }
   // };

   // const swapAmbulatory = async (values) => {
   //    await healtInsurance
   //       .postStartHics({
   //          patientRegno: currentPatient.registerNumber,
   //          patientFingerprint: values.fingerprint,
   //          hicsServiceId: values?.hicsServiceId
   //       })
   //       .then(async ({ data }) => {
   //          if (data.code === 400) {
   //             openNofi('error', 'Амжилтгүй', data.description);
   //          } else if (data.code === 200) {
   //             updateHics(data.result, values.hicsServiceId);
   //          }
   //       });
   // };

   return (
      <>
         <div className="emr-timer">
            <p>Үзлэгийн хугацаа</p>
            <Clock
               startDate={startDate}
               endDate={endDate}
               isDisable={(state) => {
                  setDisable(state);
               }}
            />
            <p>{`${dayjs(startDate).format('YYYY/MM/DD hh:mm')} эхэлсэн`}</p>
            {endDate ? <p>{`${dayjs(endDate).format('YYYY/MM/DD hh:mm')} дууссан`}</p> : null}
            <Button
               disabled={isDisable}
               danger
               onClick={() => {
                  setIsOpenModal(true);
               }}
               icon={
                  <ClockCircleOutlined
                     style={{
                        fontWeight: 700
                     }}
                  />
               }
            >
               Үзлэг дуусах
            </Button>
         </div>
         {/* <Modal
            title="Тусламж үйлчилгээг солих"
            open={isOpenModalSwap}
            onCancel={() => {
               setOpenModalSwap(false);
            }}
            onOk={() =>
               swapFormHics
                  .validateFields()
                  .then(swapAmbulatory)
                  .catch(({ errorFields }) => {
                     errorFields?.map((error) => message.error(error.errors[0]));
                  })
            }
            width={300}
         >
            <Form form={swapFormHics} layout="vertical">
               <div className="w-full flex flex-col gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
                     <Finger
                        form={swapFormHics}
                        insurance={true}
                        noStyle
                        name="fingerprint"
                        rules={[
                           {
                              required: true,
                              message: 'Иргэний хурууны хээ заавал'
                           }
                        ]}
                     >
                        <Input />
                     </Finger>
                  </div>
                  <Form.Item
                     label="Т.Ү-ний дугаар"
                     name="hicsServiceId"
                     rules={[{ required: true, message: 'Үйлчилгээний төрөл заавал сонгох' }]}
                     style={{
                        width: '100%'
                     }}
                     className="mb-0"
                  >
                     <Select
                        placeholder="Үйлчилгээний төрөл сонгох"
                        options={hicsSupports.map((hicsSupport) => ({
                           label: `${hicsSupport.name}->${hicsSupport.id}`,
                           value: hicsSupport.id
                        }))}
                     />
                  </Form.Item>
               </div>
            </Form>
         </Modal> */}
         <Modal
            title="Үзлэгийн төрөл"
            open={isOpenModal}
            onCancel={() => {
               setIsOpenModal(false);
            }}
            footer={null}
            destroyOnClose
         >
            <Form
               form={form}
               onFinish={endInspection}
               onFinishFailed={(error) => {
                  error.errorFields?.map((errorField) => {
                     openNofi('error', 'Алдаа', errorField.errors[0]);
                  });
               }}
               initialValues={{
                  inspection: inspection,
                  finger: ''
               }}
            >
               <div className="flex flex-col gap-3 p-4">
                  <div className="flex flex-row gap-3">
                     <div className="flex flex-col gap-3 w-[200px] min-w-[200px]">
                        <div className="bg-[#F2F3F5] p-2 rounded-lg flex flex-col gap-1">
                           <p
                              style={{
                                 color: '#272E3B',
                                 fontSize: 14,
                                 fontWeight: 700
                              }}
                           >
                              Дүгнэлт
                           </p>
                           <div className="h-[1px] w-full bg-[#C9CDD4]" />
                           <Form.Item name="conclusion" noStyle>
                              <Checkbox.Group className="flex flex-col">
                                 <Checkbox value={'confirmed'}>Баталгаажуулах</Checkbox>
                                 <Checkbox value={'print'} className="ml-0">
                                    Хэвлэх
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="bg-[#F2F3F5] h-full p-2 rounded-lg flex flex-col gap-1">
                           <p
                              style={{
                                 color: '#272E3B',
                                 fontSize: 14,
                                 fontWeight: 700
                              }}
                           >
                              Төрөл
                           </p>
                           <div className="h-[1px] w-full bg-[#C9CDD4]" />
                           <Form.Item name="inspection" rules={[{ required: true, message: 'Үзлэгийн төрөл сонгох' }]}>
                              <Radio.Group disabled={inspection ? true : false} className="flex flex-col bg-[#F2F3F5]">
                                 <Radio value={1}>Анхан</Radio>
                                 <Radio value={2}>Давтан</Radio>
                                 <Radio value={3}>Урьдчилсан үзлэг</Radio>
                                 <Radio value={4}>Дуудлагаар</Radio>
                                 <Radio value={5}>Диспансер хяналт</Radio>
                                 <Radio value={6}>Гэрийн үзлэг</Radio>
                              </Radio.Group>
                           </Form.Item>
                        </div>
                     </div>
                     <div className="bg-[#F2F3F5] p-2 rounded-lg w-full flex flex-col gap-1">
                        <p
                           style={{
                              color: '#272E3B',
                              fontSize: 14,
                              fontWeight: 700
                           }}
                        >
                           Үйлчлүүлэгчийн хурууны хээ
                        </p>
                        <div className="h-[1px] w-full bg-[#C9CDD4]" />
                        <Finger
                           form={form}
                           insurance={isInsurance}
                           noStyle
                           name="finger"
                           rules={[
                              {
                                 required: true,
                                 message: 'Хурууний хээ заавал'
                              }
                           ]}
                        >
                           <Input />
                        </Finger>
                     </div>
                  </div>
                  <div className="flex flex-row justify-end">
                     <Button type="primary" htmlType="submit">
                        Хадгалах
                     </Button>
                  </div>
               </div>
            </Form>
         </Modal>
      </>
   );
};
export default EmrTimer;
