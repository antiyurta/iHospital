import { Button, Checkbox, Divider, Form, Input, InputNumber, Modal, Radio } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../../features/authReducer';
import { Get, Patch, Post } from '../../../../comman';
const { TextArea } = Input;
function Anamnesis({ PatientId, InpatientRequestId }) {
   const token = useSelector(selectCurrentToken);
   const [form] = Form.useForm();
   const [anamnesis, setAnamnesis] = useState([]);
   const [anamnesLoading, setAnamnesisLoading] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const getAnamnesis = async () => {
      setAnamnesisLoading(true);
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get('service/inpatient-request/show/' + InpatientRequestId, token, conf);
      setAnamnesis(response.anamnes);
      setAnamnesisLoading(false);
   };
   const openModal = () => {
      if (Object(anamnesis).length != 0) {
         form.setFieldsValue(anamnesis);
      }
      setIsOpenModal(true);
   };
   const onFinish = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      values['patientId'] = PatientId;
      values['inpatientRequestId'] = InpatientRequestId;
      if (Object(anamnesis).length != 0) {
         const response = await Patch('inpatient/anamnes/' + anamnesis.id, token, conf, values);
      } else {
         const response = await Post('inpatient/anamnes', token, conf, values);
         console.log(response);
      }
   };
   useEffect(() => {
      getAnamnesis();
   }, []);
   return (
      <>
         <div>
            <div className="flow-root">
               <div className="float-right">
                  <Button type="primary" loading={anamnesLoading} onClick={() => openModal()}>
                     {Object(anamnesis).length != 0 ? 'Засах' : 'Нэмэх'}
                  </Button>
               </div>
            </div>
         </div>
         <Modal
            title="Анамнез"
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            onOk={() =>
               form.validateFields().then((values) => {
                  onFinish(values);
               })
            }
            width={'80%'}
            cancelText="Болих"
            okText="Хадгалах"
         >
            <Form form={form} layout="vertical">
               <div className="flex flex-wrap">
                  <div className="w-1/3 p-1">
                     <Form.Item label="Хэвтэх үеийн зовиур:" name="inPatientPain">
                        <TextArea rows={10} />
                     </Form.Item>
                  </div>
                  <div className="w-1/3 p-1">
                     <Form.Item label="Өвчний түүх" name="painStory">
                        <TextArea rows={10} />
                     </Form.Item>
                  </div>
                  <div className="w-1/3 p-1">
                     <Form.Item label="Амьдралын түүх:" name="lifeStory">
                        <TextArea rows={10} />
                     </Form.Item>
                  </div>
                  <div className="w-2/12 p-1">
                     <Form.Item label="Ахуйн нөхцөл:" name="locate">
                        <Radio.Group>
                           <Radio value={'APARTMENT'}>Орон сууцанд</Radio>
                           <Radio value={'GER'}>Гэрт</Radio>
                           <Radio value={'HOUSE'}>Бусад</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
                  <div className="w-2/12 p-1">
                     <Form.Item label="Ажил хөдөлмөрийн нөхцөл:" name="workCondition">
                        <Radio.Group>
                           <Radio value={'NORMAL'}>Ердийн</Radio>
                           <Radio value={'HARD'}>Хүнд</Radio>
                           <Radio value={'VIPER'}>Хортой</Radio>
                           <Radio value={'OTHER'}>Бусад</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
                  <div className="w-2/12 p-1">
                     <Form.Item label="Халдварт:" name="contagious">
                        <Checkbox.Group>
                           <Checkbox className="ml-2" value="MEASLES">
                              Улаан бурхан
                           </Checkbox>
                           <Checkbox value="VARICELLA">Салхин цэцэг</Checkbox>
                           <Checkbox value="AVIRUS">Вирус хепатит A</Checkbox>
                           <Checkbox value="BVIRUS">Вирус хепатит B</Checkbox>
                           <Checkbox value="CVIRUS">Вирус хепатит C</Checkbox>
                           <Checkbox value="TUBERCULOSIS">Сүрьеэ</Checkbox>
                           <Checkbox value="OTHER">Бусад</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </div>
                  <div className="w-2/12 p-1">
                     <Form.Item label="Мэс ажилбар хийсэн эсэх:" name="surgery">
                        <TextArea />
                     </Form.Item>
                  </div>
                  <div className="w-2/12 p-1">
                     <Form.Item label="Осол гэмтэл, хордлого,шалтгаан:" name="accidents">
                        <TextArea />
                     </Form.Item>
                  </div>
                  <div className="w-2/12 p-1">
                     <Form.Item label="Харшлын анамнез:" name="allergy">
                        <Checkbox.Group>
                           <Checkbox className="ml-2" value="medicine">
                              Эмийн бодис
                           </Checkbox>
                           <Checkbox value="food">Хоол хүнс</Checkbox>
                           <Checkbox value="other">Бусад</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </div>
                  <div className="w-2/12 p-1">
                     <Form.Item label="Удамшлын анамнез:" name="geneticPainDesc">
                        <TextArea />
                     </Form.Item>
                  </div>
                  <div className="w-2/12 p-1">
                     <Form.Item label="Хооллолтын байдал:" name="whatFoodie">
                        <Radio.Group>
                           <Radio value="normal">Ердийн</Radio>
                           <Radio value="vegetarian">Цагаан</Radio>
                           <Radio value="other">Бусад</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
                  <div className="w-2/12 p-1">
                     <Form.Item label="Архи хэрэглэдэг эсэх:" name="isAlcoholUse">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
                  <div className="w-2/12 p-1">
                     <Form.Item label="Тамхи татдаг эсэх:" name={['cigar', 'isUse']}>
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </div>
                  <div className="w-2/12 p-1">
                     <Form.Item label="Хэдэн наснаас эхэлж татсан:" name={['cigar', 'fromAge']}>
                        <Input />
                     </Form.Item>
                  </div>
                  <div className="w-2/12 p-1">
                     <Form.Item label="Хэдэн наснаас эхэлж татсан:" name={['cigar', 'usedYear']}>
                        <InputNumber />
                     </Form.Item>
                  </div>
               </div>
            </Form>
         </Modal>
      </>
   );
}
export default Anamnesis;
