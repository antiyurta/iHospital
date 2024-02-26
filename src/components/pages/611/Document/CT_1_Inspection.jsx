import dayjs from 'dayjs';
import React from 'react';
const CT1Inspection = (props) => {
   const {
      data: { formData }
   } = props;
   console.log(formData);
   return (
      <div className="page">
         <div className="subpage">
            <table className="table table-bordered text-xs">
               <thead>
                  <tr>
                     <th className="max-w-[36px] text-center">Үзлэг хийсэн өдөр, цаг, минут</th>
                     <th className="text-center">ҮЗЛЭГИЙН ТЭМДЭГЛЭЛ</th>
                     <th className="max-w-[70px] text-center">ЭМЧИЛГЭЭ, ХООЛ, СУВИЛГААНЫ ЗААЛТ</th>
                  </tr>
               </thead>
               <tbody>
                  {formData?.map((data, index) => (
                     <tr key={index}>
                        <td>
                           <p>{dayjs(data.createdAt).format('YYYY-MM-DD')}</p>
                           <p>{dayjs(data.createdAt).format('HH:mm')}</p>
                        </td>
                        <td>{data.data?.q1}</td>
                        <td>{data.data?.q2}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};
export default CT1Inspection;
