//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Харшил
import React from 'react';
import { Col, Radio, Row, Divider, Input, Form } from 'antd';

export default function Step5() {
   const { TextArea } = Input;

   return (
      <div className="input-panel flex flex-col gap-2">
         <Divider orientation="left" className="text-sm my-2">
            Харшил
         </Divider>
         <div className="flex flex-wrap">
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item label="Ямар нэг зүйлд харшилдаг уу" name={['allergy', 'isAllergy']} className="mb-0">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item label="Хоол хүнс" name={['allergy', 'food']} className="mb-0">
                        <TextArea rows={2} style={{ padding: 2 }} placeholder="Хүнс" />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item label="Эмийн бодис" name={['allergy', 'medicine']} className="mb-0">
                        <TextArea rows={2} style={{ padding: 2 }} placeholder="Эм" />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item label="Бусад" name={['allergy', 'other']} className="mb-0">
                        <TextArea rows={2} style={{ padding: 2 }} placeholder="Бусад бодис" />
                     </Form.Item>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
