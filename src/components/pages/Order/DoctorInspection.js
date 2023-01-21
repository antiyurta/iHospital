import { CloseOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, openNofi } from '../../comman';

function DoctorInspection({ isOpen, isClose, handleclick }) {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [inspections, setInspections] = useState([]);
   const [selectedInspections, setSelectedInspections] = useState([]);
   const getInspections = async () => {
      config.params.type = 3;
      const response = await Get('organization/structure', token, config);
      setInspections(response.data);
      config.params.type = null;
   };
   const add = (inspection) => {
      const state = selectedInspections.includes(inspection);
      if (state) {
         openNofi('warning', 'EXA', 'EXA сонгогдсон байна');
      } else {
         inspection.type = 5;
         setSelectedInspections([...selectedInspections, inspection]);
      }
   };
   const remove = (index) => {
      var arr = [...selectedInspections];
      arr.splice(index, 1);
      setSelectedInspections(arr);
   };
   useEffect(() => {
      getInspections();
   }, [isOpen]);
   return (
      <>
         <Modal
            title="Үзлэг сонгох"
            width={'80%'}
            open={isOpen}
            onCancel={() => isClose('doctorInspection', false)}
            onOk={() => {
               handleclick(selectedInspections);
               isClose('doctorInspection', false);
            }}
         >
            <div className="flex flex-row">
               <div className="basis-1/2">
                  <div
                     className="table-responsive px-4 pb-4"
                     id="style-8"
                     style={{ maxHeight: '500px' }}
                  >
                     <Table
                        className="ant-border-space"
                        style={{ width: '100%' }}
                     >
                        <thead className="ant-table-thead bg-slate-200">
                           <tr>
                              <th className="font-bold text-sm align-middle">
                                 Нэр
                              </th>
                           </tr>
                        </thead>
                        <tbody className="ant-table-tbody p-0">
                           {inspections.map((item, index) => {
                              return (
                                 <tr
                                    onDoubleClick={() => add(item)}
                                    key={index}
                                    className="ant-table-row ant-table-row-level-0 hover:cursor-pointer"
                                 >
                                    <td className="whitespace-pre-line">
                                       {item.name}
                                    </td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </Table>
                  </div>
               </div>
               <div className="basis-1/2">
                  <div
                     className="table-responsive px-4 pb-4"
                     id="style-8"
                     style={{ maxHeight: '500px' }}
                  >
                     <Table
                        className="ant-border-space"
                        style={{ width: '100%' }}
                     >
                        <thead className="ant-table-thead bg-slate-200">
                           <tr>
                              <th className="font-bold text-sm align-middle">
                                 Нэр
                              </th>
                              <th></th>
                           </tr>
                        </thead>
                        <tbody className="ant-table-tbody p-0">
                           {selectedInspections.map((item, index) => {
                              return (
                                 <tr
                                    key={index}
                                    className="ant-table-row ant-table-row-level-0"
                                 >
                                    <td className="whitespace-pre-line">
                                       {item.name}
                                    </td>
                                    <td
                                       onDoubleClick={() => remove(index)}
                                       className="hover:cursor-pointer"
                                    >
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
export default DoctorInspection;
