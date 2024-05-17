//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Өвчний түүх
import React from 'react';
import { Input, Form, Checkbox } from 'antd';
const { TextArea } = Input;
export default function Step2() {
   return (
      <div className="input-panel flex flex-col gap-2">
         <Form.Item className="mb-0" label="Халдварт өвчин" name={['healthRecord', 'contagious']}>
            <Checkbox.Group className="flex flex-col gap-1">
               <Checkbox className="ml-2" value={'MEASLES'}>
                  Улаан бурхан
               </Checkbox>
               <Checkbox value={'VARICELLA'}>Салхин цэцэг</Checkbox>
               <Checkbox value={'AVIRUS'}>Вирус хепатит A</Checkbox>
               <Checkbox value={'BVIRUS'}>Вирус хепатит B</Checkbox>
               <Checkbox value={'CVIRUS'}>Вирус хепатит C</Checkbox>
               <Checkbox value={'TUBERCULOSIS'}>Сүрьеэ</Checkbox>
               <Checkbox value={'OTHER'}>Бусад</Checkbox>
            </Checkbox.Group>
         </Form.Item>
         {/* <Form.Item label="Ужиг өвчин" name={['healthRecord', 'chronic']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item> */}
         <Form.Item label="Осол гэмтэл" name={['healthRecord', 'accidents']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item>
         {/* <Form.Item label="Зүрхний архаг өвчин" name={['healthRecord', 'heartDisease']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item> */}
         <Form.Item label="Артерийн даралт ихсэлт" name={['healthRecord', 'arterialPressure']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item>
         {/* <Form.Item label="Уушгины өвчин" name={['healthRecord', 'pulmonary']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item> */}
         {/* <Form.Item label="Бөөрний өвчин" name={['healthRecord', 'kidnyDisease']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item> */}
         {/* <Form.Item label="Элэгний өвчин" name={['healthRecord', 'hepatopathy']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item> */}
         {/* <Form.Item label="Чихрийн шижин" name={['healthRecord', 'diabetes']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item> */}
         {/* <Form.Item label="Цусны өвчин" name={['healthRecord', 'bloodDisease']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item> */}
         {/* <Form.Item label="Сүрьеэ" name={['healthRecord', 'phthisis']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item> */}
         {/* <Form.Item label="Мэдрэл" name={['healthRecord', 'nerve']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item> */}
         {/* <Form.Item label="Мэс засал" name={['healthRecord', 'surgery']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item> */}
         {/* <Form.Item label="Хавдар" name={['healthRecord', 'turgidity']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item> */}
         {/* <Form.Item label="Удамшил" name={['healthRecord', 'inheritage']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item> */}
         <Form.Item label="Бусад" name={['healthRecord', 'other']} className="mb-0">
            <TextArea rows={5} />
         </Form.Item>
      </div>
   );
}
