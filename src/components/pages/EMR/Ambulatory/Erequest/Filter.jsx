import React from 'react';
import { ConfigProvider, DatePicker } from 'antd';
import locale from 'antd/es/locale/mn_MN';

const { RangePicker } = DatePicker;

const Filter = () => {
   return (
      <div className="erequest-filter">
         <button>Өнөөдөр</button>
         <button>Долоо хоног</button>
         <button>Сар</button>
         <ConfigProvider locale={locale}>
            <RangePicker
               style={{
                  width: 200,
                  minHeight: 32
               }}
            />
         </ConfigProvider>
      </div>
   );
};
export default Filter;
