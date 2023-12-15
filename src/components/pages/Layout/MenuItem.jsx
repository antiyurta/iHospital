import React from 'react';
import { useLocation } from 'react-router-dom';
const MenuItem = ({ data }) => {
   const { pathname } = useLocation();
   const { key, icon, label, title } = data;
   return (
      <div key={key} className={`menu-item ${pathname === label.props.to ? 'active' : ''}`} title={title}>
         {icon}
         {label}
      </div>
   );
};
export default MenuItem;
