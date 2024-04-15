import React, { useEffect, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';

const Pagination = (props) => {
   const { meta, page, setPage, displayTotal, limit, setLimit } = props;
   const [range, setRange] = useState([]);
   useEffect(() => {
      const cloneRange = [];
      cloneRange[0] = (page - 1) * limit + 1;
      cloneRange[1] = (page - 1) * limit + displayTotal;
      setRange(cloneRange);
   }, [meta]);
   return (
      <div className="pagi-list">
         <p>{`${range[0]}-ээс ${range[1]} / Нийт ${meta?.itemCount || 0}`}</p>
         <div className="pager">
            <Button
               disabled={!meta?.hasPreviousPage}
               icon={<LeftOutlined />}
               onClick={() => {
                  setPage(page - 1);
               }}
            />
            <span className="font-normal text-base">{page}</span>
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
