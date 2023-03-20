//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Төрөлт, өсөлт бойжилт
import React from 'react';
import {
   Col,
   Radio,
   Row,
   Divider,
   Input,
   DatePicker,
   InputNumber,
   Form,
   Select
} from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';

export default function Step1() {
   const { TextArea } = Input;
   const { Option } = Select;
   return (
      <div>
         <Divider orientation="left" className="text-sm my-2">
            Төрөлт
         </Divider>
         <div className="flex flex-wrap">
            <div className="md:w-1/3 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        className="mb-0"
                        label="Хэдэн онд"
                        name={['birth', 'birthDate']}
                     >
                        <DatePicker locale={mnMN} />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/3 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        className="mb-0"
                        label="Яаж төрсөн"
                        name={['birth', 'whatBorn']}
                     >
                        <Radio.Group>
                           <Radio value="0">Төрөх замаар</Radio>
                           <Radio value="1">Кесар хагалгаагаар</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/3 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        className="mb-0"
                        label="Хаана"
                        name={['birth', 'locate']}
                     >
                        <Input />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/3 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        className="mb-0"
                        label="Хугацаандаа"
                        name={['birth', 'stateTime']}
                     >
                        <Select className="p-1 h-7 inline-table">
                           <Option value="0">Хугацаандаа</Option>
                           <Option value="1">Дутуу</Option>
                           <Option value="2">Илүү</Option>
                        </Select>
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/3 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        className="mb-0"
                        label="Хугацаандаа"
                        name={['birth', 'stateTime']}
                     >
                        <Select className="p-1 h-7 inline-table">
                           <Option value="0">Хугацаандаа</Option>
                           <Option value="1">Дутуу</Option>
                           <Option value="2">Илүү</Option>
                        </Select>
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/3 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        className="mb-0"
                        label="Хэдэн 7 хоног"
                        name={['birth', 'fewWeeks']}
                     >
                        <InputNumber />
                     </Form.Item>
                  </div>
               </div>
            </div>
         </div>
         <Divider orientation="left" className="text-sm my-2">
            Бага насны өсөлт
         </Divider>
         <div className="flex flex-wrap">
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        className="mb-0"
                        label="Бага насны өсөлт, бойжилт"
                        name={['birth', 'growthChildHood']}
                     >
                        <Radio.Group>
                           <Radio value="NORMAL">Хэвийн</Radio>
                           <Radio value="UNNORMAL">Хэвийн бус</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        className="mb-0"
                        label="Цэцэрлэгт явсан эсэх"
                        name={['birth', 'isKindergarden']}
                     >
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        className="mb-0"
                        label="Сургуульд сурсан эсэх"
                        name={['birth', 'isSchool']}
                     >
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
         </div>
         <Divider orientation="left" className="text-sm my-2">
            Дархлаажуулалт
         </Divider>
         <div className="flex flex-wrap">
            <div className="md:w-1/3 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        className="mb-0"
                        label="Товлолын дагуу вакцинууддаа хамрагдсан эсэх"
                        name={['birth', 'isVaccination']}
                        rules={[
                           { required: false, message: 'Заавал сонгоно уу' }
                        ]}
                        wrapperCol={{
                           offset: 1,
                           span: 20
                        }}
                     >
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
         </div>
         <Divider orientation="left" className="text-sm my-2">
            Багадаа өвдсөн өвчин
         </Divider>
         <div className="flex flex-wrap">
            <div className="w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label=""
                        name={['birth', 'painChildhood']}
                        rules={[{ required: false, message: '' }]}
                        className="mb-0"
                     >
                        <TextArea rows={2} style={{ padding: 2 }} />
                     </Form.Item>
                  </div>
               </div>
            </div>
         </div>
         <Divider orientation="left" className="text-sm my-2">
            Биеийн хэмжигдэхүүн / БЖИ
         </Divider>
         <div className="flex flex-wrap">
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Биеийн өндөр (см)"
                        name={['birth', 'height']}
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <InputNumber />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Биеийн жин (кг)"
                        name={['birth', 'weight']}
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <InputNumber />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Систол даралт"
                        name={['birth', 'systol']}
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <InputNumber />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Диастол даралт"
                        name={['birth', 'distol']}
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <InputNumber />
                     </Form.Item>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
