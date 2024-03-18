import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Radio, Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { openNofi } from '../../../comman';

import ServiceApi from '../../../../services/service/service';

const { TextArea } = Input;

const AnswerBody = (props) => {
   const { form, data } = props;
   const [isLoading, setIsLoading] = useState(false);

   const getExaminationDetailResult = async (barcode, data, nameIndex) => {
      const parameters = data?.flatMap((first) => first.examination.parameters ?? []);
      if (parameters?.length > 0) {
         setIsLoading(true);
         await ServiceApi.getResultForExaminationByBarcode({
            params: {
               analysisId: barcode
            }
         })
            .then(({ data: { response } }) => {
               var incomeResults = [];
               if (response.response.data.length > 0) {
                  const systemResult = response.response.data[0]?.observations;
                  incomeResults = parameters?.map((parameter, index) => ({
                     parameterName: parameter.parameterName,
                     low: parameter.low,
                     high: parameter.high,
                     measurement:
                        systemResult.find((r) => r.observationSubId === parameter.indicator)?.units ||
                        parameter.measurement,
                     value:
                        Number(
                           systemResult.find((r) => r.observationSubId === parameter.indicator)?.observationValue
                        ) || 0,
                     HL: calHighLow(
                        Number(systemResult.find((r) => r.observationSubId === parameter.indicator)?.observationValue),
                        parameter.high,
                        parameter.low,
                        [index]
                     ),
                     PN: null
                  }));
               } else {
                  incomeResults = parameters?.map((parameter) => ({
                     parameterName: parameter.parameterName,
                     low: parameter.low,
                     high: parameter.high,
                     measurement: parameter.measurement,
                     value: null,
                     HL: null,
                     PN: null
                  }));
                  openNofi('warning', 'Алдаа', 'Хариу олдсонгүй');
               }
               form.setFieldValue(nameIndex, incomeResults);
            })
            .finally(() => {
               setIsLoading(false);
            });
      } else {
         openNofi('warning', 'Алдаа', 'Parameters not Found');
      }
   };
   const calHighLow = (e, high, low, indexes) => {
      high = high || form.getFieldValue(indexes.concat('high'));
      low = low || form.getFieldValue(indexes.concat('low'));
      if (e < low) {
         form.setFieldValue(indexes.concat(['HL']), 'L');
         return 'L';
      } else if (e > high) {
         form.setFieldValue(indexes.concat(['HL']), 'H');
         return 'H';
      } else if (low <= e && e <= high) {
         form.setFieldValue(indexes.concat(['HL']), 'N');
         return 'N';
      } else if (e === null) {
         form.setFieldValue(indexes.concat(['HL']), '');
         return '';
      }
   };
   const EditableFormItem = (props) => {
      const { editing, ...rest } = props;
      const Dummy = (props) => props.value;
      return (
         <Form.Item className="mb-0" {...rest}>
            {editing ? props.children : <Dummy />}
         </Form.Item>
      );
   };
   const EditableFormItemForHL = (props) => {
      const { editing, ...rest } = props;
      const Dummy = (props) => {
         const hl = props.value;
         if (hl === 'L') {
            return <span className="text-blue-500 font-bold">{hl}</span>;
         } else if (hl === 'H') {
            return <span className="text-red-500 font-bold">{hl}</span>;
         } else if (hl === 'N') {
            return <span className="text-green-500 font-bold">{hl}</span>;
         }
      };
      return (
         <Form.Item className="mb-0" {...rest}>
            {editing ? props.children : <Dummy />}
         </Form.Item>
      );
   };

   const isCheck = (name) => {
      const results = form.getFieldValue(name);
      const state = results?.some((result) => result.value);
      if (state) return true;
      return false;
   };

   return (
      <div className="flex flex-col gap-3">
         {data?.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
               <div className="flex flex-row gap-1 items-center justify-between">
                  <p className="text-sm text-black font-bold">{item.name}</p>
                  <Button
                     disabled={isCheck(item.typeId)}
                     type="primary"
                     icon={<DownloadOutlined />}
                     onClick={() => {
                        getExaminationDetailResult(item.barcode, item.data, item.typeId);
                     }}
                     loading={isLoading}
                  >
                     Хариу татах
                  </Button>
               </div>
               <div className="bg-[#e5e6eb] rounded-xl p-2">
                  <Form.Item label="Дүгнэлт" name={['conclusion', item.typeId]}>
                     <TextArea placeholder={`${item.name} дүгнэлт бичих`} />
                  </Form.Item>
                  <Form.List name={item.typeId}>
                     {(results) => (
                        <Table
                           rowKey={'name'}
                           bordered
                           columns={[
                              {
                                 title: 'Нэр',
                                 dataIndex: 'parameterName',
                                 render: (_, _row, index) => form.getFieldValue([item.typeId, index, 'parameterName'])
                              },
                              {
                                 title: 'Лавлах хэмжээ',
                                 children: [
                                    {
                                       title: 'Бага',
                                       render: (_, _row, index) => form.getFieldValue([item.typeId, index, 'low'])
                                    },
                                    {
                                       title: 'Их',
                                       render: (_, _row, index) => form.getFieldValue([item.typeId, index, 'high'])
                                    }
                                 ]
                              },
                              {
                                 title: 'Хэмжих нэгж',
                                 dataIndex: 'measurement',
                                 render: (_, _row, index) => form.getFieldValue([item.typeId, index, 'measurement'])
                              },
                              {
                                 title: 'Хариу',
                                 dataIndex: 'value',
                                 render: (_, _row, index) => (
                                    <EditableFormItem editing={true} name={[index, 'value']}>
                                       <InputNumber
                                          onChange={(e) => {
                                             calHighLow(e, null, null, [item.typeId, index]);
                                          }}
                                       />
                                    </EditableFormItem>
                                 )
                              },
                              {
                                 title: 'H/L',
                                 dataIndex: 'HL',
                                 render: (_, _row, index) => {
                                    return (
                                       <EditableFormItemForHL editing={false} name={[index, 'HL']}>
                                          <Input />
                                       </EditableFormItemForHL>
                                    );
                                 }
                              },
                              {
                                 title: '',
                                 dataIndex: '',
                                 render: (_, _row, index) => {
                                    return (
                                       <Form.Item className="mb-0" name={[index, 'PN']}>
                                          <Radio.Group>
                                             <Radio value="P">P</Radio>
                                             <Radio value="N">N</Radio>
                                          </Radio.Group>
                                       </Form.Item>
                                    );
                                 }
                              }
                           ]}
                           dataSource={results}
                           pagination={false}
                        />
                     )}
                  </Form.List>
               </div>
            </div>
         ))}
      </div>
   );
};
export default AnswerBody;
