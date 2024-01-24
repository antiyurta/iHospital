//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Амьдралын нөхцөл
import React from 'react';
import { Col, Radio, Row, Divider, Input, Form } from 'antd';

export default function Step4() {
   return (
      <div
         className="flex flex-col gap-2"
         style={{
            height: 200,
            overflow: 'auto'
         }}
      >
         <Divider orientation="left" className="text-sm my-2">
            Ахуйн нөхцөл / Ажлын нөхцөл
         </Divider>
         <Form.Item label="Хаана амьдардаг вэ" name={['lifeCondition', 'homeCondition', 'locate']} className="mb-0">
            <Radio.Group className="flex flex-col gap-1">
               <Radio value="APARTMENT">Орон сууц</Radio>
               <Radio value="GER">Гэр хороолол</Radio>
               <Radio value="HOUSE">Хувийн орон сууц</Radio>
            </Radio.Group>
         </Form.Item>
         <Form.Item label="Гэрлэлтийн байдал" name={['lifeCondition', 'homeCondition', 'isMarried']} className="mb-0">
            <Radio.Group className="flex flex-col gap-1">
               <Radio value={true}>Гэрлэсэн</Radio>
               <Radio value={false}>Гэрлээгүй</Radio>
            </Radio.Group>
         </Form.Item>
         <Form.Item label="Ажлын нөхцөл" name={['lifeCondition', 'workCondition', 'condition']} className="mb-0">
            <Radio.Group className="flex flex-col gap-1">
               <Radio value="NORMAL">Энгийн</Radio>
               <Radio value="VIPER">Хортой</Radio>
               <Radio value="HARD">Хүнд</Radio>
            </Radio.Group>
         </Form.Item>
         <Form.Item
            label="Хаана ямар ажил эрхэлдэг"
            name={['lifeCondition', 'workCondition', 'locate']}
            className="mb-0"
         >
            <Input size="small" />
         </Form.Item>
         <Form.Item label="Ажлын цаг" name={['lifeCondition', 'workCondition', 'clock']} className="mb-0">
            <Input size="small" />
         </Form.Item>
      </div>
   );
}
