//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Амьдралын нөхцөл
import React from 'react';
import { Col, Radio, Row, Divider, Input, Form } from 'antd';

export default function Step4() {
   return (
      <div>
         <Divider orientation="left" className="text-sm my-2">
            Ахуйн нөхцөл / Ажлын нөхцөл
         </Divider>
         <div className="flex flex-wrap">
            <div className="md:w-1/5 sm:w-full p-1">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Хаана амьдардаг вэ"
                        name={['lifeCondition', 'homeCondition', 'locate']}
                        className="mb-0"
                     >
                        <Radio.Group>
                           <Radio value="APARTMENT">Орон сууц</Radio>
                           <Radio value="GER">Гэр хороолол</Radio>
                           <Radio value="HOUSE">Хувийн орон сууц</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/5 sm:w-full p-1">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Гэрлэлтийн байдал"
                        name={['lifeCondition', 'homeCondition', 'isMarried']}
                        className="mb-0"
                     >
                        <Radio.Group>
                           <Radio value={true}>Гэрлэсэн</Radio>
                           <Radio value={false}>Гэрлээгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/5 sm:w-full p-1">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Ажлын нөхцөл"
                        name={['lifeCondition', 'workCondition', 'condition']}
                        className="mb-0"
                     >
                        <Radio.Group>
                           <Radio value="NORMAL">Энгийн</Radio>
                           <Radio value="VIPER">Хортой</Radio>
                           <Radio value="HARD">Хүнд</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/5 sm:w-full p-1">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Хаана ямар ажил эрхэлдэг"
                        name={['lifeCondition', 'workCondition', 'locate']}
                        className="mb-0"
                     >
                        <Input size="small" />
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/5 sm:w-full p-1">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item label="Ажлын цаг" name={['lifeCondition', 'workCondition', 'clock']} className="mb-0">
                        <Input size="small" />
                     </Form.Item>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
