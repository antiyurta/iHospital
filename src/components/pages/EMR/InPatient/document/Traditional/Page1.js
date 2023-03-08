import React from 'react';
import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';
import General from '../General';

function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-bold">УЛАМЖЛАЛТЫН ЭМЧИЙН ҮЗЛЭГ</p>
            <General />
            <Table bordered className="document">
               <thead>
                  <tr>
                     <th colSpan={4}>Өвөрчлөл:</th>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <div className="flex flex-wrap">
                           <div className="basis-1/2">
                              <Form.Item
                                 name={[
                                    'Цусны эргэлтийн тогтолцоо',
                                    'Тогшилтоор'
                                 ]}
                                 className="mb-0"
                              >
                                 <Checkbox.Group className="ddd ml-0">
                                    <Checkbox
                                       className="ml-2 w-full"
                                       value={'Хэвийн'}
                                    >
                                       Хий
                                    </Checkbox>
                                    <Checkbox
                                       className="w-full"
                                       value={'Томорсон (зүүн, баруун)'}
                                    >
                                       Шар
                                    </Checkbox>
                                    <Checkbox
                                       className="w-full"
                                       value={'Томорсон (зүүн, баруун)'}
                                    >
                                       Бадган
                                    </Checkbox>
                                    <Checkbox
                                       className="w-full"
                                       value={'Томорсон (зүүн, баруун)'}
                                    >
                                       Хий шар хавсарсан
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                           <div className="basis-1/2">
                              <Form.Item
                                 name={[
                                    'Цусны эргэлтийн тогтолцоо',
                                    'Тогшилтоор'
                                 ]}
                                 className="mb-0"
                              >
                                 <Checkbox.Group className="ddd ml-0">
                                    <Checkbox
                                       className="ml-2 w-full"
                                       value={'Хэвийн'}
                                    >
                                       Хий бадган хавсарсан
                                    </Checkbox>
                                    <Checkbox
                                       className="w-full"
                                       value={'Томорсон (зүүн, баруун)'}
                                    >
                                       Шар бадган хавсарсан
                                    </Checkbox>
                                    <Checkbox
                                       className="w-full"
                                       value={'Томорсон (зүүн, баруун)'}
                                    >
                                       Хий, шар, бадган хурсан
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                        </div>
                     </td>
                     <td>
                        <p>Цог сүлд:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Сайн
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Дунд
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Буурсан
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td className="w-16"></td>
                     <th className="text-center">Хий</th>
                     <th className="text-center">Шар</th>
                     <th className="text-center">Бадган</th>
                  </tr>
                  <tr>
                     <th colSpan={4} className="text-center">
                        Үзэх шинжилгээ
                     </th>
                  </tr>
                  <tr>
                     <td className="text-center w-20">Нүүр царай</td>
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
                                 Хуурай ширүүн
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Бор хүрэн хар хөхөлбөр өнгөтэй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Бусад
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
                                 Зөөлөн чийглэг хөлс ихтэй, тослог
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Улаа бутарсан шар, шаргал өнгөтэй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Бусад
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
                                 Сэлхэрсэн
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Цайвар өнгөтэй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center">Нүд</td>
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
                                 Цагаан нүд хөхөлбөр
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Харц тогтворгүй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Олон анивчина
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Нулимс гоожно
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Бусад
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
                                 Цагаан нүд улаан, шар, шаргал
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Махан ургацагтай
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Харц ургацагтай
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Шар ус, нуух гоожно
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Бусад
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
                                 Цагаан нүд цагаан, цайвар
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Өөхөн ургацагтай
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Харц дөлгөөн
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Зовхи сэлхэрсэн
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center">Чих</td>
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
                                 Хөхөлбөр өнгөтэй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Шуугина загатнана
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Бусад
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
                                 Улаан шар өнгөтэй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Шар ус өгрөө булаг гоожно
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Бусад
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
                                 Цагаан өнгөтэй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Хулхи ихтэй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center">Хамар</td>
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
                                 Хөхөлбөр өнгөтэй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Хамар битүүрэх
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
                                 Хамар улайх, цус гарах, хуурайших
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
                                 Хамраас ялгадас гарах, хамрын үзүүр цайх
                              </Checkbox>
                              {/* <Checkbox className="ml-2 w-full" value={"Хэвийн"}>Бусад</Checkbox> */}
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
