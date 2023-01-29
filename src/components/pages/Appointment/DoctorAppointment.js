import { Card, Empty, Input, Pagination, Table } from 'antd';
import { Get, ScrollRef } from '../../comman';
import React, { useRef, useState } from 'react';
import PatientInformation from '../PatientInformation';
import { selectCurrentToken } from '../../../features/authReducer';
import { useSelector } from 'react-redux';
import Appointment from './Schedule/Appointment';
import { useEffect } from 'react';
import Index from './Doctor/Index';
import { SearchOutlined } from '@ant-design/icons';
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
   const onSearchSchedule = async (page, pageSize, value, value1, index) => {
      if (value != undefined) {
         setNotPatientsValue(value);
      }
      const conf = {
         headers: {},
         params: {
            registerNumber: value,
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
               onSearch={(e) =>
                  onSearchSchedule(1, 10, notPatientsValue, e, dataIndex)
               }
               enterButton={'Хайх'}
            />
         </div>
      ),
      filterIcon: (filtered) => <SearchOutlined style={{ color: '#2d8cff' }} />
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
      <div>
         <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 p-1">
               <PatientInformation
                  patient={selectedPatient}
                  handlesearch={onSearchSchedule}
               />
            </div>
            <div className="w-full md:w-4/12 p-1">
               <Card
                  bordered={false}
                  title={
                     <h6 className="font-semibold m-0">
                        Үйлчлүүлэгчийн Жагсаалт
                     </h6>
                  }
                  className="header-solid max-h-max rounded-md"
                  bodyStyle={{
                     paddingTop: 0,
                     paddingLeft: 10,
                     paddingRight: 10,
                     paddingBottom: 10,
                     minHeight: 150,
                     maxHeight: 150
                  }}
                  extra={
                     <>
                        <Pagination
                           simple
                           current={notPatientsMeta.page}
                           pageSize={notPatientsMeta.limit}
                           total={notPatientsMeta.itemCount}
                           onChange={(page, pageSize) =>
                              onSearchSchedule(page, pageSize, notPatientsValue)
                           }
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
                        y: 100
                     }}
                     bordered
                     onRow={(row) => {
                        return {
                           onClick: () => {
                              setSelectedPatient(row);
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
            </div>
            <div className="w-full md:w-4/12 p-1">
               <Index PatientId={selectedPatient.id} />
            </div>
         </div>
         <div className="px-1">
            <Appointment selectedPatient={selectedPatient} type={1} />
         </div>
      </div>
   );
}
export default DoctorAppointment;
