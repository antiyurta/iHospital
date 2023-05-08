import React, { useState } from 'react';
import { EditOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {
   Button,
   Checkbox,
   Collapse,
   Divider,
   Form,
   Input,
   Modal,
   Popconfirm,
   Table
} from 'antd';

import EditableFormItem from './EditableFormItem';
import { ReturnDetails } from '../Document/Index';
import { Get, Post, openNofi } from '../../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';

const { Column } = Table;
const { Panel } = Collapse;

function EditableTable(props) {
   const { documents, form, positions, add, remove } = props;
   const token = useSelector(selectCurrentToken);
   const [confForm] = Form.useForm();
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isOpenConfModal, setIsOpenConfModal] = useState(false);
   const [oldDocuments, setOldDocuments] = useState([]);
   const [documentForm, setDocumentForm] = useState({});
   const [selectedDocumentValue, setSelectDocumentValue] = useState(Number);
   const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);
   const getPositionInfo = (positionId) => {
      const name = positions?.find((e) => e.id === parseInt(positionId))?.name;
      return name;
   };
   const handleClick = (selectedDocuments) => {
      if (selectedDocuments?.length === 0) {
         openNofi('info', 'Санамж', 'Маягт сонгогдоогүй байна');
      }
      form.setFieldsValue({ documents: selectedDocuments });
      setIsOpenModal(false);
   };
   const findOldDocuments = () => {
      const documents = form.getFieldValue('documents');
      setOldDocuments(documents);
   };
   const getDocumentForm = async (index) => {
      const documentValue = form.getFieldValue(['documents', index, 'value']);
      const employeePositionIds = form.getFieldValue('employeePositionIds');
      getPositionInfo(employeePositionIds[0]);
      setSelectedEmployeeIds(employeePositionIds);
      setSelectDocumentValue(documentValue);
      const conf = {
         headers: {},
         params: {
            documentValue: documentValue
         }
      };
      const response = await Get('organization/document-form', token, conf);
      if (response.data?.length === 0) {
         openNofi('error', 'Алдаа', 'Маягт холбоотой FORM байхгүй байна');
      } else {
         setDocumentForm(response.data[0]);
         setIsOpenConfModal(true);
      }
   };
   const confOnFinish = async (values) => {
      const data = {
         documentValue: selectedDocumentValue,
         items: values
      };
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Post(
         'organization/document-option/custom-all',
         token,
         conf,
         data
      );
      console.log(response);
   };
   return (
      <>
         <Table
            bordered
            dataSource={documents}
            pagination={false}
            footer={() => (
               <Button
                  onClick={() => {
                     setIsOpenModal(true);
                     findOldDocuments();
                  }}
               >
                  <PlusOutlined /> Маягт нэмэх
               </Button>
            )}
         >
            <Column
               dataIndex={'value'}
               title="МД"
               width={40}
               render={(value, row, index) => {
                  return (
                     <EditableFormItem name={[index, 'value']}>
                        <Input />
                     </EditableFormItem>
                  );
               }}
            />
            <Column
               dataIndex={'docName'}
               title="Баримт бичгийн нэр"
               width={40}
               render={(value, row, index) => {
                  return (
                     <EditableFormItem name={[index, 'docName']}>
                        <Input />
                     </EditableFormItem>
                  );
               }}
            />
            <Column
               dataIndex={'label'}
               title="Тушаал шийдвэрийн дугаар"
               width={40}
               render={(value, row, index) => {
                  return (
                     <EditableFormItem name={[index, 'label']}>
                        <Input />
                     </EditableFormItem>
                  );
               }}
            />
            <Column
               title="Үйлдэл"
               width={50}
               render={(value, row, index) => {
                  return (
                     <React.Fragment>
                        <Popconfirm
                           title="Та хасахдаа итгэлтэй байна уу?"
                           okText="Тийм"
                           cancelText="Үгүй"
                           onConfirm={() => remove(index)}
                        >
                           <Button
                              icon={<MinusOutlined />}
                              shape="circle"
                              type="danger"
                              style={{
                                 backgroundColor: 'red'
                              }}
                           />
                        </Popconfirm>
                     </React.Fragment>
                  );
               }}
            />
            <Column
               title="Үйлдэл2"
               width={50}
               render={(value, row, index) => {
                  return (
                     <React.Fragment>
                        <Button
                           onClick={() => getDocumentForm(index)}
                           icon={<EditOutlined />}
                           shape="circle"
                           type="primary"
                        />
                     </React.Fragment>
                  );
               }}
            />
         </Table>
         <Modal
            title="Маягт сонгох"
            width={'80%'}
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            footer={false}
         >
            <ReturnDetails
               type={1}
               oldDocuments={oldDocuments}
               handleClick={handleClick}
            />
         </Modal>
         <Modal
            title="sdads"
            open={isOpenConfModal}
            onCancel={() => setIsOpenConfModal(false)}
            onOk={() =>
               confForm.validateFields().then((values) => {
                  confOnFinish(values);
               })
            }
         >
            <Form form={confForm} layout="vertical">
               <Collapse>
                  {selectedEmployeeIds?.map((id, index) => {
                     return (
                        <Panel key={index} header={getPositionInfo(id)}>
                           <Form.Item name={id}>
                              <Checkbox.Group className="w-full">
                                 {documentForm?.documentForm?.map(
                                    (form, index) => {
                                       return (
                                          <div key={index}>
                                             <Divider>{form.label}</Divider>
                                             {form.options?.map(
                                                (option, idx) => {
                                                   return (
                                                      <Checkbox
                                                         key={idx}
                                                         value={option.keyWord}
                                                      >
                                                         {option.value}
                                                      </Checkbox>
                                                   );
                                                }
                                             )}
                                          </div>
                                       );
                                    }
                                 )}
                              </Checkbox.Group>
                           </Form.Item>
                        </Panel>
                     );
                  })}
               </Collapse>
            </Form>
         </Modal>
      </>
   );
}
export default EditableTable;
