import React, { useState } from 'react';
import { Button, Empty, Modal, Table } from 'antd';
import { numberToCurrency, openNofi } from '../../common';
import { CloseCircleOutlined } from '@ant-design/icons';
import { ListCareType } from './list-type';
import { CARE_TYPE } from './care-enum';
import { ListSupport } from './list-support';

import surgeryIcon from './NewOrder/surgeryIcon.svg';

function Surgery(props) {
   const { usageType, handleclick } = props;
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [selectedSurgeries, setSelectedSurgeries] = useState([]);
   const [selectedTypeId, setSelectedTypeId] = useState(null);

   const add = (surgery) => {
      const state = selectedSurgeries.some((surg) => surg.id === surgery.id);
      if (state) {
         openNofi('warning', 'Анхааруулга', 'Мэс ажилбар сонгогдсон байна');
      } else {
         const clone = { ...surgery };
         clone.type = surgery.type?.type;
         setSelectedSurgeries([...selectedSurgeries, clone]);
      }
   };
   const remove = (index) => {
      var arr = [...selectedSurgeries];
      arr.splice(index, 1);
      setSelectedSurgeries(arr);
   };
   return (
      <>
         <button
            className="yellow-order"
            onClick={(event) => {
               event.preventDefault();
               setIsOpenModal(true);
               setSelectedSurgeries([]);
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
               handleclick(selectedSurgeries);
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
                        <ListCareType type={CARE_TYPE.Surgery} getTypeById={setSelectedTypeId} />
                     </div>
                  </div>
               </div>
               <div className="grid sm:grid-cols-1 sm:col-span-2 xl:grid-cols-2 lg:col-span-3 gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <ListSupport careType={CARE_TYPE.Surgery} careTypeId={selectedTypeId} add={add} />
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
                           dataSource={selectedSurgeries}
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
export default Surgery;
