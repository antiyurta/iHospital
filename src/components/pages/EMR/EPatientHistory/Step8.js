//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Удамшлын асуумж
import React from 'react';
import { Col, Row, Divider, Form, Radio } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

export default function Step8() {
   return (
      <div>
         <Divider orientation="left" className="text-sm my-2">
            Удамшлын асуумж
         </Divider>
         <Row align="middle" className="mb-1">
            <Col span={24} className="text-left">
               <Form.Item
                  label="Удамд ижил өвчтэй хүн байсан уу"
                  name={['geneticQuestion', 'painDesc']}
                  rules={[{ required: false, message: '' }]}
                  className="mb-0"
                  wrapperCol={{
                     span: 10
                  }}
                  labelCol={{
                     span: 14
                  }}
               >
                  <Radio.Group>
                     <Radio value={true}>Тийм</Radio>
                     <Radio value={false}>Үгүй</Radio>
                  </Radio.Group>
               </Form.Item>
            </Col>
         </Row>
         <Row align="middle" className="mb-1">
            <Col span={24} className="text-left">
               <Form.Item
                  label="Удамшлын өвчинүүд"
                  name={['geneticQuestion', 'geneticPainDesc']}
                  rules={[{ required: false, message: '' }]}
                  className="mb-0"
                  wrapperCol={{
                     span: 10
                  }}
                  labelCol={{
                     span: 14
                  }}
               >
                  <TextArea />
               </Form.Item>
            </Col>
         </Row>
      </div>
   );
}
