import { PrinterFilled } from '@ant-design/icons';
import { Button, Card, Form, Modal, Select, Table } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectCurrentToken } from '../../features/authReducer';
import { DefualtGet, Get, Post } from '../comman';
//
import PaintStory from '../pages/EMR/InPatient/document/painStory/Index';
//

const { Option } = Select;

function EmrSupports({ appointmentId, usageType, patient }) {
   const token = useSelector(selectCurrentToken);
   let location = useLocation();
   console.log(patient);
   const [sentForm] = Form.useForm(); // shiljuuleh
   const [clauseForm] = Form.useForm(); // zaalt
   const [moveForm] = Form.useForm(); // ilgeeh
   const [sentReason, setSentReason] = useState([]); // ilgeeh shaltgaan
   const [storyLists, setStoryLists] = useState([]);
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
   // zaalt oruulah
   const getStoryTEST = async () => {
      const conf = {
         headers: {},
         params: {
            patientId: location?.state?.patientId
         }
      };
      var response = await Get('inpatient/story', token, conf);
      setStoryLists(response.data);
   };
   const getInsuranceHospitalList = async () => {
      setHospitalListsLoading(true);
      const conf = {
         headers: {},
         params: {}
      };
      const response = await DefualtGet(
         'health-insurance/hospital-list',
         token,
         conf
      );
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
      const response = await DefualtGet(
         'health-insurance/sent-reason',
         token,
         conf
      );
      if (response.code === 200) {
         setSentReason(response.result);
      } else {
         setSentReason([]);
      }
   };
   const getHicsService = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await DefualtGet(
         'health-insurance/hics-service',
         token,
         conf
      );
      if (response.code === 200) {
         setHicsServices(response.result);
      } else {
         setHicsServices([]);
      }
   };
   const sentCitizen = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      values['patientId'] = location?.state?.patientId;
      values['appointmentId'] = location?.state?.appointmentId;
      const response = Post(
         'health-insurance/sent-citizen',
         token,
         conf,
         values
      );
      console.log(response);
   };
   const setApproval = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      values['patientId'] = location?.state?.patientId;
      const response = await Post(
         'health-insurance/set-approval',
         token,
         conf,
         values
      );
   };
   const sentReasonTo = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      values['patientId'] = location?.state?.patientId;
      const response = await Post(
         'health-insurance/patient-sheet',
         token,
         conf,
         values
      );
   };
   useEffect(() => {
      getStoryTEST();
   }, [isOpenDocumentModal]);
   useEffect(() => {
      getInsuranceHospitalList(); // emlegin jagsaalt,
      getHicsService(); // uilcilgeenuud
      getSentReason(); // ilgeeh shaltgaan
   }, []);
   //
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
            <Button.Group>
               <Button
                  loading={hospitalListsLoading}
                  onClick={() => {
                     setIsOpenSentModal(true);
                  }}
               >
                  Эмнэлэгт шилжүүлэх
               </Button>
               <Button onClick={() => setIsOpenMoveModal(true)}>
                  Эмнэлэгт өвчтөн илгээх
               </Button>
               <Button onClick={() => setIsOpenClauseModal(true)}>
                  Заалт оруулах
               </Button>
               <Button onClick={() => setIsOpenDocumentModal(true)}>
                  Өвчний түүх
               </Button>
            </Button.Group>
         </Card>
         {/* 611 maygt */}
         <Modal
            title="Өвчний түүх"
            open={isOpenDocumentModal}
            onCancel={() => setIsOpen(false)}
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
                        (option?.children ?? '')
                           .toLowerCase()
                           .includes(input.toLowerCase())
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
                        (option?.children ?? '')
                           .toLowerCase()
                           .includes(input.toLowerCase())
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
                        (option?.children ?? '')
                           .toLowerCase()
                           .includes(input.toLowerCase())
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
                        (option?.children ?? '')
                           .toLowerCase()
                           .includes(input.toLowerCase())
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
                        (option?.children ?? '')
                           .toLowerCase()
                           .includes(input.toLowerCase())
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
      </>
   );
}
export default EmrSupports;
