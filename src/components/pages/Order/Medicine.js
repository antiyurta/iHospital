import { Modal, Tabs } from 'antd';
import React, { useState } from 'react';
//
import Internal from './Medicine/Internal';
import Global from './Medicine/Global';
//
import medicineIcon from './NewOrder/medicineIcon.svg';

function Medicine({ usageType, handleclick }) {
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [items, setItems] = useState([]);
   const configure = (data) => {
      const newData = [];
      data?.map((item) => {
         newData.push({
            iName: item.name,
            type: 8,
            id: item.id,
            medicineType: "TT"
         });
      });
      setItems(newData);
   };
   return (
      <>
         <button
            className="yellow-order"
            onClick={(event) => {
               event.preventDefault();
               setIsOpenModal(true);
            }}
         >
            <img src={medicineIcon} />
            Эм
         </button>
         <Modal
            title="Эм сонгох"
            width={'70%'}
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               handleclick(items);
               setIsOpenModal(false);
            }}
            okText={'Хадгалах'}
            cancelText={'Болих'}
         >
            <Tabs
               type="card"
               destroyInactiveTabPane
               items={[
                  {
                     label: 'Дотор эмийн сан',
                     key: '1',
                     children: <Internal data={configure} />
                  },
                  {
                     label: 'Гадна эм',
                     key: '2',
                     children: <Global data={configure} />
                  }
               ]}
            />
         </Modal>
      </>
   );
}
export default Medicine;
