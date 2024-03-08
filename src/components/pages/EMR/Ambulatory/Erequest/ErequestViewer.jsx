import React, { useEffect, useState } from 'react';
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import { Badge, Button, ConfigProvider, DatePicker, Table } from 'antd';
import locale from 'antd/es/locale/mn_MN';
import dayjs from 'dayjs';

import ErequestApi from '../../../../../services/service/service';

const { RangePicker } = DatePicker;

const exampleCols = [
   {
      title: '№',
      width: 30,
      fixed: 'left',
      render: (_, record, index) => {
         if (record.rowSpan != 0) {
            return index + 1;
         }
         return;
      },
      onCell: (record) => ({
         rowSpan: record.rowSpan
      })
   },
   {
      title: 'Шинжилгээний нэр',
      width: 150,
      fixed: 'left',
      dataIndex: 'name',
      render: (name, record) => {
         if (record.rowSpan != 0) {
            return name;
         }
      },
      onCell: (record) => ({
         rowSpan: record.rowSpan
      })
   },
   {
      title: 'Элемент',
      width: 90,
      fixed: 'left',
      dataIndex: 'parameterName'
   },
   {
      title: 'Лавлах хэмжээ',
      width: 120,
      fixed: 'left',
      dataIndex: 'units'
   },
   {
      title: 'Нэгж',
      width: 50,
      fixed: 'left',
      dataIndex: 'measurement'
   }
];

const colRender = ({ value, HL, PN }) => {
   if (PN != null) {
      if (PN == 'P') {
         return `(+) positive`;
      }
      return `(-) negative`;
   } else {
      if (HL === 'N') {
         return (
            <div className="flex flex-row gap-1 justify-center">
               {value}
               <Badge count={HL} showZero color="green" />
            </div>
         );
      } else if (HL === 'L') {
         return (
            <div className="flex flex-row gap-1 justify-center">
               {value}
               <Badge count={HL} showZero color="red" />
            </div>
         );
      } else if (HL === 'H') {
         return (
            <div className="flex flex-row gap-1 justify-center">
               {value}
               <Badge count={HL} showZero color="yellow" />
            </div>
         );
      }
   }
};

const ErequestViewer = ({ patientId, setDisplayType }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState([]);
   const [colums, setColumns] = useState(exampleCols);
   const getResultForExamination = async () => {
      setIsLoading(true);
      await ErequestApi.getResultForExamination({
         patientId: patientId
      })
         .then(({ data: { response } }) => {
            var newColumns = [];
            var newData = [];
            var count = 0;
            response.data?.map((item) => {
               const result = item.result;
               newColumns.push({
                  title: dayjs(item.createdAt).format('YYYY/MM/DD HH:mm'),
                  width: 120,
                  dataIndex: `${item.createdAt}`,
                  render: (createdAt) => {
                     if (createdAt) {
                        return colRender({
                           value: createdAt.value,
                           HL: createdAt.HL,
                           PN: createdAt.PN
                        });
                     }
                     return;
                  }
               });
               Object.entries(result)?.map(([_key, value]) => {
                  value?.map((el, index) => {
                     newData.push({
                        rowKey: count,
                        name: value[0]?.careTypeName,
                        parameterName: el.parameterName,
                        rowSpan: index === 0 ? value?.length : 0,
                        measurement: el.measurement,
                        units: `${el.low}~${el.high}`,
                        [`${item.createdAt}`]: {
                           value: el.value,
                           HL: el.HL,
                           PN: el.PN
                        }
                     });
                     count += 1;
                  });
               });
            });
            setData(newData);
            console.log('dasd', newData);
            setColumns([...exampleCols, ...newColumns]);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   useEffect(() => {
      getResultForExamination();
   }, [patientId]);

   return (
      <div className="erequest-viewer">
         <div className="erequest-viewer-top">
            <div
               className="flex flex-row gap-2 items-center hover:cursor-pointer"
               onClick={() => {
                  setDisplayType('LIST');
               }}
            >
               <ArrowLeftOutlined />
               <span>Буцах</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
               <ConfigProvider locale={locale}>
                  <RangePicker
                     style={{
                        width: 230
                     }}
                  />
               </ConfigProvider>
               <Button type="primary" icon={<SearchOutlined />}>
                  Шүүх
               </Button>
            </div>
         </div>
         <Table
            rowKey="rowKey"
            loading={isLoading}
            bordered
            scroll={{
               x: 400
            }}
            columns={colums}
            pagination={false}
            dataSource={data}
         />
      </div>
   );
};
export default ErequestViewer;
