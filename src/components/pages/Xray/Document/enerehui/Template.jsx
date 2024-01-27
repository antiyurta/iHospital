import React from 'react';
import enerehui_logo from './assets/enerehui_logo.png';
import fb from './assets/fb.png';
import route from './assets/route.png';
import dayjs from 'dayjs';
const Template = (props) => {
   const { patient, createdAt, children, serviceName } = props;
   const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
   };
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
         }}
      >
         <img src={enerehui_logo} style={{ width: 180 }} className="self-center" />
         <div className="border-1 border-black" />
         <div className="flex justify-between">
            <div className="flex">
               <img src={route} style={{ width: 30, height: 30 }} />
               <p className="text-xs text-black">
                  Хаяг: БЗД, 26-р хороо, Олимп хотхон, 424-р байр, үйлчилгээний хэсэгт.
               </p>
            </div>
            <div className="flex gap-2">
               <img src={fb} style={{ width: 20, height: 20 }} />
               <p className="text-xs text-black">Энэрэхүй эмнэлэг(Уламжлалт, Сэргээн засах, Эхо оношилгоо)</p>
            </div>
         </div>
         <div className="border-1 border-black"></div>
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
               <span className="font-bold text-xs text-black">Хүйс:</span>{' '}
               {patient?.genderType === 'WOMAN' ? 'Эмэгтэй' : 'Эрэгтэй'}
            </div>
            <div>
               <span className="font-bold text-xs text-black">Огноо:</span> {dayjs(createdAt).format('YYYY-MM-DD')}
            </div>
            <div>
               <span className="font-bold text-xs text-black">Регистр:</span> {patient?.registerNumber}
            </div>
         </div>
         <div className="border-1 border-black"></div>
         <p className="text-center text-base font-bold">{capitalizeFirstLetter(serviceName)}</p>
         {children}
         <div className="border-1 border-black"></div>
         <p className="font-bold">
            САНАМЖ: Хэт авиан оношилгооны дүгнэлт нь тухайн багажийн шинжлэх хүрээнд гарч буй бүтцийн өөрчлөлтүүд юм.
            Үүнийг эмчлэгч эмч эмнэлзүйн илрэл, явц, лабораторийн ба үйл ажиллагааны бусад шинжилгээнүүдтэй харьцуулан
            эмнэлзүйн онош, цаашид авах арга хэмжээндээ хэрхэн тусгахаа шийдвэрлэнэ.
         </p>
         <div className="border-1 border-black"></div>
      </div>
   );
};
export default Template;
