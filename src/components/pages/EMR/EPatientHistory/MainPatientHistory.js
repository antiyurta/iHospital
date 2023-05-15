import React, { useCallback, useState, useEffect } from 'react';
import { Tabs, Row, Button, Form, Divider, Select, Modal, Result, Spin, Input } from 'antd';
import GeneralInspection from '../GeneralInspection';
import { useDispatch, useSelector } from 'react-redux';
import { DelNote, selectCurrentNote, selectCurrentToken, selectCurrentUserId } from '../../../../features/authReducer';
import DynamicFormInspection from '../../DynamicFormInspection';
import HistoryTab from './HistoryTab';
import { Get, Patch, Post } from '../../../comman';
import Diagnose from '../../service/Diagnose';
import MainInpatientHistory from './MainInpatientHistory';
import DynamicContent from './DynamicContent';
const { Option } = Select;
const { TextArea } = Input;
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
   const [tabs, setTabs] = useState([]);
   const [validStep, setValidStep] = useState(false);
   const token = useSelector(selectCurrentToken);
   const editNote = useSelector(selectCurrentNote);
   const userId = useSelector(selectCurrentUserId);
   const config = {
      headers: {},
      params: {}
   };
   const patientId = PatientId;
   const inspection = Inspection;
   const cabinetId = CabinetId;
   const appointmentId = AppointmentId;
   const xrayRequestId = XrayRequestId;
   const [activeKey, setActiveKey] = useState('item-history');
   const [confirmModal, setConfirmModal] = useState(false);
   const [loading, setLoading] = useState(false);
   const dispatch = useDispatch();
   const DiagnoseHandleClick = (diagnoses) => {
      form.setFieldValue('diagnose', diagnoses);
   };
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
   const saveDynamicTab = async (values, key) => {
      setLoading(true);
      const data = {
         cabinetId: cabinetId,
         patientId: patientId,
         doctorId: userId,
         usageType: UsageType,
         description: values.description
      };
      console.log(values, data);
      var diagnoseData = [];
      values.diagnose?.map((diagnose) => {
         diagnoseData.push({
            patientId: patientId,
            type: 0,
            usageType: UsageType,
            diagnoseId: diagnose.id,
            diagnoseType: diagnose.diagnoseType,
            inpatientRequestId: UsageType === 'IN' ? appointmentId : null,
            appointmentId: UsageType === 'OUT' ? appointmentId : null
         });
      });
      console.log(values);
      // if (inspection === 11 || inspection === 12) {
      //    data['xrayRequestId'] = xrayRequestId;
      //    data['conclusion'] = JSON.stringify(values['conclusion']);
      //    data['advice'] = JSON.stringify(values['advice']);
      // } else {
      //    data['pain'] = JSON.stringify(values['pain']);
      //    data['question'] = JSON.stringify(values['question']);
      //    data['inspection'] = JSON.stringify(values['inspection']);
      //    data['plan'] = JSON.stringify(values['plan']);
      // }
      // if (UsageType === 'IN') {
      //    data['inpatientRequestId'] = appointmentId;
      // } else if (UsageType === 'OUT') {
      //    data['appointmentId'] = appointmentId;
      // }
      // data['formId'] = key;
      // data['diagnoses'] = diagnoseData;
      // const response = await Post('emr/inspectionNote', token, config, data);
      // if (response === 201) {
      //    setActiveKey('');
      //    dispatch(DelNote());
      //    if (inspection === 11 || inspection === 12) {
      //       Patch('service/xrayRequest/' + XrayRequestId, token, config, {
      //          xrayProcess: 2
      //       });
      //    } else {
      //       // setConfirmModal(true);
      //       handleClick({ target: { value: 'OCS' } });
      //    }
      // }
      // setLoading(false);
   };

   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
      setValidStep(false);
   };
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
      config.params.cabinetId = cabinetId;
      const response = await Get('emr/inspection-form', token, config);
      if (response.data.length > 0) {
         response?.data?.map((el) => {
            setItems([
               {
                  label: 'Дүгнэлт',
                  key: `item-exo`,
                  children: <DynamicTabContent data={el.formItem} />
               }
            ]);
         });
      }
      config.params.cabinetId = null;
   };
   const getInspectionTabs = async () => {
      //Тухайн эмчид харагдах TAB ууд
      if (UsageType === 'IN') {
         config.params.structureId = cabinetId;
      } else {
         config.params.cabinetId = cabinetId;
      }
      config.params.usageType = UsageType;
      const response = await Get('emr/inspection-form', token, config);
      if (response.data.length > 0) {
         response?.data?.map((el) => {
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
      }
      config.params.cabinetId = null;
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
      } else {
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
