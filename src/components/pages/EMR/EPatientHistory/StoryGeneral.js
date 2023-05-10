import { Button, Checkbox, Collapse, DatePicker, Divider, Form, Input } from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { DefaultPatch, Patch } from '../../../comman';
import Diagnose from '../InPatient/document/Diagnose';
const { TextArea } = Input;
const { Panel } = Collapse;
function StoryGeneral({ id, patient, diagnoses, anemis, general }) {
   const token = useSelector(selectCurrentToken);
   const [form] = Form.useForm();
   form.setFieldValue('patient', patient);
   form.setFieldValue('diagnoses', diagnoses);
   form.setFieldValue('anemis', anemis);
   form.setFieldValue('general', general);
   const onFinish = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      //   values['doctorInspection'] = JSON.stringify(values['doctorInspection']);
      //   values['templateId'] = 1;
      const response = await DefaultPatch('inpatient/story/' + id, token, conf, values);
      // form.setFieldValue('patient', response.patient);
   };
   const onFinishFailed = (errors) => {
      console.log(errors);
   };
   return (
      <>
         <Panel header="Ерөнхий" key="1" forceRender={true}>
            <div className="flex flex-wrap">
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Регистр дугаар:" name={['patient', 'registerNumber']}>
                           <Input disabled={true} />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Нийгмийн даатгалын дугаар:" name={['patient', 'ndd']}>
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Тасгийн нэр:" name={['patient', 'departmentName']}>
                           <Input disabled={true} />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Эцэг /эх/-ийн нэр:" name={['patient', 'lastName']}>
                           <Input disabled={true} />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Өөрийн нэр:" name={['patient', 'firstName']}>
                           <Input disabled={true} />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Төрсөн он сар өдөр:" name={['patient', 'birthDate']}>
                           <Input disabled={true} />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Нас:" name={['patient', 'age']}>
                           <Input disabled={true} />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Хүйс:" name={['patient', 'genderType']}>
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
                        <Form.Item className="mb-0" label="Гэрлэлтийн байдал" name={['patient', 'marriageStatus']}>
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
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Боловсролын байдал" name={['patient', 'educationType']}>
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
                        <Form.Item className="mb-0" label="Аймаг/хот:" name={['patient', 'address', 'aimag']}>
                           <Input disabled={true} />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Сум/дүүрэг:" name={['patient', 'address', 'soum']}>
                           <Input disabled={true} />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Баг/хороо:" name={['patient', 'address', 'committee']}>
                           <Input disabled={true} />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Гудамж/Байшин:" name={['patient', 'address', 'building']}>
                           <Input disabled={true} />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Тоот:" name={['patient', 'address', 'address']}>
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
                        <Form.Item className="mb-0" label="Мэргэжил:" name={['patient', 'jobPosition']}>
                           <Input disabled={true} />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Цусны бүлэг" name={['patient', 'bloodType']}>
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
                        <Form.Item className="mb-0" label="Өөрийн утас:" name={['patient', 'phoneNo']}>
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
                        <Form.Item className="mb-0" label="Төлбөрийн төрөл:" name={['patient', 'paymentStatus']}>
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
                        <Form.Item className="mb-0" label="Харшлын анамнез:" name={['patient', 'anemis']}>
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
                                 <Form.Item shouldUpdate noStyle key={index} className="mb-0">
                                    {() => {
                                       return (
                                          <span>
                                             {form.getFieldValue(['diagnoses', diagnose.name, 'name'])}
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
                  <Diagnose form={form} name="Үйлдлийн онош (Мэс засал, мэс ажилбар)" formName="operational" />
               </div>
               <div className="w-full p-1 story">
                  <Diagnose form={form} name="Уламжлалтын онош" formName="treatmentD" />
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Өвчний төгсгөл:" name={['patient', 'endOfPain']}>
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
                        <Form.Item label="Эмнэлгээс:" name={['patient', 'fromHospital']}>
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
                        <Form.Item label="Эмчлэгч эмчийн нэр, гарын үсэг:" name={['patient', 'doctor']}>
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item label="Хянасан эмчийн нэр, гарын үсэг:" name={['patient', 'doctors']}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Эмчилгээ эрхэлсэн орлогч
                              </Checkbox>
                              <Checkbox value={1}>тасгийн эрхлэгч</Checkbox>
                              <Checkbox value={2}>эмчилгээний чанарын менежер</Checkbox>
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
                        <Form.Item label="ХЧТА-ын хоног:" name={['patient', 'hchtaDay']}>
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
                        <Form.Item label="Биеийн жингийн индекс (кг/м2):" name={['patient', 'index']}>
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item label="Систолын даралт:" name={['patient', 'highPressureRight']}>
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item label="Диастолын даралт:" name={['patient', 'lowPressureRight']}>
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
            </div>
         </Panel>
         <Panel header="Эмчлүүлэгчийн анамнез" key="2" forceRender={true}>
            <div className="flex flex-wrap">
               <div className="w-full p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Хэвтэх үеийн зовиур:" name={['anemis', 'inPatientPain']}>
                           <TextArea rows={5} className="w-full" />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-full p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Өвчний түүх:" name={['anemis', 'painStory']}>
                           <TextArea rows={5} className="w-full" />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-full p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Амьдралын түүх:" name={['anemis', 'lifeStory']}>
                           <TextArea rows={5} className="w-full" />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item label="Ахуйн нөхцөл:" name={['anemis', 'locate']} className="mb-0">
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={'APARTMENT'}>
                                 Орон сууцанд
                              </Checkbox>
                              <Checkbox value={'GER'}>Гэрт</Checkbox>
                              <Checkbox value={'OTHER'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item label="Ажил хөдөлмөрийн нөхцөл:" name={['anemis', 'workCondition']} className="mb-0">
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'HARD'}>Хүнд</Checkbox>
                              <Checkbox value={'VIPER'}>Хортой</Checkbox>
                              <Checkbox value={'OTHER'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
            </div>
         </Panel>
         <Panel header="Урьд өвчилсөн өвчин, эмгэгийн байдал" key="3" forceRender={true}>
            <div className="flex flex-wrap">
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item label="Халдварт:" name={['anemis', 'contagious']} className="mb-0">
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={'measles'}>
                                 Улаан бурхан
                              </Checkbox>
                              <Checkbox value={'varicella'}>Салхин цэцэг</Checkbox>
                              <Checkbox value={'avirus'}>Вирус хепатит A</Checkbox>
                              <Checkbox value={'bvirus'}>Вирус хепатит B</Checkbox>
                              <Checkbox value={'cvirus'}>Вирус хепатит C</Checkbox>
                              <Checkbox value={'tuberculosis'}>Сүрьеэ</Checkbox>
                              <Checkbox value={'other'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item label="Мэс ажилбар хийсэн эсэх:" name={['anemis', 'isSurgery']} className="mb-0">
                           <TextArea rows={5} />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           label="Осол гэмтэл, хордлого, шалтгаан:"
                           name={['anemis', 'accidents']}
                           className="mb-0"
                        >
                           <TextArea rows={5} />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item label="Харшлын анамнез:" name={['anemis', 'allergy']} className="mb-0">
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={'Хоол хүнс'}>
                                 Хоол хүнс
                              </Checkbox>
                              <Checkbox value={'varicella'}>Эмийн бодис</Checkbox>
                              <Checkbox value={'Бусад'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           label="Удамшлын анамнез:
                        Удамшлын өвчнүүд:"
                           name={['anemis', 'geneticPainDesc']}
                           className="mb-0"
                        >
                           <TextArea />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item label="Хооллолтын байдал:" name={['anemis', 'whatFoodie']} className="mb-0">
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={'0'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'1'}>Цагаан</Checkbox>
                              <Checkbox value={'2'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item label="Архи хэрэглэдэг эсэх:" name={['anemis', 'isAlcoholUse']} className="mb-0">
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item label="Тамхи татдаг эсэх:" name={['anemis', 'isCigarUse']} className="mb-0">
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item label="Хэдэн наснаас эхэлж татсан:" name={['anemis', 'fromAge']} className="mb-0">
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item label="Хэдэн жил татаж байгаа:" name={['anemis', 'usedYear']} className="mb-0">
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
            </div>
         </Panel>
         <Panel header="Ерөнхий үзлэг(Дотор)" key="4" forceRender={true}>
            <div className="flex flex-wrap">
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Биеийн ерөнхий байдал:" name={['general', 'bodyCondition']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'easy'}>
                                 Хөнгөн
                              </Checkbox>
                              <Checkbox value={'middle'}>Дунд</Checkbox>
                              <Checkbox value={'hard'}>Хүндэвтэр</Checkbox>
                              <Checkbox value={'harder'}>Хүнд</Checkbox>
                              <Checkbox value={'soHard'}>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Ухаан санаа:" name={['general', 'mindStatus']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'faded'}>Бүдгэрсэн</Checkbox>
                              <Checkbox value={'stupor'}>Ступор</Checkbox>
                              <Checkbox value={'solor'}>Солор</Checkbox>
                              <Checkbox value={'coma'}>Кома</Checkbox>
                              <Checkbox value={'other'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Орчиндоо:" name={['general', 'area']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Харьцаатай
                              </Checkbox>
                              <Checkbox value={'unNormal'}>Харьцаагүй</Checkbox>
                              <Checkbox value={'unknown'}>Сул</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Байрлал:" name={['general', 'position']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'active'}>
                                 Идэвхтэй
                              </Checkbox>
                              <Checkbox value={'inactive'}>Идэвхгүй</Checkbox>
                              <Checkbox value={'pusher'}>Албадмал</Checkbox>
                              <Checkbox value={'haf'}>Хагас суугаа</Checkbox>
                              <Checkbox value={'inbed'}>Хэвтрийн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-full p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <h5>Арьс салстын байдал:</h5>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="а. Арьс салсын өнгө:" name={['general', 'skincolor']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'unNormal'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="б. Арьсны уян чанар:" name={['general', 'skinElasticity']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'increased'}>Ихэссэн</Checkbox>
                              <Checkbox value={'decreased'}>Алдагдсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="в.Арьсны чийглэг байдал:" name={['general', 'skinMoisture']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'increased'}>
                                 Хэвийн ихэссэн
                              </Checkbox>
                              <Checkbox value={'decreased'}>Багассан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="г.Арьсан дээрх тууралт:" name={['general', 'skinRash']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'noRash'}>
                                 Тууралтгүй
                              </Checkbox>
                              <Checkbox value={'rash'}>Тууралттай</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Хаван:" name={['general', 'edema']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'noEdema'}>
                                 Хавангүй
                              </Checkbox>
                              <Checkbox value={'edema'}>Хавантай</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="а. Ерөнхий б. Хэсгийн:" name={['general', 'skinArea']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'face'}>
                                 Нүүрэнд
                              </Checkbox>
                              <Checkbox value={'eye'}>Зовхинд</Checkbox>
                              <Checkbox value={'stomach'}>Хэвлийд</Checkbox>
                              <Checkbox value={'foot'}>Шилбээр</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Захын тунгалагийн булчирхай: а. Хэмжээ"
                           name={['general', 'ztb']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'hard'}>Харахад томорсон</Checkbox>
                              <Checkbox value={'harder'}>Тэмтрэлтээр томорсон</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="б. Байрлал" name={['general', 'b.position']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'neck'}>
                                 Хүзүүний
                              </Checkbox>
                              <Checkbox value={'armpit'}>Суганы</Checkbox>
                              <Checkbox value={'groin'}>Цавины</Checkbox>
                              <Checkbox value={'others'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="в. Эмзэглэл" name={['general', 'injury']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'injury'}>
                                 Эмзэглэлтэй
                              </Checkbox>
                              <Checkbox value={'uninjury'}>Эмзэглэлгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Үе мөчний хэлбэр:" name={['general', 'bodyShape']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'unNormal'}>Өөрчлөгдсөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Үений хөдөлгөөн:" name={['general', 'bodyMove']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'active'}>
                                 Идэвхтэй
                              </Checkbox>
                              <Checkbox value={'inactive'}>Идэвхгүй</Checkbox>
                              <Checkbox value={'limited'}>Хязгаарлагдмал</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
            </div>
         </Panel>
         <Panel header="Ерөнхий бусад" key="5" forceRender={true}>
            <div className="flex flex-wrap">
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Биеийн ерөнхий байдал:" name={['general', 'bodyCondition']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'middle'}>
                                 Дунд
                              </Checkbox>
                              <Checkbox value={'hard'}>Хүндэвтэр</Checkbox>
                              <Checkbox value={'harder'}>Хүнд</Checkbox>
                              <Checkbox value={'soHard'}>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Ухаан санаа:" name={['general', 'mindStatus']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'faded'}>Бүдгэрсэн</Checkbox>
                              <Checkbox value={'unNormal'}>Ухаангүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Арьс салст" name={['general', 'skincolor']}>
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'unNormal'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Арьс салст хэвийн бус бол:"
                           name={['general', 'unNormalskincolor']}
                        >
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-full p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <h5>Арьс салстын байдал:</h5>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Амьсгал 1 минутанд:" name={['general', 'breathOneMinute']}>
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item className="mb-0" label="Чагналтаар:" name={['general', 'hear']}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Уушги цулцангийн
                              </Checkbox>
                              <Checkbox value={1}>Хэржигнүүртэй</Checkbox>
                              <Checkbox value={2}>Гуурсан хоолойн</Checkbox>
                              <Checkbox value={3}>Хэм жигд</Checkbox>
                              <Checkbox value={4}>Амьсгал сулавтар</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div></div>
               </div>
               <div className="w-full p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <h5>Цусны эргэлтийн тогтолцоо:</h5>
                     </div>
                  </div>
               </div>
            </div>
         </Panel>
      </>
   );
}
export default StoryGeneral;
