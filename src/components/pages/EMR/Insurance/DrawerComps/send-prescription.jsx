import { Button, Col, Form, Input, InputNumber, Radio, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPatient } from '../../../../../features/patientReducer';
import healthInsurance from '../../../../../services/healt-insurance/healtInsurance';
import patientDiagnose from '../../../../../services/emr/patientDiagnose';
import Finger from '../../../../../features/finger';

const { TextArea } = Input;

const customeBorderStyle = {
   border: '1px solid #ccc',
   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
   padding: '16px'
};

export const SendPrescription = (props) => {
   const { form } = props;
   const patient = useSelector(selectPatient);
   const [diagnosis, setDiagnosis] = useState([]);
   const [tablets, setTablets] = useState([]);
   const getPatientDiagnosis = async () => {
      await patientDiagnose.getByPageFilter({ patientId: patient.id }).then(({ data }) => {
         if (data.success) {
            const diagnosis = data.response.data.map((patientDiagnose) => patientDiagnose.diagnose);
            const uniqueDiagnosis = diagnosis.filter((item, index, self) => {
               const currentIndex = self.findIndex((el) => el.code === item.code);
               return currentIndex === index;
            });
            setDiagnosis(uniqueDiagnosis);
         }
      });
   };
   const getTabletByGroups = async () => {
      await healthInsurance.getTabletByGroups().then((response) => {
         if (response.status == 200) {
            setTablets(response.data);
         }
      });
   };
   const setPatient = () => {
      form.setFieldsValue({
         patient: {
            regNo: patient.registerNumber
         }
      });
   };
   const setTablet = (index, value) => {
      const tablet = tablets.find((tablet) => tablet.tbltId == value);
      form.setFieldsValue({
         ['tablets']: {
            [`${index}`]: {
               name: tablet.tbltNameInter,
               desc: tablet.desc,
               packGroup: tablet.packGroup,
               isDiscount: tablet.isDiscount,
               tbltTypeName: tablet.tbltTypeName
            }
         }
      });
   };
   const setTbltSize = (index) => {
      const dailyCount = form.getFieldValue(['tablets', index, 'dailyCount']);
      const totalDays = form.getFieldValue(['tablets', index, 'totalDays']);
      const tbltSize = dailyCount * totalDays || 0;
      form.setFieldsValue({
         ['tablets']: {
            [`${index}`]: {
               tbltSize: tbltSize
            }
         }
      });
   };
   useEffect(() => {
      setPatient();
      getPatientDiagnosis();
      getTabletByGroups();
   }, []);
   return (
      <>
         <p>Үндсэн мэдээлэл</p>
         <Row>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Жорын төрөл"
                  name={'receiptType'}
                  rules={[
                     {
                        required: true,
                        message: 'Жорын төрөл оруулна уу.'
                     }
                  ]}
               >
                  <Select
                     options={[
                        { value: 1, label: 'Хөнгөлөлттэй эмийн жор' },
                        { value: 2, label: 'Энгийн эмийн жор' },
                        { value: 3, label: 'Сэтгэцэд нөлөөлөх эмийн жор' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Онош"
                  name={'receiptDiag'}
                  rules={[
                     {
                        required: true,
                        message: 'Онош оруулна уу.'
                     }
                  ]}
               >
                  <Select
                     allowClear
                     showSearch
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={diagnosis.map((diagnose) => ({
                        value: diagnose.code,
                        label: `${diagnose.code}-${diagnose.nameMn}`
                     }))}
                  />
               </Form.Item>
            </Col>
            <Col span={23} offset={1}>
               <Form.Item
                  label="Үзлэгийн тэмдэглэл"
                  name="desc"
                  rules={[
                     {
                        required: true,
                        message: 'Үзлэгийн тэмдэглэл оруулна уу.'
                     }
                  ]}
               >
                  <TextArea />
               </Form.Item>
            </Col>
         </Row>
         <p>Өвчтөний мэдээлэл</p>
         <Row>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Регистр"
                  name={['patient', 'regNo']}
                  rules={[
                     {
                        required: true,
                        message: 'Регистр оруулна уу.'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Finger
                  text="Хурууний хээ"
                  isFinger={true}
                  steps={[
                     {
                        title: 'Өвтний',
                        path: 'fingerPrint'
                     }
                  ]}
                  isPatientSheet={false}
                  handleClick={(values) => {
                     form.setFieldsValue({
                        patient: {
                           fingerImage: values.fingerPrint
                        }
                     });
                  }}
               />
               <Form.Item
                  label="Хурууны хээ"
                  name={['patient', 'fingerImage']}
                  rules={[
                     {
                        required: true,
                        message: 'Хурууны хээ оруулна уу.'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
         </Row>
         <p>Эмчийн мэдээлэл</p>
         <Row>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Регистр"
                  name={['doctor', 'regNo']}
                  rules={[
                     {
                        required: true,
                        message: 'Регистр оруулна уу.'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Finger
                  text="Хурууний хээ"
                  isFinger={true}
                  steps={[
                     {
                        title: 'Эмчийн',
                        path: 'fingerPrint'
                     }
                  ]}
                  isPatientSheet={false}
                  handleClick={(values) => {
                     form.setFieldsValue({
                        doctor: {
                           fingerImage: values.fingerPrint
                        }
                     });
                  }}
               />
               <Form.Item
                  label="Хурууны хээ"
                  name={['doctor', 'fingerImage']}
                  rules={[
                     {
                        required: true,
                        message: 'Хурууны хээ оруулна уу.'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
         </Row>
         <p>Үзлэгийн мэдээлэл</p>
         <Row>
            <Col span={5} offset={1}>
               <Form.Item label="Өндөр" name={['survey', 'heigth']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Жин" name={['survey', 'weigth']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Бүсэлхий" name={['survey', 'waist']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Зүрхний цохилт" name={['survey', 'pulse']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Амьсгалын тоо" name={['survey', 'breath']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Темп" name={['survey', 'temp']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Сатураци">
                  <Input />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Сахар" name={['survey', 'sugar']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Холестерин" name={['survey', 'cholesterol']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Даралт дээд" name={['survey', 'maxPressure']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Даралт доод" name={['survey', 'minPressure']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Тамхи татдаг эсэх" name={['survey', 'isSmoke']}>
                  <Input />
               </Form.Item>
            </Col>
         </Row>
         <p>Жорын мэдээлэл</p>
         <Form.List name="tablets">
            {(fields, { add, remove }) => (
               <>
                  {fields.map(({ key, name }) => (
                     <Row key={key} style={customeBorderStyle}>
                        <Button
                           type="dashed"
                           danger
                           onClick={() => {
                              remove(name);
                           }}
                           style={{ width: '100%' }}
                        >
                           Жорын мэдээлэл устгах
                        </Button>
                        <Col span={7} offset={1}>
                           <Form.Item label="Бичлэг таних дугаар" name={[name, 'tbltId']}>
                              <Select
                                 allowClear
                                 showSearch
                                 filterOption={(input, option) =>
                                    option.label.toLowerCase().includes(input.toLowerCase())
                                 }
                                 options={tablets.map((tablet) => ({
                                    value: tablet.tbltId,
                                    label: tablet.tbltNameInter
                                 }))}
                                 onSelect={(value) => {
                                    setTablet(name, value);
                                 }}
                              />
                           </Form.Item>
                           <Form.Item label="Эмийн олон улсын нэршил" name={[name, 'name']} hidden>
                              <Input />
                           </Form.Item>
                           <Form.Item label="Эмийн бүлгийн дугаар" name={[name, 'packGroup']} hidden>
                              <InputNumber />
                           </Form.Item>
                        </Col>
                        <Col span={7} offset={1}>
                           <Form.Item label="Хөнгөлөлттэй эсэх" name={[name, 'isDiscount']}>
                              <Radio.Group disabled>
                                 <Radio value={1}>Тийм</Radio>
                                 <Radio value={0}>Үгүй</Radio>
                              </Radio.Group>
                           </Form.Item>
                        </Col>
                        <Col span={7} offset={1}>
                           <Form.Item label="Эмийн савлагааны төрөл" name={[name, 'tbltTypeName']}>
                              <Input disabled />
                           </Form.Item>
                        </Col>
                        <Col span={11} offset={1}>
                           <Form.Item label="Өвчний ОУ-ын ангиллын код" name={[name, 'icdCode']}>
                              <Select
                                 allowClear
                                 showSearch
                                 filterOption={(input, option) =>
                                    option.label.toLowerCase().includes(input.toLowerCase())
                                 }
                                 options={diagnosis.map((diagnose) => ({
                                    value: diagnose.code,
                                    label: `${diagnose.code}-${diagnose.nameMn}`
                                 }))}
                              />
                           </Form.Item>
                        </Col>
                        <Col span={11} offset={1}>
                           <Form.Item label="Эмийн тэмдэглэл" name={[name, 'desc']}>
                              <TextArea />
                           </Form.Item>
                        </Col>
                        <Col span={7} offset={1}>
                           <Form.Item label="Өдөрт уух хэмжээ" name={[name, 'dailyCount']}>
                              <InputNumber />
                           </Form.Item>
                        </Col>
                        <Col span={7} offset={1}>
                           <Form.Item label="Нийт уух өдөр" name={[name, 'totalDays']}>
                              <InputNumber onChange={() => setTbltSize(name)} />
                           </Form.Item>
                        </Col>
                        <Col span={7} offset={1}>
                           <Form.Item
                              tooltip={'Өдөрт уух хэмжээ * Нийт уух өдөр'}
                              label="Нийт уух ширхгийн тоо"
                              name={[name, 'tbltSize']}
                           >
                              <InputNumber disabled />
                           </Form.Item>
                        </Col>
                     </Row>
                  ))}
                  <Form.Item>
                     <Button
                        type="dashed"
                        onClick={() => {
                           add();
                        }}
                        style={{ width: '100%' }}
                     >
                        Жорын мэдээлэл нэмэх
                     </Button>
                  </Form.Item>
               </>
            )}
         </Form.List>
      </>
   );
};

