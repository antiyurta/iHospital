import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import manage6 from '../../assets/landing/manage6.png';

const menuHeight = '268px';

const buttons = ['HIS', 'PMS', 'ERP', 'APP', 'APP'];
const blocks = [
   <>
      <div className="bodyW">
         <p className="title">Эмнэлэгийн мэдээллийн систем</p>
         <p className="text">
            Ай Хоспититал платформ нь эмнэлгийн мэдээллийн систем, нягтлан бодох бүртгэл, ERP, санхүүгийн хяналтын
            систем болон үйлчлүүлэгчтэй холбосон мобайл апп зэрэг хоорондоо уялдаа холбоотой рийл тайм мэдээллээ
            солилцож ажилладаг нэгдсэн платформ юм. Амбулатори Стационари ЭМД
         </p>
      </div>
      <div
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
         }}
      >
         <Carousel fade={false}>
            <Carousel.Item>
               <img
                  style={{
                     height: 150
                  }}
                  className="d-block w-100"
                  src={manage6}
                  alt="maan"
               />
            </Carousel.Item>
         </Carousel>
      </div>
   </>,
   <>
      <h2>asdasd</h2>
      <p>Conteasdasdasdsant...</p>
   </>
];

function Widget() {
   const [activeBlock, setActiveBlock] = useState(0);
   const [isOpen, setIsOpen] = useState(false);
   const toggleMenuBlock = (index) => {
      setActiveBlock(index);
   };
   return (
      <article className={`cardW h-[580px] md:h-[268px] flex flex-col md:flex-row ${isOpen ? 'open' : ''}`}>
         <div className="buttonsW flex sm:flex-row md:flex-col justify-center items-start gap-3">
            {buttons.map((button, index) => (
               <button
                  key={index}
                  className={index === activeBlock ? 'active' : ''}
                  onClick={() => toggleMenuBlock(index)}
               >
                  {button}
               </button>
            ))}
         </div>
         <div className="wrapperW flex w-full flex-row justify-center">
            <div
               className="contentW h-[1500px] md:h-[804px]"
               style={{
                  translate: `0 calc(0px - ${menuHeight} * ${activeBlock})`
               }}
            >
               {blocks.map((block, index) => (
                  <div key={index} className="blockW h-[536px] md:h-[268px]  grid grid-cols-1 md:grid-cols-2 gap-3">
                     {block}
                  </div>
               ))}
            </div>
         </div>
      </article>
   );
}
export default Widget;
