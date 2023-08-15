import React from 'react';
import { Button, Input, Table } from 'antd';
import OrderForm from '../OrderTable/OrderForm';
import { MinusCircleOutlined } from '@ant-design/icons';

const { Column } = Table;
function PackageTable(props) {
   const { services, form, remove } = props;
   return (
      <div className="overflow-auto">
         <Table rowKey={'unikey'} bordered dataSource={services} pagination={false}>
            <Column
               title="Нэр"
               dataIndex={'serviceName'}
               render={(value, row, index) => {
                  return (
                     <OrderForm noStyle name={[index, 'serviceName']} editing={false}>
                        <Input />
                     </OrderForm>
                  );
               }}
            />
            <Column
               title=""
               width={40}
               render={(value, row, index) => {
                  return (
                     <Button onClick={() => remove(index)} icon={<MinusCircleOutlined style={{ color: 'red' }} />} />
                  );
               }}
            />
         </Table>
      </div>
   );
}
export default PackageTable;
