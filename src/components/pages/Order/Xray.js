import { CloseOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, DatePicker, Input, Modal } from 'antd';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, openNofi } from '../../comman';

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Xray({ isOpen, isClose, handleclick }) {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [xrays, setXrays] = useState([]);
   const [xray, setXray] = useState([]);
   const [selectedXrays, setSelectedXrays] = useState([]);
   const [searchField, setSearchField] = useState('');
   const getXray = async () => {
      config.params.type = 1;
      const response = await Get('service/type', token, config);
      setXrays(response.data);
   };

   const getTypeById = async (id) => {
      config.params.type = null;
      config.params.xrayTypeId = id;
      const response = await Get('service/xray', token, config);
      setXray(response.data);
   };
   const add = (xray) => {
      const state = selectedXrays.includes(xray);
      if (state) {
         openNofi('warning', 'xray', 'xray сонгогдсон байна');
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
   const filteredXray = xray.filter((xry) => {
      return xry.name.toLowerCase().includes(searchField.toLowerCase());
   });
   useEffect(() => {
      getXray();
   }, [isOpen]);
   return (
      <>
         <Modal
            title="Оношилгоо сонгох"
            width={'80%'}
            open={isOpen}
            onCancel={() => isClose('xray', false)}
            onOk={() => {
               handleclick(selectedXrays);
               isClose('xray', false);
            }}
            okText={'Хадгалах'}
            cancelText={'Болих'}
         >
            <div className="flex flex-row">
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
            </div>
         </Modal>
      </>
   );
}
export default Xray;
