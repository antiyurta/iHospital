import React, { useEffect, useState } from 'react';
import jwtInterceopter from '../../../../jwtInterceopter';
import { Table } from 'antd';
import moment from 'moment';

function Assesments(props) {
   const { patientId } = props;
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState([]);
   const getAssesments = async () => {
      setIsLoading(true);
      await jwtInterceopter
         .get('document-middleware', {
            params: {
               documentId: 87,
               patientId: patientId,
               usageType: 'OUT'
            }
         })
         .then((response) => {
            setData(response.data.response);
            console.log(response);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const columns = [
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (text) => {
            return moment(text).format('YYYY/MM/DD HH:mm');
         }
      },
      {
         title: 'Амин үзүүлэлт',
         children: [
            {
               title: 'Систол',
               dataIndex: ['data', 'highPressureRight']
            },
            {
               title: 'Диастол',
               dataIndex: ['data', 'lowPressureRight']
            },
            {
               title: 'Жин',
               dataIndex: ['data', 'weight']
            },
            {
               title: 'Өндөр',
               dataIndex: ['data', 'height']
            },
            {
               title: 'Халуун',
               dataIndex: ['data', 'temp']
            },
            {
               title: 'Амьсгал',
               dataIndex: ['data', 'respiratoryRate']
            },
            {
               title: `SpO'2`,
               dataIndex: ['data', 'spO2']
            },
            {
               title: `Пульс`,
               dataIndex: ['data', 'pulse']
            },
            {
               title: 'Ухаан санаа',
               dataIndex: ['data', 'mind']
            }
         ]
      },
      {
         title: 'Сувилагч'
      }
   ];
   useEffect(() => {
      getAssesments();
   }, []);
   return (
      <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
         <div className="p-3">
            <Table rowKey={'_id'} bordered loading={isLoading} columns={columns} dataSource={data} pagination={false} />
         </div>
      </div>
   );
}
export default Assesments;
