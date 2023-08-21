import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
import React from 'react';
function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="document">
               <thead>
                  <tr>
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
                        <p>Өгсөх болон уруудах гэдэс - байрлал</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Хөндлөн гэдэс - байрлал</p>
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
                        <p>Хөдөлгөөнтэй</p>
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
                     <td>
                        <p className="font-bold">Тогшилт:</p>
                        <p>Хэвлийн хэнгэрэгэн чимээ:</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Ихэссэн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Ихэссэн хэсэгт тогшилтын дуу</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бүдгэрсэн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Тодорсон</Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Дүлий болсон</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p className="font-bold">Чагналт:</p>
                        <p>Гэдэсний гүрвэлзэх хөдөлгөөн</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Ихэссэн</Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>Дүлий</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p className="font-bold">Хэвлийн рентген шинжилгээ КТГ, хэт авиан шинжилгээ</p>
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
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Салстын өнгө:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хаван:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Z шугам:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                     </td>
                     <td>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хөдөлгөөн:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Шалбархай-хэмжээ:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>тогтолцоо:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                     </td>
                     <td>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Байрлал:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хэлбэр:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Өнгөр:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p className="font-bold">Ходоод</p>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Амсар-салстын өнгө:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хаван:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хөдөлгөөн:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Шалбархай-хэмжээ:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хэлбэр:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Өнгөр:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Тоо:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Байрлал:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                     </td>
                     <td>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Их бие-салстын өнгө:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хаван:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хөдөлгөөн:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Шалбархай-хэмжээ:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хэлбэр:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Өнгөр:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Тоо:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Байрлал:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                     </td>
                     <td>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Антрум-салтын өнгө:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хаван:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хөдөлгөөн:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Шалбархай-хэмжээ:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хэлбэр:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Өнгөр:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Тоо:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Байрлал:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p className="font-bold">Дээд гэдэс:</p>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Салстын өнгө:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хаван:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хөдөлгөөн:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                     </td>
                     <td>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Шалбархай-хэмжээ:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Хэлбэр:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Өнгөр:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Тоо:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                     </td>
                     <td>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Байрлал:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Фатер хөхлөг:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Цөс ялгаралт:</p>
                           <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p className="font-bold">Hp тодорхойлох:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p className="font-bold">Рн-метрийн шинжилгээ:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p className="font-bold">Лабораторийн шинжилгээ:</p>
                        <p>:</p>
                        <p className="font-bold">Цитологи/гистологийн шинжилгээ:</p>
                        <p>:</p>
                        <p className="font-bold">Бусад шинжилгээ:</p>
                        <p>:</p>
                        <p>:</p>
                        <p className="font-bold">Эмнэлзүйн шинжилгээ:</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p>Эмчилгээ/зөвлөгөө:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p>Зөвлөгөө өгсөн эмч:</p>
                     </td>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page2;
