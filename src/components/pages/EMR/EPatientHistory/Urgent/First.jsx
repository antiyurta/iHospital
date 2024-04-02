import { Button, Form, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//common
import { openNofi } from '@Comman/common';
//comp
import NewFormRender from '@Pages/BeforeAmbulatory/Customized/NewFormRender';
//api
import DocumentMiddlewareApi from '@ApiServices/organization/document';
import AppointmentApi from '@ApiServices/appointment/api-appointment-service';
// forms
import { UrgentFormFirst } from '../DefualtForms';
//redux
import { selectCurrentEmrData, setEmrData } from '@Features/emrReducer';

const First = ({ handleClick }) => {
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const [form] = Form.useForm();
   const dispatch = useDispatch();
   const [oldData, setOldData] = useState();
   const [editMode, setEditMode] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const getInspectionNote = async () => {
      setIsLoading(true);
      await DocumentMiddlewareApi.getById(incomeEmrData.urgentInspectionNoteId)
         .then(({ data: { response } }) => {
            setEditMode(true);
            setOldData(response.response.data);
            form.setFieldsValue(response.response.data);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   const onFinish = async (values) => {
      setIsLoading(true);
      if (editMode) {
         await DocumentMiddlewareApi.patch(incomeEmrData.urgentInspectionNoteId, { data: { ...oldData, ...values } })
            .then(() => {
               openNofi('success', 'Амжилттай', 'Дүгнэлт амжилттай хадгалагдсан');
            })
            .finally(() => {
               setIsLoading(false);
            });
      } else {
         await DocumentMiddlewareApi.post({
            appointmentId: incomeEmrData.appointmentId,
            data: {
               ...values
            },
            documentId: 111,
            formId: 48, // test shu
            formType: 3,
            patientId: incomeEmrData.patientId,
            position: 32, // test shu,
            usageType: 'OUT',
            saveType: 'Save',
            type: 'FORM'
         })
            .then(async ({ data: { response } }) => {
               await AppointmentApi.patchAppointment(incomeEmrData.appointmentId, {
                  urgentInspectionNoteId: response.response._id
               }).then(() => {
                  openNofi('success', 'Амжилттай', 'Дүгнэлт амжилттай хадгалагдсан');
                  dispatch(
                     setEmrData({
                        ...incomeEmrData,
                        urgentInspectionNoteId: response.response._id
                     })
                  );
                  handleClick({ target: { value: 'OTS' } });
               });
            })
            .finally(() => {
               setIsLoading(false);
            });
      }
   };
   const onFinishFailed = (errors) => {
      console.log(errors);
   };
   useEffect(() => {
      incomeEmrData.urgentInspectionNoteId && getInspectionNote();
   }, [incomeEmrData.urgentInspectionNoteId]);
   return (
      <Spin spinning={isLoading}>
         <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <div className="flex flex-col gap-2">
               <div className="h-[500px] overflow-auto p-3">
                  <NewFormRender
                     useForm={form}
                     form={{
                        documentForm: UrgentFormFirst
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
export default First;
