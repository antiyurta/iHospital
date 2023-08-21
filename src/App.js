import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/style/page.css';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { Suspense } from 'react';
import FullScreenLoader from './components/FullScreenLoader';
import { AuthContextProvider } from './features/AuthContext';
const Login = React.lazy(() => import('./components/Login'));
const Hospital = React.lazy(() => import('./components/pages/Organization/Hospital'));
const Structure = React.lazy(() => import('./components/pages/Organization/Structure'));
//
const Floor = React.lazy(() => import('./components/pages/Organization/Floor'));
const Block = React.lazy(() => import('./components/pages/Organization/Block'));
const Room = React.lazy(() => import('./components/pages/Organization/Room'));
const Bed = React.lazy(() => import('./components/pages/Organization/Bed'));
//
const PaymentCloud = React.lazy(() => import('./components/pages/EPayment/Payments'));
//
const DoctorAppointment = React.lazy(() => import('./components/pages/Appointment/DoctorAppointment'));
//
const Patient = React.lazy(() => import('./components/pages/PMS/Patient'));
const Country = React.lazy(() => import('./components/pages/reference/CountryDictionary'));
const Degree = React.lazy(() => import('./components/pages/reference/Degree'));
//
const Home = React.lazy(() => import('./components/Home'));
const Profile = React.lazy(() => import('./components/Profile'));
//service start
const Examination = React.lazy(() => import('./components/pages/service/Examination'));
const ExaminationParams = React.lazy(() => import('./components/pages/service/ExaminationParams'));
const Xray = React.lazy(() => import('./components/pages/service/Xray'));
const Treatment = React.lazy(() => import('./components/pages/service/Treatment'));
const Surgury = React.lazy(() => import('./components/pages/service/Surgury'));
const Medicine = React.lazy(() => import('./components/pages/service/Medicine/Medicine'));
//service end
//emr start
const EMR = React.lazy(() => import('./components/pages/EMR/NewEmr'));
const BeforeAmbulatoryList = React.lazy(() => import('./components/pages/BeforeAmbulatory/BeforeAmbulatoryList'));
const BeforeAmbulatoryDetail = React.lazy(() => import('./components/pages/BeforeAmbulatory/BeforeAmbulatoryDetail'));
//emr end
// inpatient HEWTENT start
const Menu = React.lazy(() => import('./components/pages/reference/Menu'));
const Packages = React.lazy(() => import('./components/pages/service/Packages'));
const Position = React.lazy(() => import('./components/pages/Organization/Position'));
const SetOrder = React.lazy(() => import('./components/pages/service/SetOrder'));
const DeviceAppointment = React.lazy(() => import('./components/pages/DeviceAppointment/DeviceAppointment'));
const DemoEmployee = React.lazy(() => import('./components/pages/Organization/DemoEmployee'));
const MainBed = React.lazy(() => import('./components/pages/Bed/MainBed'));
const RoomtDtl = React.lazy(() => import('./components/pages/Bed/RoomDtl'));
// inpatient HEWTEN end
const DemoForm2 = React.lazy(() => import('./components/pages/FormBuilder/FormBuilder2'));
const Builder = React.lazy(() => import('./components/pages/FormBuilder/FBuilder/PatientForm'));
// lab start
const EquipmentList = React.lazy(() => import('./components/pages/Laboratory/EquipmentList'));
const MedicineSupport = React.lazy(() => import('./components/pages/service/MedicineSupport'));
const Finance = React.lazy(() => import('./components/pages/Finance/Finance'));
const FinanceMaterialExamination = React.lazy(() => import('./components/pages/Finance/FinanceMaterialExamination'));
const RequestAnalys = React.lazy(() => import('./components/pages/Laboratory/RequestAnalys'));
const PatientForm = React.lazy(() => import('./components/pages/FormBuilder/FBuilder/PatientForm'));
const Role = React.lazy(() => import('./components/pages/Organization/Role'));
const Permission = React.lazy(() => import('./components/pages/Organization/Permission'));
const Discount = React.lazy(() => import('./components/pages/reference/Discount'));
const NotFound = React.lazy(() => import('./features/notFound'));
const NotPermission = React.lazy(() => import('./features/notPermission'));
const Schedule = React.lazy(() => import('./components/pages/Appointment/Schedule/Schedule'));
const DailyIncome = React.lazy(() => import('./components/pages/EPayment/DailyIncome/DailyIncome'));
const Settings = React.lazy(() => import('./components/pages/reference/Settings'));
const XrayRequest = React.lazy(() => import('./components/pages/Xray/XrayRequest'));
const DeviceSchedule = React.lazy(() => import('./components/pages/Appointment/Device/DeviceSchedule'));
const BeforeXrayRequest = React.lazy(() => import('./components/pages/Xray/BeforeXrayRequest'));
const TreatmentRequest = React.lazy(() => import('./components/pages/treatment/BeforeTreatmentRequest'));
const FinanceMaterialXray = React.lazy(() => import('./components/pages/Finance/FinanceMaterialXray'));
const FinanceMaterialTreatment = React.lazy(() => import('./components/pages/Finance/FinanceMaterialTreatment'));
const FinanceMaterialSurgery = React.lazy(() => import('./components/pages/Finance/FinanceMaterialSurgery'));
const ExoRequest = React.lazy(() => import('./components/pages/Exo/ExoRequest'));
const BeforeEkgRequest = React.lazy(() => import('./components/pages/Ekg/BeforeEkgRequest'));
const Dashboard = React.lazy(() => import('./components/pages/Organization/Dashboard'));
const Report = React.lazy(() => import('./components/pages/Report/Report'));
const BeforeAmbulatoryListEnr = React.lazy(() => import('./components/pages/BeforeAmbulatory/BeforeAmbulatoryListEnr'));
const FormIndex = React.lazy(() => import('./components/pages/FormBuilder/FBuilder/FormIndex'));
const Acting = React.lazy(() => import('./components/pages/BeforeAmbulatory/BeforeInPatientTabs/Acting'));
const DepBalance = React.lazy(() => import('./components/pages/EMR/InPatient/DepBalance'));
const Diagnoses = React.lazy(() => import('./components/pages/service/Diagnoses'));
//
// const HicsCost = React.lazy(() => import('./components/pages/Insurance/HicsCost'));
// const HicsLists = React.lazy(() => import('./components/pages/Insurance/HicsLists'));

