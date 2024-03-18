import React, { useEffect, useState } from 'react';
import { openNofi } from '../../../comman';
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
         .then((response) => {
            if (response.data.code === 200 && response.data.result != null) {
               openNofi('success', 'Амжилттай', response.data.description);
               setData(response.data.result);
            } else {
               openNofi('info', 'Мэдээлэл', response.data.description);
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
            dataSource={data.details}
            pagination={false}
         />
      </Spin>
   );
}
export default InsuranceHistory;
