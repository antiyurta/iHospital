import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/style/page.css';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { Suspense } from 'react';
import FullScreenLoader from './components/FullScreenLoader';
const Login = React.lazy(() => import('./components/Login'));
const Main = React.lazy(() => import('./components/pages/Layout/Main'));
const Hospital = React.lazy(() =>
   import('./components/pages/Organization/Hospital')
);
const Structure = React.lazy(() =>
   import('./components/pages/Organization/Structure')
);
//
const Floor = React.lazy(() => import('./components/pages/Organization/Floor'));
const Block = React.lazy(() => import('./components/pages/Organization/Block'));
const Room = React.lazy(() => import('./components/pages/Organization/Room'));
const Bed = React.lazy(() => import('./components/pages/Organization/Bed'));
//
const PaymentCloud = React.lazy(() =>
   import('./components/pages/EPayment/Payments')
);
//
const DoctorAppointment = React.lazy(() =>
   import('./components/pages/Appointment/DoctorAppointment')
);
//
const Patient = React.lazy(() => import('./components/pages/PMS/Patient'));
const Country = React.lazy(() =>
   import('./components/pages/reference/CountryDictionary')
);
const Degree = React.lazy(() => import('./components/pages/reference/Degree'));
//
const Home = React.lazy(() => import('./components/Home'));
const Profile = React.lazy(() => import('./components/Profile'));
const PrivateRoute = React.lazy(() => import('./features/PrivateRoute'));
//service start
const Examination = React.lazy(() =>
   import('./components/pages/service/Examination')
);
const ExaminationParams = React.lazy(() =>
   import('./components/pages/service/ExaminationParams')
);
const Xray = React.lazy(() => import('./components/pages/service/Xray'));
const Treatment = React.lazy(() =>
   import('./components/pages/service/Treatment')
);
const Surgury = React.lazy(() => import('./components/pages/service/Surgury'));
const Medicine = React.lazy(() =>
   import('./components/pages/service/Medicine/Medicine')
);
//service end
//emr start
const EMR = React.lazy(() => import('./components/pages/EMR/NewEmr'));
const BeforeAmbulatoryList = React.lazy(() =>
   import('./components/pages/BeforeAmbulatory/BeforeAmbulatoryList')
);
const BeforeAmbulatoryDetail = React.lazy(() =>
   import('./components/pages/BeforeAmbulatory/BeforeAmbulatoryDetail')
);
//emr end
// inpatient HEWTENT start
const Menu = React.lazy(() => import('./components/pages/reference/Menu'));
const Packages = React.lazy(() =>
   import('./components/pages/service/Packages')
);
const Position = React.lazy(() =>
   import('./components/pages/Organization/Position')
);
const SetOrder = React.lazy(() =>
   import('./components/pages/service/SetOrder')
);
const DeviceAppointment = React.lazy(() =>
   import('./components/pages/DeviceAppointment/DeviceAppointment')
);
const DemoEmployee = React.lazy(() =>
   import('./components/pages/Organization/DemoEmployee')
);
const MainBed = React.lazy(() => import('./components/pages/Bed/MainBed'));
const RoomtDtl = React.lazy(() => import('./components/pages/Bed/RoomDtl'));
// inpatient HEWTEN end
const DemoForm2 = React.lazy(() =>
   import('./components/pages/FormBuilder/FormBuilder2')
);
const Builder = React.lazy(() =>
   import('./components/pages/FormBuilder/FBuilder/PatientForm')
);
// lab start
const EquipmentList = React.lazy(() =>
   import('./components/pages/Laboratory/EquipmentList')
);
const MedicineSupport = React.lazy(() =>
   import('./components/pages/service/MedicineSupport')
);
const Finance = React.lazy(() => import('./components/pages/Finance/Finance'));
const FinanceMaterialExamination = React.lazy(() =>
   import('./components/pages/Finance/FinanceMaterialExamination')
);
const RequestAnalys = React.lazy(() =>
   import('./components/pages/Laboratory/RequestAnalys')
);
const PatientForm = React.lazy(() =>
   import('./components/pages/FormBuilder/FBuilder/PatientForm')
);
const Role = React.lazy(() => import('./components/pages/Organization/Role'));
const Permission = React.lazy(() =>
   import('./components/pages/Organization/Permission')
);
const Discount = React.lazy(() =>
   import('./components/pages/reference/Discount')
);
const NotFound = React.lazy(() => import('./features/notFound'));
const NotPermission = React.lazy(() => import('./features/notPermission'));
const Schedule = React.lazy(() =>
   import('./components/pages/Appointment/Schedule/Schedule')
);
const DailyIncome = React.lazy(() =>
   import('./components/pages/EPayment/DailyIncome/DailyIncome')
);
const Settings = React.lazy(() =>
   import('./components/pages/reference/Settings')
);
const XrayRequest = React.lazy(() =>
   import('./components/pages/Xray/XrayRequest')
);
const DeviceSchedule = React.lazy(() =>
   import('./components/pages/Appointment/Device/DeviceSchedule')
);
const BeforeXrayRequest = React.lazy(() =>
   import('./components/pages/Xray/BeforeXrayRequest')
);
const TreatmentRequest = React.lazy(() =>
   import('./components/pages/treatment/BeforeTreatmentRequest')
);
const FinanceMaterialXray = React.lazy(() =>
   import('./components/pages/Finance/FinanceMaterialXray')
);
const FinanceMaterialTreatment = React.lazy(() =>
   import('./components/pages/Finance/FinanceMaterialTreatment')
);
const FinanceMaterialSurgery = React.lazy(() =>
   import('./components/pages/Finance/FinanceMaterialSurgery')
);
const ExoRequest = React.lazy(() =>
   import('./components/pages/Exo/ExoRequest')
);
const BeforeEkgRequest = React.lazy(() =>
   import('./components/pages/Ekg/BeforeEkgRequest')
);
const Dashboard = React.lazy(() =>
   import('./components/pages/Organization/Dashboard')
);
const Report = React.lazy(() => import('./components/pages/Report/Report'));
const BeforeAmbulatoryListEnr = React.lazy(() =>
   import('./components/pages/BeforeAmbulatory/BeforeAmbulatoryListEnr')
);
const FormIndex = React.lazy(() =>
   import('./components/pages/FormBuilder/FBuilder/FormIndex')
);
const Acting = React.lazy(() =>
   import('./components/pages/BeforeAmbulatory/BeforeInPatientTabs/Acting')
);
const DepBalance = React.lazy(() =>
   import('./components/pages/EMR/InPatient/DepBalance')
);
const Diagnoses = React.lazy(() =>
   import('./components/pages/service/Diagnoses')
);
//
const HicsCost = React.lazy(() =>
   import('./components/pages/Insurance/HicsCost')
);
const HicsLists = React.lazy(() =>
   import('./components/pages/Insurance/HicsLists')
);

