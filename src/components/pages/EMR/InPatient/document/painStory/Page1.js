import { Checkbox, DatePicker, Form, Input, Radio, Select } from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import React from 'react';
import { Table } from 'react-bootstrap';
import logo from '../../../../../../assets/logo/universal.png';
function Page1({ form }) {
   return (
      <div className="page">
         <div className="subpage">
            <div className="flex flex-wrap">
               <div className="basis-1/2"></div>
               <div className="basis-1/2">
                  <p className="text-end">Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны</p>
                  <p className="text-end">өдрийн А/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
                  <p className="text-end font-bold">Эрүүл мэндын бүртгэлийн маягт CT-1</p>
               </div>
            </div>
            <p className="text-center py-4" style={{ fontSize: '15px', fontWeight: 'bold' }}>
               ӨВЧНИЙ ТҮҮХ №
            </p>
            <Table bordered className="story mb-0">
               <thead>
                  <tr>
                     <th rowSpan={4} className="imgMiddle w-1/2">
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
                     <th>НДД</th>
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
                     <th className="w-56">
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
                           Нас:{' '}
                           <span>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'age']}>
                                 <Input disabled={true} />
                              </Form.Item>
                           </span>
                        </p>
                     </th>
                     <th>
                        <p>Хүйс:</p>
                        <Form.Item className="mb-0" name={['patient', 'genderType']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'MAN'}>
                                 Эрэгтэй
                              </Checkbox>
                              <Checkbox value={'WOMEN'}>Эмэгтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th className="w-44">
                        <p>Гэрлэлтийн байдал</p>
                        <Form.Item className="mb-0" name={['patient', 'marriageStatus']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Огт гэрлээгүй
                              </Checkbox>
                              <Checkbox value={1}>Батлуулсан гэр бүлтэй</Checkbox>
                              <Checkbox value={2}>Батлуулаагүй гэр бүлтэй</Checkbox>
                              <Checkbox value={3}>Тусгаарласан</Checkbox>
                              <Checkbox className="w-full" value={4}>
                                 Цуцалсан
                              </Checkbox>
                              <Checkbox className="w-full" value={5}>
                                 Бэлэвсэн
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th className="w-52">
                        <p>Боловсролын байда dddл:</p>
                        <Form.Item className="mb-0" name={['patient', 'educationType']}>
                           <Radio.Group>
                              <Radio value="apple"> Apple </Radio>
                              <Radio value="pear"> Pear </Radio>
                           </Radio.Group>
                        </Form.Item>
                        <Form.Item className="mb-0" name={['patient', 'educationType']}>
                           <Checkbox.Group className="ml-0">
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
                              <Checkbox className="w-full" value={5}>
                                 Магистр
                              </Checkbox>
                              <Checkbox className="w-full" value={5}>
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
                     <th>
                        <p>Ажлын газар, албан тушаал:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'organization']}>
                           <Input disabled={true} className="ml-1" />
                        </Form.Item>
                        <p>Мэргэжил:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'jobPosition']}>
                           <Input disabled={true} className="ml-1" />
                        </Form.Item>
                     </th>
                     <th>
                        <p>
                           Цусны бүлэг:
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'bloodType']}>
                              <Input className="w-9 text-center" />
                           </Form.Item>
                        </p>
                        <p>Баталгаажуулсан</p>
                        <p>хүний нэр гарын</p>
                        <p>
                           үсэг:
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'bloodTypeVerifyBy']}>
                              <Input className="w-16" />
                           </Form.Item>
                        </p>
                     </th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th colSpan={2}>
                        <p>Яаралтай үед холбоо барих:</p>
                        <p>
                           Өөрийн утас:{' '}
                           <span>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'phoneNo']}>
                                 <Input disabled={true} className="ml-1" />
                              </Form.Item>
                           </span>
                        </p>
                        <p>
                           Ар гэрийн утас:{' '}
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['patient', 'contacts', 0, 'contactPhoneNo']}
                           >
                              <Input disabled={true} className="ml-1" />
                           </Form.Item>
                        </p>
                     </th>
                     <th className="w-40">
                        <p>Төлбөрийн төрөл:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'paymentStatus']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Төр хариуцсан
                              </Checkbox>
                              <Checkbox value={1}>15%</Checkbox>
                              <Checkbox className="w-full" value={2}>
                                 10%
                              </Checkbox>
                              <Checkbox value={3}>Өвчтөн хариуцсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p className="w-28">Доод шатлалаас</p>
                        <p>илгээсэн эсэх:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'underStage']}>
                           <Radio.Group className="ml-0">
                              <Radio value={0}>Тийм</Radio>
                              <Radio value={1}>Үгүй</Radio>
                           </Radio.Group>
                        </Form.Item>
                     </th>
                     <th className="w-36">
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
                     <th colSpan={5}>
                        Хэвтэх үеийн онош:
                        <span>
                           <Form.List name="diagnoses">
                              {(diagnoses) => (
                                 <>
                                    {diagnoses.map(({ key, name, ...restField }) => (
                                       <Form.Item
                                          key={key}
                                          {...restField}
                                          name={[name, 'name']}
                                          shouldUpdate
                                          className="mb-0"
                                          noStyle
                                       >
                                          <Input disabled={true} className="w-10" />
                                       </Form.Item>
                                    ))}
                                 </>
                              )}
                           </Form.List>
                        </span>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>
                        Үндсэн онош:
                        <span>
                           <Form.List name={['patient', 'main']}>
                              {(diagnoses) => (
                                 <>
                                    {diagnoses.map((diagnose, index) => (
                                       <Form.Item key={index} shouldUpdate noStyle className="mb-0">
                                          {() => {
                                             return (
                                                <span>
                                                   {form.getFieldValue(['patient', 'main', diagnose.name, 'nameMn'])}-
                                                   {form.getFieldValue(['patient', 'main', diagnose.name, 'code'])}
                                                   &nbsp;
                                                </span>
                                             );
                                          }}
                                       </Form.Item>
                                    ))}
                                 </>
                              )}
                           </Form.List>
                        </span>
                     </th>
                     <th className="text-center">
                        <p>ӨОУА-код</p>
                        <p>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['patient', 'mainDate']}
                              getValueProps={(i) => ({ value: moment(i) })}
                           >
                              <DatePicker disabled={true} format={'YYYY он MM сар DD өдөр'} />
                           </Form.Item>
                        </p>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>
                        Дагалдах онош:
                        <span>
                           <Form.List name={['patient', 'combo']}>
                              {(diagnoses) => (
                                 <>
                                    {diagnoses.map((diagnose, index) => (
                                       <Form.Item key={index} shouldUpdate noStyle className="mb-0">
                                          {() => {
                                             return (
                                                <span>
                                                   {form.getFieldValue(['patient', 'combo', diagnose.name, 'nameMn'])}-
                                                   {form.getFieldValue(['patient', 'combo', diagnose.name, 'code'])}
                                                   &nbsp;
                                                </span>
                                             );
                                          }}
                                       </Form.Item>
                                    ))}
                                 </>
                              )}
                           </Form.List>
                        </span>
                     </th>
                     <th></th>
                  </tr>
                  <tr>
                     <th colSpan={4}>
                        Хүндрэл:
                        <span>
                           <Form.List name={['patient', 'complications']}>
                              {(diagnoses) => (
                                 <>
                                    {diagnoses.map((diagnose, index) => (
                                       <Form.Item key={index} shouldUpdate noStyle className="mb-0">
                                          {() => {
                                             return (
                                                <span>
                                                   {form.getFieldValue([
                                                      'patient',
                                                      'complications',
                                                      diagnose.name,
                                                      'nameMn'
                                                   ])}
                                                   -
                                                   {form.getFieldValue([
                                                      'patient',
                                                      'complications',
                                                      diagnose.name,
                                                      'code'
                                                   ])}
                                                   &nbsp;
                                                </span>
                                             );
                                          }}
                                       </Form.Item>
                                    ))}
                                 </>
                              )}
                           </Form.List>
                        </span>
                     </th>
                     <th></th>
                  </tr>
                  <tr>
                     <th colSpan={4}>
                        Үйлдлийн онош (Мэс засал, мэс ажилбар):
                        <span>
                           <Form.List name={['patient', 'operational']}>
                              {(diagnoses) => (
                                 <>
                                    {diagnoses.map((diagnose, index) => (
                                       <Form.Item key={index} shouldUpdate noStyle className="mb-0">
                                          {() => {
                                             return (
                                                <span>
                                                   {form.getFieldValue([
                                                      'patient',
                                                      'operational',
                                                      diagnose.name,
                                                      'nameMn'
                                                   ])}
                                                   -
                                                   {form.getFieldValue([
                                                      'patient',
                                                      'operational',
                                                      diagnose.name,
                                                      'code'
                                                   ])}
                                                   &nbsp;
                                                </span>
                                             );
                                          }}
                                       </Form.Item>
                                    ))}
                                 </>
                              )}
                           </Form.List>
                        </span>
                     </th>
                     <th className="text-center">
                        <p>ӨОУА-код</p>
                        <p>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['patient', 'operationalDate']}
                              getValueProps={(i) => ({ value: moment(i) })}
                           >
                              <DatePicker disabled={true} format={'YYYY он MM сар DD өдөр'} />
                           </Form.Item>
                        </p>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>
                        Уламжлалтын онош:
                        <span>
                           <Form.List name={['patient', 'treatmentD']}>
                              {(diagnoses) => (
                                 <>
                                    {diagnoses.map((diagnose, index) => (
                                       <Form.Item key={index} shouldUpdate noStyle className="mb-0">
                                          {() => {
                                             return (
                                                <span>
                                                   {form.getFieldValue([
                                                      'patient',
                                                      'treatmentD',
                                                      diagnose.name,
                                                      'nameMn'
                                                   ])}
                                                   -
                                                   {form.getFieldValue([
                                                      'patient',
                                                      'treatmentD',
                                                      diagnose.name,
                                                      'code'
                                                   ])}
                                                   &nbsp;
                                                </span>
                                             );
                                          }}
                                       </Form.Item>
                                    ))}
                                 </>
                              )}
                           </Form.List>
                        </span>
                     </th>
                     <th></th>
                  </tr>
                  <tr>
                     <th>
                        <p>Өвчний төгсгөл:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'endOfPain']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Эдгэрсэн
                              </Checkbox>
                              <Checkbox value={1}>Сайжирсан</Checkbox>
                              <Checkbox className="w-full" value={2}>
                                 Хэвэндээ
                              </Checkbox>
                              <Checkbox value={3}>Нас барсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
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
                     <th colSpan={2}>
                        <span>
                           Эмчлэгч эмчийн нэр, гарын үсэг:
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'doctor']}>
                              <Input />
                           </Form.Item>
                        </span>
                     </th>
                     <th colSpan={3}>
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
            <div className="w-full story">
               <p className="ml-4">
                  <span>
                     Үзлэг эхэлсэн:
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['patient', 'startDateInspection']}
                        getValueProps={(i) => ({ value: moment(i) })}
                     >
                        <DatePicker
                           showTime={{
                              format: 'HH:mm'
                           }}
                           disabled={true}
                           locale={mnMN}
                           style={{
                              width: 200
                           }}
                           format={'YYYY он MM сар DD өдөр HH цаг mm минут'}
                        />
                     </Form.Item>
                  </span>
               </p>
               <p className="ml-4">
                  ХЧТА-ын
                  <span>
                     <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'hchtaDay']}>
                        <Input disabled={true} style={{ width: 25, textAlign: 'center' }} />
                     </Form.Item>
                  </span>
                  хоног
               </p>
            </div>
            <Table bordered className="story mb-0">
               <thead>
                  <tr>
                     <th>
                        <div className="flex flex-wrap">
                           <div className="w-1/2">
                              <p>Өндөр (см)</p>
                              <p>Жин (см)</p>
                              <p>Биеийн жингийн индекс(кг/м2)</p>
                           </div>
                           <div className="w-1/2">
                              <p>
                                 [
                                 <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'height']}>
                                    <Input className="amaraInput w-10" />
                                 </Form.Item>
                                 ]
                              </p>
                              <p>
                                 [
                                 <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'weight']}>
                                    <Input className="amaraInput w-10" />
                                 </Form.Item>
                                 ]
                              </p>
                              <p>
                                 [
                                 <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'index']}>
                                    <Input className="amaraInput w-10" />
                                 </Form.Item>
                                 ]
                              </p>
                           </div>
                        </div>
                     </th>
                     <th>
                        <p>Цусны даралт (ммуб)</p>
                        <div className="flex flex-wrap">
                           <div className="w-1/2">
                              <p className="text-center">Систолын даралт</p>
                              <p className="text-center">Диастолын даралт</p>
                           </div>
                           <div className="w-1/2">
                              <p>
                                 [
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['patient', 'highPressureRight']}
                                 >
                                    <Input className="amaraInput w-10" />
                                 </Form.Item>
                                 ]
                              </p>
                              <p>
                                 [
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['patient', 'lowPressureRight']}
                                 >
                                    <Input className="amaraInput w-10" />
                                 </Form.Item>
                                 ]
                              </p>
                           </div>
                        </div>
                     </th>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page1;
