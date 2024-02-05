import React, { useEffect, useMemo, useState } from 'react';
import { formatNameForDoc, getAge } from '../../../comman';
import { Table } from 'react-bootstrap';
import dayjs from 'dayjs';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
//
import { tubeAreaOptions, tubeChild } from '../../BeforeAmbulatory/OtherCustomized/A539/attachment3';
//
const A539H3 = (props) => {
   const {
      data: { formData, patientData }
   } = props;
   const findTubeChild = (value) => {
      return tubeChild.find((item) => item.value === value)?.label;
   };
   const findTubeAreaOptions = (value) => {
      console.log(value);
      return tubeAreaOptions.find((item) => item.value === value)?.label;
   };
   const [chunks, setChunks] = useState([]);
   const tubeType = (type) => {
      if (type === 0) {
         return 'Уян зүү';
      } else if (type === 1) {
         return 'Төвийн веннийн гуурс';
      }
      return;
   };
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
            <div key={index} className="page-landscape">
               <div className="subpage">
                  <div className="flow-root">
                     <div className="float-right">
                        <p style={{ fontSize: 10 }}>Эрүүл мэндийн сайдын 2019 оны 11 сарын 29-ны</p>
                        <p style={{ fontSize: 10 }}>өдрийн А539 дугаар тушаалын 3-р хавсралт</p>
                     </div>
                  </div>
                  <p className="font-bold text-center" style={{ fontSize: 12 }}>
                     Судасны гуурстай холбоотой тандалт
                  </p>
                  <div className="flex flex-wrap py-1 text-center">
                     <div className="basis-1/5">
                        <p style={{ fontSize: 10 }}>Эмнэлэг: UNIVERSAL MED</p>
                     </div>
                     <div className="basis-1/5">
                        <p style={{ fontSize: 10 }}>Тасаг: ДОТОР</p>
                     </div>
                     <div className="basis-2/5">
                        <p style={{ fontSize: 10 }}>
                           Үйлчлүүлэгчийн овог нэр:{' '}
                           {patientData?.lastName?.substring(0, 1) + '.' + patientData?.firstName}
                        </p>
                     </div>
                     <div className="basis-1/5">
                        <p style={{ fontSize: 10 }}>
                           Нас: {getAge(patientData?.registerNumber)} Хүйс:
                           {patientData?.genderType === 'MAN' ? 'Эр' : 'Эм'}
                        </p>
                     </div>
                     <div className="basis-1/5">
                        <p style={{ fontSize: 10 }}>Регистрийн дугаар: {patientData?.registerNumber}</p>
                     </div>
                     <div className="basis-1/5">
                        <p style={{ fontSize: 10 }}>Үндсэн онош:</p>
                     </div>
                     <div className="basis-2/5">
                        <p style={{ fontSize: 10 }}>Эмнэлэг хэвтсэн огноо: 2022-01-01</p>
                     </div>
                     <div className="basis-1/5">
                        <p style={{ fontSize: 10 }}>Судасны гуурс төрөл: {tubeType(chunk[0]?.data?.q0)}</p>
                     </div>
                  </div>
                  <Table bordered className="bcp2">
                     <thead>
                        <tr>
                           <th
                              rowSpan={3}
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Сар өдөр
                           </th>
                           <th
                              rowSpan={3}
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Цаг
                           </th>
                           <th
                              rowSpan={3}
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Хэд дахь уян зүү
                           </th>
                           <th rowSpan={3}>Гуурс тависан талбай</th>
                           <th
                              rowSpan={3}
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Гуурс сольсон шалтгаан
                           </th>
                           <th colSpan={11}>Судасны гуурсны халдварын шинж тэмдэгээр тандах хуудас</th>
                           <th colSpan={4}>Авсан арга хэмжээ</th>
                           <td
                              rowSpan={3}
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlignLast: 'center',
                                 verticalAlign: 'middle'
                              }}
                           >
                              <p>гарын үсэг</p>
                              <p>Уян зүү тавьсан сувилагчийн</p>
                           </td>
                           <td
                              rowSpan={3}
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlignLast: 'center',
                                 verticalAlign: 'middle'
                              }}
                           >
                              <p>гарын үсэг</p>
                              <p>Тандалт хийсэн ажилтны</p>
                           </td>
                        </tr>
                        <tr>
                           <th colSpan={6}>Ерөнхий шинж</th>
                           <th colSpan={5}>Хэсэг гэзрын шинж</th>
                           <td
                              rowSpan={2}
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlignLast: 'center',
                                 verticalAlign: 'middle'
                              }}
                           >
                              <p>эсэх, илэрсэн үүсгэгч</p>
                              <p>ЦАЧ шинжилгээ авсан</p>
                           </td>
                           <td
                              rowSpan={2}
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlignLast: 'center',
                                 verticalAlign: 'middle'
                              }}
                           >
                              <p>үүсгэгч</p>
                              <p>авсан эсэх, илэрсэн</p>
                              <p>судлалын шинжилгээ</p>
                              <p>Гуурсны үзүүрээс нян</p>
                           </td>
                           <td
                              rowSpan={2}
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlignLast: 'center',
                                 verticalAlign: 'middle'
                              }}
                           >
                              <p>эсэх, илэрсэн үүсгэгч</p>
                              <p>шинжилгээ авсан</p>
                              <p>идээнээс нян судлалын</p>
                              <p>Үрэвслийн шингэн</p>
                           </td>
                           <th
                              rowSpan={2}
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlignLast: 'center',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Авсан арга хэмжээ
                           </th>
                        </tr>
                        <tr>
                           <th
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Халуурна /38С дээш/
                           </th>
                           <th
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              АД ситол буурсан
                           </th>
                           <th
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Пульс түргэснэ
                           </th>
                           <th
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              {'Шээсний гарц багасана <20мл/цаг'}
                           </th>
                           <th
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Арьс зэвхий саарал
                           </th>
                           <th
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Хоолонд дургүй
                           </th>
                           <th
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Хатгасан хэсэгт улаан
                           </th>
                           <th
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Хатгасан хэсэгт эмзэг өвчтэй
                           </th>
                           <th
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Хатгасан хэсэгт халуун үрэвссэн
                           </th>
                           <th
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Тэмтэрэхэд судас гүвдрүүтсэн
                           </th>
                           <th
                              className="rotate-180"
                              style={{
                                 writingMode: 'vertical-lr',
                                 textAlign: 'right',
                                 verticalAlign: 'middle'
                              }}
                           >
                              Хатгасан хэсэгт буглаатай идээтэй
                           </th>
                        </tr>
                     </thead>
                     <thead>
                        {chunk?.map((doc, index) => {
                           return (
                              <tr key={index}>
                                 <th>{dayjs(doc.createdAt).format('MM/DD')}</th>
                                 <th>{dayjs(doc.createdAt).format('HH:mm')}</th>
                                 <th>{index + 1}</th>
                                 <th>
                                    <span className="flex flex-row gap-1">
                                       <span className="text-[10px]">{findTubeAreaOptions(Number(doc.data?.q1))}</span>
                                       <span>/</span>
                                       <span className="text-[10px]">{findTubeChild(Number(doc.data?.['q1-1']))}</span>
                                    </span>
                                 </th>
                                 <th>{doc.data?.q2}</th>
                                 <th>{doc.data?.q3 === 'q3-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q4 === 'q4-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q5 === 'q5-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q6 === 'q6-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q7 === 'q7-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q8 === 'q8-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q9 === 'q9-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q10 === 'q10-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q11 === 'q11-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q12 === 'q12-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q13 === 'q13-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q14 === 'q14-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q15 === 'q15-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q16 === 'q16-1' ? <PlusOutlined /> : <MinusOutlined />}</th>
                                 <th>{doc.data?.q17}</th>
                                 <th>{formatNameForDoc(doc.createdBy?.lastName, doc.createdBy.firstName)}</th>
                                 <th>{doc.scopingName}</th>
                              </tr>
                           );
                        })}
                     </thead>
                  </Table>
                  <div style={{ display: 'grid' }}>
                     <span>Тандалтын хуудасыг хөтлөх заавар:</span>
                     <span>1. Хэвтсэн өдрөөс гарах өдөр хүртэл өдөрт 2 ээлж хөтлөнө.</span>
                     <span>
                        2. Шинж тэмдэг илэрсэн /+/, илрээгүй /-/, гуурс тавьсан бол /Т/, сольсон /С/, авсан /А/,
                        өвдөлттэй /Ө/, гарсан /Г/, бөгөлсөн /Б/ гэж үсгээр товчилж бичнэ.
                     </span>
                     <span>
                        3. Шинжилгээ авсан бол /+/, аваагүй /-/, эмгэг төрөгч илэрсэн бол нэрийг нь, илрээгүй бол
                        илрээгүй гэж бичнэ.
                     </span>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
};
export default A539H3;
