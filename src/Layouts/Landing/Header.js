import React from 'react';
import { Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

//
import logo from '../../assets/landing/logo.svg';
//
function Header() {
   const navigate = useNavigate();
   return (
      <>
         <section>
            <div className="fixed z-50 w-full bg-transparent">
               <>
                  <Navbar
                     expand={'sm'}
                     style={{
                        alignContent: 'center',
                        backgroundColor: 'white',
                        height: 72,
                        padding: '12px 20px',
                        boxShadow: '0px 8px 8px rgba(0,0,0,0.1)'
                     }}
                  >
                     <Navbar.Brand>
                        {/* <NavLink to="/"> */}
                        <img
                           style={{
                              height: 48
                           }}
                           src={logo}
                           alt="logo"
                        />
                        {/* </NavLink> */}
                     </Navbar.Brand>
                     <Navbar.Toggle className="border-[#2D8CFF]" aria-controls="offcanvasNavbar-expand-sm" />
                     <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-sm"
                        aria-labelledby="offcanvasNavbar-expand-sm"
                        placement="end"
                        style={{
                           width: 300
                        }}
                     >
                        <Offcanvas.Header closeButton>
                           <Offcanvas.Title id="offcanvasNavbar-expand-sm">
                              <img
                                 style={{
                                    height: 48
                                 }}
                                 src={logo}
                                 alt="logo"
                              />
                           </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                           <Nav className="justify-end items-center flex-grow-1 pe-3">
                              <Nav.Link className="py-3 px-5 hover:bg-gray-100 cursor-pointer rounded-xl">
                                 <p
                                    style={{
                                       fontStyle: 'normal',
                                       fontWeight: 700,
                                       fontSize: 14,
                                       textTransform: 'uppercase',
                                       color: '#6B7280'
                                    }}
                                 >
                                    Танилцуулга
                                 </p>
                              </Nav.Link>
                              <Nav.Link className="py-3 px-5 hover:bg-gray-100 cursor-pointer rounded-xl">
                                 <p
                                    style={{
                                       fontStyle: 'normal',
                                       fontWeight: 700,
                                       fontSize: 14,
                                       textTransform: 'uppercase',
                                       color: '#6B7280'
                                    }}
                                 >
                                    Шийдлүүд
                                 </p>
                              </Nav.Link>
                              <Nav.Link className="py-3 px-5 hover:bg-gray-100 cursor-pointer rounded-xl">
                                 <p
                                    style={{
                                       fontStyle: 'normal',
                                       fontWeight: 700,
                                       fontSize: 14,
                                       textTransform: 'uppercase',
                                       color: '#6B7280'
                                    }}
                                 >
                                    Үнийн санал
                                 </p>
                              </Nav.Link>
                              <Nav.Link className="py-3 px-5 hover:bg-gray-100 cursor-pointer rounded-xl">
                                 <p
                                    style={{
                                       fontStyle: 'normal',
                                       fontWeight: 700,
                                       fontSize: 14,
                                       textTransform: 'uppercase',
                                       color: '#6B7280'
                                    }}
                                 >
                                    Мэдээ мэдээлэл
                                 </p>
                              </Nav.Link>
                           </Nav>
                           <Form className="flex py-3">
                              <button
                                 onClick={() => {
                                    navigate('/auth/login');
                                 }}
                                 className="py-2 px-5 rounded-md bg-[#2D8CFF] w-full"
                              >
                                 <p
                                    style={{
                                       fontStyle: 'normal',
                                       fontWeight: 400,
                                       fontSize: 14,
                                       textTransform: 'uppercase',
                                       color: 'white'
                                    }}
                                 >
                                    Нэвтрэх
                                 </p>
                              </button>
                           </Form>
                        </Offcanvas.Body>
                     </Navbar.Offcanvas>
                  </Navbar>
               </>
            </div>
         </section>
      </>
   );
}
export default Header;
