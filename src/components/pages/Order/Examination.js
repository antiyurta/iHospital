import { CloseCircleOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Empty, Input, Modal, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { localMn, numberToCurrency, openNofi } from '../../comman';
import jwtInterceopter from '../../jwtInterceopter';

const { Search } = Input;
const { Option } = Select;

function Examination({ handleclick }) {
   const [isLoading, setIsLoading] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [selectedExaminationId, setSelectedExaminationId] = useState(null);
   const [examinations, setExaminations] = useState([]);
   const [examination, setExamination] = useState([]);
   const [metaExamination, setMetaExamination] = useState({});
   const [selectedExaminations, setSelectedExaminations] = useState([]);
   const [filterValue, setFilterValue] = useState('');
   const [filterDrgCode, setFilterDrgCode] = useState(null);
   const getExamination = async () => {
      await jwtInterceopter
         .get('service/type', {
            params: {
               type: 0
            }
         })
         .then((response) => {
            setExaminations(response.data.response?.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const getTypeById = async (id, page, pageSize, filterValue, drgCode) => {
      setIsLoading(true);
      setFilterValue(filterValue);
      await jwtInterceopter
         .get('service/examination', {
            params: {
               examinationTypeId: id,
               page: page,
               limit: pageSize,
               name: filterValue ? filterValue : null,
               drgCode: filterDrgCode
            }
         })
         .then((response) => {
            setSelectedExaminationId(id);
            setExamination(response.data.response.data);
            setMetaExamination(response.data.response.meta);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const add = (examination) => {
      const state = selectedExaminations.includes(examination);
      if (state) {
         openNofi('warning', 'Анхааруулга', 'Шинжилгээ сонгогдсон байна');
      } else {
         examination.type = examination.types.type;
         setSelectedExaminations([...selectedExaminations, examination]);
      }
   };
   const remove = (index) => {
      var arr = [...selectedExaminations];
      arr.splice(index, 1);
      setSelectedExaminations(arr);
   };
   useEffect(() => {
      getExamination();
   }, []);
   return (
      <>
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
               setSelectedExaminationId(null);
               setSelectedExaminations([]);
            }}
         >
            Шинжилгээ
         </Button>
         <Modal
            title="Шинжилгээ сонгох"
            width={'80%'}
            open={isOpenModal}
            bodyStyle={{
               height: 600,
               maxHeight: 600,
               overflow: 'auto'
            }}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               handleclick(selectedExaminations);
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
                        {examinations.map((examination, index) => {
                           return (
                              <button
                                 onClick={() => getTypeById(examination.id, 1, 10)}
                                 className="w-full bg-[#3d9970] text-white rounded-lg"
                                 key={index}
                              >
                                 {examination.name}
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
                              if (selectedExaminationId === null) {
                                 openNofi('warning', 'Анхааруулга', 'Төрөл сонгоно уу');
                              } else {
                                 getTypeById(selectedExaminationId, 1, 10, e);
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
                              dataSource={examination}
                              pagination={{
                                 position: ['bottomCenter'],
                                 size: 'small',
                                 current: metaExamination.page,
                                 total: metaExamination.itemCount,
                                 showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                                 pageSize: metaExamination.limit,
                                 showSizeChanger: true,
                                 pageSizeOptions: ['5', '10', '20', '50'],
                                 showQuickJumper: true,
                                 onChange: (page, pageSize) =>
                                    getTypeById(selectedExaminationId, page, pageSize, filterValue)
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
                           dataSource={selectedExaminations}
                           pagination={false}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </>
   );
}
export default Examination;
