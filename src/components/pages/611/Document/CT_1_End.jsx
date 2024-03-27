import { Checkbox, Col, Row } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { getAge, numberToCurrency } from '../../../common';
import dayjs from 'dayjs';
import EmrContext from '../../../../features/EmrContext';
const CT1End = (props) => {
   const { documentTrigger } = useContext(EmrContext);
   const [formData, setFormData] = useState({});
   const [history, setHistory] = useState({});
   const getIncomeDiagnose = () => {
      return documentTrigger?.['83']?.data?.q25;
   };
   const getDiagnose = () => {
      return documentTrigger?.['83']?.data?.q26;
   };
   const getBodyCondition = (data, value) => {
      if (data?.length > 0) {
         if (data?.includes(value.toString())) {
            return <span className="rounded-xl border border-black block w-[22px] m-auto">{value}</span>;
         } else {
            return value;
         }
      } else {
         if (data === value.toString()) {
            return <span className="rounded-xl border border-black block w-[22px] m-auto">{value}</span>;
         }
         return value;
      }
   };
   useEffect(() => {
      if (props?.data?.formData) {
         setFormData(props?.data?.formData);
      }
      if (props?.data?.history != null) {
         setHistory(props?.data?.history);
      }
   }, [props]);
   return (
      <div className="page">
         <div className="subpage">
            <p className="font-bold text-center text-lg">ЭМНЭЛГЭЭС ГАРАХ, ШИЛЖИХ ҮЕИЙН ДҮГНЭЛТ</p>
            <div className="grid grid-cols-2">
               <div className="flex flex-row gap-1">
                  <p>Эцэг /эх/-ийн нэр:</p>
                  <p
                     style={{
                        width: 'calc(100% - 140px)',
                        borderBottom: '1px dotted black'
                     }}
                  >
                     {history?.patientData?.lastName}
                  </p>
               </div>
               <div className="flex flex-row gap-1">
                  <p>Өөрийн нэр:</p>
                  <p
                     style={{
                        width: 'calc(100% - 140px)',
                        borderBottom: '1px dotted black'
                     }}
                  >
                     {history?.patientData?.firstName}
                  </p>
               </div>
            </div>
            <div className="flex flex-row gap-4">
               <div className="flex flex-row gap-1 items-center">
                  <p>Хүйс:</p>
                  <Checkbox.Group className="story" value={[history?.patientData?.genderType]}>
                     <Checkbox value={'MAN'} className="test">
                        <span className="text-[13px]">эрэгтэй</span>
                     </Checkbox>
                     <Checkbox value={'WOMAN'} className="test">
                        <span className="text-[13px]">эмэгтэй</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
               <div className="flex flex-row gap-1">
                  <p>Нас:</p>
                  <p>{getAge(history?.patientData?.registerNumber)}</p>
               </div>
            </div>
            <div className="grid grid-cols-2">
               <div className="flex flex-row gap-1">
                  <div className="grid grid-cols-3 w-full">
                     <div className="flex flex-row gap-1 w-full">
                        <p
                           className="text-[14px] text-center w-full"
                           style={{
                              borderBottom: '1px dotted black'
                           }}
                        >
                           {dayjs(history?.createdAt).format('YYYY')}
                        </p>
                        <p>оны</p>
                     </div>
                     <div className="flex flex-row gap-1 w-full">
                        <p
                           className="text-[14px] text-center w-full"
                           style={{
                              borderBottom: '1px dotted black'
                           }}
                        >
                           {dayjs(history?.createdAt).format('MM')}
                        </p>
                        <p>сарын</p>
                     </div>
                     <div className="flex flex-row gap-1 w-full">
                        <p
                           className="text-[14px] text-center w-full"
                           style={{
                              borderBottom: '1px dotted black'
                           }}
                        >
                           {dayjs(history?.createdAt).format('DD')}
                        </p>
                        <p>-нд</p>
                     </div>
                  </div>
               </div>
               <div className="flex flex-row gap-1">
                  <p
                     style={{
                        textAlign: 'center',
                        width: '100%',
                        borderBottom: '1px dotted black'
                     }}
                  >
                     {getIncomeDiagnose()}
                  </p>
               </div>
            </div>
            <p>оношоор эмнэлэгт __________ хоног хэвтэж эмчлүүлэв.</p>
            <div className="flex flex-row gap-1 w-full">
               <p className="text-[14px]">Нийт хэрэглэсэн эмийн зардал ( ₮ ): нийт дүн</p>
               <p
                  style={{
                     textAlign: 'center',
                     width: 'calc(100% - 600px)',
                     borderBottom: '1px dotted black'
                  }}
               >
                  {numberToCurrency(formData?.q1)}
               </p>
               <p className="text-[14px]">тасагт </p>
            </div>
            <div className="grid grid-cols-3">
               <div className="flex flex-row gap-1 w-full">
                  <p
                     style={{
                        textAlign: 'center',
                        width: '100%',
                        borderBottom: '1px dotted black'
                     }}
                  >
                     {numberToCurrency(formData?.q2)}
                  </p>
                  <p>хагалгаанд</p>
               </div>
               <div className="flex flex-row gap-1 w-full">
                  <p
                     style={{
                        textAlign: 'center',
                        width: '45%',
                        borderBottom: '1px dotted black'
                     }}
                  >
                     {numberToCurrency(formData?.q3)}
                  </p>
                  <p>мэдээ алдуулалтанд</p>
               </div>
               <div className="flex flex-row gap-1 w-full">
                  <p
                     style={{
                        textAlign: 'center',
                        width: '100%',
                        borderBottom: '1px dotted black'
                     }}
                  >
                     {numberToCurrency(formData?.q4)}
                  </p>
               </div>
            </div>
            <Row className="flex justify-between">
               <Col span={8}>
                  <table
                     style={{
                        borderWidth: '1px',
                        borderColor: '#aaaaaa',
                        borderStyle: 'solid',
                        width: '100%',
                        marginTop: 20
                     }}
                     className="border-collapse border border-slate-500"
                  >
                     <thead>
                        <tr>
                           <th className="border border-slate-600 font-normal">Биеийн байдал</th>
                           <th className="border border-slate-600 font-normal">Ирэх үед</th>
                           <th className="border border-slate-600 font-normal">Гарах үед</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td className="border border-slate-600">Хөнгөн</td>
                           <td className="border border-slate-600 text-center"></td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q6, 1)}</td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Дунд</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q5, 1)}</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q6, 2)}</td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Хүндэвтэр</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q5, 2)}</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q6, 3)}</td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Хүнд</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q5, 3)}</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q6, 4)}</td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Маш хүнд</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q5, 4)}</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q6, 5)}</td>
                        </tr>
                     </tbody>
                  </table>
               </Col>
               <Col span={13}>
                  <table
                     style={{
                        borderWidth: '1px',
                        borderColor: '#aaaaaa',
                        borderStyle: 'solid',
                        width: '100%',
                        marginTop: 20
                     }}
                     className="border-collapse border border-slate-500"
                  >
                     <thead>
                        <tr>
                           <th colSpan="4" className="border border-slate-600 font-normal text-center">
                              Хийгдсэн шинжилгээ
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td className="border border-slate-600 font-normal">Эмнэл зүйн</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 1)}</td>
                           <td className="border border-slate-600">Гэрлийн</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 8)}</td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Биохими</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 2)}</td>
                           <td className="border border-slate-600">ЭКГ</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 9)}</td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Нян судлал</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 3)}</td>
                           <td className="border border-slate-600">ЭХО</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 10)}</td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Вирус</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 4)}</td>
                           <td className="border border-slate-600">ЭХО</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 11)}</td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Эд, эсийн</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 5)}</td>
                           <td className="border border-slate-600">Компьютер томографи</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 12)}</td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Иммунологи</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 6)}</td>
                           <td className="border border-slate-600">Соронзон томографи</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 13)}</td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Шимэгч хорхойн өндөг үзэх</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 7)}</td>
                           <td className="border border-slate-600">Хийгдээгүй</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q7, 14)}</td>
                        </tr>
                     </tbody>
                  </table>
               </Col>
            </Row>
            <div className="flex flex-col gap-2">
               <div className="flex flex-row gap-1">
                  <p>Үндсэн онош:</p>
                  <p
                     style={{
                        textAlign: 'center',
                        width: '80%',
                        borderBottom: '1px dotted black'
                     }}
                  >
                     {getDiagnose()}
                  </p>
               </div>
               <div className="flex flex-row gap-1">
                  <p>Хүндрэл:</p>
                  <p
                     style={{
                        textAlign: 'center',
                        width: '80%',
                        borderBottom: '1px dotted black'
                     }}
                  >
                     {getDiagnose()}
                  </p>
               </div>
               <div className="flex flex-row gap-1">
                  <p>Дагалдах онош:</p>
                  <p
                     style={{
                        textAlign: 'center',
                        width: '80%',
                        borderBottom: '1px dotted black'
                     }}
                  >
                     {getDiagnose()}
                  </p>
               </div>
               <div className="flex flex-wrap">
                  <p>
                     {`Шинжилгээний өөрчлөлтүүд /зөвхөн өөрчлөлт бүхий шинжилгээний үзүүлэлтүүдийг бичнэ/: `}
                     <span className="underline">{formData?.q11}</span>
                  </p>
               </div>
               <div className="flex flex-wrap">
                  <p>
                     {`Цусны ерөнхий шинжилгээ: `}
                     <span className="underline">{formData?.q12}</span>
                  </p>
               </div>
               <div className="flex flex-wrap">
                  <p>
                     {`Цусны биохимийн шинжилгээ: `}
                     <span className="underline">{formData?.q13}</span>
                  </p>
               </div>
               <div className="flex flex-wrap">
                  <p>
                     {`Вирүс, маркерийн шинжилгээ: `}
                     <span className="underline">{formData?.q13}</span>
                  </p>
               </div>
            </div>
            <Row className="flex justify-between">
               <Col span={8}>
                  <table
                     style={{
                        borderWidth: '1px',
                        borderColor: '#aaaaaa',
                        borderStyle: 'solid',
                        width: '100%',
                        marginTop: 20
                     }}
                     className="border-collapse border border-slate-500"
                  >
                     <tbody>
                        <tr>
                           <td
                              rowSpan={5}
                              className="border border-slate-600"
                              style={{
                                 writingMode: 'vertical-rl',
                                 textAlign: 'center',
                                 verticalAlign: 'middle',
                                 transform: 'rotate(180deg)',
                                 height: 120
                              }}
                           >
                              Хийгдсэн эмчилгээ
                           </td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Эмийн</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q15, 1)}</td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Эмийн бус</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q15, 2)}</td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Мэс заслын</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q15, 3)}</td>
                        </tr>
                        <tr>
                           <td className="border border-slate-600">Бусад</td>
                           <td className="border border-slate-600 text-center">{getBodyCondition(formData?.q15, 4)}</td>
                        </tr>
                     </tbody>
                  </table>
               </Col>
               <Col span={14}>
                  <div className="border border-black mt-[20px]">
                     <div className="flex flex-wrap">
                        <p className="mt-2">
                           {`Бусад эмчилгээ: `}
                           <span className="underline">{formData?.q16}</span>
                        </p>
                     </div>
                     <Checkbox.Group className="story" value={[formData?.q17]}>
                        {`Цус, цусан бүтээгдэхүүн сэлбэсэн эсэх `}
                        <Checkbox value={'q17-1'} className="test">
                           <span className="text-[13px]">тийм</span>
                        </Checkbox>
                        ,
                        <Checkbox value={'q17-2'} className="test">
                           <span className="text-[13px]">үгүй</span>
                        </Checkbox>
                        - /зур/
                     </Checkbox.Group>
                  </div>
               </Col>
            </Row>
            <div className="flex flex-col gap-1 pt-2">
               <div className="flex flex-wrap">
                  <span>
                     <Checkbox.Group className="story" value={[formData?.q18]}>
                        {`Мэс заслын эмчилгээ - `}
                        <Checkbox value={'q18-1'} className="test">
                           <span className="text-[13px]">хийсэн</span>
                        </Checkbox>
                        ,
                        <Checkbox value={'q18-2'} className="test">
                           <span className="text-[13px]">үгүй</span>
                        </Checkbox>
                        {` /зур/ `}
                     </Checkbox.Group>
                     {`Мэс заслын нэр `}
                     <span className="underline">{formData?.q11}</span>
                  </span>
               </div>
               <Checkbox.Group className="story" value={[formData?.q19]}>
                  {`Шарх эдгэрэлт - `}
                  <Checkbox value={'q19-1'} className="test">
                     <span className="text-[13px]">анхдагчаар</span>
                  </Checkbox>
                  ,
                  <Checkbox value={'q19-2'} className="test">
                     <span className="text-[13px]">хоёрдогчоор</span>
                  </Checkbox>
                  /зур/
               </Checkbox.Group>
               <div className="flex flex-wrap">
                  <span>
                     <Checkbox.Group className="story" value={[formData?.q20]}>
                        {`Мэс заслын дараах хүндрэл - `}
                        <Checkbox value={'q20-1'} className="test">
                           <span className="text-[13px]">байсан</span>
                        </Checkbox>
                        ,
                        <Checkbox value={'q20-2'} className="test">
                           <span className="text-[13px]">үгүй</span>
                        </Checkbox>
                        {` /зур/ `}
                     </Checkbox.Group>
                     {` Хүндрэлийн нэр `}
                     <span className="underline">{formData?.q11}</span>
                  </span>
               </div>
            </div>
            <div className="flex flex-col gap-1 items-center">
               <p>Эмчлэгч эмч _________________________</p>
               <p>__________ он ______ сар ______ өдөр</p>
            </div>
         </div>
      </div>
   );
};
export default CT1End;
