import React, { useEffect, useState } from 'react';
import { Card, ConfigProvider, DatePicker, Input, Segmented, Select } from 'antd';
import locale from 'antd/es/locale/mn_MN';
import examinationProcess from '../examinationProcess';
import dayjs from 'dayjs';
const { Search } = Input;
const { RangePicker } = DatePicker;

//service
import OrganizationStructureServices from '../../../../services/organization/structure';

const FilterTypeEmum = {
   none: 'none',
   today: 'TODAY',
   week: 'WEEK',
   month: 'MONTH',
   range: 'RANGE'
};

const UsageTypeEnum = {
   in: 'IN',
   out: 'OUT'
};

const FilterIndex = (props) => {
   const { getList, isRefresh } = props;
   const today = new Date();
   const [currentDepId, setCurrentDepId] = useState({});
   const [currentType, setCurrentType] = useState(null);
   const [currentSearchValue, setCurrentSearchValue] = useState(null);
   const [activeKeyButton, setActiveKeyButton] = useState(FilterTypeEmum.today);
   const [currentSegmentValue, setCurrentSegmentValue] = useState('ORDER');
   const [currentPage, setCurrentPage] = useState(1);
   const [currentLimit, setCurrentLimit] = useState(10);
   const [currentStartDate, setCurrentStartDate] = useState(dayjs(new Date()));
   const [currentEndDate, setCurrentEndDate] = useState(dayjs(new Date()));
   const [departments, setDepartments] = useState([]);
   const get = (page, limit, startDate, endDate, process, depId, type, searchValue, buttonType) => {
      var newStartDate = null;
      var newEndDate = null;
      if (buttonType != FilterTypeEmum.none) {
         newStartDate = dayjs(startDate).set('hour', 0).set('minute', 0).set('second', 0);
         setCurrentStartDate(newStartDate);
         newEndDate = dayjs(endDate).set('hour', 23).set('minute', 59).set('second', 59);
         setCurrentEndDate(newEndDate);
      }
      getList(page, limit, newStartDate, newEndDate, process, depId, type, searchValue);
   };
   const getDepartments = async () => {
      await OrganizationStructureServices.get({
         params: {
            types: '0,2'
         }
      }).then(({ data: { response } }) => {
         setDepartments(response.data);
      });
   };
   useEffect(() => {
      get(
         currentPage,
         currentLimit,
         currentStartDate,
         currentEndDate,
         currentSegmentValue,
         currentDepId,
         currentType,
         currentSearchValue,
         activeKeyButton
      );
   }, [currentSegmentValue, currentDepId, currentType, currentSearchValue, isRefresh]);

   useEffect(() => {
      getDepartments();
   }, []);
   return (
      <div className="flex flex-col gap-3">
         <Card
            bordered={false}
            bodyStyle={{
               padding: 7
            }}
            className="header-solid max-h-max rounded-md"
         >
            <Segmented
               className="department-bed-segment text-black"
               size="small"
               value={currentSegmentValue}
               options={examinationProcess.map((el) => ({ label: el.label, value: el.value, icon: null }))}
               onChange={(value) => {
                  setCurrentSegmentValue(value);
               }}
            />
         </Card>
         <div className="erequest">
            <button
               className={activeKeyButton === FilterTypeEmum.today ? 'filter active' : 'filter'}
               onClick={(event) => {
                  if (activeKeyButton === FilterTypeEmum.today) {
                     setActiveKeyButton(FilterTypeEmum.none);
                     get(
                        1,
                        10,
                        today,
                        today,
                        currentSegmentValue,
                        currentDepId,
                        currentType,
                        currentSearchValue,
                        FilterTypeEmum.none
                     );
                  } else {
                     setActiveKeyButton(FilterTypeEmum.today);
                     get(
                        1,
                        10,
                        today,
                        today,
                        currentSegmentValue,
                        currentDepId,
                        currentType,
                        currentSearchValue,
                        FilterTypeEmum.today
                     );
                  }
                  event.preventDefault();
               }}
            >
               Өнөөдөр
            </button>
            <button
               className={activeKeyButton === FilterTypeEmum.week ? 'filter active' : 'filter'}
               onClick={(event) => {
                  const last = new Date();
                  last.setDate(last.getDate() - 7);
                  if (activeKeyButton === FilterTypeEmum.week) {
                     setActiveKeyButton(FilterTypeEmum.none);
                     get(
                        1,
                        10,
                        last,
                        today,
                        currentSegmentValue,
                        currentDepId,
                        currentType,
                        currentSearchValue,
                        FilterTypeEmum.none
                     );
                  } else {
                     setActiveKeyButton(FilterTypeEmum.week);
                     get(
                        1,
                        10,
                        last,
                        today,
                        currentSegmentValue,
                        currentDepId,
                        currentType,
                        currentSearchValue,
                        FilterTypeEmum.week
                     );
                  }
                  event.preventDefault();
               }}
            >
               Долоо хоног
            </button>
            <button
               className={activeKeyButton === FilterTypeEmum.month ? 'filter active' : 'filter'}
               onClick={(event) => {
                  const last = new Date();
                  last.setMonth(last.getMonth() - 1);
                  if (activeKeyButton === FilterTypeEmum.month) {
                     setActiveKeyButton(FilterTypeEmum.none);
                     get(
                        1,
                        10,
                        last,
                        today,
                        currentSegmentValue,
                        currentDepId,
                        currentType,
                        currentSearchValue,
                        FilterTypeEmum.none
                     );
                  } else {
                     setActiveKeyButton(FilterTypeEmum.month);
                     get(
                        1,
                        10,
                        last,
                        today,
                        currentSegmentValue,
                        currentDepId,
                        currentType,
                        currentSearchValue,
                        FilterTypeEmum.month
                     );
                  }
                  event.preventDefault();
               }}
            >
               Сар
            </button>
            <ConfigProvider locale={locale}>
               <RangePicker
                  className={activeKeyButton === FilterTypeEmum.range ? 'range-picker active' : 'range-picker'}
                  onChange={(e) => {
                     if (e != null) {
                        setActiveKeyButton(FilterTypeEmum.range);
                        get(1, 10, e[0], e[1], currentSegmentValue, currentDepId, currentType, currentSearchValue);
                     } else {
                        setActiveKeyButton(FilterTypeEmum.today);
                        get(1, 10, today, today, currentSegmentValue, currentDepId, currentType, currentSearchValue);
                     }
                  }}
               />
            </ConfigProvider>
            <Select
               allowClear
               placeholder="Тасаг"
               style={{
                  width: 200
               }}
               onClear={() => {
                  setCurrentDepId(null);
               }}
               onSelect={(id) => {
                  setCurrentDepId(id);
               }}
               options={departments.map((department) => ({
                  value: department.id,
                  label: department.name
               }))}
            />
            <Select
               allowClear
               style={{
                  width: 200
               }}
               onClear={() => {
                  setCurrentType(null);
               }}
               onSelect={(value) => {
                  setCurrentType(value);
               }}
               placeholder="Төлөв"
               options={[
                  {
                     label: 'Хэвтэн',
                     value: UsageTypeEnum.in
                  },
                  {
                     label: 'Амбулатори',
                     value: UsageTypeEnum.out
                  }
               ]}
            />
            <Search
               allowClear
               style={{
                  width: 250
               }}
               placeholder="Хайх"
               enterButton
               onSearch={(value) => {
                  setCurrentSearchValue(value);
               }}
            />
         </div>
      </div>
   );
};
export default FilterIndex;
