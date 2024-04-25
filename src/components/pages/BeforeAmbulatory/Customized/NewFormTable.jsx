import React from 'react';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import { Button, Form, Table } from 'antd';
import { NewDatePicker, NewInput, NewInputNumber, NewRangePicker, NewTextArea } from '../../../Input/Input';
import { MinusOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Column } = Table;

const NewFormTable = (props) => {
   const { data, options, add, remove, state } = props;
   console.log(options);
   return (
      <Table
         style={{
            width: '100%'
         }}
         rowKey={'index'}
         bordered
         dataSource={data}
         pagination={false}
         footer={() => <Button onClick={() => add()}>Мөр нэмэх</Button>}
      >
         {options?.map((column, index) => {
            return (
               <Column
                  key={index}
                  title={column.question}
                  dataIndex={column.keyWord}
                  render={(value, row, index) => {
                     if (column.type === 'input') {
                        return (
                           <Form.Item name={[index, column.keyWord]}>
                              <NewInput />
                           </Form.Item>
                        );
                     }
                     if (column.type === 'inputNumber') {
                        <Form.Item name={[index, column.keyWord]}>
                           <NewInputNumber
                              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                           />
                        </Form.Item>;
                     }
                     if (column.type === 'textarea') {
                        <Form.Item name={[index, column.keyWord]}>
                           <NewTextArea />
                        </Form.Item>;
                     }
                     if (column.type === 'datepicker') {
                        return (
                           <Form.Item
                              name={[index, column.keyWord]}
                              getValueProps={(i) => {
                                 if (i) {
                                    return { value: moment(i) };
                                 } else {
                                    return;
                                 }
                              }}
                           >
                              <NewDatePicker format={'YYYY/MM/DD'} locale={mnMN} />
                           </Form.Item>
                        );
                     }
                     if (column.type === 'rangepicker') {
                        return (
                           <Form.Item
                              name={[index, column.keyWord]}
                              getValueProps={(i) => {
                                 if (i) {
                                    return { value: [moment(i[0]), moment(i[1])] };
                                 } else {
                                    return;
                                 }
                              }}
                           >
                              <NewRangePicker format={'YYYY/MM/DD'} locale={mnMN} />
                           </Form.Item>
                        );
                     }
                  }}
               />
            );
         })}
         <Column
            title=" "
            width={50}
            render={(value, row, index) => {
               return (
                  <Button
                     onClick={() => remove(index)}
                     icon={<MinusOutlined />}
                     shape="circle"
                     type="danger"
                     style={{
                        backgroundColor: 'red'
                     }}
                  />
               );
            }}
         />
      </Table>
   );
};
export default NewFormTable;
