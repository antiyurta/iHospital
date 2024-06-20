import { Checkbox, Col, Row } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { getAge, numberToCurrency } from '../../../common';
import dayjs from 'dayjs';
import EmrContext from '../../../../features/EmrContext';
import { Box, FlexRow, Paragraph, TextUnderline, TextUnderlineGroup, TextWithUnderline } from '../Components';
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
            <Box>
               <Paragraph style={{ textAlign: "center" }}>ЭМНЭЛГЭЭС ГАРАХ, ШИЛЖИХ ҮЕИЙН ДҮГНЭЛТ</Paragraph>
            </Box>
            <Box style={{ display: "flex", gap: "50px" }}>
               <Paragraph>Эцэг /эх/-ийн нэр:
                  <TextWithUnderline >{history?.patientData?.lastName}</TextWithUnderline>
               </Paragraph>
               <Paragraph>Өөрийн нэр:
                  <TextWithUnderline>{history?.patientData?.firstName}</TextWithUnderline>
               </Paragraph>
            </Box>
            <FlexRow>
               <Box style={{ display: "flex", textAlign: 'center' }}>
                  <Paragraph>Хүйс</Paragraph>
                  <Checkbox.Group className="story" value={[history?.patientData?.genderType]}>
                     <Checkbox value={'MAN'} className="test">
                        <span className="text-[13px]">эрэгтэй</span>
                     </Checkbox>
                     <Checkbox value={'WOMAN'} className="test">
                        <span className="text-[13px]">эмэгтэй</span>
                     </Checkbox>
                  </Checkbox.Group>
               </Box>
               <Box>
                  Нас:
                  <TextWithUnderline>{getAge(history?.patientData?.registerNumber)}</TextWithUnderline>
               </Box>
               <Box style={{ display: "flex", gap: "10px" }}>
                  <Paragraph>{dayjs(history?.createdAt).format('YYYY')}оны</Paragraph>
                  <Paragraph>{dayjs(history?.createdAt).format('MM')}сарын</Paragraph>
                  <Paragraph>{dayjs(history?.createdAt).format('DD')}-нд</Paragraph>
                  <Paragraph>{getIncomeDiagnose()}</Paragraph>
               </Box>
            </FlexRow>
            <Box>
               <Paragraph>оношоор эмнэлэгт __________ хоног хэвтэж эмчлүүлэв.</Paragraph>
            </Box>
            <Box>
               <Paragraph>Нийт хэрэглэсэн эмийн зардал ( ₮ ): нийт дүн <span className='p-10 underline'>{numberToCurrency(formData?.q1)}</span> тасагт</Paragraph>
            </Box>
            <Box>
               <Paragraph><span className='p-10 underline'>{numberToCurrency(formData?.q2)}</span> хагалгаанд <span className='p-10 underline'>{numberToCurrency(formData?.q3)}</span> мэдээ алдуулалтанд <span className='p-10 underline'>{numberToCurrency(formData?.q4)}</span></Paragraph>
            </Box>









            <Box>
               Үндсэн онош:<span className='p-10 underline text-center'>{getDiagnose()}</span>
            </Box>
            <Box>
               Хүндрэл:<span className='p-10 underline  text-center'>{getDiagnose()}</span>
            </Box>
            <Box>
               Дагалдах онош:<span className='p-10 underline  text-center'>{getDiagnose()}</span>
            </Box>
            <Box>
               Шинжилгээний өөрчлөлтүүд /зөвхөн өөрчлөлт бүхий шинжилгээний үзүүлэлтүүдийг бичнэ/<span className='p-10 underline  text-center'>{formData?.q11}</span>
            </Box>
            <Box>
               Цусны ерөнхий шинжилгээ:<span className='p-10 underline  text-center'>{formData?.q12}</span>
            </Box>
            <Box>
               Цусны биохимийн шинжилгээ:<span className='p-10 underline  text-center'>{formData?.q13}</span>
            </Box>
            <Box>
               Вирүс, маркерийн шинжилгээ: <span className='p-10 underline  text-center'>{formData?.q14}</span>
            </Box>










            <Box>
               <Paragraph>Мэс заслын эмчилгээ -хийсэн,үгүй/зур/Мэс заслын нэр{formData?.q18}</Paragraph>
            </Box>
            <Box>
               <Paragraph>Шарх эдгэрэлт - анхдагчаар, хоёрдогчоор /зур/{formData?.q19}</Paragraph>
            </Box>
            <Box>
               <Paragraph>Мэс заслын дараах хүндрэл - байсан, үгүй /зур/{formData?.q20}</Paragraph>
            </Box>
            <Box>
               <Paragraph>Мэс заслын дараах хүндрэл -{formData?.['q20-1-1']}</Paragraph>
            </Box>
            <Box>
               <Paragraph>Эмчлэгч эмч _________________________</Paragraph>
               <Paragraph> __________ он ______ сар ______ өдөр</Paragraph>
            </Box>
            {/* <Row className="flex justify-between">
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
            </Row> */}
         </div>
         {/* <Row className="flex justify-between">
            {/* <Col span={8}>
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
            </Col> */}
         {/* <Col span={14}>
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
      </Row> * /} */}
         <div className="flex flex-col gap-1 items-center">
            <p>Эмчлэгч эмч _________________________</p>
            <p>__________ он ______ сар ______ өдөр</p>
         </div>
      </div >
   );
};
export default CT1End;
