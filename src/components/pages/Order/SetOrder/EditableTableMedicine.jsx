import React from 'react';
import { Table } from 'antd';
import Medicine from '../Medicine';

const EditableTableMedicine = (props) => {
   const { medicines } = props;
   const handleclick = (e) => {
      console.log(e);
   };
   return (
      <Table
         columns={[
            {
               title: '№',
               render: (_, _row, index) => index + 1
            },
            {
               title: 'Нэр'
            }
         ]}
         dataSource={medicines}
         pagination={false}
         footer={() => (
            <div className="flex flex-col">
               <Medicine usageType={'OUT'} handleclick={handleclick} />
            </div>
         )}
      />
   );
};
export default EditableTableMedicine;
