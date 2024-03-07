import React, { useEffect, useState } from 'react';
import ErequestViewer from './ErequestViewer';
import Filter from './Filter';
import { Button, Table } from 'antd';
import { EyeOutlined, PrinterOutlined } from '@ant-design/icons';

const DisplayTypeEnum = {
   list: 'LIST',
   DESC: 'DESC'
};

import ErequestApi from '../../../../../services/service/service';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../../features/emrReducer';
import dayjs from 'dayjs';
import { formatNameForDoc } from '../../../../comman';

const ErequestList = () => {
   const IncomeEMRData = useSelector(selectCurrentEmrData);
   const [displayType, setDisplayType] = useState(DisplayTypeEnum.list);
   const [isLoading, setIsLoading] = useState(false);
   const [erequests, setErequests] = useState([]);

   const getErequests = async () => {
      setIsLoading(true);
      ErequestApi.getInfoForEmr({
         params: {
            patientId: IncomeEMRData.patientId
         }
      })
         .then(({ data: { response } }) => {
            setErequests(
               response.data?.map((item, index) => ({
                  index: index,
                  ...item
               }))
            );
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   useEffect(() => {
      getErequests();
   }, []);

   return (
      <div
         style={{
            height: 'calc(100% - 110px)'
         }}
      >
         {displayType === DisplayTypeEnum.DESC ? <ErequestViewer /> : null}
         {displayType === DisplayTypeEnum.list ? (
            <div className="erequest-list">
               <div className="erequest-top">
                  <Filter />
                  <Button
                     type="primary"
                     onClick={() => {
                        setDisplayType(DisplayTypeEnum.DESC);
                     }}
                  >
                     Дэлгэрэнгүй
                  </Button>
               </div>
               <Table
                  rowKey="index"
                  loading={isLoading}
                  columns={[
                     {
                        title: '№',
                        dataIndex: 'index',
                        render: (index) => index + 1
                     },
                     {
                        title: 'Шинжилгээний нэр',
                        dataIndex: 'name'
                     },
                     {
                        title: 'Огноо',
                        dataIndex: 'created_at',
                        render: (created_at) => dayjs(created_at).format('YYYY/MM/DD HH:mm')
                     },
                     {
                        title: 'Захиалсан',
                        render: (_, row) => formatNameForDoc(row.createdLastName, row.createdFirstName)
                     },
                     {
                        title: 'Үйлдэл',
                        dataIndex: 'id',
                        render: (id) => (
                           <p className="flex flex-row gap-2 justify-center">
                              <EyeOutlined className="text-blue-500" />
                              <PrinterOutlined className="text-green-500" />
                           </p>
                        )
                     }
                  ]}
                  dataSource={erequests}
               />
            </div>
         ) : null}
      </div>
   );
};
export default ErequestList;
