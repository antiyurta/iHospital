
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
                  <Box left top right width={"33%"}>
                     <DocumentCheckboxGroup value={formData?.q3}>
                        <DocumentCheckbox value={"q3-1"} title={"Хэвийн"} />
                        <DocumentCheckbox value={"q3-2"} title={"Хэвийн бус"} />
                     </DocumentCheckboxGroup>
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
                        <TextUnderline value={'q5-4-1-1'} title={'баруун'} />
                        <TextUnderline value={'q5-4-1-2'} title={'зүүн'} />
                        <TextUnderline value={'q5-4-1-3'} title={'2 талдаа'} />
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
                        <TextUnderlineGroup value={formData?.['q8-2-1']} >
                           <TextUnderline value={'q8-2-1-1'} title={'баруун'} />
                           <TextUnderline value={'q8-2-1-2'} title={'зүүн'} />
                        </TextUnderlineGroup>
                     </DocumentCheckboxGroup>
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
                        <Paragraph> АД баруун талд  {formData?.['q9-6-1']} </Paragraph>
                        <Paragraph> Зүүн талд       {formData?.['q9-6-2']} </Paragraph>
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
                  <Box width={'50%'} left top>
                     <Paragraph>Сонсох чадвахи:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q12}>
                        <DocumentCheckbox value={'q12-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q12-2'} title={'Буурсан'} />
                        <TextUnderlineGroup value={formData?.['q12-2-1']} >
                           <TextUnderline value={'q12-2-1-1'} title={'баруун'} />
                           <TextUnderline value={'q12-2-1-2'} title={'зүүн'} />
                        </TextUnderlineGroup>
                     </DocumentCheckboxGroup>

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
                        <DocumentCheckbox value={"q16-5"} title={"Сайн"} />
                        <DocumentCheckbox value={"q16-6"} title={"Дунд"} />
                        <DocumentCheckbox value={"q16-7"} title={"Буурсан"} />
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
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хуурай ширүүн"} />
                        <DocumentCheckbox value={''} title={"Бор хүрэн хар,хөхөлбөр өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Зөөлөн чийглэг хөлс ихтэй, тослог"} />
                        <DocumentCheckbox value={''} title={"Улаа бутарсан шар,шаргал өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Сэлхэрсэн"} />
                        <DocumentCheckbox value={''} title={"Цайвар өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup></Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Нүд</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Цагаан нүд хөхөлбөр"} />
                        <DocumentCheckbox value={''} title={"Харц тогтворгүй"} />
                        <DocumentCheckbox value={''} title={"Олон анивчина"} />
                        <DocumentCheckbox value={''} title={"Нулимс гоожно"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Цагаан нүд улаан,шар, шаргал"} />
                        <DocumentCheckbox value={''} title={"Махан ургацагтай"} />
                        <DocumentCheckbox value={''} title={"Харц ширүүн"} />
                        <DocumentCheckbox value={''} title={"Шар ус, нуух гоожно "} />
                        <DocumentCheckbox value={''} title={"Бусад "} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={" Цагаан нүд цагаан,цайвар"} />
                        <DocumentCheckbox value={''} title={"Өөхөн ургацагтай"} />
                        <DocumentCheckbox value={''} title={"Харц дөлгөөн"} />
                        <DocumentCheckbox value={''} title={"Зовхи сэлхэрнэ"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>

               </FlexRow>
               <FlexRow>
                  <Box left bottom top width={'20%'}>Чих</Box>
                  <Box left bottom top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хөхөлбөр өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Шуугина загатнана"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left bottom top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Улаан шар өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Шар ус өгрий булаг гоожно"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left bottom top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Цагаан өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Хулхи ихтэй"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup></Box>
               </FlexRow>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <FlexRow>
                  <Box left top width={'20%'}>Хамар</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хөхөлбөр өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Хамар битүүрэх"} />
                        <DocumentCheckbox value={''} title={"Үнэр мэдрэхгүй болох"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хамар улайх, цус гарах, хуурайших"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хамраас ялгадас гарах,хамрын үзүүр цайх"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup></Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Уруул</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хөхөлбөр өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Муруйна"} />
                        <DocumentCheckbox value={''} title={"Чичирч таталдана"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Улбар шаргал өнгөтэй"} />
                        <DocumentCheckbox value={''} title={" Хатаж хуурайшина хагарна"} />
                        <DocumentCheckbox value={''} title={"Цус гарна"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Цайвар өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Өнгөртэй, өрөмтэй"} />
                        <DocumentCheckbox value={''} title={"Ялбарна, шүүс гоожино"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Хэл</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={" Улаан, хөхөлбөр, ягаан өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Хуурай ширүүн"} />
                        <DocumentCheckbox value={''} title={"Өнгөргүй"} />
                        <DocumentCheckbox value={''} title={"Хийн гүвдрүүтэй"} />
                        <DocumentCheckbox value={''} title={"Хөшүүн охор богино үзүүр нарийн, хэл чулчирна хэлгийрнэ таталдана"} />
                        <DocumentCheckbox value={''} title={"Эхүүн амтагдана"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Улаавтар өнгөтэй"} />
                        <DocumentCheckbox value={''} title={" Нимгэн зузаан шаргал шар өнгөртэй"} />
                        <DocumentCheckbox value={''} title={"Улаан бэржрүү гүвдрүүтэй"} />
                        <DocumentCheckbox value={''} title={"Хар толбо зураастай"} />
                        <DocumentCheckbox value={''} title={"Давслаг гашуун амтагдана "} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Цайвар ягаан өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Том"} />
                        <DocumentCheckbox value={''} title={"Чийглэг зөөлөн"} />
                        <DocumentCheckbox value={''} title={"Нимгэн зузаан цайвар өнгөртэй, зах ирмэгээрээ шүдний оромтой"} />
                        <DocumentCheckbox value={''} title={"Ам заваарна"} />
                        <DocumentCheckbox value={''} title={"Амтлаг амтагдана"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Баас</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Шингэн"} />
                        <DocumentCheckbox value={''} title={"Хөөс ихтэй"} />
                        <DocumentCheckbox value={''} title={"Хоргослож хатна"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Шар өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Цус өгрийнхольцтой"} />
                        <DocumentCheckbox value={''} title={"Өмхий үнэртэй"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Цайвар шаргал өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Эс шингэсэн идээ ундаа салсын хольцтой"} />
                        <DocumentCheckbox value={''} title={"Наалдамтгай"} />
                        <DocumentCheckbox value={''} title={"Исгэлэн үнэртэй"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Шээс</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хөхөлбөр өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Ус адил тунгалаг"} />
                        <DocumentCheckbox value={''} title={"Үнэр уур багатай"} />
                        <DocumentCheckbox value={''} title={"Хөөс том, дуутай хагарч арилна"} />
                        <DocumentCheckbox value={''} title={"Дээрээ бутарсан нарийн ширхэглэг язмагтай"} />
                        <DocumentCheckbox value={''} title={"Хувирсаны сүүлд хөхөлбөр өнгөтэй,тунгалаг"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Шар, улбар шар,улаан өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Үнэр уур ихтэй, уур нь удаан арилна"} />
                        <DocumentCheckbox value={''} title={"Хөөс нь жижиг түргэн арилна"} />
                        <DocumentCheckbox value={''} title={"Зузаан өрөмтэй"} />
                        <DocumentCheckbox value={''} title={"Дундаа хөвсөн зузаан бөөгнөрсөн язмагтай "} />
                        <DocumentCheckbox value={''} title={"Хувирсаны сүүлд шар улбар хүрэн өнгөтэй өтгөн "} />
                        <DocumentCheckbox value={''} title={"Бусад "} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Цайвар шаргал өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Үнэр уур багатай"} />
                        <DocumentCheckbox value={''} title={"Хөөс нь жижиг удаан арилна, савны хананд наалдана"} />
                        <DocumentCheckbox value={''} title={"Доороо нарийнбөөгнөрсөн тунасан язмагтай "} />
                        <DocumentCheckbox value={''} title={"Хувирсаны сүүлд цайвар шар өнгөтэй, шингэн "} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Хөлс</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Бага хэмжээтэй "} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Их хэмжээтэй, үнэрлэг"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Дунд зэрэг"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Үс</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Бор хар өнгөтэй"} />
                        <DocumentCheckbox value={''} title={"Хар"} />
                        <DocumentCheckbox value={''} title={"Хуурай"} />
                        <DocumentCheckbox value={''} title={"Буржгар"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Шаравтар"} />
                        <DocumentCheckbox value={''} title={"Тослог"} />
                        <DocumentCheckbox value={''} title={"Зөөлөн улаан, эрт бууралтсан"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Бараан, гялалзсан"} />
                        <DocumentCheckbox value={''} title={"Тослог"} />
                        <DocumentCheckbox value={''} title={"Даахирсан"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Шүд</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Дорсгор иржгэр"} />
                        <DocumentCheckbox value={''} title={"Том"} />
                        <DocumentCheckbox value={''} title={"Эцэнхий буйлтай"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Шарласан"} />
                        <DocumentCheckbox value={''} title={"Тослог"} />
                        <DocumentCheckbox value={''} title={"Зөөлөн буйлтай"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Цагаан"} />
                        <DocumentCheckbox value={''} title={"Хатуу"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left bottom top width={'20%'}>Хумс</Box>
                  <Box left bottom top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хөхрөх"} />
                        <DocumentCheckbox value={''} title={"Хувхайрах"} />
                        <DocumentCheckbox value={''} title={"Зузаарах"} />
                        <DocumentCheckbox value={''} title={"Хатуу болох"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left bottom top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Шарлах"} />
                        <DocumentCheckbox value={''} title={"Харавтар зураас тогтох"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left bottom top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Цайх"} />
                        <DocumentCheckbox value={''} title={"Цагаан толбо, дусал адил бусаар гарах"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Box left top right><Paragraph style={{ textAlign: 'center' }}>Хүрэлцэх шинжилгээ</Paragraph></Box>
               <FlexRow>
                  <Box left top width={'20%'}>Хаван, хавдар</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хуурай, ширүүн, хүйтэн, ихсэж багасах нь түргэн"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Өвчин эмзэглэл ихтэй, халуун"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хүйтэн, өвчин эмзэглэл бага, тогтвортой"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Арьс</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хуурай"} />
                        <DocumentCheckbox value={''} title={"Ширүүн"} />
                        <DocumentCheckbox value={''} title={"Хүйтэн"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Зөөлөн"} />
                        <DocumentCheckbox value={''} title={"Тослог"} />
                        <DocumentCheckbox value={''} title={"Бүлээн, халуун"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Өөхлөг"} />
                        <DocumentCheckbox value={''} title={"Тослог"} />
                        <DocumentCheckbox value={''} title={"Хүйтэн"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph style={{ textAlign: 'center' }}>Асуух шинжилгээ</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={'20%'}>Өлсөх</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Тогтмол бус"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Их"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Бага"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Ундаасах</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Тогтмол бус"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Их"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Бага"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>

               <FlexRow>
                  <Box left top width={'20%'}>Нойр</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Өнгөц сэрэмтгий"} />
                        <DocumentCheckbox value={''} title={"Их зүүдлэнэ, хардарна"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Шөнө унтажчадахгүй"} />
                        <DocumentCheckbox value={''} title={"Өдөр нойр их хүрнэ"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Нойр их"} />
                        <DocumentCheckbox value={''} title={"Алжааж нойрмоглоно"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>

               <FlexRow>
                  <Box left top width={'20%'}>Яриа</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Түргэн"} />
                        <DocumentCheckbox value={''} title={"Олон үглэнэ"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хурц ширүүн, түрэмгий"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Удаан алгуур"} />
                        <DocumentCheckbox value={''} title={"Үг дуу цөөн"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow><FlexRow>
                  <Box left top width={'20%'}>Галбир</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Туранхай "} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Дунд зэрэг"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Тарган"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Биеийн идэвхи</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хөдөлгөөн түргэн"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Дунд зэрэг"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Хөдөлгөөн удаан"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Оюуны идэвхи</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Санаж сэдсэн,идэвхитэй"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Түрэмгий ухаалаг"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Амгалан, удаан"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Мөн чанар</Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Дан"} />
                        <DocumentCheckbox value={''} title={"Хавсарсан"} />
                        <DocumentCheckbox value={''} title={"Хурсан"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Дан"} />
                        <DocumentCheckbox value={''} title={"Хавсарсан"} />
                        <DocumentCheckbox value={''} title={"Хурсан"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={''} title={"Дан"} />
                        <DocumentCheckbox value={''} title={"Хавсарсан"} />
                        <DocumentCheckbox value={''} title={"Хурсан"} />
                        <DocumentCheckbox value={''} title={"Бусад"} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>Судас</Box>
                  <Box left top right width={'80%'}></Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>УАУ-ны онош /код/</Box>
                  <Box left top right width={'80%'}></Box>
               </FlexRow>
               <FlexRow>
                  <Box left top bottom width={'20%'}>Эмчилгээний зарчим</Box>
                  <Box left top bottom right width={'80%'}></Box>
               </FlexRow>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Ulamjlalt;
