import { Checkbox, Input, Image } from 'antd';
import { Table } from 'react-bootstrap';
import EvaluateImg from '../../../../assets/images/evaluate.png';
import React from 'react';

const CT_1_Sergeeh = (props) => {
   const {
      data: { formData }
   } = props;
   console.log('Form', formData);
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center">СЭРГЭЭН ЗАСАХЫН ЭМЧИЙН ҮЗЛЭГ</th>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr>
                        <th>
                           <th className="flex items-center gap-4">
                              <p id="child"> Харилцах бэрхшээлтэй эсэх:</p>{' '}
                              <Checkbox.Group value={formData?.q1}>
                                 <Checkbox value={'q1-1'}>Тийм</Checkbox>
                                 <Checkbox value={'q1-2'}>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="flex items-center gap-4">
                              <p id="child">Залгих чадвар бэрхшээлтэй эсэх:</p>
                              <Checkbox.Group value={formData?.q2}>
                                 <Checkbox value={'q2-1'}>Тийм</Checkbox>
                                 <Checkbox value={'q2-2'}>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="w-full ml-2" id="child">
                              (Хэрвээ тийм бол хэл засалч бөглөнө )
                           </th>
                           <th className="flex items-center gap-4" id="child">
                              Танин мэдэхүйн үйл ажиллагаа өөрчлөлттэй эсэх:
                              <Checkbox.Group value={formData?.q3}>
                                 <Checkbox value={'q3-1'}>Тийм</Checkbox>
                                 <Checkbox value={'q3-2'}>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="w-full ml-2" id="child">
                              (Хэрвээ тийм бол хөдөлмөр засалч бөглөнө)
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="text-center border-t-0">
                        <th className="w-[30%]">Биеийн ерөнхий байдал</th>
                        <th className="w-[30%]">Ухаан санаа</th>
                        <th colSpan={4}>Арьс салст</th>
                     </tr>
                  </thead>
                  <thead>
                     <tr>
                        <th>
                           <Checkbox.Group value={formData?.q4}>
                              <Checkbox className="ml-2" value={'q4-1'}>
                                 Дунд
                              </Checkbox>
                              <Checkbox value={'q4-2'}>Хүндэвтэр</Checkbox>
                              <Checkbox value={'q4-3'}>Хүнд</Checkbox>
                              <Checkbox value={'q4-4'}>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q5}>
                              <Checkbox className="ml-2" value={'q5-1'}>
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Бүдгэрсэн</Checkbox>
                              <Checkbox value={'q5-3'}>Ухаангүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={4}>
                           <Checkbox.Group value={formData?.q6}>
                              <Checkbox className="ml-2" value={'q6-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q6-2'}>
                                 Хэвийн бус
                                 <Input
                                    className="amaraInput w-10 mb-2"
                                    value={formData?.['q6-2-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                           </Checkbox.Group>
                           <th className="flex items-center">
                              <th id="child">Холголт цооролт: </th>
                              <Checkbox.Group value={formData?.q7}>
                                 <Checkbox className="ml-2" value={'q7-1'}>
                                    Тийм
                                 </Checkbox>
                                 <Checkbox value={'q7-2'}>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="flex items-center">
                              <th id="child"> Тууралт: </th>
                              <Checkbox.Group value={formData?.q8}>
                                 <Checkbox className="ml-2" value={'q8-1'}>
                                    Тийм
                                 </Checkbox>
                                 <Checkbox value={'q8-2'}>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="flex items-center">
                              <th id="child">Хаван:</th>
                              <Checkbox.Group value={formData?.q9}>
                                 <Checkbox className="ml-2" value={'q9-1'}>
                                    Тийм
                                    <Input
                                       className="amaraInput w-20"
                                       value={formData?.['q9-1-1']}
                                       style={{ textAlign: 'center' }}
                                    />
                                 </Checkbox>
                                 <Checkbox value={'q9-2'}>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3}>Амьсгалын эрхтэн тогтолцоо</th>
                     </tr>
                     <tr>
                        <th>
                           <th id="child">
                              Амьсгал 1 минутанд
                              <Input
                                 className="amaraInput w-10"
                                 value={formData?.['q10']}
                                 style={{ textAlign: 'center' }}
                              />
                              удаа
                              <th id="child">
                                 Амьсгалд туслах булчин оролцож байгаа эсэх:
                                 <Checkbox.Group className="w-full" value={formData?.q11}>
                                    <Checkbox value={'q11-1'}>Тийм</Checkbox>
                                    <Checkbox value={'q11-2'}> Үгүй</Checkbox>
                                 </Checkbox.Group>
                                 Цээжний хэлбэр:
                                 <Checkbox.Group className="w-full" value={formData?.q12}>
                                    <Checkbox value={'q12-1'}>зөв</Checkbox>
                                    <Checkbox value={'q12-2'}> эмгэг</Checkbox>
                                 </Checkbox.Group>
                                 Амьсгалын хэлбэр:
                                 <Checkbox.Group className="w-full" value={formData?.q13}>
                                    <Checkbox value={'q13-1'}>Цээжний</Checkbox>
                                    <Checkbox value={'q13-2'}> хэвлийн</Checkbox>
                                    <Checkbox value={'q13-3'}> холимог</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                        <th colSpan={2}>
                           <th>
                              <th id="child">Цээжний 2 тал амьсгалд жигд оролцох байдал:</th>
                              <Checkbox.Group value={formData?.q14} className="flex items-center">
                                 <Checkbox className="ml-5" value={'q14-1'}>
                                    жигд
                                 </Checkbox>
                                 <Checkbox value={'q14-2'}>хоцорно </Checkbox>
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.['q14-2']} className="inline">
                                          <Checkbox className="test" value={'q14-2-1'}>
                                             <span className="text-[11px]">Баруун,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q14-2-2'}>
                                             <span className="text-[11px]">зүүн,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </Checkbox.Group>
                              <th>
                                 <th>Чагналтаар:</th>
                                 <Checkbox.Group value={formData?.q15}>
                                    <Checkbox className="ml-2 mb-0" value={'q15-1'}>
                                       Цулцангийн
                                    </Checkbox>
                                    <Checkbox value={'q15-5'}>
                                       Хэржигнүүртэй
                                       <Input
                                          className="amaraInput w-20 mb-2"
                                          value={formData?.['q15-5-1']}
                                          style={{ textAlign: 'center' }}
                                       />
                                    </Checkbox>
                                 </Checkbox.Group>{' '}
                                 <Checkbox.Group value={formData?.q15}>
                                    <Checkbox className="ml-2" value={'q15-2'}>
                                       Гуурсан хоолойн
                                    </Checkbox>
                                    <Checkbox value={'q15-6'}>
                                       Амьсгал сулавтар
                                       <p>
                                          <span className="text-[11px]">
                                             (
                                             <Checkbox.Group value={formData?.['q15-6-1']} className="inline">
                                                <Checkbox className="test" value={'q15-6-1-1'}>
                                                   <span className="text-[11px]">Баруун,</span>
                                                </Checkbox>
                                                &nbsp;
                                                <Checkbox className="ml-0 test" value={'q15-6-1-2'}>
                                                   <span className="text-[11px]">зүүн,</span>
                                                </Checkbox>
                                                &nbsp;
                                             </Checkbox.Group>
                                             )
                                          </span>
                                       </p>
                                    </Checkbox>
                                    <Checkbox className="w-full" value={'q15-3'}>
                                       Ширүүн
                                    </Checkbox>
                                    <Checkbox value={'q15-4'}>Хэржигнүүргүй</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           <p>Цусны эргэлтийн тогтолцоо</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <p id="child">
                              Судасны цохилт 1 минутанд
                              <Input
                                 className="amaraInput w-10"
                                 value={formData?.q16}
                                 style={{ textAlign: 'center' }}
                              />
                              удаа
                           </p>
                           <p id="child">
                              Хүчдэл дүүрэлт
                              <Input
                                 className="amaraInput w-20"
                                 value={formData?.q17}
                                 style={{ textAlign: 'center' }}
                              />
                           </p>
                        </th>
                        <th>
                           <p>Тогшилтоор:</p>
                           <p id="child">Зүрхний хил</p>
                           <Checkbox.Group value={formData?.q18}>
                              <Checkbox className="ml-2" value={'q18-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q18-2'}>
                                 Томорсон
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.['q18-2-1']} className="inline">
                                          <Checkbox className="test" value={'q18-2-1-1'}>
                                             <span className="text-[11px]">Баруун,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q18-2-1-2'}>
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
                           <Checkbox.Group value={formData?.q19}>
                              <Checkbox className="ml-2" value={'q19-1'}>
                                 {' '}
                                 Тод
                              </Checkbox>
                              <Checkbox value={'q19-2'}>Бүдэг</Checkbox>
                              <Checkbox value={'q19-3'}>Бүдгэвтэр</Checkbox>
                              <Checkbox value={'q19-4'}>Хэм жигд</Checkbox>
                              <Checkbox value={'q19-5'}>Жигд бус </Checkbox>
                              <Checkbox value={'q19-6'}>Хэм алдалттай</Checkbox>
                           </Checkbox.Group>
                           <th id="child">
                              АД баруун талд
                              <Input className="amaraInput w-8" value={formData?.q20} style={{ textAlign: 'center' }} />
                           </th>
                           <th id="child">
                              Зүүн талд
                              <Input className="amaraInput w-8" value={formData?.q22} style={{ textAlign: 'center' }} />
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0  ">
                        <th colSpan={4}>
                           <p className="mb-2">Хоол шингээх эрхтэн тогтолцоо </p>
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[150px]">
                           Хэл
                           <Checkbox.Group value={formData?.q24}>
                              <Checkbox className="ml-2" value={'q24-1'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'q24-2'}>Хуурай</Checkbox>
                              <Checkbox value={'q24-3'}>Өнгөргүй</Checkbox>
                              <Checkbox value={'q24-4'}>Өнгөртэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={3}>
                           <p> Хэвлийн үзлэг:</p>
                           <div className="flex flex-col">
                              <Checkbox.Group value={formData?.q25}>
                                 <p id="cls">Өнгөц тэмтрэлтээр </p>
                                 <Checkbox value={'q25-1'}>эмзэглэлгүй</Checkbox>
                                 <Checkbox value={'q25-2'}>
                                    Эмзэглэлтэй (байрлал
                                    <Input
                                       className="amaraInput w-8"
                                       value={formData?.['q25-2-1']}
                                       style={{ textAlign: 'center' }}
                                    />
                                    )
                                 </Checkbox>
                              </Checkbox.Group>
                              <Checkbox.Group value={formData?.q26}>
                                 <p id="cls">Гүн тэмтрэлтээр</p>
                                 <Checkbox value={'q26-1'}>эмзэглэлгүй</Checkbox>
                                 <Checkbox value={'q26-2'}>
                                    Эмзэглэлтэй (байрлал
                                    <Input
                                       className="amaraInput w-8"
                                       value={formData?.['q26-2-1']}
                                       style={{ textAlign: 'center' }}
                                    />
                                    )
                                 </Checkbox>
                              </Checkbox.Group>
                           </div>
                           <Checkbox.Group value={formData?.q27}>
                              <Checkbox value={'q27-1'}>Зөөлөн гялтан цочрол үгүй</Checkbox>
                              <Checkbox value={'q27-2'}> Гялтан цочролын шинж илэрсэн</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>

               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 ">
                        <th colSpan={4} className="w-[80%]">
                           Шээс бэлгийн тогтолцоо{' '}
                        </th>
                        <th className="w-[20%]">Үе мөч</th>
                     </tr>
                     <tr>
                        <th className="w-[20%]">
                           <th id="cls">Шээх байдал</th>
                           <Checkbox.Group value={formData?.q28}>
                              <Checkbox className="w-full ml-2" value={'q28-1'}>
                                 Өөрөө
                              </Checkbox>
                              <Checkbox className="w-full" value={'q28-2'}>
                                 Катетера ар
                              </Checkbox>
                              <Checkbox value={'q28-3'}>Цистосто мийн гуурсаар </Checkbox>
                           </Checkbox.Group>
                           <th id="cls">Хоногийн шээсний гарц</th>
                           <Checkbox.Group value={formData?.q29}>
                              <Checkbox className="w-full ml-2" value={'q29-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="w-full" value={'q29-2'}>
                                 Ихэссэн
                              </Checkbox>
                              <Checkbox value={'q29-3'}>багассан </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[20%]">
                           <th>
                              <th id="cls">Шээсний өнгө</th>
                              <Checkbox.Group value={formData?.q30}>
                                 <Checkbox className="w-full ml-2" value={'q30-1'}>
                                    сүрлэн шар
                                 </Checkbox>
                                 <Checkbox className="w-full" value={'q30-2'}>
                                    улаан шар
                                 </Checkbox>
                                 <Checkbox className="w-full" value={'q30-3'}>
                                    өнгөгүй
                                 </Checkbox>
                                 <Checkbox className="w-full" value={'q30-4'}>
                                    тунадастай
                                 </Checkbox>
                                 <Checkbox value={'q30-5'}>тунадасгүй</Checkbox>
                              </Checkbox.Group>
                              <th id="cls">Шөнө шээдэг эсэх</th>
                              <Checkbox.Group value={formData?.q31}>
                                 <Checkbox className="w-full ml-2" value={'q31-1'}>
                                    тийм
                                 </Checkbox>
                                 <Checkbox value={'q31-2'}>үгүй </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th className="w-[20%]">
                           <th>
                              <th id="cls">Шээс тасалддаг эсэх</th>
                              <Checkbox.Group value={formData?.q32}>
                                 <Checkbox className="w-full ml-2" value={'q32-1'}>
                                    тийм
                                 </Checkbox>
                                 <Checkbox value={'q32-2'}>үгүй </Checkbox>
                              </Checkbox.Group>
                              <th id="cls">Дутуу шээдэг эсэх</th>
                              <Checkbox.Group value={formData?.q33}>
                                 <Checkbox className="w-full ml-2" value={'q33-1'}>
                                    тийм
                                 </Checkbox>
                                 <Checkbox value={'q33-2'}>үгүй </Checkbox>
                              </Checkbox.Group>
                              <th id="cls">Дүлж шээдэг эсэх</th>
                              <Checkbox.Group value={formData?.q34}>
                                 <Checkbox className="w-full ml-2" value={'q34-1'}>
                                    тийм
                                 </Checkbox>
                                 <Checkbox value={'q34-2'}>үгүй </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th className="w-[20%]">
                           <th>
                              <th id="cls">Шээхэд өвдөлттэй эсэх</th>
                              <Checkbox.Group value={formData?.q35}>
                                 <Checkbox className="w-full ml-2" value={'q35-1'}>
                                    тийм
                                 </Checkbox>
                                 <Checkbox value={'q35-2'}>үгүй </Checkbox>
                              </Checkbox.Group>
                              <th id="cls">Бөөр тэмтрэлтээр </th>
                              <Checkbox.Group value={formData?.q36}>
                                 <Checkbox className="w-full ml-2" value={'q36-1'}>
                                    эмзэглэлтэй
                                 </Checkbox>
                                 <Checkbox value={'q36-2'}>эмзэглэлгүй </Checkbox>
                              </Checkbox.Group>
                              <p>
                                 <span className="text-[11px]">
                                    (
                                    <Checkbox.Group value={formData?.['q36-2-1']} className="inline">
                                       <Checkbox className="test" value={'q36-2-1-1'}>
                                          <span className="text-[11px]">Баруун,</span>
                                       </Checkbox>
                                       &nbsp;
                                       <Checkbox className="ml-0 test" value={'q36-2-1-2'}>
                                          <span className="text-[11px]">зүүн,</span>
                                       </Checkbox>
                                       &nbsp;
                                    </Checkbox.Group>
                                    )
                                 </span>
                              </p>
                              <th className="mt-2" id="cls">
                                 Пастернацкий
                              </th>
                              <Checkbox.Group value={formData?.q37}>
                                 <Checkbox className="w-full ml-2" value={'q37-1'}>
                                    баруун
                                 </Checkbox>
                                 <Checkbox value={'q37-2'}>зүүн </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th>
                           <th>
                              <th id="cls">Үе мөчний хэлбэр</th>
                              <Checkbox.Group value={formData?.q38}>
                                 <Checkbox className="w-full ml-2" value={'q38-1'}>
                                    хэвийн
                                 </Checkbox>
                                 <Checkbox value={'q38-2'}>өөрчлөгдсөн </Checkbox>
                              </Checkbox.Group>
                              <th id="cls">Үений хөдөлгөөн</th>
                              <Checkbox.Group value={formData?.q39}>
                                 <Checkbox className="w-full ml-2" value={'q39-1'}>
                                    идэвхтэй
                                 </Checkbox>
                                 <Checkbox className="w-full " value={'q39-2'}>
                                    идэвхгүй
                                 </Checkbox>
                                 <Checkbox value={'q39-3'}>хязгаарлагдмал </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div className="flex flex-col">
                  <th id="cls"> Бага тархины үйл ажиллагаа</th>
                  <th id="cls">
                     Нистагм: + / - салганал: (тайван байхад/ хөдөлгөхөд) өсгий шилбэний сорил:------------------
                  </th>
                  <th id="cls">
                     Хамар хурууын сорил: ----------------------- Тандем алхаа: --------------------------- Ромберг
                     сорил: -----------------
                  </th>
                  <th id="cls">
                     Солбисон хурдан хөдөлгөөн: ----------------------------------- Алхааны атакси:
                     -------------------------------------------
                  </th>
               </div>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr>
                        <th colSpan={3}>Мэдрэлийн тогтолцоо</th>
                     </tr>
                     <tr>
                        <th className="w-[33%]">
                           Ухаан санааны байдал:
                           <Checkbox.Group value={formData?.q40}>
                              <Checkbox className="ml-2" value={'q40-1'}>
                                 Саруул
                              </Checkbox>
                              <Checkbox className="w-full" value={'q40-2'}>
                                 Саруул бус:{' '}
                              </Checkbox>
                              <Checkbox className="w-full" value={'q40-3'}>
                                 Баримжлал алдагдсан:
                              </Checkbox>
                              <Checkbox className="w-full" value={'q40-4'}>
                                 Цаг хугацааны{' '}
                              </Checkbox>
                              <Checkbox className="w-full" value={'q40-5'}>
                                 Орон зайны{' '}
                              </Checkbox>
                              <Checkbox value={'q40-6'}>Өөрийн</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[33%]">
                           Сэтгэцийн байдал:
                           <Checkbox.Group value={formData?.q41}>
                              <Checkbox className="ml-2" value={'q41-1'}>
                                 Анхаарал:
                                 <Input
                                    className="amaraInput w-20"
                                    value={formData?.['q41-1-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q41-2'}>
                                 Ой тогтолт:
                                 <Input
                                    className="amaraInput w-20"
                                    value={formData?.['q41-2-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q41-3'}>
                                 Тоолох чадвар{' '}
                                 <Input
                                    className="amaraInput w-20"
                                    value={formData?.['q41-3-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q41-4'}>
                                 Бүтээх чадвар:{' '}
                                 <Input
                                    className="amaraInput w-20"
                                    value={formData?.['q41-4-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q41-5'}>
                                 Сэтгэл хөдлөл:{' '}
                                 <Input
                                    className="amaraInput w-20"
                                    value={formData?.['q41-5-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q41-6'}>
                                 Зан төрх :{' '}
                                 <Input
                                    className="amaraInput w-20"
                                    value={formData?.['q41-6-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[33%]">
                           Хэл ярианы байдал :
                           <Checkbox.Group value={formData?.q42}>
                              <Checkbox className="ml-2" value={'q42-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="w-full" value={'q42-2'}>
                                 Ойлгохын хэлгүйдэл
                              </Checkbox>
                              <Checkbox className="w-full" value={'q42-3'}>
                                 Ярихын хэлгүйдэл
                              </Checkbox>
                              <Checkbox className="w-full" value={'q42-4'}>
                                 Нэрлэхийн хэлгүйдэл{' '}
                              </Checkbox>
                              <Checkbox className="w-full" value={'q42-5'}>
                                 Уншихгүйдэл{' '}
                              </Checkbox>
                              <Checkbox className="w-full" value={'q42-6'}>
                                 Бичихгүйдэл{' '}
                              </Checkbox>
                              <Checkbox value={'q42-7'}>Давтан хэлэх чадвар |</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3}>Гавал тархины мэдрэлүүд: </th>
                     </tr>
                  </thead>
               </Table>

               <Table bordered className="story">
                  <thead>
                     <tr className="border-t-0">
                        <th rowSpan={14}>
                           <th className="flex flex-col">
                              <th className="flex items-center gap-4" id="cls">
                                 I:
                                 <Checkbox.Group value={formData?.q43}>
                                    <Checkbox value={'43-1'}>Хэвийн</Checkbox>
                                    <Checkbox value={'43-2 '}>Хэвийн бус</Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th id="cls">
                                 Б
                                 <Input
                                    className="amaraInput w-10"
                                    value={formData?.['q44']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 З
                                 <Input
                                    className="amaraInput w-10"
                                    value={formData?.['q45']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </th>
                              <th id="cls"></th>
                              <th id="cls">
                                 II:
                                 <Input value={formData?.['q45-1']} />
                              </th>
                              <th id="cls" className="flex items-center gap-4">
                                 <th id="cls">XXX:</th>
                                 <Checkbox.Group value={formData?.q46}>
                                    <Checkbox value={'q46-1'}>Хэвийн</Checkbox>
                                    <Checkbox value={'q46-2'}>Хэвийн бус</Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th id="cls">
                                 {' '}
                                 Б
                                 <Input
                                    className="amaraInput w-10"
                                    value={formData?.q47}
                                    style={{ textAlign: 'center' }}
                                 />
                                 З
                                 <Input
                                    className="amaraInput w-10"
                                    value={formData?.q48}
                                    style={{ textAlign: 'center' }}
                                 />
                              </th>
                              <th id="cls"> Гэрлийн гурвал:</th>
                              <Checkbox.Group value={formData?.q49}>
                                 <Checkbox value={'q49-1'}>Хэвийн</Checkbox>
                                 <Checkbox value={'q49-2'}>Хэвийн бус</Checkbox>
                              </Checkbox.Group>
                              <th id="cls">
                                 {' '}
                                 Б
                                 <Input
                                    className="amaraInput w-10"
                                    value={formData?.q50}
                                    style={{ textAlign: 'center' }}
                                 />
                                 З
                                 <Input
                                    className="amaraInput w-10"
                                    value={formData?.q51}
                                    style={{ textAlign: 'center' }}
                                 />
                              </th>
                              <th id="cls">
                                 III-IV-VI:
                                 <Input value={formData?.['q51-1']} />
                              </th>
                              <th>
                                 <th id="cls"> Птоз:</th>
                                 <th id="cls">
                                    {' '}
                                    Б
                                    <Input
                                       className="amaraInput w-10"
                                       value={formData?.q52}
                                       style={{ textAlign: 'center' }}
                                    />
                                    З
                                    <Input
                                       className="amaraInput w-10"
                                       value={formData?.q53}
                                       style={{ textAlign: 'center' }}
                                    />
                                 </th>
                              </th>
                              <th id="cls"> Нистагм:</th>
                              <Checkbox.Group value={formData?.q54}>
                                 <Checkbox value={'q54-1'}>Илрээгүй</Checkbox>
                                 <Checkbox value={'q54-2'}>Илэрсэн</Checkbox>
                              </Checkbox.Group>
                              <th className="flex items-center gap-4">
                                 <th id="cls">Диплопи:</th>
                                 <Checkbox.Group value={formData?.q55}>
                                    <Checkbox value={'q55-1'}>Эерэг</Checkbox>
                                    <Checkbox value={'q55-2'}>Сөрөг</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                        <th rowSpan={4}>
                           <th id="cls"> VII:</th>
                           <Checkbox.Group value={formData?.q56}>
                              <Checkbox className="w-full ml-2" value={'q56-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q56-2'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="cls">Хэвийн бус бол: </th>
                        <th id="cls">Б</th>
                        <th id="cls">З</th>
                     </tr>
                     <tr>
                        <th id="cls">Нүдний анилт</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th id="cls">Духны атираа </th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th id="cls">Хамар уруулын нугалаа</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th rowSpan={3}>
                           {' '}
                           <th id="cls"> VIII: </th>
                           <Checkbox.Group value={formData?.q57}>
                              <Checkbox className="w-full ml-2 " value={'q57-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q57-2'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="cls">Хэвийн бус бол</th>
                        <th id="cls">Б</th>
                        <th id="cls">З</th>
                     </tr>
                     <tr>
                        <th id="cls">Сонсгол</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th id="cls">Чих шуугих</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th rowSpan={3}>
                           {' '}
                           <th id="cls"> IX, X: </th>
                           <Checkbox.Group value={formData?.q58}>
                              <Checkbox className="w-full ml-2" value={'q58-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q58-2'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="cls">Хэвийн бус бол</th>
                        <th id="cls">Б</th>
                        <th id="cls">З</th>
                     </tr>
                     <tr>
                        <th id="cls">Хүүхэн хэлний хазайлт</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th id="cls">Залгиурын рефлекс</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           <Checkbox.Group className="gap-4" value={formData?.q59}>
                              <Checkbox value={'q59-1'}>Дисфони</Checkbox>
                              <Checkbox value={'q59-2'}>Дисфаги</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th rowSpan={3}>
                           {' '}
                           <th id="cls"> XI:</th>
                           <Checkbox.Group value={formData?.q60}>
                              <Checkbox className="w-full ml-2" value={'q60-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q60-2'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="cls">Хэвийн бус бол </th>
                        <th id="cls">Б</th>
                        <th id="cls">З</th>
                     </tr>
                     <tr>
                        <th id="cls">Стерноклейдомастойд</th>
                        <th id="cls">


                        </th>
                        <th id="cls">



                           
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Трапец хэлбэрт булчин</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story">
                  <thead>
                     <tr>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr>
                        <th colSpan={4}></th>
                        <th rowSpan={5}>
                           <th id="cls"> XII: </th>
                           <Checkbox.Group value={formData?.q62}>
                              <Checkbox className="w-full ml-2" value={'q62-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q62-2'}> Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="cls">Хэвийн бус бол</th>
                        <th id="cls" className="w-6">
                           Б
                        </th>
                        <th id="cls" className="w-6">
                           З
                        </th>
                     </tr>
                     <tr>
                        <th rowSpan={4} className="w-[100px]">
                           <th id="cls"> V:</th>
                           <Checkbox.Group value={formData?.q61}>
                              <Checkbox className="w-full ml-2" value={'q61-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q61-2'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="cls">Хэвийн бус бол </th>
                        <th id="cls" className="w-6">
                           Б
                        </th>
                        <th id="cls" className="w-6">
                           З
                        </th>
                        <th id="cls">Хэлний хазайлт</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th id="cls">Нүүрний мэдрэхүй</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                        <th id="cls">Хатангиршил / татвалзал </th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th id="cls">Эвэрлэгийн рефлекс</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                        <th id="cls" rowSpan={5}>
                           Дизартри / анартри
                        </th>
                        <th id="cls" rowSpan={5}></th>
                        <th id="cls" rowSpan={5}></th>
                     </tr>
                     <tr>
                        <th id="cls">Зажлуурын булчингийн хүч</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story">
                  <thead className="mb-10">
                     <tr className="border-t-0">
                        <th colSpan={3}>Хөдөлгөөний тогтолцоо</th>
                        <th colSpan={5}>Мэдрэхүйн тогтолцоо </th>
                     </tr>
                     <tr>
                        <th colSpan={3} rowSpan={5}>
                           <th className="flex flex-col gap-0">
                              <th id="cls">Үений хөдөлгөөний далайц</th>
                              <th id="cls">Мөр</th>
                              <th id="cls">Тохой</th>
                              <th id="cls">Бугуй</th>
                              <th id="cls">Сарвуу</th>
                              <th id="cls">Түнх</th>
                              <th id="cls">Өвдөг</th>
                              <th id="cls">Шагай</th>
                              <th id="cls">Булчингийн хүч:</th>
                              <th id="cls">
                                 Гар:
                                 <Input />
                              </th>
                              <th>------------------------------------------------------ </th>
                           </th>
                        </th>
                        <th id="cls">
                           <p>Мэдрэхүй</p>{' '}
                        </th>
                        <th id="cls">Хэвийн</th>
                        <th id="cls">Ихэссэн</th>
                        <th id="cls">Буурсан</th>
                        <th id="cls" rowSpan={5}>
                           <th id="cls">Үнэрлэх:</th>
                           <Checkbox.Group className="flex flex-col" value={formData?.q63}>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox value={'q63-1'}>Ихэссэн</Checkbox>
                              <Checkbox value={'q63-2'}>Буурсан</Checkbox>
                           </Checkbox.Group>
                           <th id="cls">Сонсгол:</th>
                           <Checkbox.Group className="flex flex-col" value={formData?.q64}>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox value={'q64-1'}>Ихэссэн</Checkbox>
                              <Checkbox value={'q64-2'}>Буурсан</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>
                           <p id="cls">Өнгөц</p>
                        </th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th id="cls">
                           <p>Гүн</p>
                        </th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th id="cls">
                           <p>Хэт</p>
                           <p>мэдрэгшил</p>
                        </th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                        <th id="cls"></th>
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
                        <th colSpan={4} rowSpan={5}>
                           <th className="flex flex-col gap-0">
                              <th>
                                 <Input />
                              </th>
                              <th id="cls">Булчингийн тонус: </th>
                              <th id="cls">
                                 Гар: <Input />
                              </th>
                              <th id="cls">
                                 <Input />
                              </th>
                              <th id="cls">
                                 Хөл: <Input />
                              </th>
                              <th id="cls">
                                 <Input />
                              </th>
                           </th>
                        </th>
                        <th id="cls" rowSpan={4} className="w-[98px]"></th>
                        <th id="cls" rowSpan={4} className="w-[65px]"></th>
                        <th id="cls" rowSpan={4} className="w-[71px]"></th>
                        <th id="cls" rowSpan={4} className="w-[72px]"></th>
                        <th id="cls" rowSpan={5} className="w-[120px]"></th>
                     </tr>
                  </thead>
                  <thead>
                     <tr>
                        <th id="cls">Рефлекс </th>
                        <th id="cls">≠ ≠</th>
                        <th id="cls">≠ ≠ ≠</th>
                        <th id="cls">≠</th>
                        <th id="cls" colSpan={3}>
                           Эмгэг рефлекс
                        </th>
                        <th id="cls" className="text-center">
                           +
                        </th>
                        <th id="cls" className="text-center">
                           -
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Бицепс </th>
                        <th id="cls"></th>
                        <th id="cls"> </th>
                        <th id="cls"></th>
                        <th id="cls" colSpan={3}>
                           Бабински:
                        </th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th id="cls">Трицепс </th>
                        <th id="cls"></th>
                        <th id="cls"> </th>
                        <th id="cls"></th>
                        <th id="cls" colSpan={3}>
                           Хоффман:
                        </th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th id="cls">Өвдөгний </th>
                        <th id="cls"></th>
                        <th id="cls"> </th>
                        <th id="cls"></th>
                        <th id="cls" colSpan={3} rowSpan={2}>
                           Тавхайн чичигнэлт:{' '}
                        </th>
                        <th id="cls" rowSpan={2}></th>
                        <th id="cls" rowSpan={2}></th>
                     </tr>
                     <tr>
                        <th id='cls'>Ахиллын </th>
                        <th id='cls'></th>
                        <th id='cls'></th>
                        <th id='cls'></th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Тэнцвэрийн тогтолцоо </th>
                        <th colSpan={5}>Мэнэнгийн хамшинж :</th>
                     </tr>
                  </thead>
                  <thead>
                     <tr>
                        <th colSpan={4} rowSpan={4}>
                           <div className="flex flex-col">
                              <th>
                                 {' '}
                                 Зогсох тэнцвэр:
                                 <Checkbox.Group value={formData?.q65}>
                                    <Checkbox className="ml-2" value={'q65-1'}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'q65-2'}>
                                       Хэвийн бус
                                       <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                                    </Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th>
                                 Явах тэнцвэр:{' '}
                                 <Checkbox.Group value={formData?.q66}>
                                    <Checkbox className="ml-2" value={'q66-1'}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'q66-2'}>
                                       Хэвийн бус
                                       <Input
                                          className="amaraInput w-10"
                                          value={formData?.['q66-2-1']}
                                          style={{ textAlign: 'center' }}
                                       />
                                    </Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th>
                                 Шугаман алхалт: Хурдан солигдох хөдөлгөөн:
                                 <Checkbox.Group value={formData?.q67}>
                                    <Checkbox className="ml-2" value={'q67-1'}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'q67-2'}>Хэвийн бус</Checkbox>
                                    <Checkbox value={'q67-3'}>
                                       Хэвийн
                                       <Input
                                          className="amaraInput w-10"
                                          value={formData?.['q67-3-1']}
                                          style={{ textAlign: 'center' }}
                                       />
                                    </Checkbox>
                                    <Checkbox value={'q67-4'}>Дисдиадохокинез</Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th>
                                 Ромбергийн сорил:{' '}
                                 <Checkbox.Group value={formData?.q68}>
                                    <Checkbox className="ml-2" value={'q68-1'}>
                                       БГ
                                    </Checkbox>
                                    <Checkbox value={'q68-2'}>БХ</Checkbox>
                                    <Checkbox value={'q68-3'}>ЗГ</Checkbox>
                                    <Checkbox value={'q68-4'}>ЗХ</Checkbox>
                                    <Checkbox value={'q68-5'}>Эерэг</Checkbox>
                                    <Checkbox value={'q68-6'}>Сөрөг</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </div>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={5}>
                           <Checkbox.Group value={formData?.q69}>
                              <Checkbox className="ml-2" value={'q69-1'}>
                                 Дагзны хөшингө :
                                 <Input
                                    className="amaraInput w-10 mb-2"
                                    value={formData?.['q69-1-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 хуруу
                              </Checkbox>
                              <Checkbox value={'q69-2'}>
                                 Кернигийн шинж:Б{' '}
                                 <Input
                                    className="amaraInput w-10 mb-2"
                                    value={formData?.['q69-2-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 З
                                 <Input
                                    className="amaraInput w-10 mb-2"
                                    value={formData?.['q69-2-2']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={5}>Ёзоорын хамшинж: </th>
                     </tr>
                     <tr>
                        <th colSpan={5}>
                           <Checkbox.Group value={formData?.q70}>
                              <Checkbox className="ml-2" value={'q70-1'}>
                                 Ласегийн шинж: Б
                                 <Input
                                    className="amaraInput w-10 mb-2"
                                    value={formData?.['q70-1-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 З
                                 <Input
                                    className="amaraInput w-10 mb-2"
                                    value={formData?.['q70-1-2']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q70-2'}>
                                 Мацкевичийн шинж :Б
                                 <Input
                                    className="amaraInput w-10 mb-2"
                                    value={formData?.['q70-2-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 З
                                 <Input
                                    className="amaraInput w-10 mb-2"
                                    value={formData?.['q70-2-2']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox className="w-full" value={'q70-3'}>
                                 Сколиоз
                              </Checkbox>
                              <Checkbox className="w-full" value={'q70-4'}>
                                 Кифоз
                              </Checkbox>
                              <Checkbox value={'q70-5'}>Нурууны булчингийн чангарал </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story">
                  <thead>
                     <tr className="border-t-0">
                        <th rowSpan={4} className="w-[112px]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хэвийн</Checkbox>
                              <Checkbox>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th></th>
                        <th className="w-[30px]">Б</th>
                        <th className="w-[30px]">З</th>
                        <th rowSpan={4}>
                           Өвдөлт:
                           <Checkbox.Group value={formData?.q71}>
                              <Checkbox value={'q71-1'}>тийм</Checkbox>
                              <Checkbox value={'q71-2'}>үгүй</Checkbox>
                           </Checkbox.Group>
                           <Image src={EvaluateImg} alt="" />
                        </th>
                     </tr>
                     <tr>
                        <th>Өсгийн-өвдөгшилбэний</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Хуруу-хамрын сорил</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Дисметри:</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th colSpan={5}>Бусад шинжүүд:</th>
                     </tr>
                     <tr>
                        <th colSpan={5} className="h-[300px]"></th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
};

export default CT_1_Sergeeh;
