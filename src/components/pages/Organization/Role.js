import { getRoles } from '@testing-library/react';
import { Card } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get } from '../../comman';
import UTable from '../../UTable';

function Role() {
   const roleColumn = [
      {
         index: 'name',
         label: 'NAME',
         isView: true,
         input: 'input',
         col: 24
      },
      {
         index: 'description',
         label: 'description',
         isView: true,
         input: 'input',
         col: 24
      }
   ];
   return (
      <div className="flex flex-wrap">
         <div className="w-full">
            <UTable
               title={'Role'}
               url={'reference/role'}
               column={roleColumn}
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
               width="80%"
            />
         </div>
      </div>
   );
}
export default Role;
