import { Button, Input, InputNumber, Modal, Collapse, Col, Row, Radio, Divider, TimePicker, Spin } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, Post } from '../../../comman';
import mn from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import dayjs from 'dayjs';
import { useReactToPrint } from 'react-to-print';

const { TextArea } = Input;
const { Panel } = Collapse;

function PainAssessment({ PatientId, ListId }) {
   const token = useSelector(selectCurrentToken);
   const [spinner, setSpinner] = useState(false);
   const [isOpenNoteModal, setIsOpenNoteModal] = useState(false);
   const printRef = useRef();

   const [selectedPainData, setSelectedPainData] = useState('');
   const [painDataList, setPainDataList] = useState([]);
   const [painData, setPainData] = useState({
      patientId: PatientId,
      daysAfterSurgery: '',
      time: '',
      locationPain: '',
      painPower: '',
      whatPain: '',
      isWhenGettingUp: '',
      isAlways: '',
      isSleepPain: '',
      isFeeding: '',
      isDuringEmission: '',
      isWhenSittingStandingUp: '',
      movement: '',
      isHotWeight: '',
      isColdWeight: '',
      isNeedle: '',
      isExercise: '',
      isMassage: '',
      isPhysiotherapy: '',
      other: '',
      medicineAmount: '',
      inpatientRequestId: ListId
   });

   const TimeFormat = 'HH:mm';

   const val10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const yesNo = [
      { value: true, label: 'Тийм' },
      { value: false, label: 'Үгүй' }
   ];

   const conf = {
      headers: {},
      params: {}
   };

   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });

   const onFinish = async () => {
      const data = {
         ...painData,
         time: moment(painData.time).format('HH:mm')
      };
      const response = await Post('inpatient/pain-assesment', token, conf, data);
      // console.log("res", response);
      if (response === 201) {
         setPainData({
            patientId: PatientId,
            daysAfterSurgery: '',
            time: '',
            locationPain: '',
            painPower: '',
            whatPain: '',
            isWhenGettingUp: '',
            isAlways: '',
            isSleepPain: '',
            isFeeding: '',
            isDuringEmission: '',
            isWhenSittingStandingUp: '',
            movement: '',
            isHotWeight: '',
            isColdWeight: '',
            isNeedle: '',
            isExercise: '',
            isMassage: '',
            isPhysiotherapy: '',
            other: '',
            medicineAmount: '',
            inpatientRequestId: ListId
         });
         setIsOpenNoteModal(false);
         getPainAssessment();
      }
   };

   const getPainAssessment = async () => {
      setPainDataList([]);
      setSpinner(true);
      conf.params.patientId = PatientId;
      const response = await Get('inpatient/pain-assesment', token, conf);
      console.log('Res', response);
      if (response.data.length != 0) {
         setPainDataList(response.data);
      }
      setSpinner(false);
   };
   useEffect(() => {
      getPainAssessment();
   }, []);

   const onChangeCollapse = (data) => {
      setSelectedPainData(
         painDataList.filter((obj, index) => {
            if (index === parseInt(data)) {
               return obj;
            }
            return null;
         })
      );
   };

   useEffect(() => {
      selectedPainData && handlePrint();
   }, [selectedPainData]);

   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full p-1">
               <div className="float-left">
                  <Button onClick={() => setIsOpenNoteModal(true)}>Хуудас бөглөх</Button>
               </div>
               <div className="float-right">
                  <Button title="Сэргээх" type="primary" onClick={() => getPainAssessment()}>
                     <ReloadOutlined />
                  </Button>
               </div>
            </div>
            <div className="w-full p-1">
               <Spin spinning={spinner}>
                  <Collapse accordion>
                     {painDataList &&
                        painDataList?.map((el, index) => {
                           return (
                              <Panel
                                 className="AAA"
                                 header={
                                    <div
                                       style={{
                                          display: 'flex',
                                          flexDirection: 'row',
                                          justifyContent: 'space-between'
                                       }}
                                    >
                                       <div
                                          style={{
                                             display: 'flex',
                                             flexDirection: 'row'
                                          }}
                                       >
                                          <div style={{ marginRight: 10 }}>
                                             <b>Тасаг: </b>
                                             <span>{el?.inpatientRequests?.structure?.name}</span>
                                          </div>
                                          <div>
                                             <b>Сувилагч: </b>
                                             <span>
                                                {el?.patient
                                                   ? `${el?.patient?.lastName?.substr(0, 1)}. ${el?.patient?.firstName}`
                                                   : null}
                                             </span>
                                          </div>
                                       </div>
                                       <div style={{ marginRight: 10 }}>
                                          <b>{el.createdAt?.replace(/T/, ' ').replace(/\..+/, '')}</b>
                                       </div>
                                    </div>
                                 }
                                 extra={<Button onClick={() => onChangeCollapse(index)}>Хэвлэх</Button>}
                                 key={index}
                              >
                                 <Row className="mt-2">
                                    <Col span={8}>
                                       <b>Мэс заслын дараах хоног: </b> {el.daysAfterSurgery}
                                    </Col>
                                    <Col span={8}>
                                       <b>Цаг: </b> {el.time}
                                    </Col>
                                    <Col span={8}>
                                       <b>Өвдөлтийн хүч: </b> {el.painPower}
                                    </Col>
                                 </Row>
                                 <Row className="mt-2">
                                    <Col span={3}>
                                       <b>Өвдөлтийн байршил: </b>
                                    </Col>
                                    <Col span={8}>{el.locationPain}</Col>
                                 </Row>
                                 <Row className="mt-2">
                                    <Col span={3}>
                                       <b>Ямар өвдөлт байгаа вэ?: </b>
                                    </Col>
                                    <Col span={8}>{el.whatPain}</Col>
                                 </Row>
                                 <Row className="mt-2 justify-between">
                                    <Col span={11}>
                                       <Divider orientation="left" plain orientationMargin="0">
                                          Өвдөлтийн давтамж
                                       </Divider>
                                       <Row className="mt-2">
                                          <Col span={24}>
                                             <b>Босч явах үед: </b>
                                             <span>{el.isWhenGettingUp ? 'Тийм' : 'Үгүй'}</span>
                                          </Col>
                                          <Col span={24}>
                                             <b>Дандаа: </b> {el.isAlways ? 'Тийм' : 'Үгүй'}
                                          </Col>
                                          <Col span={24}>
                                             <b>Өвдөөд унтаж чадахгүй: </b>
                                             {el.isSleepPain ? 'Тийм' : 'Үгүй'}
                                          </Col>
                                       </Row>
                                    </Col>
                                    <Col span={11}>
                                       <Divider orientation="left" plain orientationMargin="0">
                                          Өвдөлт, үйл ажиллагааны байршлаар
                                       </Divider>
                                       <Row className="mt-2">
                                          <Col span={24}>
                                             <b>Хооллоход: </b> {el.isFeeding ? 'Тийм' : 'Үгүй'}
                                          </Col>
                                          <Col span={24}>
                                             <b>Ялгаруулалтын үед: </b>
                                             {el.isDuringEmission ? 'Тийм' : 'Үгүй'}
                                          </Col>
                                          <Col span={24}>
                                             <b>Сууж / босоход: </b>
                                             {el.isWhenSittingStandingUp ? 'Тийм' : 'Үгүй'}
                                          </Col>
                                          <Col span={24}>
                                             <b>Бусад хөдөлгөөн хийхэд: </b>
                                             {el.movement}
                                          </Col>
                                       </Row>
                                    </Col>
                                 </Row>
                                 <Row className="mt-2">
                                    <Col span={24}>
                                       <Divider orientation="center" plain>
                                          Эмийн бус аргууд
                                       </Divider>
                                       <Row className="mt-2">
                                          <Col span={4}>
                                             <b>Халуун жин: </b>
                                             {el.isHotWeight ? 'Тийм' : 'Үгүй'}
                                          </Col>
                                          <Col span={4}>
                                             <b>Хүйтэн жин: </b>
                                             {el.isColdWeight ? 'Тийм' : 'Үгүй'}
                                          </Col>
                                          <Col span={4}>
                                             <b>Зүү: </b> {el.isNeedle ? 'Тийм' : 'Үгүй'}
                                          </Col>
                                          <Col span={4}>
                                             <b>Дасгал: </b> {el.isExercise ? 'Тийм' : 'Үгүй'}
                                          </Col>
                                          <Col span={4}>
                                             <b>Массаж: </b> {el.isMassage ? 'Тийм' : 'Үгүй'}
                                          </Col>
                                          <Col span={4}>
                                             <b>Физик эмчилгээ: </b>
                                             {el.isPhysiotherapy ? 'Тийм' : 'Үгүй'}
                                          </Col>
                                       </Row>
                                       <Row className="mt-2">
                                          <Col span={24}>
                                             <b>Бусад: </b> {el.other}
                                          </Col>
                                       </Row>
                                       <Row className="mt-2">
                                          <Col span={24}>
                                             <b>Өвдөлт намдаах эмийн тун, хэрэглэх зам: </b>
                                             {el.medicineAmount}
                                          </Col>
                                       </Row>
                                    </Col>
                                 </Row>
                              </Panel>
                           );
                        })}
                  </Collapse>
               </Spin>
            </div>
         </div>
         <Modal
            open={isOpenNoteModal}
            title="Хуудас бөглөх"
            onCancel={() => setIsOpenNoteModal(false)}
            onOk={onFinish}
            cancelText="Болих"
            okText="Хадгалах"
            width={800}
         >
            <div>
               <Row className="mt-2">
                  <Col span={6}>Мэс заслын дараах хоног</Col>
                  <Col span={6}>
                     <InputNumber
                        style={{
                           width: 120
                        }}
                        value={painData.daysAfterSurgery}
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              daysAfterSurgery: e
                           }))
                        }
                     />
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Цаг</Col>
                  <Col span={6}>
                     <TimePicker
                        locale={mn}
                        format={TimeFormat}
                        value={painData.time ? dayjs(painData.time, TimeFormat) : null}
                        onChange={(e) => {
                           setPainData((painData) => ({
                              ...painData,
                              time: e
                           }));
                        }}
                     />
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Өвдөлтийн байршил</Col>
                  <Col span={18}>
                     <TextArea
                        rows={2}
                        value={painData.locationPain}
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              locationPain: e.target.value
                           }))
                        }
                     />
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Өвдөлтийн хүч</Col>
                  <Col span={18}>
                     <Radio.Group
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              painPower: e.target.value
                           }))
                        }
                        value={painData.painPower}
                     >
                        {val10.map((el, index) => {
                           return (
                              <Radio value={el} key={index}>
                                 {el}
                              </Radio>
                           );
                        })}
                     </Radio.Group>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Ямар өвдөлт байгаа вэ?</Col>
                  <Col span={18}>
                     <TextArea
                        rows={2}
                        value={painData.whatPain}
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              whatPain: e.target.value
                           }))
                        }
                     />
                  </Col>
               </Row>
               <Divider orientation="left" plain>
                  Өвдөлтийн давтамж
               </Divider>
               <Row className="mt-2">
                  <Col span={6}>Босч явах үед</Col>
                  <Col span={18}>
                     <Radio.Group
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              isWhenGettingUp: e.target.value
                           }))
                        }
                        value={painData.isWhenGettingUp}
                     >
                        {yesNo.map((el, index) => {
                           return (
                              <Radio value={el.value} key={index}>
                                 {el.label}
                              </Radio>
                           );
                        })}
                     </Radio.Group>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Дандаа</Col>
                  <Col span={18}>
                     <Radio.Group
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              isAlways: e.target.value
                           }))
                        }
                        value={painData.isAlways}
                     >
                        {yesNo.map((el, index) => {
                           return (
                              <Radio value={el.value} key={index}>
                                 {el.label}
                              </Radio>
                           );
                        })}
                     </Radio.Group>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Өвдөөд унтаж чадахгүй</Col>
                  <Col span={18}>
                     <Radio.Group
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              isSleepPain: e.target.value
                           }))
                        }
                        value={painData.isSleepPain}
                     >
                        {yesNo.map((el, index) => {
                           return (
                              <Radio value={el.value} key={index}>
                                 {el.label}
                              </Radio>
                           );
                        })}
                     </Radio.Group>
                  </Col>
               </Row>
               <Divider orientation="left" plain>
                  Өвдөлт, үйл ажиллагааны байршлаар
               </Divider>
               <Row className="mt-2">
                  <Col span={6}>Хооллоход</Col>
                  <Col span={18}>
                     <Radio.Group
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              isFeeding: e.target.value
                           }))
                        }
                        value={painData.isFeeding}
                     >
                        {yesNo.map((el, index) => {
                           return (
                              <Radio value={el.value} key={index}>
                                 {el.label}
                              </Radio>
                           );
                        })}
                     </Radio.Group>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Ялгаруулалтын үед</Col>
                  <Col span={18}>
                     <Radio.Group
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              isDuringEmission: e.target.value
                           }))
                        }
                        value={painData.isDuringEmission}
                     >
                        {yesNo.map((el, index) => {
                           return (
                              <Radio value={el.value} key={index}>
                                 {el.label}
                              </Radio>
                           );
                        })}
                     </Radio.Group>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Сууж / босоход</Col>
                  <Col span={18}>
                     <Radio.Group
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              isWhenSittingStandingUp: e.target.value
                           }))
                        }
                        value={painData.isWhenSittingStandingUp}
                     >
                        {yesNo.map((el, index) => {
                           return (
                              <Radio value={el.value} key={index}>
                                 {el.label}
                              </Radio>
                           );
                        })}
                     </Radio.Group>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Бусад хөдөлгөөн хийхэд</Col>
                  <Col span={18}>
                     <Input
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              movement: e.target.value
                           }))
                        }
                        value={painData.movement}
                     />
                  </Col>
               </Row>
               <Divider orientation="left" plain>
                  Эмийн бус аргууд
               </Divider>
               <Row className="mt-2">
                  <Col span={6}>Халуун жин</Col>
                  <Col span={6}>
                     <Radio.Group
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              isHotWeight: e.target.value
                           }))
                        }
                        value={painData.isHotWeight}
                     >
                        {yesNo.map((el, index) => {
                           return (
                              <Radio value={el.value} key={index}>
                                 {el.label}
                              </Radio>
                           );
                        })}
                     </Radio.Group>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Хүйтэн жин</Col>
                  <Col span={6}>
                     <Radio.Group
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              isColdWeight: e.target.value
                           }))
                        }
                        value={painData.isColdWeight}
                     >
                        {yesNo.map((el, index) => {
                           return (
                              <Radio value={el.value} key={index}>
                                 {el.label}
                              </Radio>
                           );
                        })}
                     </Radio.Group>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Зүү</Col>
                  <Col span={6}>
                     <Radio.Group
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              isNeedle: e.target.value
                           }))
                        }
                        value={painData.isNeedle}
                     >
                        {yesNo.map((el, index) => {
                           return (
                              <Radio value={el.value} key={index}>
                                 {el.label}
                              </Radio>
                           );
                        })}
                     </Radio.Group>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Дасгал</Col>
                  <Col span={6}>
                     <Radio.Group
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              isExercise: e.target.value
                           }))
                        }
                        value={painData.isExercise}
                     >
                        {yesNo.map((el, index) => {
                           return (
                              <Radio value={el.value} key={index}>
                                 {el.label}
                              </Radio>
                           );
                        })}
                     </Radio.Group>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Массаж</Col>
                  <Col span={6}>
                     <Radio.Group
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              isMassage: e.target.value
                           }))
                        }
                        value={painData.isMassage}
                     >
                        {yesNo.map((el, index) => {
                           return (
                              <Radio value={el.value} key={index}>
                                 {el.label}
                              </Radio>
                           );
                        })}
                     </Radio.Group>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Физик эмчилгээ</Col>
                  <Col span={6}>
                     <Radio.Group
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              isPhysiotherapy: e.target.value
                           }))
                        }
                        value={painData.isPhysiotherapy}
                     >
                        {yesNo.map((el, index) => {
                           return (
                              <Radio value={el.value} key={index}>
                                 {el.label}
                              </Radio>
                           );
                        })}
                     </Radio.Group>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>Бусад</Col>
                  <Col span={6}>
                     <Input
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              other: e.target.value
                           }))
                        }
                        value={painData.other}
                     />
                  </Col>
               </Row>

               <Row className="mt-2">
                  <Col span={6}>Өвдөлт намдаах эмийн тун, хэрэглэх зам</Col>
                  <Col span={18}>
                     <TextArea
                        rows={4}
                        value={painData.medicineAmount}
                        onChange={(e) =>
                           setPainData((painData) => ({
                              ...painData,
                              medicineAmount: e.target.value
                           }))
                        }
                     />
                  </Col>
               </Row>
            </div>
         </Modal>

         <div style={{ display: 'none' }}>
            <div ref={printRef} className="p-8">
               <h2 className="font-bold text-center">ӨВДӨЛТИЙГ ХЯНАХ ХУУДАС</h2>
               <Row className="mt-2">
                  <Col span={18}>
                     <b>Эмчлүүлэгчийн овог, нэр: </b>
                     {`${selectedPainData[0]?.patient?.lastName?.substr(0, 1)}. ${
                        selectedPainData[0]?.patient?.firstName
                     }`}
                  </Col>
                  <Col span={6}>
                     <b>Өвчний түүх №</b> 111111
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>
                     <b>Нас:</b> {selectedPainData[0]?.patient?.age}
                  </Col>
                  <Col span={6}>
                     <b>Хүйс: </b>
                     {selectedPainData[0]?.patient?.genderType === 'MAN' ? 'Эрэгтэй' : 'Эмэгтэй'}
                  </Col>
                  <Col span={6}>
                     <b>Тасаг: </b>
                     {selectedPainData[0]?.inpatientRequests?.structure?.name}
                  </Col>
                  <Col span={6}>
                     <b>Өрөө: </b>
                     {selectedPainData[0]?.inpatientRequests?.rooms?.roomNumber}
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
                        <td className="border border-slate-600 p-1">
                           {selectedPainData[0]?.createdAt?.replace(/T/, ' ').replace(/\..+/, '')}
                        </td>
                     </tr>
                     <tr>
                        <td colSpan="2" className="border border-slate-600 p-1">
                           Мэс заслын дараах хоног
                        </td>
                        <td className="border border-slate-600 p-1">{selectedPainData[0]?.daysAfterSurgery}</td>
                     </tr>
                     <tr>
                        <td colSpan="2" className="border border-slate-600 p-1">
                           Цаг
                        </td>
                        <td className="border border-slate-600 p-1">{selectedPainData[0]?.time}</td>
                     </tr>
                     <tr>
                        <td colSpan="2" className="border border-slate-600 p-1">
                           Өвдөлтийн хүч
                        </td>
                        <td className="border border-slate-600 p-1">{selectedPainData[0]?.painPower}</td>
                     </tr>
                     <tr>
                        <td colSpan="2" className="border border-slate-600 p-1">
                           Өвдөлтийн байршил
                        </td>
                        <td className="border border-slate-600 p-1">{selectedPainData[0]?.locationPain}</td>
                     </tr>
                     <tr>
                        <td colSpan="2" className="border border-slate-600 p-1">
                           Ямар өвдөлт байгаа вэ?
                        </td>
                        <td className="border border-slate-600 p-1">{selectedPainData[0]?.whatPain}</td>
                     </tr>
                     <tr>
                        <td rowSpan="3" className="border border-slate-600 p-1">
                           Өвдөлтийн давтамж
                        </td>
                        <td className="border border-slate-600 p-1">Босч явах үед</td>
                        <td className="border border-slate-600 p-1">
                           {selectedPainData[0]?.isWhenGettingUp ? 'Тийм' : 'Үгүй'}
                        </td>
                     </tr>
                     <tr>
                        <td className="border border-slate-600 p-1">Дандаа</td>
                        <td className="border border-slate-600 p-1">
                           {selectedPainData[0]?.isAlways ? 'Тийм' : 'Үгүй'}
                        </td>
                     </tr>
                     <tr>
                        <td className="border border-slate-600 p-1">Өвдөөд унтаж чадахгүй</td>
                        <td className="border border-slate-600 p-1">
                           {selectedPainData[0]?.isSleepPain ? 'Тийм' : 'Үгүй'}
                        </td>
                     </tr>
                     <tr>
                        <td rowSpan="4" className="border border-slate-600 p-1">
                           Өвдөлт, үйл ажиллагааны байршлаар
                        </td>
                        <td className="border border-slate-600 p-1">Хооллоход</td>
                        <td className="border border-slate-600 p-1">
                           {selectedPainData[0]?.isFeeding ? 'Тийм' : 'Үгүй'}
                        </td>
                     </tr>
                     <tr>
                        <td className="border border-slate-600 p-1">Ялгаруулалтын үед</td>
                        <td className="border border-slate-600 p-1">
                           {selectedPainData[0]?.isDuringEmission ? 'Тийм' : 'Үгүй'}
                        </td>
                     </tr>
                     <tr>
                        <td className="border border-slate-600 p-1">Сууж / босоход</td>
                        <td className="border border-slate-600 p-1">
                           {selectedPainData[0]?.isWhenSittingStandingUp ? 'Тийм' : 'Үгүй'}
                        </td>
                     </tr>
                     <tr>
                        <td className="border border-slate-600 p-1">Бусад хөдөлгөөн хийхэд</td>
                        <td className="border border-slate-600 p-1">{selectedPainData[0]?.movement}</td>
                     </tr>
                     <tr>
                        <td rowSpan="7" className="border border-slate-600 p-1">
                           Эмийн бус аргууд
                        </td>
                        <td className="border border-slate-600 p-1">Халуун жин</td>
                        <td className="border border-slate-600 p-1">
                           {selectedPainData[0]?.isHotWeight ? 'Тийм' : 'Үгүй'}
                        </td>
                     </tr>
                     <tr>
                        <td className="border border-slate-600 p-1">Хүйтэн жин</td>
                        <td className="border border-slate-600 p-1">
                           {selectedPainData[0]?.isColdWeight ? 'Тийм' : 'Үгүй'}
                        </td>
                     </tr>
                     <tr>
                        <td className="border border-slate-600 p-1">Зүү</td>
                        <td className="border border-slate-600 p-1">
                           {selectedPainData[0]?.isNeedle ? 'Тийм' : 'Үгүй'}
                        </td>
                     </tr>
                     <tr>
                        <td className="border border-slate-600 p-1">Дасгал</td>
                        <td className="border border-slate-600 p-1">
                           {selectedPainData[0]?.isExercise ? 'Тийм' : 'Үгүй'}
                        </td>
                     </tr>
                     <tr>
                        <td className="border border-slate-600 p-1">Массаж</td>
                        <td className="border border-slate-600 p-1">
                           {selectedPainData[0]?.isMassage ? 'Тийм' : 'Үгүй'}
                        </td>
                     </tr>
                     <tr>
                        <td className="border border-slate-600 p-1">Физик эмчилгээ</td>
                        <td className="border border-slate-600 p-1">
                           {selectedPainData[0]?.isPhysiotherapy ? 'Тийм' : 'Үгүй'}
                        </td>
                     </tr>
                     <tr>
                        <td className="border border-slate-600 p-1">Бусад</td>
                        <td className="border border-slate-600 p-1">{selectedPainData[0]?.other}</td>
                     </tr>
                     <tr>
                        <td colSpan="2" className="border border-slate-600 p-1">
                           Өвдөлт намдаах эмийн тун, хэрэглэх зам
                        </td>
                        <td className="border border-slate-600 p-1">{selectedPainData[0]?.medicineAmount}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
}
export default PainAssessment;
