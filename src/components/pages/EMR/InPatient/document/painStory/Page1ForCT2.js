import React from 'react';
import { Checkbox, DatePicker, Form, Input } from 'antd';
import moment from 'moment';
import { Table } from 'react-bootstrap';
import logo from '../../../../../../assets/logo/universal.png';
function Page1ForCT2() {
   return (
      <div className="page">
         <div className="subpage">
            <div className="flex flex-wrap">
               <div className="basis-1/2"></div>
               <div className="basis-1/2">
                  <p className="text-end">Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны</p>
                  <p className="text-end">өдрийн А/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
                  <p className="text-end font-bold">Эрүүл мэндын бүртгэлийн маягт CT-2</p>
               </div>
            </div>
            <p className="text-center py-4" style={{ fontSize: '15px', fontWeight: 'bold' }}>
               ӨВЧНИЙ ТҮҮХ /хүүхдийн/
            </p>
            <Table bordered className="story mb-0">
               <thead>
                  <tr>
                     <th rowSpan={5} className="imgMiddle w-1/2">
                        <img style={{ width: '50%' }} src={logo} />
                     </th>
                     <th>РД</th>
                     <th>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'registerNumber']}>
                           <Input disabled={true} />
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th>ЭМД</th>
                     <th>123456789</th>
                  </tr>
                  <tr>
                     <th>ННД</th>
                     <th>123456789</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>
                        <span>
                           Өвчний түүх нээсэн:
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={'createdAt'}
                              getValueProps={(i) => ({ value: moment(i) })}
                           >
                              <DatePicker
                                 showTime={{
                                    format: 'HH:mm'
                                 }}
                                 format="YYYY он MM сар DD өдөр HH цаг mm мин"
                                 disabled={true}
                                 style={{
                                    width: 200
                                 }}
                              />
                           </Form.Item>
                        </span>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={2}>
                        Тасгийн нэр:
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'departmentName']}>
                              <Input disabled={true} />
                           </Form.Item>
                        </span>
                     </th>
                  </tr>
                  <tr>
                     <th>
                        Эцэг /эх/-ийн нэр:
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'lastName']}>
                              <Input disabled={true} />
                           </Form.Item>
                        </span>
                     </th>
                     <th colSpan={2}>
                        Өөрийн нэр:
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'firstName']}>
                              <Input disabled={true} />
                           </Form.Item>
                        </span>
                     </th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th>
                        <p>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['patient', 'birthDate']}
                              getValueProps={(i) => ({ value: moment(i) })}
                           >
                              <DatePicker
                                 format="YYYY он MM сар DD өдөр"
                                 disabled={true}
                                 style={{
                                    width: 200
                                 }}
                              />
                           </Form.Item>
                        </p>
                        <p>
                           Нас:
                           <span>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'age']}>
                                 <Input disabled={true} />
                              </Form.Item>
                           </span>
                        </p>
                     </th>
                     <th>
                        <p>Хүйс:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'genderType']}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={'MAN'}>
                                 Эрэгтэй
                              </Checkbox>
                              <Checkbox value={'WOMEN'}>Эмэгтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           <span>
                              Жин &nbsp; [
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'weight']}>
                                 <Input disabled={true} className="w-9" />
                              </Form.Item>
                              ]
                           </span>
                        </p>
                        <p>
                           <span>
                              Өндөр &nbsp; [
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'height']}>
                                 <Input disabled={true} className="w-9" />
                              </Form.Item>
                              ]
                           </span>
                        </p>
                     </th>
                     <th>
                        <p className="font-bold">Эцгийн боловсрол:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'fatherEducationType']}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Боловсролгүй
                              </Checkbox>
                              <Checkbox value={1}>Бага</Checkbox>
                              <Checkbox value={2}>Бүрэн дунд</Checkbox>
                              <Checkbox value={3}>Мэргэжлийн болон техникийн</Checkbox>
                              <Checkbox className="w-full" value={4}>
                                 Дипломын
                              </Checkbox>
                              <Checkbox className="w-full" value={5}>
                                 Бакалавр
                              </Checkbox>
                              <Checkbox className="w-full" value={6}>
                                 Магистр
                              </Checkbox>
                              <Checkbox className="w-full" value={7}>
                                 Доктор
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p className="font-bold">Эхийн боловсрол:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'motherEducationType']}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Боловсролгүй
                              </Checkbox>
                              <Checkbox value={1}>Бага</Checkbox>
                              <Checkbox value={2}>Бүрэн дунд</Checkbox>
                              <Checkbox value={3}>Мэргэжлийн болон техникийн</Checkbox>
                              <Checkbox className="w-full" value={4}>
                                 Дипломын
                              </Checkbox>
                              <Checkbox className="w-full" value={5}>
                                 Бакалавр
                              </Checkbox>
                              <Checkbox className="w-full" value={6}>
                                 Магистр
                              </Checkbox>
                              <Checkbox className="w-full" value={7}>
                                 Доктор
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th>
                        <p>Тогтмол хаяг:</p>
                        <p>
                           Аймаг/Хот:{' '}
                           <span>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'address', 'aimag']}>
                                 <Input disabled={true} />
                              </Form.Item>
                           </span>
                        </p>
                        <p>
                           Сум/дүүрэг:{' '}
                           <span>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'address', 'soum']}>
                                 <Input disabled={true} />
                              </Form.Item>
                           </span>
                           <span>&nbsp;</span>
                           Баг/хороо:{' '}
                           <span>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['patient', 'address', 'committee']}
                              >
                                 <Input disabled={true} />
                              </Form.Item>
                           </span>
                        </p>
                        <p>
                           Гудамж/Байшин:{' '}
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'address', 'building']}>
                              <Input disabled={true} />
                           </Form.Item>
                           <span>&nbsp;</span>
                           Тоот:{' '}
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'address', 'address']}>
                              <Input disabled={true} />
                           </Form.Item>
                        </p>
                     </th>
                     <th className="w-36">
                        <p>Утасны дугаар:</p>
                        <p>
                           <span>
                              Эцгийн &nbsp;
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['patient', 'contacts', 0, 'contactPhoneNo']}
                              >
                                 <Input disabled={true} className="w-20" />
                              </Form.Item>
                           </span>
                        </p>
                        <p>
                           <span>
                              Эхийн &nbsp;
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['patient', 'contacts', 1, 'contactPhoneNo']}
                              >
                                 <Input disabled={true} className="w-20" />
                              </Form.Item>
                           </span>
                        </p>
                        <p>
                           <span>
                              Гэрийн &nbsp;
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['patient', 'contacts', 2, 'contactPhoneNo']}
                              >
                                 <Input disabled={true} className="w-20" />
                              </Form.Item>
                           </span>
                        </p>
                     </th>
                     <th className="w-48">
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'childrenStatus']}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Сургууль
                              </Checkbox>
                              <Checkbox className="w-full" value={1}>
                                 Цэцэрлэг
                              </Checkbox>
                              <Checkbox className="w-full" value={2}>
                                 Яслид явдаггүй
                              </Checkbox>
                              <Checkbox className="w-full" value={3}>
                                 Явдаг
                              </Checkbox>
                              <Checkbox className="w-full" value={4}>
                                 Хаана явдаг
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'childrenStatus2']}>
                              <Input disabled={true} />
                           </Form.Item>
                        </p>
                        <p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'childrenStatus3']}>
                              <Input disabled={true} />
                           </Form.Item>
                        </p>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={3}>Зовиур:</th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th
                        style={{
                           writingMode: 'vertical-rl',
                           textAlign: 'center',
                           verticalAlign: 'middle'
                        }}
                        className="rotate-180"
                        rowSpan={4}
                     >
                        Цусны бүлэг
                     </th>
                     <th colSpan={2}>Бүлэг</th>
                     <th>3</th>
                     <th rowSpan={4} className="w-40">
                        <p>Төлбөрийн хэлбэр:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'paymentStatus']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Төр хариуцсан
                              </Checkbox>
                              <Checkbox className="w-full" value={1}>
                                 15%
                              </Checkbox>
                              <Checkbox className="w-full" value={2}>
                                 10%
                              </Checkbox>
                              <Checkbox value={3}>Өвчтөн хариуцсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th rowSpan={4} className="w-48">
                        <p>Доод шатлалаас илгээсэн эсэх</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'underStage']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={0}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={1}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Тодорхойлсон лаборант</th>
                     <th>4</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Шалгасан эмч</th>
                     <th>5</th>
                  </tr>
                  <tr>
                     <th>Сар, өдөр</th>
                     <th colSpan={2}>202-07-22</th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th className="w-40"></th>
                     <th>Он</th>
                     <th>Сар</th>
                     <th>Өдөр</th>
                     <th>Цаг</th>
                     <th rowSpan={5} className="w-20">
                        <p>Хэвтэлт:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'type']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Анх
                              </Checkbox>
                              <Checkbox value={1}>Давтан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th rowSpan={5} className="w-32">
                        <p>Харшлын анамнез:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'anemis']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Эмийн бодис
                              </Checkbox>
                              <Checkbox value={1}>Хоол хүнс</Checkbox>
                              <Checkbox value={2}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th>Өвчин эхэлсэн</th>
                     <th>1</th>
                  </tr>
                  <tr>
                     <th>Эмчид үзүүлсэн</th>
                  </tr>
                  <tr>
                     <th>Эмнэлэгт хэвтсэн</th>
                  </tr>
                  <tr>
                     <th>Эмнэлгээс гарсан</th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th style={{ width: 185 }}>
                        <p>Өвчний төгсгөл:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'endOfPain']}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Эдгэрсэн
                              </Checkbox>
                              <Checkbox value={1}>Сайжирсан</Checkbox>
                              <Checkbox value={2}>Хэвэндээ</Checkbox>
                              <Checkbox value={3}>Нас барсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th colSpan={2}>
                        <p>Эмнэлгээс:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'fromHospital']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Гарсан
                              </Checkbox>
                              <Checkbox value={1}>Шилжсэн</Checkbox>
                              <Checkbox className="w-full" value={2}>
                                 Нас барсан
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Өвчний төгсгөл:</p>
                     </th>
                     <th>
                        <p>Ор хоног:</p>
                     </th>
                     <th>
                        <p>Эмчилгээний зардал:</p>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Онош</th>
                     <th>ӨОУА-код</th>
                     <th>Огноо</th>
                  </tr>
                  <tr>
                     <th colSpan={6}>Явуулсан эмнэлэг/ байгууллагын нэр: </th>
                  </tr>
                  <tr>
                     <th>Явуулсан эмчийн онош</th>
                     <th colSpan={3}></th>
                     <th></th>
                     <th></th>
                  </tr>
                  <tr>
                     <th>Хүлээн авсан эмчийн онош</th>
                     <th colSpan={3}></th>
                     <th></th>
                     <th></th>
                  </tr>
                  <tr>
                     <th>Үндсэн онош</th>
                     <th colSpan={3}></th>
                     <th></th>
                     <th></th>
                  </tr>
                  <tr>
                     <th>Хүндрэл</th>
                     <th colSpan={3}></th>
                     <th></th>
                     <th></th>
                  </tr>
                  <tr>
                     <th>Хавсарсан өвчний онош</th>
                     <th colSpan={3}></th>
                     <th></th>
                     <th></th>
                  </tr>
                  <tr>
                     <th>Хийгдсэн ажилбар, мэс засал</th>
                     <th colSpan={3}></th>
                     <th colSpan={2}>ӨОУА-9 код:</th>
                  </tr>
                  <tr>
                     <th>Хавсарсан өвчний онош</th>
                     <th colSpan={3}></th>
                     <th></th>
                     <th></th>
                  </tr>
                  <tr>
                     <th colSpan={2}>
                        <span>
                           Эмчлэгч эмчийн нэр, гарын үсэг:
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'doctor']}>
                              <Input />
                           </Form.Item>
                        </span>
                     </th>
                     <th colSpan={4}>
                        <span>
                           Хянасан эмчийн нэр, гарын үсэг{' '}
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'doctors']}>
                              <Checkbox.Group className="inline">
                                 <Checkbox className="test" value={0}>
                                    Эмчилгээ эрхэлсэн орлогч
                                 </Checkbox>
                                 <Checkbox className="ml-0 test" value={1}>
                                    тасгийн эрхлэгч
                                 </Checkbox>
                                 <Checkbox className="ml-0 test" value={2}>
                                    эмчилгээний чанарын менежер
                                 </Checkbox>
                                 <Checkbox className="ml-0 test" value={3}>
                                    бусад
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                           /зур/
                        </span>
                     </th>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page1ForCT2;
