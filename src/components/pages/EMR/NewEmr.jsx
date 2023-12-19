import React from 'react';
import Ocs from '../OCS/Ocs';
import { connect } from 'react-redux';
import { openNofi } from '../../comman';
import EmrSupports from '../EmrSupports';
import PatientInformation from '../PatientInformation';
import { Button, Radio } from 'antd';
import MainPatientHistory from './EPatientHistory/MainPatientHistory';
import Schedule from '../OCS/Schedule';
import { delEmrData } from '../../../features/emrReducer';
import { delNote } from '../../../features/noteReducer';
import PmsPatientServices from '../../../services/pms/patient.api';
import AppointmentService from '../../../services/appointment/api-appointment-service';
import ServiceRequestService from '../../../services/serviceRequest';
import PaymentService from '../../../services/payment/payment';
import NewCard from '../../Card/Card';
import DoctorNotes from './DoctorNotes';
import EmrTimer from './EmrTimer';
import OneWindow from './OneWindow';
import { FullscreenExitOutlined, FullscreenOutlined, PrinterOutlined } from '@ant-design/icons';
import MainAmbulatory from './Ambulatory/MainAmbulatory';
import MainInPatient from './InPatient/MainInPatient';
import NewEmrSupport from './NewEmrSupport';

const getReduxDatas = (state) => {
   const IncomeEMRData = state.emrReducer.emrData;
   const token = state.authReducer.token;
   const employeeId = state.authReducer.userId;
   return { IncomeEMRData, token, employeeId };
};
const dispatchReduxDatas = (dispatch) => {
   return {
      delEmrData: () => dispatch(delEmrData()),
      delNoteData: () => dispatch(delNote())
   };
};
class NewEmr extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         type: 'EMR',
         selectedPatient: {},
         appointments: [],
         usageType: this.props.IncomeEMRData.usageType,
         isOpen: false,
         payments: [],
         isExpandHistory: true,
         isExpandInspection: true,
         isExpandOneWindow: true,
         colSpan: 2
      };
   }
   async getByIdPatient() {
      await PmsPatientServices.getById(this.props.IncomeEMRData.patientId).then((response) => {
         this.setState({ selectedPatient: response.data?.response });
      });
   }
   async getInspectionNotes() {
      await AppointmentService.getByPageFilter({
         patientId: this.props.IncomeEMRData.patientId
      }).then((response) => {
         if (response.data.response?.data?.length > 0) {
            var result = response.data.response.data.reduce(function (r, a) {
               r[a.createdAt.substring(0, 4)] = r[a.createdAt.substring(0, 4)] || [];
               r[a.createdAt.substring(0, 4)].push(a);
               return r;
            }, Object.create(null));
            this.setState({
               appointments: result
            });
         } else {
            this.setState({
               appointments: []
            });
         }
      });
   }
   handleTypeChange = ({ target: { value } }) => {
      this.setState({
         type: value
      });
   };
   saveOrder = async (value) => {
      if (value?.length > 0 || value) {
         const data = {};
         if (this.props.IncomeEMRData.usageType === 'IN') {
            data['inpatientRequestId'] = this.props.IncomeEMRData.inpatientRequestId;
            value?.map((item) => {
               item.inpatientPrice = item.price;
            });
         } else {
            data['appointmentId'] = this.props.IncomeEMRData.appointmentId;
         }
         data['patientId'] = this.state.selectedPatient.id;
         data['employeeId'] = this.props.employeeId;
         data['requestDate'] = new Date();
         data['usageType'] = this.props.IncomeEMRData.usageType;
         data['services'] = value;
         await ServiceRequestService.post(data).then(async (response) => {
            if (response.status === 201) {
               const res = await PaymentService.get({
                  params: {
                     patientId: this.state.selectedPatient.id
                  }
               });
               this.setState({
                  payments: res.data?.response?.data,
                  isOpen: true
               });
            }
         });
      } else {
         openNofi('warning', 'Анхааруулга', 'OTS Захиалах');
      }
   };
   async componentDidMount() {
      await this.getByIdPatient();
      await this.getInspectionNotes();
   }
   async componentWillUnmount() {
      this.props.delNoteData();
      console.log('Үзлэг дуусав');
   }
   render() {
      return (
         <>
            <div className="flex flex-col gap-3">
               {/* {this.props.IncomeEMRData.usageType === 'OUT' && (
                  <div className="flex flex-col gap-3">
                     <EmrSupports
                        appointmentId={this.props.IncomeEMRData.appointmentId}
                        hicsServiceId={this.props.IncomeEMRData.hicsServiceId}
                        usageType={this.props.IncomeEMRData.usageType}
                        patient={this.state.selectedPatient}
                        patientId={this.props.IncomeEMRData.patientId}
                        departmentId={this.props.IncomeEMRData.departmentId}
                     />
                  </div>
               )} */}
               <NewEmrSupport />
               <div className="w-full flex sm:flex-col xl:flex-row gap-3 justify-between p-2 bg-white">
                  <PatientInformation
                     patient={this.state.selectedPatient}
                     handlesearch={false}
                     handleTypeChange={this.handleTypeChange}
                     OCS={
                        this.props.IncomeEMRData.appointmentId || this.props.IncomeEMRData.inpatientRequestId
                           ? true
                           : false
                     }
                     type={this.state.type}
                     appointmentId={
                        this.props.IncomeEMRData.appointmentId || this.props.IncomeEMRData.inpatientRequestId
                     }
                     departmentId={this.props.IncomeEMRData.departmentId}
                  />
                  <div className="flex flex-row gap-2">
                     <DoctorNotes />
                     {this.state.usageType === 'OUT' ? (
                        <EmrTimer startDate={this.props.IncomeEMRData.startDate} />
                     ) : null}
                  </div>
               </div>
               <div className={this.state.type === 'EMR' ? 'grid grid-cols-5 gap-3' : 'flex flex-col gap-3'}>
                  {this.state.isExpandHistory && this.state.type === 'EMR' ? (
                     <div
                        className={this.state.type === 'EMR' ? `sm:col-span-5 xl:col-span-${this.state.colSpan}` : null}
                     >
                        <NewCard
                           title="Түүх"
                           style={{
                              height: '100%'
                           }}
                           extra={
                              <div className="flex flex-row gap-3">
                                 <Button icon={<PrinterOutlined />} />
                                 <Button
                                    onClick={() => {
                                       this.setState({
                                          isExpandHistory: true,
                                          isExpandInspection: !this.state.isExpandInspection,
                                          isExpandOneWindow: !this.state.isExpandOneWindow,
                                          colSpan:
                                             this.state.isExpandHistory &&
                                             !this.state.isExpandInspection &&
                                             !this.isExpandOneWindow
                                                ? 2
                                                : 5
                                       });
                                    }}
                                    icon={
                                       this.state.isExpandHistory ? <FullscreenOutlined /> : <FullscreenExitOutlined />
                                    }
                                 />
                              </div>
                           }
                        >
                           <div className="flex flex-col gap-3">
                              <Radio.Group
                                 defaultValue={this.state.usageType}
                                 onChange={(e) =>
                                    this.setState({
                                       usageType: e.target.value
                                    })
                                 }
                              >
                                 <Radio value={'OUT'}>Амбулатори</Radio>
                                 <Radio value={'IN'}>Хэвтэн</Radio>
                              </Radio.Group>
                              {this.state.usageType === 'OUT' ? (
                                 <MainAmbulatory
                                    appointments={this.state.appointments}
                                    patientId={this.props.IncomeEMRData.patientId}
                                 />
                              ) : (
                                 <MainInPatient patientId={this.props.IncomeEMRData.patientId} />
                              )}
                           </div>
                        </NewCard>
                     </div>
                  ) : null}
                  {this.state.isExpandInspection ? (
                     <div
                        className={this.state.type === 'EMR' ? `sm:col-span-5 xl:col-span-${this.state.colSpan}` : null}
                     >
                        {this.state.type === 'EMR' ? (
                           <NewCard
                              title="Явцын үзлэг"
                              style={{
                                 height: '100%'
                              }}
                              bodyStyle={{
                                 height: 'calc(100% - 60px)'
                              }}
                              extra={
                                 <div className="flex flex-row gap-3">
                                    <Button icon={<PrinterOutlined />} />
                                    <Button
                                       onClick={() => {
                                          this.setState({
                                             isExpandHistory: !this.state.isExpandHistory,
                                             isExpandInspection: true,
                                             isExpandOneWindow: !this.state.isExpandOneWindow,
                                             colSpan:
                                                !this.state.isExpandHistory &&
                                                this.state.isExpandInspection &&
                                                !this.isExpandOneWindow
                                                   ? 2
                                                   : 5
                                          });
                                       }}
                                       icon={
                                          this.state.isExpandInspection ? (
                                             <FullscreenOutlined />
                                          ) : (
                                             <FullscreenExitOutlined />
                                          )
                                       }
                                    />
                                 </div>
                              }
                           >
                              <MainPatientHistory
                                 AppointmentId={this.props.IncomeEMRData.appointmentId}
                                 XrayRequestId={this.props.IncomeEMRData.xrayRequestId}
                                 InpatientRequestId={this.props.IncomeEMRData.inpatientRequestId}
                                 PatientId={this.props.IncomeEMRData.patientId}
                                 CabinetId={this.props.IncomeEMRData.cabinetId}
                                 DeparmentId={this.props.IncomeEMRData.departmentId}
                                 Inspection={this.props.IncomeEMRData.inspection}
                                 UsageType={this.props.IncomeEMRData.usageType}
                                 HicsServiceId={this.props.IncomeEMRData.hicsServiceId}
                                 AppointmentType={this.props.IncomeEMRData.type}
                                 handleClick={this.handleTypeChange}
                              />
                           </NewCard>
                        ) : (
                           <NewCard
                              title=""
                              style={{
                                 paddingTop: 10
                              }}
                           >
                              <Ocs
                                 selectedPatient={this.state.selectedPatient}
                                 UsageType={this.props.IncomeEMRData.usageType}
                                 AppointmentHasInsurance={this.props.IncomeEMRData.hicsServiceId ? true : false}
                                 handleClick={this.saveOrder}
                              />
                           </NewCard>
                        )}
                     </div>
                  ) : null}
                  {this.state.isExpandOneWindow && this.state.type === 'EMR' ? (
                     <div className={this.state.type === 'EMR' ? `sm:col-span-5 xl:col-span-1` : null}>
                        <OneWindow />
                     </div>
                  ) : null}
               </div>
            </div>
            <Schedule
               isOpen={this.state.isOpen}
               isOCS={true}
               incomeData={this.state.payments}
               selectedPatient={this.state.selectedPatient}
               isClose={() => this.setState({ isOpen: false })}
            />
         </>
      );
   }
}
export default connect(getReduxDatas, dispatchReduxDatas)(NewEmr);
