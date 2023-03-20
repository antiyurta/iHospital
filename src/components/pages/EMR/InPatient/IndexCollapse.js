import { FolderOpenOutlined, FolderOutlined } from '@ant-design/icons';
import { Collapse, Empty, Table } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';
import FullScreenLoader from '../../../FullScreenLoader';
const { Panel } = Collapse;
function IndexCollapse({
   hookKey,
   hookParamName,
   url,
   data,
   column,
   setDataType
}) {
   const token = useSelector(selectCurrentToken);
   const [panelData, setPanelData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const checkColor = (severity) => {
      if (severity === 0) {
         return '#dd4b39';
      } else if (severity === 1) {
         return '#f0ad4e';
      } else if (severity === 2) {
         return '#5bc0de';
      } else if (severity === 3) {
         return '#5cb85c';
      }
   };
   const onChange = async (id) => {
      if (id != undefined) {
         setIsLoading(true);
         const conf = {
            headers: {},
            params: {}
         };
         if (hookParamName != null) {
            conf.params[`${hookParamName}`] = id;
         } else {
            url += id;
         }
         const response = await Get(url, token, conf);
         if (setDataType) {
            setPanelData(response[`${setDataType}`]);
         } else {
            setPanelData(response.data);
         }
         setIsLoading(false);
      }
   };
   return (
      <>
         <div className="flex">
            <div
               className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800"
               role="alert"
            >
               <span className="font-medium mx-1">Маш хүнд</span>
            </div>
            <div
               className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800"
               role="alert"
            >
               <span className="font-medium mx-1">Хүндэвтэр</span>
            </div>
            <div
               className="p-1 mx-1 text-sm text-white bg-[#5bc0de] rounded-lg dark:bg-blue-200 dark:text-blue-800"
               role="alert"
            >
               <span className="font-medium mx-1">Дунд</span>
            </div>
            <div
               className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800"
               role="alert"
            >
               <span className="font-medium mx-1">Хөнгөн</span>
            </div>
         </div>
         <Collapse
            collapsible="header"
            expandIcon={({ isActive }) => {
               return isActive ? (
                  <FolderOpenOutlined style={{ fontSize: '24px' }} />
               ) : (
                  <FolderOutlined style={{ fontSize: '24px' }} />
               );
            }}
            ghost
            accordion
            // style={{
            //    borderRight: '1px solid',
            //    borderBottom: '1px solid',
            //    borderLeft: '1px solid',
            //    borderRadius: '5px'
            // }}
         >
            {Object.entries(data).map(([key, value], index) => {
               return (
                  <Panel header={`${key} Он`} key={index}>
                     <Collapse
                        collapsible="header"
                        accordion
                        onChange={onChange}
                     >
                        {value?.map((item, index) => {
                           return (
                              <Panel
                                 header={
                                    <div className="row-auto text-white">
                                       <span className="font-bold">
                                          {item.structure?.name}
                                       </span>
                                       <span>&nbsp;</span>
                                       <span>{item.employee?.lastName}</span>
                                       <span>&nbsp;</span>
                                       <span>{item.employee?.firstName}</span>
                                       <span>&nbsp;</span>
                                       <span>
                                          {moment(item.createdAt).format(
                                             'YYYY-MM-DD HH:mm'
                                          )}
                                       </span>
                                    </div>
                                 }
                                 key={value[index][`${hookKey}`]}
                                 style={{
                                    background: checkColor(item?.severity)
                                 }}
                              >
                                 {isLoading ? (
                                    <FullScreenLoader full={false} />
                                 ) : (
                                    <div>
                                       <Table
                                          rowKey={'id'}
                                          bordered
                                          locale={{
                                             emptyText: (
                                                <Empty description={'Хоосон'} />
                                             )
                                          }}
                                          columns={column}
                                          dataSource={panelData}
                                          pagination={false}
                                       />
                                    </div>
                                 )}
                              </Panel>
                           );
                        })}
                     </Collapse>
                  </Panel>
               );
            })}
         </Collapse>
      </>
   );
}
export default IndexCollapse;
