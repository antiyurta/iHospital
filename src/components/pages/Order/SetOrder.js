import React, { useContext, useEffect, useState } from 'react';
import { formatNameForDoc } from '../../comman';
import {
   Badge,
   Button,
   ConfigProvider,
   Descriptions,
   Form,
   Input,
   Modal,
   Popconfirm,
   Radio,
   Select,
   Table,
   Tabs
} from 'antd';
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
import { Each } from '../../../features/Each';

const InMode = {
   EDIT: 'EDIT',
   VIEW: 'VIEW',
   CREATE: 'CREATE'
};

const InTitle = {
   EDIT: 'засварлах',
   VIEW: 'харах',
   CREATE: 'нэмэх'
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
   const [selectedSetOrder, setSelectedSetOrder] = useState({});
   const [isOpenViewModal, setIsOpenViewModal] = useState(false);
   const [isMode, setIsMode] = useState();
   const [isLoading, setIsLoading] = useState(false);
   const [isLoadingConfirm, setIsLoadingConfirm] = useState(false);

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

   const onFinish = async (values) => {
      setIsLoadingConfirm(true);
      if (isMode === InMode.EDIT) {
         await ServiceService.patchSetOrder(selectedOrderId, values).then((response) => {
            if (response.data.success) {
               // setIsLoadingConfirm(false);
               // setIsOpenAddModal(false);
               // getSetOrders(1, 10);
            }
         });
      } else if (isMode === InMode.CREATE) {
         await ServiceService.postSetOrder(values).then((response) => {
            // setIsLoadingConfirm(false);
            // setIsOpenAddModal(false);
            // getSetOrders(1, 10);
         });
      }
   };
   const onDelete = async (id) => {
      await ServiceService.deleteSetOrder(id).then(({ data: { response, success } }) => {
         if (success) {
            console.log(response);
            getSetOrders();
         }
      });
   };

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
                     title: 'Онош',
                     dataIndex: 'icdCode'
                  },
                  {
                     title: 'Тайлбар',
                     dataIndex: 'description'
                  },
                  {
                     title: '',
                     render: (_, row) => (
                        <div className="flex flex-row gap-3 justify-center">
                           <EyeOutlined
                              className="text-blue-600"
                              onClick={() => {
                                 setIsMode(InMode.VIEW);
                                 setSelectedSetOrder(row);
                                 setIsOpenViewModal(true);
                              }}
                           />
                           <EditOutlined
                              className="text-green-600"
                              onClick={() => {
                                 setIsMode(InMode.EDIT);
                                 form.setFieldsValue(row);
                                 setIsOpenFirstModal(true);
                              }}
                           />
                           <Popconfirm
                              title="Сет-Ордер устгах"
                              description="Та утсгахдаа итгэлттэй байна уу?"
                              onConfirm={() => onDelete(row.id)}
                              okText="Тийм"
                              cancelText="Үгүй"
                           >
                              <DeleteOutlined className="text-red-600" />
                           </Popconfirm>
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
                              setIsMode(InMode.CREATE);
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
                        children: (
                           <SetOrderTable
                              type={0}
                              orders={orders}
                              handleClickAdd={() => setIsOpenFirstModal(true)}
                              handleClickEdit={(row) => {
                                 setIsMode(InMode.CREATE);
                                 form.setFieldsValue(row);
                                 setIsOpenFirstModal(true);
                              }}
                           />
                        )
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
                        children: (
                           <SetOrderTable
                              type={1}
                              orders={orders}
                              handleClickAdd={() => setIsOpenFirstModal(true)}
                              handleClickEdit={(row) => {
                                 setIsMode(InMode.CREATE);
                                 form.setFieldsValue(row);
                                 setIsOpenFirstModal(true);
                              }}
                           />
                        )
                     }
                  ]}
               />
            </div>
         </Modal>
         <Modal
            title={`Cет-Ордер ${InTitle[isMode]}`}
            width={700}
            open={isOpenFirstModal}
            onCancel={() => setIsOpenFirstModal(false)}
            onOk={() =>
               form.validateFields().then((values) => {
                  onFinish(values);
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
                     label="Тасаг"
                     name="structureId"
                     rules={[
                        {
                           required: true,
                           message: 'Онош заавал'
                        }
                     ]}
                  >
                     <Select
                        options={structures?.map((structure) => ({
                           label: structure.name,
                           value: structure.id
                        }))}
                     />
                  </Form.Item>
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
                                    <EditableTableMedicine
                                       medicines={medicines}
                                       remove={remove}
                                       isEdit={isMode === InMode.EDIT ? true : false}
                                    />
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
                                       isEdit={isMode === InMode.EDIT ? true : false}
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
                                    <EditableTableXray
                                       form={form}
                                       xrays={xrays}
                                       remove={remove}
                                       isEdit={isMode === InMode.EDIT ? true : false}
                                    />
                                 )}
                              </Form.List>
                           )
                        }
                     ]}
                  />
               </div>
            </Form>
         </Modal>
         <Modal
            title={`Cет-Ордер ${InTitle[isMode]}`}
            open={isOpenViewModal}
            onCancel={() => setIsOpenViewModal(false)}
            footer={null}
         >
            <Descriptions
               bordered
               size="small"
               title="Дэлгэрэнгүй"
               extra={
                  <Button
                     type="primary"
                     onClick={() => {
                        handleclick(selectedSetOrder);
                        setIsOpenViewModal(false);
                        setIsOpenModal(false);
                     }}
                  >
                     Сет-Ордер ашиглах
                  </Button>
               }
            >
               <Descriptions.Item label={'Үүсгэсэн хүн'} span={2}>
                  {selectedSetOrder?.createdFirstName}
               </Descriptions.Item>
               <Descriptions.Item label={'Онош'}>{selectedSetOrder?.icdCode}</Descriptions.Item>
               <Descriptions.Item label={'Захиалсан эм'} span={3}>
                  <ul className="list-decimal">
                     <Each
                        of={selectedSetOrder?.services?.medicines}
                        render={(medicine, index) => <li key={index}>{medicine?.name}</li>}
                     />
                  </ul>
               </Descriptions.Item>
               <Descriptions.Item label={'Захиалсан шинжилгээ'} span={3}>
                  <ul className="list-decimal">
                     <Each
                        of={selectedSetOrder?.services?.examinations}
                        render={(examination, index) => <li key={index}>{examination?.name}</li>}
                     />
                  </ul>
               </Descriptions.Item>
               <Descriptions.Item label={'Захиалсан оношилгоо'} span={3}>
                  <ul className="list-decimal">
                     <Each
                        of={selectedSetOrder?.services?.xrays}
                        render={(xray, index) => <li key={index}>{xray.name}</li>}
                     />
                  </ul>
               </Descriptions.Item>
            </Descriptions>
         </Modal>
      </>
   );
}
export default SetOrder;
