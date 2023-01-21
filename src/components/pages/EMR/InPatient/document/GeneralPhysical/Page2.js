import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';

function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="document mb-0">
               <thead>
                  <tr>
                     <td>
                        <p>Хамрын салст бүрхүүл:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Ягаан
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Улаан ягаан
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Хөхөлбий
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Цайвар
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
                        <p>Самалдгууд:</p>
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
                                 Хөөнгө
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Бусад өөрчлөлттэй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хамрын жим:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Ялгадасгүй
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Ялгадастай
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td className="w-48">
                        <p>Ялгадас:</p>
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
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Эмгэг шинжтэй:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Идээрхэг
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Ногоон
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Үнэртэй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Өтгөн
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Бусад өөрчлөлттэй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr className="border-b-0">
                     <th colSpan={3}>Баруун, зүүн чих:</th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="document">
               <thead>
                  <tr>
                     <td>
                        <p>Гадна чихний хэлбэр:</p>
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
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Тэмтрэлт:</p>
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
                        <p>Хөхлөг сэртэн:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хавантай
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Тэмтрэлт:</p>
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
                  </tr>
                  <tr>
                     <td>
                        <p>Чихний гадна суваг:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Нарийссан
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>(төрөлхийн, олдмол)</p>
                     </td>
                     <td colSpan={2}>
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
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Ялгадасгүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Ялгадастай:(идээрхэг, үнэртэй, ногоон)
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Сувгийн хана:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Цүлхийсэн (аль хана)
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={4}>Амны хөндий:</th>
                  </tr>
                  <tr>
                     <td>
                        <p>Ам ангайлт:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Чөлөөтэй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хязгаарлагдсан
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хүүхэн хэл:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td colSpan={2}>
                        <p>Зөөлөн тагнай:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Зөөлөн тагнай:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Томорсон
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 1-р зэрэг
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 2-р зэрэг
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 3-р зэрэг
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Бусад өөрчлөлт
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Залгиурын хажуу хана:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Шувтан хонхрын байдал:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хэвийн бус
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
