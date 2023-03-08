import React from 'react';
import { Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
const { TextArea } = Input;
function Primary({ examinationHeight, diagnosticTestHeight }) {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="story mb-0">
               <thead>
                  <tr>
                     <th className="text-center">КЛИНИКИЙН ОНОШИЙН ҮНДЭСЛЭЛ</th>
                  </tr>
                  <tr>
                     <td>
                        <p className="font-bold">Зовиураас:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicBasisDiagnoses', 'pain']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 // minHeight: mainHeight - 20,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p className="font-bold">Асуумжаас:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicBasisDiagnoses', 'question']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 // minHeight: mainHeight - 20,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p className="font-bold">Бодит үзлэгээс:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicBasisDiagnoses', 'actualInspection']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 // minHeight: mainHeight - 20,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                  </tr>
                  <tr style={{ height: examinationHeight }}>
                     <td>
                        <p className="font-bold">Лабораторийн шинжилгээ:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicBasisDiagnoses', 'examination']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 // minHeight: mainHeight - 20,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                  </tr>
                  <tr style={{ height: diagnosticTestHeight }}>
                     <td>
                        <p className="font-bold">Үйл оношийн шинжилгээ:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicBasisDiagnoses', 'diagnosticTest']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 // minHeight: mainHeight - 20,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p className="font-bold">Үндсэн онош:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicBasisDiagnoses', 'main']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 // minHeight: mainHeight - 20,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p className="font-bold">Дагалдах онош:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicBasisDiagnoses', 'combo']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 // minHeight: mainHeight - 20,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p className="font-bold">Хүндрэл:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicBasisDiagnoses', 'complications']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 // minHeight: mainHeight - 20,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th>
                        <div className="flex flex-wrap">
                           <div className="basis-1/3">
                              <p className="font-normal">Эмчийн нэр:</p>
                           </div>
                           <div className="basis-1/3">
                              <p className="font-normal">Гарын үсэг:</p>
                           </div>
                           <div className="basis-1/3">
                              <p className="font-normal">
                                 он 2012 сар 17 өдөр 22
                              </p>
                           </div>
                        </div>
                     </th>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Primary;
