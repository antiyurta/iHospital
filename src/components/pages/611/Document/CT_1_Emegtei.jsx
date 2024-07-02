import React, { useEffect, useState } from 'react';
import { Box, Paragraph, DocumentCheckbox, DocumentCheckboxGroup, FlexRow, TextUnderline, TextUnderlineGroup, TextWithUnderline, TextWithUnderline2, } from '../Components';

const CT_1_Emegtei = (props) => {
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
                  <Paragraph style={{ textAlign: "center" }}>ЭМЭГТЭЙЧҮҮДИЙН ЭМЧИЙН ҮЗЛЭГ</Paragraph>
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
                        <Paragraph> АД баруун талд  <TextWithUnderline>{formData?.['q9-6-1']}</TextWithUnderline> </Paragraph>
                        <Paragraph> Зүүн талд       <TextWithUnderline>{formData?.['q9-6-2']}</TextWithUnderline> </Paragraph>
                     </Paragraph>
                  </Box>
               </FlexRow>
               <Box left top right>Хоол шингээх эрхтэн тогтолцоо</Box>
               <FlexRow>
                  <Box width={'40%'} left top>
                     <Paragraph>Хэл</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q10}>
                        <DocumentCheckbox value={"q10-1"} title={"Ердийн"} />
                        <DocumentCheckbox value={"q10-2"} title={"Хуурай"} />
                        <DocumentCheckbox value={"q10-3"} title={"Өнгөргүй"} />
                        <DocumentCheckbox value={"q10-4"} title={"Өнгөртэй"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={'60%'} left top right>
                     <Paragraph>Хэвлийн үзлэг:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q11}>
                        <DocumentCheckbox value={"q11-1"} title={"Өнгөц тэмтрэлтээр"} />
                        <DocumentCheckbox value={"q11-2"} title={"Гүн тэмтрэлтээр"} />
                        <DocumentCheckbox value={"q11-3"} title={"Эмзэглэлтэй"} />
                        <DocumentCheckbox value={"q11-4"} title={"Ердийн"} />
                        <DocumentCheckbox value={"q11-5"} title={"Зөөлөн гялтан цочрол үгүй"} />
                        <DocumentCheckbox value={"q11-6"} title={"Гялтан цочролын шинж илэрсэн"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left right top>Мэдрэлийн тогтолцоо</Box>
               <FlexRow>
                  <Box width={'50%'} left top >
                     <Paragraph>Сонсох чадвахи:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q12}>
                        <DocumentCheckbox value={'q12-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q12-2'} title={'Буурсан'} />
                     </DocumentCheckboxGroup>
                     <TextUnderlineGroup value={formData?.['q12-2-1']} style={{ display: "flex" }} >
                        <TextUnderline value={'q12-2-1-1'} title={'баруун'} />
                        <TextUnderline value={'q12-2-1-2'} title={'зүүн'} />
                     </TextUnderlineGroup>

                  </Box>
                  <Box width={'50%'} left top right>
                     <Paragraph>Рефлексүүд:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q13}>
                        <DocumentCheckbox value={'q13-1 '} title={'Хадгалагдана'} />
                        <DocumentCheckbox value={'q13-2 '} title={'Хадгалагдахгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph>Бусад:<TextWithUnderline>{formData?.q14}</TextWithUnderline></Paragraph>
                  <Paragraph>Сэтгэцийн байдал:<TextWithUnderline> {formData?.q15}</TextWithUnderline></Paragraph>
               </Box>
               <Box left top right>
                  <Paragraph style={{ textAlign: "center" }}>ЭХ БАРИХ, ЭМЭГТЭЙЧҮҮДИЙН ҮЗЛЭГ</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={'50%'}>
                     <Paragraph>Анхны биений юм хэдэн настайд ирсэн
                        <TextWithUnderline>{formData?.q16}</TextWithUnderline>
                     </Paragraph>
                  </Box>
                  <Box top right width={'50%'}>
                     <Paragraph>Биений юмны мөчлөгийн хоног
                        <TextWithUnderline>{formData?.q17}</TextWithUnderline>
                     </Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'50%'}>
                     <Paragraph>Биений юмны үргэлжлэх хугацаа
                        <TextWithUnderline>{formData?.q18}</TextWithUnderline>
                     </Paragraph>
                  </Box>
                  <Box top right width={'50%'} style={{ display: 'flex' }}>
                     <Paragraph>Биений юмны хэмжээ:</Paragraph>
                     <TextUnderlineGroup style={{ display: 'flex' }} value={formData?.q19}>
                        <TextUnderline value={'q19-1'} title={'бага'} />
                        <TextUnderline value={'q19-2'} title={'дунд'} />
                        <TextUnderline value={'q19-3'} title={'их'} />
                     </TextUnderlineGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'50%'}>
                     <Paragraph>Сүүлийн биений юм хэзээ ирсэн:
                        <TextWithUnderline>{formData?.q20}</TextWithUnderline>
                     </Paragraph>
                  </Box>
                  <Box top width={'30%'} style={{ display: "flex" }}>
                     <Paragraph >Цэвэршсэн: /зур/</Paragraph>
                     <TextUnderlineGroup style={{ display: 'flex' }} value={formData?.q21}>
                        <TextUnderline value={'q21-1'} title={'тийм'} />
                        <TextUnderline value={'q21-2'} title={'үгүй'} />
                     </TextUnderlineGroup>
                  </Box>
                  <Box top right width={'20%'}>
                     <Paragraph>Хэдэн онд
                        <TextWithUnderline>{formData?.q22}</TextWithUnderline>
                     </Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'25%'}>
                     <Paragraph>Жирэмслэлтийн тоо
                        <TextWithUnderline>{formData?.q23}</TextWithUnderline>
                     </Paragraph>
                  </Box>
                  <Box top width={'25%'}>
                     <Paragraph>үүнээс төрсөн
                        <TextWithUnderline>{formData?.q24}</TextWithUnderline>
                     </Paragraph>
                  </Box>
                  <Box top width={'25%'}>
                     <Paragraph>зулбасан
                        <TextWithUnderline>{formData?.q25}</TextWithUnderline>
                     </Paragraph>
                  </Box>
                  <TextWithUnderline>{formData?.q26}</TextWithUnderline>
                  <Box top right width={'25%'}>
                     <Paragraph>үр хөндүүлсэн

                        <TextWithUnderline>{formData?.q27}</TextWithUnderline>
                     </Paragraph>
                  </Box>
               </FlexRow>
               <Box left top right >Эх барих, эмэгтэйчүүдийн тусгайлсан үзлэг:
                  <TextWithUnderline>{formData?.q28}</TextWithUnderline>
               </Box>
               <Box left top right bottom >Тольны үзлэг:PV:
                  <TextWithUnderline>{formData?.q29}</TextWithUnderline>
               </Box>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Emegtei;
