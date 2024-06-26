import React, { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card, Empty, Form, Input, Modal, Select, Table, message } from 'antd';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//comp
import ScheduleTypeInfo from './scheduleTypeInfo';
import ListFilter from './listFilter';
import InpatientFilter from './inpatientFilter';
import InpatientTypeInfo from './inpatientTypeInfo';
import SurgeryBoss from '../SurgeryBoss';
//common
import types from './types';
import { openNofi } from '@Comman/common';
import Finger from '@Comman/Finger/Finger';
//redux
import { setEmrData } from '@Features/emrReducer';
import { setPatient } from '@Features/patientReducer';
import { selectCurrentDepId, selectCurrentUserId } from '@Features/authReducer';
//api
import ScheduleApi from '@ApiServices/schedule';
import ServiceApi from '@ApiServices/service/service';
import SurgeryApi from '@ApiServices/service/surgery.api';
import InsuranceApi from '@ApiServices/healt-insurance/insurance';
import healthInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
import AppointmentApi from '@ApiServices/appointment/api-appointment-service';
//columns
import { outDoctorColumns, outNurseColumns, inColumns, surguryColumns } from './columns';
//utils
import { RequireTenMinIds, RequireCreateSealIds } from '@Utils/config/insurance';

function Index({ type, isDoctor, isSurgeyBoss }) {
   //type 0 bol ambultor
   //1 bol urdcilsan sergiileh
   //2 bol hewten
   //3 bol mes zasal
   const [startFormHics] = Form.useForm();
   const employeeId = useSelector(selectCurrentUserId);
   const depIds = useSelector(selectCurrentDepId);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [otherParams, setOtherParams] = useState({});
   const [appointments, setAppointments] = useState([]);
   const [meta, setMeta] = useState({
      page: 1,
      limit: 10
   });
   const [spinner, setSpinner] = useState(false);
   // suul newew 8.1
   const [selectedRow, setSelectedRow] = useState();
   const [selectedHicsService, setSelectedHicsService] = useState({});
   const [isOpenModalStartService, setIsOpenModalStartService] = useState(false);
   const [hicsSupports, setHicsSupports] = useState([]);
   //
   const getAppointment = async (page, limit, start, end) => {
      try {
         setSpinner(true);
         const paramsMap = {
            0: {
               doctorId: isDoctor ? employeeId : null
            },
            2: {
               depIds: depIds?.toString(),
               ...otherParams
            },
            3: {
               columnId: isSurgeyBoss ? 3 : null,
               ...otherParams
            }
         };
         const apiMap = {
            0: AppointmentApi.getByPageFilter,
            1: AppointmentApi.getPreOrder,
            2: ServiceApi.getInpatientRequest,
            3: SurgeryApi.getRequest
         };
         const selectedApi = apiMap[type];
         if (!selectedApi) throw new Error('Unknown service type');
         await selectedApi({
            params: {
               page: page,
               limit: limit,
               ...paramsMap[type],
               startDate: dayjs(start).format('YYYY-MM-DD HH:mm'),
               endDate: dayjs(end).format('YYYY-MM-DD HH:mm')
            }
         })
            .then(({ data: { response } }) => {
               setAppointments(response.data);
               setMeta(response.meta);
            })
            .catch((error) => {
               console.log(error);
            })
            .finally(() => {
               setSpinner(false);
            });
      } catch (error) {
         console.log('error', error);
         message.error(error);
      }
   };
   const getEMRorENR = async (row) => {
      dispatch(setPatient(row.patient));
      // status heregteii anhan dawtan
      // tolbor shalgah
      setSelectedRow(row);
      if (row.process != 2 && row.process != undefined) {
         openNofi('warning', 'Хэвтэх', 'Эмнэлэгт хэвтээгүй байна');
      } else if (row.process === 2) {
         const data = {
            patientId: row.patientId,
            slotId: row.slotId,
            parentHicsSeal: row.appointment?.hicsSeal,
            hicsSeal: row.hicsSeal
         };
         if (type === 2) {
            data['usageType'] = 'IN';
            data['inpatientRequestId'] = row.id;
            data['departmentId'] = row.inDepartmentId;
            data['serviceId'] = row.insuranceServiceId;
         } else if (type === 3) {
            data['usageType'] = 'OUT';
         }
         dispatch(setEmrData(data));
         if (isDoctor) {
            navigate(`/main/emr`, {
               state: data
            });
         } else {
            navigate(`/main/ambulatoryDetail`, {
               state: data
            });
         }
      } else {
         const payment = row.isPayment || row.isInsurance;
         if (!payment && row.type === 3) {
            openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй');
         } else {
            if (row.startDate === null && isDoctor) {
               if (row.isInsurance) {
                  if (row.type != 1) {
                     startFormHics.resetFields();
                     const hicsServiceIds = row?.cabinet?.hicsServiceIds || [];
                     await healthInsuranceApi
                        .getHicsService()
                        .then(({ data }) => {
                           if (row.hicsSeal?.hicsServiceId) {
                              const current = data.result?.find((supp) => supp.id === row.hicsSeal?.hicsServiceId);
                              setSelectedHicsService(current);
                              startFormHics.setFieldValue('hicsServiceId', row.hicsSeal?.hicsServiceId);
                           }
                           setHicsSupports(
                              data.result.filter((hicsService) => hicsServiceIds.includes(hicsService.id))
                           );
                        })
                        .catch(() => {
                           openNofi(
                              'error',
                              'Алдаа',
                              'Даатгалтай холбогдож чадсангүй та түр хүлээгээд дахин оролдоно уу'
                           );
                        });
                     setIsOpenModalStartService(true);
                  } else {
                     CreateHicsSeal(
                        row,
                        {
                           hicsServiceId: 20900
                        },
                        209
                     );
                  }
               } else {
                  hrefEMR(row, null);
               }
            } else {
               hrefEMR(row, null);
            }
         }
      }
   };
   // 8.1
   const hrefEMR = async (row, sealResponse, addResponse) => {
      var data = {
         patientId: row.patientId,
         inspection: type === 2 ? 1 : row.inspectionType,
         type: row.type,
         hicsServiceIds: row.cabinet?.hicsServiceIds,
         hicsSealId: sealResponse?.id || row.hicsSealId,
         addHicsId: addResponse?.id || row.addHicsId,
         startDate: row.startDate || new Date(),
         endDate: row.endDate,
         appointmentType: type,
         inspectionNoteId: row.inspectionNoteId,
         urgentInspectionNoteId: row.urgentInspectionNoteId,
         slotId: row.slotId,
         reasonComming: row.reasonComming,
         status: row.status,
         isInsurance: row.isInsurance
      };
      if (type === 0) {
         data['usageType'] = 'OUT';
         data['appointmentId'] = row.id;
         data['cabinetId'] = row.cabinetId;
         data['departmentId'] = row.cabinet?.parentId;
      } else if (type === 1) {
         data['usageType'] = 'OUT';
         data['appointmentId'] = row.id;
         data['cabinetId'] = row.cabinetId;
         data['EWSColor'] = row.emergencySorter?.color;
         data['departmentId'] = row.cabinet?.parentId;
      } else if (type === 2) {
         data['usageType'] = 'IN';
         data['inpatientRequestId'] = row.id;
         data['departmentId'] = row.inDepartmentId;
      } else if (type === 3) {
         data['usageType'] = 'OUT';
         data['startDate'] = null;
         data['appointmentId'] = row.appointmentId;
         data['surgery'] = {
            surguryRequestId: row.id,
            taskWorkersId: row.taskWorkers.id
         };
      }
      // uzleg ehleh tsag
      if (row.startDate === null && isDoctor) {
         try {
            const apiMap = {
               0: AppointmentApi.patchAppointment,
               1: AppointmentApi.patchPreOrder
            };
            const selectedApi = apiMap[type];
            if (!selectedApi) throw new Error('Unknown service type');
            await selectedApi(row.id, {
               slotId: row.id,
               startDate: new Date(),
               hicsSealId: sealResponse?.id || row.hicsSealId,
               addHicsId: addResponse?.id || row.addHicsId
            }).then(async ({ data: { success } }) => {
               if (success && type != 1 && row.slotId && isDoctor && row.slot?.incomeDate === null) {
                  ScheduleApi.patchSlot(row.slotId, {
                     incomeDate: new Date(),
                     slotStatus: 1
                  });
               }
            });
            // status // 0 , 1, 2  0 bol iregu 1 bol irsn 2 bol uzlegt orson
         } catch (error) {
            console.log('error', error);
            message.error(error.message || 'An error occurred');
         }
      }
      console.log('set ==========> ', data);
      dispatch(setEmrData(data));
      if (isDoctor) {
         navigate(`/main/emr`, {
            state: data
         });
      } else {
         navigate(`/main/ambulatoryDetail`, {
            state: data
         });
      }
   };

   const CreateAddHics = async (row, result, hicsStartCode) => {
      const maxCheckupId = row?.hicsSeal?.addHics?.reduce((maxId, checkup) => Math.max(maxId, checkup.checkupId), 0);
      return await InsuranceApi.createAddHics({
         checkupId: maxCheckupId ? maxCheckupId + 1 : 1,
         departName: row.cabinet.name,
         departNo: row.cabinetId?.toString(),
         hicsSealId: row?.hicsSealId || result.id,
         startDate: new Date(),
         startCode: result.code || hicsStartCode
      }).then(({ data: { response, success } }) => {
         if (!success) {
            openNofi('error', 'Амжилтгүй', 'Амжилтгүй');
         }
         return {
            addResponse: response,
            maxCheckupId: maxCheckupId + 1
         };
      });
   };

   const CreateHicsSeal = async (row, result, groupId) => {
      await InsuranceApi.createHicsSeal({
         appointmentId: row.id,
         patientId: row.patientId,
         departmentId: row.cabinetId,
         startAt: result?.createdDate || new Date(),
         hicsAmbulatoryStartId: null,
         hicsStartCode: result.code,
         hicsServiceId: result?.hicsServiceId,
         groupId: groupId
      }).then(async ({ data: { response, success } }) => {
         if (!success) {
            openNofi('error', 'Амжилтгүй', '');
         } else {
            if (result.hicsServiceId === 20120 && !row.addHicsId) {
               await CreateAddHics(row, response, result.code).then((data) => {
                  hrefEMR(row, response, data.addResponse);
               });
            } else {
               hrefEMR(row, response, null);
            }
         }
      });
   };
   /** 4.47 service */
   const startAmbulatory = async (values) => {
      await healthInsuranceApi
         .postStartHics({
            patientRegno: selectedRow.patient?.registerNumber,
            patientFingerprint: values.fingerprint,
            hicsServiceId: values?.hicsServiceId || selectedRow?.hicsSeal?.hicsServiceId
         })
         .then(async ({ data }) => {
            if (data.code === 400) {
               openNofi('error', 'Амжилтгүй', data.description);
            } else if (data.code === 200) {
               if (selectedRow?.hicsSeal?.addHics?.length > 0) {
                  // create add hics hiih
                  await CreateAddHics(selectedRow, data.result, null).then((data) => {
                     hrefEMR(selectedRow, null, data.addResponse);
                  });
               } else {
                  // create seal hiih
                  CreateHicsSeal(selectedRow, data.result, 299);
               }
            }
         });
   };
   // column configure
   const Numberer = [
      {
         title: '№',
         render: (_, _record, index) => meta.page * meta.limit - (meta.limit - index - 1),
         width: 40
      }
   ];
   const LastButtonForSurgeryBoss = [
      {
         title: 'Үйлдэл',
         dataIndex: 'endDate',
         render: (endDate, row) => (
            <SurgeryBoss
               row={row}
               handleRefresh={() => {
                  // setOtherParams((prevValues) => ({ ...prevValues, process: 4 }));
               }}
            />
         )
      }
   ];
   const LastButton = [
      {
         title: 'Үйлдэл',
         dataIndex: 'endDate',
         width: 120,
         render: (text, row) => (
            <Button
               className="hover:border-[#2D8CFF]"
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  color: '#2D8CFF',
                  border: '1px solid #2D8CFF',
                  height: 'auto',
                  margin: 8,
                  width: '100%'
               }}
               onClick={() => {
                  getEMRorENR(row);
               }}
               icon={<PlusCircleOutlined />}
            >
               {text ? 'Тэмдэглэл засах' : 'Үзлэг хийх'}
            </Button>
         )
      }
   ];
   const currentColumn = () => {
      if (type === 0 || type === 1) {
         if (isDoctor) {
            return Numberer.concat(outDoctorColumns, LastButton);
         } else {
            return Numberer.concat(outNurseColumns, LastButton);
         }
      } else if (type === 2) {
         return Numberer.concat(inColumns, LastButton);
      } else if (type === 3) {
         if (isSurgeyBoss) {
            return Numberer.concat(surguryColumns, LastButtonForSurgeryBoss);
         } else {
            return Numberer.concat(surguryColumns, LastButton);
         }
      }
      return [];
   };
   // column configure
   // filter
   const SurgeryFilter = () => {
      if (type === 3 && !isSurgeyBoss) {
         return (
            <Select
               className="surgery-selector"
               defaultValue={otherParams['columnId']}
               onChange={(e) => {
                  setOtherParams((prevValues) => ({ ...prevValues, columnId: e }));
               }}
               allowClear
               onClear={() => {
                  setOtherParams((prevValues) => ({ ...prevValues, columnId: null }));
               }}
               placeholder="Төрөл сонгох"
               options={types?.map((type) => ({
                  label: type.label,
                  value: type.value
               }))}
            />
         );
      }
      return;
   };

   return (
      <div className="w-full">
         <div className="flex flex-col gap-3">
            <ScheduleTypeInfo />
            {/* {type === 2 ? <InpatientTypeInfo /> : null} */}
            <ListFilter
               meta={meta}
               appointmentsLength={appointments?.length || 0}
               getList={getAppointment}
               otherParams={otherParams}
            >
               <SurgeryFilter />
            </ListFilter>
            {type === 2 ? (
               <InpatientFilter
                  onChange={(value) => {
                     setOtherParams((prevValues) => ({ ...prevValues, process: value }));
                  }}
               />
            ) : null}
            <Card bordered={false} className="header-solid rounded-md">
               <Table
                  className="emr-index-list"
                  rowKey={'id'}
                  rowClassName="hover: cursor-pointer"
                  locale={{
                     emptyText: <Empty description={'Хоосон'} />
                  }}
                  loading={{
                     spinning: spinner,
                     tip: 'Уншиж байна....'
                  }}
                  columns={currentColumn()}
                  dataSource={appointments}
                  scroll={{
                     y: 665
                  }}
                  pagination={false}
               />
            </Card>
         </div>
         <Modal
            title="Тусламж үйлчилгээг эхлүүлэх"
            open={isOpenModalStartService}
            onCancel={() => setIsOpenModalStartService(false)}
            onOk={() =>
               startFormHics
                  .validateFields()
                  .then((values) => {
                     if (RequireTenMinIds.includes(values.hicsServiceId)) {
                        startAmbulatory(values);
                     } else if (RequireCreateSealIds.includes(values.hicsServiceId)) {
                        CreateHicsSeal(
                           selectedRow,
                           {
                              hicsServiceId: values.hicsServiceId
                           },
                           199
                        );
                     } else {
                        hrefEMR(selectedRow, null, null);
                     }
                  })
                  .catch(({ errorFields }) => {
                     errorFields?.map((error) => message.error(error.errors[0]));
                  })
            }
            width={300}
         >
            <Form form={startFormHics} layout="vertical">
               <div className="w-full flex flex-col gap-3">
                  <Form.Item
                     label="Т.Ү-ний дугаар"
                     name="hicsServiceId"
                     rules={[
                        {
                           required: true,
                           message: 'Үйлчилгээний төрөл заавал сонгох'
                        }
                     ]}
                     style={{
                        width: '100%'
                     }}
                     className="mb-0"
                  >
                     <Select
                        onSelect={(value) => {
                           const current = hicsSupports?.find((supp) => supp.id === value);
                           setSelectedHicsService(current);
                        }}
                        disabled={selectedRow?.hicsSealId ? true : false}
                        placeholder="Үйлчилгээний төрөл сонгох"
                        options={hicsSupports.map((hicsSupport) => ({
                           label: `${hicsSupport.name}->${hicsSupport.id}`,
                           value: hicsSupport.id
                        }))}
                     />
                  </Form.Item>
                  {selectedHicsService?.isFinger ? (
                     <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
                        <Finger
                           form={startFormHics}
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
                  ) : null}
               </div>
            </Form>
         </Modal>
      </div>
   );
}
export default Index;
