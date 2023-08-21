//Сувилагчийн тэмдэглэл
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get } from '../../comman';
import jwtInterceopter from '../../jwtInterceopter';

export default function NurseNote({ PatientId }) {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [data, setData] = useState([]);
   const getAssesments = async () => {
      await jwtInterceopter
         .get('document-middleware', {
            params: {
               patientId: PatientId
            }
         })
         .then((response) => {
            console.log(response);
         });
   };
   useEffect(() => {
      if (PatientId) {
         console.log(PatientId);
         getAssesment();
      }
   }, [PatientId]);

   useEffect(() => {
      getAssesments();
   }, []);

   const getAssesment = async (type) => {
      //Тухайн өвчтөн дээрх ЭМЧИЙН ТЭМДЭГЛЭЛҮҮД авах
      config.params.patientId = PatientId;
      const response = await Get('assesment', token, config);
      if (response.data.length != 0) {
         setData(response.data);
      } else {
         setData([]);
      }
   };
   return (
      <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
         <div className="p-3">asdsad</div>
         <table className="w-full">
            <tbody>
               <tr className="">
                  <th className="font-medium text-xs text-black text-center py-3.5">Огноо/цаг/</th>
                  <th className="font-medium text-xs text-black text-center border-x">Систол</th>
                  <th className="font-medium text-xs text-black text-center border-x">Диастол</th>
                  <th className="font-medium text-xs text-black text-center border-x">Жин</th>
                  <th className="font-medium text-xs text-black text-center border-x">Өндөр</th>
                  <th className="font-medium text-xs text-black text-center border-x">Халуун</th>
                  <th className="font-medium text-xs text-black text-center border-x">Амьсгал</th>
                  <th className="font-medium text-xs text-black text-center border-x">SpO'2</th>
                  <th className="font-medium text-xs text-black text-center border-x">Пульс</th>
                  <th className="font-medium text-xs text-black text-center border-x">
                     <div className="whitespace-normal">Ухаан санаа</div>
                  </th>
                  <th className="font-medium text-xs text-black text-center border-x">Сувилагч</th>
               </tr>
               {data &&
                  data.map((element, index) => (
                     <tr key={index} className="">
                        <td className="text-center ">
                           <p className="p-1 h-7 text-xs border rounded-md text-black">
                              {element.createdAt?.replace(/T/, ' ').replace(/\..+/, '')}
                           </p>
                        </td>
                        <td className="text-center ">
                           <p
                              className="p-1 h-7 text-xs border rounded-md text-black"
                              style={{
                                 backgroundColor: element.colorSystolews ?? '#fff'
                              }}
                           >
                              {element.highPressureRight}
                           </p>
                        </td>
                        <td className="text-center">
                           <p
                              className="p-1 h-7 text-xs border rounded-md text-black"
                              style={{ backgroundColor: '#C0C0C0' }}
                           >
                              {element.lowPressureRight}
                           </p>
                        </td>
                        <td className="text-center">
                           <p
                              className="p-1 h-7 text-xs border rounded-md text-black"
                              style={{ backgroundColor: '#C0C0C0' }}
                           >
                              {element.weight}
                           </p>
                        </td>
                        <td className="text-center">
                           <p
                              className="p-1 h-7 text-xs border rounded-md text-black"
                              style={{ backgroundColor: '#C0C0C0' }}
                           >
                              {element.height}
                           </p>
                        </td>
                        <td className="text-center">
                           <p
                              className="p-1 h-7 text-xs border rounded-md text-black"
                              style={{
                                 backgroundColor: element.colorTempews ?? '#fff'
                              }}
                           >
                              {element.temp}
                           </p>
                        </td>
                        <td className="text-center">
                           <p
                              className="p-1 h-7 text-xs border rounded-md text-black"
                              style={{
                                 backgroundColor: element.colorRespiratoryews ?? '#fff'
                              }}
                           >
                              {element.respiratoryRate}
                           </p>
                        </td>
                        <td className="text-center">
                           <p
                              className="p-1 h-7 text-xs border rounded-md text-black"
                              style={{
                                 backgroundColor: element.colorSpoews ?? '#fff'
                              }}
                           >
                              {element.spO2}
                           </p>
                        </td>
                        <td className="text-center">
                           <p
                              className="p-1 h-7 text-xs border rounded-md text-black"
                              style={{
                                 backgroundColor: element.colorPulsews ?? '#fff'
                              }}
                           >
                              {element.pulse}
                           </p>
                        </td>
                        <td className="text-center">
                           <p
                              className="p-1 h-7 text-xs border rounded-md text-black"
                              style={{
                                 backgroundColor: element.colorMindews ?? '#fff'
                              }}
                           >
                              {element.mind}
                           </p>
                        </td>
                        <td className="text-center">
                           <p className="p-1 h-7 text-xs border rounded-md text-black">{element.user?.email}</p>
                        </td>
                     </tr>
                  ))}
            </tbody>
         </table>
      </div>
   );
}
