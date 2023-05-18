import React, { useEffect, useState } from 'react';
import jwtInterceopter from '../../jwtInterceopter';
import { Card, ConfigProvider, Modal, Progress, Table } from 'antd';
import { localMn } from '../../comman';
import { CheckCircleOutlined, ExclamationCircleOutlined, EyeOutlined } from '@ant-design/icons';
import MonitorCriteria from './MonitorCriteria';

function InsuranceDocterList() {
   const [data, setData] = useState([]);
   const [meta, setMeta] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   //
   const [monitorData, setMonitorData] = useState({});
   //
   const getList = async (page, pageSize) => {
      setIsLoading(true);
      const config = {
         params: {
            page: page,
            limit: pageSize
         }
      };
      jwtInterceopter
         .get('insurance-seal', config)
         .then((response) => {
            setData(response.data.response.data);
            setMeta(response.data.response.meta);
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
         title: 'Хувь',
         dataIndex: 'gpa'
      },
      {
         title: '',
         render: (_text, row) => {
            return <MonitorCriteria props={{ serviceId: row.serviceId, serviceType: row.serviceType }} />;
         }
      }
   ];
   useEffect(() => {
      getList(1, 10);
   }, []);
   return (
      <>
         <Card title="Жагсаалт">
            <ConfigProvider locale={localMn()}>
               <Table
                  rowKey={'id'}
                  bordered
                  loading={isLoading}
                  columns={columns}
                  dataSource={data}
                  pagination={{
                     position: ['bottomCenter', 'topCenter'],
                     size: 'small',
                     current: meta.page,
                     total: meta.itemCount,
                     showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                     pageSize: meta.limit,
                     showSizeChanger: true,
                     pageSizeOptions: ['5', '10', '20', '50'],
                     showQuickJumper: true,
                     onChange: (page, pageSize) => getList(page, pageSize)
                  }}
               />
            </ConfigProvider>
         </Card>
      </>
   );
}
export default InsuranceDocterList;
