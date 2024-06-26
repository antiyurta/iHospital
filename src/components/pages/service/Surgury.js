import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import UTable from '../../UTable';
//api
import careTypeApi from '@ApiServices/reference/care-type.api';

function Surgery() {
   const [surgeryTypeData, setSurgeryTypeData] = useState([]);
   const getSurguryTypeData = async () => {
      await careTypeApi
         .get({
            params: {
               type: 3
            }
         })
         .then(({ data: { response } }) => {
            setSurgeryTypeData(response.data);
         });
   };

   useEffect(() => {
      getSurguryTypeData();
   }, []);

   const column = [
      {
         index: 'surgeryTypeId',
         label: 'Мэс засал төрөл',
         isView: false,
         input: 'select',
         inputData: surgeryTypeData,
         relIndex: 'name',
         col: 21
      },
      {
         label: 'Мэс засал төрөл',
         isAdd: true,
         isView: false,
         index: 'name',
         type: 3,
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
      <Row>
         <Col span={24}>
            <UTable
               title={'Мэс засал'}
               url={'service/surgery'}
               column={column}
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
               refresh={getSurguryTypeData}
               width="40%"
            />
         </Col>
      </Row>
   );
}
export default Surgery;
