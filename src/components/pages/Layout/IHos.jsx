import React, { Fragment, Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectCurrentRoleId, selectCurrentUserId } from '../../../features/authReducer';

//
import PermissionServices from '../../../services/organization/permission';
import FullScreenLoader from '../../FullScreenLoader';

const IHos = () => {
   const [userMenu, setMenus] = useState([]);
   const [collapsed, setCollapsed] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const UserId = useSelector(selectCurrentUserId);
   const RoleId = useSelector(selectCurrentRoleId);
   const getMenus = async () => {
      setIsLoading(true);
      console.log('end');
      await PermissionServices.getUserMenu({
         params: {
            roleId: RoleId,
            userId: UserId,
            dd: 'stest'
         }
      })
         .then(({ data: { response } }) => {
            console.log('menu', response);
            if (response?.length > 0) {
               var menus = [];
               response.map((menu, indx) => {
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
                                 to={`/main${subMenu.url}`}
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
                              to={`/main${menu.menu.url}`}
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
         })
         .catch(() => {})
         .finally(() => {
            setIsLoading(false);
         });
   };

   useEffect(() => {
      // getMenus();
   }, [UserId, RoleId]);
   return (
      <>
         {/* <Sider theme="light" collapsedWidth={61} collapsed={collapsed} className="ihospital-menu">
            <Button title={collapsed ? 'Нээх' : 'Хаах'} type="primary" onClick={() => setCollapsed(!collapsed)}>
               {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <div className="menu-body">
               <Spin spinning={isLoading}>
                  <Menu theme="light" mode="inline" items={userMenu} inlineIndent={10} />
               </Spin>
            </div>
         </Sider> */}
         <div
            style={{
               padding: '12px 12px 12px 0px',
               // backgroundColor: '#eff4fa',
               // height: '100vh',
               width: '100%',
               overflow: 'auto'
            }}
         >
            <Fragment>
               <Suspense fallback={<FullScreenLoader full={true} />}>
                  <Outlet />
               </Suspense>
            </Fragment>
         </div>
      </>
   );
};
export default IHos;
