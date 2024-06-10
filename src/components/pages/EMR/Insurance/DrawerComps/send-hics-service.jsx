import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import healthInsurance from '../../../../../services/healt-insurance/healtInsurance';
import apiInsurance from '../../../../../services/healt-insurance/insurance';
import { selectPatient } from '../../../../../features/patientReducer';
import { useSelector } from 'react-redux';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import patientDiagnose from '../../../../../services/emr/patientDiagnose';
import TextArea from 'antd/lib/input/TextArea';
import { useContext } from 'react';
import AuthContext from '../../../../../features/AuthContext';
import { selectCurrentEmrData } from '../../../../../features/emrReducer';
import { HICS_PROCESS } from '../enum-utils';

//comp
import Finger from '@Comman/Finger/Finger';
//api
import regularApi from '@ApiServices/regular.api';

export const SendHics = (props) => {
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
            // departmentId: currentEmrData.cabinetId,
            // createdBy: user.id,
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
   const fieldCost = async (paymentIndex, serviceListIndex, id) => {
      const seal = seals.find((seal) => seal.id == id);
      console.log('seal', seal);
      console.log('paymentIndex', paymentIndex);
      console.log('serviceListIndex', serviceListIndex);
      form.setFieldValue(['payments', paymentIndex, 'serviceList', serviceListIndex], {
         startDate: moment(seal.startAt),
         endDate: moment(seal.endAt),
         hicsServiceId: seal.hicsServiceId,
         startCode: seal.hicsStartCode,
         parentServiceNumber: seal.hicsSealCode,
         departNo: seal.departmentId.toString(),
         departName: seal.department?.name,
         discountAmount: 0,
         payedAmount: seal.amountCit,
         totalAmount: seal.amountTotal,
         diagnosis: seal.diagnosis
      });
      // const costs = await getCosts(seal.hicsServiceId, seal.diagnosis.icdCode);
      // form.setFields([
      //    {
      //       name: 'patientId',
      //       value: patient.id
      //    },
      //    {
      //       name: ['paymentCares', index, 'hicsAmount'],
      //       value: costs[0].amountHi
      //    },
      //    {
      //       name: ['paymentCares', index, 'citizenAmount'],
      //       value: costs[0].amountCit
      //    },
      //    {
      //       name: ['paymentCares', index, 'totalAmount'],
      //       value: costs[0].amountTotal
      //    }
      // ]);
   };

   const createPayment = async (index) => {
      const serviceList = form.getFieldValue(['payments', index, 'serviceList']);
      Promise.all(
         serviceList?.map(
            async (list) =>
               await regularApi
                  .post('payment/invoice', {
                     patientId: patient.id,
                     amount: list.totalAmount,
                     type: 5,
                     typeId: 0
                  })
                  .then(({ data: { response } }) => response.id)
         )
      ).then(async (invoiceIds) => {
         await regularApi
            .post('payment/payment', {
               invoiceIds: invoiceIds,
               patientId: patient.id,
               discountPercentId: null,
               paymentTypeId: 1,
               prePaymentId: null
            })
            .then(({ data: { response } }) => {
               console.log(response);
               form.setFieldValue(['payments', index], {
                  posRno: response.billId,
                  totalAmount: response.totalAmount,
                  discountAmount: 0,
                  vatAmount: response.totalAmount,
                  payedAmount: response.paidAmount,
                  salesName: 'AMARBAT',
                  salesDate: moment(),
                  serviceList: serviceList
               });
            });
      });
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
               form={form}
               insurance={true}
               noStyle
               name="fingerprint"
               rules={[
                  {
                     required: true,
                     message: 'Хурууний хээ заавал'
                  }
               ]}
            >
               <Input />
            </Finger>
         </Col>
         <p>Төлбөрийн мэдээлэл</p>
         <Form.List name="payments">
            {(payments, { add: addPayment, remove: removePayment }) => (
               <div className="flex flex-col gap-1">
                  {payments.map((payment) => (
                     <div key={payment.key} className="flex flex-col gap-1" style={customeBorderStyle}>
                        <Button
                           type="dashed"
                           danger
                           icon={<MinusCircleOutlined />}
                           onClick={() => {
                              removePayment(payment.name);
                           }}
                           style={{ width: '100%' }}
                        >
                           Төлбөр болон үйлчилгээний мэдээлэл хасах
                        </Button>
                        <p className="font-bold">
                           Эхлээ бүр үйлчилгээгээ оруулаад хамгийн сүүлд DD дараарай тэгд илгээ
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                           <div className="flex flex-row gap-1">
                              <Form.Item label="posRno" name={[payment.name, 'posRno']}>
                                 <Input />
                              </Form.Item>
                              <Button
                                 onClick={() => {
                                    createPayment(payment.name);
                                 }}
                              >
                                 DD
                              </Button>
                           </div>
                           <Form.Item label="totalAmount" name={[payment.name, 'totalAmount']}>
                              <InputNumber />
                           </Form.Item>
                           <Form.Item label="discountAmount" name={[payment.name, 'discountAmount']}>
                              <InputNumber />
                           </Form.Item>
                           <Form.Item label="vatAmount" name={[payment.name, 'vatAmount']}>
                              <InputNumber />
                           </Form.Item>
                           <Form.Item label="payedAmount" name={[payment.name, 'payedAmount']}>
                              <InputNumber />
                           </Form.Item>
                           <Form.Item label="salesName" name={[payment.name, 'salesName']}>
                              <Input />
                           </Form.Item>
                           <Form.Item label="salesDate" name={[payment.name, 'salesDate']}>
                              <DatePicker />
                           </Form.Item>
                        </div>
                        <p>Үйлчилгээний жагсаалт</p>
                        <Form.List name={[payment.name, 'serviceList']}>
                           {(serviceList, { add: addServiceList, remove: removeServiceList }) => (
                              <div className="flex flex-col gap-1">
                                 {serviceList.map((list) => (
                                    <div key={list.key} className="flex flex-col gap-1" style={customeBorderStyle}>
                                       <Button
                                          type="dashed"
                                          danger
                                          icon={<MinusCircleOutlined />}
                                          onClick={() => {
                                             removeServiceList(payment.name);
                                          }}
                                          style={{ width: '100%' }}
                                       >
                                          Үйлчилгээний жагсаалт
                                       </Button>
                                       <Select
                                          options={seals.map((seal) => ({
                                             value: seal.id,
                                             label: `${moment(seal.startAt).format('YYYY-MM-DD')} 
                                 - ${hicsDictionary.get(seal.hicsServiceId)?.name}
                                 - ${seal.diagnosis?.icdCode}`
                                          }))}
                                          onSelect={(value) => {
                                             fieldCost(payment.name, list.name, value);
                                          }}
                                       />
                                       <div className="grid grid-cols-2 gap-2">
                                          <Form.Item label="startDate" name={[list.name, 'startDate']}>
                                             <DatePicker />
                                          </Form.Item>
                                          <Form.Item label="endDate" name={[list.name, 'endDate']}>
                                             <DatePicker />
                                          </Form.Item>
                                          <Form.Item label="hicsServiceId" name={[list.name, 'hicsServiceId']}>
                                             <Input />
                                          </Form.Item>
                                          <Form.Item
                                             label="parentServiceNumber"
                                             name={[list.name, 'parentServiceNumber']}
                                          >
                                             <InputNumber />
                                          </Form.Item>
                                          <Form.Item
                                             label="doctorServiceNumber"
                                             name={[list.name, 'doctorServiceNumber']}
                                          >
                                             <InputNumber />
                                          </Form.Item>
                                          <Form.Item label="startCode" name={[list.name, 'startCode']}>
                                             <Input />
                                          </Form.Item>
                                          <Form.Item label="departNo" name={[list.name, 'departNo']}>
                                             <Input />
                                          </Form.Item>
                                          <Form.Item label="departName" name={[list.name, 'departName']}>
                                             <Input />
                                          </Form.Item>
                                          <Form.Item label="discountAmount" name={[list.name, 'discountAmount']}>
                                             <InputNumber />
                                          </Form.Item>
                                          <Form.Item label="payedAmount" name={[list.name, 'payedAmount']}>
                                             <InputNumber />
                                          </Form.Item>
                                          <Form.Item label="totalAmount" name={[list.name, 'totalAmount']}>
                                             <InputNumber />
                                          </Form.Item>
                                          <Form.Item
                                             label="Тодосгогч ашигласан эсэх"
                                             name={[list.name, 'isBold']}
                                             tooltip="Энэхүү талбар нь зөвхөн өндөр өртөгт CT, MRI дээр тодосгогч ашигласан эсэх дээр ашиглагдана."
                                          >
                                             <Select
                                                options={[
                                                   { value: 1, label: 'Тийм' },
                                                   { value: 0, label: 'Үгүй' }
                                                ]}
                                             />
                                          </Form.Item>
                                          <Form.Item label="pregnantWeek" name={[list.name, 'pregnantWeek']}>
                                             <InputNumber />
                                          </Form.Item>
                                          <Form.Item label="Онош батлах " name={[list.name, 'isConfirm']}>
                                             <Select
                                                options={[
                                                   {
                                                      value: 1,
                                                      label: 'Онош батлагдаж анхан шатын ЭМБ-руу шилжүүлсэн'
                                                   },
                                                   {
                                                      value: 2,
                                                      label: 'Онош батлагдаж дараагийн тусламж, үйлчилгээ рүү илгээсэн'
                                                   },
                                                   {
                                                      value: 3,
                                                      label: 'Онош батлагдаагүй, дараагийн ЭМБ-руу шилжүүлсэн'
                                                   }
                                                ]}
                                             />
                                          </Form.Item>
                                          <Form.Item
                                             label="obsDate"
                                             name={[list.name, 'obsDate']}
                                             tooltip="Дараагийн хяналтын үзлэгт ирэх огноо/зөвхөн 20150 – Амбулаторийн хяналтын үзлэг/"
                                          >
                                             <DatePicker />
                                          </Form.Item>
                                          <Form.Item
                                             label="obsDuration"
                                             name={[list.name, 'obsDuration']}
                                             tooltip="Амбулаторийн хяналтад байх нийт хугацаа/ зөвхөн 20150 – Амбулаторийн хяналтын үзлэг /"
                                          >
                                             <Input />
                                          </Form.Item>
                                          <Form.Item
                                             label="teethId"
                                             name={[list.name, 'teethId']}
                                             tooltip="Шүдний дугаар/зөвхөн 20140 – шүдний тусламж, үйлчилгээ/"
                                          >
                                             <InputNumber />
                                          </Form.Item>
                                          <Form.Item label="icdCode" name={[list.name, 'diagnosis', 'icdCode']}>
                                             <Input />
                                          </Form.Item>
                                          <Form.Item label="icdCodeName" name={[list.name, 'diagnosis', 'icdCodeName']}>
                                             <Input />
                                          </Form.Item>
                                          <Form.Item label="drgCode" name={[list.name, 'diagnosis', 'drgCode']}>
                                             <Input />
                                          </Form.Item>
                                          <Form.Item label="abcType" name={[list.name, 'diagnosis', 'abcType']}>
                                             <Input />
                                          </Form.Item>
                                       </div>
                                       <p>Багцийн мэдээлэл</p>
                                       <Form.List name={[list.name, 'packages']}>
                                          {(packages, { add: addPackage, remove: removePackage }) => (
                                             <>
                                                {packages.map((packge) => (
                                                   <Row key={packge.key} style={customeBorderStyle}>
                                                      <Button
                                                         type="dashed"
                                                         danger
                                                         icon={<MinusCircleOutlined />}
                                                         onClick={() => {
                                                            removePackage(packge.name);
                                                         }}
                                                         style={{ width: '100%' }}
                                                      >
                                                         Багцийн мэдээлэл устгах
                                                      </Button>
                                                      <Col span={11} offset={1}>
                                                         <Form.Item label="checkupId" name={[packge.name, 'checkupId']}>
                                                            <InputNumber />
                                                         </Form.Item>
                                                      </Col>
                                                      <Col span={11} offset={1}>
                                                         <Form.Item label="inDate" name={[packge.name, 'inDate']}>
                                                            <DatePicker />
                                                         </Form.Item>
                                                      </Col>
                                                      <Col span={11} offset={1}>
                                                         <Form.Item label="ICD-10 код" name={[packge.name, 'icd10']}>
                                                            <Select
                                                               options={diagnosis.map((diagnose) => ({
                                                                  value: diagnose.code,
                                                                  label: `${diagnose.code}-${diagnose.nameMn}`
                                                               }))}
                                                            />
                                                         </Form.Item>
                                                      </Col>
                                                      <Col span={11} offset={1}>
                                                         <Form.Item label="ICD-9 код" name={[packge.name, 'icd9']}>
                                                            <Input />
                                                         </Form.Item>
                                                      </Col>
                                                      <Col span={11} offset={1}>
                                                         <Form.Item
                                                            label="Багцийн дугаар"
                                                            name={[packge.name, 'packId']}
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
                                                            name={[packge.name, 'examCode']}
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
                                                         <Form.Item label="Тайлбар" name={[packge.name, 'descr']}>
                                                            <TextArea />
                                                         </Form.Item>
                                                      </Col>
                                                      <Col span={11} offset={1}>
                                                         <Form.Item label="Дүн" name={[packge.name, 'amount']}>
                                                            <InputNumber />
                                                         </Form.Item>
                                                      </Col>
                                                      <Col span={11} offset={1}>
                                                         <Form.Item
                                                            label="Шинжилгээний хариу тайлбар"
                                                            name={[packge.name, 'examResult']}
                                                         >
                                                            <Input />
                                                         </Form.Item>
                                                      </Col>
                                                   </Row>
                                                ))}
                                                <Form.Item>
                                                   <Button
                                                      type="primary"
                                                      onClick={() => {
                                                         addPackage();
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
                                    </div>
                                 ))}
                                 <Form.Item>
                                    <Button
                                       type="primary"
                                       onClick={() => {
                                          addServiceList();
                                       }}
                                       icon={<PlusOutlined />}
                                       style={{ width: '100%' }}
                                    >
                                       Үйлчилгээний жагсаалт
                                    </Button>
                                 </Form.Item>
                              </div>
                           )}
                        </Form.List>
                     </div>
                  ))}
                  <Form.Item>
                     <Button
                        type="primary"
                        onClick={() => {
                           addPayment();
                        }}
                        icon={<PlusOutlined />}
                        style={{ width: '100%' }}
                     >
                        Төлбөр болон үйлчилгээний мэдээлэл нэмэх
                     </Button>
                  </Form.Item>
               </div>
            )}
         </Form.List>
         {/* <Form.List name="paymentCares">
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
         </Form.List> */}
      </>
   );
};
