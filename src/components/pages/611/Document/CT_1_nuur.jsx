import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import logo from '../../../../assets/logo/logo.png';
import { Checkbox, Radio } from 'antd';
import { getAge, regToDate } from '../../../common';

//test
import '../document.css';
import { DocumentCheckbox, DocumentCheckboxGroup, Paragraph, Box, FlexRow, FlexCol, GridColTwo } from '../Components';
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
                     <Paragraph>{`Төрсөн    он    сар   өдөр`}</Paragraph>
                     <Paragraph>
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
               </Box>
               <Box minWidth={200} top left>
                  <Paragraph>{`Ажлын газар, албан тушаал: ${history?.patientData?.workplace} , ${history?.patientData?.positionName}`}</Paragraph>
                  <Paragraph>Мэргэжил:{history?.patientData?.occupationName}</Paragraph>
               </Box>
               <Box minWidth={100} top left right>
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
            <div className="flex flex-row">
               <div className="border-1 w-full">
                  <p>Тогтмол хаяг:</p>
                  <p>
                     <span>
                        Аймаг/хот:<span className="underline">{history?.patientData?.aimagName}</span>
                     </span>
                  </p>
                  <p className="flex flex-row justify-between">
                     <span>
                        Сум/дүүрэг:<span className="underline">{history?.patientData?.soumName}</span>
                     </span>
                     <span>
                        Баг/хороо:<span className="underline">{history?.patientData?.bagKhorooName}</span>
                     </span>
                  </p>
                  <p className="flex flex-row justify-between">
                     <span>
                        Гудамж/Байшин: <span className="underline">{history?.patientData?.addressStreetName}</span>
                     </span>
                     <span>
                        тоот: <span className="underline">{history?.patientData?.addressDetail}</span>
                     </span>
                  </p>
               </div>
               <div className="border-1 px-2 max-w-[210px]">
                  <p>{`Ажлын газар, албан тушаал: ${history?.patientData?.workplace} , ${history?.patientData?.positionName}`}</p>
                  <p>Мэргэжил:{history?.patientData?.occupationName}</p>
               </div>
               <div className="border-1 w-[120px] px-2">
                  <p>Цусны бүлэг:</p>
                  <p className="underline">{history?.patientData?.bloodType}</p>
                  <p
                     style={{
                        fontSize: 12
                     }}
                  >
                     Баталгаажуулсан хүний нэр гарын үсэг:
                  </p>
               </div>
            </div>
            <div className="flex flex-row">
               <div className="border-1 w-full">
                  <p>Яаралтай үед холбоо барих</p>
                  <p>
                     Өөрийн утас: <span className="underline">{history?.patientData?.phoneNo}</span>
                  </p>
                  <p>
                     Ар гэрийн утас:
                     <span className="underline">{history?.patientData?.contacts?.[0].contactPhoneNo}</span>
                  </p>
               </div>
               <div className="border-1 min-w-max">
                  <p className="ml-2">Төлбөрийн төрөл:</p>
                  <div className="document">
                     <Checkbox.Group value={formData?.q22} disabled className="dstory flex flex-col">
                        <Checkbox className="ml-2" value={'q22-1'}>
                           <span className="text-black">Төр хариуцсан</span>
                        </Checkbox>
                        <Checkbox value={'q22-2'}>
                           <span className="text-black">15%</span>
                        </Checkbox>
                        <Checkbox value={'q22-3'}>
                           <span className="text-black">10%</span>
                        </Checkbox>
                        <Checkbox value={'q22-4'}>
                           <span className="text-black">Өвчтөн хариуцсан</span>
                        </Checkbox>
                     </Checkbox.Group>
                  </div>
               </div>
               <div className="border-1 min-w-max">
                  <p className="mx-2">Доод шатлалаас</p>
                  <p className="mx-2">илгээсэн эсэх:</p>
                  <div className="document">
                     <Checkbox.Group value={formData?.q23} disabled className="dstory flex flex-col">
                        <Checkbox className="ml-2" value={'q23-1'}>
                           <span className="text-black">Тийм</span>
                        </Checkbox>
                        <Checkbox value={'q23-2'}>
                           <span className="text-black">Үгүй</span>
                        </Checkbox>
                     </Checkbox.Group>
                  </div>
               </div>
               <div className="border-1 min-w-max">
                  <p className="mx-2">Харшлын анамнез:</p>
                  <div className="document">
                     <Checkbox.Group value={formData?.q24} disabled className="dstory flex flex-col">
                        <Checkbox className="ml-2" value={'q24-1'}>
                           <span className="text-black">Эмийн бодис</span>
                        </Checkbox>
                        <Checkbox value={'q24-2'}>
                           <span className="text-black">Хоол хүнс</span>
                        </Checkbox>
                        <Checkbox value={'q24-3'}>
                           <span className="text-black">Бусад</span>
                        </Checkbox>
                     </Checkbox.Group>
                  </div>
               </div>
            </div>
            <div className="border-1 w-full">
               <p className="font-bold">
                  Хэвтэх үеийн онош: <span>{formData?.q25}</span>
               </p>
            </div>
            <div className="grid grid-cols-5">
               <div className="border-1 col-span-4">
                  <p className="font-bold">
                     Үндсэн онош: <span>{formData?.q26}</span>
                  </p>
               </div>
               <div className="border-1 text-center">
                  <p>ӨОУА-код</p>
                  <p
                     style={{
                        fontSize: 12
                     }}
                  >
                     {dayjs(formData?.q26CreatedAt).format('YYYYон MMсар DDөдөр')}
                  </p>
               </div>
               <div className="border-1 col-span-4">
                  <p className="font-bold">
                     Дагалдах онош: <span>{formData?.q27}</span>
                  </p>
               </div>
               <div className="border-1 text-center"></div>
               <div className="border-1 col-span-4">
                  <p className="font-bold">
                     Хүндрэл: <span>{formData?.q28}</span>
                  </p>
               </div>
               <div className="border-1 text-center"></div>
               <div className="border-1 col-span-4">
                  <p className="font-bold">
                     Үйлдлийн онош (Мэс засал, мэс ажилбар) : <span>{formData?.q29}</span>
                  </p>
               </div>
               <div className="border-1 text-center">
                  <p>ӨОУА-код</p>
               </div>
               <div className="border-1 col-span-4">
                  <p className="font-bold">
                     Уламжлалтын онош: <span>{formData?.q30}</span>
                  </p>
               </div>
               <div className="border-1 text-center"></div>
               <div className="border-1">
                  <p>Өвчний төгсгөл:</p>
                  <div className="document">
                     <Checkbox.Group value={formData?.q31} disabled className="dstory flex flex-col">
                        <Checkbox className="ml-2" value={'q31-1'}>
                           <span className="text-black">Эдгэрсэн</span>
                        </Checkbox>
                        <Checkbox value={'q31-2'}>
                           <span className="text-black">Сайжирсан</span>
                        </Checkbox>
                        <Checkbox value={'q31-3'}>
                           <span className="text-black">Хэвэндээ</span>
                        </Checkbox>
                        <Checkbox value={'q31-4'}>
                           <span className="text-black">Нас барсан</span>
                        </Checkbox>
                     </Checkbox.Group>
                  </div>
               </div>
               <div className="border-1">
                  <p>Эмнэлгээс:</p>
                  <div className="document">
                     <Checkbox.Group value={formData?.q32} disabled className="dstory flex flex-col">
                        <Checkbox className="ml-2" value={'q32-1'}>
                           <span className="text-black">Гарсан</span>
                        </Checkbox>
                        <Checkbox value={'q32-2'}>
                           <span className="text-black">Шилжсэн</span>
                        </Checkbox>
                        <Checkbox value={'q32-3'}>
                           <span className="text-black">Нас барсан</span>
                        </Checkbox>
                     </Checkbox.Group>
                  </div>
               </div>
               <div className="border-1 text-center">
                  <p>он сар өдөр</p>
                  <p>{dayjs(formData?.q33).format('YYYY / MM / DD')}</p>
               </div>
               <div className="border-1 text-center">
                  <p>Ор хоног</p>
                  <p>[{formData?.q34}] хоног</p>
                  <p>[{formData?.q35}] цаг</p>
               </div>
               <div className="border-1">
                  <p>Эмчилгээний </p>
                  <p>зардал:</p>
                  <p className="text-end">{formData?.q36} ₮</p>
               </div>
            </div>
            <div className="w-full flex flex-row">
               <div className="border-1 min-w-max">
                  <p className="mx-2">Эмчлэгч эмчийн нэр, гарын үсэг</p>
               </div>
               <div className="border-1 w-full">
                  <p className="mx-2">
                     Хянасан эмчийн нэр, гарын үсэг (
                     <span className={formData?.q37?.includes('q37-1') ? 'underline' : ''}>
                        Эмчилгээ эрхэлсэн орлогч,
                     </span>
                     <span className={formData?.q37?.includes('q37-2') ? 'underline' : ''}>тасгийн эрхлэгч,</span>
                     <span className={formData?.q37?.includes('q37-3') ? 'underline' : ''}>
                        эмчилгээний чанарын менежер,
                     </span>
                     <span className={formData?.q37?.includes('q37-4') ? 'underline' : ''}>бусад</span>)
                     <span>/зур/</span>
                  </p>
               </div>
            </div>
            <div className="w-full px-4">
               <p>{dayjs(formData?.q38).format('Үзлэг эхэлсэн YYYY он / MM сар/ DD өдөр HH цаг mm минут')}</p>
               <p>
                  ХЧТА-ын <span className="underline">{formData?.q39}</span> хоног
               </p>
            </div>
            <div className="w-full grid grid-cols-2">
               <div className="border-1 px-2">
                  <div className="flex justify-between">
                     <p>Өндөр (см)</p>
                     <p>[{formData?.q40}]</p>
                  </div>
                  <div className="flex justify-between">
                     <p>Жин (кг)</p>
                     <p>[{formData?.q41}]</p>
                  </div>
                  <div className="flex justify-between">
                     <p>Биеийн жингийн индекс (кг/м2)</p>
                     <p>[{formData?.q42}]</p>
                  </div>
               </div>
               <div className="border-1 px-2">
                  <p className="mx-2">Цусны даралт (ммуб)</p>
                  <div className="document">
                     <Checkbox className="ml-6" checked={formData?.q43 ? true : false}>
                        <span className="text-black">Систолын даралт</span>
                        <span className="text-black">[{formData?.q43}]</span>
                     </Checkbox>
                     <Checkbox className="ml-6" checked={formData?.q44 ? true : false}>
                        <span className="text-black">Диастолын даралт</span>
                        <span className="text-black">[{formData?.q44}]</span>
                     </Checkbox>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default CT1Nuur;
