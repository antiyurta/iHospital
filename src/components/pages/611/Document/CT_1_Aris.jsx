import React, { useEffect, useState } from 'react';
import { Box, Paragraph, DocumentCheckbox, DocumentCheckboxGroup, FlexRow, TextUnderline, TextUnderlineGroup, TextWithUnderline, TextWithUnderline2, } from '../Components';

const CT_1_Aris = (props) => {
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
                  <Paragraph style={{ textAlign: "center" }}>АРЬСНЫ ЭМЧИЙН ҮЗЛЭГ</Paragraph>
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
                        <Paragraph> Зүүн талд<TextWithUnderline>{formData?.q11}</TextWithUnderline> </Paragraph>
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
                  <Paragraph style={{ textAlign: "center" }}>Арьс, салст, дайвруудын үзлэг:</Paragraph>
               </Box>
               <Box style={{ display: 'flex' }} left top right>
                  <Paragraph>Арьсны хүрэлцэх мэдрэхүйн байдал:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q18} FlexRow>
                     <DocumentCheckbox value={"q18-1"} title={'Мэдэрч байна'} />
                     <DocumentCheckbox value={"q18-2"} title={'Мэдрэхгүй байна'} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box left top right>Арьсны байдал:
                  <TextWithUnderline> {formData?.q29}</TextWithUnderline>
               </Box>
               <FlexRow>
                  <Box left top width={'25%'}>
                     <Paragraph>Арьсны өнгө:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q19} FlexRow>
                        <DocumentCheckbox value={"q19-1"} title={'Хэвийн'} />
                        <DocumentCheckbox value={"q19-2"} title={'Улаан цоохор'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.q19} FlexRow>
                        <DocumentCheckbox value={"q19-3"} title={'Хэвийн бус'} />
                        <DocumentCheckbox value={"q19-4"} title={'Зэвхий саарал'} />
                        <DocumentCheckbox value={"q19-5"} title={'Шар'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.q19} FlexRow>
                        <DocumentCheckbox value={"q19-6"} title={'Шарангуй'} />
                        <DocumentCheckbox value={"q19-7"} title={'Хүрэн'} />
                        <DocumentCheckbox value={"q19-8"} title={'Харласан'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.q19} FlexRow>
                        <DocumentCheckbox value={"q19-9"} title={'Хөхөрсөн'} />
                        <DocumentCheckbox value={"q19-10"} title={'Цайж алагласан'} />
                        <DocumentCheckbox value={"q19-11"} title={'Хүрэл шиг'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'34%'}>
                     <Paragraph>Уян чанар:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q20}>
                        <DocumentCheckbox value={'q20-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q20-2'} title={'Ихэссэн'} />
                        <DocumentCheckbox value={'q20-3'} title={'Алдагдсан'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'33%'}>
                     <Paragraph>Арьсны халуун:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q21}>
                        <DocumentCheckbox value={'q21-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q21-2'} title={'Халуун'} />
                        <DocumentCheckbox value={'q21-3'} title={'Хүйтэн'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'33%'}>
                     <Paragraph>Чийглэг байдал:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q22}>
                        <DocumentCheckbox value={'q22-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q22-2'} title={'Ихэссэн'} />
                        <DocumentCheckbox value={'q22-3'} title={'Багассан'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph style={{ display: 'flex' }}>Хэсэг газрын үзлэг</Paragraph>
               </Box>
               <Box left top right>
                  <Paragraph>Тууралтын онцлог</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={'20%'}>
                     <Paragraph>Өнгө:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q23}>
                        <DocumentCheckbox value={'q23-1'} title={'Ягаан'} />
                        <DocumentCheckbox value={'q23-2'} title={'Улаан'} />
                        <DocumentCheckbox value={'q23-3'} title={'Цагаан'} />
                        <DocumentCheckbox value={'q23-4'} title={'Цайвар бор'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'20%'}>
                     <DocumentCheckboxGroup value={formData?.q23}>
                        <DocumentCheckbox value={'q23-5'} title={'Бор'} />
                        <DocumentCheckbox value={'q23-6'} title={'Хар'} />
                        <DocumentCheckbox value={'q23-7'} title={'Хөх'} />
                        <DocumentCheckbox value={'q23-8'} title={'Саарал'} />
                        <DocumentCheckbox value={'q23-9'} title={'Шар'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'20%'}>
                     <Paragraph>Хүрээ:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q24}>
                        <DocumentCheckbox value={'q24-1'} title={'Хил хязгаар нь тод'} />
                        <DocumentCheckbox value={'q24-2'} title={'Тод бус (well defined) (Illdefined)'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'20%'}>
                     <Paragraph>Хэлбэр:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q25}>
                        <DocumentCheckbox value={'q25-1'} title={'Дугараг'} />
                        <DocumentCheckbox value={'q25-2'} title={'Зууван'} />
                        <DocumentCheckbox value={'q25-3'} title={'Олон талт'} />
                        <DocumentCheckbox value={'q25-4'} title={'Олон цагирагт'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'20%'}>
                     <DocumentCheckboxGroup value={formData?.q25}>
                        <DocumentCheckbox value={' q25-5'} title={'Зоос хэлбэрийн'} />
                        <DocumentCheckbox value={' q25-6'} title={'Могой хэлбэрийн'} />
                        <DocumentCheckbox value={' q25-7'} title={'Шугаман'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'}>
                     <Paragraph>Тэмтрэхэд:</Paragraph>
                     <Paragraph>Тогтоц нь</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q26}>
                        <DocumentCheckbox value={'q26-1'} title={'Зөөлөн'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'20%'}>
                     <DocumentCheckboxGroup value={formData?.q26}>
                        <DocumentCheckbox value={'q26-2'} title={'Хатуувтар'} />
                        <DocumentCheckbox value={'q26-3'} title={'Нягт хатуу'} />
                        <DocumentCheckbox value={'q26-4'} title={'Бамбалзсан'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'20%'}>
                     <DocumentCheckboxGroup value={formData?.q26}>
                        <DocumentCheckbox value={'q26-5'} title={'Даргар'} />
                        <DocumentCheckbox value={'q26-6'} title={'Халуун'} />
                        <DocumentCheckbox value={'q26-7'} title={'Хүйтэн'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'20%'}>
                     <DocumentCheckboxGroup value={formData?.q26}>
                        <DocumentCheckbox value={'q26-8'} title={'Хөдөлгөөнтэй'} />
                        <DocumentCheckbox value={'q26-9'} title={'Хөдөлгөөнгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'20%'}>
                     <DocumentCheckboxGroup value={formData?.q26}>
                        <DocumentCheckbox value={'q26-10'} title={'Эмзэглэлтэй'} />
                        <DocumentCheckbox value={'q26-11'} title={'Эмзэглэлгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>

            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <FlexRow>
                  <Box left top width={'50%'}>
                     <Paragraph>Эмх цэгц, хэв маяг болон тархалт</Paragraph>
                     <Paragraph>Тоо хэмжээ:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q27}>
                        <DocumentCheckbox value={'q27-1'} title={'Нэг'} />
                        <DocumentCheckbox value={'q27-1'} title={'Олон тууралт'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'50%'} style={{ display: 'flex' }}>
                     <Paragraph>
                        <Paragraph>Эмх цэгц:</Paragraph>
                        <DocumentCheckboxGroup value={formData?.q28}>
                           <DocumentCheckbox value={'q28-2'} title={'Бүлэглэсэн'} />
                           <DocumentCheckbox value={'q28-3'} title={'Тархсан'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                     <Paragraph>
                        <Paragraph>Нягтрал:</Paragraph>
                        <DocumentCheckboxGroup value={formData?.q29}>
                           <DocumentCheckbox value={'q29-2'} title={'Байгаа'} />
                           <DocumentCheckbox value={'q29-3'} title={'Байхгүй'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'34%'} >
                     <Paragraph>Тархац: Тэлэлт: </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q30}>
                        <DocumentCheckbox value={'q30-1'} title={'Дангараа'} />
                        <DocumentCheckbox value={'q30-2'} title={'Нэг хэсэг (хэсэгчилсэн)'} />
                        <DocumentCheckbox value={'q30-3'} title={'Хэсэг газрыг хамарсан'} />
                        <DocumentCheckbox value={'q30-4'} title={'Бүх биеэр тархсан'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'33%'}>
                     <Paragraph>Байрлалт</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q31}>
                        <DocumentCheckbox value={'q31-1'} title={'2 талд тэгш'} />
                        <DocumentCheckbox value={'q31-2'} title={'Тэгш бус'} />
                        <DocumentCheckbox value={'q31-3'} title={'Өртсөн хэсэгт'} />
                        <DocumentCheckbox value={'q31-4'} title={'Даралттай хэсэгт'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'33%'} value={formData?.q31}>
                     <DocumentCheckboxGroup>
                        <DocumentCheckbox value={'q31-5'} title={'Хурууны завсар'} />
                        <DocumentCheckbox value={'q31-6'} title={'Энд тэнд'} />
                        <DocumentCheckbox value={'q31-7'} title={'Blaschko-н шугам дагуу'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph>Өвчлөлтэй холбогдолтой түүх (Удамшлын болоод бодисын солилцооны өвчний түүх)</Paragraph>
               </Box>
               <Box left top right bottom>
                  <Paragraph> 1. Чихэрийн шижинтэй эсэх:
                     <TextWithUnderline>{formData?.q32}</TextWithUnderline>
                  </Paragraph>
                  <Paragraph> 2. Даралт ихтэй эсэх:
                     <TextWithUnderline>{formData?.q33}</TextWithUnderline>
                  </Paragraph>
                  <Paragraph>3. Харшил (ялангуяа эмийн):
                     <TextWithUnderline>{formData?.q34}</TextWithUnderline>
                  </Paragraph>
                  <Paragraph> 4. Эм хэрэглэлт, байнга уудаг болон одоо ууж байгаа:
                     <TextWithUnderline>{formData?.q35}</TextWithUnderline>
                  </Paragraph>
                  <Paragraph>5. Хорт зуршил (архи, тамхи):
                     <TextWithUnderline>{formData?.q36}</TextWithUnderline>
                  </Paragraph>
                  <Paragraph>6. Атофийн түүх (астма, чонон хөрвөс, экзем):
                     <TextWithUnderline>{formData?.q37}</TextWithUnderline>
                  </Paragraph>
                  <Paragraph>7. Гэр бүлийн өвчлөлийн түүх:
                     <TextWithUnderline>{formData?.q38}</TextWithUnderline>
                  </Paragraph>
                  <Paragraph>8. Нийгмийн идэвх сонирхол:
                     <TextWithUnderline>{formData?.q39}</TextWithUnderline>
                  </Paragraph>
                  <Paragraph> 9. Бэлгийн хавьтлын түүх:
                     <TextWithUnderline>{formData?.q40}</TextWithUnderline>
                  </Paragraph>
               </Box>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Aris;
