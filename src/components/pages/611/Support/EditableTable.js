import React, { useState } from 'react';
import { EditOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Collapse, Form, Input, Modal, Popconfirm, Table } from 'antd';

import EditableFormItem from './EditableFormItem';
import { ReturnDetails } from '../Document/Index';
import { openNofi } from '../../../comman';

import DocumentFormServices from '../../../../services/organization/documentForm';
import DocumentOptionServices from '../../../../services/organization/documentOption';

const { Column } = Table;
const { Panel } = Collapse;

function EditableTable(props) {
   const { documents, form, positions, add, remove } = props;
   const [selectedIndex, setSelectedIndex] = useState();
   const [confForm] = Form.useForm();
   const [editModePosition, setEditModePosition] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isOpenConfModal, setIsOpenConfModal] = useState(false);
   const [oldDocuments, setOldDocuments] = useState([]);
   const [documentForm, setDocumentForm] = useState({});
   const [selectedStructureId, setSelectedStructureId] = useState(Number);
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
   const getDocumentOptions = async (documentValue, employeePositionIds, structureId, index) => {
      await DocumentOptionServices.getByPageFilter({
         params: {
            employeePositionIds: employeePositionIds,
            documentValue: documentValue,
            structureId: structureId
         }
      }).then(
         ({
            data: {
               response: { data }
            }
         }) => {
            if (data.length > 0) {
               setEditModePosition(true);
               form.setFieldValue(['documents', index, 'optionId'], data[0].id);
               console.log(form.getFieldsValue());
               confForm.setFieldValue(data[0].employeePositionId, data[0].formOptionIds);
            }
         }
      );
   };
   const getDocumentForm = async (index) => {
      const formId = form.getFieldValue(['documents', index, 'formId']);
      await DocumentFormServices.getById(formId).then(({ data: { response } }) => {
         setDocumentForm(response);
         setIsOpenConfModal(true);
      });
      const documentValue = form.getFieldValue(['documents', index, 'value']);
      const employeePositionIds = form.getFieldValue('employeePositionIds');
      const structureId = form.getFieldValue('structureId');
      getDocumentOptions(documentValue, employeePositionIds, structureId, index);
      setSelectedStructureId(structureId);
      setSelectedEmployeeIds(employeePositionIds);
      setSelectDocumentValue(documentValue);
   };
   const confOnFinish = async (values) => {
      const data = {
         structureId: selectedStructureId,
         documentValue: selectedDocumentValue,
         items: values
      };
      if (editModePosition) {
         await DocumentOptionServices.patch(data).then((response) => {
            if (response.status === 200) {
               confForm.resetFields();
               setIsOpenConfModal(false);
            }
         });
      } else {
         await DocumentOptionServices.post(data).then(({ data: { response } }) => {
            form.setFieldValue(['documents', selectedIndex, 'optionId'], response.id);
            confForm.resetFields();
            setIsOpenConfModal(false);
         });
      }
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
                           onClick={() => {
                              setSelectedIndex(index);
                              getDocumentForm(index);
                           }}
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
            <ReturnDetails type={1} oldDocuments={oldDocuments} handleClick={handleClick} />
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
                                 {documentForm?.documentForm
                                    ?.filter((df) => df.isHead)
                                    .map((form, index) => (
                                       <Checkbox key={index} value={form.keyWord}>
                                          {form.question}
                                       </Checkbox>
                                    ))}
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
