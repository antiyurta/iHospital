import { Tooltip } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const MenuItem = ({ data, collapsed }) => {
   const { pathname } = useLocation();
   const { key, icon, title, url, state } = data;
   return (
      <>
         <Tooltip placement="rightTop" title={collapsed ? title : ''}>
            <Link key={key} to={url} state={state} className={`menu-item ${pathname === url ? 'active' : ''}`}>
               {icon}
               <span>{title}</span>
            </Link>
         </Tooltip>
      </>
   );
};
export default MenuItem;
