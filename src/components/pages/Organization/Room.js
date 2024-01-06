import React, { useEffect, useState } from 'react';
import UTable from '../../UTable';
import roomTypes from './roomTypes.js';

import OrganizationFloorServices from '../../../services/organization/floor';
import OrganizationBlockServices from '../../../services/organization/block';
import OrganizationStructureServices from '../../../services/organization/structure';

function Room() {
   const [blocks, setBlocks] = useState([]);
   const [roomData, setRoomData] = useState([]);
   const [structures, setStructures] = useState([]);

   const getBlocks = async () => {
      await OrganizationBlockServices.get({}).then((response) => {
         setBlocks(response.data.response.data);
      });
   };
   const getFloor = async () => {
      await OrganizationFloorServices.get({}).then((response) => {
         setRoomData(response.data.response.data);
      });
   };
   const getStructures = async () => {
      await OrganizationStructureServices.get({
         params: {
            type: 2
         }
      }).then((response) => {
         setStructures(response.data.response.data);
      });
   };

   useEffect(() => {
      getStructures();
      getBlocks();
      getFloor();
   }, []);

   const genderData = [
      { id: 'WOMAN', value: 'WOMAN', label: 'Эм' },
      { id: 'MAN', value: 'MAN', label: 'Эр' },
      { id: 'TRANS', value: 'TRANS', label: 'Эр эм холилдсон' }
   ];
   const column = [
      {
         index: 'structureId',
         label: 'Тасаг',
         isView: true,
         input: 'select',
         inputData: structures,
         relIndex: 'name',
         col: 12
      },
      {
         index: 'roomNumber',
         label: 'Өрөөны дугаар',
         isView: true,
         input: 'input',
         col: 12,
         isDepend: false
      },
      {
         index: 'blockId',
         label: 'Блок',
         isView: true,
         input: 'select',
         inputData: blocks,
         relIndex: 'name',
         col: 12
      },
      {
         index: 'floorId',
         label: 'Давхар',
         isView: true,
         input: 'select',
         inputData: roomData,
         relIndex: 'name',
         col: 12
      },
      {
         index: 'isInpatient',
         label: 'Хэвтэн эсэх',
         isView: true,
         input: 'switch',
         col: 12,
         isDepend: true
      },
      {
         index: 'genderType',
         label: 'Хүйс',
         isView: true,
         input: 'select',
         inputData: genderData,
         relIndex: 'label',
         col: 12,
         isDepend: true
      },
      {
         index: 'price',
         label: 'Өрөөны үнэ',
         isView: true,
         input: 'numberInput',
         col: 12,
         isDepend: true
      },
      {
         index: 'roomType',
         label: 'Өрөөний төрөл',
         isView: true,
         input: 'select',
         inputData: roomTypes,
         relIndex: 'label',
         col: 12,
         isDepend: true
      }
   ];
   return (
      <div className="w-full bg-[#f5f6f7] p-3">
         <UTable
            title={'Өрөө'}
            url={'organization/room'}
            column={column}
            isCreate={true}
            isRead={true}
            isUpdate={true}
            isDelete={true}
            width="30%"
            dependCol="isInpatient" //Аль талбараас хамаарч hide/show хийгдэх
            dependVal={true} //Хамааралтай талбарын утга
         />
      </div>
   );
}
export default Room;
