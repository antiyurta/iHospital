import React, { useState } from 'react';
import { BarcodeOutlined, CheckOutlined, MinusOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Empty, Form, Modal, Table } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAge, getGender, openNofi } from '../../comman';
import { setEmrData } from '../../../features/emrReducer';
import MonitorCriteria from '../Insurance/MonitorCriteria';
import DocumentShow from '../611/DocumentShow';
import ServiceService from '../../../services/service/service';
import ScheduleTypeInfo from '../BeforeAmbulatory/Lists/Index/scheduleTypeInfo';
import ListFilter from '../BeforeAmbulatory/Lists/Index/listFilter';
import dayjs from 'dayjs';
import InspectionTypeInfo from '../BeforeAmbulatory/Lists/Index/inspectionTypeInfo';
import { ListPatientInfo, TypeInfo } from '../../ListInjection';
import Barcode from 'react-barcode';

function IndexAfter({ type, params }) {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [xrayLists, setXrayLists] = useState([]);
   const [meta, setMeta] = useState({
      page: 1,
      limit: 10
   });
   const [spinner, setSpinner] = useState(false);
   const getXrayRequest = async (page, pageSize, start, end) => {
      setSpinner(true);
      await ServiceService.getXrayRequest({
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
            setXrayLists(response.data);
            setMeta(response.meta);
         })
         .finally(() => {
            setSpinner(false);
         });
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
      // status heregteii anhan dawtan
      // tolbor shalgah
      if (row.xrayProcess === 0 && row.deviceType === 0) {
         openNofi('warning', 'Зураг', 'Зураг оруулагүй');
      } else if (!row.isPayment && row.usageType === 'OUT') {
         openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй');
      } else {
         if (row.confirmedDate === null) {
            ServiceService.patchXrayRequest({
               confirmedDate: new Date()
            });
         }
         if (row.startAt === null) {
            ServiceService.patchXrayRequest(row.id, {
               startAt: new Date()
            });
         }
         const data = {
            usageType: 'OUT',
            xrayRequestId: row.id,
            patientId: row.patientId,
            cabinetId: row.cabinetId,
            serialNumber: row.serialNumber,
            inspection: row.deviceType === 0 ? 11 : 12,
            xrayId: row.xrayId,
            startDate: row.startAt || new Date()
         };
         dispatch(setEmrData(data));
         navigate(`/main/emr`, {
            state: data
         });
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
   const xrayRequestColumns = [
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
         width: 40,
         dataIndex: ['patient', 'registerNumber'],
         render: (registerNumber) => getAge(registerNumber)
      },
      {
         title: 'Хүйс',
         dataIndex: ['patient', 'genderType'],
         render: (genderType) => getGender(genderType)
      },
      {
         title: 'Оношилгооны нэр',
         dataIndex: ['xray', 'name'],
         render: (name) => <div className="whitespace-pre-wrap">{name}</div>
      },
      {
         title: 'Үзлэгийн цаг',
         dataIndex: 'deviceSlots',
         width: 90,
         render: (deviceSlots) => getTypeInfo(deviceSlots?.startTime, deviceSlots?.endTime)
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
   return (
      <div className="w-full h-screen bg-[#f5f6f7] p-3">
         <div className="flex flex-col gap-2">
            <ScheduleTypeInfo />
            <InspectionTypeInfo />
            <ListFilter
               meta={meta}
               appointmentsLength={xrayLists?.length || 0}
               selectedTags={null}
               getList={getXrayRequest}
            />
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
                     columns={xrayRequestColumns}
                     dataSource={xrayLists}
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
   );
}
export default IndexAfter;
