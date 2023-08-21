import {
   CheckCircleOutlined,
   CloseCircleOutlined,
   EditOutlined,
   FolderOpenOutlined,
   FolderOutlined,
   PauseCircleOutlined,
   WarningOutlined
} from '@ant-design/icons';
import { Button, Collapse, Empty, Spin, Table } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectCurrentToken } from '../../../../../features/authReducer';
import { Get } from '../../../../comman';
import FullScreenLoader from '../../../../FullScreenLoader';
const { Panel } = Collapse;
function Requests() {
   const location = useLocation();
   const token = useSelector(selectCurrentToken);
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   //
   const [medicineData, setMedicineData] = useState([]);
   const [isLoadingMedicine, setIsLoadingMedicine] = useState(false);
   //
   const columns = [
      {
         title: 'Огноо',
         dataIndex: 'startAt',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD');
         }
      },
      {
         title: 'Захиалгын нэр',
         dataIndex: ['medicine', 'name']
      },
      {
         title: 'Тун',
         dataIndex: 'dose'
      },
      {
         title: 'Тайлбар',
         dataIndex: 'description'
      },
      {
         title: 'Хугацаа',
         dataIndex: 'dayCount'
      },
      {
         title: 'Төлөв'
      },
      {
         title: 'Сувилагч'
      }
   ];
   const getMedicineRequest = async () => {
      setIsLoading(true);
      const conf = {
         headers: {},
         params: {
            patientId: location.state?.patientId
         }
      };
      const response = await Get('service/inpatient-request', token, conf);
      if (response.data.length > 0) {
         var result = response.data.reduce(function (r, a) {
            //Оноор бүлэглэх
            r[a.createdAt.substring(0, 4)] = r[a.createdAt.substring(0, 4)] || [];
            r[a.createdAt.substring(0, 4)].push(a);
            return r;
         }, Object.create(null));
         setData(result);
      } else {
         setData([]);
      }
      setIsLoading(false);
   };
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
   const test = async (inpatientRequestId) => {
      if (inpatientRequestId != undefined) {
         setIsLoadingMedicine(true);
         const conf = {
            headers: {},
            params: {
               inpatientRequestId: inpatientRequestId
            }
         };
         const response = await Get('service/medicine-request', token, conf);
         setMedicineData(response.data);
         setIsLoadingMedicine(false);
      }
   };
   useEffect(() => {
      getMedicineRequest();
   }, []);
   if (isLoading) {
      return <FullScreenLoader full={false} />;
   }
   return (
      <div>
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
         <Spin spinning={isLoading} tip="Уншиж байна...">
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
                        <Collapse collapsible="header" accordion onChange={test}>
                           {value?.map((item, index) => {
                              return (
                                 <Panel
                                    header={
                                       <div className="row-auto text-white">
                                          <span className="font-bold">{item.structure?.name}</span>
                                          <span>&nbsp;</span>
                                          <span>{item.employee?.lastName}</span>
                                          <span>&nbsp;</span>
                                          <span>{item.employee?.firstName}</span>
                                          <span>&nbsp;</span>
                                          <span>{moment(item.createdAt).format('YYYY-MM-DD HH:mm')}</span>
                                       </div>
                                    }
                                    key={value[index].id}
                                    style={{
                                       background: checkColor(item?.severity)
                                    }}
                                 >
                                    <Table
                                       rowKey={'id'}
                                       scroll={{
                                          x: 150
                                       }}
                                       bordered
                                       dataSource={medicineData}
                                       columns={columns}
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
         </Spin>
      </div>
   );
}
export default Requests;
