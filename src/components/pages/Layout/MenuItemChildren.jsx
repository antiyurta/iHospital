import React, { useState } from 'react';

import downIcon from './down.svg';
import upIcon from './up.svg';

import beforLine from './beforeLine.svg';
import lastLine from './lastLine.svg';

const MenuItemChildren = ({ data, children }) => {
   const [collapsed, setCollapsed] = useState(false);
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
            {!collapsed ? <p className="label">{data.title}</p> : data.icon}
            {!collapsed ? expanded ? <img src={downIcon} alt="/" /> : <img src={upIcon} alt="//" /> : null}
         </div>
         <div className="menu-item-sub-body">
            {expanded
               ? children.map((child, index) => (
                    <div key={index} className="before">
                       {index === children?.length - 1 ? (
                          <img src={lastLine} alt="last" />
                       ) : (
                          <img src={beforLine} alt="middle" />
                       )}
                       {child}
                    </div>
                 ))
               : null}
         </div>
      </div>
   );
};
export default MenuItemChildren;
