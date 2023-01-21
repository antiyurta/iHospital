import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';

function Page1() {
   return (
      <page size="A4">
         <Table bordered className="document mb-0">
            <thead>
               <tr>
                  <th colSpan={4} className="text-center font-bold">
                     ДОТРЫН ЭМЧИЙН ҮЗЛЭГ
                  </th>
               </tr>
               <tr>
                  <th colSpan={4}>Амьсгалын эрхтэн тогтолцоо</th>
               </tr>
               <tr>
                  <th colSpan={4}>Харж ажиглах:</th>
               </tr>
               <tr>
                  <td>
                     <p>Хамрын амьсгал</p>
                     <p>чөлөөтэй эсэх:</p>
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
                     <p>Хөхрөлт байгаа эсэх:</p>
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
                     <p>Тийм бол:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Төвийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Захын
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Амьсгалд туслах</p>
                     <p>булчингууд оролцож</p>
                     <p>байгаа эсэх:</p>
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
                     <p>Амьсгалын тоо 1:</p>
                     <p>минутанд ____ удаа:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэм жигд
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Жигд бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Цээжний хэлбэр:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Зөв
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Эмгэг
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Амьсгалын хэлбэр:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Цээжний
                           </Checkbox>
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвлийн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Холимог
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Цээжний 2 талд</p>
                     <p>амьсгал жигд оролцох</p>
                     <p>байдал:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Жигд(баруун/зүүн)
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Хоцорно
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
               <tr>
                  <th colSpan={2}>Тэмтрэлт:</th>
                  <th colSpan={2}>Тогшилт:</th>
               </tr>
               <tr>
                  <td>
                     <p>Эмзэглэлтэй эсэх:</p>
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
                     <p>Уян чанар:</p>
                     <Checkbox.Group className="ddd ml-0">
                        <Checkbox className="ml-2" value={'Хэвийн'}>
                           Хэвийн
                        </Checkbox>
                        <Checkbox value={'Томорсон (зүүн, баруун)'}>
                           Буурсан
                        </Checkbox>
                     </Checkbox.Group>
                  </td>
                  <td>
                     <p>Дууны доргион:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Хэвийн Суларсан
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Тодорхойлогдохгүй
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Хүчтэй болсон
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Тогшилтын дуу:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              2 талд ижил
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Ижил бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Тогшилтын дуу:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Бүдгэрсэн
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Тодорсон
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Дүлий болсон
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
               <tr>
                  <th colSpan={4}>Чагналт</th>
               </tr>
               <tr>
                  <td colSpan={2}>
                     <p>Амьсгал 2 талд:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Ижил
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Ижил бус (__________хэсэгт)
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Эмгэг амьсгалтай:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Тийм'}>
                              Тийм
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Үгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>
                        Тийм бол: (цулцангийн суларсан, цулцангийн ширүүссэн,
                        гуурсан хоолойн эмгэг, стенозын, амьсгал сонсогдохгүй)
                     </p>
                  </td>
                  <td colSpan={2}>
                     <p>Нэмэлт шуугиантай эсэх:</p>
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
                     <p>
                        Тийм бол: (нойтон хэржигнүүр, шажигнуур, хуурай
                        хэржигнүүр, гялтангийн шүргэлцэх чимээ
                        ___________хэсэгт)
                     </p>
                     <p>Бронхофони</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox
                              className="w-full"
                              value={'Томорсон (зүүн, баруун)'}
                           >
                              Тодорсон
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Суларсан (___________хэсэгт)
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
               <tr>
                  <th colSpan={4}>Зүрх судасны тогтолцоо</th>
               </tr>
               <tr>
                  <th colSpan={2}>Зүрх судасны эрсдэлт хүчин зүйлс:</th>
                  <th colSpan={2}>Ажиглалт</th>
               </tr>
               <tr>
                  <td>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Зохисгүй хооллолт
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Хөдөлгөөний хомсдол
                           </Checkbox>
                           <Checkbox
                              className="w-full"
                              value={'Томорсон (зүүн, баруун)'}
                           >
                              Стресс
                           </Checkbox>
                           <Checkbox
                              className="w-full"
                              value={'Томорсон (зүүн, баруун)'}
                           >
                              Таргалалт
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Тамхидалт
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
                           <Checkbox className="ml-2 w-full" value={'Хэвийн'}>
                              Архины зохисгүй хэрэглээ
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Удамшил
                           </Checkbox>
                           <Checkbox
                              className="w-full"
                              value={'Томорсон (зүүн, баруун)'}
                           >
                              Артерийн гипертензи
                           </Checkbox>
                           <Checkbox
                              className="w-full"
                              value={'Томорсон (зүүн, баруун)'}
                           >
                              Гиперхолестеринеми
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Чихрийн шижин
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td colSpan={2}>
                     <div className="inline-flex">
                        <div>
                           <p>Арьсны хөхрөлттэй эсэх:</p>
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
                        </div>
                        <div>
                           <p>Захын хавантай эсэх:</p>
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
                        </div>
                     </div>
                     <div className="inline-flex">
                        <div>
                           <p>Гүрээний венийн лугшилт:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Ажиглагдахгүй
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                    Ажиглагдана
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                           <p>(хүчтэй, дунд, сул)</p>
                        </div>
                        <div>
                           <p>Зүрхний оройн түлхэлт:</p>
                           <Form.Item
                              name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                              className="mb-0"
                           >
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={'Хэвийн'}>
                                    Ажиглагдана
                                 </Checkbox>
                                 <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                    Ажиглагдахгүй
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                     </div>
                  </td>
               </tr>
            </thead>
         </Table>
         <Table bordered className="document mb-0">
            <thead>
               <tr>
                  <th colSpan={2}>Тэмтрэлтээр</th>
                  <th>Тогшилтоор</th>
               </tr>
               <tr>
                  <td>
                     <p>Зүрхний оройн түлхэлт Байрлал:</p>
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
                     <div className="inline-flex">
                        <p>Хүч:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Дунд зэрэг
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хүчтэй
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Сул
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                     <p>Шууны артерийн лугшилт</p>
                     <div className="inline-flex">
                        <p>Хэмнэл:</p>
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
                     </div>
                  </td>
                  <td>
                     <p>Давтамж: ______/мин/</p>
                     <p>Хүчдэл:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Дунд зэрэг
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Их
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Бага
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <div className="inline-flex">
                        <p>Дүүрэлт:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Дунд зэрэг
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Cул
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                     <p>2 талд ижил эсэх:</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Ижил
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Ижил бус
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <p>Зүрхний (харьцангүй) хил хязгаар:</p>
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
                     <p>(дээд, баруун, зүүн хил)</p>
                  </td>
               </tr>
            </thead>
         </Table>
         <Table bordered className="document mb-0">
            <thead>
               <tr>
                  <th colSpan={2}>Чагналтаар</th>
               </tr>
               <tr>
                  <td>
                     <p>Зүрхний авиа:</p>
                     <div className="inline-flex">
                        <p>Хэмнэл:</p>
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
                     </div>
                     <p>Давтамж: ________/мин</p>
                     <div className="inline-flex">
                        <p>I авиа:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-3" value={'Хэвийн'}>
                                 Тод
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Бүдгэвтэр(I,IV цэгт)
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                     <div>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-14" value={'Хэвийн'}>
                                 Бүдэг(I,V)
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Чангарсан(I,IV цэгт)
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                     <div className="inline-flex">
                        <p>II авиа:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Тод
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Бүдэг(II, III,V цэгт)
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                     <div>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-14" value={'Хэвийн'}>
                                 Өргөгдсөн(II,III цэгт)
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                     <div className="inline-flex">
                        <p>III авиа:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-1" value={'Хэвийн'}>
                                 Сонсогдоно
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Сонсогдохгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </td>
                  <td>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Шуугиангүй
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              шуугиантай
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>Байрлал: I; II; III; IV; V цэг</p>
                     <p>Систолын: (I; II; III; IV; V цэгт)</p>
                     <p>Диастолын: (I; II; III; IV; V цэгт)</p>
                     <Form.Item
                        name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-2" value={'Хэвийн'}>
                              Үл дамжина
                           </Checkbox>
                           <Checkbox value={'Томорсон (зүүн, баруун)'}>
                              Дамжина_________
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <div className="inline-flex">
                        <p>Хүч:</p>
                        <Form.Item
                           name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'Хэвийн'}>
                                 Сул
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Дунд зэрэг
                              </Checkbox>
                              <Checkbox value={'Томорсон (зүүн, баруун)'}>
                                 Хүчтэй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                     <p>Перикардын шүргэлцэх чимээ бий эсэх:</p>
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
            </thead>
         </Table>
      </page>
   );
}
export default Page1;
