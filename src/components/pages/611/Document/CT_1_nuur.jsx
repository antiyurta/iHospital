import React from 'react';

import logo from '../../../../assets/logo/logo.png';
import { Checkbox, Radio } from 'antd';
import dayjs from 'dayjs';

const CT1Nuur = (props) => {
   const {
      data: { formData }
   } = props;
   console.log(props);
   return (
      <div className="w-full">
         <div>
            <p className="text-end">Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны</p>
            <p className="text-end">өдрийн А/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
            <p className="font-bold text-end">Эрүүл мэндийн бүртгэлийн маягт СТ-1</p>
         </div>
         <p className="font-bold text-center">ӨВЧНИЙ ТҮҮХ №</p>
         <div className="grid grid-cols-2">
            <div>
               <img src={logo} />
            </div>
            <div className="flex flex-col">
               <div className="flex flex-row">
                  <div className="border-1 w-12">РД</div>
                  <div className="border-1 w-full">{formData?.q1}</div>
               </div>
               <div className="flex flex-row">
                  <div className="border-1 w-12">НДД</div>
                  <div className="border-1 w-full">{formData?.q2}</div>
               </div>
               <div className="border-1">
                  Өвчний түүх нээсэн {dayjs(formData?.q3).format('YYYYон MMсар DDөдөр HHцаг mmмин')}
               </div>
               <div className="border-1">
                  <span>Тасгийн нэр:</span>
                  <span>{formData?.q4}</span>
               </div>
            </div>
            <div className="border-1">
               <span>Эцэг /эх/-ийн нэр: </span>
               <span>{formData?.q5}</span>
            </div>
            <div className="border-1">
               <span>Өөрийн нэр: </span>
               <span>{formData?.q6}</span>
            </div>
         </div>
         <div className="flex flex-row">
            <div className="border-1 w-full">
               <p>{`Төрсөн    он    сар   өдөр`}</p>
               <p>{dayjs(formData?.q7).format('YYYY/MM/DD')}</p>
               <p>
                  <span>Нас:{formData?.q8}</span>
               </p>
            </div>
            <div className="border-1">
               <p className="ml-2">Хүйс:</p>
               <div className="document">
                  <Radio.Group value={formData?.q9} disabled className="dstory flex flex-col">
                     <Radio className="ml-1" value={'MAN'}>
                        <span className="text-black">Эрэгтэй</span>
                     </Radio>
                     <Radio className="ml-1" value={'WOMAN'}>
                        <span className="text-black">Эмэгтэй</span>
                     </Radio>
                  </Radio.Group>
               </div>
            </div>
            <div className="border-1 min-w-max">
               <p className="font-bold ml-2">Гэрлэлтийн байдал:</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q10} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'0'}>
                        <span className="text-black">Огт гэрлээгүй</span>
                     </Checkbox>
                     <Checkbox value={'1'}>
                        <span className="text-black">Батлуулсан гэр бүлтэй</span>
                     </Checkbox>
                     <Checkbox value={'2'}>
                        <span className="text-black">Батлуулаагүй гэр бүлтэй</span>
                     </Checkbox>
                     <Checkbox value={'3'}>
                        <span className="text-black">Тусгаарласан</span>
                     </Checkbox>
                     <Checkbox value={'4'}>
                        <span className="text-black">Цуцалсан</span>
                     </Checkbox>
                     <Checkbox value={'5'}>
                        <span className="text-black">Бэлбэсэн</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
            <div className="border-1 min-w-max">
               <p className="font-bold ml-2">Боловсролын байдал:</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q11} disabled className="dstory flex flex-col">
                     <div className="flex flex-row">
                        <Checkbox className="ml-2" value={'0'}>
                           <span className="text-black">Боловсролгүй</span>
                        </Checkbox>
                        <Checkbox value={'1'}>
                           <span className="text-black">Бага</span>
                        </Checkbox>
                     </div>
                     <Checkbox className="ml-2" value={'2'}>
                        <span className="text-black">Бүрэн дунд</span>
                     </Checkbox>
                     <Checkbox value={'3'}>
                        <span className="text-black">Мэргэжлийн болон техникийн</span>
                     </Checkbox>
                     <Checkbox value={'4'}>
                        <span className="text-black">Дипломын</span>
                     </Checkbox>
                     <Checkbox value={'5'}>
                        <span className="text-black">Бакалавр</span>
                     </Checkbox>
                     <Checkbox value={'6'}>
                        <span className="text-black">Магистр</span>
                     </Checkbox>
                     <Checkbox value={'7'}>
                        <span className="text-black">Доктор</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
         </div>
         <div className="flex flex-row">
            <div className="border-1 w-full">
               <p>Тогтмол хаяг:</p>
               <p>
                  <span>
                     Аймаг/хот:<span className="underline">{formData?.q12}</span>
                  </span>
               </p>
               <p className="flex flex-row justify-between">
                  <span>
                     Сум/дүүрэг:<span className="underline">{formData?.q13}</span>
                  </span>
                  <span>
                     Баг/хороо:<span className="underline">{formData?.q14}</span>
                  </span>
               </p>
               <p className="flex flex-row justify-between">
                  <span>
                     Гудамж/Байшин: <span className="underline">{formData?.q15}</span>
                  </span>
                  <span>
                     тоот: <span className="underline">{formData?.q16}</span>
                  </span>
               </p>
            </div>
            <div className="border-1 px-2 min-w-max">
               <p>Ажлын газар, албан тушаал:</p>
               <p>{formData?.q17}</p>
               <p>Мэргэжил:</p>
               <p>{formData?.q18}</p>
            </div>
            <div className="border-1 w-[120px] px-2">
               <p>Цусны бүлэг:</p>
               <p className="underline">{formData?.q19}</p>
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
                  Өөрийн утас: <span className="underline">{formData?.q20}</span>
               </p>
               <p>
                  Ар гэрийн утас:<span className="underline">{formData?.q21}</span>
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
         <div className="w-ful flex flex-row">
            <div className="border-1 w-full">
               <p className="font-bold">
                  Үндсэн онош: <span>{formData?.q26}</span>
               </p>
            </div>
            <div className="border-1 min-w-max px-4">
               <p>ӨОУА-код</p>
               <p
                  style={{
                     fontSize: 12
                  }}
               >
                  {dayjs(formData?.q26CreatedAt).format('YYYYон MMсар DDөдөр')}
               </p>
            </div>
         </div>
         <div className="w-ful flex flex-row">
            <div className="border-1 w-full">
               <p className="font-bold">
                  Дагалдах онош: <span>{formData?.q27}</span>
               </p>
               <p>|</p>
            </div>
            <div className="border-1 w-[116px]"></div>
         </div>
         <div className="w-ful flex flex-row">
            <div className="border-1 w-full">
               <p className="font-bold">
                  Хүндрэл: <span>{formData?.q28}</span>
               </p>
               <p>|</p>
            </div>
            <div className="border-1 w-[116px]"></div>
         </div>
         <div className="w-ful flex flex-row">
            <div className="border-1 w-full">
               <p className="font-bold">
                  Үйлдлийн онош (Мэс засал, мэс ажилбар) : <span>{formData?.q29}</span>
               </p>
               <p>|</p>
            </div>
            <div className="border-1 min-w-max px-4">
               <p>ӨОУА-код</p>
            </div>
         </div>
         <div className="w-ful flex flex-row">
            <div className="border-1 w-full">
               <p className="font-bold">
                  Уламжлалтын онош: <span>{formData?.q30}</span>
               </p>
               <p>|</p>
            </div>
            <div className="border-1 w-[116px]"></div>
         </div>
         <div className="flex flex-row">
            <div className="border-1 min-w-max">
               <p className="mx-2">Өвчний төгсгөл:</p>
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
            <div className="border-1 min-w-max">
               <p className="mx-2">Эмнэлгээс:</p>
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
            <div className="border-1 w-full">
               <p className="mx-2 text-center">он сар өдөр</p>
               <p>{dayjs(formData?.q33).format('YYYY / MM / DD')}</p>
            </div>
            <div className="border-1 w-full">
               <p className="mx-2 text-center">Ор хоног</p>
               <p>[{formData?.q34}] хоног</p>
               <p>[{formData?.q35}] цаг</p>
            </div>
            <div className="border-1 min-w-[100px]">
               <p>Эмчилгээний </p>
               <p>зардал:</p>
               <p>{formData?.q36} ₮</p>
            </div>
         </div>
         <div className="w-full flex flex-row">
            <div className="border-1 min-w-max">
               <p className="mx-2">Эмчлэгч эмчийн нэр, гарын үсэг</p>
            </div>
            <div className="border-1 w-full">
               <p className="mx-2">
                  Хянасан эмчийн нэр, гарын үсэг (
                  <span className={formData?.q37?.includes('q37-1') ? 'underline' : ''}>Эмчилгээ эрхэлсэн орлогч,</span>
                  <span className={formData?.q37?.includes('q37-2') ? 'underline' : ''}>тасгийн эрхлэгч,</span>
                  <span className={formData?.q37?.includes('q37-3') ? 'underline' : ''}>
                     эмчилгээний чанарын менежер,
                  </span>
                  <span className={formData?.q37?.includes('q37-4') ? 'underline' : ''}>бусад</span>)<span>/зур/</span>
               </p>
            </div>
         </div>
         <div className="w-full px-4">
            <p>{dayjs(formData?.q38).format('YYYY он / MM сар/ DD өдөр HH цаг mm минут')}</p>
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
   );
};
export default CT1Nuur;
