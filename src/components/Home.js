import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

import AI from '../assets/landing/ai.png';
import SIXG from '../assets/landing/6g.png';
import ThreDholo from '../assets/landing/3dhologram.png';
import biemetr from '../assets/landing/biemetr.png';
//
import banner from '../assets/landing/testBanner.jpg';
//
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';
import Universal from '../assets/landing/universal.png';

import check from '../assets/landing/check.png';
import bluCheck from '../assets/landing/bluCheck.png';

import Widget from '../Layouts/Landing/Widget';

function Home() {
   return (
      <>
         <section className="pt-[72px]">
            <Carousel>
               <Carousel.Item>
                  <img className="d-block w-100" src={banner} alt="First slide" />
                  {/* <Carousel.Caption>
                     <h3>First slide label</h3>
                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption> */}
               </Carousel.Item>
               <Carousel.Item>
                  <img className="d-block w-100" src={banner} alt="First slide" />
                  {/* <Carousel.Caption>
                     <h3>First slide label</h3>
                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption> */}
               </Carousel.Item>
            </Carousel>
         </section>
         <section>
            <Container>
               <div className="flex flex-col justify-center items-center pt-[60px] pb-[60px] gap-[60px] bg-transparent">
                  <p
                     style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 30,
                        textAlign: 'center'
                     }}
                  >
                     ЭМНЭЛГИЙН ЦОГЦ ПЛАТФОРМ
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 box-border w-full gap-12">
                     <div className="box md:flex-row lg:flex-col">
                        <img src={AI} />
                        <div className="subbox">
                           <p className="title">НЭГДСЭН ЦОГЦ СИСТЕМ</p>
                           <p className="text">
                              Ай Хоспититал платформ нь эмнэлгийн мэдээллийн систем, нягтлан бодох бүртгэл, ERP,
                              санхүүгийн хяналтын систем болон үйлчлүүлэгчтэй холбосон мобайл апп зэрэг хоорондоо уялдаа
                              холбоотой рийл тайм мэдээллээ солилцож ажилладаг нэгдсэн платформ юм.
                           </p>
                        </div>
                     </div>
                     <div className="box">
                        <img src={SIXG} />
                        <div className="subbox">
                           <p className="title">ТЕХНОЛОГИ</p>
                           <p className="text">
                              Ай Хоспититал платформ нь эмнэлгийн мэдээллийн систем, нягтлан бодох бүртгэл, ERP,
                              санхүүгийн хяналтын систем болон үйлчлүүлэгчтэй холбосон мобайл апп зэрэг хоорондоо уялдаа
                              холбоотой рийл тайм мэдээллээ солилцож ажилладаг нэгдсэн платформ юм.
                           </p>
                        </div>
                     </div>
                     <div className="box">
                        <img src={ThreDholo} />
                        <div className="subbox">
                           <p className="title">УДИРДЛАГА ХЯНАЛТ</p>
                           <p className="text">
                              Ай Хоспититал платформ нь эмнэлгийн мэдээллийн систем, нягтлан бодох бүртгэл, ERP,
                              санхүүгийн хяналтын систем болон үйлчлүүлэгчтэй холбосон мобайл апп зэрэг хоорондоо уялдаа
                              холбоотой рийл тайм мэдээллээ солилцож ажилладаг нэгдсэн платформ юм.
                           </p>
                        </div>
                     </div>
                     <div className="box">
                        <img src={biemetr} />
                        <div className="subbox">
                           <p className="title">ХЭРЭГЛЭГЧ ТӨВТЭЙ</p>
                           <p className="text">
                              Ай Хоспититал платформ нь эмнэлгийн мэдээллийн систем, нягтлан бодох бүртгэл, ERP,
                              санхүүгийн хяналтын систем болон үйлчлүүлэгчтэй холбосон мобайл апп зэрэг хоорондоо уялдаа
                              холбоотой рийл тайм мэдээллээ солилцож ажилладаг нэгдсэн платформ юм.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </Container>
         </section>
         <section>
            <div className="bg-white py-[60px]">
               <Container>
                  <Widget />
               </Container>
            </div>
         </section>
         <section>
            <div className="py-[60px]">
               <Alert
                  className="bg-transparent border-none"
                  message={
                     <Marquee pauseOnHover gradient={false}>
                        <img className="h-[30px] px-3" src={Universal} />
                     </Marquee>
                  }
               />
            </div>
         </section>
         <section>
            <div className="bg-white py-[60px]">
               <Container>
                  <div className="flex flex-col gap-16">
                     <p
                        style={{
                           fontFamily: 'Roboto',
                           fontStyle: 'normal',
                           fontWeight: 700,
                           fontSize: 30,
                           textAlign: 'center'
                        }}
                     >
                        Мэдээ мэдээлэл
                     </p>
                     <p>Мэдээ мэдээлэл</p>
                  </div>
               </Container>
            </div>
         </section>
         <section>
            <div className="py-[120px]">
               <Container>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                     <div
                        style={{
                           background: '#F9FAFB',
                           filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1))',
                           borderRadius: '20px',
                           padding: '24px'
                        }}
                     >
                        <div className="flex flex-col gap-4">
                           <div className="flex flex-col gap-3">
                              <p
                                 style={{
                                    fontFamily: 'Montserrat',
                                    fontSize: 'normal',
                                    fontWeight: 600,
                                    fontSize: 22,
                                    lineHeight: '27px'
                                 }}
                              >
                                 Шинэ хэрэглэгч
                              </p>
                              <p
                                 style={{
                                    fontFamily: 'Montserrat',
                                    fontSize: 'normal',
                                    fontWeight: 500,
                                    fontSize: 11,
                                    lineHeight: '14px'
                                 }}
                              >
                                 Гарааны бизнес, анхлан хэрэглэгчдэд зориулав.
                              </p>
                           </div>
                           <div className="flex flex-col gap-3">
                              <div className="flex flex-row">
                                 <img src={bluCheck} />
                                 <p
                                    style={{
                                       fontFamily: 'Montserrat',
                                       fontSize: 'normal',
                                       fontWeight: 500,
                                       fontSize: 11,
                                       lineHeight: '16px'
                                    }}
                                 >
                                    All limited links
                                 </p>
                              </div>
                              <div className="flex flex-row">
                                 <img src={bluCheck} />
                                 <p
                                    style={{
                                       fontFamily: 'Montserrat',
                                       fontSize: 'normal',
                                       fontWeight: 500,
                                       fontSize: 11,
                                       lineHeight: '16px'
                                    }}
                                 >
                                    All limited links
                                 </p>
                              </div>
                           </div>
                           <div>
                              <button
                                 style={{
                                    width: '100%',
                                    padding: '8px 0',
                                    background: '#FAB01D',
                                    borderRadius: 19,
                                    fontWeight: 800,
                                    color: 'white',
                                    fontFamily: 'Montserrat'
                                 }}
                              >
                                 Сонгох
                              </button>
                           </div>
                        </div>
                     </div>
                     <div
                        style={{
                           background: '#2D8Cff',
                           boxShadow: '0px 33.4564px 27.0838px rgba(82, 67, 194, 0.295755)',
                           borderRadius: '20px',
                           padding: '24px'
                        }}
                        className="md:relative top-[-30px]"
                     >
                        <div className="flex flex-col gap-4">
                           <div className="flex flex-col gap-3">
                              <p
                                 style={{
                                    fontFamily: 'Montserrat',
                                    fontSize: 'normal',
                                    fontWeight: 600,
                                    fontSize: 22,
                                    lineHeight: '27px',
                                    color: 'white'
                                 }}
                              >
                                 Үндсэн багц
                              </p>
                              <p
                                 style={{
                                    fontFamily: 'Montserrat',
                                    fontSize: 'normal',
                                    fontWeight: 500,
                                    fontSize: 11,
                                    lineHeight: '14px',
                                    color: 'white'
                                 }}
                              >
                                 Нийтлэг үйлчилгээнүүд энэхүү багцад орно.
                              </p>
                           </div>
                           <div className="flex flex-col gap-3">
                              <div className="flex flex-row">
                                 <img src={check} />
                                 <p
                                    style={{
                                       fontFamily: 'Montserrat',
                                       fontSize: 'normal',
                                       fontWeight: 500,
                                       fontSize: 11,
                                       lineHeight: '16px',
                                       color: 'white'
                                    }}
                                 >
                                    All limited links
                                 </p>
                              </div>
                              <div className="flex flex-row">
                                 <img src={check} />
                                 <p
                                    style={{
                                       fontFamily: 'Montserrat',
                                       fontSize: 'normal',
                                       fontWeight: 500,
                                       fontSize: 11,
                                       lineHeight: '16px',
                                       color: 'white'
                                    }}
                                 >
                                    All limited links
                                 </p>
                              </div>
                           </div>
                           <div>
                              <button
                                 style={{
                                    width: '100%',
                                    padding: '8px 0',
                                    background: '#FAB01D',
                                    borderRadius: 19,
                                    fontWeight: 800,
                                    color: 'white',
                                    fontFamily: 'Montserrat'
                                 }}
                              >
                                 Сонгох
                              </button>
                           </div>
                        </div>
                     </div>
                     <div
                        style={{
                           background: '#F9FAFB',
                           filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1))',
                           borderRadius: '20px',
                           padding: '24px'
                        }}
                     >
                        <div className="flex flex-col gap-4">
                           <div className="flex flex-col gap-3">
                              <p
                                 style={{
                                    fontFamily: 'Montserrat',
                                    fontSize: 'normal',
                                    fontWeight: 600,
                                    fontSize: 22,
                                    lineHeight: '27px'
                                 }}
                              >
                                 Байгууллага
                              </p>
                              <p
                                 style={{
                                    fontFamily: 'Montserrat',
                                    fontSize: 'normal',
                                    fontWeight: 500,
                                    fontSize: 11,
                                    lineHeight: '14px'
                                 }}
                              >
                                 40-100 хүнтэй байгууллагуудад илүү тохиромжтой багц
                              </p>
                           </div>
                           <div className="flex flex-col gap-3">
                              <div className="flex flex-row">
                                 <img src={bluCheck} />
                                 <p
                                    style={{
                                       fontFamily: 'Montserrat',
                                       fontSize: 'normal',
                                       fontWeight: 500,
                                       fontSize: 11,
                                       lineHeight: '16px'
                                    }}
                                 >
                                    All limited links
                                 </p>
                              </div>
                              <div className="flex flex-row">
                                 <img src={bluCheck} />
                                 <p
                                    style={{
                                       fontFamily: 'Montserrat',
                                       fontSize: 'normal',
                                       fontWeight: 500,
                                       fontSize: 11,
                                       lineHeight: '16px'
                                    }}
                                 >
                                    All limited links
                                 </p>
                              </div>
                           </div>
                           <div>
                              <button
                                 style={{
                                    width: '100%',
                                    padding: '8px 0',
                                    background: '#FAB01D',
                                    borderRadius: 19,
                                    fontWeight: 800,
                                    fontFamily: 'Montserrat'
                                 }}
                              >
                                 Сонгох
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </Container>
            </div>
         </section>
      </>
   );
}

export default Home;
