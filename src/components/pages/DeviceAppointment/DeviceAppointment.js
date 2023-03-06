import React from 'react';
import UTable from '../../UTable';

function DeviceAppointment() {
   const deviceTypeOption = [
      { id: 0, name: 'Рентген' },
      { id: 1, name: 'Эхо' },
      { id: 2, name: 'ЭКГ' }
   ];
   const column = [
      {
         index: 'name',
         label: 'Нэр',
         isView: true,
         isSearch: false,
         input: 'input',
         col: 24
      },
      {
         index: 'isActive',
         label: 'Төхөөрөмж идэвхтэй эсэх',
         isView: true,
         isSearch: false,
         input: 'switch',
         col: 24
      },
      {
         index: 'deviceType',
         label: 'Төхөөрөмжийн төрөл',
         isView: true,
         inputData: deviceTypeOption,
         input: 'select',
         col: 24,
         relIndex: 'name'
      }
   ];
   return (
      <div className="flex flex-wrap">
         <div className="w-full">
            <UTable
               title={'Device'}
               url={'device'}
               column={column}
               width="60%"
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
            />
         </div>
      </div>
   );
}
export default DeviceAppointment;
