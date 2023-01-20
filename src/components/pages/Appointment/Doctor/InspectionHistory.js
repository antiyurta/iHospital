import { Card, Table } from 'antd';
import moment from 'moment';
import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, numberToCurrency, ScrollRef } from '../../../comman';
function InspectionHistory({ patientId }) {
   const scrollRef = useRef();
   const token = useSelector(selectCurrentToken);
   const [spinner, setSpinner] = useState(false);
   const [pays, setPays] = useState([]);
   useEffect(() => {
      ScrollRef(scrollRef);
   }, []);
   const getPayments = async () => {
      setSpinner(true);
      const conf = {
         headers: {},
         params: {
            patientId: patientId,
            isPay: true
         }
      };
      const response = await Get('payment/invoice', token, conf);
      setPays(response.data);
      setSpinner(false);
   };
   const columns = [
      {
         title: 'Огноо',
         dataIndex: 'updatedAt',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD');
         }
      },
      {
         title: 'Үйлчилгээний нэр',
         dataIndex: 'name'
      },
      {
         title: 'Төлбөр',
         dataIndex: 'amount',
         render: (text) => {
            return numberToCurrency(text);
         }
      }
   ];
   useEffect(() => {
      getPayments();
   }, [patientId]);
   return (
      <>
         <Card
            bordered={false}
            bodyStyle={{
               paddingTop: 0,
               paddingLeft: 1,
               paddingRight: 1,
               paddingBottom: 0,
               maxHeight: 150,
               minHeight: 150,
               height: 150
            }}
         >
            <Table
               className="scroll"
               scroll={{
                  y: 150
               }}
               columns={columns}
               dataSource={pays}
               pagination={null}
            />
         </Card>
      </>
   );
}
export default InspectionHistory;
