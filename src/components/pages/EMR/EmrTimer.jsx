import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Button, Checkbox, DatePicker, Form, Input, Modal, Radio, message } from 'antd';
//redux
import { selectPatient } from '@Features/patientReducer';
import { selectCurrentHospitalName, selectCurrentInsurance, selectCurrentUserId } from '@Features/authReducer';
import { selectCurrentAddHics, selectCurrentEmrData, selectCurrentHicsSeal, setHicsSeal } from '@Features/emrReducer';
//common
import { inspectionTOJSON, openNofi } from '@Comman/common';
//api
import inspectionNoteApi from '@ApiServices/emr/inspectionNote';
import insuranceApi from '@ApiServices/healt-insurance/insurance';
import healtInsurance from '@ApiServices/healt-insurance/healtInsurance';
import appointmentApi from '@ApiServices/appointment/api-appointment-service';
//comp
import Clock from './Clock';
import Finger from '@Comman/Finger/Finger';
import { DoctorNoteToPDF, XrayNoteToPDF } from './EmrTimer/ToPDF';
//utils
import { RequireTenMinIds, noteToString, setSealForHics } from '@Utils/config/insurance';

const EmrTimer = ({ startDate, endDate, inspection }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const location = useLocation();
   const [form] = Form.useForm();
   const currentHospitalName = useSelector(selectCurrentHospitalName);
   const watchedConclusion = Form.useWatch('conclusion', form);
   const [isDisable, setDisable] = useState(true);
   const hicsSeal = useSelector(selectCurrentHicsSeal);
   const addHics = useSelector(selectCurrentAddHics);
   const currentPatient = useSelector(selectPatient);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const { inspectionNoteId, appointmentId, appointmentType, hicsSealId, addHicsId } = incomeEmrData;
   const userId = useSelector(selectCurrentUserId);
   const isInsurance = useSelector(selectCurrentInsurance);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isLoading, setLoading] = useState(false);

   // uzlegin temdeglel tatah
   const getInspectionNote = async () => {
      if (inspectionNoteId) {
         return await inspectionNoteApi.getById(inspectionNoteId).then(({ data: { response } }) => {
            return response;
         });
      }
      return 'TEST';
   };
   // uzleg duusgah
   const endInspection = async (values) => {
      try {
         // setLoading(true);
         console.log('hicsSealId', hicsSealId);
         console.log('addHicsId', addHicsId);
         const isEndEMD = values.conclusion?.includes('confirmed');
         const inspectionNote = await getInspectionNote();
         const note = inspectionTOJSON(inspectionNote);
         if (isInsurance) {
            if (hicsSeal.process === 0 && appointmentType === 0) {
               console.log(':currentPatient', currentPatient);
               const ourHicsResponse = await setSealForHics(
                  currentPatient,
                  hicsSeal.id,
                  values,
                  isInsurance,
                  addHics.id,
                  note
               );
               if (ourHicsResponse) {
                  dispatch(setHicsSeal(ourHicsResponse));
               }
            }
            if (
               hicsSeal.hicsServiceId === 20120 &&
               hicsSeal.process === 1 &&
               addHics.isSent === false &&
               appointmentType === 0
            ) {
               await addHicsService(hicsSeal.hicsSealCode, note);
            }
            if (isEndEMD) {
               //1-дүрс оношлогоо дүгнэлт,
               //2-шинжилгээ,
               //3-үзлэгийн бүртгэл,
               //4-дүрс оношлогоо зураг
               if (appointmentType === 0) {
                  const isIncludePDF = hicsSeal.medicalLinks?.some((link) => link.medicalLinkType === 3) || false;
                  if (!isIncludePDF) {
                     const structure = inspectionNote?.structures;
                     const documentId = await DoctorNoteToPDF(currentPatient, currentHospitalName, structure, note);
                     await insuranceApi.requestHicsSeal(hicsSeal.id, {
                        medicalLinks: [
                           ...(hicsSeal.medicalLinks || []),
                           {
                              medicalFileId: documentId,
                              inDate: new Date(),
                              medicalLinkType: 3
                           }
                        ]
                     });
                  }
                  const { isConfirm, obsDuration, obsDate } = values;
                  const sentHicsSealResponse = await insuranceApi.requestHicsSealSent(hicsSeal.id, {
                     patientFingerprint: values?.finger,
                     addHicsId: addHics?.id,
                     isConfirm: isConfirm,
                     obsDuration: obsDuration,
                     obsDate: obsDate
                  });
                  if (sentHicsSealResponse.data.code === 200) {
                     openNofi('success', 'Амжиллтай', 'Үзлэг амжиллтай хадгалагдлаа ');
                  }
               } else if (!appointmentType && inspection === 11) {
                  const isIncludePDF = hicsSeal.medicalLinks?.some((link) => link.medicalLinkType === 1) || false;
                  if (!isIncludePDF) {
                     const structure = inspectionNote?.structures;
                     const documentId = await XrayNoteToPDF(currentPatient, currentHospitalName, structure, note);
                     await insuranceApi.requestHicsSeal(hicsSeal.id, {
                        medicalLinks: [
                           ...(hicsSeal.medicalLinks || []),
                           {
                              medicalFileId: documentId,
                              inDate: new Date(),
                              medicalLinkType: 1
                           }
                        ]
                     });
                  }
                  navigate(-1);
               }
            } else {
               // console.log('hicsSeal.medicalLinks', hicsSeal.medicalLinks);
               // console.log('medicalLinks', medicalLinks);
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
      } catch (error) {
         setLoading(false);
         console.log('error', error);
      }
   };

   const addHicsService = async (hicsSealCode, note) => {
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
                     description: noteToString(note)
                  }
               }
            ]
         })
         .then(async ({ data }) => {
            if (data.code === 200) {
               openNofi('success', 'Амжилттай', data.description);
               await insuranceApi.requestAddHics(addHics.id, {
                  hasExam: addHics.hasExam,
                  isSent: true
               });
            } else if (data.code === 400) {
               openNofi('error', 'Амжилтгүй', data.description);
            }
         });
   };

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

   useEffect(() => {
      const state = watchedConclusion?.includes('confirmed');
      if (!state) {
         form.resetFields([['isConfirm'], ['obsDate'], ['obsDuration']]);
      }
   }, [watchedConclusion]);

   console.log('appointmentType', appointmentType);
   console.log('inspection', inspection);

   return (
      <>
         <div className="emr-timer">
            <p>Үзлэгийн хугацаа</p>
            <Clock
               startDate={startDate}
               endDate={endDate}
               isDisable={(state) => {
                  if (RequireTenMinIds.includes(hicsSeal.hicsServiceId)) {
                     setDisable(false);
                  } else {
                     setDisable(false);
                  }
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
               layout="vertical"
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
                        {watchedConclusion?.includes('confirmed') && appointmentType === 0 ? (
                           <div className="bg-[#F2F3F5] p-2 rounded-lg flex flex-col gap-1">
                              <p
                                 style={{
                                    color: '#272E3B',
                                    fontSize: 14,
                                    fontWeight: 700
                                 }}
                              >
                                 Онош
                              </p>
                              <div className="h-[1px] w-full bg-[#C9CDD4]" />
                              <Form.Item
                                 rules={[
                                    {
                                       required: true,
                                       message: 'Оношийн баталсан төрөл заавал'
                                    }
                                 ]}
                                 name="isConfirm"
                                 className="white-radio"
                              >
                                 <Radio.Group className="flex flex-col gap-1">
                                    <Radio className="text-xs items-center" value={1}>
                                       Онош батлагдаж анхан шатын ЭМБ-руу шилжүүлсэн
                                    </Radio>
                                    <Radio value={2} className="ml-0 text-xs items-center">
                                       Онош батлагдаж дараагийн тусламж, үйлчилгээ рүү илгээсэн
                                    </Radio>
                                    <Radio value={3} className="ml-0 text-xs items-center">
                                       Онош батлагдаагүй, дараагийн ЭМБ-руу шилжүүлсэн
                                    </Radio>
                                 </Radio.Group>
                              </Form.Item>
                           </div>
                        ) : null}
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
                     <div className="w-full flex flex-col gap-1">
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
                                    required: false,
                                    message: 'Хурууний хээ заавал'
                                 }
                              ]}
                           >
                              <Input />
                           </Finger>
                        </div>
                        {hicsSeal?.hicsServiceId === 20150 && watchedConclusion?.includes('confirmed') ? (
                           <>
                              <div className="bg-[#F2F3F5] p-2 rounded-lg w-full flex flex-col gap-1">
                                 <p
                                    style={{
                                       color: '#272E3B',
                                       fontSize: 14,
                                       fontWeight: 700
                                    }}
                                 >
                                    Дараагийн хяналтын үзлэгт ирэх огноо
                                 </p>
                                 <div className="h-[1px] w-full bg-[#C9CDD4]" />
                                 <Form.Item
                                    rules={[
                                       {
                                          required: true,
                                          message: 'Дараагийн хяналтын үзлэгт ирэх огноо'
                                       }
                                    ]}
                                    noStyle
                                    name="obsDate"
                                 >
                                    <DatePicker placeholder="Дараагийн хяналтын үзлэгт ирэх огноо" />
                                 </Form.Item>
                              </div>
                              <div className="bg-[#F2F3F5] p-2 rounded-lg w-full flex flex-col gap-1">
                                 <p
                                    style={{
                                       color: '#272E3B',
                                       fontSize: 14,
                                       fontWeight: 700
                                    }}
                                 >
                                    Амбулаторийн хяналтад байх нийт хугацаа
                                 </p>
                                 <div className="h-[1px] w-full bg-[#C9CDD4]" />
                                 <Form.Item
                                    rules={[
                                       {
                                          required: true,
                                          message: 'Амбулаторийн хяналтад байх нийт хугацаа'
                                       }
                                    ]}
                                    noStyle
                                    name="obsDuration"
                                 >
                                    <Input placeholder="Амбулаторийн хяналтад байх нийт хугацаа" />
                                 </Form.Item>
                              </div>
                           </>
                        ) : null}
                     </div>
                  </div>
                  <div className="flex flex-row justify-end">
                     <Button loading={isLoading} type="primary" htmlType="submit">
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
