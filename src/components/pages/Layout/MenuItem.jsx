import React from 'react';
const MenuItem = ({ data }) => {
   const { key, icon, label, title } = data;
   return (
      <div key={key} className="menu-item" title={title}>
         {icon}
         {label}
      </div>
   );
};
export default MenuItem;
