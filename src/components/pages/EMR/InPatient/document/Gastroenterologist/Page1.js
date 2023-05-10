import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';
import General from '../General';
import React from 'react';
function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-bold">ХООЛ БОЛОВСРУУЛАХ ЭРХТНИЙ ЭМЧИЙН ҮЗЛЭГ</p>
            <General />
            <Table bordered className="document">
               <thead>
                  <tr className="border-t-0">
                     <th className="text-center" colSpan={3}>
                        ХООЛ БОЛОВСРУУЛАХ ТОГТОЛЦООНЫ ҮЗЛЭГ
                     </th>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p className="font-bold">Зовуурь:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p className="font-bold">Өвчний эхлэл явц:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={3}>Эрсдэлт хүчин зүйлс:</th>
                  </tr>
                  <tr>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Архи
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Тамхи (хайрцаг/жил _)
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Бусад хорт зуршил
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Ажлын таагүй нөхцөл
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Стресс
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Харшил
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Удамшил
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 ХБЭ-ны эмгэгээр өвдөж байсан
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Хэвлийд мэс засал хийлгэсэн
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td className="w-64">
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хавсарсан хүнд эмгэг
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Шарласан
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Хоолны дэглэм
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p className="font-bold">Хийсэн эмчилгээ</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p className="inline-flex">
                           <p className="font-bold">Харж ажиглах:</p>
                           <p>Хэл өнгөртэй эсэх:</p>
                        </p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Арьс, салст - чийлэг</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Өнгө_____________</p>
                     </td>
                     <td>
                        <p>Хэвлийн - хэм</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Жигд
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Жигд бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хэлбэр _____</p>
                     </td>
                     <td>
                        <p className="font-bold">Тэмтрэлт:</p>
                        <p>Өнгөц тэмтрэлт - хэвлий эмзэглэлтэй эсэх</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Булчингийн чангарал байгаа эсэх:</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={3} className="font-bold">
                        Гүнзгий тэмтрэлт:
                     </th>
                  </tr>
                  <tr>
                     <td>
                        <p>Тахир гэдэс - байрлал</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Тогтоц</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Тогтоц</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хөдөлгөөн</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Хөдөлгөөнтэй</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Цутгалан гэдэс - байрлал</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page1;
