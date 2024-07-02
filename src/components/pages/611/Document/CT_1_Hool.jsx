import React, { useEffect, useState } from 'react';
import { Box, Paragraph, DocumentCheckbox, DocumentCheckboxGroup, FlexRow, TextUnderline, TextUnderlineGroup, TextWithUnderline } from '../Components';

const CT_1_Hool = (props) => {
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
                  <Paragraph style={{ textAlign: "center" }}>ХООЛ БОЛОВСРУУЛАХ ЭРХТНИЙ ЭМЧИЙН ҮЗЛЭГ</Paragraph>
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
                  <Paragraph style={{ textAlign: "center" }}>ХООЛ БОЛОВСРУУЛАХ ТОГТОЛЦООНЫ ҮЗЛЭГ</Paragraph>
               </Box>
               <Box left top right>
                  <Paragraph>Зовуурь:{formData?.q18}</Paragraph>
               </Box>
               <Box left top right>
                  <Paragraph>Өвчний эхлэл явц:{formData?.q19}</Paragraph>
               </Box>
               <Box left top right>
                  <Paragraph>Эрсдэлт хүчин зүйлс</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={'33%'}>
                     <DocumentCheckboxGroup value={formData?.q20}>
                        <DocumentCheckbox value={'q20-1 '} title={'Архи'} />
                        <DocumentCheckbox value={'q20-2 '} title={'Тамхи'} />
                        <DocumentCheckbox value={'q20-3 '} title={'Бусад хорт зуршил'} />
                        <DocumentCheckbox value={'q20-4 '} title={'Ажлын таагүй нөхцөл'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'34%'}>
                     <DocumentCheckboxGroup value={formData?.q20}>
                        <DocumentCheckbox value={'q20-5 '} title={'Стресс'} />
                        <DocumentCheckbox value={'q20-6 '} title={'Харшил'} />
                        <DocumentCheckbox value={'q20-7 '} title={'Удамшил'} />
                        <DocumentCheckbox value={'q20-8 '} title={'ХБЭ-ны эмгэгээр өвдөж байсан'} />
                        <DocumentCheckbox value={'q20-9 '} title={'Хэвлийд мэс засал хийлгэсэн'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'33%'}>
                     <DocumentCheckboxGroup value={formData?.q20}>
                        <DocumentCheckbox value={'q20-10 '} title={'Хавсарсан хүнд эмгэг'} />
                        <DocumentCheckbox value={'q20-11 '} title={'Шарласан'} />
                        <DocumentCheckbox value={'q20-12 '} title={'Хоолны дэглэм'} />
                        <DocumentCheckbox value={'q20-13 '} title={'Бусад'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph>Хийсэн эмчилгээ:{formData?.q21}</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={'40%'} >
                     <Paragraph>Харж ажиглах: Хэл өнгөртэй эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q22}>
                        <DocumentCheckbox value={'q22-1 '} title={'Тийм'} />
                        <DocumentCheckbox value={'q22-2 '} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Арьс, салст–чийглэг</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q23}>
                        <DocumentCheckbox value={'q23-1 '} title={'Тийм'} />
                        <DocumentCheckbox value={'q23-2 '} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Box>
                        <Paragraph>
                           Өнгө
                           <TextWithUnderline>{formData?.q24}</TextWithUnderline>
                        </Paragraph>
                     </Box>
                  </Box>
                  <Box left top width={'20%'}>
                     <Paragraph>Хэвлийн – хэм</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q25}>
                        <DocumentCheckbox value={'q25-1 '} title={'Жигд'} />
                        <DocumentCheckbox value={'q25-2 '} title={'Жигд бус'} />
                     </DocumentCheckboxGroup>
                     <Box>
                        <Paragraph>Хэлбэр
                           <TextWithUnderline>{formData?.['q25-2-1']}</TextWithUnderline>
                        </Paragraph>
                     </Box>
                  </Box>
                  <Box left top right width={'40%'}>
                     <Paragraph>Тэмтрэлт</Paragraph>
                     <Paragraph>Өнгөц тэмтрэлт – хэвлий эмзэглэлтэй эсэх</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q26}>
                        <DocumentCheckbox value={'q26-1 '} title={'Тийм'} />
                        <DocumentCheckbox value={'q26-2 '} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Булчингийн чангарал байгаа эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q27}>
                        <DocumentCheckbox value={'q27-1 '} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q27-2 '} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top bottom right style={{ display: "flex", alignItems: 'end' }}>
                  <Paragraph>Гүнзгий тэмтэрлт:</Paragraph>
                  <TextWithUnderline>{formData?.q100}</TextWithUnderline>
               </Box>
               <FlexRow>
                  <Box left bottom width={'35%'}>
                     <Paragraph>Тахир гэдэс – байрлал</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q28}>
                        <DocumentCheckbox value={'q28-1 '} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q28-2 '} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Тогтоц</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q29}>
                        <DocumentCheckbox value={'q29-1 '} title={'Хатуу'} />
                        <DocumentCheckbox value={'q29-2 '} title={'Зөөлөн'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left bottom width={"30%"}>
                     <Paragraph>Тогтоц</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q32}>
                        <DocumentCheckbox value={'q32-1 '} title={'Хатуу'} />
                        <DocumentCheckbox value={'q32-2 '} title={'Зөөлөн'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Хөдөлгөөнтэй</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q33}>
                        <DocumentCheckbox value={'q33-1 '} title={'Тийм'} />
                        <DocumentCheckbox value={'q33-2 '} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left bottom right width={'35%'}>
                     <Paragraph>Хөдөлгөөнтэй</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q36}>
                        <DocumentCheckbox value={'q36-1 '} title={'Тийм'} />
                        <DocumentCheckbox value={'q36-2 '} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Цутгалан гэдэс - байрлал</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q37}>
                        <DocumentCheckbox value={'q37-1 '} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q37-2 '} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <FlexRow>
                  <Box left top width={'35%'}>
                     <Paragraph>Хөдөлгөөнтэй</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q30}>
                        <DocumentCheckbox value={'q30-1 '} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q30-2 '} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Өгсөх болон уруудах гэдэс - байрлал</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q31}>
                        <DocumentCheckbox value={'q31-1 '} title={'Хатуу'} />
                        <DocumentCheckbox value={'q31-2 '} title={'Зөөлөн'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"30%"}>
                     <Paragraph>Хөндлөн гэдэс - байрлал</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q34}>
                        <DocumentCheckbox value={'q34-1 '} title={'Хатуу'} />
                        <DocumentCheckbox value={'q34-2 '} title={'Зөөлөн'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Тогтоц</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q35}>
                        <DocumentCheckbox value={'q35-1 '} title={'Тийм'} />
                        <DocumentCheckbox value={'q35-2 '} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box top left right width={'35%'}>
                     <Paragraph>Тогтоц</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q38}>
                        <DocumentCheckbox value={'q38-1 '} title={'Тийм'} />
                        <DocumentCheckbox value={'q38-2 '} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Хөдөлгөөнтэй</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q39}>
                        <DocumentCheckbox value={'q39-1 '} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q39-2 '} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'35%'}>
                     <Paragraph>Тогшилт: </Paragraph>
                     <Paragraph>Хэвлийн хэнгэрэгэн чимээ:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q40}>
                        <DocumentCheckbox value={'q40-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q40-2 '} title={'Ихэссэн'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"30%"}>
                     <Paragraph>Ихэссэн хэсэгт тогшилтын дуу</Paragraph>
                     <DocumentCheckboxGroup value={formData?.['q40-2-1']}>
                        <DocumentCheckbox value={'q40-2-1-1'} title={'Бүдгэрсэн'} />
                        <DocumentCheckbox value={'q40-2-1-2'} title={'Тодорсон'} />
                        <DocumentCheckbox value={'q40-2-1-3'} title={'Дүлий болсон'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box top left right width={'35%'}>
                     <Paragraph>Чагналт</Paragraph>
                     <Paragraph>Гэдэсний гүрвэлзэх хөдөлгөөн:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q41}>
                        <DocumentCheckbox value={'q41-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q41-2 '} title={'Ихэссэн'} />
                        <DocumentCheckbox value={'q41-3 '} title={'Дүлий'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  Хэвлийн рентген шинжилгээ КТГ, хэт авиан шинжилгээ
                  <TextWithUnderline>{formData?.q42}</TextWithUnderline>
               </Box>
               <Box left top right>
                  Дурангийн шинжилгээ
                  <TextWithUnderline>{formData?.q43}</TextWithUnderline>
               </Box>
               <FlexRow>
                  <Box left top width={'35%'}>
                     <Paragraph> Салстын өнгө<TextWithUnderline>{formData?.q44}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хаван:<TextWithUnderline>{formData?.q45}</TextWithUnderline> </Paragraph>
                     <Paragraph> Z шугам:<TextWithUnderline>{formData?.q46}</TextWithUnderline> </Paragraph>
                  </Box>
                  <Box left top width={"30%"}>
                     <Paragraph> Хөдөлгөөн:<TextWithUnderline>{formData?.q47}</TextWithUnderline> </Paragraph>
                     <Paragraph> Шалбархай – хэмжээ:<TextWithUnderline>{formData?.q48}</TextWithUnderline> </Paragraph>
                     <Paragraph> Тоо:<TextWithUnderline>{formData?.q49}</TextWithUnderline> </Paragraph>
                  </Box>
                  <Box top left right width={'35%'}>
                     <Paragraph> Байрлал:<TextWithUnderline>{formData?.q50}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хэлбэр:<TextWithUnderline>{formData?.q51}</TextWithUnderline> </Paragraph>
                     <Paragraph> Өнгөр:<TextWithUnderline>{formData?.q52}</TextWithUnderline> </Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'35%'}>
                     <Paragraph>Ходоод:</Paragraph>
                     <Paragraph> Амсар - салстын өнгө<TextWithUnderline>{formData?.q53}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хаван:<TextWithUnderline>{formData?.q54}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хөдөлгөөн:<TextWithUnderline>{formData?.q55}</TextWithUnderline> </Paragraph>
                     <Paragraph> Шалбархай – хэмжээ :<TextWithUnderline>{formData?.q56}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хэлбэр:<TextWithUnderline>{formData?.q57}</TextWithUnderline> </Paragraph>
                     <Paragraph> Өнгөр:<TextWithUnderline>{formData?.q58}</TextWithUnderline> </Paragraph>
                     <Paragraph> Тоо:<TextWithUnderline>{formData?.q59}</TextWithUnderline> </Paragraph>
                     <Paragraph> Байрлал:<TextWithUnderline>{formData?.q60}</TextWithUnderline> </Paragraph>
                  </Box>
                  <Box left top width={"30%"}>
                     <Paragraph> Их бие - салстын өнгө :<TextWithUnderline>{formData?.q61}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хаван:<TextWithUnderline>{formData?.q62}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хөдөлгөөн:<TextWithUnderline>{formData?.q63}</TextWithUnderline> </Paragraph>
                     <Paragraph> Шалбархай – хэмжээ:<TextWithUnderline>{formData?.q64}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хэлбэр:<TextWithUnderline>{formData?.q65}</TextWithUnderline> </Paragraph>
                     <Paragraph> Өнгөр:<TextWithUnderline>{formData?.q66}</TextWithUnderline> </Paragraph>
                     <Paragraph> Тоо:<TextWithUnderline>{formData?.q67}</TextWithUnderline> </Paragraph>
                     <Paragraph> Байрлал:<TextWithUnderline>{formData?.q68}</TextWithUnderline> </Paragraph>
                  </Box>
                  <Box top left right width={'35%'}>
                     <Paragraph> Антрум - салстын өнгө:<TextWithUnderline>{formData?.q69}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хаван:<TextWithUnderline>{formData?.q70}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хөдөлгөөн:<TextWithUnderline>{formData?.q71}</TextWithUnderline> </Paragraph>
                     <Paragraph> Шалбархай – хэмжээ:<TextWithUnderline>{formData?.q72}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хэлбэр:<TextWithUnderline>{formData?.q73}</TextWithUnderline> </Paragraph>
                     <Paragraph> Өнгөр:<TextWithUnderline>{formData?.q74}</TextWithUnderline> </Paragraph>
                     <Paragraph> Тоо:<TextWithUnderline>{formData?.q75}</TextWithUnderline> </Paragraph>
                     <Paragraph> Байрлал:<TextWithUnderline>{formData?.q76}</TextWithUnderline> </Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'35%'}>
                     <Paragraph>Дээд гэдэс:</Paragraph>
                     <Paragraph> Салстын өнгө<TextWithUnderline>{formData?.q77}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хаван:<TextWithUnderline>{formData?.q78}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хөдөлгөөн:<TextWithUnderline>{formData?.q79}</TextWithUnderline> </Paragraph>
                  </Box>
                  <Box top width={"30%"}>
                     <Paragraph> Шалбархай – хэмжээ:<TextWithUnderline>{formData?.q80}</TextWithUnderline> </Paragraph>
                     <Paragraph> Хэлбэр:<TextWithUnderline>{formData?.q81}</TextWithUnderline> </Paragraph>
                     <Paragraph> Өнгөр:<TextWithUnderline>{formData?.q82}</TextWithUnderline> </Paragraph>
                     <Paragraph> Тоо:<TextWithUnderline>{formData?.q83}</TextWithUnderline> </Paragraph>
                  </Box>
                  <Box top right width={'35%'}>
                     <Paragraph> Байрлал:<TextWithUnderline>{formData?.q84}</TextWithUnderline> </Paragraph>
                     <Paragraph> Фатер хөхлөг:<TextWithUnderline>{formData?.q85}</TextWithUnderline> </Paragraph>
                     <Paragraph> Цөс ялгаралт:<TextWithUnderline>{formData?.q86}</TextWithUnderline> </Paragraph>
                  </Box>
               </FlexRow>
               <Box left top right style={{ height: "30px", display: "flex", alignItems: "end" }}>
                  <Paragraph>Нр тодорхойлох:</Paragraph>
                  <TextWithUnderline>{formData?.q87}</TextWithUnderline>
               </Box>
               <Box left top right style={{ height: "30px", display: "flex", alignItems: "end" }}>
                  <Paragraph>Рн-метрийн шинжилгээ:</Paragraph>
                  <TextWithUnderline>{formData?.q88}</TextWithUnderline>
               </Box>
               <Box left top right style={{ height: "30px", display: "flex", alignItems: "end" }}>
                  <Paragraph>Лабораторийн шинжилгээ:</Paragraph>
                  <TextWithUnderline>{formData?.q89}</TextWithUnderline>
               </Box>
               <Box left right style={{ height: "30px", display: "flex", alignItems: "end" }}>
                  <Paragraph>Цитологи\гистологийн шинжилгээ:</Paragraph>
                  <TextWithUnderline>{formData?.q90}</TextWithUnderline>
               </Box>
               <Box left right style={{ height: "30px", display: "flex", alignItems: "end" }}>
                  <Paragraph>Бусад шинжилгээ:</Paragraph>
                  <TextWithUnderline>{formData?.q91}</TextWithUnderline>
               </Box>
               <Box left right style={{ height: "30px", display: "flex", alignItems: "end" }}>
                  <Paragraph>Эмнэлзүйн онош:</Paragraph>
                  <TextWithUnderline>{formData?.q92}</TextWithUnderline>
               </Box>
               <Box left top right style={{ height: "60px", display: "flex", alignItems: "end" }}>
                  <Paragraph>Эмчилгээ\зөвлөгөө:</Paragraph>
                  <TextWithUnderline>{formData?.q93}</TextWithUnderline>
               </Box>
               <Box left top bottom right style={{ height: "30px", display: "flex", alignItems: "end" }}>
                  <Paragraph>Зөвлөгөө өгсөн эмч:</Paragraph>
                  <TextWithUnderline>{formData?.q94}</TextWithUnderline>
               </Box>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Hool;
