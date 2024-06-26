import React, { useEffect, useState } from 'react';
import { ClockCircleOutlined, CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import {
   Alert,
   Button,
   Card,
   Descriptions,
   Form,
   Input,
   Modal,
   Radio,
   Select,
   Spin,
   Switch,
   Table,
   message
} from 'antd';
import { useSelector } from 'react-redux';
//comp
import List from './List';
import Finger from '../../../features/finger';
//common
import { formatNameForDoc, openNofi } from '@Comman/common';
//redux
import { selectCurrentAddHics, selectCurrentEmrData, selectCurrentHicsSeal } from '@Features/emrReducer';
import { selectCurrentInsurance } from '@Features/authReducer';
//Api
import ScheduleApi from '@ApiServices/schedule';
import ServiceApi from '@ApiServices/serviceRequest';
import EmployeeApi from '@ApiServices/organization/employee';
import StructureApi from '@ApiServices/organization/structure';
import InsuranceApi from '@ApiServices/healt-insurance/insurance';
import HealtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
import AppointmentApi from '@ApiServices/appointment/api-appointment-service';
import { isRequireHicsServiceIds } from '@Utils/config/insurance';
//defualt
const { TextArea } = Input;
function Index({ selectedPatient, type, invoiceData, handleClick, prevAppointmentId, isExtraGrud }) {
   const [isOpenModalInspectionType, setIsOpenModalInspectionType] = useState(false);
   const hicsSeal = useSelector(selectCurrentHicsSeal);
   const addHics = useSelector(selectCurrentAddHics);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const isInsurance = useSelector(selectCurrentInsurance);
   const today = new Date();
   const [isLoadingList, setLoadingList] = useState(false);
   const [selectedDate, setSelectedDate] = useState('');
   const [filterForm] = Form.useForm();
   const [structures, setStructures] = useState([]);
   const [doctors, setDoctors] = useState([]);
   const [selectedDoctor, setSelectedDoctor] = useState({});
   const [schedules, setSchedules] = useState([]);
   const [isUrgent, setIsUrgent] = useState(false);
   const [selectedInfo, setSelectedInfo] = useState({});
   const [appointmentModal, setAppointmentModal] = useState(false);
   const [isConfirmLoading, setIsConfirmLoading] = useState(false);
   const [selectedDep, setSelectedDep] = useState(Number);
   const [getIsSlot, setGetIsSlot] = useState({
      state: false,
      slotType: 0
   });
   // daatgaltai hamaraaltai
   const [isLoadingCheckPatientInsurance, setIsLoadingCheckPatientInsurance] = useState(false);
   const [reasonComming, setReasonComming] = useState(null);
   const [stateInsurance, setStateInsurance] = useState(Boolean);
   const [isSent, setIsSent] = useState(false);
   const [notInsuranceInfo, setNotInsuranceInfo] = useState([]);
   // tsahialga hiih uildel

   //
   const [approvalForm] = Form.useForm();
   const [hicsSupports, setHicsSupports] = useState([]);
   const [loadingApproval, setLoadingApproval] = useState(false);
   const [isOpenModalApproval, setOpenModalApproval] = useState(false);

   const setApproval = async (values) => {
      setLoadingApproval(true);
      await HealtInsuranceApi.postApproval({
         patientRegno: selectedPatient.registerNumber,
         patientFirstname: selectedPatient.firstName,
         patientLastname: selectedPatient.lastName,
         ...values,
         fromServiceId: hicsSeal.hicsServiceId || addHics.hicsSeal.hicsServiceId,
         toHospitalId: 1892295
      }).then(async ({ data }) => {
         if (data.code === 200) {
            openNofi('success', 'Ажилттай', data.description);
            await InsuranceApi.createHicsSeal({
               appointmentId: null,
               patientId: selectedPatient.id,
               departmentId: selectedInfo.schedule.structureId,
               startAt: new Date(),
               hicsAmbulatoryStartId: null,
               hicsServiceId: values.toServiceId,
               hicsStartCode: null,
               hicsApprovalCode: data.result[0]?.approvalCode,
               groupId: Number(values.toServiceId.toString().substring(0, 3))
            }).then(({ data: { response } }) => {
               setLoadingApproval(false);
               setOpenModalApproval(false);
               orderAppointment({ ...selectedInfo, hicsSealId: response.id }, true);
            });
         }
      });
   };

   const getHicsSupports = async (hicsServiceIds) => {
      await HealtInsuranceApi.getHicsService().then(({ data }) => {
         if (data.code === 200) {
            const filteredHicsServices = data.result.filter((hicsService) => hicsServiceIds.includes(hicsService.id));
            setHicsSupports(filteredHicsServices || []);
            setOpenModalApproval(true);
         }
      });
   };

   const orderAppointment = async (info, state) => {
      setIsSent(false);
      setIsUrgent(info.isUrgent);
      setSelectedInfo(info);
      const hicsServiceIds = info.schedule?.cabinet?.hicsServiceIds;
      const isRequireApproval = Array.isArray(hicsSupports)
         ? hicsServiceIds?.some((id) => isRequireHicsServiceIds.includes(id))
         : isRequireHicsServiceIds.includes(hicsServiceIds);
      if (isRequireApproval && !state && !invoiceData?.isCheckInsurance) {
         await getHicsSupports(hicsServiceIds);
      } else {
         setLoadingList(true);
         setAppointmentModal(true);
      }
   };
   // tasagt hamaaraltai emch awchirah
   const getDoctor = async (value) => {
      setSelectedDep(structures.find((e) => e['id'] === value));
      await EmployeeApi.getEmployee({
         params: {
            depId: value
         }
      }).then((response) => {
         setDoctors(response.data.response.data);
      });
   };
   // buh tasag awcirah
   const getStructures = async () => {
      await StructureApi.get({
         params: {
            type: 2
         }
      }).then(({ data: { response } }) => {
         setStructures(response.data);
      });
   };
   // emch songoh
   const selectDoctor = (doctorId) => {
      setSelectedDoctor(doctors.find((e) => e.id === doctorId));
   };
   // filter engiin ued schedule awcirah
   const onFinish = async (values) => {
      const date = new Date();
      await ScheduleApi.get({
         params: {
            findManyDate: dayjs(date.setDate(new Date().getDate() - 1)).format('YYYY-MM-DD'),
            structureId: values.structureId,
            doctorId: values.doctorId,
            type: type,
            deviceId: invoiceData?.deviceId || null
         }
      }).then((response) => {
         setSchedules(response.data.response.data);
      });
   };
   // irgen deer daatgal shalgah
   const checkPatientInsurance = async (values) => {
      setIsLoadingCheckPatientInsurance(true);
      await HealtInsuranceApi.postCitizenInfo({
         regNo: selectedPatient.registerNumber,
         isChild: selectedPatient.age > 18 ? true : false,
         fingerPrint: values.fingerPrint
      })
         .then((response) => {
            if (response.data?.isChance) {
               openNofi('success', 'Амжилттай', 'Үйлчүүлэгч даатгалтай байна');
               setIsSent(false);
            } else {
               setNotInsuranceInfo(response.data?.notInsuranceInfo);
               setIsSent(true);
               openNofi('warning', 'Анхааруулга', 'Үйлчүүлэгч даатгалгүй байна');
            }
         })
         .finally(() => {
            setIsLoadingCheckPatientInsurance(false);
         });
   };
   // yaraltai tsag zahialga
   const urgentRequest = async () => {
      if (reasonComming != null) {
         setIsConfirmLoading(true);
         await AppointmentApi.postAppointment({
            ...selectedInfo,
            doctorId: selectedDoctor.id,
            patientId: selectedPatient.id,
            type: 1,
            status: 1,
            isInsurance: stateInsurance,
            appointmentWorkDate: new Date(),
            reasonComming: reasonComming
         })
            .then((response) => {
               if (response.status === 201) {
                  setAppointmentModal(false);
                  openNofi('success', 'Амжилттай', 'Яаралтай амжилттай');
               }
            })
            .finally(() => {
               setIsConfirmLoading(false);
            });
      } else {
         openNofi('warning', 'Анхааруулга', 'Хэрхэн ирсэн бөглөх');
      }
   };
   // engin tsag zahialga
   const createAppointment = async ({ inspectionType }) => {
      setIsOpenModalInspectionType(false);
      await AppointmentApi.postAppointment({
         ...selectedInfo,
         inspectionType: inspectionType, // uzlegiin torol anhan dawtan
         isPayment: incomeEmrData.usageType === 'IN' ? true : null,
         usageType: incomeEmrData.usageType,
         doctorId: selectedDoctor.id,
         patientId: selectedPatient.id,
         type: 3, // 1 bol yaralta 2 bol shuud 3 urdcilsan zahialga 4 bol urdcilsan segiileh
         status: 1, // 1 bol tsag zahilsn 2 bol odor solison 3 tsutsalsn 4 uzleh higed duussan
         isInsurance: stateInsurance || !invoiceData?.isCheckInsurance,
         hicsSealId: selectedInfo.hicsSealId || invoiceData?.hicsSealId,
         appointmentId: prevAppointmentId
      }).then(async (response) => {
         if (response.status === 201) {
            handleClick?.(selectedInfo, selectedDoctor, response.data?.response);
            setAppointmentModal(false);
            await onFinish({
               date: selectedDate,
               structureId: selectedDep.id,
               doctorId: selectedDoctor.id,
               type: type
            });
            setGetIsSlot({ state: true, slotType: 0 });
         }
      });
   };
   const appointmentRequest = async () => {
      try {
         setIsConfirmLoading(true);
         setGetIsSlot({ state: false, slotType: 0 });
         if (type === 2 || type === 3) {
            /** type 3 bol xray 2 bol treatment */
            await ServiceApi.patch(invoiceData.invoiceId, {
               ...selectedInfo,
               appointmentId: invoiceData.appointmentId || null,
               doctorId: selectedDoctor.id,
               patientId: selectedPatient.id,
               type: invoiceData.type
            }).then((response) => {
               if (response.status === 200) {
                  setAppointmentModal(false);
                  handleClick(true, invoiceData.invoiceId, selectedInfo);
                  setGetIsSlot({ state: true, slotType: 0 });
               }
            });
         } else {
            if (incomeEmrData.usageType === 'IN') {
               setIsOpenModalInspectionType(true);
            } else {
               createAppointment({
                  inspectionType: null
               });
            }
         }
         setLoadingList(false);
         setIsConfirmLoading(false);
      } catch (error) {
         message.error(error);
         console.log('error', error);
      }
   };
   // uffect
   useEffect(() => {
      getStructures();
   }, [type]);

   return (
      <>
         <div className="flex flex-col gap-4">
            <Card
               title="Цаг захиалга"
               extra={
                  <div className="flex flex-row gap-3">
                     {type === 1 ? (
                        <Button
                           type="primary"
                           danger
                           onClick={() => {
                              filterForm
                                 .validateFields()
                                 .then((_values) => {
                                    if (selectedPatient.id) {
                                       orderAppointment(
                                          {
                                             isUrgent: true,
                                             roomNumber: '',
                                             structureName: 'Яаралтай тасаг',
                                             time: {
                                                start: dayjs(today).format('HH:mm'),
                                                end: dayjs(today).format('HH:mm')
                                             },
                                             slotId: null,
                                             cabinetId: selectedDep.id
                                          },
                                          true
                                       );
                                    } else {
                                       openNofi('warning', 'Алдаа', 'Яаралтай үед өвчтөн сонгох');
                                    }
                                 })
                                 .catch((err) => {
                                    openNofi('warning', 'Алдаа', 'Яаралтай үед тасаг эмч сонгох');
                                 });
                           }}
                        >
                           Яаралтай
                        </Button>
                     ) : null}
                     <Alert className="h-6" message={`Өнөөдөр: ${dayjs(today).format('YYYY-MM-DD')}`} type="success" />
                  </div>
               }
            >
               <Form form={filterForm}>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                     <Form.Item
                        label="Тасаг"
                        name="structureId"
                        className="mb-0"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <Select
                           allowClear
                           onClear={() => {
                              filterForm.resetFields(['doctorId']);
                           }}
                           onChange={getDoctor}
                           className="w-full"
                           placeholder="Тасаг сонгох"
                           options={structures
                              ?.filter((structure) => structure.isOrder)
                              ?.map((isOrderStructure) => ({
                                 label: isOrderStructure.name,
                                 value: isOrderStructure.id
                              }))}
                        />
                     </Form.Item>
                     <Form.Item
                        label="Эмч"
                        name="doctorId"
                        className="mb-0"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <Select
                           allowClear
                           className="w-full"
                           onChange={selectDoctor}
                           placeholder="Эмч сонгох"
                           options={doctors.map((doctor) => ({
                              label: formatNameForDoc(doctor?.lastName, doctor?.firstName),
                              value: doctor.id
                           }))}
                        />
                     </Form.Item>
                     <Button
                        style={{
                           minHeight: 32
                        }}
                        type="primary"
                        icon={<SearchOutlined />}
                        onClick={() => filterForm.validateFields().then((values) => onFinish(values))}
                     >
                        Шүүх
                     </Button>
                  </div>
               </Form>
            </Card>
            <Spin spinning={isLoadingList}>
               <List
                  schedules={schedules}
                  type={type}
                  selectedPatient={selectedPatient}
                  orderAppointment={orderAppointment}
                  isGetSlots={getIsSlot}
                  isExtraGrud={isExtraGrud}
               />
            </Spin>
         </div>
         <Modal
            title="Үзлэгийн төрөл сонгох"
            open={isOpenModalInspectionType}
            onCancel={() => setIsOpenModalInspectionType(false)}
            footer={null}
            width={300}
         >
            <div className="flex flex-col gap-3">
               <p className="text-black font-bold text-base">
                  Үзлэгийн төрлөөс хамаарч үзлэгийн төлбөр өөр байх тул та сонголтоо зөв хийнэ үү !!!
               </p>
               <div className="flex flex-row gap-3 items-center">
                  <Button
                     type="primary"
                     onClick={() => {
                        createAppointment({
                           inspectionType: 1
                        });
                     }}
                  >
                     Анхан үзлэг
                  </Button>
                  <Button
                     type="primary"
                     onClick={() => {
                        createAppointment({
                           inspectionType: 2
                        });
                     }}
                  >
                     Давтан үзлэг
                  </Button>
               </div>
            </div>
         </Modal>
         <Modal
            title="Эмчийн заалт бичих"
            open={isOpenModalApproval}
            onCancel={() => {
               setOpenModalApproval(false);
            }}
            confirmLoading={loadingApproval}
            onOk={() => {
               approvalForm.validateFields().then(setApproval);
            }}
            cancelText="Болих"
            okText="Хадгалах"
         >
            <Form form={approvalForm} layout="vertical">
               <Form.Item
                  label="Т.Ү-ний дугаар"
                  name="toServiceId"
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
               <Form.Item label="Заалтын тайлбар" name="approvalDesc">
                  <TextArea />
               </Form.Item>
            </Form>
         </Modal>
         <Modal
            title="Цаг захиалах"
            open={appointmentModal}
            okButtonProps={{
               disabled: isSent,
               loading: isConfirmLoading
            }}
            onOk={() => {
               isUrgent ? urgentRequest() : appointmentRequest();
            }}
            onCancel={() => {
               setLoadingList(false);
               setAppointmentModal(false);
               setStateInsurance(false);
            }}
            confirmLoading={isConfirmLoading}
            cancelText="Болих"
            okText="Хадгалах"
            width={'40%'}
         >
            <div className="flex flex-col gap-3">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3">
                     <Descriptions layout="vertical">
                        <Descriptions.Item label="Кабинет">{selectedInfo?.structureName}</Descriptions.Item>
                        <Descriptions.Item label="Эмч">{selectedDoctor?.firstName}</Descriptions.Item>
                        <Descriptions.Item label="Үйлчүүлэгч">
                           {selectedPatient?.lastName + ' ' + selectedPatient?.firstName}
                        </Descriptions.Item>
                        <Descriptions.Item label="Цаг">
                           <div className="inline-flex flex-row items-center">
                              <span>{selectedInfo?.time?.start?.substr(0, 5)}</span>
                              <ClockCircleOutlined className="mx-1.5" />
                              <span>{selectedInfo?.time?.end?.substr(0, 5)}</span>
                           </div>
                        </Descriptions.Item>
                        <Descriptions.Item label="Өрөөнийн дугаар">{selectedInfo?.roomNumber}</Descriptions.Item>
                     </Descriptions>
                  </div>
               </div>
               {isUrgent ? (
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <div className="flow-root">
                           <div className="float-left">
                              <p
                                 style={{
                                    fontWeight: 600
                                 }}
                              >
                                 Яаж ирсэн
                              </p>
                           </div>
                           <div className="float-right">
                              <Radio.Group value={reasonComming} onChange={(e) => setReasonComming(e.target.value)}>
                                 <Radio value={1}>Өөрөө</Radio>
                                 <Radio value={2}>Түргэн тусламжаар</Radio>
                                 <Radio value={3}>Бусад</Radio>
                              </Radio.Group>
                           </div>
                        </div>
                     </div>
                  </div>
               ) : null}
               {isInsurance && invoiceData?.isCheckInsurance ? (
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <div className="flow-root">
                           <div className="float-left">
                              <p
                                 style={{
                                    fontWeight: 600
                                 }}
                              >
                                 Үйлчүүлэгч даатгалтай эсэх
                              </p>
                           </div>
                           <div className="float-right">
                              <Switch
                                 className="bg-[#4a7fc1]"
                                 checkedChildren="Тийм"
                                 unCheckedChildren="Үгүй"
                                 defaultChecked={false}
                                 checked={stateInsurance}
                                 onChange={(e) => {
                                    setStateInsurance(e);
                                    setIsSent(e);
                                    setNotInsuranceInfo([]);
                                 }}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               ) : null}
               {stateInsurance && (
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <Table
                           rowKey="id"
                           size="small"
                           bordered
                           scroll={{
                              y: 300
                           }}
                           loading={isLoadingCheckPatientInsurance}
                           columns={[
                              {
                                 title: 'Он',
                                 dataIndex: 'pyear'
                              },
                              {
                                 title: 'Сар',
                                 dataIndex: 'pmonth'
                              },
                              {
                                 title: 'Төлсөн эсэх',
                                 render: () => (
                                    <CloseCircleOutlined
                                       style={{
                                          color: 'red'
                                       }}
                                    />
                                 )
                              }
                           ]}
                           dataSource={notInsuranceInfo}
                           pagination={false}
                        />
                        <div className="flow-root">
                           <div className="pt-3 float-right">
                              <Finger
                                 text="Даатгал шалгах"
                                 isDanger={false}
                                 isFinger={true}
                                 steps={[
                                    {
                                       title: 'Өвтний',
                                       path: 'fingerPrint'
                                    }
                                 ]}
                                 isPatientSheet={false}
                                 handleClick={checkPatientInsurance}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </Modal>
      </>
   );
}
export default Index;
