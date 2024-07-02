import { Checkbox, Col, Row } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { getAge, numberToCurrency } from '../../../common';
import dayjs from 'dayjs';
import EmrContext from '../../../../features/EmrContext';
import { Box, FlexCol, FlexRow, Paragraph, TextUnderline, TextUnderlineGroup, TextWithUnderline } from '../Components';
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
            <FlexCol >
               <FlexRow>
                  <Box left top width={"110px"} >
                     <Paragraph>Биеийн байдал</Paragraph>
                  </Box>
                  <Box left top width={"60px"} >
                     <Paragraph>Ирэх үед</Paragraph>
                  </Box>
                  <Box left top right width={"50px"} >
                     <Paragraph style={{ textAlign: "center", alignItems: "center" }}>Гарах үед</Paragraph>
                  </Box>
                  <Box width={"20px"}></Box>
                  <Box left top right width={"300px"} >
                     <Paragraph style={{ textAlign: "center" }}>Хийгдсэн шинжилгээ</Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={"110px"} >
                     <Paragraph>Хөнгөн</Paragraph>
                  </Box>
                  <Box left top width={"60px"} >
                     <Paragraph>Ирэх үед</Paragraph>
                  </Box>
                  <Box left top right width={"50px"} >
                     <Paragraph style={{ textAlign: "center", alignItems: "center" }}>1</Paragraph>
                  </Box>
                  <Box width={"20px"}></Box>
                  <Box left top width={"80px"} >
                     <Paragraph style={{ textAlign: "center" }}>Эмнэл зүйн</Paragraph>
                  </Box>
                  <Box left top width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>1</Paragraph>
                  </Box>
                  <Box left top width={"81px"} >
                     <Paragraph style={{ textAlign: "center" }}>Гэрлийн</Paragraph>
                  </Box>
                  <Box left top right width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>8</Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={"110px"} >
                     <Paragraph>Дунд</Paragraph>
                  </Box>
                  <Box left top width={"60px"} >
                     <Paragraph>1</Paragraph>
                  </Box>
                  <Box left top right width={"50px"} >
                     <Paragraph style={{ textAlign: "center", alignItems: "center" }}>2</Paragraph>
                  </Box>
                  <Box width={"20px"}></Box>
                  <Box left top width={"80px"} >
                     <Paragraph style={{ textAlign: "center" }}>Биохими </Paragraph>
                  </Box>
                  <Box left top width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>2</Paragraph>
                  </Box>
                  <Box left top width={"81px"} >
                     <Paragraph style={{ textAlign: "center" }}>ЭКГ</Paragraph>
                  </Box>
                  <Box left top right width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>9</Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={"110px"} >
                     <Paragraph>Хүндэвтэр</Paragraph>
                  </Box>
                  <Box left top width={"60px"} >
                     <Paragraph>2</Paragraph>
                  </Box>
                  <Box left top right width={"50px"} >
                     <Paragraph style={{ textAlign: "center", alignItems: "center" }}>3</Paragraph>
                  </Box>
                  <Box width={"20px"}></Box>
                  <Box left top width={"80px"} >
                     <Paragraph style={{ textAlign: "center" }}>Нян судлал </Paragraph>
                  </Box>
                  <Box left top width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>3</Paragraph>
                  </Box>
                  <Box left top width={"81px"} >
                     <Paragraph style={{ textAlign: "center" }}>ЭХО</Paragraph>
                  </Box>
                  <Box left top right width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>10</Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={"110px"} >
                     <Paragraph>Хүнд</Paragraph>
                  </Box>
                  <Box left top width={"60px"} >
                     <Paragraph>3</Paragraph>
                  </Box>
                  <Box left top right width={"50px"} >
                     <Paragraph style={{ textAlign: "center", alignItems: "center" }}>4</Paragraph>
                  </Box>
                  <Box width={"20px"}></Box>
                  <Box left top width={"80px"} >
                     <Paragraph style={{ textAlign: "center" }}>Вирус </Paragraph>
                  </Box>
                  <Box left top width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>4</Paragraph>
                  </Box>
                  <Box left top width={"81px"} >
                     <Paragraph style={{ textAlign: "center" }}>Уян дуран</Paragraph>
                  </Box>
                  <Box left top right width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>11</Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top bottom width={"110px"} >
                     <Paragraph>Маш хүнд</Paragraph>
                  </Box>
                  <Box left top bottom width={"60px"} >
                     <Paragraph>4</Paragraph>
                  </Box>
                  <Box left top right bottom width={"50px"} >
                     <Paragraph style={{ textAlign: "center", alignItems: "center" }}>5</Paragraph>
                  </Box>
                  <Box width={"20px"}></Box>
                  <Box left top width={"80px"} >
                     <Paragraph style={{ textAlign: "center" }}>Эд, эсийн </Paragraph>
                  </Box>
                  <Box left top width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>5</Paragraph>
                  </Box>
                  <Box left top width={"81px"} >
                     <Paragraph style={{ textAlign: "center" }}>Компьютер томографи</Paragraph>
                  </Box>
                  <Box left top right width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>12</Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box width={"110px"} >
                     <Paragraph></Paragraph>
                  </Box>
                  <Box width={"60px"} >
                     <Paragraph></Paragraph>
                  </Box>
                  <Box width={"50px"} >
                     <Paragraph style={{ textAlign: "center", alignItems: "center" }}></Paragraph>
                  </Box>
                  <Box width={"24px"}></Box>
                  <Box left top width={"80px"} >
                     <Paragraph style={{ textAlign: "center" }}>Эд, эсийн </Paragraph>
                  </Box>
                  <Box left top width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>5</Paragraph>
                  </Box>
                  <Box left top width={"81px"} >
                     <Paragraph style={{ textAlign: "center" }}>Компьютер томографи</Paragraph>
                  </Box>
                  <Box left top right width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>12</Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box width={"110px"} >
                     <Paragraph></Paragraph>
                  </Box>
                  <Box width={"60px"} >
                     <Paragraph></Paragraph>
                  </Box>
                  <Box width={"50px"} >
                     <Paragraph style={{ textAlign: "center", alignItems: "center" }}></Paragraph>
                  </Box>
                  <Box width={"24px"}></Box>
                  <Box left top bottom width={"80px"} >
                     <Paragraph style={{ textAlign: "center" }}>Иммунологи
                     </Paragraph>
                  </Box>
                  <Box left top bottom width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>6</Paragraph>
                  </Box>
                  <Box left top bottom width={"81px"} >
                     <Paragraph style={{ textAlign: "center" }}>Соронзон томографи</Paragraph>
                  </Box>
                  <Box left top right bottom width={"50px"} >
                     <Paragraph style={{ textAlign: "center" }}>13</Paragraph>
                  </Box>
               </FlexRow>
            </FlexCol>
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
            <FlexRow>
               <FlexCol>
                  <Box left top style={{}} >Хийгдсэн эмчилгээ</Box>
               </FlexCol>
               <FlexCol>
                  <Box left top>Эмийн</Box>
                  <Box left top>Эмийн бус</Box>
                  <Box left top>Мэс заслын</Box>
                  <Box left top>Бусад</Box>
               </FlexCol>
               <FlexCol>
                  <Box left top>1</Box>
                  <Box left top>2</Box>
                  <Box left top>3</Box>
                  <Box left top>4</Box>
               </FlexCol>
               <FlexCol>
                  <Box left top right>q</Box>
                  <Box left top>q</Box>
                  <Box left top>q</Box>
                  <Box left top>q</Box>
               </FlexCol>
            </FlexRow>
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
         </div>
      </div >
   );
};
export default CT1End;
