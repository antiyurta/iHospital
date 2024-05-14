import React, { useEffect, useRef, useState } from 'react';
import { Button, ConfigProvider, Form, Input, Modal, Select, Space, Table } from 'antd';
import { ArrowRightOutlined, DeleteOutlined, EditOutlined, MinusOutlined } from '@ant-design/icons';
import locale from 'antd/es/locale/mn_MN';
//service
import ReferenceDiagnoseServices from '../../../services/reference/diagnose';
import EmrPatientDiagnoseServices from '../../../services/emr/patientDiagnose';
import { openNofi } from '../../common';
import EditableFormItem from '../611/Support/EditableFormItem';

const DiagnoseTypeEnum = {
   0: 'Үндсэн',
   1: 'Урьдчилсан',
   2: 'Хавсрах онош',
   3: 'Дагалдах'
};

const DiagnoseTypeOptions = [
   {
      label: 'Үндсэн',
      value: 0
   },
   {
      label: 'Урьдчилсан',
      value: 1
   },
   {
      label: 'Хавсрах онош',
      value: 2
   },
   {
      label: 'Дагалдах',
      value: 3
   }
];

const { Search } = Input;
const { Column } = Table;

const NewDiagnose = ({ patientId, appointmentId, inpatientRequestId, hicsServiceId, usageType, selectType }) => {
   //selectType = 0 , onlyDiagnose
   //selectType = 1 , diagnoseAndType
   const [editMode, setEditMode] = useState(false);
   const [selectedDiagnoseForm] = Form.useForm();
   const [newDiagnoseTypeForm] = Form.useForm();
   const [searchValue, setSearchValue] = useState('');
   const [diagnosis, setDiagnosis] = useState([]);
   const [diagnoseMeta, setDiagnoseMeta] = useState({});
   const [isLoadingDiagnosis, setIsLoadingDiagnosis] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [patientDiagnosis, setPatientDiagnosis] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const getPatientDiagnosis = async () => {
      setIsLoading(true);
      await EmrPatientDiagnoseServices.getByPageFilter({
         appointmentId: appointmentId,
         inpatientRequestId: inpatientRequestId
      })
         .then(({ data: { response } }) => {
            setPatientDiagnosis(response.data);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   const getDiagnosis = async (page, limit, searchValue) => {
      setIsLoadingDiagnosis(true);
      setSearchValue(searchValue);
      await ReferenceDiagnoseServices.get({
         params: {
            page: page,
            limit: limit,
            types: [0, 1, 2],
            filter: searchValue
         }
      })
         .then(({ data: { response } }) => {
            setDiagnosis(response.data);
            setDiagnoseMeta(response.meta);
         })
         .finally(() => {
            setIsLoadingDiagnosis(false);
         });
   };

   const patchDiagnose = async (id, diagnoseType) => {
      await EmrPatientDiagnoseServices.patch(id, {
         diagnoseType: diagnoseType
      }).finally(() => {
         getPatientDiagnosis();
      });
   };

   const deleteDiagnose = async (id) => {
      await EmrPatientDiagnoseServices.delete(id).then(({ data: { success } }) => {
         if (success) {
            getPatientDiagnosis();
         }
      });
   };

   const add = (row) => {
      const isIncludePatientDiagnose = patientDiagnosis?.some((diagnose) => diagnose.diagnose.id === row.id) || false;
      const isIncludeSelectedDiagnose =
         selectedDiagnoseForm.getFieldValue('diagnosis')?.some((diagnose) => diagnose.id === row.id) || false;
      if (isIncludePatientDiagnose || isIncludeSelectedDiagnose) {
         openNofi('warning', 'Анхааруулга', 'Онош сонгогдсон байна');
      } else {
         const oldData = selectedDiagnoseForm.getFieldValue('diagnosis');
         selectedDiagnoseForm.setFieldsValue({ diagnosis: [...(oldData || []), ...[row]] });
      }
   };

   const onChangeDiagnoseType = (type, value, currentIndex) => {
      // type == 0 bol selectedDiagnoseForm,
      // type == 1 bol newDiagnoseForm
      if (value == 0) {
         const isIncludePatientDiagnose = patientDiagnosis?.some((diagnose) => diagnose.diagnoseType === 0) || false;
         const isIncludeSelectedDiagnose =
            selectedDiagnoseForm
               ?.getFieldValue('diagnosis')
               ?.some((diagnose, index) => diagnose.diagnoseType === 0 && index != currentIndex) || false;
         if (isIncludePatientDiagnose) {
            const diagnose = patientDiagnosis?.find((diagnose) => diagnose.diagnoseType === 0);
            openNofi('error', 'Алдаа', `${diagnose?.diagnose?.code} онош дээр Үндсэн онош гэж сонгогдсон байна`);
         }
         if (isIncludeSelectedDiagnose) {
            const diagnose = selectedDiagnoseForm
               .getFieldValue('diagnosis')
               ?.find((diagnose, index) => diagnose.diagnoseType === 0 && index != currentIndex);
            if (diagnose != undefined)
               openNofi('error', 'Алдаа', `${diagnose?.diagnose?.code} онош дээр Үндсэн онош гэж сонгогдсон байна`);
         }
         if (isIncludePatientDiagnose || isIncludeSelectedDiagnose) {
            if (type === 0) {
               selectedDiagnoseForm.resetFields([['diagnosis', currentIndex, 'diagnoseType']]);
            } else if (type === 1) {
               newDiagnoseTypeForm.resetFields();
            }
         }
      }
   };

   const onFinish = async (diagnosis) => {
      Promise.all(
         diagnosis?.map(async (diagnose) => {
            return await EmrPatientDiagnoseServices.post({
               patientId: patientId,
               usageType: usageType,
               diagnoseType: diagnose.diagnoseType,
               type: diagnose.type,
               diagnoseId: diagnose.id,
               appointmentId: appointmentId,
               inpatientRequestId: inpatientRequestId,
               diagnose: diagnose
            });
         })
      )
         .then((res) => {
            setIsOpenModal(false);
            getPatientDiagnosis();
         })
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      getDiagnosis(1, 10, null);
      appointmentId && getPatientDiagnosis();
   }, [appointmentId]);

   return (
      <div className="w-full">
         <div className="flex flex-col gap-2">
            <Button
               className="w-36"
               type="primary"
               onClick={() => {
                  selectedDiagnoseForm.resetFields();
                  setEditMode(false);
                  setIsOpenModal(true);
               }}
            >
               Онош сонгох
            </Button>
            <Table rowKey="id" bordered loading={isLoading} dataSource={patientDiagnosis} pagination={false}>
               <Column title="№" width={50} render={(_, _row, index) => index + 1} />
               <Column title="Код" dataIndex={['diagnose', 'code']} />
               <Column title="Монгол нэр" dataIndex={['diagnose', 'nameMn']} />
               <Column title="Англи нэр" dataIndex={['diagnose', 'nameEn']} />
               {selectType === 1 ? (
                  <Column
                     title="Оношийн төрөл"
                     dataIndex="diagnoseType"
                     render={(diagnoseType) => DiagnoseTypeEnum[diagnoseType]}
                  />
               ) : null}
               <Column
                  title="Үйлдэл"
                  width={80}
                  dataIndex="id"
                  render={(id, row) => (
                     <Space>
                        {selectType == 1 ? (
                           <Button
                              title="Засах"
                              icon={<EditOutlined />}
                              onClick={() => {
                                 Modal.confirm({
                                    content: (
                                       <>
                                          <Form
                                             form={newDiagnoseTypeForm}
                                             layout="vertical"
                                             initialValues={{
                                                diagnoseType: row.diagnoseType
                                             }}
                                          >
                                             <Form.Item label="Оношийн төрөл" name="diagnoseType">
                                                <Select
                                                   onChange={(value) => {
                                                      onChangeDiagnoseType(1, value, null);
                                                   }}
                                                   options={DiagnoseTypeOptions}
                                                />
                                             </Form.Item>
                                          </Form>
                                       </>
                                    ),
                                    onOk: () => patchDiagnose(id, newDiagnoseTypeForm.getFieldValue('diagnoseType')),
                                    okText: 'Хадгалах',
                                    cancelText: 'Болих'
                                 });
                              }}
                           />
                        ) : null}
                        <Button
                           danger
                           title="Устгах"
                           icon={<DeleteOutlined />}
                           onClick={() => {
                              Modal.error({
                                 content: 'Онош устгахдаа итгэлтэй байна уу',
                                 onOk: () => deleteDiagnose(id)
                              });
                           }}
                        />
                     </Space>
                  )}
               />
            </Table>
         </div>
         <Modal
            title="Онош"
            open={isOpenModal}
            onCancel={() => {
               setIsOpenModal(false);
            }}
            onOk={() => {
               selectedDiagnoseForm?.validateFields().then((values) => {
                  onFinish(values.diagnosis);
               });
            }}
            width={'90%'}
            okText="Хадгалах"
            cancelText="Болих"
         >
            <div className="flex flex-col gap-3">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3">
                     <Search
                        placeholder={'Код , Нэрүүдээр хайх'}
                        allowClear
                        onSearch={(value) => getDiagnosis(1, 10, value)}
                        enterButton={'Хайх'}
                     />
                  </div>
               </div>
               <div className="grid sm:grid-rows-2 xl:grid-rows-1 xl:grid-cols-3 gap-3">
                  <div className="xl:col-span-2">
                     <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                        <div className="p-3">
                           <p
                              className="pb-3"
                              style={{
                                 fontWeight: '600'
                              }}
                           >
                              Онош сонгох хэсэг
                           </p>
                           <ConfigProvider locale={locale}>
                              <Table
                                 rowKey={'id'}
                                 loading={isLoadingDiagnosis}
                                 bordered
                                 columns={[
                                    {
                                       title: 'Код',
                                       dataIndex: 'code'
                                    },
                                    {
                                       title: 'Монгол нэр',
                                       dataIndex: 'nameMn'
                                    },
                                    {
                                       title: 'Англи нэр',
                                       dataIndex: 'nameEn'
                                    },
                                    {
                                       title: 'Орос нэр',
                                       dataIndex: 'nameRu'
                                    },
                                    {
                                       title: '',
                                       render: (_, row) => {
                                          return (
                                             <Button
                                                icon={
                                                   <ArrowRightOutlined
                                                      style={{
                                                         font: 24,
                                                         color: '#4a7fc1'
                                                      }}
                                                   />
                                                }
                                                onClick={() => {
                                                   add(row);
                                                   // hicsServiceIdForm
                                                   //    .validateFields()
                                                   //    .then(() => {
                                                   //       diagnosisForm
                                                   //          .validateFields()
                                                   //          .then(() => )
                                                   //          .catch((err) => {
                                                   //             console.log(err);
                                                   //          });
                                                   //    })
                                                   //    .catch((error) => {
                                                   //       console.log(error);
                                                   //       openNofi(
                                                   //          'warning',
                                                   //          'Анхааруулга',
                                                   //          'Үйлчилгээний төрөл заавал сонгох'
                                                   //       );
                                                   //    });
                                                }}
                                             />
                                          );
                                       }
                                    }
                                 ]}
                                 dataSource={diagnosis}
                                 pagination={{
                                    position: ['bottomCenter'],
                                    size: 'small',
                                    current: diagnoseMeta.page,
                                    total: diagnoseMeta.itemCount,
                                    showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                                    pageSize: diagnoseMeta.limit,
                                    showSizeChanger: true,
                                    pageSizeOptions: ['5', '10', '20', '50'],
                                    showQuickJumper: true,
                                    onChange: (page, pageSize) => getDiagnosis(page, pageSize, searchValue)
                                 }}
                              />
                           </ConfigProvider>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col gap-3">
                     <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                        <div className="p-3">
                           <p
                              className="pb-3"
                              style={{
                                 fontWeight: '600'
                              }}
                           >
                              Сонгогдсон онош
                           </p>
                           <Form form={selectedDiagnoseForm}>
                              <Form.List name="diagnosis">
                                 {(diagnosis, { remove }) => (
                                    <Table rowKey="fieldKey" dataSource={diagnosis} pagination={false}>
                                       <Column
                                          title="Код"
                                          width={100}
                                          render={(_, _row, index) => (
                                             <EditableFormItem name={[index, 'code']}>
                                                <Input />
                                             </EditableFormItem>
                                          )}
                                       />
                                       <Column
                                          title="Монгол нэр"
                                          render={(_, _row, index) => (
                                             <EditableFormItem name={[index, 'nameMn']}>
                                                <Input />
                                             </EditableFormItem>
                                          )}
                                       />
                                       {selectType === 1 ? (
                                          <Column
                                             title="Оношийн төрөл"
                                             width={150}
                                             render={(_, _row, index) => (
                                                <Form.Item
                                                   className="mb-0"
                                                   name={[index, 'diagnoseType']}
                                                   rules={[
                                                      {
                                                         required: true,
                                                         message: 'Заавал'
                                                      }
                                                   ]}
                                                >
                                                   <Select
                                                      onChange={(value) => onChangeDiagnoseType(0, value, index)}
                                                      options={DiagnoseTypeOptions}
                                                   />
                                                </Form.Item>
                                             )}
                                          />
                                       ) : null}
                                       <Column
                                          title="Үйлдэл"
                                          render={(_, _row, index) => (
                                             <Button danger icon={<MinusOutlined />} onClick={() => remove(index)} />
                                          )}
                                       />
                                    </Table>
                                 )}
                              </Form.List>
                           </Form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
};
export default NewDiagnose;
