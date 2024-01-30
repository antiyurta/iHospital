import React, { useEffect, useState } from 'react';
import { formatNameForDoc, getAge } from '../../../comman';
import dayjs from 'dayjs';
function CT_1_2H12(props) {
   const {
      data: { formData, patientData }
   } = props;
   const [chunks, setChunks] = useState();
   function sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
         const chunk = arr.slice(i, i + chunkSize);
         res.push(chunk);
      }
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
                  <div className="flow-root py-1">
                     <div className="float-left inline-flex">
                        <p style={{ fontSize: 14 }}>Эмчлүүлэгчийн овог, нэр:</p>
                        <p style={{ fontSize: 14 }}>
                           {formatNameForDoc(patientData?.lastName, patientData?.firstName)}
                        </p>
                     </div>
                     <div className="float-right inline-flex">
                        <p style={{ fontSize: 14 }}>Нас:</p>
                        <p style={{ fontSize: 14 }}>{getAge(patientData?.registerNumber)}</p>
                        <p style={{ fontSize: 14 }} className="pl-1">
                           Хүйс:
                        </p>
                        <p style={{ fontSize: 14 }}>{patientData?.genderType === 'MAN' ? 'Эр' : 'Эм'}</p>
                        <p style={{ fontSize: 14 }} className="pl-1">
                           Тасаг:
                        </p>
                        {/* <p style={{ fontSize: 14 }}>{location?.state?.departmentName}</p> */}
                        <p style={{ fontSize: 14 }} className="pl-1">
                           Өрөө:
                        </p>
                        {/* <p style={{ fontSize: 14 }}>{location?.state?.roomNumber}</p> */}
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
                           <p style={{ fontSize: 11 }}>{document.q2}</p>
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
