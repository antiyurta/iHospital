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
   const [activeKey, setActiveKey] = useState(1);
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
            r[a.createdAt.substring(0, 4)] = r[a.createdAt.substring(0, 4)] || [];
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
   const buttonItems = [
      {
         label: 'Шинжилгээний хариу',
         key: 1,
         children: <ComingSoon />
      },
      {
         label: 'Дүрс оношилгоо',
         key: 2,
         children: <ComingSoon />
      },
      {
         label: 'Эмийн эмчилгээ',
         key: 3,
         children: <ComingSoon />
      },
      {
         label: 'Эмийн бус эмчилгээ',
         key: 4,
         children: <ComingSoon />
      },
      {
         label: 'Мэс засал',
         key: 5,
         children: <ComingSoon />
      },
      {
         label: 'Мэдээгүйжүүлэг',
         key: 6,
         children: <ComingSoon />
      },
      {
         label: 'Эмчийн тэмдэглэл',
         key: 7,
         children: <ComingSoon />
      },
      {
         label: 'Сувилгааны тэмдэглэл',
         key: 8,
         children: <ComingSoon />
      }
   ];
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
   return (
      <div className="inpatient-history-filter">
         <div className="filters">
            {buttonItems?.map((buttonItem) => (
               <button
                  key={buttonItem.key}
                  className={activeKey === buttonItem.key ? 'active' : ''}
                  onClick={() => {
                     console.log(buttonItem.key);
                     setActiveKey(buttonItem.key);
                  }}
               >
                  {buttonItem.label}
               </button>
            ))}
         </div>
         <div>{buttonItems[activeKey - 1].children}</div>
      </div>
   );
}
export default MainInPatient;
