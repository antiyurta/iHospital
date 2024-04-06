import React, { useState } from 'react';
import { Button, Result } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
//comp
import UrgentIndex from './UrgentIndex';

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
         {currentInspection === 'first' ? <UrgentIndex type={'first'} handleClick={handleClick} /> : null}
         {currentInspection === 'last' ? <UrgentIndex type={'last'} handleClick={handleClick} /> : null}
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
