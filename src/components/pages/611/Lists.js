import { Card, ConfigProvider, Table } from 'antd';
import React from 'react';

import { ReturnAll, ReturnByIdComponent } from './Document/Index';
import { localMn } from '../../comman';

function Lists() {
   const columns = [
      {
         title: 'Дугаар',
         dataIndex: 'label'
      },
      {
         title: 'Нэр',
         dataIndex: 'docName'
      },
      {
         title: '',
         dataIndex: 'value',
         render: (text) => {
            return <ReturnByIdComponent value={text} />;
         }
      }
   ];
   return (
      <Card bordered={false} className="header-solid max-h-max rounded-md" title="A611 Мягтын жагсаалт">
         <ConfigProvider locale={localMn()}>
            <Table
               rowKey={'value'}
               bordered
               columns={columns}
               dataSource={ReturnAll()}
               pagination={{
                  position: ['topCenter', 'bottomCenter'],
                  size: 'small',
                  pageSize: 50,
                  total: ReturnAll().length,
                  showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                  showSizeChanger: true,
                  pageSizeOptions: ['5', '10', '20', '50'],
                  showQuickJumper: true
               }}
            />
         </ConfigProvider>
      </Card>
   );
}
export default Lists;
