import React, { useCallback, useState, useEffect } from 'react';
import { Tabs, Button, Form, Modal, Result, Spin, Divider } from 'antd';
import GeneralInspection from '../GeneralInspection';
import { useSelector } from 'react-redux';
import { selectCurrentFirstName, selectCurrentLastName, selectCurrentUserId } from '../../../../features/authReducer';
import HistoryTab from './HistoryTab';
import MainInpatientHistory from './MainInpatientHistory';
import DynamicContent from './DynamicContent';
import jwtInterceopter from '../../../jwtInterceopter';

//
import DocumentFormServices from '../../../../services/organization/documentForm';
import { useLocation } from 'react-router-dom';
import FormRender from '../../BeforeAmbulatory/Customized/FormRender';
import { Patch } from '../../../comman';
//
function MainPatientHistory({
   AppointmentId,
   XrayRequestId,
   InpatientRequestId,
   PatientId,
   CabinetId,
   DeparmentId,
   Inspection,
   UsageType,
   HicsServiceId,
   AppointmentType,
   handleClick
}) {
   let location = useLocation();
   const userId = useSelector(selectCurrentUserId);
   const lastName = useSelector(selectCurrentLastName);
   const firstName = useSelector(selectCurrentFirstName);
   const [xrayForm] = Form.useForm();
   const patientId = PatientId;
   const inspection = Inspection;
   const cabinetId = CabinetId;
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
               appointmentId: AppointmentId,
               cabinetId: cabinetId,
               patientId: patientId,
               doctorId: userId,
               usageType: UsageType,
               xrayRequestId: XrayRequestId,
               inspection: Inspection
            }}
            handleClick={handleClick}
            hicsServiceId={HicsServiceId}
            appointmentType={AppointmentType}
         />
      );
   }, []);
   const onFinishXray = async (values, { data }) => {
      const body = {
         appointmentId: XrayRequestId,
         usageType: UsageType,
         documentId: data.documentValue,
         patientId: patientId,
         type: 'XRAY',
         data: {
            ...values,
            cabinetId: cabinetId,
            createdAt: new Date(),
            createdByName: {
               lastName: lastName,
               firstName: firstName
            }
         }
      };
      await jwtInterceopter
         .post(data.url, body)
         .then((response) => {
            console.log(response);
         })
         .then(() => {
            jwtInterceopter.patch('service/xrayRequest/' + XrayRequestId, {
               xrayProcess: 2
            });
         });
   };
   const XrayDocumentShow = (props) => (
      <Form form={xrayForm} layout="vertical" onFinish={(values) => onFinishXray(values, props)}>
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               gap: 12,
               overflow: 'auto',
               height: 500
            }}
         >
            <FormRender useForm={xrayForm} form={props.data} formOptionIds={[]} isCheck={false} />
            <Form.Item
               style={{
                  textAlign: 'right'
               }}
            >
               <Button type="primary" htmlType="submit">
                  Хадгалах
               </Button>
            </Form.Item>
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
            serviceId: location?.state?.xrayId
         }
      })
         .then((response) => {
            setItems([
               {
                  key: 0,
                  label: response.data.response[0]?.name,
                  children: <XrayDocumentShow data={response.data.response[0]} />
               }
            ]);
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const getInspectionTabs = async () => {
      setLoading(true);
      //Тухайн эмчид харагдах TAB ууд
      console.log('==========>', AppointmentType);
      const conf = {
         params: {
            usageType: UsageType,
            structureId: null,
            cabinetId: null
         }
      };
      if (AppointmentType === 1) {
         conf.params['structureId'] = cabinetId;
      } else {
         if (UsageType === 'IN') {
            conf.params['structureId'] = cabinetId;
         } else {
            conf.params['cabinetId'] = cabinetId;
         }
      }
      await jwtInterceopter
         .get('emr/inspection-form', conf)
         .then((response) => {
            response.data.response.data?.map((el) => {
               setItems((items) => [
                  ...items,
                  {
                     label: el.name,
                     key: `item-${el.id}`,
                     children: (
                        <DynamicTabContent
                           data={el.formItem}
                           formKey={el.formId != null ? el.formId : el.id}
                           formName={el.name}
                        />
                     )
                  }
               ]);
            });
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const defualtForm = {
      pain: [
         {
            label: 'Зовиур',
            options: [
               {
                  type: 'textarea',
                  value: 'Зовиур'
               }
            ],
            inspectionType: 'pain'
         }
      ],
      question: [
         {
            label: 'Асуумж',
            options: [
               {
                  type: 'textarea',
                  value: 'Асуумж'
               }
            ],
            inspectionType: 'question'
         }
      ],
      inspection: [
         {
            label: 'Бодит үзлэг',
            options: [
               {
                  type: 'textarea',
                  value: 'Бодит үзлэг'
               }
            ],
            inspectionType: 'inspection'
         }
      ],
      plan: [
         {
            label: 'Төлөвлөгөө',
            options: [
               {
                  type: 'textarea',
                  value: 'Төлөвлөгөө'
               }
            ],
            inspectionType: 'plan'
         }
      ]
   };
   const xrayDefualtForm = {
      conclusion: [
         {
            label: 'Дүгнэлт',
            options: [
               {
                  type: 'textarea',
                  value: 'Дүгнэлт'
               }
            ],
            inspectionType: 'conclusion'
         }
      ],
      advice: [
         {
            label: 'Зөвлөгөө',
            options: [
               {
                  type: 'textarea',
                  value: 'Зөвлөгөө'
               }
            ],
            inspectionType: 'advice'
         }
      ]
   };
   const getDefualtTab = () => {
      setItems([
         ...items,
         {
            label: 'Асуумж',
            key: `item-second`,
            children: <DynamicTabContent data={defualtForm} />
         }
      ]);
   };
   const getXrayDefualtTab = () => {
      setItems([
         {
            label: 'Дүгнэлт',
            key: `item-xray`,
            children: <DynamicTabContent data={xrayDefualtForm} />
         }
      ]);
   };
   useEffect(() => {
      if (UsageType === 'OUT') {
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
   }, [UsageType]);
   // const configure = () => {
   //    if (editNote) {
   //       const data = JSON.parse(editNote);
   //       if (data) {
   //          setActiveKey(`item-${data.formId}`);
   //          data.diagnose?.map((diagnose, index) => {
   //             data['diagnose'][index] = diagnose.diagnose;
   //          });
   //          data['inspection'] = JSON.parse(data.inspection);
   //          data['pain'] = JSON.parse(data.pain);
   //          data['plan'] = JSON.parse(data.plan);
   //          data['question'] = JSON.parse(data.question);
   //          form.setFieldsValue(data);
   //       } else {
   //          form.resetFields();
   //       }
   //    }
   // };
   // useEffect(() => {
   //    configure();
   // }, [editNote]);
   return (
      <>
         {UsageType === 'OUT' && (
            <Spin spinning={loading} tip="Уншиж байна ...">
               <Tabs type="card" destroyInactiveTabPane defaultActiveKey={activeKey} items={items} />
            </Spin>
         )}
         {UsageType === 'IN' && (
            <MainInpatientHistory
               patientId={PatientId}
               inpatientRequestId={InpatientRequestId}
               deparmentId={DeparmentId}
               hicsServiceId={HicsServiceId}
            />
         )}
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
