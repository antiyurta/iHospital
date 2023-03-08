import { Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
import React from 'react';
const { TextArea } = Input;
function Index({ mainHeight, comboHeight, complicationsHeight, subHeight }) {
   const style = {
      minHeight: `${mainHeight} !important`,
      width: '100%'
   };
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="story mb-0">
               <thead>
                  <tr>
                     <th className="text-center" colSpan={3}>
                        КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ
                     </th>
                  </tr>
                  <tr style={{ height: mainHeight }}>
                     <td colSpan={3}>
                        <p className="font-bold">Үндсэн онош</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicDiagnoses', 'main']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 minHeight: mainHeight - 20,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                  </tr>
                  <tr style={{ height: comboHeight }}>
                     <td colSpan={3}>
                        <p className="font-bold">Дагалдах онош</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicDiagnoses', 'combo']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 minHeight: comboHeight - 20,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                  </tr>
                  <tr style={{ height: complicationsHeight }}>
                     <td colSpan={3}>
                        <p className="font-bold">Хүндрэл</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicDiagnoses', 'complications']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 minHeight: complicationsHeight - 20,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                  </tr>
                  <tr style={{ height: subHeight }}>
                     <td>
                        <p className="font-bold">Ялган оношлох эмгэгүүд</p>
                        <p className="font-bold">ба хам шинжүүд</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicDiagnoses', 'syndromes']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 minHeight: subHeight - 40,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                     <td>
                        <p className="font-bold">Хийгдэх</p>
                        <p className="font-bold">шинжилгээ</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicDiagnoses', 'examination']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 minHeight: subHeight - 40,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                     <td>
                        <p className="font-bold">Яаралтай хийгдэх эмчилгээ</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['clinicDiagnoses', 'immediateTreatment']}
                        >
                           <TextArea
                              className="amaraInputTextArea"
                              style={{
                                 minHeight: subHeight - 20,
                                 width: '100%'
                              }}
                           />
                        </Form.Item>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={3}>
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
export default Index;
