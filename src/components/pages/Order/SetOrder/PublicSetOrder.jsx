import React, { useContext, useEffect } from 'react';
import EmrContext from '../../../../features/EmrContext';
import { Table } from 'antd';
import dayjs from 'dayjs';
import { formatNameForDoc } from '../../../comman';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

const PublicSetOrder = (props) => {
   const { orders } = props;
   const { setPublicSetOrderCount } = useContext(EmrContext);
   useEffect(() => {
      setPublicSetOrderCount(orders?.length || 0);
   }, [orders]);
   return (
      <Table
         rowKey="id"
         columns={[
            {
               title: '№',
               width: 50,
               render: (_, _row, rowIndex) => rowIndex + 1
            },
            {
               title: 'Тасгийн нэр',
               dataIndex: ['structure', 'name']
            },
            {
               title: 'Огноо',
               dataIndex: 'createdAt',
               render: (createdAt) => dayjs(createdAt).format('YYYY/MM/DD')
            },
            {
               title: 'Эмчийн нэр',
               render: (_, row) => formatNameForDoc(row?.createdLastName, row?.createdFirstName)
            },
            {
               title: 'Онош',
               dataIndex: 'code'
            },
            {
               title: 'Тайлбар',
               dataIndex: 'description'
            },
            {
               title: ' ',
               render: () => {
                  return (
                     <div className="flex flex-row gap-3 justify-center">
                        <EyeOutlined className="text-blue-600" />
                        <EditOutlined className="text-green-600" />
                        <DeleteOutlined className="text-red-600" />
                     </div>
                  );
               }
            }
         ]}
         dataSource={orders}
         pagination={false}
      />
   );
};
export default PublicSetOrder;
