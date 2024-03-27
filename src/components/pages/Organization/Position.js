import React, { useEffect, useState } from 'react';
import UTable from '../../UTable';

import OrganizationStructureServices from '../../../services/organization/structure';

function Position() {
   const position = {
      headers: {},
      params: {
         type: 1
      }
   };
   const [departments, setDepartments] = useState([]);
   const getDepartment = async () => {
      await OrganizationStructureServices.get({
         params: {
            types: '2,0'
         }
      }).then((response) => {
         setDepartments(response.data.response.data);
      });
   };

   useEffect(() => {
      getDepartment();
   }, []);
   const positionColumn = [
      {
         index: 'parentId',
         label: 'Албан нэгж',
         isView: true,
         input: 'select',
         inputData: departments,
         relIndex: 'name',
         col: 24
      },
      {
         index: 'name',
         label: 'Албан тушаал',
         isView: true,
         input: 'input',
         col: 24
      },
      {
         index: 'salary',
         label: 'Цалин',
         isView: true,
         input: 'numberInput',
         col: 24
      },
      {
         index: 'type',
         label: 'Төрөл',
         isView: true,
         input: 'select',
         inputData: [
            {
               id: 1,
               label: 'Албан тушаал'
            }
         ],
         relIndex: 'label',
         col: 24
      },
      {
         index: 'position',
         label: 'Байрлал',
         isView: false,
         input: 'numberInput',
         col: 24
      },
      {
         index: 'workingHoursPerMonth',
         label: 'Сард ажиллах цаг',
         isView: true,
         input: 'numberInput',
         col: 24
      },
      {
         index: 'isRegistration',
         label: 'Бүртгэл эсэх',
         isView: true,
         input: 'switch',
         col: 24
      }
   ];
   return (
      <div className="w-full bg-[#f5f6f7] p-3">
         <UTable
            title={'Албан тушаал'}
            url={'organization/structure'}
            params={position}
            column={positionColumn}
            isCreate={true}
            isRead={true}
            isUpdate={true}
            isDelete={true}
            width="80%"
         />
      </div>
   );
}
export default Position;
