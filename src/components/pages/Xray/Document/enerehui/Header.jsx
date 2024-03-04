import React from 'react';
import enerehui_logo from './assets/enerehui_logo.png';
import locationMark from './assets/locationMark.jpg';
import fb from './assets/fbIcon.jpg';
import dayjs from 'dayjs';
const Header = ({ patient, createdAt }) => {
   return (
      <div className="exo-header">
         <img src={enerehui_logo} style={{ width: 180 }} className="self-center" />
         <div
            className="flex flex-col gap-1"
            style={{
               borderTop: '1px solid black',
               borderBottom: '1px solid black'
            }}
         >
            <div className="flex gap-1 justify-between">
               <div className="flex gap-2">
                  <img src={locationMark} style={{ width: 30, height: 30, borderRadius: 5 }} />
                  <p className="text-xs text-black">
                     Хаяг: БЗД, 26-р хороо, Олимп хотхон, 424-р байр, үйлчилгээний хэсэгт.
                  </p>
               </div>
               <div className="flex gap-2">
                  <img src={fb} style={{ width: 30, height: 30, borderRadius: 5 }} />
                  <p className="text-xs text-black">Энэрэхүй эмнэлэг(Уламжлалт, Сэргээн засах, Эхо оношилгоо)</p>
               </div>
            </div>
         </div>
         <div
            className="flex flex-col gap-1"
            style={{
               borderBottom: '1px solid black'
            }}
         >
            <div className="grid grid-cols-4 gap-1 items-center">
               <div>
                  <span className="font-bold text-xs text-black">Эцэг/эхийн нэр:</span>
               </div>
               <p className="text-xs text-black">{patient?.lastName}</p>
               <div>
                  <span className="font-bold text-xs text-black">Нас:</span> {patient?.age}
               </div>
               <div>
                  <span className="font-bold text-xs text-black">ID:</span> {patient?.id}
               </div>
               <div>
                  <span className="font-bold text-xs text-black">Нэр:</span>
               </div>
               <p className="text-xs text-black">{patient?.firstName}</p>
               <div>
                  <span className="font-bold text-xs text-black">Хүйс:</span>
                  {patient?.genderType === 'WOMAN' ? 'Эмэгтэй' : 'Эрэгтэй'}
               </div>
               <div>
                  <span className="font-bold text-xs text-black">Огноо:</span> {dayjs(createdAt).format('YYYY-MM-DD')}
               </div>
            </div>
         </div>
      </div>
   );
};
export default Header;
