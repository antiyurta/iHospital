import React, { useEffect, useState } from 'react';
import { ConfigProvider, DatePicker, Input } from 'antd';
import locale from 'antd/es/locale/mn_MN';
import 'moment/locale/mn';
import Pagination from './pagination';
import moment from 'moment';
const { RangePicker } = DatePicker;

const ListFilter = ({ meta, appointmentsLength, getList, otherParams, children }) => {
   const today = new Date();
   const [rangePickerValue, setRangePickerValue] = useState([moment(), moment()]);
   const [start, setStart] = useState(new Date().toString());
   const [end, setEnd] = useState(new Date().toString());
   const [currentPage, setCurrentPage] = useState(1);
   const [currentLimit, setCurrentLimit] = useState(10);
   const get = (page, limit, start, end) => {
      const incomeStartDate = moment(new Date(start)).set('hour', 0).set('minute', 0).set('second', 0);
      const incomeEndDate = moment(new Date(end)).set('hour', 23).set('minute', 59).set('second', 59);
      setStart(incomeStartDate);
      setEnd(incomeEndDate);
      setCurrentPage(page);
      setCurrentLimit(limit);
      getList(page, limit, incomeStartDate.format(), incomeEndDate.format());
   };

   useEffect(() => {
      get(1, currentLimit, today, today);
   }, []);

   useEffect(() => {
      otherParams && get(currentPage, currentLimit, start, end);
   }, [otherParams]);

   return (
      <div className="ambo-list-filter">
         <div className="left">
            <button
               onClick={() => {
                  setRangePickerValue([moment(today), moment(today)]);
                  get(1, currentLimit, today, today);
               }}
            >
               Өнөөдөр
            </button>
            <button
               onClick={() => {
                  const first = new Date().setDate(today.getDate() - 7);
                  setRangePickerValue([moment(first), moment(today)]);
                  get(1, currentLimit, first, today);
               }}
            >
               7 хоног
            </button>
            <button
               onClick={() => {
                  const first = new Date().setMonth(today.getMonth() - 1);
                  setRangePickerValue([moment(first), moment(today)]);
                  get(1, currentLimit, first, today);
               }}
            >
               Сар
            </button>
            <ConfigProvider locale={locale}>
               <RangePicker
                  onChange={(e) => {
                     if (e != null) {
                        setRangePickerValue(e);
                        get(1, currentLimit, e[0], e[1]);
                     } else {
                        setRangePickerValue([]);
                        get(1, currentLimit, today, today);
                     }
                  }}
                  value={rangePickerValue}
               />
            </ConfigProvider>
            {children}
         </div>
         <div className="right">
            <Input placeholder="Хайх" />
            <Pagination
               meta={meta}
               page={meta.page}
               setPage={(page) => {
                  get(page, currentLimit, start, end);
               }}
               displayTotal={appointmentsLength}
               limit={meta?.limit}
               setLimit={(limit) => {
                  get(1, limit, start, end);
               }}
            />
         </div>
      </div>
   );
};
export default ListFilter;
