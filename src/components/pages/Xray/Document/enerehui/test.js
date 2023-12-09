import React from 'react';
import { NewCheckbox, NewCheckboxGroup } from '../../../../Input/Input';
import enerehui_logo from './assets/enerehui_logo.png';
import fb from '../../../../../../src/assets/landing/fb.png';
import route from './assets/route.png';
import dayjs from 'dayjs';

const Test = (props) => {
   const { data, patient } = props;
   console.log('XXX', props);
   return (
      <div>
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               gap: 12
            }}
         >
            <img src={enerehui_logo} style={{ width: 250 }} className="self-center" />
            <div className="border-2 border-black"></div>
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
            <div className="border-2 border-black"></div>
            <div className="grid grid-cols-4 gap-1">
               <div>
                  <span className="font-bold">Эцэг/эхийн нэр:</span>
               </div>
               <div>{patient.lastName}</div>
               <div>
                  <span className="font-bold">Нас:</span> {patient.age}
               </div>
               <div>
                  <span className="font-bold">ID:</span> {patient.id}
               </div>
               <div>
                  <span className="font-bold">Нэр:</span>
               </div>
               <div>{patient.firstName}</div>
               <div>
                  <span className="font-bold">Хүйс:</span> {patient.genderType === 'WOMAN' ? 'Эмэгтэй' : 'Эрэгтэй'}
               </div>
               <div>
                  <span className="font-bold">Огноо:</span> {dayjs(data.createdAt).format('YYYY-MM-DD')}
               </div>
               <div>
                  <span className="font-bold">Регистр:</span> {patient.registerNumber}
               </div>
            </div>
            <div className="border-2 border-black"></div>
            <div className="text-center">
               <span className="font-bold">ТҮРҮҮ БУЛЧИРХАЙН ХЭТ АВИАН ОНОШИЛГОО</span>
            </div>
            <span className="font-bold">Хэмжээ: өргөн , урт , зузаан ,</span>
            <span className="font-bold">Эзэлхүүн: (коефф 0,523) см3,</span>
            <span className="font-bold">Хэлбэр:</span>
            <span className="font-bold">Гадаргуу:</span>
            <span className="font-bold">Бүтэц:</span>
            <span className="font-bold">Эхо ойлт:</span>
            <span className="font-bold">Шохойжилт:</span>
            <span className="font-bold">Судасжилт:</span>
            <span className="font-bold">Голомтот:</span>
            <span className="font-bold">Давсаг:</span>
            <span className="font-bold">Ханын зузаан .............см:</span>
            <span className="font-bold">Голомтот:</span>
            <div className="border-2 border-black"></div>
            <span className="font-bold">ТЭМДЭГЛЭЛ:</span>
            <div className="border-2 border-black"></div>
            <span className="font-bold">ЗӨВЛӨМЖ:</span>
            <div className="border-2 border-black"></div>
            <div className="text-right">
               <span className="font-bold">Эмч:</span>
            </div>
         </div>
      </div>
   );
};
export default Test;
