import { Col, Row } from 'antd';
import React from 'react';

import UTable from '../../UTable';

const column = [
   {
      index: 'name',
      label: 'Нэр',
      isView: true,
      input: 'input',
      col: 24
   }
];

function Floor() {
   return (
      <div className="flex flex-wrap">
         <div className="w-full">
            <UTable
               title={'Давхар'}
               url={'organization/floor'}
               column={column}
               width="20%"
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
            />
         </div>
      </div>
   );
}
export default Floor;
