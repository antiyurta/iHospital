import { Checkbox, Form } from 'antd';
import { Tab, Table } from 'react-bootstrap';
import General from '../General';
import React from 'react';
function Page1() {
   return (
      <page size="A4">
         <p className="text-center font-bold">ЧИХ ХАМАР ХООЛОЙН ЭМЧИЙН ҮЗЛЭГ</p>
         <General />
         <Table bordered className="document mb-0">
            <thead>
               <tr>
                  <th colSpan={4} className="text-center font-bold">
                     ЧИХ ХАМАР ХООЛОЙН ҮЗЛЭГ
                  </th>
               </tr>
               <tr>
                  <td colSpan={2} className="w-72">
                     <p>Хамрын амьсгал:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Чөлөллтэй
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Саадтай /баруун, зүүн, 2 талд адил/</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Гадна хамрын хэлбэр:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Зөв
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Зөв бус</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td className="w-40">
                     <p>Тэмтрэхэд:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Эмзэглэлгүй
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Эмзэглэлтэй</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
               <tr>
                  <td>
                     <p>Хамрын үүдэвч:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Хэвийн бус</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Ерөнхий хөндий:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Чөлөөтэй
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Саадтай</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Хамрын таславч:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Муруйлтгүй
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Муруйсан
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Бусад өөрчлөлттэй</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>END ZURGA BAUIN</td>
               </tr>
            </thead>
         </Table>
         <Table bordered className="document mb-0">
            <thead>
               <tr>
                  <td>
                     <p>Хамрын салст бүрхүүл:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Ягаан
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Улаан ягаан
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Хөхөлбий
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Цайвар
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Бусад
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td colSpan={2}>
                     <p>Самалдгууд:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                              Хөөнгө
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Бусад өөрчлөлттэй</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Хамрын жим:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Ялгадасгүй
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>Ялгадастай</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td className="w-44">
                     <p>Ялгадас:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Эмгэг шинжтэй:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Идээрхэг
                           </Checkbox>
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Ногоон
                           </Checkbox>
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Үнэртэй
                           </Checkbox>
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Өтгөн
                           </Checkbox>
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Бусад өөрчлөлттэй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
               <tr>
                  <th colSpan={4}>END ZURGA BAIN</th>
               </tr>
               <tr>
                  <th colSpan={4}>
                     <p className="font-normal">Бүсийн лимфийн булчирхайн байдал:</p>
                  </th>
               </tr>
               <tr>
                  <th colSpan={4}>Баруун, зүүн чих:</th>
               </tr>
               <tr>
                  <td>
                     <p>Гадна чихний хэлбэр:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хэвийн бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Тэмтрэхэд:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Эмзэглэлгүй
                           </Checkbox>
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Эмзэглэлтэй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Хөхлөг сэртэн:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хавантай
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Тэмтрэхэд:</p>
                     <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Эмзэглэлгүй
                           </Checkbox>
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Эмзэглэлтэй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
            </thead>
         </Table>
      </page>
   );
}
export default Page1;
