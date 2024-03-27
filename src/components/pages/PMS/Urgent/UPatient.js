import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Radio, Spin } from 'antd';
import dayjs from 'dayjs';
//api
import PatientApi from '@ApiServices/pms/patient.api';

function UPatient({ editMode, patientId, onFinish }) {
   const [urgentForm] = Form.useForm();
   const [isMind, setIsMind] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const getPatient = async () => {
      setIsLoading(true);
      await PatientApi.getById(patientId)
         .then(({ data: { response } }) => {
            response['birthDay'] = dayjs(response['birthDay']);
            urgentForm.setFieldsValue(response);
            setIsLoading(false);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   useEffect(() => {
      if (editMode) {
         patientId && getPatient();
      } else {
         urgentForm.resetFields();
      }
   }, [patientId, editMode]);

   return (
      <Form
         form={urgentForm}
         initialValues={{
            lastName: 'EMERGENCY',
            firstName: `EMERGENCY ${dayjs(new Date()).format('HH:mm:ss')}`,
            isMind: false
         }}
      >
         <Spin spinning={isLoading}>
            <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
               <div className="flex flex-col gap-3">
                  <div className="p-3">
                     <Form.Item className="mb-0" label="Ухаан санаа" name="isMind">
                        <Radio.Group
                           onChange={(event) => {
                              setIsMind(event.target.value);
                              if (event.target.value) {
                                 urgentForm.resetFields([['registerNumber']]);
                              }
                           }}
                        >
                           <Radio value={false}>Ухаангүй</Radio>
                           <Radio value={true}>Ухаантай</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
                  <div className="p-3">
                     <Form.Item className="mb-0" label="Регистрийн дугаар" name="registerNumber">
                        <Input disabled={!isMind} />
                     </Form.Item>
                  </div>
                  <div className="p-3">
                     <Form.Item className="mb-0" label="Эцэг/Эхийн нэр" name="lastName">
                        <Input disabled={!isMind} />
                     </Form.Item>
                  </div>
                  <div className="p-3">
                     <Form.Item className="mb-0" label="Өөрийн нэр" name="firstName">
                        <Input disabled={!isMind} />
                     </Form.Item>
                  </div>
                  <div className="p-3">
                     <Form.Item
                        rules={[
                           {
                              required: true,
                              message: 'Хүйс заавал'
                           }
                        ]}
                        className="mb-0"
                        label="Хүйс"
                        name="genderType"
                     >
                        <Radio.Group className="flex justify-center">
                           <Radio value={'MAN'}>ЭРЭГТЭЙ</Radio>
                           <Radio value={'WOMAN'}>ЭМЭГТЭЙ</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
                  <div className="p-3">
                     <Form.Item className="mb-0" label="Утасны дугаар" name="phoneNo">
                        <Input />
                     </Form.Item>
                  </div>
               </div>
               <Button
                  type="primary"
                  onClick={() => {
                     urgentForm
                        .validateFields()
                        .then((values) => {
                           onFinish(values);
                        })
                        .catch((error) => {
                           console.log(error);
                        });
                  }}
               >
                  Хадгалах
               </Button>
            </div>
         </Spin>
      </Form>
   );
}
export default UPatient;
