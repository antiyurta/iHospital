import { Card, Checkbox, Radio } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { Table } from 'react-bootstrap';
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
         <div
            className="table-responsive"
            id="style-8"
            style={{ maxHeight: '150px' }}
         >
            <Table className="ant-border-space" style={{ width: '100%' }}>
               <thead className="ant-table-thead bg-slate-200">
                  <tr>
                     <th className="font-bold text-sm align-middle">Огноо</th>
                     <th className="font-bold text-sm align-middle">Нэр</th>
                     <th className="font-bold text-sm align-middle">Төлбөр</th>
                  </tr>
               </thead>
               <tbody className="ant-table-tbody">
                  {pays.map((pay, index) => {
                     return (
                        <tr
                           className="ant-table-row ant-table-row-level-0"
                           key={index}
                        >
                           <td>{moment(pay.updateAt).format('YYYY-MM-DD')}</td>
                           <td>{pay.name}</td>
                           <td>{numberToCurrency(pay.amount)}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </Table>
         </div>
      </>
   );
}
export default PaymentHistory;
