import React, { useState } from 'react';
import surgeryIcon from './NewOrder/surgeryIcon.svg';
import { Button, Empty, Modal, Table } from 'antd';
import { ListCareType } from './list-type';
import { CARE_TYPE } from './care-enum';
import { ListSupport } from './list-support';
import { numberToCurrency, openNofi } from '@Comman/common';
import { CloseCircleOutlined } from '@ant-design/icons';
const Operation = ({ usageType, handleclick }) => {
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [selectedOperations, setSelectedOperations] = useState([]);
   const [selectedTypeId, setSelectedTypeId] = useState(null);
   const add = (operation) => {
      const state = selectedOperations.some((oper) => oper.id === operation.id);
      if (state) {
         openNofi('warning', 'Анхааруулга', 'Мэс ажилбар сонгогдсон байна');
      } else {
         const clone = { ...operation };
         clone.type = operation.type?.type;
         setSelectedOperations([...selectedOperations, clone]);
      }
   };
   const remove = (index) => {
      var arr = [...selectedOperations];
      arr.splice(index, 1);
      setSelectedOperations(arr);
   };
   return (
      <>
         <button
            className="yellow-order"
            onClick={() => {
               setIsOpenModal(true);
               //    setSelectedSurgeryId(null);
               //    setSelectedSurgeries([]);
            }}
         >
            <img src={surgeryIcon} />
            Мэс ажилбар
         </button>
         <Modal
            title="Мэс ажилбар сонгох"
            width={'80%'}
            open={isOpenModal}
            bodyStyle={{
               height: 600,
               maxHeight: 600,
               overflow: 'auto'
            }}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               handleclick(selectedOperations);
               setIsOpenModal(false);
            }}
            destroyOnClose
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
                        <ListCareType type={CARE_TYPE.Operation} getTypeById={setSelectedTypeId} />
                     </div>
                  </div>
               </div>
               <div className="grid sm:grid-cols-1 sm:col-span-2 xl:grid-cols-2 lg:col-span-3 gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <ListSupport careType={CARE_TYPE.Operation} careTypeId={selectedTypeId} add={add} />
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
                                 dataIndex: usageType === 'OUT' ? 'price' : 'inpatientPrice',
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
                           dataSource={selectedOperations}
                           pagination={false}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </>
   );
};
export default Operation;
