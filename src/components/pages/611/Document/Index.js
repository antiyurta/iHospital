import { Select } from 'antd';
import React, { Suspense } from 'react';
const AM2B = React.lazy(() => import('./AM2B'));

const { Option } = Select;

export function ReturnById({ id }) {
   if (id === 1) {
      return (
         <Suspense fallback={'<div>Loading</div>'}>
            <AM2B />
         </Suspense>
      );
   }
}

export function ReturnDetails({ handleChange }) {
   const options = [
      {
         value: 1,
         label: 'AM2B'
      },
      {
         value: 2,
         label: 'AM2B'
      }
   ];
   return (
      <Select
         mode="multiple"
         style={{
            width: 300
         }}
         onChange={handleChange}
         filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
         }
         options={options}
      />
   );
}
