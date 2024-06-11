import { Checkbox, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { Table } from 'react-bootstrap';
const CT1Dotor = (props) => {
   const {
      data: { formData }
   } = props;
   console.log('Form', formData);
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <Table bordered className="story mb-0">
                  <thead>
                     <tr>
                        <th colSpan={4} className="text-center font-bold ">
                           ДОТРЫН ЭМЧИЙН ҮЗЛЭГ
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Амьсгалын эрхтэн тогтолцоо</th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Харж ажиглах:</th>
                     </tr>
                     <tr>
                        <th id="child">
                           <p>Хамрын амьсгал</p>
                           <p>чөлөөтэй эсэх:</p>
                           <Checkbox.Group value={formData.q1} className="checkboxx ml-0">
                              <Checkbox className="checkboxx ml-2" value={'q1-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q1-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                           <p>Хөхрөлт байгаа эсэх:</p>
                           <Checkbox.Group value={formData.q2} className="ml-0">
                              <Checkbox className="ml-2" value={'q2-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q2-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                           <p>Тийм бол:</p>
                           <Checkbox.Group value={formData?.['q2-1-1']} className="ml-0">
                              <Checkbox className="ml-2" value={'q2-1-1-1'}>
                                 Төвийн
                              </Checkbox>
                              <Checkbox value={'q2-1-1-2'}>Захын</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Амьсгалд туслах булчингууд оролцож</p>
                           <p>байгаа эсэх:</p>
                           <Checkbox.Group value={formData.q3} className="ml-0">
                              <Checkbox className="ml-2" value={'q3-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q3-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                           <p>Амьсгалын тоо 1:</p>
                           <p>
                              минутанд
                              <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                              удаа:
                           </p>
                           <Checkbox.Group value={formData?.q5} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q5-1'}>
                                 Хэм жигд
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Жигд бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Цээжний хэлбэр:</p>
                           <Checkbox.Group value={formData?.q6} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q6-1'}>
                                 Зөв
                              </Checkbox>
                              <Checkbox value={'q6-2'}>Эмгэг</Checkbox>
                           </Checkbox.Group>
                           <p>Амьсгалын хэлбэр:</p>
                           <Checkbox.Group value={formData?.q7} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q7-1'}>
                                 Цээжний
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'q7-2'}>
                                 Хэвлийн
                              </Checkbox>
                              <Checkbox value={'q7-3'}>Холимог</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Цээжний 2 талд</p>
                           <p>амьсгал жигд оролцох</p>
                           <p>байдал:</p>
                           <Checkbox.Group value={formData?.q8} className="ml-0">
                              <Checkbox className="ml-2" value={'q8-1'}>
                                 Жигд(
                                 {formData?.['q8-1-1']?.includes('q8-1-1-1') ? (
                                    <span className="underline">баруун</span>
                                 ) : (
                                    'баруун'
                                 )}
                                 /
                                 {formData?.['q8-1-1']?.includes('q8-1-1-2') ? (
                                    <span className="underline">зүүн</span>
                                 ) : (
                                    'зүүн'
                                 )}
                                 )
                              </Checkbox>
                              <Checkbox value={'q8-2'}>Хоцорно</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2}>Тэмтрэлт:</th>
                        <th colSpan={2}>Тогшилт:</th>
                     </tr>
                     <tr>
                        <th id="child">
                           <p>Эмзэглэлтэй эсэх:</p>
                           <Checkbox.Group value={formData?.q9} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q9-1'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q9-2'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                           <p>
                              [
                              <Input value={formData?.q9Other} className="w-32" />]
                           </p>
                           <p>Уян чанар:</p>
                           <Checkbox.Group value={formData?.q10} className="ml-0">
                              <Checkbox className="ml-2" value={'q10-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q10-2'}>Буурсан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Дууны доргион:</p>
                           <Checkbox.Group value={formData?.q11} className="ml-0">
                              <Checkbox className="ml-2" value={'q11-1'}>
                                 Хэвийн Суларсан
                              </Checkbox>
                              <Checkbox value={'q11-2'}>Тодорхойлогдохгүй</Checkbox>
                              <Checkbox value={'q11-3'}>Хүчтэй болсон</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Тогшилтын дуу:</p>
                           <Checkbox.Group value={formData?.q12} className="ml-0">
                              <Checkbox className="ml-2" value={'q12-1'}>
                                 2 талд ижил
                              </Checkbox>
                              <Checkbox value={'q12-2'}>Ижил бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Хэсэгт тогшилтын дуу:</p>
                           <Checkbox.Group value={formData?.q13} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q13-1'}>
                                 Бүдгэрсэн
                              </Checkbox>
                              <Checkbox value={'q13-2'}>Тодорсон</Checkbox>
                              <Checkbox value={'q13-3'}>Дүлий болсон</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Чагналт</th>
                     </tr>
                     <tr>
                        <th colSpan={2} id="child">
                           <p>Амьсгал 2 талд:</p>
                           <Checkbox.Group value={formData?.q14} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q14-1'}>
                                 Ижил
                              </Checkbox>
                              <Checkbox value={'q14-2'}>Ижил буc</Checkbox>
                           </Checkbox.Group>
                           <span>
                              (
                              <Input className="amaraInput w-12" value={formData?.['q14-2-1']} />
                              хэсэгт )
                           </span>
                           <p>Эмгэг амьсгалтай:</p>
                           <Checkbox.Group value={formData?.q15} className="ml-0">
                              <Checkbox className="ml-2" value={'q15-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q15-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                           <p>
                              <span className="text-[11px]">
                                 Тийм бол:(
                                 <Checkbox.Group value={formData?.['q15-1-1']} className="inline">
                                    <Checkbox className="test" value={'q15-1-1-1'}>
                                       <span className="text-[11px]">{`цулцангийн суларсан ,`}</span>
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q15-1-1-2'}>
                                       <span className="text-[11px]">{`цулцангийн ширүүссэн , `}</span>
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q15-1-1-3'}>
                                       <span className="text-[11px]">{`гуурсан хоолойн эмгэг , `}</span>
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q15-1-1-4'}>
                                       <span className="text-[11px]">{`стенозын , `}</span>
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q15-1-1-5'}>
                                       <span className="text-[11px]">{`амьсгал сонсогдохгүй`}</span>
                                    </Checkbox>
                                 </Checkbox.Group>
                                 )
                              </span>
                           </p>
                        </th>
                        <th colSpan={2} id="child">
                           <p>Нэмэлт шуугиантай эсэх:</p>
                           <Checkbox.Group value={formData?.q16} className="ml-0">
                              <Checkbox className="ml-2" value={'q16-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q16-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                           <p>
                              <span className="text-[11px]">
                                 Тийм бол:(
                                 <Checkbox.Group value={formData?.['q16-1-1']} className="inline">
                                    <Checkbox className="test" value={'q16-1-1-1'}>
                                       <span className="text-[11px]">{`нойтон хэржигнүүр ,`}</span>
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q16-1-1-2'}>
                                       <span className="text-[11px]">{`шажигнуур ,`}</span>
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q16-1-1-3'}>
                                       <span className="text-[11px]">{`хуурай хэржигнүүр ,`}</span>
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q16-1-1-4'}>
                                       <span className="text-[11px]">{`гялтангийн шүргэлцэх`}</span>
                                    </Checkbox>
                                 </Checkbox.Group>{' '}
                                 чимээ
                                 <Input value={formData?.['q16-1-2']} className="amaraInput w-20" />
                                 хэсэгт )
                              </span>
                           </p>
                           <p>Бронхофони</p>
                           <Checkbox.Group value={formData?.q17} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q17-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="w-full" value={'q17-2'}>
                                 Тодорсон
                              </Checkbox>
                              <Checkbox className="w-auto" value={'q17-3'}>
                                 Суларсан
                              </Checkbox>
                              <p className="inline">
                                 (
                                 <Input value={formData?.['q17-3-1']} className="amaraInput w-28" />
                                 хэсэгт )
                              </p>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Зүрх судасны тогтолцоо</th>
                     </tr>
                     <tr>
                        <th colSpan={2}>Зүрх судасны эрсдэлт хүчин зүйлс:</th>
                        <th colSpan={2}>Ажиглалт</th>
                     </tr>
                     <tr>
                        <th>
                           <Checkbox.Group value={formData?.q18} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q18-1'}>
                                 Зохисгүй хооллолт
                              </Checkbox>
                              <Checkbox value={'q18-2'}>Хөдөлгөөний хомсдол</Checkbox>
                              <Checkbox className="w-full" value={'q18-3'}>
                                 Стресс
                              </Checkbox>
                              <Checkbox className="w-full" value={'q18-4'}>
                                 Таргалалт
                              </Checkbox>
                              <Checkbox value={'q18-5'}>Тамхидалт</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-20">
                           <Checkbox.Group value={formData?.q18} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q18-6'}>
                                 Архины зохисгүй хэрэглээ
                              </Checkbox>
                              <Checkbox value={'q18-7'}>Удамшил</Checkbox>
                              <Checkbox className="w-full" value={'q18-8'}>
                                 Артерийн гипертензи
                              </Checkbox>
                              <Checkbox className="w-full" value={'q18-9'}>
                                 Гиперхолестеринеми
                              </Checkbox>
                              <Checkbox value={'q18-10'}>Чихрийн шижин</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={2} id="child">
                           <div className="inline-flex">
                              <div>
                                 <p>Арьсны хөхрөлттэй эсэх:</p>
                                 <Checkbox.Group value={formData?.q19} className="ml-0">
                                    <Checkbox className="ml-2" value={'q19-1'}>
                                       Тийм
                                    </Checkbox>
                                    <Checkbox value={'q19-2'}>Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </div>
                              <div>
                                 <p>Захын хавантай эсэх:</p>
                                 <Checkbox.Group value={formData?.q20} className="ml-0">
                                    <Checkbox className="ml-2" value={'q20-1'}>
                                       Тийм
                                    </Checkbox>
                                    <Checkbox value={'q20-2'}>Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </div>
                           </div>
                           <div className="inline-flex">
                              <div>
                                 <p>Гүрээний венийн лугшилт:</p>
                                 <Checkbox.Group value={formData?.q21} className="ml-0">
                                    <Checkbox className="ml-2" value={'q21-1'}>
                                       Ажиглагдахгүй
                                    </Checkbox>
                                    <Checkbox value={'q21-2'}>Ажиглагдана</Checkbox>
                                 </Checkbox.Group>
                                 <p>
                                    <span>
                                       (
                                       <Checkbox.Group value={formData?.['q21-2-1']} className="inline">
                                          <Checkbox className="test" value={'q21-2-1-1'}>
                                             <span className="text-[11px]">{`хүчтэй ,`}</span>
                                          </Checkbox>
                                          <Checkbox className="ml-0 test" value={'q21-2-1-2'}>
                                             <span className="text-[11px]">{`дунд ,`}</span>
                                          </Checkbox>
                                          <Checkbox className="ml-0 test" value={'q21-2-1-3'}>
                                             <span className="text-[11px]">{`сул`}</span>
                                          </Checkbox>
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </div>
                              <div>
                                 <p>Зүрхний оройн түлхэлт:</p>
                                 <Checkbox.Group value={formData?.q22} className="ml-0">
                                    <Checkbox className="ml-2" value={'q22-1'}>
                                       Ажиглагдана
                                    </Checkbox>
                                    <Checkbox value={'q22-2'}>Ажиглагдахгүй</Checkbox>
                                 </Checkbox.Group>
                              </div>
                           </div>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={2}>Тэмтрэлтээр</th>
                        <th>Тогшилтоор</th>
                     </tr>
                     <tr>
                        <th className="w-72" id="child">
                           <p>Зүрхний оройн түлхэлт Байрлал:</p>
                           <Checkbox.Group value={formData?.q23} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q23-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q23-2'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                           <div className="inline-flex">
                              <p>Хүч:</p>
                              <Checkbox.Group value={formData?.q24} className="ml-0">
                                 <Checkbox className="ml-2" value={'q24-1'}>
                                    Дунд зэрэг
                                 </Checkbox>
                                 <Checkbox value={'q24-2'}>Хүчтэй</Checkbox>
                                 <Checkbox value={'q24-3'}>Сул</Checkbox>
                              </Checkbox.Group>
                           </div>
                           <p>Шууны артерийн лугшилт</p>
                           <div className="inline-flex">
                              <p>Хэмнэл:</p>
                              <Checkbox.Group value={formData?.q25} className="ml-0">
                                 <Checkbox className="ml-2" value={'q25-1'}>
                                    Жигд
                                 </Checkbox>
                                 <Checkbox value={'q25-2'}>Жигд бус</Checkbox>
                              </Checkbox.Group>
                           </div>
                        </th>
                        <th id="child">
                           <p>
                              Давтамж:
                              <Input value={formData?.q26} className="amaraInput w-28" />
                              /мин/
                           </p>
                           <p>Хүчдэл:</p>
                           <Checkbox.Group value={formData?.q27} className="ml-0">
                              <Checkbox className="ml-2" value={'q27-1'}>
                                 Дунд зэрэг
                              </Checkbox>
                              <Checkbox value={'q27-2'}>Их</Checkbox>
                              <Checkbox value={'q27-3'}>Бага</Checkbox>
                           </Checkbox.Group>
                           <div className="inline-flex">
                              <p>Дүүрэлт:</p>
                              <Checkbox.Group value={formData?.q28} className="ml-0">
                                 <Checkbox className="ml-2" value={'q28-1'}>
                                    Дунд зэрэг
                                 </Checkbox>
                                 <Checkbox value={'q28-2'}>Cул</Checkbox>
                              </Checkbox.Group>
                           </div>
                           <p>2 талд ижил эсэх:</p>
                           <Checkbox.Group value={formData?.q29} className="ml-0">
                              <Checkbox className="ml-2" value={'q29-1'}>
                                 Ижил
                              </Checkbox>
                              <Checkbox value={'q29-2'}>Ижил бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Зүрхний (харьцангүй) хил хязгаар:</p>
                           <Checkbox.Group value={formData?.q30} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q30-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q30-1'}>Томорсон</Checkbox>
                           </Checkbox.Group>
                           <p>
                              <span className="text-[11px]">
                                 (
                                 <Checkbox.Group value={formData?.['q30-2-1']} className="inline">
                                    <Checkbox className="test" value={'q30-2-1-1'}>
                                       <span className="text-[11px]">{`дээд ,`}</span>
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q30-2-1-2'}>
                                       <span className="text-[11px]">{`баруун ,`}</span>
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q30-2-1-3'}>
                                       <span className="text-[11px]">{`зүүн `}</span>
                                    </Checkbox>
                                 </Checkbox.Group>{' '}
                                 хил )
                              </span>
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={2}>Чагналтаар</th>
                     </tr>
                     <tr>
                        <th id="child">
                           <p>Зүрхний авиа:</p>
                           <div className="inline-flex">
                              <p>Хэмнэл:</p>
                              <Checkbox.Group value={formData?.q31} className="ml-0">
                                 <Checkbox className="ml-2" value={'q31-1'}>
                                    Жигд
                                 </Checkbox>
                                 <Checkbox value={'q31-2'}>Жигд бус</Checkbox>
                              </Checkbox.Group>
                           </div>
                           <p>
                              Давтамж:
                              <Input value={formData?.q32} className="amaraInput w-28" />
                              /мин
                           </p>
                           <div className="inline-flex">
                              <p>I авиа:</p>
                              <Checkbox.Group value={formData?.q33} className="ml-0">
                                 <Checkbox className="ml-3" value={'q33-1'}>
                                    Тод
                                 </Checkbox>
                                 <Checkbox value={'q33-2'}>
                                    Бүдгэвтэр(
                                    {formData?.['q33-2-1']?.includes('q33-2-1-1') ? (
                                       <span className="underline">{` I `}</span>
                                    ) : (
                                       ` I `
                                    )}
                                    /
                                    {formData?.['q33-2-1']?.includes('q33-2-1-2') ? (
                                       <span className="underline">{` IV `}</span>
                                    ) : (
                                       ` IV `
                                    )}
                                    <span>цэгт</span>)
                                 </Checkbox>
                              </Checkbox.Group>
                           </div>
                           <div>
                              <Checkbox.Group value={formData?.q33} className="ml-0">
                                 <Checkbox className="ml-14" value={'q33-3'}>
                                    Бүдэг(
                                    {formData?.['q33-3-1']?.includes('q33-3-1-1') ? (
                                       <span className="underline">{` I `}</span>
                                    ) : (
                                       ` I `
                                    )}
                                    /
                                    {formData?.['q33-3-1']?.includes('q33-3-1-2') ? (
                                       <span className="underline">{` IV `}</span>
                                    ) : (
                                       ` IV `
                                    )}
                                    )
                                 </Checkbox>
                                 <Checkbox value={'q33-4'}>
                                    Чангарсан(
                                    {formData?.['q33-4-1']?.includes('q33-4-1-1') ? (
                                       <span className="underline">{` I `}</span>
                                    ) : (
                                       ` I `
                                    )}
                                    /
                                    {formData?.['q33-4-1']?.includes('q33-4-1-2') ? (
                                       <span className="underline">{` IV `}</span>
                                    ) : (
                                       ` IV `
                                    )}
                                    <span>цэгт</span>)
                                 </Checkbox>
                              </Checkbox.Group>
                           </div>
                           <div className="inline-flex">
                              <p>II авиа:</p>
                              <Checkbox.Group value={formData?.q34} className="ml-0">
                                 <Checkbox className="ml-2" value={'q34-1'}>
                                    Тод
                                 </Checkbox>
                                 <Checkbox value={'q34-2'}>
                                    Бүдэг(
                                    {formData?.['q34-2-1']?.includes('q34-2-1-1') ? (
                                       <span className="underline">{` II `}</span>
                                    ) : (
                                       ` II `
                                    )}
                                    ,
                                    {formData?.['q34-2-1']?.includes('q34-2-1-2') ? (
                                       <span className="underline">{` III `}</span>
                                    ) : (
                                       ` III `
                                    )}
                                    ,
                                    {formData?.['q34-2-1']?.includes('q34-2-1-3') ? (
                                       <span className="underline">{` V `}</span>
                                    ) : (
                                       ` V `
                                    )}
                                    <span>цэгт</span>)
                                 </Checkbox>
                              </Checkbox.Group>
                           </div>
                           <div>
                              <Checkbox.Group value={formData?.q34} className="ml-0">
                                 <Checkbox className="ml-14" value={'q34-3'}>
                                    Өргөгдсөн(
                                    {formData?.['q34-3-1']?.includes('q34-3-1-1') ? (
                                       <span className="underline">{` II `}</span>
                                    ) : (
                                       ` II `
                                    )}
                                    /
                                    {formData?.['q34-3-1']?.includes('q34-3-1-2') ? (
                                       <span className="underline">{` III `}</span>
                                    ) : (
                                       ` III `
                                    )}
                                    <span>цэгт</span>)
                                 </Checkbox>
                              </Checkbox.Group>
                           </div>
                           <div className="inline-flex">
                              <p>III авиа:</p>
                              <Checkbox.Group value={formData?.q35} className="ml-0">
                                 <Checkbox className="ml-1" value={'q35-1'}>
                                    Сонсогдоно
                                 </Checkbox>
                                 <Checkbox value={'q35-2'}>Сонсогдохгүй</Checkbox>
                              </Checkbox.Group>
                           </div>
                        </th>
                        <th className="w-1/2" id="child">
                           <Checkbox.Group value={formData?.['q35-1-1']} className="ml-0">
                              <Checkbox className="ml-2" value={'q35-1-1-1'}>
                                 Шуугиангүй
                              </Checkbox>
                              <Checkbox value={'q35-1-1-2'}>шуугиантай</Checkbox>
                           </Checkbox.Group>
                           <p>
                              <span className="flex gap-2 text-[11px]">
                                 Байрлал:
                                 <Checkbox.Group value={formData?.['q35-1-1-2-1']} className="flex gap-4">
                                    <Checkbox className="test" value={'q35-1-1-2-1-1'}>
                                       I;
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q35-1-1-2-1-2'}>
                                       II;
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q35-1-1-2-1-3'}>
                                       III;
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q35-1-1-2-1-4'}>
                                       IV;
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q35-1-1-2-1-5'}>
                                       V;
                                    </Checkbox>
                                 </Checkbox.Group>
                                 цэг
                              </span>
                           </p>
                           <p>
                              <span className="flex gap-2 text-[11px]">
                                 Систолын:
                                 <Checkbox.Group value={formData?.['q35-1-1-2-2']} className="flex gap-4">
                                    <Checkbox className="test" value={'q35-1-1-2-2-1'}>
                                       I;
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q35-1-1-2-2-2'}>
                                       II;
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q35-1-1-2-2-3'}>
                                       III;
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q35-1-1-2-2-4'}>
                                       IV;
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q35-1-1-2-2-5'}>
                                       V;
                                    </Checkbox>
                                 </Checkbox.Group>
                                 цэгт
                              </span>
                           </p>
                           <p>
                              <span className="flex gap-2 text-[11px]">
                                 Систолын:
                                 <Checkbox.Group value={formData?.['q35-1-1-2-3']} className="flex gap-4">
                                    <Checkbox className="test" value={'q35-1-1-2-3-1'}>
                                       I
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q35-1-1-2-3-2'}>
                                       II
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q35-1-1-2-3-3'}>
                                       III
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q35-1-1-2-3-4'}>
                                       IV
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q35-1-1-2-3-5'}>
                                       V
                                    </Checkbox>
                                 </Checkbox.Group>
                                 цэгт
                              </span>
                           </p>
                           <Checkbox.Group value={formData?.q35} className="ml-0">
                              <Checkbox className="ml-2" value={'q35-3'}>
                                 Үл дамжина
                              </Checkbox>
                              <Checkbox value={'q35-4'}>Дамжина</Checkbox>
                           </Checkbox.Group>
                           <span>
                              <Input value={formData?.['q35-4-1']} className="amaraInput w-28" />
                           </span>
                           <div className="inline-flex items-end">
                              <p>Хүч:</p>
                              <Checkbox.Group value={formData?.q36} className="ml-0">
                                 <Checkbox className="ml-2" value={'q36-1'}>
                                    Сул
                                 </Checkbox>
                                 <Checkbox value={'q36-2'}>Дунд зэрэг</Checkbox>
                                 <Checkbox value={'q36-3'}>Хүчтэй</Checkbox>
                              </Checkbox.Group>
                           </div>
                           <p>Перикардын шүргэлцэх чимээ бий эсэх:</p>
                           <Checkbox.Group value={formData?.q37} className="ml-0">
                              <Checkbox className="ml-2" value={'q37-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q37-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="story mb-0">
                  <thead>
                     <tr>
                        <th colSpan={4}>Хоол боловсруулалх эрхтэн тогтолцоо</th>
                     </tr>
                     <tr>
                        <th>Харж ажиглах:</th>
                        <th>Өнгөц тэмтрэлтээр:</th>
                        <th>Тогшилтоор</th>
                        <th>Чагналтаар</th>
                     </tr>
                     <tr>
                        <th id="child">
                           <p>Хэл өнгөртэй эсэх:</p>
                           <Checkbox.Group value={formData?.q38} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q38-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q38-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                           <p>Арьс, салст-чийлэг:</p>
                           <Checkbox.Group value={formData?.q39} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q39-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q39-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                           <p>
                              Өнгө <Input value={formData?.q40} className="amaraInput w-28" />
                           </p>
                           <p>Хэвлийн - хэм</p>
                           <Checkbox.Group value={formData?.q41} className="ml-0">
                              <Checkbox className="ml-2" value={'q41-1'}>
                                 Жигд
                              </Checkbox>
                              <Checkbox value={'q41-2'}>Жигд бус</Checkbox>
                           </Checkbox.Group>
                           <p>
                              Хэлбэр <Input value={formData?.q42} className="amaraInput w-28" />
                           </p>
                        </th>
                        <th id="child">
                           <p>Хэвлий эмзэглэлтэй эсэх</p>
                           <Checkbox.Group value={formData?.q43} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q43-1'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q43-2'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                           <p>Булчингийн чангарал байгаа эсэх:</p>
                           <Checkbox.Group value={formData?.q44} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q44-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q44-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Хэвлийн хэнгэрэгэн чимээ:</p>
                           <Checkbox.Group value={formData?.q45} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q45-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q45-2'}>Ихэссэн</Checkbox>
                           </Checkbox.Group>
                           <p>Ихэссэн хэсэгт тогшилтын дуу:</p>
                           <Checkbox.Group value={formData?.q46} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q46-1'}>
                                 Бүдгэрсэн
                              </Checkbox>
                              <Checkbox className="w-full" value={'q46-2'}>
                                 Тодорсон
                              </Checkbox>
                              <Checkbox value={'q46-3'}>Дүлий болсон</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Гэдэсний гүрвэлзэх хөдөлгөөн:</p>
                           <Checkbox.Group value={formData?.q47} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q47-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q47-2'}>Ихэссэн</Checkbox>
                              <Checkbox className="ml-2 w-full" value={'q47-3'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q47-4'}>Дүлий</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Гүнзгий тэмтрэлтээр:</th>
                     </tr>
                     <tr>
                        <th id="child">
                           <p>Тахир гэдэс - байрлал</p>
                           <Checkbox.Group value={formData?.q48} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q48-1'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q48-2'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                           <p>Тогтоц</p>
                           <Checkbox.Group value={formData?.q49} className="ml-0">
                              <Checkbox className="ml-2" value={'q49-1'}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'q49-2'}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                           <p>Хөдөлгөөн</p>
                           <Checkbox.Group value={formData?.q50} className="ml-0">
                              <Checkbox className="ml-2" value={'q50-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q50-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Өгсөх болон уруудах гэдэс: - Байрлал</p>
                           <Checkbox.Group value={formData?.q51} className="ml-0">
                              <Checkbox className="ml-2" value={'q51-1'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q51-2'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                           <p>Тогтоц</p>
                           <Checkbox.Group value={formData?.q52} className="ml-0">
                              <Checkbox className="ml-2" value={'q52-1'}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'q52-2'}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                           <p>Хөдөлгөөнтэй</p>
                           <Checkbox.Group value={formData?.q53} className="ml-0">
                              <Checkbox className="ml-2" value={'q53-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q53-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Хөндлөн гэдэс: Байрлал</p>
                           <Checkbox.Group value={formData?.q54} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q54-1'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q54-2'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                           <p>Тогтоц</p>
                           <Checkbox.Group value={formData?.q55} className="ml-0">
                              <Checkbox className="ml-2" value={'q55-1'}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'q55-2'}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                           <p>Хөдөлгөөн</p>
                           <Checkbox.Group value={formData?.q56} className="ml-0">
                              <Checkbox className="ml-2" value={'q56-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q56-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Цутгалан гэдэс: Байрлал</p>
                           <Checkbox.Group value={formData?.q57} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q57-1'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q57-2'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                           <p>Тогтоц</p>
                           <Checkbox.Group value={formData?.q58} className="ml-0">
                              <Checkbox className="ml-2" value={'q58-1'}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'q58-2'}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                           <p>Хөдөлгөөн</p>
                           <Checkbox.Group value={formData?.q59} className="ml-0">
                              <Checkbox className="ml-2" value={'q59-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q59-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Элэг цөс, дэлүү</th>
                     </tr>
                     <tr>
                        <th id="child">
                           <p>Элэгний шинж тэмдгүүд:</p>
                           <Checkbox.Group value={formData?.q60} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q60-1'}>
                                 Мэдрэл сульдал
                              </Checkbox>
                              <Checkbox value={'q60-2'}>Биж хам шинж</Checkbox>
                              <Checkbox value={'q60-3'}>Иммуни-үрэвслийн шинж</Checkbox>
                              <Checkbox value={'q60-4'}>Өвдөх хам шинж:</Checkbox>
                           </Checkbox.Group>
                           <p>
                              <span className="text-[11px]">
                                 Хүч:
                                 <Input value={formData?.q61} className="amaraInput w-14" />
                              </span>
                              <span className="text-[11px]">
                                 Хугацаа &nbsp; [
                                 <Input value={formData?.q62} className="amaraInput w-12" />]
                              </span>
                           </p>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q60} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q60-5'}>
                                 Шарлах хам шинж
                              </Checkbox>
                              <Checkbox className="w-full" value={'q60-6'}>
                                 Загатналт
                              </Checkbox>
                              <Checkbox value={'q60-7'}>Цусархаг хам шинж</Checkbox>
                              <Checkbox value={'q60-8'}>Элэгний их шинж</Checkbox>
                              <Checkbox value={'q60-9'}>Элэгний бага шинж</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Элэгний хэмжээ тэмтрэлтээр:</p>
                           <Checkbox.Group value={formData?.q63} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q63-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q63-2'}>Томорсон</Checkbox>
                           </Checkbox.Group>
                           <p>
                              <span className="text-[11px]">
                                 (
                                 <Checkbox.Group value={formData?.['q63-2-1']} className="inline">
                                    <Checkbox className="test" value={'q63-2-1-1'}>
                                       <span className="text-[11px]">{` баруун, `}</span>
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q63-2-1-2'}>
                                       <span className="text-[11px]">{` зүүн дэлбэн `}</span>
                                    </Checkbox>
                                 </Checkbox.Group>
                                 &nbsp; зур)
                              </span>
                           </p>
                        </th>
                        <th id="child">
                           <p>Дэлүүний хэмжээ тэмтрэлтээр:</p>
                           <Checkbox.Group value={formData?.q64} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q64-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q64-2'}>Томорсон</Checkbox>
                           </Checkbox.Group>
                           <p>
                              <span className="text-[11px]">
                                 (
                                 <Checkbox.Group value={formData?.['q64-2-1']} className="inline">
                                    <Checkbox className="test" value={'q64-2-1-1'}>
                                       <span className="text-[11px]">{` I,`}&nbsp;</span>
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q64-2-1-2'}>
                                       <span className="text-[11px]">{` II,`}&nbsp;</span>
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q64-2-1-3'}>
                                       <span className="text-[11px]">{` III,`}&nbsp;</span>
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={'q64-2-1-4'}>
                                       <span className="text-[11px]">{` IV`}&nbsp;</span>
                                    </Checkbox>
                                 </Checkbox.Group>
                                 зур)
                              </span>
                           </p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Шээс бэлгийн тогтолцоо</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child"> 
                           <p>Хоногийн шээсний гарц:</p>
                           <Checkbox.Group value={formData?.q65} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q65-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q65-2'}>Ихэссэн</Checkbox>
                              <Checkbox value={'q65-3'}>Багассан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[110px]" id="child">
                           <p>Шээсний өнгө:</p>
                           <Checkbox.Group value={formData?.q66} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q66-1'}>
                                 Сүрлэн шар
                              </Checkbox>
                              <Checkbox className="w-full" value={'q66-2'}>
                                 Улаан шар
                              </Checkbox>
                              <Checkbox className="w-full" value={'q66-3'}>
                                 Өнгөргүй
                              </Checkbox>
                              <Checkbox className="w-full" value={'q66-4'}>
                                 Тундастай
                              </Checkbox>
                              <Checkbox value={'q66-5'}>Тундасгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[140px]" id="child">
                           <p>Шөнө шээдэг эсэх:</p>
                           <Checkbox.Group value={formData?.q67} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q67-2'}>
                                 Үгүй
                              </Checkbox>
                              <Checkbox value={'q67-1'}>
                                 Тийм ,
                                 <span>
                                    тоо <Input value={formData?.['q67-1-1']} className="amaraInput w-10" />
                                 </span>
                              </Checkbox>
                           </Checkbox.Group>
                           <p>Шээс тассалддаг эсэх:</p>
                           <Checkbox.Group value={formData?.q68} className="ml-0">
                              <Checkbox className="ml-2" value={'q68-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q68-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                           <p>Дутуу шээдэг эсэх:</p>
                           <Checkbox.Group value={formData?.q69} className="ml-0">
                              <Checkbox className="ml-2" value={'q69-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q69-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[150px]" id="child">
                           <p>Дүлж шээдэг эсэх:</p>
                           <Checkbox.Group value={formData?.q70} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q70-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q70-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                           <p>Шээхэд давсгаар өвддөг эсэх:</p>
                           <Checkbox.Group value={formData?.q71} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q71-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q71-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child"> 
                           <p>Бөөр тэмтрэлтээр:</p>
                           <Checkbox.Group value={formData?.q72} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q72-2'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q72-1'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                           <p>
                              <span className="text-[11px]">
                                 (
                                 <Checkbox.Group value={formData?.['q72-1-1']} className="inline">
                                    <Checkbox className="test" value={'q72-1-1-1'}>
                                       <span className="text-[11px]">Баруун,</span>
                                    </Checkbox>
                                    &nbsp;
                                    <Checkbox className="ml-0 test" value={'q72-1-1-2'}>
                                       <span className="text-[11px]">зүүн,</span>
                                    </Checkbox>
                                    &nbsp;
                                 </Checkbox.Group>
                                 зур)
                              </span>
                           </p>
                           <p>Пастернацкий</p>
                           <Checkbox.Group value={formData?.q73} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q73-1'}>
                                 <span className="text-[11px]">
                                    Баруун:<span className="text-[11px]">{`(${formData?.['q73-1-1']})`}</span>
                                 </span>
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'q73-2'}>
                                 зүүн:<span className="text-[11px]">{`(${formData?.['q73-2-1']})`}</span>
                              </Checkbox>
                              &nbsp;
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={3}>Мэдрэлийн тогтолцоо</th>
                     </tr>
                     <tr>
                        <th className="w-64" id="child">
                           <p>Үнэрлэх мэдрэмж:</p>
                           <Checkbox.Group value={formData?.q74} className="ml-0">
                              <Checkbox className="ml-2" value={'q74-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q74-2'}>Буурсан</Checkbox>
                              <Checkbox value={'q74-3'}>Ялгахгүй</Checkbox>
                           </Checkbox.Group>
                           <p>Сонсголын мэдрэмж:</p>
                           <Checkbox.Group value={formData?.q75} className="ml-0">
                              <Checkbox className="ml-2" value={'q75-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q75-2'}>Ихэссэн</Checkbox>
                              <Checkbox value={'q75-3'}>Буурсан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Нүүрний 2 тал:</p>
                           <Checkbox.Group value={formData?.q76} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q76-1'}>
                                 Ижил
                              </Checkbox>
                              <Checkbox value={'q76-2'}>Ижил бус</Checkbox>
                           </Checkbox.Group>
                           <p>Рефлексүүд:</p>
                           <Checkbox.Group value={formData?.q77} className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'q77-1'}>
                                 Хадгалагдана
                              </Checkbox>
                              <Checkbox value={'q77-2'}>Хадгалагдаагүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <p>Мэдрэхүй:</p>
                           <div className="inline-flex">
                              <div>
                                 <p>Өнгөц:</p>
                                 <Checkbox.Group value={formData?.q78} className="ml-0">
                                    <Checkbox className="ml-2 w-full" value={'q78-1'}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'q78-2'}>Ихэссэн</Checkbox>
                                    <Checkbox value={'q78-3'}>Буурсан</Checkbox>
                                 </Checkbox.Group>
                              </div>
                              <div>
                                 <p>Гүн:</p>
                                 <Checkbox.Group value={formData?.q79} className="ml-0">
                                    <Checkbox className="ml-2 w-full" value={'q79-1'}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'q79-2'}>Ихэссэн</Checkbox>
                                    <Checkbox value={'q79-3'}>Буурсан</Checkbox>
                                 </Checkbox.Group>
                              </div>
                              <div>
                                 <p>Хэт мэдрэгшил:</p>
                                 <Checkbox.Group value={formData?.q80} className="ml-0">
                                    <Checkbox className="ml-2 w-full" value={'q80-1'}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'q80-2'}>Ихэссэн</Checkbox>
                                    <Checkbox value={'q80-3'}>Буурсан</Checkbox>
                                 </Checkbox.Group>
                              </div>
                           </div>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} id="child">
                           <p>Сэтгэцийн байдал:</p>
                           <p>{formData?.q81}</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} id="child">
                           <p>Бусад: (Арьс, үе мөч, тунгалагийн тогтолцоо)</p>
                           <p>{formData?.q82}</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
};
export default CT1Dotor;
