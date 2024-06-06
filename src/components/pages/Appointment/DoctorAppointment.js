import React, { useState } from 'react';
import { Empty, Input, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
//comp
import Appointment from './Index';
import Index from './Doctor/Index';
import PatientInformation from '../PatientInformation';
//api
import patientApi from '@ApiServices/pms/patient.api';
//extends
const { Search } = Input;

function DoctorAppointment() {
   const [selectedPatient, setSelectedPatient] = useState([]);
   const [notPatientsList, setNotPatientsList] = useState([]);
   const [notPatientsListLoading, setNotPatientListLoading] = useState(false);
   const [notPatientsMeta, setNotPatientsMeta] = useState({
      page: 1,
      limit: 10
   });
   const [notPatientsValue, setNotPatientsValue] = useState('');
   const getPatientById = async (id) => {
      await patientApi.getById(id).then(({ data: { response } }) => {
         setSelectedPatient(response);
      });
   };
   const onSearchSchedule = async (page, pageSize, value, value1, index) => {
      setNotPatientListLoading(true);
      if (value != undefined) {
         setNotPatientsValue(value);
      }
      const params = {
         filter: value,
         page: page,
         limit: pageSize
      };
      if ((value1, index)) {
         params[index] = value1;
      }
      await patientApi
         .getFilter({
            params: params
         })
         .then(({ data: { response } }) => {
            setNotPatientsList(response.data);
            setNotPatientsMeta(response.meta);
         })
         .finally(() => {
            setNotPatientListLoading(false);
         });
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
   return (
      <div className="w-full flex flex-col">
         <div
            className="flex xl:flex-row md:flex-col gap-10 justify-between p-3"
            style={{
               borderBottom: '1px solid #e5e6eb'
            }}
         >
            <PatientInformation patient={selectedPatient} handlesearch={onSearchSchedule} />
            <div className="grid grid-cols-2 gap-2">
               <div className="bg-[#e5e6eb] rounded-xl p-2">
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
                     pagination={{
                        style: {
                           margin: 0,
                           paddingTop: 10
                        },
                        position: ['bottomCenter'],
                        simple: true,
                        current: notPatientsMeta.page,
                        pageSize: notPatientsMeta.limit,
                        total: notPatientsMeta.itemCount,
                        onChange: (page, pageSize) => onSearchSchedule(page, pageSize, notPatientsValue)
                     }}
                  />
               </div>
               <div className="bg-[#e5e6eb] rounded-xl p-2">
                  <Index PatientId={selectedPatient.id} RegisterNumber={selectedPatient.registerNumber} />
               </div>
            </div>
         </div>
         <div className="bg-[#f5f6f7] p-3">
            <Appointment
               selectedPatient={selectedPatient}
               type={1}
               invoiceData={{
                  isCheckInsurance: true
               }}
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
