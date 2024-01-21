import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

const ScheduleTypeInfo = () => {
   return (
      <div className="ambo-list">
         <Badge count={<InfoCircleOutlined />} />
         <p>Тайлбар:</p>
         <Badge count="Яаралтай" />
         {/* <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p> */}
         <Badge color="#F09833" count="Шууд" />
         <Badge color="#22A06B" count="Урьдчилсан захиалга" />
      </div>
   );
};
export default ScheduleTypeInfo;
