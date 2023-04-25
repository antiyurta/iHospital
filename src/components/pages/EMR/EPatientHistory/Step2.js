//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Өвчний түүх
import React from 'react';
import { Col, Row, Input, Form, Radio, Checkbox } from 'antd';
const { TextArea } = Input;
export default function Step2() {
   return (
      <div>
         <div className="flex flex-wrap">
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        className="mb-0"
                        label="Халдварт өвчин"
                        name={['healthRecord', 'contagious']}
                     >
                        <Checkbox.Group>
                           <Checkbox className="ml-2" value={'MEASLES'}>
                              Улаан бурхан
                           </Checkbox>
                           <Checkbox value={'VARICELLA'}>Салхин цэцэг</Checkbox>
                           <Checkbox value={'AVIRUS'}>Вирус хепатит A</Checkbox>
                           <Checkbox value={'BVIRUS'}>Вирус хепатит B</Checkbox>
                           <Checkbox value={'CVIRUS'}>Вирус хепатит C</Checkbox>
                           <Checkbox value={'TUBERCULOSIS'}>Сүрьеэ</Checkbox>
                           <Checkbox value={'OTHER'}>Бусад</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Ужиг өвчин"
                        name={['healthRecord', 'chronic']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Осол гэмтэл"
                        name={['healthRecord', 'peril']}
                        rules={[{ required: false, message: '' }]}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Зүрхний архаг өвчин"
                        name={['healthRecord', 'heartDisease']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Артерийн даралт ихсэлт"
                        name={['healthRecord', 'arterialPressure']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Уушгины өвчин"
                        name={['healthRecord', 'pulmonary']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Бөөрний өвчин"
                        name={['healthRecord', 'kidnyDisease']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Элэгний өвчин"
                        name={['healthRecord', 'hepatopathy']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Чихрийн шижин"
                        name={['healthRecord', 'diabetes']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Цусны өвчин"
                        name={['healthRecord', 'bloodDisease']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Сүрьеэ"
                        name={['healthRecord', 'phthisis']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Мэдрэл"
                        name={['healthRecord', 'nerve']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Мэс засал"
                        name={['healthRecord', 'surgery']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Хавдар"
                        name={['healthRecord', 'turgidity']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Удамшил"
                        name={['healthRecord', 'inheritage']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Бусад"
                        name={['healthRecord', 'other']}
                        className="mb-0"
                     >
                        <TextArea rows={5} />
                     </Form.Item>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
