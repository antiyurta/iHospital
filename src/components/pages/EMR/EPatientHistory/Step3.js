//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Амьдралын хэв маяг
import React from 'react';
import { Col, Radio, Row, Divider, Input, Form, InputNumber } from 'antd';
import { checkNumber } from '../../../comman';

export default function Step3() {
   return (
      <div
         className="flex flex-col gap-2"
         style={{
            height: 260,
            overflow: 'auto'
         }}
      >
         <Divider orientation="left" className="text-sm my-2">
            Архи
         </Divider>
         <Form.Item label="Архи хэрэглэдэг эсэх" name={['lifeStyle', 'alcohol', 'isUse']} className="mb-0">
            <Radio.Group className="flex flex-col gap-1">
               <Radio value={true}>Тийм</Radio>
               <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
         </Form.Item>
         <Form.Item label="Хэр удаан(Cар)" name={['lifeStyle', 'alcohol', 'howLong']} className="mb-0">
            <Input size="small" />
         </Form.Item>
         <Form.Item label="Ямар архи" name={['lifeStyle', 'alcohol', 'whatAlc']} className="mb-0">
            <Input size="small" />
         </Form.Item>
         <Form.Item label="Нэг удаа хэрэглэх хэмжээ" name={['lifeStyle', 'alcohol', 'size']} className="mb-0">
            <Input size="small" />
         </Form.Item>
         <Divider orientation="left" className="text-sm my-2">
            Тамхи
         </Divider>
         <Form.Item label="Тамхи хэрэглэдэг эсэх" name={['lifeStyle', 'cigar', 'isUse']} className="mb-0">
            <Radio.Group className="flex flex-col gap-1">
               <Radio value={true}>Тийм</Radio>
               <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
         </Form.Item>
         <Form.Item label="Хэдэн наснаас эхэлж татсан" name={['lifeStyle', 'cigar', 'fromAge']} className="mb-0">
            <Input size="small" />
         </Form.Item>
         <Form.Item label="Хэдэн жил татаж байгаа" name={['lifeStyle', 'cigar', 'usedYear']} className="mb-0">
            <Input size="small" />
         </Form.Item>
         <Divider orientation="left" className="text-sm my-2">
            Донтолт
         </Divider>
         <Form.Item
            label="Ямар нэг мансууруулах бодис, эм, химийн бодис хэрэглэдэг үү /
            донтдог уу"
            name={['lifeStyle', 'addicition', 'isUse']}
            className="mb-0"
         >
            <Radio.Group className="flex flex-col gap-1">
               <Radio value={true}>Тийм</Radio>
               <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
         </Form.Item>
         <Form.Item
            label="Хэрэглэхгүй удвал түүнийгээ үгүйлдэг үү/ нэхдэг үү"
            name={['lifeStyle', 'addicition', 'isLong']}
            className="mb-0"
         >
            <Radio.Group className="flex flex-col gap-1">
               <Radio value={true}>Тийм</Radio>
               <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
         </Form.Item>
         <Divider orientation="left" className="text-sm my-2">
            Хоол
         </Divider>
         <Form.Item label="Ямар хоолтон" name={['lifeStyle', 'food', 'whatFoodie']} className="mb-0">
            <Radio.Group className="flex flex-col gap-1">
               <Radio value="0">Ердийн</Radio>
               <Radio value="1">Цагаан</Radio>
               <Radio value="2">Бусад</Radio>
            </Radio.Group>
         </Form.Item>
         <Form.Item label="Өдөрт хэд хооллодог" name={['lifeStyle', 'food', 'dayEatCount']} className="mb-0">
            <InputNumber onKeyPress={checkNumber} size="small" />
         </Form.Item>
         <Form.Item
            label="Ямар төрлийн хоол голдуу хэрэглэдэг"
            name={['lifeStyle', 'food', 'eatFoodType']}
            className="mb-0"
         >
            <Radio.Group className="flex flex-col gap-1">
               <Radio value="0">Хуурсан</Radio>
               <Radio value="1">Шөлтэй</Radio>
            </Radio.Group>
         </Form.Item>
         <Form.Item label="Ихэвчлэн хаана хооллодог" name={['lifeStyle', 'food', 'usuallyEat']} className="mb-0">
            <Radio.Group className="flex flex-col gap-1">
               <Radio value="0">Гэртээ</Radio>
               <Radio value="1">Гадуур</Radio>
            </Radio.Group>
         </Form.Item>
         <Divider orientation="left" className="text-sm my-2">
            Дасгал хөдөлгөөн
         </Divider>
         <Form.Item
            label="Дасгал хөдөлгөөн тогтмол хийдэг үү"
            name={['lifeStyle', 'exercise', 'isUse']}
            className="mb-0"
         >
            <Radio.Group className="flex flex-col gap-1">
               <Radio value={true}>Тийм</Radio>
               <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
         </Form.Item>
         <Form.Item label="Нэг удаад ямар хугацаанд" name={['lifeStyle', 'exercise', 'oneTime']} className="mb-0">
            <Input size="small" />
         </Form.Item>
         <Form.Item label="Долоо хоногт хэдэн удаа" name={['lifeStyle', 'exercise', 'weeklyCount']} className="mb-0">
            <Input size="small" />
         </Form.Item>
      </div>
   );
}
