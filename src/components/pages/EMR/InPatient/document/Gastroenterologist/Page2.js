import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';

function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="document">
               <thead>
                  <tr>
                     <td>
                        <p>Хөдөлгөөнтэй</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Үгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Өгсөх болон уруудах гэдэс - байрлал</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Эмзэглэлтэй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Хөндлөн гэдэс - байрлал</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Эмзэглэлтэй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Тогтоц</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Зөөлөн
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Тогтоц</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Зөөлөн
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хөдөлгөөнтэй</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Үгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p className="font-bold">Тогшилт:</p>
                        <p>Хэвлийн хэнгэрэгэн чимээ:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Ихэссэн
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Ихэссэн хэсэгт тогшилтын дуу</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бүдгэрсэн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Тодорсон
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Дүлий болсон
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p className="font-bold">Чагналт:</p>
                        <p>Гэдэсний гүрвэлзэх хөдөлгөөн</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Ихэссэн
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Дүлий
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p className="font-bold">
                           Хэвлийн рентген шинжилгээ КТГ, хэт авиан шинжилгээ
                        </p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p className="font-bold">Дурангийн шинжилгээ:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p className="font-bold">Улаан хоолойн</p>
                        <p className="inline-flex items-center">
                           Салстын өнгө:
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Input />
                           </Form.Item>
                        </p>
                        <p className="inline-flex items-center">
                           Хаван:
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Input />
                           </Form.Item>
                        </p>
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
                                 Хөдөлгөөн ____
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Шалбархай - хэмжээ
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Тоо
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
                                 Байрлал ____
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хэлбэр ____
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Өнгөр
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p className="font-bold">Ходоод</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Амсар - салстын өнгө
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Хаван
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хөдөлгөөн
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Өнгөр
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Өнгөр
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Өнгөр
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Өнгөр
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
export default Page2;
