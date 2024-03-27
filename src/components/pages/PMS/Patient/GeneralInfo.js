import { Form, Input, Select, Statistic } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, openNofi } from '../../../common';
import { selectHospitalIsXyp } from '../../../../features/hospitalReducer';
import Finger from '../../../../features/finger';
import xypApi from '../../../../services/xyp/xyp.api';
import localFileApi from '../../../../services/file/local-file/local-file.api';
import { UploadImage } from '../../../Input/UploadImage';

function GeneralInfo({ form, gbase }) {
   const token = useSelector(selectCurrentToken);
   const [loading, setLoading] = useState(false);
   const [citizens, setCitizens] = useState([]);
   const [towns, setTowns] = useState([]);
   const isXyp = useSelector(selectHospitalIsXyp);

   const { Option } = Select;

   const getCitizens = async () => {
      const conf = {
         headers: {},
         params: {
            type: 1
         }
      };
      const response = await Get('reference/country', token, conf);
      setCitizens(response.data);
   };
   const dada = async (v) => {
      if (v.length === 10) {
         const conf = {
            headers: {},
            params: {
               registerNumber: v
            }
         };
         const response = await Get('pms/patient/check/regno', token, conf);
         if (response) {
            response['birthDay'] = moment(response['birthDay']);
            filterTowns(response.aimagId);
            form.setFieldsValue(response);
            gbase(true);
         }
      }
   };
   const filterTowns = async (value) => {
      const conf = {
         headers: {},
         params: {
            type: 3,
            parentId: value
         }
      };
      const response = await Get('reference/country', token, conf);
      setTowns(response.data);
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
            <Form.Item
               name="familyName"
               label="Ургийн овог:"
               rules={[
                  {
                     required: true,
                     message: 'Ургийн овог оруулна уу'
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
               initialValue={43}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Select
                  // defaultValue={43}
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) => (option?.children ?? '').toLowerCase().includes(input.toLowerCase())}
               >
                  {/* Монголын ID === 43 */}
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
