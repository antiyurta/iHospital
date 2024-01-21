import React from 'react';
const Doc3 = (props) => {
   const { data, body } = props;
   const AnswerExoOilt = (keyWord) => {
      if (keyWord === 'q2-1') return 'Хэвийн';
      return;
   };
   return (
      <div>
         {body}
         <p className="text-center py-1">Бамбай булчирхайн хэт авиан оношилгоо</p>
         <p className="flex gap-1 font-bold">
            Баруун дэлбэн:<span className="font-normal">{`Урт ${data['q1-1']} cм,`}</span>
            <span className="font-normal">{`Өргөн ${data['q1-2']} cм,`}</span>
            <span className="font-normal">{`өмнөд-арийн хэмжээ ${data['q1-2']} cм`}</span>
         </p>
         <p className="flex gap-1 font-bold">
            Эхо ойлт:<span className="font-normal">{`Урт ${data['q1-1']} cм,`}</span>
            <span className="font-normal">{`Өргөн ${data['q1-2']} cм,`}</span>
            <span className="font-normal">{`өмнөд-арийн хэмжээ ${data['q1-2']} cм`}</span>
         </p>
      </div>
   );
};
export default Doc3;
