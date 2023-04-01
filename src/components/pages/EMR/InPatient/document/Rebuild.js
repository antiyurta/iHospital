import { Button, Form, Input, Radio, Space } from 'antd';
import React, { useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';

function Rebuild({ data }) {
   const printRef = useRef();
   const [form] = Form.useForm();
   const dataConverter = () => {
      const dd = {};
      console.log(JSON.parse(data.pain));
      form.setFieldsValue(JSON.parse(data.pain));
   };
   const onFinish = () => {
      form.validateFields().then((values) => {
         console.log(values);
      });
   };
   // useEffect(() => {
   //     dataConverter();
   // }, [data])
   return (
      <>
         <div ref={printRef}>
            <Form form={form}>
               <p className="text-center">СЭРГЭЭН ЗАСАХЫН ЭМЧИЙН ҮЗЛЭГ</p>
               <Table bordered>
                  <tbody>
                     <tr>
                        <td colSpan={5}>
                           <Form.Item
                              label={<p>Харилцах бэрхшээлтэй эсэх</p>}
                              name={['Ерөнхий', 'Харилцах бэрхшээлтэй эсэх', 0]}
                              className="mb-0"
                           >
                              <Radio.Group>
                                 <Radio value={'Тийм'}>Тийм</Radio>
                                 <Radio value={'Үгүй'}>Үгүй</Radio>
                              </Radio.Group>
                           </Form.Item>
                           <Form.Item
                              label={<p>Залгих чадвар бэрхшээлтэй эсэх</p>}
                              name={[
                                 'Ерөнхий',
                                 'Залгих чадвар бэрхшээлтэй эсэх',
                                 0
                              ]}
                              className="mb-0"
                           >
                              <Radio.Group>
                                 <Radio value={'Тийм'}>Тийм</Radio>
                                 <Radio value={'Үгүй'}>Үгүй</Radio>
                              </Radio.Group>
                           </Form.Item>
                           <p className="pl-4" style={{ fontWeight: 'bold' }}>
                              (Хэрвээ тийм бол хэл засалч бөглөнө)
                           </p>
                           <Form.Item
                              label={
                                 <p>
                                    Танин мэдэхүйн үйл ажиллагаа өөрчлөлттэй
                                    эсэх
                                 </p>
                              }
                              name={[
                                 'Ерөнхий',
                                 'Танин мэдэхүйн үйл ажиллагаа өөрчлөлтэй эсэх',
                                 0
                              ]}
                              className="mb-0"
                           >
                              <Radio.Group>
                                 <Radio value={'Тийм'}>Тийм</Radio>
                                 <Radio value={'Үгүй'}>Үгүй</Radio>
                              </Radio.Group>
                           </Form.Item>
                           <p className="pl-4" style={{ fontWeight: 'bold' }}>
                              (Хэрвээ тийм бол хөдөлмөр засалч бөглөнө)
                           </p>
                        </td>
                     </tr>
                     <tr>
                        <th colSpan={2} className="text-center">
                           Бие ерөнхий байдал
                        </th>
                        <th colSpan={1} className="text-center">
                           Ухаан санаа
                        </th>
                        <th colSpan={2} className="text-center">
                           Арьс салст
                        </th>
                     </tr>
                     <tr>
                        <td colSpan={2}>
                           <Form.Item
                              name={['Ерөнхий', 'Биеийн ерөнхий байдал', 0]}
                              className="mb-0"
                           >
                              <Radio.Group>
                                 <Radio value={'Дунд'}>Дунд</Radio>
                                 <Radio value={'Хүндэвтэр'}>Хүндэвтэр</Radio>
                                 <Radio value={'Хүнд'}>Хүнд</Radio>
                                 <Radio value={'Маш хүнд'}>Маш хүнд</Radio>
                              </Radio.Group>
                           </Form.Item>
                        </td>
                        <td colSpan={1}>
                           <Form.Item
                              name={['Ерөнхий', 'Ухаан санаа', 0]}
                              className="mb-0"
                           >
                              <Radio.Group>
                                 <Radio value={'Саруул'}>Саруул</Radio>
                                 <Radio value={'Бүдгэрсэн'}>Бүдгэрсэн</Radio>
                                 <Radio value={'Ухаангүй'}>Ухаангүй</Radio>
                              </Radio.Group>
                           </Form.Item>
                        </td>
                        <td colSpan={2}>
                           <Form.Item
                              name={['Ерөнхий', 'Арьс салст', 'Арьс салст', 0]}
                              className="mb-0"
                           >
                              <Radio.Group>
                                 <Radio value={'Хэвийн'}>Хэвийн</Radio>
                                 <Radio value={'Хэвийн бус'}>
                                    Хэвийн бус____
                                 </Radio>
                              </Radio.Group>
                           </Form.Item>
                           <Form.Item
                              label={<p>Холголт цооролт</p>}
                              name={[
                                 'Ерөнхий',
                                 'Арьс салст',
                                 'Холголт цооролт',
                                 0
                              ]}
                              className="mb-0"
                           >
                              <Radio.Group>
                                 <div className="inline-flex">
                                    <Radio value={'Тийм'}>Тийм</Radio>
                                    <Radio value={'Үгүй'}>Үгүй</Radio>
                                 </div>
                              </Radio.Group>
                           </Form.Item>
                           <Form.Item
                              label={<p>Тууралт</p>}
                              name={['Ерөнхий', 'Арьс салст', 'Тууралт', 0]}
                              className="mb-0"
                           >
                              <Radio.Group>
                                 <Radio value={'Тийм'}>Тийм</Radio>
                                 <Radio value={'Үгүй'}>Үгүй</Radio>
                              </Radio.Group>
                           </Form.Item>
                           <Form.Item
                              label={<p>Хаван</p>}
                              name={['Ерөнхий', 'Арьс салст', 'Хаван', 0]}
                              className="mb-0"
                           >
                              <Radio.Group>
                                 <Space direction="vertical">
                                    <Radio value={'Тийм'}>Тийм ______</Radio>
                                    <Radio value={'Үгүй'}>Үгүй</Radio>
                                 </Space>
                              </Radio.Group>
                           </Form.Item>
                        </td>
                     </tr>
                     <tr>
                        <th colSpan={5}>Амьсгалын эрхтэн тогтолцоо</th>
                     </tr>
                     <tr>
                        <td>
                           <Form.Item
                              label={<p>Амьсгал 1 минутанд</p>}
                              name={[
                                 'Амьсгалын эрхтэн тогтолцоо',
                                 'Амьсгал 1 минутанд',
                                 0
                              ]}
                              className="mb-0"
                           >
                              <Input />
                           </Form.Item>
                           <p>удаа</p>
                           <Form.Item
                              label={
                                 <div className="grid">
                                    <p>Амьсгалд туслах булчин</p>
                                    <p>оролцож байгаа эсэх:</p>
                                 </div>
                              }
                              name={[
                                 'Амьсгалын эрхтэн тогтолцоо',
                                 'Амьсгалд туслах булчин',
                                 0
                              ]}
                              className="mb-0"
                              labelCol={{ span: 24 }}
                              wrapperCol={{ span: 24 }}
                           >
                              <Radio.Group>
                                 <Radio value={'Тийм'}>Тийм</Radio>
                                 <Radio value={'Үгүй'}>Үгүй</Radio>
                              </Radio.Group>
                           </Form.Item>
                           <Form.Item
                              label={<p>Цээжний хэлбэр:</p>}
                              name={[
                                 'Амьсгалын эрхтэн тогтолцоо',
                                 'Цээжний хэлбэр',
                                 0
                              ]}
                              className="mb-0"
                              labelCol={{ span: 24 }}
                              wrapperCol={{ span: 24 }}
                           >
                              <Radio.Group>
                                 <Radio value={'Зөв'}>Зөв</Radio>
                                 <Radio value={'Эмгэг'}>Эмгэг</Radio>
                              </Radio.Group>
                           </Form.Item>
                           <Form.Item
                              label={<p>Амьсгалын хэлбэр:</p>}
                              name={[
                                 'Амьсгалын эрхтэн тогтолцоо',
                                 'Амьсгалын хэлбэр',
                                 0
                              ]}
                              className="mb-0"
                              labelCol={{ span: 24 }}
                              wrapperCol={{ span: 24 }}
                           >
                              <Radio.Group>
                                 <Radio value={'Цээжний'}>Цээжний</Radio>
                                 <Radio value={'Хэвлийн'}>Хэвлийн</Radio>
                                 <Radio value={'Холимог'}>Холимог</Radio>
                              </Radio.Group>
                           </Form.Item>
                        </td>
                        <td colSpan={2}>
                           <Form.Item
                              label={
                                 <p>
                                    Цээжний 2 тал амьсгалд жигд оролцох байдал:
                                 </p>
                              }
                              name={[
                                 'Амьсгалын эрхтэн тогтолцоо',
                                 'Цээжний 2 тал амьсгалд жигд оролцох байдал',
                                 0
                              ]}
                              className="mb-0"
                              labelCol={{ span: 24 }}
                              wrapperCol={{ span: 24 }}
                           >
                              <Radio.Group>
                                 <Radio value={'Цээжний'}>Жигд</Radio>
                                 <Radio value={'Хэвлийн'}>Хоцорно</Radio>
                              </Radio.Group>
                           </Form.Item>
                           <Form.Item
                              label={<p>Чагналтаар:</p>}
                              name={[
                                 'Амьсгалын эрхтэн тогтолцоо',
                                 'Чагналтаар',
                                 0
                              ]}
                              className="mb-0"
                              labelCol={{ span: 24 }}
                           >
                              <Radio.Group>
                                 <Space direction="vertical">
                                    <Radio value={'Цээжний'}>Цулцангийн</Radio>
                                    <Radio value={'Гуурсан хоолойн'}>
                                       Гуурсан хоолойн
                                    </Radio>
                                    <Radio value={'Ширүүн'}>Ширүүн</Radio>
                                    <Radio value={'Хэржигнүүргүй'}>
                                       Хэржигнүүргүй
                                    </Radio>
                                 </Space>
                                 <Space direction="vertical">
                                    <Radio value={'Хэржигнүүртэй'}>
                                       Хэржигнүүртэй_____________
                                    </Radio>
                                    <Radio value={'Амьсгал сулавтар'}>
                                       Амьсгал сулавтар
                                    </Radio>
                                 </Space>
                              </Radio.Group>
                           </Form.Item>
                        </td>
                     </tr>
                     <tr>
                        <th colSpan={4}>Цусны эргэлтийн тогтолцоо</th>
                     </tr>
                     <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                     </tr>
                  </tbody>
               </Table>
            </Form>
            <Button onClick={() => onFinish()}>EMR хадгалах</Button>
         </div>
      </>
   );
}
export default Rebuild;
