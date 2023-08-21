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
         <div className="flex flex-wrap">
            <div className="md:w-1/3 sm:w-full p-1">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Удамд ижил өвчтэй хүн байсан уу"
                        name={['geneticQuestion', 'isPain']}
                        className="mb-0"
                     >
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/3 sm:w-full p-1">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Удамшлын өвчинүүд"
                        name={['geneticQuestion', 'geneticPainDesc']}
                        className="mb-0"
                     >
                        <TextArea />
                     </Form.Item>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