const DocumentUpload = React.lazy(() =>
   import('./components/pages/611/Document/DocumentUpload')
);
const DocForRoleList = React.lazy(() =>
   import('./components/pages/611/DocForRoleList')
);

const Privacy = React.lazy(() => import('./privacy/Index'));
//

function App() {
   return (
      <div className="App">
         <Fragment>
            <Suspense fallback={<FullScreenLoader full={true} />}>
               <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route element={<Main />}>
                     <Route path="*" element={<NotFound />} />
                     <Route path="/docforlist" element={<DocForRoleList />} />
                     <Route
                        path="/home"
                        element={
                           <PrivateRoute>
                              <Home />
                           </PrivateRoute>
                        }
                     />
                     <Route path="/documents" element={<DocumentUpload />} />
                     <Route path="/hicsCost" element={<HicsCost />} />
                     <Route path="/hicsList" element={<HicsLists />} />
                     <Route path="/notPermission" element={<NotPermission />} />
                     <Route path="/profile" element={<Profile />} />
                     <Route
                        path="/acting"
                        element={
                           <PrivateRoute>
                              <Acting />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/depBalance"
                        element={
                           <PrivateRoute>
                              <DepBalance />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/schedule"
                        element={
                           <PrivateRoute>
                              <Schedule />
                           </PrivateRoute>
                        }
                     />
                     {/* <Route path="/deviceSchedule" element={<PrivateRoute><DeviceSchedule /></PrivateRoute>} /> */}
                     <Route
                        path="/deviceSchedule"
                        element={<DeviceSchedule />}
                     />
                     {/* lab start */}
                     <Route path="/equipments" element={<EquipmentList />} />
                     {/* lab end */}
                     {/* finance start */}
                     <Route path="/finance" element={<Finance />} />
                     <Route
                        path="/financeMaterialExamination"
                        element={<FinanceMaterialExamination />}
                     />
                     <Route
                        path="/financeMaterialXray"
                        element={<FinanceMaterialXray />}
                     />
                     <Route
                        path="/financeMaterialTreatment"
                        element={<FinanceMaterialTreatment />}
                     />
                     <Route
                        path="/financeMaterialSurgery"
                        element={<FinanceMaterialSurgery />}
                     />
                     <Route path="/demoForm2" element={<DemoForm2 />} />
                     <Route path="/builder" element={<Builder />} />
                     <Route path="/role" element={<Role />} />
                     <Route path="/permission" element={<Permission />} />
                     <Route path="/discount" element={<Discount />} />
                     {/* finance end */}
                     {/* <PrivateRoute></PrivateRoute> */}
                     <Route path="/menu" element={<Menu />} />
                     <Route
                        path="/emr"
                        element={
                           <PrivateRoute>
                              <EMR />
                           </PrivateRoute>
                        }
                     />
                     <Route path="/packages" element={<Packages />} />
                     <Route path="/SetOrders" element={<SetOrder />} />
                     <Route path="/device" element={<DeviceAppointment />} />
                     <Route
                        path="/beforeEkgList"
                        element={
                           <PrivateRoute>
                              <BeforeEkgRequest />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/dailyIncome"
                        element={
                           <PrivateRoute>
                              <DailyIncome />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/settings"
                        element={
                           <PrivateRoute>
                              <Settings />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/hospital"
                        element={
                           <PrivateRoute>
                              <Hospital />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/structure"
                        element={
                           <PrivateRoute>
                              <Structure />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/position"
                        element={
                           <PrivateRoute>
                              <Position />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/employee"
                        element={
                           <PrivateRoute>
                              <DemoEmployee />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/Floor"
                        element={
                           <PrivateRoute>
                              <Floor />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/Block"
                        element={
                           <PrivateRoute>
                              <Block />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/Room"
                        element={
                           <PrivateRoute>
                              <Room />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/Bed"
                        element={
                           <PrivateRoute>
                              <Bed />
                           </PrivateRoute>
                        }
                     />
                     <Route>
                        <Route
                           path="/payment"
                           element={
                              <PrivateRoute>
                                 <PaymentCloud />
                              </PrivateRoute>
                           }
                        />
                     </Route>
                     <Route>
                        <Route
                           path="/doctorAppointment"
                           element={
                              <PrivateRoute>
                                 <DoctorAppointment />
                              </PrivateRoute>
                           }
                        />
                     </Route>
                     <Route>
                        <Route
                           path="/patient"
                           element={
                              <PrivateRoute>
                                 <Patient />
                              </PrivateRoute>
                           }
                        />
                        <Route
                           path="/country"
                           element={
                              <PrivateRoute>
                                 <Country />
                              </PrivateRoute>
                           }
                        />
                        <Route
                           path="/degree"
                           element={
                              <PrivateRoute>
                                 <Degree />
                              </PrivateRoute>
                           }
                        />
                     </Route>
                     <Route>
                        <Route
                           path="/examination"
                           element={
                              <PrivateRoute>
                                 <Examination />
                              </PrivateRoute>
                           }
                        />
                        <Route
                           path="/examinationParams"
                           element={<ExaminationParams />}
                        />
                        <Route
                           path="/xray"
                           element={
                              <PrivateRoute>
                                 <Xray />
                              </PrivateRoute>
                           }
                        />
                        <Route path="/diagnoses" element={<Diagnoses />} />
                        <Route
                           path="/treatment"
                           element={
                              <PrivateRoute>
                                 <Treatment />
                              </PrivateRoute>
                           }
                        />
                        <Route
                           path="/surgury"
                           element={
                              <PrivateRoute>
                                 <Surgury />
                              </PrivateRoute>
                           }
                        />
                        <Route
                           path="/medicine"
                           element={
                              <PrivateRoute>
                                 <Medicine />
                              </PrivateRoute>
                           }
                        />
                        <Route
                           path="/medicineSupport"
                           element={
                              <PrivateRoute>
                                 <MedicineSupport />
                              </PrivateRoute>
                           }
                        />
                     </Route>
                     <Route
                        path="/ambulatoryList"
                        element={
                           <PrivateRoute>
                              <BeforeAmbulatoryList />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/treatmentList"
                        element={
                           <PrivateRoute>
                              <TreatmentRequest />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/xrayList"
                        element={
                           <PrivateRoute>
                              <XrayRequest />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/exoList"
                        element={
                           <PrivateRoute>
                              <ExoRequest />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/enrAmbulatoryList"
                        element={
                           <PrivateRoute>
                              <BeforeAmbulatoryListEnr />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/beforeXrayList"
                        element={
                           <PrivateRoute>
                              <BeforeXrayRequest />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/ambulatoryDetail"
                        element={
                           <PrivateRoute>
                              <BeforeAmbulatoryDetail />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/formBuilder"
                        element={
                           <PrivateRoute>
                              <FormIndex />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/formBuilder2"
                        element={
                           <PrivateRoute>
                              <PatientForm />
                           </PrivateRoute>
                        }
                     />
                     <Route path="/bed_management/*" element={<MainBed />} />
                     <Route path="/roomDtl" element={<RoomtDtl />} />
                     <Route
                        path="/request_analys"
                        element={
                           <PrivateRoute>
                              <RequestAnalys />
                           </PrivateRoute>
                        }
                     />
                     <Route path="/dashboard" element={<Dashboard />} />
                     <Route path="/report" element={<Report />} />
                  </Route>
               </Routes>
            </Suspense>
         </Fragment>
      </div>
   );
}
export default App;