// const Privacy = React.lazy(() => import('./privacy/Index'));
// const InsuranceDocterList = React.lazy(() => import('./components/pages/Insurance/InsuranceDoctorList'));
const ProtectedRoute = React.lazy(() => import('./features/ProtectedRoute'));
// const BeforeUrgentEnr = React.lazy(() => import('./components/pages/Urgent/BeforeUrgentEnr'));
// const Layout = React.lazy(() => import('./components/pages/Layout/MainLayout'));
// import Layout from './components/pages/Layout/MainLayout';

import { PublicRoutes, ProtectedRoutes } from './Routes';

import LandingLayout from './Layouts/Landing/LandingLayout';
import MainLayout from './components/pages/Layout/MainLayout';

function App() {
   return (
      <div className="App">
         <AuthContextProvider>
            <Routes>
               <Route path="*" element={<NotFound />} />
               <Route path="/" element={<LandingLayout />}>
                  <Route index element={<Home />} />
                  {PublicRoutes.map((route, index) => {
                     return <Route key={index} path={route.path} element={<route.element />} />;
                  })}
               </Route>
               <Route element={<MainLayout />}>
                  <Route path="/login" element={<Login />} />
                  <Route element={<ProtectedRoute />}>
                     {ProtectedRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={<route.element />} />;
                     })}
                     <Route path="/notPermission" element={<NotPermission />} />
                     <Route path="/profile" element={<Profile />} />
                     <Route path="/acting" element={<Acting />} />
                     <Route path="/depBalance" element={<DepBalance />} />
                     <Route path="/schedule" element={<Schedule />} />
                     {/* <Route path="/deviceSchedule" element={<PrivateRoute><DeviceSchedule /></PrivateRoute>} /> */}
                     <Route path="/deviceSchedule" element={<DeviceSchedule />} />
                     {/* lab start */}
                     <Route path="/equipments" element={<EquipmentList />} />
                     {/* lab end */}
                     {/* finance start */}
                     <Route path="/finance" element={<Finance />} />
                     <Route path="/financeMaterialExamination" element={<FinanceMaterialExamination />} />
                     <Route path="/financeMaterialXray" element={<FinanceMaterialXray />} />
                     <Route path="/financeMaterialTreatment" element={<FinanceMaterialTreatment />} />
                     <Route path="/financeMaterialSurgery" element={<FinanceMaterialSurgery />} />
                     <Route path="/demoForm2" element={<DemoForm2 />} />
                     <Route path="/builder" element={<Builder />} />
                     <Route path="/role" element={<Role />} />
                     <Route path="/permission" element={<Permission />} />
                     <Route path="/discount" element={<Discount />} />
                     {/* finance end */}
                     {/* <PrivateRoute></PrivateRoute> */}
                     <Route path="/menu" element={<Menu />} />
                     <Route path="/emr" element={<EMR />} />
                     <Route path="/packages" element={<Packages />} />
                     <Route path="/SetOrders" element={<SetOrder />} />
                     <Route path="/device" element={<DeviceAppointment />} />
                     <Route path="/beforeEkgList" element={<BeforeEkgRequest />} />
                     <Route path="/dailyIncome" element={<DailyIncome />} />
                     <Route path="/settings" element={<Settings />} />
                     <Route path="/hospital" element={<Hospital />} />
                     <Route path="/structure" element={<Structure />} />
                     <Route path="/position" element={<Position />} />
                     <Route path="/employee" element={<DemoEmployee />} />
                     <Route path="/Floor" element={<Floor />} />
                     <Route path="/Block" element={<Block />} />
                     <Route path="/Room" element={<Room />} />
                     <Route path="/Bed" element={<Bed />} />
                     <Route path="/payment" element={<PaymentCloud />} />
                     <Route path="/doctorAppointment" element={<DoctorAppointment />} />
                     <Route path="/patient" element={<Patient />} />
                     <Route path="/country" element={<Country />} />
                     <Route path="/degree" element={<Degree />} />
                     <Route path="/examination" element={<Examination />} />
                     <Route path="/examinationParams" element={<ExaminationParams />} />
                     <Route path="/xray" element={<Xray />} />
                     <Route path="/diagnoses" element={<Diagnoses />} />
                     <Route path="/treatment" element={<Treatment />} />
                     <Route path="/surgury" element={<Surgury />} />
                     <Route path="/medicine" element={<Medicine />} />
                     <Route path="/medicineSupport" element={<MedicineSupport />} />
                     <Route path="/ambulatoryList" element={<BeforeAmbulatoryList />} />
                     <Route path="/treatmentList" element={<TreatmentRequest />} />
                     <Route path="/xrayList" element={<XrayRequest />} />
                     <Route path="/exoList" element={<ExoRequest />} />
                     <Route path="/enrAmbulatoryList" element={<BeforeAmbulatoryListEnr />} />
                     <Route path="/beforeXrayList" element={<BeforeXrayRequest />} />
                     <Route path="/ambulatoryDetail" element={<BeforeAmbulatoryDetail />} />
                     <Route path="/formBuilder" element={<FormIndex />} />
                     <Route path="/formBuilder2" element={<PatientForm />} />
                     <Route path="/bed_management/*" element={<MainBed />} />
                     <Route path="/roomDtl" element={<RoomtDtl />} />
                     <Route path="/request_analys" element={<RequestAnalys />} />
                     <Route path="/dashboard" element={<Dashboard />} />
                     <Route path="/report" element={<Report />} />
                  </Route>
               </Route>
            </Routes>
         </AuthContextProvider>
      </div>
   );
}
export default App;
