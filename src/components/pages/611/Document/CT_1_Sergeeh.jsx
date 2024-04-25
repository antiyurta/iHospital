import { Checkbox, Input, Image } from 'antd';
import { Table } from 'react-bootstrap';
import EvaluateImg from '../../../../assets/images/evaluate.png';
import React from 'react';

const CT_1_Sergeeh = () => {
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
                              <p> Харилцах бэрхшээлтэй эсэх:</p>{' '}
                              <Checkbox.Group>
                                 <Checkbox>Тийм</Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="flex items-center gap-4">
                              <p>Залгих чадвар бэрхшээлтэй эсэх:</p>
                              <Checkbox.Group>
                                 <Checkbox>Тийм</Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="w-full ml-2">(Хэрвээ тийм бол хэл засалч бөглөнө )</th>
                           <th className="flex items-center gap-4">
                              Танин мэдэхүйн үйл ажиллагаа өөрчлөлттэй эсэх:
                              <Checkbox.Group>
                                 <Checkbox>Тийм</Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="w-full ml-2">(Хэрвээ тийм бол хөдөлмөр засалч бөглөнө)</th>
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
                                 <Input className="amaraInput w-10 mb-2" style={{ textAlign: 'center' }} />
                              </Checkbox>
                           </Checkbox.Group>
                           <th className="flex items-center">
                              <th>Холголт цооролт: </th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2">Тийм</Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="flex items-center">
                              <th>Тууралт: </th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2">Тийм</Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="flex items-center">
                              <th>Хаван:</th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2">
                                    Тийм
                                    <Input className="amaraInput w-20" style={{ textAlign: 'center' }} />
                                 </Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3}>Амьсгалын эрхтэн тогтолцоо</th>
                     </tr>
                     <tr>
                        <th>
                           <th>
                              Амьсгал 1 минутанд
                              <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                              удаа
                              <th>
                                 Амьсгалд туслах булчин оролцож байгаа эсэх:
                                 <Checkbox.Group className="w-full">
                                    <Checkbox>Тийм</Checkbox>
                                    <Checkbox> Үгүй</Checkbox>
                                 </Checkbox.Group>
                                 Цээжний хэлбэр:
                                 <Checkbox.Group className="w-full">
                                    <Checkbox>зөв</Checkbox>
                                    <Checkbox> эмгэг</Checkbox>
                                 </Checkbox.Group>
                                 Амьсгалын хэлбэр:
                                 <Checkbox.Group className="w-full">
                                    <Checkbox>Цээжний</Checkbox>
                                    <Checkbox> хэвлийн</Checkbox>
                                 </Checkbox.Group>
                                 холимог
                              </th>
                           </th>
                        </th>
                        <th colSpan={2}>
                           <th>
                              <th>Цээжний 2 тал амьсгалд жигд оролцох байдал:</th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-5">жигд</Checkbox>
                                 <Checkbox>хоцорно / баруун, зүүн /</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th>Чагналтаар:</th>
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2 mb-0">Цулцангийн</Checkbox>
                                    <Checkbox>
                                       Хэржигнүүртэй
                                       <Input className="amaraInput w-20 mb-2" style={{ textAlign: 'center' }} />
                                    </Checkbox>
                                 </Checkbox.Group>{' '}
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2">Гуурсан хоолойн</Checkbox>
                                    <Checkbox>Амьсгал сулавтар / баруун, зүүн /</Checkbox>
                                    <Checkbox className="w-full">Ширүүн</Checkbox>
                                    <Checkbox>Хэржигнүүргүй</Checkbox>
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
                           <th>Судасны цохилт </th>1 минутанд
                           <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           удаа
                           <th>
                              Хүчдэл дүүрэлт
                              <Input className="amaraInput w-20" style={{ textAlign: 'center' }} />
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
                     <tr className="border-t-0  ">
                        <th colSpan={4}>
                           <p className="mb-2">Хоол шингээх эрхтэн тогтолцоо </p>
                        </th>
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
                           <th>Шээх байдал</th>
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Өөрөө</Checkbox>
                              <Checkbox className="w-full">Катетера ар</Checkbox>
                              <Checkbox>Цистосто мийн гуурсаар </Checkbox>
                           </Checkbox.Group>
                           <th>Хоногийн шээсний гарц</th>
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox className="w-full">Ихэссэн</Checkbox>
                              <Checkbox>багассан </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[20%]">
                           <th>
                              <th>Шээсний өнгө</th>
                              <Checkbox.Group>
                                 <Checkbox className="w-full ml-2">сүрлэн шар</Checkbox>
                                 <Checkbox className="w-full">улаан шар</Checkbox>
                                 <Checkbox className="w-full">өнгөгүй</Checkbox>
                                 <Checkbox className="w-full">тунадастай</Checkbox>
                                 <Checkbox>тунадасгүй</Checkbox>
                              </Checkbox.Group>
                              <th>Шөнө шээдэг эсэх</th>
                              <Checkbox.Group>
                                 <Checkbox className="w-full ml-2">тийм</Checkbox>
                                 <Checkbox>үгүй </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th className="w-[20%]">
                           <th>
                              <th>Шээс тасалддаг эсэх</th>
                              <Checkbox.Group>
                                 <Checkbox className="w-full ml-2">тийм</Checkbox>
                                 <Checkbox>үгүй </Checkbox>
                              </Checkbox.Group>
                              <th>Дутуу шээдэг эсэх</th>
                              <Checkbox.Group>
                                 <Checkbox className="w-full ml-2">тийм</Checkbox>
                                 <Checkbox>үгүй </Checkbox>
                              </Checkbox.Group>
                              <th>Дүлж шээдэг эсэх</th>
                              <Checkbox.Group>
                                 <Checkbox className="w-full ml-2">тийм</Checkbox>
                                 <Checkbox>үгүй </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th className="w-[20%]">
                           <th>
                              <th>Шээхэд өвдөлттэй эсэх</th>
                              <Checkbox.Group>
                                 <Checkbox className="w-full ml-2">тийм</Checkbox>
                                 <Checkbox>үгүй </Checkbox>
                              </Checkbox.Group>
                              <th>Бөөр тэмтрэлтээр </th>
                              <Checkbox.Group>
                                 <Checkbox className="w-full ml-2">эмзэглэлтэй</Checkbox>
                                 <Checkbox>эмзэглэлгүй </Checkbox>
                              </Checkbox.Group>
                              /баруун, зүүн/
                              <th className="mt-2">Пастернацкий</th>
                              <Checkbox.Group>
                                 <Checkbox className="w-full ml-2">баруун</Checkbox>
                                 <Checkbox>зүүн </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th>
                           <th>
                              <th>Үе мөчний хэлбэр</th>
                              <Checkbox.Group>
                                 <Checkbox className="w-full ml-2">хэвийн</Checkbox>
                                 <Checkbox>өөрчлөгдсөн </Checkbox>
                              </Checkbox.Group>
                              <th>Үений хөдөлгөөн</th>
                              <Checkbox.Group>
                                 <Checkbox className="w-full ml-2">идэвхтэй</Checkbox>
                                 <Checkbox className="w-full ">идэвхгүй</Checkbox>
                                 <Checkbox>хязгаарлагдмал </Checkbox>
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
                  <th>Бага тархины үйл ажиллагаа</th>
                  <th>Нистагм: + / - салганал: (тайван байхад/ хөдөлгөхөд) өсгий шилбэний сорил:------------------</th>
                  <th>
                     Хамар хурууын сорил: ----------------------- Тандем алхаа: --------------------------- Ромберг
                     сорил: -----------------
                  </th>
                  <th>
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
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Саруул</Checkbox>
                              <Checkbox className="w-full">Саруул бус: </Checkbox>
                              <Checkbox className="w-full">Баримжлал алдагдсан:</Checkbox>
                              <Checkbox className="w-full">Цаг хугацааны </Checkbox>
                              <Checkbox className="w-full">Орон зайны </Checkbox>
                              <Checkbox>Өөрийн</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[33%]">
                           Сэтгэцийн байдал:
                           <Checkbox.Group>
                              <Checkbox className="ml-2">
                                 Анхаарал:
                                 <Input className="amaraInput w-20" style={{ textAlign: 'center' }} />
                              </Checkbox>
                              <Checkbox>
                                 Ой тогтолт:
                                 <Input className="amaraInput w-20" style={{ textAlign: 'center' }} />
                              </Checkbox>
                              <Checkbox>
                                 Тоолох чадвар <Input className="amaraInput w-20" style={{ textAlign: 'center' }} />
                              </Checkbox>
                              <Checkbox>
                                 Бүтээх чадвар: <Input className="amaraInput w-20" style={{ textAlign: 'center' }} />
                              </Checkbox>
                              <Checkbox>
                                 Сэтгэл хөдлөл: <Input className="amaraInput w-20" style={{ textAlign: 'center' }} />
                              </Checkbox>
                              <Checkbox>
                                 Зан төрх : <Input className="amaraInput w-20" style={{ textAlign: 'center' }} />
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[33%]">
                           Хэл ярианы байдал :
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox className="w-full">Ойлгохын хэлгүйдэл</Checkbox>
                              <Checkbox className="w-full">Ярихын хэлгүйдэл</Checkbox>
                              <Checkbox className="w-full">Нэрлэхийн хэлгүйдэл </Checkbox>
                              <Checkbox className="w-full">Уншихгүйдэл </Checkbox>
                              <Checkbox className="w-full">Бичихгүйдэл </Checkbox>
                              <Checkbox>Давтан хэлэх чадвар |</Checkbox>
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
                              <th className="flex items-center gap-4">
                                 I:
                                 <Checkbox.Group>
                                    <Checkbox>Хэвийн</Checkbox>
                                    <Checkbox>Хэвийн бус</Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th>
                                 Б
                                 <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                                 З
                                 <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                              </th>
                              <th></th>
                              <th>II:</th>
                              <th className="flex items-center gap-4">
                                 <th>XXX:</th>
                                 <Checkbox.Group>
                                    <Checkbox>Хэвийн</Checkbox>
                                    <Checkbox>Хэвийн бус</Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th></th>
                              <th> Гэрлийн гурвал:</th>
                              <Checkbox.Group>
                                 <Checkbox>Хэвийн</Checkbox>
                                 <Checkbox>Хэвийн бус</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 {' '}
                                 Б
                                 <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                                 З
                                 <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                              </th>
                              <th>III-IV-VI:</th>
                              <th>
                                 <th>Птоз:</th>
                                 <th>
                                    {' '}
                                    Б
                                    <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                                    З
                                    <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                                 </th>
                              </th>
                              <th> Нистагм:</th>
                              <Checkbox.Group>
                                 <Checkbox>Илрээгүй</Checkbox>
                                 <Checkbox>Илэрсэн</Checkbox>
                              </Checkbox.Group>
                              <th className="flex items-center gap-4">
                                 <th>Диплопи:</th>
                                 <Checkbox.Group>
                                    <Checkbox>Эерэг</Checkbox>
                                    <Checkbox>Сөрөг</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                        <th rowSpan={4}>
                           <th> VII:</th>
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>Хэвийн бус бол : </th>
                        <th>Б</th>
                        <th>З</th>
                     </tr>
                     <tr>
                        <th>Нүдний анилт</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Духны атираа </th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Хамар уруулын нугалаа</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th rowSpan={3}>
                           {' '}
                           <th> VIII: </th>
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>Хэвийн бус бол</th>
                        <th>Б</th>
                        <th>З</th>
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
                     <tr>
                        <th rowSpan={3}>
                           {' '}
                           <th> IX, X: : </th>
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>Хэвийн бус бол</th>
                        <th>Б</th>
                        <th>З</th>
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
                     <tr>
                        <th colSpan={4}>
                           <Checkbox.Group className="gap-4">
                              <Checkbox>Дисфони</Checkbox>
                              <Checkbox>Дисфаги</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th rowSpan={3}>
                           {' '}
                           <th> XI:</th>
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>Хэвийн бус бол </th>
                        <th>Б</th>
                        <th>З</th>
                     </tr>
                     <tr>
                        <th>Стерноклейдомастойд</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Трапец хэлбэрт булчин</th>
                        <th></th>
                        <th></th>
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
                           <th> XII: </th>
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>Хэвийн бус бол</th>
                        <th className="w-6">Б</th>
                        <th className="w-6">З</th>
                     </tr>
                     <tr>
                        <th rowSpan={4} className="w-[100px]">
                           <th> V:</th>
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>Хэвийн бус бол </th>
                        <th className="w-6">Б</th>
                        <th className="w-6">З</th>
                        <th>Хэлний хазайлт</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Нүүрний мэдрэхүй</th>
                        <th></th>
                        <th></th>
                        <th>Хатангиршил / татвалзал </th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Эвэрлэгийн рефлекс</th>
                        <th></th>
                        <th></th>
                        <th rowSpan={5}>Дизартри / анартри</th>
                        <th rowSpan={5}></th>
                        <th rowSpan={5}></th>
                     </tr>
                     <tr>
                        <th>Зажлуурын булчингийн хүч</th>
                        <th></th>
                        <th></th>
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
                              <th>Үений хөдөлгөөний далайц</th>
                              <th>Мөр</th>
                              <th>Тохой</th>
                              <th>Бугуй</th>
                              <th>Сарвуу</th>
                              <th>Түнх</th>
                              <th>Өвдөг</th>
                              <th>Шагай</th>
                              <th>Булчингийн хүч:</th>
                              <th>Гар: ------------------------------------------------- </th>
                              <th>------------------------------------------------------ </th>
                           </th>
                        </th>
                        <th>
                           <p>Мэдрэхүй</p>{' '}
                        </th>
                        <th>Хэвийн</th>
                        <th>Ихэссэн</th>
                        <th>Буурсан</th>
                        <th rowSpan={5}>
                           <th>Үнэрлэх:</th>
                           <Checkbox.Group className="flex flex-col">
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox>Ихэссэн</Checkbox>
                              <Checkbox>Буурсан</Checkbox>
                           </Checkbox.Group>
                           <th>Сонсгол:</th>
                           <Checkbox.Group className="flex flex-col">
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox>Ихэссэн</Checkbox>
                              <Checkbox>Буурсан</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>
                           <p>Өнгөц</p>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>
                           <p>Гүн</p>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>
                           <p>Хэт</p>
                           <p>мэдрэгшил</p>
                        </th>
                        <th></th>
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
                        <th colSpan={4} rowSpan={5}>
                           <th className="flex flex-col gap-0">
                              <th>------------------------------------------------------ </th>
                              <th>Булчингийн тонус: </th>
                              <th>Гар: ------------------------------------------------- </th>
                              <th>------------------------------------------------------ </th>
                              <th>Хөл: ------------------------------------------------- </th>
                              <th>------------------------------------------------------ </th>
                           </th>
                        </th>
                        <th rowSpan={4} className="w-[98px]"></th>
                        <th rowSpan={4} className="w-[65px]"></th>
                        <th rowSpan={4} className="w-[71px]"></th>
                        <th rowSpan={4} className="w-[72px]"></th>
                        <th rowSpan={5} className="w-[120px]"></th>
                     </tr>
                  </thead>
                  <thead>
                     <tr>
                        <th>Рефлекс </th>
                        <th>≠ ≠</th>
                        <th>≠ ≠ ≠</th>
                        <th>≠</th>
                        <th colSpan={3}>Эмгэг рефлекс</th>
                        <th className="text-center">+</th>
                        <th className="text-center">-</th>
                     </tr>
                     <tr>
                        <th>Бицепс </th>
                        <th></th>
                        <th> </th>
                        <th></th>
                        <th colSpan={3}>Бабински:</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Трицепс </th>
                        <th></th>
                        <th> </th>
                        <th></th>
                        <th colSpan={3}>Хоффман:</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Өвдөгний </th>
                        <th></th>
                        <th> </th>
                        <th></th>
                        <th colSpan={3} rowSpan={2}>
                           Тавхайн чичигнэлт:{' '}
                        </th>
                        <th rowSpan={2}></th>
                        <th rowSpan={2}></th>
                     </tr>
                     <tr>
                        <th>Ахиллын </th>
                        <th></th>
                        <th></th>
                        <th></th>
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
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2">Хэвийн</Checkbox>
                                    <Checkbox>
                                       Хэвийн бус
                                       <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                                    </Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th>
                                 Явах тэнцвэр:{' '}
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2">Хэвийн</Checkbox>
                                    <Checkbox>
                                       Хэвийн бус
                                       <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                                    </Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th>
                                 Шугаман алхалт: Хурдан солигдох хөдөлгөөн:
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2">Хэвийн</Checkbox>
                                    <Checkbox>Хэвийн бус</Checkbox>
                                    <Checkbox>
                                       Хэвийн
                                       <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                                    </Checkbox>
                                    <Checkbox>Дисдиадохокинез</Checkbox>
                                 </Checkbox.Group>
                              </th>
                              <th>
                                 Ромбергийн сорил:{' '}
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2">БГ</Checkbox>
                                    <Checkbox>БХ</Checkbox>
                                    <Checkbox>ЗГ</Checkbox>
                                    <Checkbox>ЗХ</Checkbox>
                                    <Checkbox>Эерэг</Checkbox>
                                    <Checkbox>Сөрөг</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </div>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={5}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">
                                 Дагзны хөшингө :
                                 <Input className="amaraInput w-10 mb-2" style={{ textAlign: 'center' }} />
                                 хуруу
                              </Checkbox>
                              <Checkbox>
                                 Кернигийн шинж:Б{' '}
                                 <Input className="amaraInput w-10 mb-2" style={{ textAlign: 'center' }} />
                                 З
                                 <Input className="amaraInput w-10 mb-2" style={{ textAlign: 'center' }} />
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={5}>Ёзоорын хамшинж: </th>
                     </tr>
                     <tr>
                        <th colSpan={5}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">
                                 Ласегийн шинж: Б
                                 <Input className="amaraInput w-10 mb-2" style={{ textAlign: 'center' }} />
                                 З
                                 <Input className="amaraInput w-10 mb-2" style={{ textAlign: 'center' }} />
                              </Checkbox>
                              <Checkbox>
                                 Мацкевичийн шинж :Б
                                 <Input className="amaraInput w-10 mb-2" style={{ textAlign: 'center' }} />
                                 З
                                 <Input className="amaraInput w-10 mb-2" style={{ textAlign: 'center' }} />
                              </Checkbox>
                              <Checkbox className="w-full">Сколиоз</Checkbox>
                              <Checkbox className="w-full">Кифоз</Checkbox>
                              <Checkbox>Нурууны булчингийн чангарал </Checkbox>
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
                           <Checkbox.Group>
                              <Checkbox>тийм</Checkbox>
                              <Checkbox>үгүй</Checkbox>
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
                        <th colSpan={5} className='h-[300px]'></th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
};

export default CT_1_Sergeeh;
