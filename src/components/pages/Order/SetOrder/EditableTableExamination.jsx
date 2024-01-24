import React from 'react';
import { Input, Table } from 'antd';
import { Examination } from '../Examination';
import EditableFormItem from '../../611/Support/EditableFormItem';
import TextArea from 'antd/lib/input/TextArea';

const EditableTableExamination = (props) => {
   const { form, examinations, isEdit } = props;
   const handleclick = (incomeExaminations) => {
      form.setFieldsValue({
         services: {
            examinations: incomeExaminations
         }
      });
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
                  <EditableFormItem name={[index, 'name']} editing={false}>
                     <Input />
                  </EditableFormItem>
               )
            },
            {
               title: 'Сорьц',
               dataIndex: 'specimen',
               render: (_, _row, index) => (
                  <EditableFormItem name={[index, 'specimen']} editing={isEdit}>
                     <TextArea />
                  </EditableFormItem>
               )
            },
            {
               title: 'Тайлбар',
               dataIndex: 'description',
               render: (_, _row, index) => (
                  <EditableFormItem name={[index, 'description']} editing={isEdit}>
                     <TextArea />
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
