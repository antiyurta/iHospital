import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';
const { Option } = Select;
function DURCriteria() {
   // state
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [medicines, setMedicines] = useState([]);
   const [pregnancyWarning, setPregnancyWarnings] = useState([]);
   // function
   const getPregnancyWarnings = async () => {
      config.params.type = 4;
      const response = await Get('medicine/reference', token, config);
      setPregnancyWarnings(response.data);
   };
   const getMedicines = async () => {
      const response = await Get('service/medicine', token, config);
      if (response.data.length > 0) {
         setMedicines(response.data);
      }
   };
   //effect
   useEffect(() => {
      getPregnancyWarnings();
      getMedicines(1);
   }, []);
   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full px-1">
               <Form.Item
                  label="Жирэмсэний сэрэжлүүлэг"
                  name="pregnancyWarningId"
                  labelCol={{
                     span: 4
                  }}
                  wrapperCol={{
                     span: 20
                  }}
               >
                  <Select>
                     {pregnancyWarning?.map((pregnancy, index) => {
                        return (
                           <Option key={index} value={pregnancy.id}>
                              {pregnancy.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item label="Насны Дээд" name="maxAge">
                  <InputNumber />
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item label="Насны Дooд" name="minAge">
                  <InputNumber />
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item label="Өдөр хэрэглэх дээд хэмжээ" name="dayMaxDose">
                  <Input />
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item label="Хэрэглэх хугацаа" name="usageTime">
                  <Input />
               </Form.Item>
            </div>
            <div className="w-full px-1">
               <label className="font-bold" style={{ fontSize: '14px' }}>
                  Хамт хэрэглэж болохгүй эм
               </label>
               <Form.List name="durs">
                  {(fields, { add, remove }) => (
                     <>
                        {fields.map(({ key, name, ...restField }) => (
                           <div key={key} className="rounded-md m-2" style={{ backgroundColor: '#fafafa' }}>
                              <div className="p-2">
                                 <Form.Item {...restField} label="Эмийн нэр" name={[name, 'medicineDurId']}>
                                    <Select>
                                       {medicines.map((item, index) => {
                                          return (
                                             <Option key={index} value={item.id}>
                                                {item.name}
                                             </Option>
                                          );
                                       })}
                                    </Select>
                                 </Form.Item>
                                 <Form.Item {...restField} label="Анхааруулах мессиж" name={[name, 'message']}>
                                    <TextArea />
                                 </Form.Item>
                                 <DeleteOutlined
                                    style={{ color: 'red', fontSize: '18px' }}
                                    onClick={() => remove(name)}
                                 />
                              </div>
                           </div>
                        ))}
                        <Form.Item>
                           <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                              Add field
                           </Button>
                        </Form.Item>
                     </>
                  )}
               </Form.List>
            </div>
         </div>
      </>
   );
}
export default DURCriteria;
