import { Card, List, Radio, Select, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import male from '../../../assets/images/maleAvatar.svg';
import Ocs from '../OCS/Ocs';
import MainAmbulatory from './Ambulatory/MainAmbulatory';
import MainPatientHistory from './EPatientHistory/MainPatientHistory';
import { useSelector } from 'react-redux';
import {
   selectCurrentToken,
   selectCurrentUserId
} from '../../../features/authReducer';
import PatientInformation from '../PatientInformation';
import { Get, openNofi, Post } from '../../comman';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import Schedule from '../OCS/Schedule';
import MainInPatient from './InPatient/MainInPatient';
import EmrSupports from '../EmrSupports';
const config = {
   headers: {},
   params: {}
};
const { Option } = Select;
const { Text } = Typography;
function EMR() {
   const IncomeUsageType = useLocation().state.usageType;
   const IncomePatientId = useLocation().state.patientId;
   const IncomeCabinetId = useLocation().state.cabinetId;
   const Inspection = useLocation().state.inspection;
   const AppointmentId = useLocation().state.appointmentId;
   const XrayRequestId = useLocation().state.xrayRequestId;
   const InpatientRequestId = useLocation().state?.inpatientRequestId;
   const [cardLoading, setCardLoading] = useState(false);
   const token = useSelector(selectCurrentToken);
   const employeeId = useSelector(selectCurrentUserId);
   const [type, setType] = useState('EMR'); // ['OCS', 'EMR']
   const [appointments, setAppointments] = useState([]);
   const [inPatientAppointments, setInPatientAppointments] = useState([]);
   const [problems, setProblems] = useState([]);
   //
   const [selectedPatient, setSelectedPatient] = useState([]);
   const [scheduleModal, setScheduleModal] = useState(false);
   const [payments, setPayments] = useState([]);
   const [isOpen, setIsOpen] = useState(false);
   const [isUsageType, setIsUsageType] = useState(IncomeUsageType);
   //

   const handleTypeChange = ({ target: { value } }) => {
      setType(value);
   };

   const getByIdPatient = async (id) => {
      config.params.patientId = null;
      const response = await Get('pms/patient/' + id, token, config);
      if (response) {
         setSelectedPatient(response);
      }
   };
   const handleSearch = async (value) => {
      config.params.registerNumber = value;
      const response = await Get('pms/patient', token, config);
      if (response.data.length != 0) {
         setSelectedPatient(response.data[0]);
      } else {
         openNofi('error', 'Өвчтөн', 'Өвчтөн олдохгүй байна');
      }
   };
   const handleClick = async (value) => {
      if (value?.length > 0 || value) {
         var stateIsCito = false;
         value.map((item) => {
            if (!item.isCito) {
               stateIsCito = true;
            }
         });
         const data = {};
         if (IncomeUsageType === 'IN') {
            data['inpatientRequestId'] = InpatientRequestId;
         } else {
            data['appointmentId'] = AppointmentId;
         }
         data['patientId'] = selectedPatient.id;
         data['employeeId'] = employeeId;
         data['requestDate'] = new Date();
         data['isCito'] = stateIsCito ? true : false;
         data['usageType'] = IncomeUsageType;
         data['services'] = value;
         const response = await Post('service-request', token, config, data);
         if (response === 201) {
            const conf = {
               headers: {},
               params: {
                  patientId: selectedPatient.id
               }
            };
            const response = await Get('payment/invoice', token, conf);
            setPayments(response.data);
            setIsOpen(true);
         }
      } else {
         openNofi('warning', 'sadsad', 'sadsa');
      }
   };
   //
   const getInspectionNotes = async (PatientId) => {
      const conf = {
         headers: {},
         params: {
            patientId: PatientId
         }
      };
      const response = await Get('appointment', token, conf);
      if (response.data.length > 0) {
         var result = response.data.reduce(function (r, a) {
            //Оноор бүлэглэх
            r[a.createdAt.substring(0, 4)] =
               r[a.createdAt.substring(0, 4)] || [];
            r[a.createdAt.substring(0, 4)].push(a);
            getProblems(a.id);
            return r;
         }, Object.create(null));
         setAppointments(result);
      } else {
         setAppointments([]);
      }
      config.params.patientId = null;
   };
   const getInPatientInspectionNotes = async (PatientId) => {
      const conf = {
         headers: {},
         params: {
            patientId: PatientId
         }
      };
      const response = await Get('service/inPatient-request', token, conf);
      if (response.data.length > 0) {
         var result = response.data.reduce(function (r, a) {
            //Оноор бүлэглэх
            r[a.createdAt.substring(0, 4)] =
               r[a.createdAt.substring(0, 4)] || [];
            r[a.createdAt.substring(0, 4)].push(a);
            return r;
         }, Object.create(null));
         setInPatientAppointments(result);
      } else {
         setInPatientAppointments([]);
      }
   };
   const getProblems = async (id) => {
      const response = await Get('appointment/show/' + id, token, config);
      var problem = [];
      if (response.patientDiagnosis.length > 0) {
         var problem = [];
         problem.push({
            doctorId:
               response.employee?.lastName.substring(0, 1) +
               '.' +
               response.employee?.firstName,
            diagnose: response.patientDiagnosis,
            inspectionDate: response.createdAt
         });
      }
      setProblems(problem);
   };
   //
   const usageType = (value) => {
      setIsUsageType(value);
   };
   //
   useEffect(() => {
      getByIdPatient(IncomePatientId);
      getInspectionNotes(IncomePatientId);
      getInPatientInspectionNotes(IncomePatientId);
   }, []);
   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full p-1">
               <EmrSupports
                  appointmentId={AppointmentId}
                  usageType={IncomeUsageType}
                  patient={selectedPatient}
               />
            </div>
            <div
               className={
                  type === 'EMR'
                     ? 'w-full md:w-full xl:w-1/2'
                     : 'w-full md:w-full xl:w-full'
               }
            >
               <div className="flex flex-wrap">
                  <div
                     className={
                        type === 'EMR'
                           ? 'w-full md:w-full p-1'
                           : 'w-full md:w-3/5 p-1'
                     }
                  >
                     <div className="pb-1">
                        <PatientInformation
                           patient={selectedPatient}
                           handlesearch={handleSearch}
                           handleTypeChange={handleTypeChange}
                           // OCS={AppointmentId ? true : false}
                           OCS={
                              AppointmentId || InpatientRequestId ? true : false
                           }
                           type={type}
                        />
                     </div>
                     <div className="pt-1">
                        <Card
                           bordered={false}
                           title={
                              <h6 className="font-semibold m-0">
                                 Гол асуудлууд
                              </h6>
                           }
                           className="header-solid rounded-md"
                           style={{ height: '100%' }}
                           loading={cardLoading}
                           bodyStyle={{
                              paddingTop: 0,
                              paddingLeft: 10,
                              paddingRight: 10,
                              paddingBottom: 10,
                              minHeight: 150,
                              maxHeight: 150
                           }}
                        >
                           <div className="scroll" style={{ maxHeight: 150 }}>
                              <List
                                 itemLayout="horizontal"
                                 dataSource={problems}
                                 renderItem={(item) => (
                                    <List.Item>
                                       <List.Item.Meta
                                          avatar={
                                             <img
                                                style={{ width: 20 }}
                                                src={male}
                                             />
                                          }
                                          title={
                                             <div className="flow-root">
                                                <div className="float-left">
                                                   <p>{item.doctorId}</p>
                                                </div>
                                                <div className="float-right">
                                                   <p>
                                                      {moment(
                                                         item.inspectionDate
                                                      ).format('YYYY-MM-DD')}
                                                   </p>
                                                </div>
                                             </div>
                                          }
                                          description={item?.diagnose?.map(
                                             (diagnose, index) => {
                                                return (
                                                   <p
                                                      key={index}
                                                      className="text-black"
                                                   >
                                                      {diagnose.diagnose.code +
                                                         ' ' +
                                                         diagnose.diagnose
                                                            .nameMn}
                                                   </p>
                                                );
                                             }
                                          )}
                                       />
                                    </List.Item>
                                 )}
                              />
                           </div>
                        </Card>
                     </div>
                  </div>
                  <div
                     className={
                        type === 'EMR' ? 'w-full p-1' : 'w-full md:w-2/5 p-1'
                     }
                  >
                     <Card
                        bordered={false}
                        // title={<h6 className="font-semibold m-0">Амбулатори</h6>}
                        title={
                           <Radio.Group
                              defaultValue={isUsageType}
                              onChange={(e) => usageType(e.target.value)}
                           >
                              <Radio value={'OUT'}>Амбулатори</Radio>
                              <Radio value={'IN'}>Хэвтэн</Radio>
                           </Radio.Group>
                        }
                        className="header-solid max-h-max rounded-md scroll"
                        loading={cardLoading}
                        style={{ height: '100%' }}
                        bodyStyle={{
                           paddingTop: 0,
                           paddingLeft: 10,
                           paddingRight: 10,
                           paddingBottom: 10,
                           minHeight: 300,
                           maxHeight: 300
                           // overflowX: "hidden",
                           // overflowY: "scroll",
                        }}
                     >
                        {isUsageType === 'OUT' && (
                           <MainAmbulatory
                              appointments={appointments}
                              patientId={IncomePatientId}
                           />
                        )}
                        {isUsageType === 'IN' && (
                           <MainInPatient
                              appointments={inPatientAppointments}
                              patientId={IncomePatientId}
                           />
                        )}
                     </Card>
                  </div>
               </div>
            </div>
            <div
               className={
                  type === 'OCS' ? 'w-full' : 'w-full md:w-full xl:w-1/2'
               }
            >
               <div className="p-1">
                  {type == 'EMR' ? (
                     <Card
                        bordered={false}
                        title={
                           <h6 className="font-semibold m-0">Явцын үзлэг</h6>
                        }
                        className="header-solid max-h-max rounded-md scroll"
                        loading={cardLoading}
                        bodyStyle={{
                           paddingTop: 0,
                           paddingLeft: 10,
                           paddingRight: 10,
                           paddingBottom: 10,
                           minHeight: 724,
                           maxHeight: 724
                        }}
                        extra={
                           <>
                              <Select
                                 defaultValue={Inspection}
                                 disabled={Inspection === 11 ? true : false}
                                 style={{ width: 200 }}
                              >
                                 <Option value={1} disabled={true}>
                                    Анхан
                                 </Option>
                                 <Option value={2} disabled={true}>
                                    Давтан
                                 </Option>
                                 <Option value={3}>Урьдчилан сэргийлэх</Option>
                                 <Option value={4}>Гэрийн эргэлт</Option>
                                 <Option value={5}>Идэвхтэй хяналт</Option>
                                 <Option value={6}>Дуудлагаар</Option>
                                 <Option value={11} disabled={true}>
                                    xray
                                 </Option>
                                 <Option value={12} disabled={true}>
                                    exo
                                 </Option>
                              </Select>
                           </>
                        }
                     >
                        <MainPatientHistory
                           AppointmentId={AppointmentId}
                           XrayRequestId={XrayRequestId}
                           PatientId={IncomePatientId}
                           CabinetId={IncomeCabinetId}
                           Inspection={Inspection}
                           UsageType={IncomeUsageType}
                           handleClick={handleTypeChange}
                        />
                     </Card>
                  ) : null}
                  {type == 'OCS' ? (
                     <Card
                        bordered={false}
                        title={
                           <h6 className="font-semibold m-0">Шинэ захиалга</h6>
                        }
                        className="header-solid max-h-max rounded-md"
                        loading={cardLoading}
                        bodyStyle={{
                           paddingTop: 0,
                           paddingBottom: 16
                        }}
                     >
                        <Ocs
                           selectedPatient={selectedPatient}
                           UsageType={IncomeUsageType}
                           handleClick={handleClick}
                        />
                     </Card>
                  ) : null}
               </div>
            </div>
         </div>
         <Schedule
            isOpen={isOpen}
            isOCS={true}
            incomeData={payments}
            selectedPatient={selectedPatient}
            isClose={() => setIsOpen(false)}
         />
      </>
   );
}

export default EMR;
