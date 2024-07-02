import React, { useEffect, useState } from 'react';
import { Box, Paragraph, DocumentCheckbox, DocumentCheckboxGroup, FlexRow, TextUnderline, TextUnderlineGroup, TextWithUnderline } from '../Components';

const CT_1_Zurh = (props) => {
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
                  <Paragraph style={{ textAlign: "center" }}>ЗҮРХНИЙ ЭМЧИЙН ҮЗЛЭГ</Paragraph>
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
                     <Paragraph> Амьсгал 1 минутанд <TextWithUnderline>{formData?.q4}</TextWithUnderline> удаа</Paragraph>
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
                     <Paragraph>Судасны цохилт 1 минутанд <TextWithUnderline>{formData?.q6}</TextWithUnderline> удаа</Paragraph>
                     <Paragraph>Хүчдэл дүүрэлт <TextWithUnderline>{formData?.q7}</TextWithUnderline>  </Paragraph>
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
                  <Paragraph style={{ textAlign: "center" }}>Анамнез</Paragraph>
               </Box>
               <Box left top right>
                  <Paragraph>Зовиур, өвчний түүх:
                     <TextWithUnderline>{formData?.q18}</TextWithUnderline>
                  </Paragraph>
               </Box>
               <Box left top right>
                  <Paragraph>Зүрх судасны эрсдэлт хүчин зүйлс:
                     <TextWithUnderline>{formData?.q19}</TextWithUnderline>
                  </Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={"50%"} >
                     <DocumentCheckboxGroup value={formData?.q20}>
                        <DocumentCheckbox value={'q20-1 '} title={'Зохисгүй хооллолт'} />
                        <DocumentCheckbox value={'q20-2 '} title={'Хөдөлгөөний хомсдол'} />
                        <DocumentCheckbox value={'q20-3 '} title={'Стресс'} />
                        <DocumentCheckbox value={'q20-4 '} title={'Таргалалт'} />
                        <DocumentCheckbox value={'q20-5 '} title={'Тамхидалт'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={"50%"}>
                     <DocumentCheckboxGroup value={formData?.q20}>
                        <DocumentCheckbox value={'q20-6 '} title={'Архины зохисгүй хэрэглээ'} />
                        <DocumentCheckbox value={'q20-7 '} title={'Удамшил'} />
                        <DocumentCheckbox value={'q20-8 '} title={'Артерийн гипертензи'} />
                        <DocumentCheckbox value={'q20-9 '} title={'Гиперхолестеринеми'} />
                        <DocumentCheckbox value={'q20-10 '} title={'Чихрийн шижин'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph style={{ textAlign: "center" }}>Бодит үзлэг</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={"50%"}>
                     <Paragraph>Ажиглалт</Paragraph>
                  </Box>
                  <Box left top right width={"50%"}>
                     <Paragraph>Чагналт</Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top bottom width={"50%"}>
                     <Paragraph>Арьсны хөхрөлт бий эсэх:</Paragraph>
                     <Paragraph style={{ display: 'flex', alignItems: "end" }}>
                        <DocumentCheckboxGroup value={formData?.q21}>
                           <DocumentCheckbox value={'q21-1 '} title={'Үгүй'} />
                           <DocumentCheckbox value={'q21-2 '} title={'Тийм'} />
                        </DocumentCheckboxGroup>
                        <TextWithUnderline>{formData?.['q21-2-1']}</TextWithUnderline>
                     </Paragraph>
                     <Paragraph>Захын хаван бий эсэх:</Paragraph>
                     <Paragraph style={{ display: 'flex', alignItems: "end" }} >
                        <DocumentCheckboxGroup value={formData?.q22}>
                           <DocumentCheckbox value={'q22-1 '} title={'Үгүй'} />
                           <DocumentCheckbox value={'q22-2 '} title={'Тийм'} />
                        </DocumentCheckboxGroup>
                        <TextWithUnderline>{formData?.['q22-2-1']}</TextWithUnderline>
                     </Paragraph>
                     <Paragraph>Гүрээний венийн лугшилт:</Paragraph>
                     <Paragraph>
                        <DocumentCheckboxGroup value={formData?.q23}>
                           <DocumentCheckbox value={'q23-1 '} title={'Ажиглагдахгүй'} />
                           <DocumentCheckbox value={'q23-2 '} title={'Ажиглагдана'} />
                        </DocumentCheckboxGroup>
                        <TextUnderlineGroup value={formData?.['q23-2-1']} style={{ display: "flex" }} >
                           <TextUnderline value={'q23-2-1-1'} title={'хүчтэй'} />
                           <TextUnderline value={'q23-2-1-2'} title={'дунд'} />
                           <TextUnderline value={'q23-2-1-3'} title={'сул'} />
                        </TextUnderlineGroup>
                     </Paragraph>
                     <Paragraph>Зүрхний оройн түлхэлт:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q24}>
                        <DocumentCheckbox value={'q24-1 '} title={'Ажиглагдана'} />
                        <DocumentCheckbox value={'q24-2 '} title={'Ажиглагдахгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left right bottom width={"50%"}>
                     <Paragraph>Артерийн даралт хэмжилт:</Paragraph>
                     <Paragraph style={{ display: "flex", }}>
                        <DocumentCheckboxGroup value={formData?.q25}>
                           <DocumentCheckbox value={'q25-1 '} title={'Баруун талд:'} />
                           <DocumentCheckbox value={'q25-2 '} title={'Зүүн талд:'} />
                        </DocumentCheckboxGroup>
                        <Paragraph>
                           <Paragraph> <TextWithUnderline>{formData?.['q25-1-1']}</TextWithUnderline> мм.муб</Paragraph>
                           <Paragraph> <TextWithUnderline>{formData?.['q25-2-1']}</TextWithUnderline> мм.муб</Paragraph>
                        </Paragraph>
                     </Paragraph>
                     <Paragraph>Зүрхний авиа</Paragraph>
                     <Paragraph style={{ display: "flex" }}>
                        <Paragraph>Хэмнэл:</Paragraph>
                        <DocumentCheckboxGroup value={formData?.q26}>
                           <DocumentCheckbox value={'q26-1 '} title={'жигд:'} />
                           <DocumentCheckbox value={'q26-2 '} title={'жигд бус:'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                     <Paragraph>Давтамж <TextWithUnderline>{formData?.q27}</TextWithUnderline>/мин</Paragraph>
                     <Paragraph style={{ display: "flex" }}>
                        <Paragraph>I авиа:</Paragraph>
                        <DocumentCheckboxGroup value={formData?.q28}>
                           <DocumentCheckbox value={'q28-1 '} title={'тод:'} />
                           <DocumentCheckbox value={'q28-2 '} title={'бүдгэвтэр (I, IV цэгт):'} />
                           <DocumentCheckbox value={'q28-3 '} title={'бүдэг( I, IV ); '} />
                           <DocumentCheckbox value={'q28-4 '} title={'чангарсан (I, IV цэгт)'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                     <Paragraph style={{ display: "flex" }}>
                        <Paragraph>II авиа:</Paragraph>
                        <DocumentCheckboxGroup value={formData?.q29}>
                           <DocumentCheckbox value={'q29-1 '} title={'тод:'} />
                           <DocumentCheckbox value={'q29-2 '} title={'бүдэг (II, III, V цэгт);'} />
                           <DocumentCheckbox value={'q29-3 '} title={'өргөгдсөн (II, III цэгт) '} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                  </Box>
               </FlexRow>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <FlexRow>
                  <Box left top width={'50%'}>
                     <Paragraph>Тэмтрэлт</Paragraph>
                     <Paragraph>Зүрхний оройн түлхэлт Байрлал:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q38}>
                        <DocumentCheckbox value={'q38-1 '} title={'Хэвийн:'} />
                        <DocumentCheckbox value={'q38-2 '} title={'Хэвийн бус'} />
                     </DocumentCheckboxGroup>
                     <Paragraph style={{ display: 'flex' }}>
                        <Paragraph>Хүч</Paragraph>
                        <DocumentCheckboxGroup value={formData?.q39}>
                           <DocumentCheckbox value={'q39-1 '} title={'дунд зэрэг:'} />
                           <DocumentCheckbox value={'q39-2 '} title={'хүчтэй'} />
                           <DocumentCheckbox value={'q39-3 '} title={'сул'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                     <Paragraph>Шууны артерийн лугшилт</Paragraph>
                     <Paragraph>
                        <Paragraph>Хэмнэл</Paragraph>
                        <DocumentCheckboxGroup value={formData?.q40}>
                           <DocumentCheckbox value={'q40-1 '} title={'жигд:'} />
                           <DocumentCheckbox value={'q40-2 '} title={'жигд бус'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                     <Paragraph>Давтамж: <TextWithUnderline>{formData?.q41}</TextWithUnderline> /мин</Paragraph>
                     <Paragraph>
                        <Paragraph>Хүчдэл:</Paragraph>
                        <DocumentCheckboxGroup value={formData?.q42}>
                           <DocumentCheckbox value={'q42-1 '} title={'дунд зэрэг:'} />
                           <DocumentCheckbox value={'q42-2 '} title={'их'} />
                           <DocumentCheckbox value={'q42-3 '} title={'бага'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                     <Paragraph>
                        <Paragraph>Дүүрэлт:</Paragraph>
                        <DocumentCheckboxGroup value={formData?.q43}>
                           <DocumentCheckbox value={'q43-1 '} title={'дунд зэрэг:'} />
                           <DocumentCheckbox value={'q43-2 '} title={'сул'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                     <Paragraph>
                        <Paragraph>2 талд ижил эсэх:</Paragraph>
                        <DocumentCheckboxGroup value={formData?.q44}>
                           <DocumentCheckbox value={'q44-1 '} title={'ижил'} />
                           <DocumentCheckbox value={'q44-2 '} title={'ижил бус'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                     <Paragraph>Тогшилт:</Paragraph>
                     <Paragraph>Зүрхний ( харьцангуй) хил хязгаар:</Paragraph>
                     <Paragraph style={{ display: "flex", alignItems: 'end' }}>
                        <DocumentCheckboxGroup value={formData?.q45}>
                           <DocumentCheckbox value={'q45-1 '} title={'Хэвийн'} />
                           <DocumentCheckbox value={'q45-2 '} title={'Томорсон'} />
                        </DocumentCheckboxGroup>
                        <TextUnderlineGroup value={formData?.['q45-2-1']} style={{ display: "flex" }} >
                           <TextUnderline value={'q45-2-1-1'} title={'(дээд'} />
                           <TextUnderline value={'q45-2-1-2'} title={'баруун'} />
                           <TextUnderline value={'q45-2-1-3'} title={'зүүн хил)'} />
                        </TextUnderlineGroup>
                     </Paragraph>
                  </Box>
                  <Box left top right width={'50%'}>
                     <Paragraph>
                        <Paragraph>III авиа: </Paragraph>
                        <DocumentCheckboxGroup value={formData?.q30}>
                           <DocumentCheckbox value={'q30-1 '} title={'сонсогдоно'} />
                           <DocumentCheckbox value={'q30-2 '} title={'сонсогдохгүй'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q31}>
                        <DocumentCheckbox value={'q31-1 '} title={'Шуугиангүй'} />
                        <DocumentCheckbox value={'q31-2 '} title={'Шуугиантай'} />
                     </DocumentCheckboxGroup>

                     <Paragraph>
                        <Paragraph>Байрлал</Paragraph>
                        <TextUnderlineGroup style={{ display: "flex" }} value={formData?.q32}  >
                           <TextUnderline value={'q32-1'} title={'I;'} />
                           <TextUnderline value={'q32-2'} title={'II'} />
                           <TextUnderline value={'q32-3'} title={'III'} />
                           <TextUnderline value={'q32-4'} title={'IV'} />
                           <TextUnderline value={'q32-5'} title={'V цэг'} />
                        </TextUnderlineGroup>
                     </Paragraph>
                     <Paragraph>
                        <Paragraph>Систолын</Paragraph>
                        <TextUnderlineGroup style={{ display: "flex" }} value={formData?.q33}  >
                           <TextUnderline value={'q33-1'} title={'I;'} />
                           <TextUnderline value={'q33-2'} title={'II'} />
                           <TextUnderline value={'q33-3'} title={'III'} />
                           <TextUnderline value={'q33-4'} title={'IV'} />
                           <TextUnderline value={'q33-5'} title={'V цэг'} />
                        </TextUnderlineGroup>
                     </Paragraph>
                     <Paragraph>
                        <Paragraph>Диастолын</Paragraph>
                        <TextUnderlineGroup style={{ display: "flex" }} value={formData?.q34}  >
                           <TextUnderline value={'q34-1'} title={'I;'} />
                           <TextUnderline value={'q34-2'} title={'II'} />
                           <TextUnderline value={'q34-3'} title={'III'} />
                           <TextUnderline value={'q34-4'} title={'IV'} />
                           <TextUnderline value={'q34-5'} title={'V цэг'} />
                        </TextUnderlineGroup>
                     </Paragraph>
                     <Paragraph style={{ display: "flex", alignItems: "end" }}>
                        <DocumentCheckboxGroup value={formData?.q35}>
                           <DocumentCheckbox value={'q35-1 '} title={'Үл дамжина'} />
                           <DocumentCheckbox value={'q35-2 '} title={'Дамжина'} />
                        </DocumentCheckboxGroup>
                        <TextWithUnderline>{formData?.['q35-2-1']}</TextWithUnderline>
                     </Paragraph>
                     <Paragraph>
                        <Paragraph>Хүч</Paragraph>
                        <DocumentCheckboxGroup value={formData?.q36}>
                           <DocumentCheckbox value={'q36-1 '} title={'сул'} />
                           <DocumentCheckbox value={'q36-2 '} title={'дунд зэрэг'} />
                           <DocumentCheckbox value={'q36-2 '} title={'хүчтэй'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                     <Paragraph>Перикардын шүргэлцэх чимээ бий эсэх</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q37}>
                        <DocumentCheckbox value={'q37-1 '} title={'Үгүй'} />
                        <DocumentCheckbox value={'q37-2 '} title={'Тийм'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>Хийгдсэн шинжилгээний үр дүн:
                  <TextWithUnderline>{formData?.q46}</TextWithUnderline>
               </Box>
               <Box left top right>
                  <Paragraph>Зүрхний цохилтын байдал: <TextWithUnderline>{formData?.q47}</TextWithUnderline></Paragraph>
                  <Paragraph>Давтамж:<TextWithUnderline>{formData?.q48}</TextWithUnderline></Paragraph>
                  <Paragraph>Хэмнэл:<TextWithUnderline>{formData?.q49}</TextWithUnderline></Paragraph>
                  <Paragraph>Хориг:<TextWithUnderline>{formData?.q50}</TextWithUnderline></Paragraph>
                  <Paragraph>Томрол:<TextWithUnderline>{formData?.q51}</TextWithUnderline></Paragraph>
                  <Paragraph>Үхжил, гэмтэл:<TextWithUnderline>{formData?.q52}</TextWithUnderline></Paragraph>
                  <Paragraph>Ишеми:<TextWithUnderline>{formData?.q53}</TextWithUnderline></Paragraph>
               </Box>
               <Box left top right style={{ height: '60px' }}>Бусад шинжилгээ:<TextWithUnderline>{formData?.q54}</TextWithUnderline> </Box>
               <Box left top right style={{ height: '60px' }}>Зүрхний хэт авиан шинжилгээ<TextWithUnderline>{formData?.q55}</TextWithUnderline> </Box>
               <Box left top right style={{ height: '100px' }}>Эмнэл зүйн онош:<TextWithUnderline>{formData?.q56}</TextWithUnderline> </Box>
               <Box left top right style={{ height: '120px' }}>Зөвлөгөө, эмчилгээ:<TextWithUnderline>{formData?.q57}</TextWithUnderline> </Box>
               <FlexRow>
                  <Box width={"50%"} left top bottom>Эмчийн нэр, гарын үсэг: </Box>
                  <Box width={"25%"} top bottom>/</Box>
                  <Box width={"25%"} top right bottom>/</Box>
               </FlexRow>

            </div>
         </div>
      </div>

   );
};
export default CT_1_Zurh;
