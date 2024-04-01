import React, { useState } from 'react';
import { Button, Result, Spin } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
//comp
import First from './First';
import Last from './Last';

const UrgentDocument = ({ handleClick }) => {
   const [currentInspection, setInspection] = useState(null);

   return (
      <div className="flex flex-col gap-2 h-full">
         <div>
            {currentInspection != null ? (
               <Button
                  type="primary"
                  icon={<RollbackOutlined />}
                  onClick={() => {
                     setInspection(null);
                  }}
               >
                  Буцах төлөв солих
               </Button>
            ) : null}
         </div>
         {currentInspection === 'first' ? <First handleClick={handleClick} /> : null}
         {currentInspection === 'last' ? <Last /> : null}
         {currentInspection === null ? (
            <Result
               className="bg-[#eff4fa] h-full rounded-xl"
               title="Төрөл сонгох"
               extra={
                  <div className="flex flex-row gap-3 justify-center">
                     <Button
                        type="primary"
                        onClick={() => {
                           setInspection('first');
                        }}
                     >
                        Анхан
                     </Button>
                     <Button
                        type="primary"
                        onClick={() => {
                           setInspection('last');
                        }}
                     >
                        Шийдвэрлэсэн
                     </Button>
                  </div>
               }
            />
         ) : null}
      </div>
   );
};
export default UrgentDocument;
