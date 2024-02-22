import { CloseCircleOutlined, PrinterFilled } from '@ant-design/icons';
import { Button, Card, DatePicker, Empty, Form, Input, Modal, Select, Table } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectCurrentAppId, selectCurrentInsurance, selectCurrentToken } from '../../features/authReducer';
import { selectCurrentHicsService } from '../../features/emrReducer';
import { DefaultPost, DefualtGet, Get, localMn, localMnC, openNofi, Post } from '../comman';
//
import PaintStory from '../pages/EMR/InPatient/document/painStory/Index';
import Diagnose from './service/Diagnose';
import jwtInterceopter from '../jwtInterceopter';
import Finger from '../../features/finger';
import DocumentShow from './611/DocumentShow';
// import DocumentPrint from './611/DocumentPrint';
//

const { Option } = Select;
const { RangePicker } = DatePicker;

function EmrSupports({ appointmentId, hicsServiceId, usageType, patient, patientId, departmentId }) {
   const AppIds = useSelector(selectCurrentAppId);
   const token = useSelector(selectCurrentToken);
   const isInsurance = useSelector(selectCurrentInsurance);
   const emrHicsService = useSelector(selectCurrentHicsService);
   let location = useLocation();
   const navigate = useNavigate();
   const [sentForm] = Form.useForm(); // shiljuuleh
   const [clauseForm] = Form.useForm(); // zaalt
   const [moveForm] = Form.useForm(); // ilgeeh
   const [sealForm] = Form.useForm(); // bituumj uusgeh
   const [sentReason, setSentReason] = useState([]); // ilgeeh shaltgaan
   const [storyLists, setStoryLists] = useState([]);
   const [storyLoading, setStoryLoading] = useState(false);
   // emnelegt shiljuuleh
   const [hospitalLists, setHospitalLists] = useState([]);
   const [hospitalListsLoading, setHospitalListsLoading] = useState(false);
   // 611 maygt
   const [isOpenDocumentModal, setIsOpenDocumentModal] = useState(false);
   // 611 maygt
   // emnelegt shiljuuleh
   const [isOpenMoveModal, setIsOpenMoveModal] = useState(false);
   // emnelegt ilgeeh
   const [isOpenSentModal, setIsOpenSentModal] = useState(false);
   // emnelegt ilgeeh
   // zaalt oruulah
   const [isOpenClauseModal, setIsOpenClauseModal] = useState(false);
   const [hicsServices, setHicsServices] = useState([]); // uilcilgeenuud
   const [isLoadingClause, setIsLoadingClause] = useState(false); // loading
   // zaalt oruulah
   // bituumj uusgeh
   const [isOpenSealModal, setIsOpenSealModal] = useState(false);
   // bituumj uusgeh
   // tolboring medeelel
   const [isOpenPayment, setIsOpenPayment] = useState(false);
   const [paymentServices, setPaymendServices] = useState([]);
   const [paymentServiceId, setPaymentServiceId] = useState(Number);
   // tolboring medeelel
   const getStoryTEST = async () => {
      setStoryLoading(true);
      const conf = {
         headers: {},
         params: {
            patientId: patientId
         }
      };
      var response = await Get('inpatient/story', token, conf);
      setStoryLists(response.data);
      setStoryLoading(false);
   };
   const getInsuranceHospitalList = async () => {
      setHospitalListsLoading(true);
      const conf = {
         headers: {},
         params: {}
      };
      const response = await DefualtGet('health-insurance/hospital-list', token, conf);
      if (response.code === 200) {
         setHospitalLists(response.result);
      } else {
         setHospitalLists([]);
      }
      setHospitalListsLoading(false);
   };
   const getSentReason = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await DefualtGet('health-insurance/sent-reason', token, conf);
      if (response.code === 200) {
         setSentReason(response.result);
      } else {
         setSentReason([]);
      }
   };
   const sentCitizen = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      values['patientId'] = patientId;
      values['appointmentId'] = location?.state?.appointmentId;
      const response = Post('health-insurance/sent-citizen', token, conf, values);
      console.log(response);
   };
   const setApproval = async (values) => {
      setIsLoadingClause(true);
      const conf = {
         headers: {},
         params: {}
      };
      values['patientId'] = patientId;
      const response = await DefaultPost('health-insurance/set-approval', token, conf, values);
      console.log(response);
      if (response === 201) {
         setIsOpenClauseModal(false);
         openNofi('success', 'Даатгал', 'Мэдээллийг амжилттай хадгаллаа.');
      } else {
         setIsOpenClauseModal(false);
         openNofi('error', 'Даатгал', 'Мэдээллийг хадгалахад алдаа гарлаа.');
      }
      setIsLoadingClause(false);
   };
   const sentReasonTo = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      values['patientId'] = patientId;
      const response = await Post('health-insurance/patient-sheet', token, conf, values);
   };
   const sentSeal = async (values) => {
      console.log(values);
      const conf = {
         headers: {},
         params: {}
      };
      values['patientId'] = patientId;
      const response = await Post('health-insurance/hics-service', token, conf, values);
   };
   const DiagnoseHandleClick = (diagnoses) => {
      sealForm.setFieldValue('diagnose', diagnoses);
   };
   const endInspection = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      if (isInsurance && hicsServiceId) {
         values['doctorFinger'] = 'test';
         values['patientFinger'] = 'test2';
         values['appointmentId'] = appointmentId;
      }
      var data = {
         appointmentId: appointmentId
      };
      if (isInsurance && hicsServiceId) {
         await jwtInterceopter
            .post('insurance/appointment-seal', values)
            .then((response) => {
               console.log(response);
               if (response.data.code === 400) {
                  openNofi('error', 'Алдаа', response.data.description);
               } else {
                  openNofi('success', 'Амжиллтай', 'Үзлэг амжиллтай хадгалагдлаа ');
                  navigate('/ambulatoryList', {
                     state: {
                        isRead: true
                     }
                  });
               }
            })
            .catch((error) => {
               if (error.response.status === 400) {
                  const message = error.response.data.message.replaceAll('HttpException:', '');
                  openNofi('error', 'Алдаа', message);
               }
               console.log(error);
            });
      } else {
         const response = await Post('insurance/appointment-seal', token, conf, data);
         if (response === 201) {
            openNofi('success', 'Амжиллтай', 'Үзлэг амжиллтай хадгалагдлаа ');
            navigate('/ambulatoryList', {
               state: {
                  isRead: true
               }
            });
         }
      }
   };
   //
   useEffect(() => {
      getStoryTEST();
   }, [isOpenDocumentModal]);
   useEffect(() => {
      if (isInsurance) {
         getInsuranceHospitalList(); // emlegin jagsaalt,
         getSentReason(); // ilgeeh shaltgaan
      }
   }, []); //
   return (
      <>
         <Card
            className="header-solid max-h-max rounded-md"
            bodyStyle={{
               paddingTop: 10,
               paddingLeft: 10,
               paddingRight: 10,
               paddingBottom: 10,
               minHeight: 50,
               maxHeight: 50
            }}
         >
            <div className="flow-root">
               <div className="float-left">
                  <div className="flex justify-between gap-3">
                     {/* <DocumentPrint usageType={''} patientId={patientId} /> */}
                     <DocumentShow
                        props={{
                           appIds: AppIds,
                           departmentId: departmentId,
                           appointmentId: appointmentId,
                           usageType: 'OUT',
                           documentType: 0,
                           patientId: patientId
                        }}
                     />
                  </div>
               </div>
               <div className="float-right">
                  {isInsurance && hicsServiceId ? (
                     <Finger
                        text={'Үзлэг дуусгах'}
                        isDanger={true}
                        isFinger={emrHicsService?.isFinger}
                        steps={[
                           {
                              title: 'Эмчийн',
                              path: 'doctorFinger'
                           },
                           {
                              title: 'Өвтний',
                              path: 'patientFinger'
                           }
                        ]}
                        isPatientSheet={emrHicsService?.isPatientSheet}
                        handleClick={endInspection}
                     />
                  ) : (
                     <Button
                        danger
                        onClick={() => {
                           endInspection();
                        }}
                        icon={<CloseCircleOutlined />}
                        style={{
                           display: 'flex',
                           alignItems: 'center'
                        }}
                     >
                        Үзлэг дуусгах
                     </Button>
                  )}
               </div>
            </div>
            {/* {isInsurance && (
               <div className="flow-root">
                  <div className="float-left">
                     <Button.Group>
                        <Button
                           loading={hospitalListsLoading}
                           onClick={() => {
                              setIsOpenSentModal(true);
                           }}
                        >
                           Эмнэлэгт шилжүүлэх
                        </Button>
                        <Button onClick={() => setIsOpenMoveModal(true)}>Эмнэлэгт өвчтөн илгээх</Button>
                        <Button onClick={() => setIsOpenClauseModal(true)}>Заалт оруулах</Button>
                        <Button onClick={() => setIsOpenSealModal(true)}>Битүүмж үүсгэх</Button>
                     </Button.Group>
                  </div>
               </div>
            )} */}
            {/* <Button onClick={() => setIsOpenDocumentModal(true)}>
               Өвчний түүх
            </Button> */}
         </Card>
         {/* 611 maygt */}
         <Modal
            title="Өвчний түүх"
            open={isOpenDocumentModal}
            onCancel={() => setIsOpenDocumentModal(false)}
            width={'23cm'}
         >
            <Table
               rowKey={'id'}
               columns={[
                  {
                     title: 'Түүх нээсэн огноо',
                     dataIndex: 'createdAt',
                     render: (text) => {
                        return moment(text).format('YYYY-MM-DD HH:mm');
                     }
                  },
                  {
                     title: 'Үйлдэл',
                     render: (_, row) => {
                        return <PaintStory data={row} />;
                     }
                  }
               ]}
               dataSource={storyLists}
               loading={{
                  spinning: storyLoading,
                  tip: 'Уншиж байна...'
               }}
               locale={{ emptyText: <Empty description={'Хоосон'} /> }}
            />
         </Modal>
         {/* 611 maygt */}
         {/* Эмнэлэгт иргэнийг шилжүүлэн илгээх */}
         <Modal
            title={' Эмнэлэгт иргэнийг шилжүүлэн илгээх'}
            open={isOpenSentModal}
            onOk={() =>
               sentForm.validateFields().then((values) => {
                  sentCitizen(values);
               })
            }
            onCancel={() => setIsOpenSentModal(false)}
            okText="Шилжүүлэх"
            cancelText="Болих"
         >
            <Form form={sentForm} layout="vertical">
               <Form.Item label="Эмнэлэг сонгох" name={'receiveHospitalId'}>
                  <Select
                     onChange={(e) => console.log(e)}
                     showSearch
                     optionFilterProp="children"
                     filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                     }
                     style={{
                        width: '100%'
                     }}
                  >
                     {hospitalLists.map((hospital, index) => {
                        return (
                           <Option key={index} value={hospital.id}>
                              {hospital.hospitalName}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.Item label="Зовуурь" name="pain">
                  <TextArea />
               </Form.Item>
               <Form.Item label="Шалтгаан" name="reason">
                  <TextArea />
               </Form.Item>
               <Form.Item label="Хийгдсэн эмчилгээ" name="treatment">
                  <TextArea />
               </Form.Item>
            </Form>
         </Modal>
         {/* Эмнэлэгт иргэнийг шилжүүлэн илгээх */}
         {/* Заалт оруулах */}
         <Modal
            title="Заалт оруулах"
            open={isOpenClauseModal}
            onCancel={() => setIsOpenClauseModal(false)}
            onOk={() =>
               clauseForm.validateFields().then((values) => {
                  setApproval(values);
               })
            }
            confirmLoading={isLoadingClause}
            okText="Оруулах"
            cancelText="Болих"
         >
            <Form form={clauseForm} layout="vertical">
               <Form.Item label="Хийж байгаа үйлчилгээ" name="fromServiceId">
                  <Select
                     onChange={(e) => console.log(e)}
                     showSearch
                     optionFilterProp="children"
                     filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                     }
                     style={{
                        width: '100%'
                     }}
                  >
                     {hicsServices.map((service, index) => {
                        return (
                           <Option key={index} value={service.id}>
                              {service.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.Item label="Хийх үйлчилгээ" name="toServiceId">
                  <Select
                     onChange={(e) => console.log(e)}
                     showSearch
                     optionFilterProp="children"
                     filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                     }
                     style={{
                        width: '100%'
                     }}
                  >
                     {hicsServices.map((service, index) => {
                        return (
                           <Option key={index} value={service.id}>
                              {service.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.Item label="Тайлбар" name="approvalDesc">
                  <TextArea />
               </Form.Item>
            </Form>
         </Modal>
         {/* Заалт оруулах */}
         {/*  Эмнэлэгт өвчтөн илгээх хуудас */}
         <Modal
            title="Эмнэлэгт өвчтөн илгээх"
            open={isOpenMoveModal}
            onCancel={() => setIsOpenMoveModal(false)}
            onOk={() =>
               moveForm.validateFields().then((values) => {
                  sentReasonTo(values);
               })
            }
            cancelText="Болих"
            okText="Илгээх"
         >
            <Form form={moveForm} layout="vertical">
               <Form.Item label="Үйлчилгээ" name="serviceId">
                  <Select
                     onChange={(e) => console.log(e)}
                     showSearch
                     optionFilterProp="children"
                     filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                     }
                     style={{
                        width: '100%'
                     }}
                  >
                     {hicsServices.map((service, index) => {
                        return (
                           <Option key={index} value={service.id}>
                              {service.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.Item label="Илгээх шалтгаан" name="sentReason">
                  <Select
                     onChange={(e) => console.log(e)}
                     showSearch
                     optionFilterProp="children"
                     filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                     }
                     style={{
                        width: '100%'
                     }}
                  >
                     {sentReason.map((reason, index) => {
                        return (
                           <Option key={index} value={reason.name}>
                              {reason.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.Item label="Иргэнд өгөх зөвлөгөө" name="advice">
                  <TextArea />
               </Form.Item>
               <Form.Item label="Асран хамгаалагч" name="contactIndex">
                  <Select>
                     {patient?.contacts?.map((person, index) => {
                        return (
                           <Option key={index} value={index}>
                              {person.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
            </Form>
         </Modal>
         {/*  Эмнэлэгт өвчтөн илгээх хуудас */}
         {/* Bituumj uusgeh */}
         <Modal
            title="Битүүмж үүсгэх"
            open={isOpenSealModal}
            onCancel={() => setIsOpenSealModal(false)}
            onOk={() =>
               sealForm.validateFields().then((values) => {
                  sentSeal(values);
               })
            }
         >
            <Form form={sealForm} layout="vertical">
               <div className="flex flex-wrap">
                  <div className="w-1/2">
                     <Form.Item label="Эхлэх огноо" name="startDate">
                        <DatePicker locale={localMnC()} />
                     </Form.Item>
                  </div>
                  <div className="w-1/2">
                     <Form.Item label="Дуусах огноо" name="endDate">
                        <DatePicker locale={localMnC()} />
                     </Form.Item>
                  </div>
                  <div className="w-full">
                     <Form.Item label="Үйлчилгээ" name="hicsServiceId">
                        <Select
                           showSearch
                           optionFilterProp="children"
                           filterOption={(input, option) =>
                              (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                           }
                           style={{
                              width: '100%'
                           }}
                        >
                           {hicsServices.map((service, index) => {
                              return (
                                 <Option key={index} value={service.id}>
                                    {service.name}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                  </div>
                  <div className="w-full">
                     <Diagnose handleClick={DiagnoseHandleClick} />
                  </div>
               </div>
            </Form>
         </Modal>
      </>
   );
}
export default EmrSupports;
