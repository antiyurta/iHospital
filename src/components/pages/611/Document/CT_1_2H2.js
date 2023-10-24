import React, { useEffect, useRef, useState } from 'react';
import EarlyWarningPrint from '../../BeforeAmbulatory/EarlyWarningPrint';
import moment from 'moment';
import VSCanvas from './VSCanvas';

import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const pulse = 150;
const breat = 55;
const temp = 40.5;
function CT_1_2H2(props) {
   const {
      type,
      data: { formData, patientData },
      appointmentId,
      hospitalName
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
      setChunks(sliceIntoChunks(formData, 5));
   }, [formData]);
   return (
      <>
         {chunks?.map((chunk, index) => (
            <div key={index}>
               <VSCanvas data={chunk} />
               <img src={'/Capture.png'} width={2100} alt="page" />
            </div>
            // <div key={index} className="page-container">
            //    <div className="page-inner">
            //       <div className="">
            //          <div className="flow-root">
            //             <div className="float-right">
            //                <p style={{ fontSize: 11 }}>Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны</p>
            //                <p style={{ fontSize: 11 }}>өдрийн A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
            //                <p style={{ fontSize: 11 }} className="font-bold">
            //                   Эрүүд мэндийн бүртгэлийн маягт CT-1,2 Хавсралт 2
            //                </p>
            //             </div>
            //          </div>
            //          <p className="font-bold text-center" style={{ fontSize: 12 }}>
            //             ЭМЧЛҮҮЛЭГЧИЙН АМИН ҮЗҮҮЛЭЛТИЙГ ХЯНАХ ХУУДАС
            //          </p>
            //          <div className="flow-root py-1">
            //             <div className="float-left inline-flex">
            //                <p
            //                   style={{
            //                      fontSize: 9,
            //                      fontWeight: 'bold'
            //                   }}
            //                >
            //                   Эмчлүүлэгчийн овог, нэр:
            //                </p>
            //                <p
            //                   style={{
            //                      fontSize: 9,
            //                      fontWeight: 'bold'
            //                   }}
            //                >
            //                   {patientData?.lastName.substring(0, 1) + '.' + patientData?.firstName}
            //                </p>
            //             </div>
            //             <div className="float-right inline-flex">
            //                <p
            //                   style={{
            //                      fontSize: 9,
            //                      fontWeight: 'bold'
            //                   }}
            //                >
            //                   Нас:
            //                </p>
            //                <p
            //                   style={{
            //                      fontSize: 9,
            //                      fontWeight: 'bold'
            //                   }}
            //                >
            //                   {patientData?.age}
            //                </p>
            //                <p
            //                   style={{
            //                      fontSize: 9,
            //                      fontWeight: 'bold'
            //                   }}
            //                   className="pl-1"
            //                >
            //                   Хүйс:
            //                </p>
            //                <p
            //                   style={{
            //                      fontSize: 9,
            //                      fontWeight: 'bold'
            //                   }}
            //                >
            //                   {patientData?.genderType === 'MAN' ? 'Эр' : 'Эм'}
            //                </p>
            //                <p
            //                   style={{
            //                      fontSize: 9,
            //                      fontWeight: 'bold'
            //                   }}
            //                   className="pl-1"
            //                >
            //                   Тасаг:
            //                </p>
            //                <p
            //                   style={{
            //                      fontSize: 9,
            //                      fontWeight: 'bold'
            //                   }}
            //                >
            //                   {/* {location?.state?.departmentName} */}
            //                </p>
            //                <p
            //                   style={{
            //                      fontSize: 9,
            //                      fontWeight: 'bold'
            //                   }}
            //                   className="pl-1"
            //                >
            //                   Өрөө:
            //                </p>
            //                <p
            //                   style={{
            //                      fontSize: 9,
            //                      fontWeight: 'bold'
            //                   }}
            //                >
            //                   {/* {location?.state?.roomNumber} */}
            //                </p>
            //             </div>
            //          </div>
            //          <VSCanvas data={chunk} />
            //          <table className="new-table">
            //             <thead>
            //                <tr>
            //                   <th colSpan={3}>Огноо</th>
            //                   {chunk?.map((item, idx) => (
            //                      <th key={idx} colSpan={4}>
            //                         {moment(item?.createdAt).format('YYYY/MM/DD HH:mm')}
            //                      </th>
            //                   ))}
            //                </tr>
            //                <tr>
            //                   <th colSpan={3}>Хэвтсэн хоног</th>
            //                   <th colSpan={4}>1</th>
            //                </tr>
            //                <tr>
            //                   <th colSpan={3}>Мэс засал хийлгэсний дараах өдөр</th>
            //                   <th colSpan={4}>1</th>
            //                </tr>
            //                <tr>
            //                   <th colSpan={3}>Цаг минут</th>
            //                   <th colSpan={2}>1</th>
            //                   <th colSpan={2}>2</th>
            //                </tr>
            //                <tr>
            //                   <th
            //                      style={{
            //                         width: 60,
            //                         fontSize: 8,
            //                         color: 'red',
            //                         textAlign: 'center'
            //                      }}
            //                   >
            //                      Пульс (P)
            //                   </th>
            //                   <th
            //                      style={{
            //                         width: 70,
            //                         fontSize: 8,
            //                         color: 'blue',
            //                         textAlign: 'center'
            //                      }}
            //                   >
            //                      Амьсгал (R)
            //                   </th>
            //                   <th
            //                      style={{
            //                         width: 80,
            //                         fontSize: 8,
            //                         color: 'black',
            //                         textAlign: 'center'
            //                      }}
            //                   >
            //                      Халуун (T&#176; C)
            //                   </th>
            //                   <th colSpan={2}>1</th>
            //                   <th colSpan={2}>2</th>
            //                </tr>
            //             </thead>
            //             <tbody>
            //                {Array.from({ length: 12 }, (item, index) => (
            //                   <>
            //                      <tr key={index}>
            //                         <td rowSpan={5}>
            //                            <span
            //                               style={{
            //                                  display: 'flex',
            //                                  fontSize: 8,
            //                                  color: 'red',
            //                                  justifyContent: 'center',
            //                                  paddingTop: 45
            //                               }}
            //                            >
            //                               {pulse - index * 10}
            //                            </span>
            //                         </td>
            //                         <td rowSpan={5}>
            //                            <span
            //                               style={{
            //                                  display: 'flex',
            //                                  fontSize: 8,
            //                                  color: 'blue',
            //                                  justifyContent: 'center',
            //                                  paddingTop: 45
            //                               }}
            //                            >
            //                               {breat - index * 5}
            //                            </span>
            //                         </td>
            //                         <td rowSpan={5}>
            //                            <span
            //                               style={{
            //                                  display: 'flex',
            //                                  fontSize: 8,
            //                                  color: 'black',
            //                                  justifyContent: 'center',
            //                                  paddingTop: 45
            //                               }}
            //                            >
            //                               {temp - index * 0.5}
            //                            </span>
            //                         </td>
            //                         <td>
            //                            <span style={{ color: 'black' }}>1222</span>
            //                         </td>
            //                         <td>
            //                            <span style={{ color: 'white' }}>1222</span>
            //                         </td>
            //                         <td>
            //                            <span style={{ color: 'white' }}>1222</span>
            //                         </td>
            //                         <td>
            //                            <span style={{ color: 'white' }}>1222</span>
            //                         </td>
            //                      </tr>
            //                      <tr>
            //                         <td>
            //                            <span style={{ color: 'white' }}>1</span>
            //                         </td>
            //                         <td></td>
            //                         <td></td>
            //                         <td></td>
            //                      </tr>
            //                      <tr>
            //                         <td>
            //                            <span style={{ color: 'white' }}>1</span>
            //                         </td>
            //                         <td></td>
            //                         <td></td>
            //                         <td></td>
            //                      </tr>
            //                      <tr>
            //                         <td>
            //                            <span style={{ color: 'white' }}>1</span>
            //                         </td>
            //                         <td></td>
            //                         <td></td>
            //                         <td></td>
            //                      </tr>
            //                      <tr>
            //                         <td>
            //                            <span style={{ color: 'white' }}>1</span>
            //                         </td>
            //                         <td></td>
            //                         <td></td>
            //                         <td></td>
            //                      </tr>
            //                   </>
            //                ))}
            //                <tr></tr>
            //             </tbody>
            //             <thead>
            //                <tr>
            //                   <th colSpan={3}>Цусны даралт</th>
            //                </tr>
            //                <tr>
            //                   <th colSpan={3}>Хоол №</th>
            //                </tr>
            //                <tr>
            //                   <th colSpan={3}>Биеийн жин</th>
            //                </tr>
            //                <tr>
            //                   <th colSpan={2} rowSpan={2}>
            //                      Ялгаруулалтын давтамж /хэдэн удаа/
            //                   </th>
            //                   <th>Өтгөн</th>
            //                </tr>
            //                <tr>
            //                   <th>Шээс</th>
            //                </tr>
            //                <tr>
            //                   <th colSpan={2}></th>
            //                   <th>Өглөөний ээлж</th>
            //                </tr>
            //                <tr>
            //                   <th colSpan={2}>Сувилагчийн гарын</th>
            //                   <th>Өдрийн ээлж</th>
            //                </tr>
            //                <tr>
            //                   <th colSpan={2}></th>
            //                   <th>Оройн ээлж</th>
            //                </tr>
            //             </thead>
            //          </table>
            //          {/* <canvas
            //       className="absolute border-none p-0"
            //       style={{
            //          marginTop: 99.2
            //       }}
            //       ref={vsCanvas}
            //       width={100}
            //       height={100}
            //    ></canvas> */}
            //          {/* <EarlyWarningPrint /> */}
            //       </div>
            //    </div>
            // </div>
         ))}
      </>
   );
}
export default CT_1_2H2;
