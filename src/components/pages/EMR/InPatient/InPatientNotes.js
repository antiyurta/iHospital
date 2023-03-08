import { FolderOpenOutlined, FolderOutlined } from '@ant-design/icons';
import { Button, Card, Collapse, Modal, Table } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';
import Index from './document/Index';
const { Panel } = Collapse;
function InPatientNotes({ Appointments }) {
   const token = useSelector(selectCurrentToken);
   const [dailyNotes, setDailyNotes] = useState([]);
   const [loading, setLoading] = useState(false);
   const onChangee = async (id) => {
      if (id) {
         setLoading(true);
         const conf = {
            headers: {},
            params: {}
         };
         const response = await Get(
            'service/inPatient-request/show/' + id,
            token,
            conf
         );
         if (response.dailyNotes?.length > 0) {
            setDailyNotes(response.dailyNotes);
         } else {
            setDailyNotes([]);
         }
         setLoading(false);
      }
   };
   const column = [
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Үзлэгийн тэмдэгэлэл',
         dataIndex: 'description'
      }
   ];
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
         >
            {Object.entries(Appointments).map(([key, value], index) => {
               return (
                  <Panel header={`${key} Он`} key={index}>
                     <Collapse
                        Collapse
                        collapsible="header"
                        onChange={onChangee}
                        accordion
                     >
                        {value.map((el, index) => {
                           return (
                              <Panel
                                 header={
                                    <div className="inline-flex">
                                       <span>
                                          {moment(el.createdAt).format(
                                             'YYYY-MM-DD HH:mm'
                                          )}
                                       </span>
                                       <p className="pl-2 font-extrabold">
                                          {el.structure?.name}
                                       </p>
                                    </div>
                                 }
                                 key={value[index].id}
                              >
                                 <Table
                                    rowKey={'id'}
                                    bordered
                                    loading={loading}
                                    columns={column}
                                    dataSource={dailyNotes}
                                    pagination={false}
                                 />
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
export default InPatientNotes;
