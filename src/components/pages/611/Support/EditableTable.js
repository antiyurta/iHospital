import React, { useState } from 'react';
import { EditOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Collapse, Form, Input, Modal, Popconfirm, Table } from 'antd';

import EditableFormItem from './EditableFormItem';
import { ReturnDetails } from '../Document/Index';
import { openNofi } from '../../../common';

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
   const [selectedStructureIds, setSelectedStructureId] = useState(Number);
   const [selectedDocumentValue, setSelectDocumentValue] = useState(Number);
   const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);
   const [currentDocumentOptions, setCurrentDocumentOptions] = useState([]);
   //checkbox all
   const [indeterminate, setIndeterminate] = useState(false);
   const [checkAll, setCheckAll] = useState(false);
   const onCheckAllChange = (e, index, values) => {
      const allValues = values.map((value) => value.keyWord);
      console.log(allValues);
      if (e.target.checked) {
         confForm.setFieldValue(index, allValues);
      } else {
         confForm.setFieldValue(index, []);
      }
      setIndeterminate(false);
      setCheckAll(e.target.checked);
   };
   const onChange = (list, index, plainOptions) => {
      confForm.setFieldValue(index, list);
      const newPlanOptions = plainOptions.filter((pO) => pO.isHead && pO.type != 'title');
      setIndeterminate(!!list.length && list.length < newPlanOptions.length);
      setCheckAll(list.length === newPlanOptions.length);
   };
   //
   const getPositionInfo = (positionId) => {
      var title = '';
      console.log(positions);
      positions?.map((position) => {
         position.options?.map((option) => {
            if (option.value === positionId) {
               title = `${position.label} / ${option.label}`;
            }
         });
      });
      return title;
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
   const getDocumentOptions = async (documentValue, employeePositionIds, structureIds, index) => {
      await DocumentOptionServices.getByPageFilter({
         params: {
            employeePositionIds: employeePositionIds,
            documentValue: documentValue,
            structureIds: structureIds
         }
      }).then(
         ({
            data: {
               response: { data }
            }
         }) => {
            console.log('==========>', data);
            if (data.length > 0) {
               setCurrentDocumentOptions(data);
               setEditModePosition(true);
               form.setFieldValue(
                  ['documents', index, 'optionIds'],
                  data.map((item) => item.id)
               );
               data.map((item) => {
                  confForm.setFieldValue(item.employeePositionId, item.formOptionIds);
               });
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
      const structureIds = form.getFieldValue('structureIds');
      getDocumentOptions(documentValue, employeePositionIds, structureIds, index);
      setSelectedStructureId(structureIds);
      setSelectedEmployeeIds(employeePositionIds);
      setSelectDocumentValue(documentValue);
   };
   const confOnFinish = async (values) => {
      const data = {
         structureIds: selectedStructureIds,
         documentValue: selectedDocumentValue,
         items: values
      };
      if (editModePosition) {
         Promise.all(
            Object.entries(values).map(async ([key, value]) => {
               const currentOption = currentDocumentOptions.find((option) => option.employeePositionId === Number(key));
               if (currentOption) {
                  await DocumentOptionServices.regularPatch(currentOption.id, {
                     formOptionIds: value
                  });
               } else {
                  await DocumentOptionServices.post({
                     structureIds: selectedStructureIds,
                     documentValue: selectedDocumentValue,
                     items: { [`${key}`]: value }
                  });
               }
            })
         );
         confForm.resetFields();
         setIsOpenConfModal(false);
      } else {
         await DocumentOptionServices.post(data).then(({ data: { response } }) => {
            form.setFieldValue(
               ['documents', selectedIndex, 'optionIds'],
               response.map((res) => res.id)
            );
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
            title="PER ZOOH"
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
                     console.log('documentForm', documentForm);
                     return (
                        <Panel key={index} header={getPositionInfo(id)}>
                           <Checkbox
                              indeterminate={indeterminate}
                              onChange={(e) => {
                                 onCheckAllChange(e, id, documentForm.documentForm);
                              }}
                              checked={checkAll}
                           >
                              Бүгд сонгох
                           </Checkbox>
                           <div className="w-full h-[1px] bg-red-300" />
                           <Form.Item name={id}>
                              <Checkbox.Group
                                 onChange={(e) => {
                                    onChange(e, id, documentForm?.documentForm);
                                 }}
                                 className="w-full"
                              >
                                 {documentForm?.documentForm
                                    ?.filter((df) => df.isHead && df.type != 'title')
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
