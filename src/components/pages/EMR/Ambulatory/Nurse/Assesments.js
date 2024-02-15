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
         .then(({ data: { response } }) => {
            let data = [];
            console.log(response);
            // response.data.response?.map((item) => {
            //    data = item.data;
            // });
            setData(data);
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
               dataIndex: ['highPressureRight']
            },
            {
               title: 'Диастол',
               dataIndex: ['lowPressureRight']
            },
            {
               title: 'Жин',
               dataIndex: ['weight']
            },
            {
               title: 'Өндөр',
               dataIndex: ['height']
            },
            {
               title: 'Халуун',
               dataIndex: ['temp']
            },
            {
               title: 'Амьсгал',
               dataIndex: ['respiratoryRate']
            },
            {
               title: `SpO'2`,
               dataIndex: ['spO2']
            },
            {
               title: `Пульс`,
               dataIndex: ['pulse']
            },
            {
               title: 'Ухаан санаа',
               dataIndex: ['mind']
            }
         ]
      },
      {
         title: 'Сувилагч',
         dataIndex: 'createdByName',
         render: (text) => {
            return `${text.lastName?.substring(0, 1)}.${text.firstName}`;
         }
      }
   ];
   useEffect(() => {
      getAssesments();
   }, []);
   return (
      <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
         <div className="p-3">
            <Table
               rowKey={'_id'}
               bordered
               loading={isLoading}
               columns={columns}
               dataSource={data}
               pagination={false}
               scroll={{
                  x: 1000
               }}
            />
         </div>
      </div>
   );
}
export default Assesments;
