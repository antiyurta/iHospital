import React from 'react';
import enerehui_logo from './assets/enerehui_logo.png';
import fb from './assets/fbIcon.jpg';
import locationMark from './assets/locationMark.jpg';
import dayjs from 'dayjs';
const Template = (props) => {
   const { patient, createdAt, children, serviceName } = props;
   const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
   };
   return (
      <div className="flex flex-col gap-1">
         <img src={enerehui_logo} style={{ width: 180 }} className="self-center" />
         <div className="border-1 border-black" />
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
         </div>
         <div className="border-1 border-black"></div>
         <p className="text-center text-base font-bold">{capitalizeFirstLetter(serviceName)}</p>
         {children}
         <div className="border-1 border-black"></div>
         <p className="text-[10px] text-black">
            САНАМЖ: Хэт авиан оношилгооны дүгнэлт нь тухайн багажийн шинжлэх хүрээнд гарч буй бүтцийн өөрчлөлтүүд юм.
            Үүнийг эмчлэгч эмч эмнэлзүйн илрэл, явц, лабораторийн ба үйл ажиллагааны бусад шинжилгээнүүдтэй харьцуулан
            эмнэлзүйн онош, цаашид авах арга хэмжээндээ хэрхэн тусгахаа шийдвэрлэнэ.
         </p>
         <div className="border-1 border-black"></div>
         <div className="flow-root">
            <div className="float-right text-xs text-black">Эмч: _________________ /Н.Билгүүн/</div>
         </div>
      </div>
   );
};
export default Template;
