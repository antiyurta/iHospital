import React, { useCallback, useState, useEffect } from 'react';
import { Tabs, Button, Form, Modal, Result, Spin } from 'antd';
import GeneralInspection from '../GeneralInspection';
import { useSelector } from 'react-redux';
import { selectCurrentNote, selectCurrentUserId } from '../../../../features/authReducer';
import HistoryTab from './HistoryTab';
import MainInpatientHistory from './MainInpatientHistory';
import DynamicContent from './DynamicContent';
import jwtInterceopter from '../../../jwtInterceopter';
function MainPatientHistory({
   AppointmentId,
   XrayRequestId,
   InpatientRequestId,
   PatientId,
   CabinetId,
   Inspection,
   UsageType,
   hicsServiceId,
   handleClick
}) {
   const [form] = Form.useForm();
   const editNote = useSelector(selectCurrentNote);
   const userId = useSelector(selectCurrentUserId);
   const config = {
      headers: {},
      params: {}
   };
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
            hicsServiceId={hicsServiceId}
         />
      );
   }, []);
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
      config.params.cabinetId = cabinetId;
      await jwtInterceopter
         .get('emr/inspection-form', {
            params: {
               cabinetId: cabinetId
            }
         })
         .then((response) => {
            response.data.response.data?.map((el) => {
               setItems([
                  {
                     label: 'Дүгнэлт',
                     key: `item-exo`,
                     children: <DynamicTabContent data={el.formItem} />
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
   const getInspectionTabs = async () => {
      setLoading(true);
      //Тухайн эмчид харагдах TAB ууд
      const conf = {
         params: {
            usageType: UsageType,
            structureId: UsageType === 'IN' ? cabinetId : null,
            cabinetId: UsageType === 'OUT' ? cabinetId : null
         }
      };
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
            label: 'Бодит үзлэг',
            options: [
               {
                  type: 'textarea',
                  value: 'Бодит үзлэг'
               }
            ],
            inspectionType: 'question'
         }
      ],
      inspection: [
         {
            label: 'Асуумж',
            options: [
               {
                  type: 'textarea',
                  value: 'Асуумж'
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
      console.log(UsageType, inspection);
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
   const configure = () => {
      if (editNote) {
         const data = JSON.parse(editNote);
         if (data) {
            setActiveKey(`item-${data.formId}`);
            data.diagnose?.map((diagnose, index) => {
               data['diagnose'][index] = diagnose.diagnose;
            });
            data['inspection'] = JSON.parse(data.inspection);
            data['pain'] = JSON.parse(data.pain);
            data['plan'] = JSON.parse(data.plan);
            data['question'] = JSON.parse(data.question);
            form.setFieldsValue(data);
         } else {
            form.resetFields();
         }
      }
   };
   useEffect(() => {
      configure();
   }, [editNote]);
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
               hicsServiceId={hicsServiceId}
            />
         )}
         <Modal open={confirmModal} onCancel={() => setConfirmModal(false)} footer={null}>
            <Result
               status="success"
               title="EMR амжилттай хадгалагдлаа та OT руу шилжих үү"
               // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
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
