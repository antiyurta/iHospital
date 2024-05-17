import React, { useEffect, useState } from 'react';
import { Button, Form, Spin } from 'antd';
import { useSelector } from 'react-redux';
//common
import { openNofi } from '@Comman/common';
//comp
import NewFormRender from '@Pages/BeforeAmbulatory/Customized/NewFormRender';
// forms
import { UrgentFormFirst, UrgnetFormLast } from '../DefualtForms';
//redux
import { selectCurrentEmrData } from '@Features/emrReducer';
//api
import DiagnoseApi from '@ApiServices/reference/diagnose';
import patientDiagnoseApi from '@ApiServices/emr/patientDiagnose';
import DocumentMiddlewareApi from '@ApiServices/organization/document';

const UrgentIndex = ({ type, handleClick }) => {
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const [patientDiagnosis, setPatientDiagnosis] = useState([]);
   const [form] = Form.useForm();
   const [oldData, setOldData] = useState();
   const [isLoading, setLoading] = useState(false);
   const getInspectionNote = async () => {
      setLoading(true);
      await DocumentMiddlewareApi.getById(incomeEmrData.urgentInspectionNoteId)
         .then(({ data: { response } }) => {
            setOldData(response.response.data);
            form.setFieldsValue(response.response.data);
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const getPatientDiagnosis = async () => {
      await patientDiagnoseApi
         .getByPageFilter({
            patientId: incomeEmrData.patientId,
            appointmentId: incomeEmrData.appointmentId
         })
         .then(({ data: { response } }) => {
            setPatientDiagnosis(response.data);
         });
   };
   const removePatientDiagnoseById = async (id) => {
      await patientDiagnoseApi.delete(id);
   };
   const onFinish = async (values) => {
      if (type === 'last') {
         if (patientDiagnosis?.length > 0) {
            patientDiagnosis?.map((pd) => {
               removePatientDiagnoseById(pd.id);
            });
         }
         const newDiagnosis = [
            {
               value: 1,
               id: values.q814Id
            },
            {
               value: 4,
               id: values.q815Id
            }
         ].filter((id) => id.id);
         try {
            const incomeDiagnosis = await Promise.all(
               newDiagnosis?.map(async (newDiagnose) => {
                  return await DiagnoseApi.getById(newDiagnose.id).then(({ data: { response } }) => ({
                     ...response,
                     newDiagnoseType: newDiagnose.value
                  }));
               })
            );
            Promise.all(
               incomeDiagnosis?.map(async (diagnose) => {
                  return await patientDiagnoseApi.post({
                     patientId: incomeEmrData.patientId,
                     usageType: incomeEmrData.usageType,
                     diagnoseType: diagnose.newDiagnoseType,
                     type: diagnose.type,
                     diagnoseId: diagnose.id,
                     appointmentId: incomeEmrData.appointmentId,
                     inpatientRequestId: null,
                     diagnose: diagnose
                  });
               })
            )
               .then(() => {
                  getPatientDiagnosis();
               })
               .catch((error) => {
                  console.log(error);
               });
         } catch (error) {
            console.log('diagnoseGetError', error);
         }
      }
      await DocumentMiddlewareApi.patch(incomeEmrData.urgentInspectionNoteId, { data: { ...oldData, ...values } })
         .then(() => {
            openNofi('success', 'Амжилттай', 'Дүгнэлт амжилттай хадгалагдсан');
         })
         .finally(() => {
            handleClick({ target: { value: 'OTS' } });
            setLoading(false);
         });
   };
   const onFinishFailed = (error) => {
      console.log(error);
   };

   useEffect(() => {
      incomeEmrData.urgentInspectionNoteId && getInspectionNote();
   }, [incomeEmrData.urgentInspectionNoteId]);

   useEffect(() => {
      type === 'last' && getPatientDiagnosis();
   }, []);
   return (
      <Spin spinning={isLoading}>
         <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <div className="flex flex-col gap-2">
               <div className="h-[450px] overflow-auto p-3">
                  <NewFormRender
                     useForm={form}
                     form={{
                        documentForm: type === 'first' ? UrgentFormFirst : UrgnetFormLast
                     }}
                     formOptionIds={[]}
                     isCheck={false}
                     formName={null}
                     incomeKeyWords={[]}
                     checkProgress={(_keyWords) => null}
                     isDisabledButton={(_state) => null}
                  />
               </div>
               <Button type="primary" htmlType="submit" loading={isLoading}>
                  Хадгалах
               </Button>
            </div>
         </Form>
      </Spin>
   );
};
export default UrgentIndex;
