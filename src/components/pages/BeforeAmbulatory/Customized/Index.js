import React, { useEffect, useState } from 'react';
import { Button, Form, Modal, Result } from 'antd';
import { ReturnById } from '../../611/Document/Index';
import { Get } from '../../../comman';
import { useSelector } from 'react-redux';
import {
   selectCurrentAppId,
   selectCurrentToken
} from '../../../../features/authReducer';
import FormRender from './FormRender';
import { PrinterOutlined } from '@ant-design/icons';
function Index({ usageType, documentValue, structureId }) {
   const token = useSelector(selectCurrentToken);
   const AppIds = useSelector(selectCurrentAppId);
   const [form] = Form.useForm();
   const [documentForm, setDocumentForm] = useState([]);
   const [documentOptions, setDocumentOptions] = useState([]);
   const [selectedOptionId, setSelectedOptionId] = useState(Number);
   const [isOpenSelectPositionModal, setIsOpenSelectPositionModal] =
      useState(false);
   const [isOpenFormModal, setIsOpenFormModal] = useState(false);
   const getDocumentForm = async () => {
      const conf = {
         headers: {},
         params: {
            documentValue: documentValue
         }
      };
      const response = await Get('organization/document-form', token, conf);
      if (response.data?.length > 0) {
         setDocumentForm(response.data[0]);
      }
   };
   const getDocumentOption = async () => {
      const conf = {
         headers: {},
         params: {
            structureId: structureId,
            employeePositionIds: AppIds,
            documentValue: documentValue
         }
      };
      const response = await Get('organization/document-option', token, conf);
      setDocumentOptions(response.data);
   };
   useEffect(() => {
      if (documentValue != 0) {
         getDocumentForm();
         getDocumentOption();
         console.log('=------------->', documentValue);
      }
   }, [documentValue]);
   if (documentValue === 0) {
      return <Result title="Маягт сонгоно уу" />;
   }
   return (
      <div>
         <div className="flow-root">
            <div className="float-left">
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     gap: '6px'
                  }}
               >
                  <Button
                     type="primary"
                     onClick={() => setIsOpenSelectPositionModal(true)}
                  >
                     Бөглөх
                  </Button>
                  <Button icon={<PrinterOutlined />}>Хэвлэх</Button>
               </div>
            </div>
            <div className="float-right">
               <Button>Сэргээх</Button>
            </div>
         </div>
         <div
            style={
               usageType === 'OUT'
                  ? {
                       zoom: '50%'
                    }
                  : { width: '100%' }
            }
         >
            <ReturnById
               type={usageType === 'OUT' ? true : false}
               id={documentValue}
            />
         </div>
         <Modal
            title="Маягт бөглөх"
            open={isOpenFormModal}
            onCancel={() => setIsOpenFormModal(false)}
            onOk={() =>
               form.validateFields().then((values) => console.log(values))
            }
         >
            <Form form={form} layout="vertical">
               <FormRender
                  form={documentForm}
                  formOptionIds={
                     documentOptions[selectedOptionId]?.formOptionIds
                  }
               />
            </Form>
         </Modal>
         <Modal
            title="Хэнээр бөглөх"
            open={isOpenSelectPositionModal}
            onCancel={() => setIsOpenSelectPositionModal(false)}
            footer={null}
         >
            <div className="grid grid-cols-2 gap-6">
               {documentOptions?.map((option, index) => {
                  return (
                     <Button
                        key={index}
                        type="primary"
                        onClick={() => {
                           setSelectedOptionId(index);
                           setIsOpenSelectPositionModal(false);
                           setIsOpenFormModal(true);
                        }}
                     >
                        {option.structure?.name}
                     </Button>
                  );
               })}
            </div>
         </Modal>
      </div>
   );
}
export default Index;
