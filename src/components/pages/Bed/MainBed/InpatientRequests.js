import React, { useEffect, useState } from 'react';
import { Button, Card, ConfigProvider, Empty, Input, Modal, Table, Tag } from 'antd';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
//commmon
import { getAge, getGenderInType, localMn } from '@Comman/common.js';
import { ListPatientInfo } from '@Comman/ListInjection';
//Api
import InpatientApi from '@ApiServices/service/inpatient.js';
//extends
import orderType from '../orderType.js';
const { CheckableTag } = Tag;
const { Search } = Input;
function InpatientRequests() {
   const [isLoading, setIsLoading] = useState(false);
   const [inpatientRequests, setInpatientRequests] = useState([]);
   const [inpatientRequsetsMeta, setInpatientRequestsMeta] = useState({});
   const [checkedKey, setCheckedKey] = useState(0);
   const [pValue, setPvalue] = useState('');
   const getInpatientRequests = async (page, pageSize, process, value) => {
      setIsLoading(true);
      const params = {
         page: page,
         limit: pageSize,
         process: process,
         filter: null
      };
      if (value) {
         params['filter'] = value;
         setPvalue(value);
      }
      await InpatientApi.getInpatient({
         params: params
      })
         .then(({ data: { response } }) => {
            setInpatientRequests(response.data);
            setInpatientRequestsMeta(response.meta);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const setPatientOutBed = async (bedId, rowId) => {
      Modal.info({
         title: 'Эмнэлгээс гаргах',
         okText: 'Гаргах',
         closable: true,
         content: <div>Та эмнэлгээс гаргахдаа итгэлтэй байна уу</div>,
         async onOk() {
            await InpatientApi.patch(rowId, {
               isOut: true,
               process: 2,
               bedId: bedId
            }).then(() => {
               getInpatientRequests(inpatientRequsetsMeta.page, inpatientRequsetsMeta.limit, checkedKey);
            });
         }
      });
   };
   const column = [
      {
         title: '№',
         render: (_, _record, index) => {
            return inpatientRequsetsMeta.page * inpatientRequsetsMeta.limit - (inpatientRequsetsMeta.limit - index - 1);
         }
      },
      {
         title: 'Хүсэлт илгээсэн огноо',
         dataIndex: 'createdAt',
         render: (text) => {
            return dayjs(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Захиалсан',
         dataIndex: 'requestEmployee',
         render: (requestEmployee) => <ListPatientInfo patientData={requestEmployee} />
      },
      {
         title: 'Эмч',
         dataIndex: 'doctor',
         render: (doctor) => <ListPatientInfo patientData={doctor} />
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
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
         width: 40,
         dataIndex: ['patient', 'genderType'],
         render: (genderType) => getGenderInType(genderType)
      },
      {
         title: 'Хэвтэх үеийн мэдээлэл',
         children: [
            {
               title: 'Тасгийн нэр',
               dataIndex: ['structure', 'name']
            },
            {
               title: 'Өрөө №',
               dataIndex: ['room', 'roomNumber']
            },
            {
               title: 'Ор №',
               dataIndex: ['bed', 'bedNumber']
            }
         ]
      },
      {
         title: 'Хэвтэх өдөр',
         dataIndex: 'startDate',
         render: (text) => {
            if (text != null) {
               return dayjs(text).format('YYYY-MM-DD');
            }
            return;
         }
      },
      {
         title: 'Гарах өдөр',
         dataIndex: 'endDate',
         render: (text) => {
            if (text != null) {
               return dayjs(text).format('YYYY-MM-DD');
            }
            return;
         }
      },
      {
         title: 'Гарсан өдөр',
         dataIndex: 'outDate',
         render: (text) => {
            if (text != null) {
               return dayjs(text).format('YYYY-MM-DD');
            }
            return;
         }
      },
      {
         title: 'Үйдэл',
         dataIndex: 'patient',
         render: (patient, row) => {
            if (row?.process === 0) {
               return (
                  <Link
                     className="app-button-regular"
                     to="/main/bed_management/create"
                     state={{
                        isRead: true,
                        patient: patient,
                        inpatientRequestId: row.id
                     }}
                  >
                     Хэвтүүлэх
                  </Link>
               );
            } else if (row?.process === 2) {
               return (
                  <Button type="primary" onClick={() => setPatientOutBed(row?.bedId, row?.id)}>
                     Гаргах
                  </Button>
               );
            }
         }
      }
   ];
   useEffect(() => {
      getInpatientRequests(1, 10, checkedKey);
   }, [checkedKey]);
   return (
      <div className="flex flex-wrap">
         <div className="w-full">
            <div className="bg-[#1890ff] checkTag">
               {orderType.map((tag, index) => (
                  <CheckableTag
                     key={index}
                     checked={checkedKey === tag.value}
                     onChange={() => {
                        setCheckedKey(tag.value);
                     }}
                     className="text-white m-1"
                  >
                     <div className="flex">
                        <img src={require(`../../../../assets/bed/${tag.img}`)} width="20" />
                        {tag.label}
                     </div>
                  </CheckableTag>
               ))}
            </div>
         </div>
         <div className="w-full mt-2">
            <Card title="Өвчтөний мэдээлэл" bordered={false} className="header-solid max-h-max rounded-md mb-2">
               <div className="py-2">
                  <Search
                     placeholder="Өвчтний нэр, регистр дугаар, Тасаг"
                     allowClear
                     enterButton="Хайх"
                     size="large"
                     onSearch={(e) => getInpatientRequests(1, 20, checkedKey, e)}
                  />
               </div>
               <ConfigProvider locale={localMn()}>
                  <Table
                     rowKey={'id'}
                     scroll={{
                        x: 1000
                     }}
                     rowClassName={'hover:cursor-pointer'}
                     locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                     loading={{
                        spinning: isLoading,
                        tip: 'Уншиж байна....'
                     }}
                     columns={column}
                     dataSource={inpatientRequests}
                     pagination={{
                        position: ['bottomCenter'],
                        size: 'small',
                        current: inpatientRequsetsMeta.page,
                        total: inpatientRequsetsMeta.itemCount,
                        showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                        pageSize: inpatientRequsetsMeta.limit,
                        showSizeChanger: true,
                        pageSizeOptions: ['5', '10', '20', '50'],
                        showQuickJumper: true,
                        onChange: (page, pageSize) => getInpatientRequests(page, pageSize, checkedKey, pValue)
                     }}
                  />
               </ConfigProvider>
            </Card>
         </div>
      </div>
   );
}
export default InpatientRequests;
