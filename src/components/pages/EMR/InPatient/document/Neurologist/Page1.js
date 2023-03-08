import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
import General from '../General';
import React from 'react';
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
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL1.1']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Саруул
                              </Checkbox>
                              <Checkbox className="w-full" value={1}>
                                 Саруул бус
                                 <span>
                                    <Form.Item
                                       shouldUpdate
                                       className="mb-0"
                                       noStyle
                                       name={['doctorInspection', 'ct1NL1.2']}
                                    >
                                       <Input
                                          style={{
                                             textAlign: 'center',
                                             width: 50
                                          }}
                                       />
                                    </Form.Item>
                                 </span>
                              </Checkbox>
                              <Checkbox className="w-full" value={2}>
                                 Баримжаалал алдагдсан:
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL1.3']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-4" value={0}>
                                 Цаг хугацааны
                              </Checkbox>
                              <Checkbox className="ml-4 w-full" value={1}>
                                 Орон зайн
                              </Checkbox>
                              <Checkbox className="ml-4" value={2}>
                                 Өөрийн
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           <span>
                              GCS: &nbsp;E
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1NL1.4']}
                              >
                                 <Input
                                    style={{
                                       textAlign: 'center',
                                       width: 25
                                    }}
                                 />
                              </Form.Item>
                              V
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1NL1.5']}
                              >
                                 <Input
                                    style={{
                                       textAlign: 'center',
                                       width: 25
                                    }}
                                 />
                              </Form.Item>
                              M
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1NL1.6']}
                              >
                                 <Input
                                    style={{
                                       textAlign: 'center',
                                       width: 25
                                    }}
                                 />
                              </Form.Item>
                           </span>
                        </p>
                     </td>
                     <td>
                        <p>Сэтгэцийн байдал:</p>
                        <Checkbox className="ml-2">
                           Анхаарал:
                           <span>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1NL1.7']}
                              >
                                 <Input
                                    style={{
                                       textAlign: 'center'
                                    }}
                                 />
                              </Form.Item>
                           </span>
                        </Checkbox>
                        <Checkbox className="ml-2">
                           Ой тогтоолт:
                           <span>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1NL1.8']}
                              >
                                 <Input
                                    style={{
                                       textAlign: 'center'
                                    }}
                                 />
                              </Form.Item>
                           </span>
                        </Checkbox>
                        <Checkbox className="ml-2">
                           Тоолох чадвар:
                           <span>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1NL1.9']}
                              >
                                 <Input
                                    style={{
                                       textAlign: 'center'
                                    }}
                                 />
                              </Form.Item>
                           </span>
                        </Checkbox>
                        <Checkbox className="ml-2">
                           Бүтээх чадвар:
                           <span>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1NL1.10']}
                              >
                                 <Input
                                    style={{
                                       textAlign: 'center'
                                    }}
                                 />
                              </Form.Item>
                           </span>
                        </Checkbox>
                        <Checkbox className="ml-2">
                           Сэтгэл хөдлөл:
                           <span>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1NL1.11']}
                              >
                                 <Input
                                    style={{
                                       textAlign: 'center'
                                    }}
                                 />
                              </Form.Item>
                           </span>
                        </Checkbox>
                        <Checkbox className="ml-2">
                           Зан төрх:
                           <span>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1NL1.12']}
                              >
                                 <Input
                                    style={{
                                       textAlign: 'center'
                                    }}
                                 />
                              </Form.Item>
                           </span>
                        </Checkbox>
                     </td>
                     <td className="w-48">
                        <p>Хэл ярианы байдал:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL1.13']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="w-full" value={1}>
                                 Ойлгохын хэлгүйдэл
                              </Checkbox>
                              <Checkbox className="w-full" value={2}>
                                 Ярихын хэлгүйдэл
                              </Checkbox>
                              <Checkbox className="w-full" value={3}>
                                 Нэрлэхийн хэлгүйдэл
                              </Checkbox>
                              <Checkbox className="w-full" value={4}>
                                 Уншихгүйдэл
                              </Checkbox>
                              <Checkbox className="w-full" value={5}>
                                 Бичихгүйдэл
                              </Checkbox>
                              <Checkbox className="w-full" value={6}>
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
            <Table bordered className="story">
               <thead>
                  <tr>
                     <th rowSpan={16} colSpan={4} className="w-1/2">
                        <div className="flex flex-wrap">
                           <div className="w-full">
                              <span>
                                 I: &nbsp;
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.1']}
                                 >
                                    <Checkbox.Group className="inline-flex">
                                       <Checkbox value={0}>Хэвийн</Checkbox>
                                       <Checkbox value={1}>Хэвийн бус</Checkbox>
                                    </Checkbox.Group>
                                 </Form.Item>
                              </span>
                              <span>
                                 Б
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.2']}
                                 >
                                    <Input
                                       style={{
                                          width: 75,
                                          textAlign: 'center'
                                       }}
                                    />
                                 </Form.Item>
                              </span>
                              <span>
                                 З
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.3']}
                                 >
                                    <Input
                                       style={{
                                          width: 75,
                                          textAlign: 'center'
                                       }}
                                    />
                                 </Form.Item>
                              </span>
                           </div>
                           <div className="w-full">II:</div>
                           <div className="basis-1/2">
                              <span>
                                 ХХХ: &nbsp;Б
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.4']}
                                 >
                                    <Input
                                       style={{
                                          width: 40,
                                          textAlign: 'center'
                                       }}
                                    />
                                 </Form.Item>
                                 З
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.5']}
                                 >
                                    <Input
                                       style={{
                                          width: 40,
                                          textAlign: 'center'
                                       }}
                                    />
                                 </Form.Item>
                                 (мм)
                              </span>
                           </div>
                           <div className="basis-1/2">Харах чадал:</div>
                           <div className="basis-1/2">Гэрлийн гурвал:</div>
                           <div className="basis-1/2">
                              <span>
                                 Б: &nbsp;
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.10']}
                                 >
                                    <Input
                                       style={{
                                          width: 40,
                                          textAlign: 'center'
                                       }}
                                    />
                                 </Form.Item>
                                 З
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.11']}
                                 >
                                    <Input
                                       style={{
                                          width: 40,
                                          textAlign: 'center'
                                       }}
                                    />
                                 </Form.Item>
                              </span>
                           </div>
                           <div className="basis-1/2">
                              <span>
                                 Шууд: &nbsp;Б:
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.6']}
                                 >
                                    <Input
                                       style={{
                                          width: 40,
                                          textAlign: 'center'
                                       }}
                                    />
                                 </Form.Item>
                                 З
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.7']}
                                 >
                                    <Input
                                       style={{
                                          width: 40,
                                          textAlign: 'center'
                                       }}
                                    />
                                 </Form.Item>
                              </span>
                           </div>
                           <div className="basis-1/2">Харааны талбай:</div>
                           <div className="basis-1/2">
                              <span>
                                 Шууд бус: &nbsp;Б:
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.8']}
                                 >
                                    <Input
                                       style={{
                                          width: 40,
                                          textAlign: 'center'
                                       }}
                                    />
                                 </Form.Item>
                                 З
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.9']}
                                 >
                                    <Input
                                       style={{
                                          width: 40,
                                          textAlign: 'center'
                                       }}
                                    />
                                 </Form.Item>
                              </span>
                           </div>
                           <div className="basis-1/2">
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['doctorInspection', 'ct1NL2.12']}
                              >
                                 <Input
                                    style={{
                                       width: 75,
                                       textAlign: 'center'
                                    }}
                                 />
                              </Form.Item>
                           </div>
                           <div className="w-full">
                              <span>
                                 Нүдний уг:
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.13']}
                                 >
                                    <Input
                                       style={{
                                          textAlign: 'center'
                                       }}
                                    />
                                 </Form.Item>
                              </span>
                           </div>
                           <div className="w-full">III-IV-VI:</div>
                           <div className="basis-1/2">
                              <span>
                                 Птоз: &nbsp;Б:
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.14']}
                                 >
                                    <Input
                                       style={{
                                          width: 40,
                                          textAlign: 'center'
                                       }}
                                    />
                                 </Form.Item>
                                 З
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.15']}
                                 >
                                    <Input
                                       style={{
                                          width: 40,
                                          textAlign: 'center'
                                       }}
                                    />
                                 </Form.Item>
                              </span>
                           </div>
                           <div className="basis-1/2">Нистагм:</div>
                           <div className="basis-1/2">
                              <span>
                                 Диплопи:
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.16']}
                                 >
                                    <Checkbox.Group className="inline">
                                       <Checkbox value={0}>Эерэг</Checkbox>
                                       <Checkbox value={1}>Сөрөг</Checkbox>
                                    </Checkbox.Group>
                                 </Form.Item>
                              </span>
                           </div>
                           <div className="basis-1/2">
                              <span>
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.17']}
                                 >
                                    <Checkbox.Group className="inline">
                                       <Checkbox value={0}>Илрээгүй</Checkbox>
                                       <Checkbox value={1}>Илэрсэн</Checkbox>
                                    </Checkbox.Group>
                                 </Form.Item>
                              </span>
                           </div>
                           <div className="w-full">
                              <span>
                                 НХБ:
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['doctorInspection', 'ct1NL2.18']}
                                 >
                                    <Checkbox.Group className="inline">
                                       <Checkbox value={0}>Хэвийн</Checkbox>
                                       <Checkbox value={1}>Хэвийн бус</Checkbox>
                                    </Checkbox.Group>
                                 </Form.Item>
                              </span>
                           </div>
                        </div>
                     </th>
                     <td rowSpan={4} className="w-24">
                        <p>VII:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.23']}
                        >
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Хэвийн бус</Checkbox>
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
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.24']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={0}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.24']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={1}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Духны атираа</p>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.25']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={0}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.25']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={1}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Хамар уруулын нугалаа</p>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.26']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={0}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.26']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={1}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td rowSpan={4}>
                        <p>VIII:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.27']}
                        >
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Хэвийн бус</Checkbox>
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
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.28']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={0}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.28']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={1}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Чих шуугих</p>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.29']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={0}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.29']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={1}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td rowSpan={4}>
                        <p>IX, X:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.30']}
                        >
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Хэвийн бус</Checkbox>
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
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.31']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={0} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.31']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={1} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Залгиурын рефлекс</p>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.32']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={0} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.32']}
                        >
                           <Checkbox.Group>
                              <Checkbox value={1} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.33']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Дисфони
                              </Checkbox>
                              <Checkbox className="ml-2" value={1}>
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
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.34']}
                        >
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
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.35']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={0} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.35']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={1} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Трапец хэлбэрт булчин</p>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.36']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={0} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.36']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={1} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
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
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.37']}
                        >
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
                        <p>Хэвийн бус бол:</p>
                     </td>
                     <td>Б</td>
                     <td>З</td>
                  </tr>
                  <tr>
                     <td>
                        <p>Нүүрний мэдрэхүй</p>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.20']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={0}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.20']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={1}></Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <p>Хэлний хазайлт</p>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.38']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={0} />
                           </Checkbox.Group>
                        </Form.Item>
                     </td>
                     <td>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'ct1NL2.38']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox value={1} />
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
export default Page1;
