import React from 'react';
import Ocs from '../OCS/Ocs';
import { connect } from 'react-redux';
import { Get, Post, openNofi } from '../../comman';
import EmrSupports from '../EmrSupports';
import PatientInformation from '../PatientInformation';
import moment from 'moment';
import { Alert, Card, Radio, Select, Table } from 'antd';
import Marquee from 'react-fast-marquee';
import MainAmbulatory from './Ambulatory/MainAmbulatory';
import MainInPatient from './InPatient/MainInPatient';
import MainPatientHistory from './EPatientHistory/MainPatientHistory';
import Schedule from '../OCS/Schedule';
const { Option } = Select;
const getReduxDatas = (state) => {
   const IncomeEMRData = state.emrReducer.emrData;
   const token = state.authReducer.token;
   const employeeId = state.authReducer.userId;
   return { IncomeEMRData, token, employeeId };
};
class NewEmr extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         type: 'EMR',
         selectedPatient: {},
         problems: [],
         problemsLoading: false,
         appointments: [],
         isUsageType: this.props.IncomeEMRData.usageType,
         isOpen: false,
         payments: []
      };
   }
   async getByIdPatient() {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get(
         'pms/patient/' + this.props.IncomeEMRData.patientId,
         this.props.token,
         conf
      );
      this.setState({ selectedPatient: response });
   }
   async getInspectionNotes() {
      const conf = {
         headers: {},
         params: {
            patientId: this.props.IncomeEMRData.patientId
         }
      };
      const response = await Get('appointment', this.props.token, conf);
      if (response.data.length > 0) {
         var result = response.data.reduce(function (r, a) {
            r[a.createdAt.substring(0, 4)] =
               r[a.createdAt.substring(0, 4)] || [];
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
   }
   getProblems() {
      const conf = {
         headers: {},
         params: {}
      };
      Object.entries(this.state.appointments).map(
         async ([_key, value], _index) => {
            var problems = [];
            await Promise.all(
               value.map(async (item) => {
                  const response = await Get(
                     'appointment/show/' + item.id,
                     this.props.token,
                     conf
                  );
                  if (response?.patientDiagnosis?.length > 0) {
                     problems.push({
                        id: item.id,
                        doctor:
                           response.employee?.lastName.substring(0, 1) +
                           '.' +
                           response.employee?.firstName,
                        diagnose: response.patientDiagnosis,
                        inspectionDate: response.createdAt
                     });
                  }
               })
            );
            this.setState({ problems: problems });
            this.setState({ problemsLoading: false });
         }
      );
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
            data['inpatientRequestId'] =
               this.props.IncomeEMRData.inpatientRequestId;
         } else {
            data['appointmentId'] = this.props.IncomeEMRData.appointmentId;
         }
         data['patientId'] = this.state.selectedPatient.id;
         data['employeeId'] = this.props.employeeId;
         data['requestDate'] = new Date();
         data['usageType'] = this.props.IncomeEMRData.usageType;
         data['services'] = value;
         const conf = {
            headers: {},
            params: {
               patientId: this.state.selectedPatient.id
            }
         };
         const response = await Post(
            'service-request',
            this.props.token,
            conf,
            data
         );
         if (response === 201) {
            const conf = {
               headers: {},
               params: {
                  patientId: this.state.selectedPatient.id
               }
            };
            const response = await Get(
               'payment/invoice',
               this.props.token,
               conf
            );
            this.setState({
               payments: response.data
            });
            this.setState({
               isOpen: true
            });
         }
      } else {
         openNofi('warning', 'Анхааруулга', 'OTS Захилах');
      }
   };
   async componentDidMount() {
      await this.getByIdPatient();
      await this.getInspectionNotes();
   }
   async componentDidUpdate(_prevProps, prevState) {
      if (prevState.appointments !== this.state.appointments) {
         this.getProblems();
         this.setState({ problemsLoading: true });
      }
   }
   async componentWillUnmount() {
      console.log('Үзлэг дуусав');
   }
   render() {
      return (
         <>
            <div className="flex flex-wrap">
               {this.props.IncomeEMRData.usageType === 'OUT' && (
                  <>
                     <div className="w-full p-1">
                        <Alert
                           banner
                           message={
                              <Marquee pauseOnHover gradient={false}>
                                 Эмчийн үзлэг хийсэн бол заавал онош тавигдана.
                                 Оношийг засварлах боломжгүйг анхаарна уу! EMR,
                                 OTS дуусгаад ҮЗЛЭГ ДУУСГАХ товчийг дарна уу.
                                 Таны үзлэг баталгаажиж байгаа болно.
                              </Marquee>
                           }
                        />
                     </div>
                     <div className="w-full p-1">
                        <EmrSupports
                           appointmentId={
                              this.props.IncomeEMRData.appointmentId
                           }
                           usageType={this.props.IncomeEMRData.usageType}
                           patient={this.state.selectedPatient}
                           patientId={this.props.IncomeEMRData.patientId}
                        />
                     </div>
                  </>
               )}

               <div
                  className={
                     this.state.type === 'EMR'
                        ? 'w-full md:w-full xl:w-1/2'
                        : 'w-full md:w-full xl:w-full'
                  }
               >
                  <div className="flex flex-wrap">
                     <div
                        className={
                           this.state.type === 'EMR'
                              ? 'w-full md:w-full p-1'
                              : 'w-full md:w-3/5 p-1'
                        }
                     >
                        <div className="pb-1">
                           <PatientInformation
                              patient={this.state.selectedPatient}
                              handlesearch={false}
                              handleTypeChange={this.handleTypeChange}
                              OCS={
                                 this.props.IncomeEMRData.appointmentId ||
                                 this.props.IncomeEMRData.inpatientRequestId
                                    ? true
                                    : false
                              }
                              type={this.state.type}
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
                              bodyStyle={{
                                 paddingTop: 0,
                                 paddingLeft: 10,
                                 paddingRight: 10,
                                 paddingBottom: 10,
                                 minHeight: 150,
                                 maxHeight: 150
                              }}
                           >
                              <div
                                 className="scroll"
                                 style={{ maxHeight: 150 }}
                              >
                                 <Table
                                    rowKey={'id'}
                                    bordered
                                    loading={this.state.problemsLoading}
                                    columns={[
                                       {
                                          title: 'Эмч',
                                          dataIndex: 'doctor'
                                       },
                                       {
                                          title: 'Онош',
                                          dataIndex: 'diagnose',
                                          render: (text) => {
                                             return (
                                                <ul
                                                   className="list-disc list-inside"
                                                   style={{
                                                      paddingLeft: '4px',
                                                      textAlign: 'start'
                                                   }}
                                                >
                                                   {text.map((item, index) => {
                                                      return (
                                                         <li key={index}>
                                                            {`${item.diagnose.code} -> ${item.diagnose.nameMn}`}
                                                         </li>
                                                      );
                                                   })}
                                                </ul>
                                             );
                                          }
                                       },
                                       {
                                          title: 'Огноо',
                                          dataIndex: 'inspectionDate',
                                          render: (text) => {
                                             return moment(text).format(
                                                'YYYY-MM-DD'
                                             );
                                          }
                                       }
                                    ]}
                                    dataSource={this.state.problems}
                                    pagination={false}
                                 />
                              </div>
                           </Card>
                        </div>
                     </div>
                     <div
                        className={
                           this.state.type === 'EMR'
                              ? 'w-full p-1'
                              : 'w-full md:w-2/5 p-1'
                        }
                     >
                        <Card
                           bordered={false}
                           title={
                              <Radio.Group
                                 defaultValue={this.state.isUsageType}
                                 onChange={(e) =>
                                    this.setState({
                                       isUsageType: e.target.value
                                    })
                                 }
                              >
                                 <Radio value={'OUT'}>Амбулатори</Radio>
                                 <Radio value={'IN'}>Хэвтэн</Radio>
                              </Radio.Group>
                           }
                           className="header-solid max-h-max rounded-md scroll"
                           style={{ height: '100%' }}
                           bodyStyle={{
                              paddingTop: 0,
                              paddingLeft: 10,
                              paddingRight: 10,
                              paddingBottom: 10,
                              minHeight: 300,
                              maxHeight: 300
                           }}
                        >
                           {this.state.isUsageType === 'OUT' ? (
                              <MainAmbulatory
                                 appointments={this.state.appointments}
                                 patientId={this.props.IncomeEMRData.patientId}
                              />
                           ) : (
                              <MainInPatient
                                 patientId={this.props.IncomeEMRData.patientId}
                              />
                           )}
                        </Card>
                     </div>
                  </div>
               </div>
               <div
                  className={
                     this.state.type === 'OCS'
                        ? 'w-full'
                        : 'w-full md:w-full xl:w-1/2'
                  }
               >
                  <div className="p-1">
                     {this.state.type === 'EMR' ? (
                        <Card
                           bordered={false}
                           title={
                              <h6 className="font-semibold m-0">Явцын үзлэг</h6>
                           }
                           className="header-solid max-h-max rounded-md scroll"
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
                                    defaultValue={
                                       this.props.IncomeEMRData.inspection
                                    }
                                    disabled={
                                       this.props.IncomeEMRData.inspection ===
                                       11
                                          ? true
                                          : false
                                    }
                                    style={{ width: 200 }}
                                 >
                                    <Option value={1} disabled={true}>
                                       Анхан
                                    </Option>
                                    <Option value={2} disabled={true}>
                                       Давтан
                                    </Option>
                                    <Option value={3}>
                                       Урьдчилан сэргийлэх
                                    </Option>
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
                              AppointmentId={
                                 this.props.IncomeEMRData.appointmentId
                              }
                              XrayRequestId={
                                 this.props.IncomeEMRData.xrayRequestId
                              }
                              InpatientRequestId={
                                 this.props.IncomeEMRData.inpatientRequestId
                              }
                              PatientId={this.props.IncomeEMRData.patientId}
                              CabinetId={this.props.IncomeEMRData.cabinetId}
                              Inspection={this.props.IncomeEMRData.inspection}
                              UsageType={this.props.IncomeEMRData.usageType}
                              insuranceServiceId={
                                 this.props.IncomeEMRData.insuranceServiceId
                              }
                              handleClick={this.handleTypeChange}
                           />
                        </Card>
                     ) : (
                        <Card
                           bordered={false}
                           title={
                              <h6 className="font-semibold m-0">
                                 Шинэ захиалга
                              </h6>
                           }
                           className="header-solid max-h-max rounded-md"
                           bodyStyle={{
                              paddingTop: 0,
                              paddingBottom: 16
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
export default connect(getReduxDatas)(NewEmr);
