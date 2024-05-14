import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Segmented, Select, Statistic } from 'antd';
import moment from 'moment';
import { useSelector } from 'react-redux';
//comp
import XypFormPatient from './Xyp';
//redux
import { selectHospitalIsXyp } from '@Features/hospitalReducer';
//common
import { openNofi } from '@Comman/common';
import Finger from '@Comman/Finger/Finger';
import { UploadImage } from '@Comman/Input/UploadImage';
//api
import xypApi from '@ApiServices/xyp/xyp.api';
import PatientApi from '@ApiServices/pms/patient.api';
import CountryApi from '@ApiServices/reference/country';
import { SendOutlined } from '@ant-design/icons';
//extends
const { Option } = Select;

function GeneralInfo({ form, gbase }) {
   const [citizens, setCitizens] = useState([]);
   const isXyp = useSelector(selectHospitalIsXyp);

   const getCitizens = async () => {
      await CountryApi.getByPageFilter({
         params: {
            type: 1
         }
      }).then(({ data: { response } }) => {
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
   const setXypData = async (values) => {
      form.setFieldsValue(values);
   };
   useEffect(() => {
      getCitizens();
   }, []);
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
            <div className="flex flex-col gap-2">{isXyp ? <XypFormPatient setData={setXypData} /> : null}</div>
         </div>
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
