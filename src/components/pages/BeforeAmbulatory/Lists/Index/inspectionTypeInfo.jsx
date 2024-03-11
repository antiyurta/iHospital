import { InfoCircleOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import React from 'react';
const InspectionTypeInfo = () => {
   return (
      <div className="ambo-list">
         <Badge count={<InfoCircleOutlined />} />
         <p>Тайлбар:</p>
         <Badge count="Ороогүй" />
         <p></p>
         <Badge color="#F09833" count="Үзлэгт орсон" />
         <p></p>
         <Badge color="#22A06B" count="Үзлэг баталгаажсан" />
         <p></p>
      </div>
   );
};
export default InspectionTypeInfo;
