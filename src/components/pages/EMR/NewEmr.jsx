import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Modal, Radio } from 'antd';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import Barcode from 'react-barcode';
//img
import { WarningIcon } from '@Assets/index';
//context
import { EmrContextProvider } from '@Features/EmrContext';
//redux
import { delEmrData } from '@Features/emrReducer';
//common
import { openNofi } from '@Comman/common';
//comp
import Ocs from '@Pages/OCS/Ocs';
import EmrTimer from './EmrTimer';
import OneWindow from './OneWindow';
import DoctorNotes from './DoctorNotes';
import Schedule from '@Pages/OCS/Schedule';
import NewEmrSupport from './NewEmrSupport';
import MainInPatient from './InPatient/MainInPatient';
import MainAmbulatory from './Ambulatory/MainAmbulatory';
import PatientInformation from '@Pages/PatientInformation';
import MainPatientHistory from '@Pages/EMR/EPatientHistory/MainPatientHistory';
//api
import PaymentApi from '@ApiServices/payment/payment';
import PmsPatientApi from '@ApiServices/pms/patient.api';
import ServiceRequestApi from '@ApiServices/serviceRequest';
import MainInpatientHistory from './EPatientHistory/MainInpatientHistory';

const getReduxDatas = (state) => {
   const IncomeEMRData = state.emrReducer.emrData;
   const token = state.authReducer.token;
   const employeeId = state.authReducer.userId;
   return { IncomeEMRData, token, employeeId };
};
const dispatchReduxDatas = (dispatch) => {
   return {
      delEmrData: () => dispatch(delEmrData())
   };
};
class NewEmr extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         type: 'EMR',
         temporarilyType: '',
         isOpenWarningModal: false,
         selectedPatient: {},
         usageType: this.props.IncomeEMRData.usageType,
         isExpandHistory: true,
         isExpandInspection: true,
         isExpandOneWindow: true,
         isOpen: false,
         payments: []
      };
   }

   async getByIdPatient() {
      await PmsPatientApi.getById(this.props.IncomeEMRData.patientId).then((response) => {
         this.setState({ selectedPatient: response.data?.response });
      });
   }
   handleTypeChange = ({ target: { value } }) => {
      // if (this.props.IncomeEMRData.endDate) {
      //    Modal.error({
      //       content: 'Дууссан үзлэгт OTS ашиглах боломжгүй',
      //       okText: 'За'
      //    });
      // } else {
      this.setState({
         isOpenWarningModal: true,
         temporarilyType: value
      });
      // }
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
         data['isInsurance'] = this.props.IncomeEMRData.isInsurance;
         await ServiceRequestApi.post(data).then(async (response) => {
            if (response.status === 201) {
               openNofi('success', 'Амжилттай', 'OTS амжилттай захиалла');
               await PaymentApi.get({
                  params: {
                     patientId: this.state.selectedPatient.id
                  }
               }).then((res) => {
                  this.setState({
                     payments: res.data?.response?.data,
                     isOpen: true
                  });
               });
            }
         });
      } else {
         openNofi('warning', 'Анхааруулга', 'OTS Захиалах');
      }
   };
   async componentDidMount() {
      await this.getByIdPatient();
   }
   async componentWillUnmount() {
      // this.props.delEmrData();
      console.log('Үзлэг дуусав');
   }
   render() {
      return (
         <EmrContextProvider>
            <div className="new-emr">
               <NewEmrSupport />
               <div className="new-emr-index">
                  <div className="patient">
                     <PatientInformation
                        patient={this.state.selectedPatient}
                        handlesearch={false}
                        handleTypeChange={this.handleTypeChange}
                        // OCS={
                        //    this.props.IncomeEMRData.appointmentId || this.props.IncomeEMRData.inpatientRequestId
                        //       ? true
                        //       : false
                        // }
                        OCS={true}
                        type={this.state.type}
                        appointmentId={
                           this.props.IncomeEMRData.appointmentId || this.props.IncomeEMRData.inpatientRequestId
                        }
                        departmentId={this.props.IncomeEMRData.departmentId}
                     />
                     <div className="note-timer">
                        <DoctorNotes patientId={this.props.IncomeEMRData.patientId} />
                        {this.props.IncomeEMRData.usageType === 'OUT' ? (
                           <EmrTimer
                              startDate={this.props.IncomeEMRData.startDate}
                              endDate={this.props.IncomeEMRData.endDate}
                              inspection={this.props.IncomeEMRData.inspection}
                           />
                        ) : null}
                     </div>
                     <div
                        style={{
                           position: 'absolute',
                           left: '50%',
                           top: '10%',
                           transform: 'translate(-50%, -50%)'
                        }}
                     >
                        {this.props.IncomeEMRData.serialNumber ? (
                           <Barcode
                              value={this.props.IncomeEMRData.serialNumber?.toString() || 'CODE128AUTO'}
                              height={40}
                              fontSize={10}
                              width={2}
                           />
                        ) : null}
                     </div>
                  </div>
                  {this.state.type === 'EMR' ? (
                     <div className="emr-body grid grid-cols-5 gap-2 p-2">
                        {this.state.isExpandHistory ? (
                           <div
                              className={
                                 this.state.isExpandHistory &&
                                 !this.state.isExpandInspection &&
                                 !this.state.isExpandOneWindow
                                    ? 'col-span-5'
                                    : 'lg:col-span-5 xl:col-span-2'
                              }
                           >
                              <div className="history">
                                 <div className="head">
                                    <p>Түүх</p>
                                    <Button
                                       onClick={() => {
                                          this.setState({
                                             isExpandHistory: true,
                                             isExpandInspection: !this.state.isExpandInspection,
                                             isExpandOneWindow: !this.state.isExpandOneWindow
                                          });
                                       }}
                                       icon={
                                          this.state.isExpandHistory ? (
                                             <FullscreenOutlined />
                                          ) : (
                                             <FullscreenExitOutlined />
                                          )
                                       }
                                    />
                                 </div>
                                 <div className="px-2">
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
                                 </div>
                                 {this.state.usageType === 'OUT' ? (
                                    <MainAmbulatory patientId={this.props.IncomeEMRData.patientId} />
                                 ) : (
                                    <MainInPatient patientId={this.props.IncomeEMRData.patientId} />
                                 )}
                              </div>
                           </div>
                        ) : null}
                        {this.state.isExpandInspection ? (
                           <div
                              className={
                                 this.state.isExpandInspection &&
                                 !this.state.isExpandHistory &&
                                 !this.state.isExpandOneWindow
                                    ? 'col-span-5'
                                    : 'lg:col-span-3 xl:col-span-2'
                              }
                           >
                              <div className="progress">
                                 <div className="head">
                                    <p>Явцын үзлэг</p>
                                    <Button
                                       onClick={() => {
                                          this.setState({
                                             isExpandHistory: !this.state.isExpandHistory,
                                             isExpandInspection: true,
                                             isExpandOneWindow: !this.state.isExpandOneWindow
                                          });
                                       }}
                                       icon={
                                          this.state.isExpandHistory ? (
                                             <FullscreenOutlined />
                                          ) : (
                                             <FullscreenExitOutlined />
                                          )
                                       }
                                    />
                                 </div>
                                 {this.state.usageType === 'OUT' ? (
                                    <MainPatientHistory handleClick={this.handleTypeChange} />
                                 ) : (
                                    <MainInpatientHistory newUsageType={'IN'} />
                                 )}
                              </div>
                           </div>
                        ) : null}
                        {this.state.isExpandOneWindow ? (
                           <div
                              className={
                                 this.state.isExpandOneWindow &&
                                 !this.state.isExpandHistory &&
                                 !this.state.isExpandInspection
                                    ? 'col-span-5'
                                    : 'lg:col-span-2 xl:col-span-1'
                              }
                           >
                              <OneWindow
                                 usageType={this.state.usageType}
                                 handleView={(state) => {
                                    this.setState({
                                       isExpandHistory: state ? !this.state.isExpandHistory : true,
                                       isExpandInspection: state ? !this.state.isExpandInspection : true,
                                       isExpandOneWindow: true
                                    });
                                 }}
                              />
                           </div>
                        ) : null}
                     </div>
                  ) : (
                     <Card
                        className="p-2"
                        title=""
                        style={{
                           paddingTop: 10,
                           width: '100%'
                        }}
                     >
                        <Ocs
                           selectedPatient={this.state.selectedPatient}
                           UsageType={this.props.IncomeEMRData.usageType}
                           handleClick={this.saveOrder}
                        />
                     </Card>
                  )}
               </div>
            </div>
            <Schedule
               isOpen={this.state.isOpen}
               isOCS={true}
               incomeData={this.state.payments}
               selectedPatient={this.state.selectedPatient}
               isClose={() => this.setState({ isOpen: false })}
            />
            <Modal
               title={<br />}
               open={this.state.isOpenWarningModal}
               onCancel={() => {
                  this.setState({
                     isOpenWarningModal: false
                  });
               }}
               width={330}
               footer={null}
            >
               <div className="flex flex-col gap-3 p-4 items-center">
                  <img width={66} height={66} src={WarningIcon} alt="WarningIcon" />
                  <p
                     style={{
                        color: '#181819E5',
                        fontWeight: 500,
                        fontSize: 16
                     }}
                  >
                     {this.state.temporarilyType}-рүү шилжих гэж байна
                  </p>
                  <p
                     style={{
                        color: '#1818196B',
                        fontWeight: 400,
                        fontSize: 12
                     }}
                  >
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the
                  </p>
                  <div className="flex flex-row gap-2">
                     <Button
                        type="primary"
                        onClick={() => {
                           this.setState({
                              type: this.state.temporarilyType,
                              isOpenWarningModal: false
                           });
                        }}
                     >
                        Шилжих
                     </Button>
                     <Button
                        danger
                        onClick={() => {
                           this.setState({
                              isOpenWarningModal: false
                           });
                        }}
                     >
                        Үгүй
                     </Button>
                  </div>
               </div>
            </Modal>
         </EmrContextProvider>
      );
   }
}
export default connect(getReduxDatas, dispatchReduxDatas)(NewEmr);
