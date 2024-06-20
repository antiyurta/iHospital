import React from 'react';
import { CheckboxComp, ColComp, Header, RowComp, TextWithUnderline } from './utils';

const EegiiE = (props) => {
   const {
      data: { formData }
   } = props;

   console.log({ formData });
   return (
      <div>
         <div className="page p-9 flex flex-col items-center justify-center">
            <h1 className="font-bold text-center text-[17px]">ЧИХ ХАМАР ХООЛОЙН ЭМЧИЙН ҮЗЛЭГ</h1>
            <main className="w-full tracking-normal">
               <RowComp heights="5 mt-3">
                  <ColComp span={8} borderClass="border-r-0" text="Биеийн ерөнхий байдал" />
                  <ColComp span={8} borderClass="border-r-0" text="Ухаан санаа" />
                  <ColComp span={8} text="Арьс салст" />
               </RowComp>

               <RowComp heights="12">
                  <ColComp span={8} borderClass="border-r-0 border-t-0">
                     <CheckboxComp groupValue={formData?.q1} options={q1Option} />
                  </ColComp>
                  <ColComp span={8} borderClass="border-r-0 border-t-0">
                     <CheckboxComp groupValue={formData?.q2} options={q2Options} />
                  </ColComp>
                  <ColComp span={8} borderClass="border-t-0">
                     <CheckboxComp groupValue={formData?.q3} options={q3Options} />
                  </ColComp>
               </RowComp>

               <Header title="Амьсгалын эрхтэн тогтолцоо" />
               <RowComp heights="16">
                  <ColComp span={10} borderClass="border-r-0 border-t-0" notCenter>
                     Амьсгал 1 минутанд <TextWithUnderline>{formData.q4 || ''}</TextWithUnderline> удаа
                  </ColComp>
                  <ColComp span={14} borderClass="border-t-0">
                     <CheckboxComp
                        groupValue={formData?.q5}
                        groupExtraValue={formData?.['q5-4-1']}
                        options={q5Options}
                        extraOptions={q5ExtraOptions}
                     />
                  </ColComp>
               </RowComp>

               <Header title="Цусны эргэлтийн тогтолцоо" />
               <RowComp heights="24">
                  <ColComp span={6} borderClass="border-r-0 border-t-0" notCenter>
                     Судасны цохилт 1 минутанд <TextWithUnderline>{formData.q6 || ''}</TextWithUnderline> удаа
                     <br />
                     Хүчдэл дүүрэлт <TextWithUnderline>{formData.q7 || ''}</TextWithUnderline>
                  </ColComp>
                  <ColComp span={6} borderClass="border-t-0">
                     <CheckboxComp
                        groupValue={formData?.q8}
                        groupExtraValue={formData?.['q8-2-1']}
                        options={q8Options}
                        extraOptions={q8ExtraOptions}
                     />
                  </ColComp>
                  <ColComp span={12} borderClass="border-t-0 border-l-0">
                     <CheckboxComp groupValue={formData?.q9} options={q9Options} />
                  </ColComp>
               </RowComp>

               <Header title="Хоол шингээх эрхтэн тогтолцоо" />
               <RowComp heights="24">
                  <ColComp span={6} borderClass="border-r-0 border-t-0">
                     <CheckboxComp groupValue={formData?.q12} options={q12Options} />
                  </ColComp>
                  <ColComp span={18} borderClass="border-t-0">
                     <CheckboxComp groupValue={formData?.q13} options={q13Options} />
                  </ColComp>
               </RowComp>

               <Header title="Мэдрэлийн тогтолцоо" />
               <RowComp heights="12">
                  <ColComp span={12} borderClass="border-r-0 border-t-0" text="center" />
                  <ColComp span={12} borderClass="border-t-0" text="center" />
               </RowComp>

               <RowComp heights="12">
                  <ColComp span={24} borderClass="border-t-0" text="center" />
               </RowComp>

               <div className="h-6 text-[17px] text-black/80 font-semibold border border-t-0 border-black flex items-center justify-center p-2">
                  ЧИХ ХАМАР ХООЛОЙН ҮЗЛЭГ
               </div>

               <RowComp heights="14">
                  <ColComp span={12} borderClass="border-r-0 border-t-0" text="center" />
                  <ColComp span={6} borderClass="border-t-0" text="center" />
                  <ColComp span={6} borderClass="border-t-0 border-l-0" text="center" />
               </RowComp>

               <RowComp heights="16">
                  <ColComp span={12} borderClass="border-r-0 border-t-0" text="center" />
                  <ColComp span={6} borderClass="border-t-0" text="center" />
                  <ColComp span={6} borderClass="border-t-0 border-l-0" text="center" />
               </RowComp>

               <RowComp heights="20">
                  <ColComp span={5} borderClass="border-r-0 border-t-0" text="center" />
                  <ColComp span={5} borderClass="border-t-0" text="center" />
                  <ColComp span={6} borderClass="border-t-0 border-l-0" text="center" />
                  <ColComp span={8} borderClass="border-t-0 border-l-0" text="center" />
               </RowComp>

               <RowComp heights="24">
                  <ColComp span={12} borderClass="border-r-0 border-t-0" text="center" />
                  <ColComp span={6} borderClass="border-t-0" text="center" />
                  <ColComp span={6} borderClass="border-t-0 border-l-0" text="center" />
               </RowComp>

               <RowComp heights="20">
                  <ColComp span={24} borderClass="border-t-0" text="center" />
               </RowComp>

               <RowComp heights="10">
                  <ColComp span={24} borderClass="border-t-0" text="Бүсийн лимфийн булчирхайн байдал:" />
               </RowComp>

               <Header title="Баруун, зүүн чих:" />
               <RowComp heights="20">
                  <ColComp span={9} borderClass="border-r-0 border-t-0" text="center" />
                  <ColComp span={5} borderClass="border-t-0" text="center" />
                  <ColComp span={5} borderClass="border-t-0 border-l-0" text="center" />
                  <ColComp span={5} borderClass="border-t-0 border-l-0" text="center" />
               </RowComp>
            </main>
         </div>
         page2
      </div>
   );
};

