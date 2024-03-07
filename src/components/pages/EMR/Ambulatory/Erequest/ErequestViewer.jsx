import { ArrowLeftOutlined } from '@ant-design/icons';
import { PageHeader, Table } from 'antd';
import React from 'react';
const ErequestViewer = () => {
   return (
      <div className="erequest-viewer">
         <div className="erequest-viewer-top">
            <ArrowLeftOutlined />
            <span>Буцах</span>
         </div>
         <Table
            scroll={{
               x: 400
            }}
            columns={[
               {
                  title: '№',
                  width: 50,
                  fixed: 'left'
               },
               {
                  title: 'Шинжилгээний нэр',
                  width: 150,
                  fixed: 'left'
               },
               {
                  title: 'Элемент ',
                  width: 90,
                  fixed: 'left'
               },
               {
                  title: 'Лавлах хэмжээ',
                  width: 120,
                  fixed: 'left'
               },
               {
                  title: 'Нэгж',
                  width: 50,
                  fixed: 'left'
               },
               {
                  title: '2021/04/28 - 00:34'
               },
               {
                  title: '2021/04/28 - 00:34'
               },
               {
                  title: '2021/04/28 - 00:34'
               },
               {
                  title: '2021/04/28 - 00:34'
               }
            ]}
            pagination={false}
            dataSource={[{ name: 1 }, { name: 1 }, { name: 1 }]}
         />
      </div>
   );
};
export default ErequestViewer;
