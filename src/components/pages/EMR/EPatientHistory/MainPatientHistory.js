import React, { useCallback, useState, useEffect } from 'react';
import { Button, Form, Spin } from 'antd';
import GeneralInspection from '../GeneralInspection';
import { useSelector } from 'react-redux';
import HistoryTab from './HistoryTab';
import DynamicContent from './DynamicContent';
import HealtInfo from './HealtInfo';
import NewFormRender from '../../BeforeAmbulatory/Customized/NewFormRender';
import dayjs from 'dayjs';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
//comp
import UrgentDocument from './Urgent/UrgentDocument';
//comman
import { openNofi } from '@Comman/common';
// redux
import { selectCurrentUserId } from '@Features/authReducer';
import { selectCurrentEmrData } from '@Features/emrReducer';
// api
import RegularApi from '@ApiServices/regular.api';
import ServiceApi from '@ApiServices/service/service';
import DocumentFormApi from '@ApiServices/organization/documentForm';
import DocumentMiddlewareApi from '@ApiServices/organization/document';
// enum
import { UsageTypeEnum, InspectionEnum, InspectionTypeEnum } from '@Utils/enum';
// forms
import { defualtForm, ConAndAdForm } from './DefualtForms';
import MainInpatientHistory from './MainInpatientHistory';
import { PregnancyInfo } from './Pregnancy';
function MainPatientHistory({ handleClick }) {
   const {
      type,
      appointmentId,
      xrayRequestId,
      operationRequestId,
      cabinetId,
      inspection,
      isInsurance,
      usageType,
      patientId,
      xrayId,
      inspectionNoteId,
      appointmentType,
      serialNumber
   } = useSelector(selectCurrentEmrData);
   const userId = useSelector(selectCurrentUserId);
   const [xrayForm] = Form.useForm();
   const [activeKey, setActiveKey] = useState('item-history');
   const [loading, setLoading] = useState(false);
   const [editMode, setEditMode] = useState(false);
   const [selectedInspectionNoteId, setSelectedInspectionNoteId] = useState(String);

   const isViewDiagnose = (inspection, type) => {
      if (type === 1) return false;
      else if (inspection === InspectionEnum.Xray) return false;
      else if (inspection === InspectionEnum.Exo) return false;
      else if (inspection === InspectionEnum.Operation) return false;
      return true;
   };

   const Tab1Content = useCallback(() => {
      return <HistoryTab />;
   }, []);
   const Tab2Content = useCallback(() => {
      return <GeneralInspection />;
   }, []);
   const Tab3Content = useCallback(() => {
      return <HealtInfo />;
   });
   const Tab4Content = useCallback(() => {
      return <PregnancyInfo form={xrayForm} />;
   });

   const DynamicTabContent = useCallback((props) => {
      return (
         <DynamicContent
            props={props}
            incomeData={{
               inspectionNoteId: inspectionNoteId,
               appointmentType: appointmentType,
               appointmentId: appointmentId,
               cabinetId: cabinetId,
               patientId: patientId,
               doctorId: userId,
               xrayRequestId: xrayRequestId,
               operationRequestId: operationRequestId,
               inspection: inspection,
               usageType: usageType
            }}
            handleClick={handleClick}
            isViewDiagnose={isViewDiagnose(inspection, type)}
         />
      );
   }, []);
   const onFinishXray = async (values, { data }) => {
      if (inspectionNoteId || editMode) {
         const id = inspectionNoteId || selectedInspectionNoteId;
         await DocumentMiddlewareApi.patch(id, { data: values }).then(() => {
            openNofi('success', 'Амжилттай', 'Дүгнэлт амжилттай хадгалагдсан');
         });
      } else {
         const body = {
            appointmentId: xrayRequestId,
            usageType: usageType,
            formId: data.id,
            documentId: data.documentValue,
            patientId: patientId,
            serialNumber: serialNumber,
            formType: 0,
            saveType: 'Save',
            type: 'XRAY',
            data: {
               ...values,
               cabinetId: cabinetId,
               createdAt: dayjs()
            }
         };
         await RegularApi.post(data.url, body).then(async ({ data: { response, success } }) => {
            if (success) {
               setSelectedInspectionNoteId(response.response._id);
               await ServiceApi.patchXrayRequest(xrayRequestId, {
                  xrayProcess: 2,
                  inspectionNoteId: response.response._id
               }).then(({ data: { success } }) => {
                  if (success) {
                     setEditMode(true);
                     openNofi('success', 'Амжилттай', 'Дүгнэлт амжилттай хадгалагдсан');
                  }
               });
            }
         });
      }
   };
   const XrayDocumentShow = (props) => (
      <Form form={xrayForm} layout="vertical" onFinish={(values) => onFinishXray(values, props)}>
         <div className="emr-ins w-full flex flex-col gap-1 justify-between">
            <div className="inputs">
               <NewFormRender
                  useForm={xrayForm}
                  form={props.data}
                  formOptionIds={[]}
                  isCheck={false}
                  formName={null}
                  incomeKeyWords={[]}
                  checkProgress={(_keyWords) => null}
                  isDisabledButton={(_state) => null}
               />
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

   const getExoInspectionNote = async () => {
      await DocumentMiddlewareApi.getById(inspectionNoteId).then(({ data: { response } }) => {
         setEditMode(true);
         xrayForm.setFieldsValue(response.response.data);
      });
   };

   const getExoInspectionTabs = async () => {
      setLoading(true);
      DocumentFormApi.getByPageFilter({
         params: {
            type: 'XRAY',
            serviceId: xrayId
         }
      })
         .then((response) => {
            setItems([
               {
                  key: `item-${response.data.response[0]?.id}`,
                  label: response.data.response[0]?.name,
                  children: <XrayDocumentShow data={response.data.response[0]} />
               }
            ]);
            setActiveKey(`item-${response.data.response[0]?.id}`);
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const getInspectionTabs = async () => {
      setLoading(true);
      //Тухайн эмчид харагдах TAB ууд
      setItems((items) => {
         const newItems = [
            ...items,
            {
               label: 'Анхан үзлэгийн асуумж',
               key: 'item-first',
               children: <DynamicTabContent data={defualtForm} />
            }
         ];
         if (isInsurance) {
            newItems.push({
               label: 'Эрүүл мэндийн мэдээлэл',
               key: 'item-health-info',
               children: <Tab3Content />
            });
            newItems.push({
               label: 'Жирэмсний хяналт',
               key: 'item-pregnancy-info',
               children: <Tab4Content />
            });
         }
         return newItems;
      });
      setLoading(false);
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
   const getDefualtTab = () => {
      setActiveKey('item-second');
      setItems((_items) => {
         const newItems = [
            {
               label: 'Давтан үзлэгийн асуумж',
               key: `item-second`,
               children: <DynamicTabContent data={defualtForm} />
            }
         ];
         if (isInsurance) {
            newItems.push({
               label: 'Эрүүл мэндийн мэдээлэл',
               key: 'item-health-info',
               children: <Tab3Content />
            });
            newItems.push({
               label: 'Жирэмсний хяналт',
               key: 'item-pregnancy-info',
               children: <Tab4Content />
            });
         }
         return newItems;
      });
   };
   const getXrayDefualtTab = () => {
      setActiveKey('item-xray');
      setItems([
         {
            label: 'Дүгнэлт',
            key: `item-xray`,
            children: <DynamicTabContent data={ConAndAdForm} />
         }
      ]);
   };
   const getOperationDefualtTab = () => {
      setActiveKey('item-operation');
      setItems([
         {
            label: 'Дүгнэлт',
            key: `item-operation`,
            children: <DynamicTabContent data={ConAndAdForm} />
         }
      ]);
   };
   const getUrgentTab = () => {
      setActiveKey('item-urgent');
      setItems([
         {
            label: 'Яаралтай үзлэг',
            key: `item-urgent`,
            children: <UrgentDocument handleClick={handleClick} />
         }
      ]);
   };
   useEffect(() => {
      // 3 bol mes zasal ygl hewtenshig haragdah
      if (appointmentType != 3) {
         if (type === 1) {
            getUrgentTab();
         } else {
            if (usageType === UsageTypeEnum.OUT) {
               if (inspection == InspectionTypeEnum.first) {
                  getInspectionTabs();
               } else if (inspection === InspectionTypeEnum.second) {
                  getDefualtTab();
               } else if (inspection === InspectionEnum.Xray) {
                  getXrayDefualtTab();
               } else if (inspection === InspectionEnum.Exo) {
                  getExoInspectionTabs();
                  inspectionNoteId && getExoInspectionNote();
               } else if (inspection === InspectionEnum.Operation) {
                  getOperationDefualtTab();
               }
            }
         }
      }
   }, []);
   if (appointmentType === 3) {
      return <MainInpatientHistory newUsageType={'OUT'} />;
   }
   return (
      <>
         <div className="progress-note-header">
            <Splide
               options={{
                  pagination: false,
                  autoWidth: true,
                  autoHeight: true,
                  gap: 10,
                  padding: 28
               }}
            >
               {items?.map((item) => (
                  <SplideSlide key={item.key}>
                     <div className={activeKey === item.key ? 'section active' : 'section'}>
                        <p onClick={() => setActiveKey(item.key)}>{item.label}</p>
                     </div>
                  </SplideSlide>
               ))}
            </Splide>
         </div>
         <Spin spinning={loading}>{items?.find((item) => item.key === activeKey)?.children}</Spin>
      </>
   );
}
export default MainPatientHistory;
