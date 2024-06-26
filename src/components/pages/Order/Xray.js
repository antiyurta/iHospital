import React, { useState } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Empty, Modal, Table } from 'antd';

//img
import xrayIcon from './NewOrder/xrayIcon.svg';
//comp
import { CARE_TYPE } from './care-enum';
import { ListCareType } from './list-type';
import { ListSupport } from './list-support';
import { isPayAmountCit } from '@Utils/config/insurance';
import { numberToCurrency, openNofi } from '@Comman/common';
//api
import healtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';

function Xray({ isDoctor, selectedPatient, hasInsurance, currentSeal, handleclick }) {
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [selectedTypeId, setSelectedTypeId] = useState(null);
   const [selectedXrays, setSelectedXrays] = useState([]);
   const [isLoading, setLoading] = useState(false);
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
               dataIndex: 'amountHi',
               render: (price) => numberToCurrency(price)
            },
            {
               title: 'Иргэн төлөх',
               dataIndex: 'amountCit',
               render: (price) => numberToCurrency(price)
            },
            {
               title: 'Нийт',
               dataIndex: 'price',
               render: (price) => numberToCurrency(price)
            }
         ]
      },
      {
         title: '',
         width: 40,
         render: (_text, _row, index) => (
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
         )
      }
   ];

   const add = async (xray, isJump) => {
      const state = selectedXrays.includes(xray);
      if (state) {
         openNofi('warning', 'Анхааруулга', 'Оношилгоо сонгогдсон байна');
      } else {
         console.log('isJump', isJump);
         console.log('isDoctor', isDoctor);
         console.log('xray.isInsurance', xray.isInsurance);
         console.log('xray.drgCode', isJump);
         console.log('hasInsurance', hasInsurance);
         if (!isJump && isDoctor && xray.isInsurance && xray.drgCode && hasInsurance) {
            setLoading(true);
            await healtInsuranceApi
               .getHicsCostList({
                  serviceId: 20200,
                  drgCode: xray.drgCode,
                  icdCode: currentSeal.diagnosis.icdCode,
                  drgTypeCode: xray.drgTypeCode
               })
               .then(({ data }) => {
                  if (data.code === 200) {
                     const amounts = isPayAmountCit(selectedPatient.freeTypeId, currentSeal, data.result[0]);
                     add(
                        {
                           ...xray,
                           ...amounts,
                           sealData: {
                              serviceId: data.result[0].serviceId,
                              drgCode: data.result[0].drgCode,
                              oldServiceId: currentSeal.hicsServiceId
                           }
                        },
                        true
                     );
                  } else {
                     openNofi('error', 'Амжилтгүй', 'Даатгалын дүн олдсонгүй');
                  }
               })
               .finally(() => {
                  setLoading(false);
               });
         } else {
            setSelectedXrays((prevXrays) => [
               ...prevXrays,
               {
                  ...xray,
                  type: xray.type.type
               }
            ]);
         }
      }
   };
   const remove = (index) => {
      var arr = [...selectedXrays];
      arr.splice(index, 1);
      setSelectedXrays(arr);
   };

   return (
      <>
         <button
            className="yellow-order"
            onClick={(event) => {
               event.preventDefault();
               setIsOpenModal(true);
               setSelectedXrays([]);
            }}
         >
            <img src={xrayIcon} />
            Оношилгоо
         </button>
         <Modal
            title="Оношилгоо сонгох"
            width={'80%'}
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               handleclick(selectedXrays);
               setIsOpenModal(false);
            }}
            okText={'Хадгалах'}
            cancelText={'Болих'}
            zIndex={1002}
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
                     <ListCareType type={CARE_TYPE.Xray} getTypeById={setSelectedTypeId} />
                  </div>
               </div>
               <div className="grid sm:grid-cols-1 sm:col-span-2 xl:grid-cols-2 lg:col-span-3 gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <ListSupport
                        careType={CARE_TYPE.Xray}
                        careTypeId={selectedTypeId}
                        add={(value) => {
                           add(value, false);
                        }}
                     />
                  </div>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <Table
                           rowKey={'id'}
                           bordered
                           loading={isLoading}
                           scroll={{
                              y: 400
                           }}
                           locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                           columns={columns}
                           dataSource={selectedXrays}
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
export default Xray;
