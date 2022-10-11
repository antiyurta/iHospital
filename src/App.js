import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import { Route, Routes, } from 'react-router-dom';
import Main from './components/pages/Layout/Main';
import Hospital from './components/pages/Organization/Hospital';
import Structure from './components/pages/Organization/Structure';
import Employee from './components/pages/Organization/Employee';
//
import Floor from './components/pages/Organization/Floor';
import Block from './components/pages/Organization/Block';
import Room from './components/pages/Organization/Room';
import Bed from './components/pages/Organization/Bed';
//
//
import Payment from './components/pages/payment/payment';
//
//
import DoctorAppointmentSchedule from './components/pages/Appointment/DoctorAppointmentSchedule';
import DoctorAppointment from './components/pages/Appointment/DoctorAppointment';
//
//
import Patient from './components/pages/PMS/Patient'
import Country from './components/pages/reference/CountryDictionary';
import Degree from './components/pages/reference/Degree';
import Directory from './components/pages/reference/Directory';
//
import Home from './components/Home';
import Profile from './components/Profile';
import History from './components/History';
import PrivateRoute from './features/PrivateRoute';
//service start
import Examination from './components/pages/service/Examination';
//service end
//emr start
import EMR from './components/pages/EMR/emr';
//emr end

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<Main />}>
          <Route path='/emr' element={<EMR />} />
          <Route path='/' element={<Home />} />
          <Route path='/hospital' element={<PrivateRoute><Hospital /></PrivateRoute>} />
          <Route path='/structure' element={<PrivateRoute><Structure /></PrivateRoute>} />
          <Route path='/employee' element={<PrivateRoute><Employee /></PrivateRoute>} />
          <Route path='/Floor' element={<PrivateRoute><Floor /></PrivateRoute>} />
          <Route path='/Block' element={<PrivateRoute><Block /></PrivateRoute>} />
          <Route path='/Room' element={<PrivateRoute><Room /></PrivateRoute>} />
          <Route path='/Bed' element={<PrivateRoute><Bed /></PrivateRoute>} />
          <Route>
            <Route path='/payment' element={<PrivateRoute><Payment /></PrivateRoute>} />
          </Route>
          <Route>
            <Route path='/doctorAppointmentSchedule' element={<PrivateRoute><DoctorAppointmentSchedule /></PrivateRoute>} />
            <Route path='/doctorAppointment' element={<PrivateRoute><DoctorAppointment /></PrivateRoute>} />
          </Route>
          <Route>
            <Route path="/patient" element={<PrivateRoute><Patient /></PrivateRoute>} />
            <Route path="/country" element={<PrivateRoute><Country /></PrivateRoute>} />
            <Route path='/degree' element={<PrivateRoute><Degree /></PrivateRoute>} />
            <Route path='/directory' element={<PrivateRoute><Directory /></PrivateRoute>} />
          </Route>
          <Route>
            <Route path='/examination' element={<PrivateRoute><Examination /></PrivateRoute>} />
          </Route>
          <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='/history' element={  <PrivateRoute><History /></PrivateRoute>} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