export default EegiiE;

const q1Option = [
   {
      label: 'Дунд',
      value: 'q1-1'
   },
   {
      label: 'Хүндэвтэр',
      value: 'q1-2'
   },
   {
      label: 'Хүнд',
      value: 'q1-3'
   },
   {
      label: 'Маш хүнд',
      value: 'q1-4'
   }
];

const q2Options = [
   {
      label: 'Саруул',
      value: 'q2-1'
   },
   {
      label: 'Бүдгэрсэн',
      value: 'q2-2'
   },
   {
      label: 'Ухаангүй',
      value: 'q2-3'
   }
];

const q3Options = [
   {
      label: 'Хэвийн',
      value: 'q3-1'
   },
   {
      label: 'Хэвийн бус',
      value: 'q3-2'
   }
];

const q5Options = [
   {
      label: 'Хэржигнүүртэй',
      value: 'q5-1'
   },
   {
      label: 'Уушги цулцангийн',
      value: 'q5-2'
   },
   {
      label: 'Гуурсан хоолойн',
      value: 'q5-3'
   },
   {
      label: 'Амьсгал сулавтар',
      value: 'q5-4'
   }
];

const q5ExtraOptions = [
   {
      label: 'Баруун',
      value: 'q5-4-1-1'
   },
   {
      label: 'зүүн',
      value: 'q5-4-1-2'
   },
   {
      label: '2 талдаа',
      value: 'q5-4-1-3'
   }
];
const q8Options = [
   {
      label: 'Хэвийн',
      value: 'q8-1'
   },
   {
      label: 'Томорсон',
      value: 'q8-2'
   }
];
const q8ExtraOptions = [
   {
      label: 'Баруун',
      value: 'q8-2-1-1'
   },
   {
      label: 'Зүүн',
      value: 'q8-2-1-2'
   }
];

const q9Options = [
   {
      label: 'Тод',
      value: 'q9-1'
   },
   {
      label: 'Бүдэг',
      value: 'q9-2'
   },
   {
      label: 'Бүдгэвтэр',
      value: 'q9-3'
   },
   {
      label: 'Хэм жигд',
      value: 'q9-4'
   },
   {
      label: 'Жигд бус',
      value: 'q9-5'
   },
   {
      label: 'Хэм алдалттай',
      value: 'q9-6'
   }
];
const q12Options = [
   {
      label: 'Ердийн',
      value: 'q12-1'
   },
   {
      label: 'Хуурай',
      value: 'q12-2'
   },
   {
      label: 'Өнгөргүй',
      value: 'q12-3'
   },
   {
      label: 'Өнгөртэй',
      value: 'q12-4'
   }
];
const q13Options = [
   {
      label: 'Өнгөц тэмтрэлтээр',
      value: 'q13-1'
   },
   {
      label: 'Гүн тэмтрэлтээр',
      value: 'q13-2'
   },
   {
      label: 'Ердийн',
      value: 'q13-3'
   },
   {
      label: 'Зөөлөн гялтан цочрол үгүй',
      value: 'q13-4'
   },
   {
      label: 'Гялтан цочролын шинж  илэрсэн',
      value: 'q13-4'
   }
];

