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
      form.setFields([
         {
            name: ['payments', paymentIndex, 'serviceList', serviceIndex, 'startDate'],
            value: moment(service.inDateStr)
         },
         {
            name: ['payments', paymentIndex, 'serviceList', serviceIndex, 'endDate'],
            value: moment(service.outDateStr)
         },
         {
            name: ['payments', paymentIndex, 'serviceList', serviceIndex, 'hicsServiceId'],
            value: service.serviceId
         },
         {
            name: ['payments', paymentIndex, 'serviceList', serviceIndex, 'pregnantWeek'],
            value: service.pregnantWeek
         },
         {
            name: ['payments', paymentIndex, 'serviceList', serviceIndex, 'parentServiceNumber'],
            value: serviceNumber
         },
         {
            name: ['payments', paymentIndex, 'serviceList', serviceIndex, 'diagnosis', 'icdCode'],
            value: service.icdCode
         },
         {
            name: ['payments', paymentIndex, 'serviceList', serviceIndex, 'diagnosis', 'icdCodeName'],
            value: service.icdCodeName
         },
         {
            name: ['payments', paymentIndex, 'serviceList', serviceIndex, 'diagnosis', 'icd9Code'],
            value: service.icd9Code
         },
         {
            name: ['payments', paymentIndex, 'serviceList', serviceIndex, 'diagnosis', 'drgCode'],
            value: service.drgCode
         },
         {
            name: ['payments', paymentIndex, 'serviceList', serviceIndex, 'payedAmount'],
            value: costs[0].amountCit
         },
         {
            name: ['payments', paymentIndex, 'serviceList', serviceIndex, 'discountAmount'],
            value: costs[0].discountAmount
         },
         {
            name: ['payments', paymentIndex, 'serviceList', serviceIndex, 'totalAmount'],
            value: costs[0].amountTotal
         }
      ]);
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
            {(payments, paymentOpt) => (
               <>
                  {payments.map((payment) => (
                     <Row key={payment.key} style={customeBorderStyle}>
                        <Button
                           type="dashed"
                           danger
                           icon={<MinusCircleOutlined />}
                           onClick={() => {
                              paymentOpt.remove(payment.name);
                           }}
                           style={{ width: '100%' }}
                        >
                           Төлбөрийн мэдээлэл устгах
                        </Button>
                        <Col span={23} offset={1}>
                           <Form.List name={[payment.name, 'serviceList']}>
                              {(serviceList, serviceListOpt) => (
                                 <>
                                    {serviceList.map((list) => (
                                       <Row key={list.key} style={customeBorderStyle}>
                                          <Button
                                             type="dashed"
                                             danger
                                             icon={<MinusCircleOutlined />}
                                             onClick={() => {
                                                serviceListOpt.remove(list.name);
                                             }}
                                             style={{ width: '100%' }}
                                          >
                                             Үйлчилгээний мэдээлэл устгах
                                          </Button>
                                          <Form.Item
                                             {...list}
                                             label="Битүүмжит үйлчилгээ"
                                             name={[list.name, 'service']}
                                             style={{ width: '100%' }}
                                          >
                                             <Select
                                                options={sealServices.map((service) => ({
                                                   value: service.serviceNumber,
                                                   label: `${service.inDateStr} - ${service.serviceName} - ${service.icdCode}`
                                                }))}
                                                onSelect={(value) => {
                                                   fieldService(payment.name, list.name, value);
                                                }}
                                             />
                                          </Form.Item>
                                          <Col span={11} offset={1}>
                                             <Form.Item {...list} label="Эхлэх огноо" name={[list.name, 'startDate']}>
                                                <DatePicker />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item {...list} label="Дуусах огноо" name={[list.name, 'endDate']}>
                                                <DatePicker />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Үйлчилгээний дугаар"
                                                name={[list.name, 'hicsServiceId']}
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Эцэг үйлчилгээний дугаар"
                                                name={[list.name, 'parentServiceNumber']}
                                                tooltip="/Энэхүү дугаар нь үйлчилгээг хадгалсны дараа өмнө дугаарыг эцэг болгож, child бичлэг илгээх үед ашиглагдана/"
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Эмчийн үзлэгийн дугаар"
                                                name={[list.name, 'doctorServiceNumber']}
                                                tooltip="/Эмч үзлэг хийж илгээх бүртгэл хийсэн үед ашиглагдана. Энэхүү дугаарыг одоогоор явуулахгүй байж болно/"
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item {...list} label="Кабинет дугаар" name={[list.name, 'departNo']}>
                                                <InputNumber />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item {...list} label="Кабинет нэр" name={[list.name, 'departName']}>
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Хөнгөлсөн дүн"
                                                name={[list.name, 'discountAmount']}
                                             >
                                                <InputNumber />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Иргэн төлсөн дүн"
                                                name={[list.name, 'payedAmount']}
                                             >
                                                <InputNumber />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item {...list} label="Нийт дүн" name={[list.name, 'totalAmount']}>
                                                <InputNumber />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Тодосгогч ашигласан эсэх"
                                                name={[list.name, 'isBold']}
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
                                             <Form.Item
                                                {...list}
                                                label="Жирэмсний 7 хоногийн тоо"
                                                name={[list.name, 'pregnantWeek']}
                                             >
                                                <InputNumber />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Оношийн код"
                                                name={[list.name, 'diagnosis', 'icdCode']}
                                             >
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
                                             <Form.Item
                                                {...list}
                                                label="Оношийн нэр"
                                                name={[list.name, 'diagnosis', 'icdCodeName']}
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Оношийн код-2"
                                                name={[list.name, 'diagnosis', 'icdCode1']}
                                                tooltip="/хос онош илгээх Т.Ү дээр/"
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Оношийн бүлэг"
                                                name={[list.name, 'diagnosis', 'icdGroup']}
                                             >
                                                <InputNumber />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Оношийн бүлгийн нэр"
                                                name={[list.name, 'diagnosis', 'icdGroupName']}
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Хавсарсан оношийн код"
                                                name={[list.name, 'diagnosis', 'icdAddCode']}
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Хавсарсан оношийн нэр"
                                                name={[list.name, 'diagnosis', 'icdAddName']}
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="ICD-9 код"
                                                name={[list.name, 'diagnosis', 'icd9Code']}
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="ICD-9 нэр"
                                                name={[list.name, 'diagnosis', 'icd9Name']}
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Хүндрэлийн зэрэг"
                                                name={[list.name, 'diagnosis', 'abcType']}
                                             >
                                                <Input />
                                             </Form.Item>
                                          </Col>
                                          <Col span={11} offset={1}>
                                             <Form.Item
                                                {...list}
                                                label="Оношийн хамааралтай бүлэг"
                                                name={[list.name, 'diagnosis', 'drgCode']}
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
                                                {...list}
                                                label="Үзлэгийн тэмдэглэл"
                                                name={[list.name, 'diagnosis', 'description']}
                                             >
                                                <TextArea />
                                             </Form.Item>
                                          </Col>
                                          <p>Багцийн мэдээлэл</p>
                                          <Form.List name="packages">
                                             {(packages, packageOpt) => (
                                                <>
                                                   {packages.map((packge) => (
                                                      <Row key={packge.key} style={customeBorderStyle}>
                                                         <Button
                                                            type="dashed"
                                                            danger
                                                            icon={<MinusCircleOutlined />}
                                                            onClick={() => {
                                                               actionsss.remove(packge.name);
                                                            }}
                                                            style={{ width: '100%' }}
                                                         >
                                                            Багцийн мэдээлэл устгах
                                                         </Button>
                                                         <Col span={11} offset={1}>
                                                            <Form.Item
                                                               {...packge}
                                                               label="Огноо"
                                                               name={[packge.name, 'packages', 'inDate']}
                                                            >
                                                               <DatePicker />
                                                            </Form.Item>
                                                         </Col>
                                                         <Col span={11} offset={1}>
                                                            <Form.Item
                                                               {...packge}
                                                               label="ICD-10 код"
                                                               name={[packge.name, 'packages', 'icd10']}
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
                                                               {...packge}
                                                               label="ICD-9 код"
                                                               name={[packge.name, 'packages', 'icd9']}
                                                            >
                                                               <Input />
                                                            </Form.Item>
                                                         </Col>
                                                         <Col span={11} offset={1}>
                                                            <Form.Item
                                                               {...packge}
                                                               label="Багцийн дугаар"
                                                               name={[packge.name, 'packages', 'packId']}
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
                                                               {...packge}
                                                               label="Оношилгоо, шинжилгээний код"
                                                               name={[packge.name, 'packages', 'examCode']}
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
                                                               {...packge}
                                                               label="Тайлбар"
                                                               name={[packge.name, 'packages', 'descr']}
                                                            >
                                                               <TextArea />
                                                            </Form.Item>
                                                         </Col>
                                                         <Col span={11} offset={1}>
                                                            <Form.Item
                                                               {...packge}
                                                               label="Дүн"
                                                               name={[packge.name, 'packages', 'amount']}
                                                            >
                                                               <InputNumber />
                                                            </Form.Item>
                                                         </Col>
                                                         <Col span={11} offset={1}>
                                                            <Form.Item
                                                               {...packge}
                                                               label="Шинжилгээний хариу тайлбар"
                                                               name={[packge.name, 'packages', 'examResult']}
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
                                                            packageOpt.add();
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
                                             serviceListOpt.add();
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
                           paymentOpt.add();
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
