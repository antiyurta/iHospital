import {
   ClockCircleOutlined,
   EditOutlined,
   MinusOutlined,
   PlusOutlined,
   ReloadOutlined,
   StarOutlined
} from '@ant-design/icons';
import {
   Button,
   Card,
   DatePicker,
   Empty,
   message,
   Popconfirm,
   Table
} from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, getAge, openNofi, Patch } from '../../comman';
const { RangePicker } = DatePicker;
function BeforeTreatmentRequest() {
   const today = new Date();
   const token = useSelector(selectCurrentToken);
   const [spinner, setSpinner] = useState(false);
   const [start, setStart] = useState('');
   const [end, setEnd] = useState('');
   const [treatments, setTreatments] = useState([]);
   const [meta, setMeta] = useState({});
   const getTreatmentRequest = async (page, pageSize, start, end) => {
      setSpinner(true);
      start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            startDate: moment(start).format('YYYY-MM-DD HH:mm'),
            endDate: moment(end).format('YYYY-MM-DD HH:mm')
         }
      };
      setStart(start);
      setEnd(end);
      const response = await Get('service/treatmentRequest', token, conf);
      console.log(response);
      if (response.data) {
         setTreatments(response.data);
         setMeta(response.meta);
      }
      setSpinner(false);
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
   const getTypeInfo = (begin, end) => {
      if (begin === undefined && end === undefined) {
         return <p className="bg-[#f0ad4e] text-white">Шууд</p>;
      } else {
         return (
            <div className="bg-[#5cb85c] text-white">
               <span>{begin}</span>
               <ClockCircleOutlined className="mx-1.5" />
               <span>{end}</span>
            </div>
         );
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
         const response = await Patch(
            'service/treatmentRequest/' + id,
            token,
            conf,
            {
               doneCount: count + 1
            }
         );
         if (response === 200) {
            getTreatmentRequest(1, 10, start, end);
         }
      }
   };
   const columns = [
      {
         title: 'Төрөл',
         dataIndex: 'usageType',
         render: (text) => {
            return getUsageTypeInfo(text);
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
         title: 'Орох цаг',
         render: (_, row) => {
            return getTypeInfo(
               row.treatmentSlots?.startTime?.substr(0, 5),
               row.treatmentSlots?.endTime?.substr(0, 5)
            );
         }
      },
      {
         title: 'Картын №',
         dataIndex: ['patient', 'cardNumber']
      },
      {
         title: 'Овог',
         dataIndex: ['patient', 'lastName']
      },
      {
         title: 'Нэр',
         dataIndex: ['patient', 'firstName']
      },
      {
         title: 'Регистр №',
         dataIndex: ['patient', 'registerNumber']
      },
      {
         title: 'Нас',
         render: (_, row) => {
            return getAge(row.patient?.registerNumber);
         }
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
                     onConfirm={() =>
                        sumDoneCount(
                           row.id,
                           row.doneCount,
                           row.isPayment,
                           row.usageType
                        )
                     }
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
   useEffect(() => {
      getTreatmentRequest(1, 10, today, today);
   }, []);
   return (
      <div className="flex flex-wrap">
         <div className="w-full">
            <Card
               title={'Эмийн бус эмчилгээ жагсаалт'}
               bordered={false}
               className="header-solid max-h-max rounded-md"
            >
               <div className="flex flex-wrap">
                  <div className="basis-1/3">
                     <RangePicker
                        onChange={(e) => {
                           if (e != null) {
                              getTreatmentRequest(1, 10, e[0], e[1]);
                           }
                        }}
                        locale={mnMN}
                     />
                  </div>
                  <div className="w-full py-2">
                     <div className="flex float-left">
                        {/* <div className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                        <span className="font-medium mx-1">Яаралтай</span>
                                    </div> */}
                        <div
                           className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                           role="alert"
                        >
                           <span className="font-medium mx-1">Шууд</span>
                        </div>
                        <div
                           className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                           role="alert"
                        >
                           <span className="font-medium mx-1">
                              Урьдчилсан захиалга
                           </span>
                        </div>
                        {/* <div className="p-1 mx-1 text-sm text-white bg-[#5bc0de] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                        <span className="font-medium mx-1">Урьдчилан сэргийлэх</span>
                                    </div> */}
                     </div>
                     <div className="float-right">
                        <Button
                           title="Сэргээх"
                           type="primary"
                           onClick={() =>
                              getTreatmentRequest(1, 10, start, end)
                           }
                        >
                           <ReloadOutlined // spin={!spinner}
                           />
                        </Button>
                     </div>
                  </div>
                  <div className="w-full py-2">
                     <Table
                        rowKey={'id'}
                        bordered
                        locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                        loading={{
                           spinning: spinner,
                           tip: 'Уншиж байна....'
                        }}
                        columns={columns}
                        dataSource={treatments}
                        pagination={{
                           simple: true,
                           pageSize: 10,
                           total: meta.itemCount,
                           current: meta.page,
                           onChange: (page, pageSize) =>
                              getTreatmentRequest(page, pageSize, start, end)
                        }}
                     />
                  </div>
               </div>
            </Card>
         </div>
      </div>
   );
}
export default BeforeTreatmentRequest;
