import React from 'react';
import { Button, Form, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const EmployeeList = ({ label, name, employees }) => {
   return (
      <Form.Item
         className="mb-0 w-full"
         label={label}
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
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) => {
               return (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase());
            }}
            options={employees?.map((employee) => ({
               label: `${employee.lastName}.${employee.firstName}`,
               value: employee.id
            }))}
         />
      </Form.Item>
   );
};

const FormListEmployee = ({ formName, label, employees, rules }) => {
   return (
      <Form.List name={formName} rules={rules}>
         {(fields, { add, remove }) => (
            <>
               {fields.map(({ key, name, ...restField }) => (
                  <div key={key} className="flex flex-row gap-2 justify-between">
                     <EmployeeList
                        {...restField}
                        label={`${label}-${key + 1}`}
                        name={[name, 'userId']}
                        employees={employees}
                     />
                     <div className="bg-red-500 p-1 rounded-md flex items-center">
                        <MinusCircleOutlined className="p-[2px] text-white text-base" onClick={() => remove(name)} />
                     </div>
                  </div>
               ))}
               <Form.Item>
                  <Button
                     className="bg-green-500 text-white"
                     type="dashed"
                     onClick={() => add()}
                     block
                     icon={<PlusOutlined />}
                  >
                     Нэмэх
                  </Button>
               </Form.Item>
            </>
         )}
      </Form.List>
   );
};

export { EmployeeList, FormListEmployee };
