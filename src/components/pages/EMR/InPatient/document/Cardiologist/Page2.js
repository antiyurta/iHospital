import React from 'react';
import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';

function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="document">
               <thead>
                  <tr>
                     <td>
                        <p className="font-bold">Тэмтрэлт</p>
                        <p>Зүрхний оройн түлхэлт Байрлал:</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <div className="inline-flex">
                           <p>Хүч:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    дунд зэрэг
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>хүчтэй</Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>сул</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p>Шууны артерийн лугшилт:</p>
                        <div className="inline-flex">
                           <p>Хэмнэл:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Жигд
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>Жигд бус</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p>Давтамж: _____мин</p>
                        <div className="inline-flex">
                           <p>Хүчдэл:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    дунд зэрэг
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>хүчтэй</Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>сул</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="inline-flex">
                           <p>Дүүрэлт:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    дунд зэрэг
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>сул</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="inline-flex">
                           <p>2 талд ижил эсэх:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    ижил
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>ижил бус</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                     </td>
                     <td rowSpan={2} className="w-96">
                        <div className="inline-flex">
                           <p>III авиа:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    сонсогдоно
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>сонсогдохгүй</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Шуугиангүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Шуугиантай</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <div className="inline-flex w-full">
                           <p>Байрлал:</p>
                           <p>(I; II; III; IV: V цэг)</p>
                        </div>
                        <div className="inline-flex w-full">
                           <p>Систолын:</p>
                           <p>(I; II; III; IV: V цэг)</p>
                        </div>
                        <div className="inline-flex">
                           <p>Диастолын:</p>
                           <p>(I; II; III; IV: V цэг)</p>
                        </div>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Үл дамжина
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Дамжина___________________</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Перикардын ширгэлцэх чимээ бий эсэх</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Үгүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Тийм</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p className="font-bold">Тогшилт</p>
                        <p>Зүрхний (харьцангүй) хил хязгаар:</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Томорсон(дээд, баруун, зүүн хил)</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={2}>Хийгдсэн шинжилгээний үр дүн:</th>
                  </tr>
                  <tr>
                     <td colSpan={2}>
                        <p className="font-bold">Зүрхний цохилтын байдал:</p>
                        <p>Давтамж:</p>
                        <p>Хэмнэл:</p>
                        <p>Хориг:</p>
                        <p>Томрол:</p>
                        <p>Үхжил, гэмтэл:</p>
                        <p>Ишеми:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={2}>
                        <p className="font-bold">Бусад шинжилгээ:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={2}>
                        <p className="font-bold">Зүрхний хэт авиан шинжилгээ:</p>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={2}>Эмнэл зүйн онош</th>
                  </tr>
                  <tr>
                     <td colSpan={2}>:</td>
                  </tr>
                  <tr>
                     <th colSpan={2}>Зөвлөгөө, эмчилгээ</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>
                        <div className="flex flex-wrap">
                           <div className="basis-1/3">
                              <p className="font-normal">Эмчийн нэр:</p>
                           </div>
                           <div className="basis-1/3">
                              <p className="font-normal">Гарын үсэг:</p>
                           </div>
                           <div className="basis-1/3">
                              <p className="font-normal">он 2012 сар 17 өдөр 22</p>
                           </div>
                        </div>
                     </th>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page2;
