import React, { useEffect, useState } from 'react';
import UTable from '@Comman/UTable';

//api
import ReferenceCareTypeApi from '@ApiServices/reference/care-type.api';

const Operation = () => {
   const [operationTypeData, setOperationTypeData] = useState([]);
   const getOperationTypeData = async () => {
      await ReferenceCareTypeApi.get({
         type: 12
      }).then(({ data: { response } }) => {
         setOperationTypeData(response.data);
      });
   };
   useEffect(() => {
      getOperationTypeData();
   }, []);

   const column = [
      {
         index: 'operationTypeId',
         label: 'Мэс засал төрөл',
         isView: false,
         input: 'select',
         inputData: operationTypeData,
         relIndex: 'name',
         col: 21
      },
      {
         label: 'Мэс засал төрөл',
         isAdd: true,
         isView: false,
         index: 'name',
         type: 12,
         subInput: 'input',
         col: 3
      },
      {
         index: 'name',
         label: 'Мэс ажилбарын нэр',
         isView: true,
         input: 'input',
         col: 24
      },
      {
         index: 'isActive',
         label: 'Идэвхтэй эсэх',
         isView: true,
         isSearch: false,
         input: 'switch',
         col: 12
      },
      {
         index: 'isInsurance',
         label: 'Даатгал',
         isView: true,
         isSearch: false,
         input: 'switch',
         col: 12
      },
      {
         index: 'price',
         label: 'Үнэ',
         isView: true,
         isSearch: false,
         input: 'numberInput',
         col: 12
      },
      {
         index: 'inpatientPrice',
         label: 'Хэвтэн үнэ',
         isView: true,
         isSearch: false,
         input: 'numberInput',
         col: 12
      }
   ];
   return (
      <div className="p-3 w-full h-full bg-[#f5f6f7]">
         <UTable
            title={'Мэс ажилбар'}
            url={'service/operation'}
            column={column}
            isCreate={true}
            isRead={true}
            isUpdate={true}
            isDelete={true}
            refresh={getOperationTypeData}
            width="40%"
         />
      </div>
   );
};
export default Operation;
