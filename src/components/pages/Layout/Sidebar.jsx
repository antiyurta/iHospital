import React, { useEffect, useState } from 'react';

import logo from '../../../../public/images/gurensoft.svg';
import { Link, useLocation, useParams } from 'react-router-dom';

const Sidebar = () => {
   const { pathname } = useLocation();
   const [selectedMenu, setSelectedMenu] = useState(1);
   const middleMenu = [
      {
         id: 0,
         to: '/main',
         iconUrl: 'icon-i',
         bgColor: '#fff'
      }
   ];
   const bottomMenu = [];

   useEffect(() => {
      if (pathname) {
         bottomMenu?.map((menu) => {
            if (pathname.includes(menu.to)) {
               setSelectedMenu(menu.id);
            }
         });
         middleMenu?.map((item) => {
            if (pathname.includes(item.to)) {
               setSelectedMenu(item.id);
            }
         });
         if (pathname.includes('/profile')) {
            setSelectedMenu(7);
         }
      }
   }, [pathname]);

   return (
      <div className="main_sidebar">
         <img src={logo} alt="logo" />
         <div className="main_sidebar_menus">
            <div className="top">
               <ul>
                  {middleMenu.map((item, index) => {
                     return (
                        <Link key={index} to={item.to} className={selectedMenu === item.id ? 'active' : ''}>
                           <div className="content">
                              <span
                                 className={
                                    selectedMenu === item.id ? `icon ${item.iconUrl} active` : `icon ${item.iconUrl}`
                                 }
                              />
                           </div>
                        </Link>
                     );
                  })}
               </ul>
            </div>
            <div className="bottom">
               <ul>
                  {bottomMenu.map((item, index) => {
                     return (
                        <Link key={index} to={item.to} className={selectedMenu === item.id ? 'active' : ''}>
                           <div className="content">
                              <span
                                 className={
                                    selectedMenu === item.id ? `icon ${item.iconUrl} active` : `icon ${item.iconUrl}`
                                 }
                              />
                           </div>
                        </Link>
                     );
                  })}
                  <Link to={'/profile'} className={selectedMenu === 7 ? 'active' : ''}>
                     <div className="content-profile">
                        <span
                           style={{
                              width: 40,
                              height: 40
                           }}
                           className={selectedMenu === 7 ? 'icon-profile active' : 'icon-profile'}
                        />
                     </div>
                  </Link>
               </ul>
            </div>
         </div>
      </div>
   );
};
export default Sidebar;
