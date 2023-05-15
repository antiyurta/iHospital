import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
import React from 'react';
function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="story mb-0">
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
                     <th>
                        <p>Хамрын амьсгал</p>
                        <p>чөлөөтэй эсэх:</p>
                        <Form.Item name={['doctorInspection', 'ct1IM1.1.1']} shouldUpdate className="mb-0" noStyle>
                           <Checkbox.Group className="checkboxx ml-0">
                              <Checkbox className="checkboxx ml-2" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хөхрөлт байгаа эсэх:</p>
                        <Form.Item name={['doctorInspection', 'ct1IM1.1.2']} shouldUpdate className="mb-0" noStyle>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Тийм бол:</p>
                        <Form.Item name={['doctorInspection', 'ct1IM1.1.3']} shouldUpdate className="mb-0" noStyle>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Төвийн
                              </Checkbox>
                              <Checkbox value={1}>Захын</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Амьсгалд туслах булчингууд оролцож</p>
                        <p>байгаа эсэх:</p>
                        <Form.Item name={['doctorInspection', 'ct1IM1.1.4']} shouldUpdate className="mb-0" noStyle>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Амьсгалын тоо 1:</p>
                        <p>
                           минутанд
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.1.5']}>
                              <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           </Form.Item>{' '}
                           удаа:
                        </p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.1.6']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Хэм жигд
                              </Checkbox>
                              <Checkbox value={1}>Жигд бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Цээжний хэлбэр:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.1.7']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Зөв
                              </Checkbox>
                              <Checkbox value={1}>Эмгэг</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Амьсгалын хэлбэр:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.1.8']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Цээжний
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={1}>
                                 Хэвлийн
                              </Checkbox>
                              <Checkbox value={2}>Холимог</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Цээжний 2 талд</p>
                        <p>амьсгал жигд оролцох</p>
                        <p>байдал:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.1.9']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Жигд(баруун/зүүн)
                              </Checkbox>
                              <Checkbox value={1}>Хоцорно</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Тэмтрэлт:</th>
                     <th colSpan={2}>Тогшилт:</th>
                  </tr>
                  <tr>
                     <th>
                        <p>Эмзэглэлтэй эсэх:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.2.1']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={1}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           [
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.2.2']}>
                              <Input className="w-32" />
                           </Form.Item>
                           ]
                        </p>
                        <p>Уян чанар:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.2.3']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Буурсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Дууны доргион:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.2.4']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Хэвийн Суларсан
                              </Checkbox>
                              <Checkbox value={1}>Тодорхойлогдохгүй</Checkbox>
                              <Checkbox value={2}>Хүчтэй болсон</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Тогшилтын дуу:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.3.1']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 2 талд ижил
                              </Checkbox>
                              <Checkbox value={1}>Ижил бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Хэсэгт тогшилтын дуу:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.3.2']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Бүдгэрсэн
                              </Checkbox>
                              <Checkbox value={1}>Тодорсон</Checkbox>
                              <Checkbox value={2}>Дүлий болсон</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Чагналт</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>
                        <p>Амьсгал 2 талд:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.4.1']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Ижил
                              </Checkbox>
                              <Checkbox value={1}>Ижил буc</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <span>
                           (
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.4.2']}>
                              <Input className="amaraInput w-12" />
                           </Form.Item>
                           хэсэгт )
                        </span>
                        <p>Эмгэг амьсгалтай:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.4.3']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           <span>
                              Тийм бол:(
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM1.4.4']}
                              >
                                 <Checkbox.Group className="inline">
                                    <Checkbox className="test" value={0}>
                                       цулцангийн суларсан
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={1}>
                                       цулцангийн ширүүссэн
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={2}>
                                       гуурсан хоолойн эмгэг
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={3}>
                                       стенозын
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={4}>
                                       амьсгал сонсогдохгүй
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                              )
                           </span>
                        </p>
                     </th>
                     <th colSpan={2}>
                        <p>Нэмэлт шуугиантай эсэх:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.4.5']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           <span>
                              Тийм бол:(
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM1.4.6']}
                              >
                                 <Checkbox.Group className="inline">
                                    <Checkbox className="test" value={0}>
                                       нойтон хэржигнүүр
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={1}>
                                       шажигнуур
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={2}>
                                       хуурай хэржигнүүр
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={3}>
                                       гялтангийн шүргэлцэх
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                              чимээ
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM1.4.7']}
                              >
                                 <Input className="amaraInput w-20" />
                              </Form.Item>
                              хэсэгт )
                           </span>
                        </p>
                        <p>Бронхофони</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM1.4.8']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="w-full" value={1}>
                                 Тодорсон
                              </Checkbox>
                              <Checkbox className="w-auto" value={2}>
                                 Суларсан
                              </Checkbox>
                              <p className="inline">
                                 (
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1IM1.4.9']}
                                 >
                                    <Input className="amaraInput w-28" />
                                 </Form.Item>
                                 хэсэгт )
                              </p>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Зүрх судасны тогтолцоо</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Зүрх судасны эрсдэлт хүчин зүйлс:</th>
                     <th colSpan={2}>Ажиглалт</th>
                  </tr>
                  <tr>
                     <th>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.1.1']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Зохисгүй хооллолт
                              </Checkbox>
                              <Checkbox value={1}>Хөдөлгөөний хомсдол</Checkbox>
                              <Checkbox className="w-full" value={2}>
                                 Стресс
                              </Checkbox>
                              <Checkbox className="w-full" value={3}>
                                 Таргалалт
                              </Checkbox>
                              <Checkbox value={4}>Тамхидалт</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th className="w-20">
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.1.2']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Архины зохисгүй хэрэглээ
                              </Checkbox>
                              <Checkbox value={1}>Удамшил</Checkbox>
                              <Checkbox className="w-full" value={2}>
                                 Артерийн гипертензи
                              </Checkbox>
                              <Checkbox className="w-full" value={3}>
                                 Гиперхолестеринеми
                              </Checkbox>
                              <Checkbox value={4}>Чихрийн шижин</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th colSpan={2}>
                        <div className="inline-flex">
                           <div>
                              <p>Арьсны хөхрөлттэй эсэх:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM2.2.1']}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={0}>
                                       Тийм
                                    </Checkbox>
                                    <Checkbox value={1}>Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                           <div>
                              <p>Захын хавантай эсэх:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM2.2.2']}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={0}>
                                       Тийм
                                    </Checkbox>
                                    <Checkbox value={1}>Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                        </div>
                        <div className="inline-flex">
                           <div>
                              <p>Гүрээний венийн лугшилт:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM2.2.3']}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={0}>
                                       Ажиглагдахгүй
                                    </Checkbox>
                                    <Checkbox value={1}>Ажиглагдана</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                              <p>
                                 <span>
                                    (
                                    <Form.Item
                                       shouldUpdate
                                       className="mb-0"
                                       noStyle
                                       name={['doctorInspection', 'ct1IM2.2.4']}
                                    >
                                       <Checkbox.Group className="inline">
                                          <Checkbox className="test" value={0}>
                                             хүчтэй
                                          </Checkbox>
                                          <Checkbox className="ml-0 test" value={1}>
                                             дунд
                                          </Checkbox>
                                          <Checkbox className="ml-0 test" value={2}>
                                             сул
                                          </Checkbox>
                                       </Checkbox.Group>
                                    </Form.Item>
                                    )
                                 </span>
                              </p>
                           </div>
                           <div>
                              <p>Зүрхний оройн түлхэлт:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM2.2.5']}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={0}>
                                       Ажиглагдана
                                    </Checkbox>
                                    <Checkbox value={1}>Ажиглагдахгүй</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                        </div>
                     </th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th colSpan={2}>Тэмтрэлтээр</th>
                     <th>Тогшилтоор</th>
                  </tr>
                  <tr>
                     <th className="w-72">
                        <p>Зүрхний оройн түлхэлт Байрлал:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.3.1']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <div className="inline-flex">
                           <p>Хүч:</p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.3.2']}>
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={0}>
                                    Дунд зэрэг
                                 </Checkbox>
                                 <Checkbox value={1}>Хүчтэй</Checkbox>
                                 <Checkbox value={2}>Сул</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p>Шууны артерийн лугшилт</p>
                        <div className="inline-flex">
                           <p>Хэмнэл:</p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.3.3']}>
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={0}>
                                    Жигд
                                 </Checkbox>
                                 <Checkbox value={1}>Жигд бус</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                     </th>
                     <th>
                        <p>
                           Давтамж:
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.3.4']}>
                              <Input className="amaraInput w-28" />
                           </Form.Item>
                           /мин/
                        </p>
                        <p>Хүчдэл:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.3.5']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Дунд зэрэг
                              </Checkbox>
                              <Checkbox value={1}>Их</Checkbox>
                              <Checkbox value={2}>Бага</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <div className="inline-flex">
                           <p>Дүүрэлт:</p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.3.6']}>
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={0}>
                                    Дунд зэрэг
                                 </Checkbox>
                                 <Checkbox value={1}>Cул</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p>2 талд ижил эсэх:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.3.7']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Ижил
                              </Checkbox>
                              <Checkbox value={1}>Ижил бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Зүрхний (харьцангүй) хил хязгаар:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.4.1']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Томорсон</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           <span>
                              (
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM2.4.2']}
                              >
                                 <Checkbox.Group className="inline">
                                    <Checkbox className="test" value={0}>
                                       дээд
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={1}>
                                       баруун
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={2}>
                                       зүүн
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                              хил )
                           </span>
                        </p>
                     </th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th colSpan={2}>Чагналтаар</th>
                  </tr>
                  <tr>
                     <th>
                        <p>Зүрхний авиа:</p>
                        <div className="inline-flex">
                           <p>Хэмнэл:</p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.5.1']}>
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={0}>
                                    Жигд
                                 </Checkbox>
                                 <Checkbox value={1}>Жигд бус</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p>
                           Давтамж:
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.5.2']}>
                              <Input className="amaraInput w-28" />
                           </Form.Item>
                           /мин
                        </p>
                        <div className="inline-flex">
                           <p>I авиа:</p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.5.3']}>
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-3" value={0}>
                                    Тод
                                 </Checkbox>
                                 <Checkbox value={1}>Бүдгэвтэр(I,IV цэгт)</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.5.3']}>
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-14" value={2}>
                                    Бүдэг(I,V)
                                 </Checkbox>
                                 <Checkbox value={3}>Чангарсан(I,IV цэгт)</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="inline-flex">
                           <p>II авиа:</p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.5.4']}>
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={0}>
                                    Тод
                                 </Checkbox>
                                 <Checkbox value={1}>Бүдэг(II, III,V цэгт)</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.5.4']}>
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-14" value={2}>
                                    Өргөгдсөн(II,III цэгт)
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="inline-flex">
                           <p>III авиа:</p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.5.5']}>
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-1" value={0}>
                                    Сонсогдоно
                                 </Checkbox>
                                 <Checkbox value={1}>Сонсогдохгүй</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                     </th>
                     <th className="w-1/2">
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.5.5']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={2}>
                                 Шуугиангүй
                              </Checkbox>
                              <Checkbox value={3}>шуугиантай</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           <span>
                              Байрлал:
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM2.5.6']}
                              >
                                 <Checkbox.Group className="inline">
                                    <Checkbox className="test" value={0}>
                                       I
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={1}>
                                       II
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={2}>
                                       III
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={3}>
                                       IV
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={4}>
                                       V
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                              цэг
                           </span>
                        </p>
                        <p>
                           <span>
                              Систолын:(
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM2.5.7']}
                              >
                                 <Checkbox.Group className="inline">
                                    <Checkbox className="test" value={0}>
                                       I
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={1}>
                                       II
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={2}>
                                       III
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={3}>
                                       IV
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={4}>
                                       V
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                              цэгт)
                           </span>
                        </p>
                        <p>
                           <span>
                              Систолын:(
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM2.5.8']}
                              >
                                 <Checkbox.Group className="inline">
                                    <Checkbox className="test" value={0}>
                                       I
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={1}>
                                       II
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={2}>
                                       III
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={3}>
                                       IV
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={4}>
                                       V
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                              цэгт)
                           </span>
                        </p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.5.9']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Үл дамжина
                              </Checkbox>
                              <Checkbox value={1}>Дамжина</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.5.10']}>
                              <Input className="amaraInput w-28" />
                           </Form.Item>
                        </span>
                        <div className="inline-flex">
                           <p>Хүч:</p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.5.11']}>
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={0}>
                                    Сул
                                 </Checkbox>
                                 <Checkbox value={1}>Дунд зэрэг</Checkbox>
                                 <Checkbox value={2}>Хүчтэй</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p>Перикардын шүргэлцэх чимээ бий эсэх:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1IM2.5.12']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page1;
