import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} />;
const FullScreenLoader = ({ full = true }) => {
   return (
      <div
         style={{
            width: '100%',
            height: full ? '100vh' : 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <Spin tip="Уншиж байна" size="large" fullscreen={full} indicator={loadingIcon} />
      </div>
   );
};
export default FullScreenLoader;
