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
   Spin
} from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, Post } from '../../../comman';
import mn from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import dayjs from 'dayjs';
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
         <div className="flex flex-wrap">
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
         <div
         //   style={{ display: "none" }}
         >
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
         </div>
      </>
   );
}

export default Epicriz;
