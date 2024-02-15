import React, { useContext } from 'react';
import {
   AppstoreOutlined,
   FundViewOutlined,
   CalendarOutlined,
   PicCenterOutlined,
   UserOutlined,
   ContactsOutlined
} from '@ant-design/icons';
import { Tabs } from 'antd';
import Dashboard from './MainBed/Dashboard';
import Basic from './MainBed/Calender';
import InpatientRequests from './MainBed/InpatientRequests';
import BedInformation from './MainBed/BedInformation';
import BedManagementContext from '../../../features/BedContext';

const MainBed = () => {
   const { activeKey, setActiveKey } = useContext(BedManagementContext);
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

   return (
      <div className="w-full h-full p-3 bg-[#f5f6f7]">
         <Tabs type="card" activeKey={activeKey} onChange={setActiveKey} destroyInactiveTabPane={true} items={menus} />
      </div>
   );
};
export default MainBed;
