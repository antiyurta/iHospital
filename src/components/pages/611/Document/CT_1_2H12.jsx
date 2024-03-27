import React, { useEffect, useState } from 'react';
import { formatNameForDoc, getAge, getGenderInType } from '../../../common';
import dayjs from 'dayjs';
function CT_1_2H12(props) {
   const {
      data: { formData }
   } = props;
   const [chunks, setChunks] = useState();
   function sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
         const chunk = arr.slice(i, i + chunkSize);
         res.push(chunk);
      }
      console.log('rararar', res);
      return res;
   }
   useEffect(() => {
      setChunks(sliceIntoChunks(formData, 4));
   }, [formData]);
   return (
      <>
         {chunks?.map((chunk, index) => (
            <div key={index} className="page">
               <div className="subpage h-full">
                  <div className="flow-root">
                     <p className="float-right" style={{ fontSize: 14 }}>
                        СМ-2-Хавсралт 12
                     </p>
                  </div>
                  <p className="font-bold text-center" style={{ fontSize: 16 }}>
                     СУВИЛГААНЫ ТЭМДЭГЛЭЛ
                  </p>
                  <div className="flex flex-row gap-1 justify-between">
                     <div className="inline-flex gap-1">
                        <p className="text-[12px]">Эмчлүүлэгчийн овог, нэр:</p>
                        <p className="underline text-[12px]">
                           {`${chunk[0]?.history?.patientData?.lastName} ${chunk[0]?.history?.patientData?.firstName}`}
                        </p>
                     </div>
                     <div className="flex flex-row gap-1">
                        <p className="text-[12px]">Өвчний түүх №:</p>
                        <p className="underline text-[12px]">{chunk[0]?.history?.historyNumber}</p>
                     </div>
                     <div className="inline-flex gap-1">
                        <p className="text-[12px]">Нас:</p>
                        <p className="underline text-[12px]">
                           {getAge(chunk[0]?.history?.patientData?.registerNumber)}
                        </p>
                        <p className="pl-1 text-[12px]">Хүйс:</p>
                        <p className="underline text-[12px]">
                           {getGenderInType(chunk[0]?.history?.patientData?.genderType)}
                        </p>
                        <p className="pl-1 text-[12px]">Тасаг:</p>
                        <p className="underline text-[12px]">{chunk[0]?.history?.cabinetName}</p>
                        <p className="pl-1 text-[12px]">Өрөө:</p>
                        <p className="underline text-[12px]">{chunk[0]?.history?.roomNumber}</p>
                     </div>
                  </div>
                  <div className="flex flex-wrap">
                     <div className="basis-1/12 amaraDeer amaraBaruun amaraZuun amaraDoor">
                        <p className="font-bold text-center">Огноо/ цаг</p>
                     </div>
                     <div className="basis-[10%] amaraDeer amaraBaruun amaraDoor">
                        <p className="font-bold text-center">Асуудлын дугаар #</p>
                     </div>
                     <div className="basis-[31%] amaraDeer amaraBaruun amaraDoor">
                        <p className="font-bold text-center">Сувилах төлөвлөгөө</p>
                     </div>
                     <div className="basis-6/12 amaraDeer amaraDoor amaraBaruun">
                        <p className="font-bold text-center">Хэрэгжүүлэлт/Дүгнэлт</p>
                     </div>
                  </div>
                  {chunk?.map((document, index) => (
                     <div key={index} className="flex flex-wrap" style={{ height: 215 }}>
                        <div
                           className="basis-1/12 amaraDoor amaraBaruun amaraZuun"
                           style={{
                              writingMode: 'vertical-rl',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontWeight: 'bold',
                              paddingRight: 15
                           }}
                        >
                           {dayjs(document.createdAt).format('YYYY-MM-DD HH:mm')}
                        </div>
                        <div className="basis-[10%] amaraDoor amaraBaruun">
                           <div
                              className="grid grid-flow-col"
                              style={{
                                 gridTemplateRows: 'repeat(12,minmax(0,1fr))'
                              }}
                           >
                              {document.data?.q1?.map((number, index) => {
                                 return (
                                    <div key={index}>
                                       <p
                                          style={{
                                             fontSize: 11
                                          }}
                                       >
                                          {number}
                                       </p>
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                        <div className="basis-[31%] amaraDoor amaraBaruun">
                           <p style={{ fontSize: 11 }}>{document.data?.q2}</p>
                        </div>
                        <div className="basis-6/12 amaraDoor amaraBaruun">
                           <div className="flex flex-col justify-between h-full">
                              <div>
                                 <p className="font-bold" style={{ fontSize: 11 }}>
                                    Хэрэгжүүлсэн:
                                 </p>
                                 <p style={{ fontSize: 11 }}>{document.data?.q3}</p>
                                 <p className="font-bold" style={{ fontSize: 11 }}>
                                    Дүгнэлт:
                                 </p>
                                 <p style={{ fontSize: 11 }}>{document.data?.q4}</p>
                              </div>
                              <p style={{ fontSize: 11 }} className="amaraDeer">
                                 {`Сувилагчийн нэр: ${formatNameForDoc(
                                    document.createdBy.lastName,
                                    document.createdBy.firstName
                                 )}`}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         ))}
      </>
   );
}
export default CT_1_2H12;
