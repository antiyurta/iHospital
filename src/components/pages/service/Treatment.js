import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get } from '../../comman';
import UTable from '../../UTable';

function Treatment() {
   const token = useSelector(selectCurrentToken);
   const [treatmentTypeData, setTreatmentTypeData] = useState([]);

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

   useEffect(() => {
      getTreatmentTypeData();
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
         index: 'hasInsurance',
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
