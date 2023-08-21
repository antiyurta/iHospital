import React from 'react';
import { Button, Divider, Form, Select } from 'antd';
import { useEffect, useState } from 'react';
import jwtInterceopter from '../../jwtInterceopter';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

export function List(props) {
   const { label, name } = props;
   const [employees, setEmployess] = useState([]);
   const getEmployees = async () => {
      await jwtInterceopter.get('organization/employee').then((response) => {
         setEmployess(response.data.response.data);
      });
   };
   useEffect(() => {
      getEmployees();
   }, []);
   return (
      <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
         <div className="p-3">
            <Divider className="mt-0">{label}</Divider>
            <Form.Item
               name={name}
               rules={[
                  {
                     required: true,
                     message: 'Заавал'
                  }
               ]}
            >
               <Select
                  showSearch
                  allowClear
                  optionFilterProp="children"
                  filterOption={(input, option) => (option?.children ?? '').includes(input)}
                  filterSort={(optionA, optionB) => {
                     return (optionA?.children ?? '')
                        .toLowerCase()
                        .localeCompare((optionB?.children ?? '').toLowerCase());
                  }}
               >
                  {employees?.map((employee, index) => {
                     return (
                        <Option key={index} value={employee.id}>
                           {employee.lastName + ' . ' + employee.firstName}
                        </Option>
                     );
                  })}
               </Select>
            </Form.Item>
         </div>
      </div>
   );
}

function Surgery() {
   return (
      <div className="flex flex-col gap-2">
         <Divider>Эмч нар</Divider>
         <List label="Оператор" name={['taskWorkers', 'operationId']} />
         <List label="Нэгдүгээр туслах эмч" name={['taskWorkers', 'firstHelperId']} />
         <List label="2 дугаар туслах эмч" name={['taskWorkers', 'secondHelperId']} />
         <Divider>Мэдээгүйжүүлэгч</Divider>
         <Form.List name={'taskDoctorRels'}>
            {(fields, { add, remove }) => (
               <>
                  {fields.map((field) => (
                     <List label="sad" name={[field.name, 'userId']} />
                  ))}
                  <Form.Item>
                     <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Нэмэх
                     </Button>
                  </Form.Item>
               </>
            )}
         </Form.List>
      </div>
   );
}
export default Surgery;
