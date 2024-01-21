import React, { useContext, useEffect, useState } from 'react';
import { formatNameForDoc } from '../../comman';
import { Badge, ConfigProvider, Form, Input, Modal, Radio, Table, Tabs } from 'antd';
import {
   DeleteOutlined,
   EditOutlined,
   EyeOutlined,
   FilterOutlined,
   HeartOutlined,
   PlusCircleOutlined,
   SearchOutlined
} from '@ant-design/icons';
import mnMN from 'antd/es/locale/mn_MN';

// services
import ServiceService from '../../../services/service/service';
import OrganizationStructureApi from '../../../services/organization/structure';
import EmrContext from '../../../features/EmrContext';

import SetOrderTable from './SetOrder/setOrderTable';
import DiagnoseWindow from '../service/DiagnoseWindow';
import EditableTableMedicine from './SetOrder/EditableTableMedicine';
import EditableTableExamination from './SetOrder/EditableTableExamination';
import EditableTableXray from './SetOrder/EditableTableXray';

const InMode = {
   EDIT: 'EDIT',
   VIEW: 'VIEW'
};

const InTitle = {
   EDIT: 'Засварлах',
   VIEW: 'Харах'
};

const { TextArea } = Input;

function SetOrder({ handleclick }) {
   const { countOfPublicSetOrder, countOfPrivateSetOrder } = useContext(EmrContext);
   const [form] = Form.useForm();
   const xrays = Form.useWatch(['services', 'xrays'], form);
   const examinations = Form.useWatch(['services', 'examinations'], form);
   const medicines = Form.useWatch(['services', 'medicines'], form);

   const [orders, setOrders] = useState([]);
   const [activeKey, setActiveKey] = useState(1);
   const [structures, setStructures] = useState([]);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isOpenFirstModal, setIsOpenFirstModal] = useState(false);
   const [isOpenSubModal, setIsOpenSubModal] = useState(false);
   const [isMode, setIsMode] = useState();
   const [isLoading, setIsLoading] = useState(false);

   const getSetOrders = async () => {
      setIsLoading(true);
      await ServiceService.getSetOrder({})
         .then(({ data: { response } }) => {
            setOrders(response.data);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const getStructures = async () => {
      await OrganizationStructureApi.get({
         params: {
            type: 2
         }
      }).then(({ data: { response } }) => {
         setStructures(response.data);
      });
   };

   // const onFinish = async (values) => {
   //    setIsLoadingConfirm(true);
   //    if (editMode) {
   //       await ServiceService.patchSetOrder(selectedOrderId, values).then((response) => {
   //          if (response.data.success) {
   //             setIsLoadingConfirm(false);
   //             setIsOpenAddModal(false);
   //             getSetOrders(1, 10);
   //          }
   //       });
   //    } else {
   //       await ServiceService.postSetOrder(values).then((response) => {
   //          setIsLoadingConfirm(false);
   //          setIsOpenAddModal(false);
   //          getSetOrders(1, 10);
   //       });
   //    }
   // };

   useEffect(() => {
      getSetOrders();
      getStructures();
   }, []);

   const FullTable = () => {
      return (
         <ConfigProvider locale={mnMN}>
            <Table
               rowKey={'id'}
               columns={[
                  {
                     title: 'Төлөв',
                     dataIndex: 'setOrderType',
                     render: (setOrderType) => {
                        if (setOrderType === 0) {
                           return (
                              <span className="bg-[#22A06B] p-1 flex justify-center text-white rounded-lg">
                                 Нийтийн
                              </span>
                           );
                        } else {
                           return (
                              <span className="bg-[#EC7A09] p-1 flex justify-center text-white rounded-lg">Хувийн</span>
                           );
                        }
                     },
                     filters: [
                        {
                           text: <span className="bg-[#22A06B] p-1 text-white rounded-lg">Нийтийн</span>,
                           value: 0
                        },
                        {
                           text: <span className="bg-[#EC7A09] p-1 text-white rounded-lg">Хувийн</span>,
                           value: 1
                        }
                     ],
                     onFilter: (value, record) => record.setOrderType === value
                  },
                  {
                     title: 'Тасгийн нэр',
                     dataIndex: ['structure', 'name'],
                     filters: structures?.map((structure) => ({
                        text: structure.name,
                        value: structure.id
                     })),
                     filterSearch: true,
                     onFilter: (value, record) => record.structureId === value
                  },
                  {
                     title: 'Эмч',
                     render: (_, row) => formatNameForDoc(row?.createdLastName, row?.createdFirstName)
                  },
                  {
                     title: 'Тайлбар',
                     dataIndex: 'description'
                  },
                  {
                     title: '',
                     render: (_, row) => (
                        <div className="flex flex-row gap-2">
                           <EyeOutlined
                              onClick={() => {
                                 setIsMode(InMode.VIEW);
                                 setIsOpenSubModal(true);
                              }}
                           />
                           <EditOutlined
                              onClick={() => {
                                 setIsMode(InMode.EDIT);
                                 setIsOpenSubModal(true);
                              }}
                           />
                           <DeleteOutlined />
                        </div>
                     )
                  }
               ]}
               dataSource={orders}
               pagination={false}
               footer={() => {
                  return (
                     <div className="set-order-add-button">
                        <button
                           onClick={() => {
                              setIsOpenFirstModal(true);
                           }}
                        >
                           <PlusCircleOutlined />
                           Сэт-Ордер нэмэх
                        </button>
                     </div>
                  );
               }}
            />
         </ConfigProvider>
      );
   };

   return (
      <>
         <button
            className="green-order"
            onClick={() => {
               setIsOpenModal(true);
            }}
         >
            <HeartOutlined />
            Сэт-Ордер
         </button>
         <Modal
            title="Сэт-Ордер сонгох"
            width={1000}
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            okButtonProps={{
               style: {
                  display: 'none'
               }
            }}
         >
            <div className="internal-order-set-order">
               <div className="filter">
                  <Input prefix={<SearchOutlined />} placeholder="Хайх ...." />
                  <div className="filter-icon">
                     <FilterOutlined />
                  </div>
               </div>
               <Tabs
                  type="card"
                  activeKey={activeKey}
                  onChange={setActiveKey}
                  items={[
                     {
                        key: 1,
                        label: 'Бүгд',
                        children: <FullTable />
                     },
                     {
                        key: 2,
                        label: (
                           <div className="flex flex-row gap-2 items-end">
                              <p>Нийтийн сэт-ордер</p>
                              <Badge showZero count={countOfPublicSetOrder || 0} color="#2D8CFF" />
                           </div>
                        ),
                        forceRender: true,
                        children: <SetOrderTable type={0} orders={orders} />
                     },
                     {
                        key: 3,
                        label: (
                           <div className="flex flex-row gap-2 items-end">
                              <p>Хувийн жор</p>
                              <Badge showZero count={countOfPrivateSetOrder || 0} color="#2D8CFF" />
                           </div>
                        ),
                        forceRender: true,
                        children: <SetOrderTable type={0} orders={orders} />
                     }
                  ]}
               />
            </div>
         </Modal>
         <Modal
            title="Cет-Ордер нэмэх"
            width={700}
            open={isOpenFirstModal}
            onCancel={() => setIsOpenFirstModal(false)}
            onOk={() =>
               form.validateFields().then((values) => {
                  console.log(values);
               })
            }
         >
            <Form
               form={form}
               layout="vertical"
               initialValues={{
                  setOrderType: 1
               }}
            >
               <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 justify-between items-end">
                     <Form.Item
                        className="mb-0"
                        label="Оношийн код"
                        name="icdCode"
                        rules={[
                           {
                              required: true,
                              message: 'Онош заавал'
                           }
                        ]}
                     >
                        <Input disabled />
                     </Form.Item>
                     <DiagnoseWindow
                        handleClick={(diagnose) => {
                           form.setFieldValue('icdCode', diagnose.code);
                        }}
                     />
                  </div>
                  <Form.Item
                     label="Тайлбар"
                     name="description"
                     rules={[
                        {
                           required: true,
                           message: 'Онош заавал'
                        }
                     ]}
                  >
                     <TextArea />
                  </Form.Item>
                  <Form.Item label="Сэт-Ордерын төрөл" name="setOrderType">
                     <Radio.Group>
                        <Radio value={0}>Нийтийн</Radio>
                        <Radio value={1}>Хувийн</Radio>
                     </Radio.Group>
                  </Form.Item>
                  <Tabs
                     type="card"
                     items={[
                        {
                           key: 1,
                           forceRender: true,
                           label: 'Захиалсан эм',
                           children: (
                              <Form.List name={['services', 'medicines']}>
                                 {(medicines, { remove }) => (
                                    <EditableTableMedicine medicines={medicines} remove={remove} isEdit={false} />
                                 )}
                              </Form.List>
                           )
                        },
                        {
                           key: 2,
                           forceRender: true,
                           label: (
                              <div className="flex flex-row gap-2 items-end">
                                 <p>Захиалсан шинжилгээ</p>
                                 <Badge showZero count={examinations?.length || 0} color="#2D8CFF" />
                              </div>
                           ),
                           children: (
                              <Form.List name={['services', 'examinations']}>
                                 {(examinations, { remove }) => (
                                    <EditableTableExamination
                                       form={form}
                                       examinations={examinations}
                                       remove={remove}
                                       isEdit={false}
                                    />
                                 )}
                              </Form.List>
                           )
                        },
                        {
                           key: 3,
                           forceRender: true,
                           label: (
                              <div className="flex flex-row gap-2 items-end">
                                 <p>Захиасан оношилгоо</p>
                                 <Badge showZero count={xrays?.length || 0} color="#2D8CFF" />
                              </div>
                           ),
                           children: (
                              <Form.List name={['services', 'xrays']}>
                                 {(xrays, { remove }) => (
                                    <EditableTableXray form={form} xrays={xrays} remove={remove} isEdit={false} />
                                 )}
                              </Form.List>
                           )
                        }
                     ]}
                  />
               </div>
            </Form>
         </Modal>
         <Modal title={InTitle[isMode]} open={isOpenSubModal} onCancel={() => setIsOpenSubModal(false)}></Modal>
      </>
   );
}
export default SetOrder;
