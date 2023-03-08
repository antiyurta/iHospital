import React from 'react';
import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';
import General from '../General';

function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-bold">ЗҮРХНИЙ ЭМЧИЙН ҮЗЛЭГ</p>
            <General />
            <Table bordered className="document">
               <thead>
                  <tr>
                     <th className="text-center" colSpan={2}>
                        Анамнез
                     </th>
                  </tr>
                  <tr>
                     <td colSpan={2}>
                        <p className="font-bold">Зовиур, өвчний түүх:</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={2}>Зүрх судасны эрсдэлт хүчин зүйлс:</th>
                  </tr>
                  <tr>
                     <td>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Зохисгүй хооллолт
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Хөдөлгөөний хомсдол
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Стресс
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Таргалалт
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Тамхидалт
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Архины зохисгүй хэрэглээ
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Удамшил
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Артерийн гипертензи
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Гиперхолестеринеми
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Чихрийн шижин
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={2} className="text-center">
                        Бодит үзлэг
                     </th>
                  </tr>
                  <tr>
                     <th>Ажиглалт</th>
                     <td rowSpan={2}>
                        <p className="font-bold">Чагналт</p>
                        <p>Артерийн даралт хэмжилт:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Баруун талд: _____/_____мм.муб
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Зүүн талд: _____/_____мм.муб
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Зүрхний авиа</p>
                        <div className="inline-flex">
                           <p>Хэмнэл:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Жигд
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                    Жигд бус
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p>Давтамж: __________/мин</p>
                        <div className="inline-flex">
                           <p className="w-14">I авиа:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Тод
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                    Бүдгэвтэр(I,IV цэгт)
                                 </Checkbox>
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Бүдэг(I,IV)
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                    Чангарсан(I,IV цэгт)
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="inline-flex">
                           <p className="w-14">II авиа:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Тод
                                 </Checkbox>
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Бүдэг(II, III, V цэгт)
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                    Чангарсан(II,III цэгт)
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Арьсны хөхрөлт бий эсэх:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Үгүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Тийм
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Захын хаван бий эсэх:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Үгүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Тийм
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Гүрээний венийн лугшилт:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Ажиглагдахгүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Ажиглагдана (хүчтэй, дунд, сул)
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Зүрхний оройн түлхэлт:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Ажиглагдана
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Ажиглагдахгүй
                              </Checkbox>
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
