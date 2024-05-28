import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalId } from '../../../features/authReducer';
import UTable from '../../UTable';

import ReferenceRoleService from '../../../services/reference/role';
import ReferenceMenuServices from '../../../services/reference/menu';

function Permission() {
   const hospitalId = useSelector(selectCurrentHospitalId);
   const [roles, setRoles] = useState([]);
   const [menus, setMenus] = useState([]);
   const getRoles = async () => {
      await ReferenceRoleService.get({}).then((response) => {
         setRoles(response.data.response.data);
      });
   };
   const getMenus = async () => {
      await ReferenceMenuServices.get({}).then((response) => {
         const data = response.data.response.data;
         console.log("asdadsad", data)
         setMenus(data.filter((item) => item.parentId === null));
      });
   };
   const column = [
      {
         index: 'hospitalId',
         label: 'hospitalId',
         isView: false,
         input: 'inputDefValueHide',
         value: hospitalId,
         col: 24
      },
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
         relIndex: 'title',
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
                  initialValues={{
                     hospitalId: hospitalId
                  }}
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
