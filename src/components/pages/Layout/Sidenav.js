import React from 'react';
import { Menu } from 'antd';

function Sidenav({ menus }) {
   return (
      <div
         style={{
            paddingTop: '1px',
            height: '93vh',
            overflow: 'auto'
         }}
      >
         <Menu theme="light" mode="inline" items={menus} inlineIndent={10} />
      </div>
   );
}

export default Sidenav;
