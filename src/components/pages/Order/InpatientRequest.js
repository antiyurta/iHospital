import React, { useState } from 'react';
import { Form, Input, Modal, Select } from 'antd';
import inpatientIcon from './NewOrder/inpatientIcon.svg';
import { openNofi } from '../../common';
//api
import StructureApi from '@ApiServices/organization/structure';
import HealtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
//defualt
const { TextArea } = Input;

function InpatientRequest({ selectedPatient, handleClick, hasInsurance, hicsSeal, addHics }) {
   const [form] = Form.useForm();
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [departments, setDepartments] = useState([]);
   const [hicsSupports, setHicsSupports] = useState([]);
   const getDepartments = async () => {
      await StructureApi.get({
         params: {
            type: 2
         }
      }).then(({ data: { response } }) => {
         setDepartments(response.data);
         setIsOpenModal(true);
      });
   };

   const onSelectDep = (id) => {
      console.log('---------->', id);
      if (hasInsurance) {
         getHicsService(departments.find((department) => department.id === id)?.hicsServiceIds || []);
      }
   };

   const getHicsService = async (ids) => {
      await HealtInsuranceApi.getHicsService().then(({ data }) => {
         if (data.code === 200) {
            openNofi('success', 'Амжиллтай', `${data.description}`);
            setHicsSupports(data.result.filter((hicsService) => ids.includes(hicsService.id)));
         } else if (data.code === 400) {
            openNofi('error', 'Амжилттгүй', `${data.description}`);
         }
      });
   };

   const handleFinish = (values) => {
      handleClick({
         ...values,
         patientId: selectedPatient.id,
         fromServiceId: hicsSeal.hicsServiceId || addHics.hicsSeal.hicsServiceId
      });
      // handleClick({
      //    patientId: selectedPatient.id
      // });
   };

   const getConfirm = () => {
      Modal.confirm({
         title: 'Хэвтүүлэх хүсэлт',
         content: (
            <div>
               <p>Та хэвтүүлэх хүсэлт илгээх гэж байна</p>
            </div>
         ),
         cancelText: 'Болих',
         okText: 'Захиалах',
         async onOk() {
            handleClick({
               patientId: selectedPatient.id
            });
         }
      });
   };

   return (
      <>
         <button
            className="yellow-order"
            onClick={() => {
               if (!selectedPatient.hasOwnProperty('id')) {
                  openNofi('error', 'Алдаа', 'Өвчтөн сонгогдоогүй байна');
               } else {
                  getDepartments();
               }
            }}
         >
            <img src={inpatientIcon} />
            Хэвтүүлэх
         </button>
         <Modal
            title="Хэвтүүлэх хүсэлт"
            open={isOpenModal}
            onCancel={() => {
               setIsOpenModal(false);
            }}
            onOk={() => {
               form.validateFields().then(handleFinish);
            }}
         >
            <Form form={form} layout="vertical">
               <Form.Item
                  className="mb-1"
                  label="Тасаг:"
                  name={'orderDepartmentId'}
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Select
                     onSelect={onSelectDep}
                     options={departments?.map((department) => ({
                        label: department.name,
                        value: department.id
                     }))}
                  />
               </Form.Item>
               {hasInsurance ? (
                  <>
                     <Form.Item
                        label="Т.Ү-ний дугаар"
                        name="toServiceId"
                        rules={[{ required: true, message: 'Үйлчилгээний төрөл заавал сонгох' }]}
                        style={{
                           width: '100%'
                        }}
                        className="mb-0"
                     >
                        <Select
                           placeholder="Үйлчилгээний төрөл сонгох"
                           options={hicsSupports.map((hicsSupport) => ({
                              label: hicsSupport.name,
                              value: hicsSupport.id
                           }))}
                        />
                     </Form.Item>
                     <Form.Item
                        label="Заалтын тайлбар"
                        name="approvalDesc"
                        rules={[
                           {
                              required: true,
                              message: 'Заалтын тайлбар'
                           }
                        ]}
                     >
                        <TextArea maxLength={255} />
                     </Form.Item>
                  </>
               ) : null}
            </Form>
         </Modal>
      </>
   );
}
export default InpatientRequest;
