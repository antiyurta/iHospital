import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input } from 'antd';

const CT_1_Nud = () => {
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center">НҮДНИЙ ЭМЧИЙН ҮЗЛЭГ</th>
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
                           <p className="flex justify-center">НҮДНИЙ ҮЗЛЭГ</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50px]">
                           <th>VOD</th>
                        </th>
                        <th className="w-[100px]">
                           <th></th>
                        </th>
                        <th className="w-[50px]">
                           <th>ph</th>
                        </th>
                        <th>
                           <th></th>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th>
                           <th>VOS</th>
                        </th>
                        <th>
                           <th></th>
                        </th>
                        <th>
                           <th>ph</th>
                        </th>
                        <th>
                           <th></th>
                        </th>
                     </tr>
                  </thead>
               </Table>{' '}
               {tableData.map((item, index) => (
                  <Table key={index} bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0 h-10">
                           <th className="">{item.data}</th>
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
                     <tr className=" h-10">
                        <th className="">Болор</th>
                     </tr>
                  </thead>
               </Table>
               {tableData1.map((item, index) => (
                  <Table key={index} bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0 h-10">
                           <th className="">{item.data}</th>
                        </tr>
                     </thead>
                  </Table>
               ))}
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className=" border-t-0 ">
                        <th>
                           <p className="flex justify-center">НҮДНИЙ ШИНЖИЛГЭЭ</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               {tableData2.map((item, index) => (
                  <Table key={index} bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0 h-10">
                           <th className="">{item.data}</th>
                        </tr>
                     </thead>
                  </Table>
               ))}

               {tableData3.map((item, index) => (
                  <Table
                     key={index}
                     bordered
                     className="story mb-0"
                     style={{ display: 'flex', flexDirection: 'column', ...item.style }}
                  >
                     <thead>
                        <tr className="border-t-0 ">
                           <th style={{ height: 'auto' }}>
                              {item.data.split(';').map((text, i) => (
                                 <div key={i} style={{ marginBottom: '5px' }}>
                                    {text}
                                 </div>
                              ))}
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
                     <tr className="h-6">
                        <th>
                           <p className="text-center">ЭМЧЛҮҮЛЭГЧИЙН АНАМНЕЗ</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               {tableData4.map((item, index) => (
                  <Table
                     key={index}
                     bordered
                     className="story mb-0"
                     style={{ display: 'flex', flexDirection: 'column', ...item.style }}
                  >
                     <thead>
                        <tr className="border-t-0 ">
                           <th style={{ height: 'auto' }}>
                              {item.data.split(';').map((text, i) => (
                                 <div key={i}>{text}</div>
                              ))}
                           </th>
                        </tr>
                     </thead>
                  </Table>
               ))}
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="h-6 border-t-0">
                        <th>
                           <p className="text-center">КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               {tableData5.map((item, index) => (
                  <Table key={index} bordered className="story mb-0" style={{ ...item.style }}>
                     <thead>
                        <tr className="border-t-0 h-10">
                           <th style={{ height: 'auto' }}>{item.data}</th>
                        </tr>
                     </thead>
                  </Table>
               ))}
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[30%] h-80">Ялган оношлох эмгэгүүд ба хам шинжүүд</th>
                        <th className="w-[33%] h-80">Хийгдэх шинжилгээ </th>
                        <th className="w-[33%] h-80">Яаралтай хийгдэх эмчилгээ</th>
                     </tr>
                  </thead>
                  <thead>
                     <tr className="border-t-0">
                        <th className="h-8  w-[25%]">
                           <p className="mt-3">Эмчийн нэр:</p>
                        </th>
                        <th className="h-8  mr-4 w-[35%]">
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
export default CT_1_Nud;
const tableData = [
   { data: 'Өнгө танилт:' },
   { data: 'Нүдний хөдөлгөөн:' },
   { data: 'Нулимсны зам:' },
   { data: 'Зовхи: ' },
   { data: 'Салст: ' },
   { data: 'Склер: ' },
   { data: 'Эвэрлэг: ' },
   { data: 'Өмнөд таславч:: ' },
   { data: 'Солонгон бүрхүүл:' }
];
const tableData4 = [
   { data: 'Өвчин эхэлсэн хугацаа:он_______сар___өдөр___', style: { height: '65px' } },
   { data: 'Нүдний эмчилгээ хийлгэж байсан эсэх:', style: { height: '65px' } },
   { data: 'Нүдний мэс засал хийлгэж байсан эсэх :', style: { height: '65px' } },
   { data: 'Удамшлын анамнез:', style: { height: '65px' } }
];
const tableData5 = [
   { data: 'Үндсэн онош', style: { height: '65px' } },
   { data: 'Дагалдах онош', style: { height: '100px' } },
   { data: 'Хүндрэл', style: { height: '150px' } }
];

const tableData3 = [
   { data: 'Schirmer test:', style: { height: '50px' } },
   { data: 'A scan: ; B scan:', style: { height: '90px', gap: '20px' } },
   { data: 'CCT: ', style: { height: '50px' } },
   { data: 'Gonioscopy: ', style: { height: '78px' } },
   { data: 'OCT (ONH: ; OCT (Macula):', style: { height: '78px' } },
   { data: 'Humphrey: ', style: { height: '48px' } },
   { data: 'FFA: ', style: { height: '78px' } },
   { data: 'X-ray:;CT:;MRI:', style: { height: '120px' } },
   { data: 'Бусад: ', style: { height: '80px' } }
];
const tableData1 = [{ data: 'Шилэнцэр:' }, { data: 'Нүдний уг:' }, { data: 'Бусад:' }];
const tableData2 = [{ data: 'Autorefractometer:' }, { data: 'Tonometer' }, { data: 'Exophthalmometer:' }];
