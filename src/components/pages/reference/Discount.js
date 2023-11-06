import React from 'react';
import UTable from '../../UTable';

function Discount() {
   const column = [
      {
         index: 'percent',
         label: 'percent',
         isView: true,
         input: 'numberInput',
         col: 24
      },
      {
         index: 'name',
         label: 'name',
         isView: true,
         input: 'input',
         col: 24
      }
   ];
   return (
      <div className="flex flex-wrap">
         <div className="w-full">
            <UTable
               title={'discount'}
               url={'payment/discount'}
               column={column}
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
               width="50%"
            />
         </div>
      </div>
   );
}
export default Discount;
