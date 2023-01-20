import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';

function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="document">
               <thead>
                  <tr>
                     <td className="w-20"></td>
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
                                 Үнэр мэдрэхгүй болох
                              </Checkbox>
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
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
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center">Уруул</td>
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
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Муруйна
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Чичирч таталдана
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
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
                                 {'Улбар шаргал өнгөтэй'}
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хатаж хуурайшина хагарна
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Цус гарна
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
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
                                 Цайвар өнгөтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Өнгөртэй, өрөмтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Ялбарна, шүүс гоожино
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center">Хэл</td>
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
                                 Улаан, хөхөлбөр, ягаан өнгөтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хуурай ширүүн
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Өнгөргүй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хийн гүвдрүүтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хөшүүн охор богино үзүүр нарийн, хэл чулчирна
                                 хэлгийрнэ таталдана
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Эхүүн амтагдана
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
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
                                 Улаавтар өнгөтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Нимгэн зузаан шаргал шар өнгөртэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Улаан бэржүү гүвдрүүтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хар толбо зураастай
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Давслаг гашуун амтагдана
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
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
                                 Цайвар ягаан өнгөтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Том
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Чийлэг зөөлөн
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Нимгэн зузаан цайвар өнгөртэй, зах ирмэгээрээ
                                 шүдний оромтой
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Ам заваарна
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Амтлаг амтагдана
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center">Баас</td>
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
                                 Шингэн
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хөөс ихтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хоргослож хатна
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
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
                                 Шар өнгөтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Цус өгрийн хольцтой
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Өмхий үнэртэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
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
                                 Цайвар шаргал өнгөтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Эс шингэсэн идээ ундаа салсын хольцтой
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Наалдамтгай
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Исгэлэн үнэртэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center">Шээс</td>
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
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Ус адил тунгалаг
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Үнэр уур багатай
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хөөс том, дуутай хагарч арилна
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Дээрээ бутарсан нарийн ширхэглэг язмагтай
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хувирсаны сүүлд хөхөлбөр өнгөтэй, тунгалаг
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
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
                                 Шар, улбар шар, улаан өнгөтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Үнэр уух ихтэй, уур нь удаан арилна
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хөөс нь жижиг түргэн арилна
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Зузаан өрөмтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Дундаа хөвсөн зузаан бөөгнөрсөн язмагтай
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хувирсаны сүүлд шар улбар хүрэн өнгөтэй өтгөн
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
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
                                 Цайвар шар өнгөтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Үнэр уур багатай
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хөөс нь жижиг удаан арилна, савны хананд
                                 наалдана
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Доороо нарийн бөөгнөрсөн тунасан язмагтай
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хувирсаны сүүлд цайвар шар өнгөтэй, шингэн
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center">Хөлс</td>
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
                                 Бага хэмжээтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
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
                                 Их хэмжээтэй, үнэрлэг
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
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
                                 Дунд зэрэг
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center">Үс</td>
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
                                 Бор хар өнгөтэй
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хар
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хуурай
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Буржгар
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
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
                                 Шаравтар
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Тослог
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Зөөлөн улаан, эрт бууралтсан
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
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
                                 Бараан, гялалзсан
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Тослог
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Даахирсан
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Бусад
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-center">Шүд</td>
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
                                 Дорсгор иржгэр
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Том
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Эцэнхий буйлтай
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
                                 Шарласан
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Тослог
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Зөөлөн буйлтай
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
                                 Цагаан
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox className="w-full" value={'Хэвийн'}>
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
export default Page2;
