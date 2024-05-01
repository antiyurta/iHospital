import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input } from 'antd';
const CT_1_Hool = (props) => {
   const {
      data: { formData }
   } = props;
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center mb-2">ХООЛ БОЛОВСРУУЛАХ ЭРХТНИЙ ЭМЧИЙН ҮЗЛЭГ</th>
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
                              <Checkbox className="ml-2" value={'q2-1'}>
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
                              <Checkbox className="ml-2" value={'q5-1'}>
                                 Хэржигнүүртэй
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Уушги цулцангийн</Checkbox>
                              <Checkbox value={'q5-3'}>
                                 Амьсгал сулавтар
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.['q5-3-1']} className="inline">
                                          <Checkbox className="test" value={'q5-3-1-1'}>
                                             <span className="text-[11px]">Баруун,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q5-3-1-2'}>
                                             <span className="text-[11px]">зүүн,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q5-3-1-3'}>
                                             <span className="text-[11px]">2 талдаа,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </Checkbox>
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
                              <Checkbox className="ml-2" value={'q8-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q8-2'}>
                                 Томорсон{' '}
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
                              <Checkbox value={'q13-3'} className="">
                                 Эмзэглэлтэй (байрлал
                                 <Input
                                    className="amaraInput w-8"
                                    value={formData?.['q13-3-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 )
                              </Checkbox>
                              <Checkbox value={'q13-4'}>Ердийн</Checkbox>
                              <Checkbox value={'q13-5'}>Зөөлөн гялтан цочрол үгүй</Checkbox>
                              <Checkbox value={'q13-6'}> Гялтан цочролын шинж илэрсэн</Checkbox>
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
                           ХООЛ БОЛОВСРУУЛАХ ТОГТОЛЦООНЫ ҮЗЛЭГ
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4} className="h-12">
                           Зовиур:
                           <p className="ml-2 underline">{` Зовиур: ${formData?.q18}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4} className="h-12">
                           Өвчний эхлэл явц:
                           <p className="ml-2 underline">{`: ${formData?.q19}`}</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Эрсдэлт хүчин зүйлс:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <Checkbox.Group value={formData?.q20}>
                              <Checkbox className="w-full ml-2" value={'q20-1'}>
                                 Архи
                              </Checkbox>
                              <Checkbox className="w-full " value={'q20-2'}>
                                 Тамхи (хайрцаг\жил
                                 <Input value={formData?.['q20-2-1']} />)
                              </Checkbox>
                              <Checkbox value={'q20-3'} className="w-full">
                                 Бусад хорт зуршил
                              </Checkbox>
                              <Checkbox value={'q20-4'}>Ажлын таагүй нөхцөл</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q20}>
                              <Checkbox className="w-full ml-2" value={'q20-5'}>
                                 Стресс
                              </Checkbox>
                              <Checkbox className="w-full" value={'q20-6'}>
                                 Харшил
                              </Checkbox>
                              <Checkbox className="w-full" value={'q20-7'}>
                                 Удамшил
                              </Checkbox>
                              <Checkbox className="w-full" value={'q20-8'}>
                                 ХБЭ-ны эмгэгээр өвдөж байсан{' '}
                              </Checkbox>
                              <Checkbox value={'q20-9'}>Хэвлийд мэс засал хийлгэсэн</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q20}>
                              <Checkbox className="ml-2" value={'q20-10'}>
                                 Хавсарсан хүнд эмгэг{' '}
                              </Checkbox>
                              <Checkbox value={'q20-11'}>Шарласан</Checkbox>
                              <Checkbox className="w-full" value={'q20-12'}>
                                 Хоолны дэглэм
                              </Checkbox>
                              <Checkbox value={'q20-13'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4} className="h-6">
                           Хийсэн эмчилгээ:
                           <p className="ml-2 underline">{`: ${formData?.q21}`}</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Харж ажиглах: Хэл өнгөртэй эсэх:</th>
                           <Checkbox.Group value={formData?.q22}>
                              <Checkbox className=" ml-2" value={'q22-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q22-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                           <th>Арьс, салст–чийглэг</th>
                           <Checkbox.Group value={formData?.q23}>
                              <Checkbox className="ml-2" value={'q23-1'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'q23-2'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                           <th>
                              Өнгө
                              <Input
                                 className="amaraInput w-20 mb-2"
                                 value={formData?.q24}
                                 style={{ textAlign: 'center' }}
                              />
                           </th>
                        </th>
                        <th>
                           <th> Хэвлийн – хэм</th>
                           <Checkbox.Group value={formData?.q25}>
                              <Checkbox className="w-full ml-2" value={'q25-1'}>
                                 Жигд
                              </Checkbox>
                              <Checkbox className="w-full ml-2" value={'q25-2'}>
                                 Жигд бус
                              </Checkbox>
                           </Checkbox.Group>
                           <th>
                              Хэлбэр
                              <Input
                                 className="amaraInput w-14"
                                 value={formData?.['q25-2-1']}
                                 style={{ textAlign: 'center' }}
                              />
                           </th>
                        </th>
                        <th>
                           <th>
                              <th>Тэмтрэлт:</th>
                              Өнгөц тэмтрэлт – хэвлий эмзэглэлтэй эсэх
                              <Checkbox.Group value={formData?.q26}>
                                 <Checkbox className="ml-2 w-full" value={'q26-1'}>
                                    Эмзэглэлгүй
                                 </Checkbox>
                                 <Checkbox value={'q26-2'}>Эмзэглэлтэй</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 Булчингийн чангарал байгаа эсэх:
                                 <Checkbox.Group value={formData?.q27}>
                                    <Checkbox className="ml-2 " value={'q27-1'}>
                                       Тийм
                                    </Checkbox>
                                    <Checkbox value={'q27-2'}>Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>

               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>
                              <th>Тахир гэдэс – байрлал</th>
                              <Checkbox.Group value={formData?.q28}>
                                 <Checkbox className="ml-2" value={'q28-1'}>
                                    Эмзэглэлгүй
                                 </Checkbox>
                                 <Checkbox value={'q28-1'}>Эмзэглэлтэй</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th> Тогтоц</th>
                                 <Checkbox.Group value={formData?.q29}>
                                    <Checkbox value={'q29-1'} className="ml-2 ">
                                       Хатуу
                                    </Checkbox>
                                    <Checkbox value={'q29-2'}>Зөөлөн</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                        <th>
                           <th>
                              <th> Тогтоц</th>
                              <Checkbox.Group value={formData?.q32}>
                                 <Checkbox value={'q32-1'} className="ml-2 ">
                                    Хатуу
                                 </Checkbox>
                                 <Checkbox value={'q32-2'}>Зөөлөн</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th> Хөдөлгөөнтэй</th>
                                 <Checkbox.Group value={formData?.q33}>
                                    <Checkbox className="ml-2 " value={'q33-1'}>
                                       Тийм
                                    </Checkbox>
                                    <Checkbox value={'q33-2'}>Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                        <th>
                           <th>
                              <th> Хөдөлгөөнтэй</th>
                              <Checkbox.Group value={formData?.q36}>
                                 <Checkbox className="ml-2 " value={'q36-1'}>
                                    Тийм
                                 </Checkbox>
                                 <Checkbox value={'q36-2'}>Үгүй</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th> Цутгалан гэдэс - байрлал</th>
                                 <Checkbox.Group value={formData?.q37}>
                                    <Checkbox className="ml-2 " value={'q37-1'}>
                                       Эмзэглэлгүй
                                    </Checkbox>
                                    <Checkbox value={'q37-2'}>Эмзэглэлтэй</Checkbox>
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
                     <tr>
                        <th>
                           <th>
                              <th> Хөдөлгөөнтэй</th>
                              <Checkbox.Group value={formData?.q30}>
                                 <Checkbox className="ml-2 " value={'q30-1'}>
                                    Тийм
                                 </Checkbox>
                                 <Checkbox value={'q30-2'}>Үгүй</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th> Өгсөх болон уруудах гэдэс - байрлал </th>
                                 <Checkbox.Group value={formData?.q31}>
                                    <Checkbox className="ml-2 " value={'q31-1'}>
                                       Эмзэглэлгүй
                                    </Checkbox>
                                    <Checkbox value={'q31-2'}>Эмзэглэлтэй</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                        <th>
                           <th>
                              <th>Хөндлөн гэдэс - байрлал</th>
                              <Checkbox.Group value={formData?.q34}>
                                 <Checkbox className="ml-2 " value={'q34-1'}>
                                    Эмзэглэлгүй
                                 </Checkbox>
                                 <Checkbox value={'q34-2'}>Эмзэглэлтэй</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th> Тогтоц</th>
                                 <Checkbox.Group value={formData?.q35}>
                                    <Checkbox className="ml-2 " value={'q35-1'}>
                                       Хатуу
                                    </Checkbox>
                                    <Checkbox value={'q35-2'}>Зөөлөн</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                        <th>
                           <th>
                              <th> Тогтоц</th>
                              <Checkbox.Group value={formData?.q38}>
                                 <Checkbox className="ml-2" value={'q38-1'}>
                                    Хатуу
                                 </Checkbox>
                                 <Checkbox value={'q38-2'}>Зөөлөн</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th> Хөдөлгөөнтэй</th>
                                 <Checkbox.Group value={formData?.q39}>
                                    <Checkbox className="ml-2 " value={'q39-1'}>
                                       Тийм
                                    </Checkbox>
                                    <Checkbox value={'q39-2'}>Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[30%]">
                           <th>
                              Тогшилт
                              <th> Хэвлийн хэнгэрэгэн чимээ:</th>
                              <Checkbox.Group value={formData?.q40}>
                                 <Checkbox className="ml-2 " value={'q40-1'}>
                                    Хэвийн
                                 </Checkbox>
                                 <Checkbox value={'q40-2'}>Ихэссэн</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th>
                           <th>
                              <th>Ихэссэн хэсэгт тогшилтын дуу</th>
                              <Checkbox.Group value={formData?.['q40-2-1']}>
                                 <Checkbox className="ml-2 w-full " value={'q40-2-1-1'}>
                                    Бүдгэрсэн
                                 </Checkbox>
                                 <Checkbox className="ml-2 w-full " value={'q40-2-1-2'}>
                                    Тодорсон
                                 </Checkbox>
                                 <Checkbox value={'q40-2-1-3'}>Дүлий болсон</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th className="w-[35%]">
                           Чагналт
                           <th> Гэдэсний гүрвэлзэх хөдөлгөөн:</th>
                           <Checkbox.Group className="flex flex-col" value={formData?.q41}>
                              <th>
                                 <Checkbox className="ml-2 " value={'q41-1'}>
                                    Хэвийн
                                 </Checkbox>
                                 <Checkbox value={'q41-2'}>Ихэссэн</Checkbox>
                                 <Checkbox value={'q41-3'}>Дүлий</Checkbox>
                              </th>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="h-12">
                        <th colSpan={4}>
                           <p className="ml-2 underline">{`Хэвлийн рентген шинжилгээ КТГ, хэт авиан шинжилгээ: ${formData?.q42}`}</p>
                        </th>
                     </tr>
                     <tr className="h-12">
                        <th colSpan={4}>
                           <p className="ml-2 underline">{`Дурангийн шинжилгээ: ${formData?.q42}`}</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[30%]">
                           <th>
                              <th>Улаан хоолой</th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 ">
                                    Салстын өнгө
                                    <Input
                                       className="amaraInput w-[100px]"
                                       value={formData?.q44}
                                       style={{ textAlign: 'center' }}
                                    />
                                 </Checkbox>
                                 <Checkbox>
                                    Хаван
                                    <Input
                                       className="amaraInput w-26"
                                       value={formData?.q45}
                                       style={{ textAlign: 'center' }}
                                    />
                                 </Checkbox>
                                 <Checkbox>
                                    Z шугам
                                    <Input
                                       className="amaraInput w-26 mb-1"
                                       value={formData?.q46}
                                       style={{ textAlign: 'center' }}
                                    />
                                 </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th className="w-[30%]">
                           <th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 ">
                                    Хөдөлгөөн{' '}
                                    <Input
                                       className="amaraInput w-[120px]"
                                       value={formData?.q47}
                                       style={{ textAlign: 'center' }}
                                    />
                                 </Checkbox>
                                 <Checkbox>
                                    Шалбархай – хэмжээ
                                    <Input
                                       className="amaraInput w-16"
                                       value={formData?.q48}
                                       style={{ textAlign: 'center' }}
                                    />
                                 </Checkbox>
                                 <Checkbox>
                                    Тоо{' '}
                                    <Input
                                       className="amaraInput w-40 mb-1"
                                       value={formData?.q49}
                                       style={{ textAlign: 'center' }}
                                    />
                                 </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th className="w-[30%]">
                           <th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 ">
                                    Байрлал
                                    <Input
                                       className="amaraInput w-26"
                                       value={formData?.q50}
                                       style={{ textAlign: 'center' }}
                                    />
                                 </Checkbox>
                                 <Checkbox>
                                    Хэлбэр
                                    <Input
                                       className="amaraInput w-26"
                                       value={formData?.q51}
                                       style={{ textAlign: 'center' }}
                                    />
                                 </Checkbox>
                                 <Checkbox>
                                    Өнгөр
                                    <Input
                                       className="amaraInput w-26 mb-1"
                                       value={formData?.q52}
                                       style={{ textAlign: 'center' }}
                                    />
                                 </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[30%]">
                           <th>
                              <th>Ходоод:</th>
                              <div className="flex">
                                 <div> Амсар - салстын өнгө</div>
                                 <Input
                                    className="amaraInput w-[100px] mb-1"
                                    value={formData?.q53}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Хаван </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q54}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Хөдөлгөөн </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q55}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div> Шалбархай – хэмжээ </div>
                                 <Input
                                    className="amaraInput w-[110px] mb-1"
                                    value={formData?.q56}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Хэлбэр </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q57}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Өнгөр </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q58}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Тоо </div>
                                 <Input
                                    className="amaraInput w-[30px] mb-1"
                                    value={formData?.q59}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Байрлал </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q60}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                           </th>
                        </th>

                        <th className="w-[30%]">
                           <th>
                              <div className="flex">
                                 <div> Их бие - салстын өнгө</div>
                                 <Input
                                    className="amaraInput w-[100px]  mb-1"
                                    value={formData?.q61}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Хаван </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q62}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Хөдөлгөөн </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q63}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div> Шалбархай – хэмжээ </div>
                                 <Input
                                    className="amaraInput w-[110px] mb-1"
                                    value={formData?.q64}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Хэлбэр </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q65}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Өнгөр </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q66}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Тоо </div>
                                 <Input
                                    className="amaraInput w-[30px] mb-1"
                                    value={formData?.q67}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Байрлал </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q68}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                           </th>
                        </th>
                        <th className="w-[30%]">
                           <th>
                              <div className="flex">
                                 <div> Антрум - салстын өнгө </div>
                                 <Input
                                    className="amaraInput w-[100px] mb-1"
                                    value={formData?.q69}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Хаван </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q70}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Хөдөлгөөн </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q71}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div> Шалбархай – хэмжээ </div>
                                 <Input
                                    className="amaraInput w-[110px] mb-1"
                                    value={formData?.q72}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Хэлбэр </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q73}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Өнгөр </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q74}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Тоо </div>
                                 <Input
                                    className="amaraInput w-[30px] mb-1"
                                    value={formData?.q75}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Байрлал </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q76}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                           </th>
                        </th>
                     </tr>
                     <tr className="border-t-0 ">
                        <th className="w-[30%] border-r-0">
                           <th>
                              <th>Дээд гэдэс:</th>
                              <div>
                                 <div>Салстын өнгө</div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q77}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Хаван </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q78}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Хөдөлгөөн </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q79}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                           </th>
                        </th>
                        <th className="w-[30%] border-x-0">
                           <div className="flex">
                              <div> Шалбархай – хэмжээ </div>
                              <Input
                                 className="amaraInput w-[110px] mb-1"
                                 value={formData?.q80}
                                 style={{ textAlign: 'center' }}
                              />
                           </div>
                           <div className="flex">
                              <div>Хэлбэр </div>
                              <Input
                                 className="amaraInput w-full mb-1"
                                 value={formData?.q81}
                                 style={{ textAlign: 'center' }}
                              />
                           </div>
                           <div className="flex">
                              <div>Өнгөр </div>
                              <Input
                                 className="amaraInput w-full mb-1"
                                 value={formData?.q82}
                                 style={{ textAlign: 'center' }}
                              />
                           </div>
                           <div className="flex">
                              <div>Тоо </div>
                              <Input
                                 className="amaraInput w-[30px] mb-1"
                                 value={formData?.q83}
                                 style={{ textAlign: 'center' }}
                              />
                           </div>
                        </th>
                        <th className="w-[30%] border-l-0">
                           <th>
                              <div className="flex">
                                 <div>Байрлал </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q84}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Фатер хөхлөг </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q85}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                              <div className="flex">
                                 <div>Цөс ялгаралт </div>
                                 <Input
                                    className="amaraInput w-full mb-1"
                                    value={formData?.q86}
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                           </th>
                        </th>
                     </tr>
                     <tr className="h-10">
                        <th colSpan={4}>
                           Нр тодорхойлох:
                           <Input value={formData?.q87} />
                        </th>
                     </tr>
                     <tr className="h-10">
                        <th colSpan={4}>
                           Рн-метрийн шинжилгээ: <Input value={formData?.q88} />
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           <div>
                              <div>
                                 Лабораторийн шинжилгээ: <Input value={formData?.q89} />
                              </div>
                              <div className="mt-8">
                                 Цитологи\гистологийн шинжилгээ: <Input value={formData?.q90} />
                              </div>
                              <div className="mt-8">
                                 Бусад шинжилгээ: <Input value={formData?.q91} />
                              </div>
                              <div className="my-8">
                                 Эмнэлзүйн онош: <Input value={formData?.q92} />
                              </div>
                           </div>
                        </th>
                     </tr>
                     <tr className="h-10">
                        <th colSpan={3}>
                           <p className="ml-2 underline">{`Эмчилгээ\зөвлөгөө: ${formData?.q93}`}</p>
                        </th>
                     </tr>
                     <tr className="h-4">
                        <th colSpan={4}>
                           Зөвлөгөө өгсөн эмч: <Input value={formData?.q94} />
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Hool;
