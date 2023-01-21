import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';

function General() {
   return (
      <>
         <Table bordered className="document mb-0">
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
         <Table bordered className="document mb-0">
            <thead>
               <tr style={{ borderTopWidth: 0 }}>
                  <td className="w-64">Амьсгалын 1 минутанд ______ удаа</td>
                  <td>
                     <div className="flex flex-wrap">
                        <div className="basis-1/2">
                           <p className="font-bold">Чагналтаар:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
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
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
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
         <Table bordered className="document mb-0">
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
         <Table bordered className="document mb-0">
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
      </>
   );
}
export default General;
