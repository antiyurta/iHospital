import moment from 'moment';
import React, { useState, useEffect } from 'react';

function EarlyWarningPrint({ Data }) {
   const data = Data;
   const [line, setLine] = useState([]);
   const createLine = () => {
      var linee = [];
      for (let index = 0; index < 58 * 4; index++) {
         linee.push(index);
      }
      setLine(linee);
   };
   useEffect(() => {
      createLine();
   }, []);
   return (
      <div className="early" style={{ maxHeight: 889.44 }}>
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
                           textAlign: 'center'
                        }}
                     >
                        Цусны даралт
                     </p>
                  </div>
                  <div className="w-full amaraDeer amaraZuun amaraBaruun">
                     <p
                        style={{
                           fontSize: 12,
                           textAlign: 'center'
                        }}
                     >
                        Хоол №
                     </p>
                  </div>
                  <div className="w-full amaraDeer amaraZuun amaraBaruun">
                     <p
                        style={{
                           fontSize: 12,
                           textAlign: 'center'
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
                                 textAlign: 'center'
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
                  {data?.map((item, index) => {
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
                                 {moment(item.date).format('YYYY/MM/DD')}
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
                                 {index + 1}
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
                                 /
                              </p>
                           </div>
                           <div className="w-full">
                              <div className="flex flex-wrap">
                                 {item.assesments.map((assesment, index) => {
                                    return (
                                       <div key={index} className="basis-1/4 amaraDeer amaraBaruun">
                                          <p
                                             style={{
                                                fontSize: 12,
                                                textAlign: 'center',
                                                fontWeight: 'bold'
                                             }}
                                          >
                                             {moment(assesment.createdAt).format('HH')}
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
                                       {'|'}
                                    </p>
                                 </div>
                                 {line.map((el) => {
                                    return (
                                       <div key={el} className="basis-1/4 amaraDeer amaraBaruun" style={{ height: 12 }}>
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
                                 <div className="basis-1/2 amaraDeer amaraBaruun" style={{ height: 18.86 }}>
                                    <p
                                       style={{
                                          fontSize: 12,
                                          textAlign: 'center',
                                          fontWeight: 'bold'
                                       }}
                                    ></p>
                                 </div>
                                 <div className="basis-1/2 amaraDeer amaraBaruun" style={{ height: 18.86 }}>
                                    <p
                                       style={{
                                          fontSize: 12,
                                          textAlign: 'center',
                                          fontWeight: 'bold'
                                       }}
                                    ></p>
                                 </div>
                              </div>
                           </div>
                           <div className="w-full amaraDeer amaraBaruun" style={{ height: 18.86 }}>
                              <p
                                 style={{
                                    fontSize: 12,
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                 }}
                              ></p>
                           </div>
                           <div className="w-full amaraDeer amaraBaruun" style={{ height: 18.86 }}>
                              <p
                                 style={{
                                    fontSize: 12,
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                 }}
                              ></p>
                           </div>
                           <div className="w-full">
                              <div className="flex flex-wrap">
                                 <div className="basis-1/2 amaraDeer amaraBaruun" style={{ height: 18.86 }}>
                                    <p
                                       style={{
                                          fontSize: 12,
                                          textAlign: 'center',
                                          fontWeight: 'bold'
                                       }}
                                    ></p>
                                 </div>
                                 <div className="basis-1/2 amaraDeer amaraBaruun" style={{ height: 18.86 }}>
                                    <p
                                       style={{
                                          fontSize: 12,
                                          textAlign: 'center',
                                          fontWeight: 'bold'
                                       }}
                                    ></p>
                                 </div>
                                 <div className="basis-1/2 amaraDeer amaraBaruun" style={{ height: 18.86 }}>
                                    <p
                                       style={{
                                          fontSize: 12,
                                          textAlign: 'center',
                                          fontWeight: 'bold'
                                       }}
                                    ></p>
                                 </div>
                                 <div className="basis-1/2 amaraDeer amaraBaruun" style={{ height: 18.86 }}>
                                    <p
                                       style={{
                                          fontSize: 12,
                                          textAlign: 'center',
                                          fontWeight: 'bold'
                                       }}
                                    ></p>
                                 </div>
                              </div>
                           </div>
                           <div className="w-full amaraDeer amaraBaruun" style={{ height: 18.86 }}>
                              <p
                                 style={{
                                    fontSize: 12,
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                 }}
                              ></p>
                           </div>
                           <div className="w-full amaraDeer amaraBaruun" style={{ height: 18.86 }}>
                              <p
                                 style={{
                                    fontSize: 12,
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                 }}
                              ></p>
                           </div>
                           <div className="w-full amaraDeer amaraBaruun amaraDoor" style={{ height: 18.86 }}>
                              <p
                                 style={{
                                    fontSize: 12,
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                 }}
                              ></p>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}
export default EarlyWarningPrint;
