import React from 'react';
import { Input, Table } from 'antd';
import Xray from '../Xray';
import EditableFormItem from '../../611/Support/EditableFormItem';
import TextArea from 'antd/lib/input/TextArea';

const EditableTableXray = (props) => {
   const { form, xrays, isEdit } = props;
   const handleclick = (incomeXrays) => {
      form.setFieldsValue({
         services: {
            xrays: incomeXrays
         }
      });
   };
   return (
      <Table
         columns={[
            {
               title: '№',
               width: 50,
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
               title: 'Тайлбар',
               dataIndex: 'description',
               render: (_, _row, index) => (
                  <EditableFormItem name={[index, 'description']} editing={isEdit}>
                     <TextArea />
                  </EditableFormItem>
               )
            }
         ]}
         dataSource={xrays}
         pagination={false}
         footer={() => (
            <div className="flex flex-col">
               <Xray handleclick={handleclick} />
            </div>
         )}
      />
   );
};
export default EditableTableXray;
