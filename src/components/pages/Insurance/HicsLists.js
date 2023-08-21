import { Button, Card, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, Post, numberToCurrency } from '../../comman';
import { ArrowRightOutlined } from '@ant-design/icons';

function HicsLists() {
   const today = new Date();
   const token = useSelector(selectCurrentToken);
   const [patientId, setPatientId] = useState(Number);
   const [lists, setLists] = useState([]);
   const [listDetail, setListDetail] = useState([]);
   const [selectedDetails, setSelectedDetails] = useState([]);
   const [isLoadingList, setIsLoadingList] = useState(false);
   const getLists = async (page, pageSize, start, end) => {
      setIsLoadingList(true);
      const conf = {
         headers: {},
         params: {
            // page: page,
            // limit: pageSize
         }
      };
      const response = await Get('pms/patient/insurance/payments', token, conf);
      setLists(response);
      setIsLoadingList(false);
   };
   const getDetails = async (patientId) => {
      setPatientId(patientId);
      const conf = {
         headers: {},
         params: {
            patientId: patientId
         }
      };
      const response = await Get('payment/payment', token, conf);
      setListDetail(response.data);
   };
   const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
         setSelectedDetails(selectedRows);
         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      }
   };

   const insuranceSent = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const data = {
         patientId: patientId,
         patientFingerprint: '',
         paymentIds: selectedDetails.map((item) => item.id)
      };
      const response = await Post('insurance/sent-payment', token, conf, data);
      console.log(response);
   };
   const listCol = [
      {
         title: 'Картын №',
         dataIndex: 'cardNumber'
      },
      {
         title: 'Овог',
         dataIndex: 'lastName'
      },
      {
         title: 'Нэр',
         dataIndex: 'firstName'
      },
      {
         title: 'Регистр №',
         dataIndex: 'registerNumber'
      },
      {
         title: 'Үйлдэл',
         dataIndex: 'id',
         render: (text) => {
            return (
               <ArrowRightOutlined
                  style={{
                     color: 'green'
                  }}
                  onClick={() => getDetails(text)}
               />
            );
         }
      }
   ];
   const detailCol = [
      {
         title: 'Нийт үнэ',
         dataIndex: 'totalAmount',
         render: (text) => {
            return numberToCurrency(text);
         }
      },
      {
         title: 'Даатгалын дүн',
         dataIndex: 'insuranceAmount',
         render: (text) => {
            return numberToCurrency(text);
         }
      },
      {
         title: 'Иргэн төлсөн дүн',
         dataIndex: 'paidAmount',
         render: (text) => {
            return numberToCurrency(text);
         }
      },
      {
         title: 'Үйлчилгээ',
         dataIndex: 'invoices',
         render: (text) => {
            return (
               <ul>
                  {text.map((item, index) => {
                     return <li key={index}>{item.name}</li>;
                  })}
               </ul>
            );
         }
      }
   ];
   useEffect(() => {
      getLists(1, 20, today, today);
   }, []);
   return (
      <div className="flex flex-wrap">
         <div className="basis-1/3 pr-1">
            <Card title="Жагсаалт" className="header-solid max-h-max rounded-md">
               <Table rowKey={'id'} bordered loading={isLoadingList} columns={listCol} dataSource={lists} />
            </Card>
         </div>
         <div className="basis-2/3 pl-1">
            <Card className="header-solid max-h-max rounded-md">
               <Table
                  rowKey={'id'}
                  rowSelection={rowSelection}
                  bordered
                  columns={detailCol}
                  dataSource={listDetail}
                  pagination={false}
                  footer={() => {
                     return <Button onClick={() => insuranceSent()}>Илгээх</Button>;
                  }}
               />
            </Card>
         </div>
      </div>
   );
}
export default HicsLists;
