import React, { useEffect, useState } from 'react';
// service
import OrganizationRoomService from '../../../services/organization/room';
import UTable from '../../UTable';

function Bed() {
   const [rooms, setRooms] = useState([]); //Хэвтэн өрөөнүүд

   const getRooms = async () => {
      await OrganizationRoomService.getByPageFilter({
         params: {
            isInpatient: true
         }
      }).then((response) => {
         setRooms(response.data.response.data);
      });
   };
   useEffect(() => {
      getRooms();
   }, []);

   const column = [
      {
         index: 'roomId',
         label: 'Өрөөны дугаар',
         isView: true,
         input: 'select',
         inputData: rooms,
         relIndex: 'roomNumber',
         col: 24
      },
      {
         index: 'bedNumber',
         label: 'Ор дугаар',
         isView: true,
         input: 'numberInput',
         col: 24
      }
   ];
   return (
      <div className="w-full bg-[#f5f6f7] p-3">
         <UTable
            title={'Ор'}
            url={'organization/bed'}
            column={column}
            width="30%"
            isCreate={true}
            isRead={true}
            isUpdate={true}
            isDelete={true}
         />
      </div>
   );
}
export default Bed;
