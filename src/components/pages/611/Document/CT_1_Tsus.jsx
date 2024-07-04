import React, { useEffect, useState } from 'react';
import { Checkbox, Image, Input } from 'antd';
import { Table } from 'react-bootstrap';
import HematopImg from '../../../../assets/images/hematop.png';
import BodyImg from '../../../../assets/images/body.png';
import Body2Img from '../../../../assets/images/body2.png';
import ChestImg from '../../../../assets/images/chest.png';
import { Box, Paragraph, DocumentCheckbox, DocumentCheckboxGroup, FlexRow, TextUnderline, TextUnderlineGroup, TextWithUnderline, FlexCol } from '../Components';

const CT_1_Tsus = (props) => {
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
                  <Paragraph style={{ textAlign: 'center' }}>Цус судлалын эмчийн үзлэг</Paragraph>
               </Box>
               <FlexRow>
                  <Box width={'50%'} left top >
                     <img src={HematopImg} alt="" width={200} height={100} className="p-8" />
                  </Box>
                  <Box width={'50%'} left top right>
                     <Paragraph>Зовиур:
                        <TextWithUnderline>{formData?.q}</TextWithUnderline>
                     </Paragraph>
                     <Paragraph>Биеийн жин /Кг/:       <TextWithUnderline>{formData?.q18}</TextWithUnderline></Paragraph>
                     <Paragraph>Биеийн өндөр /См/:     <TextWithUnderline>{formData?.q19}</TextWithUnderline></Paragraph>
                     <Paragraph>Биеийн гадаргуу / м2/: <TextWithUnderline>{formData?.q20}</TextWithUnderline></Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top bottom width={'40%'}>
                     <Paragraph>Арьсан дээрх тууралтын хэлбэр:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Цэгчилсэн гүвдрүүт тууралт'} />
                        <DocumentCheckbox value={'q14-2'} title={'Цэврүүт тууралт'} />
                        <DocumentCheckbox value={'q14-2'} title={'Толбон тууралт'} />
                        <DocumentCheckbox value={'q14-2'} title={'Шалбархайт болон тав тогтсон'} />
                        <DocumentCheckbox value={'q14-2'} title={'Сорви'} />
                        <DocumentCheckbox value={'q14-2'} title={'Хөхрөлт'} />
                        <DocumentCheckbox value={'q14-2'} title={'Цус хуралт'} />
                        <DocumentCheckbox value={'q14-2'} title={'Цус харвалт '} />
                        <DocumentCheckbox value={'q14-2'} title={'Холимог тууралт'} />
                        <DocumentCheckbox value={'q14-2'} title={'Тууралтгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top bottom width={'20%'}>
                     <Paragraph>Үсний байдал:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q14-2'} title={'Хугарамтгай'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Хумсны байдал:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q14-2'} title={'Хугарамтгай'} />
                     </DocumentCheckboxGroup>

                  </Box>
                  <Box left top right bottom width={'40%'}>
                     <Paragraph> (Тууралтын байрлалыг зурагт тэмдэглэх)</Paragraph>
                     <img src={BodyImg} alt="" width={240} height={220} />
                  </Box>
               </FlexRow>
            </div>
         </div>
         <div className="page">
            <div className="subpage">

               <FlexRow>
                  <Box width={"25%"} left top >
                     <Paragraph>Хумсны байдал:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q14-2'} title={'Хугарамтгай'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={"25%"} left top >
                     <Paragraph>Амны хөндий: Хэл/</Paragraph>
                     <Paragraph>Өнгө:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Ердийн'} />
                        <DocumentCheckbox value={'q14-2'} title={'Цайвар'} />
                        <DocumentCheckbox value={'q14-2'} title={'Улаан'} />
                        <DocumentCheckbox value={'q14-2'} title={'Ягаан'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={"25%"} left top >
                     <Paragraph>Хөхлөг</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Ердийн'} />
                        <DocumentCheckbox value={'q14-2'} title={'Хатингаршсан'} />
                        <DocumentCheckbox value={'q14-2'} title={'Томорсон'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={"25%"} left top right  >
                     <Paragraph>Тууралт</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Тууралттай'} />
                        <DocumentCheckbox value={'q14-2'} title={'Шарх'} />
                        <DocumentCheckbox value={'q14-2'} title={'Улайлт'} />
                        <DocumentCheckbox value={'q14-2'} title={'Яр'} />
                        <DocumentCheckbox value={'q14-2'} title={'Газрын зураг'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box width={"25%"} left top >
                     <Paragraph>Бөөрөлзгөнө хэл Өнгө:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Ердийн'} />
                        <DocumentCheckbox value={'q14-2'} title={'Улайсан'} />
                        <DocumentCheckbox value={'q14-2'} title={'Цайсан'} />
                        <DocumentCheckbox value={'q14-2'} title={'Хөхөлбий'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={"25%"} left top >
                     <Paragraph>Шарх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Шархтай'} />
                        <DocumentCheckbox value={'q14-2'} title={'Шархгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={"25%"} left top >
                     <Paragraph>Буйл: Эмзэглэл</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q14-2'} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={"25%"} left top right  >
                     <Paragraph>Тууралт</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Тууралттай'} />
                        <DocumentCheckbox value={'q14-2'} title={'Тууралтгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph>Тунгалагийн булчирхайн байдал:</Paragraph>
               </Box>
               <FlexRow>
                  <Box width={"15%"} left top >
                     <Paragraph>Нягт :</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Хатуу'} />
                        <DocumentCheckbox value={'q14-2'} title={'Зөөлөн'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Гадаргуу:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Барзгар'} />
                        <DocumentCheckbox value={'q14-2'} title={'Гөлгөр'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={"15%"} top >
                     <img src={Body2Img} alt="" width={100} height={100} className="mr-4" />
                  </Box>
                  <Box width={"20%"} left top >
                     <Paragraph>Хөдөлгөөн:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Хөдөлгөөнтэй'} />
                        <DocumentCheckbox value={'q14-2'} title={'Хөдөлгөөнгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Эмзэглэл:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q14-2'} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={"30%"} left top   >
                     <Paragraph>Дэлүүний хэмжээ:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q14-2'} title={'1зэргээр томорсон'} />
                        <DocumentCheckbox value={'q14-2'} title={'2 зэргээр томорсон.'} />
                        <DocumentCheckbox value={'q14-2'} title={'3 зэргээр томорсон.'} />
                        <DocumentCheckbox value={'q14-2'} title={'4 зэргээр томорсон.'} />
                        <DocumentCheckbox value={'q14-2'} title={'Дэлүү мэс заслаар авагдсан.'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={"20%"} top right  >
                     <img src={ChestImg} alt="" width={120} height={100} />
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph>Шинжилгээ:</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={'50%'}>Цусны дэлгэрэнгүй шинжилгээ:</Box>
                  <Box left top right width={"50%"}> Лейкограмм</Box>
               </FlexRow>
               <FlexCol>
                  <FlexRow>
                     <Box left top width={"14%"}>Огноо </Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"20%"}>огноо</Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top right width={"10%"}></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box left top width={"14%"}>WBC</Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"20%"}>Balsts</Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top right width={"10%"}></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box left top width={"14%"}>PLT</Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"20%"}>Basophil</Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top right width={"10%"}></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box left top width={"14%"}>RBC</Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"20%"}>Eosinophil</Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top right width={"10%"}></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box left top width={"14%"}>HGB</Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"20%"}>Promyelocyte</Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top right width={"10%"}></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box left top width={"14%"}>HCT</Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"20%"}>Myelocyte</Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top right width={"10%"}></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box left top width={"14%"}>MCV</Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"20%"}>Metmyelocyte</Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top right width={"10%"}></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box left top width={"14%"}>MCH</Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"20%"}>Bands</Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top right width={"10%"}></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box left top width={"14%"}>RET</Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"20%"}>Neutrophil</Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top right width={"10%"}></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box left top width={"14%"}>RET-He</Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"20%"}>Lymphocyte</Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top right width={"10%"}></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box left top width={"14%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"12%"}></Box>
                     <Box left top width={"20%"}>Monocyte</Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top width={"10%"}></Box>
                     <Box left top right width={"10%"}></Box>
                  </FlexRow>
               </FlexCol>
               <Box left top right style={{ display: "flex", alignItems: 'center' }}>
                  <Paragraph>Дүгнэлт:</Paragraph>
                  <TextWithUnderline>{formData?.q}</TextWithUnderline>
               </Box>
               <Box left top right>
                  <Paragraph>Миелограмм:</Paragraph>
               </Box>
               {/* <FlexCol>
                  <FlexRow>
                     <Box width={"20%"} left top >Огноо</Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"60%"} left top right >{formData?.q1111}</Box>
                  </FlexRow>
                  <FlexRow>
                     <Box width={"20%"} left top >Огноо</Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"60%"} left right ></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box width={"20%"} left top >Бласт</Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"60%"} left right ></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box width={"20%"} left top >Бүх нейтрофиль</Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"60%"} left right ></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box width={"20%"} left top >Бүх эритриод эс</Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"60%"} left right ></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box width={"20%"} left top >Лимфоцит</Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"60%"} left right ></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box width={"20%"} left top >Плазмоцит</Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"60%"} left right ></Box>
                  </FlexRow>
                  <FlexRow>
                     <Box width={"20%"} left top >Мегакариоцит</Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"10%"} left top ></Box>
                     <Box width={"60%"} left right ></Box>
                  </FlexRow>
               </FlexCol> */}
               <div style={{ display: "flex" }}>
                  <FlexCol>
                     <FlexRow>
                        <Box width={'150px'} left top>Огноо</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Бласт</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Бүх нейтрофиль</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Бүх эритриод эс</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Лимфоцит</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Плазмоцит</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Мегакариоцит</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                  </FlexCol>
                  <FlexCol >
                     <Box style={{ width: "400px", height: "132px" }} left top right>
                        Дүгнэлт:
                        <TextWithUnderline>{formData?.q}</TextWithUnderline>
                     </Box>
                  </FlexCol>
               </div>
               <Box left top right>
                  Цито химийн урвал
               </Box>
               <FlexRow>
                  <Box width={'20%'} left top></Box>
                  <Box width={'10%'} left top>Эерэг</Box>
                  <Box width={'10%'} left top>Сөрөг</Box>
                  <Box width={'20%'} left top>Огноо</Box>
                  <Box width={'20%'} left top></Box>
                  <Box width={'20%'} left top right></Box>
               </FlexRow>
               <FlexRow>
                  <Box width={'20%'} left top>MPO</Box>
                  <Box width={'10%'} left top></Box>
                  <Box width={'10%'} left top></Box>
                  <Box width={'20%'} left top>APTT</Box>
                  <Box width={'20%'} left top></Box>
                  <Box width={'20%'} left top right></Box>
               </FlexRow>
               <FlexRow>
                  <Box width={'20%'} left top>PAS</Box>
                  <Box width={'10%'} left top></Box>
                  <Box width={'10%'} left top></Box>
                  <Box width={'20%'} left top>PT</Box>
                  <Box width={'20%'} left top></Box>
                  <Box width={'20%'} left top right></Box>
               </FlexRow>
               <FlexRow>
                  <Box width={'20%'} left top>DAB</Box>
                  <Box width={'10%'} left top></Box>
                  <Box width={'10%'} left top></Box>
                  <Box width={'20%'} left top>INR</Box>
                  <Box width={'20%'} left top></Box>
                  <Box width={'20%'} left top right></Box>
               </FlexRow>
               <FlexRow>
                  <Box width={'20%'} left top>NS</Box>
                  <Box width={'10%'} left top></Box>
                  <Box width={'10%'} left top></Box>
                  <Box width={'20%'} left top>TT</Box>
                  <Box width={'20%'} left top></Box>
                  <Box width={'20%'} left top right></Box>
               </FlexRow>
               <FlexRow>
                  <Box width={'20%'} left top></Box>
                  <Box width={'10%'} left top></Box>
                  <Box width={'10%'} left top></Box>
                  <Box width={'20%'} left top>Fibrinogen</Box>
                  <Box width={'20%'} left top></Box>
                  <Box width={'20%'} left top right></Box>
               </FlexRow>
               <Box left top right>Биохими</Box>
               <div style={{ display: "flex" }}>
                  <FlexCol>
                     <FlexRow>
                        <Box width={'150px'} left top>Огноо</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Нийт билирубин</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Шууд бус билирубин</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Алат</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Асат</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Шүлт Фосфатаза</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top bottom>ЛДГ</Box>
                        <Box width={'50px'} left top bottom></Box>
                        <Box width={'50px'} left top bottom></Box>
                     </FlexRow>
                  </FlexCol>
                  <FlexCol >
                     <Box style={{ width: "400px", height: "132px" }} left top right bottom>
                        Дүгнэлт:
                        <TextWithUnderline>{formData?.q}</TextWithUnderline>
                     </Box>
                  </FlexCol>
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={{ display: "flex" }}>
                  <FlexCol>
                     <FlexRow>
                        <Box width={'150px'} left top>Кальци</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Кали</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Креатинин</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Төмөр</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Ферритин</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Төмөр хол/ чадвар</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Витамин В12</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Фолийн хүчил</Box>
                        <Box width={'50px'} left top></Box>
                        <Box width={'50px'} left top ></Box>
                     </FlexRow>
                  </FlexCol>
                  <FlexCol >
                     <Box style={{ width: "400px", height: "150px" }} left top right>
                     </Box>
                  </FlexCol>
               </div>
               <FlexRow>
                  <Box left top width={"50%"}>Бактер, вирус, маркерийн шинжилгээ:
                     <TextWithUnderline></TextWithUnderline>
                  </Box>
                  <Box left top right width={"50%"}>Дүгнэлт:
                     <TextWithUnderline></TextWithUnderline>
                  </Box>
               </FlexRow>
               <Box left top right>Шээсэнд:</Box>
               <div style={{ display: "flex" }}>
                  <FlexCol>
                     <FlexRow>
                        <Box width={'150px'} left top>Огноо</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Сахар</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>pH</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Цагаан эс</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Улаан эс</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Хувийн жин</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>гемосидерин</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Бенс-жонс уураг</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top ></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Гемоглобин </Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top ></Box>
                     </FlexRow>
                  </FlexCol>
                  <FlexCol >
                     <Box style={{ width: "338px", height: "170px" }} left top right>
                     </Box>
                  </FlexCol>
               </div>
               <Box left top right>Цусанд:</Box>
               <div style={{ display: "flex" }}>
                  <FlexCol>
                     <FlexRow>
                        <Box width={'150px'} left top>Огноо</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Кумбсын шууд урвал</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>Кумбсын шууд бус урвал</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                  </FlexCol>
                  <FlexCol >
                     <Box style={{ width: "338px", height: "75px" }} left top right>
                     </Box>
                  </FlexCol>
               </div>
               <FlexRow>
                  <Box left top width={"50%"}>
                     Бусад(PCR, молекул генетик цитогенетик, урсгал
                     цитометр):
                     <TextWithUnderline>{ }</TextWithUnderline>
                  </Box>
                  <Box left top right width={"50%"}>Дүгнэлт<TextWithUnderline>{ }</TextWithUnderline>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top right width={"50%"}>Иммунологи</Box>
                  <Box top right width={"50%"}></Box>
               </FlexRow>
               <div style={{ display: "flex" }}>
                  <FlexCol>
                     <FlexRow>
                        <Box width={'150px'} left top>Огноо</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>IgG</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>IgM</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                     <FlexRow>
                        <Box width={'150px'} left top>IgA</Box>
                        <Box width={'81px'} left top></Box>
                        <Box width={'81px'} left top></Box>
                     </FlexRow>
                  </FlexCol>
                  <FlexCol >
                     <Box style={{ width: "338px", height: "75px" }} left top right>
                     </Box>
                  </FlexCol>
               </div>
               <Box left top right style={{ height: "30px" }}>
                  Үйл онош:
                  <TextWithUnderline>{formData?.q}</TextWithUnderline>
               </Box>
               <Box left top right style={{ height: "100px" }}>
                  Цусны бусад эмгэг өөрчлөлтүүд:
                  <TextWithUnderline>{formData?.q}</TextWithUnderline>
               </Box>
               <Box left top right style={{ height: "100px" }}>
                  Эмнэл зүйн онош:
                  <TextWithUnderline>{formData?.q}</TextWithUnderline>
               </Box>
               <Box left top right style={{ height: "120px" }}>
                  Зөвлөгөө, эмчилгээ:
                  <TextWithUnderline>{formData?.q}</TextWithUnderline>
               </Box>
               <FlexRow>
                  <Box style={{ height: "30px" }} left top bottom width={'30%'}>Эмчийн нэр:</Box>
                  <Box style={{ height: "30px" }} top right bottom width={'30%'}>Гарын үсэг:</Box>
                  <Box top right bottom width={"40%"} style={{ display: "flex", gap: "20px", justifyContent: "center", height: "30px" }}>
                     <Paragraph>он</Paragraph>
                     <Paragraph>сар</Paragraph>
                     <Paragraph>өдөр</Paragraph>
                  </Box>
               </FlexRow>
            </div>
         </div>
      </div >
   );
};
export default CT_1_Tsus;
