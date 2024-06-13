import React, { Fragment, memo, useEffect, useState } from 'react';
import { Form, Input, Select, Spin } from 'antd';
import AForm from '../../../BeforeAmbulatory/Customized/AForm';
// import healthInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';

const MemoizedAForm = memo(({ item, form, maxWidth }) => (
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
      <Form.Item label="Хариулт" name={[item.name, 'value']} className="mt-2">
         {form.getFieldValue(['formdata', item.name, 'type']) === 'selectAnswer' ? (
            <Select
               placeholder="Сонгох"
               className={`${maxWidth} text-xs`}
               options={form
                  .getFieldValue(['formdata', item.name, 'refs'])
                  ?.map((refItem) => ({ value: refItem.resultId, label: refItem.resultName }))}
            />
         ) : (
            <Input placeholder="Хариултаа бичнэ үү." className={`${maxWidth} text-xs`} />
         )}
      </Form.Item>
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
));

export const PregnantBookItem = ({ form, patient }) => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
   }, []);

   // const getFormDataList = async () => {
   //    await healthInsuranceApi.getDataFormData(patient.registerNumber, 20001).then((res) => {
   //       console.log(res, 'getdataasdas');
   //    });
   // };

   // useEffect(() => {
   //    getFormDataList();
   // }, []);

   return loading ? (
      <div className="w-full h-[400px] flex items-center justify-center">
         <Spin />
      </div>
   ) : (
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
