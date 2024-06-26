import React, { useEffect, useState } from 'react';
import { DatePicker, Input } from 'antd';
import Pagination from './pagination';
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;

const ListFilter = ({ meta, appointmentsLength, getList, otherParams, children }) => {
   const today = new Date();
   const [rangePickerValue, setRangePickerValue] = useState([dayjs(), dayjs()]);
   const [start, setStart] = useState(new Date().toString());
   const [end, setEnd] = useState(new Date().toString());
   const [currentPage, setCurrentPage] = useState(1);
   const [currentLimit, setCurrentLimit] = useState(10);
   const get = (page, limit, start, end) => {
      const incomeStartDate = dayjs(new Date(start)).set('hour', 0).set('minute', 0).set('second', 0);
      const incomeEndDate = dayjs(new Date(end)).set('hour', 23).set('minute', 59).set('second', 59);
      setStart(incomeStartDate);
      setEnd(incomeEndDate);
      setCurrentPage(page);
      setCurrentLimit(limit);
      if (meta) {
         getList(page, limit, incomeStartDate.format(), incomeEndDate.format());
      } else {
         getList(null, null, incomeStartDate.format(), incomeEndDate.format());
      }
   };

   useEffect(() => {
      get(currentPage, currentLimit, start, end);
   }, [otherParams]);

   return (
      <div className="ambo-list-filter">
         <div className="left">
            <button
               onClick={() => {
                  setRangePickerValue([dayjs(today), dayjs(today)]);
                  get(1, currentLimit, today, today);
               }}
            >
               Өнөөдөр
            </button>
            <button
               onClick={() => {
                  const first = new Date().setDate(today.getDate() - 7);
                  setRangePickerValue([dayjs(first), dayjs(today)]);
                  get(1, currentLimit, first, today);
               }}
            >
               7 хоног
            </button>
            <button
               onClick={() => {
                  const first = new Date().setMonth(today.getMonth() - 1);
                  setRangePickerValue([dayjs(first), dayjs(today)]);
                  get(1, currentLimit, first, today);
               }}
            >
               Сар
            </button>
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
            {children}
         </div>
         <div className="right">
            <Input placeholder="Хайх" />
            {meta ? (
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
            ) : null}
         </div>
      </div>
   );
};
export default ListFilter;
