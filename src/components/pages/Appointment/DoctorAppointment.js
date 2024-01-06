import { Card, Empty, Input, Pagination, Table } from 'antd';
import { Get, ScrollRef } from '../../comman';
import React, { useRef, useState } from 'react';
import PatientInformation from '../PatientInformation';
import { selectCurrentToken } from '../../../features/authReducer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Index from './Doctor/Index';
import { SearchOutlined } from '@ant-design/icons';

import Appointment from './Index';

const { Search } = Input;

function DoctorAppointment() {
   const token = useSelector(selectCurrentToken);
   const scrollRef = useRef();
   const [selectedPatient, setSelectedPatient] = useState([]);
   //
   const [notPatientsList, setNotPatientsList] = useState([]);
   const [notPatientsListLoading, setNotPatientListLoading] = useState(false);
   const [notPatientsMeta, setNotPatientsMeta] = useState({
      page: 1,
      limit: 10
   });
   const [notPatientsValue, setNotPatientsValue] = useState('');
   //
   const getPatientById = async (id) => {
      console.log(id);
      const conf = {
         headers: {},
         params: {}
      };
      await Get('pms/patient/' + id, token, conf)
         .then((res) => {
            setSelectedPatient(res);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   const onSearchSchedule = async (page, pageSize, value, value1, index) => {
      if (value != undefined) {
         setNotPatientsValue(value);
      }
      const conf = {
         headers: {},
         params: {
            filter: value,
            page: page,
            limit: pageSize
         }
      };
      if ((value1, index)) {
         conf.params[index] = value1;
      }
      const response = await Get('pms/patient', token, conf);
      setNotPatientsList(response.data);
      setNotPatientsMeta(response.meta);
   };
   const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({}) => (
         <div style={{ padding: 8 }}>
            <Search
               placeholder={`Хайх`}
               allowClear
               onSearch={(e) => onSearchSchedule(1, 10, notPatientsValue, e, dataIndex)}
               enterButton={'Хайх'}
            />
         </div>
      ),
      filterIcon: (filtered) => <SearchOutlined style={{ color: '#4a7fc1' }} />
   });
   const notPatientsListColumn = [
      {
         title: 'Картын №',
         dataIndex: 'cardNumber',
         ...getColumnSearchProps('cardNumber')
      },
      {
         title: 'Овог',
         dataIndex: 'lastName',
         ...getColumnSearchProps('lastName')
      },
      {
         title: 'Нэр',
         dataIndex: 'firstName',
         ...getColumnSearchProps('firstName')
      },
      {
         title: 'Регистр',
         dataIndex: 'registerNumber',
         ...getColumnSearchProps('registerNumber')
      }
   ];
   //
   useEffect(() => {
      ScrollRef(scrollRef);
   }, []);
   return (
      <div className="flex flex-col">
         <div
            className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3"
            style={{
               borderBottom: '1px solid #e5e6eb'
            }}
         >
            <PatientInformation patient={selectedPatient} handlesearch={onSearchSchedule} />
            <Card
               bordered={false}
               title={<h6 className="font-semibold m-0">Үйлчлүүлэгчийн Жагсаалт</h6>}
               className="header-solid max-h-max rounded-md"
               bodyStyle={{
                  paddingTop: 0,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 10
               }}
               extra={
                  <>
                     <Pagination
                        simple
                        current={notPatientsMeta.page}
                        pageSize={notPatientsMeta.limit}
                        total={notPatientsMeta.itemCount}
                        onChange={(page, pageSize) => onSearchSchedule(page, pageSize, notPatientsValue)}
                     />
                  </>
               }
            >
               <Table
                  rowKey={'id'}
                  loading={{
                     spinning: notPatientsListLoading,
                     tip: 'Уншиж байна...'
                  }}
                  scroll={{
                     y: 150
                  }}
                  bordered
                  onRow={(row) => {
                     return {
                        onClick: () => {
                           getPatientById(row.id);
                        }
                     };
                  }}
                  rowClassName="hover:cursor-pointer"
                  locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                  columns={notPatientsListColumn}
                  dataSource={notPatientsList}
                  pagination={false}
               />
            </Card>
            <div className="lg:col-span-2 xl:col-span-1">
               <Index PatientId={selectedPatient.id} RegisterNumber={selectedPatient.registerNumber} />
            </div>
         </div>
         <div className="bg-[#f5f6f7] p-3">
            <Appointment
               selectedPatient={selectedPatient}
               type={1}
               prevAppointmentId={null}
               isExtraGrud={{
                  isCreate: true,
                  isChange: true,
                  isDelete: true
               }}
            />
         </div>
      </div>
   );
}
export default DoctorAppointment;
