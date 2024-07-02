import React, { useEffect, useState } from 'react';
import NoseImg from '../../../../assets/images/nose.png';
import NoseInsideImg from '../../../../assets/images/noseInside.png';
import EarImg from '../../../../assets/images/ear.png';
import EarInsideImg from '../../../../assets/images/earInside.png';
import TambourineImg from '../../../../assets/images/tambourine.png';
import MouthImg from '../../../../assets/images/mouth.png';
import TuvunhImg from '../../../../assets/images/aaa.png';
import { Box, Paragraph, DocumentCheckbox, DocumentCheckboxGroup, FlexRow, TextUnderline, TextUnderlineGroup, TextWithUnderline } from '../Components';

const CT_1_Chih = (props) => {
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
                  <Paragraph style={{ textAlign: "center" }}>ЧИХ ХАМАР ХООЛОЙН ЭМЧИЙН ҮЗЛЭГ</Paragraph>
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
                  <Paragraph style={{ textAlign: 'center' }}>ЧИХ ХАМАР ХООЛОЙН ҮЗЛЭГ</Paragraph>
               </Box>
               <FlexRow>
                  <Box width={'44%'} left top >
                     <Paragraph>Хамрын амьсгал:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q18}>
                        <DocumentCheckbox value={'q18-1'} title={'Чөлөөтэй'} />
                        <DocumentCheckbox value={'q18-2'} title={'Саадтай'} />
                     </DocumentCheckboxGroup>
                     <TextUnderlineGroup value={formData?.['q18-2-1']} style={{ display: "flex" }} >
                        <TextUnderline value={'q18-2-1-1'} title={'баруун'} />
                        <TextUnderline value={'q18-2-1-2'} title={'зүүн'} />
                        <TextUnderline value={'q18-2-1-3'} title={'2 талд адил/'} />
                     </TextUnderlineGroup>
                  </Box>
                  <Box width={'33%'} left top >
                     <Paragraph>Гадна хамрын хэлбэр:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q19}>
                        <DocumentCheckbox value={'q19-1 '} title={'Зөв'} />
                        <DocumentCheckbox value={'q19-2 '} title={'Зөв бус '} />
                     </DocumentCheckboxGroup>
                  </Box >
                  <Box width={'23%'} left top right>
                     <Paragraph>Тэмтрэхэд:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q20}>
                        <DocumentCheckbox value={'q20-1 '} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q20-2 '} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box width={'22%'} left top >
                     <Paragraph>Хамрын үүдэвч:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q21}>
                        <DocumentCheckbox value={'q21-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q21-2'} title={'Хэвийн бус'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={'23%'} left top >
                     <Paragraph>Ерөнхий хөндий:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q22}>
                        <DocumentCheckbox value={'q22-1 '} title={'Чөлөөтэй'} />
                        <DocumentCheckbox value={'q22-2 '} title={'Саадтай '} />
                     </DocumentCheckboxGroup>
                  </Box >
                  <Box width={'25%'} left top >
                     <Paragraph>Хамрын таславч:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q23}>
                        <DocumentCheckbox value={'q23-1 '} title={'Муруйлтгүй'} />
                        <DocumentCheckbox value={'q23-2 '} title={'Муруйсан'} />
                        <DocumentCheckbox value={'q23-3 '} title={'Бусад өөрчлөлттэй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={'35%'} left top right>
                     <img src={NoseImg} alt="" style={{ width: '200px', height: '100px' }} />
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box width={'33%'} left top >
                     <Paragraph>Хамрын салст бүрхүүл:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q24}>
                        <DocumentCheckbox value={'q24-1'} title={'Ягаан'} />
                        <DocumentCheckbox value={'q24-2'} title={'Улаан ягаан'} />
                        <DocumentCheckbox value={'q24-3'} title={'Хөхөлбий'} />
                        <DocumentCheckbox value={'q24-4'} title={'Цайвар'} />
                        <DocumentCheckbox value={'q24-5'} title={'Бусад'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box width={'33%'} left top >
                     <Paragraph>Самалдгууд:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q25}>
                        <DocumentCheckbox value={'q25-1 '} title={'Самалдгууд'} />
                        <DocumentCheckbox value={'q25-2 '} title={'Хэвийн '} />
                        <DocumentCheckbox value={'q25-3 '} title={'Бусад өөрчлөлттэй '} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Хамрын жим:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q26}>
                        <DocumentCheckbox value={'q26-1 '} title={'Ялгадасгүй:'} />
                        <DocumentCheckbox value={'q26-2 '} title={'Ялгадастай '} />
                     </DocumentCheckboxGroup>
                  </Box >
                  <Box width={'34%'} left top right >
                     <Paragraph>Ялгадас:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q27}>
                        <DocumentCheckbox value={'q27-1 '} title={'Хэвийн'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Эмгэг шинжтэй: </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q28}>
                        <DocumentCheckbox value={'q28-1 '} title={'Идээрхэг'} />
                        <DocumentCheckbox value={'q28-2 '} title={'Ногоон'} />
                        <DocumentCheckbox value={'q28-3 '} title={'Үнэртэй'} />
                        <DocumentCheckbox value={'q28-4 '} title={'Өтгөн'} />
                        <DocumentCheckbox value={'q28-5 '} title={'Бусад өөрчлөлттэй'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right bottom>
                  <img src={NoseInsideImg} alt="" style={{ alignItems: "center", width: "60%", height: "80px" }} />
               </Box>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Box left top right>
                  Бүсийн лимфийн булчирхайн байдал:
                  <TextUnderline>{formData?.q29}</TextUnderline>
               </Box>
               <Box left top right >
                  Баруун, зүүн чих:
                  <TextUnderline>{ }</TextUnderline>
               </Box>
               <FlexRow>
                  <Box left top width={'30%'}>
                     <Paragraph>Гадна чихний хэлбэр:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q30}>
                        <DocumentCheckbox value={'q30-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q30-2 '} title={'Хэвийн бус'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'23%'}>
                     <Paragraph>Тэмтрэхэд:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q31}>
                        <DocumentCheckbox value={'q31-1 '} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q31-2 '} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'23%'}>
                     <Paragraph>Хөхлөг сэртэн:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q32}>
                        <DocumentCheckbox value={'q32-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q32-2 '} title={'Хавантай'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'24%'}>
                     <Paragraph>Тэмтрэхэд:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q33}>
                        <DocumentCheckbox value={'q33-1 '} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q33-2 '} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <img src={EarImg} alt="" width="50%" height={70} className="ml-36" />
               </Box>
               <FlexRow>
                  <Box left top width={'30%'}>
                     <Paragraph>Чихний гадна суваг:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q34}>
                        <DocumentCheckbox value={'q34-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q34-2 '} title={'Нарийссан'} />
                     </DocumentCheckboxGroup>
                     <TextUnderlineGroup value={formData?.['q34-2-1']} style={{ display: "flex" }} >
                        <TextUnderline value={'q34-2-1-1'} title={'(төрөлхийн'} />
                        <TextUnderline value={'q34-2-1-2'} title={'олдмол)'} />
                     </TextUnderlineGroup>

                  </Box>
                  <Box left top width={'23%'}>
                     <DocumentCheckboxGroup value={formData?.q34}>
                        <DocumentCheckbox value={'q34-3 '} title={'Чөлөөтэй'} />
                        <DocumentCheckbox value={'q34-4 '} title={'Саадтай'} />
                        <DocumentCheckbox value={'q34-5 '} title={'Ялгадасгүй'} />
                        <DocumentCheckbox value={'q34-6 '} title={'Ялгадастай'} />
                     </DocumentCheckboxGroup>
                     <TextUnderlineGroup value={formData?.['q34-6-1']} style={{ display: "flex" }} >
                        <TextUnderline value={'q34-6-1-1'} title={'(идээрхэг'} />
                        <TextUnderline value={'q34-6-1-2'} title={'үнэртэй'} />
                        <TextUnderline value={'q34-6-1-3'} title={'ногоон)'} />
                     </TextUnderlineGroup>
                  </Box>
                  <Box left top width={'23%'}>
                     <Paragraph>Сувгийн хана:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q35}>
                        <DocumentCheckbox value={'q35-1 '} title={' Хэвийн '} />
                        <DocumentCheckbox value={'q35-2 '} title={'Цүлхийсэн'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'24%'}>
                     <img src={EarInsideImg} alt="" width="130px" height={70} />
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'25%'}>
                     <Paragraph>Хэнгэргэн хальс:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q36}>
                        <DocumentCheckbox value={'q36-1 '} title={' Хэвийн '} />
                        <DocumentCheckbox value={'q36-2 '} title={'Хэвийн бус'} />
                        <DocumentCheckbox value={'q36-3 '} title={'Бусад'} />
                        <DocumentCheckbox value={'q36-4 '} title={'Сувдан саарал'} />
                        <DocumentCheckbox value={'q36-5 '} title={'Улаан'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.q36}>
                        <DocumentCheckbox value={'q36-7 '} title={' Цооролтын байрлал '} />
                        <DocumentCheckbox value={'q36-8 '} title={'Цооролтын хэмжээ'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Хэнгэргэн хөндийн салст:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.['q36-8']}>
                        <DocumentCheckbox value={'q36-8-1 '} title={'  Цайвар ягаан '} />
                        <DocumentCheckbox value={'q36-8-2 '} title={' Улаан'} />
                        <DocumentCheckbox value={'q36-8-3 '} title={'Эмгэг өөрчлөлт'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'50%'}>
                     <img src={TambourineImg} alt="" width={'100%'} />
                  </Box>
               </FlexRow>
               <Box top left right>
                  Бүсийн лимфийн булчирхайн байдал:
                  <TextWithUnderline>{formData?.q38}</TextWithUnderline>
               </Box>
               <FlexRow>
                  <Box left top width={'25%'}>
                     <Paragraph>Хөглүүрийн сорил:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q39}>
                        <DocumentCheckbox value={'q39-1 '} title={'  Ринне '} />
                        <DocumentCheckbox value={'q39-2 '} title={' Вебер'} />
                        <DocumentCheckbox value={'q39-3 '} title={'Желле'} />
                        <DocumentCheckbox value={'q39-4 '} title={'Вальсалва'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'22%'}>
                     <Paragraph>Сонсголын бичлэг:</Paragraph>
                     <TextWithUnderline>{formData?.q40}</TextWithUnderline>
                     <Paragraph>Зэрэг:</Paragraph>
                     <TextWithUnderline>{formData?.q41}</TextWithUnderline>
                  </Box>
                  <Box left top width={'23%'}>
                     <Paragraph>Ам ангайлт:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q42}>
                        <DocumentCheckbox value={'q41-1 '} title={'  Чөлөөтэй '} />
                        <DocumentCheckbox value={'q41-2 '} title={' Хязгаарлагдсан'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Хүүхэн хэл:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q43}>
                        <DocumentCheckbox value={'q43-1 '} title={'  Хэвийн '} />
                        <DocumentCheckbox value={'q43-2 '} title={' Хэвийн бус'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'30%'}>
                     <Paragraph>Зөөлөн тагнай:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q44}>
                        <DocumentCheckbox value={'q44-1'} title={'  Хэвийн '} />
                        <DocumentCheckbox value={'q44-2'} title={' Хэвийн бус'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Тагнайн гүйлс:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q45}>
                        <DocumentCheckbox value={'q45-1 '} title={'  Хэвийн '} />
                        <DocumentCheckbox value={'q45-2 '} title={'  Томорсон'} />
                        <DocumentCheckbox value={'q45-3 '} title={'  1-р зэрэг  '} />
                        <DocumentCheckbox value={'q45-4 '} title={'  2-р зэрэг '} />
                        <DocumentCheckbox value={'q45-5 '} title={' 3-р зэрэг'} />
                        <DocumentCheckbox value={'q45-6 '} title={' Бусад өөрчлөлт '} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={"25%"}>
                     <img src={MouthImg} alt="" width={160} height={100} className="mt-2" />
                  </Box>
                  <Box left top width={"25%"}>
                     <Paragraph>Архаг үрэвслийн шинж:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q46}>
                        <DocumentCheckbox value={'q46-1 '} title={'Зак'} />
                        <DocumentCheckbox value={'q46-2 '} title={'Гисс'} />
                        <DocumentCheckbox value={'q46-3 '} title={'Преображенский'} />
                        <DocumentCheckbox value={'q46-4 '} title={' Бусад'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"25%"}>
                     <Paragraph>Лакуны байдал:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q47}>
                        <DocumentCheckbox value={'q47-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q47-2 '} title={'Өргөссөн'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Залгиурын ар хана:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q48}>
                        <DocumentCheckbox value={'q48-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q48-2 '} title={'Хэвийн бус'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={"25%"}>
                     <Paragraph>Залгиурын хажуу хана:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q49}>
                        <DocumentCheckbox value={'q49-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q49-2 '} title={'Өргөссөн'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Шувтан хонхрын байдал:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q50}>
                        <DocumentCheckbox value={'q50-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q50-2 '} title={'Хэвийн бус'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'20%'} >
                     <Paragraph>Төвөнхийн гадна үзлэг:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q51}>
                        <DocumentCheckbox value={'q51-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q51-2 '} title={'Хэвийн бус'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Тэмтрэхэд:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q52}>
                        <DocumentCheckbox value={'q52-1 '} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q52-2 '} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'35%'}>
                     <Paragraph>Нуржигнах:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q53}>
                        <DocumentCheckbox value={'q53-1 '} title={'Чимээтэй'} />
                        <DocumentCheckbox value={'q53-2 '} title={'Чимээгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Төвөнхийн шууд бус тольдолтоор:
                        Амьсгалын үйл ажиллагаа:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q54}>
                        <DocumentCheckbox value={'q54-1 '} title={'Чөлөөтэй'} />
                        <DocumentCheckbox value={'q54-2 '} title={'Саалтай'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'20%'}>
                     <Paragraph>Халхавч мөгөөрс:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q55}>
                        <DocumentCheckbox value={'q55-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q55-2 '} title={'Хэвийн бус'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Төвөнхийн салст:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q56}>
                        <DocumentCheckbox value={'q56-1 '} title={'Цайвар ягаан'} />
                        <DocumentCheckbox value={'q56-2 '} title={'Улаан'} />
                        <DocumentCheckbox value={'q56-3 '} title={'Цайвар '} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'25%'}>
                     <Paragraph>Утгуур мөгөөрс:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q57}>
                        <DocumentCheckbox value={'q57-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q57-2 '} title={'Хэвийн бус'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Дууны туслах хөвчүүд:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q58}>
                        <DocumentCheckbox value={'q58-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q58-2 '} title={'Хэвийн бус'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Жинхэнэ хөвч:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q59}>
                        <DocumentCheckbox value={'q59-1 '} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q59-2 '} title={'Хэвийн бус'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top bottom width={'20%'}>
                     <img src={TuvunhImg} alt="" width={"100%"} />
                  </Box>
                  <Box left top bottom width={'40%'} >
                     <Paragraph>Дууны өнгө:
                        <DocumentCheckboxGroup value={formData?.q60}>
                           <DocumentCheckbox value={'q60-1 '} title={'Хэвийн'} />
                           <DocumentCheckbox value={'q60-2 '} title={'Хэвийн бус'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                     <Paragraph>Фонаци хийх үед: (Дууны хөвчүүд
                        бүрэн гадаргуугаар шүргэлцэнэ)
                     </Paragraph>
                     <Paragraph>Дууны хөвчүүдийн үйл ажиллаггааны
                        хямрал:
                     </Paragraph>
                  </Box>
                  <Box left top bottom right width={'40%'}>
                     <Paragraph>Дууны хөвчийн доод зайн байдал:
                        <TextWithUnderline>{formData?.q62}</TextWithUnderline>
                     </Paragraph>
                     <Paragraph>ЦМХоолой цагираг:
                        <DocumentCheckboxGroup value={formData?.q63}>
                           <DocumentCheckbox value={'q63-1 '} title={'Хэвийн'} />
                           <DocumentCheckbox value={'q63-2 '} title={'Хэвийн бус'} />
                           <DocumentCheckbox value={'q63-2 '} title={'Өнгө'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                     <Paragraph>Бүсийн лимфийн булчирхайн байдал:
                        <TextWithUnderline>{formData?.q64}</TextWithUnderline>
                     </Paragraph>
                     <Paragraph>Бусад:
                        <TextWithUnderline>{formData?.q65}</TextWithUnderline>
                     </Paragraph>
                  </Box>
               </FlexRow>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Chih;
