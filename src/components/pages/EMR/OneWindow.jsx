import React, { useContext, useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import ListOfIssues from './ListOfIssues';
import OrderHistory from './OrderHistory';
import DocumentHistroy from '../EMR/NewEmrSupport/history/DocumentHistory';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../features/emrReducer';
import Icon from './docIcon.svg';
import EmrContext from '../../../features/EmrContext';
import DocumentViewer from './DocumentViewer';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
   return (
      <>
         {isViewDocument ? (
            <DocumentViewer />
         ) : (
            <div className="ambo-issuse-order">
               <div className="header">
                  <Splide
                     options={{
                        pagination: false,
                        arrows: false,
                        autoWidth: true,
                        autoHeight: true,
                        gap: 10
                     }}
                  >
                     {usageType === 'OUT' ? (
                        <>
                           <SplideSlide>
                              <div className={activeKey === 0 ? 'section active' : 'section'}>
                                 <img src={Icon} alt="icon" />
                                 <p onClick={() => setActiveKey(0)}>Асуудлын жагсаалт</p>
                              </div>
                           </SplideSlide>
                           <SplideSlide>
                              <div className={activeKey === 1 ? 'section active' : 'section'}>
                                 <img src={Icon} alt="icon" />
                                 <p onClick={() => setActiveKey(1)}>Захиалгийн түүх</p>
                              </div>
                           </SplideSlide>
                           <SplideSlide>
                              <div className={activeKey === 2 ? 'section active' : 'section'}>
                                 <img src={Icon} alt="icon" />
                                 <p onClick={() => setActiveKey(2)}>Маягт</p>
                              </div>
                           </SplideSlide>
                        </>
                     ) : (
                        <>
                           <SplideSlide>
                              <div className={activeKey === 2 ? 'section active' : 'section'}>
                                 <img src={Icon} alt="icon" />
                                 <p onClick={() => setActiveKey(2)}>Маягт</p>
                              </div>
                           </SplideSlide>
                           <SplideSlide>
                              <div className={activeKey === 1 ? 'section active' : 'section'}>
                                 <img src={Icon} alt="icon" />
                                 <p onClick={() => setActiveKey(1)}>Захиалгийн түүх</p>
                              </div>
                           </SplideSlide>
                        </>
                     )}
                  </Splide>
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
