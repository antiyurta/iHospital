import React, { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card, Empty, Form, Input, Modal, Select, Table, message } from 'antd';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//comp
import Finger from '../../../../../features/finger';
import ScheduleTypeInfo from './scheduleTypeInfo';
import ListFilter from './listFilter';
import InpatientFilter from './inpatientFilter';
import InpatientTypeInfo from './inpatientTypeInfo';
//common
import { openNofi } from '@Comman/common';
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
import types from './types';

function Index({ type, isDoctor }) {
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
   const [isOpenModalStartService, setIsOpenModalStartService] = useState(false);
   const [hicsSupports, setHicsSupports] = useState([]);
   //
   const getAppointment = async (page, limit, start, end) => {
      setSpinner(true);
      if (type === 0) {
         await AppointmentApi.getByPageFilter({
            params: {
               page: page,
               limit: limit,
               doctorId: isDoctor ? employeeId : null,
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
      } else if (type === 1) {
         await AppointmentApi.getPreOrder({
            params: {
               page: page,
               limit: limit,
               startDate: dayjs(start).format('YYYY-MM-DD HH:mm'),
               endDate: dayjs(end).format('YYYY-MM-DD HH:mm')
            }
         })
            .then(({ data: { response } }) => {
               setAppointments(response.data);
               setMeta(response.meta);
            })
            .catch((error) => {
               if (error.response.status === 400) {
                  openNofi('error', 'Алдаа', 'Админаар орсон байна');
               }
            })
            .finally(() => {
               setSpinner(false);
            });
      } else if (type === 2) {
         await ServiceApi.getInpatientRequest({
            params: {
               page: page,
               limit: limit,
               depIds: depIds?.toString(),
               startDate: dayjs(start).format('YYYY-MM-DD HH:mm'),
               endDate: dayjs(end).format('YYYY-MM-DD HH:mm'),
               ...otherParams
            }
         })
            .then(({ data: { response } }) => {
               setAppointments(response.data);
               setMeta(response.meta);
            })
            .finally(() => {
               setSpinner(false);
            });
      } else if (type === 3) {
         await SurgeryApi.getRequest({
            page: page,
            limit: limit,
            startDate: dayjs(start).format('YYYY-MM-DD HH:mm'),
            endDate: dayjs(end).format('YYYY-MM-DD HH:mm'),
            ...otherParams
         })
            .then(({ data: { response } }) => {
               setAppointments(response.data);
               setMeta(response.meta);
            })
            .finally(() => {
               setSpinner(false);
            });
      }
   };
   const getEMRorENR = async (row) => {
      // status heregteii anhan dawtan
      // tolbor shalgah
      setSelectedRow(row);
      if (row.process != 2 && row.process != undefined) {
         openNofi('warning', 'Хэвтэх', 'Эмнэлэгт хэвтээгүй байна');
      } else if (row.process === 2) {
         const data = {
            patientId: row.patientId,
            slotId: row.slotId
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
                     await healthInsuranceApi
                        .getHicsService()
                        .then(({ data }) =>
                           setHicsSupports(data.result.filter((hicsService) => hicsService.groupId == 201))
                        )
                        .catch(() => {
                           openNofi(
                              'error',
                              'Алдаа',
                              'Даатгалтай холбогдож чадсангүй та түр хүлээгээд дахин оролдоно уу'
                           );
                        });
                     setIsOpenModalStartService(true);
                  } else {
                     CreateHicsSeal(row, {}, 209);
                  }
               } else {
                  hrefEMR(row);
               }
            } else {
               hrefEMR(row);
            }
         }
      }
   };
   // 8.1
   const hrefEMR = (row) => {
      const data = {
         patientId: row.patientId,
         inspection: type === 2 ? 1 : row.inspectionType,
         type: row.type,
         hicsSeal: row.hicsSeal,
         startDate: row.startDate || new Date(),
         endDate: row.endDate,
         appointmentType: type,
         inspectionNoteId: row.inspectionNoteId,
         urgentInspectionNoteId: row.urgentInspectionNoteId,
         slotId: row.slotId,
         hicsServiceId: row.hicsSeal?.hicsServiceId,
         reasonComming: row.reasonComming,
         status: row.status
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
         if (type === 1) {
            AppointmentApi.patchPreOrder(row.id, {
               slotId: row.slotId,
               startDate: new Date()
            });
         } else if (type === 0) {
            AppointmentApi.patchAppointment(row.id, {
               startDate: new Date(),
               slotId: row.slotId
            });
         }
      }
      // status // 0 , 1, 2  0 bol iregu 1 bol irsn 2 bol uzlegt orson
      if (type != 1 && row.slotId && isDoctor && row.slot?.incomeDate === null) {
         ScheduleApi.patchSlot(row.slotId, {
            incomeDate: new Date(),
            slotStatus: 1
         });
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
      dispatch(setPatient(row.patient));
   };
   const CreateHicsSeal = async (row, data, groupId) => {
      await InsuranceApi.createHicsSeal({
         appointmentId: row.id,
         patientId: row.patientId,
         departmentId: row.cabinetId,
         startAt: data.result?.createdDate || new Date(),
         hicsAmbulatoryStartId: data.result?.id,
         hicsServiceId: data.result?.hicsServiceId,
         groupId: groupId
      }).then((response) => {
         if (response.status != 201) {
            openNofi('error', 'Амжилтгүй', response);
         }
      });
      hrefEMR(row);
   };
   const startAmbulatory = async (values) => {
      await InsuranceApi.hicsAmbulatoryStart(values.fingerprint, selectedRow.patientId, values.hicsServiceId).then(
         async ({ data }) => {
            if (data.code === 400) {
               openNofi('error', 'Амжилтгүй', data.description);
            } else if (data.code === 200) {
               CreateHicsSeal(selectedRow, data, 201);
            }
         }
      );
   };
   // column configure
   const Numberer = [
      {
         title: '№',
         render: (_, _record, index) => meta.page * meta.limit - (meta.limit - index - 1),
         width: 40
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
   const CurrentColumn = () => {
      if (type === 0 || type === 1) {
         if (isDoctor) {
            return Numberer.concat(outDoctorColumns, LastButton);
         } else {
            return Numberer.concat(outNurseColumns, LastButton);
         }
      } else if (type === 2) {
         return Numberer.concat(inColumns, LastButton);
      } else if (type === 3) {
         return Numberer.concat(surguryColumns, LastButton);
      }
   };
   // column configure

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
               {type === 3 ? (
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
               ) : null}
            </ListFilter>
            {type === 2 ? (
               <InpatientFilter
                  onChange={(value) => {
                     setOtherParams((prevValues) => ({ ...prevValues, process: value }));
                  }}
               />
            ) : null}
            <Card
               bordered={false}
               className="header-solid rounded-md"
               bodyStyle={{
                  padding: 8
               }}
            >
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
                  columns={CurrentColumn()}
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
                     startAmbulatory(values);
                  })
                  .catch(({ errorFields }) => {
                     errorFields?.map((error) => message.error(error.errors[0]));
                  })
            }
         >
            <Form form={startFormHics} layout="vertical">
               <div className="w-full flex flex-col gap-3">
                  <Finger
                     text="Иргэний хурууний хээ"
                     isFinger={true}
                     steps={[
                        {
                           title: 'Өвтний',
                           path: 'fingerprint'
                        }
                     ]}
                     isPatientSheet={false}
                     handleClick={(values) => {
                        startFormHics.setFieldsValue({
                           fingerprint: values.fingerprint
                        });
                     }}
                  />
                  <div className="hidden">
                     <Form.Item
                        rules={[
                           {
                              required: true,
                              message: 'Иргэний хурууны хээ заавал'
                           }
                        ]}
                        name="fingerprint"
                     >
                        <Input />
                     </Form.Item>
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
                           label: hicsSupport.name,
                           value: hicsSupport.id
                        }))}
                     />
                  </Form.Item>
               </div>
            </Form>
         </Modal>
      </div>
   );
}
export default Index;
