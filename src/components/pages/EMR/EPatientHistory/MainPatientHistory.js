import React, { useCallback, useState, useEffect } from 'react';
import { Button, Form, Modal, Result } from 'antd';
import GeneralInspection from '../GeneralInspection';
import { useSelector } from 'react-redux';
import { selectCurrentUserId } from '../../../../features/authReducer';
import HistoryTab from './HistoryTab';
import MainInpatientHistory from './MainInpatientHistory';
import DynamicContent from './DynamicContent';
import jwtInterceopter from '../../../jwtInterceopter';

import leftArrow from '../leftArrow.svg';
import rightArrow from '../rightArrow.svg';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
//
import EmrInspectionFormServices from '../../../../services/emr/inspectionForm';
import DocumentFormServices from '../../../../services/organization/documentForm';
//
import NewFormRender from '../../BeforeAmbulatory/Customized/NewFormRender';
import dayjs from 'dayjs';
import { selectCurrentEmrData } from '../../../../features/emrReducer';
//
function MainPatientHistory({ handleClick }) {
   const {
      appointmentId,
      inpatientRequestId,
      hicsServiceId,
      departmentId,
      xrayRequestId,
      cabinetId,
      inspection,
      usageType,
      patientId,
      type,
      xrayId
   } = useSelector(selectCurrentEmrData);
   const userId = useSelector(selectCurrentUserId);
   const [xrayForm] = Form.useForm();
   const [activeKey, setActiveKey] = useState('item-history');
   const [confirmModal, setConfirmModal] = useState(false);
   const [loading, setLoading] = useState(false);
   const Tab1Content = useCallback(() => {
      return <HistoryTab patientId={patientId} inspection={inspection} />;
   }, []);
   const Tab2Content = useCallback(() => {
      return <GeneralInspection patientId={patientId} inspection={inspection} />;
   }, []);
   const DynamicTabContent = useCallback((props) => {
      return (
         <DynamicContent
            props={props}
            incomeData={{
               appointmentId: appointmentId,
               cabinetId: cabinetId,
               patientId: patientId,
               doctorId: userId,
               xrayRequestId: xrayRequestId,
               inspection: inspection,
               usageType: usageType
            }}
            handleClick={handleClick}
            hicsServiceId={hicsServiceId}
            appointmentType={type}
            triggerForModal={(state) => {}}
         />
      );
   }, []);
   const onFinishXray = async (values, { data }) => {
      console.log('data', data);
      const body = {
         appointmentId: xrayRequestId,
         usageType: usageType,
         formId: data.id,
         documentId: data.documentValue,
         patientId: patientId,
         saveType: 'Save',
         type: 'XRAY',
         data: {
            ...values,
            cabinetId: cabinetId,
            createdAt: dayjs()
         }
      };
      console.log(body);
      console.log(xrayRequestId);
      await jwtInterceopter
         .post(data.url, body)
         .then((response) => {
            console.log(response);
         })
         .then(() => {
            jwtInterceopter.patch('service/xrayRequest/' + xrayRequestId, {
               xrayProcess: 2
            });
         });
   };
   const XrayDocumentShow = (props) => (
      <Form form={xrayForm} layout="vertical" onFinish={(values) => onFinishXray(values, props)}>
         <div
            style={{
               width: '100%',
               display: 'flex',
               flexDirection: 'column',
               gap: 8
            }}
         >
            <div
               style={{
                  overflow: 'auto',
                  height: 520
               }}
            >
               <NewFormRender useForm={xrayForm} form={props.data} formOptionIds={[]} isCheck={false} />
            </div>
            <Button type="primary" htmlType="submit">
               Хадгалах
            </Button>
         </div>
      </Form>
   );
   const [items, setItems] = useState([
      {
         label: 'Амьдралын түүх',
         key: 'item-history',
         children: <Tab1Content />
      },
      {
         label: 'Ерөнхий үзлэг',
         key: 'item-general-inspection',
         children: <Tab2Content />
      }
   ]);
   const getExoInspectionTabs = async () => {
      setLoading(true);
      DocumentFormServices.getByPageFilter({
         params: {
            type: 'XRAY',
            serviceId: xrayId
         }
      })
         .then((response) => {
            setItems([
               {
                  key: response.data.response[0]?.id,
                  label: response.data.response[0]?.name,
                  children: <XrayDocumentShow data={response.data.response[0]} />
               }
            ]);
            setActiveKey(response.data.response[0]?.id);
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const getInspectionTabs = async () => {
      setLoading(true);
      //Тухайн эмчид харагдах TAB ууд
      setItems((items) => [
         ...items,
         {
            label: 'Анхан үзлэгийн асуумж',
            key: `item-first`,
            children: <DynamicTabContent data={defualtForm} />
         }
      ]);
      // Түр commit hiwe
      // await EmrInspectionFormServices.get({
      //    params: {
      //       cabinetId: cabinetId
      //    }
      // })
      //    .then(({ data: { response } }) => {
      //       response.data?.map((el) => {
      //          setItems((items) => [
      //             ...items,
      //             {
      //                label: el.name,
      //                key: `item-${el.id}`,
      //                children: (
      //                   <DynamicTabContent
      //                      data={{
      //                         inspection: el.inspection,
      //                         pain: el.pain,
      //                         plan: el.plan,
      //                         question: el.question
      //                      }}
      //                      formKey={el.formId != null ? el.formId : el.id}
      //                      formName={el.name}
      //                   />
      //                )
      //             }
      //          ]);
      //       });
      //    })
      //    .finally(() => {
      //       setLoading(false);
      //    });
      // Түр commit hiwe
   };
   const defualtForm = {
      pain: [
         {
            type: 'textarea',
            index: 1,
            isHead: true,
            isOther: false,
            keyWord: 'Зовиур',
            isNumber: false,
            question: '',
            parentIndex: null
         }
      ],
      question: [
         {
            type: 'textarea',
            index: 1,
            isHead: true,
            isOther: false,
            keyWord: 'Асуумж',
            isNumber: false,
            question: '',
            parentIndex: null
         }
      ],
      inspection: [
         {
            type: 'textarea',
            index: 1,
            isHead: true,
            isOther: false,
            keyWord: 'Бодит үзлэг',
            isNumber: false,
            question: '',
            parentIndex: null
         }
      ],
      plan: [
         {
            type: 'textarea',
            index: 1,
            isHead: true,
            isOther: false,
            keyWord: 'Төлөвлөгөө',
            isNumber: false,
            question: '',
            parentIndex: null
         }
      ]
   };
   const xrayDefualtForm = {
      conclusion: [
         {
            type: 'textarea',
            index: 1,
            isHead: true,
            isOther: false,
            keyWord: 'Дүгнэлт',
            isNumber: false,
            question: 'Дүгнэлт',
            parentIndex: null
         }
      ],
      advice: [
         {
            type: 'textarea',
            index: 1,
            isHead: true,
            isOther: false,
            keyWord: 'Зөвлөгөө',
            isNumber: false,
            question: 'Зөвлөгөө',
            parentIndex: null
         }
      ]
   };
   const getDefualtTab = () => {
      setActiveKey('item-second');
      setItems([
         {
            label: 'Давтан үзлэгийн асуумж',
            key: `item-second`,
            children: <DynamicTabContent data={defualtForm} />
         }
      ]);
   };
   const getXrayDefualtTab = () => {
      setActiveKey('item-xray');
      setItems([
         {
            label: 'Дүгнэлт',
            key: `item-xray`,
            children: <DynamicTabContent data={xrayDefualtForm} />
         }
      ]);
   };
   useEffect(() => {
      if (usageType === 'OUT') {
         if (inspection === 1) {
            getInspectionTabs();
         } else if (inspection === 2) {
            getDefualtTab();
         } else if (inspection === 11) {
            getXrayDefualtTab();
         } else if (inspection === 12) {
            getExoInspectionTabs();
         }
      }
   }, [usageType]);
   //
   const SwiperButtonNext = ({ children }) => {
      const swiper = useSwiper();
      return (
         <div className="box-next" onClick={() => swiper.slideNext()}>
            {children}
         </div>
      );
   };
   const SwiperButtonPrev = ({ children }) => {
      const swiper = useSwiper();
      return (
         <div className="box-prev" onClick={() => swiper.slidePrev()}>
            {children}
         </div>
      );
   };
   //
   return (
      <>
         {usageType === 'OUT' ? (
            <>
               <div className="progress-note-header">
                  <Swiper
                     className="swiper-group"
                     modules={[Navigation, Pagination, Scrollbar, A11y]}
                     navigation
                     spaceBetween={20}
                     slidesPerView={1}
                     breakpoints={{
                        640: {
                           slidesPerView: 2,
                           spaceBetween: 10
                        },
                        768: {
                           slidesPerView: 3,
                           spaceBetween: 10
                        },
                        1024: {
                           slidesPerView: 3,
                           spaceBetween: 10
                        },
                        1366: {
                           slidesPerView: 2.5,
                           spaceBetween: 10
                        },
                        1441: {
                           slidesPerView: 4,
                           spaceBetween: 10
                        },
                        1562: {
                           slidesPerView: 4,
                           spaceBetween: 10
                        },
                        1797: {
                           slidesPerView: 4,
                           spaceBetween: 10
                        },
                        2560: {
                           slidesPerView: 4,
                           spaceBetween: 10
                        }
                     }}
                  >
                     <SwiperButtonPrev>
                        <img src={leftArrow} alt="left" />
                     </SwiperButtonPrev>
                     <div className="content">
                        {items?.map((item) => (
                           <SwiperSlide key={item.key}>
                              <div className={activeKey === item.key ? 'section active' : 'section'}>
                                 <p onClick={() => setActiveKey(item.key)}>{item.label}</p>
                              </div>
                           </SwiperSlide>
                        ))}
                     </div>
                     <SwiperButtonNext>
                        <img src={rightArrow} alt="right" />
                     </SwiperButtonNext>
                  </Swiper>
               </div>
               {items?.find((item) => item.key === activeKey)?.children}
            </>
         ) : null}
         {usageType === 'IN' ? (
            <MainInpatientHistory
               patientId={patientId}
               inpatientRequestId={inpatientRequestId}
               deparmentId={departmentId}
               hicsServiceId={hicsServiceId}
            />
         ) : null}
         <Modal open={confirmModal} onCancel={() => setConfirmModal(false)} footer={null}>
            <Result
               status="success"
               title="EMR амжилттай хадгалагдлаа та OT руу шилжих үү"
               extra={
                  <>
                     <Button type="primary" key="console" onClick={() => handleClick({ target: { value: 'OCS' } })}>
                        Тийм
                     </Button>
                     <Button onClick={() => setConfirmModal(false)}>Үгүй</Button>
                  </>
               }
            />
         </Modal>
      </>
   );
}
export default MainPatientHistory;
