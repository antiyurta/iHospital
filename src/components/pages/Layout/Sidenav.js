import React from 'react';
import { Menu } from 'antd';

function Sidenav({ menus }) {
   return (
      <div
         style={{
            paddingTop: '1px',
            height: 'calc(100% - 64px)',
            overflow: 'auto'
         }}
      >
         <Menu theme="light" mode="inline" items={menus} inlineIndent={10} />
      </div>
   );
}

export default Sidenav;
