import React from 'react';
import { Checkbox, Image, Input } from 'antd';
import { Table } from 'react-bootstrap';
import HematopImg from '../../../../assets/images/hematop.png';
import BodyImg from '../../../../assets/images/body.png';
import Body2Img from '../../../../assets/images/body2.png';
import ChestImg from '../../../../assets/images/chest.png';
const CT_1_Tsus = (props) => {
   const {
      data: { formData }
   } = props;
   console.log('Form', formData);
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center">ЦУСНЫ ЭМЧИЙН ҮЗЛЭГ</th>
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
                              <Checkbox value={'q2-1'}>Бүдгэрсэн</Checkbox>
                              <Checkbox value={'q2-2'}>Ухаангүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={4}>
                           <Checkbox.Group value={formData?.q3}>
                              <Checkbox className="ml-2" value={'q3-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q3-2'}>
                                 Хэвийн бус
                                 <Input className=" w-10" value={'q3-2-1'} style={{ textAlign: 'center' }} />
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
                           <Input className=" w-10" value={formData?.q4} style={{ textAlign: 'center' }} />
                           удаа
                        </th>
                        <th colSpan={3}>
                           Чагналтаар:
                           <Checkbox.Group value={formData?.q5}>
                              <Checkbox className="ml-2" value={'q5-1'}>
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
                                             <span className="text-[11px]"> 2 талдаа,</span>
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
                        <th colSpan={4}>Цусны эргэлтийн тогтолцоо</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           Судасны цохилт 1 минутанд
                           <Input className=" w-10" value={formData?.q6} style={{ textAlign: 'center' }} />
                           удаа
                           <th>
                              Хүчдэл дүүрэлт
                              <Input className=" w-10" value={formData?.q7} style={{ textAlign: 'center' }} />
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
                              <Input className=" w-8" value={formData?.q10} style={{ textAlign: 'center' }} />/
                           </th>
                           <th>
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
                              <Checkbox value={'q13-5'} className="">
                                 Эмзэглэлтэй (байрлал
                                 <Input
                                    className=" w-8"
                                    value={formData?.['q13-5-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 )
                              </Checkbox>
                              <Checkbox value={'q13-3'}>Ердийн</Checkbox>
                              <Checkbox value={'q13-4'}>Зөөлөн гялтан цочрол үгүй</Checkbox>
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
                              <Checkbox value={'q14-2'}>Буурсан (баруун, зүүн)</Checkbox>
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
                              <Input className=" w-[670px]" value={formData?.q16} style={{ textAlign: 'center' }} />
                           </th>
                           Сэтгэцийн байдал:
                           <Input className=" w-[600px] mb-1" value={formData?.q17} style={{ textAlign: 'center' }} />
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
                        <th rowSpan={2}>
                           <Image src={HematopImg} alt="" width={250} height={160} className="p-8" />
                        </th>
                        <th>
                           Зовиур:
                           <Input className=" w-[400px] mb-1" style={{ textAlign: 'center' }} />
                           <Input className=" w-full mb" style={{ textAlign: 'center' }} />
                           <Input className=" w-full mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th>
                           <p>
                              Биеийн жин /Кг/ :
                              <Input value={formData?.q18} />
                           </p>
                           <p>
                              Биеийн өндөр /См/:
                              <Input value={formData?.q19} />
                           </p>
                           <p>
                              Биеийн гадаргуу / м2
                              <Input value={formData?.q20} />
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <p>Арьсан дээрх тууралтын хэлбэр:</p>
                           <Checkbox.Group value={formData?.q21}>
                              <Checkbox className="ml-2 w-full" value={'q21-1'}>
                                 Цэгчилсэн гүвдрүүт тууралт
                              </Checkbox>
                              <Checkbox className="w-full" value={'q21-2'}>
                                 Цэврүүт тууралт
                              </Checkbox>
                              <Checkbox className="w-full" value={'q21-3'}>
                                 Толбон тууралт
                              </Checkbox>
                              <Checkbox className="w-full" value={'q21-4'}>
                                 Шалбархайт болон тав тогтсон
                              </Checkbox>
                              <Checkbox className="w-full" value={'q21-5'}>
                                 Сорви
                              </Checkbox>
                              <Checkbox className="w-full" value={'q21-6'}>
                                 Хөхрөлт
                              </Checkbox>
                              <Checkbox className="w-full" value={'q21-7'}>
                                 Цус хуралт
                              </Checkbox>
                              <Checkbox className="w-full" value={'q21-8'}>
                                 Цус харвалт
                              </Checkbox>
                              <Checkbox className="w-full" value={'q21-9'}>
                                 Холимог туурал
                              </Checkbox>
                              <Checkbox className="w-full" value={'q21-10'}>
                                 Тууралтгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Үсний байдал:</p>
                           <Checkbox.Group value={formData?.q22}>
                              <Checkbox className="ml-2" value={'q22-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q22-2'}>Хугарамтгай</Checkbox>
                           </Checkbox.Group>
                           <p>Хумсны байдал:</p>
                           <Checkbox.Group value={formData?.q23}>
                              <Checkbox className="ml-2" value={'q23-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q23-2'}>Хугарамтгай</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>(Тууралтын байрлалыг зурагт тэмдэглэх)</p>
                           <Image src={BodyImg} alt="" width={280} height={220} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 ">
                        <th>
                           <p>Хумсны байдал:</p>
                           <Checkbox.Group value={formData?.q24}>
                              <Checkbox className="ml-2 w-full" value={'q24-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="w-full" value={'q24-2'}>
                                 Хугарамтгай
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Амны хөндий: Хэл/ </p>
                           <p>Өнгө:</p>
                           <Checkbox.Group value={formData?.q25}>
                              <Checkbox className="ml-2" value={'q25-1'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'q25-2'}>Цайвар</Checkbox>
                              <Checkbox value={'q25-3'}>Улаан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Хөхлөг</p>
                           <Checkbox.Group value={formData?.q26}>
                              <Checkbox className="ml-2 w-full" value={'q26-1'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox className="w-full" value={'q26-2'}>
                                 Хатингаршсан
                              </Checkbox>
                              <Checkbox className="w-full" value={'q26-3'}>
                                 Томорсон
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Тууралт</p>
                           <Checkbox.Group value={formData?.q27}>
                              <Checkbox className="ml-2 w-full" value={'q27-1'}>
                                 Тууралттай
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'q27-2'}>
                                 Шарх
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'q27-3'}>
                                 Улайлт
                              </Checkbox>
                              <Checkbox className="w-full" value={'q27-4'}>
                                 Яр
                              </Checkbox>
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
                        <th className="w-[25%]"></th>
                        <th className="w-[25%]">
                           <Checkbox value={formData?.['q25-4']}>Ягаан</Checkbox>
                        </th>
                        <th className="w-[25%]"></th>
                        <th className="w-[25%]">
                           <Checkbox value={formData?.['q27-5']}>Газрын зураг</Checkbox>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[27%]">
                           <p>Бөөрөлзгөнө хэл Өнгө:</p>
                           <Checkbox.Group value={formData?.q28}>
                              <Checkbox className="ml-2 " value={'q28-1'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'q28-2'}>Улайсан</Checkbox>
                              <Checkbox value={'q28-3'}>Цайсан</Checkbox>
                              <Checkbox value={'q28-4'}>Хөхөлбий</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[23%]">
                           <p>Шарх:</p>
                           <Checkbox.Group value={formData?.q29}>
                              <Checkbox className="ml-2 " value={'q29-1'}>
                                 Шархтай
                              </Checkbox>
                              <Checkbox value={'q29-2'}>Шархгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <p>Буйл: Эмзэглэл</p>
                           <Checkbox.Group value={formData?.q30}>
                              <Checkbox className="ml-2" value={'q30-1'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q30-2'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <p>Тууралт:</p>
                           <Checkbox.Group value={formData?.q31}>
                              <Checkbox className="ml-2" value={'q31-1'}>
                                 Тууралттай
                              </Checkbox>
                              <Checkbox value={'q31-2'}>Тууралтгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>Тунгалагийн булчирхайн байдал:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className=" border-r-0">
                           <p>Нягт :</p>
                           <Checkbox.Group value={formData?.q32}>
                              <Checkbox value={'q32-1'} className="ml-2 ">
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'q32-2'} className="w-full">
                                 Зөөлөн
                              </Checkbox>
                           </Checkbox.Group>
                           <p>Гадаргуу :</p>
                           <Checkbox.Group value={formData?.q33}>
                              <Checkbox value={'q33-1'} className="ml-2 ">
                                 Барзгар
                              </Checkbox>
                              <Checkbox value={'q33-2'} className="w-full">
                                 Гөлгөр
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="border-l-0 ">
                           <Image src={Body2Img} alt="" width={100} height={100} className="mr-4" />
                        </th>
                        <th className="w-[23%]">
                           <p>Хөдөлгөөн:</p>
                           <Checkbox.Group value={formData?.q34}>
                              <Checkbox className="ml-2" value={'q34-1'}>
                                 Хөдөлгөөнтэй
                              </Checkbox>
                              <Checkbox value={'q34-2'}>Хөдөлгөөнгүй</Checkbox>
                           </Checkbox.Group>
                           <p>Эмзэглэл:</p>
                           <Checkbox.Group value={formData?.q35}>
                              <Checkbox className="ml-2" value={'q35-1'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'q35-2'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[50%] border-r-0">
                           <p>Дэлүүний хэмжээ</p>
                           <Checkbox.Group value={formData?.q36}>
                              <Checkbox value={'q36-1'} className="ml-2">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q36-2'}>1зэргээр томорсон.</Checkbox>
                              <Checkbox value={'q36-3'} className="ml-2">
                                 2 зэргээр томорсон
                              </Checkbox>
                              <Checkbox value={'q36-4'} className="ml-2">
                                 3 зэргээр томорсон.
                              </Checkbox>
                              <Checkbox value={'q36-5'} className="ml-2">
                                 4 зэргээр томорсон.
                              </Checkbox>
                              <Checkbox value={'q36-6'} className="ml-2">
                                 Дэлүү мэс заслаар авагдсан.
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="border-l-0">
                           <Image src={ChestImg} alt="" width={120} height={100} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>Шинжилгээ:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">Цусны дэлгэрэнгүй шинжилгээ:</th>
                        <th className="w-[50%]">Лейкограмм</th>
                     </tr>
                  </thead>
               </Table>

               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">WBC</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Blasts</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">PLT</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Basophil</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">RBC</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Eosinophil</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">HGB</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Promyelocyte</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">HCT</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Myelocyte</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">MCV</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Bands</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">RET</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Neutrophil</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">RET-He</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Lymphocyte</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]"></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Monocyte</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">
                           Дүгнэлт:
                           <Input className=" w-[660px]" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">Миелограмм:</th>
                     </tr>
                  </thead>
               </Table>

               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th className="w-[60%]" colSpan={4} rowSpan={7}>
                           Дүгнэлт:
                           <Input className=" w-[370px] mb-1" style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">Бласт</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">Бүх нейтрофиль</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">Бүх эритриод эс</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">Лимфоцит</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">Плазмоцит</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">Мегакариоцит</th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">Цито химийн урвал :</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[20%]"></th>
                        <th>Эерэг</th>
                        <th>Сөрөг</th>
                        <th className="w-[20%]">Огноо</th>
                        <th className="w-[20%]"></th>
                        <th className="w-[20%]"></th>
                     </tr>
                     <tr>
                        <th>MPO</th>
                        <th></th>
                        <th></th>
                        <th>APTT</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>PAS</th>
                        <th></th>
                        <th></th>
                        <th>PT</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>DAB</th>
                        <th></th>
                        <th></th>
                        <th>INR</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>NS</th>
                        <th></th>
                        <th></th>
                        <th>TT</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Fibrinogen</th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">Биохими</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th className="w-[60%]" colSpan={4} rowSpan={15}>
                           Дүгнэлт:
                           <Input className=" w-[370px] mb-1" style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th>Нийт билирубин</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Шууд бус билирубин</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Алат</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Асат</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Шүлт Фосфатаза</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>ЛДГ</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Кальци</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Кали</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Креатинин</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Төмөр</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Ферритин</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Төмөр хол/ чадвар</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Витамин В12</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Фолийн хүчил</th>
                        <th></th>
                        <th></th>
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
                        <th className="w-[50%]">
                           Бактер, вирус, маркерийн шинжилгээ:
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full mb-1" style={{ textAlign: 'center' }} />
                        </th>
                        <th className="w-[50%]">
                           Дүгнэлт:
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]" colSpan={4} rowSpan={15}>
                           Шээсэнд:
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th className="w-[60%]" colSpan={4} rowSpan={15}>
                           Дүгнэлт:
                           <Input className=" w-[370px] mb-1" style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th>Сахар</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>pH</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Уураг</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Цагаан эс</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Улаан эс</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Хувийн жин</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>гемосидерин</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Бенс-жонс уураг</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Гемоглобин</th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]" colSpan={4} rowSpan={15}>
                           Цусанд: :
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th className="w-[60%]" colSpan={4} rowSpan={15}>
                           Дүгнэлт:
                           <Input className=" w-[370px] mb-1" style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th>Кумбсын шууд урвал</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Кумбсын шууд бус урвал</th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]" colSpan={4} rowSpan={15}>
                           Бусад(PCR, молекул генетик цитогенетик, урсгал цитометр):
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full mb-1" style={{ textAlign: 'center' }} />
                        </th>
                        <th className="w-[50%]" colSpan={4} rowSpan={15}>
                           Дүгнэлт:
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]" colSpan={4} rowSpan={15}>
                           Иммунологи
                        </th>
                        <th className="w-[50%]" colSpan={4} rowSpan={15}></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th className="w-[60%]" colSpan={4} rowSpan={15}>
                           Дүгнэлт:
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th>IgG</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>IgM</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>IgA</th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="h-6">Үйл онош:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="h-[100px]">Цусны бусад эмгэг өөрчлөлтүүд:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="h-[120px]">Эмнэл зүйн онош:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="h-[150px]">Зөвлөгөө, эмчилгээ:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="h-8 border-r-0 w-[25%]">
                           <p className="mt-3">Эмчийн нэр:</p>
                        </th>
                        <th className="h-8 border-l-0 mr-4 w-[35%]">
                           <p className="mt-3">Гарын үсэг:</p>
                        </th>
                        <th className="h-8">
                           <p className="mt-2 flex gap-2 justify-center">
                              <p>он</p>
                              <p>сар</p>
                              <p>өдөр</p>
                           </p>
                           <p className="flex gap-4 justify-center">
                              <p>/</p>
                              <p>/</p>
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
export default CT_1_Tsus;
