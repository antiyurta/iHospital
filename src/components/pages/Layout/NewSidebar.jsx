import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
//comp
import MenuItem from './MenuItem';
import MenuItemChildren from './MenuItemChildren';
//redux
import { selectCurrentRoleId, selectCurrentUserId } from '@Features/authReducer';
//api
import PermissionApi from '@ApiServices/organization/permission';
const Sidebar = ({ collapsed }) => {
   const [userMenu, setMenus] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const UserId = useSelector(selectCurrentUserId);
   const RoleId = useSelector(selectCurrentRoleId);
   const getMenus = async () => {
      setIsLoading(true);
      await PermissionApi.getUserMenu({
         params: {
            roleId: RoleId,
            userId: UserId
         }
      })
         .then(({ data: { response } }) => {
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
                                 style={{ width: 20, minWidth: 20, maxWidth: 20, marginBottom: 0 }}
                                 dangerouslySetInnerHTML={{ __html: subMenu.icon }}
                              ></p>
                           ),
                           title: subMenu.title,
                           url: `/main${subMenu.url}`,
                           state: {
                              isCreate: menu.isCreate,
                              isRead: menu.isRead,
                              isUpdate: menu.isUpdate,
                              isDelete: menu.isDelete
                           }
                        });
                     });
                     menus.push({
                        key: indx,
                        icon: (
                           <p
                              style={{ width: 20, minWidth: 20, maxWidth: 20, marginBottom: 0 }}
                              dangerouslySetInnerHTML={{ __html: menu.menu.icon }}
                           ></p>
                        ),
                        title: menu.menu.title,
                        children: children
                     });
                  } else {
                     var menu = {
                        key: menu.id,
                        icon: (
                           <p
                              style={{ width: 20, minWidth: 20, maxWidth: 20, marginBottom: 0 }}
                              dangerouslySetInnerHTML={{ __html: menu.menu.icon }}
                           ></p>
                        ),
                        title: menu.menu.title,
                        url: `/main${menu.menu.url}`,
                        state: {
                           isCreate: menu.isCreate,
                           isRead: menu.isRead,
                           isUpdate: menu.isUpdate,
                           isDelete: menu.isDelete
                        }
                     };
                     menus.push(menu);
                  }
               });
               setMenus(menus);
            }
         })
         .catch((err) => {
            console.log(err);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   const renderMenuItem = (menuItem) => {
      if (!menuItem.children) {
         return <MenuItem key={menuItem.key} data={menuItem} collapsed={collapsed} />;
      }
      const renderedMenuItems = menuItem.children.map(renderMenuItem);
      return (
         <MenuItemChildren key={menuItem.key} data={menuItem} collapsed={collapsed}>
            {renderedMenuItems}
         </MenuItemChildren>
      );
   };

   useEffect(() => {
      if (UserId || RoleId) {
         getMenus();
      }
   }, [UserId, RoleId]);
   return (
      <div className={`sidebar-body ${isLoading ? 'loading' : ''}`}>
         {isLoading ? (
            <Spin
               spinning={isLoading}
               indicator={
                  <LoadingOutlined
                     style={{
                        fontSize: 24
                     }}
                     spin
                  />
               }
            />
         ) : (
            userMenu?.map(renderMenuItem)
         )}
      </div>
   );
};
export default Sidebar;
