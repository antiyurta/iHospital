import React from 'react';
import { Checkbox, Form, Image, Input } from 'antd';
import { Table } from 'react-bootstrap';
import HumanMuscleImg from '../../../../assets/images/humanMuscle.png';
import HumanBody2Img from '../../../../assets/images/humanBody2.png';
import HumanHeadImg from '../../../../assets/images/humanHead.png';

const CT_1_Medrel = (props) => {
   const {
      data: { formData }
   } = props;
   console.log('Form', formData);
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className=" flex justify-center ">МЭДРЭЛИЙН ЭМЧИЙН ҮЗЛЭГ</th>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr>
                        <th className="text-center">
                           <p>Биеийн ерөнхий байдал</p>
                        </th>
                        <th className="text-center">
                           <p>Ухаан санаа</p>
                        </th>
                        <th className="text-center">
                           <p>Арьс салст</p>
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[250px]">
                           <Checkbox.Group value={formData.q1} className="checkboxx ml-2 justify-start">
                              <Checkbox value={'q1-1'}>Дунд</Checkbox>
                              <Checkbox value={'q1-2'}>Хүндэвтэр</Checkbox>
                              <Checkbox value={'q1-3'}>Хүнд</Checkbox>
                              <Checkbox value={'q1-4'}>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[210px]">
                           <Checkbox.Group value={formData?.q2} className="ml-0">
                              <Checkbox className="ml-2" value={'q2-1'}>
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'q2-2'}>Бүдгэрсэн</Checkbox>
                              <Checkbox value={'q2-3'}>Ухаангүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[250px]">
                           <Checkbox.Group value={formData?.q3} className="ml-0">
                              <Checkbox className="ml-2 " value={'q3-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q3-2'}>
                                 Хэвийн бус
                                 <Input
                                    value={formData?.['q3-2-1']}
                                    className="amaraInput w-10"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4} className=" font-bold ">
                           Амьсгалын эрхтэн тогтолцоо
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[170px]" id="cls">
                           Амьсгал 1 минутанд
                           <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           удаа
                        </th>
                        <th colSpan={3}>
                           Чагналтаар:
                           <Checkbox.Group value={formData?.q5} id="child">
                              <Checkbox value={'q5-1'} className="ml-2">
                                 Хэржигнүүртэй
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Уушги цулцангийн</Checkbox>
                              <Checkbox value={'q5-3'}>Гуурсан хоолойн</Checkbox>
                              <Checkbox value={'q5-4'}>
                                 <div className="flex items-center">
                                    <span> Амьсгал сулавтар</span>
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
                                                <span className="text-[11px]">2 талдаа</span>
                                             </Checkbox>
                                             &nbsp;
                                          </Checkbox.Group>
                                          )
                                       </span>
                                    </p>
                                 </div>
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0 ">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4} className=" font-bold">
                           Цусны эргэлтийн тогтолцоо
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">
                           <p>
                              Судасны цохилт 1 минутанд
                              <Input value={formData?.q6} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                              удаа
                           </p>
                           <p>
                              Хүчдэл дүүрэлт
                              <Input value={formData?.q7} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           </p>
                        </th>
                        <th>
                           <p>Тогшилтоор:</p>
                           <p id="cls">Зүрхний хил</p>
                           <Checkbox.Group value={formData?.q8} className="ml-0">
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
                           <p id="cls">Зүрхний авиа</p>
                           <Checkbox.Group value={formData?.q9} className="ml-0">
                              <Checkbox className="ml-2" value={'q9-1'}>
                                 Тод
                              </Checkbox>
                              <Checkbox value={'q9-2'}>Бүдэг</Checkbox>
                              <Checkbox value={'q9-3'}>Бүдгэвтэр</Checkbox>
                              <Checkbox value={'q9-4'}>Хэм жигд </Checkbox>
                              <Checkbox value={'q9-5'}>Жигд бус </Checkbox>
                              <Checkbox value={'q9-6'}>Хэм алдалттай</Checkbox>
                           </Checkbox.Group>
                           <p className="h-[20px]" id="cls">
                              АД баруун талд
                              <Input
                                 value={formData?.q10}
                                 className="amaraInput w-20"
                                 style={{ textAlign: 'center' }}
                              />
                              Зүүн талд
                              <Input
                                 value={formData?.q11}
                                 className="amaraInput w-20"
                                 style={{ textAlign: 'center' }}
                              />
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0 ">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4} className=" font-bold">
                           Хоол шингээх эрхтэн тогтолцоо
                        </th>
                     </tr>
                     <tr>
                        <th>
                           <p id="cls">Хэл</p>
                           <Checkbox.Group value={formData?.q12} className="ml-0">
                              <Checkbox value={'q12-1'} className="ml-2">
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'q12-2'}>Хуурай</Checkbox>
                              <Checkbox value={'q12-3'}>Өнгөргүй</Checkbox>
                              <Checkbox value={'q12-4'}>Өнгөртэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[500px]">
                           <p id="cls">Хэвлийн үзлэг:</p>
                           <Checkbox.Group value={formData?.q13} className="ml-0">
                              <Checkbox value={'q13-1'}>Өнгөц тэмтрэлтээр </Checkbox>
                              <Checkbox value={'q13-2'}>Гүн тэмтрэлтээр</Checkbox>
                              <Checkbox value={'q13-3'}>
                                 {' '}
                                 Эмзэглэлтэй (байрлал
                                 <Input
                                    className="amaraInput w-8"
                                    value={formData?.['q13-3-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 )
                              </Checkbox>
                              <Checkbox value={'q13-4'}>Ердийн </Checkbox>
                              <Checkbox value={'q13-5'}>Зөөлөн гялтан цочрол үгүй</Checkbox>
                              <Checkbox value={'q13-6'}>Гялтан цочролын шинж илэрсэн</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4} className=" font-bold">
                           Мэдрэлийн тогтолцоо
                        </th>
                     </tr>
                     <tr>
                        <th>
                           <p id="cls">Сонсох чадвахи:</p>
                           <div className="flex items-center">
                              <Checkbox.Group value={formData?.q14} className="ml-0">
                                 <Checkbox value={'q14-1'}>Хэвийн</Checkbox>
                                 <Checkbox value={'q14-2'}>
                                    {' '}
                                    <p> Буурсан</p>
                                 </Checkbox>
                              </Checkbox.Group>
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
                           </div>
                        </th>
                        <th>
                           <p id="cls">Рефлексүүд:</p>
                           <Checkbox.Group value={formData?.q15} className="ml-0">
                              <Checkbox value={'q15-1'}>Хадгалагдана</Checkbox>
                              <Checkbox value={'q15-2'}> Хадгалагдахгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 ">
                        <th id="cls">
                           <p>
                              Бусад:
                              <Input
                                 value={formData?.q16}
                                 className="amaraInput w-[90%]"
                                 style={{ textAlign: 'center' }}
                              />
                           </p>
                           <p className="h-[30px]">
                              Сэтгэцийн байдал:
                              <Input
                                 value={formData?.q17}
                                 className="amaraInput w-[81%]"
                                 style={{ textAlign: 'center' }}
                              />
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4} className=" font-bold text-center">
                           МЭДРЭЛИЙН ҮЗЛЭГ
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[200px]" id="cls">
                           <p>Ухаан санааны байдал:</p>
                           <Checkbox.Group value={formData?.q18} className="ml-0">
                              <Checkbox value={'q18-1'} className="ml-2">
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'q18-2'}>
                                 Саруул бус:
                                 <Input
                                    value={formData?.['q18-2-1']}
                                    className="amaraInput w-12"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q18-3'}>Баримжаалал алдагдсан:</Checkbox>
                              <Checkbox value={'q18-3-1'}>Цаг хугацааны</Checkbox>
                              <Checkbox value={'q18-3-2'} className="w-full">
                                 Орон зайн
                              </Checkbox>
                              <Checkbox value={'q18-3-3'}>Өөрийн</Checkbox>
                              <p>
                                 GCS: E
                                 <Input
                                    value={formData?.['q19-1']}
                                    className="amaraInput w-8"
                                    style={{ textAlign: 'center' }}
                                 />
                                 V
                                 <Input
                                    value={formData?.['q19-2']}
                                    className="amaraInput w-8"
                                    style={{ textAlign: 'center' }}
                                 />{' '}
                                 М
                                 <Input
                                    value={formData?.['q19-3']}
                                    className="amaraInput w-8"
                                    style={{ textAlign: 'center' }}
                                 />
                              </p>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p id="cls">Сэтгэцийн байдал:</p>
                           <Checkbox.Group value={formData?.q20} className="ml-0  ">
                              <Checkbox value={'q20-1'} className="ml-2 ">
                                 Анхаарал:
                                 <Input
                                    value={formData?.['q20-1-1']}
                                    className="amaraInput w-40]"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q20-2'}>
                                 Ой тогтоолт:
                                 <Input
                                    value={formData?.['q20-2-1']}
                                    className="amaraInput w-40"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q20-3'}>
                                 Тоолох чадвар:
                                 <Input
                                    value={formData?.['q20-3-1']}
                                    className="amaraInput w-40"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q20-4'}>
                                 Бүтээх чадвар:
                                 <Input
                                    value={formData?.['q20-4-1']}
                                    className="amaraInput w-40"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q20-5'}>
                                 Сэтгэл хөдлөл:
                                 <Input
                                    value={formData?.['q20-5-1']}
                                    className="amaraInput w-40"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q20-6'}>
                                 Зан төрх:
                                 <Input
                                    value={formData?.['q20-6-1']}
                                    className="amaraInput w-40 "
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p id="cls">Хэл ярианы байдал:</p>
                           <Checkbox.Group value={formData?.q21} className="ml-0">
                              <Checkbox value={'q21-1'} className="ml-2">
                                 {' '}
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="ml-2" value={'q21-2'}>
                                 Ойлгохын хэлгүйдэл
                              </Checkbox>
                              <Checkbox value={'q21-3'}> Ярихын хэлгүйдэл</Checkbox>
                              <Checkbox value={'q21-4'}> Нэрлэхийн хэлгүйдэл</Checkbox>
                              <Checkbox value={'q21-5'}> Уншихгүйдэл</Checkbox>
                              <Checkbox value={'q21-6'}> Бичихгүйдэл</Checkbox>
                              <Checkbox value={'q21-7'}> Давтан хэлэх чадвар</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4} className=" font-bold">
                           Гавал тархины мэдрэлүүд:
                        </th>
                     </tr>
                     <tr className="min-h-[200px]">
                        <th className="w-[45%] h-full relative">
                           <Checkbox.Group value={formData?.q5} className="ml-0">
                              <div className="items-center flex gap-1 " id="cls">
                                 <p>I:</p>
                                 <Checkbox value={'q5-2'}>Хэвийн</Checkbox>
                                 <Checkbox value={'q5-2'}>
                                    Хэвийн бус: Б
                                    <Input
                                       value={formData?.q4}
                                       className="amaraInput w-10"
                                       style={{ textAlign: 'center' }}
                                    />
                                    З
                                    <Input
                                       value={formData?.q4}
                                       className="amaraInput w-10"
                                       style={{ textAlign: 'center' }}
                                    />
                                 </Checkbox>
                              </div>
                           </Checkbox.Group>
                           <div className="items-center flex gap-1  ">
                              <p>II:</p>
                           </div>
                           <th className="flex" id="cls">
                              <div className="flex gap-3 ">
                                 <p>
                                    ХХХ: Б
                                    <Input
                                       value={formData?.q4}
                                       className="amaraInput w-6"
                                       style={{ textAlign: 'center' }}
                                    />
                                    З
                                    <Input
                                       value={formData?.q4}
                                       className="amaraInput w-6"
                                       style={{ textAlign: 'center' }}
                                    />
                                    (мм)
                                 </p>
                                 <p>Харах чадал: </p>
                              </div>
                           </th>
                           <th id="cls">
                              <div className="flex gap-10">
                                 <p>Гэрлийн гурвал:</p>

                                 <p>
                                    Б
                                    <Input
                                       value={formData?.q4}
                                       className="amaraInput w-10"
                                       style={{ textAlign: 'center' }}
                                    />
                                    З
                                    <Input
                                       value={formData?.q4}
                                       className="amaraInput w-10"
                                       style={{ textAlign: 'center' }}
                                    />
                                 </p>
                              </div>
                           </th>
                           <th className="flex" id="cls">
                              <div className="flex gap-7 ">
                                 <p>
                                    Шууд: Б
                                    <Input
                                       value={formData?.q4}
                                       className="amaraInput w-6"
                                       style={{ textAlign: 'center' }}
                                    />
                                    З
                                    <Input
                                       value={formData?.q4}
                                       className="amaraInput w-6"
                                       style={{ textAlign: 'center' }}
                                    />
                                 </p>
                                 <p>Харааны талбай:</p>
                              </div>
                           </th>
                           <th id="cls">
                              <div className="ml-1">
                                 Нүдний уг:
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-40 "
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                           </th>
                           <th className="flex" id="cls">
                              <div className="flex gap-8 ">
                                 <p>
                                    Птоз: Б
                                    <Input
                                       value={formData?.q4}
                                       className="amaraInput w-6"
                                       style={{ textAlign: 'center' }}
                                    />
                                    З
                                    <Input
                                       value={formData?.q4}
                                       className="amaraInput w-6"
                                       style={{ textAlign: 'center' }}
                                    />
                                 </p>
                                 <p>Нистагм:</p>
                              </div>
                           </th>
                           <th className="flex items-baseline" id="cls">
                              <p>Диплопи:</p>
                              <Checkbox.Group value={formData?.q5} className="ml-1">
                                 <Checkbox value={'q5-2'}>Эерэг</Checkbox>
                                 <Checkbox value={'q5-2'}> Сөрөг</Checkbox>
                                 <Checkbox value={'q5-2'}> Илрээгүй</Checkbox>
                                 <Checkbox value={'q5-2'}> Илэрсэн</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="flex items-center mb-2" id="cls">
                              <p>НХБ:</p>
                              <Checkbox.Group value={formData?.q5} className="ml-1">
                                 <Checkbox value={'q5-2'}>Хэвийн</Checkbox>
                                 <Checkbox value={'q5-2'}>Хэвийн бус</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <Table bordered className="story mb-0 h-fit absolute bottom-0 left-0">
                              <thead>
                                 <tr>
                                    <th colSpan={2} rowSpan={2} id="cls">
                                       V:
                                    </th>
                                    <th id="cls">Хэвийн бус бол:</th>
                                    <th id="cls">Б</th>
                                    <th id="cls">З</th>
                                 </tr>
                                 <tr className="border-0">
                                    <th id="cls">Нүүрний мэдрэхүй</th>
                                    <th id="cls"></th>
                                    <th id="cls"></th>
                                 </tr>
                              </thead>
                           </Table>
                        </th>
                        <Table bordered className="story mb-0">
                           <thead>
                              <tr className="border-t-0 ">
                                 <th rowSpan={4} className="border-l-0 w-[130px] h-[50px] " id="cls">
                                    <p>VII:</p>
                                    <Checkbox.Group value={formData?.q5} className="">
                                       <Checkbox value={'q5-2'} className="ml-2">
                                          Хэвийн
                                       </Checkbox>
                                       <Checkbox value={'q5-2'}>Хэвийн бус</Checkbox>
                                    </Checkbox.Group>
                                 </th>
                                 <th id="cls">Хэвийн бус бол:</th>
                                 <th id="cls" className="w-[25px]">
                                    Б
                                 </th>
                                 <th id="cls" className="w-[25px]">
                                    З
                                 </th>
                              </tr>
                              <tr>
                                 <th id="cls">Нүдний анилт</th>
                                 <th id="cls"></th>
                                 <th id="cls"></th>
                              </tr>
                              <tr>
                                 <th id="cls">Духны атираа</th>
                                 <th id="cls"></th>
                                 <th id="cls"></th>
                              </tr>
                              <tr>
                                 <th id="cls">Хамар уруулын нугалаа</th>
                                 <th id="cls"></th>
                                 <th id="cls"></th>
                              </tr>
                           </thead>
                        </Table>
                        <Table bordered className="story mb-0">
                           <thead>
                              <tr className="border-t-0 ">
                                 <th rowSpan={4} className="border-l-0 w-[130px] h-[50px] " id="cls">
                                    <p>VIII:</p>
                                    <Checkbox.Group value={formData?.q5} className="ml-">
                                       <Checkbox value={'q5-2'} className="ml-2">
                                          Хэвийн
                                       </Checkbox>
                                       <Checkbox value={'q5-2'}>Хэвийн бус</Checkbox>
                                    </Checkbox.Group>
                                 </th>
                                 <th id="cls">Хэвийн бус бол:</th>
                                 <th id="cls" className="w-[25px]">
                                    Б
                                 </th>
                                 <th id="cls" className="w-[25px]">
                                    З
                                 </th>
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
                           </thead>
                        </Table>
                        <Table bordered className="story mb-0 ">
                           <thead>
                              <tr className="border-t-0 ">
                                 <th rowSpan={4} className="border-l-0 w-[130px] h-[50px] " id="cls">
                                    <p>IX, X:</p>
                                    <Checkbox.Group value={formData?.q5} className="ml-">
                                       <Checkbox value={'q5-2'} className="ml-2">
                                          Хэвийн
                                       </Checkbox>
                                       <Checkbox value={'q5-2'}>Хэвийн бус</Checkbox>
                                    </Checkbox.Group>
                                 </th>
                                 <th id="cls">Хэвийн бус бол:</th>
                                 <th id="cls" className="w-[25px]">
                                    Б
                                 </th>
                                 <th id="cls" className="w-[25px]">
                                    З
                                 </th>
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
                           </thead>
                        </Table>
                        <Table bordered className="story mb-0 ">
                           <thead>
                              <tr className="border-t-0 ">
                                 <th className="border-l-0">
                                    <Checkbox.Group value={formData?.q5} className="ml-">
                                       <Checkbox value={'q5-2'} className="ml-2">
                                          Дисфони
                                       </Checkbox>
                                       <Checkbox value={'q5-2'}>Дисфаги</Checkbox>
                                    </Checkbox.Group>
                                 </th>
                              </tr>
                           </thead>
                        </Table>
                        <Table bordered className="story mb-0 ">
                           <thead className="h-10">
                              <tr className="border-t-0 ">
                                 <th rowSpan={4} className="border-l-0 w-[130px]  ">
                                    <p id="cls">XI:</p>
                                    <Checkbox.Group value={formData?.q5} className="ml-">
                                       <Checkbox value={'q5-2'} className="ml-2">
                                          Хэвийн
                                       </Checkbox>
                                       <Checkbox value={'q5-2'}>Хэвийн бус</Checkbox>
                                    </Checkbox.Group>
                                 </th>
                                 <th id="cls">Хэвийн бус бол:</th>
                                 <th id="cls" className="w-[25px]">
                                    Б
                                 </th>
                                 <th id="cls" className="w-[25px]">
                                    З
                                 </th>
                              </tr>
                              <tr>
                                 <th id="cls">Стерноклейдомастойд</th>
                                 <th id="cls"></th>
                                 <th id="cls"></th>
                              </tr>
                              <tr>
                                 <th id="cls">Залгиурын рефлекс</th>
                                 <th id="cls"></th>
                                 <th id="cls"></th>
                              </tr>
                           </thead>
                        </Table>
                        <Table bordered className="story mb-0 ">
                           <thead>
                              <tr className="border-t-0 ">
                                 <th rowSpan={4} className="border-l-0 w-[130px] h-[50px]  " id="cls">
                                    <p>XII:</p>
                                    <Checkbox.Group value={formData?.q5} className="ml-">
                                       <Checkbox value={'q5-2'} className="ml-2">
                                          Хэвийн
                                       </Checkbox>
                                       <Checkbox value={'q5-2'}>Хэвийн бус</Checkbox>
                                    </Checkbox.Group>
                                 </th>
                                 <th id="cls" className="h-[20px]">
                                    Хэвийн бус бол:
                                 </th>
                                 <th id="cls" className="w-[25px]">
                                    Б
                                 </th>
                                 <th id="cls" className="w-[25px]">
                                    З
                                 </th>
                              </tr>
                              <tr className="border-0">
                                 <th id="cls">Хэлний хазайлт</th>
                                 <th id="cls"></th>
                                 <th id="cls"></th>
                              </tr>
                           </thead>
                        </Table>
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
                        <th rowSpan={2} className="w-[50px]">
                           <Checkbox.Group value={formData?.q5} className="ml-">
                              <Checkbox value={'q5-2'} className="ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="cls"> Эвэрлэгийн рефлекс</th>
                        <th id="cls" className="w-[32px]"></th>
                        <th id="cls" className="w-[34px]"></th>
                        <th id="cls" rowSpan={2} className="w-[100px]"></th>
                        <th id="cls"> Хатангиршил/татвалзал</th>
                        <th id="cls" className="w-[39px]"></th>
                        <th id="cls" className="w-[39px]"></th>
                     </tr>
                     <tr>
                        <th id="cls"> Зажлуурын булчингийн хүч</th>
                        <th id="cls"> </th>
                        <th id="cls"> </th>
                        <th id="cls"> Дизартри/анартри</th>
                        <th id="cls"> </th>
                        <th id="cls"> </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">
                           <p>Хөдөлгөөний тогтолцоо </p>
                        </th>
                        <th className="w-[50%]">
                           <p> Мэдрэхүйн тогтолцоо</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">
                           <div className="flex justify-center gap-5">
                              <div>
                                 <p id="cls">Булчингийн хүч </p>
                                 <Image src={HumanMuscleImg} alt="" width={120} />
                              </div>
                              <div>
                                 <p id="cls">Рефлексүүд</p>
                                 <Image src={HumanMuscleImg} alt="" width={120} />
                              </div>
                           </div>
                           <thead>
                              <th>
                                 Эмгэг рефлекс:
                                 <Checkbox.Group value={formData.q1} className="checkboxx ml-2 justify-start">
                                    <Checkbox value={'q1-1'}>Бөхийх</Checkbox>
                                    <Checkbox value={'q1-3'}>Гэдийх</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </thead>
                           <thead>
                              <th>
                                 <p className="w-full">Булчингийн тонус:</p>
                                 <Checkbox.Group value={formData.q1} className="checkboxx ml-2 justify-start">
                                    <Checkbox value={'q1-1'}>Хэвийн</Checkbox>
                                    <Checkbox value={'q1-3'} className="ml-[34px]">
                                       Ихэссэн{' '}
                                    </Checkbox>
                                    <Checkbox value={'q1-3'}>Буурсан </Checkbox>
                                 </Checkbox.Group>
                                 <Checkbox.Group value={formData.q1} className="checkboxx ml-2 justify-start">
                                    <Checkbox value={'q1-1'}>Хэвийн бус:</Checkbox>
                                    <Checkbox value={'q1-3'}>БГ </Checkbox>
                                    <Checkbox value={'q1-3'}>БХ </Checkbox>
                                    <Checkbox value={'q1-3'}>ЗГ </Checkbox>
                                    <Checkbox value={'q1-3'}>ЗХ </Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </thead>
                        </th>
                        <th className="w-[50%]  ">
                           <th className="flex">
                              <thead>
                                 <Image src={HumanBody2Img} alt="" width={200} />
                              </thead>
                              <th id="cls">
                                 <p>Өнгөц мэдрэхүй– Өн</p>
                                 <p>Гүний мэдрэхүй- Г</p>
                                 <p>Температур - Т </p>
                                 <p>Өвдөлт- Өв</p>
                                 <Image src={HumanHeadImg} alt="" width={130} height={90} />
                              </th>
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">
                           <p>7.Тэнцвэрийн тогтолцоо </p>
                        </th>
                        <th className="w-[50%]">
                           <p> 8.Мэнэнгийн тогтолцоо</p>
                        </th>
                     </tr>
                  </thead>
               </Table>

               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%] ">
                           <th>
                              Зогсох тэнцвэр:
                              <Checkbox.Group value={formData.q1} className="checkboxx ml-2 justify-start">
                                 <Checkbox value={'q1-1'}>Хэвийн</Checkbox>
                                 <Checkbox value={'q1-1'}>
                                    Хэвийн бус{' '}
                                    <Input
                                       value={formData?.q4}
                                       className="amaraInput w-10"
                                       style={{ textAlign: 'center' }}
                                    />
                                 </Checkbox>
                              </Checkbox.Group>
                              <th>
                                 Явах тэнцвэр:
                                 <Checkbox.Group value={formData.q1} className="checkboxx ml-2 justify-start">
                                    <Checkbox value={'q1-1'}>Хэвийн</Checkbox>
                                    <Checkbox value={'q1-1'}>
                                       Хэвийн бус{' '}
                                       <Input
                                          value={formData?.q4}
                                          className="amaraInput w-10"
                                          style={{ textAlign: 'center' }}
                                       />
                                    </Checkbox>
                                 </Checkbox.Group>
                                 <th>
                                    Шугаман алхалт: Хурдан солигдох хөдөлгөөн:
                                    <Checkbox.Group value={formData.q1} className="checkboxx ml-2 justify-start">
                                       <Checkbox value={'q1-1'} className="l-0">
                                          Хэвийн
                                       </Checkbox>
                                       <Checkbox value={'q1-1'}>Хэвийн бус</Checkbox>
                                       <Checkbox value={'q1-1'}>
                                          Хэвийн{' '}
                                          <Input
                                             value={formData?.q4}
                                             className="amaraInput w-10"
                                             style={{ textAlign: 'center' }}
                                          />
                                          <Checkbox value={'q1-1'}>Дисдиадохокинез</Checkbox>
                                       </Checkbox>
                                    </Checkbox.Group>
                                    <th>
                                       Ромбергийн сорил::
                                       <Checkbox.Group value={formData.q1} className="checkboxx ml-2 justify-start">
                                          <Checkbox value={'q1-1'}>БГ</Checkbox>
                                          <Checkbox value={'q1-1'}>БХ</Checkbox>
                                          <Checkbox value={'q1-1'}>ЗГ</Checkbox>
                                          <Checkbox value={'q1-1'}>ЗХ</Checkbox>
                                       </Checkbox.Group>
                                       <th>
                                          <Checkbox.Group value={formData.q1} className="checkboxx ml-2 justify-start">
                                             <Checkbox value={'q1-1'}>Эерэг</Checkbox>
                                             <Checkbox value={'q1-1'}>Сөрөг</Checkbox>
                                          </Checkbox.Group>
                                       </th>
                                    </th>
                                 </th>
                              </th>
                           </th>
                        </th>
                        <th className="w-[50%] relative">
                           <th>
                              <Checkbox.Group value={formData.q1} className="checkboxx ">
                                 <Checkbox value={'q1-1'}>
                                    Дагзны хөшингө:
                                    <Input
                                       value={formData?.q4}
                                       className="amaraInput w-5"
                                       style={{ textAlign: 'center' }}
                                    />
                                    хуруу
                                 </Checkbox>
                              </Checkbox.Group>
                              <Checkbox value={'q1-1'}>
                                 Кернигийн шинж: Б
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-5"
                                    style={{ textAlign: 'center' }}
                                 />
                                 З
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-5"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                           </th>
                           <Table className="story mb-0 ">
                              <thead>
                                 <tr className="absolute left-0 right-0 border-y-[1px] ">
                                    <th className="border-b-0">9. Ёзоорын хамшинж:</th>
                                 </tr>
                              </thead>
                           </Table>
                           <thead>
                              <Table className="story mt-6 ">
                                 <thead>
                                    <tr className="  ">
                                       <th className="border-b-0">
                                          <Checkbox>
                                             Ласегийн шинж:
                                             <Input
                                                value={formData?.q4}
                                                className="amaraInput w-5"
                                                style={{ textAlign: 'center' }}
                                             />
                                             З
                                             <Input
                                                value={formData?.q4}
                                                className="amaraInput w-5"
                                                style={{ textAlign: 'center' }}
                                             />
                                          </Checkbox>
                                          <Checkbox className="w-full ml-0">
                                             Мацкевичийн шинж:
                                             <Input
                                                value={formData?.q4}
                                                className="amaraInput w-5"
                                                style={{ textAlign: 'center' }}
                                             />
                                             З
                                             <Input
                                                value={formData?.q4}
                                                className="amaraInput w-5"
                                                style={{ textAlign: 'center' }}
                                             />
                                          </Checkbox>
                                          <Checkbox className="ml-0">Сколиоз</Checkbox>
                                          <Checkbox>Нурууны булчингийн чангарал</Checkbox>
                                       </th>
                                    </tr>
                                 </thead>
                              </Table>
                           </thead>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0 border-t-0">
                  <thead>
                     <tr className="border-t-0">
                        <th rowSpan={4} className="w-[110px]">
                           <Checkbox className="ml-2">Хэвийн</Checkbox>
                           <Checkbox>Хэвийн бус</Checkbox>
                        </th>
                        <th></th>
                        <th className="w-[35px]">Б</th>
                        <th className="w-[35px]">З</th>
                        <th colSpan={5}>10. Вегататив үйлийн байдал</th>
                     </tr>
                     <tr>
                        <th id="cls">Өсгий-өвдөг-шилбэний</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                        <th colSpan={2} rowSpan={3} className="w-[274px]">
                           <Checkbox className="ml-2">
                              Хөлрөлт
                              <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           </Checkbox>
                           <Checkbox>
                              Пигментаци
                              <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           </Checkbox>
                           <Checkbox>
                              Вазомотор урвал
                              <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           </Checkbox>
                           <Checkbox>
                              Симпаталги:
                              <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           </Checkbox>
                           <Checkbox className="mb-1">
                              Тэжээрлийн байдал
                              <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           </Checkbox>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Хуруу-хамрын сорил</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                     <tr>
                        <th id="cls">Дисметри:</th>
                        <th id="cls"></th>
                        <th id="cls"></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>11. Бусад шинжүүд:</th>
                     </tr>
                     <tr className="h-[130px]">
                        <th></th>
                     </tr>
                     <tr className="border-t-0">
                        <th>12. Байршлын болон клиникийн онош:</th>
                     </tr>
                     <tr className="h-[130px]">
                        <th></th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Medrel;
