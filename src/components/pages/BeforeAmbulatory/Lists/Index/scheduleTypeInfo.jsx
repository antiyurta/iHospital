import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

const ScheduleTypeInfo = () => {
   return (
      <div className="ambo-list">
         <Badge count={<InfoCircleOutlined />} />
         <p>Тайлбар: Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
         <Badge count="Яаралтай" />
         <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
         <Badge color="#F09833" count="Шууд" />
         <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
         <Badge color="#22A06B" count="Урьдчилсан захиалга" />
         <p>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
         </p>
      </div>
   );
};
export default ScheduleTypeInfo;
