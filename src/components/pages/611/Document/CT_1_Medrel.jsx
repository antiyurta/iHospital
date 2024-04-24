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
               <th  className=" flex justify-center ">
                  МЭДРЭЛИЙН ЭМЧИЙН ҮЗЛЭГ
               </th>
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
                           </Checkbox.Group>
                           <Checkbox.Group value={formData.q1} className="checkboxx ml-2 justify-start">
                              <Checkbox value={'q1-4'}>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[210px]">
                           <Checkbox.Group value={formData.q3} className="ml-0"></Checkbox.Group>
                           <Checkbox.Group value={formData?.q5} className="ml-0">
                              <Checkbox className="ml-2" value={'q5-1'}>
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Бүдгэрсэн</Checkbox>
                              <Checkbox value={'q5-2'}>Ухаангүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[250px]">
                           <Checkbox.Group value={formData?.q6} className="ml-0">
                              <Checkbox className="ml-2 " value={'q6-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q6-2'}>
                                 Хэвийн бус
                                 <Input
                                    value={formData?.q4}
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
                        <th className="w-[170px]">
                           Амьсгал 1 минутанд
                           <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           удаа
                        </th>
                        <th>
                           <p>Чагналтаар:</p>
                           <Checkbox.Group value={formData?.q5} className="ml-0">
                              <Checkbox className="ml-2" value={'q5-1'}>
                                 Уушги цулцангийн
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Гуурсан хоолойн</Checkbox>
                              <Checkbox value={'q5-2'}>Хэржигнүүртэй</Checkbox>
                              <Checkbox value={'q5-2'}>Амьсгал сулавтар (баруун, зүүн, 2 талдаа)</Checkbox>
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
                        <th>
                           <p>
                              Судасны цохилт 1 минутанд
                              <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                              удаа
                           </p>
                           <p>
                              Хүчдэл дүүрэлт
                              <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           </p>
                        </th>
                        <th>
                           <p>Тогшилтоор:</p>
                           <p>Зүрхний хил</p>
                           <Checkbox.Group value={formData?.q5} className="ml-0">
                              <Checkbox className="ml-2" value={'q5-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Томорсон (зүүн, баруун)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Чагналтаар:</p>
                           <p>Зүрхний авиа</p>
                           <Checkbox.Group value={formData?.q5} className="ml-0">
                              <Checkbox className="ml-2" value={'q5-1'}>
                                 Тод
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Бүдэг</Checkbox>
                              <Checkbox value={'q5-3'}>Бүдгэвтэр</Checkbox>
                              <Checkbox value={'q5-4'}>Хэм жигд </Checkbox>
                              <Checkbox value={'q5-5'}>Жигд бус </Checkbox>
                              <Checkbox value={'q5-6'}>Хэм алдалттай</Checkbox>
                           </Checkbox.Group>
                           <p className="h-[20px]">
                              АД баруун талд
                              <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                              /
                              <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                              Зүүн талд
                              <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
                              /
                              <Input value={formData?.q4} className="amaraInput w-10" style={{ textAlign: 'center' }} />
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
                           <p>Хэл</p>
                           <Checkbox.Group value={formData?.q6} className="ml-0">
                              <Checkbox className="ml-2">Ердийн</Checkbox>
                              <Checkbox>Хуурай</Checkbox>
                              <Checkbox>Өнгөргүй</Checkbox>
                              <Checkbox>Өнгөртэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[500px]">
                           <p>Хэвлийн үзлэг:</p>
                           <Checkbox.Group value={formData?.q5} className="ml-0">
                              <Checkbox className="ml-2" value={'q5-1'}>
                                 Тод
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Өнгөц тэмтрэлтээр </Checkbox>
                              <Checkbox value={'q5-2'}>Гүн тэмтрэлтээр</Checkbox>
                              <Checkbox value={'q5-2'}> Эмзэглэлтэй (байрлал____)</Checkbox>
                              <Checkbox value={'q5-2'}>Ердийн </Checkbox>
                              <Checkbox value={'q5-2'}>Зөөлөн гялтан цочрол үгүй</Checkbox>
                              <Checkbox value={'q5-2'}>Гялтан цочролын шинж илэрсэн</Checkbox>
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
                           <p>Сонсох чадвахи:</p>
                           <Checkbox.Group value={formData?.q5} className="ml-0">
                              <Checkbox value={'q5-2'}>Хэвийн</Checkbox>
                              <Checkbox value={'q5-2'}> Буурсан (баруун, зүүн)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Рефлексүүд:</p>
                           <Checkbox.Group value={formData?.q5} className="ml-0">
                              <Checkbox value={'q5-2'}>Хадгалагдана</Checkbox>
                              <Checkbox value={'q5-2'}> Хадгалагдахгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 ">
                        <th>
                           <p>
                              Бусад:
                              <Input
                                 value={formData?.q4}
                                 className="amaraInput w-[90%]"
                                 style={{ textAlign: 'center' }}
                              />
                           </p>
                           <p className="h-[30px]">
                              Сэтгэцийн байдал:
                              <Input
                                 value={formData?.q4}
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
                        <th className="w-[200px]">
                           <p>Ухаан санааны байдал:</p>
                           <Checkbox.Group value={formData?.q5} className="ml-0">
                              <Checkbox value={'q5-2'} className="ml-2">
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'q5-2'}>
                                 Саруул бус:
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-12"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Баримжаалал алдагдсан:</Checkbox>
                              <Checkbox value={'q5-2'}>Цаг хугацааны</Checkbox>
                              <Checkbox value={'q5-2'} className="w-full">
                                 Орон зайн
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Өөрийн</Checkbox>
                              <p>
                                 GCS: E
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-8"
                                    style={{ textAlign: 'center' }}
                                 />
                                 V
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-8"
                                    style={{ textAlign: 'center' }}
                                 />{' '}
                                 М
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-8"
                                    style={{ textAlign: 'center' }}
                                 />
                              </p>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Сэтгэцийн байдал:</p>
                           <Checkbox.Group value={formData?.q5} className="ml-0  ">
                              <Checkbox value={'q5-2'} className="ml-2 ">
                                 Анхаарал:
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-40]"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q5-2'}>
                                 Ой тогтоолт:
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-40"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q5-2'}>
                                 Тоолох чадвар:
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-40"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q5-2'}>
                                 Бүтээх чадвар:
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-40"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q5-2'}>
                                 Сэтгэл хөдлөл:
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-40"
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                              <Checkbox value={'q5-2'}>
                                 Зан төрх:
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-40 "
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Хэл ярианы байдал:</p>
                           <Checkbox.Group value={formData?.q5} className="ml-0">
                              <Checkbox value={'q5-2'} className="ml-2">
                                 {' '}
                                 Ойлгохын хэлгүйдэл
                              </Checkbox>
                              <Checkbox value={'q5-2'}> Ярихын хэлгүйдэл</Checkbox>
                              <Checkbox value={'q5-2'}> Нэрлэхийн хэлгүйдэл</Checkbox>
                              <Checkbox value={'q5-2'}> Уншихгүйдэл</Checkbox>
                              <Checkbox value={'q5-2'}> Бичихгүйдэл</Checkbox>
                              <Checkbox value={'q5-2'}> Давтан хэлэх чадвар</Checkbox>
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
                              <div className="items-center flex gap-1 ">
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
                           <th className="flex">
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
                           <th>
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
                           <th className="flex">
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
                           <th>
                              <div className="ml-1">
                                 Нүдний уг:
                                 <Input
                                    value={formData?.q4}
                                    className="amaraInput w-40 "
                                    style={{ textAlign: 'center' }}
                                 />
                              </div>
                           </th>
                           <th className="flex">
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
                           <th className="flex items-baseline">
                              <p>Диплопи:</p>
                              <Checkbox.Group value={formData?.q5} className="ml-1">
                                 <Checkbox value={'q5-2'}>Эерэг</Checkbox>
                                 <Checkbox value={'q5-2'}> Сөрөг</Checkbox>
                                 <Checkbox value={'q5-2'}> Илрээгүй</Checkbox>
                                 <Checkbox value={'q5-2'}> Илэрсэн</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="flex items-center mb-2">
                              <p>НХБ:</p>
                              <Checkbox.Group value={formData?.q5} className="ml-1">
                                 <Checkbox value={'q5-2'}>Хэвийн</Checkbox>
                                 <Checkbox value={'q5-2'}>Хэвийн бус</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <Table bordered className="story mb-0 h-fit absolute bottom-0 left-0">
                              <thead>
                                 <tr>
                                    <th colSpan={2} rowSpan={2}>
                                       V:
                                    </th>
                                    <th>Хэвийн бус бол:</th>
                                    <th>Б</th>
                                    <th>З</th>
                                 </tr>
                                 <tr>
                                    <th>Нүүрний мэдрэхүй</th>
                                    <th></th>
                                    <th></th>
                                 </tr>
                              </thead>
                           </Table>
                        </th>
                        <Table bordered className="story mb-0">
                           <thead>
                              <tr className="border-t-0 ">
                                 <th rowSpan={4} className="border-l-0 w-[130px] h-[50px] ">
                                    <p>VII:</p>
                                    <Checkbox.Group value={formData?.q5} className="">
                                       <Checkbox value={'q5-2'} className="ml-2">
                                          Хэвийн
                                       </Checkbox>
                                       <Checkbox value={'q5-2'}>Хэвийн бус</Checkbox>
                                    </Checkbox.Group>
                                 </th>
                                 <th>Хэвийн бус бол:</th>
                                 <th className="w-[25px]">Б</th>
                                 <th className="w-[25px]">З</th>
                              </tr>
                              <tr>
                                 <th>Нүдний анилт</th>
                                 <th></th>
                                 <th></th>
                              </tr>
                              <tr>
                                 <th>Духны атираа</th>
                                 <th></th>
                                 <th></th>
                              </tr>
                              <tr>
                                 <th>Хамар уруулын нугалаа</th>
                                 <th></th>
                                 <th></th>
                              </tr>
                           </thead>
                        </Table>
                        <Table bordered className="story mb-0">
                           <thead>
                              <tr className="border-t-0 ">
                                 <th rowSpan={4} className="border-l-0 w-[130px] h-[50px] ">
                                    <p>VIII:</p>
                                    <Checkbox.Group value={formData?.q5} className="ml-">
                                       <Checkbox value={'q5-2'} className="ml-2">
                                          Хэвийн
                                       </Checkbox>
                                       <Checkbox value={'q5-2'}>Хэвийн бус</Checkbox>
                                    </Checkbox.Group>
                                 </th>
                                 <th>Хэвийн бус бол:</th>
                                 <th className="w-[25px]">Б</th>
                                 <th className="w-[25px]">З</th>
                              </tr>
                              <tr>
                                 <th>Сонсгол</th>
                                 <th></th>
                                 <th></th>
                              </tr>
                              <tr>
                                 <th>Чих шуугих</th>
                                 <th></th>
                                 <th></th>
                              </tr>
                           </thead>
                        </Table>
                        <Table bordered className="story mb-0 ">
                           <thead>
                              <tr className="border-t-0 ">
                                 <th rowSpan={4} className="border-l-0 w-[130px] h-[50px] ">
                                    <p>IX, X:</p>
                                    <Checkbox.Group value={formData?.q5} className="ml-">
                                       <Checkbox value={'q5-2'} className="ml-2">
                                          Хэвийн
                                       </Checkbox>
                                       <Checkbox value={'q5-2'}>Хэвийн бус</Checkbox>
                                    </Checkbox.Group>
                                 </th>
                                 <th>Хэвийн бус бол:</th>
                                 <th className="w-[25px]">Б</th>
                                 <th className="w-[25px]">З</th>
                              </tr>
                              <tr>
                                 <th>Хүүхэн хэлний хазайлт</th>
                                 <th></th>
                                 <th></th>
                              </tr>
                              <tr>
                                 <th>Залгиурын рефлекс</th>
                                 <th></th>
                                 <th></th>
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
                                    <p>XI:</p>
                                    <Checkbox.Group value={formData?.q5} className="ml-">
                                       <Checkbox value={'q5-2'} className="ml-2">
                                          Хэвийн
                                       </Checkbox>
                                       <Checkbox value={'q5-2'}>Хэвийн бус</Checkbox>
                                    </Checkbox.Group>
                                 </th>
                                 <th>Хэвийн бус бол:</th>
                                 <th className="w-[25px]">Б</th>
                                 <th className="w-[25px]">З</th>
                              </tr>
                              <tr>
                                 <th>Стерноклейдомастойд</th>
                                 <th></th>
                                 <th></th>
                              </tr>
                              <tr>
                                 <th>Залгиурын рефлекс</th>
                                 <th></th>
                                 <th></th>
                              </tr>
                           </thead>
                        </Table>
                        <Table bordered className="story mb-0 ">
                           <thead>
                              <tr className="border-t-0 ">
                                 <th rowSpan={4} className="border-l-0 w-[130px] h-[50px]  ">
                                    <p>XII:</p>
                                    <Checkbox.Group value={formData?.q5} className="ml-">
                                       <Checkbox value={'q5-2'} className="ml-2">
                                          Хэвийн
                                       </Checkbox>
                                       <Checkbox value={'q5-2'}>Хэвийн бус</Checkbox>
                                    </Checkbox.Group>
                                 </th>
                                 <th className="h-[20px]">Хэвийн бус бол:</th>
                                 <th className="w-[25px]">Б</th>
                                 <th className="w-[25px]">З</th>
                              </tr>
                              <tr>
                                 <th>Хэлний хазайлт</th>
                                 <th></th>
                                 <th></th>
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
                        <th> Эвэрлэгийн рефлекс</th>
                        <th className="w-[32px]"> </th>
                        <th className="w-[34px]"> </th>
                        <th rowSpan={2} className="w-[100px]">
                           {' '}
                        </th>
                        <th> Хатангиршил/татвалзал</th>
                        <th className="w-[39px]"></th>
                        <th className="w-[39px]"> </th>
                     </tr>
                     <tr>
                        <th> Зажлуурын булчингийн хүч</th>
                        <th> </th>
                        <th> </th>
                        <th> Дизартри/анартри</th>
                        <th> </th>
                        <th> </th>
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
                                 <p>Булчингийн хүч </p>
                                 <Image src={HumanMuscleImg} alt="" width={120} />
                              </div>
                              <div>
                                 <p>Рефлексүүд</p>
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
                              <th>
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
                  <thead >
                     <tr >
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
                        <th>Өсгий-өвдөг-шилбэний</th>
                        <th></th>
                        <th></th>
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
                        <th>Хуруу-хамрын сорил</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Дисметри:</th>
                        <th></th>
                        <th></th>
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
