import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/style/page.css';
import '../src/style/layout.scss';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './features/AuthContext';
import Auth from './components/Auth';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Hospital from './components/pages/Organization/Hospital';
import Home from './components/Home';
import Profile from './components/Profile';
import Menu from './components/pages/reference/Menu';
import ProtectedRoute from './features/ProtectedRoute';
import LandingLayout from './Layouts/Landing/LandingLayout';
import MainLayout from './components/pages/Layout/MainLayout';
import PrivateRoute from './features/PrivateRoute';
import CreateStory from './components/pages/Bed/MainBed/CreateStory';
//
import UserConfirm from '@Pages/UserConfirm';
//
import { PublicRoutes, ProtectedRoutes } from './Routes';
import MainESB from './Layouts/ESB/MainESB';
//

const EMR = React.lazy(() => import('./components/pages/EMR/NewEmr'));
const BeforeAmbulatoryDetail = React.lazy(() => import('./components/pages/BeforeAmbulatory/BeforeAmbulatoryDetail'));
const Role = React.lazy(() => import('./components/pages/Organization/Role'));
const Permission = React.lazy(() => import('./components/pages/Organization/Permission'));
const NotFound = React.lazy(() => import('./features/notFound'));
const NotPermission = React.lazy(() => import('./features/notPermission'));
const Report = React.lazy(() => import('./components/pages/Report/Report'));

function App() {
   return (
      <AuthContextProvider>
         <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LandingLayout />}>
               <Route index element={<Home />} />
               <Route path="auth" element={<Auth />}>
                  <Route path="login" element={<Login />} />
                  <Route path="reset-password" element={<ResetPassword />} />
               </Route>
               {PublicRoutes.map((route, index) => (
                  <Route key={index} path={route.url} element={<route.element />} />
               ))}
            </Route>
            <Route path="/user-confirm" element={<UserConfirm />} />
            <Route path="/esb/:id/*" element={<MainESB />} />
            <Route element={<MainLayout />}>
               <Route path="/profile" element={<Profile />} />
               <Route element={<ProtectedRoute />}>
                  <Route path="/main/">
                     <Route path="/main/hospital" element={<Hospital />} />
                     <Route path="/main/role" element={<Role />} />
                     <Route path="/main/emr" element={<EMR />} />
                     <Route path="/main/ambulatoryDetail" element={<BeforeAmbulatoryDetail />} />
                     {ProtectedRoutes.map((route, index) => (
                        <Route
                           key={index}
                           path={`/main${route.url}`}
                           element={
                              <PrivateRoute>
                                 <route.element />
                              </PrivateRoute>
                           }
                        />
                     ))}
                     <Route
                        path="/main/bed_management/create"
                        element={
                           <PrivateRoute>
                              <CreateStory />
                           </PrivateRoute>
                        }
                     />
                  </Route>
                  <Route path="/notPermission" element={<NotPermission />} />
                  <Route path="/permission" element={<Permission />} />
                  <Route path="/menu" element={<Menu />} />
                  {/* ene heregtei */}
               </Route>
            </Route>
         </Routes>
      </AuthContextProvider>
   );
}
export default App;
