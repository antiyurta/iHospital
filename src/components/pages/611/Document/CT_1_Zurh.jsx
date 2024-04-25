import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input } from 'antd';
const CT_1_Zurh = () => {
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center mb-2">ЗҮРХНИЙ ЭМЧИЙН ҮЗЛЭГ</th>
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
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Дунд</Checkbox>
                              <Checkbox>Хүндэвтэр</Checkbox>
                              <Checkbox>Хүнд</Checkbox>
                              <Checkbox>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Саруул</Checkbox>
                              <Checkbox>Бүдгэрсэн</Checkbox>
                              <Checkbox>Ухаангүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={4}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox>
                                 Хэвийн бус
                                 <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
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
                        <th className="w-[220px]"> Амьсгал 1 минутанд _____ удаа</th>
                        <th colSpan={3}>
                           Чагналтаар:
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэржигнүүртэй</Checkbox>
                              <Checkbox>Уушги цулцангийн</Checkbox>
                              <Checkbox>Амьсгал сулавтар (баруун, зүүн, 2 талдаа)</Checkbox>
                              <Checkbox>Гуурсан хоолойн</Checkbox>
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
                           <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           удаа
                           <th>
                              Хүчдэл дүүрэлт
                              <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           </th>
                        </th>
                        <th>
                           <th>Тогшилтоор:</th>
                           Зүрхний хил
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox>Томорсон (зүүн, баруун)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Чагналтаар::</th>
                           Зүрхний авиа
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Тод</Checkbox>
                              <Checkbox>Бүдэг</Checkbox>
                              <Checkbox>Бүдгэвтэр</Checkbox>
                              <Checkbox>Хэм жигд</Checkbox>
                              <Checkbox>Жигд бус </Checkbox>
                              <Checkbox>Хэм алдалттай</Checkbox>
                           </Checkbox.Group>
                           <th>
                              АД баруун талд
                              <Input className="amaraInput w-8" style={{ textAlign: 'center' }} />/
                              <Input className="amaraInput w-8" style={{ textAlign: 'center' }} />
                           </th>
                           <th>
                              Зүүн талд
                              <Input className="amaraInput w-8" style={{ textAlign: 'center' }} />/
                              <Input className="amaraInput w-8" style={{ textAlign: 'center' }} />
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
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Ердийн</Checkbox>
                              <Checkbox>Хуурай</Checkbox>
                              <Checkbox>Өнгөргүй</Checkbox>
                              <Checkbox>Өнгөртэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={3}>
                           <p> Хэвлийн үзлэг:</p>
                           <Checkbox.Group>
                              <Checkbox>Өнгөц тэмтрэлтээр</Checkbox>
                              <Checkbox>Гүн тэмтрэлтээр</Checkbox>
                              <Checkbox className="">
                                 Эмзэглэлтэй (байрлал
                                 <Input className="amaraInput w-8" style={{ textAlign: 'center' }} />)
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group>
                              <Checkbox>Ердийн</Checkbox>
                              <Checkbox>Зөөлөн гялтан цочрол үгүй</Checkbox>
                              <Checkbox> Гялтан цочролын шинж илэрсэн</Checkbox>
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
                           <Checkbox.Group>
                              <Checkbox>Хэвийн</Checkbox>
                              <Checkbox>Буурсан (баруун, зүүн)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Рефлексүүд</p>
                           <Checkbox.Group>
                              <Checkbox>Хадгалагдана</Checkbox>
                              <Checkbox>Хадгалагдахгүй</Checkbox>
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
                              <Input className="amaraInput w-[670px]" style={{ textAlign: 'center' }} />
                           </th>
                           Сэтгэцийн байдал:
                           <Input className="amaraInput w-[600px] mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4} className="text-center">
                           Анамнез
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4} className="h-16">
                           Зовиур, өвчний түүх:
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Зүрх судасны эрсдэлт хүчин зүйлс:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Зохисгүй хооллолт </Checkbox>
                              <Checkbox className="w-full">Хөдөлгөөний хомсдол</Checkbox>
                              <Checkbox className="w-full">Стресс</Checkbox>
                              <Checkbox className="w-full">Таргалалт</Checkbox>
                              <Checkbox className="w-full">Тамхидалт</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[50%]">
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2 "> Архины зохисгүй хэрэглээ</Checkbox>
                              <Checkbox className="w-full ">Удамшил</Checkbox>
                              <Checkbox className="w-full ">Артерийн гипертензи</Checkbox>
                              <Checkbox className="w-full ">Гиперхолестеринеми</Checkbox>
                              <Checkbox className="w-full "> Чихрийн шижин</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="text-center">
                           Бодит үзлэг
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>Ажиглалт</th>
                        <th>Чагналт</th>
                     </tr>
                     <tr>
                        <th className="w-[45%]">
                           <th>Арьсны хөхрөлт бий эсэх:</th>
                           <Checkbox.Group>
                              <Checkbox>Үгүй</Checkbox>
                              <Checkbox>
                                 Тийм
                                 <Input className="amaraInput w-40" style={{ textAlign: 'center' }} />
                              </Checkbox>
                           </Checkbox.Group>
                           <th>Захын хаван бий эсэх:</th>
                           <Checkbox.Group>
                              <Checkbox>Үгүй</Checkbox>
                              <Checkbox>
                                 Тийм
                                 <Input className="amaraInput w-40" style={{ textAlign: 'center' }} />
                              </Checkbox>
                           </Checkbox.Group>
                           <th>Гүрээний венийн лугшилт</th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Ажиглагдахгүй</Checkbox>
                              <Checkbox>Ажиглагдана (хүчтэй, дунд, сул)</Checkbox>
                           </Checkbox.Group>
                           <th>Зүрхний оройн түлхэлт:</th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Ажиглагдахгүй</Checkbox>
                              <Checkbox>Ажиглагдана</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[55%]">
                           <th>Артерийн даралт хэмжилт:</th>
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2 ">
                                 {' '}
                                 Баруун талд:
                                 <Input className="amaraInput w-14" style={{ textAlign: 'center' }} />
                                 /
                                 <Input className="amaraInput w-14" style={{ textAlign: 'center' }} />
                                 мм.муб
                              </Checkbox>
                              <Checkbox className="w-full ml-2 ">
                                 {' '}
                                 Зүүн талд:
                                 <Input className="amaraInput w-14" style={{ textAlign: 'center' }} />
                                 /
                                 <Input className="amaraInput w-14" style={{ textAlign: 'center' }} />
                                 мм.муб
                              </Checkbox>
                           </Checkbox.Group>
                           <th className="flex flex-col">
                              <th>Зүрхний авиа:</th>
                              <th>
                                 Хэмнэл:
                                 <Checkbox.Group>
                                    <Checkbox className=" ml-2 ">жигд</Checkbox>
                                    <Checkbox className=" ">жигд бус</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                           <th>
                              Давтамж:
                              <Input className="amaraInput w-16" style={{ textAlign: 'center' }} />
                              /мин
                           </th>
                           <th className="flex flex-col">
                              <th>
                                 I авиа:
                                 <Checkbox.Group>
                                    <Checkbox className=" ml-2 ">тод</Checkbox>
                                    <Checkbox className=" ">бүдгэвтэр (I, IV цэгт);</Checkbox>
                                    <Checkbox className=" ">бүдэг( I, IV );</Checkbox>
                                    <Checkbox className=" ">чангарсан( I, IV цэгт);</Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th>
                                 <p>II авиа:</p>
                                 <Checkbox.Group>
                                    <Checkbox className=" ml-2 ">тод</Checkbox>
                                    <Checkbox className=" ">бүдэг(II, III, V цэгт);</Checkbox>
                                    <Checkbox className="w-full ">өргөгдсөн (II, III цэгт);</Checkbox>
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
                     <tr></tr>
                  </thead>
               </Table>

               <Table bordered className="story mb-0">
                  <thead></thead>
                  <thead>
                     <tr>
                        <th className="w-[60%]">
                           <th>
                              <th className="flex flex-col">
                                 <th>Тэмтрэлт</th>
                                 Зүрхний оройн түлхэлт Байрлал:
                                 <Checkbox.Group className="flex flex-col">
                                    <Checkbox className=" ml-2 ">Хэвийн</Checkbox>
                                    <Checkbox className=" ">Хэвийн бус</Checkbox>
                                 </Checkbox.Group>
                              </th>
                              Хүч
                              <Checkbox.Group>
                                 <Checkbox className=" ml-2 ">дунд зэрэг</Checkbox>
                                 <Checkbox className=" ml-2 ">хүчтэй</Checkbox>
                                 <Checkbox className=" ml-2 ">сул</Checkbox>
                              </Checkbox.Group>
                              <th>Шууны артерийн лугшилт</th>
                              Хэмнэл:
                              <Checkbox className=" ml-2 ">жигд</Checkbox>
                              <Checkbox className=" ml-2 ">жигд бус</Checkbox>
                              <th>
                                 Давтамж:
                                 <Input className="amaraInput w-16" style={{ textAlign: 'center' }} />
                                 /мин
                              </th>
                              Хүчдэл
                              <Checkbox.Group>
                                 <Checkbox className=" ml-2 ">дунд зэрэг</Checkbox>
                                 <Checkbox className=" ml-2 ">их</Checkbox>
                                 <Checkbox className=" ml-2 ">бага</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 Дүүрэлт
                                 <Checkbox.Group>
                                    <Checkbox className=" ml-2 ">дунд зэрэг</Checkbox>
                                    <Checkbox className=" ml-2 ">сул</Checkbox>
                                 </Checkbox.Group>
                              </th>
                              2 талд ижил эсэх
                              <Checkbox.Group>
                                 <Checkbox className=" ml-2 ">ижил</Checkbox>
                                 <Checkbox className=" ml-2 ">ижил бус</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th rowSpan={2}>
                           <th className="w-[40%]">
                              <th className="flex  items-center">
                                 <th>III авиа:</th>
                                 <Checkbox.Group>
                                    <Checkbox className=" ml-2 ">сонсогдоно</Checkbox>
                                    <Checkbox className=" ">сонсогдохгүй</Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th>
                                 <Checkbox.Group className="flex flex-col">
                                    <Checkbox className=" ml-2 ">Шуугиангүй</Checkbox>
                                    <Checkbox className=" ml-2 ">Шуугиантай</Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th className="flex  items-center gap-4">
                                 <th>Байрлал:</th>
                                 <th>I;</th>
                                 <th>II;</th>
                                 <th>III;</th>
                                 <th>V цэг</th>
                              </th>
                              <th className="flex  items-center gap-4">
                                 <th>Систолын:</th>
                                 <th>I;</th>
                                 <th>II;</th>
                                 <th>III;</th>
                                 <th>V цэг</th>
                              </th>
                              <th className="flex  items-center gap-4">
                                 <th>Диастолын:</th>
                                 <th>I;</th>
                                 <th>II;</th>
                                 <th>III;</th>
                                 <th>V цэг</th>
                              </th>
                              <Checkbox className="ml-2">Үл дамжина</Checkbox>
                              <Checkbox>
                                 Дамжина
                                 <Input className="amaraInput w-40" style={{ textAlign: 'center' }} />
                              </Checkbox>
                              <th>
                                 Хүч:
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2">сул</Checkbox>
                                    <Checkbox>дунд зэрэг</Checkbox>
                                    <Checkbox>хүчтэй</Checkbox>
                                 </Checkbox.Group>
                              </th>
                              Перикардын шүргэлцэх чимээ бий эсэх
                              <Checkbox.Group>
                                 <Checkbox className="ml-2">Үгүй</Checkbox>
                                 <Checkbox>Тийм</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                     </tr>
                     <tr>
                        <th>
                           <th className="flex flex-col">
                              <th>Тогшилт</th>
                              Зүрхний ( харьцангуй) хил хязгаар:
                              <Checkbox.Group>
                                 <Checkbox className=" ml-2 ">Хэвийн</Checkbox>
                                 <Checkbox className=" ">Томорсон (дээд, баруун, зүүн хил )</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2}> Хийгдсэн шинжилгээний үр дүн:</th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           <th>Зүрхний цохилтын байдал:</th>
                           Давтамж:
                           <Input className="amaraInput w-[650px] mb-2" style={{ textAlign: 'center' }} />
                           Хэмнэл:
                           <Input className="amaraInput w-[650px] mb-2" style={{ textAlign: 'center' }} />
                           Хориг:
                           <Input className="amaraInput w-[660px] mb-2" style={{ textAlign: 'center' }} />
                           Томрол:
                           <Input className="amaraInput w-[650px] mb-2" style={{ textAlign: 'center' }} />
                           Үхжил, гэмтэл:
                           <Input className="amaraInput w-[620px] mb-2" style={{ textAlign: 'center' }} />
                           Ишеми:
                           <Input className="amaraInput w-[660px] mb-6" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="h-20">
                           Бусад шинжилгээ:
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2}>Зүрхний хэт авиан шинжилгээ:</th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="h-20"></th>
                     </tr>
                     <tr>
                        <th colSpan={2}>Эмнэл зүйн онош</th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="h-20"></th>
                     </tr>
                     <tr>
                        <th colSpan={2}>Зөвлөгөө, эмчилгээ</th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="h-36"></th>
                     </tr>
                     <tr className="h-8">
                        <th className="border-r-0">Эмчийн нэр, гарын үсэг:</th>
                        <th className="border-l-0">
                           <div className=" flex gap-20">
                              <div>/</div>
                              <div>/</div>
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
export default CT_1_Zurh;
