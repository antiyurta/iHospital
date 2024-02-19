import React, { useState } from 'react';
import surgeryIcon from './NewOrder/surgeryIcon.svg';
import { Modal, Tabs } from 'antd';
const Operation = () => {
   const [isOpenModal, setIsOpenModal] = useState(false);
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
            Мэс засал
         </button>
         <Modal
            title="Мэс засал сонгох"
            width={'80%'}
            open={isOpenModal}
            bodyStyle={{
               height: 600,
               maxHeight: 600,
               overflow: 'auto'
            }}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               //    handleclick(selectedSurgeries);
               setIsOpenModal(false);
            }}
            okText={'Хадгалах'}
            cancelText={'Болих'}
         >
            <Tabs
               items={[
                  {
                     key: 1,
                     label: 'Төлөвлөгөөт'
                  },
                  {
                     key: 2,
                     label: 'Яаралтай'
                  }
               ]}
            />
         </Modal>
      </>
   );
};
export default Operation;
