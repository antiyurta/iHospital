import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input } from 'antd';
const CT_1_Emegtei = () => {
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center mb-2">ЭМЭГТЭЙЧҮҮДИЙН ЭМЧИЙН ҮЗЛЭГ</th>
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
                        <th>
                           <th className="w-full">
                              Бусад
                              <Input className="amaraInput w-[670px] mb-3" style={{ textAlign: 'center' }} />
                           </th>
                           Сэтгэцийн байдал:
                           <Input className="amaraInput w-[600px] mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th>
                           <p className="flex justify-center">ЭХ БАРИХ, ЭМЭГТЭЙЧҮҮДИЙН ҮЗЛЭГ</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2}>
                           <div className="flex gap-10">
                              <div className="gap-2 flex items-center mb-1">
                                 <p>Анхны биений юм хэдэн настайд ирсэн</p>
                                 <div>
                                    <Input type="number" className="w-4  cursor-pointer" />
                                    <Input type="number" className="w-4   cursor-pointer ml-2" />
                                 </div>
                              </div>
                              <div className="gap-2 flex items-center mb-1">
                                 <p>Биений юмны мөчлөгийн хоног</p>
                                 <div>
                                    <Input type="number" className="w-4  cursor-pointer" />
                                    <Input type="number" className="w-4   cursor-pointer ml-2" />
                                 </div>
                              </div>
                           </div>
                           <div className="flex gap-10">
                              <div className="gap-2 flex items-center mb-1">
                                 <p>Биений юмны үргэлжлэх хугацаа</p>
                                 <div>
                                    <Input type="number" className="w-4  cursor-pointer" />
                                    <Input type="number" className="w-4   cursor-pointer ml-2" />
                                 </div>
                              </div>
                              <div className="gap-2 flex items-center mb-1">
                                 <p>Биений юмны хэмжээ: бага, дунд, их /зур/</p>
                              </div>
                           </div>
                           <div>
                              <p>
                                 Сүүлийн биений юм хэзээ ирсэн:
                                 <Input className="amaraInput w-16 mb-1" style={{ textAlign: 'center' }} />
                                 Цэвэршсэн: /зур/ тийм, үгүй Хэдэн онд
                                 <Input className="amaraInput w-16 mb-1" style={{ textAlign: 'center' }} />
                              </p>
                           </div>
                           <div className="flex">
                              <div className="gap-2 flex items-center mb-1">
                                 <p>Жирэмслэлтийн тоо </p>
                                 <Input type="number" className="w-4  cursor-pointer" />
                                 <p>үүнээс төрсөн</p>
                                 <Input type="number" className="w-4  cursor-pointer" />
                                 <p>зулбасан</p>
                                 <Input type="number" className="w-4  cursor-pointer" />
                                 <p>үр хөндүүлсэн</p>
                                 <Input type="number" className="w-4  cursor-pointer" />
                                 <Input type="number" className="w-4  cursor-pointer" />
                              </div>
                           </div>
                           <div>
                              <p className="ml-2">
                                 {' '}
                                 Эх барих, эмэгтэйчүүдийн тусгайлсан үзлэг:
                                 <Input className="amaraInput w-[450px]" style={{ textAlign: 'center' }} />
                              </p>
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                           </div>
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
                           <div>
                              <p className="ml-2">
                                 Тольны үзлэг: PV
                                 <Input className="amaraInput w-[600px] mt-4" style={{ textAlign: 'center' }} />
                              </p>
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                              <Input className="amaraInput w-full  mb-2" style={{ textAlign: 'center' }} />
                           </div>
                        </th>
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
                        <th colSpan={3} className="h-24">
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
export default CT_1_Emegtei;
