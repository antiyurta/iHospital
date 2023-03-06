import {
   CheckCircleOutlined,
   CloseCircleOutlined,
   EditOutlined,
   PauseCircleOutlined,
   WarningOutlined
} from '@ant-design/icons';
import { Button, Empty, Table } from 'antd';
import React, { useState } from 'react';

function Requests() {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const columns = [
      {
         title: 'Огноо'
      },
      {
         title: 'Захиалгын нэр'
      },
      {
         title: 'Хугацаа'
      },
      {
         title: 'Төлөв'
      },
      {
         title: 'Сувилагч'
      }
   ];
   return (
      <div className="flex flex-wrap">
         <div className="w-full p-1">
            <div className="flex float-left">
               <div
                  className="p-1 mr-1 text-sm text-white bg-[#818787] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-1">
                     <EditOutlined
                        style={{ marginTop: '-2px', marginRight: 4 }}
                     />
                     Төлөв сонгох
                  </span>
               </div>
               <div
                  className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-1">
                     <CheckCircleOutlined
                        style={{ marginTop: '-2px', marginRight: 4 }}
                     />
                     Хэрэгжүүлсэн
                  </span>
               </div>
               <div
                  className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-1">
                     <WarningOutlined
                        style={{ marginTop: '-2px', marginRight: 4 }}
                     />
                     Цуцалсан
                  </span>
               </div>
               <div
                  className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-1">
                     <CloseCircleOutlined
                        style={{ marginTop: '-2px', marginRight: 4 }}
                     />
                     Зогсоосон
                  </span>
               </div>
               <div
                  className="p-1 mx-1 text-sm text-white bg-[#5bc0de] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-2">
                     <PauseCircleOutlined
                        style={{ marginTop: '-2px', marginRight: 4 }}
                     />
                     Татгалзсан
                  </span>
               </div>
            </div>
            <div className="float-right">
               <Button
                  title="Сэргээх"
                  type="primary"
                  //   onClick={() => getMedicineRequests(1, 20, start, end)}
               >
                  {/* <ReloadOutlined spin={spinner} /> */}
               </Button>
            </div>
         </div>
         <div className="w-full p-1">
            <Table
               rowKey={'id'}
               bordered
               loading={{
                  spinning: isLoading,
                  tip: 'Уншиж байна...'
               }}
               locale={{ emptyText: <Empty description={'Хоосон'} /> }}
               columns={columns}
               dataSource={data}
            />
         </div>
      </div>
   );
}
export default Requests;
