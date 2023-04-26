import React, { useState, useEffect } from 'react';
import {
   AppstoreOutlined,
   FundViewOutlined,
   CalendarOutlined,
   PicCenterOutlined,
   UserOutlined,
   ContactsOutlined
} from '@ant-design/icons';
import { Layout, Menu, Tabs } from 'antd';
import DashboardBed from './DashboardBed';
import CalendarBed from './CalendarBed';
import PatientListBed from './PatientListBed';
import InformationBed from './InformationBed';
import DepartmentBed from './DepartmentBed';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, openNofi, Post } from '../../comman';
import BedPlan from './BedPlan';
const { Sider, Content } = Layout;

//
import Dashboard from './MainBed/Dashboard';
import Basic from './MainBed/Calender';
import InpatientRequests from './MainBed/InpatientRequests';
import BedInformation from './MainBed/BedInformation';
//

const MainBed = () => {
   const token = useSelector(selectCurrentToken);
   //
   const menus = [
      {
         key: '1',
         label: (
            <span>
               <FundViewOutlined
                  style={{
                     fontSize: '20px'
                  }}
               />
               Хянах самбар
            </span>
         ),
         children: <Dashboard />
      },
      {
         key: '2',
         label: (
            <span>
               <AppstoreOutlined
                  style={{
                     fontSize: '20px'
                  }}
               />
               Тасаг
            </span>
         )
      },
      {
         key: '3',
         label: (
            <span>
               <CalendarOutlined
                  style={{
                     fontSize: '20px'
                  }}
               />
               Хуанли
            </span>
         ),
         children: <Basic />
      },
      {
         key: '4',
         label: (
            <span>
               <PicCenterOutlined
                  style={{
                     fontSize: '20px'
                  }}
               />
               Орны мэдээлэл
            </span>
         ),
         children: <BedInformation />
      },
      {
         key: '5',
         label: (
            <span>
               <UserOutlined
                  style={{
                     fontSize: '20px'
                  }}
               />
               Өвчтөн
            </span>
         ),
         children: <InpatientRequests />
      },
      {
         key: '6',
         label: (
            <span>
               <ContactsOutlined
                  style={{
                     fontSize: '20px'
                  }}
               />
               Төлөвлөгөө
            </span>
         )
      }
   ];
   //
   const [selectedMenuKey, setSelectedMenuKey] = useState('');
   let navigate = useNavigate();
   let location = useLocation();
   const [structures, setStructures] = useState([]);
   const [selectedStructureData, setSelectedStructureData] = useState('');
   const [roomInformationStatus, setRoomInformationStatus] = useState('all');

   const config = {
      headers: {},
      params: {}
   };

   const getStructures = async () => {
      config.params.type = 2;
      config.params.startDate = null;
      config.params.endDate = null;
      const response = await Get('organization/structure', token, config);
      if (response.data.length != 0) {
         response.data.map((el, index) => {
            setStructures((structures) => [
               ...structures,
               { label: el.name, key: el.id }
            ]);
         });
      }
   };

   const getStructureById = async (structure_id) => {
      config.params.startDate = null;
      config.params.endDate = null;
      const response = await Get(
         `organization/structure/${structure_id}`,
         token,
         config
      );
      // console.log("response getStructureById", response);
      if (response != '') {
         setSelectedStructureData(response);
      }
   };

   useEffect(() => {
      setSelectedMenuKey(location?.pathname?.split('/').pop()); //Хуудас Refresh хийхэд аль хуудсанд байгааг Menu -д зааж өгөх
      structures == '' && getStructures();
   }, []);

   const onSelect = (data) => {
      setSelectedMenuKey(data.key);
      data.keyPath.includes('department') && getStructureById(data.key);
      navigate(`/bed_management/${data.key}`);
   };

   const items = [
      { label: 'Хянах самбар', key: '', icon: <FundViewOutlined /> },
      {
         label: 'Тасаг',
         key: 'department',
         icon: <AppstoreOutlined />,
         children: structures
      },
      { label: 'Хуанли', key: 'calendar', icon: <CalendarOutlined /> },
      { label: 'Орны мэдээлэл', key: 'rooms', icon: <PicCenterOutlined /> },
      { label: 'Өвчтөн', key: 'patient_list', icon: <UserOutlined /> },
      { label: 'Төлөвлөгөө', key: 'plan', icon: <ContactsOutlined /> }
   ];

   return (
      <>
         <Tabs type="card" destroyInactiveTabPane={true} items={menus} />
         {/* <Layout>
            <Sider className="bg-white">
               <Menu
                  mode="inline"
                  items={items}
                  onSelect={onSelect}
                  defaultSelectedKeys={''}
                  selectedKeys={[selectedMenuKey]}
               />
            </Sider>
            <Layout>
               <Content className="bg-slate-50">
                  <Routes>
                     <Route
                        exact
                        path="/"
                        element={
                           <DashboardBed
                              setSelectedFn={setSelectedMenuKey}
                              setStatus={(status_id) =>
                                 setRoomInformationStatus(status_id)
                              }
                           />
                        }
                     />
                     <Route path="/calendar" element={<CalendarBed />} />
                     <Route
                        path="/rooms"
                        element={
                           <InformationBed
                              status={roomInformationStatus}
                              setStatus={(status_id) =>
                                 setRoomInformationStatus(status_id)
                              }
                              data={selectedStructureData}
                              callFn={(dep_id) => getStructureById(dep_id)}
                           />
                        }
                     />
                     <Route path="/patient_list" element={<PatientListBed />} />
                     <Route
                        path="/:id/*"
                        element={
                           <DepartmentBed
                              data={selectedStructureData}
                              callFn={(dep_id) => getStructureById(dep_id)}
                           />
                        }
                     />
                     <Route path="/plan" element={<BedPlan />} />
                  </Routes>
               </Content>
            </Layout>
         </Layout> */}
      </>
   );
};
export default MainBed;
