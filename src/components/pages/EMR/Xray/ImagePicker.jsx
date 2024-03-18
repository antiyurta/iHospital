import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Input, Modal } from 'antd';
const ImagePicker = ({ rows, cols, images }) => {
   const [isSelected, setIsSelected] = useState(false);
   const [selectedUrl, setSelectedUrl] = useState('');
   const [isOpenModal, setIsOpenModal] = useState(false);

   const calculator = (type, count) => {
      if (type === 'rows') {
         return 700 / count;
      }
      if (type === 'cols') {
         return 980 / count;
      }
      return;
   };

   return (
      <div className="h-full flex">
         {!isSelected ? (
            <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsOpenModal(true)}>
               Зураг сонгох
            </Button>
         ) : (
            <div className="flex flex-col gap-3 m-auto">
               <img
                  style={{
                     maxWidth: calculator('rows', rows),
                     maxHeight: calculator('cols', cols)
                  }}
                  src={selectedUrl}
                  alt="kk"
               />
               <Input placeholder="Тайлбар бичих" />
            </div>
         )}
         <Modal
            title="Зургийн сан"
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            bodyStyle={{
               overflow: 'auto',
               height: 500
            }}
            footer={null}
         >
            <div className="flex flex-col gap-2">
               {images?.map((image, index) => (
                  <img
                     key={index}
                     src={image}
                     alt="img"
                     onClick={() => {
                        setSelectedUrl(image);
                        setIsSelected(true);
                        setIsOpenModal(false);
                     }}
                  />
               ))}
            </div>
         </Modal>
      </div>
   );
};
export default ImagePicker;
