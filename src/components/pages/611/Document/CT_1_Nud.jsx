import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input } from 'antd';

const CT_1_Nud = (props) => {
   const {
      data: { formData }
   } = props;
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center mb-2">НҮДНИЙ ЭМЧИЙН ҮЗЛЭГ</th>
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
                        <th id="child">
                           <Checkbox.Group value={formData?.q1}>
                              <Checkbox className="ml-2" value={'q1-1'}>
                                 Дунд
                              </Checkbox>
                              <Checkbox value={'q1-2'}>Хүндэвтэр</Checkbox>
                              <Checkbox value={'q1-3'}>Хүнд</Checkbox>
                              <Checkbox value={'q1-4'}>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th id="child">
                           <Checkbox.Group value={formData?.q2}>
                              <Checkbox value={'q2-1'} className="ml-2">
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'q2-2'}>Бүдгэрсэн</Checkbox>
                              <Checkbox value={'q2-3'}>Ухаангүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={4} id="child">
                           <Checkbox.Group value={formData?.q3}>
                              <Checkbox className="ml-2" value={'q3-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q3-2'}>
                                 Хэвийн бус
                                 <Input
                                    className="amaraInput w-10"
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
                        <th colSpan={4}>Амьсгалын эрхтэн тогтолцоо</th>
                     </tr>
                     <tr>
                        <th className="w-[220px]" id="child">
                           {' '}
                           Амьсгал 1 минутанд
                           <Input className="w-10" value={formData?.q4} style={{ textAlign: 'center' }} />
                           удаа
                        </th>
                        <th colSpan={3}>
                           Чагналтаар:
                           <Checkbox.Group value={formData?.q5} id="child">
                              <Checkbox value={'q5-1'} className="ml-2">
                                 Хэржигнүүртэй
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Уушги цулцангийн</Checkbox>
                              <Checkbox value={'q5-3'}>Гуурсан хоолойн</Checkbox>
                              <Checkbox value={'q5-4'}>
                                 <div className="flex items-center">
                                    <span> Амьсгал сулавтар</span>
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
                                                <span className="text-[11px]">2 талдаа</span>
                                             </Checkbox>
                                             &nbsp;
                                          </Checkbox.Group>
                                          )
                                       </span>
                                    </p>
                                 </div>
                              </Checkbox>
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
                        <th id="child">
                           Судасны цохилт 1 минутанд
                           <Input className="amaraInput w-10" value={formData?.q6} style={{ textAlign: 'center' }} />
                           удаа
                           <th id="child">
                              Хүчдэл дүүрэлт
                              <Input className="amaraInput w-10" value={formData?.q7} style={{ textAlign: 'center' }} />
                           </th>
                        </th>
                        <th>
                           <th>Тогшилтоор:</th>
                           <p id="child">Зүрхний хил</p>
                           <Checkbox.Group value={formData?.q8} id="child">
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
                           <th>Чагналтаар::</th>
                           <p id="child"> Зүрхний авиа</p>
                           <Checkbox.Group value={formData?.q9} id="child">
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
                              <Input
                                 className="amaraInput w-8"
                                 value={formData?.q10}
                                 style={{ textAlign: 'center' }}
                                 id="child"
                              />
                           </th>
                           <th id="child">
                              Зүүн талд
                              <Input
                                 className="amaraInput w-8"
                                 value={formData?.q11}
                                 style={{ textAlign: 'center' }}
                                 id="child"
                              />
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
                           <Checkbox.Group value={formData?.q12} id="child">
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
                           <Checkbox.Group value={formData?.q13} id="child">
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
                           <Checkbox.Group value={formData?.q13} id="child">
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
                           <p> Сонсох чадвахи:</p>
                           <Checkbox.Group value={formData?.q14} id="child">
                              <Checkbox value={'q14-1'}>Хэвийн</Checkbox>
                              <Checkbox value={'q14-2'}>
                                 <div className="flex items-center">
                                    <p> Буурсан</p>
                                    <p>
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
                                 </div>
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Рефлексүүд</p>
                           <Checkbox.Group value={formData?.q15} id="child">
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
                           <div>
                              <p className="w-full" id="child">
                                 Бусад
                                 <Input
                                    className="amaraInput w-[670px]"
                                    value={formData?.q16}
                                    style={{ textAlign: 'center' }}
                                    id="child"
                                 />
                              </p>
                              <p id="child">
                                 Сэтгэцийн байдал:
                                 <Input
                                    className="amaraInput w-[600px] mb-1"
                                    value={formData?.q17}
                                    style={{ textAlign: 'center' }}
                                    id="child"
                                 />
                              </p>
                           </div>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th className="flex justify-center">НҮДНИЙ ҮЗЛЭГ</th>
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
                           <th className="">
                              {item.data}
                              {formData?.[item.value]}
                           </th>
                        </tr>
                     </thead>
                  </Table>
               ))}
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               {tableData1.map((item, index) => (
                  <Table key={index} bordered className="story mb-0 ">
                     <thead>
                        <tr className="border-b-0 h-10">
                           <th className="">
                              {item.data}
                              {formData?.[item.value]}
                           </th>
                        </tr>
                     </thead>
                  </Table>
               ))}
               <Table bordered className="story mb-0">
                  <thead>
                     <tr>
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
                           <th className="">
                              {item.data}

                              {formData?.[item.value]}
                           </th>
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
                                    {formData?.[item.value]}
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
                           <th style={{ height: 'auto' }} id="child">
                              {item.data.split(';').map((text, i) => (
                                 <div key={i}>
                                    {text}
                                    {formData?.[item.value]}
                                 </div>
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
   { data: 'Өнгө танилт: ', value: 'q19' },
   { data: 'Нүдний хөдөлгөөн:', value: 'q20' },
   { data: 'Нулимсны зам:', value: 'q21' },
   { data: 'Зовхи: ', value: 'q22' },
   { data: 'Салст: ', value: 'q23' },
   { data: 'Склер: ', value: 'q24' },
   { data: 'Эвэрлэг: ', value: 'q25' },
   { data: 'Өмнөд таславч:: ', value: 'q26' },
   { data: 'Солонгон бүрхүүл:', value: 'q27' },
   { data: 'Хүүхэн хараа:', value: 'q28' }
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
   { data: 'Schirmer test:', style: { height: '50px' }, value: 'q36' },
   { data: 'A scan:', style: { height: '50px' }, value: 'q37' },
   { data: 'B scan:', style: { height: '50px' }, value: 'q38' },
   { data: 'CCT: ', style: { height: '50px' }, value: 'q39' },
   { data: 'Gonioscopy: ', style: { height: '78px' }, value: 'q40' },
   { data: 'OCT (ONH: ', style: { height: '48px' }, value: 'q41' },
   { data: 'OCT (Macula):', style: { height: '48px' }, value: 'q42' },
   { data: 'Humphrey: ', style: { height: '48px' }, value: 'q43' },
   { data: 'FFA: ', style: { height: '48px' }, value: 'q44' },
   { data: 'X-ray:', style: { height: '48px' }, value: 'q45' },
   { data: 'CT: ', style: { height: '48px' }, value: 'q46' },
   { data: 'MRI: ', style: { height: '48px' }, value: 'q47' },
   { data: 'Бусад: ', style: { height: '80px' }, value: 'q48' }
];
const tableData1 = [
   { data: 'Болор:', value: 'q29' },
   { data: 'Шилэнцэр:', value: 'q30' },
   { data: 'Нүдний уг:', value: 'q31' },
   { data: 'Бусад:', value: 'q32' }
];
const tableData2 = [
   { data: 'Autorefractometer:', value: 'q33' },
   { data: 'Tonometer', value: 'q34' },
   { data: 'Exophthalmometer:', value: 'q35' }
];
