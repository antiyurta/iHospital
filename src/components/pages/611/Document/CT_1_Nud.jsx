import React, { useEffect, useState } from 'react';
import { Box, Paragraph, DocumentCheckbox, DocumentCheckboxGroup, FlexRow, TextUnderline, TextUnderlineGroup, TextWithUnderline } from '../Components';

const CT_1_Nud = (props) => {
   const [formData, setFormData] = useState({});
   useEffect(() => {
      if (props?.data?.formData) {
         setFormData(props?.data?.formData);
      }
   }, [props]);
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <Box>
                  <Paragraph style={{ textAlign: "center" }}>Нүдний эмчийн үзлэг</Paragraph>
               </Box>
               <FlexRow>
                  <Box width={"34%"} left top >Биеийн ерөнхий байдал</Box>
                  <Box width={"33%"} left top>Ухаан санаа</Box>
                  <Box width={"33%"} left top right>Арьс салст</Box>
               </FlexRow>
               <FlexRow >
                  <Box left top width={"34%"} >
                     <DocumentCheckboxGroup value={formData?.q1}>
                        <DocumentCheckbox value={'q1-1'} title={"Дунд"} />
                        <DocumentCheckbox value={'q1-2'} title={"Хүндэвтэр"} />
                        <DocumentCheckbox value={'q1-3'} title={"Хүнд"} />
                        <DocumentCheckbox value={'q1-4'} title={"Маш хүнд"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"33%"}>
                     <DocumentCheckboxGroup value={formData?.q2}>
                        <DocumentCheckbox value={"q2-1"} title={"Саруул"} />
                        <DocumentCheckbox value={"q2-2"} title={"Бүдгэрсэн"} />
                        <DocumentCheckbox value={"q2-3"} title={"Ухаангүй"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={"33%"} style={{ display: "flex", }}>
                     <DocumentCheckboxGroup value={formData?.q3}>
                        <DocumentCheckbox value={"q3-1"} title={"Хэвийн"} />
                        <DocumentCheckbox value={"q3-2"} title={"Хэвийн бус"} />
                     </DocumentCheckboxGroup>
                     <TextWithUnderline>
                        <Paragraph style={{ marginTop: "15px" }}>({formData?.['q3-2-1']})</Paragraph>
                     </TextWithUnderline>

                  </Box>
               </FlexRow>
               <Box left top right>Амьсгалын эрхтэн тогтолцоо</Box>
               <FlexRow>
                  <Box left top width={'40%'}>
                     <Paragraph> Амьсгал 1 минутанд <span className='underline'>{formData?.q4}</span> удаа</Paragraph>
                  </Box>
                  <Box left top right width={'60%'}>
                     <Paragraph>Чагналтаар:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q5}>
                        <DocumentCheckbox value={"q5-1"} title={"Уушги цулцангийн"} />
                        <DocumentCheckbox value={"q5-2"} title={" Гуурсан хоолойн"} />
                        <DocumentCheckbox value={"q5-3"} title={" Хэржигнүүртэй"} />
                        <DocumentCheckbox value={"q5-4"} title={" Амьсгал сулавтар"} />
                     </DocumentCheckboxGroup>
                     <TextUnderlineGroup style={{ display: "flex" }} value={formData?.['q5-4-1']}  >
                        <TextUnderline value={'q5-4-1-1'} title={'(баруун'} />
                        <TextUnderline value={'q5-4-1-2'} title={'зүүн'} />
                        <TextUnderline value={'q5-4-1-3'} title={'2 талдаа)'} />
                     </TextUnderlineGroup>
                  </Box>
               </FlexRow>
               <Box left top right> Цусны эргэлтийн тогтолцоо</Box>
               <FlexRow>
                  <Box left top width={"23%"}>
                     <Paragraph>Судасны цохилт 1 минутанд <span className='underline p-2'>{formData?.q6}</span> удаа</Paragraph>
                     <Paragraph>Хүчдэл дүүрэлт <span className='underline p-2'>{formData?.q7}</span> </Paragraph>
                  </Box>
                  <Box width={"23%"} left top>
                     <Paragraph>Тогшилтоор:</Paragraph>
                     <Paragraph>Зүрхний хил:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q8}>
                        <DocumentCheckbox value={"q8-1"} title={"Хэвийн"} />
                        <DocumentCheckbox value={"q8-2"} title={"Томорсон "} />
                     </DocumentCheckboxGroup>
                     <TextUnderlineGroup style={{ display: "flex" }} value={formData?.['q8-2-1']}  >
                        <TextUnderline value={'q8-2-1-1'} title={'баруун'} />
                        <TextUnderline value={'q8-2-1-2'} title={'зүүн'} />
                     </TextUnderlineGroup>
                  </Box>
                  <Box width={'54%'} left top right >
                     <Paragraph>Чагналтаар:</Paragraph>
                     <Paragraph>Зүрхний авиа:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q9}>
                        <DocumentCheckbox value={"q9-1"} title={"Тод"} />
                        <DocumentCheckbox value={"q9-2"} title={"Бүдэг"} />
                        <DocumentCheckbox value={"q9-3"} title={"Бүдгэвтэр "} />
                        <DocumentCheckbox value={"q9-4"} title={"Хэм жигд "} />
                        <DocumentCheckbox value={"q9-5"} title={"Жигд бус "} />
                        <DocumentCheckbox value={"q9-6"} title={"Хэм алдалттай "} />
                     </DocumentCheckboxGroup>
                     <Paragraph style={{ display: "flex", gap: "4px" }}>
                        <Paragraph> АД баруун талд  <TextWithUnderline>{formData?.q10}</TextWithUnderline> </Paragraph>
                        <Paragraph> Зүүн талд       <TextWithUnderline>{formData?.q11}</TextWithUnderline> </Paragraph>
                     </Paragraph>
                  </Box>
               </FlexRow>
               <Box left top right>Хоол шингээх эрхтэн тогтолцоо</Box>
               <FlexRow>
                  <Box width={'40%'} left top>
                     <Paragraph>Хэл</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q12}>
                        <DocumentCheckbox value={"q12-1"} title={"Ердийн"} />
                        <DocumentCheckbox value={"q12-2"} title={"Хуурай"} />
                        <DocumentCheckbox value={"q12-3"} title={"Өнгөргүй"} />
                        <DocumentCheckbox value={"q12-4"} title={"Өнгөртэй"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={'60%'} left top right>
                     <Paragraph>Хэвлийн үзлэг:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q13}>
                        <DocumentCheckbox value={"q13-1"} title={"Өнгөц тэмтрэлтээр"} />
                        <DocumentCheckbox value={"q13-2"} title={"Гүн тэмтрэлтээр"} />
                        <DocumentCheckbox value={"q13-3"} title={"Эмзэглэлтэй"} />
                        <DocumentCheckbox value={"q13-4"} title={"Ердийн"} />
                        <DocumentCheckbox value={"q13-5"} title={"Зөөлөн гялтан цочрол үгүй"} />
                        <DocumentCheckbox value={"q13-6"} title={"Гялтан цочролын шинж илэрсэн"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left right top>Мэдрэлийн тогтолцоо</Box>
               <FlexRow>
                  <Box width={'50%'} left top >
                     <Paragraph>Сонсох чадвахи:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q14-2'} title={'Буурсан'} />
                     </DocumentCheckboxGroup>
                     <TextUnderlineGroup value={formData?.['q14-2-1']} style={{ display: "flex" }} >
                        <TextUnderline value={'q14-2-1-1'} title={'баруун'} />
                        <TextUnderline value={'q14-2-1-2'} title={'зүүн'} />
                     </TextUnderlineGroup>

                  </Box>
                  <Box width={'50%'} left top right>
                     <Paragraph>Рефлексүүд:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q15}>
                        <DocumentCheckbox value={'q15-1 '} title={'Хадгалагдана'} />
                        <DocumentCheckbox value={'q15-2 '} title={'Хадгалагдахгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph>Бусад:<TextWithUnderline>{formData?.q16}</TextWithUnderline></Paragraph>
                  <Paragraph>Сэтгэцийн байдал:<TextWithUnderline> {formData?.q17}</TextWithUnderline></Paragraph>
               </Box>
               <Box left top right>
                  <Paragraph style={{ textAlign: "center" }}>НҮДНИЙ ҮЗЛЭГ</Paragraph>
               </Box>
               <FlexRow >
                  <Box width={'15%'} left top >VOD</Box>
                  <Box width={'15%'} left top >{formData?.['q18-1']}</Box>
                  <Box width={'15%'} left top >ph</Box>
                  <Box width={'55%'} left top right>{formData?.['q18-2']}</Box>
               </FlexRow>
               <FlexRow>
                  <Box width={'15%'} left top>VOS</Box>
                  <Box width={'15%'} left top>{formData?.['q18-3']}</Box>
                  <Box width={'15%'} left top>ph</Box>
                  <Box width={'55%'} left top right>{formData?.['q18-4']}</Box>
               </FlexRow>
               {tableData.map((item, index) => (
                  <Box key={index} left top right style={{ height: "23px" }}>
                     {item.data}
                     {formData?.[item.value]}
                  </Box>
               ))}
               <Box left top right bottom style={{ height: "23px" }}>Бусад: {formData?.q32}</Box>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Box left top right >
                  <Paragraph style={{ textAlign: "center" }}>НҮДНИЙ ШИНЖИЛГЭЭ</Paragraph>
               </Box>
               {tableData2.map((item, index) => (
                  <Box left top right key={index} >
                     {item.data}
                     {formData?.[item.value]}
                  </Box>
               ))}
               {tableData3.map((item, index) => (
                  <Box left top right key={index} style={{ height: "25px" }}>
                     {item.data}
                     {formData?.[item.value]}
                  </Box>
               ))}
               <Box left top right bottom style={{ height: "25px" }}>Бусад{formData?.q48}</Box>
            </div>
         </div>
      </div >
   );
};
export default CT_1_Nud;
const tableData = [
   { data: 'Өнгө танилт: ', value: 'q19' },
   { data: 'Нүдний хөдөлгөөн:', value: 'q20' },
   { data: 'Нулимсны зам:', value: 'q21' },
   { data: 'Зовхи: ', value: 'q22' },
   { data: 'Салст: ', value: 'q23' },
   { data: 'Склер: ', value: 'q24' },
   { data: 'Эвэрлэг: ', value: 'q25' },
   { data: 'Өмнөд таславч:: ', value: 'q26' },
   { data: 'Солонгон бүрхүүл:', value: 'q27' },
   { data: 'Хүүхэн хараа:', value: 'q28' },
   { data: 'Болор:', value: 'q29' },
   { data: 'Шилэнцэр:', value: 'q30' },
   { data: 'Нүдний уг:', value: 'q31' },
];
const tableData4 = [
   { data: 'Өвчин эхэлсэн хугацаа:он_______сар___өдөр___', style: { height: '65px' } },
   { data: 'Нүдний эмчилгээ хийлгэж байсан эсэх:', style: { height: '65px' } },
   { data: 'Нүдний мэс засал хийлгэж байсан эсэх :', style: { height: '65px' } },
   { data: 'Удамшлын анамнез:', style: { height: '65px' } }
];
const tableData5 = [
   { data: 'Үндсэн онош', style: { height: '65px' } },
   { data: 'Дагалдах онош', style: { height: '100px' } },
   { data: 'Хүндрэл', style: { height: '150px' } }
];

const tableData3 = [
   { data: 'Schirmer test:', style: { height: '50px' }, value: 'q36' },
   { data: 'A scan:', style: { height: '50px' }, value: 'q37' },
   { data: 'B scan:', style: { height: '50px' }, value: 'q38' },
   { data: 'CCT: ', style: { height: '50px' }, value: 'q39' },
   { data: 'Gonioscopy: ', style: { height: '78px' }, value: 'q40' },
   { data: 'OCT (ONH: ', style: { height: '48px' }, value: 'q41' },
   { data: 'OCT (Macula):', style: { height: '48px' }, value: 'q42' },
   { data: 'Humphrey: ', style: { height: '48px' }, value: 'q43' },
   { data: 'FFA: ', style: { height: '48px' }, value: 'q44' },
   { data: 'X-ray:', style: { height: '48px' }, value: 'q45' },
   { data: 'CT: ', style: { height: '48px' }, value: 'q46' },
   { data: 'MRI: ', style: { height: '48px' }, value: 'q47' },
];
const tableData2 = [
   { data: 'Autorefractometer:', value: 'q33' },
   { data: 'Tonometer', value: 'q34' },
   { data: 'Exophthalmometer:', value: 'q35' }
];
