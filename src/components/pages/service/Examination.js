import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get } from '../../comman';
import UTable from '../../UTable';
import apiInsuranceService from '../../../services/healt-insurance/insurance';

function Examination() {
   const token = useSelector(selectCurrentToken);
   const [examinationTypeData, setExaminationTypeData] = useState([]);
   const [types, setTypes] = useState([]);
   const [hicsExams, setHicsExams] = useState([]);

   const config = {
      headers: {},
      params: {
         type: 0
      }
   };
   const getExaminationTypeData = async () => {
      const response = await Get('reference-care-type', token, config);
      setExaminationTypeData(response.data);
   };

   const getServicesType = async () => {
      const response = await Get('reference-care-type', token, config);
      setTypes(response.data);
   };
   const getHicsExams = async () => {
      await apiInsuranceService.getAllHicsExams().then(({ data }) => {
         if (data.success) {
            setHicsExams(data.response);
         }
      });
   };

   useEffect(() => {
      getExaminationTypeData();
      getServicesType();
      getHicsExams();
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
         index: 'isInsurance',
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
      },
      {
         index: 'hicsExamId',
         label: 'ЭМД үйлчилгээ',
         isView: true,
         isSearch: false,
         input: 'select',
         inputData: hicsExams,
         relIndex: 'name',
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
