import { Form, Input, Select } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';

function ResidentialAddress({ form }) {
   const { Option } = Select;
   const token = useSelector(selectCurrentToken);
   const [towns, setTowns] = useState([]);
   const [provices, setProvices] = useState([]);
   const filterTowns = async (value) => {
      const conf = {
         headers: {},
         params: {
            type: 3,
            parantId: value
         }
      };
      const response = await Get('reference/country', token, conf);
      setTowns(response.data);
   };
   const getProvices = async () => {
      const conf = {
         headers: {},
         params: {
            type: 2
         }
      };
      const response = await Get('reference/country', token, conf);
      setProvices(response.data);
   };
   useEffect(() => {
      getProvices();
   }, []);
   return (
      <div>
         <div className="p-1">
            <Form.Item
               label="Аймаг/Хот:"
               name={'aimagId'}
               rules={[{ required: true, message: 'Аймаг/Хот оруулна уу' }]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Select onChange={filterTowns}>
                  {provices.map((provice, index) => {
                     return (
                        <Option key={index} value={provice.id}>
                           {provice.name}
                        </Option>
                     );
                  })}
               </Select>
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Сум/Дүүрэг:"
               name="soumId"
               rules={[{ required: true, message: 'Сум/Дүүрэг оруулна уу' }]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Select>
                  {towns.map((town, index) => {
                     return (
                        <Option key={index} value={town.id}>
                           {town.name}
                        </Option>
                     );
                  })}
               </Select>
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Баг/Хороо:"
               name="committee"
               rules={[{ required: true, message: 'Баг/Хороо оруулна уу' }]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input />
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Гудамж/Байшин:"
               name="building"
               rules={[{ required: true, message: 'Гудамж/Байшин оруулна уу' }]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input />
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Тоот:"
               name="address"
               rules={[{ required: true, message: 'Тоот оруулна уу' }]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input />
            </Form.Item>
         </div>
      </div>
   );
}
export default ResidentialAddress;
