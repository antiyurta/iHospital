import { InfoCircleOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import React from 'react';

import orderType from './orderType.js';

const InpatientTypeInfo = () => {
   return (
      <div className="ambo-list">
         <Badge count={<InfoCircleOutlined />} />
         <p>Тайлбар:</p>
         <Badge color="#22c55e" count="Төлөвлөгөөт" />
         {orderType?.map((item, index) => (
            <div
               key={index}
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 3
               }}
            >
               <img
                  src={require(`../../../../../assets/bed/${item.img}`)}
                  width="20"
                  className="inline-block"
                  key={index}
               />
               <p>{item.label}</p>
            </div>
         ))}
      </div>
   );
};
export default InpatientTypeInfo;
