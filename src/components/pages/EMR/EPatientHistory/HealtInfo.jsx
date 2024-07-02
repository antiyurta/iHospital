import React, { useEffect, useState } from 'react';
import { Button, DatePicker, Form, Input, InputNumber, Radio, Select } from 'antd';
import { healthType, isPregnancy, isImpairment, pregnancyActivity } from '@Utils/config/xypField';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
//common
import { openNofi } from '@Comman/common';
//api
import InsuranceApi from '@ApiServices/healt-insurance/insurance';
//redux
import { setHicsSeal, selectCurrentHicsSeal } from '@Features/emrReducer';
import dayjs from 'dayjs';
const labelstyle = {
   fontSize: 14,
   color: 'black',
   fontWeight: 700
};
const HealtInfo = () => {
   const dispatch = useDispatch();
   const hicsSeal = useSelector(selectCurrentHicsSeal);
   const [healInfoForm] = Form.useForm();
   const [isLoading, setLoading] = useState(false);
   const onFinish = async (values) => {
      setLoading(true);
      await InsuranceApi.requestHicsSeal(hicsSeal.id, {
         employment: values.employment,
         healthInfo: values.healthInfo,
         pregnantInfo: values.pregnantInfo
      }).then(({ data: { response } }) => {
         dispatch(setHicsSeal(response));
         setLoading(false);
         openNofi('success', 'Амжилттай', 'Эрүүл мэндийн мэдээлэл амжилттай хадгалагдлаа');
      });
   };

   useEffect(() => {
      healInfoForm.setFieldsValue({
         employment: hicsSeal?.employment,
         healthInfo: hicsSeal?.healthInfo,
         pregnantInfo: hicsSeal?.pregnantInfo
      });
   }, []);
   return (
      <Form
         form={healInfoForm}
         layout="vertical"
         onFinish={onFinish}
         initialValues={{
            healthInfo: {
               isImpairment: 2,
               isPregnancy: 2
            }
         }}
      >
         <div className="emr-ins flex flex-col gap-1 justify-between">
            <div className="flex flex-col gap-1 overflow-auto">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
                  <p style={labelstyle}>ХӨДӨЛМӨР ЭРХЛЭЛТИЙН БАЙДАЛ</p>
                  <div className="grid grid-cols-2 gap-2">
                     <Form.Item label="Хөдөлмөрийн чадвар түр алдалтын хоног" name={['employment', 'abalityLoseDays']}>
                        <InputNumber />
                     </Form.Item>
                     <Form.Item label="Хөдөлмөрийн чадвар алдалтын зэрэг" name={['employment', 'disabilityDegree']}>
                        <InputNumber />
                     </Form.Item>
                  </div>
               </div>
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
                  <p style={labelstyle}>ЭРҮҮЛ МЭНДИЙН МЭДЭЭЛЭЛ</p>
                  <div className="grid grid-cols-2 gap-2">
                     <Form.Item label="Эрүүл мэндийн төрөл" name={['healthInfo', 'healthType']}>
                        <Select
                           options={healthType?.map((type) => ({
                              label: type.valueName,
                              value: type.valueName.toString()
                           }))}
                        />
                     </Form.Item>
                     <Form.Item
                        label="Сүүлийн сарын тэмдэг ирсэн хугацаа"
                        name={['healthInfo', 'lastPeriod']}
                        getValueProps={(i) => {
                           if (i) {
                              return { value: dayjs(i) };
                           } else {
                              return;
                           }
                        }}
                     >
                        <DatePicker />
                     </Form.Item>
                     <Form.Item className="white-radio" label="Жирэмсэн эсэх" name={['healthInfo', 'isPregnancy']}>
                        <Radio.Group
                           options={isPregnancy?.map((preg) => ({
                              label: preg.valueName,
                              value: preg.valueId
                           }))}
                        />
                     </Form.Item>
                     <Form.Item label="Жин" name={['healthInfo', 'weight']}>
                        <InputNumber />
                     </Form.Item>
                     <Form.Item label="Өндөр" name={['healthInfo', 'height']}>
                        <InputNumber />
                     </Form.Item>
                     <Form.Item
                        className="white-radio"
                        label="Хөгжлийн бэрхшээлтэй"
                        name={['healthInfo', 'isImpairment']}
                     >
                        <Radio.Group
                           options={isImpairment?.map((impa) => ({
                              label: impa.valueName,
                              value: impa.valueId
                           }))}
                        />
                     </Form.Item>
                  </div>
               </div>
               <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, currentValues) =>
                     prevValues.healthInfo?.isPregnancy !== currentValues.healthInfo?.isPregnancy
                  }
               >
                  {({ getFieldValue }) =>
                     getFieldValue(['healthInfo', 'isPregnancy']) === 1 ? (
                        <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
                           <p style={labelstyle}>ЖИРЭМСЭН ҮЕИЙН МЭДЭЭЛЭЛ</p>
                           <div className="grid grid-cols-2 gap-2">
                              <Form.Item
                                 label="Жирэмсний хяналтад орсон огноо"
                                 name={['pregnantInfo', 'pregnancyControlledDate']}
                                 getValueProps={(i) => {
                                    if (i) {
                                       return { value: moment(i) };
                                    } else {
                                       return;
                                    }
                                 }}
                              >
                                 <DatePicker placeholder="Жирэмсний хяналтад орсон огноо" />
                              </Form.Item>
                              <Form.Item
                                 label="Жирэмсний хугацаа /7 хоногоор/"
                                 name={['pregnantInfo', 'pregnancyWeek']}
                              >
                                 <InputNumber placeholder="Жирэмсний хугацаа /7 хоногоор/" />
                              </Form.Item>
                              <Form.Item
                                 label="Жирэмсний хугацаа /7 хоногоор/"
                                 name={['pregnantInfo', 'pregnancyActivityId']}
                              >
                                 <Select
                                    onSelect={(_, option) => {
                                       healInfoForm.setFieldValue(
                                          ['pregnantInfo', 'pregnancyActivityName'],
                                          option.label
                                       );
                                    }}
                                    options={pregnancyActivity?.map((activity) => ({
                                       label: activity.valueName,
                                       value: activity.valueId
                                    }))}
                                 />
                              </Form.Item>
                              <Form.Item hidden name={['pregnantInfo', 'pregnancyActivityName']}>
                                 <Input />
                              </Form.Item>
                              <Form.Item
                                 className="white-radio"
                                 label="Жирэмслэхээс сэргийлэх арга хэмжээ авч байсан эсэх"
                                 name={['pregnantInfo', 'protectMethod']}
                              >
                                 <Radio.Group
                                    options={[
                                       {
                                          label: 'Тийм',
                                          value: '1'
                                       },
                                       {
                                          label: 'үгүй',
                                          value: '2'
                                       }
                                    ]}
                                 />
                              </Form.Item>
                              <Form.Item
                                 className="white-radio"
                                 label="Үр хөндүүлж байсан эсэх"
                                 name={['pregnantInfo', 'abortion']}
                              >
                                 <Radio.Group
                                    options={[
                                       {
                                          label: 'Тийм',
                                          value: '1'
                                       },
                                       {
                                          label: 'үгүй',
                                          value: '2'
                                       }
                                    ]}
                                 />
                              </Form.Item>
                           </div>
                        </div>
                     ) : null
                  }
               </Form.Item>
            </div>
            <Button loading={isLoading} htmlType="submit" type="primary">
               Хадгалах
            </Button>
         </div>
      </Form>
   );
};
export default HealtInfo;
