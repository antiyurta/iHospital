import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Empty, Modal, Table } from 'antd';
import React, { useState } from 'react';
import { numberToCurrency, openNofi } from '../../comman';

import examIcon from './NewOrder/examIcon.svg';
import removeButtonIcon from './removeButton.svg';

import { ListCareType } from './list-type';
import { CARE_TYPE } from './care-enum';
import { ListSupport } from './list-support';

export const Examination = ({ handleclick }) => {
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [selectedTypeId, setSelectedTypeId] = useState(null);
   const [selectedExaminations, setSelectedExaminations] = useState([]);

   const add = (examination) => {
      const state = selectedExaminations.some((exam) => exam.id === examination.id);
      if (state) {
         openNofi('warning', 'Анхааруулга', 'Шинжилгээ сонгогдсон байна');
      } else {
         var clone = { ...examination };
         clone.type = examination.type?.type;
         setSelectedExaminations([...selectedExaminations, clone]);
      }
   };
   const remove = (index) => {
      var arr = [...selectedExaminations];
      arr.splice(index, 1);
      setSelectedExaminations(arr);
   };
   return (
      <>
         <button
            className="yellow-order"
            onClick={(event) => {
               event.preventDefault();
               setIsOpenModal(true);
               setSelectedExaminations([]);
            }}
         >
            <img src={examIcon} />
            Шинжилгээ
         </button>
         <Modal
            title="Шинжилгээ сонгох"
            width={'80%'}
            open={isOpenModal}
            bodyStyle={{
               height: 552,
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
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-2">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div
                     className="p-2"
                     style={{
                        height: 552,
                        overflow: 'auto'
                     }}
                  >
                     <ListCareType type={CARE_TYPE.Examination} getTypeById={setSelectedTypeId} />
                  </div>
               </div>
               <div className="grid sm:grid-cols-1 sm:col-span-2 xl:grid-cols-2 lg:col-span-3 gap-2">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <ListSupport careType={CARE_TYPE.Examination} careTypeId={selectedTypeId} add={add} />
                  </div>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-2">
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
                                 align: 'left',
                                 render: (text) => {
                                    return <p className="whitespace-pre-wrap text-black">{text}</p>;
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
                                       <div
                                          className="flex justify-center hover:cursor-pointer"
                                          onClick={() => remove(index)}
                                       >
                                          <img src={removeButtonIcon} />
                                       </div>
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
