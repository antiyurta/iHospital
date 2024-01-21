import React, { useContext, useEffect } from 'react';
import EmrContext from '../../../../features/EmrContext';
import { Table } from 'antd';
import dayjs from 'dayjs';
import { formatNameForDoc } from '../../../comman';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusCircleOutlined } from '@ant-design/icons';

const SetOrderTable = (props) => {
   const { type, orders, handleClickAdd, handleClickEdit } = props;
   const { setPublicSetOrderCount, setPrivateSetOrderCount } = useContext(EmrContext);
   useEffect(() => {
      if (type === 0) {
         const length = orders?.filter((order) => order.setOrderType === 0)?.length;
         setPublicSetOrderCount(length || 0);
      } else if (type === 1) {
         const length = orders?.filter((order) => order.setOrderType === 1)?.length;
         setPrivateSetOrderCount(length || 0);
      }
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
               dataIndex: 'icdCode'
            },
            {
               title: 'Тайлбар',
               dataIndex: 'description'
            },
            {
               title: ' ',
               render: (_, row) => {
                  return (
                     <div className="flex flex-row gap-3 justify-center">
                        <EyeOutlined className="text-blue-600" />
                        <EditOutlined onClick={() => handleClickEdit(row)} className="text-green-600" />
                        <DeleteOutlined className="text-red-600" />
                     </div>
                  );
               }
            }
         ]}
         dataSource={orders?.filter((order) => order.setOrderType === type)}
         pagination={false}
         footer={() => {
            return (
               <div className="set-order-add-button">
                  <button
                     onClick={() => {
                        handleClickAdd();
                     }}
                  >
                     <PlusCircleOutlined />
                     Сэт-Ордер нэмэх
                  </button>
               </div>
            );
         }}
      />
   );
};
export default SetOrderTable;
