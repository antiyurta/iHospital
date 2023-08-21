import React, { useEffect, useState } from 'react';

import UTable from '../../UTable';

import OrganizationBedService from '../../../services/organization/bed';
import OrganizationRoomService from '../../../services/organization/room';

import { NewTable, NewColumn } from '../../Table/Table';
import NewModal from '../../Modal/Modal';
import NewCard from '../../Card/Card';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

function Bed() {
   const [beds, setBeds] = useState([]);
   const [bedsMeta, setBedsMeta] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [rooms, setRooms] = useState([]); //Хэвтэн өрөөнүүд
   const getBeds = async (page, pageSize) => {
      setIsLoading(true);
      await OrganizationBedService.getByPageFilter({
         params: {
            page: page,
            limit: pageSize
         }
      })
         .then((response) => {
            setBeds(response.data.response.data);
            setBedsMeta(response.data.response.meta);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const getRooms = async () => {
      await OrganizationRoomService.getByPageFilter({
         params: {
            isInpatient: true
         }
      }).then((response) => {
         console.log(response);
         setRooms(response.data.response.data);
      });
   };

   useEffect(() => {
      getBeds(1, 1);
      getRooms();
   }, []);

   const column = [
      {
         index: 'bedNumber',
         label: 'Ор дугаар',
         isView: true,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'roomId',
         label: 'Өрөөны дугаар',
         isView: true,
         input: 'select',
         inputData: rooms,
         relIndex: 'roomNumber',
         col: 24
      }
   ];

   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full">
               <NewCard
                  title="Ор"
                  extra={
                     <>
                        <Button type="primary" icon={<PlusCircleOutlined />}>
                           Нэмэх
                        </Button>
                     </>
                  }
               >
                  <NewTable
                     prop={{
                        rowKey: 'id',
                        bordered: true,
                        dataSource: beds
                     }}
                     meta={bedsMeta}
                     isLoading={isLoading}
                     onChange={(page, pageSize) => getBeds(page, pageSize)}
                  >
                     <NewColumn
                        dataIndex={'roomId'}
                        title="Өрөөны дугаар"
                        render={(value) => {
                           return rooms?.find((e) => e.id === value)?.roomNumber;
                        }}
                     />
                     <NewColumn dataIndex={'bedNumber'} title="Ор дугаар" />
                  </NewTable>
               </NewCard>
            </div>
         </div>
         <NewModal title="Ор нэмэх"></NewModal>
         {/* <div className="w-full">
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
         </div> */}
      </>
   );
}
export default Bed;
