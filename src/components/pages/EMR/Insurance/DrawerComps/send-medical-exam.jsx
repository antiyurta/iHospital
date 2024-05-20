import React, { Fragment } from 'react';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { renderFormItem } from '../utils';

export const diagnosisOptions = [
   { value: 1, label: 'Дүрс оношлогоо дүгнэлт' },
   { value: 2, label: 'Шинжилгээ' },
   { value: 3, label: 'Үзлэгийн бүртгэл' },
   { value: 4, label: 'Дүрс оношлогоо зураг' }
];

const defaultPlaceholder = '- - - - -';

export const SendMedicalExam = () => {
   return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <Row gutter={6} style={{ width: '100%' }}>
            {renderFormItem('Иргэний регистр', 'regNum', [], <Input placeholder="Иргэний регистр оруулах..." />, 22)}
            <Col span={22} offset={1}>
               <h1
                  style={{
                     fontWeight: 'bold',
                     fontSize: '20px',
                     margin: '2rem auto',
                     textAlign: 'center'
                  }}
               >
                  Тусламж, үйлчилгээ нэмэх
               </h1>
            </Col>
            <Form.List name="links">
               {(fields, { add, remove }) => (
                  <>
                     {fields.map(({ key, name }) => (
                        <Fragment key={key}>
                           {renderFormItem(
                              'Тусламж, үйлчилгээний дугаар',
                              [name, 'serviceId'],
                              [],
                              <Input placeholder={defaultPlaceholder} />
                           )}
                           {renderFormItem(
                              'Тусламж, үйлчилгээний нэр',
                              [name, 'serviceName'],
                              [],
                              <Input placeholder={defaultPlaceholder} />
                           )}
                           {renderFormItem('Огноо', [name, 'indate'], [], <Input placeholder={defaultPlaceholder} />)}
                           {renderFormItem(
                              'Үйлчилгээний төрөл сонгох',
                              [name, 'type'],
                              [],
                              <Select
                                 allowClear
                                 showSearch
                                 filterOption={(input, option) =>
                                    option.label.toLowerCase().includes(input.toLowerCase())
                                 }
                                 options={diagnosisOptions}
                                 placeholder="Сонгох"
                              />
                           )}
                           {renderFormItem(
                              'Холбоос',
                              [name, 'link'],
                              [],
                              <Input placeholder={'https://example.com'} />
                           )}
                        </Fragment>
                     ))}
                     <div style={{ width: '100%', display: 'flex' }}>
                        {fields.length > 0 && (
                           <Col span={11} offset={1} style={{ display: 'flex', alignItems: 'flex-end' }}>
                              <Form.Item style={{ width: 'fit-content' }}>
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
                           <Form.Item
                              style={{ width: 'fit-content', margin: fields.length > 0 ? '1rem 0' : '1rem auto' }}
                           >
                              <Button type="dashed" onClick={() => add()}>
                                 Мэдээлэл нэмэх
                              </Button>
                           </Form.Item>
                        </Col>
                     </div>
                  </>
               )}
            </Form.List>
         </Row>
      </div>
   );
};

