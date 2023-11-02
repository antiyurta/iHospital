import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Empty, Modal, Table } from 'antd';
import React, { useState } from 'react';
import { numberToCurrency, openNofi } from '../../comman';

import { ListCareType } from './list-type';
import { CARE_TYPE } from './care-enum';
import { ListSupport } from './list-support';

export const Examination = ({ handleclick }) => {
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [selectedTypeId, setSelectedTypeId] = useState(null);
   const [selectedExaminations, setSelectedExaminations] = useState([]);

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
   return (
      <>
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
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
                        <ListCareType type={CARE_TYPE.Examination} getTypeById={setSelectedTypeId} />
                     </div>
                  </div>
               </div>
               <div className="grid sm:grid-cols-1 sm:col-span-2 xl:grid-cols-2 lg:col-span-3 gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <ListSupport careType={CARE_TYPE.Examination} careTypeId={selectedTypeId} add={add} />
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
};
