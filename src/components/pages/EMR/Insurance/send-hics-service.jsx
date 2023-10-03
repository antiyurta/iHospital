import { Button, Col, DatePicker, Divider, Form, Input, InputNumber, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import healthInsurance from '../../../../services/healt-insurance/healtInsurance';
import { selectPatient } from '../../../../features/patientReducer';
import { useSelector } from 'react-redux';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import patientDiagnose from '../../../../services/emr/patientDiagnose';
import TextArea from 'antd/lib/input/TextArea';
const SendHics = (props) => {
   const { form } = props;
   const [sealServices, setSealServices] = useState([]);
   const [drgCodes, setDrgCodes] = useState([]);
   const [diagnosis, setDiagnosis] = useState([]);
   const [exams, setExams] = useState([]);
   const patient = useSelector(selectPatient);
   const formInsurance = () => {
      form.setFieldsValue({
         patientRegno: patient.registerNumber,
         patientFirstname: patient.firstName,
         patientLastname: patient.lastName
      });
   };
   const customeBorderStyle = {
      border: '1px solid #ccc',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '16px'
   };
   const getPatientData = async () => {
      await healthInsurance.getPatientData(patient.registerNumber).then(({ data }) => {
         if (data.code == 200) {
            const details = data.result.details;
            setSealServices(details.filter((detail) => detail.statusCode == 5));
         }
      });
   };
   const getDrgCodes = async () => {
      await healthInsurance.drgCode().then(({ data }) => {
         if (data.code == 200) {
            setDrgCodes(data.result);
         }
      });
   };
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
   const getExams = async () => {
      await healthInsurance.getHicsExam().then(({ data }) => {
         if (data.code == 200) {
            setExams(data.result.filter((result) => result.serviceId == 20120));
         }
      });
   };
   const getCosts = async (serviceId, icdCode) => {
      return await healthInsurance.getHicsCostByField(serviceId, icdCode).then(({ data }) => data.result);
   };
   const setIsBold = async (paymentIndex, serviceIndex, value) => {
      const hicsServiceId = form.getFieldValue([
         'payments',
         `${paymentIndex}`,
         'serviceList',
         `${serviceIndex}`,
         'hicsServiceId'
      ]);
      const icdCode = form.getFieldValue([
         'payments',
         `${paymentIndex}`,
         'serviceList',
         `${serviceIndex}`,
         'diagnosis',
         'icdCode'
      ]);
      const costs = await getCosts(hicsServiceId, icdCode);
      const discountAmount = 0;
      const totalAmount = 0;
      if (value == 1 && hicsServiceId == 20200) {
         discountAmount += costs[0].amountHi + 50000;
         totalAmount += costs[0].amountTotal + 50000;
      } else {
         discountAmount += costs[0].amountHi;
         totalAmount += costs[0].amountTotal;
      }
      form.setFieldsValue({
         ['payments']: {
            [`${paymentIndex}`]: {
               ['serviceList']: {
                  [`${serviceIndex}`]: {
                     discountAmount: costs[0].amountHi + 50000,
                     totalAmount: costs[0].amountTotal + 50000
                  }
               }
            }
         }
      });
   };
   const fieldService = async (paymentIndex, serviceIndex, serviceNumber) => {
      const service = sealServices.find((sealService) => sealService.serviceNumber == serviceNumber);
      const costs = await getCosts(service.serviceId, service.icdCode);
      form.setFieldsValue({
         ['payments']: {
            [`${paymentIndex}`]: {
               ['serviceList']: {
                  [`${serviceIndex}`]: {
                     startDate: moment(service.inDateStr),
                     endDate: moment(service.outDateStr),
                     hicsServiceId: service.serviceId,
                     pregnantWeek: service.pregnantWeek,
                     diagnosis: {
                        icdCode: service.icdCode,
                        icdCodeName: service.icdCodeName,
                        icd9Code: service.icd9Code,
                        drgCode: service.drgCode
                     },
                     payedAmount: costs[0].amountCit,
                     discountAmount: costs[0].amountHi,
                     totalAmount: costs[0].amountTotal
                  }
               }
            }
         }
      });
   };
   useEffect(() => {
      formInsurance();
      getPatientData();
      getDrgCodes();
      getPatientDiagnosis();
      getExams();
   }, []);
   return (
      <>
         <p>Өвчтөний мэдээлэл</p>
         <Row>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Регистр"
                  name="patientRegno"
                  rules={[
                     {
                        required: true,
                        message: 'Регистр оруулна уу'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Өвчтөний нэр"
                  name="patientFirstname"
                  rules={[
                     {
                        required: true,
                        message: 'Өвчтөний нэр'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Өвчтөний овог"
                  name="patientLastname"
                  rules={[
                     {
                        required: true,
                        message: 'Өвчтөний овог'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={23} offset={1}>
               <Form.Item
                  label="Хурууны хээ"
                  name="patientFingerprint"
                  rules={[
                     {
                        required: true,
                        message: 'Хурууны хээ оруулна уу'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
         </Row>
         <p>Төлбөрийн мэдээлэл</p>
         <Form.List name="payments">
            {(fields, { add, remove }) => (
               <>
                  {fields.map(({ key, name }, paymentIndex) => (
                     <Row key={key} style={customeBorderStyle}>
                        <Button
                           type="dashed"
                           danger
                           icon={<MinusCircleOutlined />}
                           onClick={() => {
                              remove(name);
                           }}
                           style={{ width: '100%' }}
                        >
                           Төлбөрийн мэдээлэл устгах
                        </Button>
                        <Col span={23} offset={1}>
                           <Form.List name={[name, 'serviceList']}>
                              {(fields, { add, remove }) => (
                                 <>
                                    {fields.map(({ key, name }, serviceIndex) => (
                                       <Row key={key} style={customeBorderStyle}>
                                          <Button
                                             type="dashed"
                                             danger
                                             icon={<MinusCircleOutlined />}
                                             onClick={() => {
                                                remove(name);
                                             }}
                                             style={{ width: '100%' }}
                                          >
                                             Үйлчилгээний мэдээлэл устгах
                                          </Button>
                                          <Form.Item
                                             label="Битүүмжит үйлчилгээ"
                                             name={[name, 'service']}
                                             style={{ width: '100%' }}
                                          >
                                             <Select
                                                options={sealServices.map((service) => ({
                                                   value: service.serviceNumber,
                                                   label: `${service.inDateStr} - ${service.serviceName} - ${service.icdCode}`
                                                }))}
                                                onSelect={(value) => {
                                                   fieldService(paymentIndex, serviceIndex, value);
                                                }}
                                             />
                                          </Form.Item>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="Эхлэх огноо" name={[name, 'startDate']}>
                                                <DatePicker />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="Дуусах огноо" name={[name, 'endDate']}>
                                                <DatePicker />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="Үйлчилгээний дугаар" name={[name, 'hicsServiceId']}>
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                label="Эцэг үйлчилгээний дугаар"
                                                name={[name, 'parentServiceNumber']}
                                                tooltip="/Энэхүү дугаар нь үйлчилгээг хадгалсны дараа өмнө дугаарыг эцэг болгож, child бичлэг илгээх үед ашиглагдана/"
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                label="Эмчийн үзлэгийн дугаар"
                                                name={[name, 'doctorServiceNumber']}
                                                tooltip="/Эмч үзлэг хийж илгээх бүртгэл хийсэн үед ашиглагдана. Энэхүү дугаарыг одоогоор явуулахгүй байж болно/"
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="Кабинет дугаар" name={[name, 'departNo']}>
                                                <InputNumber />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="Кабинет нэр" name={[name, 'departName']}>
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="Хөнгөлсөн дүн" name={[name, 'discountAmount']}>
                                                <InputNumber />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="Иргэн төлсөн дүн" name={[name, 'payedAmount']}>
                                                <InputNumber />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="Нийт дүн" name={[name, 'totalAmount']}>
                                                <InputNumber />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                label="Тодосгогч ашигласан эсэх"
                                                name={[name, 'isBold']}
                                                tooltip="Энэхүү талбар нь зөвхөн өндөр өртөгт CT, MRI дээр тодосгогч ашигласан эсэх дээр ашиглагдана."
                                             >
                                                <Select
                                                   onSelect={(value) => setIsBold(paymentIndex, serviceIndex, value)}
                                                   options={[
                                                      { value: 1, label: 'Тийм' },
                                                      { value: 0, label: 'Үгүй' }
                                                   ]}
                                                />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="Жирэмсний 7 хоногийн тоо" name={[name, 'pregnantWeek']}>
                                                <InputNumber />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="Оношийн код" name={[name, 'diagnosis', 'icdCode']}>
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
                                             <Form.Item label="Оношийн нэр" name={[name, 'diagnosis', 'icdCodeName']}>
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                label="Оношийн код-2"
                                                name={[name, 'diagnosis', 'icdCode1']}
                                                tooltip="/хос онош илгээх Т.Ү дээр/"
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="Оношийн бүлэг" name={[name, 'diagnosis', 'icdGroup']}>
                                                <InputNumber />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                label="Оношийн бүлгийн нэр"
                                                name={[name, 'diagnosis', 'icdGroupName']}
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                label="Хавсарсан оношийн код"
                                                name={[name, 'diagnosis', 'icdAddCode']}
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                label="Хавсарсан оношийн нэр"
                                                name={[name, 'diagnosis', 'icdAddName']}
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="ICD-9 код" name={[name, 'diagnosis', 'icd9Code']}>
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="ICD-9 нэр" name={[name, 'diagnosis', 'icd9Name']}>
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item label="Хүндрэлийн зэрэг" name={[name, 'diagnosis', 'abcType']}>
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                label="Оношийн хамааралтай бүлэг"
                                                name={[name, 'diagnosis', 'drgCode']}
                                             >
                                                <Select
                                                   allowClear
                                                   showSearch
                                                   filterOption={(input, option) =>
                                                      option.label.toLowerCase().includes(input.toLowerCase())
                                                   }
                                                   options={drgCodes.map((drgCode) => ({
                                                      value: drgCode.drgCode,
                                                      label: drgCode.drgName
                                                   }))}
                                                />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                label="Үзлэгийн тэмдэглэл"
                                                name={[name, 'diagnosis', 'description']}
                                             >
                                                <TextArea />
                                             </Form.Item>
                                          </Col>
                                          <p>Багцийн мэдээлэл</p>
                                          <Form.List name="packages">
                                             {(fields, { add, remove }) => (
                                                <>
                                                   {fields.map(({ key, name }) => (
                                                      <Row key={key} style={customeBorderStyle}>
                                                         <Button
                                                            type="dashed"
                                                            danger
                                                            icon={<MinusCircleOutlined />}
                                                            onClick={() => {
                                                               remove(name);
                                                            }}
                                                            style={{ width: '100%' }}
                                                         >
                                                            Багцийн мэдээлэл устгах
                                                         </Button>
                                                         <Col span={11} offset={1}>
                                                            <Form.Item
                                                               label="Огноо"
                                                               name={[name, 'packages', 'inDate']}
                                                            >
                                                               <DatePicker />
                                                            </Form.Item>
                                                         </Col>
                                                         <Col span={11} offset={1}>
                                                            <Form.Item
                                                               label="ICD-10 код"
                                                               name={[name, 'packages', 'icd10']}
                                                            >
                                                               <Select
                                                                  options={diagnosis.map((diagnose) => ({
                                                                     value: diagnose.code,
                                                                     label: `${diagnose.code}-${diagnose.nameMn}`
                                                                  }))}
                                                               />
                                                            </Form.Item>
                                                         </Col>
                                                         <Col span={11} offset={1}>
                                                            <Form.Item
                                                               label="ICD-9 код"
                                                               name={[name, 'packages', 'icd9']}
                                                            >
                                                               <Input />
                                                            </Form.Item>
                                                         </Col>
                                                         <Col span={11} offset={1}>
                                                            <Form.Item
                                                               label="Багцийн дугаар"
                                                               name={[name, 'packages', 'packId']}
                                                            >
                                                               <Select
                                                                  options={[
                                                                     { value: 1, label: 'Анхан үзлэг' },
                                                                     { value: 2, label: 'Оношилгоо шинжилгээ' },
                                                                     { value: 3, label: 'Давтан үзлэг' }
                                                                  ]}
                                                               />
                                                            </Form.Item>
                                                         </Col>
                                                         <Col span={11} offset={1}>
                                                            <Form.Item
                                                               label="Оношилгоо, шинжилгээний код"
                                                               name={[name, 'packages', 'examCode']}
                                                            >
                                                               <Select
                                                                  allowClear
                                                                  showSearch
                                                                  filterOption={(input, option) =>
                                                                     option.label
                                                                        .toLowerCase()
                                                                        .includes(input.toLowerCase())
                                                                  }
                                                                  options={exams.map((exam) => ({
                                                                     value: exam.examCode,
                                                                     label: exam.examName
                                                                  }))}
                                                               />
                                                            </Form.Item>
                                                         </Col>
                                                         <Col span={11} offset={1}>
                                                            <Form.Item
                                                               label="Тайлбар"
                                                               name={[name, 'packages', 'descr']}
                                                            >
                                                               <TextArea />
                                                            </Form.Item>
                                                         </Col>
                                                         <Col span={11} offset={1}>
                                                            <Form.Item label="Дүн" name={[name, 'packages', 'amount']}>
                                                               <InputNumber />
                                                            </Form.Item>
                                                         </Col>
                                                         <Col span={11} offset={1}>
                                                            <Form.Item
                                                               label="Шинжилгээний хариу тайлбар"
                                                               name={[name, 'packages', 'examResult']}
                                                            >
                                                               <Input />
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
                                                         icon={<PlusOutlined />}
                                                         style={{ width: '100%' }}
                                                      >
                                                         Багцийн мэдээлэл нэмэх
                                                      </Button>
                                                   </Form.Item>
                                                </>
                                             )}
                                          </Form.List>
                                       </Row>
                                    ))}
                                    <Form.Item>
                                       <Button
                                          type="dashed"
                                          onClick={() => {
                                             add();
                                          }}
                                          icon={<PlusOutlined />}
                                          style={{ width: '100%' }}
                                       >
                                          Үйлчилгээний мэдээлэл нэмэх
                                       </Button>
                                    </Form.Item>
                                 </>
                              )}
                           </Form.List>
                        </Col>
                     </Row>
                  ))}
                  <Form.Item>
                     <Button
                        type="dashed"
                        onClick={() => {
                           add();
                        }}
                        icon={<PlusOutlined />}
                        style={{ width: '100%' }}
                     >
                        Төлбөрийн мэдээлэл нэмэх
                     </Button>
                  </Form.Item>
                  <Divider />
               </>
            )}
         </Form.List>
      </>
   );
};
export default SendHics;
