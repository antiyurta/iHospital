import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input } from 'antd';

const CT_1_Ulamjlalt = () => {
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center mb-2">УЛАМЖЛАЛТЫН ЭМЧИЙН ҮЗЛЭГ</th>
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
                                 <Input className="amaraInput w-10 mb-2" style={{ textAlign: 'center' }} />
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
                        <th colSpan={4}>
                           <p className="mb-2">Цусны эргэлтийн тогтолцоо</p>
                        </th>
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
                     <tr className="border-t-0  ">
                        <th colSpan={4}>
                           <p className="mb-2">Хоол шингээх эрхтэн тогтолцоо</p>
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
                     <tr>
                        <th colSpan={4}>Мэдрэлийн тогтолцоо</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4}>
                           <th className="w-full">
                              Бусад
                              <Input className="amaraInput w-[670px] mb-3" style={{ textAlign: 'center' }} />
                           </th>
                           Сэтгэцийн байдал:
                           <Input className="amaraInput w-[600px] mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Өвөрчлөл:</th>
                     </tr>
                     <tr>
                        <th colSpan={3}>
                           <div className="flex justify-between">
                              <Checkbox.Group className="flex flex-col ml-2">
                                 <Checkbox className="ml-2">Хий</Checkbox>
                                 <Checkbox>Шар</Checkbox>
                                 <Checkbox>Бадган</Checkbox>
                                 <Checkbox>Хий шар хавсарсан</Checkbox>
                              </Checkbox.Group>
                              <Checkbox.Group className="flex flex-col">
                                 <Checkbox className="ml-2">Хий бадган хавсарсан</Checkbox>
                                 <Checkbox>Шар бадган хавсарсан</Checkbox>
                                 <Checkbox>Хий, шар, бадган хурсан </Checkbox>
                              </Checkbox.Group>
                           </div>
                        </th>
                        <th>
                           <p>Цог сүлд:</p>
                           <Checkbox.Group>
                              <Checkbox>Сайн</Checkbox>
                              <Checkbox>Дунд</Checkbox>
                              <Checkbox>Буурсан</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="text-center">
                        <th className="w-[100px]"></th>
                        <th>Хий</th>
                        <th>Шар</th>
                        <th className="w-[30%]">Бадган</th>
                     </tr>
                     <tr>
                        <th colSpan={4} className="text-center">
                           Үзэх шинжилгээ
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story ">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[16%]">Нүүр царай</th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хуурай ширүүн</Checkbox>
                              <Checkbox>Бор хүрэн хар, хөхөлбөр өнгөтэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Зөөлөн чийглэг хөлс ихтэй, тослог</Checkbox>
                              <Checkbox>Улаа бутарсан шар, шаргал өнгөтэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Сэлхэрсэн</Checkbox>
                              <Checkbox className="w-full">Цайвар өнгөтэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>Нүд</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цагаан нүд хөхөлбөр</Checkbox>
                              <Checkbox>Харц тогтворгүй</Checkbox>
                              <Checkbox>Олон анивчина</Checkbox>
                              <Checkbox className="w-full">Нулимс гоожно</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цагаан нүд улаан, шар, шаргал</Checkbox>
                              <Checkbox>Махан ургацагтай</Checkbox>
                              <Checkbox> Харц ширүүн</Checkbox>
                              <Checkbox>Шар ус, нуух гоожно</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цагаан нүд цагаан, цайвар</Checkbox>
                              <Checkbox>Өөхөн ургацагтай</Checkbox>
                              <Checkbox>Харц дөлгөөн</Checkbox>
                              <Checkbox className="w-full">Зовхи сэлхэрнэ</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>Чих</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хөхөлбөр өнгөтэй</Checkbox>
                              <Checkbox className="w-full">Шуугина загатнана</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Улаан шар өнгөтэй</Checkbox>
                              <Checkbox>Шар ус өгрий булаг гоожно</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цагаан өнгөтэй</Checkbox>
                              <Checkbox className="w-full">Хулхи ихтэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>Хамар </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хөхөлбөр өнгөтэй</Checkbox>
                              <Checkbox className="w-full">Хамар битүүрэх</Checkbox>
                              <Checkbox className="w-full">Үнэр мэдрэхгүй болох</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хамар улайх, цус гарах, хуурайших</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хамраас ялгадас гарах, хамрын үзүүр цайх </Checkbox>
                              <Checkbox>Бусад</Checkbox>
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
                        <th className="w-[16%]">Уруул </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хөхөлбөр өнгөтэй</Checkbox>
                              <Checkbox className="w-full">Муруйна</Checkbox>
                              <Checkbox className="w-full">Чичирч таталдана</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Улбар шаргал өнгөтэй</Checkbox>
                              <Checkbox>Хатаж хуурайшина хагарна</Checkbox>
                              <Checkbox className="w-full">Цус гарна</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цайвар өнгөтэй </Checkbox>
                              <Checkbox className="w-full">Өнгөртэй, өрөмтэй</Checkbox>
                              <Checkbox className="w-full">Ялбарна, шүүс гоожино</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[16%]">Хэл </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Улаан, хөхөлбөр, ягаан өнгөтэй</Checkbox>
                              <Checkbox className="w-full">Хуурай ширүүн</Checkbox>
                              <Checkbox className="w-full">Өнгөргүй</Checkbox>
                              <Checkbox className="w-full">Хийн гүвдрүүтэй</Checkbox>
                              <Checkbox>Хөшүүн охор богино үзүүр нарийн, хэл чулчирна хэлгийрнэ таталдана</Checkbox>
                              <Checkbox className="w-full">Эхүүн амтагдана</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2"> Улаавтар өнгөтэй</Checkbox>
                              <Checkbox>Нимгэн зузаан шаргал шар өнгөртэй</Checkbox>
                              <Checkbox className="w-full">Улаан бэржрүү гүвдрүүтэй</Checkbox>
                              <Checkbox className="w-full">Хар толбо зураастай</Checkbox>
                              <Checkbox className="w-full">Давслаг гашуун амтагдана</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цайвар ягаан өнгөтэй </Checkbox>
                              <Checkbox className="w-full">Том</Checkbox>
                              <Checkbox className="w-full">Чийглэг зөөлөн</Checkbox>
                              <Checkbox>Нимгэн зузаан цайвар өнгөртэй, зах ирмэгээрээ шүдний оромтой</Checkbox>
                              <Checkbox className="w-full">Ам заваарна</Checkbox>
                              <Checkbox className="w-full">Амтлаг амтагдана</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th>Баас </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Шингэн</Checkbox>
                              <Checkbox className="w-full">Хөөс ихтэй</Checkbox>
                              <Checkbox className="w-full">Хоргослож хатна</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2"> Шар өнгөтэй</Checkbox>
                              <Checkbox>Цус өгрийн хольцтой</Checkbox>
                              <Checkbox className="w-full">Өмхий үнэртэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цайвар шаргал өнгөтэй </Checkbox>
                              <Checkbox className="w-full"> Эс шингэсэн идээ ундаа салсын хольцтой</Checkbox>
                              <Checkbox className="w-full">Наалдамтгай</Checkbox>
                              <Checkbox className="w-full">Исгэлэн үнэртэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th>Шээс </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хөхөлбөр өнгөтэй</Checkbox>
                              <Checkbox className="w-full">Ус адил тунгалаг</Checkbox>
                              <Checkbox className="w-full">Үнэр уур багатай</Checkbox>
                              <Checkbox>Хөөс том, дуутай хагарч арилна</Checkbox>
                              <Checkbox>Дээрээ бутарсан нарийн ширхэглэг язмагтай</Checkbox>
                              <Checkbox>Хувирсаны сүүлд хөхөлбөр өнгөтэй, тунгалаг</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2"> Шар, улбар шар, улаан өнгөтэй</Checkbox>
                              <Checkbox>Үнэр уур ихтэй, уур нь удаан арилна </Checkbox>
                              <Checkbox>Хөөс нь жижиг түргэн арилна</Checkbox>
                              <Checkbox>Зузаан өрөмтэй</Checkbox>
                              <Checkbox>Дундаа хөвсөн зузаан бөөгнөрсөн язмагтай</Checkbox>
                              <Checkbox>Хувирсаны сүүлд шар улбар хүрэн өнгөтэй өтгөн</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цайвар шаргал өнгөтэй </Checkbox>
                              <Checkbox className="w-full"> Үнэр уур багатай</Checkbox>
                              <Checkbox>Хөөс нь жижиг удаан арилна, савны хананд наалдана</Checkbox>
                              <Checkbox>Доороо нарийн бөөгнөрсөн тунасан язмагтай</Checkbox>
                              <Checkbox>Хувирсаны сүүлд цайвар шар өнгөтэй, шингэн</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th>Хөлс </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Бага хэмжээтэй </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2"> Их хэмжээтэй, үнэрлэг</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дунд зэрэг </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th>Үс </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Бор хар өнгөтэй </Checkbox>
                              <Checkbox className="w-full">Хар</Checkbox>
                              <Checkbox className="w-full">Хуурай</Checkbox>
                              <Checkbox className="w-full">Буржгар</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full"> Бараан, гялалзсан</Checkbox>
                              <Checkbox className=" w-full"> Тослог</Checkbox>
                              <Checkbox className=" w-full"> Даахирсан</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дунд зэрэг </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th>Шүд </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дорсгор иржгэр </Checkbox>
                              <Checkbox className="w-full">Том</Checkbox>
                              <Checkbox className="w-full">Эцэнхий буйлтай</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full"> Шарласан</Checkbox>
                              <Checkbox className=" w-full"> Тослог</Checkbox>
                              <Checkbox> Зөөлөн буйлтай</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Цагаан </Checkbox>
                              <Checkbox className="w-full">Хатуу</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th>Хумс </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хөхрөх </Checkbox>
                              <Checkbox className="w-full"> Хувхайрах</Checkbox>
                              <Checkbox className="w-full">Зузаарах</Checkbox>
                              <Checkbox className="w-full">Хатуу болох</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full"> Шарлах</Checkbox>
                              <Checkbox className=" w-full"> Харавтар зураас тогтох</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Цайх </Checkbox>
                              <Checkbox className="w-full">Цагаан толбо, дусал адил бусаар гарах</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="story">
                  <thead>
                     <tr className="text-center">
                        <th colSpan={4}>Хүрэлцэх шинжилгээ</th>
                     </tr>
                     <tr>
                        <th rowSpan={4} className="w-[20%] ">
                           Бэлчир орон
                        </th>
                        <th colSpan={3} className="text-center">
                           Өврийн бэлчир
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хар цагааны завсар</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Гэдэсний дээд</Checkbox>
                              <Checkbox className="w-full">Гэдэсний доод</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Аюулхайн</Checkbox>
                              <Checkbox className="w-full">Галын илч буурсан</Checkbox>
                              <Checkbox className="w-full">Бэтгийн</Checkbox>
                              <Checkbox className="w-full">Давсагны</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} className="text-center">
                           Арын бэлчир
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full"> Th1 – Хий</Checkbox>
                              <Checkbox className=" w-full"> Th6 – Амин судас</Checkbox>
                              <Checkbox className=" w-full"> Th7 – Зүрх</Checkbox>
                              <Checkbox className=" w-full"> L4 - Олгой</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Th2 – Шар</Checkbox>
                              <Checkbox className="w-full">Th9 – Элэг</Checkbox>
                              <Checkbox className="w-full"> Th10 – Цөс</Checkbox>
                              <Checkbox className="w-full"> L5 – Гэдэс</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Th3 – Бадган</Checkbox>
                              <Checkbox className="w-full">Th11 – Дэлүү </Checkbox>
                              <Checkbox className="w-full">Th12 – Ходоод</Checkbox>
                              <Checkbox className="w-full">S1 – Давсаг</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>Хаван, хавдар</th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">
                                 Хуурай, ширүүн, хүйтэн, ихсэж багасах нь түргэн
                              </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Өвчин эмзэглэл ихтэй, халуун</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хүйтэн, өвчин эмзэглэл бага, тогтвортой</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>Арьс </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хуурай </Checkbox>
                              <Checkbox className=" w-full">Ширүүн </Checkbox>
                              <Checkbox className=" w-full">Хүйтэн </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Зөөлөн </Checkbox>
                              <Checkbox className=" w-full">Тослог </Checkbox>
                              <Checkbox className=" w-full">Бүлээн, халуун </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Өөхлөг </Checkbox>
                              <Checkbox className=" w-full">Тослог </Checkbox>
                              <Checkbox className=" w-full">Хүйтэн </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="text-center">
                        <th colSpan={4}>Өлсөх</th>
                     </tr>
                     <tr>
                        <th>Өлсөх </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Тогтмол бус </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Их </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Бага </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>Ундаасах </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Тогтмол бус </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Их </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Бага </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>Нойр</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Өнгөц сэрэмтгий </Checkbox>
                              <Checkbox className="w-full">Их зүүдлэнэ, хар дарна </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Шөнө унтаж чадахгүй </Checkbox>
                              <Checkbox className=" w-full">Өдөр нойр их хүрнэ</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Нойр их </Checkbox>
                              <Checkbox className=" w-full">Алжааж нойрмоглоно </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>Яриа</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Түргэн </Checkbox>
                              <Checkbox className="w-full"> Олон үглэнэ</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хурц ширүүн, түрэмгий</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Удаан алгуур </Checkbox>
                              <Checkbox className=" w-full">Үг дуу цөөн </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>Галбир</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Туранхай </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дунд зэрэг</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Тарган </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>Биеийн идэвхи</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хөдөлгөөн түргэн</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дунд зэрэг</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хөдөлгөөн удаан </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>Оюуны идэвхи</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Санаж сэдсэн, идэвхитэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Түрэмгий ухаалаг</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Амгалан, удаан </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>Мөн чанар</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дан</Checkbox>
                              <Checkbox className="w-full">Хавсарсан</Checkbox>
                              <Checkbox>Хурсан</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дан</Checkbox>
                              <Checkbox className="w-full">Хавсарсан</Checkbox>
                              <Checkbox>Хурсан</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дан</Checkbox>
                              <Checkbox className="w-full">Хавсарсан</Checkbox>
                              <Checkbox>Хурсан</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>Судас</th>
                        <th colSpan={3}></th>
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
                        <th className="w-[21%] h-10">Судас</th>
                        <th className="w-[79%]"></th>
                     </tr>
                     <tr>
                        <th className="h-14">УАУ-ны онош /код/ </th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="h-16">Эмчилгээний зарчим</th>
                        <th></th>
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
                        <th colSpan={3} className="h-32">
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
export default CT_1_Ulamjlalt;
