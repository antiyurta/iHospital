import React, { useEffect, useState } from 'react';
import { NewTable, NewColumn } from '../../Table/Table';
import { Button, Card, Form, InputNumber, Modal, Select } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
// service
import OrganizationBedService from '../../../services/organization/bed';
import OrganizationRoomService from '../../../services/organization/room';

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
         setRooms(response.data.response.data);
      });
   };
   const onFinish = async (data) => {
      await OrganizationBedService.post(data).then((response) => {
         if (response.status == 201) {
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

   return (
      <div className="w-full bg-[#f5f6f7] p-3">
         <Card
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
                  title="Өрөөний дугаар"
                  render={(value) => {
                     return rooms?.find((e) => e.id === value)?.roomNumber;
                  }}
               />
               <NewColumn dataIndex={'bedNumber'} title="Ор дугаар" />
            </NewTable>
         </Card>
         <Modal
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
                              {room.roomNumber}
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
                  <InputNumber />
               </Form.Item>
            </Form>
         </Modal>
      </div>
   );
}
export default Bed;
