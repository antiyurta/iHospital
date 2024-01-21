import React from 'react';
import { Form, Input, Table } from 'antd';
import { Examination } from '../Examination';
import EditableFormItem from '../../611/Support/EditableFormItem';

const EditableTableExamination = (props) => {
   const { form, examinations, isEdit } = props;
   const handleclick = (incomeExaminations) => {
      form.setFieldsValue({
         services: {
            examinations: incomeExaminations
         }
      });
      console.log('asdasd', form.getFieldsValue());
   };
   return (
      <Table
         columns={[
            {
               title: '№',
               render: (_, _row, index) => index + 1
            },
            {
               title: 'Нэр',
               dataIndex: 'name',
               render: (_, _row, index) => (
                  <EditableFormItem name={[index, 'name']} editing={isEdit}>
                     <Input />
                  </EditableFormItem>
               )
            }
         ]}
         dataSource={examinations}
         pagination={false}
         footer={() => (
            <div className="flex flex-col">
               <Examination handleclick={handleclick} />
            </div>
         )}
      />
   );
};
export default EditableTableExamination;
