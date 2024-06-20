import React, { useEffect, useState } from 'react';
import '../document.css';
import { DocumentCheckbox, DocumentCheckboxGroup, Paragraph, Box, FlexRow, TextUnderline, TextUnderlineGroup, } from '../Components';
const CT1Anamnes = (props) => {
   const [formData, setFormData] = useState({});
   useEffect(() => {
      if (props?.data?.formData) {
         setFormData(props?.data?.formData);
      }
   }, [props]);
   return (
      <div className="page">
         <div className="subpage w-full">
            <Box top right left >
               <Paragraph style={{ textAlign: "center" }}>ЭМЧЛҮҮЛЭГЧИЙН АНАМНЕЗ</Paragraph>
            </Box>
            <Box top right left >Хэвтэх үеийн зовиур:{formData?.q1}</Box>
            <Box top right left >Өвчний түүх:{formData?.q2}</Box>
            <Box top right left >Амьдралын түүх:{formData?.q3}</Box>
            <FlexRow>
               <Box top left width={'50%'}>
                  <Paragraph>Ахуйн нөхцөл:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q4}>
                     <DocumentCheckbox value={['q4-1']} title={'Орон сууцанд'} />
                     <DocumentCheckbox value={['q4-2']} title={'Гэрт'} />
                     <DocumentCheckbox value={['q4-3']} title={'Бусад'} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box top left right width={'50%'} >
                  <Paragraph>Ажил хөдөлмөрийн нөхцөл:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q5}>
                     <DocumentCheckbox value={['q5-1']} title={'Ердийн'} />
                     <DocumentCheckbox value={['q5-2']} title={'Хүнд'} />
                     <DocumentCheckbox value={['q5-3']} title={'Хортой'} />
                     <DocumentCheckbox value={['q5-4']} title={'Бусад'} />
                  </DocumentCheckboxGroup>
               </Box>
            </FlexRow>
            <Box left top right>Урьд өвчилсөн өвчин, эмгэгийн байдал:</Box>
            <FlexRow>
               <Box top left right width={'60%'} >
                  <Paragraph>Халдварт:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q6}>
                     <DocumentCheckbox value={['q6-1']} title={'Улаан бурхан'} />
                     <DocumentCheckbox value={['q6-2']} title={'Салхин цэцэг'} />
                     <DocumentCheckbox value={['q6-3']} title={'Вирүст хепатит А'} />
                     <DocumentCheckbox value={['q6-4']} title={'Вирүст хепатит В'} />
                     <DocumentCheckbox value={['q6-5']} title={'Вирүст хепатит С'} />
                     <DocumentCheckbox value={['q6-6']} title={'Гахайн хавдар  Сүрьеэ  '} />
                     <DocumentCheckbox value={['q6-7']} title={'Гахайн хавдар '} />
                     <DocumentCheckbox value={['q6-8']} title={'Бусад___________ '} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'20%'} top>Мэс ажилбар хийсэн эсэх:{formData?.q7}</Box>
               <Box width={'20%'} top left right>Осол гэмтэл, хордлого, шалтгаан:{formData?.q8}</Box>
            </FlexRow>
            <FlexRow>
               <Box width={'50%'} left top right>
                  <Paragraph>Харшлын анамнез:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q9}>
                     <DocumentCheckbox value={['q9-1']} title={'Эмийн бодис '} />
                     <DocumentCheckbox value={['q9-2']} title={'Хоол хүнс '} />
                     <DocumentCheckbox value={['q9-3']} title={'Бусад '} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'50%'} top right>
                  <Paragraph> Удамшлын анамнез:{formData?.q10}</Paragraph>
                  <Paragraph> Удамшлын өвчнүүд:{formData?.q11}</Paragraph>
               </Box>
            </FlexRow>
            <FlexRow>
               <Box width={'50%'} left top right>
                  <Paragraph>Хооллолтын байдал::</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q12}>
                     <DocumentCheckbox value={['q12-1']} title={'Ердийн '} />
                     <DocumentCheckbox value={['q12-2']} title={'Цагаан '} />
                     <DocumentCheckbox value={['q12-3']} title={'Бусад '} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'50%'} top right>
                  <Paragraph>Архи хэрэглэдэг эсэх::</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q13}>
                     <DocumentCheckbox value={['q13-1']} title={'Тийм '} />
                     <DocumentCheckbox value={['q13-2']} title={'Үгүй '} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'50%'} top right>
                  <Paragraph>Тамхи татдаг эсэх:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q14}>
                     <DocumentCheckbox value={['q14-1']} title={'Тийм'} />
                     <DocumentCheckbox value={['q14-2']} title={'Үгүй'} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'50%'} top right>
                  <Paragraph>  Хэдэн наснаас эхэлж татсан::{formData?.['q14-1-1']}</Paragraph>
                  <Paragraph> Хэдэн жил татаж байгаа:{formData?.['q14-1-2']}</Paragraph>
               </Box>
            </FlexRow>
            <Box top left right>
               <Paragraph style={{ textAlign: 'center' }}> ЕРӨНХИЙ ҮЗЛЭГ</Paragraph>
            </Box>
            <FlexRow>
               <Box width={'25%'} left top right>
                  <Paragraph>Биеийн ерөнхий байдал:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q15}>
                     <DocumentCheckbox value={['q15-1']} title={'Хөнгөн '} />
                     <DocumentCheckbox value={['q15-2']} title={'Дунд '} />
                     <DocumentCheckbox value={['q15-3']} title={'Хүндэвтэр '} />
                     <DocumentCheckbox value={['q15-4']} title={'Хүнд '} />
                     <DocumentCheckbox value={['q15-5']} title={'Маш хүнд '} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'25%'} top right>
                  <Paragraph>Ухаан санаа:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q16}>
                     <DocumentCheckbox value={['q16-1']} title={'Саруул '} />
                     <DocumentCheckbox value={['q16-2']} title={'Бүдгэрсэн '} />
                     <DocumentCheckbox value={['q16-3']} title={'Ступор '} />
                     <DocumentCheckbox value={['q16-4']} title={'Солор '} />
                     <DocumentCheckbox value={['q16-5']} title={'Кома '} />
                     <DocumentCheckbox value={['q16-6']} title={'Бусад: '} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'25%'} top right>
                  <Paragraph>Орчиндоо:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q17}>
                     <DocumentCheckbox value={['q17-1']} title={'Харьцаатай'} />
                     <DocumentCheckbox value={['q17-2']} title={'Харьцаагүй'} />
                     <DocumentCheckbox value={['q17-3']} title={'Сул'} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'25%'} top right>
                  <Paragraph>Байрлал:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q18}>
                     <DocumentCheckbox value={['q18-1']} title={'Идэвхтэй'} />
                     <DocumentCheckbox value={['q18-2']} title={'Идэвхгүй'} />
                     <DocumentCheckbox value={['q18-3']} title={'Албадмал'} />
                     <DocumentCheckbox value={['q18-4']} title={'Хагас суугаа'} />
                     <DocumentCheckbox value={['q18-5']} title={'Хэвтрийн'} />
                  </DocumentCheckboxGroup>
               </Box>
            </FlexRow>
            <Box left top right>
               Арьс салстын байдал:
            </Box>
            <FlexRow >
               <Box width={'35%'} left top right>
                  <Paragraph>а. Арьс салсын өнгө:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q19}>
                     <DocumentCheckbox value={['q19-1']} title={'Хэвийн '} />
                     <DocumentCheckbox value={['q19-2']} title={'Хэвийн бус '} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'35%'} top right>
                  <Paragraph>б. Арьсны уян чанар:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q20}>
                     <DocumentCheckbox value={['q20-1']} title={'Хэвийн '} />
                     <DocumentCheckbox value={['q20-2']} title={'Ихэссэн '} />
                     <DocumentCheckbox value={['q20-3']} title={'Алдагдсан '} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'30%'} top right>
                  <Paragraph>в. Арьсны чийглэг байдал:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q21}>
                     <DocumentCheckbox value={'q21-1'} title={'Хэвийн ихэссэн'} />
                     <DocumentCheckbox value={'q21-2'} title={'Багассан'} />
                  </DocumentCheckboxGroup>
               </Box>
            </FlexRow>
            <FlexRow >
               <Box width={'35%'} left top right>
                  <Paragraph>г.Арьсан дээрх тууралт</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q22}>
                     <DocumentCheckbox value={['q22-1']} title={'Тууралтгүй '} />
                     <DocumentCheckbox value={['q22-2']} title={'Тууралттай '} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'35%'} top right>
                  <Paragraph>Хаван:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q23}>
                     <DocumentCheckbox value={['q23-1']} title={'Хэвийн '} />
                     <DocumentCheckbox value={['q23-2']} title={'Хавантай '} />
                     <DocumentCheckbox value={['q23-3']} title={'Алдагдсан '} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'30%'} top right>
                  <Paragraph>a.Ерөнхий</Paragraph>
                  <Paragraph>б. Хэсгийн::</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q24}>
                     <DocumentCheckbox value={['q24-1']} title={'Нүүрэнд'} />
                     <DocumentCheckbox value={['q24-2']} title={'Зовхинд'} />
                     <DocumentCheckbox value={['q24-3']} title={'Хэвлийд'} />
                     <DocumentCheckbox value={['q24-4']} title={'Шилбээр'} />
                  </DocumentCheckboxGroup>
               </Box>
            </FlexRow>
            <FlexRow >
               <Box width={'35%'} left top right>
                  <Paragraph>Захын тунгалагийн булчирхай:</Paragraph>
                  <Paragraph>а. Хэмжээ</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q25}>
                     <DocumentCheckbox value={['q25-1']} title={'Хэвийн '} />
                     <DocumentCheckbox value={['q25-2']} title={'Харахад томорсон '} />
                     <DocumentCheckbox value={['q25-3']} title={' Тэмтрэлтээр томорсон'} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'35%'} top right>
                  <Paragraph>б. Байрлал:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q26}>
                     <DocumentCheckbox value={['q26-1']} title={'Хэвийн '} />
                     <DocumentCheckbox value={['q26-2']} title={'Хавантай '} />
                     <DocumentCheckbox value={['q26-3']} title={'Алдагдсан '} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'30%'} top right>
                  <Paragraph>в. Эмзэглэл</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q27}>
                     <DocumentCheckbox value={['q27-1']} title={'Эмзэглэлтэй'} />
                     <DocumentCheckbox value={['q27-2']} title={'Эмзэглэлгүй'} />
                  </DocumentCheckboxGroup>
               </Box>
            </FlexRow>
            <FlexRow >
               <Box width={'50%'} left top right bottom>
                  <Paragraph>Үе мөчний хэлбэр:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q28}>
                     <DocumentCheckbox value={['q28-1']} title={'Хэвийн '} />
                     <DocumentCheckbox value={['q28-2']} title={'Өөрчлөгдсөн '} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'50%'} top right bottom>
                  <Paragraph>Үений хөдөлгөөн:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q29}>
                     <DocumentCheckbox value={['q29-1']} title={'Идэвхтэй'} />
                     <DocumentCheckbox value={['q29-2']} title={'Идэвхгүй'} />
                     <DocumentCheckbox value={['q29-3']} title={'Хязгаарлагдмал'} />
                  </DocumentCheckboxGroup>
               </Box>
            </FlexRow>
         </div>
      </div>
   );
};
export default CT1Anamnes;
