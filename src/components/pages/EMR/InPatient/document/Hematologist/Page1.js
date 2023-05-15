import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';
import General from '../General';
import React from 'react';
function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-bold">ЦУСНЫ ЭМЧИЙН ҮЗЛЭГ</p>
            <General />
            <Table bordered className="document">
               <thead>
                  <tr className="border-t-0">
                     <th colSpan={4} className="text-center">
                        Цус судлалын эмчийн үзлэг
                     </th>
                  </tr>
                  <tr>
                     <td colSpan={2} rowSpan={2}>
                        END ZURGA BAINA
                     </td>
                     <td colSpan={2}>
                        <p>Зовиур: _</p>
                        <p>_</p>
                        <p>_</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={2}>
                        <p>Биеийн жин /Кг/:</p>
                        <p>Биеийн өндөр /См/:</p>
                        <p>Биеийн гадаргуу /м2/:</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p className="font-bold">Арьсан дээрх тууралтын хэлбэр:</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Цэгчилсэн гүвдрүүт тууралт
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Цэврүүт тууралт
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Толбон тууралт
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Шалбархайт болон тав тогтсон
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Сорви
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Хөхрөлт
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Цус хуралт
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Цус харвалт
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Холимог тууралт
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Тууралтгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p className="font-bold">Үсний байдал:</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Хугарамтгай
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p className="font-bold">Хумсны байдал:</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Хугарамтгай
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td colSpan={2}>
                        <p>(Тууралтын байрлалыг зурагт тэмдэглэх)</p>
                        END ZURGA BAINA
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Хумсны байдал:</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Хугарамтгай
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Амны хөндий: Хэл/</p>
                        <p className="underline">Өнгө:</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Цайвар
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Улаан
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Хөхлөг:</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Хатингаршсан
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Томорсон
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Тууралт:</p>
                        <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Тууралттай
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Шарх
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Улайлт
                              </Checkbox>
                              <Checkbox className="w-full" value={'Томорсон (зүүн, баруун)'}>
                                 Яр
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
