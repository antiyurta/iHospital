import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input, Image } from 'antd';
import BodyPart from '../../../../assets/images/bodypart.png';
import BodyPart2 from '../../../../assets/images/bodypart2.png';
import ChestImg from '../../../../assets/images/chest2.png';
import AbdomenImg from '../../../../assets/images/abdomen.png';

const CT_1_Gemtel = (props) => {
   const {
      data: { formData }
   } = props;
   console.log(props);
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center mb-2">ГЭМТЛИЙН ЭМЧИЙН ҮЗЛЭГ</th>
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
                                 <Input
                                    className="amaraInput w-10 mb-2"
                                    value={formData?.['q3-2-1']}
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
                        <th colSpan={4}>
                           <p className="mb-2">Амьсгалын эрхтэн тогтолцоо</p>
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[220px]" id="child">
                           Амьсгал 1 минутанд
                           <Input
                              className="amaraInput w-10 mb-2"
                              value={formData?.q4}
                              style={{ textAlign: 'center' }}
                           />
                           удаа
                        </th>
                        <th colSpan={3}>
                           Чагналтаар:
                           <Checkbox.Group value={formData?.q5}>
                              <Checkbox value={'q5-1'} className="ml-2">
                                 Хэржигнүүртэй
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Уушги цулцангийн</Checkbox>
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
                              <Checkbox value={'q5-3'}>Гуурсан хоолойн</Checkbox>
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
                              <Input className="amaraInput w-10" value={formData?.q6} style={{ textAlign: 'center' }} />
                              удаа
                           </p>
                           <p>
                              Хүчдэл дүүрэлт
                              <Input className="amaraInput w-10" value={formData?.q7} style={{ textAlign: 'center' }} />
                           </p>
                        </th>
                        <th>
                           <p>Тогшилтоор:</p>
                           <p id="child"> Зүрхний хил</p>
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
                              <Input className="amaraInput w-8" value={formData?.q10} style={{ textAlign: 'center' }} />
                           </th>
                           <th id="child">
                              Зүүн талд
                              <Input className="amaraInput w-8" value={formData?.q11} style={{ textAlign: 'center' }} />
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
                                 <Input
                                    className="amaraInput w-8"
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
                     <tr>
                        <th colSpan={4}>Мэдрэлийн тогтолцоо</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <p id="child"> Сонсох чадвахи:</p>
                           <Checkbox.Group value={formData?.q14}>
                              <Checkbox value={'q14-1'}>Хэвийн</Checkbox>
                              <Checkbox value={'q14-2'}>
                                 <p className="flex items-center gap-2">
                                    <p> Буурсан</p>
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
                           <p id="child">Рефлексүүд</p>
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
                           <p className="w-full">
                              Бусад
                              <Input
                                 className="amaraInput w-[670px] mb-1"
                                 value={formData?.q16}
                                 style={{ textAlign: 'center' }}
                              />
                           </p>
                           <p>
                              Сэтгэцийн байдал:
                              <Input
                                 className="amaraInput w-[600px] mb-1"
                                 value={formData?.q17}
                                 style={{ textAlign: 'center' }}
                              />
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <th className="flex justify-center">
                  <p>АНХАН ШАТНЫ ҮЗЛЭГ БОЛОН СЭХЭЭН АМЬДРУУЛАХ</p>
               </th>

               <Table bordered className="story">
                  <thead>
                     <tr className="border-t-0 ">
                        <th className="w-[25px] bg-neutral-300 text-center">А</th>
                        <th className="bg-neutral-300 text-center " colSpan={2}>
                           Амьсгалын зам болон хүзүү нуруу
                        </th>
                     </tr>
                     <tr>
                        <th></th>
                        <th className="h-[200px] border-r-0">
                           <div>
                              <div></div>
                              <div></div>
                           </div>
                           <div id="child"> Амьсгалын зам чөлөөтэй</div>
                           <div className="flex gap-10 ">
                              <div id="child">Амьсгалж байгаа байдал</div>
                           </div>
                           <div id="child"> Эрүү нүүрний гэмтэл </div>
                           <div id="child"> Эмчилгээ:</div>
                           <div className="mt-6" id="child">
                              Хүзүү, нурууны үнэлгээ:
                           </div>
                           <div className="mt-6" id="child">
                              Хүзүү нурууны хөдөлгөөн хорих
                           </div>
                        </th>
                        <th className="w-[45%] border-l-0">
                           <div>
                              <div></div>
                              <div></div>
                           </div>
                           <div>
                              <div id="child">
                                 <p>
                                    <span className="text-[11px]">
                                       <Checkbox.Group value={formData?.['q14-2-1']} className="inline">
                                          <Checkbox className="test" value={'q14-2-1-1'}>
                                             <span className="text-[11px]">Тийм/</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q14-2-1-2'}>
                                             <span className="text-[11px]">үгүй</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                    </span>
                                 </p>
                              </div>
                              <div id="child">
                                 {' '}
                                 <span className="text-[11px]">
                                    <Checkbox.Group value={formData?.['q14-2-1']} className="inline">
                                       <Checkbox className="test" value={'q14-2-1-1'}>
                                          <span className="text-[11px]">Тийм/</span>
                                       </Checkbox>
                                       &nbsp;
                                       <Checkbox className="ml-0 test" value={'q14-2-1-2'}>
                                          <span className="text-[11px]">үгүй</span>
                                       </Checkbox>
                                       &nbsp;
                                    </Checkbox.Group>
                                 </span>
                              </div>
                              <div id="child">
                                 {' '}
                                 <span className="text-[11px]">
                                    <Checkbox.Group value={formData?.['q14-2-1']} className="inline">
                                       <Checkbox className="test" value={'q14-2-1-1'}>
                                          <span className="text-[11px]">Тийм/</span>
                                       </Checkbox>
                                       &nbsp;
                                       <Checkbox className="ml-0 test" value={'q14-2-1-2'}>
                                          <span className="text-[11px]">үгүй</span>
                                       </Checkbox>
                                       &nbsp;
                                    </Checkbox.Group>
                                 </span>
                              </div>
                              <div id="child" className="mt-20">
                                 <span className="text-[11px]">
                                    <Checkbox.Group value={formData?.['q14-2-1']} className="inline">
                                       <Checkbox className="test" value={'q14-2-1-1'}>
                                          <span className="text-[11px]">Тийм/</span>
                                       </Checkbox>
                                       &nbsp;
                                       <Checkbox className="ml-0 test" value={'q14-2-1-2'}>
                                          <span className="text-[11px]">үгүй</span>
                                       </Checkbox>
                                       &nbsp;
                                    </Checkbox.Group>
                                 </span>
                              </div>
                           </div>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr>
                        <th className="w-[25px] bg-neutral-300 text-center">В</th>
                        <th className="bg-neutral-300 text-center" colSpan={6}>
                           Амьсгалын зам болон хүзүү нуруу
                        </th>
                     </tr>
                     <tr>
                        <th id="child" rowSpan={4}></th>
                        <th id="child">Амьсгал</th>
                        <th id="child">Тусламжтай</th>
                        <th id="child">Өөрөө</th>
                        <th id="child"></th>
                        <th id="child">Амьсгалын аппарат </th>
                        <th id="child">Тийм/үгүй</th>
                     </tr>
                     <tr>
                        <th id="child">Цээж рүү нэвтэрсэн гэмтэл</th>
                        <th colSpan={2}>
                           <Checkbox.Group>
                              <Checkbox>Тийм</Checkbox>
                              <Checkbox>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child"></th>
                        <th id="child" colSpan={2}>
                           Хэмжээ:
                        </th>
                     </tr>
                     <tr className="h-16">
                        <th id="child" colSpan={3}>
                           Үзлэг:
                        </th>
                        <th id="child"></th>
                        <th id="child" colSpan={4}></th>
                     </tr>
                     <tr className="h-16">
                        <th id="child" colSpan={3}>
                           Эмчилгээ:
                        </th>
                        <th id="child"></th>
                        <th id="child" colSpan={4}></th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage ">
               <div className="flex gap-5 mn-0">
                  <Table bordered className="story">
                     <thead>
                        <tr>
                           <th className="bg-neutral-300">C</th>
                           <th colSpan={4} className="text-center bg-neutral-300">
                              Цусны эргэлт болон гэмтлийн шаталбар /оноо
                           </th>
                        </tr>
                        <tr>
                           <th id="child" rowSpan={8}></th>
                           <th id="child" colSpan={4}>
                              Судасны лугшилт{' '}
                           </th>
                        </tr>
                        <tr>
                           <th colSpan={4} id="child">
                              Цусны даралт{' '}
                           </th>
                        </tr>
                        <tr>
                           <th colSpan={4} id="child">
                              Амьсгалын хэмжээ{' '}
                           </th>
                        </tr>
                        <tr>
                           <th id="child">Амьсгалын байдал</th>
                           <th id="child">Хэвийн</th>
                           <th id="child">Өнгөц</th>
                           <th id="child">Тасалданг</th>
                        </tr>
                        <tr>
                           <th id="child">Калиллярын дүүрэх хугацаа </th>
                           <th id="child">{data}</th>
                           <th id="child">{data2}</th>
                           <th id="child">байхгүй</th>
                        </tr>
                        <tr>
                           <th id="child" colSpan={4}>
                              Температур
                           </th>
                        </tr>
                        <tr>
                           <th id="child" colSpan={4}>
                              Мөчний хэлбэр алдагдсан{' '}
                           </th>
                        </tr>
                        <tr>
                           <th id="child" colSpan={4}>
                              Гадагш цус алдалт
                           </th>
                        </tr>
                     </thead>
                  </Table>
                  <Table bordered className="story ">
                     <thead>
                        <tr>
                           <th colSpan={2} className="text-center bg-neutral-300">
                              Хүндрэл болон чадвар алдалт
                           </th>
                        </tr>
                        <tr>
                           <th id="child" colSpan={2}>
                              Глазго-ийн кома{' '}
                           </th>
                        </tr>
                        <tr>
                           <th id="child" colSpan={2}>
                              {' '}
                              шаталбар
                           </th>
                        </tr>
                        <tr>
                           <th id="child" colSpan={2} className="h-6">
                              {' '}
                           </th>
                        </tr>
                        <tr>
                           <th colSpan={2} id="child">
                              {' '}
                              GCS _____ /15
                           </th>
                        </tr>
                        <tr>
                           <th colSpan={2} className=" bg-neutral-300">
                              Хүүхэн хараа
                           </th>
                        </tr>
                        <tr>
                           <th id="child">Баруун</th>
                           <th id="child">Зүүн</th>
                        </tr>
                        <tr>
                           <th id="child">Хэмжээ</th>
                           <th id="child">Хэмжээ</th>
                        </tr>
                        <tr>
                           <th id="child">Хариу урвал</th>
                           <th id="child">Хариу урвал</th>
                        </tr>
                        <tr className="h-8" colSpan={2}>
                           <th colSpan={2}></th>
                        </tr>
                     </thead>
                  </Table>
                  <div className="text-[11px] font-semibold  font-family: Arial,Helvetica, san-serif  ">
                     <div className="border-1 border-slate-950 text-center bg-neutral-300">
                        Глазго-ийн ком/шаталбар /оноо/
                     </div>
                     <div className="flex text-[11px] font-family:Arial, Helvetica, sans-serif font-light h-[72.32px] ">
                        <div className="border-1  border-t-0 border-slate-950 relative flex items-center justify-center w-[30px] text-[11px] font-semibold  font-family: Arial,Helvetica, san-serif ">
                           <div className="-rotate-90 whitespace-nowrap h-fit ">Нүд нээх</div>
                        </div>
                        <div className="border-1 border-slate-950 border-t-0 border-l-0 text-[11px] font-semibold  font-family: Ari`al,Helvetica, san-serif w-[130px]">
                           <div id="cls">Аяндаа</div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              Ярихад{' '}
                           </div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              Өвтгөхөд{' '}
                           </div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              Зүүгээр хатгахад{' '}
                           </div>
                        </div>
                        <div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[18px] border-t-0">4</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[18px] border-t-0">3</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[18px] border-t-0">2</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[18px] border-t-0">1</div>
                        </div>
                     </div>
                     <div className="flex text-[11px] font-family:Arial, Helvetica, sans-serif font-[500] h-[145px] ">
                        <div className="border-1  border-t-0 border-slate-950 relative flex items-center justify-center w-[30px] text-[11px] font-semibold  font-family: Arial,Helvetica, san-serif ">
                           <div className="-rotate-90 whitespace-nowrap h-fit ">Хэл яриа</div>
                        </div>
                        <div className="border-1 border-slate-950 border-t-0 border-l-0 text-[11px] font-semibold  font-family: Ari`al,Helvetica, san-serif w-[130px]">
                           <div id="cls">Орон зай хугацааны баримжаатай</div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              Ойлгомжтой гэхдээ будилсан{' '}
                           </div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              Тохироогүй үг хэлэх
                           </div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              Ойлгомжгүй авиа гаргах{' '}
                           </div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              Ярихгүй, дуу гаргахгүй{' '}
                           </div>
                        </div>
                        <div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[34.85px] border-t-0">5</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[35.55px] border-t-0">4</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[18.18px] border-t-0">3</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[18.45px] border-t-0">2</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[38.20px] border-t-0">1</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex gap-5">
                  <Table bordered className="story mb-0">
                     <thead>
                        <tr>
                           <th colSpan={4}>
                              <div className="flex items-center gap-4 ml-4">
                                 <p id="child"> ЯТТасагт хийсэн эмчилгээ:</p>
                                 <Checkbox.Group>
                                    <Checkbox>Тийм</Checkbox>
                                    <Checkbox> Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </div>
                           </th>
                        </tr>
                        <tr>
                           <th className="h-6 w-[50px]"></th>
                           <th className="h-6"></th>
                           <th className="h-6 w-[30px]"></th>
                           <th className="h-6"></th>
                        </tr>
                        <tr>
                           <th className="h-6"></th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                        <tr>
                           <th className="h-6"></th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                        <tr>
                           <th className="h-6"></th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                        <tr>
                           <th className="h-4"></th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                        <tr>
                           <th className="h-4"></th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                        <tr>
                           <th className="h-4"></th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                     </thead>
                  </Table>
                  <div className="text-[11px] font-semibold  font-family: Arial,Helvetica, san-serif  ">
                     <div className="flex text-[11px] font-family:Arial, Helvetica, sans-serif font-[500] h-[230px] ">
                        <div className="border-1  border-t-0 border-slate-950 relative flex items-center justify-center w-[30px] text-[11px] font-semibold  font-family: Arial,Helvetica, san-serif ">
                           <div className="-rotate-90 whitespace-nowrap h-fit ">Хөдөлгөөний хариу үйлдэл</div>
                        </div>
                        <div className="border-1 border-slate-950 border-t-0 border-l-0 text-[11px] font-semibold  font-family: Ari`al,Helvetica, san-serif w-[130px]">
                           <div id="cls">Заавараар хөдөлгөөн хийх</div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              Өвтгөхөд цочруулд хэсэг газрын хөдөлгөөн хийх
                           </div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              Өвтгөхөд татганах хариу өгөх
                           </div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              Өвтгөхөд атийх хариу өгөх
                           </div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              Өтгөхөд тэнийх хариу өгөх
                           </div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              Өвтгөхөд ямар ч хариу өгөхгүй
                           </div>
                        </div>
                        <div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[35px] border-t-0">6</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[35.83px] border-t-0">5</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[35.35px] border-t-0">4</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[35.65px] border-t-0">3</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[35.10px] border-t-0">2</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[53.15px] border-t-0">1</div>
                        </div>
                     </div>
                     <div className="flex">
                        <div className="border-1 border-slate-950 relative flex items-center justify-center w-[30px] border-t-0">
                           <div className="-rotate-90 whitespace-nowrap h-fit">Оноо</div>
                        </div>
                        <div className="border-1 border-slate-950 border-l-0 w-full border-t-0">
                           <div id="cls">13-15 хөнгөн</div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              9-12 дунд{' '}
                           </div>
                           <div id="cls" className="border-t-[1px] border-slate-950">
                              3-8 хүнд
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex justify-center mt-4">
                  <div>
                     <Image src={BodyPart} alt="" width={120} height={500} />
                  </div>
                  <div className="flex flex-col gap-5">
                     <div>
                        <div className="w-[300px] bg-neutral-300">
                           <div className="text-center ">ХОЁР ДАХЬ ШАТНЫ ҮЗЛЭГ</div>
                        </div>
                     </div>
                     <div>
                        <div className="w-[300px] bg-neutral-300  border-1 border-slate-950">
                           <div className="text-center font-[500] ">Толгой, нүүр болон хүзүү</div>
                        </div>
                        <div className="w-[300px] flex flex-col items-start border-1 border-t-0 border-slate-950 h-[80px] justify-end">
                           <div className="text-center text-[13px] font-[300] ml-2">Нүд:</div>
                           <div className="text-center text-[13px] font-[300] ml-2">Чихний хэнгэрэг:</div>
                        </div>
                     </div>
                     <div>
                        <div className="w-[300px] bg-neutral-300  border-1 border-slate-950">
                           <div className="text-center font-[500] ">Цээж:</div>
                        </div>
                        <div className="w-[300px] flex flex-col items-start border-1 border-t-0 border-slate-950 h-[80px] justify-end">
                           <Image src={ChestImg} alt="" width={120} />
                        </div>
                     </div>
                     <div>
                        <div className="w-[300px] bg-neutral-300  border-1 border-slate-950">
                           <div className="text-center  font-[500]">Хэвлий:</div>
                        </div>
                        <div className="w-[300px] flex flex-col items-start border-1 border-t-0 border-slate-950 h-[110px] justify-end">
                           <Image src={AbdomenImg} alt="" width={120} />
                           <div className="text-center text-[13px] font-[300] ml-2 ">Шээсний зам:</div>
                        </div>
                     </div>
                     <div>
                        <div className="w-[300px] bg-neutral-300  border-1 border-slate-950">
                           <div className="text-center font-[500]">Аарцаг</div>
                        </div>
                        <div className="w-[300px] flex flex-col items-start border-1 border-t-0 border-slate-950 h-[25px] ">
                           <div className="text-center"></div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <Image src={BodyPart2} alt="" width={120} height={500} />
                  </div>
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div className="flex justify-center mt-4">
                  <div className="flex flex-col gap-5">
                     <div>
                        <div className="w-[300px] flex flex-col items-start border-1  border-slate-950 h-[120px] justify-end">
                           <div className=" text-[13px] font-[300] ml-2">Хярзан</div>
                           <div className=" text-[13px] font-[300] ml-2">Шээсний сүв</div>
                           <div className=" text-[13px] font-[300] ml-2">Шулуун гэдэсний үзлэг</div>
                           <div className=" text-[13px] font-[300] ml-2">Бүдүүн гэдэсний реплекс </div>
                           <div className=" text-[13px] font-[300] ml-2">Үтрээний үзлэг</div>
                        </div>
                     </div>
                     <div>
                        <div className="w-[300px] bg-neutral-300  border-1 border-slate-950">
                           <div className="text-center font-[500]">Нугас, нуруу</div>
                        </div>
                        <div className="w-[300px] flex flex-col items-start border-1 border-t-0 border-slate-950 h-[50px] ">
                           <div className="text-center"></div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex gap-[40px]">
                  <div className="mt-20">
                     <Table bordered className="story w-[170px]">
                        <thead>
                           <tr>
                              <th className="bg-neutral-300 h-[30px]">
                                 <p className="mt-2">Мэдрэлийн рефлекс</p>
                              </th>
                              <th className="bg-neutral-300 w-[30px] text-center">
                                 <p className="mt-2">R</p>
                              </th>
                           </tr>
                           <tr>
                              <th id='cls'>Biceps </th>
                              <th id='cls'></th>
                           </tr>
                           <tr>
                              <th id='cls'>Triceps</th>
                              <th id='cls'></th>
                           </tr>
                           <tr>
                              <th id='cls'>Supinator</th>
                              <th id='cls'></th>
                           </tr>
                           <tr>
                              <th id='cls'>Knee</th>
                              <th id='cls'></th>
                           </tr>
                           <tr>
                              <th id='cls'>Ankle</th>
                              <th id='cls'></th>
                           </tr>
                           <tr>
                              <th id='cls'>Plantar</th>
                              <th id='cls'></th>
                           </tr>
                        </thead>
                     </Table>
                  </div>
                  <div>
                     <Table bordered className="story mb-0 w-[300px] mt-4 ">
                        <thead>
                           <tr className="text-center">
                              <th>Баруун</th>
                              <th className="bg-neutral-300">Дээд мөч</th>
                              <th>Зүүн</th>
                           </tr>
                        </thead>
                     </Table>
                     <Table bordered className="story w-[300px]">
                        <thead>
                           <tr className="border-t-0">
                              <th id="cls">
                                 <p>Ясны гэмтэл</p>
                                 <p>Үений гэмтэл</p>
                                 <p>Судасны лугшилт</p>
                                 <p>Хүч</p>
                                 <p>Тонус</p>
                              </th>
                              <th id="cls">
                                 <p>Ясны гэмтэл</p>
                                 <p>Үений гэмтэл</p>
                                 <p>Судасны лугшилт</p>
                                 <p>Хүч</p>
                                 <p>Тонус</p>
                              </th>
                           </tr>
                        </thead>
                     </Table>
                     <Table bordered className="story mb-0 w-[300px]">
                        <thead>
                           <tr className="text-center">
                              <th>Баруун</th>
                              <th className="bg-neutral-300">Доод мөч</th>
                              <th>Зүүн</th>
                           </tr>
                        </thead>
                     </Table>
                     <Table bordered className="story w-[300px]">
                        <thead>
                           <tr className="border-t-0" id="cls">
                              <th>
                                 <p id="cls">Ясны гэмтэл</p>
                              </th>
                              <th>
                                 <p id="cls">Ясны гэмтэл</p>
                              </th>
                           </tr>
                           <tr>
                              <th>
                                 <p id="cls">Үений гэмтэл</p>
                              </th>
                              <th>
                                 <p id="cls">Үений гэмтэл</p>
                              </th>
                           </tr>
                           <tr>
                              <th>
                                 <p id="cls">Судасны лугшилт</p>
                              </th>
                              <th>
                                 <p id="cls">Судасны лугшилт</p>
                              </th>
                           </tr>
                           <tr>
                              <th>
                                 <p id="cls">Хүч</p>
                              </th>
                              <th>
                                 <p id="cls">Хүч</p>
                              </th>
                           </tr>
                           <tr>
                              <th>
                                 <p id="cls">Тонус</p>
                              </th>
                              <th>
                                 <p id="cls">Тонус</p>
                              </th>
                           </tr>
                        </thead>
                     </Table>
                  </div>

                  <div className="mt-20">
                     <Table bordered className="story w-[170px]">
                        <thead>
                           <tr>
                              <th className="bg-neutral-300 w-[30px] text-center">
                                 <p className="mt-2">L</p>
                              </th>
                              <th className="bg-neutral-300 h-[30px]">
                                 <p className="mt-2">Мэдрэлийн рефлекс</p>
                              </th>
                           </tr>
                           <tr>
                              <th id="cls"></th>
                              <th id="cls">Biceps </th>
                           </tr>
                           <tr>
                              <th id="cls"></th>
                              <th id="cls">Triceps</th>
                           </tr>
                           <tr>
                              <th id="cls"></th>
                              <th id="cls">Supinator</th>
                           </tr>
                           <tr>
                              <th id="cls"></th>
                              <th id="cls">Knee</th>
                           </tr>
                           <tr>
                              <th id="cls"></th>
                              <th id="cls">Ankle</th>
                           </tr>
                           <tr>
                              <th id="cls"></th>
                              <th id="cls">Plantar</th>
                           </tr>
                        </thead>
                     </Table>
                  </div>
               </div>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr>
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
                        <th className="h-60 w-[200px] text-center">Ялган оношлох эмгэгүүд ба хам шинжүүд</th>
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
export default CT_1_Gemtel;
export const data = ['<2 cек'];
export const data2 = ['>2 cек'];
