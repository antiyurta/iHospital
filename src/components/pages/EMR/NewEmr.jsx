import React from 'react';
import Ocs from '../OCS/Ocs';
import { connect } from 'react-redux';
import { openNofi } from '../../comman';
import EmrSupports from '../EmrSupports';
import PatientInformation from '../PatientInformation';
import { Alert, Collapse, Select } from 'antd';
import Marquee from 'react-fast-marquee';
import MainPatientHistory from './EPatientHistory/MainPatientHistory';
import Schedule from '../OCS/Schedule';
import { delEmrData } from '../../../features/emrReducer';
import { delNote } from '../../../features/noteReducer';
import InspectionHistory from './InspectionHistory';
import ListOfIssues from './ListOfIssues';
//
import PmsPatientServices from '../../../services/pms/patient';
import AppointmentService from '../../../services/appointment/api-appointment-service';
import ServiceRequestService from '../../../services/serviceRequest';
import PaymentService from '../../../services/payment/payment';
import NewCard from '../../Card/Card';
//
const { Option } = Select;
const { Panel } = Collapse;
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
         isUsageType: this.props.IncomeEMRData.usageType,
         isOpen: false,
         payments: []
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
               {this.props.IncomeEMRData.usageType === 'OUT' && (
                  <div className="flex flex-col gap-3">
                     <Alert
                        banner
                        message={
                           <Marquee pauseOnHover gradient={false}>
                              Эмчийн үзлэг хийсэн бол заавал онош тавигдана. Оношийг засварлах боломжгүйг анхаарна уу!
                              EMR, OTS дуусгаад ҮЗЛЭГ ДУУСГАХ товчийг дарна уу. Таны үзлэг баталгаажиж байгаа болно.
                           </Marquee>
                        }
                     />
                     <EmrSupports
                        appointmentId={this.props.IncomeEMRData.appointmentId}
                        hicsServiceId={this.props.IncomeEMRData.hicsServiceId}
                        usageType={this.props.IncomeEMRData.usageType}
                        patient={this.state.selectedPatient}
                        patientId={this.props.IncomeEMRData.patientId}
                        departmentId={this.props.IncomeEMRData.departmentId}
                     />
                  </div>
               )}
               <div className={this.state.type === 'EMR' ? 'grid grid-cols-5 gap-3' : 'flex flex-col gap-3'}>
                  <div className={this.state.type === 'EMR' ? 'sm:col-span-5 xl:col-span-3' : null}>
                     <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-3">
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
                        <ListOfIssues patientId={this.props.IncomeEMRData.patientId} />
                        <div
                           className={
                              this.state.type === 'EMR' ? 'lg:col-span-2 xl:col-span-2' : 'lg:col-span-2 xl:col-span-2'
                           }
                        >
                           {this.state.type === 'EMR' ? (
                              <InspectionHistory
                                 isUsageType={this.state.isUsageType}
                                 setIsUsageType={(e) => {
                                    this.setState({
                                       isUsageType: e
                                    });
                                 }}
                                 appointments={this.state.appointments}
                                 patientId={this.props.IncomeEMRData.patientId}
                              />
                           ) : (
                              <Collapse
                                 bordered={false}
                                 className="header-solid max-h-max rounded-md"
                                 style={{
                                    backgroundColor: 'white',
                                    padding: 2
                                 }}
                              >
                                 <Panel header="Түүх">
                                    <div
                                       style={{
                                          backgroundColor: '#f3f4f6',
                                          padding: 12
                                       }}
                                    >
                                       <InspectionHistory
                                          isUsageType={this.state.isUsageType}
                                          setIsUsageType={(e) => {
                                             this.setState({
                                                isUsageType: e
                                             });
                                          }}
                                          appointments={this.state.appointments}
                                          patientId={this.props.IncomeEMRData.patientId}
                                       />
                                    </div>
                                 </Panel>
                              </Collapse>
                           )}
                        </div>
                     </div>
                  </div>
                  <div className={this.state.type === 'EMR' ? 'sm:col-span-5 xl:col-span-2' : null}>
                     {this.state.type === 'EMR' ? (
                        <NewCard
                           title="Явцын үзлэг"
                           extra={
                              <>
                                 <Select
                                    defaultValue={this.props.IncomeEMRData.inspection}
                                    disabled={this.props.IncomeEMRData.inspection === 11 ? true : false}
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
                        <NewCard title="Шинэ захиалга">
                           <Ocs
                              selectedPatient={this.state.selectedPatient}
                              UsageType={this.props.IncomeEMRData.usageType}
                              AppointmentHasInsurance={this.props.IncomeEMRData.hicsServiceId ? true : false}
                              handleClick={this.saveOrder}
                           />
                        </NewCard>
                     )}
                  </div>
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
