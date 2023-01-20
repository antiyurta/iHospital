import {
   Button,
   DatePicker,
   Form,
   Input,
   InputNumber,
   Modal,
   Table,
   Row,
   Col
} from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, Post } from '../../../comman';
import { useReactToPrint } from 'react-to-print';

const { TextArea } = Input;
function NursingNote({ ListId, PatientId, PatientData }) {
   const [form] = Form.useForm();
   const printRef = useRef();
   const today = new Date();
   const checkNumber = (event) => {
      var charCode = event.charCode;
      if (
         charCode > 31 &&
         (charCode < 48 || charCode > 57) &&
         charCode !== 46
      ) {
         event.preventDefault();
      } else {
         return true;
      }
   };
   const token = useSelector(selectCurrentToken);
   const [spinner, setSpinner] = useState(false);
   const [nursingNotes, setNursingNotes] = useState([]);
   const [meta, setMeta] = useState({});
   const [isOpenNoteModal, setIsOpenNoteModal] = useState(false);
   const [start, setStart] = useState('');
   const [end, setEnd] = useState('');
   const columns = [
      {
         title: '№',
         render: (_, record, index) => {
            return meta.page * meta.limit - (meta.limit - index - 1);
         }
      },
      {
         title: 'Огноо',
         dataIndex: 'date',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Асуудлын дугаар',
         dataIndex: 'issueNumber'
      },
      {
         title: 'NANDA код',
         dataIndex: 'nandaCode'
      },
      {
         title: 'Зорилго',
         dataIndex: 'purpose'
      },
      {
         title: 'Сувилахуйн төлөвлөгөө',
         dataIndex: 'nursingPlan'
      },
      {
         title: 'Хэрэгжүүлсэн',
         dataIndex: 'implemented'
      },
      {
         title: 'Дүгнэлт',
         dataIndex: 'conclusion'
      }
   ];
   const getNursingNote = async (page, pageSize, start, end) => {
      setSpinner(true);
      start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            patientId: PatientId,
            startDate: moment(start).format('YYYY-MM-DD HH:mm'),
            endDate: moment(end).format('YYYY-MM-DD HH:mm')
         }
      };
      setStart(start);
      setEnd(end);
      const response = await Get('inpatient/nursing-note', token, conf);
      console.log('RES========>', response);
      setNursingNotes(response.data);
      setMeta(response.meta);
      setSpinner(false);
   };
   console.log('PatientData', PatientData);
   const onFinish = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      const data = {
         patientId: PatientId,
         conclusion: values.conclusion,
         date: values.date,
         implemented: values.implemented,
         issueNumber: values.issueNumber,
         nandaCode: values.nandaCode,
         nursingPlan: values.nursingPlan,
         purpose: values.purpose,
         inpatientRequestId: ListId
      };
      const response = await Post('inpatient/nursing-note', token, conf, data);
      if (response === 201) {
         getNursingNote(1, 10, start, end);
         setIsOpenNoteModal(false);
      }
   };
   useEffect(() => {
      getNursingNote(1, 10, today, today);
   }, [PatientId]);

   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full p-1">
               <div className="float-left">
                  <Button onClick={() => setIsOpenNoteModal(true)}>
                     Тэмдэглэл бичих
                  </Button>
                  <Button onClick={() => handlePrint()} className="ml-2">
                     Хэвлэх
                  </Button>
               </div>
               <div className="float-right">
                  <Button
                     title="Сэргээх"
                     type="primary"
                     onClick={() => getNursingNote(1, 10, start, end)}
                  >
                     <ReloadOutlined spin={spinner} />
                  </Button>
               </div>
            </div>
            <div className="w-full p-1">
               <Table
                  bordered
                  rowKey={'id'}
                  scroll={{
                     x: 1000
                  }}
                  className="whitespace-pre-wrap"
                  locale={{ emptyText: 'Мэдээлэл байхгүй' }}
                  loading={spinner}
                  columns={columns}
                  dataSource={nursingNotes}
                  pagination={{
                     simple: true,
                     pageSize: 20,
                     total: meta.itemCount,
                     current: meta.page,
                     onChange: (page, pageSize) =>
                        getNursingNote(page, pageSize, start, end)
                  }}
               />
            </div>
         </div>
         <Modal
            open={isOpenNoteModal}
            title="Тэмдэглэл бичих"
            onCancel={() => setIsOpenNoteModal(false)}
            onOk={() => {
               form.validateFields().then((values) => {
                  onFinish(values);
               });
            }}
            cancelText="Болих"
            okText="Хадгалах"
         >
            <Form form={form} layout="vertical">
               <div className="flex flex-wrap">
                  <div className="basis-1/2 p-1">
                     <Form.Item
                        label="Огноо"
                        name="date"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <DatePicker
                           locale={mnMN}
                           format="YYYY-MM-DD HH:mm:ss"
                           showTime={{
                              defaultValue: moment('00:00:00', 'HH:mm:ss')
                           }}
                        />
                     </Form.Item>
                  </div>
                  <div className="basis-1/2 p-1">
                     <Form.Item
                        label="Асуудлын дугаар"
                        name="issueNumber"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <Input />
                     </Form.Item>
                  </div>
                  <div className="basis-1/2 p-1">
                     <Form.Item
                        label="NANDA код"
                        name="nandaCode"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                  </div>
                  <div className="basis-1/2 p-1">
                     <Form.Item
                        label="Зорилго"
                        name="purpose"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <Input />
                     </Form.Item>
                  </div>
                  <div className="w-full p-1">
                     <Form.Item
                        label="Сувлахуйн төлөвлөгөө"
                        name="nursingPlan"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <TextArea />
                     </Form.Item>
                  </div>
                  <div className="w-full p-1">
                     <Form.Item
                        label="Хэрэгжүүлсэн"
                        name="implemented"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <TextArea />
                     </Form.Item>
                  </div>
                  <div className="w-full p-1">
                     <Form.Item
                        label="Дүгнэлт"
                        name="conclusion"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <TextArea />
                     </Form.Item>
                  </div>
               </div>
            </Form>
         </Modal>
         <div style={{ display: 'none' }}>
            <div ref={printRef} className="p-8">
               <h2 className="font-bold text-center">СУВИЛАГЧИЙН ТЭМДЭГЛЭЛ</h2>
               <Row className="mt-2">
                  <Col span={18}>
                     <b>Эмчлүүлэгчийн овог, нэр: </b>
                     {`${PatientData?.lastName?.substr(0, 1)}. ${
                        PatientData?.firstName
                     }`}
                  </Col>
                  <Col span={6}>
                     <b>Өвчний түүх №</b> {PatientData?.cardNumber}
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>
                     <b>Нас:</b> {PatientData?.age}
                  </Col>
                  <Col span={6}>
                     <b>Хүйс: </b>
                     {PatientData?.genderType === 'MAN' ? 'Эрэгтэй' : 'Эмэгтэй'}
                  </Col>
                  <Col span={6}>
                     <b>Тасаг: </b>
                     {nursingNotes[0]?.inpatientRequests?.structure?.name}
                  </Col>
                  <Col span={6}>
                     <b>Өрөө: </b>
                     {nursingNotes[0]?.inpatientRequests?.rooms?.roomNumber}
                  </Col>
               </Row>
               <table
                  style={{
                     borderWidth: '1px',
                     borderColor: '#aaaaaa',
                     borderStyle: 'solid',
                     width: '100%',
                     marginTop: 20
                  }}
                  className="border-collapse border border-slate-500"
               >
                  <thead>
                     <tr>
                        <th className="border border-slate-600 p-1 text-center w-32">
                           Огноо
                        </th>
                        <th className="border border-slate-600 p-1 text-center">
                           Асуудлын дугаар
                        </th>
                        <th className="border border-slate-600 p-1 text-center">
                           Сувлахуйн төлөвлөгөө
                        </th>
                        <th className="border border-slate-600 p-1 text-center">
                           Хэрэгжүүлсэн
                        </th>
                        <th className="border border-slate-600 p-1 text-center">
                           Дүгнэлт
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {nursingNotes &&
                        nursingNotes?.map((el, index) => {
                           return (
                              <>
                                 <tr key={index}>
                                    <td
                                       rowSpan="2"
                                       className="border border-slate-600 p-1 text-center"
                                    >
                                       {moment(el.date).format(
                                          'YYYY-MM-DD HH:mm'
                                       )}
                                    </td>
                                    <td
                                       rowSpan="2"
                                       className="border border-slate-600 p-1 text-center"
                                    >
                                       {el.issueNumber}
                                    </td>
                                    <td
                                       rowSpan="2"
                                       className="border border-slate-600 p-1 w-1/4"
                                    >
                                       {el.nursingPlan}
                                    </td>
                                    <td
                                       rowSpan="2"
                                       className="border border-slate-600 p-1 w-1/4"
                                    >
                                       {el.implemented}
                                    </td>
                                    <td className="border border-slate-600 p-1 w-1/4">
                                       <td>{el.conclusion}</td>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">
                                       <b>Сувилагчийн нэр: </b>{' '}
                                       {`${el?.createdLastName?.substr(
                                          0,
                                          1
                                       )}. ${el?.createdFirstName}`}
                                    </td>
                                 </tr>
                              </>
                           );
                        })}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
}
export default NursingNote;
