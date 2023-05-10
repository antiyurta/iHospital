import React from 'react';
import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';

function Page3() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="document">
               <thead>
                  <tr>
                     <td className="w-20"></td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Хумс</td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хөхрөх
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хувхайрах
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Зузаарах
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хатуу болох
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Шарлах
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Харавтар зураас тогтох
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Цайх
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Цагаан толбо, дусал адил бусаар гарах
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th className="text-center" colSpan={4}>
                        Хүрэлцэх шинжилгээ
                     </th>
                  </tr>
                  <tr>
                     <td rowSpan={4}>Бэлчир орон</td>
                     <th colSpan={3} className="text-center">
                        Өврийн бэлчир
                     </th>
                  </tr>
                  <tr>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хар цагааны завсар
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Гэдэсний дээд
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Гэдэсний доод
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Аюулхайн
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Галын илч буурсан
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Бэтгийн
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Давсагны
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={3} className="text-center">
                        Арын бэлчир
                     </th>
                  </tr>
                  <tr>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Th1 - Хий
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Th6 - Амин судас
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Th7 - Зүрх
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 L4 - Олгой
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Th2 - Шар
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Th9 - Элэг
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Th10 - Цөс
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 L5 - Гэдэс
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Th3 - Бадган
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Th11 - Дэлүү
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Th12 - Ходоод
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 S1 - Давсаг
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>Хаван, хавдар</td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хуурай, ширүүн, хүйтэн, ихсэж багасах нь түргэн
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Өвчин эмзэглэл ихтэй, халуун
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хүйтэн, өвчин эмзэглэл бага, тогтвортой
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>Арьс</td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хуурай
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Ширүүн
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хүйтэн
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Зөөлөн
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Тослог
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Бүлээн, халуун
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Өөхлөг
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Тослог
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хүйтэн
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={4} className="text-center">
                        Асуух шинжилгээ
                     </th>
                  </tr>
                  <tr>
                     <td>Өлсөх</td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Тогтмол бус
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Их
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Бага
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>Ундаасах</td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Тогтмол бус
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Их
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Бага
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>Нойр</td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Өнгөц сэрэмтгий
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Их зүүдлэнэ, хар дарна
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Шөнө унтаж чадахгүй
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Өдөр нойр их хүрнэ
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Нойр их
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Алжааж нойрмоглоно
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>Яриа</td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Түргэн
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Олон үглэнэ
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хурц ширүүн, түрэмгий
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Удаан алгуур
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Үг дуу цөөн
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>Галбир</td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Туранхай
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Дунд зэрэг
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Тарган
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>Биеийн идэвхи</td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хөдөлгөөн түргэн
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Дунд зэрэг
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Хөдөлгөөн удаан
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>Оюуны идэвхи</td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Санаж сэдсэн, идэвхитэй
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Түрэмгий ухаалаг
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Амгалан, удаан
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>Ман чанар</td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Дан
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хавсарсан
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Дан
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хавсарсан
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                                 Дан
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хавсарсан
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бусад
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
export default Page3;
