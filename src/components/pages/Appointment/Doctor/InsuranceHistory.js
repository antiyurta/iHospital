import React, { useEffect, useState } from 'react';
import { openNofi } from '../../../comman';
import jwtInterceopter from '../../../jwtInterceopter';
import { Spin, Table } from 'antd';
import moment from 'moment';
function InsuranceHistory(props) {
   const { registerNumber, isFull } = props;
   const [data, setData] = useState(null);
   const [isLoading, setIsloading] = useState(false);
   const getData = async () => {
      setIsloading(true);
      await jwtInterceopter
         .get('health-insurance/patient-data/' + registerNumber)
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
      if (registerNumber) {
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
                     return moment(text).format('YYYY-MM-DD');
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
