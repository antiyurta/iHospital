import React, { useEffect, useState } from 'react';
import VSCanvas from './VSCanvas';
import dayjs from 'dayjs';
import { formatNameForDoc, getAge, getGenderInType } from '../../../common';

function CT_1_2H2(props) {
   const {
      data: { formData }
   } = props;
   const [chunks, setChunks] = useState();
   function sliceIntoChunks(arr, chunkSize, secondSize) {
      const slices = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
         const newArr = arr.slice(i, i + chunkSize);
         const newSlices = [];
         for (let k = 0; k < newArr.length; k += secondSize) {
            newSlices.push(newArr.slice(k, k + secondSize));
         }
         slices.push(newSlices);
      }
      return slices;
   }
   const [line, setLine] = useState([]);
   const createLine = () => {
      var linee = [];
      for (let index = 0; index < 58 * 4; index++) {
         linee.push(index);
      }
      setLine(linee);
   };
   const calcNurses = (items) => {
      var early = '';
      var middle = '';
      var late = '';
      items?.map((item) => {
         if (item.data?.q7 === 'q7-1') {
            early = formatNameForDoc(item.createdBy?.lastName, item.createdBy?.firstName);
         } else if (item.data?.q7 === 'q7-2') {
            middle = formatNameForDoc(item.createdBy?.lastName, item.createdBy?.firstName);
         } else if (item.data?.q7 === 'q7-3') {
            late = formatNameForDoc(item.createdBy?.lastName, item.createdBy?.firstName);
         }
      });
      return (
         <>
            <div className="w-full amaraDeer amaraBaruun" style={{ height: 18.86 }}>
               <p
                  style={{
                     fontSize: 12,
                     textAlign: 'center',
                     fontWeight: 'bold'
                  }}
               >
                  {early}
               </p>
            </div>
            <div className="w-full amaraDeer amaraBaruun" style={{ height: 18.86 }}>
               <p
                  style={{
                     fontSize: 12,
                     textAlign: 'center',
                     fontWeight: 'bold'
                  }}
               >
                  {middle}
               </p>
            </div>
            <div className="w-full amaraDeer amaraBaruun amaraDoor" style={{ height: 18.86 }}>
               <p
                  style={{
                     fontSize: 12,
                     textAlign: 'center',
                     fontWeight: 'bold'
                  }}
               >
                  {late}
               </p>
            </div>
         </>
      );
   };
   useEffect(() => {
      createLine();
   }, []);
   //
   useEffect(() => {
      setChunks(sliceIntoChunks(formData, 10, 2));
   }, [formData]);
   return (
      <>
         {chunks?.map((chunk, index) => (
            <div key={index} className="relative">
               <VSCanvas data={chunk} />
               <div className="page">
                  <div className="subpage h-full">
                     <div className="flex flex-col gap-1">
                        <div className="flow-root">
                           <p className="float-right">
                              <p>Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны</p>
                              <p>өдрийн А/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
                              <p>Эрүүл мэндийн бүртгэлийн маягт СТ-1,2 Хавсралт 2</p>
                           </p>
                        </div>
                        <p className="font-bold text-center">ЭМЧЛҮҮЛЭГЧИЙН АМИН ҮЗҮҮЛЭЛТИЙГ ХЯНАХ ХУУДАС</p>
                        <div className="flex flex-row gap-1 justify-between">
                           <div className="inline-flex gap-1">
                              <p className="text-[12px]">Эмчлүүлэгчийн овог, нэр:</p>
                              <p className="underline text-[12px]">
                                 {`${chunk[0]?.[0]?.history?.patientData?.lastName} ${chunk[0]?.[0]?.history?.patientData?.firstName}`}
                              </p>
                           </div>
                           <div className="flex flex-row gap-1">
                              <p className="text-[12px]">Өвчний түүх №:</p>
                              <p className="underline text-[12px]">{chunk[0]?.[0]?.history?.historyNumber}</p>
                           </div>
                           <div className="inline-flex gap-1">
                              <p className="text-[12px]">Нас:</p>
                              <p className="underline text-[12px]">
                                 {getAge(chunk[0]?.[0]?.history?.patientData?.registerNumber)}
                              </p>
                              <p className="pl-1 text-[12px]">Хүйс:</p>
                              <p className="underline text-[12px]">
                                 {getGenderInType(chunk[0]?.[0]?.history?.patientData?.genderType)}
                              </p>
                              <p className="pl-1 text-[12px]">Тасаг:</p>
                              <p className="underline text-[12px]">{chunk[0]?.[0]?.history?.cabinetName}</p>
                              <p className="pl-1 text-[12px]">Өрөө:</p>
                              <p className="underline text-[12px]">{chunk[0]?.[0]?.history?.roomNumber}</p>
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-wrap">
                        <div className="basis-1/3">
                           <div className="flex flex-wrap">
                              <div className="w-full amaraDeer amaraZuun amaraBaruun">
                                 <p style={{ fontSize: 12 }}>Огноо</p>
                              </div>
                              <div className="w-full amaraDeer amaraZuun amaraBaruun">
                                 <p style={{ fontSize: 12 }}>Хэвтсэн хоног</p>
                              </div>
                              <div className="w-full amaraDeer amaraZuun amaraBaruun">
                                 <p style={{ fontSize: 12 }}>Мэс засал хийлгэсний дараах өдөр</p>
                              </div>
                              <div className="w-full amaraDeer amaraZuun amaraBaruun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold'
                                    }}
                                 >
                                    Цаг минут
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'red'
                                    }}
                                 >
                                    Пульс(P)
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'blue'
                                    }}
                                 >
                                    Амьсгал(R)
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun amaraBaruun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold'
                                    }}
                                 >
                                    Халуун(T°C)
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun align-bottom">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'red',
                                       height: '100%',
                                       paddingTop: 17
                                    }}
                                 >
                                    150
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'blue',
                                       height: '100%',
                                       paddingTop: 17
                                    }}
                                 >
                                    55
                                 </p>
                              </div>
                              <div
                                 className="basis-1/3 amaraDeer amaraZuun amaraBaruun"
                                 style={{
                                    height: '36px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       height: '100%',
                                       paddingTop: 17
                                    }}
                                 >
                                    40.5
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'red',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    140
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'blue',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    50
                                 </p>
                              </div>
                              <div
                                 className="basis-1/3 amaraDeer amaraZuun amaraBaruun"
                                 style={{
                                    height: '60px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    40
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'red',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    130
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'blue',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    45
                                 </p>
                              </div>
                              <div
                                 className="basis-1/3 amaraDeer amaraZuun amaraBaruun"
                                 style={{
                                    height: '60px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    39.5
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'red',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    120
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'blue',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    40
                                 </p>
                              </div>
                              <div
                                 className="basis-1/3 amaraDeer amaraZuun amaraBaruun"
                                 style={{
                                    height: '60px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    39
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'red',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    110
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'blue',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    35
                                 </p>
                              </div>
                              <div
                                 className="basis-1/3 amaraDeer amaraZuun amaraBaruun"
                                 style={{
                                    height: '60px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    38.5
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'red',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    100
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'blue',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    30
                                 </p>
                              </div>
                              <div
                                 className="basis-1/3 amaraDeer amaraZuun amaraBaruun"
                                 style={{
                                    height: '60px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    38
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'red',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    90
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'blue',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    25
                                 </p>
                              </div>
                              <div
                                 className="basis-1/3 amaraDeer amaraZuun amaraBaruun"
                                 style={{
                                    height: '60px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    37.5
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'red',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    80
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'blue',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    20
                                 </p>
                              </div>
                              <div
                                 className="basis-1/3 amaraDeer amaraZuun amaraBaruun"
                                 style={{
                                    height: '60px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    37
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'red',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    70
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'blue',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    15
                                 </p>
                              </div>
                              <div
                                 className="basis-1/3 amaraDeer amaraZuun amaraBaruun"
                                 style={{
                                    height: '60px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    36.5
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'red',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    60
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'blue',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    10
                                 </p>
                              </div>
                              <div
                                 className="basis-1/3 amaraDeer amaraZuun amaraBaruun"
                                 style={{
                                    height: '60px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    36
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'red',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    50
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'blue',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    5
                                 </p>
                              </div>
                              <div
                                 className="basis-1/3 amaraDeer amaraZuun amaraBaruun"
                                 style={{
                                    height: '60px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    35.5
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'red',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    40
                                 </p>
                              </div>
                              <div className="basis-1/3 amaraDeer amaraZuun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       color: 'blue',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    0
                                 </p>
                              </div>
                              <div
                                 className="basis-1/3 amaraDeer amaraZuun amaraBaruun"
                                 style={{
                                    height: '60px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'center',
                                       fontWeight: 'bold',
                                       height: '100%',
                                       paddingTop: 40
                                    }}
                                 >
                                    35
                                 </p>
                              </div>
                              <div className="w-full amaraDeer amaraZuun amaraBaruun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'start'
                                    }}
                                 >
                                    Цусны даралт
                                 </p>
                              </div>
                              <div className="w-full amaraDeer amaraZuun amaraBaruun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'start'
                                    }}
                                 >
                                    Хоол №
                                 </p>
                              </div>
                              <div className="w-full amaraDeer amaraZuun amaraBaruun">
                                 <p
                                    style={{
                                       fontSize: 12,
                                       textAlign: 'start'
                                    }}
                                 >
                                    Биеийн жин
                                 </p>
                              </div>
                              <div className="w-full">
                                 <div className="flex flex-wrap">
                                    <div className="basis-2/3 amaraDeer amaraZuun">
                                       <p
                                          style={{
                                             fontSize: 12,
                                             textAlign: 'start'
                                          }}
                                       >
                                          ялгаруулалт давтамж /хэдэн удаа/
                                       </p>
                                    </div>
                                    <div className="basis-1/3">
                                       <div className="w-full amaraDeer amaraZuun amaraBaruun">
                                          <p
                                             style={{
                                                fontSize: 12,
                                                textAlign: 'center'
                                             }}
                                          >
                                             Өтгөн
                                          </p>
                                       </div>
                                       <div className="w-full amaraDeer amaraZuun amaraBaruun">
                                          <p
                                             style={{
                                                fontSize: 12,
                                                textAlign: 'center'
                                             }}
                                          >
                                             Шээс
                                          </p>
                                       </div>
                                    </div>
                                    <div className="basis-1/2 amaraDeer amaraZuun">
                                       <p
                                          style={{
                                             fontSize: 12,
                                             textAlign: 'center'
                                          }}
                                       ></p>
                                    </div>
                                    <div className="basis-1/2 amaraDeer amaraZuun amaraBaruun">
                                       <p
                                          style={{
                                             fontSize: 12,
                                             textAlign: 'center'
                                          }}
                                       >
                                          Өглөөний ээлж
                                       </p>
                                    </div>
                                    <div className="basis-1/2 amaraDeer amaraZuun">
                                       <p
                                          style={{
                                             fontSize: 12,
                                             textAlign: 'center'
                                          }}
                                       >
                                          Сувилагчийн гарын
                                       </p>
                                    </div>
                                    <div className="basis-1/2 amaraDeer amaraZuun amaraBaruun">
                                       <p
                                          style={{
                                             fontSize: 12,
                                             textAlign: 'center'
                                          }}
                                       >
                                          Өдрийн ээлж
                                       </p>
                                    </div>
                                    <div className="basis-1/2 amaraDeer amaraZuun amaraDoor">
                                       <p
                                          style={{
                                             fontSize: 12,
                                             textAlign: 'center'
                                          }}
                                       ></p>
                                    </div>
                                    <div className="basis-1/2 amaraDeer amaraZuun amaraDoor amaraBaruun">
                                       <p
                                          style={{
                                             fontSize: 12,
                                             textAlign: 'center'
                                          }}
                                       >
                                          Оройн ээлж
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="basis-2/3">
                           <div className="flex flex-wrap">
                              {chunk?.map((firstChunk, index) => {
                                 return (
                                    <div key={index} className="basis-1/5">
                                       <div className="w-full amaraDeer amaraBaruun">
                                          <p
                                             style={{
                                                fontSize: 12,
                                                textAlign: 'center',
                                                fontWeight: 'bold'
                                             }}
                                          >
                                             {dayjs(firstChunk[0]?.createdAt).format('YYYY/MM/DD')}
                                          </p>
                                       </div>
                                       <div className="w-full amaraDeer amaraBaruun">
                                          <p
                                             style={{
                                                fontSize: 12,
                                                textAlign: 'center',
                                                fontWeight: 'bold'
                                             }}
                                          >
                                             {firstChunk[0]?.data?.q1}
                                          </p>
                                       </div>
                                       <div className="w-full amaraDeer amaraBaruun">
                                          <p
                                             style={{
                                                fontSize: 12,
                                                textAlign: 'center',
                                                fontWeight: 'bold'
                                             }}
                                          >
                                             {firstChunk[0]?.data?.q2 || '----'}
                                          </p>
                                       </div>
                                       <div className="w-full">
                                          <div className="flex flex-wrap">
                                             {firstChunk?.map((second, index) => {
                                                return (
                                                   <div key={index} className="basis-1/2 amaraDeer amaraBaruun">
                                                      <p
                                                         style={{
                                                            fontSize: 12,
                                                            textAlign: 'center',
                                                            fontWeight: 'bold'
                                                         }}
                                                      >
                                                         {dayjs(second.createdAt).format('HH:mm')}
                                                      </p>
                                                   </div>
                                                );
                                             })}
                                             <div className="w-full amaraDeer amaraBaruun">
                                                <p
                                                   style={{
                                                      fontSize: 12,
                                                      textAlign: 'center',
                                                      fontWeight: 'bold'
                                                   }}
                                                >
                                                   {'Ө | О'}
                                                </p>
                                             </div>
                                             {line.map((el) => {
                                                return (
                                                   <div
                                                      key={el}
                                                      className="basis-1/4 amaraDeer amaraBaruun"
                                                      style={{ height: 12 }}
                                                   >
                                                      <p
                                                         style={{
                                                            fontSize: 7,
                                                            textAlign: 'center',
                                                            fontWeight: 'bold'
                                                         }}
                                                      ></p>
                                                   </div>
                                                );
                                             })}
                                             {firstChunk?.map((item, index) => (
                                                <div
                                                   key={index}
                                                   className="basis-1/2 amaraDeer amaraBaruun"
                                                   style={{ height: 18.86 }}
                                                >
                                                   <p
                                                      style={{
                                                         fontSize: 11,
                                                         textAlign: 'center',
                                                         fontWeight: 'bold'
                                                      }}
                                                   >
                                                      {`${item.data?.highPressureRight}/${item.data?.lowPressureRight}`}
                                                   </p>
                                                </div>
                                             ))}
                                          </div>
                                       </div>
                                       <div className="w-full flex">
                                          {firstChunk?.map((item, index) => (
                                             <div
                                                key={index}
                                                className="basis-1/2 amaraDeer amaraBaruun"
                                                style={{ height: 18.86 }}
                                             >
                                                <p
                                                   style={{
                                                      fontSize: 11,
                                                      textAlign: 'center',
                                                      fontWeight: 'bold'
                                                   }}
                                                >
                                                   {item.data?.q3}
                                                </p>
                                             </div>
                                          ))}
                                       </div>
                                       <div className="w-full amaraDeer amaraBaruun" style={{ height: 18.86 }}>
                                          <p
                                             style={{
                                                fontSize: 12,
                                                textAlign: 'center',
                                                fontWeight: 'bold'
                                             }}
                                          >
                                             {firstChunk[0]?.data?.q4}
                                          </p>
                                       </div>
                                       <div className="w-full">
                                          <div className="flex flex-wrap">
                                             {firstChunk?.map((item, index) => (
                                                <div
                                                   key={index}
                                                   className="basis-1/2 amaraDeer amaraBaruun"
                                                   style={{ height: 18.86 }}
                                                >
                                                   <p
                                                      style={{
                                                         fontSize: 12,
                                                         textAlign: 'center',
                                                         fontWeight: 'bold'
                                                      }}
                                                   >
                                                      {item?.data?.q5}
                                                   </p>
                                                </div>
                                             ))}
                                             <div className="w-full flex">
                                                {firstChunk?.map((item, index) => (
                                                   <div
                                                      key={index}
                                                      className="basis-1/2 amaraDeer amaraBaruun"
                                                      style={{ height: 18.86 }}
                                                   >
                                                      <p
                                                         style={{
                                                            fontSize: 12,
                                                            textAlign: 'center',
                                                            fontWeight: 'bold'
                                                         }}
                                                      >
                                                         {item?.data?.q6}
                                                      </p>
                                                   </div>
                                                ))}
                                             </div>
                                          </div>
                                       </div>
                                       {calcNurses(firstChunk)}
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
}
export default CT_1_2H2;
