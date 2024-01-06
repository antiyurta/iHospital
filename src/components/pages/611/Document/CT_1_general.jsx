import { Checkbox } from 'antd';
import React from 'react';

const CT1General = (props) => {
   const {
      data: { formData }
   } = props;
   console.log(props);
   return (
      <div className="w-full">
         <div className="border-1 text-center font-bold">ЕРӨНХИЙ ҮЗЛЭГ</div>
         <div className="grid grid-cols-4">
            <div className="border-1">
               <p className="font-bold">Биеийн ерөнхий байдал:</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q1} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q1-1'}>
                        <span className="text-black">Хөнгөн</span>
                     </Checkbox>
                     <Checkbox value={'q1-2'}>
                        <span className="text-black">Дунд</span>
                     </Checkbox>
                     <Checkbox value={'q1-3'}>
                        <span className="text-black">Хүндэвтэр</span>
                     </Checkbox>
                     <Checkbox value={'q1-4'}>
                        <span className="text-black">Хүнд</span>
                     </Checkbox>
                     <Checkbox value={'q1-5'}>
                        <span className="text-black">Маш хүнд</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
            <div className="border-1">
               <p className="font-bold">Ухаан санаа:</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q2} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q2-1'}>
                        <span className="text-black">Саруул</span>
                     </Checkbox>
                     <Checkbox value={'q2-2'}>
                        <span className="text-black">Бүдгэрсэн</span>
                     </Checkbox>
                     <Checkbox value={'q2-3'}>
                        <span className="text-black">Ступор</span>
                     </Checkbox>
                     <Checkbox value={'q2-4'}>
                        <span className="text-black">Солор</span>
                     </Checkbox>
                     <Checkbox value={'q2-5'}>
                        <span className="text-black">Кома</span>
                     </Checkbox>
                     <Checkbox.Group disabled value={formData?.q2Other} className="dstory">
                        <Checkbox className="ml-2" value={formData?.q2Other}>
                           <span className="text-black">
                              <span>{`Бусад: `}</span>
                              <span className="underline">{formData?.q2Other}</span>
                           </span>
                        </Checkbox>
                     </Checkbox.Group>
                  </Checkbox.Group>
               </div>
            </div>
            <div className="border-1">
               <p className="font-bold">Орчиндоо:</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q3} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q3-1'}>
                        <span className="text-black">Харьцаатай</span>
                     </Checkbox>
                     <Checkbox value={'q3-2'}>
                        <span className="text-black">Харьцаагүй</span>
                     </Checkbox>
                     <Checkbox value={'q3-3'}>
                        <span className="text-black">Сул</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
            <div className="border-1">
               <p className="font-bold">Байрлал:</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q4} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q4-1'}>
                        <span className="text-black">Идэвхтэй</span>
                     </Checkbox>
                     <Checkbox value={'q4-2'}>
                        <span className="text-black">Идэвхгүй</span>
                     </Checkbox>
                     <Checkbox value={'q4-3'}>
                        <span className="text-black">Албадмал</span>
                     </Checkbox>
                     <Checkbox value={'q4-4'}>
                        <span className="text-black">Хагас суугаа</span>
                     </Checkbox>
                     <Checkbox value={'q4-5'}>
                        <span className="text-black">Хэвтрийн</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
         </div>
         <div className="w-full border-1">
            <p className="font-bold px-2">Арьс салстын байдал:</p>
         </div>
         <div className="grid grid-cols-3">
            <div className="border-1 px-2">
               <p>а. Арьс салсын өнгө:</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q5} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q5-1'}>
                        <span className="text-black">Хэвийн</span>
                     </Checkbox>
                     <Checkbox value={'q5-2'}>
                        <span className="text-black">Хэвийн бус</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
            <div className="border-1 px-2">
               <p>б. Арьсны уян чанар:</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q6} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q6-1'}>
                        <span className="text-black">Хэвийн</span>
                     </Checkbox>
                     <Checkbox value={'q6-2'}>
                        <span className="text-black">Ихэссэн</span>
                     </Checkbox>
                     <Checkbox value={'q6-3'}>
                        <span className="text-black">Алдагдсан</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
            <div className="border-1 px-2">
               <p>в.Арьсны чийглэг байдал:</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q7} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q7-1'}>
                        <span className="text-black">Хэвийн ихэссэн</span>
                     </Checkbox>
                     <Checkbox value={'q7-2'}>
                        <span className="text-black">Багассан</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
            <div className="border-1 px-2">
               <p>г.Арьсан дээрх тууралт</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q8} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q8-1'}>
                        <span className="text-black">Тууралтгүй</span>
                     </Checkbox>
                     <Checkbox value={'q8-2'}>
                        <span className="text-black">Тууралттай</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
            <div className="border-1 px-2">
               <p>Хаван:</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q9} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q9-1'}>
                        <span className="text-black">Хавангүй</span>
                     </Checkbox>
                     <Checkbox value={'q9-2'}>
                        <span className="text-black">Хавантай</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
            <div className="border-1 px-2">
               <p>а. Ерөнхий</p>
               <p>б. Хэсгийн:</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q10} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q10-1'}>
                        <span className="text-black">Нүүрэнд</span>
                     </Checkbox>
                     <Checkbox value={'q10-2'}>
                        <span className="text-black">Зовхинд</span>
                     </Checkbox>
                     <Checkbox value={'q10-3'}>
                        <span className="text-black">Хэвлийд</span>
                     </Checkbox>
                     <Checkbox value={'q10-4'}>
                        <span className="text-black">Шилбээр</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
            <div className="border-1 px-2">
               <p>Захын тунгалагийн булчирхай:</p>
               <p>а. Хэмжээ</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q11} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q11-1'}>
                        <span className="text-black">Хэвийн</span>
                     </Checkbox>
                     <Checkbox value={'q11-2'}>
                        <span className="text-black">Харахад томорсон</span>
                     </Checkbox>
                     <Checkbox value={'q11-3'}>
                        <span className="text-black">Тэмтрэлтээр томорсон</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
            <div className="border-1 px-2">
               <p>б. Байрлал</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q12} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q12-1'}>
                        <span className="text-black">Хүзүүний</span>
                     </Checkbox>
                     <Checkbox value={'q12-2'}>
                        <span className="text-black">Суганы</span>
                     </Checkbox>
                     <Checkbox value={'q12-3'}>
                        <span className="text-black">Цавины</span>
                     </Checkbox>
                     <Checkbox.Group disabled value={formData?.q12Other} className="dstory">
                        <Checkbox className="ml-2" value={formData?.q12Other}>
                           <span className="text-black">
                              <span>{`Бусад: `}</span>
                              <span className="underline">{formData?.q12Other}</span>
                           </span>
                        </Checkbox>
                     </Checkbox.Group>
                  </Checkbox.Group>
               </div>
            </div>
            <div className="border-1 px-2">
               <p>в. Эмзэглэл</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q13} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q13-1'}>
                        <span className="text-black">Эмзэглэлтэй</span>
                     </Checkbox>
                     <Checkbox value={'q13-2'}>
                        <span className="text-black">Эмзэглэлгүй</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
         </div>
         <div className="grid grid-cols-2">
            <div className="border-1 px-2">
               <p>Үе мөчний хэлбэр:</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q14} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q14-1'}>
                        <span className="text-black">Хэвийн</span>
                     </Checkbox>
                     <Checkbox value={'q14-2'}>
                        <span className="text-black">Өөрчлөгдсөн</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
            <div className="border-1 px-2">
               <p>Үений хөдөлгөөн:</p>
               <div className="document">
                  <Checkbox.Group value={formData?.q15} disabled className="dstory flex flex-col">
                     <Checkbox className="ml-2" value={'q15-1'}>
                        <span className="text-black">Идэвхтэй</span>
                     </Checkbox>
                     <Checkbox value={'q15-2'}>
                        <span className="text-black">Идэвхгүй</span>
                     </Checkbox>
                     <Checkbox value={'q15-3'}>
                        <span className="text-black">Хязгаарлагдмал</span>
                     </Checkbox>
                  </Checkbox.Group>
               </div>
            </div>
         </div>
      </div>
   );
};
export default CT1General;
