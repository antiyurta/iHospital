import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input } from 'antd';
import { TextWithUnderline } from './utils';

const CT_1_Emegtei = (props) => {
   const {
      data: { formData }
   } = props;
   console.log('Form', formData);
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center mb-2">ЭМЭГТЭЙЧҮҮДИЙН ЭМЧИЙН ҮЗЛЭГ</th>
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
                        <th colSpan={4}>
                           <p className="mb-2">Амьсгалын эрхтэн тогтолцоо</p>
                        </th>
                     </tr>
                     <tr>
                        <th id="child" className="w-[220px]">
                           Амьсгал 1 минутанд
                           <Input className="w-10" value={formData?.q4} style={{ textAlign: 'center' }} />
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
                                 Амьсгал сулавтар{' '}
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
                              <Checkbox value={'q5-4'}>Гуурсан хоолойн</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           <p className="mb-2">Цусны эргэлтийн тогтолцоо</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child">
                           <p>
                              Судасны цохилт 1 минутанд
                              <Input className="  w-10" value={formData?.q6} style={{ textAlign: 'center' }} />
                              удаа
                           </p>
                           <p>
                              Хүчдэл дүүрэлт
                              <Input className="  w-10" value={formData?.q7} style={{ textAlign: 'center' }} />
                           </p>
                        </th>
                        <th>
                           <p>Тогшилтоор:</p>
                           <p id="child"> Зүрхний хил</p>
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
                           <p>Чагналтаар:</p>
                           <p id="child">Зүрхний авиа</p>
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
                           <th id="child">
                              АД баруун талд
                              <TextWithUnderline>{formData?.q10 || ''}</TextWithUnderline>

                           </th>
                           <th id="child">
                              Зүүн талд
                              <TextWithUnderline>{formData?.q11 || ''}</TextWithUnderline>

                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0  ">
                        <th colSpan={4}>
                           <p className="mb-2">Хоол шингээх эрхтэн тогтолцоо</p>
                        </th>
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
                                 {/* <Input
                                    className="  w-8"
                                    value={formData?.['q13-1-1']}
                                    style={{ textAlign: 'center' }}
                                 /> */}
                                 <TextWithUnderline>{formData?.['q13-3-1'] || ''}</TextWithUnderline>

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
                           Сонсох чадвахи:
                           <Checkbox.Group value={formData?.q14}>
                              <Checkbox value={'q14-1'}>Хэвийн</Checkbox>
                              <Checkbox value={'q14-2'}>
                                 <p>
                                    Буурсан
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
                           Рефлексүүд:
                           <Checkbox.Group value={formData?.q15}>
                              <Checkbox value={'q15-1'}>Хадгалагдана</Checkbox>
                              <Checkbox value={'q15-2'}>Хадгалагдана</Checkbox>
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
                           <p className="flex justify-center">ЭХ БАРИХ, ЭМЭГТЭЙЧҮҮДИЙН ҮЗЛЭГ</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2}>
                           <div className="flex gap-10">
                              <div id="child" className="gap-2 flex items-center mb-1">
                                 <p>Анхны биений юм хэдэн настайд ирсэн</p>
                                 <div>
                                    <Input type="number" value={formData?.q18} className="w-4  cursor-pointer" />
                                 </div>
                              </div>
                              <div id="child" className="gap-2 flex items-center mb-1">
                                 <p>Биений юмны мөчлөгийн хоног</p>
                                 <div>
                                    <Input type="number" value={formData?.q19} className="w-4  cursor-pointer" />
                                 </div>
                              </div>
                           </div>
                           <div className="flex gap-10">
                              <div className="gap-2 flex items-center mb-1" id="child">
                                 <p>Биений юмны үргэлжлэх хугацаа</p>
                                 <div>
                                    <Input type="number" value={formData?.q20} className="w-4  cursor-pointer" />
                                 </div>
                              </div>
                              <div className="gap-2 flex items-center mb-1" id="child">
                                 <p>
                                    Биений юмны хэмжээ:
                                    <p>
                                       <span className="text-[11px]">
                                          (
                                          <Checkbox.Group value={formData?.q21} className="inline">
                                             <Checkbox className="test" value={'q21-1'}>
                                                <span className="text-[11px]">бага,</span>
                                             </Checkbox>
                                             &nbsp;
                                             <Checkbox className="ml-0 test" value={'q21-2'}>
                                                <span className="text-[11px]">дунд,</span>
                                             </Checkbox>
                                             &nbsp;
                                             <Checkbox className="ml-0 test" value={'q21-3'}>
                                                <span className="text-[11px]">их,</span>
                                             </Checkbox>
                                             &nbsp;
                                          </Checkbox.Group>
                                          )
                                       </span>
                                    </p>
                                 </p>
                              </div>
                           </div>
                           <div>
                              <p id="child">
                                 Сүүлийн биений юм хэзээ ирсэн:
                                 <Input className="  w-16 mb-1" value={formData?.q22} style={{ textAlign: 'center' }} />
                                 Цэвэршсэн: /зур/
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.q23} className="inline">
                                          <Checkbox className="test" value={'q23-1'}>
                                             <span className="text-[11px]">тийм,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q23-2'}>
                                             <span className="text-[11px]">үгүй,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                                 Хэдэн онд
                                 <Input
                                    className="  w-16 mb-1"
                                    value={formData?.['q23-1-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </p>
                           </div>
                           <div className="flex">
                              <div className="gap-2 flex items-center mb-1" id="child">
                                 <p>Жирэмслэлтийн тоо </p>
                                 <Input type="number" value={formData?.q24} className="w-4  cursor-pointer" />
                                 <p>үүнээс төрсөн</p>
                                 <Input type="number" value={formData?.q25} className="w-4  cursor-pointer" />
                                 <p>зулбасан</p>
                                 <Input type="number" value={formData?.q26} className="w-4  cursor-pointer" />
                                 <p>үр хөндүүлсэн</p>
                                 <Input type="number" value={formData?.q27} className="w-4  cursor-pointer" />
                              </div>
                           </div>
                           <div className="max-w-[18cm] ">
                              <p
                                 className="ml-2 underline"
                                 id="child"
                              >{`Эх барих, эмэгтэйчүүдийн тусгайлсан үзлэг: ${formData?.q28}`}</p>
                           </div>
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
                           <div className="max-w-[18cm]">
                              <p className="ml-4 underline " id="child">{`Тольны үзлэг:PV: ${formData?.q29}`}</p>
                           </div>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={3}>
                           <p className="text-center mb-2"> КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} className="h-14">
                           <p> Үндсэн онош</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} className="h-20">
                           <p> Дагалдах онош</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} className="h-24">
                           <p> Хүндрэл</p>
                        </th>
                     </tr>
                     <tr>
                        <th className="h-80 w-[200px] text-center">Ялган оношлох эмгэгүүд ба хам шинжүүд</th>
                        <th className="text-center"> Хийгдэх шинжилгээ</th>
                        <th>Яаралтай хийгдэх эмчилгээ</th>
                     </tr>
                     <tr>
                        <th className=" border-r-0">
                           <p className="mt-2 ">Эмчийн нэр: </p>
                        </th>
                        <th className="border-l-0">
                           <p className="mt-2">Гарын үсэг</p>
                        </th>
                        <th>
                           <div className="flex justify-center gap-4">
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
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Emegtei;
