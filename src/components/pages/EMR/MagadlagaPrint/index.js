import { Button, Card, DatePicker, Form, Input, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import logo from '../../../../assets/logo/universal.png';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
const { RangePicker } = DatePicker;
const { Option } = Select;
function Index({ data }) {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [patientInfo, setPatientInfo] = useState([]);
   const printRef = useRef();
   const [form] = Form.useForm();
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   const getPatientInfo = async (patientId) => {
      const response = await Get('pms/patient/' + patientId, token, config);
      setPatientInfo(response);
   };
   const [ob, setOb] = useState(false);
   const [oa, setOa] = useState(false);
   const [hh, setHh] = useState(false);
   const [eu, setEu] = useState(false);
   const [sh, setSh] = useState(false);
   const [ae, setAe] = useState(false);
   const [pz, setPz] = useState(false);
   const [work, setWork] = useState(false);
   const [school, setSchool] = useState(false);
   const ddd = (index) => {
      if (index === 0) {
         setOb(!ob);
      } else if (index === 1) {
         setOa(!oa);
      } else if (index === 2) {
         setHh(!hh);
      } else if (index === 3) {
         setEu(!eu);
      } else if (index === 4) {
         setSh(!sh);
      } else if (index === 5) {
         setAe(!ae);
      } else {
         setPz(!pz);
      }
   };
   const dddd = (index) => {
      if (index === 0) {
         setWork(!work);
      } else {
         setSchool(!school);
      }
   };
   const RenderNotesDiagnose = (data) => {
      return data?.data?.map((diagnose, index) => {
         return (
            <div key={index} className="flex">
               <p className="font-semibold mx-2">{diagnose.type}: </p>
               <p>{'[' + diagnose.code + ']' + diagnose.nameMn}</p>
            </div>
         );
      });
   };
   useEffect(() => {
      getPatientInfo(data.patientId);
   }, [data]);
   return (
      <>
         <div></div>
         <div ref={printRef} className="magadlagaa">
            <div className="flex flex-wrap">
               <div className="basis-1/2">
                  <img style={{ width: '50%' }} src={logo} alt="logo" />
               </div>
               <div className="basis-1/2">
                  <p className="text-center">Эрүүл мэндын сайдын 2019 оны 12 дугаар сарын 30-ны</p>
                  <p className="text-center">өдрийн А/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
                  <p className="text-center font-bold">Эрүүл мэндийн бүртгэлийн маягт AM-8</p>
               </div>
            </div>
            <p className="text-center font-bold" style={{ fontSize: '18px' }}>
               ЭМНЭЛГИЙН МАГАДЛАГАА
            </p>
            <Table style={{ float: 'right', maxWidth: 250, textAlign: 'center' }}>
               <tbody>
                  <tr>
                     <td style={{ border: '0px', padding: 0 }}>РД</td>
                     <td
                        style={{
                           border: '1px solid black',
                           padding: 0,
                           minHeight: 20
                        }}
                     >
                        {patientInfo?.registerNumber?.slice(0, 1)}
                     </td>
                     <td
                        style={{
                           border: '1px solid black',
                           padding: 0,
                           minHeight: 20
                        }}
                     >
                        {patientInfo?.registerNumber?.slice(1, 2)}
                     </td>
                     <td
                        style={{
                           border: '1px solid black',
                           padding: 0,
                           minHeight: 20
                        }}
                     >
                        {patientInfo?.registerNumber?.slice(2, 3)}
                     </td>
                     <td
                        style={{
                           border: '1px solid black',
                           padding: 0,
                           minHeight: 20
                        }}
                     >
                        {patientInfo?.registerNumber?.slice(3, 4)}
                     </td>
                     <td
                        style={{
                           border: '1px solid black',
                           padding: 0,
                           minHeight: 20
                        }}
                     >
                        {patientInfo?.registerNumber?.slice(4, 5)}
                     </td>
                     <td
                        style={{
                           border: '1px solid black',
                           padding: 0,
                           minHeight: 20
                        }}
                     >
                        {patientInfo?.registerNumber?.slice(5, 6)}
                     </td>
                     <td
                        style={{
                           border: '1px solid black',
                           padding: 0,
                           minHeight: 20
                        }}
                     >
                        {patientInfo?.registerNumber?.slice(6, 7)}
                     </td>
                     <td
                        style={{
                           border: '1px solid black',
                           padding: 0,
                           minHeight: 20
                        }}
                     >
                        {patientInfo?.registerNumber?.slice(7, 8)}
                     </td>
                     <td
                        style={{
                           border: '1px solid black',
                           padding: 0,
                           minHeight: 20
                        }}
                     >
                        {patientInfo?.registerNumber?.slice(8, 9)}
                     </td>
                     <td
                        style={{
                           border: '1px solid black',
                           padding: 0,
                           minHeight: 20
                        }}
                     >
                        {patientInfo?.registerNumber?.slice(9, 10)}
                     </td>
                  </tr>
               </tbody>
            </Table>
            <br />
            <div className="inline-flex">
               <p style={{ fontSize: '14px' }}>1.</p>
               <p style={{ fontSize: '14px' }}>Эцэг/эх/-ийн нэр</p>
               <p style={{ fontSize: '14px' }} className="underline px-1">
                  {patientInfo?.lastName}
               </p>
               <p style={{ fontSize: '14px' }}>Нэр</p>
               <p style={{ fontSize: '14px' }} className="underline px-1">
                  {patientInfo?.firstName}
               </p>
               <p style={{ fontSize: '14px' }}>2.</p>
               <p style={{ fontSize: '14px' }}>{`Хүйс:(зур)`}</p>
               <p
                  style={{ fontSize: '14px' }}
                  className={patientInfo?.genderType === 'MAN' ? 'underline pr-1' : 'pr-1'}
               >
                  эрэгтэй
               </p>
               <p style={{ fontSize: '14px' }}>,</p>
               <p
                  style={{ fontSize: '14px' }}
                  className={patientInfo?.genderType === 'WOMEN' ? 'underline pr-1' : 'pr-1'}
               >
                  эмэгтэй
               </p>
            </div>
            <div className="inline-flex">
               <p style={{ fontSize: '14px' }}>3.</p>
               <p style={{ fontSize: '14px' }}>Нас</p>
               <p style={{ fontSize: '14px' }} className="underline pr-1">
                  {patientInfo?.age}
               </p>
               <p style={{ fontSize: '14px' }}>4. Өвчний түүх (ИЭМД)-ийн дугаар</p>
               <p style={{ fontSize: '14px' }} className="underline pr-1">
                  <Input />
               </p>
            </div>
            <div>
               <p style={{ fontSize: '14px' }}>
                  5. Тогтмол хаяг______________________________________________________________
               </p>
               <p style={{ fontSize: '14px' }}>
                  _______________________________________________________________________________
               </p>
            </div>
            <div>
               <p style={{ fontSize: '14px' }}>
                  6. Ажлын газар, албан тушаал______________________________________________
               </p>
               <p style={{ fontSize: '14px' }}>
                  _______________________________________________________________________________
               </p>
            </div>
            <div>
               <p style={{ fontSize: '14px' }}>
                  7. Мэргэжил_________________________________________________________________
               </p>
               <p style={{ fontSize: '14px' }}>
                  _______________________________________________________________________________
               </p>
            </div>
            <div className="inline-flex">
               <p style={{ fontSize: '14px' }}>8.</p>
               <p style={{ fontSize: '14px' }}>(зур)</p>
               <a style={{ fontSize: '14px' }} className={ob ? 'underline pr-1' : 'pr-1'} onClick={() => ddd(0)}>
                  өвчтэй байсан
               </a>
               <p style={{ fontSize: '14px' }}>,</p>
               <a style={{ fontSize: '14px' }} className={oa ? 'underline pr-1' : 'pr-1'} onClick={() => ddd(1)}>
                  өвчтөн асрамжилсан
               </a>
               <p style={{ fontSize: '14px' }}>,</p>
               <a style={{ fontSize: '14px' }} className={hh ? 'underline pr-1' : 'pr-1'} onClick={() => ddd(2)}>
                  хөл хоригдсон
               </a>
               <p style={{ fontSize: '14px' }}>,</p>
               <a style={{ fontSize: '14px' }} className={eu ? 'underline pr-1' : 'pr-1'} onClick={() => ddd(3)}>
                  эмчид үзүүлсэн
               </a>
               <p style={{ fontSize: '14px' }}>,</p>
               <a style={{ fontSize: '14px' }} className={sh ? 'underline pr-1' : 'pr-1'} onClick={() => ddd(4)}>
                  шилжилгээ
               </a>
               <p style={{ fontSize: '14px' }}>,</p>
               <a style={{ fontSize: '14px' }} className={ae ? 'underline pr-1' : 'pr-1'} onClick={() => ddd(5)}>
                  ариутгал эмчилгээ
               </a>
               <p style={{ fontSize: '14px' }}>,</p>
            </div>
            <div className="inline-flex align-middle">
               <a style={{ fontSize: '14px' }} className={pz ? 'underline pr-1' : 'pr-1'} onClick={() => ddd(6)}>
                  протез
               </a>
               <p style={{ fontSize: '14px' }}>хийлгэсэн</p>
               <DatePicker picker="year" />
               <p style={{ fontSize: '14px' }}>оны</p>
               <DatePicker picker="month" format={'MM'} />
               <p style={{ fontSize: '14px' }}>сарын</p>
               <DatePicker picker="date" format={'DD'} />
               <p style={{ fontSize: '14px' }}>өдрөөс</p>
               <DatePicker picker="year" />
               <p style={{ fontSize: '14px' }}>оны</p>
               <DatePicker picker="month" format={'MM'} />
               <p style={{ fontSize: '14px' }}>сарын</p>
               <DatePicker picker="date" format={'DD'} />
               <p style={{ fontSize: '14px' }}>өдөр</p>
            </div>
            <br />
            <div className="inline-flex">
               <p style={{ fontSize: '14px' }}>хүртэл (зур)</p>
               <a style={{ fontSize: '14px' }} className={work ? 'underline pr-1' : 'pr-1'} onClick={() => dddd(0)}>
                  ажлаас
               </a>
               <p style={{ fontSize: '14px' }}>,</p>
               <a style={{ fontSize: '14px' }} className={school ? 'underline pr-1' : 'pr-1'} onClick={() => dddd(1)}>
                  хичээлээс
               </a>
               <p style={{ fontSize: '14px' }}>{`)`}</p>
               <p style={{ fontSize: '14px' }}>чөлөөлснийг магадлав.</p>
            </div>
            <br />
            <div>
               <p style={{ fontSize: '14px' }}>
                  9. Асрамжинд байсан хүний эцэг /эх/-ийн нэр, хэн болох____________________________
               </p>
               <p style={{ fontSize: '14px' }}>
                  _______________________________________________________________________________
               </p>
            </div>
            <div className="inline-flex">
               <p style={{ fontSize: '14px' }}>10. Үндсэн онош</p>
               {data['diagnose'] && <RenderNotesDiagnose data={JSON.parse(data['diagnose'])} />}
            </div>
            <br />
            <div className="flex flex-wrap">
               <div className="basis-1/2 self-center flex">
                  {/* <p>Tэмдэг {today}</p> */}
                  <p className="pr-4">Тэмдэг</p>
                  <p className="px-1">
                     {moment(new Date()).year() +
                        ' ' +
                        'он ' +
                        (moment(new Date()).month() + 1) +
                        ' ' +
                        'сар ' +
                        moment(new Date()).date() +
                        ' ' +
                        'өдөр'}
                  </p>
               </div>
               <div className="basis-1/2">
                  <p>Ерөнхий эмч____________________________________</p>
                  <br />
                  <p>Эмчлэгч эмч {data?.employees?.lastName?.slice(0, 1) + '.' + data?.employees?.firstName}</p>
               </div>
            </div>
            <p className="font-bold" style={{ fontSize: '16px' }}>
               СУНГАЛТ
            </p>
            <div>
               <p style={{ fontSize: '14px' }}>
                  1. _______ оны _______ сарын _______ өдрөөс _______ оны _______ сарын _______ өдөр хүртэл нийт
               </p>
               <p style={{ fontSize: '14px' }}>_____________________хоногоор сунгав</p>
            </div>
            <div className="flex flex-wrap">
               <div className="basis-1/2 text-center">
                  <p className="pr-4">Тэмдэг</p>
               </div>
               <div className="basis-1/2">
                  <p>Эмчийн гарын үсэг______________________</p>
               </div>
            </div>
            <div>
               <p style={{ fontSize: '14px' }}>
                  2. _______ оны _______ сарын _______ өдрөөс _______ оны _______ сарын _______ өдөр хүртэл нийт
               </p>
               <p style={{ fontSize: '14px' }}>_____________________хоногоор сунгав</p>
            </div>
            <div className="flex flex-wrap">
               <div className="basis-1/2 text-center">
                  <p className="pr-4">Тэмдэг</p>
               </div>
               <div className="basis-1/2">
                  <p>Эмчийн гарын үсэг______________________</p>
               </div>
            </div>
            <div>
               <p style={{ fontSize: '14px' }}>
                  3. _______ оны _______ сарын _______ өдрөөс _______ оны _______ сарын _______ өдөр хүртэл нийт
               </p>
               <p style={{ fontSize: '14px' }}>_____________________хоногоор сунгав</p>
            </div>
            <div className="flex flex-wrap">
               <div className="basis-1/2 text-center">
                  <p className="pr-4">Тэмдэг</p>
               </div>
               <div className="basis-1/2">
                  <p>Эмчийн гарын үсэг______________________</p>
               </div>
            </div>
         </div>
         <Button onClick={() => handlePrint()}>Хэвлэх</Button>
      </>
   );
}
export default Index;
