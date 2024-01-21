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
      <div className="w-full bg-[#f5f6f7] p-3">
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
   );
}
export default Floor;
