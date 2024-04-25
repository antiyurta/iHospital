import React from 'react';
import { Checkbox, Input } from 'antd';
import { Table } from 'react-bootstrap';
const CT_1_Setgets = () => {
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
                        <th>
                           <p className="flex justify-center">СЭТГЭЦИЙН ҮЗЛЭГ </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 h-8">
                        <th>
                           <p className="ml-4 mt-2">
                              Танин мэдэхүй, оюун, сэтгэхүйн хүрээ (сэрэхүй, ой, оюун, сэтгэхүйн өөрчлөлтүүд)
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               {data.map((item) => (
                  <Table key={item.id} bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0 h-12">
                           <th>
                              <p className="mt-5">
                                 <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                              </p>
                           </th>
                        </tr>
                     </thead>
                  </Table>
               ))}
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className=" h-12">
                        <th>
                           <p className="ml-4 mt-4">
                              Сэтгэл хөдлөлийн хүрээ (сэтгэл хөдлөлийн байдал, сэтгэл гутрал, сэтгэл хөөрөл, сэтгэлийн
                              тохироо алдагдах)
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className=" border-t-0 h-12">
                        <th>
                           <p className="mt-5">
                              <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               {data1.map((item) => (
                  <Table key={item.id} bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0 h-12">
                           <th>
                              <p className="mt-5">
                                 <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                              </p>
                           </th>
                        </tr>
                     </thead>
                  </Table>
               ))}
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 h-12">
                        <th>
                           <p className="ml-4 mt-4">
                              Зориг эрмэлзлэлийн хүрээ (сэтгэл зориггүйдэл, катотоник шинжүүд, гэнэтийн үйлдэл, дон,
                              дурууд)
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>

               {data2.map((item) => (
                  <Table key={item.id} bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0 h-12">
                           <th>
                              <p className="mt-5">
                                 <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                              </p>
                           </th>
                        </tr>
                     </thead>
                  </Table>
               ))}
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className=" h-12">
                        <th>
                           <p className="mt-5">
                              <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               {data3.map((item) => (
                  <Table key={item.id} bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0 h-12">
                           <th>
                              <p className="mt-5">
                                 <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                              </p>
                           </th>
                        </tr>
                     </thead>
                  </Table>
               ))}
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 h-12">
                        <th>
                           <p className="ml-4 mt-4">
                              Ухамсарт ухааны хүрээ (ухаан дэмийрэн, зүүдчилэн, бүрийтэн, будангуйран,нойрмоглон
                              балартах)
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               {data4.map((item) => (
                  <Table key={item.id} bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0 h-12">
                           <th>
                              <p className="mt-5">
                                 <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                              </p>
                           </th>
                        </tr>
                     </thead>
                  </Table>
               ))}
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 h-20">
                        <th>
                           <p>Хам шинжийн онош</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 h-24">
                        <th>
                           <p>Эмчилгээ сувилгааны заалт</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Setgets;
const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }];
const data2 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }];
const data3 = [{ id: 1 }, { id: 2 }];
const data4 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }];
const data1 = [
   { id: 1 },
   { id: 2 },
   { id: 3 },
   { id: 4 },
   { id: 5 },
   { id: 6 },
   { id: 7 },
   { id: 8 },
   { id: 9 },
   { id: 10 },
   { id: 11 }
];
