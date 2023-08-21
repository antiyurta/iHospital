import { Tag } from 'antd';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import EarlyWarning from '../../BeforeAmbulatory/EarlyWarning';
import Requests from './NursingStats/Requests';

const { CheckableTag } = Tag;
function NursingStats() {
   let location = useLocation();
   let state = location?.state;
   const [section, setSection] = useState(1);
   const onChange = (id) => {
      setSection(id);
   };
   const items = [
      {
         label: 'Захиалгын хэрэгжүүлэлт',
         key: 1,
         children: <Requests />
      },
      {
         label: 'Амин үзүүлэлт',
         key: 2,
         children: (
            <EarlyWarning
               PatientId={state?.patientId}
               UsageType={'IN'}
               ListId={state?.usageType === 'OUT' ? state?.appointmentId : state?.inpatientRequestId}
               isDoctor={true}
            />
         )
      },
      {
         label: 'Шингэний баланс',
         key: 3
      },
      {
         label: 'Өвдөлтийн үнэлгээ',
         key: 4
      },
      {
         label: 'Хоол тэжээл',
         key: 5
      },
      {
         label: 'Сувилахуйн тэмдэглэл',
         key: 6
      }
   ];
   const Render = () => {
      if (section != 0) {
         return <div className="p-2">{items[section - 1].children}</div>;
      }
   };
   return (
      <div>
         <div className="bg-[#1890ff] checkTag">
            {items.map((item, index) => {
               return (
                  <CheckableTag
                     key={index}
                     checked={section === item.key}
                     onChange={() => {
                        onChange(item.key);
                     }}
                     className="text-white m-1"
                  >
                     {item.label}
                  </CheckableTag>
               );
            })}
         </div>
         <div className="pt-1">
            <Render />
         </div>
      </div>
   );
}
export default NursingStats;
