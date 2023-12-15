import { DownOutlined, UpOutlined } from '@ant-design/icons';
import React, { Children, useEffect, useState } from 'react';

import downIcon from './down.svg';
import upIcon from './up.svg';

const MenuItemChildren = ({ data, collapsed, children }) => {
   const [expanded, setExpanded] = useState(false);
   const expand = () => {
      setExpanded(!expanded);
   };
   return (
      <div
         className={`menu-item-sub ${expanded ? 'expand' : ''}`}
         style={{
            alignItems: collapsed ? 'center' : 'normal'
         }}
      >
         <div className="menu-item-sub-head" onClick={expand}>
            {!collapsed ? <p className="label">{data.label}</p> : data.icon}
            {!collapsed ? expanded ? <img src={downIcon} alt="/" /> : <img src={upIcon} alt="//" /> : null}
         </div>
         <div className="menu-item-sub-body">{expanded ? children.map((child) => child) : null}</div>
      </div>
   );
};
export default MenuItemChildren;
