import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input } from 'antd';
const CT_1_Hool = () => {
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center mb-2">ХООЛ БОЛОВСРУУЛАХ ЭРХТНИЙ ЭМЧИЙН ҮЗЛЭГ</th>
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
                           ХООЛ БОЛОВСРУУЛАХ ТОГТОЛЦООНЫ ҮЗЛЭГ
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4} className="h-12">
                           Зовиур:
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4} className="h-12">
                           Өвчний эхлэл явц:
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Эрсдэлт хүчин зүйлс:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Архи</Checkbox>
                              <Checkbox className="w-full">Тамхи (хайрцаг\жил __)</Checkbox>
                              <Checkbox className="w-full">Бусад хорт зуршил</Checkbox>
                              <Checkbox>Ажлын таагүй нөхцөл</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Стресс</Checkbox>
                              <Checkbox className="w-full">Харшил</Checkbox>
                              <Checkbox className="w-full">Удамшил</Checkbox>
                              <Checkbox className="w-full">ХБЭ-ны эмгэгээр өвдөж байсан </Checkbox>
                              <Checkbox>Хэвлийд мэс засал хийлгэсэн</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хавсарсан хүнд эмгэг </Checkbox>
                              <Checkbox>Шарласан</Checkbox>
                              <Checkbox className="w-full">Хоолны дэглэм</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4} className="h-6">
                           Хийсэн эмчилгээ:
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Харж ажиглах: Хэл өнгөртэй эсэх:</th>
                           <Checkbox.Group>
                              <Checkbox className=" ml-2">Тийм</Checkbox>
                              <Checkbox>Үгүй</Checkbox>
                           </Checkbox.Group>
                           <th>Арьс, салст–чийглэг</th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Тийм</Checkbox>
                              <Checkbox>Үгүй</Checkbox>
                           </Checkbox.Group>
                           <th>
                              Өнгө
                              <Input className="amaraInput w-20 mb-2" style={{ textAlign: 'center' }} />
                           </th>
                        </th>
                        <th>
                           <th> Хэвлийн – хэм</th>
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Жигд</Checkbox>
                              <Checkbox className="w-full ml-2">Жигд бус</Checkbox>
                           </Checkbox.Group>
                           <th>
                              Хэлбэр
                              <Input className="amaraInput w-14" style={{ textAlign: 'center' }} />
                           </th>
                        </th>
                        <th>
                           <th>
                              <th>Тэмтрэлт:</th>
                              Өнгөц тэмтрэлт – хэвлий эмзэглэлтэй эсэх
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 w-full">Эмзэглэлгүй</Checkbox>
                                 <Checkbox>Эмзэглэлтэй</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 Булчингийн чангарал байгаа эсэх:
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2 ">Тийм</Checkbox>
                                    <Checkbox>Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>

               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>
                              <th>Тахир гэдэс – байрлал</th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 ">Эмзэглэлгүй</Checkbox>
                                 <Checkbox>Эмзэглэлтэй</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th> Тогтоц</th>
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2 ">Хатуу</Checkbox>
                                    <Checkbox>Зөөлөн</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                        <th>
                           <th>
                              <th> Тогтоц</th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 ">Хатуу</Checkbox>
                                 <Checkbox>Зөөлөн</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th> Хөдөлгөөнтэй</th>
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2 ">Тийм</Checkbox>
                                    <Checkbox>Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                        <th>
                           <th>
                              <th> Хөдөлгөөнтэй</th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 ">Тийм</Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th> Цутгалан гэдэс - байрлал</th>
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2 ">Эмзэглэлгүй</Checkbox>
                                    <Checkbox>Эмзэглэлтэй</Checkbox>
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
                     <tr>
                        <th>
                           <th>
                              <th> Хөдөлгөөнтэй</th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 ">Тийм</Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th> Өгсөх болон уруудах гэдэс - байрлал </th>
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2 ">Эмзэглэлгүй</Checkbox>
                                    <Checkbox>Эмзэглэлтэй</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                        <th>
                           <th>
                              <th>Хөндлөн гэдэс - байрлал</th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 ">Эмзэглэлгүй</Checkbox>
                                 <Checkbox>Эмзэглэлтэй</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th> Тогтоц</th>
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2 ">Хатуу</Checkbox>
                                    <Checkbox>Зөөлөн</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                        <th>
                           <th>
                              <th> Тогтоц</th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 ">Хатуу</Checkbox>
                                 <Checkbox>Зөөлөн</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th> Хөдөлгөөнтэй</th>
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2 ">Тийм</Checkbox>
                                    <Checkbox>Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[30%]">
                           <th>
                              Тогшилт
                              <th> Хэвлийн хэнгэрэгэн чимээ:</th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 ">Хэвийн</Checkbox>
                                 <Checkbox>Ихэссэн</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th>
                           <th>
                              <th>Ихэссэн хэсэгт тогшилтын дуу</th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 w-full ">Бүдгэрсэн</Checkbox>
                                 <Checkbox className="ml-2 w-full ">Тодорсон</Checkbox>
                                 <Checkbox>Дүлий болсон</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th className="w-[35%]">
                           Чагналт
                           <th> Гэдэсний гүрвэлзэх хөдөлгөөн:</th>
                           <Checkbox.Group className="flex flex-col">
                              <th>
                                 <Checkbox className="ml-2 ">Хэвийн</Checkbox>
                                 <Checkbox>Ихэссэн</Checkbox>
                              </th>
                              <th>
                                 <Checkbox className="ml-2">Хэвийн</Checkbox>
                                 <Checkbox>Дүлий</Checkbox>
                              </th>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="h-12">
                        <th colSpan={4}>Хэвлийн рентген шинжилгээ КТГ, хэт авиан шинжилгээ</th>
                     </tr>
                     <tr className="h-12">
                        <th colSpan={4}>Дурангийн шинжилгээ:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[30%]">
                           <th>
                              <th>Улаан хоолой</th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 ">
                                    Салстын өнгө
                                    <Input className="amaraInput w-[100px]" style={{ textAlign: 'center' }} />
                                 </Checkbox>
                                 <Checkbox>
                                    Хаван
                                    <Input className="amaraInput w-26" style={{ textAlign: 'center' }} />
                                 </Checkbox>
                                 <Checkbox>
                                    Z шугам
                                    <Input className="amaraInput w-26 mb-1" style={{ textAlign: 'center' }} />
                                 </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th className="w-[30%]">
                           <th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 ">
                                    Хөдөлгөөн <Input className="amaraInput w-[120px]" style={{ textAlign: 'center' }} />
                                 </Checkbox>
                                 <Checkbox>
                                    Шалбархай – хэмжээ
                                    <Input className="amaraInput w-16" style={{ textAlign: 'center' }} />
                                 </Checkbox>
                                 <Checkbox>
                                    Тоо <Input className="amaraInput w-40 mb-1" style={{ textAlign: 'center' }} />
                                 </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th className="w-[30%]">
                           <th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2 ">
                                    Байрлал
                                    <Input className="amaraInput w-26" style={{ textAlign: 'center' }} />
                                 </Checkbox>
                                 <Checkbox>
                                    Хэлбэр
                                    <Input className="amaraInput w-26" style={{ textAlign: 'center' }} />
                                 </Checkbox>
                                 <Checkbox>
                                    Өнгөр
                                    <Input className="amaraInput w-26 mb-1" style={{ textAlign: 'center' }} />
                                 </Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[30%]">
                           <th>
                              <th>Ходоод:</th>
                              <div className="flex">
                                 <div> Амсар - салстын өнгө</div>
                                 <Input className="amaraInput w-[100px] mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Хаван </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Хөдөлгөөн </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div> Шалбархай – хэмжээ </div>
                                 <Input className="amaraInput w-[110px] mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Хэлбэр </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Өнгөр </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Тоо </div>
                                 <Input className="amaraInput w-[30px] mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Байрлал </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                           </th>
                        </th>

                        <th className="w-[30%]">
                           <th>
                              <div className="flex">
                                 <div> Их бие - салстын өнгө</div>
                                 <Input className="amaraInput w-[100px] mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Хаван </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Хөдөлгөөн </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div> Шалбархай – хэмжээ </div>
                                 <Input className="amaraInput w-[110px] mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Хэлбэр </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Өнгөр </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Тоо </div>
                                 <Input className="amaraInput w-[30px] mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Байрлал </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                           </th>
                        </th>
                        <th className="w-[30%]">
                           <th>
                              <div className="flex">
                                 <div> Антрум - салстын өнгө </div>
                                 <Input className="amaraInput w-[100px] mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Хаван </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Хөдөлгөөн </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div> Шалбархай – хэмжээ </div>
                                 <Input className="amaraInput w-[110px] mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Хэлбэр </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Өнгөр </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Тоо </div>
                                 <Input className="amaraInput w-[30px] mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Байрлал </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                           </th>
                        </th>
                     </tr>
                     <tr className="border-t-0 ">
                        <th className="w-[30%] border-r-0">
                           <th>
                              <th>Дээд гэдэс:</th>
                              Салстын өнгө
                              <div className="flex">
                                 <div>Хаван </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Хөдөлгөөн </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                           </th>
                        </th>
                        <th className="w-[30%] border-x-0">
                           <div className="flex">
                              <div> Шалбархай – хэмжээ </div>
                              <Input className="amaraInput w-[110px] mb-1" style={{ textAlign: 'center' }} />
                           </div>
                           <div className="flex">
                              <div>Хэлбэр </div>
                              <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                           </div>
                           <div className="flex">
                              <div>Өнгөр </div>
                              <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                           </div>
                           <div className="flex">
                              <div>Тоо </div>
                              <Input className="amaraInput w-[30px] mb-1" style={{ textAlign: 'center' }} />
                           </div>
                        </th>
                        <th className="w-[30%] border-l-0">
                           <th>
                              <div className="flex">
                                 <div>Байрлал </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Фатер хөхлө </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                              <div className="flex">
                                 <div>Цөс ялгаралт </div>
                                 <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                              </div>
                           </th>
                        </th>
                     </tr>
                     <tr className="h-10">
                        <th colSpan={4}>Нр тодорхойлох:</th>
                     </tr>
                     <tr className="h-10">
                        <th colSpan={4}>Рн-метрийн шинжилгээ:</th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           <div>
                              <div>Лабораторийн шинжилгээ:</div>
                              <div className="mt-10">Цитологи\гистологийн шинжилгээ:</div>
                              <div className="mt-10">Бусад шинжилгээ:</div>
                              <div className="my-10">Эмнэлзүйн онош:</div>
                           </div>
                        </th>
                     </tr>
                     <tr className="h-4">
                        <th colSpan={4}>Зөвлөгөө өгсөн эмч:</th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Hool;
