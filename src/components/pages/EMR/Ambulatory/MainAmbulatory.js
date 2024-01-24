import React, { useMemo, useState } from 'react';
import ProgressNotes from './ProgressNotes';
import NurseNote from '../NurseNote';
import ProgressCheck from './ProgressCheck';
import Xray from '../Xray';

//
import Assesments from './Nurse/Assesments';
//
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import leftArrow from '../leftArrow.svg';
import rightArrow from '../rightArrow.svg';
export default function MainAmbulatory({ patientId }) {
   const [activeKey, setActiveKey] = useState('item-1');
   const SwiperButtonNext = ({ children }) => {
      const swiper = useSwiper();
      return (
         <div className="box-next" onClick={() => swiper.slideNext()}>
            {children}
         </div>
      );
   };
   const SwiperButtonPrev = ({ children }) => {
      const swiper = useSwiper();
      return (
         <div className="box-prev" onClick={() => swiper.slidePrev()}>
            {children}
         </div>
      );
   };
   const items = [
      {
         label: 'Явцын тэмдэглэл',
         key: 'item-1',
         children: <ProgressNotes />
      },
      {
         label: 'Амьдралын түүх',
         key: 'item-2',
         children: <ProgressCheck PatientId={patientId} />
      },
      {
         label: 'Амин үзүүлэлт',
         key: 'item-3',
         children: <Assesments patientId={patientId} />
      },
      // {
      //    label: 'Сувилагчийн тэмдэглэл',
      //    key: 'item-6',
      //    children: <NurseNote PatientId={patientId} />
      // },
      {
         label: 'Оношилгоо',
         key: 'item-4',
         children: <Xray PatientId={patientId} />
      }
      // {
      //   label: "Эмийн эмчилгээ",
      //   key: "item-3",
      //   // children: <ProgressNotes />,
      // },
      // {
      //   label: "Шинжилгээний хариу",
      //   key: "item-4",
      //   // children: <ProgressNotes />,
      // },
      // {
      //   label: "Эмийн бус эмчилгээ",
      //   key: "item-5",
      //   // children: <ProgressNotes />,
      // },
   ];
   return (
      <>
         <div className="history-header">
            <Swiper
               className="swiper-group"
               modules={[Navigation, Pagination, Scrollbar, A11y]}
               navigation
               spaceBetween={20}
               slidesPerView={1}
               breakpoints={{
                  640: {
                     slidesPerView: 2,
                     spaceBetween: 10
                  },
                  768: {
                     slidesPerView: 3,
                     spaceBetween: 10
                  },
                  1024: {
                     slidesPerView: 3,
                     spaceBetween: 10
                  },
                  1366: {
                     slidesPerView: 3,
                     spaceBetween: 10
                  },
                  1441: {
                     slidesPerView: 4,
                     spaceBetween: 10
                  },
                  1562: {
                     slidesPerView: 4,
                     spaceBetween: 10
                  },
                  1797: {
                     slidesPerView: 4,
                     spaceBetween: 10
                  },
                  2560: {
                     slidesPerView: 4,
                     spaceBetween: 10
                  }
               }}
            >
               <SwiperButtonPrev>
                  <img src={leftArrow} alt="left" />
               </SwiperButtonPrev>
               <div className="content">
                  {items?.map((item) => (
                     <SwiperSlide key={item.key}>
                        <div className={activeKey === item.key ? 'section active' : 'section'}>
                           <p onClick={() => setActiveKey(item.key)}>{item.label}</p>
                        </div>
                     </SwiperSlide>
                  ))}
               </div>
               <SwiperButtonNext>
                  <img src={rightArrow} alt="right" />
               </SwiperButtonNext>
            </Swiper>
         </div>
         {items?.find((item) => item.key === activeKey)?.children}
      </>
   );
}
