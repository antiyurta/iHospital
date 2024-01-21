import React from 'react';
import UTable from '../../UTable';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalId } from '../../../features/authReducer';

function Role() {
   const hospitalId = useSelector(selectCurrentHospitalId);
   const roleColumn = [
      {
         index: 'hospitalId',
         label: 'hospitalId',
         isView: false,
         input: 'inputDefValueHide',
         value: hospitalId,
         col: 24
      },
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
      <div className="w-full bg-[#f5f6f7] p-3">
         <UTable
            title={'Role'}
            url={'reference/role'}
            column={roleColumn}
            initialValues={{
               hospitalId: hospitalId
            }}
            isCreate={true}
            isRead={true}
            isUpdate={true}
            isDelete={true}
            width="80%"
         />
      </div>
   );
}
export default Role;
