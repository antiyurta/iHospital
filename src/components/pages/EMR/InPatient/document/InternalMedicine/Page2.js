import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';

function Page2() {
   return (
      <page size="A4">
         <Table bordered className="document mb-0">
            <thead>
               <tr>
                  <th colSpan={4}>Хоол боловсруулалх эрхтэн тогтолцоо</th>
               </tr>
               <tr>
                  <th>Харж ажиглах:</th>
                  <th>Өнгөц тэмтрэлтээр:</th>
                  <th>Тогшилтоор</th>
                  <th>Чагналтаар</th>
               </tr>
               <tr>
                  <td>
                     <p>Хэл өнгөртэй эсэх:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Тийм
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Үгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Арьс, салст-чийлэг:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Тийм
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Үгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Өнгө_____________</p>
                     <p>Хэвлийн - хэм</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Жигд
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Жигд бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Хэлбэр____________</p>
                  </td>
                  <td>
                     <p>Хэвлий эмзэглэлтэй эсэх</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Эмзэглэлгүй
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Эмзэглэлтэй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Булчингийн чангарал байгаа эсэх:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Тийм
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Үгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Хэвлийн хэнгэрэгэн чимээ:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Ихэссэн
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Ихэссэн хэсэгт тогшилтын дуу:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Бүдгэрсэн
                           </Checkbox>
                           <Checkbox
                              className="w-full"
                              value={'Томорсон (зүүн, баруун)'}
                           >
                              Тодорсон
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Дүлий болсон
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Гэдэсний гүрвэлзэх хөдөлгөөн:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Ихэссэн
                           </Checkbox>
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Дүлий
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
               <tr>
                  <th colSpan={4}>Гүнзгий тэмтрэлтээр:</th>
               </tr>
               <tr>
                  <td>
                     <p>Тахир гэдэс - байрлал</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Эмзэглэлгүй
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Эмзэглэлтэй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Тогтоц</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хатуу
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Зөөлөн
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Хөдөлгөөн</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Тийм
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Үгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Өгсөх болон уруудах гэдэс: - Байрлал</p>
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
                     <p>Тогтоц</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хатуу
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Зөөлөн
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Хөдөлгөөнтэй</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Тийм
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Үгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Хөндлөн гэдэс: Байрлал</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Эмзэглэлгүй
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Эмзэглэлтэй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Тогтоц</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хатуу
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Зөөлөн
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Хөдөлгөөн</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Тийм
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Үгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Цутгалан гэдэс: Байрлал</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Эмзэглэлгүй
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Эмзэглэлтэй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Тогтоц</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хатуу
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Зөөлөн
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Хөдөлгөөн</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Тийм
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Үгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
               <tr>
                  <th colSpan={4}>Элэг цөс, дэлүү</th>
               </tr>
               <tr>
                  <td>
                     <p>Элэгний шинж тэмдгүүд:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Мэдрэл сульдал
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Биж хам шинж
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Иммуни-үрэвслийн шинж
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Өвдөх хам шинж:
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Хүч_________ Хугацаа [____]</p>
                  </td>
                  <td>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Шарлах хам шинж
                           </Checkbox>
                           <Checkbox
                              className="w-full"
                              value={'Томорсон (зүүн, баруун)'}
                           >
                              Загатналт
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Цусархаг хам шинж
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Элэгний их шинж
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Элэгний бага шинж
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Элэгний хэмжээ тэмтрэлтээр:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Томорсон
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>(баруун, зүүн дэлбэн, зур)</p>
                  </td>
                  <td>
                     <p>Дэлүүний хэмжээ тэмтрэлтээр:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Томорсон
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>(I,II,III,IV зэрэг, дугуйл)</p>
                  </td>
               </tr>
               <tr>
                  <th colSpan={4}>Шээс бэлгийн тогтолцоо</th>
               </tr>
            </thead>
         </Table>
         <Table bordered className="document mb-0">
            <thead>
               <tr>
                  <td>
                     <p>Хоногийн шээсний гарц:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Ихэссэн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Багассан
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Шээсний өнгө:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Сүрлэн шар
                           </Checkbox>
                           <Checkbox
                              className="w-full"
                              value={'Томорсон (зүүн, баруун)'}
                           >
                              Улаан шар
                           </Checkbox>
                           <Checkbox
                              className="w-full"
                              value={'Томорсон (зүүн, баруун)'}
                           >
                              Өнгөргүй
                           </Checkbox>
                           <Checkbox
                              className="w-full"
                              value={'Томорсон (зүүн, баруун)'}
                           >
                              Тундастай
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Тундасгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td className="w-40">
                     <p>Шөнө шээдэг эсэх:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Тийм, тоо____
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Үгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Шээс тассалддаг эсэх:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Тийм
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Үгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Дутуу шээдэг эсэх:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Тийм
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Үгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td className="w-40">
                     <p>Дүлж шээдэг эсэх:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Тийм
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Үгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Шээхэд давсгаар өвддөг эсэх:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Тийм
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Үгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Бөөр тэмтрэлтээр:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Эмзэглэлгүй
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Эмзэглэлтэй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>(Баруун, зүүн)</p>
                     <p>Пастернацкий</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Баруун(____)
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Зүүн(____)
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
            </thead>
         </Table>
         <Table bordered className="document mb-0">
            <thead>
               <tr>
                  <th colSpan={3}>Мэдрэлийн тогтолцоо</th>
               </tr>
               <tr>
                  <td className="w-64">
                     <p>Үнэрлэх мэдрэмж:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Буурсан
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Ялгахгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Сонсголын мэдрэмж:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Ихэссэн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Буурсан
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Нүүрний 2 тал:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Ижил
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Ижил бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Рефлексүүд:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хадгалагдана
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Хадгалагдаагүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Мэдрэхүй:</p>
                     <div className="inline-flex">
                        <div>
                           <p>Өнгөц:</p>
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
                                    Ихэссэн
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                    Буурсан
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div>
                           <p>Гүн:</p>
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
                                    Ихэссэн
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                    Буурсан
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div>
                           <p>Хэт мэдрэгшил:</p>
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
                                    Ихэссэн
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                    Буурсан
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td colSpan={3}>
                     <p>Сэтгэцийн байдал:</p>
                     <p>|</p>
                     <p>|</p>
                     <p>|</p>
                  </td>
               </tr>
               <tr>
                  <td colSpan={3}>
                     <p>Бусад: (Арьс, үе мөч, тунгалагийн тогтолцоо)</p>
                     <p>|</p>
                     <p>|</p>
                     <p>|</p>
                     <p>|</p>
                  </td>
               </tr>
            </thead>
         </Table>
      </page>
   );
}
export default Page2;
