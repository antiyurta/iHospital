import { ClockCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const EmrTimer = (props) => {
   const { startDate } = props;
   const [count, setCount] = useState(0);
   const [time, setTime] = useState('00:00');
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
     }, []);
   return (
      <div className="emr-timer">
         <p>Үзлэгийн хугацаа</p>
         <p className="timer">{time}</p>
         <p>{`${dayjs(startDate).format('YYYY/MM/DD hh:mm')} эхэлсэн`}</p>
         <Button
            danger
            icon={
               <ClockCircleOutlined
                  style={{
                     fontWeight: 700
                  }}
               />
            }
         >
            Үзлэг дуусах
         </Button>
      </div>
   );
};
export default EmrTimer;
