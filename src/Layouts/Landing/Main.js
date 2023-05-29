import React from 'react';
import { Container } from 'react-bootstrap';

import AI from '../../assets/landing/ai.png';
import SIXG from '../../assets/landing/6g.png';
import ThreDholo from '../../assets/landing/3dhologram.png';
import biemetr from '../../assets/landing/biemetr.png';
function Main() {
   return (
      <>
         <section>
            <Container>
               <div className="flex flex-col justify-center items-center pt-[60px] pb-[120px] gap-[60px] bg-transparent">
                  <p
                     style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 30
                     }}
                  >
                     ЭМНЭЛГИЙН ОГЦ ПЛАТФОРМ
                  </p>
                  <div className="grid grid-cols-4 gap-7 w-full">
                     <div
                        className="flex flex-col items-center py-3 gap-3"
                        style={{
                           background: 'white',
                           boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                           borderRadius: 12
                        }}
                     >
                        <img className="h-[150px] w-[150px]" src={AI} alt="ai" />
                        <p
                           style={{
                              fontFamily: 'Roboto',
                              fontStyle: 'normal',
                              fontWeight: 700,
                              fontSize: 16,
                              textAlign: 'center',
                              color: '#2B395C'
                           }}
                        >
                           НЭГДСЭН ЦОГЦ СИСТЕМ
                        </p>
                     </div>
                     <div
                        className="flex flex-col items-center py-3 gap-3"
                        style={{
                           background: 'white',
                           boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                           borderRadius: 12
                        }}
                     >
                        <img className="h-[150px] w-[150px]" src={SIXG} alt="SIXG" />
                        <p
                           style={{
                              fontFamily: 'Roboto',
                              fontStyle: 'normal',
                              fontWeight: 700,
                              fontSize: 16,
                              textAlign: 'center',
                              color: '#2B395C'
                           }}
                        >
                           ТЕХНОЛОГИ
                        </p>
                     </div>
                     <div
                        className="flex flex-col items-center py-3 gap-3"
                        style={{
                           background: 'white',
                           boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                           borderRadius: 12
                        }}
                     >
                        <img className="h-[150px] w-[150px]" src={ThreDholo} alt="ThreDholo" />
                        <p
                           style={{
                              fontFamily: 'Roboto',
                              fontStyle: 'normal',
                              fontWeight: 700,
                              fontSize: 16,
                              textAlign: 'center',
                              color: '#2B395C'
                           }}
                        >
                           УДИРДЛАГА ХЯНАЛТ
                        </p>
                     </div>
                     <div
                        className="flex flex-col items-center py-3 gap-3"
                        style={{
                           background: 'white',
                           boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                           borderRadius: 12
                        }}
                     >
                        <img className="h-[150px] w-[150px]" src={biemetr} alt="biemetr" />
                        <p
                           style={{
                              fontFamily: 'Roboto',
                              fontStyle: 'normal',
                              fontWeight: 700,
                              fontSize: 16,
                              textAlign: 'center',
                              color: '#2B395C'
                           }}
                        >
                           ХЭРЭГЛЭГЧ ТӨВТЭЙ
                        </p>
                     </div>
                  </div>
               </div>
            </Container>
         </section>
         {/* <section>
            <div className="bg-white">
               <Container>
                  <div className="flex flex-row justify-center items-center py-[120px] gap-4 "></div>
               </Container>
            </div>
         </section> */}
      </>
   );
}
export default Main;
