import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
const { TextArea } = Input;
import React from 'react';
function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="story mb-0">
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
                     <th>
                        <p>Хэл өнгөртэй эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.1.1']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Арьс, салст-чийлэг:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.1.2']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           Өнгө
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['doctorInspection', 'ct1IM3.1.3']}
                           >
                              <Input className="amaraInput w-28" />
                           </Form.Item>
                        </p>
                        <p>Хэвлийн - хэм</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.1.4']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Жигд
                              </Checkbox>
                              <Checkbox value={1}>Жигд бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           Хэлбэр
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['doctorInspection', 'ct1IM3.1.5']}
                           >
                              <Input className="amaraInput w-28" />
                           </Form.Item>
                        </p>
                     </th>
                     <th>
                        <p>Хэвлий эмзэглэлтэй эсэх</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.2.1']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={1}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Булчингийн чангарал байгаа эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.2.2']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Хэвлийн хэнгэрэгэн чимээ:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.3.1']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Ихэссэн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Ихэссэн хэсэгт тогшилтын дуу:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.3.2']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Бүдгэрсэн
                              </Checkbox>
                              <Checkbox className="w-full" value={1}>
                                 Тодорсон
                              </Checkbox>
                              <Checkbox value={2}>Дүлий болсон</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Гэдэсний гүрвэлзэх хөдөлгөөн:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.4.1']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Ихэссэн</Checkbox>
                              <Checkbox className="ml-2 w-full" value={2}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={3}>Дүлий</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Гүнзгий тэмтрэлтээр:</th>
                  </tr>
                  <tr>
                     <th>
                        <p>Тахир гэдэс - байрлал</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.5.1']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={1}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Тогтоц</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.5.2']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={1}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хөдөлгөөн</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.5.3']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Өгсөх болон уруудах гэдэс: - Байрлал</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.5.4']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={1}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Тогтоц</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.5.5']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={1}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хөдөлгөөнтэй</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.5.6']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Хөндлөн гэдэс: Байрлал</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.5.7']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={1}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Тогтоц</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.5.8']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={1}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хөдөлгөөн</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.5.9']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Цутгалан гэдэс: Байрлал</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.5.10']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={1}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Тогтоц</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.5.11']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={1}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хөдөлгөөн</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.5.12']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Элэг цөс, дэлүү</th>
                  </tr>
                  <tr>
                     <th>
                        <p>Элэгний шинж тэмдгүүд:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.6.1']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Мэдрэл сульдал
                              </Checkbox>
                              <Checkbox value={1}>Биж хам шинж</Checkbox>
                              <Checkbox value={2}>
                                 Иммуни-үрэвслийн шинж
                              </Checkbox>
                              <Checkbox value={3}>Өвдөх хам шинж:</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           <span>
                              Хүч:
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM3.6.2']}
                              >
                                 <Input className="amaraInput w-14" />
                              </Form.Item>
                           </span>
                           <span>
                              Хугацаа &nbsp; [
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM3.6.3']}
                              >
                                 <Input className="amaraInput w-14" />
                              </Form.Item>
                              ]
                           </span>
                        </p>
                     </th>
                     <th>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.6.1']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={4}>
                                 Шарлах хам шинж
                              </Checkbox>
                              <Checkbox className="w-full" value={5}>
                                 Загатналт
                              </Checkbox>
                              <Checkbox value={6}>Цусархаг хам шинж</Checkbox>
                              <Checkbox value={7}>Элэгний их шинж</Checkbox>
                              <Checkbox value={8}>Элэгний бага шинж</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Элэгний хэмжээ тэмтрэлтээр:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.6.4']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Томорсон</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>(баруун, зүүн дэлбэн, зур)</p>
                        <p>
                           <span>
                              (
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM3.6.5']}
                              >
                                 <Checkbox.Group className="inline">
                                    <Checkbox className="test" value={0}>
                                       баруун
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={1}>
                                       зүүн дэлбэн
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                              зур)
                           </span>
                        </p>
                     </th>
                     <th>
                        <p>Дэлүүний хэмжээ тэмтрэлтээр:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM3.6.6']}
                        >
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
                                 name={['doctorInspection', 'ct1IM3.6.7']}
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
                                 </Checkbox.Group>
                              </Form.Item>
                              зур)
                           </span>
                        </p>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Шээс бэлгийн тогтолцоо</th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th>
                        <p>Хоногийн шээсний гарц:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM4.1']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Ихэссэн</Checkbox>
                              <Checkbox value={2}>Багассан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Шээсний өнгө:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM4.2']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Сүрлэн шар
                              </Checkbox>
                              <Checkbox className="w-full" value={1}>
                                 Улаан шар
                              </Checkbox>
                              <Checkbox className="w-full" value={2}>
                                 Өнгөргүй
                              </Checkbox>
                              <Checkbox className="w-full" value={3}>
                                 Тундастай
                              </Checkbox>
                              <Checkbox value={4}>Тундасгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th className="w-40">
                        <p>Шөнө шээдэг эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM4.3']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Үгүй
                              </Checkbox>
                              <Checkbox value={1}>
                                 Тийм ,
                                 <span>
                                    тоо
                                    <Form.Item
                                       shouldUpdate
                                       className="mb-0"
                                       noStyle
                                       name={['doctorInspection', 'ct1IM4.4']}
                                    >
                                       <Input className="amaraInput w-10" />
                                    </Form.Item>
                                 </span>
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>

                        <p>Шээс тассалддаг эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM4.5']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Дутуу шээдэг эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM4.6']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th className="w-40">
                        <p>Дүлж шээдэг эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM4.7']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Шээхэд давсгаар өвддөг эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM4.8']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Бөөр тэмтрэлтээр:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM4.9']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={1}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           <span>
                              (
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM4.10']}
                              >
                                 <Checkbox.Group className="inline">
                                    <Checkbox className="test" value={0}>
                                       Баруун
                                    </Checkbox>
                                    <Checkbox className="ml-0 test" value={1}>
                                       зүүн
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                              зур)
                           </span>
                        </p>
                        <p>Пастернацкий</p>
                        <p>
                           Баруун (
                           <span>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM4.11']}
                              >
                                 <Input className="amaraInput w-10" />
                              </Form.Item>
                           </span>
                           )
                        </p>
                        <p>
                           Зүүн (
                           <span>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM4.12']}
                              >
                                 <Input className="amaraInput w-10" />
                              </Form.Item>
                           </span>
                           )
                        </p>
                     </th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th colSpan={3}>Мэдрэлийн тогтолцоо</th>
                  </tr>
                  <tr>
                     <th className="w-64">
                        <p>Үнэрлэх мэдрэмж:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM5.1']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Буурсан</Checkbox>
                              <Checkbox value={2}>Ялгахгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Сонсголын мэдрэмж:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM5.2']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Ихэссэн</Checkbox>
                              <Checkbox value={2}>Буурсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Нүүрний 2 тал:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM5.3']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Ижил
                              </Checkbox>
                              <Checkbox value={1}>Ижил бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Рефлексүүд:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM5.4']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Хадгалагдана
                              </Checkbox>
                              <Checkbox value={1}>Хадгалагдаагүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Мэдрэхүй:</p>
                        <div className="inline-flex">
                           <div>
                              <p>Өнгөц:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM5.5']}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2 w-full" value={0}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={1}>Ихэссэн</Checkbox>
                                    <Checkbox value={2}>Буурсан</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                           <div>
                              <p>Гүн:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM5.6']}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2 w-full" value={0}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={1}>Ихэссэн</Checkbox>
                                    <Checkbox value={2}>Буурсан</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                           <div>
                              <p>Хэт мэдрэгшил:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1IM5.7']}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2 w-full" value={0}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={1}>Ихэссэн</Checkbox>
                                    <Checkbox value={2}>Буурсан</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                        </div>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={3}>
                        <p>Сэтгэцийн байдал:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM5.8']}
                        >
                           <TextArea className="amaraInputTextArea w-full" />
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={3}>
                        <p>Бусад: (Арьс, үе мөч, тунгалагийн тогтолцоо)</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1IM5.9']}
                        >
                           <TextArea className="amaraInputTextArea w-full" />
                        </Form.Item>
                     </th>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page2;
