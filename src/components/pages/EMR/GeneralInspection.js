//EMR -> Явцын үзлэг -> Ерөнхий үзлэг
import React, { useEffect } from 'react';
import { Radio, Input, Button, Form, Collapse, InputNumber } from 'antd';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, openNofi, Post } from '../../comman';
import { useLocation } from 'react-router-dom';
const { Panel } = Collapse;
export default function GeneralInspection({ patientId, inspection }) {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const location = useLocation();
   const { TextArea } = Input;
   const [form] = Form.useForm();

   useEffect(() => {
      getGeneralInspection();
   }, [inspection]);

   const saveGeneralInspection = () => {
      form
         .validateFields()
         .then(async (values) => {
            values['patientId'] = patientId;
            values['appointmentId'] = location?.state?.appointmentId;
            const response = await Post('emr/general-inspection', token, config, values);
            if (response === 201) {
               getGeneralInspection();
            }
         })
         .catch((error) => {
            openNofi('error', '611 маягт', 'Заавал бөглөгдөх ёстой');
         });
   };

   const getGeneralInspection = async () => {
      const conf = {
         headers: {},
         params: {
            appointmentId: location?.state?.appointmentId
         }
      };
      const response = await Get('emr/general-inspection', token, conf);
      form.setFieldsValue(response);
   };
   return (
      <Form
         name="basic"
         initialValues={{ remember: true }}
         autoComplete="off"
         labelAlign="left"
         scrollToFirstError
         layout="vertical"
         form={form}
         className="h-full flex flex-col gap-2 justify-between"
      >
         <Collapse accordion>
            <Panel header="Ерөнхий" key="1" forceRender={true}>
               <div
                  className="flex flex-col gap-2"
                  style={{
                     height: 340,
                     overflow: 'auto'
                  }}
               >
                  <Form.Item
                     label="Биеийн ерөнхий байдал"
                     name="bodyCondition"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Radio.Group className="flex flex-col gap-1">
                        <Radio value={1} className="pl-1 ml-0">
                           Дунд
                        </Radio>
                        <Radio value={2} className="pl-1 ml-0">
                           Хүндэвтэр
                        </Radio>
                        <Radio value={3} className="pl-1 ml-0">
                           Хүнд
                        </Radio>
                        <Radio value={4} className="pl-1 ml-0">
                           Маш хүнд
                        </Radio>
                     </Radio.Group>
                  </Form.Item>
                  <Form.Item
                     label="Ухаан санаа"
                     name="mind"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Radio.Group className="flex flex-col gap-1">
                        <Radio value="REASONABLE" className="pl-1 ml-0">
                           Саруул
                        </Radio>
                        <Radio value="FADED" className="pl-1 ml-0">
                           Бүдгэрсэн
                        </Radio>
                        <Radio value="UNREASONABLE" className="pl-1 ml-0">
                           Ухаангүй
                        </Radio>
                     </Radio.Group>
                  </Form.Item>
                  <Form.Item
                     label="Арьс салст"
                     name="skin"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Radio.Group className="flex flex-col gap-1">
                        <Radio value="NORMAL" className="pl-1 ml-0">
                           Хэвийн
                        </Radio>
                        <Radio value="UNNORMAL" className="pl-1 ml-0">
                           Хэвийн бус
                        </Radio>
                     </Radio.Group>
                  </Form.Item>
               </div>
            </Panel>
            <Panel header="Амьсгалын эрхтэн тогтолцоо" key="2" forceRender={true}>
               <div
                  className="flex flex-col gap-2"
                  style={{
                     height: 340,
                     overflow: 'auto'
                  }}
               >
                  <Form.Item
                     label="Амьсгал 1 минутанд"
                     name="respiratoryOneMinute"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Input size="small" />
                  </Form.Item>
                  <Form.Item
                     label="Чагналтаар"
                     name="respiratoryListen"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Radio.Group className="flex flex-col gap-1">
                        <Radio value="LUNG" className="pl-1 ml-0">
                           Уушги цулцангийн
                        </Radio>
                        <Radio value="TUBE" className="pl-1 ml-0">
                           Гуурсан хоолойн
                        </Radio>
                        <Radio value="IMPORTANT" className="pl-1 ml-0">
                           Хэржигнүүртэй
                        </Radio>
                        <Radio value="SHORT_BREATH" className="pl-1 ml-0">
                           Амьсгал сулавтар
                        </Radio>
                     </Radio.Group>
                  </Form.Item>
               </div>
            </Panel>
            <Panel header="Цусны эргэлтийн тогтолцоо" key="3" forceRender={true}>
               <div
                  className="flex flex-col gap-2"
                  style={{
                     height: 340,
                     overflow: 'auto'
                  }}
               >
                  <Form.Item
                     label="Судасны цохилт 1 минутанд"
                     name="pulseOneMinute"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <InputNumber size="small" />
                  </Form.Item>
                  <Form.Item
                     label="Хүчдэл дүүрэлт"
                     name="volt"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Input size="small" />
                  </Form.Item>
                  <Form.Item
                     label="Тогшилтоор /Зүрхний хил/"
                     name="heartTapping"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Radio.Group className="flex flex-col gap-1">
                        <Radio value="NORMAL" className="pl-1 ml-0">
                           Хэвийн
                        </Radio>
                        <Radio value="LARGER" className="pl-1 ml-0">
                           Томорсон
                        </Radio>
                     </Radio.Group>
                  </Form.Item>
                  <Form.Item
                     label="Чагналтаар /Зүрхний авиа/"
                     name="heartSound"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Radio.Group className="flex flex-col gap-1">
                        <Radio value="BRIGHT" className="pl-1 ml-0">
                           Тод
                        </Radio>
                        <Radio value="DIM" className="pl-1 ml-0">
                           Бүдэг
                        </Radio>
                        <Radio value="DIMMY" className="pl-1 ml-0">
                           Бүдгэвтэр
                        </Radio>
                        <Radio value="SMOOTH" className="pl-1 ml-0">
                           Хэм жигд
                        </Radio>
                        <Radio value="UNEVEN" className="pl-1 ml-0">
                           Жигд бус
                        </Radio>
                        <Radio value="HEMOLYSIS" className="pl-1 ml-0">
                           Хэм алдалттай
                        </Radio>
                     </Radio.Group>
                  </Form.Item>
                  <Form.Item
                     label="АД баруун талд"
                     name="heartBPRight"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Input size="small" />
                  </Form.Item>
                  <Form.Item
                     label="Зүүн талд"
                     name="heartBPLeft"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Input size="small" />
                  </Form.Item>
                  <Form.Item
                     label="Хэл"
                     name="tongue"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Radio.Group className="flex flex-col gap-1">
                        <Radio value="NORMAL" className="pl-1 ml-0">
                           Ердийн
                        </Radio>
                        <Radio value="DRY" className="pl-1 ml-0">
                           Хуурай
                        </Radio>
                        <Radio value="NO_COLORFUL" className="pl-1 ml-0">
                           Өнгөргүй
                        </Radio>
                        <Radio value="COLORFUL" className="pl-1 ml-0">
                           Өнгөртэй
                        </Radio>
                     </Radio.Group>
                  </Form.Item>
                  <Form.Item
                     label="Хэвлийн үзлэг"
                     name="abdomen"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Radio.Group className="flex flex-col gap-1">
                        <Radio value="PALPATION" className="pl-1 ml-0">
                           Өнгөц тэмтрэлтээр
                        </Radio>
                        <Radio value="DEEP_PALPATION" className="pl-1 ml-0">
                           Гүн тэмтрэлтээр
                        </Radio>
                        <Radio value="HURFUL" className="pl-1 ml-0">
                           Эмзэглэлтэй
                        </Radio>
                        <Radio value="NORMAL" className="pl-1 ml-0">
                           Ердийн
                        </Radio>
                        <Radio value="MILD_PLEURAL" className="pl-1 ml-0">
                           Зөөлөн гялтан цочрол үгүй
                        </Radio>
                        <Radio value="SYMTOMS_SHOCK" className="pl-1 ml-0">
                           Гялтан цочролтын шинж илэрсэн
                        </Radio>
                     </Radio.Group>
                  </Form.Item>
               </div>
            </Panel>
            <Panel header="Мэдрэлийн тогтолцоо" key="4" forceRender={true}>
               <div
                  className="flex flex-col gap-2"
                  style={{
                     height: 340,
                     overflow: 'auto'
                  }}
               >
                  <Form.Item
                     label="Сонсох чадвар"
                     name="audition"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Radio.Group className="flex flex-col gap-1">
                        <Radio value="NORMAL" className="pl-1 ml-0">
                           Хэвийн
                        </Radio>
                        <Radio value="DECREASED" className="pl-1 ml-0">
                           Буурсан
                        </Radio>
                     </Radio.Group>
                  </Form.Item>
                  <Form.Item
                     label="Рефлексүүд"
                     name="reflex"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <Radio.Group className="flex flex-col gap-1">
                        <Radio value="SAVED" className="pl-1 ml-0">
                           Хадгалагдана
                        </Radio>
                        <Radio value="NOT_SAVED" className="pl-1 ml-0">
                           Хадгалагдахгүй
                        </Radio>
                     </Radio.Group>
                  </Form.Item>
                  <Form.Item
                     label="Бусад"
                     name="other"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <TextArea rows={2} style={{ padding: 5 }} placeholder="Бусад" />
                  </Form.Item>
                  <Form.Item
                     label="Cэтгэцийн байдал"
                     name="mentalState"
                     rules={[
                        {
                           required: true,
                           message: 'Заавал бөглөнө 611 маяг'
                        }
                     ]}
                     className="mb-0"
                  >
                     <TextArea rows={2} style={{ padding: 5 }} placeholder="Сэтгэцийн байдал" />
                  </Form.Item>
               </div>
            </Panel>
         </Collapse>
         <Form.Item noStyle>
            <Button type="primary" htmlType="submit" onClick={() => saveGeneralInspection()}>
               Ерөнхий үзлэг хадгалах
            </Button>
         </Form.Item>
      </Form>
   );
}
