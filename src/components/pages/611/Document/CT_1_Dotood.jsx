import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Image, Input } from 'antd';
import DotoodShuurelImg from '../../../../assets/images/dotoodshuurel.png';
import TalimoMetrImg from '../../../../assets/images/talimometr.png';
import ThyroidImg from '../../../../assets/images/thyroid.png';
import PhysicalImg from '../../../../assets/images/physical.png';
import FootImg from '../../../../assets/images/foot.png';
const CT_1_Dotood = (props) => {
   const {
      data: { formData }
   } = props;
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center mb-2">ДОТООД ШҮҮРЭЛ СУДЛАЛЫН ЭМЧИЙН ҮЗЛЭГ</th>
               <Table bordered className="story mb-0 ">
                  <thead>
                     <tr className="text-center">
                        <th>Биеийн ерөнхий байдал</th>
                        <th>Ухаан санаа</th>
                        <th colSpan={4}>Арьс салст</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th>
                           <Checkbox.Group value={formData?.q1}>
                              <Checkbox value={'q1-1'} className="ml-2">
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
                              <Checkbox value={'q3-1'} className="ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q3-2'}>
                                 Хэвийн бус
                                 <Input className=" w-10" value={'q3-2-1'} style={{ textAlign: 'center' }} />
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4}>Амьсгалын эрхтэн тогтолцоо</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th className="w-[220px]" id="child">
                           Амьсгал 1 минутанд
                           <Input className="w-10" style={{ textAlign: 'center' }} value={formData?.q4} />
                           удаа
                        </th>
                        <th colSpan={3}>
                           <span id="title">Чагналтаар:</span>
                           <Checkbox.Group value={formData?.q5}>
                              <Checkbox value={'q5-1'} className="ml-2">
                                 Хэржигнүүртэй
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Уушги цулцангийн</Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group>
                              <Checkbox value={'q5-3'}>Гуурсан хоолойн</Checkbox>
                              <Checkbox value={'q5-4'}>
                                 <p className="flex items-center gap-2">
                                    <p id="child">Амьсгал сулавтар</p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.['q5-4-1']} className="inline">
                                          <Checkbox className="test" value={'q5-4-1-1'}>
                                             <span className="text-[11px]">Баруун,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q5-4-1-2'}>
                                             <span className="text-[11px]">зүүн,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q5-4-1-3'}>
                                             <span className="text-[11px]">2 талдаа,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4} id="title">
                           Цусны эргэлтийн тогтолцоо
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr className="border-t-0">
                        <th id="child">
                           Судасны цохилт 1 минутанд
                           <Input className=" w-10" value={formData?.q6} style={{ textAlign: 'center' }} />
                           удаа
                           <th id="child">
                              Хүчдэл дүүрэлт
                              <Input className=" w-10" value={formData?.q7} style={{ textAlign: 'center' }} />
                           </th>
                        </th>
                        <th>
                           <th id="title">Тогшилтоор:</th>
                           <p className="ml-1" id="child">
                              Зүрхний хил
                           </p>
                           <Checkbox.Group value={formData?.q8}>
                              <Checkbox value={'q8-1'} className="ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q8-2'}>
                                 Томорсон
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.['q8-2-1']} className="inline">
                                          <Checkbox className="test" value={'q8-2-1-1'}>
                                             <span className="text-[11px]">Баруун,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q8-2-1-2'}>
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
                           <p id="title">Чагналтаар:</p>
                           <p id="child" className="ml-1">
                              Зүрхний авиа
                           </p>
                           <Checkbox.Group value={formData?.q9}>
                              <Checkbox value={'q9-1'} className="ml-2">
                                 Тод
                              </Checkbox>
                              <Checkbox value={'q9-2'}>Бүдэг</Checkbox>
                              <Checkbox value={'q9-3'}>Бүдгэвтэр</Checkbox>
                              <Checkbox value={'q9-4'}>Хэм жигд</Checkbox>
                              <Checkbox value={'q9-5'}>Жигд бус </Checkbox>
                              <Checkbox value={'q9-6'}>Хэм алдалттай</Checkbox>
                           </Checkbox.Group>
                           <th id="child">
                              АД баруун талд
                              <Input className=" w-8" value={formData?.q10} style={{ textAlign: 'center' }} />
                           </th>
                           <th id="child">
                              Зүүн талд
                              <Input className=" w-8" value={formData?.q11} style={{ textAlign: 'center' }} />
                           </th>
                        </th>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4}>Хоол шингээх эрхтэн тогтолцоо</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th className="w-[200px]">
                           <p id="title">Хэл</p>
                           <Checkbox.Group value={formData?.q12}>
                              <Checkbox value={'q12-1'} className="ml-2">
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'q12-2'}>Хуурай</Checkbox>
                              <Checkbox value={'q12-3'}>Өнгөргүй</Checkbox>
                              <Checkbox value={'q12-4'}>Өнгөртэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={3}>
                           <p id="title"> Хэвлийн үзлэг:</p>
                           <Checkbox.Group value={formData?.q13}>
                              <Checkbox value={'q13-1'}>Өнгөц тэмтрэлтээр</Checkbox>
                              <Checkbox value={'q13-2'}>Гүн тэмтрэлтээр</Checkbox>
                              <Checkbox value={'q13-3'} className="">
                                 Эмзэглэлтэй (байрлал
                                 <Input
                                    className=" w-8"
                                    value={formData?.['q13-3-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 )
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q13}>
                              <Checkbox value={'q13-4'}>Ердийн</Checkbox>
                              <Checkbox value={'q13-5'}>Зөөлөн гялтан цочрол үгүй</Checkbox>
                              <Checkbox value={'q13-6'}> Гялтан цочролын шинж илэрсэн</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4}>Мэдрэлийн тогтолцоо</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr className="border-t-0">
                        <th>
                           <div className="flex items-center gap-2">
                              <p id="title"> Сонсох чадвахи:</p>
                              <Checkbox.Group value={formData?.q14}>
                                 <Checkbox value={'q14-1'}>Хэвийн</Checkbox>
                                 <Checkbox value={'q14-2'}>Буурсан (баруун, зүүн)</Checkbox>
                              </Checkbox.Group>
                           </div>
                        </th>
                        <th>
                           <div className="flex items-center gap-2">
                              <p id="title">Рефлексүүд:</p>
                              <Checkbox.Group value={formData?.q15}>
                                 <Checkbox value={'q15=1'}>Хадгалагдана</Checkbox>
                                 <Checkbox value={'q15=2'}>Хадгалагдахгүй</Checkbox>
                              </Checkbox.Group>
                           </div>
                        </th>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="story mb-0">
                  <tbody>
                     <tr className="border-t-0">
                        <th id="child">
                           Бусад
                           <Input className="w-[650px]" value={formData?.q16} style={{ textAlign: 'center' }} />
                           Сэтгэцийн байдал:
                           <Input className=" w-[580px] mb-1" value={formData?.q17} style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="text-center p-0">
                           ДОТООД ШҮҮРЭЛ СУДЛАЛЫН ҮЗЛЭГ
                        </th>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <Image src={DotoodShuurelImg} alt="" width={149} height={80} />
                        </th>
                        <th className="w-[300px]">
                           <p id="title"> Зовиур:</p>
                        </th>
                        <th id="child">
                           <p id="title"> Бамбайн томролын зэрэг:</p>
                           <Checkbox.Group value={formData?.q19}>
                              <Checkbox value={'q19-1'} className="ml-2">
                                 0 зэрэг (Харагдахгүй, тэмтрэгдэхгүй)
                              </Checkbox>
                              <Checkbox value={'q19-2'}>1-р зэрэг (Харагдахгүй, тэмтрэгдэнэ) </Checkbox>
                              <Checkbox value={'q19-3'}>2-р зэрэг (Харагдана, тэмтрэгдэнэ)</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child">
                           <p id="title">Нүдний бүлтийлт:</p>
                           <p>Нүдний шинж:</p>
                           <Checkbox.Group value={formData?.q20}>
                              <Checkbox value={'q20-1'} className="ml-2">
                                 Крауссийн шинж
                              </Checkbox>
                              <Checkbox value={'q20-2'}>Грефийн шинж </Checkbox>
                              <Checkbox value={'q20-3'}>Кохерийн шинж </Checkbox>
                              <Checkbox value={'q20-4'}>Грефийн шинж </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <Checkbox.Group value={formData?.q20}>
                              <Checkbox value={'q20-5'} className="ml-2">
                                 Штельвагийн шинж
                              </Checkbox>
                              <Checkbox value={'q20-6'} className="ml-2">
                                 Дельримплийн шинж
                              </Checkbox>
                              <Checkbox value={'q20-7'} className="ml-2">
                                 Еленикийн шинж
                              </Checkbox>
                              <Checkbox value={'q20-8'} className="ml-2">
                                 Розенбахийн шинж
                              </Checkbox>
                              <Checkbox value={'q20-9'} className="ml-2">
                                 Боткиний шинж
                              </Checkbox>
                              <Checkbox value={'q20-10'} className="ml-2">
                                 Жоффруагийн шинж
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[350px]" id="title">
                           <p id="child" className="mt-4">
                              Марийн шинж
                           </p>
                           <Input className=" w-full " value={formData?.q21} style={{ textAlign: 'center' }} />
                           <p id="child">Цахилгаан бүхээгний шинж</p>
                           <Input className=" w-full" value={formData?.q22} style={{ textAlign: 'center' }} />
                           <p id="child">Дермографизм (улаан, түргэн тогтвортой)</p>
                           <Input className=" w-full" value={formData?.q23} style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th rowSpan={5} className="w-[300px] p-0">
                           <th id="child">(Экзофтальмометрээр)</th>
                           <Image src={TalimoMetrImg} alt="" width={280} />
                        </th>
                        <th colSpan={3} className="h-6"></th>
                     </tr>
                     <tr id="child">
                        <th className="w-[100px] text-center">Үзүүлэлт</th>
                        <th className="w-[200px] text-center">Хариу</th>
                        <th className="w-[120px] text-center">Хэвийн хэмжээ</th>
                     </tr>
                     <tr>
                        <th id="child">Чөлөөт Т3</th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q24-1']}`}</p>
                        </th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q24-2']}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th id="child">Чөлөөт Т4</th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q25-1']}`}</p>
                        </th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q25-2']}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th id="child">Нийт Т3</th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q26-1']}`}</p>
                        </th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q26-2']}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th rowSpan={6}>
                           Бамбайн хэт авиан шинжилгээ: <Image src={ThyroidImg} alt="" width={250} />
                        </th>
                        <th id="child">Нийт Т4</th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q27-1']}`}</p>
                        </th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q27-2']}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th id="child">TSH </th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q28-1']}`}</p>
                        </th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q28-2']}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th id="child">TR-Ab</th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q29-1']}`}</p>
                        </th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q29-2']}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th id="child">TG-Ab</th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q30-1']}`}</p>
                        </th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q30-2']}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th id="child">TPO-Ab </th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q31-1']}`}</p>
                        </th>
                        <th>
                           <p className="ml-2 underline" id="child">{` ${formData?.['q31-2']}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th id="child" colSpan={3}>
                           Бамбайн цөмийн изотоп шинжилгээ
                           <Input className="w-full" value={formData?.q32} style={{ textAlign: 'center' }} />
                           Бамбайн эсийн шинжилгээ:
                           <Input className="w-full " value={formData?.q33} style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="story mb-0">
                  <tbody>
                     <tr>
                        <th className="text-center p-0" colSpan={2}>
                           Чихрийн шижингийн үзлэг
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[50%] p-0 ">
                           <th id="child">
                              <p id="title">Чихрийн шижингийн эрсдэлт хүчин зүйлс:</p>
                              <Checkbox.Group value={formData?.q34}>
                                 <Checkbox value={'q34-1'} className="ml-2">
                                    Тарган удам
                                 </Checkbox>
                                 <Checkbox value={'q34-2'} className="w-full ">
                                    ЧШ-гийн удам
                                 </Checkbox>
                                 <Checkbox value={'q34-3'} className="w-full ">
                                    Жин (хамгийн их)
                                 </Checkbox>
                                 <Checkbox value={'q34-4'} className="w-full ">
                                    Гепатит
                                 </Checkbox>
                                 <Checkbox value={'q34-5'} className="w-full ">
                                    Панкреатит
                                 </Checkbox>
                                 <Checkbox value={'q34-6'} className="w-full ">
                                    Жирэмсний ЧШ
                                 </Checkbox>
                                 <Checkbox value={'q34-7'} className="w-full ">
                                    4 кг дээш хүүхэд
                                 </Checkbox>
                                 <Checkbox value={'q34-8'} className="w-full ">
                                    Архи
                                 </Checkbox>
                                 <Checkbox value={'q34-9'} className="w-full ">
                                    Тамхи
                                 </Checkbox>
                                 <Checkbox value={'q34-10'} className="w-full  ">
                                    <p className="gap-2 text-[11px]">
                                       Хоолны дэглэм:
                                       <span className="text-[11px]">
                                          <Checkbox.Group value={formData?.['q32-10-1']} className="inline">
                                             <Checkbox className="test" value={'q32-10-1-1'}>
                                                <span className="text-[11px]">сайн/</span>
                                             </Checkbox>
                                             &nbsp;
                                             <Checkbox className="ml-0 test" value={'q32-10-1-2'}>
                                                <span className="text-[11px]">дунд/</span>
                                             </Checkbox>
                                             &nbsp;
                                             <Checkbox className="ml-0 test" value={'q32-10-1-3'}>
                                                <span className="text-[11px]">муу,</span>
                                             </Checkbox>
                                             &nbsp;
                                          </Checkbox.Group>
                                       </span>
                                    </p>
                                 </Checkbox>
                                 <Checkbox value={'q34-11'}>
                                    <p className="text-[11px] ">
                                       Хөдөлгөөн:
                                       <span className="text-[11px]">
                                          <Checkbox.Group value={formData?.['q34-11-1']} className="inline">
                                             <Checkbox className="test" value={'q34-11-1-1'}>
                                                <span className="text-[11px]">сайн/</span>
                                             </Checkbox>
                                             &nbsp;
                                             <Checkbox className="ml-0 test" value={'q34-11-1-2'}>
                                                <span className="text-[11px]">дунд/</span>
                                             </Checkbox>
                                             &nbsp;
                                             <Checkbox className="ml-0 test" value={'q5-4-1-3'}>
                                                <span className="text-[11px]">муу</span>
                                             </Checkbox>
                                             &nbsp;
                                          </Checkbox.Group>
                                       </span>
                                    </p>
                                 </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th className="p-0">
                           <th>
                              <div className="flex items-center">
                                 <p id="title"> Оношлогдсон он</p>
                                 <p className="ml-2 underline" id="child">{`: ${formData?.q36}`}</p>
                              </div>
                           </th>
                           <div className="flex items-center">
                              <p id="title">Хэрэглэдэг эмийн бэлдмэл:</p>
                              <p id="child" className="ml-2 underline">{` ${formData?.q37}`}</p>
                           </div>
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[40%]">
                           <th id="child">
                              <p id="title">Бие бялдарын үзүүлэлт:</p>
                              <Checkbox.Group value={formData?.q38}>
                                 <Checkbox className="ml-2" value={'q38-1'}>
                                    Жин
                                    <Input
                                       className="w-10"
                                       value={formData?.['q38-1-1']}
                                       style={{ textAlign: 'center' }}
                                    />
                                    кг
                                 </Checkbox>
                                 <Checkbox className="w-full" value={'q38-2'}>
                                    Өндөр
                                    <Input
                                       className="w-10"
                                       value={formData?.['q38-2-1']}
                                       style={{ textAlign: 'center' }}
                                    />
                                    см
                                 </Checkbox>
                                 <Checkbox className="w-full" value={'q38-3'}>
                                    Биеийн өөхний хэмжээ
                                    <Input
                                       className="w-10"
                                       value={formData?.['q38-3-1']}
                                       style={{ textAlign: 'center' }}
                                    />
                                    %
                                 </Checkbox>
                                 <Checkbox className="w-full ml-10">{text}</Checkbox>
                                 <Checkbox className="w-full" value={formData?.q38}>
                                    Бүсэлхийн тойрог
                                    <Input className="w-10" style={{ textAlign: 'center' }} />
                                    см
                                 </Checkbox>
                                 <Checkbox className="w-full ml-10" value={formData?.q38}>
                                    {text2}
                                 </Checkbox>
                                 <Checkbox className="w-full ml-10" value={formData?.q38}>
                                    {text3}
                                 </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th>
                           <th>
                              <Image src={PhysicalImg} alt="" width={200} />
                           </th>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="text-center mb-1" id="child">
                           Биеийн жингийн индекс (БЖИ)
                           <Input className="w-10" value={formData?.q39} />
                           кг/м2
                        </th>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="story mb-0">
                  <tbody>
                     <tr className="border-t-0" id="child">
                        <th>Жингийн дутагдал</th>
                        <th>Хэвийн жинтэй </th>
                        <th>Жингийн илүүдэл</th>
                        <th>Таргалалтын I зэрэг</th>
                        <th>Таргалалтын II зэрэг</th>
                        <th>Таргалалт ын III зэрэг</th>
                     </tr>
                     <tr className="text-center" id="child">
                        <th>{text4}</th>
                        <th>18-24.9кг/м2</th>
                        <th>25-29.9 кг/м2</th>
                        <th>30-34.9 кг/м2</th>
                        <th>35-39.9 кг/м2</th>
                        <th>{text5}</th>
                     </tr>
                     <tr>
                        <th colSpan={6} className="text-center p-0">
                           <p id="title"> Чихрийн шижингийн хяналт</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={6} className="py-0">
                           <p id="title">Өөрийн хяналт:</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={1} id="child">
                           {text6}
                        </th>
                        <th colSpan={5}>
                           <p className="ml-2 underline" id="child">{` ${formData?.q40}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={1} id="child">
                           {text7}
                        </th>
                        <th colSpan={5}>
                           <p className="ml-2 underline" id="child">{` ${formData?.q41}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={1} className="h-4"></th>
                        <th colSpan={5}></th>
                     </tr>
                     <tr>
                        <th colSpan={1} id="child">
                           Эмчийн хяналт:
                        </th>
                        <th colSpan={5}></th>
                     </tr>
                     <tr>
                        <th colSpan={6} className="text-center" id="title">
                           HbA1C................%
                        </th>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="story mb-0">
                  <tbody>
                     <tr className="border-t-0 text-center">
                        <th id="child">Эрүүл</th>
                        <th id="child">Сайн</th>
                        <th id="child">Дунд</th>
                        <th id="child">Муу</th>
                     </tr>
                     <tr className="text-center" id="child">
                        <th id="child">4-6%</th>
                        <th id="child">{text8}</th>
                        <th id="child">6.5-7.5%</th>
                        <th id="child">{text9}</th>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="story mb-0">
                  <tbody>
                     <tr className="border-t-0">
                        <th className="w-[50%]" id="title">
                           Anti- GAD/IA2
                           <Input className="w-40" value={formData?.q47} style={{ textAlign: 'center' }} />
                        </th>
                        <th id="child">
                           <p id="title"> Глюкозын ачаалалтай сорил:</p>
                           <Checkbox.Group value={formData?.q48}>
                              <Checkbox className="ml-2" value={'q48-1'}>
                                 Өлөн үеийн глюкоз
                                 <Input
                                    className="w-20 "
                                    value={formData?.['q48-1-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 ммоль/л
                              </Checkbox>
                              <Checkbox value={'q48-2'}>
                                 2 цагийн дараах глюкоз
                                 <Input
                                    className="w-20 mb-1"
                                    value={formData?.['q48-2-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 ммол
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="p-0">
                           <div id="title">
                              Чихрийн шижингийн хүндрэл Нүд:
                              <Input className="w-[500px] mb-1" value={formData?.q49} style={{ textAlign: 'center' }} />
                           </div>
                           <div id="title">
                              Зүрх
                              <Input className="w-[660px] mb-1" value={formData?.q50} style={{ textAlign: 'center' }} />
                           </div>
                        </th>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="story mb-0">
                  <tbody>
                     <tr className="border-t-0">
                        <th id="title" className="w-[200px] text-center">
                           Өөх тосны үзүүлэлтүүд
                        </th>
                        <th id="title" className="text-center">
                           Хариу
                        </th>
                        <th id="title" className="w-[200px] text-center">
                           Хэвийн хэмжээ
                        </th>
                     </tr>
                     <tr className="border-t-0 ">
                        <th id="child"> Холестерол</th>
                        <th></th>
                        <th id="child">{text10}</th>
                     </tr>
                     <tr className="border-t-0">
                        <th id="child">БНЛП</th>
                        <th></th>
                        <th id="child">{text11}</th>
                     </tr>
                     <tr className="border-t-0">
                        <th id="child">ИНЛП</th>
                        <th></th>
                        <th id="child">{text12}</th>
                     </tr>
                     <tr id="child" className="border-t-0">
                        <th></th>
                        <th></th>
                        <th id="child">{text13}</th>
                     </tr>
                     <tr className="border-t-0">
                        <th id="child">Триглицерид</th>
                        <th></th>
                        <th id="child">{text14}</th>
                     </tr>
                     <tr className="border-t-0">
                        <th id="child">ИНЛП-с бусад</th>
                        <th></th>
                        <th id="child">{text15}</th>
                     </tr>
                     <tr className="border-t-0">
                        <th id="child"> Холест/ИНЛП</th>
                        <th></th>
                        <th id="child">{text16}</th>
                     </tr>
                     <tr className="border-t-0">
                        <th colSpan={3} id="child">
                           {text17}
                        </th>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="story mb-0">
                  <tbody>
                     <tr>
                        <th>
                           <p id="title">Зүрх судасны вегетатив невропати:</p>
                        </th>
                     </tr>
                     <tr>
                        <th>
                           <p id="title">Бөөр:</p>
                        </th>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="story mb-0">
                  <tbody>
                     <tr className="border-t-0">
                        <th id="child">Үзүүлэлтүүд </th>
                        <th id="child">Хариу </th>
                        <th id="child">Хэвийн хэмжээ</th>
                        <th colSpan={3}>
                           <p id="title">Микроальбуминурийн шинжилгээ</p>
                        </th>
                     </tr>
                     <tr>
                        <th id="child">Сахар</th>
                        <th id="child"></th>
                        <th id="child"></th>
                        <th id="child" rowSpan={3} className="w-[200px]"></th>
                        <th id="child" className="w-[80px]">
                           {number}
                        </th>
                        <th id="child" className="w-[50px]"></th>
                     </tr>
                     <tr>
                        <th id="child">Кетон</th>
                        <th id="child"></th>
                        <th id="child"></th>
                        <th id="child">20-200</th>
                        <th id="child"></th>
                     </tr>
                     <tr>
                        <th id="child">Уураг</th>
                        <th id="child"></th>
                        <th id="child"></th>
                        <th id="child">200</th>
                        <th id="child"></th>
                     </tr>
                     <tr>
                        <th id="child">Цагаан эс</th>
                        <th id="child"></th>
                        <th id="child"></th>
                        <th id="child"> Креатинин</th>
                        <th id="child"></th>
                        <th id="child"></th>
                     </tr>
                     <tr>
                        <th id="child">Улаан эс </th>
                        <th id="child"></th>
                        <th id="child"></th>
                        <th id="child" rowSpan={2}>
                           АКХ <th>(Альбумин / Креатинины харьцаа)</th>
                        </th>
                        <th id="child"> {number1}</th>
                        <th id="child"></th>
                     </tr>
                     <tr>
                        <th id="child">Цилиндр</th>
                        <th id="child"></th>
                        <th id="child"></th>
                        <th id="child"> {number2}</th>
                        <th id="child"></th>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="story mb-0">
                  <tbody>
                     <tr className="border-t-0">
                        <th>
                           <th>Хөл:</th>
                           <Image src={FootImg} alt="" />
                        </th>
                        <th id="child">
                           <th className="w-full" id="child">
                              Арьсны өнгө:
                           </th>
                           <Checkbox.Group value={formData?.q60}>
                              <Checkbox value={'q60-1'}>Хэвийн</Checkbox>
                              <Checkbox value={'q60-2'}>Өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                           <th className="w-full" id="child">
                              Арьс хуурайшилт
                           </th>
                           <Checkbox.Group value={formData?.q61}>
                              <Checkbox value={'q61-1'}>Хэвийн</Checkbox>
                              <Checkbox value={'q61-2'}>Өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                           <th className="w-full" id="child">
                              Хумсны байдал:
                           </th>
                           <Checkbox.Group value={formData?.q62}>
                              <Checkbox value={'q62-1'}>Хэвийн</Checkbox>
                              <Checkbox value={'q62-2'}>Өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                           <th className="w-full" id="child">
                              Хөлийн хэлбэр
                           </th>
                           <Checkbox.Group value={formData?.q63}>
                              <Checkbox value={'q63-1'}>Хэвийн</Checkbox>
                              <Checkbox value={'q63-2'}>Өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child" className="w-[200px]">
                           Дараах өөрчлөлт илэрсэн эсэх
                           <Checkbox.Group value={formData?.q64}>
                              <Checkbox value={'q64-1'} className="w-full ml-2">
                                 Эвэр
                              </Checkbox>
                              <Checkbox value={'q64-2'} className="w-full">
                                 Үрэвсэл
                              </Checkbox>
                              <Checkbox value={'q64-3'} className="w-full">
                                 Зузаарал
                              </Checkbox>
                              <Checkbox value={'q64-4'} className="w-full">
                                 Шарх
                              </Checkbox>
                              <Checkbox value={'q64-5'} className="w-full">
                                 Хагарал
                              </Checkbox>
                              <Checkbox value={'q64-6'} className="w-full">
                                 Ампутаци
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[200px]" id="child">
                           Хөлийн судасны лугшилт:
                           <th id="child">a.pedis dorsalis:</th>
                           <Checkbox.Group value={formData?.q65}>
                              <Checkbox value={'q65-1'} className="ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q65-2'}>Сул</Checkbox>
                              <Checkbox value={'q65-3'}>Тэмтрэгдэхгүй</Checkbox>
                           </Checkbox.Group>
                           <th id="child">a.tibialis posterior:</th>
                           <Checkbox.Group value={formData?.q66}>
                              <Checkbox value={'q66-1'} className="ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q66-2'}>Сул</Checkbox>
                              <Checkbox value={'q66-3'}>Тэмтрэгдэхгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4} id="child">
                           Хөлийн мэдрэхүй: /тэмдэглэ/
                           <p className="ml-2 underline" id="child">{` ${formData?.q67}`}</p>
                        </th>
                     </tr>
                  </tbody>
               </Table>

               <Table bordered className="story mb-0">
                  <tbody>
                     <tr className="border-t-0">
                        <th id="child">
                           Доргионы
                           <Checkbox.Group value={formData?.q68}>
                              <Checkbox value={'q68-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q68-2'} className="w-full">
                                 Сул
                              </Checkbox>
                              <Checkbox value={'q68-3'} className="w-full">
                                 Тэмтрэгдэхгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           Хүрэлцэхүйн
                           <Checkbox.Group value={formData?.q69}>
                              <Checkbox value={'q69-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q69-2'} className="w-full">
                                 Сул
                              </Checkbox>
                              <Checkbox value={'q69-3'} className="w-full">
                                 Тэмтрэгдэхгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           Температурын
                           <Checkbox.Group value={formData?.q70}>
                              <Checkbox value={'q70-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q70-2'} className="w-full">
                                 Сул
                              </Checkbox>
                              <Checkbox value={'q70-3'} className="w-full">
                                 Тэмтрэгдэхгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           Өвдөлтийн
                           <Checkbox.Group value={formData?.q71}>
                              <Checkbox value={'q71-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q71-2'} className="w-full">
                                 Сул
                              </Checkbox>
                              <Checkbox value={'q71-3'} className="w-full">
                                 Тэмтрэгдэхгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           Монофиламент
                           <Checkbox.Group value={formData?.q72}>
                              <Checkbox value={'q72-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q72-2'} className="w-full">
                                 Сул
                              </Checkbox>
                              <Checkbox value={'q72-3'} className="w-full">
                                 Тэмтрэгдэхгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="story mb-0">
                  <tbody>
                     <tr className="border-t-0">
                        <th colSpan={5}>
                           <div className="flex gap-2 items-center">
                              {' '}
                              <p id="child">Шагай, Бугалганы индекс:</p>
                              <Checkbox.Group value={formData?.q73}>
                                 <Checkbox value={'q73-1'}>Баруун</Checkbox>
                                 <Checkbox value={'q73-2'}>Зүүн</Checkbox>
                              </Checkbox.Group>
                           </div>
                           <div className="flex gap-2 items-center">
                              <p id="child">Борвины рефлекс:</p>
                              <Checkbox.Group value={formData?.q74}>
                                 <Checkbox value={'q74-1'}>Баруун</Checkbox>
                                 <Checkbox value={'q74-2'}>Зүүн</Checkbox>
                              </Checkbox.Group>
                           </div>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3}>
                           <p className="text-center text-[14px]"> КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} className="h-14">
                           <p id="title"> Үндсэн онош</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} className="h-20">
                           <p id="title"> Дагалдах онош</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} className="h-24">
                           <p id="title"> Хүндрэл</p>
                        </th>
                     </tr>
                     <tr>
                        <th className="h-40 w-[200px]">
                           <p id="title">Ялган оношлох эмгэгүүд ба хам шинжүүд</p>
                        </th>
                        <th>
                           {' '}
                           <p id="title">Хийгдэх шинжилгээ</p>
                        </th>
                        <th>
                           <p id="title">Яаралтай хийгдэх эмчилгээ</p>
                        </th>
                     </tr>
                     <tr>
                        <th className=" border-r-0">
                           <p className="mt-2 " id="title">
                              Эмчийн нэр:{' '}
                           </p>
                        </th>
                        <th className="border-l-0">
                           <p className="mt-2" id="title">
                              Гарын үсэг
                           </p>
                        </th>
                        <th>
                           <div className="flex justify-center gap-4" id="title">
                              <p>он </p>
                              <p>сар </p>
                              <p>өдөр</p>
                           </div>
                           <div className="gap-8 flex justify-center">
                              <p>/</p>
                              <p>/</p>
                           </div>
                        </th>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Dotood;
export const text = ['(эр<25%; эм<30%)'];
export const text2 = ['(Aзи - эр<94см; эм<80см)'];
export const text3 = ['(Европ - эр<102см; эм<88см)'];
export const text4 = ['<18кг/м2 '];
export const text5 = ['40кг/м2<'];
export const text6 = ['Өлөн үеийн глюкоз(<6.0 ммоль/л)'];
export const text7 = ['Хоолны дараах глюкоз(<8.0 ммоль/л)'];
export const text8 = ['<6.5%'];
export const text9 = ['7.5%<'];
export const text10 = ['< 4ммоль/л'];
export const text11 = ['< 2ммоль/л'];
export const text12 = ['эр<1.0ммоль/л'];
export const text13 = ['эм<1.2ммоль/л'];
export const text14 = ['< 1.7ммоль/л'];
export const text15 = ['< 3.3ммоль/л'];
export const text16 = ['< 5 ммоль/л'];
export const text17 = ['CRP.......................<5.0мг/л'];
export const number = ['< 20'];
export const number1 = ['< 2.5/эр/'];
export const number2 = ['< 3.5/эм/'];
