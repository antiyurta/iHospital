import React, { useEffect } from 'react';
import { Card, Table } from 'antd';
import jwtInterceopter from '../../jwtInterceopter';

function Dashboard() {
   const columns = [
      {
         title: 'Овог/Нэр'
      },
      {
         title: 'Тасаг'
      },
      {
         title: 'Мэдээгүйжүүлгийн эмч'
      },
      {
         title: 'Мэс заслын эмч'
      },
      {
         title: 'Эхэлсэн цаг'
      },
      {
         title: 'Дууссан цаг'
      },
      {
         title: 'Үргэлжилсэн хугацаа'
      },
      {
         title: 'Өрөө'
      },
      {
         title: 'Төлөв'
      }
   ];
   const getStats = async () => {
      await jwtInterceopter.get('tasks/stat/dashboard').then((response) => {
         console.log(response);
      });
   };
   useEffect(() => {
      getStats();
   }, []);
   return (
      <div>
         <Card title="Мэс заслын хуваарь" bordered={false}>
            <Table rowKey={'id'} columns={columns} dataSource={[]} />
         </Card>
      </div>
   );
}
export default Dashboard;
