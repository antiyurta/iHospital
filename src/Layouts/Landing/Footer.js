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
import logo from '../../assets/logo/test.svg';
import { Link, NavLink } from 'react-router-dom';
//
function Footer() {
   return (
      <footer>
         <Container>
            <section className="footer-sections">
               <section>
                  <img src={logo} className="logo" title="logo" alt="logo" />
                  <span className="social-links">
                     <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE1klEQVR4nO2Z609bZRzHT7ht64DJdWNlzA7GWoyvjIv+FZqomZkvJJkvfa8hjsNt0DEqQ2DQcqczJijgBXDqFuOyxPhCsxBMHPSyXg6l7WnP6SnQnkL5maeoYeG05zx9oGrCN/m9/3xPn9/v+T3fUtSRjnQkck1BtnYi9OqlcaGhdjw0XTvO/35xNBSsGeNi1aNcrHqED2qGuSXNcHBaYwo2nDexr1A0ZFH/tl74bPOczhzWaycF96UJAVDVjofg4hgqHmpGeage4eHCMJcozVAQnjehCsD5wYCraoDtUJvYyoyD10wJZTpz2KidFETtZBiw4Y0BqBpkE1V5xy9W3vENVBiZ0ozA190NX9VOrgd05jCQwp8bSBhIlLrfx57t9b19aOAvGSG37m54SGdeh0OAh7N9qLxQ0esdpIyQe9DwqjpzeCED8HDmEy+U96zNVxgZ1UHB52YS/nTPWqLKbq/+QNFLecQGMnRsYC98+W0PlHV7oLSbGSCD/zT8Dim8xsjCtXsCjC5G4IFDhF/XtuBnJgYPnSLMWaLw0UNBEr6sexVKP16Foi73lbTgtROhEt3kup8E/rVZHmz8NqTSI5eYFL7EwEBJFxPI70pjxKI5TwL/+iwP4vZOSvi9BiThDQwUdzFQ1Onqx4J/0bxRSXJJXTCx4BLioESPXGJq+FtuVGKRnqnC+fp6koZ9/35YEfzfBmTg4blOF5y66exQRk9DlnZCcJFMm+knUZCSI7QNb85wUDvo260BL2j61xTAu6BQ73CjpVGWP7FVEo7K5aB0474xw6VuWIM0/KmbTijUJ+qyrAG0EpPO+WBkf/N61uNwhgC+oMMB+XrHh/IGJkIzpJfUlkT//rIaI4Iv6HDAyXbH57IGasf4JdIbNi4xPe/bo0Tw+e0OUN2wL8oaqBkLBUjXAykD39uiRPAnbzyFE212v7yBUU4k3W2SG0gfXtX2FFSt9qisgeoRTsSBRxcWH915pqQUiwNwkfi+Mv22rgy+zQ4nWpQZCOB8eUGUXxdSqeknXhl8qx2OtdjkjxBKD3CODamBqzOsIvjjLTY43myTb2LNUHAG58yTGrg87FEG32KDY802+TGKchuchg0RGNiKA5TecimFh7wmyweyBlDohPOSqp/j4b2Fv2qeg2tzHEhZerwWg/qvA1D/FQvvfrlbV77wY8BbIafZ+rKiZa7KyDrTfQaiUSk1Rr+zRpRPm9b98LlNVofiNA8lZunCozmfzEC68HnIAG1pp5QKxX27iRk+PLqgpAzcs0RI4KNUwxM1hSMU96UDn9zAZrrwkN1o6cWCTxgY4ovVfT4/LjxaD5IZSAc+p9HCUvQf6eWmKKvEhUd7TSoDmPCQ3bjyFkUilFXiwKcygA1/fbmPItYUZJ/u8cziPEYkDaxsYsHnNK7MUfSPOeQG0K9gZFTl3Z55pfu8lIFvVzaVw19f+YaiDyjc/UdGyEVZpZJ9PrkBhceGPqAvLyWUVZYY3P5Uj5FkBmTgfcQNq1QF7e4SFPcVdbqjUutBMgPJLqlsNOfppWIq0yo2ONUoMSvUO5x7LykpAwvLG8/uNrTVmVgPcG/YQxENWSh0QrkNij4WveKGi4/FN2I7sLm1A0xoK25+LLBon0crcWKr/C/8zXqkI1H/f/0JPDNnaCVeJTwAAAAASUVORK5CYII=" />
                        {/* <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnUlEQVR4nO2avUoEMRDHfzaiVpa3J1f4DjaCpd1aiI2FrZ3Y+fEAdyKCb6CvIWJxiu9gZWEhWp2Nd36cjZGVWZBjbze7BpOV+UGaMJnMn5kksLOgKEpVVoAu8AIYz2MgscRlRXQCCN6MGe0ymUgWDIEdIMI/EbArMRnbzFyKcSIiNPYktqTMChmIcYPwaEhsfRvjtBZDxdjGp0L+CKMZccw8cAzcyGP7CtwD18ARsARMhJ6RTeDN4tG7DVnIOvAp4xRYAGaASblWlyVTRft7FTILPInf7V/ub3wK2RKfVw72Nz6FnInPjZH5pLQOgbuMsxOkkAfxmdxYPznJOfBBCnkXn1Mj848yvwhMW/ryKmSczyp7GRVSEZu6z3sUWwV+rQPwKaTnIj7XQsqwJmvO6y7kwOIDQy2EXMiaVRd+Qzgjrf8gpOcqPn0Qc9CXPQMtLRdoaWWgpeUCLa0MtLRqW1p9MYwCFDIn9s82xl0xTnp2oQnZL9N6i8V4KD27Jv6FNEXEh9hbt6nbBR8GatGeToklhWlztJY/DCiKwjdflkjdvMVEsBkAAAAASUVORK5CYII="' /> */}
                        {/* <img src={fb} alt="playStore" /> */}
                     </a>
                     <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                        <img src="data:image/png;base64,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" />
                        {/* <img src={insta} alt="playStore" /> */}
                     </a>
                     <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVR4nO2Yu2sUURjFTyImwSKSCGJja6GoRUDU+b4kapMiYiFpLCyiEV9gaSdCRA2xyT+QIo9GsVGiATHgu1C08IGPShK08RVxCUbYI3fcWXRJnJnM3Z0ZvT84sAyz3z2HOzP33g9wOBwOh+N/gLuwih4208NuKo5TMUDBGAUTFNyn4AUF76j45EswRwV9/fodXDf3PKfgnv9fxSgF56g45tc2Y2xFa3LDQD0FfRRMUVEom6mdCqWxDxKoi2d+PRoomEzBNBfRNbZhefQAggsZMM0KDUQz34EmCr5kwDArNMs2rAgP4KEzA2a5oNqxI0qA3tSN6iIS9EV5/vtTN6oJ3gMKxhMN8vAGuX9DtWbgcpQAtxINYvgxT14aIrtW2g7xJEqAx4kDBMx+IIdOkB31tgLMhAdQvLIWIODlI/LIdhsBvoeuyial9QCGYpGcukjuXZssRBcawx6hz1UJEDD3jRw+Te5sXFr9LWgOm4H5qgYImHlDnuqJX38bVmcjwPRr8mR3/PqCljw/QkX2YFl6L/HkCLlnzdJrK77+1XzmP6OC6douZB/fk4OH7C1kgqc13ko02zGuZd2t/mbuwQS5b51t4yzNwHi+t9OC/nwfaDz05vtI6aHz3z/UGygYzIBhVug8YjW2FNczYJq+TAsyTmPLDwHUUXEg5dbiTf+jEre1uGAgQQvbsZGCbioOU3GGihEqrlBw26ySVLwtN3H/DF347bq55xkVd6i4WmrunqXgqF9bsMlKc9fhcDgcDuSAn9VThUlTulWSAAAAAElFTkSuQmCC" />
                        {/* <img src={youtube} alt="playStore" /> */}
                     </a>
                     <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwElEQVR4nO2YT4hPURTHr3PmmYU/oSQWdiLlX5KFUogyIvmz8Cf5t8SGrGQWiixFGqWI/Oac22gkZkWyU6SRKAsiJZphfr93zhsy+T2950emZqb3e/e9N5v3qbt7797zPefce889xpSUlJSUlJQkxNbmI+kFZH2NJAGy1oDlObKcMbd19ki/eBVZbFzATt1o2kNwmqQ9hMhIJBlC1nDEQSpAejj+/k7fFCR/O7A+QtKL6Re2XyYjaTXymov9SHJlVMN5+ACSZ8jy848o+WRsdYbDwtr2n4cuGxtis3OAld1JjcfhEen3rC41t6rTsVPWpRIAVo4M8w7L3aY8EoYTkORt88bLELB2AetjJP3qWVmUTgDLsREm/4hW1if5v4WCFam8z3+HfEcbbDFpQQo2j5qrLN2my18wpgNIDzgI6Gshf5VxIj4NVMYIdR1I7kVCTU/YmiiCSTczyy6TBY1zO8mitUbenkAra01XbR6w7E0dgU5/WyYCzI1wErK+ccvlNAJ0g7PtQLIHSPd5FV0GLL1FCvDSnjyj5jDJYGECSOpR5J0FRBdJ4anD8SX2ymQFsDwpXoR0ZCbAs8Hyf7VJcRFoM1mCJDsLE0Hab2w40WRNVBYAy9P8Bcg5kwdIwVa0uglJriHJj5yMHzSVYE5OAvRSAZv3vMkN689E1s85ps4Hc7N/an4Con1QCVYi67ccPP8raYnuTlSkkT7MUgBYPW2KJrofgLQdWB84ps716OVWuIBoUWA9iKQDTsbb5t/ZbvSErWB1P7C+cDC8DqSncvW8R7okSpMW8lej9XcA6UlguY+kvmPKvEOSNSZ3ugemIcvZRgctg2NSq7HXsyiTm6Iis4DkOLC+THXCsPQCydHIIWbcsf5CsHoISa7GZXbU84k7d1KP7weS93E7kKUjbhPawbnjbXJJSUlJSUmJyZHfxnHsrRJKPnUAAAAASUVORK5CYII=" />
                        {/* <img src={twitter} alt="playStore" /> */}
                     </a>
                     <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAByElEQVR4nO2ZP0/CQBjG22scXI2Tiauy+glc3MC4+iX8DA6G9IiDJsYBBhdNHJwcNRGIHY3xjoBCgkTEAUP8A63yt7ymBVQEIq2mvSb3JM/UN5fnd+97N1wFgYuLi4tpSTJdQTKJI5lqCFNwxDLVRExjkkyW/xRexAQ7FhoPt4hJ0P7OuxwedS2FSMAygDk2DIRHRhdkGrUOgInqdnDUs0wqNgAYCI6//G8AvkgazgsaaA0dlIIG8+G0twCUggbfFb/XvAWgNfQ+ALWuewtA8XoHfJG0CWF0IpZXYS584y0A5JIFDoA7OzFM43yf3b2G7YsSpEpVqDbb8FprmaO4dvoAk5sJtgEW9jLw+NaEUbosvsPMTopdgOxLHX5TLK+CxCrAuPIf5dgE0Ntgzv/S4S2sHucheqcOrdtPPrMJsK4U+2omQgk4yVUG6jJPNTYBpreTA+ssHmQH6sq1FnsA7R/fe57aSo5d63oH7K6FOADmHTDFRwjzQ0z5LYT4NWpRo24Otyx4+mkR07JlAON9noHgYFjE9MwygPFzwe3gqGsJX/ktA3S6QIJuhxcx2bAV/rMTIRIw3uedPRNENcbG9s5zcXFxCU7pA5Jwntel+S2tAAAAAElFTkSuQmCC" />
                        {/* <img src={linkin} alt="playStore" /> */}
                     </a>
                  </span>
               </section>
               <section>
                  <menu>
                     <h2>Туслах цэс</h2>
                     <li>
                        <a>Бидний тухай</a>
                     </li>
                     <li>
                        <Link to="/privacy">Үйлчилгээний нөхцөл</Link>
                     </li>
                     <li>
                        <a>Түгээмэл асуулт, хариулт</a>
                     </li>
                     <li>
                        <a>Заавар, зөвлөмж</a>
                     </li>
                  </menu>
               </section>
               <section>
                  <menu>
                     <h2>Холбоо барих</h2>
                     <li>
                        <span>Утас: (+976) 7711-9304</span>
                     </li>
                     <li>
                        <span>Факс: (+976) 5353535</span>
                     </li>
                     <li>
                        <span>И-мэйл: info@ihospital.mn</span>
                     </li>
                     <li>
                        <span>Ажлын цаг: 09:00 - 18:00</span>
                     </li>
                     <li>
                        <span className="whitespace-pre-wrap">
                           Хаяг: Улаанбаатар, Сүхбаатар дүүрэг 15,
                           {'\n'}8-р хороо, Амарсанаа 2, Төв,
                           {'\n'}1 давхар, 1301 тоот
                        </span>
                     </li>
                  </menu>
               </section>
               <section>
                  <menu>
                     <h2>Апп татах</h2>
                     <div className="flex flex-row justify-between gap-3">
                        <a
                           href="https://www.freecodecamp.org/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-row items-center p-2 bg-white"
                           style={{
                              border: '2px solid #E8E8E8',
                              borderRadius: '6px'
                           }}
                        >
                           <div className="flex gap-2">
                              <img src={PlayStore} alt="playStore" />
                              <img src={PlayStoreText} alt="playStore" />
                           </div>
                        </a>
                        <a
                           href="https://www.freecodecamp.org/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-row items-center p-2 bg-white"
                           style={{
                              border: '2px solid #E8E8E8',
                              borderRadius: '6px'
                           }}
                        >
                           <div className="flex gap-2">
                              <img src={AppLogo} alt="playStore" />
                              <img src={AppText} alt="playStore" />
                           </div>
                        </a>
                     </div>
                  </menu>
               </section>
               <section>
                  <menu>
                     <h2>Бидэнтэй илүү ойр байгаарай</h2>
                     <li>
                        <a>Цаг алдалгүй шинэ мэдээлэл хүлээн аваарай!</a>
                     </li>
                     <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Control
                              style={{
                                 borderColor: '#2d8cff',
                                 borderRadius: 7
                              }}
                              className="focus:shadow-sm"
                              type="email"
                              placeholder="И-мэйл оруулна уу"
                           />
                        </Form.Group>
                        <Button
                           style={{
                              background: 'linear-gradient(180deg, #FAB31D 0%, #F6A219 100%)',
                              borderRadius: 7,
                              fontWeight: 700,
                              color: 'white',
                              borderColor: '#2d8cff',
                              width: '100%'
                           }}
                           variant="outline-secondary"
                           type="submit"
                        >
                           Илгээх
                        </Button>
                     </Form>
                  </menu>
               </section>
            </section>
         </Container>

         <section className="footer-bottom">GurenSoft LLC 2023 All rights reserved</section>
         {/* <section>
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
                                 Хаяг: Улаанбаатар, Сүхбаатар дүүрэг 15, 8-р хороо, Амарсанаа 2, Төв, 1 давхар, 1301
                                 тоот
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
         </section> */}
      </footer>
   );
}
export default Footer;
