import React from 'react';
import { Result } from 'antd';

export default function NotFound() {
   return (
      <>
         <Result
            status={404}
            title="404"
            subTitle="Уучлаарай, таны зочилсон хуудас байхгүй байна."
         />
      </>
   );
}
