import React from 'react';
import { Checkbox, Input } from 'antd';
import { Table } from 'react-bootstrap';
import { TextWithUnderline } from './utils';
const CT_1_Setgets = (props) => {
   const {
      data: { formData }
   } = props;
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center">СЭТГЭЦИЙН ЭМЧИЙН ҮЗЛЭГ</th>
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
                                 {/* <Input
                                    className=" w-10"
                                    value={formData?.['q3-2-1']}
                                    style={{ textAlign: 'center' }}
                                 /> */}
                                 <TextWithUnderline>{formData?.['q3-2-1'] || ''}</TextWithUnderline>

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
                        <th id="child" className="w-[220px]">
                           {' '}
                           Амьсгал 1 минутанд
                           <Input className="w-8" style={{ textAlign: 'center' }} value={formData?.q4} />
                           удаа
                        </th>
                        <th colSpan={3}>
                           Чагналтаар:
                           <Checkbox.Group value={formData?.q5}>
                              <Checkbox className="ml-2" value={'q5-3'}>
                                 Хэржигнүүртэй
                              </Checkbox>
                              <Checkbox value={'q5-1'}>Уушги цулцангийн</Checkbox>
                              <Checkbox value={'q5-4'}>
                                 Амьсгал сулавтар
                                 <p>
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
                              <Checkbox value={'q5-2'}>Гуурсан хоолойн</Checkbox>
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
                        <th id="child">
                           <div>
                              <p>
                                 {' '}
                                 Судасны цохилт 1 минутанд
                                 <Input className=" w-10" value={formData?.q6} style={{ textAlign: 'center' }} />
                                 удаа
                              </p>
                              <p>
                                 Хүчдэл дүүрэлт
                                 <Input className=" w-10" value={formData?.q7} style={{ textAlign: 'center' }} />
                              </p>
                           </div>
                        </th>
                        <th>
                           <p>Тогшилтоор:</p>
                           <p id="child">Зүрхний хил</p>
                           <Checkbox.Group value={formData?.q8}>
                              <Checkbox className="ml-2" value={'q8-1'}>
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
                           <p>Чагналтаар::</p>
                           <p id="child">Зүрхний авиа</p>
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
                              <Checkbox value={'q12-1'} className="ml-2">
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
                                 {/* <Input
                                    className=" w-8"
                                    value={formData?.['q13-3-1']}
                                    style={{ textAlign: 'center' }}
                                 /> */}
                                 <TextWithUnderline>{formData?.['q13-3-1'] || ''}</TextWithUnderline>
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
                                 <p className="flex items-center gap-2">
                                    <p>Буурсан</p>
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
                        <th id="child">
                           <p className="w-full" id="child">
                              Бусад:
                              <Input className=" w-[650px] ml-2" value={formData?.q16} />
                           </p>
                           <p>
                              Сэтгэцийн байдал:
                              <Input className=" w-[600px] mb-1 ml-2" value={formData?.q17} />
                           </p>
                        </th>
                     </tr>
                     <tr>
                        <th>
                           <p className="flex justify-center">СЭТГЭЦИЙН ҮЗЛЭГ </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 h-8">
                        <th>
                           <p className="ml-4 mt-2">
                              Танин мэдэхүй, оюун, сэтгэхүйн хүрээ (сэрэхүй, ой, оюун, сэтгэхүйн өөрчлөлтүүд)
                              <p className="ml-2 underline">{`: ${formData?.q18}`}</p>
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               {data.map((item) => (
                  <Table key={item.id} bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0 h-12">
                           <th>
                              <p className="mt-5">
                                 <Input className=" w-full " style={{ textAlign: 'center' }} />
                              </p>
                           </th>
                        </tr>
                     </thead>
                  </Table>
               ))}
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className=" h-12">
                        <th>
                           <p className="ml-4 mt-4">
                              Сэтгэл хөдлөлийн хүрээ (сэтгэл хөдлөлийн байдал, сэтгэл гутрал, сэтгэл хөөрөл, сэтгэлийн
                              тохироо алдагдах)
                              <p className="ml-2 underline">{`: ${formData?.q19}`}</p>
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className=" border-t-0 h-12">
                        <th>
                           <p className="mt-5">
                              <Input className=" w-full " style={{ textAlign: 'center' }} />
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               {data1.map((item) => (
                  <Table key={item.id} bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0 h-12">
                           <th>
                              <p className="mt-5">
                                 <Input className=" w-full " style={{ textAlign: 'center' }} />
                              </p>
                           </th>
                        </tr>
                     </thead>
                  </Table>
               ))}
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 h-12">
                        <th>
                           <p className="ml-4 mt-4">
                              Зориг эрмэлзлэлийн хүрээ (сэтгэл зориггүйдэл, катотоник шинжүүд, гэнэтийн үйлдэл, дон,
                              дурууд)
                              <p className="ml-2 underline">{`: ${formData?.q20}`}</p>
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>

               {data2.map((item) => (
                  <Table key={item.id} bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0 h-12">
                           <th>
                              <p className="mt-5">
                                 <Input className=" w-full " style={{ textAlign: 'center' }} />
                              </p>
                           </th>
                        </tr>
                     </thead>
                  </Table>
               ))}
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className=" h-12">
                        <th>
                           <p className="mt-5">
                              <Input className=" w-full " style={{ textAlign: 'center' }} />
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               {data3.map((item) => (
                  <Table key={item.id} bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0 h-12">
                           <th>
                              <p className="mt-5">
                                 <Input className=" w-full " style={{ textAlign: 'center' }} />
                              </p>
                           </th>
                        </tr>
                     </thead>
                  </Table>
               ))}
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 h-12">
                        <th>
                           <p className="ml-4 mt-4">
                              Ухамсарт ухааны хүрээ (ухаан дэмийрэн, зүүдчилэн, бүрийтэн, будангуйран,нойрмоглон
                              балартах)
                              <p className="ml-2 ">{`: ${formData?.q21}`}</p>
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               {data4.map((item) => (
                  <Table key={item.id} bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0 h-12">
                           <th>
                              <p className="mt-5">
                                 <Input className="w-full " style={{ textAlign: 'center' }} />
                              </p>
                           </th>
                        </tr>
                     </thead>
                  </Table>
               ))}
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 h-20">
                        <th>
                           <p className="flex items-center">
                              <p>Хам шинжийн онош</p>
                              <p className="ml-2 " id="child">{`: ${formData?.q22}`}</p>
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 h-24">
                        <th>
                           <p className="flex items-center">
                              <p>Эмчилгээ сувилгааны заалт</p>
                              <p className="ml-2 " id="child">{`: ${formData?.q23}`}</p>
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Setgets;
const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }];
const data2 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }];
const data3 = [{ id: 1 }, { id: 2 }];
const data4 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }];
const data1 = [
   { id: 1 },
   { id: 2 },
   { id: 3 },
   { id: 4 },
   { id: 5 },
   { id: 6 },
   { id: 7 },
   { id: 8 },
   { id: 9 },
   { id: 10 },
   { id: 11 }
];
