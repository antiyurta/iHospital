import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/Layout/Main";
import Hospital from "./components/pages/Organization/Hospital";
import Structure from "./components/pages/Organization/Structure";
//
import Floor from "./components/pages/Organization/Floor";
import Block from "./components/pages/Organization/Block";
import Room from "./components/pages/Organization/Room";
import Bed from "./components/pages/Organization/Bed";
//
import PaymentCloud from "./components/pages/EPayment/Payments";
//
import DoctorAppointment from "./components/pages/Appointment/DoctorAppointment";
//
import Patient from "./components/pages/PMS/Patient";
import Country from "./components/pages/reference/CountryDictionary";
import Degree from "./components/pages/reference/Degree";
//
import Home from "./components/Home";
import Profile from "./components/Profile";
import History from "./components/History";
import PrivateRoute from "./features/PrivateRoute";
//service start
import Examination from "./components/pages/service/Examination";
import Xray from "./components/pages/service/Xray";
import Treatment from "./components/pages/service/Treatment";
import Surgury from "./components/pages/service/Surgury";
import Medicine from "./components/pages/service/Medicine/Medicine";
//service end
//emr start
import EMR from "./components/pages/EMR/emr";
import BeforeAmbulatoryList from "./components/pages/BeforeAmbulatory/BeforeAmbulatoryList";
import BeforeAmbulatoryDetail from "./components/pages/BeforeAmbulatory/BeforeAmbulatoryDetail";
//emr end
// inpatient HEWTENT start
import Menu from "./components/pages/reference/Menu";
import Packages from "./components/pages/service/Packages";
import Position from "./components/pages/Organization/Position";
import SetOrder from "./components/pages/service/SetOrder";
import DeviceAppointment from "./components/pages/DeviceAppointment/DeviceAppointment";
import DemoEmployee from "./components/pages/Organization/DemoEmployee";
import MainBed from "./components/pages/Bed/MainBed";
import RoomtDtl from "./components/pages/Bed/RoomDtl";
// inpatient HEWTEN end
import DemoForm2 from "./components/pages/FormBuilder/FormBuilder2";
import Builder from "./components/pages/FormBuilder/FBuilder/PatientForm";
// lab start
import EquipmentList from "./components/pages/Laboratory/EquipmentList";
import SOAPForm from "./components/pages/FormBuilder/FBuilder/SOAPForm";
import MedicineSupport from "./components/pages/service/MedicineSupport";
import Finance from "./components/pages/Finance/Finance";
import FinanceMaterialExamination from "./components/pages/Finance/FinanceMaterialExamination";
import RequestAnalys from "./components/pages/Laboratory/RequestAnalys";
import PatientForm from "./components/pages/FormBuilder/FBuilder/PatientForm";
import Role from "./components/pages/Organization/Role";
import Permission from "./components/pages/Organization/Permission";
import Discount from "./components/pages/reference/Discount";
import NotFound from "./features/notFound";
import NotPermission from "./features/notPermission";
import Nurse from "./components/pages/BeforeAmbulatory/Lists/Nurse";
import Schedule from "./components/pages/Appointment/Schedule/Schedule";
import DailyIncome from "./components/pages/EPayment/DailyIncome/DailyIncome";
import Settings from "./components/pages/reference/Settings";
import XrayRequest from "./components/pages/Xray/XrayRequest";
import DeviceSchedule from "./components/pages/Appointment/Device/DeviceSchedule";
import BeforeXrayRequest from "./components/pages/Xray/BeforeXrayRequest";
import FinanceMaterialXray from "./components/pages/Finance/FinanceMaterialXray";
import FinanceMaterialTreatment from "./components/pages/Finance/FinanceMaterialTreatment";
import FinanceMaterialSurgery from "./components/pages/Finance/FinanceMaterialSurgery";
import ExoRequest from "./components/pages/Exo/ExoRequest";
import BeforeEkgRequest from "./components/pages/Ekg/BeforeEkgRequest";
import Dashboard from "./components/pages/Organization/Dashboard";
import Report from "./components/pages/Report/Report";
import BeforeAmbulatoryListEnr from './components/pages/BeforeAmbulatory/BeforeAmbulatoryListEnr';
import FormIndex from "./components/pages/FormBuilder/FBuilder/FormIndex";
// lab end

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Main />}>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/notPermission" element={<NotPermission />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/schedule"
            element={
              <PrivateRoute>
                <Schedule />
              </PrivateRoute>
            }
          />
          {/* <Route path="/deviceSchedule" element={<PrivateRoute><DeviceSchedule /></PrivateRoute>} /> */}
          <Route path="/deviceSchedule" element={<DeviceSchedule />} />
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
          <Route path="/Bed" element={<Bed />} />
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
              path="/xray"
              element={
                <PrivateRoute>
                  <Xray />
                </PrivateRoute>
              }
            />
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
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route
            path="/ambulatoryList"
            element={
              <PrivateRoute>
                <BeforeAmbulatoryList />
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
          <Route path="/request_analys" element={<RequestAnalys />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<Report />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
