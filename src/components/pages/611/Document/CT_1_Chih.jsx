import React from 'react';
import { Checkbox, Image, Input } from 'antd';
import { Table } from 'react-bootstrap';
import NoseImg from '../../../../assets/images/nose.png';
import NoseInsideImg from '../../../../assets/images/noseInside.png';
import EarImg from '../../../../assets/images/ear.png';
import EarInsideImg from '../../../../assets/images/earInside.png';
import TambourineImg from '../../../../assets/images/tambourine.png';
import MouthImg from '../../../../assets/images/mouth.png';
import TuvunhImg from '../../../../assets/images/aaa.png';
import EegiiE from './CT_1_Chih copy';

const CT_1_Chih = (props) => {
   const {
      data: { formData }
   } = props;
   console.log('Form', formData);
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center">ЧИХ ХАМАР ХООЛОЙН ЭМЧИЙН ҮЗЛЭГ</th>
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
                        <th id="child">
                           <Checkbox.Group value={formData?.q1}>
                              <Checkbox className="ml-2" value={'q1-1'}>
                                 Дунд
                              </Checkbox>
                              <Checkbox value={'q1-2'}>Хүндэвтэр</Checkbox>
                              <Checkbox value={'q1-3'}>Хүнд</Checkbox>
                              <Checkbox value={'q1-4'}>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <Checkbox.Group value={formData?.q2}>
                              <Checkbox value={'q2-1'} className="ml-2">
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'q2-2'}>Бүдгэрсэн</Checkbox>
                              <Checkbox value={'q2-3'}>Ухаангүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child" colSpan={4}>
                           <Checkbox.Group value={formData?.q3}>
                              <Checkbox className="ml-2" value={'q3-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q3-2'}>
                                 Хэвийн бус
                                 <Input
                                    className="amaraInput w-10"
                                    value={formData?.q7}
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
                        <th colSpan={4}>Амьсгалын эрхтэн тогтолцоо</th>
                     </tr>
                     <tr>
                        <th className="w-[220px]" id="child">
                           {' '}
                           Амьсгал 1 минутанд
                           <Input className="w-10" value={formData?.q4} />
                           удаа
                        </th>
                        <th colSpan={3} id="child">
                           Чагналтаар:
                           <Checkbox.Group value={formData?.q5}>
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
                                 </div>
                              </Checkbox>
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
                           <p id="child">
                              Судасны цохилт 1 минутанд
                              <Input
                                 className="amaraInput w-10"
                                 id="child"
                                 value={formData?.q6}
                                 style={{ textAlign: 'center' }}
                              />
                              удаа
                           </p>
                           <p id="child">
                              Хүчдэл дүүрэлт
                              <Input
                                 className="amaraInput w-10"
                                 id="child"
                                 value={formData?.q7}
                                 style={{ textAlign: 'center' }}
                              />
                           </p>
                        </th>
                        <th>
                           <th>Тогшилтоор:</th>
                           <p id="child"> Зүрхний хил</p>
                           <Checkbox.Group value={formData?.q8} id="child">
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
                           <th>Чагналтаар:</th>
                           <p id="child"> Зүрхний авиа</p>
                           <Checkbox.Group value={formData?.q9} id="child">
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
                              <Input
                                 className="amaraInput w-8"
                                 value={formData?.q10}
                                 id="child"
                                 style={{ textAlign: 'center' }}
                              />
                           </th>
                           <th id="child">
                              Зүүн талд
                              <Input
                                 className="amaraInput w-8"
                                 value={formData?.q11}
                                 id="child"
                                 style={{ textAlign: 'center' }}
                              />
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
                           <Checkbox.Group value={formData?.q12} id="child">
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
                           <Checkbox.Group value={formData?.q13} id="child">
                              <Checkbox value={'q13-1'}>Өнгөц тэмтрэлтээр</Checkbox>
                              <Checkbox value={'q13-2'}>Гүн тэмтрэлтээр</Checkbox>
                              <Checkbox value={'q13-3'} className="">
                                 Эмзэглэлтэй (байрлал
                                 <Input
                                    className="amaraInput w-8"
                                    value={formData?.['q13-3-1']}
                                    style={{ textAlign: 'center' }}
                                    id="child"
                                 />
                                 )
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q13} id="child">
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
                           <Checkbox.Group value={formData?.q14} id="child">
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
                           <Checkbox.Group value={formData?.q15} id="child">
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
                           <div>
                              <p id="child">
                                 Бусад
                                 <Input
                                    className="amaraInput w-[670px]"
                                    value={formData?.q16}
                                    style={{ textAlign: 'center' }}
                                    id="child"
                                 />
                              </p>
                              <p id="child">
                                 Сэтгэцийн байдал:
                                 <Input
                                    className="amaraInput w-[600px] mb-1"
                                    value={formData?.q17}
                                    style={{ textAlign: 'center' }}
                                    id="child"
                                 />
                              </p>
                           </div>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th className="flex justify-center">ЧИХ ХАМАР ХООЛОЙН ҮЗЛЭГ</th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child">
                           <th id="child">Хамрын амьсгал:</th>
                           <Checkbox.Group value={formData?.q18}>
                              <Checkbox value={'q18-1'} className="w-full ml-2">
                                 <p> Чөлөөтэй</p>
                              </Checkbox>
                              <Checkbox value={'q18-2'}>
                                 <p className="flex items-center gap-1">
                                    <p>Саадтай</p>
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
                                          <Checkbox className="ml-0 test" value={'q18-2-1-3'}>
                                             <span className="text-[11px]">2 талд адил,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child">Гадна хамрын хэлбэр:</th>
                           <Checkbox.Group value={formData?.q19}>
                              <Checkbox value={'q19-1'} className="w-full ml-2">
                                 Зөв
                              </Checkbox>
                              <Checkbox value={'q19-2'}>Зөв бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child">Тэмтрэхэд:</th>
                           <Checkbox.Group value={formData?.q20}>
                              <Checkbox value={'q20-1'} className="w-full ml-2">
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q20-2'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child">
                           <th id="child">Хамрын үүдэвч</th>
                           <Checkbox.Group value={formData?.q21}>
                              <Checkbox value={'q21-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q21-2'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child">Ерөнхий хөндий:</th>
                           <Checkbox.Group value={formData?.q22}>
                              <Checkbox value={'q22-1'} className="w-full ml-2">
                                 Чөлөөтэй
                              </Checkbox>
                              <Checkbox value={'q22-2'}>Саадтай</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child">Хамрын таславч:</th>
                           <Checkbox.Group value={formData?.q23}>
                              <Checkbox value={'q23-1'} className="w-full ml-2">
                                 Муруйлтгүй
                              </Checkbox>
                              <Checkbox value={'q23-2'}>Муруйсан</Checkbox>
                              <Checkbox value={'q23-3'}>Бусад өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Image src={NoseImg} alt="" width={200} height={80} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child">
                           <th id="child">Хамрын салст бүрхүүл:</th>
                           <Checkbox.Group value={formData?.q24}>
                              <Checkbox value={'q24-1'} className="w-full ml-2">
                                 Ягаан
                              </Checkbox>
                              <Checkbox value={'q24-2'} className="w-full">
                                 Улаан ягаан
                              </Checkbox>
                              <Checkbox value={'q24-3'} className="w-full">
                                 Хөхөлбий{' '}
                              </Checkbox>
                              <Checkbox value={'q24-4'} className="w-full">
                                 Цайвар{' '}
                              </Checkbox>
                              <Checkbox value={'q24-5'}>Бусад </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child">Самалдгууд:</th>
                           <Checkbox.Group value={formData?.q25}>
                              <Checkbox value={'q25-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q25-2'}>Хөөнгө</Checkbox>
                              <Checkbox value={'q25-3'}>Бусад өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                           <th id="child">Хамрын жим:</th>
                           <Checkbox.Group value={formData?.q26}>
                              <Checkbox value={'q26-1'} className="w-full ml-2">
                                 Ялгадасгүй
                              </Checkbox>
                              <Checkbox value={'q26-2'}>Ялгадастай</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child">Ялгадас:</th>
                           <Checkbox.Group value={formData?.q27}>
                              <Checkbox className="w-full ml-2" value={'q27-1'}>
                                 Хэвийн
                              </Checkbox>
                           </Checkbox.Group>
                           <th id="child">Эмгэг шинжтэй:</th>
                           <Checkbox.Group value={formData?.q28}>
                              <Checkbox value={'q28-1'} className="w-full ml-2">
                                 Идээрхэг
                              </Checkbox>
                              <Checkbox value={'q28-2'}>Ногоон</Checkbox>
                              <Checkbox value={'q28-3'}>Үнэртэй</Checkbox>
                              <Checkbox value={'q28-4'}>Өтгөн</Checkbox>
                              <Checkbox value={'q28-5'}>Бусад өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <Image src={NoseInsideImg} alt="" width="60%" height={70} className="ml-28" />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child">
                           <p className="ml-2 underline">{`Бүсийн лимфийн булчирхайн байдал: ${formData?.q29}`}</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>Баруун, зүүн чих:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child">
                           <th id="child">Гадна чихний хэлбэр:</th>
                           <Checkbox.Group value={formData?.q30}>
                              <Checkbox value={'q30-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q30-2'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child">Тэмтрэхэд:</th>
                           <Checkbox.Group value={formData?.q31}>
                              <Checkbox value={'q31-1'} className="w-full ml-2">
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q31-2'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child">Хөхлөг сэртэн:</th>
                           <Checkbox.Group value={formData?.q32}>
                              <Checkbox value={'q32-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q32-2'}>Хавантай</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child">Тэмтрэхэд:</th>
                           <Checkbox.Group value={formData?.q33}>
                              <Checkbox value={'q33-1'} className="w-full ml-2">
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q33-2'}>Эмзэглэлтэй</Checkbox>
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
                        <th>
                           <Image src={EarImg} alt="" width="50%" height={70} className="ml-36" />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child">
                           <th id="child">Чихний гадна суваг:</th>
                           <Checkbox.Group value={formData?.q34}>
                              <Checkbox value={'q34-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q34-2'}>Нарийссан (төрөлхийн, олдмол)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <Checkbox.Group value={formData?.q34}>
                              <Checkbox value={'q34-3'} className="w-full ml-2">
                                 Чөлөөтэй
                              </Checkbox>
                              <Checkbox value={'q34-4'}>Саадтай</Checkbox>
                              <Checkbox value={'q34-5'}>Ялгадасгүй</Checkbox>
                              <Checkbox value={'q34-6'}>
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.['q34-6-1']} className="inline">
                                          <Checkbox className="test" value={'q34-6-1-1'}>
                                             <span className="text-[11px]">идээрхэг,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q34-6-1-2'}>
                                             <span className="text-[11px]">үнэртэй,</span>
                                          </Checkbox>
                                          <Checkbox className="ml-0 test" value={'q34-6-1-3'}>
                                             <span className="text-[11px]">ногоон,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child">Сувгийн хана: </th>
                           <Checkbox.Group value={formData?.q35}>
                              <Checkbox value={'q35-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q35-2'}>Цүлхийсэн (аль хана)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Image src={EarInsideImg} alt="" width="130px" height={70} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child">
                           <th id="child">Хэнгэргэн хальс:</th>
                           <Checkbox.Group value={formData?.q36}>
                              <Checkbox value={'q36-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q36-2'} className="w-full ">
                                 Хэвийн бус
                              </Checkbox>
                              <Checkbox value={'q36-3'} className="w-full ">
                                 Бусад{' '}
                              </Checkbox>
                              <Checkbox value={'q36-4'} className="w-full ">
                                 Сувдан саарал
                              </Checkbox>
                              <Checkbox value={'q36-5'}>Улаан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <Checkbox.Group value={formData?.q36}>
                              <Checkbox value={'q36-6'} className="w-full ml-2">
                                 Цооролтын байрлал
                              </Checkbox>
                              <Checkbox value={'q36-7'}>Цооролтын хэмжээ</Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.['q36-8']}>
                              <p>Хэнгэргэн хөндийн салст:</p>
                              <Checkbox value={'q36-8-1'} className="ml-2">
                                 Цайвар ягаан
                              </Checkbox>
                              <Checkbox value={'q36-8-2'}>Улаан </Checkbox>
                              <Checkbox value={'q36-8-3'}>Эмгэг өөрчлөлт</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Image src={TambourineImg} alt="" width={330} height={100} className="mt-4" />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th id="child">
                              Бүсийн лимфийн булчирхайн байдал:
                              <Input
                                 className="amaraInput w-[450px] mb-1"
                                 value={formData?.q38}
                                 style={{ textAlign: 'center' }}
                                 id="child"
                              />
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child">
                           <th id="child">Хөглүүрийн сорил:</th>
                           <Checkbox.Group value={formData?.q39}>
                              <Checkbox value={'q39-1'} className="w-full ml-2">
                                 Ринне
                              </Checkbox>
                              <Checkbox value={'q39-2'} className="w-full ">
                                 Вебер{' '}
                              </Checkbox>
                              <Checkbox value={'q39-3'} className="w-full ">
                                 Желле{' '}
                              </Checkbox>
                              <Checkbox value={'q39-4'} className="w-full ">
                                 Вальсалва{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           Сонсголын бичлэг:
                           <Input
                              className="amaraInput w-full mb-1"
                              value={formData?.q40}
                              style={{ textAlign: 'center' }}
                           />
                           Зэрэг:
                           <Input
                              className="amaraInput w-full mb-1"
                              value={formData?.q41}
                              style={{ textAlign: 'center' }}
                           />
                        </th>
                        <th id="child">
                           <th id="child">Ам ангайлт:</th>
                           <Checkbox.Group value={formData?.q42}>
                              <Checkbox value={'q42-1'} className="w-full ml-2">
                                 Чөлөөтэй
                              </Checkbox>
                              <Checkbox value={'q42-2'} className="w-full ">
                                 Хязгаарлагдсан{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q43}>
                              <p>Хүүхэн хэл:</p>
                              <Checkbox value={'q43-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q43-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child">Зөөлөн тагнай:</th>
                           <Checkbox.Group value={formData?.q44}>
                              <Checkbox value={'q44-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q44-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q45}>
                              <p id="child">Тагнайн гүйлс:</p>
                              <Checkbox className="ml-2" value={'q45-1'}>
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q45-2'}>Томорсон </Checkbox>
                              <Checkbox value={'q45-3'}>1-р зэрэг </Checkbox>
                              <Checkbox value={'q45-4'}>2-р зэрэг </Checkbox>
                              <Checkbox value={'q45-5'}>3-р зэрэг </Checkbox>
                              <Checkbox value={'q45-6'}>Бусад өөрчлөлт </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <Image src={MouthImg} alt="" width={160} height={100} className="mt-2" />
                        </th>
                        <th id="child" className="w-[200px]">
                           <th id="child">Архаг үрэвслийн шинж:</th>
                           <Checkbox.Group value={formData?.q46}>
                              <Checkbox value={'q46-1'} className="w-full ml-2">
                                 Зак
                              </Checkbox>
                              <Checkbox value={'q46-2'} className="w-full ">
                                 Гисс{' '}
                              </Checkbox>
                              <Checkbox value={'q46-3'} className="ml-2 ">
                                 Преображенский{' '}
                              </Checkbox>
                              <Checkbox value={'q46-4'} className="w-full ">
                                 Бусад{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child">Лакуны байдал:</th>
                           <Checkbox.Group value={formData?.q47}>
                              <Checkbox value={'q47-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q47-2'} className="w-full ">
                                 Өргөссөн{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q48}>
                              <p>Залгиурын ар хана:</p>
                              <Checkbox value={'q48-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q48-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child"> Залгиурын хажуу хана:</th>
                           <Checkbox.Group value={formData?.q49}>
                              <Checkbox value={'q49-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q49-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q50}>
                              <p className="w-full">Шувтан хонхрын байдал:</p>
                              <Checkbox value={'q50-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q50-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child">
                           <th id="child">Төвөнхийн гадна үзлэг:</th>
                           <Checkbox.Group value={formData?.q51}>
                              <Checkbox value={'q51-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q51-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q52}>
                              <p id="child">Тэмтрэхэд:</p>
                              <Checkbox value={'q52-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q52-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child" className="w-[200px]">
                           <th id="child">Нуржигнах:</th>
                           <Checkbox.Group value={formData?.q53}>
                              <Checkbox value={'q53-1'} className="w-full ml-2">
                                 Чимээтэй
                              </Checkbox>
                              <Checkbox value={'q53-2'} className="w-full ">
                                 Чимээгүй{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q54}>
                              <p>Төвөнхийн шууд бус тольдолтоор: Амьсгалын үйл ажиллагаа:</p>
                              <Checkbox value={'q54-1'} className="ml-2 ">
                                 Чөлөөтэй{' '}
                              </Checkbox>
                              <Checkbox value={'q54-2'} className="w-full ">
                                 Саалтай{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <th id="child">Халхавч мөгөөрс:</th>
                           <Checkbox.Group value={formData?.q55}>
                              <Checkbox value={'q55-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q55-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q56}>
                              <p>Төвөнхийн салст:</p>
                              <Checkbox value={'q56-1'} className="ml-2 ">
                                 Цайвар ягаан{' '}
                              </Checkbox>
                              <Checkbox value={'q56-2'} className="w-full ">
                                 Улаан{' '}
                              </Checkbox>
                              <Checkbox value={'q56-3'} className="w-full ">
                                 Цайвар{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child" className="w-[200px]">
                           <th id="child">Утгуур мөгөөрс:</th>
                           <Checkbox.Group value={formData?.q57}>
                              <Checkbox value={'q57-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q57-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q58}>
                              <p className="w-full">Дууны туслах хөвчүүд:</p>
                              <Checkbox value={'q58-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q58-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q59}>
                              <p className="w-full">Жинхэнэ хөвч: </p>
                              <Checkbox value={'q59-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q59-2'}>Хэвийн бус </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[170px]">
                           <Image src={TuvunhImg} alt="" width={160} height={100} />
                        </th>
                        <th id="child" className="w-[270px]">
                           <th id="child">
                              Дууны өнгө:
                              <Checkbox.Group value={formData?.q60}>
                                 <Checkbox value={'q60-1'} className="ml-2">
                                    Хэвийн
                                 </Checkbox>
                              </Checkbox.Group>
                           </th>
                           <p>Фонаци хийх үед: (Дууны хөвчүүд бүрэн гадаргуугаар шүргэлцэнэ)</p>
                           <p>Дууны хөвчүүдийн үйл ажиллаггааны хямрал:</p>
                        </th>
                        <th id="child">
                           Дууны хөвчийн доод зайн байдал:
                           <Input
                              className="amaraInput w-[600px] mb-1"
                              value={formData?.q17}
                              style={{ textAlign: 'center' }}
                              id="child"
                           />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th className="flex justify-center">ЧИХ ХАМАР ХООЛОЙН ҮЗЛЭГ</th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Хамрын амьсгал:</th>
                           <Checkbox.Group value={formData?.q18}>
                              <Checkbox value={'q18-1'} className="w-full ml-2">
                                 Чөлөөтэй
                              </Checkbox>
                              <Checkbox value={'q18-2'}>
                                 Саадтай
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
                                          <Checkbox className="ml-0 test" value={'q18-2-1-3'}>
                                             <span className="text-[11px]">2 талд адил,</span>
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
                           <th>Гадна хамрын хэлбэр:</th>
                           <Checkbox.Group value={formData?.q19}>
                              <Checkbox value={'q19-1'} className="w-full ml-2">
                                 Зөв
                              </Checkbox>
                              <Checkbox value={'q19-2'}>Зөв бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Тэмтрэхэд:</th>
                           <Checkbox.Group value={formData?.q20}>
                              <Checkbox value={'q20-1'} className="w-full ml-2">
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q20-2'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Хамрын үүдэвч</th>
                           <Checkbox.Group value={formData?.q21}>
                              <Checkbox value={'q21-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q21-2'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Ерөнхий хөндий:</th>
                           <Checkbox.Group value={formData?.q22}>
                              <Checkbox value={'q22-1'} className="w-full ml-2">
                                 Чөлөөтэй
                              </Checkbox>
                              <Checkbox value={'q22-2'}>Саадтай</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Хамрын таславч:</th>
                           <Checkbox.Group value={formData?.q23}>
                              <Checkbox value={'q23-1'} className="w-full ml-2">
                                 Муруйлтгүй
                              </Checkbox>
                              <Checkbox value={'q23-2'}>Муруйсан</Checkbox>
                              <Checkbox value={'q23-3'}>Бусад өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Image src={NoseImg} alt="" width={200} height={80} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Хамрын салст бүрхүүл:</th>
                           <Checkbox.Group value={formData?.q24}>
                              <Checkbox value={'q24-1'} className="w-full ml-2">
                                 Ягаан
                              </Checkbox>
                              <Checkbox value={'q24-2'} className="w-full">
                                 Улаан ягаан
                              </Checkbox>
                              <Checkbox value={'q24-3'} className="w-full">
                                 Хөхөлбий{' '}
                              </Checkbox>
                              <Checkbox value={'q24-4'} className="w-full">
                                 Цайвар{' '}
                              </Checkbox>
                              <Checkbox value={'q24-5'}>Бусад </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Самалдгууд:</th>
                           <Checkbox.Group value={formData?.q25}>
                              <Checkbox value={'q25-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q25-2'}>Хөөнгө</Checkbox>
                              <Checkbox value={'q25-3'}>Бусад өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                           <th>Хамрын жим:</th>
                           <Checkbox.Group value={formData?.q26}>
                              <Checkbox value={'q26-1'} className="w-full ml-2">
                                 Ялгадасгүй
                              </Checkbox>
                              <Checkbox value={'q26-2'}>Ялгадастай</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Ялгадас:</th>
                           <Checkbox.Group value={formData?.q27}>
                              <Checkbox className="w-full ml-2" value={'q27-1'}>
                                 Хэвийн
                              </Checkbox>
                           </Checkbox.Group>
                           <th>Эмгэг шинжтэй:</th>
                           <Checkbox.Group value={formData?.q28}>
                              <Checkbox value={'q28-1'} className="w-full ml-2">
                                 Идээрхэг
                              </Checkbox>
                              <Checkbox value={'q28-2'}>Ногоон</Checkbox>
                              <Checkbox value={'q28-3'}>Үнэртэй</Checkbox>
                              <Checkbox value={'q28-4'}>Өтгөн</Checkbox>
                              <Checkbox value={'q28-5'}>Бусад өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <Image src={NoseInsideImg} alt="" width="60%" height={70} className="ml-28" />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <p className="ml-2 underline">{`Бүсийн лимфийн булчирхайн байдал: ${formData?.q29}`}</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>Баруун, зүүн чих:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Гадна чихний хэлбэр:</th>
                           <Checkbox.Group value={formData?.q30}>
                              <Checkbox value={'q30-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q30-2'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Тэмтрэхэд:</th>
                           <Checkbox.Group value={formData?.q31}>
                              <Checkbox value={'q31-1'} className="w-full ml-2">
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q31-2'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Хөхлөг сэртэн:</th>
                           <Checkbox.Group value={formData?.q32}>
                              <Checkbox value={'q32-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q32-2'}>Хавантай</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Тэмтрэхэд:</th>
                           <Checkbox.Group value={formData?.q33}>
                              <Checkbox value={'q33-1'} className="w-full ml-2">
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q33-2'}>Эмзэглэлтэй</Checkbox>
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
                        <th>
                           <Image src={EarImg} alt="" width="50%" height={70} className="ml-36" />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Чихний гадна суваг:</th>
                           <Checkbox.Group value={formData?.q34}>
                              <Checkbox value={'q34-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q34-2'}>Нарийссан (төрөлхийн, олдмол)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q34}>
                              <Checkbox value={'q34-3'} className="w-full ml-2">
                                 Чөлөөтэй
                              </Checkbox>
                              <Checkbox value={'q34-4'}>Саадтай</Checkbox>
                              <Checkbox value={'q34-5'}>Ялгадасгүй</Checkbox>
                              <Checkbox value={'q34-6'}>
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.['q34-6-1']} className="inline">
                                          <Checkbox className="test" value={'q34-6-1-1'}>
                                             <span className="text-[11px]">идээрхэг,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q34-6-1-2'}>
                                             <span className="text-[11px]">үнэртэй,</span>
                                          </Checkbox>
                                          <Checkbox className="ml-0 test" value={'q34-6-1-3'}>
                                             <span className="text-[11px]">ногоон,</span>
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
                           <th>Сувгийн хана: </th>
                           <Checkbox.Group value={formData?.q35}>
                              <Checkbox value={'q35-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q35-2'}>Цүлхийсэн (аль хана)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Image src={EarInsideImg} alt="" width="130px" height={70} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Хэнгэргэн хальс:</th>
                           <Checkbox.Group value={formData?.q36}>
                              <Checkbox value={'q36-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q36-2'} className="w-full ">
                                 Хэвийн бус
                              </Checkbox>
                              <Checkbox value={'q36-3'} className="w-full ">
                                 Бусад{' '}
                              </Checkbox>
                              <Checkbox value={'q36-4'} className="w-full ">
                                 Сувдан саарал
                              </Checkbox>
                              <Checkbox value={'q36-5'}>Улаан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q36}>
                              <Checkbox value={'q36-6'} className="w-full ml-2">
                                 Цооролтын байрлал
                              </Checkbox>
                              <Checkbox value={'q36-7'}>Цооролтын хэмжээ</Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.['q36-8']}>
                              <p>Хэнгэргэн хөндийн салст:</p>
                              <Checkbox value={'q36-8-1'} className="ml-2">
                                 Цайвар ягаан
                              </Checkbox>
                              <Checkbox value={'q36-8-2'}>Улаан </Checkbox>
                              <Checkbox value={'q36-8-3'}>Эмгэг өөрчлөлт</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Image src={TambourineImg} alt="" width={330} height={100} className="mt-4" />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>
                              Бүсийн лимфийн булчирхайн байдал:
                              <Input
                                 className="amaraInput w-[450px] mb-1"
                                 value={formData?.q38}
                                 style={{ textAlign: 'center' }}
                              />
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Хөглүүрийн сорил:</th>
                           <Checkbox.Group value={formData?.q39}>
                              <Checkbox value={'q39-1'} className="w-full ml-2">
                                 Ринне
                              </Checkbox>
                              <Checkbox value={'q39-2'} className="w-full ">
                                 Вебер{' '}
                              </Checkbox>
                              <Checkbox value={'q39-3'} className="w-full ">
                                 Желле{' '}
                              </Checkbox>
                              <Checkbox value={'q39-4'} className="w-full ">
                                 Вальсалва{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           Сонсголын бичлэг:
                           <Input
                              className="amaraInput w-full mb-1"
                              value={formData?.q40}
                              style={{ textAlign: 'center' }}
                           />
                           Зэрэг:
                           <Input
                              className="amaraInput w-full mb-1"
                              value={formData?.q41}
                              style={{ textAlign: 'center' }}
                           />
                        </th>
                        <th>
                           <th>Ам ангайлт:</th>
                           <Checkbox.Group value={formData?.q42}>
                              <Checkbox value={'q42-1'} className="w-full ml-2">
                                 Чөлөөтэй
                              </Checkbox>
                              <Checkbox value={'q42-2'} className="w-full ">
                                 Хязгаарлагдсан{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q43}>
                              <p>Хүүхэн хэл:</p>
                              <Checkbox value={'q43-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q43-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Зөөлөн тагнай:</th>
                           <Checkbox.Group value={formData?.q44}>
                              <Checkbox value={'q44-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q44-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q45}>
                              <p>Тагнайн гүйлс:</p>
                              <Checkbox className="ml-2" value={'q45-1'}>
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q45-2'}>Томорсон </Checkbox>
                              <Checkbox value={'q45-3'}>1-р зэрэг </Checkbox>
                              <Checkbox value={'q45-4'}>2-р зэрэг </Checkbox>
                              <Checkbox value={'q45-5'}>3-р зэрэг </Checkbox>
                              <Checkbox value={'q45-6'}>Бусад өөрчлөлт </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <Image src={MouthImg} alt="" width={160} height={100} className="mt-2" />
                        </th>
                        <th className="w-[200px]">
                           <th>Архаг үрэвслийн шинж:</th>
                           <Checkbox.Group value={formData?.q46}>
                              <Checkbox value={'q46-1'} className="w-full ml-2">
                                 Зак
                              </Checkbox>
                              <Checkbox value={'q46-2'} className="w-full ">
                                 Гисс{' '}
                              </Checkbox>
                              <Checkbox value={'q46-3'} className="ml-2 ">
                                 Преображенский{' '}
                              </Checkbox>
                              <Checkbox value={'q46-4'} className="w-full ">
                                 Бусад{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Лакуны байдал:</th>
                           <Checkbox.Group value={formData?.q47}>
                              <Checkbox value={'q47-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q47-2'} className="w-full ">
                                 Өргөссөн{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q48}>
                              <p>Залгиурын ар хана:</p>
                              <Checkbox value={'q48-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q48-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Залгиурын хажуу хана:</th>
                           <Checkbox.Group value={formData?.q49}>
                              <Checkbox value={'q49-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q49-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q50}>
                              <p className="w-full">Шувтан хонхрын байдал:</p>
                              <Checkbox value={'q50-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q50-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Төвөнхийн гадна үзлэг:</th>
                           <Checkbox.Group value={formData?.q51}>
                              <Checkbox value={'q51-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q51-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q52}>
                              <p>Тэмтрэхэд:</p>
                              <Checkbox value={'q52-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q52-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[200px]">
                           <th>Нуржигнах:</th>
                           <Checkbox.Group value={formData?.q53}>
                              <Checkbox value={'q53-1'} className="w-full ml-2">
                                 Чимээтэй
                              </Checkbox>
                              <Checkbox value={'q53-2'} className="w-full ">
                                 Чимээгүй{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q54}>
                              <p>Төвөнхийн шууд бус тольдолтоор: Амьсгалын үйл ажиллагаа:</p>
                              <Checkbox value={'q54-1'} className="ml-2 ">
                                 Чөлөөтэй{' '}
                              </Checkbox>
                              <Checkbox value={'q54-2'} className="w-full ">
                                 Саалтай{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Халхавч мөгөөрс:</th>
                           <Checkbox.Group value={formData?.q55}>
                              <Checkbox value={'q55-1'} className="w-full ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q55-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q56}>
                              <p>Төвөнхийн салст:</p>
                              <Checkbox value={'q56-1'} className="ml-2 ">
                                 Цайвар ягаан{' '}
                              </Checkbox>
                              <Checkbox value={'q56-2'} className="w-full ">
                                 Улаан{' '}
                              </Checkbox>
                              <Checkbox value={'q56-3'} className="w-full ">
                                 Цайвар{' '}
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[200px]">
                           <th>Утгуур мөгөөрс:</th>
                           <Checkbox.Group value={formData?.q57}>
                              <Checkbox value={'q57-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q57-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q58}>
                              <p className="w-full">Дууны туслах хөвчүүд:</p>
                              <Checkbox value={'q58-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q58-2'} className="w-full ">
                                 Хэвийн бус{' '}
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q59}>
                              <p className="w-full">Жинхэнэ хөвч: </p>
                              <Checkbox value={'q59-1'} className="ml-2 ">
                                 Хэвийн{' '}
                              </Checkbox>
                              <Checkbox value={'q59-2'}>Хэвийн бус </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[170px]">
                           <Image src={TuvunhImg} alt="" width={160} height={100} />
                        </th>
                        <th className="w-[270px]">
                           <th>
                              Дууны өнгө:
                              <Checkbox.Group value={formData?.q60}>
                                 <Checkbox value={'q60-1'} className="ml-2">
                                    Хэвийн
                                 </Checkbox>
                                 <Checkbox value={'q60-2'}>Хэвийн бус </Checkbox>
                              </Checkbox.Group>
                           </th>
                           <p>Фонаци хийх үед: (Дууны хөвчүүд бүрэн гадаргуугаар шүргэлцэнэ)</p>
                           <p>Дууны хөвчүүдийн үйл ажиллаггааны хямрал:</p>
                        </th>
                        <th>
                           <th>
                              Дууны хөвчийн доод зайн байдал:
                              <Input
                                 className="amaraInput w-10 "
                                 value={formData?.q62}
                                 style={{ textAlign: 'center' }}
                              />
                           </th>

                           <p>ЦМХоолой цагираг:</p>
                           <Checkbox.Group value={formData?.q63}>
                              <Checkbox value={'q63-1'} className="ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q63-2'}>Хэвийн бус </Checkbox>
                              <Checkbox value={'q63-3'}>Өнгө </Checkbox>
                           </Checkbox.Group>
                           <p>
                              Бүсийн лимфийн булчирхайн байдал:
                              <Input
                                 className="amaraInput w-40 mb-1"
                                 value={formData?.q64}
                                 style={{ textAlign: 'center' }}
                              />
                           </p>
                           <p>
                              Бусад
                              <Input
                                 className="amaraInput w-40 mb-1"
                                 value={formData?.q65}
                                 style={{ textAlign: 'center' }}
                              />
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
export default CT_1_Chih;

