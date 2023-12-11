import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import React, { useEffect, useState } from 'react';

const Pagination = (props) => {
   const { meta, page, setPage, displayTotal, limit, setLimit } = props;
   const [range, setRange] = useState([]);
   useEffect(() => {
      const cloneRange = [];
      cloneRange[0] = (page - 1) * limit + 1;
      cloneRange[1] = (page - 1) * limit + displayTotal;
      setRange(cloneRange);
   }, [displayTotal]);
   return (
      <div className="pagi-list">
         <p>{`${range[0]}-ээс ${range[1]} / Нийт ${meta?.itemCount}`}</p>
         <div className="pager">
            <Button
               disabled={!meta?.hasPreviousPage}
               icon={<LeftOutlined />}
               onClick={() => {
                  setPage(page - 1);
               }}
            />
            <span
               style={{
                  fontWeight: 400,
                  fontSize: 16
               }}
            >
               {page}
            </span>
            <Button
               disabled={!meta?.hasNextPage}
               icon={<RightOutlined />}
               onClick={() => {
                  setPage(page + 1);
               }}
            />
         </div>
         <Select
            style={{
               border: 'none',
               width: 120
            }}
            onSelect={(value) => {
               setLimit(value);
               setPage(1);
            }}
            value={limit}
            options={[
               {
                  label: '10/Хуудас',
                  value: 10
               },
               {
                  label: '20/Хуудас',
                  value: 20
               },
               {
                  label: '30/Хуудас',
                  value: 30
               }
            ]}
         />
      </div>
   );
};
export default Pagination;
