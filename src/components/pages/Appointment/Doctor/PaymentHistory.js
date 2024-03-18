import React, { useEffect, useState } from 'react';
import { Empty, Table } from 'antd';
import { numberToCurrency } from '../../../comman';
import dayjs from 'dayjs';

import paymentApi from '../../../../services/payment/payment';

function PaymentHistory({ patientId }) {
   const [spinner, setSpinner] = useState(false);
   const [pays, setPays] = useState([]);
   const getPayments = async () => {
      setSpinner(true);
      await paymentApi
         .get({
            params: {
               patientId: patientId,
               isPay: true
            }
         })
         .then(({ data: { response } }) => {
            setPays(response.data);
         })
         .finally(() => {
            setSpinner(false);
         });
   };
   const columns = [
      {
         title: 'Огноо',
         dataIndex: 'updatedAt',
         className: 'whitespace-normal',
         render: (text) => {
            return dayjs(text).format('YYYY-MM-DD HH:mm');
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
               y: 100
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
