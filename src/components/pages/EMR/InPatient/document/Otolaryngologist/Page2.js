import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';
import React from 'react';
function Page2() {
   return (
      <page size="A4">
         <Table bordered className="document mb-0">
            <thead>
               <tr>
                  <th colSpan={4}>END ZURAGA BAINA</th>
               </tr>
               <tr>
                  <td>
                     <p>Чихний гадна суваг:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Нарийссан</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>(төрөлхийн, олдмол)</p>
                  </td>
                  <td>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Чөлөөтэй
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Саадтай
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Ялгадасгүй</Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Ялгадастай: (идээрхэг, үнэртэй, ногоон)
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Сувгийн хана</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Цүлхийсэн</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>(аль хана)</p>
                  </td>
                  <td>END ZURGA BAINA</td>
               </tr>
               <tr>
                  <td>
                     <p>Хэнгэргэн хальс:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Хэвийн бус
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Бусад
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Сувдан саарал
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Улаан</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Цооролтын байрлал
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Цооролтын хэмжээ</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Хэнгэргэн хөндийн салст:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Цайвар ягаан
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Улаан
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Эмгэг өөрчлөлт</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td colSpan={2}>
                     <td>END ZURGA BAINA</td>
                  </td>
               </tr>
               <tr>
                  <td colSpan={4}>
                     <p>Бүсийн лимфийн булчирхайн байдал: ______________________</p>
                  </td>
               </tr>
               <tr>
                  <td>
                     <p>Хөглүүрийн сорил:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Ренне
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Вебер
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Желле
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Вальсалва</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Сонсголын бичлэг:</p>
                     <p>_</p>
                     <p>_</p>
                     <p>Зэрэг:</p>
                     <p>_</p>
                     <p>_</p>
                  </td>
                  <td>
                     <p>Ам ангайлт:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Чөлөөтэй
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Хязгаарлагдмал
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Хүүхэн хэл:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Хэвийн бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td className="w-52">
                     <p>Зөөлөн тагнай:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0 inline-flex">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Хэвийн бус</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Тагнайн гүйлс:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Томорсон</Checkbox>
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              1-зэрэг
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>2-зэрэг</Checkbox>
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              3-зэрэг
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Бусад өөрчлөлт</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
               <tr>
                  <td>END ZURGA BAINA</td>
                  <td>
                     <p>Архаг үрэвслийн шинж:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Зак
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Гисс
                           </Checkbox>
                           <Checkbox className="w-full" value={'Хэвийн'}>
                              Преображенский
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Бусад</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Лакуны байдал:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Өргөссөн
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Төвөнхийн байдал:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Хэвийн бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Залгиурын хажуу хана:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Хэвийн бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Шувтан хонхрын байдал:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Хэвийн бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
               <tr>
                  <td>
                     <p>Төвөнхийн гадна үзлэг:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Хэвийн бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Тэмтрэхэд:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Эмзэглэлгүй
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Эмзэглэлтэй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Нуржигнах:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Чимээтэй
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Чимээгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Төвөнхийн шууд бус тольдолтоор:</p>
                     <p>Амьсгалын үйл ажиллагаа:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Чөлөөтэй
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Саалтай
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Халхавч мөгөөрс:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Хэвийн бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Төвөнхийн салст:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Цайвар ягаан
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Улаан
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Цайвар
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Утгуур мөгөөрс:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Хэвийн бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Дууны туслах хөвчүүд:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Хэвийн бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Жинхэнэ хөвч:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Хэвийн'}>Хэвийн бус</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
               <tr>
                  <td>END ZURGA BAINA</td>
                  <td className="w-60">
                     <div className="inline-flex">
                        <p>Дууны өнгө:</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                     <p>
                        Фонаци хийх үед:(Дууны хөвчүүд бүрэн гадаргуугаар шүргэлцэнэ) Дууны хөвчүүдийн үйл ажиллаггааны
                        хямрал:
                     </p>
                  </td>
                  <td colSpan={2}>
                     <p>Дууны хөвчийн доод зайн байдал:______</p>
                     <p>ЦМХоолой цагираг:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Хэвийн'}>Хэвийн бус</Checkbox>
                           <Checkbox value={'Хэвийн'}>Өнгө</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Бүсийн лимфийн булчирхайн байдал:</p>
                     <p>Бусад:_________________________</p>
                  </td>
               </tr>
            </thead>
         </Table>
      </page>
   );
}
export default Page2;
