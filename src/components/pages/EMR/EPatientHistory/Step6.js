//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Эмийн хэрэглээ
import React from 'react';
import { Row, Input, Form, Col } from 'antd';

export default function Step6() {
   const { TextArea } = Input;

   return (
      <div>
         <Row align="middle" className="mb-1">
            <Col span={24}>
               <Form.Item name="usuallyMedicine" className="mb-0">
                  <TextArea
                     placeholder="Эмийн хэрэглээ"
                     rows={3}
                     style={{ padding: 2 }}
                  />
               </Form.Item>
            </Col>
         </Row>
      </div>
   );
}
