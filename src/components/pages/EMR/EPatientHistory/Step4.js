//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Амьдралын нөхцөл
import React from 'react';
import { Col, Radio, Row, Divider, Input, Form } from 'antd';
import { INPUT_HEIGHT } from '../../../../constant';

export default function Step4() {
   return (
      <div>
         <Divider orientation="left" className="text-sm my-2">
            Ахуйн нөхцөл
         </Divider>
         <Row align="middle" className="mb-1">
            <Col span={24}>
               <Form.Item
                  label="Хаана амьдардаг вэ"
                  name={['lifeCondition', 'homeCondition', 'locate']}
                  rules={[{ required: false, message: '' }]}
                  className="mb-0"
                  labelCol={{ span: 6 }}
               >
                  <Radio.Group>
                     <Radio value="APARTMENT">Орон сууц</Radio>
                     <Radio value="GER">Гэр хороолол</Radio>
                     <Radio value="HOUSE">Хувийн орон сууц</Radio>
                  </Radio.Group>
               </Form.Item>
            </Col>
         </Row>
         <Row align="middle" className="mb-1">
            <Col span={24}>
               <Form.Item
                  label="Гэрлэлтийн байдал"
                  name={['lifeCondition', 'homeCondition', 'isMarried']}
                  rules={[{ required: false, message: '' }]}
                  className="mb-0"
                  labelCol={{ span: 6 }}
               >
                  <Radio.Group>
                     <Radio value={true}>Гэрлэсэн</Radio>
                     <Radio value={false}>Гэрлээгүй</Radio>
                  </Radio.Group>
               </Form.Item>
            </Col>
         </Row>
         <Divider orientation="left" className="text-sm my-2">
            Ажлын нөхцөл
         </Divider>
         <Row align="middle" className="mb-1">
            <Col span={24}>
               <Form.Item
                  label="Ажлын нөхцөл"
                  name={['lifeCondition', 'workCondition', 'condition']}
                  rules={[{ required: false, message: '' }]}
                  className="mb-0"
                  labelCol={{ span: 6 }}
               >
                  <Radio.Group>
                     <Radio value="NORMAL">Энгийн</Radio>
                     <Radio value="VIPER">Хортой</Radio>
                     <Radio value="HARD">Хүнд</Radio>
                  </Radio.Group>
               </Form.Item>
            </Col>
         </Row>
         <Row align="middle" className="mb-1">
            <Col span={12}>
               <Form.Item
                  label="Хаана ямар ажил эрхэлдэг"
                  name={['lifeCondition', 'workCondition', 'locate']}
                  rules={[{ required: false, message: '' }]}
                  className="mb-0"
                  labelCol={{
                     span: 10
                  }}
                  wrapperCol={{
                     span: 12
                  }}
               >
                  <Input
                     size="small"
                     style={{
                        minHeight: INPUT_HEIGHT,
                        padding: 5,
                        height: INPUT_HEIGHT
                     }}
                  />
               </Form.Item>
            </Col>
            <Col span={12}>
               <Form.Item
                  label="Ажлын цаг"
                  name={['lifeCondition', 'workCondition', 'clock']}
                  rules={[{ required: false, message: '' }]}
                  className="mb-0"
                  labelCol={{
                     span: 10
                  }}
                  wrapperCol={{
                     span: 12
                  }}
                  labelAlign="right"
               >
                  <Input
                     size="small"
                     style={{
                        minHeight: INPUT_HEIGHT,
                        padding: 5,
                        height: INPUT_HEIGHT
                     }}
                  />
               </Form.Item>
            </Col>
         </Row>
      </div>
   );
}
