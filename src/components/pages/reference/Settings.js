import React from 'react';
import UTable from '../../UTable';
function Settings() {
   const column = [
      {
         index: 'inspectionTime',
         label: 'Үзлэгийн минут',
         isView: true,
         input: 'numberInput',
         rules: [
            {
               required: true,
               message: 'Хоосон байж болохгүй'
            }
         ],
         col: 24
      }
   ];
   return (
      <div className="w-full bg-[#f5f6f7] p-3">
         <UTable
            title={'Үзлэгийн минут'}
            url={'settings'}
            isCreate={true}
            isRead={true}
            isUpdate={true}
            isDelete={true}
            column={column}
            width="50%"
         />
      </div>
   );
}
export default Settings;
