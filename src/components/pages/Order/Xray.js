import { CloseCircleOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Empty, Input, Modal, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { localMn, numberToCurrency, openNofi } from '../../comman';
import jwtInterceopter from '../../jwtInterceopter';

const { Search } = Input;
const { Option } = Select;

function Xray({ handleclick }) {
   const [isLoading, setIsLoading] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [selectedXrayId, setSelectedXrayId] = useState(null);
   const [xrays, setXrays] = useState([]);
   const [xray, setXray] = useState([]);
   const [metaXray, setMetaXray] = useState({});
   const [selectedXrays, setSelectedXrays] = useState([]);
   const [filterValue, setFilterValue] = useState('');
   const [filterDrgCode, setFilterDrgCode] = useState(null);

   const getXray = async () => {
      await jwtInterceopter
         .get('service/type', {
            params: {
               type: 1
            }
         })
         .then((response) => {
            setXrays(response.data.response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const getTypeById = async (id, page, pageSize, filterValue) => {
      setIsLoading(true);
      setFilterValue(filterValue);
      await jwtInterceopter
         .get('service/xray', {
            params: {
               xrayTypeId: id,
               page: page,
               limit: pageSize,
               name: filterValue ? filterValue : null,
               drgCode: filterDrgCode
            }
         })
         .then((response) => {
            setSelectedXrayId(id);
            setXray(response.data.response.data);
            setMetaXray(response.data.response.meta);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const add = (xray) => {
      const state = selectedXrays.includes(xray);
      if (state) {
         openNofi('warning', 'Анхааруулга', 'Оношилгоо сонгогдсон байна');
      } else {
         xray.type = xray.types.type;
         setSelectedXrays([...selectedXrays, xray]);
      }
   };
   const remove = (index) => {
      var arr = [...selectedXrays];
      arr.splice(index, 1);
      setSelectedXrays(arr);
   };
   useEffect(() => {
      getXray();
   }, []);
   return (
      <>
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
               setSelectedXrays([]);
            }}
         >
            Оношилгоо
         </Button>
         <Modal
            title="Оношилгоо сонгох"
            width={'80%'}
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               handleclick(selectedXrays);
               setIsOpenModal(false);
            }}
            okText={'Хадгалах'}
            cancelText={'Болих'}
         >
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-3">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div
                     className="p-3"
                     style={{
                        height: 552,
                        overflow: 'auto'
                     }}
                  >
                     <div className="flex flex-col gap-2">
                        {xrays.map((xrays, index) => {
                           return (
                              <button
                                 onClick={() => getTypeById(xrays.id, 1, 10)}
                                 className="w-full bg-[#3d9970] text-white rounded-lg"
                                 key={index}
                              >
                                 {xrays.name}
                              </button>
                           );
                        })}
                     </div>
                  </div>
               </div>
               <div className="grid sm:grid-cols-1 sm:col-span-2 xl:grid-cols-2 lg:col-span-3 gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <div className="mb-3">
                           <label>Төрөл сонгох</label>
                           <Select
                              onChange={(e) => {
                                 console.log(e);
                                 setFilterDrgCode(e);
                              }}
                              allowClear
                              className="w-full"
                           >
                              <Option value="300040">Өндөр өртөгтэй</Option>
                              <Option value="300011">Амбулатори тусламж үйлчилгээ</Option>
                           </Select>
                        </div>
                        <Search
                           className="mb-3"
                           placeholder="Хайх"
                           allowClear
                           enterButton={
                              <SearchOutlined
                                 style={{
                                    fontSize: 16,
                                    color: 'white'
                                 }}
                              />
                           }
                           onSearch={(e) => {
                              if (selectedXrayId === null) {
                                 openNofi('warning', 'Анхааруулга', 'Төрөл сонгоно уу');
                              } else {
                                 getTypeById(selectedXrayId, 1, 10, e);
                              }
                           }}
                        />
                        <ConfigProvider locale={localMn()}>
                           <Table
                              rowKey={'id'}
                              bordered
                              scroll={{
                                 y: 400
                              }}
                              loading={isLoading}
                              locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                              columns={[
                                 {
                                    title: 'Нэр',
                                    dataIndex: 'name',
                                    render: (text) => {
                                       return (
                                          <p
                                             style={{
                                                whiteSpace: 'normal',
                                                color: 'black'
                                             }}
                                          >
                                             {text}
                                          </p>
                                       );
                                    }
                                 },
                                 {
                                    title: 'Үнэ',
                                    dataIndex: 'price',
                                    width: 100,
                                    render: (text) => {
                                       return numberToCurrency(text);
                                    }
                                 },
                                 {
                                    title: '',
                                    width: 40,
                                    render: (_text, row) => {
                                       return (
                                          <Button
                                             onClick={() => add(row)}
                                             icon={
                                                <PlusCircleOutlined
                                                   style={{
                                                      color: 'green'
                                                   }}
                                                />
                                             }
                                          />
                                       );
                                    }
                                 }
                              ]}
                              dataSource={xray}
                              pagination={{
                                 position: ['bottomCenter'],
                                 size: 'small',
                                 current: metaXray.page,
                                 total: metaXray.itemCount,
                                 showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                                 pageSize: metaXray.limit,
                                 showSizeChanger: true,
                                 pageSizeOptions: ['5', '10', '20', '50'],
                                 showQuickJumper: true,
                                 onChange: (page, pageSize) => getTypeById(selectedXrayId, page, pageSize, filterValue)
                              }}
                           />
                        </ConfigProvider>
                     </div>
                  </div>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <Table
                           rowKey={'id'}
                           bordered
                           scroll={{
                              y: 400
                           }}
                           locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                           columns={[
                              {
                                 title: 'Нэр',
                                 dataIndex: 'name',
                                 render: (text) => {
                                    return (
                                       <p
                                          style={{
                                             whiteSpace: 'normal',
                                             color: 'black'
                                          }}
                                       >
                                          {text}
                                       </p>
                                    );
                                 }
                              },
                              {
                                 title: 'Үнэ',
                                 dataIndex: 'price',
                                 width: 100,
                                 render: (text) => {
                                    return numberToCurrency(text);
                                 }
                              },
                              {
                                 title: '',
                                 width: 40,
                                 render: (_text, _row, index) => {
                                    return (
                                       <Button
                                          onClick={() => remove(index)}
                                          icon={
                                             <CloseCircleOutlined
                                                style={{
                                                   color: 'red'
                                                }}
                                             />
                                          }
                                       />
                                    );
                                 }
                              }
                           ]}
                           dataSource={selectedXrays}
                           pagination={false}
                        />
                     </div>
                  </div>
               </div>
            </div>
            {/* <div className="flex flex-row">
               <div className="basis-1/5">
                  {xrays.map((xray, index) => {
                     return (
                        <Button
                           onClick={() => getTypeById(xray.id)}
                           className="w-full mb-1 bg-[#3d9970] text-white rounded-lg"
                           key={index}
                        >
                           {xray.name}
                        </Button>
                     );
                  })}
               </div>
               <div className="basis-2/5">
                  <div className="table-responsive px-4 pb-4" id="style-8" style={{ maxHeight: '500px' }}>
                     <Table className="ant-border-space" style={{ width: '100%' }}>
                        <thead className="ant-table-thead bg-slate-200">
                           <tr>
                              <th className="font-bold text-sm align-middle">Нэр</th>
                              <th rowSpan={2} className="font-bold text-sm align-middle">
                                 Үнэ
                              </th>
                           </tr>
                           <tr>
                              <th>
                                 <Input
                                    placeholder="Хайх"
                                    allowClear
                                    onChange={(e) => setSearchField(e.target.value)}
                                 />
                              </th>
                           </tr>
                        </thead>
                        <tbody className="ant-table-tbody p-0">
                           {filteredXray.map((item, index) => {
                              return (
                                 <tr
                                    onDoubleClick={() => add(item)}
                                    key={index}
                                    className="ant-table-row ant-table-row-level-0 hover:cursor-pointer"
                                 >
                                    <td className="whitespace-pre-line">{item.name}</td>
                                    <td>{item.price}₮</td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </Table>
                  </div>
               </div>
               <div className="basis-2/5">
                  <div className="table-responsive px-4 pb-4" id="style-8" style={{ maxHeight: '500px' }}>
                     <Table className="ant-border-space" style={{ width: '100%' }}>
                        <thead className="ant-table-thead bg-slate-200">
                           <tr>
                              <th className="font-bold text-sm align-middle">Нэр</th>
                              <th className="font-bold text-sm align-middle">Үнэ</th>
                              <th></th>
                           </tr>
                        </thead>
                        <tbody className="ant-table-tbody p-0">
                           {selectedXrays.map((item, index) => {
                              return (
                                 <tr key={index} className="ant-table-row ant-table-row-level-0">
                                    <td className="whitespace-pre-line">{item.name}</td>
                                    <td>{item.price}₮</td>
                                    <td onDoubleClick={() => remove(index)} className="hover:cursor-pointer">
                                       <CloseOutlined
                                          style={{
                                             color: 'red',
                                             verticalAlign: 'middle'
                                          }}
                                       />
                                    </td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </Table>
                  </div>
               </div>
            </div> */}
         </Modal>
      </>
   );
}
export default Xray;
