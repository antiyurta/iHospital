import React, { Fragment, useEffect, useState } from 'react';
import { Button, Col, Form, Input, InputNumber, Radio, Row, Select } from 'antd';
import healtInsurance from '../../../../../services/healt-insurance/healtInsurance';

const statusOptions = [
   { value: 0, label: 'Идэвхгүй' },
   { value: 1, label: 'Идэвхтэй' }
];

export const SendHospitalInfo = ({ form }) => {
   const [open, setOpen] = useState(false);
   const [hospitals, setHospitals] = useState([]);

   useEffect(() => {
      const getHospitalList = async () => {
         const response = await healtInsurance.getHostpitalOperation();
         if (response.status === 200) {
            setHospitals(response.data.result);
         }
      };
      getHospitalList();
   }, []);

   const renderFormItem = (label, name, rules, component) => (
      <Col span={11} offset={1}>
         <Form.Item name={name} label={label} rules={[{ required: true, message: 'Шаардлагатай талбар!' }, ...rules]}>
            {component || <Input placeholder={label} />}
         </Form.Item>
      </Col>
   );

   return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <Row gutter={6} style={{ width: '100%' }}>
            {renderFormItem('Регистрийн дугаар', 'regNum', [])}
            {renderFormItem('Нэр', 'hospitalName', [])}
            {renderFormItem('Төрөл', 'hospitalType', [])}
            {renderFormItem('Утасны дугаар', 'hsPhone', [])}
            {renderFormItem('Холбоо барих хүний дугаар', 'hsPersonPhone', [])}
            {renderFormItem('Имэйл хаяг', 'hsEmail', [])}
            {renderFormItem('Сошиал хаяг', 'hsSocial', [])}
            {renderFormItem('Хаяг', 'hsAddress', [])}
            {renderFormItem('Өргөрөг', 'hsLat', [], <InputNumber placeholder="-----" />)}
            {renderFormItem('Уртраг', 'hsLng', [], <InputNumber placeholder="-----" />)}
            {renderFormItem('Цагийн хуваарь', 'hsTimetable', [])}
            {renderFormItem('Багтаамж /нийт орны тоо/', 'hsCapacity', [], <InputNumber placeholder="-----" />)}
            {renderFormItem('Танилцуулга', 'hsIntroduction', [])}
            {renderFormItem('Сул орны тоо', 'numberOfBeds', [], <InputNumber placeholder="-----" />)}
            <Col span={11} offset={1}>
               <Form.Item name="hasInsurance" label="ЭМД гэрээтэй эсэх">
                  <Radio.Group>
                     <Radio value={1}>Тийм</Radio>
                     <Radio value={0}>Үгүй</Radio>
                  </Radio.Group>
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item name="hasBranch" label="Салбартай эсэх">
                  <Radio.Group
                     onChange={(e) => {
                        if (e.target.value === 1) {
                           setOpen(true);
                        } else {
                           setOpen(false);
                        }
                     }}
                  >
                     <Radio value={1}>Тийм</Radio>
                     <Radio value={0}>Үгүй</Radio>
                  </Radio.Group>
               </Form.Item>
            </Col>
            {open ? (
               <Form.List name="branchList">
                  {(fields, { add, remove }) => (
                     <>
                        {fields.map(({ key, name }) => (
                           <Fragment key={key}>
                              <Col span={22} offset={1}>
                                 <h1
                                    style={{
                                       fontWeight: 'bold',
                                       fontSize: '20px',
                                       margin: '2rem auto',
                                       textAlign: 'center'
                                    }}
                                 >
                                    Салбарын мэдээлэл
                                 </h1>
                              </Col>
                              {renderFormItem(
                                 'Салбарын дугаар',
                                 [name, 'branchId'],
                                 [],
                                 <InputNumber placeholder="-----" />
                              )}
                              {renderFormItem('Салбарын нэр', [name, 'hospitalName'], [])}
                              {renderFormItem('Салбарын холбогдох утас', [name, 'hsPhone'], [])}
                              {renderFormItem('Холбоо барих хүний дугаар', [name, 'hsPersonPhone'], [])}
                              {renderFormItem('Салбарын имэйл хаяг', [name, 'hshsEmailSocial'], [])}
                              {renderFormItem('Салбарын сошиал хаяг', [name, 'hsSocial'], [])}
                              {renderFormItem('Салбарын хаяг, байршил', [name, 'address'], [])}
                              {renderFormItem(
                                 'Салбарын өргөрөг',
                                 [name, 'hsLat'],
                                 [],
                                 <InputNumber placeholder="-----" />
                              )}
                              {renderFormItem(
                                 'Салбарын уртраг',
                                 [name, 'hsLng'],
                                 [],
                                 <InputNumber placeholder="-----" />
                              )}
                              {renderFormItem('Салбарын цагийн хуваарь', [name, 'hsTimetable'], [])}
                              {renderFormItem(
                                 'Салбарын нийт орны тоо',
                                 [name, 'hsCapacity'],
                                 [],
                                 <InputNumber placeholder="-----" />
                              )}
                           </Fragment>
                        ))}
                        <div style={{ width: '100%', display: 'flex' }}>
                           {fields.length > 0 && (
                              <Col span={11} offset={1}>
                                 <Form.Item style={{ width: 'fit-content', margin: '1rem 0' }}>
                                    <Button
                                       type="dashed"
                                       onClick={() => fields.forEach((field) => remove(field.name))}
                                       style={{ color: 'red', borderColor: 'red' }}
                                    >
                                       Устгах
                                    </Button>
                                 </Form.Item>
                              </Col>
                           )}
                           <Col
                              offset={1}
                              span={fields.length > 0 ? 11 : 22}
                              style={{ display: 'flex', justifyContent: fields.length > 0 && 'flex-end' }}
                           >
                              <Form.Item
                                 style={{ width: 'fit-content', margin: fields.length > 0 ? '1rem 0' : '1rem auto' }}
                              >
                                 <Button type="dashed" onClick={() => add()}>
                                    Салбар нэмэх
                                 </Button>
                              </Form.Item>
                           </Col>
                        </div>
                     </>
                  )}
               </Form.List>
            ) : null}
            <Col span={22} offset={1}>
               <h1
                  style={{
                     fontWeight: 'bold',
                     fontSize: '20px',
                     margin: '2rem auto',
                     textAlign: 'center'
                  }}
               >
                  Үйл ажиллагааны чиглэлийн мэдээлэл
               </h1>
            </Col>
            <Form.List name="operationList">
               {(fields, { add, remove }) => (
                  <>
                     {fields.map(({ key, name }) => (
                        <Fragment key={key}>
                           {renderFormItem(
                              'Үйл ажиллагааны чиглэлийн дугаар',
                              [name, 'id'],
                              [],
                              <Select
                                 allowClear
                                 showSearch
                                 filterOption={(input, option) =>
                                    option.label.toLowerCase().includes(input.toLowerCase())
                                 }
                                 options={hospitals.map((item) => ({
                                    value: Number(item.id),
                                    label: item.name
                                 }))}
                                 placeholder="Сонгох"
                              />
                           )}
                           {renderFormItem(
                              'Төлөв',
                              [name, 'status'],
                              [],
                              <Select
                                 allowClear
                                 showSearch
                                 filterOption={(input, option) =>
                                    option.label.toLowerCase().includes(input.toLowerCase())
                                 }
                                 options={statusOptions}
                                 placeholder="Сонгох"
                              />
                           )}
                        </Fragment>
                     ))}
                     {fields.length > 0 && (
                        <Col span={11} offset={1}>
                           <Form.Item style={{ width: 'fit-content', margin: '1rem 0' }}>
                              <Button
                                 type="dashed"
                                 onClick={() => fields.forEach((field) => remove(field.name))}
                                 style={{ color: 'red', borderColor: 'red' }}
                              >
                                 Устгах
                              </Button>
                           </Form.Item>
                        </Col>
                     )}
                     <Col
                        span={fields.length > 0 ? 11 : 22}
                        offset={1}
                        style={{ display: 'flex', justifyContent: fields.length > 0 && 'flex-end' }}
                     >
                        <Form.Item style={{ width: 'fit-content', margin: fields.length > 0 ? '1rem 0' : '1rem auto' }}>
                           <Button type="dashed" onClick={() => add()}>
                              Мэдээлэл нэмэх
                           </Button>
                        </Form.Item>
                     </Col>
                  </>
               )}
            </Form.List>
         </Row>
      </div>
   );
};

