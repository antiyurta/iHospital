import React, { Fragment, memo } from 'react';
import { Collapse, DatePicker, Form, Input, Select } from 'antd';
import AForm from '../../../BeforeAmbulatory/Customized/AForm';

const { Panel } = Collapse;

const RenderPanel = ({ formdata, form }) => {
   const oldFormData = form.getFieldValue('formdata');
   const groupedData = Object.groupBy(oldFormData, ({ categoryId }) => categoryId);
   let length = -1;
   return (
      <Collapse>
         {Object.entries(groupedData)?.map(([_key, value], index) => {
            return (
               <Panel key={index} header={value[0]?.categoryName}>
                  {value?.map((_item, idx) => {
                     length += 1;
                     return <MemoizedAForm key={idx} item={formdata[length]} form={form} />;
                  })}
               </Panel>
            );
         })}
      </Collapse>
   );
};

const MemoizedAForm = memo(({ item, form }) => {
   const type = form.getFieldValue(['formdata', item.name, 'type']);
   const label = form.getFieldValue(['formdata', item.name, 'fieldName']);
   return (
      <AForm>
         {['docud', 'categoryId', 'fieldId', 'type'].map((field) => (
            <Form.Item key={field} name={[item.name, field]} hidden>
               <Input />
            </Form.Item>
         ))}
         <Form.Item label="Бүлгийн нэр" hidden name={[item.name, 'categoryName']}>
            <Input disabled />
         </Form.Item>
         <Form.Item label="Талбарын нэр" hidden name={[item.name, 'fieldName']} className="mt-2">
            <Input disabled />
         </Form.Item>
         {type === 'selectAnswer' ? (
            <Form.Item label={label} name={[item.name, 'value']} className="mt-2">
               <Select
                  placeholder="Сонгох"
                  options={form
                     .getFieldValue(['formdata', item.name, 'refs'])
                     ?.map((refItem) => ({ value: refItem.resultId, label: refItem.resultName }))}
               />
            </Form.Item>
         ) : type === 'inputDate' ? (
            <Form.Item label={label} name={[item.name, 'value']} className="mt-2 bg-red-500">
               <DatePicker placeholder="Хариултаа бичнэ үү." />
            </Form.Item>
         ) : (
            <Form.Item label={label} name={[item.name, 'value']} className="mt-2">
               <Input placeholder="Хариултаа бичнэ үү." />
            </Form.Item>
         )}
         <Form.List name={[item.name, 'refs']}>
            {(refs) => (
               <div className="rounded-md bg-[#e8eaee] w-full inline-block">
                  {refs.map((refItem, index) => (
                     <Fragment key={index}>
                        {['docud', 'resultId', 'resultName'].map((field) => (
                           <Form.Item key={field} name={[refItem.name, field]} hidden>
                              <Input placeholder="-----" />
                           </Form.Item>
                        ))}
                     </Fragment>
                  ))}
               </div>
            )}
         </Form.List>
      </AForm>
   );
});

export const PregnantBookItem = ({ form }) => {
   return <Form.List name="formdata">{(formdata) => <RenderPanel formdata={formdata} form={form} />}</Form.List>;
};
