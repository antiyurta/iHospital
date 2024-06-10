import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get } from '../../common';
import UTable from '../../UTable';
import apiInsuranceService from '../../../services/healt-insurance/insurance';
import api from '@ApiServices/healt-insurance/healtInsurance';

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
      await api.getHicsExam().then(({ data }) => {
         if (data.result.length > 0) {
            setHicsExams(data.result);
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
