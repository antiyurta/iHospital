import { Form, Input, Select, Switch } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';
const { Option } = Select;
function GeneralDrugInformation() {
   // state
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [atcCategories, setAtcCategories] = useState([]);
   const [medTreatmentTypes, setMedTreatmentTypes] = useState([]);
   const [measurements, setMeasurements] = useState([]);
   const [medicineType, setMedicineType] = useState([]);
   // functions
   const getAtcCategory = async () => {
      config.params.type = 1;
      const response = await Get('medicine/reference', token, config);
      setAtcCategories(response.data);
   };
   const getMedTreatmentTypes = async () => {
      config.params.type = 2;
      const response = await Get('medicine/reference', token, config);
      setMedTreatmentTypes(response.data);
   };
   const getMeasurements = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get('reference/measurement', token, conf);
      setMeasurements(response.data);
   };
   const getMedicineType = async () => {
      config.params.type = 0;
      const response = await Get('medicine/reference', token, config);
      setMedicineType(response.data);
   };
   // effect
   useEffect(() => {
      getAtcCategory();
      getMedicineType();
      getMedTreatmentTypes();
      getMeasurements();
   }, []);
   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-1">
               <Form.Item
                  label="Эмийн код"
                  name="barcode"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item
                  label="Олон улсын нэршил"
                  name="iName"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item
                  label="Эмийн нэр"
                  name="name"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item
                  label="Эмийн хэлбэр"
                  name="medicineTypeId"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Select>
                     {medicineType?.map((type, index) => {
                        return (
                           <Option key={index} value={type.id}>
                              {type.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
            </div>
            <div className="w-full px-1">
               <Form.Item
                  label="ATC код"
                  name="atcCategoryId"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
                  labelCol={{
                     span: 4
                  }}
                  wrapperCol={{
                     span: 20
                  }}
               >
                  <Select>
                     {atcCategories?.map((atc, index) => {
                        return (
                           <Option key={index} value={atc.id}>
                              {atc.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item
                  label="Хэмжих нэгж"
                  name="measurementId"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Select>
                     {measurements?.map((measurement, index) => {
                        return (
                           <Option key={index} value={measurement.id}>
                              {measurement.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item
                  label="1 удаагийн тун"
                  name="dose"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item
                  label="1 Өдрийн тун"
                  name="dayMaxDose"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item
                  label="Эмчилгээний төрөл"
                  name="medTreatmentId"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Select>
                     {medTreatmentTypes?.map((item, index) => {
                        return (
                           <Option key={index} value={item.id}>
                              {item.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item
                  label="Хадгалах нөхцөл"
                  name="storageType"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Select>
                     <Option value={1}>Тасалгаанд</Option>
                     <Option value={2}>Тасалгаанд гэрлээс хамгаалж</Option>
                     <Option value={3}>Хөргөгчинд</Option>
                     <Option value={4}>Тугалган цаасанд ороож</Option>
                  </Select>
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item
                  label="Задгайгаар зарлагдах эсэх"
                  name="isExpenditure"
                  valuePropName="checked"
                  labelCol={{
                     span: 12
                  }}
                  wrapperCol={{
                     span: 12
                  }}
               >
                  <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
               </Form.Item>
            </div>
         </div>
      </>
   );
}
export default GeneralDrugInformation;
