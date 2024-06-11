import React, { useState } from 'react';
import { EditOutlined, MinusOutlined, PlusOutlined, StarOutlined } from '@ant-design/icons';
import { Card, Empty, message, Popconfirm, Table } from 'antd';
import moment from 'moment';
import dayjs from 'dayjs';
//comp
import { getAge, openNofi } from '../../common';
import { ListPatientInfo, TypeInfo } from '../../ListInjection';
import ListFilter from '../BeforeAmbulatory/Lists/Index/listFilter';
import { getTypeInfo } from '../BeforeAmbulatory/Lists/Index/columns';
import ScheduleTypeInfo from '../BeforeAmbulatory/Lists/Index/scheduleTypeInfo';
//api
import TreatmentRequestApi from '@ApiServices/service/treatment.api';

function BeforeTreatmentRequest() {
   const [spinner, setSpinner] = useState(false);
   const [treatments, setTreatments] = useState([]);
   const [meta, setMeta] = useState({
      page: 1,
      limit: 10
   });
   const getTreatmentRequest = async (page, limit, start, end) => {
      setSpinner(true);
      await TreatmentRequestApi.getRequest({
         page: page,
         limit: limit,
         startDate: dayjs(start).format('YYYY-MM-DD HH:mm'),
         endDate: dayjs(end).format('YYYY-MM-DD HH:mm')
      })
         .then(({ data: { response } }) => {
            console.log('res', response);
            setTreatments(response.data);
            setMeta(response.meta);
         })
         .finally(() => {
            setSpinner(false);
         });
   };
   const getUsageTypeInfo = (type) => {
      if (type === 'IN') {
         return <p className="bg-[#5bc0de] text-white">Хэвтэн</p>;
      } else {
         return <p className="bg-[#5cb85c] text-white">Амбулатори</p>;
      }
   };
   const getPaymentInfo = (isPayment) => {
      if (isPayment) {
         return <PlusOutlined style={{ color: 'green' }} />;
      } else {
         return <MinusOutlined style={{ color: 'red' }} />;
      }
   };
   const getGenderInfo = (gender) => {
      if (gender === 'MAN') {
         return 'Эр';
      } else {
         return 'Эмэгтэй';
      }
   };
   const sumDoneCount = async (id, count, isPayment, usageType) => {
      if (usageType === 'OUT' && !isPayment) {
         openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй');
      } else {
         const conf = {
            headers: {},
            params: {}
         };
         // const response = await Patch('service/treatmentRequest/' + id, token, conf, {
         //    doneCount: count + 1
         // });
         if (response === 200) {
            // getTreatmentRequest(1, 10, start, end);
         }
      }
   };
   const columns = [
      {
         title: 'Төрөл',
         dataIndex: 'usageType',
         width: 110,
         render: (text) => {
            return text === 'IN' ? (
               <TypeInfo bgColor="#5cb85c" textColor="black" text={'Хэвтэн'} />
            ) : (
               <TypeInfo bgColor="#5cb85c" textColor="white" text={'Амбулатори'} />
            );
         }
      },
      {
         title: 'Эмчилгээний нэр',
         dataIndex: ['treatment', 'name'],
         render: (text) => {
            return <div className="whitespace-pre-wrap">{text}</div>;
         }
      },
      {
         title: 'Он сар',
         dataIndex: 'requestDate',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD');
         }
      },
      {
         title: 'Үзлэгийн цаг',
         dataIndex: 'treatmentSlots',
         width: 120,
         render: (slot, row) => getTypeInfo(row.type, slot?.startTime, slot?.endTime)
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
         render: (_, row) => {
            return getGenderInfo(row.patient?.genderType);
         }
      },
      {
         title: 'Хийгдэх өдөр',
         dataIndex: 'dayLength'
      },
      {
         title: 'Нийт хийгдэх',
         dataIndex: 'qty'
      },
      {
         title: 'Хийгдсэн тоо',
         dataIndex: 'doneCount'
      },
      {
         title: 'Илгээсэн',
         dataIndex: 'createdBy'
      },
      {
         title: 'Эмч',
         dataIndex: ['employees', 'firstName']
      },
      {
         title: 'Төлбөр',
         dataIndex: 'isPayment',
         render: (text) => {
            return getPaymentInfo(text);
         }
      },
      {
         title: 'Төлөв солих',
         render: (_, row) => {
            if (row.doneCount === row.qty) {
               return <StarOutlined style={{ color: 'green' }} />;
            } else {
               return (
                  <Popconfirm
                     title="Эмчилгээ хийсэн эсэх"
                     onConfirm={() => sumDoneCount(row.id, row.doneCount, row.isPayment, row.usageType)}
                     onCancel={() => message.error('Цуцалсан')}
                     okText="Тийм"
                     cancelText="Үгүй"
                  >
                     <EditOutlined style={{ color: 'blue' }} />
                  </Popconfirm>
               );
            }
         }
      }
   ];
   return (
      <div className="w-full bg-[#f5f6f7] p-3">
         <div className="flex flex-col gap-3">
            <ScheduleTypeInfo />
            <ListFilter meta={meta} appointmentsLength={treatments?.length || 0} getList={getTreatmentRequest} />
            <Card
               bordered={false}
               className="header-solid rounded-md"
               bodyStyle={{
                  padding: 8
               }}
            >
               <Table
                  rowKey={'id'}
                  scroll={{
                     y: 665
                  }}
                  bordered
                  locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                  loading={{
                     spinning: spinner,
                     tip: 'Уншиж байна....'
                  }}
                  columns={columns}
                  dataSource={treatments}
                  pagination={false}
               />
            </Card>
         </div>
      </div>
   );
}
export default BeforeTreatmentRequest;
