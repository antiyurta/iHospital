import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get } from '../../comman';
import UTable from '../../UTable';

function Permission() {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [permissions, setPermissions] = useState([]);
   const [roles, setRoles] = useState([]);
   const [menus, setMenus] = useState([]);
   const getPermissions = async () => {
      const response = await Get('organization/permission', token, config);
      setPermissions(response.data);
   };
   const getRoles = async () => {
      const response = await Get('reference/role', token, config);
      setRoles(response.data);
   };
   const getMenus = async () => {
      const response = await Get('reference/menu', token, config);
      setMenus(response.data);
   };
   const column = [
      {
         index: 'roleId',
         label: 'ROLE',
         isView: true,
         input: 'select',
         inputData: roles,
         relIndex: 'name',
         col: 12
      },
      {
         index: 'menuId',
         label: 'menus',
         isView: true,
         input: 'select',
         inputData: menus,
         relIndex: 'name',
         col: 24
      },
      {
         index: 'isCreate',
         label: 'isCreate',
         isView: true,
         input: 'switch',
         col: 12
      },
      {
         index: 'isRead',
         label: 'isRead',
         isView: true,
         input: 'switch',
         col: 12
      },
      {
         index: 'isUpdate',
         label: 'isUpdate',
         isView: true,
         input: 'switch',
         col: 12
      },
      {
         index: 'isDelete',
         label: 'isDelete',
         isView: true,
         input: 'switch',
         col: 12
      }
   ];
   useEffect(() => {
      getPermissions();
      getRoles();
      getMenus();
   }, []);
   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full">
               <UTable
                  title={'Permission'}
                  url={'organization/permission'}
                  column={column}
                  isCreate={true}
                  isRead={true}
                  isUpdate={true}
                  isDelete={true}
                  width="50%"
               />
            </div>
         </div>
      </>
   );
}
export default Permission;
