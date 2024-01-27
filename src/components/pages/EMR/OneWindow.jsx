import React, { useContext, useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import ListOfIssues from './ListOfIssues';
import OrderHistory from './OrderHistory';
import DocumentHistroy from '../EMR/NewEmrSupport/history/DocumentHistory';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../features/emrReducer';
import Icon from './docIcon.svg';
import leftArrow from './leftArrow.svg';
import rightArrow from './rightArrow.svg';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import EmrContext from '../../../features/EmrContext';
import DocumentViewer from './DocumentViewer';

const OneWindow = (props) => {
   const { handleView } = props;
   const { isViewDocument } = useContext(EmrContext);
   const { usageType } = useSelector(selectCurrentEmrData);
   const [activeKey, setActiveKey] = useState(usageType === 'OUT' ? 0 : 2);
   const Render = useMemo(() => {
      if (activeKey === 0) {
         return ListOfIssues;
      } else if (activeKey === 1) {
         return OrderHistory;
      } else if (activeKey === 2) {
         return DocumentHistroy;
      }
   }, [activeKey]);
   useEffect(() => {
      handleView(isViewDocument);
   }, [isViewDocument]);
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
   return (
      <>
         {isViewDocument ? (
            <DocumentViewer />
         ) : (
            <div className="ambo-issuse-order">
               <div className="header">
                  <Swiper
                     className="swiper-group"
                     modules={[Navigation, Pagination, Scrollbar, A11y]}
                     navigation
                     spaceBetween={5}
                     breakpoints={{
                        640: {
                           slidesPerView: 1
                        },
                        768: {
                           slidesPerView: 2
                        },
                        1024: {
                           slidesPerView: 2
                        },
                        1366: {
                           slidesPerView: 2
                        },
                        1441: {
                           slidesPerView: 2
                        },
                        1562: {
                           slidesPerView: 1
                        },
                        1797: {
                           slidesPerView: 3,
                           spaceBetween: 5
                        },
                        2560: {
                           slidesPerView: 4
                        }
                     }}
                  >
                     <SwiperButtonPrev>
                        <img src={leftArrow} alt="left" />
                     </SwiperButtonPrev>
                     <div className="content">
                        {usageType === 'OUT' ? (
                           <>
                              <SwiperSlide>
                                 <div className={activeKey === 0 ? 'section active' : 'section'}>
                                    <img src={Icon} alt="icon" />
                                    <p onClick={() => setActiveKey(0)}>Асуудлын жагсаалт</p>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className={activeKey === 1 ? 'section active' : 'section'}>
                                    <img src={Icon} alt="icon" />
                                    <p onClick={() => setActiveKey(1)}>Захиалгийн түүх</p>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className={activeKey === 2 ? 'section active' : 'section'}>
                                    <img src={Icon} alt="icon" />
                                    <p onClick={() => setActiveKey(2)}>Маягт</p>
                                 </div>
                              </SwiperSlide>
                           </>
                        ) : (
                           <>
                              <SwiperSlide>
                                 <div className={activeKey === 2 ? 'section active' : 'section'}>
                                    <img src={Icon} alt="icon" />
                                    <p onClick={() => setActiveKey(2)}>Маягт</p>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className={activeKey === 1 ? 'section active' : 'section'}>
                                    <img src={Icon} alt="icon" />
                                    <p onClick={() => setActiveKey(1)}>Захиалгийн түүх</p>
                                 </div>
                              </SwiperSlide>
                           </>
                        )}
                     </div>
                     <SwiperButtonNext>
                        <img src={rightArrow} alt="right" />
                     </SwiperButtonNext>
                  </Swiper>
               </div>
               <div className="content">
                  <Render />
               </div>
            </div>
         )}
      </>
   );
};
export default OneWindow;
