import React, { useEffect, useRef, useState } from 'react';
import { Button, ConfigProvider, Form, Input, Modal, Select, Table } from 'antd';
import { ArrowRightOutlined, DeleteOutlined, EditOutlined, MinusOutlined } from '@ant-design/icons';
import locale from 'antd/es/locale/mn_MN';
//service
import ReferenceDiagnoseServices from '../../../services/reference/diagnose';
import EmrPatientDiagnoseServices from '../../../services/emr/patientDiagnose';
import { openNofi } from '../../comman';
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

const NewDiagnose = ({ patientId, appointmentId, hicsServiceId, usageType }) => {
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
         params: {
            appointmentId: appointmentId
         }
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
               inpatientRequestId: null,
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
      <div>
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
            <Table
               rowKey="id"
               loading={isLoading}
               columns={[
                  {
                     title: '№',
                     width: 50,
                     render: (_, _row, index) => index + 1
                  },
                  {
                     title: 'Код',
                     dataIndex: ['diagnose', 'code']
                  },
                  {
                     title: 'Монгол нэр',
                     dataIndex: ['diagnose', 'nameMn']
                  },
                  {
                     title: 'Англи нэр',
                     dataIndex: ['diagnose', 'nameEn']
                  },
                  {
                     title: 'Оношийн төрөл',
                     dataIndex: 'diagnoseType',
                     render: (diagnoseType) => DiagnoseTypeEnum[diagnoseType]
                  },
                  {
                     title: 'Үйлдэл',
                     width: 80,
                     dataIndex: 'id',
                     render: (id, row) => (
                        <div className="grid grid-cols-2 gap-1 justify-items-center">
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
                                    onCancel: 'Болих'
                                 });
                              }}
                           />
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
                        </div>
                     )
                  }
               ]}
               dataSource={patientDiagnosis}
               pagination={false}
            />
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
                                 {(diagnosis, { _add, remove }) => (
                                    <Table
                                       rowKey="fieldKey"
                                       columns={[
                                          {
                                             title: 'Код',
                                             width: 100,
                                             render: (_, _row, index) => (
                                                <EditableFormItem name={[index, 'code']}>
                                                   <Input />
                                                </EditableFormItem>
                                             )
                                          },
                                          {
                                             title: 'Монгол нэр',
                                             render: (_, _row, index) => (
                                                <EditableFormItem name={[index, 'nameMn']}>
                                                   <Input />
                                                </EditableFormItem>
                                             )
                                          },
                                          {
                                             title: 'Оношийн төрөл',
                                             width: 150,
                                             render: (_, _row, index) => (
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
                                             )
                                          },
                                          {
                                             title: 'Үйлдэл',
                                             render: (_, _row, index) => (
                                                <Button danger icon={<MinusOutlined />} onClick={() => remove(index)} />
                                             )
                                          }
                                       ]}
                                       dataSource={diagnosis}
                                       pagination={false}
                                    />
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
