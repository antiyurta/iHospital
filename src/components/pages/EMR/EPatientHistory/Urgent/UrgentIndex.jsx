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
import DocumentMiddlewareApi from '@ApiServices/organization/document';

const UrgentIndex = ({ type, handleClick }) => {
   const incomeEmrData = useSelector(selectCurrentEmrData);
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
   const onFinish = async (values) => {
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
