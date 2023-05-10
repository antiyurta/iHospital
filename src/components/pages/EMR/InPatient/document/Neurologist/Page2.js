import React from 'react';
import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
import man from './ct1NL3.1.png';
import man2 from './ct1NL4.1.png';
import head from './ct1NL4.2.png';
const { TextArea } = Input;
function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="story mb-0">
               <thead>
                  <tr>
                     <td rowSpan={2} className="w-24">
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL2.19']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={1}>
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Эвэрлэгийн рефлекс</p>
                     </td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL2.21']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={0}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL2.21']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={1}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td rowSpan={2} className="w-24"></td>
                     <td>
                        <p>Хатангиршил/татвалзал</p>
                     </td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL2.39']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={0} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL2.39']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={1} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Зажлуурын булчингийн хүч</p>
                     </td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL2.22']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={0}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL2.22']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={1}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>Дизартри/анартри</td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL2.40']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={0} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL2.40']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={1} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <p>Хөдөлгөөн тогтолцоо</p>
                     </td>
                     <td colSpan={4} className="w-1/2">
                        <p>Мэдрэхүй тогтолцоо</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p className="font-bold">
                              Булчингийн хүч
                              <img src={man} style={{ width: '50%' }} />
                           </p>
                           <p className="font-bold">
                              Рефлексүүд
                              <img src={man} style={{ width: '50%' }} />
                           </p>
                        </div>
                        <div className="inline-flex">
                           <p className="font-bold">Эмгэг рефлекс:</p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL3.1']}>
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={0}>
                                    Бөхийх
                                 </Checkbox>
                                 <Checkbox value={1}>Гэдийх</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p className="font-bold">Булчингийн тонус:</p>
                        <div className="flex flex-wrap">
                           <div className="basis-4/12">
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL3.2']}>
                                 <Checkbox.Group className="ddd ml-0">
                                    <Checkbox className="ml-2" value={0}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={1}>Хэвийн бус</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                           <div className="basis-8/12">
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL3.3']}>
                                 <Checkbox.Group className="ddd ml-0">
                                    <Checkbox className="ml-2" value={0}>
                                       Ихэссэн
                                    </Checkbox>
                                    <Checkbox value={1}>Буурсан</Checkbox>
                                    <Checkbox value={2}>БГ</Checkbox>
                                    <Checkbox value={3}>БХ</Checkbox>
                                    <Checkbox value={4}>ЗГ</Checkbox>
                                    <Checkbox value={4}>ЗХ</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                        </div>
                     </td>
                     <td colSpan={4}>
                        <div className="grid grid-cols-2 grid-rows-1">
                           <p className="font-bold">
                              <img src={man2} />
                           </p>
                           <div>
                              <p>Өнгөц мэдрэхүй-Өн</p>
                              <p>Гүний мэдрэхүй-Г</p>
                              <p>Температур-Т</p>
                              <p>Өвдөлт-Өв</p>
                              <p className="font-bold">
                                 <img src={head} />
                              </p>
                           </div>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={4}>7.Тэнцвэрийн тогтолцоо</th>
                     <th colSpan={4}>8.Мэнэнгийн хамшинж</th>
                  </tr>
                  <tr>
                     <td colSpan={4} rowSpan={3}>
                        <div className="inline-flex">
                           <p className="font-bold">Зогсох тэнцвэр:</p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL5.1']}>
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={0}>
                                    Хэвийн
                                 </Checkbox>
                                 <Checkbox value={1}>
                                    Хэвийн бус: &nbsp;
                                    <span>
                                       <Form.Item
                                          shouldUpdate
                                          className="mb-0"
                                          noStyle
                                          name={['doctorInspection', 'ct1NL5.2']}
                                       >
                                          <Input style={{ width: 50 }} />
                                       </Form.Item>
                                    </span>
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="inline-flex">
                           <p className="font-bold">Явах тэнцвэр:</p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL5.3']}>
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={0}>
                                    Хэвийн
                                 </Checkbox>
                                 <Checkbox value={1}>
                                    Хэвийн бус: &nbsp;
                                    <span>
                                       <Form.Item
                                          shouldUpdate
                                          className="mb-0"
                                          noStyle
                                          name={['doctorInspection', 'ct1NL5.4']}
                                       >
                                          <Input style={{ width: 50 }} />
                                       </Form.Item>
                                    </span>
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="flex flex-wrap">
                           <div className="basis-1/2">
                              <p className="font-bold">Шугаман алхалт:</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL5.5']}>
                                 <Checkbox.Group>
                                    <Checkbox value={0}>Хэвийн</Checkbox>
                                    <Checkbox value={1}>Хэвийн буc</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                           <div className="basis-1/2">
                              <p className="font-bold">Хурдан солигдох хөдөлгөөн:</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL5.6']}>
                                 <Checkbox.Group>
                                    <Checkbox className="ml-2" value={0}>
                                       Хэвийн: &nbsp;
                                       <span>
                                          <Form.Item
                                             shouldUpdate
                                             className="mb-0"
                                             noStyle
                                             name={['doctorInspection', 'ct1NL5.7']}
                                          >
                                             <Input style={{ width: 50 }} />
                                          </Form.Item>
                                       </span>
                                    </Checkbox>
                                    <Checkbox value={1}>Дисдиадохокинез</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                        </div>
                        <div className="inline-flex">
                           <p className="font-bold">Ромбергийн сорил:</p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL5.9']}>
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox value={0}>БГ</Checkbox>
                                 <Checkbox value={1}>БХ</Checkbox>
                                 <Checkbox value={2}>ЗГ</Checkbox>
                                 <Checkbox value={3}>ЗХ</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL5.8']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={0}>Эерэг</Checkbox>
                              <Checkbox value={1}>Сөрөг</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td colSpan={4}>
                        <p>
                           <span>
                              Дагзны хөшингө:
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL6.1']}>
                                 <Input
                                    style={{
                                       width: 20,
                                       textAlign: 'center'
                                    }}
                                 />
                              </Form.Item>
                           </span>
                           хуруу &nbsp;&nbsp;
                           <span>
                              Кернигийн шинж: Б
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL6.2']}>
                                 <Input
                                    style={{
                                       width: 20,
                                       textAlign: 'center'
                                    }}
                                 />
                              </Form.Item>
                              З
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL6.3']}>
                                 <Input
                                    style={{
                                       width: 20,
                                       textAlign: 'center'
                                    }}
                                 />
                              </Form.Item>
                           </span>
                        </p>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={4}>9.Ёзоорын хамшинж:</th>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL7.1']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Лагесийн шинж: Б
                                 <span>
                                    <Form.Item
                                       shouldUpdate
                                       className="mb-0"
                                       noStyle
                                       name={['doctorInspection', 'ct1NL7.2']}
                                    >
                                       <Input
                                          style={{
                                             width: 20,
                                             textAlign: 'center'
                                          }}
                                       />
                                    </Form.Item>
                                 </span>
                                 З
                                 <span>
                                    <Form.Item
                                       shouldUpdate
                                       className="mb-0"
                                       noStyle
                                       name={['doctorInspection', 'ct1NL7.3']}
                                    >
                                       <Input
                                          style={{
                                             width: 20,
                                             textAlign: 'center'
                                          }}
                                       />
                                    </Form.Item>
                                 </span>
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={1}>
                                 Мацкевичийн шинж: Б
                                 <span>
                                    <Form.Item
                                       shouldUpdate
                                       className="mb-0"
                                       noStyle
                                       name={['doctorInspection', 'ct1NL7.4']}
                                    >
                                       <Input
                                          style={{
                                             width: 20,
                                             textAlign: 'center'
                                          }}
                                       />
                                    </Form.Item>
                                 </span>
                                 З
                                 <span>
                                    <Form.Item
                                       shouldUpdate
                                       className="mb-0"
                                       noStyle
                                       name={['doctorInspection', 'ct1NL7.5']}
                                    >
                                       <Input
                                          style={{
                                             width: 20,
                                             textAlign: 'center'
                                          }}
                                       />
                                    </Form.Item>
                                 </span>
                              </Checkbox>
                              <Checkbox value={2}>Сколиоз</Checkbox>
                              <Checkbox value={3}>Нурууны булчингийн чангарал</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td rowSpan={4}>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL7.6']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={1}>
                                 Хэвийн бус
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td></td>
                     <td>Б</td>
                     <td>З</td>
                     <th colSpan={4}>10. Вегататив үйлдийн байдал</th>
                  </tr>
                  <tr>
                     <td>Өсгий-өвдөг-шилбэний</td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL7.7']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={0} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL7.7']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={1} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td rowSpan={3} colSpan={4}>
                        <p>
                           <Form.Item className="mb-0">
                              <Checkbox.Group className="ddd ml-0">
                                 <Checkbox className="ml-2" value={0}>
                                    Хөлрөлт &nbsp;
                                    <span>
                                       <Form.Item
                                          shouldUpdate
                                          className="mb-0"
                                          noStyle
                                          name={['doctorInspection', 'ct1NL8.1']}
                                       >
                                          <Input style={{ width: 50 }} />
                                       </Form.Item>
                                    </span>
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>
                                    Пигментаци &nbsp;
                                    <span>
                                       <Form.Item
                                          shouldUpdate
                                          className="mb-0"
                                          noStyle
                                          name={['doctorInspection', 'ct1NL8.2']}
                                       >
                                          <Input style={{ width: 50 }} />
                                       </Form.Item>
                                    </span>
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>
                                    Вазомотор урвал &nbsp;
                                    <span>
                                       <Form.Item
                                          shouldUpdate
                                          className="mb-0"
                                          noStyle
                                          name={['doctorInspection', 'ct1NL8.3']}
                                       >
                                          <Input style={{ width: 50 }} />
                                       </Form.Item>
                                    </span>
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>
                                    Симпаталги &nbsp;
                                    <span>
                                       <Form.Item
                                          shouldUpdate
                                          className="mb-0"
                                          noStyle
                                          name={['doctorInspection', 'ct1NL8.4']}
                                       >
                                          <Input style={{ width: 50 }} />
                                       </Form.Item>
                                    </span>
                                 </Checkbox>
                                 <Checkbox value={'Хэвийн'}>
                                    Тэжээрлийн байдал &nbsp;
                                    <span>
                                       <Form.Item
                                          shouldUpdate
                                          className="mb-0"
                                          noStyle
                                          name={['doctorInspection', 'ct1NL8.5']}
                                       >
                                          <Input style={{ width: 50 }} />
                                       </Form.Item>
                                    </span>
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Хуруу-хамрын сорил</p>
                     </td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL7.8']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={0} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL7.8']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={1} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Дисметри:</p>
                     </td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL7.9']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={0} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL7.9']}>
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={1} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={8}>11.Бусад шинжүүд:</th>
                  </tr>
                  <tr>
                     <td colSpan={8}>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL9.1']}>
                           <TextArea className="amaraInputTextArea w-full h-24" />
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={8}>12.Байршлын болон клиникийн онош:</th>
                  </tr>
                  <tr>
                     <td colSpan={8}>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['doctorInspection', 'ct1NL10.1']}>
                           <TextArea className="amaraInputTextArea w-full h-24" />
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
