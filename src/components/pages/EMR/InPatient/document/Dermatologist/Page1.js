import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';
import General from '../General';

function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-bold">АРЬСНЫ ЭМЧИЙН ҮЗЛЭГ</p>
            <General />
            <Table bordered className="document mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th className="text-center">
                        Арьс, салст, дайвруудын үзлэг
                     </th>
                  </tr>
                  <tr>
                     <td>
                        <div className="inline-flex">
                           <p className="font-bold">
                              Арьсны хүрэлцэх мэдрэхгүй байдал:{' '}
                           </p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Мэдэрч байна
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>
                                    Мэдрэхгүй байна
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <th>Арьсны байдал:</th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="document mb-0">
               <thead>
                  <tr className="border-t-0">
                     <td>
                        <p>Арьсны өнгө:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Улаан цоохор</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн бус
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Зэвхий саарал
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Шар</Checkbox>
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
                                 Шарангуй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хүрэн
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Харласан</Checkbox>
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
                                 Хөхөрсөн
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Ихэссэн
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Багассан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="document mb-0">
               <thead>
                  <tr className="border-t-0">
                     <td>
                        <p>Уян чанар:</p>
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
                                 Ихэссэн
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Алдагдсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Арьсны халуун:</p>
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
                                 Халуун
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Хүйтэн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Чийглэг байдал:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Хөхөрсөн
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Ихэссэн
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Багассан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={3} className="text-center">
                        Хэсэг газрын үзлэг
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={3}>Тууралтын онцлог</th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="document">
               <thead>
                  <tr className="border-t-0">
                     <td>
                        <p>Өнгө:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Ягаан
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Улаан</Checkbox>
                              <Checkbox value={'Хэвийн'}>Цагаан</Checkbox>
                              <Checkbox value={'Хэвийн'}>Цайвар бор</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Бор
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хар
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Хөх</Checkbox>
                              <Checkbox value={'Хэвийн'}>Саарал</Checkbox>
                              <Checkbox value={'Хэвийн'}>Шар</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td className="w-40">
                        <p>Хүрээ:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хил хязгаар нь тод
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>
                                 Тод бус (well defined)(III-defined)
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Хэлбэр:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Дугараг
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Зууван</Checkbox>
                              <Checkbox value={'Хэвийн'}>Олон талт</Checkbox>
                              <Checkbox value={'Хэвийн'}>
                                 Олон цагирагт
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
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Зоос хэлбэрийн
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>
                                 Могой хэлбэрийн
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Шугаман</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Тэмтрэхэд:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Тогтоц нь
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хатуувтар
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Нягт хатуу</Checkbox>
                              <Checkbox value={'Хэвийн'}>Бамбалзсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Давгар
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Халуун</Checkbox>
                              <Checkbox value={'Хэвийн'}>Хүйтэн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
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
                     </td>
                     <td>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Эмзэглэлтэй
                              </Checkbox>
                              <Checkbox value={'Хэвийн'}>Эмзэглэлгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p>Эмх цэгц, хэв маяг болон тархалт</p>
                        <div className="inline-flex">
                           <p>Тоо хэмжээ:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Нэг
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>
                                    Олон тууралт
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                     </td>
                     <td colSpan={2}>
                        <div className="inline-flex">
                           <p>Эма цэгц:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Бүлэглэсэн
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>Тархсан</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="inline-flex">
                           <p>Нягтрал:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Байгаа
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>Байхгүй</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                     </td>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page1;
