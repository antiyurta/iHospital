
import React, { useEffect, useState } from 'react';
import '../document.css';
import { DocumentCheckbox, DocumentCheckboxGroup, Paragraph, Box, FlexRow, TextUnderline, TextUnderlineGroup, TextWithUnderline, FlexCol } from '../Components';
const CT_1_Ulamjlalt = (props) => {
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
               <Paragraph style={{ textAlign: "center" }}> УЛАМЖЛАЛТЫН ЭМЧИЙН ҮЗЛЭГ</Paragraph>
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
                  <Box left top right width={"33%"} style={{ display: "flex",  }}>
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
                  Өвөрчлөл:
               </Box>
               <FlexRow>
                  <Box width={'70%'} left top style={{ display: "flex" }} >
                     <DocumentCheckboxGroup value={formData?.q16}>
                        <DocumentCheckbox value={"q16-1"} title={"Хий"} />
                        <DocumentCheckbox value={"q16-2"} title={"Шар"} />
                        <DocumentCheckbox value={"q16-3"} title={"Бадган"} />
                        <DocumentCheckbox value={"q16-4"} title={"Хий шар хавсарсан"} />
                     </DocumentCheckboxGroup>
                     <DocumentCheckboxGroup value={formData?.q16}>
                        <DocumentCheckbox value={"q16-5"} title={"Хий бадган хавсарсан"} />
                        <DocumentCheckbox value={"q16-6"} title={"Шар бадган хавсарсан"} />
                        <DocumentCheckbox value={"q16-7"} title={"Хий, шар, бадган хурсан "} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <Paragraph>Цог сүлд:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q16}>
                        <DocumentCheckbox value={"q16-1"} title={"Сайн"} />
                        <DocumentCheckbox value={"q16-2"} title={"Дунд"} />
                        <DocumentCheckbox value={"q16-3"} title={"Буурсан"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}></Box>
                  <Box left top width={'25%'}>Хий</Box>
                  <Box left top width={'25%'}>Шар</Box>
                  <Box left top right width={'30%'}>Бадган</Box>
               </FlexRow>
               <Box top right left>
                  <Paragraph style={{ textAlign: "center" }}>  Үзэх шинжилгээ</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={'20%'}>Нүүр царай</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-1-1']}>
                        <DocumentCheckbox value={'q17-1-1-1'} title={"Хуурай ширүүн"} />
                        <DocumentCheckbox value={'q17-1-1-2'} title={"Бор хүрэн хар,хөхөлбөр өнгөтэй"} />
                        <DocumentCheckbox value={'q17-1-1-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-1-2']}>
                        <DocumentCheckbox value={'q17-1-2-1'} title={"Зөөлөн чийглэг хөлс ихтэй, тослог"} />
                        <DocumentCheckbox value={'q17-1-2-2'} title={"Улаа бутарсан шар,шаргал өнгөтэй"} />
                        <DocumentCheckbox value={'q17-1-2-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-1-3']}>
                        <DocumentCheckbox value={'q17-1-3-1'} title={"Сэлхэрсэн"} />
                        <DocumentCheckbox value={'q17-1-3-2'} title={"Цайвар өнгөтэй"} />
                        <DocumentCheckbox value={'q17-1-3-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup></Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Нүд</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-2-1']}>
                        <DocumentCheckbox value={'q17-2-1-1'} title={"Цагаан нүд хөхөлбөр"} />
                        <DocumentCheckbox value={'q17-2-1-2'} title={"Харц тогтворгүй"} />
                        <DocumentCheckbox value={'q17-2-1-3'} title={"Олон анивчина"} />
                        <DocumentCheckbox value={'q17-2-1-4'} title={"Нулимс гоожно"} />
                        <DocumentCheckbox value={'q17-2-1-5'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-2-2']}>
                        <DocumentCheckbox value={'q17-2-2-1'} title={"Цагаан нүд улаан,шар, шаргал"} />
                        <DocumentCheckbox value={'q17-2-2-2'} title={"Махан ургацагтай"} />
                        <DocumentCheckbox value={'q17-2-2-3'} title={"Харц ширүүн"} />
                        <DocumentCheckbox value={'q17-2-2-4'} title={"Шар ус, нуух гоожно "} />
                        <DocumentCheckbox value={'q17-2-2-5'} title={"Бусад "} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-2-3']}>
                        <DocumentCheckbox value={'q17-2-3-1'} title={" Цагаан нүд цагаан,цайвар"} />
                        <DocumentCheckbox value={'q17-2-3-2'} title={"Өөхөн ургацагтай"} />
                        <DocumentCheckbox value={'q17-2-3-3'} title={"Харц дөлгөөн"} />
                        <DocumentCheckbox value={'q17-2-3-4'} title={"Зовхи сэлхэрнэ"} />
                        <DocumentCheckbox value={'q17-2-3-5'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left bottom top width={'20%'}>Чих</Box>
                  <Box left bottom top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-3-1']}>
                        <DocumentCheckbox value={'q17-3-1-1'} title={"Хөхөлбөр өнгөтэй"} />
                        <DocumentCheckbox value={'q17-3-1-2'} title={"Шуугина загатнана"} />
                        <DocumentCheckbox value={'q17-3-1-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left bottom top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-3-2']}>
                        <DocumentCheckbox value={'q17-3-2-1'} title={"Улаан шар өнгөтэй"} />
                        <DocumentCheckbox value={'q17-3-2-2'} title={"Шар ус өгрий булаг гоожно"} />
                        <DocumentCheckbox value={'q17-3-2-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left bottom top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-3-3']}>
                        <DocumentCheckbox value={'q17-3-3-1'} title={"Цагаан өнгөтэй"} />
                        <DocumentCheckbox value={'q17-3-3-2'} title={"Хулхи ихтэй"} />
                        <DocumentCheckbox value={'q17-3-3-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup></Box>
               </FlexRow>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <FlexRow>
                  <Box left top width={'20%'}>Хамар</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-4-1']}>
                        <DocumentCheckbox value={'q17-4-1-1'} title={"Хөхөлбөр өнгөтэй"} />
                        <DocumentCheckbox value={'q17-4-1-2'} title={"Хамар битүүрэх"} />
                        <DocumentCheckbox value={'q17-4-1-3'} title={"Үнэр мэдрэхгүй болох"} />
                        <DocumentCheckbox value={'q17-4-1-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-4-2']}>
                        <DocumentCheckbox value={'q17-4-2-1'} title={"Хамар улайх, цус гарах, хуурайших"} />
                        <DocumentCheckbox value={'q17-4-2-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-4-3']}>
                        <DocumentCheckbox value={'q17-4-3-1'} title={"Хамраас ялгадас гарах,хамрын үзүүр цайх"} />
                        <DocumentCheckbox value={'q17-4-3-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup></Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Уруул</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-5-1']}>
                        <DocumentCheckbox value={'q17-5-1-1'} title={"Хөхөлбөр өнгөтэй"} />
                        <DocumentCheckbox value={'q17-5-1-2'} title={"Муруйна"} />
                        <DocumentCheckbox value={'q17-5-1-3'} title={"Чичирч таталдана"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-5-2']}>
                        <DocumentCheckbox value={'q17-5-2-1'} title={"Улбар шаргал өнгөтэй"} />
                        <DocumentCheckbox value={'q17-5-2-2'} title={" Хатаж хуурайшина хагарна"} />
                        <DocumentCheckbox value={'q17-5-2-3'} title={"Цус гарна"} />
                        <DocumentCheckbox value={'q17-5-2-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-5-3']}>
                        <DocumentCheckbox value={'q17-5-3-1'} title={"Цайвар өнгөтэй"} />
                        <DocumentCheckbox value={'q17-5-3-2'} title={"Өнгөртэй, өрөмтэй"} />
                        <DocumentCheckbox value={'q17-5-3-3'} title={"Ялбарна, шүүс гоожино"} />
                        <DocumentCheckbox value={'q17-5-3-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Хэл</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-6-1']}>
                        <DocumentCheckbox value={'q17-6-1-1'} title={" Улаан, хөхөлбөр, ягаан өнгөтэй"} />
                        <DocumentCheckbox value={'q17-6-1-2'} title={"Хуурай ширүүн"} />
                        <DocumentCheckbox value={'q17-6-1-3'} title={"Өнгөргүй"} />
                        <DocumentCheckbox value={'q17-6-1-4'} title={"Хийн гүвдрүүтэй"} />
                        <DocumentCheckbox value={'q17-6-1-5'} title={"Хөшүүн охор богино үзүүр нарийн, хэл чулчирна хэлгийрнэ таталдана"} />
                        <DocumentCheckbox value={'q17-6-1-6'} title={"Эхүүн амтагдана"} />
                        <DocumentCheckbox value={'q17-6-1-7'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-6-2']}>
                        <DocumentCheckbox value={'q17-6-2-1'} title={"Улаавтар өнгөтэй"} />
                        <DocumentCheckbox value={'q17-6-2-2'} title={" Нимгэн зузаан шаргал шар өнгөртэй"} />
                        <DocumentCheckbox value={'q17-6-2-3'} title={"Улаан бэржрүү гүвдрүүтэй"} />
                        <DocumentCheckbox value={'q17-6-2-4'} title={"Хар толбо зураастай"} />
                        <DocumentCheckbox value={'q17-6-2-5'} title={"Давслаг гашуун амтагдана "} />
                        <DocumentCheckbox value={'q17-6-2-6'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-6-3']}>
                        <DocumentCheckbox value={'q17-6-3-1'} title={"Цайвар ягаан өнгөтэй"} />
                        <DocumentCheckbox value={'q17-6-3-2'} title={"Том"} />
                        <DocumentCheckbox value={'q17-6-3-3'} title={"Чийглэг зөөлөн"} />
                        <DocumentCheckbox value={'q17-6-3-4'} title={"Нимгэн зузаан цайвар өнгөртэй, зах ирмэгээрээ шүдний оромтой"} />
                        <DocumentCheckbox value={'q17-6-3-5'} title={"Ам заваарна"} />
                        <DocumentCheckbox value={'q17-6-3-6'} title={"Амтлаг амтагдана"} />
                        <DocumentCheckbox value={'q17-6-3-7'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Баас</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-7-1']}>
                        <DocumentCheckbox value={'q17-7-1-1'} title={"Шингэн"} />
                        <DocumentCheckbox value={'q17-7-1-2'} title={"Хөөс ихтэй"} />
                        <DocumentCheckbox value={'q17-7-1-3'} title={"Хоргослож хатна"} />
                        <DocumentCheckbox value={'q17-7-1-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-7-2']}>
                        <DocumentCheckbox value={'q17-7-2-1'} title={"Шар өнгөтэй"} />
                        <DocumentCheckbox value={'q17-7-2-2'} title={"Цус өгрийнхольцтой"} />
                        <DocumentCheckbox value={'q17-7-2-3'} title={"Өмхий үнэртэй"} />
                        <DocumentCheckbox value={'q17-7-2-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-7-3']}>
                        <DocumentCheckbox value={'q17-7-3-1'} title={"Цайвар шаргал өнгөтэй"} />
                        <DocumentCheckbox value={'q17-7-3-2'} title={"Эс шингэсэн идээ ундаа салсын хольцтой"} />
                        <DocumentCheckbox value={'q17-7-3-3'} title={"Наалдамтгай"} />
                        <DocumentCheckbox value={'q17-7-3-4'} title={"Исгэлэн үнэртэй"} />
                        <DocumentCheckbox value={'q17-7-3-5'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Шээс</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-8-1']}>
                        <DocumentCheckbox value={'q17-8-1-1'} title={"Хөхөлбөр өнгөтэй"} />
                        <DocumentCheckbox value={'q17-8-1-2'} title={"Ус адил тунгалаг"} />
                        <DocumentCheckbox value={'q17-8-1-3'} title={"Үнэр уур багатай"} />
                        <DocumentCheckbox value={'q17-8-1-4'} title={"Хөөс том, дуутай хагарч арилна"} />
                        <DocumentCheckbox value={'q17-8-1-5'} title={"Дээрээ бутарсан нарийн ширхэглэг язмагтай"} />
                        <DocumentCheckbox value={'q17-8-1-6'} title={"Хувирсаны сүүлд хөхөлбөр өнгөтэй,тунгалаг"} />
                        <DocumentCheckbox value={'q17-8-1-7'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-8-2']}>
                        <DocumentCheckbox value={'q17-8-2-1'} title={"Шар, улбар шар,улаан өнгөтэй"} />
                        <DocumentCheckbox value={'q17-8-2-2'} title={"Үнэр уур ихтэй, уур нь удаан арилна"} />
                        <DocumentCheckbox value={'q17-8-2-3'} title={"Хөөс нь жижиг түргэн арилна"} />
                        <DocumentCheckbox value={'q17-8-2-4'} title={"Зузаан өрөмтэй"} />
                        <DocumentCheckbox value={'q17-8-2-5'} title={"Дундаа хөвсөн зузаан бөөгнөрсөн язмагтай "} />
                        <DocumentCheckbox value={'q17-8-2-6'} title={"Хувирсаны сүүлд шар улбар хүрэн өнгөтэй өтгөн "} />
                        <DocumentCheckbox value={'q17-8-2-7'} title={"Бусад "} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-8-3']}>
                        <DocumentCheckbox value={'q17-8-3-1'} title={"Цайвар шаргал өнгөтэй"} />
                        <DocumentCheckbox value={'q17-8-3-2'} title={"Үнэр уур багатай"} />
                        <DocumentCheckbox value={'q17-8-3-3'} title={"Хөөс нь жижиг удаан арилна, савны хананд наалдана"} />
                        <DocumentCheckbox value={'q17-8-3-4'} title={"Доороо нарийнбөөгнөрсөн тунасан язмагтай "} />
                        <DocumentCheckbox value={'q17-8-3-5'} title={"Хувирсаны сүүлд цайвар шар өнгөтэй, шингэн "} />
                        <DocumentCheckbox value={'q17-8-3-6'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Хөлс</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-9-1']}>
                        <DocumentCheckbox value={'q17-9-1-1'} title={"Бага хэмжээтэй "} />
                        <DocumentCheckbox value={'q17-9-1-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-9-2']}>
                        <DocumentCheckbox value={'q17-9-2-1 '} title={"Их хэмжээтэй, үнэрлэг"} />
                        <DocumentCheckbox value={'q17-9-2-2 '} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-9-3']}>
                        <DocumentCheckbox value={'q17-9-3-1'} title={"Дунд зэрэг"} />
                        <DocumentCheckbox value={'q17-9-3-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Үс</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-10-1']}>
                        <DocumentCheckbox value={'q17-10-1-1'} title={"Бор хар өнгөтэй"} />
                        <DocumentCheckbox value={'q17-10-1-2'} title={"Хар"} />
                        <DocumentCheckbox value={'q17-10-1-3'} title={"Хуурай"} />
                        <DocumentCheckbox value={'q17-10-1-4'} title={"Буржгар"} />
                        <DocumentCheckbox value={'q17-10-1-5'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-10-2']} >
                        <DocumentCheckbox value={'q17-10-2-1'} title={"Шаравтар"} />
                        <DocumentCheckbox value={'q17-10-2-2'} title={"Тослог"} />
                        <DocumentCheckbox value={'q17-10-2-3'} title={"Зөөлөн улаан, эрт бууралтсан"} />
                        <DocumentCheckbox value={'q17-10-2-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-10-3']}>
                        <DocumentCheckbox value={'q17-10-3-1'} title={"Бараан, гялалзсан"} />
                        <DocumentCheckbox value={'q17-10-3-2'} title={"Тослог"} />
                        <DocumentCheckbox value={'q17-10-3-3'} title={"Даахирсан"} />
                        <DocumentCheckbox value={'q17-10-3-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Шүд</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-11-1']}>
                        <DocumentCheckbox value={'q17-11-1-1'} title={"Дорсгор иржгэр"} />
                        <DocumentCheckbox value={'q17-11-1-2'} title={"Том"} />
                        <DocumentCheckbox value={'q17-11-1-3'} title={"Эцэнхий буйлтай"} />
                        <DocumentCheckbox value={'q17-11-1-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-11-2']}>
                        <DocumentCheckbox value={' q17-11-2-1'} title={"Шарласан"} />
                        <DocumentCheckbox value={' q17-11-2-2'} title={"Тослог"} />
                        <DocumentCheckbox value={' q17-11-2-3'} title={"Зөөлөн буйлтай"} />
                        <DocumentCheckbox value={' q17-11-2-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-11-3']}>
                        <DocumentCheckbox value={'q17-11-3-1'} title={"Цагаан"} />
                        <DocumentCheckbox value={'q17-11-3-2'} title={"Хатуу"} />
                        <DocumentCheckbox value={'q17-11-3-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left bottom top width={'20%'}>Хумс</Box>
                  <Box left bottom top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-12-1']}>
                        <DocumentCheckbox value={'q17-12-1-1'} title={"Хөхрөх"} />
                        <DocumentCheckbox value={'q17-12-1-2'} title={"Хувхайрах"} />
                        <DocumentCheckbox value={'q17-12-1-3'} title={"Зузаарах"} />
                        <DocumentCheckbox value={'q17-12-1-4'} title={"Хатуу болох"} />
                        <DocumentCheckbox value={'q17-12-1-5'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left bottom top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-12-2']}>
                        <DocumentCheckbox value={'q17-12-2-1'} title={"Шарлах"} />
                        <DocumentCheckbox value={'q17-12-2-2'} title={"Харавтар зураас тогтох"} />
                        <DocumentCheckbox value={'q17-12-2-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left bottom top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-12-3']}>
                        <DocumentCheckbox value={'q17-12-3-1'} title={"Цайх"} />
                        <DocumentCheckbox value={'q17-12-3-2'} title={"Цагаан толбо, дусал адил бусаар гарах"} />
                        <DocumentCheckbox value={'q17-12-3-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Box left top right><Paragraph style={{ textAlign: 'center' }}>Хүрэлцэх шинжилгээ</Paragraph></Box>
               <FlexCol>
                  <FlexRow>
                     <Box left top width={'20%'} >
                        <Paragraph>Бэлчир орон</Paragraph>
                     </Box>
                     <Box left top right width={'80%'}>
                        <Paragraph style={{ textAlign: "center" }}>Өврийн бэлчир</Paragraph>
                     </Box>
                  </FlexRow>
                  <FlexRow>
                     <Box left width={'20%'} ></Box>
                     <Box left top width={'25%'}>
                        <DocumentCheckboxGroup value={formData?.['q17-13-1']}>
                           <DocumentCheckbox value={'q17-13-1-1'} title={"Хар цагааны завсар"} />
                           <DocumentCheckbox value={'q17-13-1-2'} title={"Бусад"} />
                        </DocumentCheckboxGroup>
                     </Box>
                     <Box left top width={'25%'} >
                        <DocumentCheckboxGroup value={formData?.['q17-13-2']}>
                           <DocumentCheckbox value={'q17-13-2-1'} title={"Гэдэсний дээд"} />
                           <DocumentCheckbox value={'q17-13-2-2'} title={"Гэдэсний доод"} />
                           <DocumentCheckbox value={'q17-13-2-3'} title={"Бусад"} />
                        </DocumentCheckboxGroup>
                     </Box>
                     <Box left top right width={'30%'}>
                        <DocumentCheckboxGroup value={formData?.['q17-13-3']}>
                           <DocumentCheckbox value={'q17-13-3-1'} title={"Аюулхайн"} />
                           <DocumentCheckbox value={'q17-13-3-2'} title={"Галын илч буурсан"} />
                           <DocumentCheckbox value={'q17-13-3-3'} title={"Бэтгийн"} />
                           <DocumentCheckbox value={'q17-13-3-4'} title={"Давсагны"} />
                           <DocumentCheckbox value={'q17-13-3-5'} title={"Бусад"} />
                        </DocumentCheckboxGroup>
                     </Box>
                  </FlexRow>
                  <FlexRow>
                     <Box left width={'20%'} ></Box>
                     <Box left top right width={'80%'}>
                        <Paragraph style={{ textAlign: "center" }}>Арын бэлчир</Paragraph>
                     </Box>
                  </FlexRow>
                  <FlexRow>
                     <Box left width={'20%'}></Box>
                     <Box left top width={'25%'}>
                        <DocumentCheckboxGroup value={formData?.['q17-14-1']}>
                           <DocumentCheckbox value={'q17-14-1-1'} title={"Th1 – Хий"} />
                           <DocumentCheckbox value={'q17-14-1-2'} title={"Th6 – Амин судас"} />
                           <DocumentCheckbox value={'q17-14-1-3'} title={"Th7 – Зүрх"} />
                           <DocumentCheckbox value={'q17-14-1-4'} title={"L4 - Олгой"} />
                           <DocumentCheckbox value={'q17-14-1-5'} title={"Бусад"} />
                        </DocumentCheckboxGroup>
                     </Box>
                     <Box left top width={'25%'}>
                        <DocumentCheckboxGroup value={formData?.['q17-14-2']}>
                           <DocumentCheckbox value={'q17-14-2-1'} title={"Th2 – Шар"} />
                           <DocumentCheckbox value={'q17-14-2-2'} title={"Th9 – Элэг"} />
                           <DocumentCheckbox value={'q17-14-2-3'} title={"Th10 – Цөс"} />
                           <DocumentCheckbox value={'q17-14-2-4'} title={"L5 – Гэдэс"} />
                           <DocumentCheckbox value={'q17-14-2-5'} title={"Бусад"} />
                        </DocumentCheckboxGroup>
                     </Box>
                     <Box left top right width={'30%'}>
                        <DocumentCheckboxGroup value={formData?.['q17-14-3']}>
                           <DocumentCheckbox value={'q17-14-3-1'} title={"Th3 – Бадган"} />
                           <DocumentCheckbox value={'q17-14-3-2'} title={"Th11 – Дэлүү "} />
                           <DocumentCheckbox value={'q17-14-3-3'} title={"Th12 – Ходоод"} />
                           <DocumentCheckbox value={'q17-14-3-4'} title={"S1 – Давсаг"} />
                           <DocumentCheckbox value={'q17-14-3-5'} title={"Бусад"} />
                        </DocumentCheckboxGroup>
                     </Box>
                  </FlexRow>
               </FlexCol>
               <FlexRow>
                  <Box left top width={'20%'}>Хаван, хавдар</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-15-1']}>
                        <DocumentCheckbox value={'q17-15-1-1'} title={"Хуурай, ширүүн, хүйтэн, ихсэж багасах нь түргэн"} />
                        <DocumentCheckbox value={'q17-15-1-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-15-2']}>
                        <DocumentCheckbox value={'q17-15-2-1'} title={"Өвчин эмзэглэл ихтэй, халуун"} />
                        <DocumentCheckbox value={'q17-15-2-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-15-3']}>
                        <DocumentCheckbox value={'q17-15-3-1'} title={"Хүйтэн, өвчин эмзэглэл бага, тогтвортой"} />
                        <DocumentCheckbox value={'q17-15-3-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Арьс</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-16-1']}>
                        <DocumentCheckbox value={'q17-16-1-1'} title={"Хуурай"} />
                        <DocumentCheckbox value={'q17-16-1-2'} title={"Ширүүн"} />
                        <DocumentCheckbox value={'q17-16-1-3'} title={"Хүйтэн"} />
                        <DocumentCheckbox value={'q17-16-1-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-16-2']}>
                        <DocumentCheckbox value={'q17-16-2-1'} title={"Зөөлөн"} />
                        <DocumentCheckbox value={'q17-16-2-2'} title={"Тослог"} />
                        <DocumentCheckbox value={'q17-16-2-3'} title={"Бүлээн, халуун"} />
                        <DocumentCheckbox value={'q17-16-2-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q17-16-3']}>
                        <DocumentCheckbox value={' q17-16-3-1'} title={"Өөхлөг"} />
                        <DocumentCheckbox value={' q17-16-3-2'} title={"Тослог"} />
                        <DocumentCheckbox value={' q17-16-3-3'} title={"Хүйтэн"} />
                        <DocumentCheckbox value={' q17-16-3-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph style={{ textAlign: 'center' }}>Асуух шинжилгээ</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={'20%'}>Өлсөх</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-0-1']}>
                        <DocumentCheckbox value={'q18-0-1-1'} title={"Тогтмол бус"} />
                        <DocumentCheckbox value={'q18-0-1-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-0-2']}>
                        <DocumentCheckbox value={'q18-0-2-1'} title={"Их"} />
                        <DocumentCheckbox value={'q18-0-2-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-0-3']}>
                        <DocumentCheckbox value={'q18-0-3-1'} title={"Бага"} />
                        <DocumentCheckbox value={'q18-0-3-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Ундаасах</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-1-1']}>
                        <DocumentCheckbox value={'q18-1-1-1'} title={"Тогтмол бус"} />
                        <DocumentCheckbox value={'q18-1-1-1'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-1-2']}>
                        <DocumentCheckbox value={'q18-1-2-1'} title={"Их"} />
                        <DocumentCheckbox value={'q18-1-2-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-1-3']}>
                        <DocumentCheckbox value={' q18-1-3-1'} title={"Бага"} />
                        <DocumentCheckbox value={' q18-1-3-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>

               <FlexRow>
                  <Box left top width={'20%'}>Нойр</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-2-1']}>
                        <DocumentCheckbox value={'q18-2-1-1'} title={"Өнгөц сэрэмтгий"} />
                        <DocumentCheckbox value={'q18-2-1-2'} title={"Их зүүдлэнэ, хардарна"} />
                        <DocumentCheckbox value={'q18-2-1-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-2-2']}>
                        <DocumentCheckbox value={'q18-2-2-1'} title={"Шөнө унтажчадахгүй"} />
                        <DocumentCheckbox value={'q18-2-2-2'} title={"Өдөр нойр их хүрнэ"} />
                        <DocumentCheckbox value={'q18-2-2-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-2-3']}>
                        <DocumentCheckbox value={'q18-2-3-1'} title={"Нойр их"} />
                        <DocumentCheckbox value={'q18-2-3-2'} title={"Алжааж нойрмоглоно"} />
                        <DocumentCheckbox value={'q18-2-3-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>

               <FlexRow>
                  <Box left top width={'20%'}>Яриа</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-3-1']}>
                        <DocumentCheckbox value={'q18-3-1-1'} title={"Түргэн"} />
                        <DocumentCheckbox value={'q18-3-1-2'} title={"Олон үглэнэ"} />
                        <DocumentCheckbox value={'q18-3-1-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-3-2']}>
                        <DocumentCheckbox value={'q18-3-2-1'} title={"Хурц ширүүн, түрэмгий"} />
                        <DocumentCheckbox value={'q18-3-2-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-3-3']}>
                        <DocumentCheckbox value={'q18-3-3-1'} title={"Удаан алгуур"} />
                        <DocumentCheckbox value={'q18-3-3-2'} title={"Үг дуу цөөн"} />
                        <DocumentCheckbox value={'q18-3-3-3'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow><FlexRow>
                  <Box left top width={'20%'}>Галбир</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-4-1']}>
                        <DocumentCheckbox value={'q18-4-1-1'} title={"Туранхай "} />
                        <DocumentCheckbox value={'q18-4-1-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-4-2']}>
                        <DocumentCheckbox value={'q18-4-2-1'} title={"Дунд зэрэг"} />
                        <DocumentCheckbox value={'q18-4-2-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-4-3']}>
                        <DocumentCheckbox value={'q18-4-3-1'} title={"Тарган"} />
                        <DocumentCheckbox value={'q18-4-3-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Биеийн идэвхи</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-5-1']}>
                        <DocumentCheckbox value={'q18-5-1-1'} title={"Хөдөлгөөн түргэн"} />
                        <DocumentCheckbox value={'q18-5-1-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-5-2']}>
                        <DocumentCheckbox value={'q18-5-2-1'} title={"Дунд зэрэг"} />
                        <DocumentCheckbox value={'q18-5-2-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-5-3']}>
                        <DocumentCheckbox value={'q18-5-3-1'} title={"Хөдөлгөөн удаан"} />
                        <DocumentCheckbox value={'q18-5-3-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Оюуны идэвхи</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-6-1']}>
                        <DocumentCheckbox value={'q18-6-1-1'} title={"Санаж сэдсэн,идэвхитэй"} />
                        <DocumentCheckbox value={'q18-6-1-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-6-2']}>
                        <DocumentCheckbox value={'q18-6-2-1'} title={"Түрэмгий ухаалаг"} />
                        <DocumentCheckbox value={'q18-6-2-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-6-3']}>
                        <DocumentCheckbox value={'q18-6-3-1'} title={"Амгалан, удаан"} />
                        <DocumentCheckbox value={'q18-6-3-2'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Мөн чанар</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-7-1']}>
                        <DocumentCheckbox value={'q18-7-1-1'} title={"Дан"} />
                        <DocumentCheckbox value={'q18-7-1-2'} title={"Хавсарсан"} />
                        <DocumentCheckbox value={'q18-7-1-3'} title={"Хурсан"} />
                        <DocumentCheckbox value={'q18-7-1-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-7-2']}>
                        <DocumentCheckbox value={'q18-7-2-1'} title={"Дан"} />
                        <DocumentCheckbox value={'q18-7-2-2'} title={"Хавсарсан"} />
                        <DocumentCheckbox value={'q18-7-2-3'} title={"Хурсан"} />
                        <DocumentCheckbox value={'q18-7-2-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup value={formData?.['q18-7-3']}>
                        <DocumentCheckbox value={'q18-7-3-1'} title={"Дан"} />
                        <DocumentCheckbox value={'q18-7-3-2'} title={"Хавсарсан"} />
                        <DocumentCheckbox value={'q18-7-3-3'} title={"Хурсан"} />
                        <DocumentCheckbox value={'q18-7-3-4'} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Судас</Box>
                  <Box left top right width={'80%'}>
                     <TextWithUnderline>{formData?.['q18-8']}</TextWithUnderline>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>УАУ-ны онош /код/</Box>
                  <Box left top right width={'80%'}>{formData?.['q18-9']}</Box>
               </FlexRow>
               <FlexRow>
                  <Box left top bottom width={'20%'}>Эмчилгээний зарчим</Box>
                  <Box left top bottom right width={'80%'}>{formData?.['q18-10']}</Box>
               </FlexRow>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Ulamjlalt;
