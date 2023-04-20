import { LoadingOutlined, UserOutlined } from '@ant-design/icons';
import {
   DatePicker,
   Form,
   Input,
   Select,
   Statistic,
   Typography,
   Upload
} from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, openNofi } from '../../../comman';

function GeneralInfo({ form, gbase }) {
   const token = useSelector(selectCurrentToken);
   const [imageUrl, setImageUrl] = useState();
   const [loading, setLoading] = useState(false);
   const [citizens, setCitizens] = useState([]);
   const [towns, setTowns] = useState([]);
   const { Title } = Typography;
   const { Option } = Select;
   const beforeUpload = (file) => {
      const isJpgOrPng =
         file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
         message.error('JPEG or PNG');
      }

      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
         message.error('SMALLER 2MB !');
      }

      return isJpgOrPng && isLt2M;
   };
   const handleChange = (info) => {
      if (info.file.status === 'uploading') {
         setLoading(true);
         return;
      }

      if (info.file.status === 'done') {
         // Get this url from response in real world.
         getBase64(info.file.originFileObj, (url) => {
            setLoading(false);
            setImageUrl(url);
         });
      }
   };
   const uploadButton = (
      <div>
         {loading ? <LoadingOutlined /> : <UserOutlined />}
         <div
            style={{
               marginTop: 8
            }}
         >
            Зураг оруулах
         </div>
      </div>
   );
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
   useEffect(() => {
      getCitizens();
   }, []);
   return (
      <div>
         <div className="flex flex-wrap">
            <div className="w-1/2 p-1">
               <Form.Item className="mb-0 text-center">
                  <Upload
                     name="avatar"
                     listType="picture-card"
                     className="avatar-uploader"
                     showUploadList={false}
                     action="http://192.168.0.106:8000/local-files/fileUpload"
                     beforeUpload={beforeUpload}
                     onChange={handleChange}
                  >
                     {imageUrl ? (
                        <img
                           src={imageUrl}
                           alt="avatar"
                           style={{
                              width: '100%'
                           }}
                        />
                     ) : (
                        uploadButton
                     )}
                  </Upload>
               </Form.Item>
            </div>
            <div className="w-1/2 p-1">
               <Statistic
                  title="Картын дугаар"
                  //   formatter={(e) => {
                  //      return <p>{e}</p>;
                  //   }}
                  value={form.getFieldValue('cardNumber')}
                  className="antiStatis"
               />
               <div className="flex flex-wrap">
                  <div className="basis-1/2">
                     <Statistic
                        title="Нас"
                        value={form.getFieldValue('age')}
                        className="antiStatis"
                     />
                  </div>
                  <div className="basis-1/2">
                     <Statistic
                        title="Хүйс"
                        value={
                           form.getFieldValue('genderType') === 'MAN'
                              ? 'Эр'
                              : form.getFieldValue('genderType') === 'WOMAN'
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
                  filterOption={(input, option) =>
                     (option?.children ?? '')
                        .toLowerCase()
                        .includes(input.toLowerCase())
                  }
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
                        console.log(typeof registerNumber);
                        if (registerNumber === undefined) {
                           return Promise.reject(new Error(''));
                        } else {
                           if (registerNumber.length < 10) {
                              return Promise.reject(
                                 new Error('Хамгийн багадаа 10 үсэг')
                              );
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
                     required: true,
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
      </div>
   );
}
export default GeneralInfo;
