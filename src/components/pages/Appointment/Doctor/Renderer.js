import React from 'react';
import { Empty, Spin, Table } from 'antd';
const renderText = (text) => <p className="whitespace-normal text-black pl-2 line-clamp-2 truncate">{text}</p>;

function RendererComponent(props) {
   const { loading, data, columns = [], rowKey, emptyText, isModal = false } = props;

   const isColumns = columns.map((cols) => ({
      ...cols,
      ...(!isModal &&
         !['createdAt', 'createdDate', 'updatedAt'].includes(cols.dataIndex || '') && { render: renderText })
   }));

   if (!data) return <div>Иргэнд даатгалын түүх байхгүй</div>;
   return (
      <Spin spinning={loading}>
         <Table
            rowKey={rowKey}
            bordered
            scroll={{
               y: isModal ? 640 : 110
            }}
            columns={isColumns}
            dataSource={data}
            pagination={false}
            locale={{ emptyText: <Empty description={emptyText || 'Хоосон'} /> }}
         />
      </Spin>
   );
}
export default RendererComponent;
