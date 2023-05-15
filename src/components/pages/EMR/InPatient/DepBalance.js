import { Card, Empty, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { DefualtGet, Get } from '../../../comman';
const { Option } = Select;
function DepBalance() {
   const token = useSelector(selectCurrentToken);
   const [fDepartments, setFDepartments] = useState([]);
   const [filterStatus, setFilterStatus] = useState('');
   const [list, setList] = useState([]);
   const [loading, setLoading] = useState(false);
   const column = [
      {
         title: 'Нэр',
         dataIndex: 'm_name'
      },
      {
         title: 'Тоо',
         dataIndex: 'countC2'
      },
      {
         title: 'нэгж',
         dataIndex: 'ratecode'
      }
   ];
   const getDepartments = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get('finance/department', token, conf);
      setFDepartments(response.data);
   };
   const getDepartmentsBalance = async (e) => {
      setLoading(true);
      const conf = {
         headers: {},
         params: {}
      };
      const response = await DefualtGet('finance/department-material/' + e, token, conf);
      setList(response);
      setLoading(false);
   };
   useEffect(() => {
      getDepartments();
   }, []);
   return (
      <Card title={'Тасагын үлдэгдэл'} bordered={false} className="header-solid max-h-max rounded-md">
         <div className="flex flex-wrap">
            <div className="w-full p-1">
               <Select
                  style={{ width: 200 }}
                  onChange={(e) => {
                     setFilterStatus(e);
                     getDepartmentsBalance(e);
                  }}
               >
                  {fDepartments?.map((dep, index) => {
                     return (
                        <Option key={index} value={dep.dep_id}>
                           {dep.dep_name}
                        </Option>
                     );
                  })}
               </Select>
            </div>
            <div className="w-full p-1">
               <Table
                  rowKey={'m_id'}
                  bordered
                  loading={{
                     spinning: loading,
                     tip: 'Уншиж байна...'
                  }}
                  locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                  columns={column}
                  dataSource={list}
                  pagination={{
                     simple: true,
                     pageSize: 20
                  }}
               />
            </div>
         </div>
      </Card>
   );
}
export default DepBalance;
