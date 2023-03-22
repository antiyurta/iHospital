import { Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';
import FullScreenLoader from '../../../FullScreenLoader';
import Anemiz from './Anemiz';
import ComingSoon from './ComingSoon';
import InPatient from './InPatient';
import InPatientNotes from './InPatientNotes';
import MedicineList from './MedicineList';
import NursingStats from './NursingStats';
const { CheckableTag } = Tag;
function MainInPatient({ patientId }) {
   const token = useSelector(selectCurrentToken);
   const [checkedKey, setCheckedKey] = useState(1);
   const [isLoading, setIsLoading] = useState(false);
   const [inpatientRequests, setInpatientRequests] = useState([]);
   const getInpatienRequests = async () => {
      setIsLoading(true);
      const conf = {
         headers: {},
         params: {
            patientId: patientId
         }
      };
      const response = await Get('service/inpatient-request', token, conf);
      if (response.data.length > 0) {
         var result = response.data.reduce(function (r, a) {
            //Оноор бүлэглэх
            r[a.createdAt.substring(0, 4)] =
               r[a.createdAt.substring(0, 4)] || [];
            r[a.createdAt.substring(0, 4)].push(a);
            return r;
         }, Object.create(null));
         setInpatientRequests(result);
      } else {
         setInpatientRequests([]);
      }
      setIsLoading(false);
   };
   useEffect(() => {
      getInpatienRequests();
   }, [patientId]);
   const items = [
      {
         label: 'Анамнез',
         key: 1,
         children: <Anemiz inpatientRequests={inpatientRequests} />
      },
      {
         label: 'Хэвтэх үед',
         key: 2,
         children: <InPatient inpatientRequests={inpatientRequests} />
      },
      {
         label: 'Өдрийн тэмдэглэл',
         key: 3,
         children: <InPatientNotes inpatientRequests={inpatientRequests} />
      },
      {
         label: 'Жижүүр эмчийн тэмдэглэл',
         key: 4,
         children: <ComingSoon />
      },
      {
         label: 'Гарах, шилжих үеийн тэмдэглэл',
         key: 5,
         children: <ComingSoon />
      },
      {
         label: 'Мэс засал',
         key: 6,
         children: <ComingSoon />
      },
      {
         label: 'Дүрс оношилгоо',
         key: 7,
         children: <ComingSoon />
      },
      {
         label: 'Эмийн эмчилгээ',
         key: 8,
         children: <MedicineList inpatientRequests={inpatientRequests} />
      },
      {
         label: 'Мэдээгүйжүүлэг',
         key: 9,
         children: <ComingSoon />
      },
      {
         label: 'Шинжилгээний хариу',
         key: 10,
         children: <ComingSoon />
      },
      {
         label: 'Эмийн бус эмчилгээ',
         key: 11,
         children: <ComingSoon />
      },
      {
         label: 'Сувилгааны тэмдэглэл',
         key: 12,
         children: <NursingStats />
      }
   ];
   const onChange = (key) => {
      setCheckedKey(key);
   };
   const Render = () => {
      if (checkedKey != 0) {
         return <div className="p-2">{items[checkedKey - 1].children}</div>;
      }
   };
   useEffect(() => {
      setIsLoading(true);
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
   }, [checkedKey]);
   return (
      <div>
         <div className="bg-[#1890ff] checkTag">
            {items.map((item, index) => {
               return (
                  <CheckableTag
                     key={index}
                     checked={checkedKey === item.key}
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
            {isLoading ? <FullScreenLoader full={false} /> : <Render />}
         </div>
      </div>
   );
}
export default MainInPatient;
