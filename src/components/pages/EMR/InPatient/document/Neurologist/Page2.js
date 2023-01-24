import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';

function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="document mb-0">
               <thead>
                  <tr>
                     <td rowSpan={2} className="w-24">
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Хэвийн
                              </Checkbox>
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Эвэрлэгийн рефлекс</p>
                     </td>
                     <td></td>
                     <td></td>
                     <td rowSpan={2} className="w-24"></td>
                     <td>
                        <p>Хатангиршил/татвалзал</p>
                     </td>
                     <td>Б</td>
                     <td>З</td>
                  </tr>
                  <tr>
                     <td>
                        <p>Зажлуурын булчингийн хүч</p>
                     </td>
                     <td>Б</td>
                     <td>З</td>
                     <td>Дизартри/анартри</td>
                     <td>Б</td>
                     <td>З</td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <p>Хөдөлгөөн тогтолцоо</p>
                     </td>
                     <td colSpan={4} className="w-1/2">
                        <p>Мэдрэхүй тогтолцоо</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p className="font-bold">Булчингийн хүч</p>
                           <p className="font-bold">Рефлексүүд</p>
                        </div>
                        <div className="inline-flex">
                           <p className="font-bold">Эмгэг рефлекс:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Бөхийх
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>Гэдийх</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p>Булчингийн тонус:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Ихэссэн</Checkbox>
                              <Checkbox value={'Хэвийн'}>Буурсан</Checkbox>
                              <Checkbox value={'Хэвийн'}>Хэвийн бус</Checkbox>
                              <Checkbox value={'Хэвийн'}>БГ</Checkbox>
                              <Checkbox value={'Хэвийн'}>БХ</Checkbox>
                              <Checkbox value={'Хэвийн'}>ЗГ</Checkbox>
                              <Checkbox value={'Хэвийн'}>ЗХ</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td colSpan={4}>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p className="font-bold">END ZURGA</p>
                           <div>
                              <p>Өнгөц мэдрэхүй-Өн</p>
                              <p>Гүний мэдрэхүй-Г</p>
                              <p>Температур-Т</p>
                              <p>Өвдөлт-Өв</p>
                              <p className="font-bold">END ZURGA</p>
                           </div>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={4}>7.Тэнцвэрийн тогтолцоо</th>
                     <th colSpan={4}>8.Мэнэнгийн хамшинж</th>
                  </tr>
                  <tr>
                     <td colSpan={4} rowSpan={3}>
                        <div className="inline-flex">
                           <p className="font-bold">Зогсох тэнцвэр:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Хэвийн
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>
                                    Хэвийн бус
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="inline-flex">
                           <p className="font-bold">Явах тэнцвэр:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Хэвийн
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>
                                    Хэвийн бус
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p className="font-bold">
                           Шугаман алхалт: Хурдан солигдох хөдөлгөөн:
                        </p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Хэвийн бус</Checkbox>
                              <Checkbox value={'Хэвийн'}>
                                 Хэвийн _______
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>
                                 Дисдиадохокинез
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <div className="inline-flex">
                           <p className="font-bold">Ромбергийн сорил:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    БГ
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>БХ</Checkbox>
                                 <Checkbox value={'Хэвийн'}>ЗГ</Checkbox>
                                 <Checkbox value={'Хэвийн'}>ЗХ</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                     </td>
                     <td colSpan={4}>
                        <p className="font-bold">Дагзны хөшингө: __ хуруу</p>
                        <p className="font-bold">Кернигийн шинж: Б __ З __</p>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={4}>9.Ёзоорын хамшинж:</th>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Лагесийн шинж: Б_ З_
                              </Checkbox>
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Мацкевичийн шинж: Б_ З_
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Сколиоз</Checkbox>
                              <Checkbox value={'Хэвийн'}>
                                 Нурууны булчингийн чангарал
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td rowSpan={4}>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Хэвийн
                              </Checkbox>
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td></td>
                     <td>Б</td>
                     <td>З</td>
                     <th colSpan={4}>10. Вегататив үйлдийн байдал</th>
                  </tr>
                  <tr>
                     <td>Өсгий-өвдөг-шилбэний</td>
                     <td></td>
                     <td></td>
                     <td rowSpan={3} colSpan={4}>
                        <p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Хөлрөлт _______
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>
                                    Пигментаци _______
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </p>
                        <p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Вазомотор урвал: ______
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>
                                    Симпаталги: ______
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </p>
                        <p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Тэжээрлийн байдал_________
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Хуруу-хамрын сорил</p>
                     </td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>
                        <p>Дисметри:</p>
                     </td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <th colSpan={8}>11.Бусад шинжүүд:</th>
                  </tr>
                  <tr>
                     <td colSpan={8}>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={8}>12.Байршлын болон клиникийн онош:</th>
                  </tr>
                  <tr>
                     <td colSpan={8}>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page2;
