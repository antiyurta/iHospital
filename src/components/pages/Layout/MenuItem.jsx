import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const MenuItem = ({ data }) => {
   const { pathname } = useLocation();
   const { key, icon, title, url, state } = data;
   return (
      <Link key={key} to={url} state={state} className={`menu-item ${pathname === url ? 'active' : ''}`} title={title}>
         {icon}
         {title}
      </Link>
   );
};
export default MenuItem;
