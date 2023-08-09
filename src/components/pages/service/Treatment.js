import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentInsurance, selectCurrentToken } from '../../../features/authReducer';
import { DefualtGet, Get } from '../../comman';
import UTable from '../../UTable';

function Treatment() {
   const token = useSelector(selectCurrentToken);
   const isInsurance = useSelector(selectCurrentInsurance);
   const [treatmentTypeData, setTreatmentTypeData] = useState([]);
   const [hicsServices, setHicsServices] = useState([]);
   const config = {
      headers: {},
      params: {
         type: 2
      }
   };

   const getTreatmentTypeData = async () => {
      const response = await Get('service/type', token, config);
      setTreatmentTypeData(response.data);
   };
   const getInsuranceService = async () => {
      const conf = {
         headers: {},
         params: {
            groupIds: '203,206,207,208'
         }
      };
      const response = await DefualtGet('insurance/hics-service', token, conf);
      setHicsServices(response.data);
   };
   useEffect(() => {
      getTreatmentTypeData();
      if (isInsurance) {
         getInsuranceService();
      }
   }, []);
   const column = [
      {
         index: 'treatmentTypeId',
         label: 'Эмчилгээний төрөл',
         isView: false,
         input: 'select',
         inputData: treatmentTypeData,
         relIndex: 'name',
         col: 21
      },
      {
         label: 'Эмчилгээний төрөл',
         isAdd: true,
         isView: false,
         index: 'name',
         type: 2,
         subInput: 'input',
         col: 3
      },
      {
         index: 'name',
         label: 'Нэр',
         isView: true,
         isSearch: true,
         input: 'input',
         col: 24
      },
      {
         index: 'isSlot',
         label: 'Цаг авах эсэх',
         isView: true,
         isSearch: false,
         input: 'switch',
         col: 8
      },
      {
         index: 'isInsurance',
         label: 'Даатгал',
         isView: true,
         isSearch: false,
         input: 'switch',
         col: 8
      },
      {
         index: 'isActive',
         label: 'Идэвхтэй эсэх',
         isView: true,
         isSearch: false,
         input: 'switch',
         col: 8
      },
      {
         index: 'insuranceServiceId',
         label: 'Даатгалтай бол үйлчилгээ сонгох',
         isView: true,
         isSearch: false,
         input: 'select',
         inputData: hicsServices,
         relIndex: 'name',
         col: 24
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
      <Row gutter={[8, 8]}>
         <Col span={24}>
            <UTable
               title={'Эмчилгээ'}
               url={'service/treatment'}
               column={column}
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
               refresh={getTreatmentTypeData}
               width="50%"
            />
         </Col>
      </Row>
   );
}
export default Treatment;
