import React, { useState, useEffect } from 'react';
import { ConfigProvider, Empty, Input, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
//enum
import { CARE_TYPE } from './care-enum';
//img
import addButtonIcon from './addButton.svg';
//comman
import { localMn, numberToCurrency } from '@Comman/common';
//api
import examinationApi from '@ApiServices/service/examination.api';
import xrayApi from '@ApiServices/service/xray.api';
import treatmentApi from '@ApiServices/service/treatment.api';
import surgeryApi from '@ApiServices/service/surgery.api';
import operationApi from '@ApiServices/service/operation.api';
//extends
const { Search } = Input;
/** Захиалгын тусламж үйлчилгээний  */
export const ListSupport = ({ careType, careTypeId, add }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [filterValue, setFilterValue] = useState();
   const [supports, setSupports] = useState([]);
   const [supMeta, setSupMeta] = useState({});

   const getData = async (page, limit, filter) => {
      setFilterValue(filter);
      setIsLoading(true);
      if (careType == CARE_TYPE.Examination) {
         await examinationApi
            .get({ examinationTypeId: careTypeId, isActive: true, page, limit, name: filter })
            .then(({ data }) => {
               setSupports(data.response.data);
               setSupMeta(data.response.meta);
            })
            .finally(() => {
               setIsLoading(false);
            });
      } else if (careType == CARE_TYPE.Xray) {
         await xrayApi
            .get({ xrayTypeId: careTypeId, isActive: true, page, limit, name: filter })
            .then(({ data }) => {
               setSupports(data.response.data);
               setSupMeta(data.response.meta);
            })
            .finally(() => setIsLoading(false));
      } else if (careType == CARE_TYPE.Treatment) {
         await treatmentApi
            .get({ treatmentTypeId: careTypeId, isActive: true, page, limit, name: filter })
            .then(({ data }) => {
               setSupports(data.response.data);
               setSupMeta(data.response.meta);
            })
            .finally(() => setIsLoading(false));
      } else if (careType == CARE_TYPE.Surgery) {
         await surgeryApi
            .get({ surgeryTypeId: careTypeId, isActive: true, page, limit, name: filter })
            .then(({ data }) => {
               setSupports(data.response.data);
               setSupMeta(data.response.meta);
            })
            .finally(() => setIsLoading(false));
      } else if (careType == CARE_TYPE.Operation) {
         await operationApi
            .get({ operationTypeId: careTypeId, isActive: true, page, limit, name: filter })
            .then(({ data }) => {
               setSupports(data.response.data);
               setSupMeta(data.response.meta);
            })
            .finally(() => setIsLoading(false));
      }
   };
   useEffect(() => {
      if (careTypeId != null) getData();
   }, [careType, careTypeId]);
   return (
      <div className="p-3">
         <Search
            className="mb-3"
            placeholder="Хайлт..."
            allowClear
            enterButton={
               <SearchOutlined
                  style={{
                     fontSize: 16,
                     color: 'white'
                  }}
               />
            }
            onSearch={(value) => {
               getData(1, 10, value);
            }}
         />
         <ConfigProvider locale={localMn()}>
            <Table
               rowKey={'id'}
               scroll={{
                  y: 400
               }}
               loading={isLoading}
               locale={{ emptyText: <Empty description={'Хоосон'} /> }}
               columns={[
                  {
                     title: '№',
                     width: 50,
                     className: 'font-bold',
                     render: (_text, _row, index) => {
                        return supMeta.page * supMeta.limit - (supMeta.limit - index - 1);
                     }
                  },
                  {
                     title: 'Нэр',
                     dataIndex: 'name',
                     align: 'left',
                     render: (text) => {
                        return <p className="whitespace-pre-wrap text-black">{text}</p>;
                     }
                  },
                  {
                     title: 'Үнэ',
                     dataIndex: 'price',
                     width: 100,
                     render: (text) => {
                        return numberToCurrency(text);
                     }
                  },
                  {
                     title: '',
                     width: 40,
                     render: (_text, row) => {
                        return (
                           <div onClick={() => add(row)} className="flex justify-center hover:cursor-pointer">
                              <img src={addButtonIcon} />
                           </div>
                        );
                     }
                  }
               ]}
               dataSource={supports}
               pagination={{
                  position: ['bottomCenter'],
                  size: 'small',
                  current: supMeta.page,
                  total: supMeta.itemCount,
                  showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                  pageSize: supMeta.limit,
                  showSizeChanger: true,
                  pageSizeOptions: ['5', '10', '20', '50'],
                  showQuickJumper: true,
                  onChange: (page, pageSize) => getData(page, pageSize, filterValue)
               }}
            />
         </ConfigProvider>
      </div>
   );
};
