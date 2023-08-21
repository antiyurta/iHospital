import {
   Button,
   Input,
   InputNumber,
   Modal,
   Collapse,
   Col,
   Row,
   Radio,
   Divider,
   TimePicker,
   Spin,
   Form,
   Checkbox,
   DatePicker
} from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';

const { TextArea } = Input;
const { Panel } = Collapse;

function Epicriz({ ListId, PatientId, PatientData }) {
   const printRef = useRef();
   const [spinner, setSpinner] = useState(false);
   const token = useSelector(selectCurrentToken);

   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });

   return (
      <>
         <div className="page">
            <div className="subpage">
               <p className="text-center py-4" style={{ fontSize: '15px', fontWeight: 'bold' }}>
                  ЭМНЭЛГЭЭС ГАРАХ, ШИЛЖИХ ҮЕИЙН ЭПИКРИЗ
               </p>
               <div className="flex flex-wrap">
                  <div className="w-1/2">
                     <p className="dstory">
                        Эцэг /эх/-ийн нэр
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'lastName']}>
                              <Input disabled={true} />
                           </Form.Item>
                        </span>
                     </p>
                  </div>
                  <div className="w-1/2">
                     <p className="dstory">
                        <span>
                           Өөрийн нэр
                           <span>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'firstName']}>
                                 <Input disabled={true} />
                              </Form.Item>
                           </span>
                        </span>
                     </p>
                  </div>
                  <div className="w-2/3">
                     <p className="dstory">
                        <span>
                           Хүйс
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'genderType']}>
                              <Checkbox.Group className="ddd ml-0 inline">
                                 <Checkbox className="test ml-2" value={'MAN'}>
                                    Эрэгтэй
                                 </Checkbox>
                                 <Checkbox className="test" value={'WOMEN'}>
                                    Эмэгтэй
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </span>
                        &nbsp;
                        <span>
                           Нас
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'age']}>
                              <Input disabled={true} />
                           </Form.Item>
                        </span>
                     </p>
                  </div>
                  <div className="w-full">
                     <p className="dstory">
                        <span>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={'createdAt'}
                              getValueProps={(i) => ({ value: moment(i) })}
                           >
                              <DatePicker disabled={true} format={'YYYY'} />
                           </Form.Item>
                        </span>
                        оны
                        <span>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={'createdAt'}
                              getValueProps={(i) => ({ value: moment(i) })}
                           >
                              <DatePicker disabled={true} format={'MM'} />
                           </Form.Item>
                        </span>
                        сарын
                        <span>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={'createdAt'}
                              getValueProps={(i) => ({ value: moment(i) })}
                           >
                              <DatePicker disabled={true} format={'DD'} />
                           </Form.Item>
                        </span>
                        -нд
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'epicrizDiagnose']}>
                              <Input style={{ width: 380 }} />
                           </Form.Item>
                        </span>
                     </p>
                  </div>
                  <div className="w-full">
                     <p className="dstory">
                        оношоор эмнэлэгт &nbsp;
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'hospitalDayDuration']}>
                              <Input className="w-20" />
                           </Form.Item>
                        </span>
                        хоног хэвтэж эмчлүүлэв.
                     </p>
                  </div>
                  <div className="w-full">
                     <p className="dstory">
                        Нийт хэрэглэсэн эмийн зардал (₮): нийт дүн
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'hospitalPayment']}>
                              <Input style={{ width: 200 }} />
                           </Form.Item>
                        </span>
                        тасагт
                     </p>
                  </div>
                  <div className="w-full">
                     <p className="dstory">
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'departmentName']}>
                              <Input style={{ width: 190 }} />
                           </Form.Item>
                        </span>
                        хагалгаанд
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'surgery']}>
                              <Input style={{ width: 150 }} />
                           </Form.Item>
                        </span>
                        мэдээ алдуулалтанд
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'anesthesia']}>
                              <Input style={{ width: 170 }} />
                           </Form.Item>
                        </span>
                     </p>
                  </div>
                  <div className="w-5/12 p-2 dstory">
                     <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'bodyConditionAround']}>
                        <Checkbox.Group>
                           <table
                              style={{
                                 borderWidth: '1px',
                                 borderColor: '#aaaaaa',
                                 borderStyle: 'solid',
                                 width: '100%'
                              }}
                              className="border-collapse border border-slate-500"
                           >
                              <thead>
                                 <tr>
                                    <th className="border border-slate-600 p-1">Биеийн байдал</th>
                                    <th className="border border-slate-600 p-1">Ирэх үед</th>
                                    <th>Гарах үед</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Хөнгөн</td>
                                    <td className="border border-slate-600 p-1 text-center"></td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={1}>
                                          1
                                       </Checkbox>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Дунд</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={2}>
                                          1
                                       </Checkbox>
                                    </td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={3}>
                                          2
                                       </Checkbox>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Хүндэвтэр</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={4}>
                                          2
                                       </Checkbox>
                                    </td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={5}>
                                          3
                                       </Checkbox>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Хүнд</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={6}>
                                          3
                                       </Checkbox>
                                    </td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={7}>
                                          4
                                       </Checkbox>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Маш хүнд</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={8}>
                                          4
                                       </Checkbox>
                                    </td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={9}>
                                          4
                                       </Checkbox>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </Checkbox.Group>
                     </Form.Item>
                  </div>
                  <div className="w-7/12 p-2 dstory">
                     <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'examinations']}>
                        <Checkbox.Group>
                           <table
                              style={{
                                 borderWidth: '1px',
                                 borderColor: '#aaaaaa',
                                 borderStyle: 'solid',
                                 width: '100%'
                              }}
                              className="border-collapse border border-slate-500"
                           >
                              <thead>
                                 <tr>
                                    <th colSpan={4} className="text-center">
                                       Хийгдсэн шинжилгээ
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Эмнэл зүйн</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={1}>
                                          1
                                       </Checkbox>
                                    </td>
                                    <td className="border border-slate-600 p-1">Гэрлийн</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={8}>
                                          8
                                       </Checkbox>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Биохими</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={2}>
                                          2
                                       </Checkbox>
                                    </td>
                                    <td className="border border-slate-600 p-1">ЭКГ</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={9}>
                                          9
                                       </Checkbox>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Нян судлал</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={3}>
                                          3
                                       </Checkbox>
                                    </td>
                                    <td className="border border-slate-600 p-1">ЭХО</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={10}>
                                          10
                                       </Checkbox>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Вирус</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={4}>
                                          4
                                       </Checkbox>
                                    </td>
                                    <td className="border border-slate-600 p-1">Уян дуран</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={11}>
                                          11
                                       </Checkbox>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Эд, эсийн</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={5}>
                                          5
                                       </Checkbox>
                                    </td>
                                    <td className="border border-slate-600 p-1">Компьютер томографи</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={12}>
                                          12
                                       </Checkbox>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Иммунологи</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={6}>
                                          6
                                       </Checkbox>
                                    </td>
                                    <td className="border border-slate-600 p-1">Соронзон томографи</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={13}>
                                          13
                                       </Checkbox>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Бусад</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={7}>
                                          7
                                       </Checkbox>
                                    </td>
                                    <td className="border border-slate-600 p-1">Хийгдээгүй</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={14}>
                                          14
                                       </Checkbox>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </Checkbox.Group>
                     </Form.Item>
                  </div>
                  <div className="w-full">
                     <p className="dstory">
                        Үндсэн онош:
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'main']}>
                              <Input className="w-10/12" />
                           </Form.Item>
                        </span>
                     </p>
                     <p className="dstory">
                        Хүндрэл:
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'complications']}>
                              <Input className="w-10/12" />
                           </Form.Item>
                        </span>
                     </p>
                     <p className="dstory">
                        Дагалдах онош:
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'combo']}>
                              <Input className="w-10/12" />
                           </Form.Item>
                        </span>
                     </p>
                  </div>
                  <div className="w-full">
                     <p className="dstory">
                        Шинжилгээний өөрчлөлтүүд /зөвхөн өөрчлөлт бүхий шинжилгээний үзүүлэлтүүдийг бичнэ/
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'examinationChanges']}>
                              <Input style={{ width: 100 }} />
                           </Form.Item>
                        </span>
                     </p>
                     <p className="dstory">
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'examinationChanges2']}>
                              <Input className="w-full" />
                           </Form.Item>
                        </span>
                     </p>
                  </div>
                  <div className="w-full">
                     <p className="dstory">
                        Цусны ерөнхий шинжилгээ:
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'generalBloodTest']}>
                              <Input className="w-9/12" />
                           </Form.Item>
                        </span>
                     </p>
                     <p className="dstory">
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'generalBloodTest2']}>
                              <Input className="w-full" />
                           </Form.Item>
                        </span>
                     </p>
                     <p className="dstory">
                        Цусны биохимийн шинжилгээ:
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'biochemicalBlood']}>
                              <Input className="w-8/12" />
                           </Form.Item>
                        </span>
                     </p>
                     <p className="dstory">
                        Вирүс, маркерийн шинжилгээ:
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'virusMarker']}>
                              <Input className="w-8/12" />
                           </Form.Item>
                        </span>
                     </p>
                     <p className="dstory">
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'virusMarker2']}>
                              <Input className="w-full" />
                           </Form.Item>
                        </span>
                     </p>
                     <p className="dstory">
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'virusMarker3']}>
                              <Input className="w-full" />
                           </Form.Item>
                        </span>
                     </p>
                  </div>
                  <div className="w-5/12 p-2 dstory">
                     <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'treatments']}>
                        <Checkbox.Group className="w-full">
                           <table
                              style={{
                                 borderWidth: '1px',
                                 borderColor: '#aaaaaa',
                                 borderStyle: 'solid',
                                 width: '100%'
                              }}
                              className="border-collapse border border-slate-500"
                           >
                              <thead>
                                 <tr>
                                    <th
                                       rowSpan={5}
                                       className="border border-slate-600 p-1"
                                       style={{
                                          writingMode: 'vertical-rl',
                                          textAlign: 'center',
                                          verticalAlign: 'middle',
                                          height: 20,
                                          transform: 'rotate(180deg)'
                                       }}
                                    >
                                       Хийгдсэн эмчилгээ
                                    </th>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Эмийн</td>
                                    <td className="border border-slate-600 text-center">
                                       <Checkbox className="test2" value={1}>
                                          1
                                       </Checkbox>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Эмийн бус</td>
                                    <td className="border border-slate-600 text-center">
                                       <Checkbox className="test2" value={2}>
                                          2
                                       </Checkbox>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Мэс заслын</td>
                                    <td className="border border-slate-600 p-1 text-center">
                                       <Checkbox className="test2" value={3}>
                                          3
                                       </Checkbox>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="border border-slate-600 p-1">Мэс заслын</td>
                                    <td className="border border-slate-600 text-center">
                                       <Checkbox className="test2" value={4}>
                                          4
                                       </Checkbox>
                                    </td>
                                 </tr>
                              </thead>
                           </table>
                        </Checkbox.Group>
                     </Form.Item>
                  </div>
                  <div className="w-7/12 p-2">
                     <table
                        style={{
                           borderWidth: '1px',
                           borderColor: '#aaaaaa',
                           borderStyle: 'solid',
                           width: '100%'
                        }}
                        className="border-collapse border border-slate-500"
                     >
                        <thead>
                           <tr>
                              <th className="dstory border border-slate-600 p-1">
                                 <p>Бусад эмчилгээ</p>
                                 <span>
                                    <Form.Item
                                       shouldUpdate
                                       className="mb-0"
                                       noStyle
                                       name={['epicriz', 'otherTreatment']}
                                    >
                                       <Input className="w-full" />
                                    </Form.Item>
                                 </span>
                                 <span>
                                    <Form.Item
                                       shouldUpdate
                                       className="mb-0"
                                       noStyle
                                       name={['epicriz', 'otherTreatment2']}
                                    >
                                       <Input className="w-full" />
                                    </Form.Item>
                                 </span>
                                 <span>
                                    <Form.Item
                                       shouldUpdate
                                       className="mb-0"
                                       noStyle
                                       name={['epicriz', 'otherTreatment3']}
                                    >
                                       <Input className="w-full" />
                                    </Form.Item>
                                 </span>
                                 <span className="font-normal">
                                    Цус, цусан бүтээгдэхүүн сэлбэсэн эсэх
                                    <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'bloodReplace']}>
                                       <Checkbox.Group className="inline">
                                          <Checkbox className="test" value={0}>
                                             Тийм
                                          </Checkbox>
                                          ,
                                          <Checkbox className="ml-0 test" value={1}>
                                             Үгүй
                                          </Checkbox>
                                       </Checkbox.Group>
                                    </Form.Item>
                                    /зур/
                                 </span>
                              </th>
                           </tr>
                        </thead>
                     </table>
                  </div>
                  <div className="w-full">
                     <p className="dstory">
                        <span>
                           Мэс заслын эмчилгээ
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'isSurgery']}>
                              <Checkbox.Group className="inline">
                                 <Checkbox className="test" value={0}>
                                    Хийсэн
                                 </Checkbox>
                                 ,
                                 <Checkbox className="ml-0 test" value={1}>
                                    Үгүй
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                           /зур/
                        </span>
                        Мэс заслын нэр
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'surguryName']}>
                              <Input className="w-5/12" />
                           </Form.Item>
                        </span>
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'surguryName2']}>
                              <Input className="w-full" />
                           </Form.Item>
                        </span>
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['patient', 'surguryName3']}>
                              <Input className="w-full" />
                           </Form.Item>
                        </span>
                     </p>
                     <p className="dstory">
                        <span>
                           Шарх эдгэрэлт
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'healing']}>
                              <Checkbox.Group className="inline">
                                 <Checkbox className="test" value={0}>
                                    анхдагчаар
                                 </Checkbox>
                                 ,
                                 <Checkbox className="ml-0 test" value={1}>
                                    хоёрдогчоор
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                           /зур/
                        </span>
                     </p>
                     <p className="dstory">
                        <span>
                           Мэс заслын дараах хүндрэл
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['epicriz', 'PostoperativeComplications']}
                           >
                              <Checkbox.Group className="inline">
                                 <Checkbox className="test" value={0}>
                                    байсан
                                 </Checkbox>
                                 ,
                                 <Checkbox className="ml-0 test" value={1}>
                                    үгүй
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                           /зур/
                        </span>
                        Хүндрэлийн нэр
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'complicationsName1']}>
                              <Input className="w-5/12" />
                           </Form.Item>
                        </span>
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'complicationsName2']}>
                              <Input className="w-full" />
                           </Form.Item>
                        </span>
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'complicationsName3']}>
                              <Input className="w-full" />
                           </Form.Item>
                        </span>
                     </p>
                  </div>
                  <div className="w-full">
                     <p className="dstory text-center">
                        Эмчлэгч эмч
                        <span>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'doctorName']}>
                              <Input className="w-40" />
                           </Form.Item>
                        </span>
                     </p>
                     <p className="dstory text-center">
                        <p className="dstory">
                           <span>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'hospitalEndYear']}>
                                 <Input className="w-10" />
                              </Form.Item>
                           </span>
                           он
                           <span>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'hospitalEndMonth']}>
                                 <Input className="w-10" />
                              </Form.Item>
                           </span>
                           сар
                           <span>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['epicriz', 'hospitalEndDay']}>
                                 <Input className="w-10" />
                              </Form.Item>
                           </span>
                           өдөр
                        </p>
                     </p>
                  </div>
               </div>
            </div>
         </div>
         {/* <div className="flex flex-wrap">
            <div className="w-full p-1">
               <div className="float-left">
                  <Button onClick={() => handlePrint()} className="ml-2">
                     Хэвлэх
                  </Button>
               </div>
               <div className="float-right">
                  <Button title="Сэргээх" type="primary" onClick={() => {}}>
                     <ReloadOutlined spin={spinner} />
                  </Button>
               </div>
            </div>
         </div>
         <div style={{ display: 'none' }}>
            <div ref={printRef} className="p-8">
               <h2 className="font-bold text-center">
                  ЭМНЭЛГЭЭС ГАРАХ, ШИЛЖИХ ҮЕИЙН ЭПИКРИЗ
               </h2>
               <Row>
                  <Col span={6}>
                     Эцэг /эх/ -ийн нэр ___________________________________
                  </Col>
                  <Col span={12}>
                     Өөрийн нэр ___________________________________
                  </Col>
               </Row>
               <Row>
                  <Col span={6}>Хүйс: эрэгтэй, эмэгтэй</Col>
                  <Col span={12}>Нас ______________</Col>
               </Row>
               <Row>
                  <Col span={24}>
                     ______ оны ____ сарын ____ -нд
                     ____________________________________________________________________________________________________________________________________________
                     оношоор эмнэлэгт ____________ хоног хэвтэж эмчлүүлэв.
                  </Col>
               </Row>
               <Row>
                  <Col span={24}>
                     Нийт хэрэглэсэн эмийн зардал ( ₮ ): нийт дүн
                     ______________________________________ тасагт
                     ______________________________________ хагалгаанд
                     ______________________________________ мэдээ алдуулалтанд
                     ______________________________________
                  </Col>
               </Row>
               <Row className="flex justify-between">
                  <Col span={8}>
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
                              <th className="border border-slate-600 p-1">
                                 Биеийн байдал
                              </th>
                              <th className="border border-slate-600 p-1">
                                 Гарах үед
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td className="border border-slate-600 p-1">
                                 Хөнгөн
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 1
                              </td>
                           </tr>
                           <tr>
                              <td className="border border-slate-600 p-1">
                                 Дунд
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 2
                              </td>
                           </tr>

                           <tr>
                              <td className="border border-slate-600 p-1">
                                 Хүндэвтэр
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 3
                              </td>
                           </tr>

                           <tr>
                              <td className="border border-slate-600 p-1">
                                 Хүнд
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 4
                              </td>
                           </tr>

                           <tr>
                              <td className="border border-slate-600 p-1">
                                 Маш хүнд
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 5
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </Col>
                  <Col span={12}>
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
                              <th
                                 colSpan="4"
                                 className="border border-slate-600 p-1 text-center"
                              >
                                 Хийгдсэн шинжилгээ
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td className="border border-slate-600 p-1">
                                 Эмнэл зүйн
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 1
                              </td>
                              <td className="border border-slate-600 p-1">
                                 Гэрлийн
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 8
                              </td>
                           </tr>
                           <tr>
                              <td className="border border-slate-600 p-1">
                                 Биохими
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 2
                              </td>
                              <td className="border border-slate-600 p-1">
                                 ЭКГ
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 9
                              </td>
                           </tr>
                           <tr>
                              <td className="border border-slate-600 p-1">
                                 Нян судлал
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 3
                              </td>
                              <td className="border border-slate-600 p-1">
                                 ЭХО
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 10
                              </td>
                           </tr>
                           <tr>
                              <td className="border border-slate-600 p-1">
                                 Вирус
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 4
                              </td>
                              <td className="border border-slate-600 p-1">
                                 ЭХО
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 11
                              </td>
                           </tr>
                           <tr>
                              <td className="border border-slate-600 p-1">
                                 Эд, эсийн
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 5
                              </td>
                              <td className="border border-slate-600 p-1">
                                 Компьютер томографи
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 12
                              </td>
                           </tr>
                           <tr>
                              <td className="border border-slate-600 p-1">
                                 Иммунологи
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 6
                              </td>
                              <td className="border border-slate-600 p-1">
                                 Соронзон томографи
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 13
                              </td>
                           </tr>
                           <tr>
                              <td className="border border-slate-600 p-1">
                                 Шимэгч хорхойн өндөг үзэх
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 7
                              </td>
                              <td className="border border-slate-600 p-1">
                                 Хийгдээгүй
                              </td>
                              <td className="border border-slate-600 p-1 text-center">
                                 14
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </Col>
               </Row>
               <Row>
                  <Col span={24}>
                     Үндсэн онош:
                     _______________________________________________________________________________________________________________________________
                  </Col>
                  <Col span={24}>
                     Хүндрэл:
                     ____________________________________________________________________________________________________________________________________
                  </Col>
               </Row>
               <Row>
                  <Col span={24}>
                     Дагалдах онош:
                     _____________________________________________________________________________________________________________________________
                  </Col>
                  <Col span={24}>
                     Хийгдсэн ажилбар, мэс засал:
                     ______________________________________________________________________________________________________________
                  </Col>
               </Row>
               <Row>
                  <Col span={24}>
                     Картанд тэмдэглэл хөтөлсөн эсэх /зур/: тийм, үгүй
                  </Col>
                  <Col span={24}>
                     Цаашид мөрдвөл зохих дэглэм, хяналтын талаархи зөвлөгөө
                     /тодорхой бичнэ үү/
                  </Col>
                  <Col span={24}>
                     Шилжсэн /зур/: аймаг, дүүргийн эмнэлэг, төрөлжсөн нарийн
                     мэргэжлийн эмнэлэг, бусад
                     ___________________________________
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
                  <tbody>
                     <tr>
                        <td colSpan="2" className="border border-slate-600 p-1">
                           Сар/Өдөр
                        </td>
                        <td className="border border-slate-600 p-1">ЙЙ</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div> */}
      </>
   );
}

export default Epicriz;
