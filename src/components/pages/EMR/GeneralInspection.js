//EMR -> Явцын үзлэг -> Ерөнхий үзлэг
import React, { useEffect, useState } from 'react';
import { Radio, Input, Button, Form, Collapse, InputNumber, Checkbox } from 'antd';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../features/emrReducer';
import { openNofi } from '../../comman';

import generalInspectionService from '../../../services/emr/generalInspection';

const { Panel } = Collapse;
const { TextArea } = Input;
export default function GeneralInspection() {
   const incomeEMRData = useSelector(selectCurrentEmrData);
   const [form] = Form.useForm();
   const [id, setId] = useState(null);
   const [editMode, setEditMode] = useState(false);

   const saveGeneralInspection = async (values) => {
      await generalInspectionService
         .postGeneralInspection({
            patientId: incomeEMRData.patientId,
            appointmentId: incomeEMRData.appointmentId,
            ...values
         })
         .then(({ data: { success } }) => {
            if (success) {
               openNofi('success', 'Амжилттай', 'Ерөнхий үзлэг амжиллтай хадгалагдлаа');
            }
         })
         .finally(() => {
            getGeneralInspection();
         });
   };
   const updateGeneralInspection = async (values) => {
      await generalInspectionService
         .patchGeneralInspection(id, values)
         .then(({ data: { success } }) => {
            if (success) {
               openNofi('success', 'Амжилттай', 'Ерөнхий үзлэг амжиллтай засагдлаа');
            }
         })
         .finally(() => {
            getGeneralInspection();
         });
   };
   const getGeneralInspection = async () => {
      await generalInspectionService
         .getGeneralInspection({
            params: {
               patientId: incomeEMRData.patientId,
               appointmentId: incomeEMRData.appointmentId
            }
         })
         .then(({ data: { response } }) => {
            if (Object.keys(response)?.length > 0) {
               setEditMode(true);
               setId(response.id);
            }
            form.setFieldsValue(response);
         });
   };
   useEffect(() => {
      incomeEMRData && getGeneralInspection();
   }, []);

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
                           message: 'Биеийн ерөнхий байдал заавал'
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
                           message: 'Ухаан санаа заавал'
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
                           message: 'Арьс салст заавал'
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
                           message: 'Амьсгал 1 минутанд заавал'
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
                           message: 'Чагналтаар заавал'
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
                           message: 'Судасны цохилт 1 минутанд заавал'
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
                           message: 'Хүчдэл дүүрэлт заавал'
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
                           message: 'Тогшилтоор /Зүрхний хил/ заавал'
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
                           message: 'Чагналтаар /Зүрхний авиа/ заавал'
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
                           message: 'АД баруун талд заавал'
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
                           message: 'Зүүн талд заавал'
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
                           message: 'Хэл заавал'
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
                           message: 'Хэвлийн үзлэг заавал'
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
                           message: 'Сонсох чадвар заавал'
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
                           message: 'Рефлексүүд заавал'
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
                           message: 'Бусад заавал'
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
                           message: 'Cэтгэцийн байдал заавал'
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
            <Button
               type="primary"
               htmlType="submit"
               onClick={() => {
                  form
                     .validateFields()
                     .then((values) => {
                        editMode ? updateGeneralInspection(values) : saveGeneralInspection(values);
                     })
                     .catch((error) => {
                        error.errorFields?.map((errorField) => {
                           openNofi('error', 'Алдаа', `${errorField.errors[0]}`);
                        });
                     });
               }}
            >
               Ерөнхий үзлэг хадгалах
            </Button>
         </Form.Item>
      </Form>
   );
}
