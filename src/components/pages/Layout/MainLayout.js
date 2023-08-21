import React, { Fragment, Suspense, useContext, useEffect, useState } from 'react';
import AuthContext from '../../../features/AuthContext';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo/iHospital.svg';
import collapsedLogo from '../../../assets/logo/iHospitalCollapsed.svg';
import male from '../../../assets/images/maleAvatar.svg';
import { Button, Dropdown, Menu, Layout, Drawer } from 'antd';
import {
   MenuFoldOutlined,
   MenuUnfoldOutlined,
   MessageOutlined,
   PoweroffOutlined,
   UserOutlined
} from '@ant-design/icons';
import Sidenav from './Sidenav';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, logout, selectCurrentRoleId, selectCurrentUserId } from '../../../features/authReducer';
import jwtInterceopter from '../../jwtInterceopter';
import FullScreenLoader from '../../FullScreenLoader';
//
import Chat from '../../../chat/List';
//
const { Content, Sider } = Layout;
function MainLayout() {
   const { user, logoutt } = useContext(AuthContext);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const UserId = useSelector(selectCurrentUserId);
   const RoleId = useSelector(selectCurrentRoleId);
   const [collapsed, setCollapsed] = useState(false);
   const [menus, setMenus] = useState([]);
   //
   const [isOpenTenChatModal, setIsOpenTenChatModal] = useState(false);
   //
   const handleMenuClick = async (e) => {
      if (e.key == 2) {
         dispatch(Delete());
         dispatch(logout()); // tur bicew jwtBugdin ajilah ued ustagna
         await logoutt();
         navigate('/');
      } else if (e.key == 3) {
         //  setIsChatModal(true);
      }
   };
   const getMenus = async () => {
      const conf = {
         params: {
            roleId: RoleId,
            userId: UserId
         }
      };
      const res = await jwtInterceopter.get('organization/permission/role/user', conf);
      var response = res.data.response;
      if (response?.length > 0) {
         var menus = [];
         response?.map((menu, indx) => {
            if (menu.menu?.menus?.length > 0) {
               var children = [];
               menu.menu.menus.map((subMenu, idx) => {
                  children.push({
                     key: `${indx}-${idx}`,
                     icon: (
                        <p
                           style={{ width: 20, marginBottom: 0 }}
                           dangerouslySetInnerHTML={{ __html: subMenu.icon }}
                        ></p>
                     ),
                     label: (
                        <Link
                           to={subMenu.url}
                           state={{
                              isCreate: menu.isCreate,
                              isRead: menu.isRead,
                              isUpdate: menu.isUpdate,
                              isDelete: menu.isDelete
                           }}
                        >
                           {subMenu.title}
                        </Link>
                     )
                  });
               });
               menus.push({
                  key: indx,
                  icon: (
                     <p style={{ width: 20, marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: menu.menu.icon }}></p>
                  ),
                  label: menu.menu.title,
                  children: children
               });
            } else {
               var menu = {
                  key: menu.id,
                  icon: (
                     <p style={{ width: 20, marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: menu.menu.icon }}></p>
                  ),
                  label: (
                     <Link
                        to={menu.menu.url}
                        state={{
                           isCreate: menu.isCreate,
                           isRead: menu.isRead,
                           isUpdate: menu.isUpdate,
                           isDelete: menu.isDelete
                        }}
                     >
                        {menu.menu.title}
                     </Link>
                  )
               };
               menus.push(menu);
            }
         });
         setMenus(menus);
      }
   };
   const menu = (
      <Menu
         onClick={handleMenuClick}
         items={[
            {
               label: <NavLink to="/profile">Тохиргоо</NavLink>,
               key: '1',
               icon: <UserOutlined />
            },
            {
               key: '2',
               label: 'Гарах',
               icon: <PoweroffOutlined style={{ color: 'red' }} />
            }
         ]}
      />
   );
   useEffect(() => {
      console.log(user);
      if (user != null && RoleId) {
         getMenus();
      }
   }, [UserId, RoleId]);
   return (
      <>
         <Layout
            style={{
               height: '100vh'
            }}
         >
            {user && (
               <Sider
                  trigger={null}
                  collapsible
                  collapsed={collapsed}
                  theme="light"
                  style={{
                     paddingBottom: 0,
                     maxWidth: 250,
                     width: 250,
                     minWidth: 250,
                     boxShadow: '1px 0px 0px #ccc',
                     zIndex: 2
                  }}
               >
                  <div
                     style={{
                        position: 'sticky',
                        zIndex: 3,
                        height: 64,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0px 1px 1px #ccc'
                     }}
                  >
                     <img
                        className={collapsed ? 'h-[48px]' : 'h-[64px]'}
                        src={collapsed ? collapsedLogo : logo}
                        alt="logo"
                     />
                  </div>
                  <Sidenav menus={menus} />
               </Sider>
            )}

            <Layout className="ant-layout">
               <Navbar
                  className="h-16 px-3 py-0"
                  bg="white"
                  style={{
                     boxShadow: '0px 1px 1px #ccc',
                     zIndex: 1
                  }}
               >
                  {user &&
                     React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        style: {
                           fontSize: 20,
                           color: '#4a7fc1'
                        },
                        onClick: () => setCollapsed(!collapsed)
                     })}
                  {!user && (
                     <Navbar.Brand>
                        <Nav.Link as={Link} to="/">
                           <img className="h-[54px]" src={logo} alt="logo" />
                        </Nav.Link>
                     </Navbar.Brand>
                  )}
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                     <Navbar.Text className="h-16">
                        {user ? (
                           <div className="flex flex-row gap-3">
                              <div
                                 className="flex items-center hover:cursor-pointer rounded-full"
                                 style={{
                                    width: 48,
                                    height: 48
                                 }}
                              >
                                 <MessageOutlined
                                    title="TenChat"
                                    style={{
                                       padding: 8,
                                       color: '#4a7fc1',
                                       fontSize: 32
                                    }}
                                    onClick={() => setIsOpenTenChatModal(true)}
                                 />
                              </div>
                              <Dropdown
                                 overlay={menu}
                                 trigger={['click']}
                                 arrow={{
                                    pointAtCenter: true
                                 }}
                              >
                                 <Button
                                    type="link"
                                    style={{
                                       paddingTop: 0,
                                       padding: 0,
                                       minHeight: 48,
                                       width: 48
                                    }}
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                 >
                                    <img className="h-12 w-12" src={male} alt="avatar" />
                                 </Button>
                              </Dropdown>
                           </div>
                        ) : null}
                     </Navbar.Text>
                  </Navbar.Collapse>
               </Navbar>
               <Content className="bg-[#F7F8FA] overflow-auto">
                  <div className="body">
                     <div className="tabled">
                        <Fragment>
                           <Suspense fallback={<FullScreenLoader full={true} />}>
                              <Outlet />
                           </Suspense>
                        </Fragment>
                     </div>
                  </div>
                  <Drawer
                     open={isOpenTenChatModal}
                     title="Messenger"
                     onClose={() => setIsOpenTenChatModal(false)}
                     bodyStyle={{
                        padding: 0
                     }}
                  >
                     <Chat isRender={isOpenTenChatModal} />
                  </Drawer>
               </Content>
            </Layout>
         </Layout>
      </>
   );
}
export default MainLayout;
