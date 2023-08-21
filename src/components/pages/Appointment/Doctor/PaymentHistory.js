import React from 'react';
import { Empty, Table } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, numberToCurrency, ScrollRef } from '../../../comman';

function PaymentHistory({ patientId }) {
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
         className: 'whitespace-normal',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Үйлчилгээний нэр',
         dataIndex: 'name',
         className: 'whitespace-normal text-black',
         render: (text) => {
            return <p className="whitespace-normal text-black">{text}</p>;
         }
      },
      {
         title: 'Төлбөр',
         dataIndex: 'amount',
         className: 'whitespace-normal',
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
         <Table
            rowKey={'id'}
            bordered
            loading={{
               spinning: spinner,
               tip: 'Уншиж байна...'
            }}
            scroll={{
               y: 150
            }}
            locale={{ emptyText: <Empty description={'Хоосон'} /> }}
            columns={columns}
            dataSource={pays}
            pagination={false}
         />
      </>
   );
}
export default PaymentHistory;
