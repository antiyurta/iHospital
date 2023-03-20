import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get } from '../../comman';
import UTable from '../../UTable';

function Examination() {
   const token = useSelector(selectCurrentToken);
   const [examinationTypeData, setExaminationTypeData] = useState([]);
   const [types, setTypes] = useState([]);

   const config = {
      headers: {},
      params: {
         type: 0
      }
   };
   const getExaminationTypeData = async () => {
      const response = await Get('service/type', token, config);
      setExaminationTypeData(response.data);
   };

   const getServicesType = async () => {
      const response = await Get('service/type', token, config);
      setTypes(response.data);
   };

   useEffect(() => {
      getExaminationTypeData();
      getServicesType();
   }, []);
   const column = [
      {
         index: 'examinationTypeId',
         label: 'Шинжилгээний төрөл',
         isView: false,
         input: 'select',
         inputData: examinationTypeData,
         relIndex: 'name',
         col: 21
      },
      {
         label: 'Шинжилгээний төрөл',
         isAdd: true,
         isView: false,
         index: 'name',
         type: 0,
         subInput: 'input',
         col: 3
      },
      {
         index: 'name',
         label: 'Нэр',
         isView: true,
         isSearch: true,
         input: 'input',
         col: 24,
         width: 100
      },
      {
         index: 'hasInsurance',
         label: 'Даатгал',
         isView: true,
         isSearch: false,
         input: 'switch',
         col: 12
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
         index: 'price',
         label: 'Үнэ',
         isView: true,
         isSearch: false,
         input: 'inputNumber',
         col: 12
      },
      {
         index: 'inpatientPrice',
         label: 'Хэвтэн үнэ',
         isView: true,
         isSearch: false,
         input: 'inputNumber',
         col: 12
      }
   ];
   return (
      <div>
         <div className="flex flex-wrap">
            <div className="w-full">
               <UTable
                  title={'Шинжилгээ'}
                  url={'service/examination'}
                  column={column}
                  isCreate={true}
                  isRead={false}
                  isUpdate={true}
                  isDelete={true}
                  refresh={getExaminationTypeData}
                  width="40%"
               />
            </div>
         </div>
      </div>
   );
}
export default Examination;
