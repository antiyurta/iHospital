import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, openNofi } from '../../comman';
import { CloseOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

function Package({ isOpen, isClose, handleclick }) {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [packages, setPackages] = useState([]);
   const [selectedPackages, setSelectedPackages] = useState([]);

   const getPackages = async () => {
      const response = await Get('service/package', token, config);
      setPackages(response.data);
   };
   const add = (packge) => {
      const state = selectedPackages.includes(packge);
      if (state) {
         openNofi('warning', 'EXA', 'EXA сонгогдсон байна');
      } else {
         packge.type = 7;
         setSelectedPackages([...selectedPackages, packge]);
      }
   };
   const remove = (index) => {
      var arr = [...selectedPackages];
      arr.splice(index, 1);
      setSelectedPackages(arr);
   };
   useEffect(() => {
      getPackages();
   }, [isOpen]);

   return (
      <>
         <Modal
            title="Багц сонгох"
            width={'80%'}
            open={isOpen}
            onCancel={() => isClose('package', false)}
            onOk={() => {
               handleclick(selectedPackages);
               isClose('package', false);
            }}
            okText={'Хадгалах'}
            cancelText={'Болих'}
         >
            <div className="flex flex-row">
               <div className="basis-1/2">
                  <div className="table-responsive px-4 pb-4" id="style-8" style={{ maxHeight: '500px' }}>
                     <Table className="ant-border-space" style={{ width: '100%' }}>
                        <thead className="ant-table-thead bg-slate-200">
                           <tr>
                              <th className="font-bold text-sm align-middle">Нэр</th>
                              <th className="font-bold text-sm align-middle">Үнэ</th>
                           </tr>
                        </thead>
                        <tbody className="ant-table-tbody p-0">
                           {packages.map((item, index) => {
                              return (
                                 <tr
                                    onDoubleClick={() => add(item)}
                                    key={index}
                                    className="ant-table-row ant-table-row-level-0 hover:cursor-pointer"
                                 >
                                    <td className="whitespace-pre-line">{item.name}</td>
                                    <td className="whitespace-pre-line">{item.price}</td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </Table>
                  </div>
               </div>
               <div className="basis-1/2">
                  <div className="table-responsive px-4 pb-4" id="style-8" style={{ maxHeight: '500px' }}>
                     <Table className="ant-border-space" style={{ width: '100%' }}>
                        <thead className="ant-table-thead bg-slate-200">
                           <tr>
                              <th className="font-bold text-sm align-middle">Нэр</th>
                              <th className="font-bold text-sm align-middle">Үнэ</th>
                           </tr>
                        </thead>
                        <tbody className="ant-table-tbody p-0">
                           {selectedPackages.map((item, index) => {
                              return (
                                 <tr key={index} className="ant-table-row ant-table-row-level-0">
                                    <td className="whitespace-pre-line">{item.name}</td>
                                    <td className="whitespace-pre-line">{item.price}</td>
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
export default Package;
