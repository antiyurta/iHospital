import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/style/page.css';
import '../src/style/layout.scss';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './features/AuthContext';

import Login from './components/Login';
import Hospital from './components/pages/Organization/Hospital';
import Home from './components/Home';
import Profile from './components/Profile';
const ExaminationParams = React.lazy(() => import('./components/pages/service/ExaminationParams'));
const Medicine = React.lazy(() => import('./components/pages/service/Medicine/Medicine'));
const EMR = React.lazy(() => './components/pages/EMR/NewEmr');
const BeforeAmbulatoryDetail = React.lazy(() => import('./components/pages/BeforeAmbulatory/BeforeAmbulatoryDetail'));
import Menu from './components/pages/reference/Menu';
const RoomtDtl = React.lazy(() => import('./components/pages/Bed/RoomDtl'));
const MedicineSupport = React.lazy(() => import('./components/pages/service/MedicineSupport'));
const Finance = React.lazy(() => import('./components/pages/Finance/Finance'));
const FinanceMaterialExamination = React.lazy(() => import('./components/pages/Finance/FinanceMaterialExamination'));
const PatientForm = React.lazy(() => import('./components/pages/FormBuilder/FBuilder/PatientForm'));
const Role = React.lazy(() => import('./components/pages/Organization/Role'));
const Permission = React.lazy(() => import('./components/pages/Organization/Permission'));
const NotFound = React.lazy(() => import('./features/notFound'));
const NotPermission = React.lazy(() => import('./features/notPermission'));
const FinanceMaterialXray = React.lazy(() => import('./components/pages/Finance/FinanceMaterialXray'));
const FinanceMaterialTreatment = React.lazy(() => import('./components/pages/Finance/FinanceMaterialTreatment'));
const FinanceMaterialSurgery = React.lazy(() => import('./components/pages/Finance/FinanceMaterialSurgery'));
const Report = React.lazy(() => import('./components/pages/Report/Report'));
const FormIndex = React.lazy(() => import('./components/pages/FormBuilder/FBuilder/FormIndex'));
const Acting = React.lazy(() => import('./components/pages/BeforeAmbulatory/BeforeInPatientTabs/Acting'));
const DepBalance = React.lazy(() => import('./components/pages/EMR/InPatient/DepBalance'));
import ProtectedRoute from './features/ProtectedRoute';

import { PublicRoutes, ProtectedRoutes } from './Routes';

import LandingLayout from './Layouts/Landing/LandingLayout';
import MainLayout from './components/pages/Layout/MainLayout';
import IHos from './components/pages/Layout/IHos';
import PrivateRoute from './features/PrivateRoute';

function App() {
   return (
      <div className="App">
         <AuthContextProvider>
            <Routes>
               <Route path="*" element={<NotFound />} />
               <Route path="/" element={<LandingLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  {PublicRoutes.map((route, index) => {
                     return <Route key={index} path={route.url} element={<route.element />} />;
                  })}
               </Route>
               <Route element={<MainLayout />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route element={<ProtectedRoute />}>
                     <Route path="/main/" element={<IHos />}>
                        <Route path="/main/emr" element={<EMR />} />
                        <Route path="/main/ambulatoryDetail" element={<BeforeAmbulatoryDetail />} />
                        {ProtectedRoutes.map((route, index) => {
                           return (
                              <Route
                                 key={index}
                                 path={`/main${route.url}`}
                                 element={
                                    <PrivateRoute>
                                       <route.element />
                                    </PrivateRoute>
                                 }
                              />
                           );
                        })}
                     </Route>
                     <Route path="/notPermission" element={<NotPermission />} />
                     <Route path="/role" element={<Role />} />
                     <Route path="/permission" element={<Permission />} />
                     <Route path="/menu" element={<Menu />} />
                     <Route path="/hospital" element={<Hospital />} />
                     {/* ene heregtei */}
                     <Route path="/medicine" element={<Medicine />} />
                     <Route path="/medicineSupport" element={<MedicineSupport />} />
                     <Route path="/examinationParams" element={<ExaminationParams />} />
                     <Route path="/acting" element={<Acting />} />
                     <Route path="/depBalance" element={<DepBalance />} />
                     <Route path="/finance" element={<Finance />} />
                     <Route path="/financeMaterialExamination" element={<FinanceMaterialExamination />} />
                     <Route path="/financeMaterialXray" element={<FinanceMaterialXray />} />
                     <Route path="/financeMaterialTreatment" element={<FinanceMaterialTreatment />} />
                     <Route path="/financeMaterialSurgery" element={<FinanceMaterialSurgery />} />
                     <Route path="/report" element={<Report />} />
                     <Route path="/formBuilder" element={<FormIndex />} />
                     {/* yacij magad */}
                     <Route path="/formBuilder2" element={<PatientForm />} />
                     <Route path="/roomDtl" element={<RoomtDtl />} />
                  </Route>
               </Route>
            </Routes>
         </AuthContextProvider>
      </div>
   );
}
export default App;
