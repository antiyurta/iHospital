import React, { useContext, useEffect, useMemo, useState } from 'react';
import { formatNameForDoc, localMn, localMnC, openNofi } from '../../comman';
import { Button, Checkbox, ConfigProvider, Form, Input, Modal, Table, Tabs } from 'antd';
import {
   CloseOutlined,
   DeleteOutlined,
   EditOutlined,
   EyeOutlined,
   FilterOutlined,
   HeartOutlined,
   PlusCircleFilled,
   PlusCircleOutlined,
   SearchOutlined
} from '@ant-design/icons';
import mnMN from 'antd/es/locale/mn_MN';

//components
import OrderTable from '../Order/Order';
import OrderForm from './OrderTable/OrderForm';
import { NewColumn, NewTable } from '../../Table/Table';
import { NewInput, NewSearch, NewTextArea } from '../../Input/Input';
import NewModal from '../../Modal/Modal';
// services
import ServiceService from '../../../services/service/service';
import OrganizationStructureApi from '../../../services/organization/structure';
import AuthContext from '../../../features/AuthContext';

const InMode = {
   EDIT: 'EDIT',
   VIEW: 'VIEW'
};

const InTitle = {
   EDIT: 'Засварлах',
   VIEW: 'Харах'
};

function SetOrder({ handleclick }) {
   const { user } = useContext(AuthContext);
   const [orders, setOrders] = useState([]);
   const [activeKey, setActiveKey] = useState(1);
   const [structures, setStructures] = useState([]);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isOpenSubModal, setIsOpenSubModal] = useState(false);
   const [isMode, setIsMode] = useState();
   //
   const [form] = Form.useForm();
   const [packForm] = Form.useForm();
   const [editMode, setEditMode] = useState(false);
   const [searchValue, setSearchValue] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [isLoadingConfirm, setIsLoadingConfirm] = useState(false);

   const [isOpenPackageModal, setIsOpenPackageModal] = useState(false);

   const [meta, setMeta] = useState({});
   const [selectedOrderId, setSelectedOrderId] = useState(Number);
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

   const SerivceTable = (props) => {
      const { services, remove } = props;
      const [isOpen, setIsOpen] = useState(false);
      return (
         <>
            <div className="flex flex-col gap-3">
               <div className="flex justify-between">
                  <p>Үйлчилгээ нэмэх</p>
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
               <NewTable
                  prop={{
                     rowKey: 'serviceId',
                     bordered: true,
                     dataSource: services
                  }}
                  meta={{
                     page: 1,
                     limit: services.length
                  }}
                  isLoading={false}
                  isPagination={false}
               >
                  <NewColumn
                     title="Нэр"
                     render={(value, row, index) => {
                        return (
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
                        );
                     }}
                  />
                  <NewColumn
                     title="Үйлдэл"
                     width={40}
                     render={(value, row, index) => {
                        return (
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
                        );
                     }}
                  />
               </NewTable>
            </div>
            <NewModal title="Үйлчилгээ" open={isOpen} onCancel={() => setIsOpen(false)} footer={null}>
               <OrderTable
                  isPackage={true}
                  isDoctor={false}
                  categories={[
                     {
                        //shinejilgee
                        name: 'Examination',
                        label: 'Шинжилгээ'
                     },
                     {
                        //onshilgoo
                        name: 'Xray',
                        label: 'Оношилгоо'
                     },
                     {
                        //mes zasal
                        name: 'Surgury',
                        label: 'Мэс засал'
                     },
                     {
                        //emchilgee
                        name: 'Treatment',
                        label: 'Эмчилгээ'
                     },
                     {
                        //duran
                        name: 'Endo',
                        label: 'Дуран'
                     }
                  ]}
                  save={(e) => {
                     setIsOpen(false);
                     const oldServices = form.getFieldValue('services');
                     if (oldServices != undefined) {
                        form.setFieldsValue({
                           services: [...form.getFieldValue('services'), ...e]
                        });
                     } else {
                        form.setFieldsValue({
                           services: e
                        });
                     }
                  }}
               />
            </NewModal>
         </>
      );
   };

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
            />
         </ConfigProvider>
      );
   };
   const PublicTable = () => {
      return (
         <Table
            rowKey={'id'}
            columns={[
               {
                  title: 'Төлөв',
                  dataIndex: 'setOrderType'
               }
            ]}
            dataSource={orders?.filter((order) => order.setOrderType === 0)}
            pagination={false}
         />
      );
   };
   const PrivateTable = () => {
      return (
         <Table
            rowKey={'id'}
            columns={[
               {
                  title: 'Төлөв',
                  dataIndex: 'setOrderType'
               }
            ]}
            dataSource={orders?.filter((order) => order.setOrderType === 1)}
            pagination={false}
         />
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
                        label: 'Нийтийн жор',
                        children: <PublicTable />
                     },
                     {
                        key: 3,
                        label: 'Хувийн жор',
                        children: <PrivateTable />
                     }
                  ]}
                  tabBarExtraContent={
                     <button
                        onClick={() => {
                           setIsOpenAddModal(true);
                        }}
                     >
                        <PlusCircleOutlined />
                        Сэт-Ордер нэмэх
                     </button>
                  }
               />
            </div>
         </Modal>
         <Modal title={InTitle[isMode]} open={isOpenSubModal} onCancel={() => setIsOpenSubModal(false)}></Modal>
      </>
   );
}
export default SetOrder;
