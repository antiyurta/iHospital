import React, { useEffect, useState } from 'react';
import moment from 'moment';
const Clock = ({ startDate, endDate, isDisable }) => {
   const [time, setTime] = useState('00:00');
   const [count, setCount] = useState(0);
   const showTimer = (ms) => {
      const second = Math.floor((ms / 1000) % 60)
         .toString()
         .padStart(2, '0');
      const minute = Math.floor((ms / 1000 / 60) % 60)
         .toString()
         .padStart(2, '0');
      setTime(minute + ':' + second);
   };
   useEffect(() => {
      const startMoment = moment(startDate);
      const endMoment = moment();
      const differenceInMinutes = endMoment.diff(startMoment, 'minutes');
      if (differenceInMinutes >= 10) {
         isDisable(false);
      }
   }, [time]);
   useEffect(() => {
      if (!endDate) {
         var id = setInterval(() => {
            var left = count + (new Date() - new Date(startDate));
            setCount(left);
            showTimer(left);
            if (left <= 0) {
               setTime('00:00');
               clearInterval(id);
            }
         }, 1);
         return () => clearInterval(id);
      } else {
         const date1 = new Date(startDate);
         const date2 = new Date(endDate);
         const diff = date2 - date1;
         const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((diff % (1000 * 60)) / 1000);
         setTime(`${minutes}:${seconds}`);
      }
   }, []);

   return <p className="timer">{time}</p>;
};
export default Clock;
