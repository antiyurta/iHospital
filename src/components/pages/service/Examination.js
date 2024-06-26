import React, { useEffect, useState } from 'react';
import UTable from '../../UTable';
import api from '@ApiServices/healt-insurance/healtInsurance';

function Examination() {
   const [examinationTypeData, setExaminationTypeData] = useState([]);
   const [hicsExams, setHicsExams] = useState([]);
   const getExaminationTypeData = async () => {
      await careTypeApi
         .get({
            params: {
               type: 0
            }
         })
         .then(({ data: { response } }) => {
            setExaminationTypeData(response.data);
         });
   };
   const getHicsExams = async () => {
      await api.getHicsExam().then(({ data }) => {
         if (data.result.length > 0) {
            setHicsExams(data.result);
         }
      });
   };

   useEffect(() => {
      getExaminationTypeData();
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
         index: 'examCode',
         label: 'ЭМД үйлчилгээ',
         isView: true,
         isSearch: false,
         input: 'select',
         onChange: {
            setValueIndex: 'drgCode'
         },
         inputData: hicsExams,
         relIndex: 'examName',
         relValueIndex: 'examCode',
         col: 12
      },
      {
         index: 'drgCode',
         label: 'drgCode',
         isView: true,
         isSearch: false,
         input: 'input',
         col: 12
      }
   ];
   return (
      <div className="w-full bg-[#f5f6f7] p-3">
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
   );
}
export default Examination;
