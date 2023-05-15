import { FolderOpenOutlined, FolderOutlined } from '@ant-design/icons';
import { Collapse, Empty, Table } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';
import FullScreenLoader from '../../../FullScreenLoader';
const { Panel } = Collapse;
function IndexCollapse({ hookKey, hookParamName, url, data, column, setDataType }) {
   const token = useSelector(selectCurrentToken);
   const [panelData, setPanelData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
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
         >
            {Object.entries(data).map(([key, value], index) => {
               return (
                  <Panel header={`${key} Он`} key={index}>
                     <Collapse collapsible="header" accordion onChange={onChange}>
                        {value?.map((item, index) => {
                           return (
                              <Panel
                                 header={
                                    <div className="row-auto">
                                       <span className="font-bold">{item.structure?.name}</span>
                                       <span>&nbsp;</span>
                                       <span>{item.employee?.lastName}</span>
                                       <span>&nbsp;</span>
                                       <span>{item.employee?.firstName}</span>
                                       <span>&nbsp;</span>
                                       <span>{moment(item.createdAt).format('YYYY-MM-DD HH:mm')}</span>
                                    </div>
                                 }
                                 key={value[index][`${hookKey}`]}
                              >
                                 {isLoading ? (
                                    <FullScreenLoader full={false} />
                                 ) : (
                                    <div>
                                       <Table
                                          rowKey={'id'}
                                          bordered
                                          locale={{
                                             emptyText: <Empty description={'Хоосон'} />
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
