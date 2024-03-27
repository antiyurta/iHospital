import { Button, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import healthInsurance from '../../../../services/healt-insurance/healtInsurance';
import apiInsurance from '../../../../services/healt-insurance/insurance';
import { selectPatient } from '../../../../features/patientReducer';
import { useSelector } from 'react-redux';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import patientDiagnose from '../../../../services/emr/patientDiagnose';
import TextArea from 'antd/lib/input/TextArea';
import Finger from '../../../../features/finger';
import { useContext } from 'react';
import AuthContext from '../../../../features/AuthContext';
import { selectCurrentEmrData } from '../../../../features/emrReducer';
import { HICS_PROCESS } from './enum-utils';
const SendHics = (props) => {
   const { form } = props;
   const { user } = useContext(AuthContext);
   const currentEmrData = useSelector(selectCurrentEmrData);
   const [seals, setSeals] = useState([]);
   const [hicsServices, setHicsServices] = useState([]);
   const [hicsDictionary, setHicsDictionary] = useState(new Map());
   const [diagnosis, setDiagnosis] = useState([]);
   const [exams, setExams] = useState([]);
   const patient = useSelector(selectPatient);
   const customeBorderStyle = {
      border: '1px solid #ccc',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '16px'
   };
   const getHicsServices = async () => {
      await healthInsurance.getHicsService().then(({ data }) => {
         if (data.code == 200) {
            setHicsServices(data.result);
         }
      });
   };
   const getAllHicsSeals = async () => {
      await apiInsurance
         .getAllHicsSeals({
            patientId: patient.id,
            departmentId: currentEmrData.cabinetId,
            createdBy: user.id,
            process: HICS_PROCESS.SEAL_CONFIRM
         })
         .then((response) => {
            setSeals(response.data.response.data);
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
   const fieldCost = async (index, id) => {
      const seal = seals.find((seal) => seal.id == id);
      const costs = await getCosts(seal.hicsServiceId, seal.icdCode);
      form.setFields([
         {
            name: 'patientId',
            value: patient.id
         },
         {
            name: ['paymentCares', index, 'hicsAmount'],
            value: costs[0].amountHi
         },
         {
            name: ['paymentCares', index, 'citizenAmount'],
            value: costs[0].amountCit
         },
         {
            name: ['paymentCares', index, 'totalAmount'],
            value: costs[0].amountTotal
         }
      ]);
   };
   useEffect(() => {
      getHicsServices();
      getAllHicsSeals();
      getPatientDiagnosis();
      getExams();
   }, []);
   useEffect(() => {
      const hicsDictionary = hicsServices.reduce((dict, hicsService) => {
         dict.set(hicsService.id, hicsService);
         return dict;
      }, new Map());
      setHicsDictionary(hicsDictionary);
   }, [hicsServices]);
   return (
      <>
         <Col span={23} offset={1}>
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
                     patientFingerprint: values.fingerPrint
                  });
               }}
            />
            <Form.Item
               label="Хурууны хээ"
               name="fingerprint"
               rules={[
                  {
                     required: true,
                     message: 'Хурууны хээ оруулна уу'
                  }
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item label="Өвчтөний id" name="patientId" hidden>
               <Input />
            </Form.Item>
         </Col>
         <p>Төлбөрийн мэдээлэл</p>
         <Form.List name="paymentCares">
            {(paymentCares, { add: addPaymentCare, remove: removePaymentCare }) => (
               <>
                  {paymentCares.map((paymentCare) => (
                     <Row key={paymentCare.key} style={customeBorderStyle}>
                        <Button
                           type="dashed"
                           danger
                           icon={<MinusCircleOutlined />}
                           onClick={() => {
                              removePaymentCare(paymentCare.name);
                           }}
                           style={{ width: '100%' }}
                        >
                           Үйлчилгээний мэдээлэл устгах
                        </Button>
                        <Form.Item
                           label="Битүүмжит үйлчилгээ"
                           name={[paymentCare.name, 'hicsSealId']}
                           style={{ width: '100%' }}
                        >
                           <Select
                              options={seals.map((seal) => ({
                                 value: seal.id,
                                 label: `${moment(seal.startAt).format('YYYY-MM-DD')} 
                                 - ${hicsDictionary.get(seal.hicsServiceId)?.name}
                                 - ${seal.icdCode}`
                              }))}
                              onSelect={(value) => {
                                 fieldCost(paymentCare.name, value);
                              }}
                           />
                        </Form.Item>
                        <Col span={7} offset={1}>
                           <Form.Item label="Хөнгөлсөн дүн" name={[paymentCare.name, 'hicsAmount']}>
                              <InputNumber disabled />
                           </Form.Item>
                        </Col>
                        <Col span={7} offset={1}>
                           <Form.Item label="Иргэн төлсөн дүн" name={[paymentCare.name, 'citizenAmount']}>
                              <InputNumber disabled />
                           </Form.Item>
                        </Col>
                        <Col span={7} offset={1}>
                           <Form.Item label="Нийт дүн" name={[paymentCare.name, 'totalAmount']}>
                              <InputNumber disabled />
                           </Form.Item>
                        </Col>
                        <Col span={11} offset={1}>
                           <Form.Item
                              label="Тодосгогч ашигласан эсэх"
                              name={[paymentCare.name, 'isBold']}
                              tooltip="Энэхүү талбар нь зөвхөн өндөр өртөгт CT, MRI дээр тодосгогч ашигласан эсэх дээр ашиглагдана."
                           >
                              <Select
                                 options={[
                                    { value: 1, label: 'Тийм' },
                                    { value: 0, label: 'Үгүй' }
                                 ]}
                              />
                           </Form.Item>
                        </Col>
                        <Col span={11} offset={1}>
                           <Form.Item label="Жирэмсний 7 хоногийн тоо" name={[paymentCare.name, 'pregnantWeek']}>
                              <InputNumber />
                           </Form.Item>
                        </Col>
                        <p>Багцийн мэдээлэл</p>
                        <Form.List name={[paymentCare.name, 'carePackages']}>
                           {(carePackages, { add: addCarePackage, remove: removeCarePackage }) => (
                              <>
                                 {carePackages.map((carePack) => (
                                    <Row key={carePack.key} style={customeBorderStyle}>
                                       <Button
                                          type="dashed"
                                          danger
                                          icon={<MinusCircleOutlined />}
                                          onClick={() => {
                                             removeCarePackage(carePack.name);
                                          }}
                                          style={{ width: '100%' }}
                                       >
                                          Багцийн мэдээлэл устгах
                                       </Button>
                                       <Col span={11} offset={1}>
                                          <Form.Item label="ICD-10 код" name={[carePack.name, 'icdCode']}>
                                             <Select
                                                options={diagnosis.map((diagnose) => ({
                                                   value: diagnose.code,
                                                   label: `${diagnose.code}-${diagnose.nameMn}`
                                                }))}
                                             />
                                          </Form.Item>
                                       </Col>
                                       <Col span={11} offset={1}>
                                          <Form.Item label="ICD-9 код" name={[carePack.name, 'icd9']}>
                                             <Input />
                                          </Form.Item>
                                       </Col>
                                       <Col span={11} offset={1}>
                                          <Form.Item label="Багцийн дугаар" name={[carePack.name, 'packId']}>
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
                                             name={[carePack.name, 'examCode']}
                                          >
                                             <Select
                                                allowClear
                                                showSearch
                                                filterOption={(input, option) =>
                                                   option.label.toLowerCase().includes(input.toLowerCase())
                                                }
                                                options={exams.map((exam) => ({
                                                   value: exam.examCode,
                                                   label: exam.examName
                                                }))}
                                             />
                                          </Form.Item>
                                       </Col>
                                       <Col span={11} offset={1}>
                                          <Form.Item label="Тайлбар" name={[carePack.name, 'descr']}>
                                             <TextArea />
                                          </Form.Item>
                                       </Col>
                                       <Col span={11} offset={1}>
                                          <Form.Item label="Дүн" name={[carePack.name, 'amount']}>
                                             <InputNumber />
                                          </Form.Item>
                                       </Col>
                                       <Col span={11} offset={1}>
                                          <Form.Item
                                             label="Шинжилгээний хариу тайлбар"
                                             name={[carePack.name, 'examResult']}
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
                                          addCarePackage();
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
                           addPaymentCare();
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
      </>
   );
};
export default SendHics;
