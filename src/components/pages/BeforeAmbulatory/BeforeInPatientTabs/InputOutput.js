import { PrinterOutlined } from '@ant-design/icons';
import { Button, Form, InputNumber, Modal, Select, Spin } from 'antd';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, getAge, Post } from '../../../comman';
const { Option } = Select;
function InputOutput({ PatientId, ListId, PatientData }) {
   let location = useLocation();
   console.log('location', location);
   const token = useSelector(selectCurrentToken);
   const printRef = useRef();
   const [form] = Form.useForm();
   const [loading, setLoading] = useState(false);
   const [spinner, setSpinner] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const [datas, setDatas] = useState([]);
   const getData = async () => {
      setSpinner(true);
      const conf = {
         headers: {},
         params: {
            inpatientRequestId: ListId
         }
      };
      const response = await Get('report/fluid-balance', token, conf);
      response.map((item) => {
         let morningTotal = 0;
         let afternoonTotal = 0;
         let eveningTotal = 0;
         item.inputs?.map((value) => {
            morningTotal += value.morning;
            afternoonTotal += value.afternoon;
            eveningTotal += value.evening;
         });
         item['iMorningTotal'] = morningTotal;
         item['iAfternoonTotal'] = afternoonTotal;
         item['iEveningTotal'] = eveningTotal;
         morningTotal = 0;
         afternoonTotal = 0;
         eveningTotal = 0;
         item.outputs?.map((value) => {
            morningTotal += value.morning;
            afternoonTotal += value.afternoon;
            eveningTotal += value.evening;
         });
         item['oMorningTotal'] = morningTotal;
         item['oAternoonTotal'] = afternoonTotal;
         item['oEveningTotal'] = eveningTotal;
      });
      setDatas(response);
      setSpinner(false);
   };
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
   const onFinish = async (values) => {
      setLoading(true);
      const conf = {
         headers: {},
         params: {}
      };
      const defualtData = {
         patientId: PatientId,
         inpatientRequestId: ListId
      };
      const data = { ...defualtData, ...values };
      const response = await Post('inpatient/fluidBalance', token, conf, data);
      if (response === 201) {
         setIsOpen(false);
         getData();
      }
      setLoading(false);
   };
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   //
   const [status, setStatus] = useState(Number);
   const changeStatus = (e) => {
      setStatus(e);
   };
   useEffect(() => {
      getData();
   }, []);
   return (
      <>
         <div className="flow-root">
            <div className="float-left">
               <Button
                  type="primary"
                  onClick={() => {
                     setIsOpen(true);
                     form.resetFields();
                  }}
               >
                  Хуудас бөглөх
               </Button>
               <Button
                  className="ml-2"
                  icon={<PrinterOutlined />}
                  onClick={handlePrint}
               >
                  Хэвлэх
               </Button>
            </div>
            <div className="float-right"></div>
         </div>
         <Spin spinning={spinner}>
            <div ref={printRef}>
               <div className="page">
                  <div className="subpage">
                     <div className="flow-root">
                        <p className="float-right">СМ-3 хавсралт 13</p>
                     </div>
                     <p className="font-bold text-center">
                        ШИНГЭНИЙ БАЛАНС ХЯНАХ ХУУДАС
                     </p>
                     <div className="flow-root">
                        <div className="float-left inline-flex">
                           <p>Эмчлүүлэгчийн овог, нэр:</p>
                           <p>
                              {PatientData?.lastName.substring(0, 1) +
                                 '.' +
                                 PatientData?.firstName}
                           </p>
                        </div>
                        <div className="float-right inline-flex">
                           <p>Нас:</p>
                           <p>{getAge(PatientData?.registerNumber)}</p>
                           <p className="pl-1">Хүйс:</p>
                           <p>
                              {PatientData?.genderType === 'MAN' ? 'Эр' : 'Эм'}
                           </p>
                           <p className="pl-1">Тасаг:</p>
                           <p>{location?.state?.departmentName}</p>
                           <p className="pl-1">Өрөө:</p>
                           <p>{location?.state?.roomNumber}</p>
                        </div>
                     </div>
                     <Table bordered className="IO">
                        <thead>
                           <tr>
                              <th rowSpan={2} className="align-middle">
                                 Огноо
                              </th>
                              <th colSpan={5}>
                                 Биед орсон шингэн /ml хэмжих нэгж/
                              </th>
                              <th colSpan={5}>
                                 Биеэс гарсан шингэн /ml хэмжих нэгж/
                              </th>
                           </tr>
                           <tr>
                              <th>Хэрхэн</th>
                              <th>Өглөө</th>
                              <th>Өдөр</th>
                              <th>Орой</th>
                              <th>Тус бүpийн жэмжээ</th>
                              <th>Хэрхэн</th>
                              <th>Өглөө</th>
                              <th>Өдөр</th>
                              <th>Орой</th>
                              <th>Тус бүpийн жэмжээ</th>
                           </tr>
                        </thead>
                        <>
                           {datas.map((t, index) => {
                              return (
                                 <tbody key={index}>
                                    <tr>
                                       <th
                                          rowSpan={6}
                                          style={{
                                             writingMode: 'vertical-rl',
                                             textAlign: 'center',
                                             verticalAlign: 'middle'
                                          }}
                                       >
                                          {t.date}
                                       </th>
                                    </tr>
                                    {t.inputs.map((item, index) => {
                                       return (
                                          <tr key={index}>
                                             <th className="text-center">
                                                {item.how}
                                             </th>
                                             <td className="text-center">
                                                {item.morning}
                                             </td>
                                             <td className="text-center">
                                                {item.afternoon}
                                             </td>
                                             <td className="text-center">
                                                {item.evening}
                                             </td>
                                             <td className="text-center">
                                                {item.morning +
                                                   item.afternoon +
                                                   item.evening}
                                             </td>
                                             <th className="text-center">
                                                {t.outputs[index].how}
                                             </th>
                                             <td className="text-center">
                                                {t.outputs[index].morning}
                                             </td>
                                             <td className="text-center">
                                                {t.outputs[index].afternoon}
                                             </td>
                                             <td className="text-center">
                                                {t.outputs[index].evening}
                                             </td>
                                             <td className="text-center">
                                                {t.outputs[index].morning +
                                                   t.outputs[index].afternoon +
                                                   t.outputs[index].evening}
                                             </td>
                                          </tr>
                                       );
                                    })}
                                    <tr className="bg-gray-50">
                                       <th className="text-center">
                                          Нийт хэмжээ
                                       </th>
                                       <th className="text-center">
                                          {t.iMorningTotal}
                                       </th>
                                       <th className="text-center">
                                          {t.iAfternoonTotal}
                                       </th>
                                       <th className="text-center">
                                          {t.iEveningTotal}
                                       </th>
                                       <th className="text-center"></th>
                                       <th className="text-center">
                                          Нийт хэмжээ
                                       </th>
                                       <th className="text-center">
                                          {t.oMorningTotal}
                                       </th>
                                       <th className="text-center">
                                          {t.oAfternoonTotal}
                                       </th>
                                       <th className="text-center">
                                          {t.oEveningTotal}
                                       </th>
                                       <th className="text-center"></th>
                                    </tr>
                                    <tr>
                                       <th colSpan={2}>
                                          Сувилагчийн гарын үсэг
                                       </th>
                                       <th></th>
                                       <th></th>
                                       <th></th>
                                       <th></th>
                                       <th></th>
                                       <th></th>
                                       <th></th>
                                       <th></th>
                                       <th></th>
                                    </tr>
                                 </tbody>
                              );
                           })}
                        </>
                     </Table>
                     <p>
                        *Сувилагч энэ хүснэгтийг өөрөө хөтлөх буюу,
                        эмчлүүлэгчийн ар гэрийхэнд хэрхэн хөтлөх тухай мэдлэг
                        олгож, хөтлөх аргыг зааварчилна.
                     </p>
                  </div>
               </div>
            </div>
         </Spin>
         <Modal
            title="Нэмэх"
            open={isOpen}
            onOk={() =>
               form.validateFields().then((values) => {
                  onFinish(values);
               })
            }
            onCancel={() => setIsOpen(false)}
            width={'10cm'}
            confirmLoading={loading}
            cancelText="Болих"
            okText="Хадгалах"
         >
            <Form form={form} labelAlign="right" labelCol={{ span: 6 }}>
               <Form.Item label="Төрөл" name="type">
                  <Select style={{ width: '100%' }} onChange={changeStatus}>
                     <Option value={0}>Биед орсон шингэн</Option>
                     <Option value={1}>Биеэс гарсан шингэн</Option>
                  </Select>
               </Form.Item>
               {status === 0 ? (
                  <>
                     <Form.Item
                        label="Хэзээ"
                        name="statusIo"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <Select>
                           <Option value={0}>Өглөө</Option>
                           <Option value={1}>Өдөр</Option>
                           <Option value={2}>Орой</Option>
                        </Select>
                     </Form.Item>
                     <Form.Item
                        label="Амаар"
                        name="orally"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                     <Form.Item
                        label="Гуурсаар"
                        name="inTube"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                     <Form.Item
                        label="Судсаар"
                        name="vein"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                     <Form.Item
                        label="Бусад"
                        name="other"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                  </>
               ) : (
                  <>
                     <Form.Item
                        label="Төрөл"
                        name="statusIo"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <Select>
                           <Option value={0}>Өглөө</Option>
                           <Option value={1}>Өдөр</Option>
                           <Option value={2}>Орой</Option>
                        </Select>
                     </Form.Item>
                     <Form.Item
                        label="Шээсээр"
                        name="urine"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                     <Form.Item
                        label="Өтгөнөөр"
                        name="poo"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                     <Form.Item
                        label="Гуурсаар"
                        name="outTube"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                     <Form.Item
                        label="Бусад /бөөлжүүлэх/"
                        name="vomit"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                  </>
               )}
            </Form>
         </Modal>
      </>
   );
}
export default InputOutput;
