import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';
import Index from '../ClinicalDiagnosis/Index';
import React from 'react';
function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="document mb-0">
               <thead>
                  <tr>
                     <td>
                        <p>Тархац: Тэлэлт:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Дангараа
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>
                                 Нэг хэсэг (хэсэгчилсэн)
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>
                                 Хэсэг газрыг хамарсан
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>
                                 Бүх биеэр тархсан
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Байрлалт</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 2 талд тэгш
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Тэгш бус
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>
                                 Өртсөн хэсэгт
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>
                                 Даралттай хэсэгт
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Хурууны засвар</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Энд тэнд
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>
                                 Blaschko-н шугам дагуу
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={3}>
                        Өвчлөлтэй холбогдолтой түүх (Удамшлын болоод бодисын
                        солилцооны өвчний түүх)
                     </th>
                  </tr>
                  <tr className="border-b-0">
                     <td colSpan={3}>
                        <p>
                           1. Чихэрийн шижинтэй эсэх _________________________
                        </p>
                        <p>2. Даралт ихтэй эсэх _________________________</p>
                        <p>
                           3. Харшил (ялангуяа эмийн) _________________________
                        </p>
                        <p>
                           4. Эм хэрэглэлт, байнга уудаг болон одоо ууж байгаа
                           _________________________
                        </p>
                        <p>
                           5. Хорт зуршил (архи, тамхи)
                           _________________________
                        </p>
                        <p>
                           6. Атофын түүх (астма, чонон хөрвөс, экзем)
                           _________________________
                        </p>
                        <p>
                           7. Гэр бүлийн өвчлөлийн түүх
                           _________________________
                        </p>
                        <p>
                           8. Нийгмийн идэвх сонирхол _________________________
                        </p>
                        <p>
                           9. Бэлгийн хавьтлын түүх _________________________
                        </p>
                     </td>
                  </tr>
               </thead>
            </Table>
            <Index />
         </div>
      </div>
   );
}
export default Page2;
