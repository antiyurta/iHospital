import React, { useState } from 'react';
import { Empty, Modal, Table } from 'antd';
import { numberToCurrency, openNofi } from '../../common';

import examIcon from './NewOrder/examIcon.svg';
import removeButtonIcon from './removeButton.svg';

import { ListCareType } from './list-type';
import { CARE_TYPE } from './care-enum';
import { ListSupport } from './list-support';
import { isPayAmountCit } from '@Utils/config/insurance';

export const Examination = ({ hicsExams, selectedPatient, hasInsurance, currentSeal, handleclick }) => {
   const [isLoading, setLoading] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [selectedTypeId, setSelectedTypeId] = useState(null);
   const [selectedExaminations, setSelectedExaminations] = useState([]);

   const add = (examination, isJump) => {
      const state = selectedExaminations.some((exam) => exam.id === examination.id);
      if (state) {
         openNofi('warning', 'Анхааруулга', 'Шинжилгээ сонгогдсон байна');
      } else {
         const currentExam = hicsExams.find((exam) => exam.examCode === examination.examCode);
         if (!isJump && examination.isInsurance && examination.examCode && hasInsurance && currentExam) {
            setLoading(true);
            const sealData = currentExam.drgCode
               ? {
                    serviceId: currentExam.serviceId,
                    drgCode: currentExam.drgCode,
                    oldServiceId: currentSeal.hicsServiceId
                 }
               : null;
            add(
               {
                  ...examination,
                  ...isPayAmountCit(selectedPatient.freeTypeId, currentSeal, currentExam),
                  sealData: sealData
               },
               true
            );
            setLoading(false);
         } else {
            setSelectedExaminations((prevExaminations) => [
               ...prevExaminations,
               {
                  ...examination,
                  type: examination.type.type
               }
            ]);
         }
      }
   };

   const columns = [
      {
         title: 'Нэр',
         dataIndex: 'name',
         render: (name) => <p className="whitespace-normal text-black">{name}</p>
      },
      {
         title: 'Үнэ',
         children: [
            {
               title: 'Даатгал',
               width: 120,
               dataIndex: 'amountHi',
               render: (price) => numberToCurrency(price)
            },
            {
               title: 'Иргэн төлөх',
               width: 120,
               dataIndex: 'amountCit',
               render: (price) => numberToCurrency(price)
            },
            {
               title: 'Нийт',
               width: 120,
               dataIndex: 'price',
               render: (price) => numberToCurrency(price)
            }
         ]
      },
      {
         title: '',
         width: 40,
         render: (_text, _row, index) => (
            <div className="flex justify-center hover:cursor-pointer" onClick={() => remove(index)}>
               <img src={removeButtonIcon} />
            </div>
         )
      }
   ];

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
            zIndex={1002}
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
                     <ListSupport
                        careType={CARE_TYPE.Examination}
                        careTypeId={selectedTypeId}
                        add={(value) => {
                           add(value, false);
                        }}
                     />
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
                           columns={columns}
                           loading={isLoading}
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
