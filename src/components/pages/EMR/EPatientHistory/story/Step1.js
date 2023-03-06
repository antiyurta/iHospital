import React from 'react';
import { Checkbox, DatePicker, Divider, Form, Input } from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import Diagnose from '../../InPatient/document/Diagnose';

function Step1({ form, templateId }) {
   return (
      <div className="flex flex-wrap">
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Регистр дугаар:"
                     name={['patient', 'registerNumber']}
                  >
                     <Input disabled={true} />
                  </Form.Item>
               </div>
            </div>
         </div>
         {templateId == 2 && (
            <div className="w-1/4 p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        className="mb-0"
                        label="Эрүүл мэндийн дугаар:"
                        name={['patient', 'emd']}
                     >
                        <Input />
                     </Form.Item>
                  </div>
               </div>
            </div>
         )}
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Нийгмийн даатгалын дугаар:"
                     name={['patient', 'ndd']}
                  >
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Тасгийн нэр:"
                     name={['patient', 'departmentName']}
                  >
                     <Input disabled={true} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Эцэг /эх/-ийн нэр:"
                     name={['patient', 'lastName']}
                  >
                     <Input disabled={true} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Өөрийн нэр:"
                     name={['patient', 'firstName']}
                  >
                     <Input disabled={true} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Төрсөн он сар өдөр:"
                     name={['patient', 'birthDate']}
                  >
                     <Input disabled={true} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Нас:"
                     name={['patient', 'age']}
                  >
                     <Input disabled={true} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Хүйс:"
                     name={['patient', 'genderType']}
                  >
                     <Checkbox.Group disabled={true}>
                        <Checkbox className="ml-2" value={'MAN'}>
                           Эрэгтэй
                        </Checkbox>
                        <Checkbox value={'WOMEN'}>Эмэгтэй</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  {templateId != 2 && (
                     <Form.Item
                        className="mb-0"
                        label="Гэрлэлтийн байдал"
                        name={['patient', 'marriageStatus']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={0}>
                              Огт гэрлээгүй
                           </Checkbox>
                           <Checkbox value={1}>Батлуулсан гэр бүлтэй</Checkbox>
                           <Checkbox value={2}>
                              Батлуулаагүй гэр бүлтэй
                           </Checkbox>
                           <Checkbox value={3}>Тусгаарласан</Checkbox>
                           <Checkbox className="w-full" value={4}>
                              Цуцалсан
                           </Checkbox>
                           <Checkbox className="w-full" value={5}>
                              Бэлэвсэн
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  )}
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Боловсролын байдал"
                     name={['patient', 'educationType']}
                  >
                     <Checkbox.Group className="ml-0">
                        <Checkbox className="ml-2" value={0}>
                           Боловсролгүй
                        </Checkbox>
                        <Checkbox value={1}>Бага</Checkbox>
                        <Checkbox value={2}>Бүрэн дунд</Checkbox>
                        <Checkbox value={3}>
                           Мэргэжлийн болон техникийн
                        </Checkbox>
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
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Аймаг/хот:"
                     name={['patient', 'address', 'aimag']}
                  >
                     <Input disabled={true} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Сум/дүүрэг:"
                     name={['patient', 'address', 'soum']}
                  >
                     <Input disabled={true} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Баг/хороо:"
                     name={['patient', 'address', 'committee']}
                  >
                     <Input disabled={true} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Гудамж/Байшин:"
                     name={['patient', 'address', 'building']}
                  >
                     <Input disabled={true} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Тоот:"
                     name={['patient', 'address', 'address']}
                  >
                     <Input disabled={true} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Ажлын газар, албан тушаал:"
                     name={['patient', 'organization']}
                  >
                     <Input disabled={true} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Мэргэжил:"
                     name={['patient', 'jobPosition']}
                  >
                     <Input disabled={true} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Цусны бүлэг"
                     name={['patient', 'bloodType']}
                  >
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Баталгаажуулсан
                        хүний нэр гарын
                        үсэг:"
                     name={['patient', 'bloodTypeVerify']}
                  >
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Өөрийн утас:"
                     name={['patient', 'phoneNo']}
                  >
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Ар гэрийн утас:"
                     name={['patient', 'contacts', 0, 'contactPhoneNo']}
                  >
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Төлбөрийн төрөл:"
                     name={['patient', 'paymentStatus']}
                  >
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
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Доод шатлалаас
                        илгээсэн эсэх:"
                     name={['patient', 'underStage']}
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
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Харшлын анамнез:"
                     name={['patient', 'anemis']}
                  >
                     <Checkbox.Group className="ml-0">
                        <Checkbox className="ml-2" value={0}>
                           Эмийн бодис
                        </Checkbox>
                        <Checkbox value={1}>Хоол хүнс</Checkbox>
                        <Checkbox value={2}>Бусад</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-full p-1">
            <Divider>Хэвтэх үеийн онош</Divider>
            <Form.List name="diagnoses">
               {(diagnoses) => (
                  <>
                     {diagnoses.map((diagnose, index) => {
                        return (
                           <Form.Item
                              shouldUpdate
                              noStyle
                              key={index}
                              className="mb-0"
                           >
                              {() => {
                                 return (
                                    <span>
                                       {form.getFieldValue([
                                          'diagnoses',
                                          diagnose.name,
                                          'name'
                                       ])}
                                       &nbsp;
                                    </span>
                                 );
                              }}
                           </Form.Item>
                        );
                     })}
                  </>
               )}
            </Form.List>
         </div>
         <div className="w-full p-1 story">
            <Diagnose form={form} name="Үндсэн онош" formName="main" />
         </div>
         <div className="w-full p-1 story">
            <Diagnose form={form} name="Дагалдах онош" formName="combo" />
         </div>
         <div className="w-full p-1 story">
            <Diagnose form={form} name="Хүндрэл" formName="complications" />
         </div>
         <div className="w-full p-1 story">
            <Diagnose
               form={form}
               name="Үйлдлийн онош (Мэс засал, мэс ажилбар)"
               formName="operational"
            />
         </div>
         <div className="w-full p-1 story">
            <Diagnose
               form={form}
               name="Уламжлалтын онош"
               formName="treatmentD"
            />
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Өвчний төгсгөл:"
                     name={['patient', 'endOfPain']}
                  >
                     <Checkbox.Group className="ml-0">
                        <Checkbox className="ml-2" value={0}>
                           Эдгэрсэн
                        </Checkbox>
                        <Checkbox value={1}>Сайжирсан</Checkbox>
                        <Checkbox value={2}>Хэвэндээ</Checkbox>
                        <Checkbox value={3}>Нас барсан</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Эмнэлгээс:"
                     name={['patient', 'fromHospital']}
                  >
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
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Эмчлэгч эмчийн нэр, гарын үсэг:"
                     name={['patient', 'doctor']}
                  >
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Хянасан эмчийн нэр, гарын үсэг:"
                     name={['patient', 'doctors']}
                  >
                     <Checkbox.Group>
                        <Checkbox className="ml-2" value={0}>
                           Эмчилгээ эрхэлсэн орлогч
                        </Checkbox>
                        <Checkbox value={1}>тасгийн эрхлэгч</Checkbox>
                        <Checkbox value={2}>
                           эмчилгээний чанарын менежер
                        </Checkbox>
                        <Checkbox value={3}>бусад</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Үзлэг эхэлсэн:"
                     name={['patient', 'startDateInspection']}
                     getValueProps={(i) => ({ value: moment(i) })}
                  >
                     <DatePicker
                        showTime={{
                           format: 'HH:mm'
                        }}
                        locale={mnMN}
                        format={'YYYY он MM сар DD өдөр'}
                     />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="ХЧТА-ын хоног:"
                     name={['patient', 'hchtaDay']}
                  >
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item label="Өндөр (см):" name={['patient', 'height']}>
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item label="Жин (кг):" name={['patient', 'weight']}>
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Биеийн жингийн индекс (кг/м2):"
                     name={['patient', 'index']}
                  >
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Систолын даралт:"
                     name={['patient', 'highPressureRight']}
                  >
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Диастолын даралт:"
                     name={['patient', 'lowPressureRight']}
                  >
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Step1;
