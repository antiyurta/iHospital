import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get } from '../../comman';
import UTable from '../../UTable';
import apiInsuranceService from '../../../services/healt-insurance/insurance';

function Xray() {
   const token = useSelector(selectCurrentToken);
   const [xrayTypeData, setXrayTypeData] = useState([]);
   const [devices, setDevices] = useState([]);
   const [hicsExams, setHicsExams] = useState([]);

   const config = {
      headers: {},
      params: {
         type: 1
      }
   };

   const getXrayTypeData = async () => {
      const response = await Get('reference-care-type', token, config);
      setXrayTypeData(response.data);
   };

   const getDevices = async () => {
      const response = await Get('device', token, {
         headers: {},
         // params: {
         //    deviceType: 0
         // }
      });
      setDevices(response.data);
   };
   const getHicsExams = async () => {
      await apiInsuranceService.getAllHicsExams().then(({ data }) => {
         if (data.success) {
            setHicsExams(data.response);
         }
      });
   };

   useEffect(() => {
      getDevices();
      getXrayTypeData();
      getHicsExams();
   }, []);
   const column = [
      {
         index: 'xrayTypeId',
         label: 'Оношилгооны төрөл',
         isView: false,
         input: 'select',
         inputData: xrayTypeData,
         relIndex: 'name',
         col: 21
      },
      {
         label: 'Оношилгоо төрөл',
         isAdd: true,
         isView: false,
         index: 'name',
         type: 1,
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
         index: 'deviceId',
         label: 'Төхөөрөмж сонгох',
         isView: true,
         isSearch: false,
         input: 'select',
         inputData: devices,
         relIndex: 'name',
         col: 24
      },
      {
         index: 'slotMinute',
         label: 'Үргэлжлэх хугацаа(МИН)',
         isView: true,
         isSearch: false,
         input: 'numberInput',
         col: 24
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
      <Row gutter={[8, 8]}>
         <Col span={24}>
            <UTable
               title={'Оношилгоо'}
               url={'service/xray'}
               column={column}
               isCreate={true}
               isRead={false}
               isUpdate={true}
               isDelete={true}
               refresh={getXrayTypeData}
               width="40%"
            />
         </Col>
      </Row>
   );
}
export default Xray;
