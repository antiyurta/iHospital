//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Төрөлт, өсөлт бойжилт
import React from 'react';
import { Radio, Divider, Input, DatePicker, InputNumber, Form } from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';

export default function Step1() {
   const { TextArea } = Input;
   return (
      <div
         className="flex flex-col gap-2"
         style={{
            height: 200,
            overflow: 'auto'
         }}
      >
         <Divider orientation="left" className="text-sm my-2">
            Төрөлт
         </Divider>
         <Form.Item className="mb-0" label="Хэдэн онд" name={['birth', 'birthDate']}>
            <DatePicker locale={mnMN} />
         </Form.Item>
         <Form.Item className="mb-0" label="Яаж төрсөн" name={['birth', 'whatBorn']}>
            <Radio.Group className="flex flex-col gap-1">
               <Radio value="0">Төрөх замаар</Radio>
               <Radio value="1">Кесар хагалгаагаар</Radio>
            </Radio.Group>
         </Form.Item>
         <Form.Item className="mb-0" label="Хаана" name={['birth', 'locate']}>
            <Input />
         </Form.Item>
         <Form.Item className="mb-0" label="Хугацаандаа" name={['birth', 'stateTime']}>
            <Radio.Group className="flex flex-col gap-1">
               <Radio value="0">Хугацаандаа</Radio>
               <Radio value="1">Дутуу</Radio>
               <Radio value="2">Илүү</Radio>
            </Radio.Group>
         </Form.Item>
         <Form.Item className="mb-0" label="Хэдэн 7 хоног" name={['birth', 'fewWeeks']}>
            <InputNumber />
         </Form.Item>
         <Divider orientation="left" className="text-sm my-2">
            Бага насны өсөлт
         </Divider>
         <Form.Item className="mb-0" label="Бага насны өсөлт, бойжилт" name={['birth', 'growthChildHood']}>
            <Radio.Group className="flex flex-col gap-1">
               <Radio value="NORMAL">Хэвийн</Radio>
               <Radio value="UNNORMAL">Хэвийн бус</Radio>
            </Radio.Group>
         </Form.Item>
         <Form.Item className="mb-0" label="Цэцэрлэгт явсан эсэх" name={['birth', 'isKindergarden']}>
            <Radio.Group className="flex flex-col gap-1">
               <Radio value={true}>Тийм</Radio>
               <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
         </Form.Item>
         <Form.Item className="mb-0" label="Сургуульд сурсан эсэх" name={['birth', 'isSchool']}>
            <Radio.Group className="flex flex-col gap-1">
               <Radio value={true}>Тийм</Radio>
               <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
         </Form.Item>
         <Divider orientation="left" className="text-sm my-2">
            Дархлаажуулалт
         </Divider>
         <Form.Item
            className="mb-0"
            label="Товлолын дагуу вакцинууддаа хамрагдсан эсэх"
            name={['birth', 'isVaccination']}
            rules={[{ required: false, message: 'Заавал сонгоно уу' }]}
         >
            <Radio.Group className="flex flex-col gap-1">
               <Radio value={true}>Тийм</Radio>
               <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
         </Form.Item>
         <Divider orientation="left" className="text-sm my-2">
            Багадаа өвдсөн өвчин
         </Divider>
         <Form.Item
            label=""
            name={['birth', 'painChildhood']}
            rules={[{ required: false, message: '' }]}
            className="mb-0"
         >
            <TextArea rows={2} style={{ padding: 2 }} />
         </Form.Item>
         <Divider orientation="left" className="text-sm my-2">
            Биеийн хэмжигдэхүүн / БЖИ
         </Divider>
         <Form.Item
            className="mb-0"
            label="Биеийн өндөр (см)"
            name={['birth', 'height']}
            rules={[{ required: true, message: 'Заавал' }]}
         >
            <InputNumber />
         </Form.Item>
         <Form.Item
            className="mb-0"
            label="Биеийн жин (кг)"
            name={['birth', 'weight']}
            rules={[{ required: true, message: 'Заавал' }]}
         >
            <InputNumber />
         </Form.Item>
         <Form.Item
            className="mb-0"
            label="Систол даралт"
            name={['birth', 'systol']}
            rules={[{ required: true, message: 'Заавал' }]}
         >
            <InputNumber />
         </Form.Item>
         <Form.Item
            className="mb-0"
            label="Диастол даралт"
            name={['birth', 'distol']}
            rules={[{ required: true, message: 'Заавал' }]}
         >
            <InputNumber />
         </Form.Item>
      </div>
   );
}
