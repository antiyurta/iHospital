//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Амьдралын хэв маяг
import React from 'react';
import { Col, Radio, Row, Divider, Input, Form } from 'antd';
import { INPUT_HEIGHT } from '../../../../constant';

export default function Step3() {
   return (
      <div>
         <Divider orientation="left" className="text-sm my-2">
            Архи
         </Divider>
         <div className="flex flex-wrap">
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Архи хэрэглэдэг эсэх"
                        name={['lifeStyle', 'alcohol', 'isUse']}
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
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Хэр удаан"
                        name={['lifeStyle', 'alcohol', 'howLong']}
                        className="mb-0"
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
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Ямар архи"
                        name={['lifeStyle', 'alcohol', 'whatAlc']}
                        className="mb-0"
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
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Нэг удаа хэрэглэх хэмжээ"
                        name={['lifeStyle', 'alcohol', 'size']}
                        className="mb-0"
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
                  </div>
               </div>
            </div>
         </div>
         <Divider orientation="left" className="text-sm my-2">
            Тамхи
         </Divider>
         <div className="flex flex-wrap">
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Тамхи хэрэглэдэг эсэх"
                        name={['lifeStyle', 'cigar', 'isUse']}
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
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Хэдэн наснаас эхэлж татсан"
                        name={['lifeStyle', 'cigar', 'fromAge']}
                        className="mb-0"
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
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Хэдэн жил татаж байгаа"
                        name={['lifeStyle', 'cigar', 'usedYear']}
                        className="mb-0"
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
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Нэг удаа хэрэглэх хэмжээ"
                        name={['lifeStyle', 'alcohol', 'size']}
                        className="mb-0"
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
                  </div>
               </div>
            </div>
         </div>
         <Divider orientation="left" className="text-sm my-2">
            Донтолт
         </Divider>
         <div className="flex flex-wrap">
            <div className="md:w-1/2 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Ямар нэг мансууруулах бодис, эм, химийн бодис хэрэглэдэг үү /
            донтдог уу"
                        name={['lifeStyle', 'addicition', 'isUse']}
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
            <div className="md:w-1/2 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Хэрэглэхгүй удвал түүнийгээ үгүйлдэг үү/ нэхдэг үү"
                        name={['lifeStyle', 'addicition', 'isLong']}
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
         <Divider orientation="left" className="text-sm my-2">
            Хоол
         </Divider>
         <div className="flex flex-wrap">
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Ямар хоолтон"
                        name={['lifeStyle', 'food', 'whatFoodie']}
                        className="mb-0"
                     >
                        <Radio.Group>
                           <Radio value="0">Ердийн</Radio>
                           <Radio value="1">Цагаан</Radio>
                           <Radio value="2">Бусад</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Өдөрт хэд хооллодог"
                        name={['lifeStyle', 'food', 'dayEatCount']}
                        className="mb-0"
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
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Ямар төрлийн хоол голдуу хэрэглэдэг"
                        name={['lifeStyle', 'food', 'eatFoodType']}
                        className="mb-0"
                     >
                        <Radio.Group>
                           <Radio value="0">Хуурсан</Radio>
                           <Radio value="1">Шөлтэй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
            <div className="md:w-1/4 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Ихэвчлэн хаана хооллодог"
                        name={['lifeStyle', 'food', 'usuallyEat']}
                        className="mb-0"
                     >
                        <Radio.Group>
                           <Radio value="0">Гэртээ</Radio>
                           <Radio value="1">Гадуур</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
               </div>
            </div>
         </div>
         <Divider orientation="left" className="text-sm my-2">
            Дасгал хөдөлгөөн
         </Divider>
         <div className="flex flex-wrap">
            <div className="md:w-1/3 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Дасгал хөдөлгөөн тогтмол хийдэг үү"
                        name={['lifeStyle', 'exercise', 'isUse']}
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
                     <Form.Item
                        label="Нэг удаад ямар хугацаанд"
                        name={['lifeStyle', 'exercise', 'oneTime']}
                        className="mb-0"
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
                  </div>
               </div>
            </div>
            <div className="md:w-1/3 sm:w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Долоо хоногт хэдэн удаа"
                        name={['lifeStyle', 'exercise', 'weeklyCount']}
                        className="mb-0"
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
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
