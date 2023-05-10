import { FolderOpenOutlined, FolderOutlined } from '@ant-design/icons';
import { Button, Card, Collapse, Modal, Table } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';
import Index from './document/Index';
import IndexCollapse from './IndexCollapse';
const { Panel } = Collapse;
function InPatientNotes({ inpatientRequests }) {
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
         const response = await Get('service/inPatient-request/show/' + id, token, conf);
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
      <IndexCollapse
         hookKey="id"
         hookParamName={null}
         url={'service/inPatient-request/show/'}
         data={inpatientRequests}
         column={column}
         setDataType="dailyNotes"
      />
   );
}
export default InPatientNotes;
