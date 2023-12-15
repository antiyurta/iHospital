import React from 'react';
import enerehui_logo from './assets/enerehui_logo.png';
import fb from './assets/fb.png';
import route from './assets/route.png';
const Template = (props) => {
   const { children } = props;
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
         }}
      >
         <img src={enerehui_logo} style={{ width: 250 }} className="self-center" />
         <div className="border-1 border-black" />
         <div className="flex gap-x-8">
            <div className="flex">
               <img src={route} style={{ width: 50, height: 50 }} />
               Хаяг: БЗД, 26-р хороо, Олимп хотхон, 424-р байр, үйлчилгээний хэсэгт.
            </div>
            <div className="flex">
               <img src={fb} style={{ width: 20, height: 20 }} className="mr-2" />
               Энэрэхүй эмнэлэг(Уламжлалт, Сэргээн засах, Эхо оношилгоо)
            </div>
         </div>
         <div>
            <p>asdsad</p>
         </div>
         {children}
      </div>
   );
};
export default Template;
