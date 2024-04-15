import React, { useEffect, useState } from 'react';
import { ConfigProvider, DatePicker, Input } from 'antd';
import locale from 'antd/es/locale/mn_MN';
import 'moment/locale/mn';
import Pagination from './pagination';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const ListFilter = (props) => {
   const today = new Date();
   const { meta, appointmentsLength, selectedTags, getList } = props;
   const [rangePickerValue, setRangePickerValue] = useState([]);
   const [start, setStart] = useState(new Date().toString());
   const [end, setEnd] = useState(new Date().toString());
   const [currentPage, setCurrentPage] = useState(1);
   const [currentLimit, setCurrentLimit] = useState(10);
   const get = (page, limit, start, end, proccess) => {
      const incomeStartDate = dayjs(start).set('hour', 0).set('minute', 0).set('second', 0);
      const incomeEndDate = dayjs(end).set('hour', 23).set('minute', 59).set('second', 59);
      setStart(incomeStartDate);
      setEnd(incomeEndDate);
      setCurrentPage(page);
      setCurrentLimit(limit);
      getList(page, limit, incomeStartDate, incomeEndDate, proccess);
   };

   useEffect(() => {
      get(1, currentLimit, today, today, selectedTags);
   }, []);

   return (
      <div className="ambo-list-filter">
         <div className="left">
            <button
               onClick={() => {
                  setRangePickerValue([]);
                  get(1, currentLimit, today, today, selectedTags);
               }}
            >
               Өнөөдөр
            </button>
            <button
               onClick={() => {
                  const last = new Date();
                  last.setDate(last.getDate() - 7);
                  setRangePickerValue([]);
                  get(1, currentLimit, last, today, selectedTags);
               }}
            >
               7 хоног
            </button>
            <button
               onClick={() => {
                  const last = new Date();
                  last.setMonth(last.getMonth() - 1);
                  setRangePickerValue([]);
                  get(1, currentLimit, last, today, selectedTags);
               }}
            >
               Сар
            </button>
            <ConfigProvider locale={locale}>
               <RangePicker
                  onChange={(e) => {
                     if (e != null) {
                        setRangePickerValue(e);
                        get(1, currentLimit, e[0], e[1], selectedTags);
                     } else {
                        setRangePickerValue([]);
                     }
                  }}
                  value={rangePickerValue}
               />
            </ConfigProvider>
         </div>
         <div className="right">
            <Input placeholder="Хайх" />
            <Pagination
               meta={meta}
               page={meta.page}
               setPage={(page) => {
                  get(page, currentLimit, start, end, selectedTags);
               }}
               displayTotal={appointmentsLength}
               limit={meta?.limit}
               setLimit={(limit) => {
                  get(1, limit, start, end, selectedTags);
               }}
            />
         </div>
      </div>
   );
};
export default ListFilter;
