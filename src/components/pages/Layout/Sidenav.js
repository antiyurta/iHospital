import React from 'react';
import { Menu } from 'antd';

function Sidenav({ menus }) {
   return <Menu theme="light" mode="inline" items={menus} inlineIndent={10} />;
}

export default Sidenav;
