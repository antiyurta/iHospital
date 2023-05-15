import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../features/AuthContext';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo/iHospital.svg';
import male from '../../../assets/images/maleAvatar.svg';
import { Button, Dropdown, Menu, Layout } from 'antd';
import { LeftOutlined, PoweroffOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
import Sidenav from './Sidenav';
import { useDispatch, useSelector } from 'react-redux';
import {
   DelAppId,
   DelDepId,
   DelInsurrance,
   DelNote,
   DelRoleId,
   selectCurrentRoleId,
   selectCurrentUserId
} from '../../../features/authReducer';
import jwtInterceopter from '../../jwtInterceopter';
import { logout } from '../../../features/authReducer';
const { Content, Sider } = Layout;
function MainLayout({ children }) {
   const { user, logoutt } = useContext(AuthContext);
   const dispatch = useDispatch();
   const UserId = useSelector(selectCurrentUserId);
   const RoleId = useSelector(selectCurrentRoleId);
   const [collapsed, setCollapsed] = useState(false);
   const [menus, setMenus] = useState([]);
   const handleMenuClick = async (e) => {
      if (e.key == 2) {
         await logoutt();
         dispatch(logout());
         dispatch(DelDepId());
         dispatch(DelAppId());
         dispatch(DelNote());
         dispatch(DelInsurrance());
         dispatch(DelRoleId());
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
            <Navbar className="h-16 px-3 py-0" bg="white">
               <Navbar.Brand>
                  <Nav.Link as={Link} to="/">
                     <img className="h-[54px]" src={logo} alt="logo" />
                  </Nav.Link>
               </Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                     {!user ? (
                        <Button type="primary">
                           <Nav.Link as={Link} to="/login">
                              Нэвтрэх
                           </Nav.Link>
                        </Button>
                     ) : (
                        <Dropdown
                           overlay={menu}
                           trigger={['click']}
                           arrow={{
                              pointAtCenter: true
                           }}
                        >
                           <Button type="link" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                              <img className="h-12 w-12" src={male} alt="avatar" />
                           </Button>
                        </Dropdown>
                     )}
                  </Navbar.Text>
               </Navbar.Collapse>
            </Navbar>
            <Layout className="ant-layout">
               {user && (
                  <Sider
                     trigger={React.createElement(collapsed ? RightOutlined : LeftOutlined, {
                        className: 'trigger',
                        style: {
                           border: '1px solid #2D8CFF',
                           padding: '5px',
                           borderRadius: '50%',
                           color: '#2D8CFF'
                        },
                        onClick: () => setCollapsed(!collapsed)
                     })}
                     collapsible
                     collapsed={collapsed}
                     theme="light"
                     style={{
                        overflow: 'auto',
                        marginBottom: 48,
                        paddingBottom: 0,
                        maxWidth: 250,
                        width: 250,
                        minWidth: 250
                     }}
                     className="bg-white scroll"
                  >
                     <Sidenav menus={menus} />
                  </Sider>
               )}
               <Content className="bg-[#F3F4F6]">
                  <div className="body">
                     <div className="tabled">{children}</div>
                  </div>
               </Content>
            </Layout>
         </Layout>
      </>
   );
}
export default MainLayout;
