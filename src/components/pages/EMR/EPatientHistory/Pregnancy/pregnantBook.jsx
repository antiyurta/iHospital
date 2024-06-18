import React, { Fragment, memo, useEffect, useState } from 'react';
import { DatePicker, Form, Input, Select, Spin } from 'antd';
import AForm from '../../../BeforeAmbulatory/Customized/AForm';
import healthInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';

const MemoizedAForm = memo(({ item, form, maxWidth }) => {
   const type = form.getFieldValue(['formdata', item.name, 'type']);
   return (
      <AForm>
         {['docud', 'categoryId', 'fieldId', 'type'].map((field) => (
            <Form.Item key={field} name={[item.name, field]} hidden>
               <Input />
            </Form.Item>
         ))}
         <Form.Item label="Бүлгийн нэр" name={[item.name, 'categoryName']}>
            <Input disabled className={`${maxWidth} text-xs`} />
         </Form.Item>
         <Form.Item label="Талбарын нэр" name={[item.name, 'fieldName']} className="mt-2">
            <Input disabled className={`${maxWidth} text-xs`} />
         </Form.Item>
         {type === 'selectAnswer' ? (
            <Form.Item label="Хариулт" name={[item.name, 'value']} className="mt-2">
               <Select
                  placeholder="Сонгох"
                  className={`${maxWidth} text-xs`}
                  options={form
                     .getFieldValue(['formdata', item.name, 'refs'])
                     ?.map((refItem) => ({ value: refItem.resultId, label: refItem.resultName }))}
               />
            </Form.Item>
         ) : type === 'inputDate' ? (
            <Form.Item label="Хариулт" name={[item.name, 'value']} className="mt-2 bg-red-500">
               <DatePicker placeholder="Хариултаа бичнэ үү." className={`${maxWidth} text-xs`} />
            </Form.Item>
         ) : (
            <Form.Item label="Хариулт" name={[item.name, 'value']} className="mt-2">
               <Input placeholder="Хариултаа бичнэ үү." className={`${maxWidth} text-xs`} />
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
   const [groupedFormData, setGroupedFormData] = useState();
   const getFormList = async () => {
      await healthInsuranceApi
         .getFormData(1)
         .then(({ data }) => {
            if (data.code === 200 && data.result?.length > 0) {
               const test = Object.groupBy(data.result, ({ categoryId }) => categoryId);
               console.log('test', test);
            }
            // form.setFieldValue('formdata', res.data.result);
            // setOpen(true);
         })
         .finally(() => {
            // setLoading(false);
         });
   };

   useEffect(() => {
      // getFormList();
   }, []);

   return (
      <Form.List name="formdata">
         {(formdata) => (
            <>
               {formdata.map((fdata, idx) => (
                  <MemoizedAForm key={idx} item={fdata} form={form} maxWidth="max-w-xs" />
               ))}
            </>
         )}
      </Form.List>
   );
};
