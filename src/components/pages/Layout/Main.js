import React, { useState, useEffect, Fragment, Suspense } from 'react';
import '../../../style/Layout.css';
import '../../../style/Hospital.css';
import { Button, Layout, Dropdown, Menu, Drawer } from 'antd';
import Sidenav from './Sidenav';
import male from '../../../assets/images/maleAvatar.svg';
import { useNavigate, Outlet, NavLink, Link } from 'react-router-dom';
import {
   selectCurrentToken,
   logout,
   DelDepId,
   DelAppId,
   DelNote,
   DelInsurrance,
   DelRoleId,
   selectCurrentRoleId,
   selectCurrentUserId
} from '../../../features/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import {
   PoweroffOutlined,
   UserOutlined,
   RightOutlined,
   LeftOutlined
} from '@ant-design/icons';
import logo from '../../../assets/logo/iHospital.png';
import { Get, Post } from '../../comman';
import Fallback from './Fallback';

const { Header, Content, Sider } = Layout;

const Main = () => {
   const UserId = useSelector(selectCurrentUserId);
   const RoleId = useSelector(selectCurrentRoleId);
   const [collapsed, setCollapsed] = useState(false);
   const token = useSelector(selectCurrentToken);
   const [isChatModal, setIsChatModal] = useState(false);
   const config = {
      headers: {},
      params: {}
   };
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleMenuClick = (e) => {
      if (e.key == 2) {
         logoutt();
         dispatch(logout());
         dispatch(DelDepId());
         dispatch(DelAppId());
         dispatch(DelNote());
         dispatch(DelInsurrance());
         dispatch(DelRoleId());
         navigate('/');
      } else if (e.key == 3) {
         setIsChatModal(true);
      }
   };
   const logoutt = () => {
      Post('authentication/logout', token, config);
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
            },
            {
               key: '3',
               label: 'CHAT',
               icon: <PoweroffOutlined style={{ color: 'red' }} />
            }
         ]}
      />
   );
   const [menus, setMenus] = useState([]);
   const getMenus = async () => {
      const conf = {
         headers: {},
         params: {
            roleId: RoleId,
            userId: UserId
         }
      };
      const response = await Get(
         'organization/permission/role/user',
         token,
         conf
      );
      console.log(response);
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
                     <p
                        style={{ width: 20, marginBottom: 0 }}
                        dangerouslySetInnerHTML={{ __html: menu.menu.icon }}
                     ></p>
                  ),
                  label: menu.menu.title,
                  children: children
               });
            } else {
               var menu = {
                  key: menu.id,
                  icon: (
                     <p
                        style={{ width: 20, marginBottom: 0 }}
                        dangerouslySetInnerHTML={{ __html: menu.menu.icon }}
                     ></p>
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
   useEffect(() => {
      getMenus();
      console.log('-----<');
   }, []);
   return (
      <>
         <Layout>
            <Header className="bg-transparent mx-5 p-0 h-20">
               <div className="float-left">
                  <img
                     className="w-48 bg-transparent float-left"
                     src={logo}
                     alt="logo"
                  />
               </div>
               <div className="float-right">
                  <Dropdown
                     overlay={menu}
                     trigger={['click']}
                     arrow={{
                        pointAtCenter: true
                     }}
                  >
                     <Button
                        type="link"
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                     >
                        <img className="h-12 w-12" src={male} alt="avatar" />
                     </Button>
                  </Dropdown>
               </div>
            </Header>
            <Layout className="ant-layout">
               <Sider
                  trigger={React.createElement(
                     collapsed ? RightOutlined : LeftOutlined,
                     {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed)
                     }
                  )}
                  collapsible
                  collapsed={collapsed}
                  theme="light"
                  style={{
                     maxWidth: 250,
                     width: 250,
                     minWidth: 250
                  }}
                  className="bg-white scroll"
               >
                  <Sidenav menus={menus} />
               </Sider>
               <Content className="bg-slate-50">
                  <div className="body">
                     <div className="tabled">
                        <Fragment>
                           <Suspense fallback={<Fallback />}>
                              {<Outlet />}
                           </Suspense>
                        </Fragment>
                     </div>
                  </div>
               </Content>
            </Layout>
         </Layout>
         <Drawer
            open={isChatModal}
            placement="right"
            onClose={() => setIsChatModal(false)}
            bodyStyle={{ padding: 0 }}
         >
            <iframe src="http://localhost:3001" width="100%" height="100%" />
         </Drawer>
      </>
   );
};

export default Main;
