import React, { useEffect, useState } from 'react';
import { openNofi } from '../../../common';
import { Spin, Table } from 'antd';
import HealthInsuranceApi from '../../../../services/healt-insurance/healtInsurance';
import { useSelector } from 'react-redux';
import { selectCurrentInsurance } from '../../../../features/authReducer';
import dayjs from 'dayjs';

function InsuranceHistory(props) {
   const { registerNumber, isFull } = props;
   const isInsurance = useSelector(selectCurrentInsurance);
   const [data, setData] = useState(null);
   const [isLoading, setIsloading] = useState(false);
   const getData = async () => {
      setIsloading(true);
      await HealthInsuranceApi.getPatientData(registerNumber)
         .then(({ data }) => {
            if (data.code === 200 && data.result != null) {
               openNofi('success', 'Амжилттай', data.description);
               setData(data.result?.details?.sort((a, b) => a.outDateStr - b.outDateStr));
            } else {
               openNofi('info', 'Мэдээлэл', data.description);
            }
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsloading(false);
         });
   };
   useEffect(() => {
      if (registerNumber && isInsurance) {
         getData();
      }
   }, [registerNumber]);
   if (data === null) {
      return <div>Иргэнд даатгалын түүх байхгүй</div>;
   }
   return (
      <Spin spinning={isLoading}>
         <Table
            rowKey={'serviceNumber'}
            bordered
            scroll={{
               y: 100
            }}
            columns={[
               {
                  title: 'Огноо',
                  dataIndex: 'createdDate',
                  width: 100,
                  render: (text) => {
                     return dayjs(text).format('YYYY-MM-DD');
                  }
               },
               {
                  title: 'Эмнэлэг',
                  dataIndex: 'hospitalName',
                  render: (text) => {
                     return <p className="whitespace-normal text-black">{text}</p>;
                  }
               },
               {
                  title: 'Үйлчилгээний нэр',
                  dataIndex: 'serviceName',
                  render: (text) => {
                     return <p className="whitespace-normal text-black">{text}</p>;
                  }
               },
               {
                  title: 'Төлөв',
                  dataIndex: 'status',
                  render: (text) => {
                     return <p className="whitespace-normal text-black">{text}</p>;
                  }
               }
            ]}
            dataSource={data}
            pagination={false}
         />
      </Spin>
   );
}
export default InsuranceHistory;
