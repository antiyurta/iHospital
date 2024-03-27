import React, { useEffect, useState } from 'react';
import { formatNameForDoc, getAge, getGenderInType } from '../../../common';
import { Table } from 'react-bootstrap';
import dayjs from 'dayjs';

import { configureData, calcTotal } from './injectionForH13';

const CT_1_2H13 = (props) => {
   const {
      data: { formData }
   } = props;
   const [history, setHistory] = useState({});
   const [fluidBalance, setFluidBalance] = useState([]);

   useEffect(() => {
      const { data, history } = configureData(formData);
      setHistory(history);
      setFluidBalance(calcTotal(data));
   }, [formData]);
   return (
      <>
         {fluidBalance?.map((datas, idx) => (
            <div key={idx} className="page">
               <div className="subpage">
                  <div className="flow-root">
                     <p className="float-right">СМ-3 хавсралт 13</p>
                  </div>
                  <p className="font-bold text-center">ШИНГЭНИЙ БАЛАНС ХЯНАХ ХУУДАС</p>
                  <div className="flex flex-row gap-1 justify-between">
                     <div className="inline-flex gap-1">
                        <p className="text-[12px]">Эмчлүүлэгчийн овог, нэр:</p>
                        <p className="underline text-[12px]">
                           {`${history?.patientData?.lastName} ${history?.patientData?.firstName}`}
                        </p>
                     </div>
                     <div className="flex flex-row gap-1">
                        <p className="text-[12px]">Өвчний түүх №:</p>
                        <p className="underline text-[12px]">{history?.historyNumber}</p>
                     </div>
                     <div className="inline-flex gap-1">
                        <p className="text-[12px]">Нас:</p>
                        <p className="underline text-[12px]">{getAge(history?.patientData?.registerNumber)}</p>
                        <p className="pl-1 text-[12px]">Хүйс:</p>
                        <p className="underline text-[12px]">{getGenderInType(history?.patientData?.genderType)}</p>
                        <p className="pl-1 text-[12px]">Тасаг:</p>
                        <p className="underline text-[12px]">{history?.cabinetName}</p>
                        <p className="pl-1 text-[12px]">Өрөө:</p>
                        <p className="underline text-[12px]">{history?.roomNumber}</p>
                     </div>
                  </div>
                  <Table bordered className="IO">
                     <thead>
                        <tr>
                           <th rowSpan={2} className="align-middle">
                              Огноо
                           </th>
                           <th colSpan={5}>Биед орсон шингэн /ml хэмжих нэгж/</th>
                           <th colSpan={5}>Биеэс гарсан шингэн /ml хэмжих нэгж/</th>
                        </tr>
                        <tr>
                           <th>Хэрхэн</th>
                           <th>Өглөө</th>
                           <th>Өдөр</th>
                           <th>Орой</th>
                           <th>Тус бүpийн жэмжээ</th>
                           <th>Хэрхэн</th>
                           <th>Өглөө</th>
                           <th>Өдөр</th>
                           <th>Орой</th>
                           <th>Тус бүpийн жэмжээ</th>
                        </tr>
                     </thead>
                     <>
                        {datas?.map((t, indx) => (
                           <tbody key={indx}>
                              <tr>
                                 <th
                                    rowSpan={6}
                                    style={{
                                       writingMode: 'vertical-rl',
                                       textAlign: 'center',
                                       verticalAlign: 'middle'
                                    }}
                                 >
                                    {dayjs(t.date).format('YYYY/MM/DD')}
                                 </th>
                              </tr>
                              {t.inputs.map((item, index) => {
                                 return (
                                    <tr key={index}>
                                       <th className="text-center">{item.how}</th>
                                       <td className="text-center">{item.morning}</td>
                                       <td className="text-center">{item.afternoon}</td>
                                       <td className="text-center">{item.evening}</td>
                                       <td className="text-center">{item.morning + item.afternoon + item.evening}</td>
                                       <th className="text-center">{t.outputs[index].how}</th>
                                       <td className="text-center">{t.outputs[index].morning}</td>
                                       <td className="text-center">{t.outputs[index].afternoon}</td>
                                       <td className="text-center">{t.outputs[index].evening}</td>
                                       <td className="text-center">
                                          {t.outputs[index].morning +
                                             t.outputs[index].afternoon +
                                             t.outputs[index].evening}
                                       </td>
                                    </tr>
                                 );
                              })}
                              <tr>
                                 <th className="text-center bg-[#EEECE1]">Нийт хэмжээ</th>
                                 <th className="text-center bg-[#EEECE1]">{t.iMorningTotal}</th>
                                 <th className="text-center bg-[#EEECE1]">{t.iAfternoonTotal}</th>
                                 <th className="text-center bg-[#EEECE1]">{t.iEveningTotal}</th>
                                 <th className="text-center bg-[#EEECE1]"></th>
                                 <th className="text-center bg-[#EEECE1]">Нийт хэмжээ</th>
                                 <th className="text-center bg-[#EEECE1]">{t.oMorningTotal}</th>
                                 <th className="text-center bg-[#EEECE1]">{t.oAfternoonTotal}</th>
                                 <th className="text-center bg-[#EEECE1]">{t.oEveningTotal}</th>
                                 <th className="text-center bg-[#EEECE1]"></th>
                              </tr>
                              <tr>
                                 {t.nurses?.map((nurse, index) => (
                                    <React.Fragment key={index}>
                                       <th className="bg-[#EEECE1]" colSpan={t.nurses?.length - index}>
                                          Сувилагчийн гарын үсэг
                                       </th>
                                       <th className="bg-[#EEECE1]">{nurse.morning}</th>
                                       <th className="bg-[#EEECE1]">{nurse.afternoon}</th>
                                       <th className="bg-[#EEECE1]">{nurse.evening}</th>
                                       <th className="bg-[#EEECE1]"></th>
                                    </React.Fragment>
                                 ))}
                              </tr>
                           </tbody>
                        ))}
                     </>
                  </Table>
                  <p>
                     *Сувилагч энэ хүснэгтийг өөрөө хөтлөх буюу, эмчлүүлэгчийн ар гэрийхэнд хэрхэн хөтлөх тухай мэдлэг
                     олгож, хөтлөх аргыг зааварчилна.
                  </p>
               </div>
            </div>
         ))}
      </>
   );
};
export default CT_1_2H13;
