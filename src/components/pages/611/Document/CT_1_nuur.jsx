import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import logo from '../../../../assets/logo/logo.png';
import { getAge, regToDate } from '../../../common';

//test
import '../document.css';
import { DocumentCheckbox, DocumentCheckboxGroup, Paragraph, Box, FlexRow, FlexCol, GridColTwo, TextUnderline, TextUnderlineGroup, } from '../Components';
const CT1Nuur = (props) => {
   const [formData, setFormData] = useState({});
   const [history, setHistory] = useState({});
   useEffect(() => {
      if (props?.data?.formData) {
         setFormData(props?.data?.formData);
      }
      if (props?.data?.history != null) {
         console.log('pr', props.data);
         setHistory(props?.data?.history);
      }
      console.log('props', props);
   }, [props]);
   return (
      <div className="page">
         <div className="subpage w-full">
            <Paragraph align="end">Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны</Paragraph>
            <Paragraph align="end">өдрийн А/611 дүгээр тушаалын арваннэгдүгээр хавсралт</Paragraph>
            <Paragraph isBold align="end">
               Эрүүл мэндийн бүртгэлийн маягт СТ-1
            </Paragraph>
            <Paragraph
               isBold
               align="center"
               style={{
                  fontSize: '12pt'
               }}
            >
               ӨВЧНИЙ ТҮҮХ № {history?.historyNumber}
            </Paragraph>
            <GridColTwo>
               <div>
                  <img src={logo} />
               </div>
               <FlexCol>
                  <FlexRow>
                     <Box width={60} top left right>
                        <Paragraph>РД</Paragraph>
                     </Box>
                     <Box width={'100%'} top right>
                        <Paragraph>{history?.patientData?.registerNumber}</Paragraph>
                     </Box>
                  </FlexRow>
                  <FlexRow>
                     <Box width={60} top left right>
                        <Paragraph>НДД</Paragraph>
                     </Box>
                     <Box width={'100%'} top right>
                        <Paragraph>{formData?.q2}</Paragraph>
                     </Box>
                  </FlexRow>
                  <Box top right left>
                     <FlexRow gap={1} justify="space-between">
                        <Paragraph>Өвчний түүх нээсэн</Paragraph>
                        <Paragraph>он</Paragraph>
                        <Paragraph>сар</Paragraph>
                        <Paragraph>өдөр</Paragraph>
                        <Paragraph>цаг</Paragraph>
                        <Paragraph>мин</Paragraph>
                     </FlexRow>
                     <Paragraph align="center">{dayjs(history?.createdAt).format('YYYY / MM / DD HH:mm')}</Paragraph>
                  </Box>
                  <Box top right left>
                     <Paragraph>{`Тасгийн нэр: ${history?.cabinetName}`}</Paragraph>
                  </Box>
               </FlexCol>
               <Box top left>
                  <Paragraph>Эцэг /эх/-ийн нэр:{history?.patientData?.lastName}</Paragraph>
               </Box>
               <Box top left right>
                  <Paragraph>Өөрийн нэр:{history?.patientData?.firstName}</Paragraph>
               </Box>
            </GridColTwo>
            <FlexRow>
               <Box width={'100%'} top left>
                  <FlexCol gap={8}>
                     <FlexRow gap={1} justify="space-between">
                        <Paragraph>Төрсөн</Paragraph>
                        <Paragraph>он</Paragraph>
                        <Paragraph>сар</Paragraph>
                        <Paragraph>өдөр</Paragraph>
                     </FlexRow>
                     <Paragraph align="center">
                        {dayjs(regToDate(history?.patientData?.registerNumber)).format('YYYY/MM/DD')}
                     </Paragraph>
                     <Paragraph>{`Нас: ${getAge(history?.patientData?.registerNumber)?.substring(0, 2)}`}</Paragraph>
                  </FlexCol>
               </Box>
               <Box top left>
                  <Paragraph>Хүйс:</Paragraph>
                  <DocumentCheckboxGroup value={[history?.patientData?.gender]}>
                     <DocumentCheckbox value={1} title={'Эрэгтэй'} />
                     <DocumentCheckbox value={2} title={'Эмэгтэй'} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box minWidth={170} top left>
                  <Paragraph isBold>Гэрлэлтийн байдал:</Paragraph>
                  {/* <DocumentCheckboxGroup value={[history?.patientData?.marriageStatus || 0]}></DocumentCheckboxGroup> */}
                  <DocumentCheckboxGroup value={[0]}>
                     <DocumentCheckbox value={1} title={'Огт гэрлээгүй'} />
                     <DocumentCheckbox value={2} title={'Батлуулсан гэр бүлтэй'} />
                     <DocumentCheckbox value={3} title={'Батлуулаагүй гэр бүлтэй'} />
                     <DocumentCheckbox value={4} title={'Тусгаарласан'} />
                     <DocumentCheckbox value={5} title={'Цуцалсан'} />
                     <DocumentCheckbox value={6} title={'Бэлбэсэн'} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box minWidth={240} top left right>
                  <Paragraph isBold>Боловсролын байдал:</Paragraph>
                  <DocumentCheckboxGroup value={[history?.patientData?.educationId]}>
                     <FlexRow gap={12}>
                        <DocumentCheckbox value={'1'} title={'Боловсролгүй'} />
                        <DocumentCheckbox value={'2'} title={'Бага'} />
                     </FlexRow>
                     <DocumentCheckbox value={'3'} title={'Суурь боловсрол'} />
                     <DocumentCheckbox value={'4'} title={'Бүрэн дунд'} />
                     <DocumentCheckbox value={'5'} title={'Мэргэжлийн болон техникийн'} />
                     <DocumentCheckbox value={'6'} title={'Дипломын'} />
                     <DocumentCheckbox value={'7'} title={'Бакалавр'} />
                     <DocumentCheckbox value={'8'} title={'Магистр'} />
                     <DocumentCheckbox value={'9'} title={'Доктор'} />
                  </DocumentCheckboxGroup>
               </Box>
            </FlexRow>
            <FlexRow>
               <Box width={'100%'} top left>
                  <Paragraph>Тогтмол хаяг:</Paragraph>
                  <Paragraph>Аймаг/хот: {history?.patientData?.aimagName}</Paragraph>
                  <GridColTwo>
                     <Paragraph>Сум/дүүрэг:</Paragraph>
                     <Paragraph>Баг/хороо:{history?.patientData?.bagKhorooName}</Paragraph>
                     <Paragraph>Гудамж/Байшин:{history?.patientData?.addressStreetName}</Paragraph>
                     <Paragraph>тоот:{history?.patientData?.addressDetail}</Paragraph>
                  </GridColTwo>
               </Box>
               <Box minWidth={200} top left>
                  <Paragraph>{`Ажлын газар, албан тушаал: ${history?.patientData?.workplace} , ${history?.patientData?.positionName}`}</Paragraph>
                  <Paragraph>Мэргэжил:{history?.patientData?.occupationName}</Paragraph>
               </Box>
               <Box minWidth={200} top left right>
                  <Paragraph>Цусны бүлэг:</Paragraph>
                  <Paragraph
                     style={{
                        textDecoration: 'underline'
                     }}
                  >
                     A
                  </Paragraph>
                  <Paragraph
                     style={{
                        fontSize: '8pt'
                     }}
                  >
                     Баталгаажуулсан хүний нэр гарын үсэг:
                     <Paragraph
                        style={{
                           textDecoration: 'underline'
                        }}
                     >
                        Amarbat sdaasd asdasd
                     </Paragraph>
                  </Paragraph>
               </Box>
            </FlexRow>
            <FlexRow>
               <Box top left width={'34%'}>
                  <Paragraph>Яаралтай үед холбоо барих</Paragraph>
                  <Paragraph>Өөрийн утас:{history?.patientData?.phoneNo}</Paragraph>
                  <Paragraph>Ар гэрийн утас:{history?.patientData?.contacts?.[0].contactPhoneNo}</Paragraph>
               </Box>
               <Box left top width={'22%'} >
                  <Paragraph>Төлбөрийн төрөл:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q22}>
                     <DocumentCheckbox value={'q22-1'} title={'Төр хариуцсан'} />
                     <DocumentCheckbox value={'q22-2'} title={'15%'} />
                     <DocumentCheckbox value={'q22-3'} title={'10%'} />
                     <DocumentCheckbox value={'q22-4'} title={'Өвчтөн хариуцсан'} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box left top width={'22%'}>
                  <Paragraph>Доод шатлалаас </Paragraph>
                  <Paragraph>илгээсэн эсэх:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q23}>
                     <DocumentCheckbox value={'q23-1'} title={'Тийм'} />
                     <DocumentCheckbox value={'q23-2'} title={'Үгүй'} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box left top right width={'22%'}>
                  <Paragraph>Харшлын анамнез:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q24}>
                     <DocumentCheckbox value={'q24-1'} title={'Эмийн бодис'} />
                     <DocumentCheckbox value={'q24-2'} title={'Хоол хүнс'} />
                     <DocumentCheckbox value={'q24-3'} title={'Бусад'} />
                  </DocumentCheckboxGroup>
               </Box>
            </FlexRow>
            <Box top left right>
               <Paragraph>Хэвтэх үеийн онош:{formData?.q25}</Paragraph>
            </Box>
            <FlexRow>
               <Box width={'70%'} top left right>
                  <Paragraph>Үндсэн онош:{formData?.q26}</Paragraph>
               </Box>
               <Box right top width={'30%'}  >
                  <Paragraph style={{ textAlign: "center" }}> ӨОУА-код</Paragraph>
                  <Paragraph style={{ textAlign: "center" }}>
                     {dayjs(formData?.q26CreatedAt).format('YYYYон MM сар DDөдөр')}
                  </Paragraph>
               </Box>
            </FlexRow>
            <FlexRow>
               <Box left top right width={'70%'}>
                  <Paragraph> Дагалдах онош:{formData?.q27}</Paragraph>
               </Box>
               <Box right top width={'30%'}>
                  <Paragraph> </Paragraph>
               </Box>
            </FlexRow>
            <FlexRow>
               <Box left top right width={'70%'}>
                  <Paragraph> Хүндрэл:{formData?.q28}</Paragraph>
               </Box>
               <Box right top width={'30%'}>
                  <Paragraph> </Paragraph>
               </Box>
            </FlexRow>
            <FlexRow>

               <Box left top right width={'70%'}>Үйлдлийн онош (Мэс засал, мэс ажилбар) :{formData?.q29}</Box>
               <Box top right width={'30%'}>ҮОУА-код</Box>
            </FlexRow>
            <FlexRow>
               <Box width={'70%'} top left right>
                  <Paragraph>Уламжлалтын онош: {formData?.q30} </Paragraph>
               </Box>
               <Box width={'30%'} top right>
               </Box>
            </FlexRow>
            <FlexRow>
               <Box width={'20%'} left top >
                  <Paragraph>Өвчний төгсгөл:</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q31}>
                     <DocumentCheckbox value={'q31-1'} title={'Эдгэрсэн'} />
                     <DocumentCheckbox value={'q31-2'} title={'Сайжирсан'} />
                     <DocumentCheckbox value={'q31-3'} title={'Хэвэндээ'} />
                     <DocumentCheckbox value={'q31-4'} title={'Нас барсан'} />
                  </DocumentCheckboxGroup>

               </Box>
               <Box width={'20%'} left top >
                  <Paragraph>Эмнэлгээс</Paragraph>
                  <DocumentCheckboxGroup value={formData?.q32}>
                     <DocumentCheckbox value={'q32-1'} title={'Гарсан'} />
                     <DocumentCheckbox value={'q32-2'} title={'Шилжсэн'} />
                     <DocumentCheckbox value={'q32-4'} title={'Нас барсан'} />
                  </DocumentCheckboxGroup>
               </Box>
               <Box width={'15%'} left top className="flex "><p>он сар өдөр</p> <p>{dayjs(formData?.q33).format('YYYY / MM / DD')}</p></Box>
               <Box width={'15%'} left top>
                  <p>Ор хоног</p>
                  <p>[{formData?.q34}] хоног</p>
                  <p>[{formData?.q35}] цаг</p>
               </Box>
               <Box width={'30%'} left top right>
                  <p>Эмчилгээний зардал:</p>
                  <p className="text-end">{formData?.q36} ₮</p>
               </Box>
            </FlexRow>
            <FlexRow>
               <Box left top bottom width={'30%'} >
                  <Paragraph>Эмчлэгч эмчийн нэр, гарын үсэг</Paragraph>
               </Box>
               <Box width={'70%'} left top right bottom>
                  <Paragraph>
                     Хянасан эмчийн нэр, гарын үсэг
                     <TextUnderlineGroup value={formData?.q37}  >
                        <TextUnderline value={'q37-1'} title={'Эмчилгээ эрхэлсэн орлогч,'} />
                        <TextUnderline value={'q37-2'} title={'тасгийн эрхлэгч,'} />
                        <TextUnderline value={'q37-3'} title={'эмчилгээний чанарын менежер,'} />
                        <TextUnderline value={'q37-4'} title={'бусад'} />
                     </TextUnderlineGroup>
                     /зур/
                  </Paragraph>
               </Box>
            </FlexRow>
            <Box >
               <Paragraph> {dayjs(formData?.q38).format('Үзлэг эхэлсэн YYYY он / MM сар/ DD өдөр HH цаг mm минут')}</Paragraph>
               <Paragraph> ХЧТА-ын <span className="underline">{formData?.q39}</span> хоног</Paragraph>
            </Box>
            <FlexRow>
               <Box width={'50%'} left top bottom >
                  <Paragraph>
                     Өндөр (см)
                     [{formData?.q40}]
                  </Paragraph>
                  <Paragraph>
                     Жин (кг)
                     [{formData?.q41}]
                  </Paragraph>
                  <Paragraph>
                     Биеийн жингийн индекс (кг/м2)
                     [{formData?.q42}]
                  </Paragraph>
               </Box>
               <Box left top right bottom width={'50%'}>
                  <Paragraph>
                     Цусны даралт (ммуб)
                     <div className="flex" >
                        <DocumentCheckbox value={formData?.q43} title={'Систолын даралт'} />[{formData?.q43}]
                     </div>
                     <div className="flex" >
                        <DocumentCheckbox value={formData?.q44} title={'Диастолын даралт'} />[{formData?.q44}]
                     </div>
                  </Paragraph>
               </Box>
            </FlexRow>
         </div>
      </div>
   );
};
export default CT1Nuur;
