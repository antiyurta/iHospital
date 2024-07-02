import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
//common
import { UploadImage } from '@Comman/Input/UploadImage';
//api
import CountryApi from '@ApiServices/reference/country';
import xypApi from '@ApiServices/xyp/xyp.api';
import { openNofi } from '@Comman/common';
import { message } from '@Features/AppGlobal';
//extends
const { Option } = Select;

function GeneralInfo({ form, gbase }) {
   const firstName = Form.useWatch('firstName', form);
   const lastName = Form.useWatch('lastName', form);
   const registerNumber = Form.useWatch('registerNumber', form);
   const [citizens, setCitizens] = useState([]);
   const [isLoadingPersonInfo, setIsLoadingPersonInfo] = useState(false);

   const getCitizens = async () => {
      await CountryApi.getByPageFilter({
         params: {
            type: 1
         }
      }).then(({ data: { response } }) => {
         setCitizens(response.data);
      });
   };
   useEffect(() => {
      getCitizens();
   }, []);

   const personInfo = useCallback(() => {
      form.validateFields(['firstName', 'lastName', 'registerNumber']).catch(({ errorFields }) => {
         errorFields?.map((error) => message.error(error.errors[0]));
      });
      if (firstName && lastName && registerNumber) {
         setIsLoadingPersonInfo(true);
         xypApi
            .personInfo(registerNumber, lastName, firstName)
            .then(({ data: { response } }) => {
               if (response.return.resultCode != 0) {
                  openNofi('warning', 'ХУР-сервис', response.return.resultMessage);
               } else {
                  form.setFieldsValue({
                     educationId: String(response?.return?.response?.educationCode ?? 1),
                     employmentId: String(response?.return?.response?.employmentCode ?? 1),
                     occupationId: String(response?.return?.response?.occupationCode ?? 0),
                     isEmployment: response?.return?.response?.isEmploymentCode ?? 1,
                     emplessDescriptionId: String(response?.return?.response?.unEmploymentReasonCode ?? 1),
                     workplace: String(response?.return?.response?.isicCode ?? 0)
                  });
               }
            })
            .finally(() => setIsLoadingPersonInfo(false));
      }
   }, [firstName, lastName, registerNumber]);
   return (
      <div className="flex flex-col gap-2">
         <div className="flex flex-row gap-2 justify-between">
            <div className="rounded-md bg-[#F3F4F6] p-2">
               <Form.Item name={'imageId'} hidden>
                  <Input />
               </Form.Item>
               <Form.Item name={'base64String'} hidden>
                  <Input />
               </Form.Item>
               <UploadImage form={form} itemName={'imageId'} />
            </div>
         </div>
         <Button loading={isLoadingPersonInfo} onClick={() => personInfo()}>
            Нэмэлт мэдээлэл татах
         </Button>
         <div className="rounded-md bg-[#F3F4F6] p-2">
            <Form.Item name="civilId" hidden>
               <Input />
            </Form.Item>
            <Form.Item name="requestId" hidden>
               <Input />
            </Form.Item>
            <Form.Item name="resultMsg" hidden>
               <Input />
            </Form.Item>
            <Form.Item name="familyName" label="Ургийн овог:">
               <Input />
            </Form.Item>
            <Form.Item
               label="Эцэг/эх/-ийн нэр:"
               name="lastName"
               rules={[
                  {
                     required: true,
                     message: 'Эцэг/эх/-ийн нэр оруулна уу'
                  }
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Өөрийн нэр:"
               name="firstName"
               rules={[
                  {
                     required: true,
                     message: 'Өөрийн нэр оруулна уу'
                  }
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Иргэншил:"
               name="countryId"
               rules={[
                  {
                     required: true,
                     message: 'Заавал'
                  }
               ]}
            >
               <Select
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) => (option?.children ?? '').toLowerCase().includes(input.toLowerCase())}
               >
                  {citizens.map((citizen, index) => {
                     return (
                        <Option key={index} value={citizen.id}>
                           {citizen.name}
                        </Option>
                     );
                  })}
               </Select>
            </Form.Item>
            <Form.Item
               label="Регистр дугаар:"
               name="registerNumber"
               rules={[
                  {
                     required: true,
                     message: 'Регистр дугаар оруулна уу'
                  },
                  {
                     validator: async (_, registerNumber) => {
                        if (registerNumber === undefined) {
                           return Promise.reject(new Error(''));
                        } else {
                           if (registerNumber.length < 10) {
                              return Promise.reject(new Error('Хамгийн багадаа 10 үсэг'));
                           }
                        }
                     }
                  }
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Утас"
               name="phoneNo"
               rules={[
                  {
                     required: true,
                     message: 'Утас оруулна уу'
                  }
               ]}
            >
               <Input />
            </Form.Item>
         </div>
      </div>
   );
}
export default GeneralInfo;
