import React, { useEffect, useState } from 'react';
import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
import { Box, Paragraph, DocumentCheckbox, DocumentCheckboxGroup, FlexRow, TextUnderline, TextUnderlineGroup, TextWithUnderline, TextWithUnderline2, } from '../Components';

const CT1Dotor = (props) => {
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
               <Box left top right>
                  <Paragraph style={{ textAlign: "center" }}>ДОТРЫН ЭМЧИЙН ҮЗЛЭГ</Paragraph>
               </Box>
               <Box left top right>
                  <Paragraph >Амьсгалын эрхтэн тогтолцоо</Paragraph>
               </Box>
               <Box left top right>
                  <Paragraph >Харж ажиглах:</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={"25%"} >
                     <Paragraph>Хамрын амьсгал чөлөөтэй эсэх:</Paragraph>
                     <DocumentCheckboxGroup style={{ display: 'flex' }} value={formData?.q1}>
                        <DocumentCheckbox value={'q1-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q1-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Хөхрөлт байгаа эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q2}>
                        <DocumentCheckbox value={'q2-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q2-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Тийм бол:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.['q2-1-1']}>
                        <DocumentCheckbox value={'q2-1-1-1'} title={'Төвийн'} />
                        <DocumentCheckbox value={'q2-1-1-2'} title={'Захын'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"25%"} >
                     <Paragraph>Амьсгалд туслах булчингууд оролцож байгаа эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q3}>
                        <DocumentCheckbox value={'q3-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q3-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Амьсгалын тоо 1
                        минутанд
                        <TextWithUnderline>{formData?.q4}</TextWithUnderline>
                        удаа
                     </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q5}>
                        <DocumentCheckbox value={'q5-1'} title={'Хэм жигд'} />
                        <DocumentCheckbox value={'q5-2'} title={'Жигд бус'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"25%"} >
                     <Paragraph>Цээжний хэлбэр:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q6}>
                        <DocumentCheckbox value={'q6-1'} title={'Зөв'} />
                        <DocumentCheckbox value={'q6-2'} title={'Эмгэг'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Амьсгалын хэлбэр:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q7}>
                        <DocumentCheckbox value={'q7-1'} title={'Цээжний'} />
                        <DocumentCheckbox value={'q7-2'} title={'Хэвлийн'} />
                        <DocumentCheckbox value={'q7-3'} title={'Холимог'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"25%"} right>
                     <Paragraph>Цээжний 2 талд амьсгалд жигд оролцох байдал:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q8}>
                        <DocumentCheckbox value={'q8-1'} title={'Жигд '} />
                        <DocumentCheckbox value={'q8-2'} title={'Хоцорно'} />
                     </DocumentCheckboxGroup>
                     <TextUnderlineGroup value={formData?.['q8-2-1']}>
                        <TextUnderline value={'q8-2-1-1'} title={'баруун'} />
                        <TextUnderline value={'q8-2-1-2'} title={'зүүн'} />
                     </TextUnderlineGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={"50%"}>
                     <Paragraph>Тэмтрэлт: </Paragraph>
                  </Box>
                  <Box left top right width={'50%'}>
                     <Paragraph>Тогшилт</Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={"25%"}>
                     <Paragraph>Эмзэглэлтэй эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q9}>
                        <DocumentCheckbox value={'q9-1'} title={'Эмзэглэлгүй '} />
                        <DocumentCheckbox value={'q9-2'} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                     <TextWithUnderline>({formData?.['q9-2-1']})</TextWithUnderline>
                     <Paragraph>Уян чанар:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q10}>
                        <DocumentCheckbox value={'q10-1'} title={'Хэвийн '} />
                        <DocumentCheckbox value={'q10-2'} title={'Буурсан'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <Paragraph>Дууны доргион:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q11}>
                        <DocumentCheckbox value={'q11-1'} title={'Хэвийн Суларсан '} />
                        <DocumentCheckbox value={'q11-2'} title={'Тодорхойлогдохгүй'} />
                        <DocumentCheckbox value={'q11-3'} title={'Хүчтэй болсон'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"25%"}>
                     <Paragraph>Тогшилтын дуу:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q12}>
                        <DocumentCheckbox value={'q12-1'} title={'2 талд ижил '} />
                        <DocumentCheckbox value={'q12-2'} title={'Ижил бус'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'25%'}>
                     <Paragraph>Хэсэгт тогшилтын дуу:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q13}>
                        <DocumentCheckbox value={'q13-1'} title={'Бүдгэрсэн '} />
                        <DocumentCheckbox value={'q13-2'} title={'Тодорсон'} />
                        <DocumentCheckbox value={'q13-3'} title={'Дүлий болсон;'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph>Чагналт</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={'50%'}>
                     <Paragraph>Амьсгал 2 талд:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q14}>
                        <DocumentCheckbox value={'q14-1'} title={'Ижил '} />
                        <DocumentCheckbox value={'q14-2'} title={'Ижил бус'} />
                     </DocumentCheckboxGroup>
                     <TextWithUnderline>({formData?.['q14-2-1']})</TextWithUnderline>
                     <Paragraph>Эмгэг амьсгалтай:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q15}>
                        <DocumentCheckbox value={'q15-1'} title={'Тийм '} />
                        <DocumentCheckbox value={'q15-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Тийм бол:</Paragraph>
                     <TextUnderlineGroup value={formData?.['q15-1-1']}>
                        <TextUnderline value={'q15-1-1-1'} title={'(цулцангийн суларсан'} />
                        <TextUnderline value={'q15-1-1-2'} title={'цулцангийн ширүүссэн'} />
                        <TextUnderline value={'q15-1-1-2'} title={'гуурсан хоолойн эмгэг'} />
                        <TextUnderline value={'q15-1-1-2'} title={'стенозын, амьсгал сонсогдохгүй)'} />
                     </TextUnderlineGroup>
                  </Box>
                  <Box left top right width={'50%'}>
                     <Paragraph>Нэмэлт шуугиантай эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q16}>
                        <DocumentCheckbox value={'q16-1'} title={'Тийм '} />
                        <DocumentCheckbox value={'q16-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Тийм бол:</Paragraph>
                     <TextUnderlineGroup value={formData?.['q16-1-1']}>
                        <TextUnderline value={'q16-1-1-1'} title={'нойтон хэржигнүүр'} />
                        <TextUnderline value={'q16-1-1-2'} title={'шажигнуур'} />
                        <TextUnderline value={'q16-1-1-2'} title={'хуурай хэржигнүүр'} />
                        <TextUnderline value={'q16-1-1-2'} title={'гялтангийн шүргэлцэх чимээ'} />
                     </TextUnderlineGroup>
                     <TextWithUnderline>{formData?.['q16-1-2']}</TextWithUnderline>
                     <Paragraph>Бронхофони:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q17}>
                        <DocumentCheckbox value={'q17-1'} title={'хэвийн '} />
                        <DocumentCheckbox value={'q17-2'} title={'Тодорсон'} />
                        <DocumentCheckbox value={'q17-3'} title={'Суларсан'} />
                     </DocumentCheckboxGroup>
                     <TextWithUnderline>({formData?.['q17-3-1']}хэсэгт)</TextWithUnderline>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph>Зүрх судасны тогтолцоо</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={'50%'}>
                     <Paragraph>Зүрх судасны эрсдэлт хүчин зүйлс: </Paragraph>
                  </Box>
                  <Box left top right width={'50%'}>
                     <Paragraph>Ажиглалт</Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={'25%'}>
                     <Paragraph>Зүрх судасны эрсдэлт хүчин зүйлс: </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q18}>
                        <DocumentCheckbox value={'q18-1'} title={'Зохисгүй хооллолт '} />
                        <DocumentCheckbox value={'q18-2'} title={'Хөдөлгөөний хомсдол'} />
                        <DocumentCheckbox value={'q18-3'} title={'Стресс'} />
                        <DocumentCheckbox value={'q18-4'} title={'Таргалалт'} />
                        <DocumentCheckbox value={'q18-5'} title={'Тамхидалт'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <DocumentCheckboxGroup value={formData?.q18}>
                        <DocumentCheckbox value={'q18-6'} title={'Архины зохисгүй хэрэглээ '} />
                        <DocumentCheckbox value={'q18-7'} title={'Удамшил'} />
                        <DocumentCheckbox value={'q18-8'} title={'Артерийн гипертензи'} />
                        <DocumentCheckbox value={'q18-9'} title={'Гиперхолестеринеми'} />
                        <DocumentCheckbox value={'q18-10'} title={'Чихрийн шижин'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'25%'}>
                     <Paragraph>Арьсны хөхрөлттэй эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q19}>
                        <DocumentCheckbox value={'q19-1'} title={'Тийм '} />
                        <DocumentCheckbox value={'q19-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Гүрээний венийн лугшилт:
                     </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q20}>
                        <DocumentCheckbox value={'q21-1'} title={'Ажиглагдахгүй '} />
                        <DocumentCheckbox value={'q21-2'} title={'Ажиглагдана'} />
                     </DocumentCheckboxGroup>
                     <TextUnderlineGroup value={formData?.['q21-2-1']} style={{ display: 'flex' }}>
                        <TextUnderline value={'q21-2-1-1'} title={'(хүчтэй'} />
                        <TextUnderline value={'q21-2-1-2'} title={'дунд'} />
                        <TextUnderline value={'q21-2-1-3'} title={'сул)'} />
                     </TextUnderlineGroup>
                  </Box>
                  <Box top right width={'25%'}>
                     <Paragraph>Захын хавантай эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q20}>
                        <DocumentCheckbox value={'q20-1'} title={'Тийм '} />
                        <DocumentCheckbox value={'q20-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Зүрхний оройн түлхэлт:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q22}>
                        <DocumentCheckbox value={'q22-1'} title={'Ажиглагдахгүй '} />
                        <DocumentCheckbox value={'q22-2'} title={'Ажиглагдана'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={"65%"}>
                     <Paragraph>Тэмтрэлтээр:</Paragraph>
                  </Box>
                  <Box left top right width={"35%"}>
                     <Paragraph>Тогшилтоор:</Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top bottom right width={"35%"}>
                     <Paragraph>Зүрхний оройн түлхэлт Байрлал:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q23}>
                        <DocumentCheckbox value={'q23-1'} title={'Хэвийн '} />
                        <DocumentCheckbox value={'q23-2'} title={'Хэвийн бус'} />
                     </DocumentCheckboxGroup>
                     <Paragraph >
                        Хүч:
                        <DocumentCheckboxGroup value={formData?.q24} >
                           <DocumentCheckbox value={'q24-1'} title={' Дунд зэрэг '} />
                           <DocumentCheckbox value={'q24-2'} title={'Хүчтэй'} />
                           <DocumentCheckbox value={'q24-2'} title={'Сул'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                     <Paragraph>Шууны артерийн лугшилт </Paragraph>
                     <Paragraph>Хэмнэл:
                        <DocumentCheckboxGroup value={formData?.q25}>
                           <DocumentCheckbox value={'q25-1'} title={' Дунд зэрэг '} />
                           <DocumentCheckbox value={'q25-2'} title={'Их'} />
                           <DocumentCheckbox value={'q25-2'} title={'Бага'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                  </Box>
                  <Box top right bottom width={"30%"}>
                     <Paragraph>Давтамж:
                        <TextWithUnderline>({formData?.q26}хэсэгт)</TextWithUnderline>
                        /м</Paragraph>
                     <Paragraph>Хүчдэл:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q27}>
                        <DocumentCheckbox value={'q27-1'} title={' Жигд '} />
                        <DocumentCheckbox value={'q27-2'} title={'Жигд бус'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Дүүрэлт:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q28}>
                        <DocumentCheckbox value={'q28-1'} title={' Дунд зэрэг '} />
                        <DocumentCheckbox value={'q28-2'} title={'Сул'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>2 талд ижил эсэх: </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q29}>
                        <DocumentCheckbox value={'q29-1'} title={' Ижил '} />
                        <DocumentCheckbox value={'q29-2'} title={'Ижил бус'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box top right bottom width={"35%"} >
                     <Paragraph>
                        Зүрхний ( харьцангуй) хил хязгаар:
                     </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q30}>
                        <DocumentCheckbox value={'q30-1'} title={' Хэвийн '} />
                        <DocumentCheckbox value={'q30-2'} title={'Томорсон'} />
                     </DocumentCheckboxGroup>
                     <TextUnderlineGroup value={formData?.['q30-2-1']} style={{ display: 'flex' }}>
                        <TextUnderline value={'q30-2-1-1'} title={'(дээд'} />
                        <TextUnderline value={'q30-2-1-2'} title={'баруун'} />
                        <TextUnderline value={'q30-2-1-3'} title={'зүүн хил )'} />
                     </TextUnderlineGroup>
                  </Box>
               </FlexRow>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Box left top right>
                  <Paragraph>Чагналтаар</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={"50%"}>
                     <Paragraph>Зүрхний авиа:</Paragraph>
                     <Paragraph>Хэмнэл:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q31} >
                        <DocumentCheckbox value={'q31-1'} title={'Жигд'} />
                        <DocumentCheckbox value={'q31-2'} title={'Жигд бус'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Давтамж:
                        <TextWithUnderline>{formData?.q32}</TextWithUnderline>
                        /мин</Paragraph>
                     <Paragraph>I авиа:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q33} >
                        <DocumentCheckbox value={'q33-1'} title={'Тод'} />
                        <DocumentCheckbox value={'q33-2'} title={'Бүдгэвтэр  (I, IV цэгт);'} />
                        <DocumentCheckbox value={'q33-3'} title={'Бүдэг ( I, IV )'} />
                        <DocumentCheckbox value={'q33-4'} title={'Чангарсан (I, IV цэгт)'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>II авиа:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q34}  >
                        <DocumentCheckbox value={'q34-1'} title={'Тод'} />
                        <DocumentCheckbox value={'q34-2'} title={'Бүдэг  (II, III, V цэгт)'} />
                        <DocumentCheckbox value={'q34-3'} title={'Чангарсан  (II, III цэгт)'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>III авиа:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q31} >
                        <DocumentCheckbox value={''} title={'Сонсогдоно'} />
                        <DocumentCheckbox value={''} title={'Сонсогдохгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={"50%"}>
                     <DocumentCheckboxGroup value={formData?.q31} >
                        <DocumentCheckbox value={''} title={'Шуугиангүй'} />
                        <DocumentCheckbox value={''} title={'Шуугиантай'} />
                     </DocumentCheckboxGroup>
                     <Paragraph style={{ display: "flex" }}>
                        <Paragraph>Байрлал:</Paragraph>
                        <TextUnderlineGroup style={{ display: "flex" }} value={formData?.q31}>
                           <TextUnderline value={''} title={'(I;'} />
                           <TextUnderline value={''} title={'II; '} />
                           <TextUnderline value={''} title={'III;'} />
                           <TextUnderline value={''} title={'IV;'} />
                           <TextUnderline value={''} title={'V)'} />
                        </TextUnderlineGroup>
                     </Paragraph>
                     <Paragraph style={{ display: "flex" }} value={formData?.q31}>
                        <Paragraph>Систолын:</Paragraph>
                        <TextUnderlineGroup style={{ display: "flex" }}>
                           <TextUnderline value={''} title={'(I;'} />
                           <TextUnderline value={''} title={'II; '} />
                           <TextUnderline value={''} title={'III;'} />
                           <TextUnderline value={''} title={'IV;'} />
                           <TextUnderline value={''} title={'V)'} />
                        </TextUnderlineGroup>
                     </Paragraph>
                     <Paragraph style={{ display: "flex" }}>
                        <Paragraph>Диастолын:</Paragraph>
                        <TextUnderlineGroup style={{ display: "flex" }} value={formData?.q31}>
                           <TextUnderline value={''} title={'(I;'} />
                           <TextUnderline value={''} title={'II; '} />
                           <TextUnderline value={''} title={'III;'} />
                           <TextUnderline value={''} title={'IV;'} />
                           <TextUnderline value={''} title={'V)'} />
                        </TextUnderlineGroup>
                     </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q31} >
                        <DocumentCheckbox value={''} title={'Үл дамжина'} />
                        <DocumentCheckbox value={''} title={'Дамжина'} />
                     </DocumentCheckboxGroup>
                     <TextWithUnderline>{formData?.q} </TextWithUnderline>
                     <Paragraph style={{ display: "flex" }}>
                        <Paragraph>Хүч:</Paragraph>
                        <TextUnderlineGroup style={{ display: "flex" }} value={formData?.q31}>
                           <TextUnderline value={''} title={'(Сул;'} />
                           <TextUnderline value={''} title={'Дунд зэрэг; '} />
                           <TextUnderline value={''} title={'Хүчтэй)'} />
                        </TextUnderlineGroup>
                     </Paragraph>
                     <Paragraph>Перикардын шүргэлцэх чимээ бий эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q31} >
                        <DocumentCheckbox value={''} title={'Тийм'} />
                        <DocumentCheckbox value={''} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph>Хоол боловсруулалх эрхтэн тогтолцоо</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={"25%"}>
                     <Paragraph>Харж ажиглах:</Paragraph>
                  </Box>
                  <Box left top width={"25%"}>
                     <Paragraph>Өнгөц тэмтрэлтээр:</Paragraph>
                  </Box>
                  <Box left top width={"25%"}>
                     <Paragraph>Тогшилтоор</Paragraph>
                  </Box>
                  <Box left top right width={"25%"}>
                     <Paragraph>Чагналтаар</Paragraph>
                  </Box>
               </FlexRow>
               <FlexRow>
                  <Box left top width={"25%"}>
                     <Paragraph>Хэл өнгөртэй эсэх: </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q38} >
                        <DocumentCheckbox value={'q38-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q38-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Арьс, салст–чийглэг </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q39} >
                        <DocumentCheckbox value={'q39-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q39-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <TextWithUnderline>Өнгө{formData?.q40} </TextWithUnderline>
                     <Paragraph>Хэвлийн – хэм </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q41} >
                        <DocumentCheckbox value={'q41-1'} title={'Жигд'} />
                        <DocumentCheckbox value={'q41-2'} title={'Жигд бус'} />
                     </DocumentCheckboxGroup>
                     <TextWithUnderline>Хэлбэр{formData?.q42} </TextWithUnderline>
                  </Box>
                  <Box left top width={"25%"}>
                     <Paragraph>Хэвлий эмзэглэлтэй эсэх: </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q43}>
                        <DocumentCheckbox value={'q43-1'} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q43-2'} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Булчингийн чангарал байгаа эсэх: </Paragraph>
                     <DocumentCheckboxGroup value={formData?.q44} >
                        <DocumentCheckbox value={'q44-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q44-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"25%"}>
                     <Paragraph>Хэвлийн хэнгэрэгэн чимээ:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q45} >
                        <DocumentCheckbox value={'q45-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q45-1'} title={'Ихэссэн'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Ихэссэн хэсэгт тогшилтын дуу:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q46} >
                        <DocumentCheckbox value={'q46-1'} title={'Бүдгэрсэн'} />
                        <DocumentCheckbox value={'q46-2'} title={'Тодорсон'} />
                        <DocumentCheckbox value={'q46-3'} title={'Дүлий болсон'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={"25%"}>
                     <Paragraph>Гэдэсний гүрвэлзэх хөдөлгөөн:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q47} >
                        <DocumentCheckbox value={'q47-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q47-2'} title={'Ихэссэн'} />
                        <DocumentCheckbox value={'q47-3'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q47-4'} title={'Дүлий'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph>Гүнзгий тэмтрэлтээр:</Paragraph>
               </Box>
               <FlexRow>

                  <Box left top width={"25%"} >
                     <Paragraph>Тахир гэдэс – байрлал</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q48} >
                        <DocumentCheckbox value={'q48-1'} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q48-2'} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Тогтоц</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q49} >
                        <DocumentCheckbox value={'q49-1'} title={'Хатуу'} />
                        <DocumentCheckbox value={'q49-2'} title={'Зөөлөн'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Хөдөлгөөн</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q50} >
                        <DocumentCheckbox value={'q50-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q50-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"25%"} >
                     <Paragraph>Өгсөх болон уруудах гэдэс: - Байрлал</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q51} >
                        <DocumentCheckbox value={'q51-1'} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q51-2'} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Тогтоц</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q52}>
                        <DocumentCheckbox value={'q52-1'} title={'Хатуу'} />
                        <DocumentCheckbox value={'q52-2'} title={'Зөөлөн'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Хөдөлгөөн</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q53} >
                        <DocumentCheckbox value={'q53-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q53-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"25%"} >
                     <Paragraph>Хөндлөн гэдэс: Байрлал</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q54}>
                        <DocumentCheckbox value={'q54-1'} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q54-2'} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Тогтоц</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q55}>
                        <DocumentCheckbox value={'q55-1'} title={'Хатуу'} />
                        <DocumentCheckbox value={'q55-2'} title={'Зөөлөн'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Хөдөлгөөн</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q56}>
                        <DocumentCheckbox value={'q56-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q56-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"25%"} right>
                     <Paragraph>Цутгалан гэдэс:Байрлал</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q57} >
                        <DocumentCheckbox value={'q57-1'} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q57-2'} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Тогтоц</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q58} >
                        <DocumentCheckbox value={'q58-1'} title={'Хатуу'} />
                        <DocumentCheckbox value={'q58-2'} title={'Зөөлөн'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Хөдөлгөөн</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q59} >
                        <DocumentCheckbox value={'q59-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q59-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph>Элэг цөс, дэлүү:</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={"25%"} >
                     <Paragraph>Элэгний шинж тэмдгүүд:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q60} >
                        <DocumentCheckbox value={'q60-1'} title={'Мэдрэл сульдал'} />
                        <DocumentCheckbox value={'q60-2'} title={'Биж хам шинж'} />
                        <DocumentCheckbox value={'q60-3'} title={'Иммуни-үрэвслийн шинж'} />
                        <DocumentCheckbox value={'q60-4'} title={'Өвдөх хам шинж:'} />
                     </DocumentCheckboxGroup>
                     <Paragraph style={{ display: "flex" }}>
                        <TextWithUnderline>Хүч{formData?.q61}</TextWithUnderline>
                        <TextWithUnderline>Хугацаа[{formData?.q62}]</TextWithUnderline>
                     </Paragraph>
                  </Box>
                  <Box left top width={"25%"} >
                     <DocumentCheckboxGroup value={formData?.q60}>
                        <DocumentCheckbox value={'q60-5'} title={'Шарлах хам шинж'} />
                        <DocumentCheckbox value={'q60-6'} title={'Загатналт'} />
                        <DocumentCheckbox value={'q60-7'} title={'Цусархаг хам шинж'} />
                        <DocumentCheckbox value={'q60-8'} title={'Элэгний их шинж:'} />
                        <DocumentCheckbox value={'q60-9'} title={'Элэгний бага шинж:'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"25%"} >
                     <Paragraph>Элэгний хэмжээ тэмтрэлтээр:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q63} >
                        <DocumentCheckbox value={'q63-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q63-2'} title={'Томорсон'} />
                     </DocumentCheckboxGroup>
                     <TextUnderlineGroup style={{ display: "flex" }} value={formData?.['q63-2-1']}>
                        <TextUnderline value={'q63-2-1-1'} title={'(Баруун;'} />
                        <TextUnderline value={'q63-2-1-2'} title={'зүүн; '} />
                     </TextUnderlineGroup>

                  </Box>
                  <Box left top width={"25%"} right>
                     <Paragraph>Дэлүүний хэмжээ тэмтрэлтээр:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q64} >
                        <DocumentCheckbox value={'q64-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q64-2'} title={'Томорсон'} />
                     </DocumentCheckboxGroup>
                     <TextUnderlineGroup value={formData?.['q64-2-1']} style={{ display: "flex" }}>
                        <TextUnderline value={'q64-2-1-1'} title={'(I,'} />
                        <TextUnderline value={'q64-2-1-2'} title={'II, '} />
                        <TextUnderline value={'q64-2-1-3'} title={'III,)'} />
                        <TextUnderline value={'q64-2-1-4'} title={'IV,'} />
                     </TextUnderlineGroup>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph>Шээс бэлгийн тогтолцоо</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={"20%"} >
                     <Paragraph>Хоногийн шээсний гарц:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q65} >
                        <DocumentCheckbox value={'q65-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q65-2'} title={'Ихэссэн'} />
                        <DocumentCheckbox value={'q65-3'} title={'Багассан'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"20%"} >
                     <Paragraph>Шээсний өнгө:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q66} >
                        <DocumentCheckbox value={'q65-1'} title={'Сүрлэн шар'} />
                        <DocumentCheckbox value={'q65-2'} title={'Улаан шар'} />
                        <DocumentCheckbox value={'q65-3'} title={'Өнгөгүй'} />
                        <DocumentCheckbox value={'q65-4'} title={'Тундастай'} />
                        <DocumentCheckbox value={'q65-5'} title={'Тундасгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"20%"} >
                     <Paragraph>Шөнө шээдэг эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q67} >
                        <DocumentCheckbox value={'q67-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q67-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Шээс тасалддаг эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q68} >
                        <DocumentCheckbox value={'q68-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q68-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Дутуу шээдэг эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q69}>
                        <DocumentCheckbox value={'q69-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q69-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>

                  </Box>
                  <Box left top width={"20%"} >
                     <Paragraph>Дүлж шээдэг эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q70} >
                        <DocumentCheckbox value={'q70-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q70-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Шээхэд давсгаар өвддөг эсэх:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q71}>
                        <DocumentCheckbox value={'q71-1'} title={'Тийм'} />
                        <DocumentCheckbox value={'q71-2'} title={'Үгүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={"20%"} right>
                     <Paragraph>Бөөр тэмтрэлтээр:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q72} >
                        <DocumentCheckbox value={'q72-2'} title={'Эмзэглэлгүй'} />
                        <DocumentCheckbox value={'q72-1'} title={'Эмзэглэлтэй'} />
                     </DocumentCheckboxGroup>
                     <TextUnderlineGroup style={{ display: "flex" }} value={formData?.['q72-1']}>
                        <TextUnderline value={'q72-1-1-1'} title={'(Баруун,'} />
                        <TextUnderline value={'q72-1-1-2'} title={'зүүн)'} />
                     </TextUnderlineGroup>
                     <Paragraph>Пастернацкий:</Paragraph>
                     <Paragraph style={{ display: 'flex' }}>
                        <DocumentCheckboxGroup value={formData?.q73} >
                           <DocumentCheckbox value={'q73-1'} title={'Баруун'} />
                           <DocumentCheckbox value={'q73-2'} title={'Зүүн'} />
                        </DocumentCheckboxGroup>
                     </Paragraph>
                  </Box>
               </FlexRow>
               <Box left top right>
                  <Paragraph>Мэдрэлийн тогтолцоо</Paragraph>
               </Box>
               <FlexRow>
                  <Box left top width={'35%'}>
                     <Paragraph>Үнэрлэх мэдрэмж:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q74} >
                        <DocumentCheckbox value={'q74-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q74-2'} title={'Ихэссэн'} />
                        <DocumentCheckbox value={'q74-3'} title={'Ялгахгүй'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Сонсголын мэдрэмж:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q75} >
                        <DocumentCheckbox value={'q75-1'} title={'Хэвийн'} />
                        <DocumentCheckbox value={'q75-2'} title={'Ихэссэн'} />
                        <DocumentCheckbox value={'q75-3'} title={'Буурсан'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top width={'20%'}>
                     <Paragraph>Нүүрний 2 тал:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q76} >
                        <DocumentCheckbox value={'q76-1'} title={'Ижил'} />
                        <DocumentCheckbox value={'q76-2'} title={'Ижил бус'} />
                     </DocumentCheckboxGroup>
                     <Paragraph>Рефлексүүд:</Paragraph>
                     <DocumentCheckboxGroup value={formData?.q77} >
                        <DocumentCheckbox value={'q77-1'} title={'Хадгалагдана'} />
                        <DocumentCheckbox value={'q77-2'} title={'Хадгалагдаагүй'} />
                     </DocumentCheckboxGroup>
                  </Box>
                  <Box left top right width={'45%'}>
                     <Paragraph>Мэдрэхүй:</Paragraph>
                     <Paragraph style={{ display: 'flex', gap: '10px' }}>
                        <Paragraph>Өнгөц:
                           <DocumentCheckboxGroup value={formData?.q78} >
                              <DocumentCheckbox value={'q78-1'} title={'Хэвийн'} />
                              <DocumentCheckbox value={'q78-2'} title={'Ихэссэн'} />
                              <DocumentCheckbox value={'q78-3'} title={'Буурсан'} />
                           </DocumentCheckboxGroup>
                        </Paragraph>
                        <Paragraph>Гүн:
                           <DocumentCheckboxGroup value={formData?.q79} >
                              <DocumentCheckbox value={'q79-1'} title={'Хэвийн'} />
                              <DocumentCheckbox value={'q79-2'} title={'Ихэссэн'} />
                              <DocumentCheckbox value={'q79-3'} title={'Буурсан'} />
                           </DocumentCheckboxGroup>
                        </Paragraph>
                        <Paragraph>Хэт мэдрэгшил:
                           <DocumentCheckboxGroup value={formData?.q80} >
                              <DocumentCheckbox value={'q80-1'} title={'Хэвийн'} />
                              <DocumentCheckbox value={'q80-2'} title={'Ихэссэн'} />
                              <DocumentCheckbox value={'q80-3'} title={'Буурсан'} />
                           </DocumentCheckboxGroup>
                        </Paragraph>
                     </Paragraph>
                  </Box>
               </FlexRow>
               <Box left top right style={{ display: 'flex', alignItems: 'end' }}>
                  <Paragraph>Сэтгэцийн байдал:</Paragraph>
                  <TextWithUnderline>{formData?.q81}</TextWithUnderline>
               </Box>
               <Box left top bottom right style={{ display: 'flex', alignItems: 'end' }}>
                  <Paragraph>Бусад: (Арьс, үе мөч, тунгалагийн тогтолцоо):</Paragraph>
                  <TextWithUnderline>{formData?.q82}</TextWithUnderline>
               </Box>
            </div>
         </div>
      </div >
   );
};
export default CT1Dotor;
