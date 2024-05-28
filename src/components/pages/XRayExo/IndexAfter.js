import React, { useState } from 'react';
import { BarcodeOutlined, CheckOutlined, MinusOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Empty, Form, Input, Modal, Select, Table, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import Barcode from 'react-barcode';
//comp
// import DocumentShow from '../611/DocumentShow';
// import MonitorCriteria from '../Insurance/MonitorCriteria';
import { ListPatientInfo, TypeInfo } from '../../ListInjection';
import ListFilter from '../BeforeAmbulatory/Lists/Index/listFilter';
import ScheduleTypeInfo from '../BeforeAmbulatory/Lists/Index/scheduleTypeInfo';
import InspectionTypeInfo from '../BeforeAmbulatory/Lists/Index/inspectionTypeInfo';
//utils
import { getGender } from '@Utils/config/xypField';
//comman
import Finger from '@Comman/Finger/Finger';
import { getAge, openNofi } from '@Comman/common';
//redux
import { setEmrData } from '@Features/emrReducer';
import { setPatient } from '@Features/patientReducer';
//api
import ServiceApi from '@ApiServices/service/service';
import InsuranceApi from '@ApiServices/healt-insurance/insurance';
import healthInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';

function IndexAfter({ type, params }) {
   // type 0 bol Xray 1 bol exo 2r bol ekg 3r operation
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [startFormHics] = Form.useForm();
   const [selectedRow, setSelectedRow] = useState({});
   const [isOpenModalStartService, setIsOpenModalStartService] = useState(false);
   const [requestLists, setRequestLists] = useState([]);
   const [meta, setMeta] = useState({
      page: 1,
      limit: 10
   });
   const [spinner, setSpinner] = useState(false);
   const getRequest = async (page, pageSize, start, end) => {
      setSpinner(true);
      if (type === 3) {
         await ServiceApi.getOperation({
            page: page,
            limit: pageSize,
            startDate: dayjs(start).format('YYYY-MM-DD HH:mm'),
            endDate: dayjs(end).format('YYYY-MM-DD HH:mm')
         })
            .then(({ data: { response } }) => {
               setRequestLists(response.data);
               setMeta(response.meta);
            })
            .finally(() => {
               setSpinner(false);
            });
      } else {
         await ServiceApi.getXrayRequest({
            params: {
               xrayProcess: params,
               page: page,
               limit: pageSize,
               deviceType: type,
               startDate: dayjs(start).format('YYYY-MM-DD HH:mm'),
               endDate: dayjs(end).format('YYYY-MM-DD HH:mm')
            }
         })
            .then(({ data: { response } }) => {
               setRequestLists(response.data);
               setMeta(response.meta);
            })
            .finally(() => {
               setSpinner(false);
            });
      }
   };
   const checkType = (process) => {
      if (process === 0) {
         return <MinusOutlined style={{ color: 'red' }} />;
      } else if (process === 1) {
         return <PlusOutlined style={{ color: '#F09833' }} />;
      } else {
         return <CheckOutlined style={{ color: '#22A06B' }} />;
      }
   };
   const getEMR = (row) => {
      dispatch(setPatient(row.patient));
      // status heregteii anhan dawtan
      // tolbor shalgah
      setSelectedRow(row);
      const payment = row.isPayment || row.isInsurance;
      if (row.xrayProcess === 0 && row.deviceType === 0) {
         openNofi('warning', 'Зураг', 'Зураг оруулагүй');
      } else if (!payment && row.usageType === 'OUT') {
         openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй');
      } else {
         if (row.confirmedDate === null && type != 3) {
            ServiceApi.patchXrayRequest({
               confirmedDate: new Date()
            });
         }
         if (row.startAt === null && type != 3) {
            ServiceApi.patchXrayRequest(row.id, {
               startAt: new Date()
            });
         }
         const data = {
            usageType: row.usageType,
            xrayRequestId: type != 3 ? row.id : null,
            operationRequestId: type === 3 ? row.id : null,
            patientId: row.patientId,
            cabinetId: row.cabinetId,
            serialNumber: row.serialNumber,
            inspectionNoteId: row.inspectionNoteId,
            inspection: type === 3 ? 13 : row.deviceType === 0 ? 11 : 12,
            xrayId: row.xrayId,
            startDate: row.startAt || new Date(),
            hicsSeal: row.hicsSeal
         };
         dispatch(setEmrData(data));
         if (row.isInsurance && !row.hicsSeal && type === 3) {
            setIsOpenModalStartService(true);
         } else {
            navigate(`/main/emr`, {
               state: data
            });
         }
      }
   };
   const getTypeInfo = (begin, end) => {
      if (begin === undefined && end === undefined) {
         return <TypeInfo bgColor="#f0ad4e" textColor="white" text={'Шууд'} />;
      } else {
         const beginTime = begin.substring(0, 5);
         const endTime = end.substring(0, 5);
         return <TypeInfo bgColor="#5cb85c" textColor="white" text={beginTime + '-' + endTime} />;
      }
   };
   const getUsageTypeInfo = (type) => {
      if (type === 'IN') {
         return <TypeInfo bgColor="#5bc0de" textColor="white" text={'Хэвтэн'} />;
      } else {
         return <TypeInfo bgColor="#5cb85c" textColor="white" text={'Амбулатори'} />;
      }
   };
   const getPaymentInfo = (state) => {
      if (state) {
         return <TypeInfo bgColor="#5cb85c" textColor="white" text={'Төлсөн'} />;
      }
      return <TypeInfo bgColor="#ef4444" textColor="white" text={'Төлөгдөөгүй'} />;
   };
   const requestColumns = [
      {
         title: '№',
         width: 50,
         render: (_, _row, rowIndex) => meta.page * meta.limit - (meta.limit - rowIndex - 1)
      },
      {
         title: 'Он сар',
         width: 150,
         dataIndex: 'updatedAt',
         render: (updatedAt) => dayjs(updatedAt).format('YYYY-MM-DD HH:mm')
      },
      {
         title: 'Төрөл',
         width: 120,
         dataIndex: 'usageType',
         render: (usageType) => getUsageTypeInfo(usageType)
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
         width: 170,
         render: (patient) => <ListPatientInfo patientData={patient} />
      },
      {
         title: 'Нас',
         width: 100,
         dataIndex: ['patient', 'registerNumber'],
         render: (text) => (
            <span
               style={{
                  whiteSpace: 'normal'
               }}
            >
               {getAge(text)}
            </span>
         )
      },
      {
         title: 'Хүйс',
         dataIndex: ['patient', 'gender'],
         render: (gender) => getGender(gender)
      },
      {
         title: type === 3 ? 'Ажилбарын нэр' : 'Оношилгооны нэр',
         dataIndex: type == 3 ? ['operation', 'name'] : ['xray', 'name'],
         render: (name) => <div className="whitespace-pre-wrap">{name}</div>
      },
      {
         title: 'Үзлэгийн цаг',
         dataIndex: 'deviceSlot',
         width: 90,
         render: (deviceSlot) => getTypeInfo(deviceSlot?.startTime, deviceSlot?.endTime)
      },
      {
         title: 'Үзлэг',
         dataIndex: 'xrayProcess',
         render: (xrayProcess) => checkType(xrayProcess)
      },
      {
         title: 'Эмч',
         dataIndex: 'employee',
         width: 170,
         render: (employee) => <ListPatientInfo patientData={employee} />
      },
      {
         title: 'Даатгал',
         width: 100,
         dataIndex: 'isInsurance',
         render: (text) => getPaymentInfo(text)
      },
      {
         title: 'Төлбөр',
         width: 60,
         dataIndex: 'isPayment',
         render: (text) => getPaymentInfo(text)
      },
      {
         title: 'Бар код',
         dataIndex: 'serialNumber',
         render: (barcode) => {
            if (barcode) {
               return (
                  <Button
                     icon={<BarcodeOutlined />}
                     onClick={() => {
                        Modal.info({
                           content: <Barcode value={barcode?.toString()} height={40} fontSize={10} width={3} />
                        });
                     }}
                  />
               );
            }
            return;
         }
      },
      {
         title: 'Үйлдэл',
         width: 120,
         render: (_text, row) => {
            return (
               <Button
                  className="hover:border-[#2D8CFF]"
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     backgroundColor: 'white',
                     color: '#2D8CFF',
                     border: '1px solid #2D8CFF'
                  }}
                  onClick={() => {
                     getEMR(row);
                  }}
                  icon={<PlusCircleOutlined />}
               >
                  Үзлэг хийх
               </Button>
            );
         }
      }
   ];
   //hisc
   const CreateHicsSeal = async (row, result) => {
      await InsuranceApi.createHicsSeal({
         appointmentId: null,
         inpatientRequestId: null,
         operationRequestId: row.id,
         patientId: row.patientId,
         departmentId: 72,
         startAt: result?.createdDate || new Date(),
         hicsAmbulatoryStartId: null,
         hicsStartCode: result.code,
         hicsServiceId: result?.hicsServiceId,
         groupId: 201
      }).then((response) => {
         if (response.status != 201) {
            openNofi('error', 'Амжилтгүй', response);
         }
         navigate(`/main/emr`, {
            // state: data
         });
      });
   };
   const startAmbulatory = async (values) => {
      await healthInsuranceApi
         .postStartHics({
            patientRegno: selectedRow.patient?.registerNumber,
            patientFingerprint: values.fingerprint,
            hicsServiceId: values.hicsServiceId
         })
         .then(({ data }) => {
            if (data.code === 400) {
               openNofi('error', 'Амжилтгүй', data.description);
            } else if (data.code === 200) {
               CreateHicsSeal(selectedRow, data.result);
            }
         });
   };
   //
   return (
      <>
         <div className="w-full h-screen bg-[#f5f6f7] p-3">
            <div className="flex flex-col gap-2">
               <ScheduleTypeInfo />
               <InspectionTypeInfo />
               <ListFilter meta={meta} appointmentsLength={requestLists?.length || 0} getList={getRequest} />
               <div className="w-full">
                  <Card
                     bordered={false}
                     className="header-solid max-h-max rounded-md"
                     bodyStyle={{
                        padding: 8
                     }}
                  >
                     <Table
                        rowKey={'id'}
                        locale={{
                           emptyText: <Empty description={'Хоосон'} />
                        }}
                        rowClassName="hover: cursor-pointer"
                        columns={requestColumns}
                        dataSource={requestLists}
                        scroll={{
                           x: 1000
                        }}
                        loading={{
                           spinning: spinner,
                           tip: 'Уншиж байна....'
                        }}
                        pagination={false}
                     />
                  </Card>
               </div>
            </div>
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
            width={300}
         >
            <Form
               form={startFormHics}
               layout="vertical"
               initialValues={{
                  hicsServiceId: 20130
               }}
            >
               <div className="w-full flex flex-col gap-3">
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
                  <Form.Item
                     label="Т.Ү-ний дугаар"
                     name="hicsServiceId"
                     rules={[{ required: true, message: 'Үйлчилгээний төрөл заавал сонгох' }]}
                     style={{
                        width: '100%'
                     }}
                     className="mb-0"
                  >
                     <Input />
                  </Form.Item>
               </div>
            </Form>
         </Modal>
      </>
   );
}
export default IndexAfter;
