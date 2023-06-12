import React from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import PlayStore from '../../assets/landing/playStore.png';
import PlayStoreText from '../../assets/landing/playStoreText.png';
import AppLogo from '../../assets/landing/AppleLogo.png';
import AppText from '../../assets/landing/appleText.png';
//
import fb from '../../assets/landing/fb.png';
import insta from '../../assets/landing/insta.png';
import youtube from '../../assets/landing/youtube.png';
import twitter from '../../assets/landing/twitter.png';
import linkin from '../../assets/landing/linkin.png';
import { NavLink } from 'react-router-dom';
//
function Footer() {
   return (
      <section>
         <div className="block w-full relative">
            <div className="flex flex-col items-start mt-[120px] gap-[10px] bg-[#2D8CFF]">
               <div className="absolute left-0 right-0 top-[-200px] md:top-[-100px]">
                  <div className="flex flex-col relative w-2/3 m-auto rounded-2xl bg-white p-10 gap-7">
                     <p
                        style={{
                           fontFamily: 'Roboto',
                           fontStyle: 'normal',
                           fontWeight: 600,
                           fontSize: 30,
                           lineHeight: '36px',
                           textAlign: 'center',
                           color: '#2B395C'
                        }}
                     >
                        Бидэнтэй илүү ойр байгаарай
                     </p>
                     <p
                        style={{
                           fontFamily: 'Roboto',
                           fontStyle: 'normal',
                           fontWeight: 300,
                           fontSize: 18,
                           lineHeight: '22px',
                           textAlign: 'center',
                           color: '#797E89'
                        }}
                     >
                        Цаг алдалгүй шинэ мэдээлэл хүлээн аваарай!
                     </p>
                     <div className="self-center w-full md:w-2/3">
                        <InputGroup className="h-[52px]">
                           <Form.Control
                              style={{
                                 borderColor: '#F8A71B',
                                 borderRadius: 7
                              }}
                              className="focus:shadow-2xl"
                              placeholder="example@mail.com"
                              aria-label="mail"
                              aria-describedby="basic-addon2"
                           />
                           <Button
                              style={{
                                 background: 'linear-gradient(180deg, #FAB31D 0%, #F6A219 100%)',
                                 borderRadius: 7,
                                 fontWeight: 700,
                                 color: 'white',
                                 borderColor: '#F8A71B'
                              }}
                              variant="outline-secondary"
                              id="button-addon2"
                           >
                              БҮРТГЭХ
                           </Button>
                        </InputGroup>
                     </div>
                  </div>
               </div>
               <Container>
                  <div className="pt-[180px] grid grid-cols-2 gap-7">
                     <div className="flex flex-col items-start gap-9">
                        <p
                           style={{
                              fontFamily: 'Roboto',
                              fontStyle: 'normal',
                              fontWeight: 400,
                              fontSize: 20,
                              color: '#FFFFFF'
                           }}
                        >
                           Туслах цэс
                        </p>
                        <div className="flex flex-col items-start gap-4">
                           <p
                              style={{
                                 fontFamily: 'Roboto',
                                 fontStyle: 'normal',
                                 fontWeight: 400,
                                 fontSize: 20,
                                 color: '#FFFFFF'
                              }}
                           >
                              Бидний тухай
                           </p>
                           <NavLink
                              to="/privacy"
                              style={{
                                 fontFamily: 'Roboto',
                                 fontStyle: 'normal',
                                 fontWeight: 400,
                                 fontSize: 20,
                                 color: '#FFFFFF'
                              }}
                           >
                              Үйлчилгээний нөхцөл
                           </NavLink>
                           <p
                              style={{
                                 fontFamily: 'Roboto',
                                 fontStyle: 'normal',
                                 fontWeight: 400,
                                 fontSize: 20,
                                 color: '#FFFFFF'
                              }}
                           >
                              Түгээмэл асуулт, хариулт
                           </p>
                           <p
                              style={{
                                 fontFamily: 'Roboto',
                                 fontStyle: 'normal',
                                 fontWeight: 400,
                                 fontSize: 20,
                                 color: '#FFFFFF'
                              }}
                           >
                              Заавар, зөвлөмж
                           </p>
                        </div>
                     </div>
                     <div className="flex flex-col items-start gap-9">
                        <p
                           style={{
                              fontFamily: 'Roboto',
                              fontStyle: 'normal',
                              fontWeight: 400,
                              fontSize: 20,
                              color: '#FFFFFF'
                           }}
                        >
                           Холбоо барих
                        </p>
                        <div className="flex flex-col items-start gap-4">
                           <p
                              style={{
                                 fontFamily: 'Roboto',
                                 fontStyle: 'normal',
                                 fontWeight: 400,
                                 fontSize: 20,
                                 color: '#FFFFFF'
                              }}
                           >
                              Утас: (+976) 7711-9304
                           </p>
                           <p
                              style={{
                                 fontFamily: 'Roboto',
                                 fontStyle: 'normal',
                                 fontWeight: 400,
                                 fontSize: 20,
                                 color: '#FFFFFF'
                              }}
                           >
                              Факс: (+976) 5353535
                           </p>
                           <p
                              style={{
                                 fontFamily: 'Roboto',
                                 fontStyle: 'normal',
                                 fontWeight: 400,
                                 fontSize: 20,
                                 color: '#FFFFFF'
                              }}
                           >
                              И-мэйл: info@ihospital.mn
                           </p>
                           <p
                              style={{
                                 fontFamily: 'Roboto',
                                 fontStyle: 'normal',
                                 fontWeight: 400,
                                 fontSize: 20,
                                 color: '#FFFFFF'
                              }}
                           >
                              Ажлын цаг: 09:00 - 18:00
                           </p>
                           <p
                              style={{
                                 fontFamily: 'Roboto',
                                 fontStyle: 'normal',
                                 fontWeight: 400,
                                 fontSize: 20,
                                 color: '#FFFFFF'
                              }}
                           >
                              Хаяг: Улаанбаатар, Сүхбаатар дүүрэг 15, 8-р хороо, Амарсанаа 2, Төв, 1 давхар, 1301 тоот
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="mt-[44px] mb-[24px] w-full h-[1px] bg-white" />
                  <div className="flex flex-col md:flex-row justify-between pb-[24px] gap-6">
                     <div className="flex flex-row justify-between gap-6">
                        <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                           <img src={fb} alt="playStore" />
                        </a>
                        <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                           <img src={insta} alt="playStore" />
                        </a>
                        <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                           <img src={youtube} alt="playStore" />
                        </a>
                        <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                           <img src={twitter} alt="playStore" />
                        </a>
                        <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                           <img src={linkin} alt="playStore" />
                        </a>
                     </div>
                     <div className="flex flex-row justify-between gap-3">
                        <a
                           href="https://www.freecodecamp.org/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-row items-center py-[10px] px-4 bg-white"
                           style={{
                              border: '2px solid #E8E8E8',
                              borderRadius: '6px'
                           }}
                        >
                           <div className="flex gap-[10px]">
                              <img src={PlayStore} alt="playStore" />
                              <img src={PlayStoreText} alt="playStore" />
                           </div>
                        </a>
                        <a
                           href="https://www.freecodecamp.org/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-row items-center py-[10px] px-4 bg-white"
                           style={{
                              border: '2px solid #E8E8E8',
                              borderRadius: '6px'
                           }}
                        >
                           <div className="flex gap-[10px]">
                              <img src={AppLogo} alt="playStore" />
                              <img src={AppText} alt="playStore" />
                           </div>
                        </a>
                     </div>
                  </div>
               </Container>
            </div>
         </div>
      </section>
   );
}
export default Footer;
