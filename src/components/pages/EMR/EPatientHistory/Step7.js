//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Тархвар зүйн асуумж
import React from 'react';
import { Col, Radio, Row, Divider, Input, Form } from 'antd';

export default function Step7() {
   const { TextArea } = Input;
   return (
      <div>
         <Divider orientation="left" className="text-sm my-2">
            Аялал / Цус цусан бүтээгдэхүүн ба эрхтэн шилжүүлэг
         </Divider>
         <div className="flex flex-wrap">
            <div className="md:w-1/3 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Сүүлийн 3-6 сарын дотор гадны улсад зорчсон уу"
                        name={['epidemicQuestion', 'isTravel']}
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
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item label="" name={['epidemicQuestion', 'travelDesc']} className="mb-0">
                        <TextArea rows={3} style={{ padding: 2 }} placeholder="Ямар зорилгоор" />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/3 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Сүүлийн 3-6 сарын дотор цус цусан бүтээгдэхүүн сэлбүүлсэн үү"
                        name={['epidemicQuestion', 'isUseBlood']}
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
         </div>
      </div>
   );
}
