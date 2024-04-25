import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Table } from 'antd';
import { CloseOutlined, PlusCircleFilled, RedoOutlined } from '@ant-design/icons';
import OrderForm from './OrderTable/OrderForm';
//api
import DiagnoseApi from '@ApiServices/reference/diagnose';
import RecentRecipeApi from '@ApiServices/service/prescription';

const { TextArea, Search } = Input;

function RecentRecipe() {
   const [form] = Form.useForm();
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [diagnoses, setDiagnoses] = useState([]);
   const [diagnoseMeta, setDiagnoseMeta] = useState({});
   const [searchValue, setSearchValue] = useState('');
   // functions
   const getRecentRepice = async () => {
      await RecentRecipeApi.get().then((response) => {
         console.log(response);
      });
   };
   const getDiagnoses = async (page, pageSize, value) => {
      setSearchValue(value);
      await DiagnoseApi.get({
         params: {
            filter: value,
            page: page,
            limit: pageSize,
            types: [0, 1, 2]
         }
      }).then((response) => {
         if (response.data.success) {
            setDiagnoses(response.data.response.data);
            setDiagnoseMeta(response.data.response.meta);
         }
      });
   };
   //
   const PrescriptionTable = (props) => {
      const { services, remove } = props;
      const [isOpen, setIsOpen] = useState(false);
      return (
         <>
            <div className="flex flex-col gap-3">
               <div className="flex justify-between">
                  <p>Эмийн нэмэх</p>
                  <Button
                     onClick={() => setIsOpen(true)}
                     icon={
                        <PlusCircleFilled
                           style={{
                              color: 'green'
                           }}
                        />
                     }
                  />
               </div>
               <Table
                  rowKey="id"
                  bordered
                  columns={[
                     {
                        title: 'Нэр',
                        render: (_, _row, index) => (
                           <OrderForm
                              rules={[
                                 {
                                    required: true,
                                    message: 'sadas'
                                 }
                              ]}
                              noStyle
                              name={[index, 'serviceName']}
                              editing={false}
                           >
                              <Input />
                           </OrderForm>
                        )
                     },
                     {
                        title: 'Үйлдэл',
                        width: 40,
                        render: (_, _row, index) => (
                           <Button
                              onClick={() => remove(index)}
                              icon={
                                 <CloseOutlined
                                    style={{
                                       color: 'red'
                                    }}
                                 />
                              }
                           />
                        )
                     }
                  ]}
                  dataSource={services}
                  pagination={false}
               />
            </div>
         </>
      );
   };
   //
   useEffect(() => {
      if (isOpenModal) {
         getRecentRepice();
      }
   }, [isOpenModal]);
   return (
      <>
         <button
            className="green-order"
            onClick={() => {
               setIsOpenModal(true);
            }}
         >
            <RedoOutlined />
            Өмнөх жор
         </button>
         <Modal title="Өмнөх жор" open={isOpenModal} onCancel={() => setIsOpenModal(false)}>
            <Form form={form} layout="vertical">
               <div className="flex flex-col gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <div className="flex justify-between">
                           <p
                              style={{
                                 fontWeight: 600
                              }}
                           >
                              Онош сонгох
                           </p>
                           <Search
                              style={{
                                 backgroundColor: 'white',
                                 width: 300
                              }}
                              placeholder={'Кодоор хайх'}
                              onSearch={(e) => getDiagnoses(1, 10, e)}
                           />
                        </div>
                        <Table
                           rowKey="id"
                           bordered
                           columns={[
                              {
                                 title: 'Код',
                                 dataIndex: 'code'
                              },
                              {
                                 title: 'Монгол нэр',
                                 dataIndex: 'nameMn'
                              }
                           ]}
                           dataSource={diagnoses}
                           onChange={(page, pageSize) => getDiagnoses(page, pageSize, searchValue)}
                        />
                     </div>
                  </div>
                  <Form.Item
                     name="description"
                     label="Өмнөх жор тайлбар"
                     rules={[
                        {
                           required: true,
                           message: 'Өмнөх жор тайлбар заавал'
                        }
                     ]}
                  >
                     <TextArea />
                  </Form.Item>
                  <Form.List name="prescriptions">
                     {(services, { remove }) => {
                        return <PrescriptionTable services={services} remove={remove} />;
                     }}
                  </Form.List>
               </div>
            </Form>
         </Modal>
      </>
   );
}
export default RecentRecipe;
