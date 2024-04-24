import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input } from 'antd';
const CT_1_Aris = () => {
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center">СЭТГЭЦИЙН ЭМЧИЙН ҮЗЛЭГ</th>
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
                     <tr className="border-t-0">
                        <th className="w-[50%]">
                           <p> Сонсох чадвахи:</p>
                           <Checkbox.Group>
                              <Checkbox>Хэвийн</Checkbox>
                              <Checkbox>Буурсан (баруун, зүүн)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[50%]">
                           <p>Рефлексүүд</p>
                           <Checkbox.Group>
                              <Checkbox>Хадгалагдана</Checkbox>
                              <Checkbox>Хадгалагдахгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th colSpan={2}>
                           <th className="w-full">
                              Бусад
                              <Input className="amaraInput w-[670px]" style={{ textAlign: 'center' }} />
                           </th>
                           Сэтгэцийн байдал:
                           <Input className="amaraInput w-[600px] mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           <div className="flex justify-center">Арьс, салст, дайвруудын үзлэг:</div>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           Арьсны хүрэлцэх мэдрэхүйн байдал:
                           <Checkbox.Group>
                              <Checkbox className="ml-6">Мэдэрч байна </Checkbox>
                              <Checkbox>Мэдрэхгүй байна</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Арьсны байдал</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Арьсны өнгө: :</th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox>Улаан цоохор</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэвийн бус</Checkbox>
                              <Checkbox className="ml-2 w-full">Зэвхий саарал</Checkbox>
                              <Checkbox>Шар</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Шарангуй</Checkbox>
                              <Checkbox className="ml-2 w-full">Хүрэн</Checkbox>
                              <Checkbox>Харласан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хөхөрсөн</Checkbox>
                              <Checkbox>Цайж алагласан</Checkbox>
                              <Checkbox>Хүрэл шиг</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Уян чанар:</th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хэвийн</Checkbox>
                              <Checkbox className="ml-2 w-full">Ихэссэн</Checkbox>
                              <Checkbox>Алдагдсан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Арьсны халуун:</th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэвийн бус</Checkbox>
                              <Checkbox className="ml-2 w-full">Халуун</Checkbox>
                              <Checkbox>Хүйтэн</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Чийглэг байдал:</th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хэвийн</Checkbox>
                              <Checkbox className="ml-2 w-full">Ихэссэн</Checkbox>
                              <Checkbox>Багассан</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           <div className="flex justify-center">Хэсэг газрын үзлэг</div>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Тууралтын онцлог</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Өнгө</th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Ягаан</Checkbox>
                              <Checkbox>Улаан</Checkbox>
                              <Checkbox>Цагаан</Checkbox>
                              <Checkbox>Цайвар бор</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Бор</Checkbox>
                              <Checkbox className="ml-2 w-full">Хар</Checkbox>
                              <Checkbox>Хөх</Checkbox>
                              <Checkbox>Саарал</Checkbox>
                              <Checkbox>Шар</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Хүрээ:</th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хил хязгаар нь тод</Checkbox>
                              <Checkbox className="ml-2 w-full">Тод бус (well defined) (Illdefined)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Хэлбэр:</th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Дугараг</Checkbox>
                              <Checkbox>Зууван</Checkbox>
                              <Checkbox>Олон талт</Checkbox>
                              <Checkbox>Олон цагирагт</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2"> Зоос хэлбэрийн</Checkbox>
                              <Checkbox>Могой хэлбэрийн</Checkbox>
                              <Checkbox>Шугаман</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Тэмтрэхэд:</th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Тогтоц нь</Checkbox>
                              <Checkbox>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хатуувтар</Checkbox>
                              <Checkbox className="ml-2 w-full">Нягт хатуу</Checkbox>
                              <Checkbox>Бамбалзсан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Даргар</Checkbox>
                              <Checkbox>Халуун</Checkbox>
                              <Checkbox>Хүйтэн</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хөдөлгөөнтэй</Checkbox>
                              <Checkbox className="ml-2 w-full">Хөдөлгөөнгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2"> Эмзэглэлтэй</Checkbox>
                              <Checkbox>Эмзэглэлгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th className="w-[50%]" colSpan={2}>
                           <p> Эмх цэгц, хэв маяг болон тархалт</p>
                           Тоо хэмжээ:
                           <Checkbox.Group>
                              <Checkbox>Нэг</Checkbox>
                              <Checkbox>Олон тууралт</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={4}>
                           <div>
                              <p>Эмх цэгц:</p>
                              <Checkbox.Group>
                                 <Checkbox>Бүлэглэсэн</Checkbox>
                                 <Checkbox>Тархсан</Checkbox>
                              </Checkbox.Group>
                           </div>
                           <div className="flex items-center gap-2">
                              <p>Нягтрал:</p>
                              <Checkbox.Group>
                                 <Checkbox>Байгаа</Checkbox>
                                 <Checkbox>Байхгүй</Checkbox>
                              </Checkbox.Group>
                           </div>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[33%]">Тархац: Тэлэлт:</th>
                        <th className="w-[33%]">Байрлалт</th>
                        <th className="w-[33%]">
                           <Checkbox>Хурууны завсар</Checkbox>
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
                        <th className="w-[35%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Дангараа</Checkbox>
                              <Checkbox className="w-full">Нэг хэсэг (хэсэгчилсэн)</Checkbox>
                              <Checkbox className="w-full">Хэсэг газрыг хамарсан</Checkbox>
                              <Checkbox>Бүх биеэр тархсан </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">2 талд тэгш</Checkbox>
                              <Checkbox className="ml-2 w-full">Тэгш бус</Checkbox>
                              <Checkbox>Өртсөн хэсэгт </Checkbox>
                              <Checkbox> Даралттай хэсэгт</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Энд тэнд</Checkbox>
                              <Checkbox className="ml-2 w-full">Blaschko-н шугам дагуу</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3}>
                           Өвчлөлтэй холбогдолтой түүх (Удамшлын болоод бодисын солилцооны өвчний түүх)
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3}>
                           1. Чихэрийн шижинтэй эсэх
                           <Input className="amaraInput w-[550px] mb-1" style={{ textAlign: 'center' }} />
                           2. Даралт ихтэй эсэх
                           <Input className="amaraInput w-[590px] mb-1" style={{ textAlign: 'center' }} />
                           3. Харшил (ялангуяа эмийн)
                           <Input className="amaraInput w-[550px] mb-1" style={{ textAlign: 'center' }} />
                           4. Эм хэрэглэлт, байнга уудаг болон одоо ууж байгаа
                           <Input className="amaraInput w-[410px] mb-1" style={{ textAlign: 'center' }} />
                           5. Хорт зуршил (архи, тамхи)
                           <Input className="amaraInput w-[545px] mb-1" style={{ textAlign: 'center' }} />
                           6. Атофийн түүх (астма, чонон хөрвөс, экзем)
                           <Input className="amaraInput w-[450px] mb-1" style={{ textAlign: 'center' }} />
                           7. Гэр бүлийн өвчлөлийн түүх
                           <Input className="amaraInput w-[540px] mb-1" style={{ textAlign: 'center' }} />
                           8. Нийгмийн идэвх сонирхол
                           <Input className="amaraInput w-[545px] mb-1" style={{ textAlign: 'center' }} />
                           9. Бэлгийн хавьтлын түүх
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3}>
                           <p className="text-center"> КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ</p>
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
                        <th colSpan={3} className="h-24">КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ
                           <p> Хүндрэл</p>
                        </th>
                     </tr>
                     <tr>
                        <th className="h-80 w-[200px]">Ялган оношлох эмгэгүүд ба хам шинжүүд</th>
                        <th> Хийгдэх шинжилгээ</th>
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
export default CT_1_Aris;
