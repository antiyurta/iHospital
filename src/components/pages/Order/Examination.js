import { CloseOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
// import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, numberToCurrency, openNofi } from '../../comman';

function Examination({ isOpen, isClose, handleclick }) {
   const token = useSelector(selectCurrentToken);
   const [examinations, setExaminations] = useState([]);
   const [examination, setExamination] = useState([]);
   const [selectedExaminations, setSelectedExaminations] = useState([]);
   const [searchField, setSearchField] = useState('');

   const config = {
      headers: {},
      params: {}
   };
   const getExamination = async () => {
      config.params.type = 0;
      const response = await Get('service/type', token, config);
      setExaminations(response.data);
   };

   const getTypeById = async (id) => {
      config.params.type = null;
      config.params.examinationTypeId = id;
      const response = await Get('service/examination', token, config);
      setExamination(response.data);
   };
   const add = (examination) => {
      const state = selectedExaminations.includes(examination);
      if (state) {
         openNofi('warning', 'EXA', 'EXA сонгогдсон байна');
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
   const filteredExamination = examination.filter((exmintion) => {
      return exmintion.name?.toLowerCase().includes(searchField?.toLowerCase());
   });
   useEffect(() => {
      getExamination();
   }, [isOpen]);
   return (
      <>
         <Button>Шинжилгээ</Button>
         <Modal
            title="Шинжилгээ сонгох"
            width={'80%'}
            open={isOpen}
            bodyStyle={{
               height: 600,
               maxHeight: 600
            }}
            onCancel={() => isClose('examination', false)}
            onOk={() => {
               handleclick(selectedExaminations);
               isClose('examination', false);
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
                                 onClick={() => getTypeById(examination.id)}
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
                        <Input placeholder="Хайх" allowClear onChange={(e) => setSearchField(e.target.value)} />
                        <Table
                           rowKey={'id'}
                           bordered
                           scroll={{
                              y: 400
                           }}
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
                           dataSource={filteredExamination}
                           pagination={false}
                        />
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
                           dataSource={filteredExamination}
                           pagination={false}
                        />
                     </div>
                  </div>
               </div>
            </div>
            {/* <div className="flex flex-row">
               <div className="basis-1/5">
                  {examinations.map((examination, index) => {
                     return (
                        <Button
                           onClick={() => getTypeById(examination.id)}
                           className="w-full mb-1 bg-[#3d9970] text-white rounded-lg"
                           key={index}
                        >
                           {examination.name}
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
                           {filteredExamination.map((item, index) => {
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
                           {selectedExaminations.map((item, index) => {
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
export default Examination;
