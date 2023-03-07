import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
function FallBack() {
   const antIcon = (
      <LoadingOutlined
         style={{
            fontSize: 24
         }}
         spin
      />
   );
   return <Spin indicator={antIcon} />;
}
export default FallBack;
