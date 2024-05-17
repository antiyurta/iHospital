import React, { useState } from 'react';
//img
import xypLogo from './xypLogo.svg';
import { Form, Input, Modal, Segmented, message } from 'antd';
//common
import { openNofi } from '@Comman/common';
import Finger from '@Comman/Finger/Finger';
//api
import xypApi from '@ApiServices/xyp/xyp.api';
const XypFormPatient = ({ setData }) => {
   const [isOpen, setOpen] = useState(false);
   const [isLoading, setLoading] = useState(false);
   const [xypForm] = Form.useForm();
   const sentXyp = async (values) => {
      setLoading(true);
      await xypApi
         .post(
            '123',
            { citizenFingerprint: values.citizenFinger, citizenRegnum: values.citizenRegnum },
            { operatorFingerprint: values.operatorFinger, operatorRegnum: values.operatorRegnum }
         )
         .then(({ data: { response } }) => {
            if (response.return.resultCode != 0) {
               openNofi('warning', response.return.resultMessage);
            } else {
               const { response: newResponse, requestId, resultMessage } = response.return;
               setData({
                  requestId: requestId,
                  resultMsg: resultMessage,
                  civilId: newResponse.civilId,
                  base64String: newResponse.image,
                  familyName: newResponse.surname,
                  lastName: newResponse.lastname,
                  firstName: newResponse.firstname,
                  registerNumber: newResponse.regnum,
                  nationality: newResponse.nationality,
                  ethnicity: newResponse.ethnicity,
                  aimagCityName: newResponse.aimagCityName,
                  aimagCityCode: newResponse.aimagCityCode,
                  soumDistrictName: newResponse.soumDistrictName,
                  soumDistrictCode: newResponse.soumDistrictCode,
                  bagKhorooName: newResponse.bagKhorooName,
                  bagKhorooCode: newResponse.bagKhorooCode,
                  addressStreetName: newResponse.addressStreetName || newResponse.addressApartmentName,
                  addressDetail: newResponse.addressDetail
               });
               setOpen(false);
            }
         })
         .finally(() => {
            setLoading(false);
         });
   };
   return (
      <>
         <div
            className="rounded p-2 w-full bg-[#0095ff] hover:cursor-pointer"
            onClick={() => {
               setOpen(true);
            }}
         >
            <img src={xypLogo} alt="hurlogo" />
         </div>
         <Modal
            title="Иргэний мэдээлэл татах"
            open={isOpen}
            onCancel={() => {
               setOpen(false);
            }}
            width={500}
            confirmLoading={isLoading}
            okText="Татах"
            onOk={() => {
               xypForm
                  .validateFields()
                  .then((values) => {
                     sentXyp(values);
                  })
                  .catch(({ errorFields }) => {
                     errorFields?.map((error) => message.error(error.errors[0]));
                  });
            }}
         >
            <Form form={xypForm} className="grid grid-cols-2 gap-2">
               <div className="rounded-md bg-[#F3F4F6] flex flex-col gap-2 w-full p-2">
                  <label>Иргэн:</label>
                  <Form.Item
                     className="mb-0"
                     name="citizenRegnum"
                     rules={[
                        {
                           required: true,
                           message: 'Иргэний регистрийн дугаар'
                        }
                     ]}
                  >
                     <Input placeholder="Иргэний регистрийн дугаар" />
                  </Form.Item>
                  <Finger
                     form={xypForm}
                     insurance={true}
                     noStyle
                     name="citizenFinger"
                     rules={[
                        {
                           required: true,
                           message: 'Иргэний хурууний хээ заавал'
                        }
                     ]}
                  >
                     <Input />
                  </Finger>
               </div>
               <div className="rounded-md bg-[#F3F4F6] flex flex-col gap-2 w-full p-2">
                  <label>Ажилтан:</label>
                  <Form.Item
                     className="mb-0"
                     name="operatorRegnum"
                     rules={[
                        {
                           required: true,
                           message: 'Иргэний хурууний хээ заавал'
                        }
                     ]}
                  >
                     <Input placeholder="Ажилтаны регистрийн дугаар" />
                  </Form.Item>
                  <Finger
                     form={xypForm}
                     insurance={true}
                     noStyle
                     name="operatorFinger"
                     rules={[
                        {
                           required: true,
                           message: 'Ажилтаны хурууний хээ заавал'
                        }
                     ]}
                  >
                     <Input />
                  </Finger>
               </div>
            </Form>
         </Modal>
      </>
   );
};
export default XypFormPatient;
