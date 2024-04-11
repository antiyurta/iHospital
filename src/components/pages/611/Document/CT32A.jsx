import React, { useEffect, useState } from 'react';
import logo from '../../../../assets/logo/logo.png';
import dayjs from 'dayjs';
const CT32A = (props) => {
   const [formData, setFormData] = useState({});
   const [history, setHistory] = useState({});
   useEffect(() => {
      if (props?.data?.formData) {
         setFormData(props?.data?.formData);
      }
      if (props?.data?.history != null) {
         setHistory(props?.data?.history);
      }
      console.log('asdasd', props);
   }, [props]);
   return (
      <>
         <div className="page">
            <div className="subpage">
               <div>
                  <p className="text-end">Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны</p>
                  <p className="text-end">өдрийн А/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
                  <p className="font-bold text-end">Эрүүл мэндийн бүртгэлийн маягт СТ-32a</p>
               </div>
               <p className="font-bold text-center">
                  ЯАРАЛТАЙ ТУСЛАМЖИЙН ХУУДАС /НАСАНД ХҮРЭГЧИД/ №{history?.historyNumber}
               </p>
               <div className="flex flex-row gap-1 justify-between">
                  <p>Эмнэлгийн нэр:</p>
                  <p>Яаралтай тусламжийн тасагт ирсэн..........он......сар.....өдөр</p>
               </div>
            </div>
         </div>
      </>
   );
};
export default CT32A;
