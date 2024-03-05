import React, { useState } from 'react';

import downIcon from './down.svg';
import upIcon from './up.svg';

import beforLine from './beforeLine.svg';
import lastLine from './lastLine.svg';
import { Tooltip } from 'antd';

const MenuItemChildren = ({ data, children, collapsed }) => {
   const [expanded, setExpanded] = useState(false);
   const [popup, setPopup] = useState(false);
   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
   const expand = () => {
      setExpanded(!expanded);
   };
   return (
      <>
         <Tooltip
            overlayInnerStyle={{
               background: 'white',
               width: 200,
               maxHeight: 400,
               overflow: 'auto',
               display: 'flex',
               flexDirection: 'column',
               gap: 12,
               borderRadius: 15
            }}
            showArrow={collapsed ? false : true}
            placement="rightTop"
            title={
               collapsed ? (
                  <>
                     {children?.map((child, index) => (
                        <div key={index}>{child}</div>
                     ))}
                  </>
               ) : (
                  ''
               )
            }
         >
            <div
               className={`menu-item-sub ${expanded ? 'expand' : ''}`}
               style={{
                  alignItems: collapsed ? 'center' : 'normal'
               }}
            >
               <div
                  className="menu-item-sub-head"
                  onClick={() => {
                     if (!collapsed) {
                        expand();
                     }
                  }}
               >
                  <div className="flex flex-row gap-2">
                     {data.icon}
                     {collapsed ? '' : data.title}
                  </div>
                  {!collapsed ? expanded ? <img src={upIcon} alt="/" /> : <img src={downIcon} alt="//" /> : null}
               </div>
               <div className="menu-item-sub-body">
                  {expanded
                     ? children.map((child, index) => (
                          <div key={index} className="before">
                             {child}
                          </div>
                       ))
                     : null}
               </div>
            </div>
         </Tooltip>

         <div
            onMouseLeave={() => {
               if (collapsed) {
                  setPopup(false);
               }
            }}
            onClick={() => {
               setPopup(false);
            }}
            style={{ top: cursorPosition.y - 50, left: 60 }}
            className={popup ? 'menu-item-sub-popup showed' : 'menu-item-sub-popup hided'}
         >
            {children?.map((child, index) => (
               <div key={index}>{child}</div>
            ))}
         </div>
      </>
   );
};
export default MenuItemChildren;
