import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input } from 'antd';
const CT_1_Zurh = (props) => {
   const {
      data: { formData }
   } = props;
   console.log('Form', formData);
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center mb-2">ЗҮРХНИЙ ЭМЧИЙН ҮЗЛЭГ</th>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="text-center">
                        <th>Биеийн ерөнхий байдал</th>
                        <th>Ухаан санаа</th>
                        <th colSpan={4}>Арьс салст</th>
                     </tr>
                  </thead>
                  <thead>
                     <tr>
                        <th>
                           <Checkbox.Group value={formData?.q1}>
                              <Checkbox className="ml-2" value={'q1-1'}>
                                 Дунд
                              </Checkbox>
                              <Checkbox value={'q1-2'}>Хүндэвтэр</Checkbox>
                              <Checkbox value={'q1-3'}>Хүнд</Checkbox>
                              <Checkbox value={'q1-4'}>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q2}>
                              <Checkbox value={'q2-1'} className="ml-2">
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'q2-2'}>Бүдгэрсэн</Checkbox>
                              <Checkbox value={'q2-3'}>Ухаангүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={4}>
                           <Checkbox.Group value={formData?.q3}>
                              <Checkbox className="ml-2" value={'q3-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q3-2'}>
                                 Хэвийн бус
                                 <Input className="amaraInput w-10" value={'q3-2-1'} style={{ textAlign: 'center' }} />
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4}>Амьсгалын эрхтэн тогтолцоо</th>
                     </tr>
                     <tr>
                        <th className="w-[220px]">
                           {' '}
                           Амьсгал 1 минутанд
                           <Input value={formData?.q4} />
                           удаа
                        </th>
                        <th colSpan={3}>
                           Чагналтаар:
                           <Checkbox.Group value={formData?.q5}>
                              <Checkbox value={'q5-1'} className="ml-2">
                                 Хэржигнүүртэй
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Уушги цулцангийн</Checkbox>
                              <Checkbox value={'q5-3'}>Амьсгал сулавтар (баруун, зүүн, 2 талдаа)</Checkbox>
                              <Checkbox value={'q5-4'}>Гуурсан хоолойн</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Цусны эргэлтийн тогтолцоо</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           Судасны цохилт 1 минутанд
                           <Input className="amaraInput w-10" value={formData?.q6} style={{ textAlign: 'center' }} />
                           удаа
                           <th>
                              Хүчдэл дүүрэлт
                              <Input className="amaraInput w-10" value={formData?.q7} style={{ textAlign: 'center' }} />
                           </th>
                        </th>
                        <th>
                           <th>Тогшилтоор:</th>
                           Зүрхний хил
                           <Checkbox.Group value={formData?.q8}>
                              <Checkbox value={'q8-1'} className="ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q8-2'}>Томорсон (зүүн, баруун)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Чагналтаар::</th>
                           Зүрхний авиа
                           <Checkbox.Group value={formData?.q9}>
                              <Checkbox className="ml-2" value={'q9-1'}>
                                 Тод
                              </Checkbox>
                              <Checkbox value={'q9-2'}>Бүдэг</Checkbox>
                              <Checkbox value={'q9-3'}>Бүдгэвтэр</Checkbox>
                              <Checkbox value={'q9-4'}>Хэм жигд</Checkbox>
                              <Checkbox value={'q9-5'}>Жигд бус </Checkbox>
                              <Checkbox value={'q9-6'}>Хэм алдалттай</Checkbox>
                           </Checkbox.Group>
                           <th>
                              АД баруун талд
                              <Input className="amaraInput w-8" value={formData?.q10} style={{ textAlign: 'center' }} />
                              /
                           </th>
                           <th>
                              Зүүн талд
                              <Input className="amaraInput w-8" value={formData?.q11} style={{ textAlign: 'center' }} />
                              /
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4}>Хоол шингээх эрхтэн тогтолцоо</th>
                     </tr>
                     <tr>
                        <th className="w-[150px]">
                           Хэл
                           <Checkbox.Group value={formData?.q12}>
                              <Checkbox className="ml-2" value={'q12-1'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'q12-2'}>Хуурай</Checkbox>
                              <Checkbox value={'q12-3'}>Өнгөргүй</Checkbox>
                              <Checkbox value={'q12-4'}>Өнгөртэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={3}>
                           <p> Хэвлийн үзлэг:</p>
                           <Checkbox.Group value={formData?.q13}>
                              <Checkbox value={'q13-1'}>Өнгөц тэмтрэлтээр</Checkbox>
                              <Checkbox value={'q13-2'}>Гүн тэмтрэлтээр</Checkbox>
                              <Checkbox value={'q13-6'}>
                                 Эмзэглэлтэй (байрлал
                                 <Input
                                    className="amaraInput w-8"
                                    value={formData?.['q13-6-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 )
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group>
                              <Checkbox value={formData?.['q13-3']}>Ердийн</Checkbox>
                              <Checkbox value={formData?.['q13-4']}>Зөөлөн гялтан цочрол үгүй</Checkbox>
                              <Checkbox value={formData?.['q13-5']}> Гялтан цочролын шинж илэрсэн</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Мэдрэлийн тогтолцоо</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <p> Сонсох чадвахи:</p>
                           <Checkbox.Group value={formData?.q14}>
                              <Checkbox value={'q14-1'}>Хэвийн</Checkbox>
                              <Checkbox value={'q14-2'}>
                                 Буурсан
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.['q14-2-1']} className="inline">
                                          <Checkbox className="test" value={'q14-2-1-1'}>
                                             <span className="text-[11px]">Баруун,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q14-2-1-2'}>
                                             <span className="text-[11px]">зүүн,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Рефлексүүд</p>
                           <Checkbox.Group value={formData?.q15}>
                              <Checkbox value={'q15-1'}>Хадгалагдана</Checkbox>
                              <Checkbox value={'q15-2'}>Хадгалагдахгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th className="w-full">
                              Бусад
                              <Input
                                 className="amaraInput w-[670px]"
                                 value={formData?.q16}
                                 style={{ textAlign: 'center' }}
                              />
                           </th>
                           Сэтгэцийн байдал:
                           <Input
                              className="amaraInput w-[600px] mb-1"
                              value={formData?.q17}
                              style={{ textAlign: 'center' }}
                           />
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4} className="text-center">
                           Анамнез
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4} className="h-16">
                           Зовиур, өвчний түүх:
                           <p className="ml-2 underline">{`:: ${formData?.q18}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           Зүрх судасны эрсдэлт хүчин зүйлс:
                           <p className="ml-2 underline">{`:: ${formData?.q19}`}</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">
                           <Checkbox.Group value={formData?.q20}>
                              <Checkbox value={'q20-1'} className="w-full ml-2">
                                 Зохисгүй хооллолт{' '}
                              </Checkbox>
                              <Checkbox value={'q20-2'} className="w-full">
                                 Хөдөлгөөний хомсдол
                              </Checkbox>
                              <Checkbox value={'q20-3'} className="w-full">
                                 Стресс
                              </Checkbox>
                              <Checkbox value={'q20-4'} className="w-full">
                                 Таргалалт
                              </Checkbox>
                              <Checkbox value={'q20-5'} className="w-full">
                                 Тамхидалт
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[50%]">
                           <Checkbox.Group>
                              <Checkbox value={formData?.['q20-6']} className="w-full ml-2 ">
                                 Архины зохисгүй хэрэглээ
                              </Checkbox>
                              <Checkbox value={formData?.['q20-7']} className="w-full ">
                                 Удамшил
                              </Checkbox>
                              <Checkbox value={formData?.['q20-8']} className="w-full ">
                                 Артерийн гипертензи
                              </Checkbox>
                              <Checkbox value={formData?.['q20-9']} className="w-full ">
                                 Гиперхолестеринеми
                              </Checkbox>
                              <Checkbox value={formData?.['q20-10']} className="w-full ">
                                 Чихрийн шижин
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="text-center">
                           Бодит үзлэг
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>Ажиглалт</th>
                        <th>Чагналт</th>
                     </tr>
                     <tr>
                        <th className="w-[45%]">
                           <th>Арьсны хөхрөлт бий эсэх:</th>
                           <Checkbox.Group value={formData?.q21}>
                              <Checkbox value={'q21-1'}>Үгүй</Checkbox>
                              <Checkbox value={'q21-2'}>
                                 Тийм
                                 <Input
                                    className="amaraInput w-40"
                                    value={formData?.['q21-2-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                           </Checkbox.Group>
                           <th>Захын хаван бий эсэх:</th>
                           <Checkbox.Group value={formData?.q22}>
                              <Checkbox value={'q22-1'}>Үгүй</Checkbox>
                              <Checkbox value={'q22-2'}>
                                 Тийм
                                 <Input
                                    className="amaraInput w-40"
                                    value={formData?.['q22-2-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                           </Checkbox.Group>
                           <th>Гүрээний венийн лугшилт</th>
                           <Checkbox.Group value={formData?.q23}>
                              <Checkbox className="ml-2" value={'q23-1'}>
                                 Ажиглагдахгүй
                              </Checkbox>
                              <Checkbox value={'q23-2'}>
                                 Ажиглагдана
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.['q23-2-1']} className="inline">
                                          <Checkbox className="test" value={'q23-2-1-1'}>
                                             <span className="text-[11px]">хүчтэй,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q23-2-1-2'}>
                                             <span className="text-[11px]">дунд,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q23-2-1-2'}>
                                             <span className="text-[11px]">сул,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </Checkbox>
                           </Checkbox.Group>
                           <th>Зүрхний оройн түлхэлт:</th>
                           <Checkbox.Group value={formData?.q24}>
                              <Checkbox className="ml-2 w-full" value={'q24-1'}>
                                 Ажиглагдахгүй
                              </Checkbox>
                              <Checkbox value={'q24-2'}>Ажиглагдана</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[55%]">
                           <th>Артерийн даралт хэмжилт:</th>
                           <Checkbox.Group value={formData?.q25}>
                              <Checkbox className="w-full ml-2 " value={'q25-1'}>
                                 {' '}
                                 Баруун талд:
                                 <Input
                                    className="amaraInput w-14"
                                    value={formData?.['q25-1-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 мм.муб
                              </Checkbox>
                              <Checkbox className="w-full ml-2" value={'q25-2'}>
                                 {' '}
                                 Зүүн талд:
                                 <Input
                                    className="amaraInput w-14"
                                    value={formData?.['q25-2-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 мм.муб
                              </Checkbox>
                           </Checkbox.Group>
                           <th className="flex flex-col">
                              <th>Зүрхний авиа:</th>
                              <th>
                                 Хэмнэл:
                                 <Checkbox.Group value={formData?.q26}>
                                    <Checkbox value={'q26-1'} className=" ml-2 ">
                                       жигд
                                    </Checkbox>
                                    <Checkbox value={'q26-2'} className=" ">
                                       жигд бус
                                    </Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                           <th>
                              Давтамж:
                              <Input
                                 className="amaraInput w-16"
                                 value={formData?.q27}
                                 style={{ textAlign: 'center' }}
                              />
                              /мин
                           </th>
                           <th className="flex flex-col">
                              <th>
                                 I авиа:
                                 <Checkbox.Group value={formData?.q28}>
                                    <Checkbox value={'q28-1'} className=" ml-2 ">
                                       тод
                                    </Checkbox>
                                    <Checkbox value={'q28-2'} className=" ">
                                       бүдгэвтэр (I, IV цэгт);
                                    </Checkbox>
                                    <Checkbox value={'q28-3'} className=" ">
                                       бүдэг( I, IV );
                                    </Checkbox>
                                    <Checkbox value={'q28-4'} className=" ">
                                       чангарсан( I, IV цэгт);
                                    </Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th>
                                 <p>II авиа:</p>
                                 <Checkbox.Group value={formData?.q29}>
                                    <Checkbox value={'q29-1'} className=" ml-2 ">
                                       тод
                                    </Checkbox>
                                    <Checkbox value={'q29-2'} className=" ">
                                       бүдэг(II, III, V цэгт);
                                    </Checkbox>
                                    <Checkbox value={'q29-3'} className="w-full ">
                                       өргөгдсөн (II, III цэгт);
                                    </Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
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
                     <tr></tr>
                  </thead>
               </Table>

               <Table bordered className="story mb-0">
                  <thead></thead>
                  <thead>
                     <tr>
                        <th className="w-[60%]">
                           <th>
                              <th className="flex flex-col">
                                 <th>Тэмтрэлт</th>
                                 Зүрхний оройн түлхэлт Байрлал:
                                 <Checkbox.Group className="flex flex-col" value={formData?.q38}>
                                    <Checkbox value={'q38-1'} className=" ml-2 ">
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'q38-2'} className=" ">
                                       Хэвийн бус
                                    </Checkbox>
                                 </Checkbox.Group>
                              </th>
                              Хүч
                              <Checkbox.Group value={formData?.q39}>
                                 <Checkbox className=" ml-2 " value={'q39-1'}>
                                    дунд зэрэг
                                 </Checkbox>
                                 <Checkbox className=" ml-2 " value={'q39-2'}>
                                    хүчтэй
                                 </Checkbox>
                                 <Checkbox className=" ml-2 " value={'q39-3'}>
                                    сул
                                 </Checkbox>
                              </Checkbox.Group>
                              <th>Шууны артерийн лугшилт</th>
                              Хэмнэл:
                              <Checkbox.Group value={formData?.q40}>
                                 <Checkbox className=" ml-2" value={'q40-1'}>
                                    жигд
                                 </Checkbox>
                                 <Checkbox className=" ml-2" value={'q40-2'}>
                                    жигд бус
                                 </Checkbox>
                              </Checkbox.Group>
                              <th>
                                 Давтамж:
                                 <Input
                                    className="amaraInput w-16"
                                    value={formData?.q41}
                                    style={{ textAlign: 'center' }}
                                 />
                                 /мин
                              </th>
                              Хүчдэл
                              <Checkbox.Group value={formData?.q42}>
                                 <Checkbox className=" ml-2 " value={'q42-1'}>
                                    дунд зэрэг
                                 </Checkbox>
                                 <Checkbox className=" ml-2 " value={'q42-2'}>
                                    их
                                 </Checkbox>
                                 <Checkbox className=" ml-2 " value={'q42-3'}>
                                    бага
                                 </Checkbox>
                              </Checkbox.Group>
                              <th>
                                 Дүүрэлт
                                 <Checkbox.Group value={formData?.q43}>
                                    <Checkbox className=" ml-2 " value={'q43-1'}>
                                       дунд зэрэг
                                    </Checkbox>
                                    <Checkbox className=" ml-2 " value={'q43-2'}>
                                       сул
                                    </Checkbox>
                                 </Checkbox.Group>
                              </th>
                              2 талд ижил эсэх
                              <Checkbox.Group value={formData?.q44}>
                                 <Checkbox className=" ml-2 " value={'q44-1'}>
                                    ижил
                                 </Checkbox>
                                 <Checkbox className=" ml-2 " value={'q44-2'}>
                                    ижил бус
                                 </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th rowSpan={2}>
                           <th className="w-[40%]">
                              <th className="flex  items-center">
                                 <th>III авиа:</th>
                                 <Checkbox.Group value={formData?.q30}>
                                    <Checkbox value={'q30-1'} className=" ml-2 ">
                                       сонсогдоно
                                    </Checkbox>
                                    <Checkbox value={'q30-2'} className=" ">
                                       сонсогдохгүй
                                    </Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th>
                                 <Checkbox.Group className="flex flex-col" value={formData?.q31}>
                                    <Checkbox value={'q31-1'} className=" ml-2 ">
                                       Шуугиангүй
                                    </Checkbox>
                                    <Checkbox value={'q31-2'} className=" ml-2 ">
                                       Шуугиантай
                                    </Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th className="flex  items-center gap-4">
                                 <th>Байрлал:</th>
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.q32} className="inline">
                                          <Checkbox className="test" value={'q32-1'}>
                                             <span className="text-[11px]">I;</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q32-2'}>
                                             <span className="text-[11px]">II</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q32-3'}>
                                             <span className="text-[11px]">III,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q32-4'}>
                                             <span className="text-[11px]">IV;,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q32-5'}>
                                             <span className="text-[11px]">V цэг,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </th>
                              <th className="flex  items-center gap-4">
                                 <th>Систолын:</th>
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.q33} className="inline">
                                          <Checkbox className="test" value={'q33-1'}>
                                             <span className="text-[11px]">I;</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q33-2'}>
                                             <span className="text-[11px]">II</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q33-3'}>
                                             <span className="text-[11px]">III,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q33-4'}>
                                             <span className="text-[11px]">IV;,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q33-5'}>
                                             <span className="text-[11px]">V цэг,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </th>
                              <th className="flex  items-center gap-4">
                                 <th>Диастолын:</th>
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.q34} className="inline">
                                          <Checkbox className="test" value={'q34-1'}>
                                             <span className="text-[11px]">I;</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q34-2'}>
                                             <span className="text-[11px]">II</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q34-3'}>
                                             <span className="text-[11px]">III,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q34-4'}>
                                             <span className="text-[11px]">IV;,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q34-5'}>
                                             <span className="text-[11px]">V цэг,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </th>
                              <Checkbox.Group value={formData?.q35}>
                                 <Checkbox className="ml-2" value={'q35-1'}>
                                    Үл дамжина
                                 </Checkbox>
                                 <Checkbox value={'q35-2'}>
                                    Дамжина
                                    <Input
                                       className="amaraInput w-40"
                                       value={formData?.['q35-2-1']}
                                       style={{ textAlign: 'center' }}
                                    />
                                 </Checkbox>
                              </Checkbox.Group>
                              <th>
                                 Хүч:
                                 <Checkbox.Group value={formData?.q36}>
                                    <Checkbox className="ml-2" value={'q36-1'}>
                                       сул
                                    </Checkbox>
                                    <Checkbox value={'q36-2'}>дунд зэрэг</Checkbox>
                                    <Checkbox value={'q36-3'}>хүчтэй</Checkbox>
                                 </Checkbox.Group>
                              </th>
                              Перикардын шүргэлцэх чимээ бий эсэх
                              <Checkbox.Group value={formData?.q37}>
                                 <Checkbox className="ml-2" value={'q37-1'}>
                                    Үгүй
                                 </Checkbox>
                                 <Checkbox value={'q37-2'}>Тийм</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                     </tr>
                     <tr>
                        <th>
                           <th className="flex flex-col">
                              <th>Тогшилт</th>
                              Зүрхний ( харьцангуй) хил хязгаар:
                              <Checkbox.Group value={formData?.q45}>
                                 <Checkbox className=" ml-2 " value={'q45-1'}>
                                    Хэвийн
                                 </Checkbox>
                                 <Checkbox value={'q45-2'}>Томорсон (дээд, баруун, зүүн хил )</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2}>
                           {' '}
                           Хийгдсэн шинжилгээний үр дүн:
                           <p className="ml-2 underline">{`: ${formData?.q46}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           <th>
                              Зүрхний цохилтын байдал:
                              <p className="ml-2 underline">{`: ${formData?.q47}`}</p>
                           </th>
                           Давтамж:
                           <Input
                              className="amaraInput w-[650px] mb-2"
                              value={formData?.q48}
                              style={{ textAlign: 'center' }}
                           />
                           Хэмнэл:
                           <Input
                              className="amaraInput w-[650px] mb-2"
                              value={formData?.q49}
                              style={{ textAlign: 'center' }}
                           />
                           Хориг:
                           <Input
                              className="amaraInput w-[660px] mb-2"
                              value={formData?.q50}
                              style={{ textAlign: 'center' }}
                           />
                           Томрол:
                           <Input
                              className="amaraInput w-[650px] mb-2"
                              value={formData?.q51}
                              style={{ textAlign: 'center' }}
                           />
                           Үхжил, гэмтэл:
                           <Input
                              className="amaraInput w-[620px] mb-2"
                              value={formData?.q52}
                              style={{ textAlign: 'center' }}
                           />
                           Ишеми:
                           <Input
                              className="amaraInput w-[660px] mb-6"
                              value={formData?.q53}
                              style={{ textAlign: 'center' }}
                           />
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="h-20">
                           Бусад шинжилгээ:
                           <p className="ml-2 underline">{`:: ${formData?.q54}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2}>Зүрхний хэт авиан шинжилгээ:</th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="h-20">
                           <p className="ml-2 underline">{`: ${formData?.q55}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2}>Эмнэл зүйн онош</th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="h-20">
                           <p className="ml-2 underline">{`: ${formData?.q56}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2}>Зөвлөгөө, эмчилгээ</th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="h-36">
                           <p className="ml-2 underline">{`: ${formData?.q57}`}</p>
                        </th>
                     </tr>
                     <tr className="h-8">
                        <th className="border-r-0">Эмчийн нэр, гарын үсэг:</th>
                        <th className="border-l-0">
                           <div className=" flex gap-20">
                              <div>/</div>
                              <div>/</div>
                           </div>
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Zurh;
