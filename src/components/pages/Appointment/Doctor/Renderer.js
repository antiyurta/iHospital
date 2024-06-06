import React from 'react';
import { Empty, Spin, Table } from 'antd';

function RendererComponent(props) {
   const { loading, data, columns = [], rowKey, emptyText } = props;
   if (data === null) return <div>Иргэнд даатгалын түүх байхгүй</div>;
   return (
      <Spin spinning={loading}>
         <Table
            rowKey={rowKey}
            bordered
            scroll={{
               y: 200
            }}
            columns={columns}
            dataSource={data}
            pagination={false}
            locale={{ emptyText: <Empty description={emptyText || 'Хоосон'} /> }}
         />
      </Spin>
   );
}
export default RendererComponent;
