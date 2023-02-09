import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
import General from '../General';

function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-bold">МЭДРЭЛИЙН ЭМЧИЙН ҮЗЛЭГ</p>
            <General />
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th colSpan={3} className="text-center">
                        МЭДРЭЛИЙН ҮЗЛЭГ
                     </th>
                  </tr>
                  <tr>
                     <td className="w-48">
                        <p>Ухаан санааны байдал:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Саруул
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Саруул бус
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Баримжаалал алдагдсан:
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Цаг хугацааны:
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Орон зайн:
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Өөрийн:
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>GCS: E ___V___ M____</p>
                     </td>
                     <td>
                        <p>Сэтгэцийн байдал:</p>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Анхаарал:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Ой тогтоолт:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Тоолох чадвар:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Бүтээх чадвар:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Сэтгэл хөдлөл:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p>Зан төрөх:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Input style={{ height: 22 }} />
                           </Form.Item>
                        </div>
                     </td>
                     <td className="w-48">
                        <p>Хэл ярианы байдал:</p>
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
                                 Ойлгохын хэлгүйдэл
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Ярихын хэлгүйдэл
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Нэрлэхийн хэлгүйдэл
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Уншихгүйдэл
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Бичихгүйдэл
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Томорсон (зүүн, баруун)'}
                              >
                                 Давтан хэлэх чадвар
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr className="border-b-0">
                     <th colSpan={3}>Гавал тархины мэдрэлүүд:</th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="document2">
               <thead>
                  <tr>
                     <td rowSpan={16} colSpan={4}>
                        <p>sadas</p>
                     </td>
                     <td rowSpan={4} className="w-24">
                        <p>VII:</p>
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
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td className="w-32">
                        <p>Хэвийн бус бол:</p>
                     </td>
                     <td>Б</td>
                     <td>З</td>
                  </tr>
                  <tr>
                     <td>
                        <p>Нүдний анилт</p>
                     </td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>
                        <p>Духны атираа</p>
                     </td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>
                        <p>Хамар уруулын нугалаа</p>
                     </td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td rowSpan={4}>
                        <p>VIII:</p>
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
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Хэвийн бус бол:</p>
                     </td>
                     <td>Б</td>
                     <td>З</td>
                  </tr>
                  <tr>
                     <td>
                        <p>Сонсгол</p>
                     </td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>
                        <p>Чих шуугих</p>
                     </td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td rowSpan={4}>
                        <p>IX, X:</p>
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
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Хэвийн бус бол:</p>
                     </td>
                     <td>Б</td>
                     <td>З</td>
                  </tr>
                  <tr>
                     <td>
                        <p>Хүүхэн хэлний хазайлт</p>
                     </td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>
                        <p>Залгиурын рефлекс</p>
                     </td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Дисфони
                              </Checkbox>
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Дисфаги
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td rowSpan={3}>
                        <p>XI:</p>
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
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Хэвийн бус бол:</p>
                     </td>
                     <td>
                        <p>Б</p>
                     </td>
                     <td>
                        <p>З</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Стерноклейдомастойд</p>
                     </td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>
                        <p>Трапец хэлбэрт булчин</p>
                     </td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td rowSpan={2}>
                        <p>V:</p>
                     </td>
                     <td>Хэвийн бус бол:</td>
                     <td>Б</td>
                     <td>З</td>
                     <td rowSpan={2}>
                        <p>XII:</p>
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
                                 className="ml-2 w-full"
                                 value={'Хэвийн'}
                              >
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Хэвийн бус бол:</p>
                     </td>
                     <td>Б</td>
                     <td>З</td>
                  </tr>
                  <tr>
                     <td>
                        <p>Нүүрний мэдрэхүй</p>
                     </td>
                     <td></td>
                     <td></td>
                     <td>
                        <p>Хэлний хазайлт</p>
                     </td>
                     <td></td>
                     <td></td>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page1;
