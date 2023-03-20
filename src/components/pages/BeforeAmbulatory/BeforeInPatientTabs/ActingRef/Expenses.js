import { Card } from 'antd';
import React from 'react';
import MiddleTable from './MiddleTable';
function Expenses() {
   return (
      <>
         <Card bordered={false} className="header-solid max-h-max rounded-md">
            <MiddleTable typeId={7} />
         </Card>
      </>
   );
}
export default Expenses;
