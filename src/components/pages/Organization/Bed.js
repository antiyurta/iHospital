import React, { useEffect, useState } from 'react';

import OrganizationBedService from '../../../services/organization/bed';
import OrganizationRoomService from '../../../services/organization/room';

import { NewTable, NewColumn } from '../../Table/Table';
import NewModal from '../../Modal/Modal';
import NewCard from '../../Card/Card';
import { Button, Form, Select } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { NewInput, NewInputNumber } from '../../Input/Input';

function Bed() {
   const [form] = Form.useForm();
   const [beds, setBeds] = useState([]);
   const [bedsMeta, setBedsMeta] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [rooms, setRooms] = useState([]); //Хэвтэн өрөөнүүд
   const [isOpen, setIsOpen] = useState(false);
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
   const onFinish = async (data) => {
      await OrganizationBedService.post(data).then((response) => {
         if (response.status == 200) {
            getBeds();
            form.resetFields();
            setIsOpen(false);
         }
      });
   };
   useEffect(() => {
      getBeds(1, 10);
      getRooms();
   }, []);

   const column = [
      {
         index: 'bedNumber',
         label: 'Ор дугаар',
         isView: true,
         input: 'numberInput',
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
                        <Button type="primary" icon={<PlusCircleOutlined />} onClick={() => setIsOpen(true)}>
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
         <NewModal
            title="Ор нэмэх"
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            onOk={() =>
               form.validateFields().then((values) => {
                  onFinish(values);
               })
            }
         >
            <Form form={form} layout="vertical">
               <Form.Item
                  name="roomId"
                  label="Өрөө"
                  rules={[
                     {
                        required: true,
                        message: 'Өрөө заавал'
                     }
                  ]}
               >
                  <Select
                     allowClear
                     showSearch
                     optionFilterProp="children"
                     filterOption={(input, option) =>
                        (option?.value ?? '').toLowerCase().includes(input?.toLowerCase())
                     }
                  >
                     {rooms.map((room, index) => {
                        return (
                           <Option key={index} value={room.id}>
                              {room.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.Item
                  name="bedNumber"
                  label="Орны дугаар"
                  rules={[
                     {
                        required: true,
                        message: 'Орны дугаар заавал'
                     }
                  ]}
               >
                  <NewInputNumber />
               </Form.Item>
            </Form>
         </NewModal>
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
