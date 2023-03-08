import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';
import General from '../General';
import React from 'react';
function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-bold">БИЕИЙН ЕРӨНХИЙ ҮЗЛЭГ</p>
            <General />
            <Table bordered className="document">
               <thead>
                  <tr>
                     <td colSpan={3}>
                        <p>Арьс, тунгалгийн тогтолцоо : ________</p>
                        <p>_____________________________________</p>
                        <p>_____________________________________</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p className="font-bold text-center">
                           ЭРҮҮ НҮҮРНИЙ МЭС ЗАСЛЫН ЭМЧИЙН ҮЗЛЭГ
                        </p>
                        <p className="font-bold text-center">
                           ХЭСЭГ ГАЗРЫН ҮЗЛЭГ (St.localis)
                        </p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>:</td>
                  </tr>
                  <tr>
                     <td colSpan={3}>:</td>
                  </tr>
                  <tr>
                     <td colSpan={3}>:</td>
                  </tr>
                  <tr>
                     <td colSpan={3}>:</td>
                  </tr>
                  <tr>
                     <td>
                        <p>Хамрын амьсгал:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Чөлөөтэй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Саадтай /баруун, зүүн, 2 талд адил /
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Гадна хамрын хэлбэр:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Зөв
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Зөв бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Тэмтрэхэд:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Эмзэглэлтэй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Хамрын үүдэвч:</p>
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
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Ерөнхий хөндий:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Чөлөөтэй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Саадтай
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Хамрын таславч:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Муруйлтгүй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Муруйсан
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Бусад өөрчлөлттэй</p>
                     </td>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page1;
