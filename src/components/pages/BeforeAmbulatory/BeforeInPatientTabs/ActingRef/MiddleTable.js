import { ReloadOutlined } from '@ant-design/icons';
import { Button, Card, Empty, Table } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../../features/authReducer';
import { Get } from '../../../../comman';
function MiddleTable({ typeId }) {
   const token = useSelector(selectCurrentToken);
   const [spinner, setSpinner] = useState(false);
   const [data, setData] = useState([]);
   const [meta, setMeta] = useState({});
   const getActing = async (page, pageSize, type) => {
      setSpinner(true);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            mt_type: type
         }
      };
      const response = await Get('finance/expense-header', token, conf);
      setData(response.data);
      setMeta(response.meta);
      setSpinner(false);
   };
   const columns = [
      {
         title: '№',
         dataIndex: 'id',
         render: (_, record, index) => {
            return index + 1;
         }
      },
      {
         title: 'Огноо',
         dataIndex: 'adate',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Тайлбар',
         dataIndex: 'descr'
      },
      {
         title: 'Материал / тоо',
         dataIndex: 'expenses',
         render: (text) => {
            return (
               <ul className="list-decimal list-inside grid grid-cols-5 gap-1">
                  {text.map((item, index) => {
                     return (
                        <li key={index} className="text-start">
                           {item.material?.m_name +
                              '/' +
                              item.tcount +
                              item.material?.xn}
                        </li>
                     );
                  })}
               </ul>
            );
         }
      }
   ];
   useEffect(() => {
      getActing(1, 10, typeId);
   }, [typeId]);
   return (
      <Card bordered={false} className="header-solid max-h-max rounded-md">
         <div className="flow-root p-2">
            <div className="float-right">
               <Button
                  title="Сэргээх"
                  type="primary"
                  onClick={() => getActing(1, 20, typeId)}
               >
                  <ReloadOutlined spin={spinner} />
               </Button>
            </div>
         </div>
         <Table
            bordered
            rowKey={(record) => record.mt_id}
            className="whitespace-pre-wrap"
            columns={columns}
            dataSource={data}
            locale={{ emptyText: <Empty description={'Хоосон'} /> }}
            loading={{
               spinning: spinner,
               tip: 'Уншиж байна...'
            }}
            pagination={{
               simple: true,
               pageSize: 10,
               total: meta.itemCount,
               current: meta.page,
               onChange: (page, pageSize) => getActing(page, pageSize, typeId)
            }}
         />
      </Card>
   );
}
export default MiddleTable;
