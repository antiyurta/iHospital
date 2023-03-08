import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';
import React from 'react';
function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="document2">
               <thead>
                  <tr>
                     <td colSpan={2}></td>
                     <td colSpan={2}>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Ягаан
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td colSpan={2}></td>
                     <td colSpan={2}>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Газрын зураг
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={2}>
                        <p>Бөөрөлзгөнө хэл Өнгө:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Улайсан</Checkbox>
                              <Checkbox value={'Хэвийн'}>Цайсан</Checkbox>
                              <Checkbox value={'Хэвийн'}>Хөхөлбий</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td colSpan={2}>
                        <p>Шарх:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Шархтай
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Шархгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td colSpan={2}>
                        <p>Буйл: Эмзэглэл</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td colSpan={2}>
                        <p>Тууралт:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Тууралттай
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Тууралтгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={8}>Тунгалагийн булчирхайн байдал:</td>
                  </tr>
                  <tr>
                     <td colSpan={2}>
                        <p>Нягт:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Гадаргуу:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Барзгар
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Гөлгөр</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td colSpan={2}>
                        <p>Хөдөлгөөн:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хөдөлгөөнтэй
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Хөдөлгөөнгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Эмзэглэл:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td colSpan={4}>
                        <p>Дэлүүний хэмжээ</p>
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
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 1зэргээр томорсон
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 2зэргээр томорсон
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 3зэргээр томорсон
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 4зэргээр томорсон
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>
                                 Дэлүү мэс заслаар авагдсан
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={8} className="font-bold">
                        Шинжилгээ:
                     </th>
                  </tr>
                  <tr>
                     <td colSpan={4}>Цусны дэлгэрэнгүй шинжилгээ:</td>
                     <td colSpan={4}>Лейкограмм:</td>
                  </tr>
                  <tr>
                     <td>Огноо</td>
                     <td>1111</td>
                     <td>22</td>
                     <td>33</td>
                     <td>Огноо</td>
                     <td>4444</td>
                     <td>55</td>
                     <td>66</td>
                  </tr>
                  <tr>
                     <td>WBC</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td>Blasts</td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>PLT</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td>Basophil</td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>RBG</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td>Eosinophil</td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>HGB</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td>Promyelocyte</td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>HCT</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td>Myelocyte</td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>MCV</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td>Metamyelocyte</td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>MCH</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td>Bands</td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>RET</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td>Neutrophil</td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>RET-He</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td>Lymphocyte</td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td>Monocyte</td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td colSpan={8}>
                        <p>Дүгнэлт: _</p>
                        <p>_</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={8}>Миелограмм:</td>
                  </tr>
                  <tr>
                     <td>Огноо</td>
                     <td></td>
                     <td></td>
                     <td rowSpan={7} colSpan={5}>
                        <p>Дүгнэлт: _</p>
                     </td>
                  </tr>
                  <tr>
                     <td>Бласт</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Бүх нейтрофиль</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Бүх эритриод эс</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Лимфоцит</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Плазмоцит</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Мегакариоцит</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td colSpan={8}>Цито химийн урвал</td>
                  </tr>
                  <tr>
                     <td></td>
                     <td>Эерэг</td>
                     <td>Сөрөг</td>
                     <td>
                        <p>Огноо: _</p>
                     </td>
                     <td colSpan={2}>
                        <p>Дүгнэлт: _</p>
                     </td>
                     <td colSpan={2}>
                        <p>Дүгнэлт: _</p>
                     </td>
                  </tr>
                  <tr>
                     <td>MPO</td>
                     <td></td>
                     <td></td>
                     <td>
                        <p>APTT: _</p>
                     </td>
                     <td colSpan={2}></td>
                     <td colSpan={2}></td>
                  </tr>
                  <tr>
                     <td>PAS</td>
                     <td></td>
                     <td></td>
                     <td>
                        <p>PT: _</p>
                     </td>
                     <td colSpan={2}></td>
                     <td colSpan={2}></td>
                  </tr>
                  <tr>
                     <td>DAB</td>
                     <td></td>
                     <td></td>
                     <td>
                        <p>INR: _</p>
                     </td>
                     <td colSpan={2}></td>
                     <td colSpan={2}></td>
                  </tr>
                  <tr>
                     <td>NS</td>
                     <td></td>
                     <td></td>
                     <td>
                        <p>TT: _</p>
                     </td>
                     <td colSpan={2}></td>
                     <td colSpan={2}></td>
                  </tr>
                  <tr>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td>
                        <p>Fibrinogen: _</p>
                     </td>
                     <td colSpan={2}></td>
                     <td colSpan={2}></td>
                  </tr>
                  <tr>
                     <td colSpan={3}>Биохими</td>
                     <td colSpan={5}></td>
                  </tr>
                  <tr>
                     <td>Огноо</td>
                     <td></td>
                     <td></td>
                     <td rowSpan={15} colSpan={5}>
                        <p>Дүгнэлт:</p>
                     </td>
                  </tr>
                  <tr>
                     <td>Нийт билирубин</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Шууд бус билирубин</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Алат</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Асат</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Шүлт Фосфатаза</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>ЛДГ</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Кальци</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Кали</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Креатинин</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Төмөр</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Ферритин</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Төмөр хол/чадвар</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Витамин B12</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Фолийн хүчил</td>
                     <td></td>
                     <td></td>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page2;
