import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Statistic } from 'antd';
import moment from 'moment';
import { useSelector } from 'react-redux';
//comp
import Finger from '../../../../features/finger';
//redux
import { selectHospitalIsXyp } from '@Features/hospitalReducer';
//common
import { openNofi } from '@Comman/common';
import { UploadImage } from '@Comman/Input/UploadImage';
//api
import xypApi from '@ApiServices/xyp/xyp.api';
import PatientApi from '@ApiServices/pms/patient.api';
import CountryApi from '@ApiServices/reference/country';
//extends
const { Option } = Select;

function GeneralInfo({ form, gbase }) {
   const [citizens, setCitizens] = useState([]);
   const [countryId, setCountryId] = useState();
   const isXyp = useSelector(selectHospitalIsXyp);

   const findMongolId = (incomeCitizens) => {
      const mongolia = incomeCitizens.find((citizen) => citizen.name === 'Монгол');
      setCountryId(34);
   };

   const getCitizens = async () => {
      await CountryApi.getByPageFilter({
         params: {
            type: 1
         }
      }).then(({ data: { response } }) => {
         findMongolId(response.data);
         setCitizens(response.data);
      });
   };
   const dada = async (v) => {
      if (v.length === 10) {
         await PatientApi.getCheckRegNo({
            params: {
               registerNumber: v
            }
         }).then(({ data: { response } }) => {
            if (response) {
               response['birthDay'] = moment(response['birthDay']);
               form.setFieldsValue(response);
               gbase(true);
            }
         });
      }
   };
   const end = async (value) => {
      const res = await xypApi.post(
         '123',
         { citizenFingerprint: value.citizenFinger, citizenRegnum: value.regno },
         { operatorFingerprint: value.operatorFinger, operatorRegnum: value.regno }
      );
      if (res.data.response.return.resultCode !== 0) {
         openNofi('warning', res.data.response.return.resultMessage);
      } else {
         const { response } = res.data.response.return;
         form.setFieldsValue({
            base64String: response.image,
            familyName: response.surname,
            lastName: response.lastname,
            firstName: response.firstname,
            registerNumber: response.regnum,
            aimagId: response.aimagCityName,
            soumId: response.soumDistrictName,
            committee: response.bagKhorooName,
            building: response.passportAddress
         });
      }
   };
   useEffect(() => {
      getCitizens();
   }, []);
   return (
      <div>
         <div className="flex flex-wrap">
            <div className="w-1/2 p-1">
               <Form.Item name={'imageId'} hidden>
                  <Input />
               </Form.Item>
               <Form.Item name={'base64String'} hidden>
                  <Input />
               </Form.Item>
               <UploadImage form={form} itemName={'imageId'} />
            </div>
            <div className="w-1/2 p-1">
               <Statistic title="Картын дугаар" value={form?.getFieldValue('cardNumber')} className="antiStatis" />
               {isXyp ? (
                  <Finger
                     isFinger={true}
                     text={'Хуруу уншуулах'}
                     steps={[
                        {
                           title: 'Иргэн',
                           path: 'citizenFinger'
                        },
                        {
                           title: 'Ажилтан',
                           path: 'operatorFinger'
                        }
                     ]}
                     handleClick={end}
                  />
               ) : null}
               <div className="flex flex-wrap">
                  <div className="basis-1/2">
                     <Statistic title="Нас" value={form?.getFieldValue('age')} className="antiStatis" />
                  </div>
                  <div className="basis-1/2">
                     <Statistic
                        title="Хүйс"
                        value={
                           form?.getFieldValue('genderType') === 'MAN'
                              ? 'Эр'
                              : form?.getFieldValue('genderType') === 'WOMAN'
                                ? 'Эм'
                                : ''
                        }
                        className="antiStatis"
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="p-1">
            <Form.Item name="familyName" label="Ургийн овог:" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
               <Input />
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Эцэг/эх/-ийн нэр:"
               name="lastName"
               rules={[
                  {
                     required: true,
                     message: 'Эцэг/эх/-ийн нэр оруулна уу'
                  }
               ]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input />
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Өөрийн нэр:"
               name="firstName"
               rules={[
                  {
                     required: true,
                     message: 'Өөрийн нэр оруулна уу'
                  }
               ]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input />
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Иргэншил:"
               name="countryId"
               rules={[
                  {
                     required: true,
                     message: 'Заавал'
                  }
               ]}
               initialValue={countryId}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
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
         </div>
         <div className="p-1">
            <Form.Item
               label="Регистр дугаар:"
               name="registerNumber"
               onChange={(v) => {
                  dada(v.target.value);
               }}
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
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input />
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Утас"
               name="phoneNo"
               rules={[
                  {
                     required: true,
                     message: 'Утас оруулна уу'
                  }
               ]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input />
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="И-мэйл"
               name="email"
               rules={[
                  {
                     required: false,
                     type: 'email',
                     message: 'И-мэйл хэлбэр буруу !!!'
                  }
               ]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input />
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item label="Цусны бүлэг" name="bloodType" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
               <Select options={[{ value: 'A' }, { value: 'B' }, { value: 'AB' }, { value: 'O' }]} />
            </Form.Item>
         </div>
      </div>
   );
}
export default GeneralInfo;
