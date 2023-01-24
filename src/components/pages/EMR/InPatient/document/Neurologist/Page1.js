import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
import General from '../General';

function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-bold">МЭДРЭЛИЙН ЭМЧИЙН ҮЗЛЭГ</p>
            <Table bordered className="document2 mb-0">
               <thead>
                  <tr>
                     <th className="text-center">Бие ерөнхий байдал</th>
                     <th className="text-center">Ухаан санаа</th>
                     <th className="text-center">Арьс салст</th>
                  </tr>
                  <tr>
                     <td className="w-58">
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Дунд
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хүндэвтэр
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хүнд
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Маш хүнд
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td className="w-48">
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Бүдгэвтэр
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Ухаангүй
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
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={3}>Амьсгалын эрхтэн тогтолцоо</th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="document2 mb-0">
               <thead>
                  <tr style={{ borderTopWidth: 0 }}>
                     <td className="w-64">Амьсгалын 1 минутанд ______ удаа</td>
                     <td>
                        <div className="flex flex-wrap">
                           <div className="basis-1/2">
                              <p className="font-bold">Чагналтаар:</p>
                              <Form.Item
                                 name={[
                                    'Цусны эргэлтийн тогтолцоо',
                                    'Тогшилтоор'
                                 ]}
                                 className="mb-0"
                              >
                                 <Checkbox.Group className="ddd ml-0">
                                    <Checkbox className="ml-2" value={'Хэвийн'}>
                                       Уушги цулцангийн
                                    </Checkbox>
                                    <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                       Гуурсан хоолойн
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
                                       className="ml-2"
                                       value={'Томорсон (зүүн, баруун)'}
                                    >
                                       Хэржигнүүртэй
                                    </Checkbox>
                                    <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                       Амьсгал сулавтар
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                              <p>(баруун, зүүн, 2 талдаа)</p>
                           </div>
                        </div>
                     </td>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="document2 mb-0">
               <thead>
                  <tr style={{ borderTopWidth: 0 }}>
                     <th colSpan={3}>Цусны эргэлтийн тогтолцоо</th>
                  </tr>
                  <tr>
                     <td className="w-36">
                        <p>Судасны цохилт 1</p>
                        <p>минутанд_____удаа</p>
                        <p>Хүчдэл</p>
                        <p>дүүрэлт_____</p>
                     </td>
                     <td className="w-36">
                        <p className="font-bold">Тогшилтоор:</p>
                        <p>Зүрхний хил</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Томорсон (зүүн, баруун)
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p className="font-bold">Чагналтаар:</p>
                        <p>Зүрхний хил</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Тод
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Бүдэг
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Бүдгэвтэр
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хэм жигд
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Жигд бус
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хэм алдалттай
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>АД баруун талд ____/____ Зүүн талд ____/____</p>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={3}>Хоол шингээх эрхтэн тогтолцоо</th>
                  </tr>
                  <tr>
                     <td>
                        <p>Хэл</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хуурай
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Өнгөргүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Өнгөртэй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td colSpan={2}>
                        <p>Хэвлийн үзлэг:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Өнгөц тэмтрэлтээр
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Гүн тэмтрэлтээр
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Эмзэглэлтэй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>(байрлал____)</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Зөөлөн гялтан цочрол үгүй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Гялтан цочролыэн шинж илэрсэн
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="document2 mb-0">
               <thead>
                  <tr style={{ borderTopWidth: 0 }}>
                     <th colSpan={2}>Мэдрэлийн тогтолцоо</th>
                  </tr>
                  <tr>
                     <td>
                        <p>Сонсох чадвахи:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Буурсан (баруун, зүүн)
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Рефлексүүд:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Хадгалагдана
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хадгалагдахгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={2}>
                        <p>Бусад</p>
                        <p>Сэтгэцийн байдал:</p>
                        <p>:</p>
                     </td>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="document2 mb-0">
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
