import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Modal, Select, Space, Table } from 'antd';
import { ArrowRightOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
//redux
import { selectCurrentAddHics, selectCurrentHicsSeal, setAddHics, setHicsSeal } from '@Features/emrReducer';
//common
import { openNofi } from '@Comman/common';
import { modal } from '@Features/AppGlobal';
//service
import PatientApi from '@ApiServices/pms/patient.api';
import DiagnoseApi from '@ApiServices/reference/diagnose';
import InsuranceApi from '@ApiServices/healt-insurance/insurance';
import PatientDiagnoseApi from '@ApiServices/emr/patientDiagnose';
import HealthInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
//defualts
const DiagnoseTypeEnum = {
   0: 'Үндсэн',
   1: 'Урьдчилсан',
   2: 'Хавсрах онош',
   3: 'Дагалдах'
};

const { Search } = Input;
const { Column } = Table;

const NewDiagnose = ({ hasInsurance, patientId, appointmentId, inpatientRequestId, usageType, selectType }) => {
   //selectType = 0 , onlyDiagnose
   //selectType = 1 , diagnoseAndType
   const dispatch = useDispatch();
   const hicsSeal = useSelector(selectCurrentHicsSeal);
   const addHics = useSelector(selectCurrentAddHics);
   const [drgCodes, setDrgCodes] = useState([]);
   const [hicsDiagnosisForm] = Form.useForm();
   const selectedIcdCode = Form.useWatch(['diagnosis', 'icdCode'], hicsDiagnosisForm);
   const selectedDrgCode = Form.useWatch(['diagnosis', 'drgCode'], hicsDiagnosisForm);
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
      await PatientDiagnoseApi.getByPageFilter({
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
      await DiagnoseApi.get({
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
      await PatientDiagnoseApi.patch(id, {
         diagnoseType: diagnoseType
      }).finally(() => {
         getPatientDiagnosis();
      });
   };

   const deleteDiagnose = async (id) => {
      await PatientDiagnoseApi.delete(id).then(({ data: { success } }) => {
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
         newOnFinish(row);
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

   const getHicsCostList = async (value) => {
      const current = drgCodes.find((drgCode) => drgCode.drgCode === value);
      let amountCit = current.amountCit;
      let amountHi = current.amountHi;
      let amountTotal = current.amountTotal;
      if (usageType === 'IN') {
         await PatientApi.getById(patientId).then(({ data: { response } }) => {
            if (response.freeTypeId > 0) {
               amountCit = 0;
               amountHi = current.amountTotal;
               amountTotal = current.amountTotal;
            }
         });
      }
      hicsDiagnosisForm.setFieldsValue({
         diagnosis: {
            drgTypeCode: current.drgTypeCode
         },
         amount: {
            amountCit: amountCit,
            amountHi: amountHi,
            amountTotal: amountTotal
         }
      });
   };

   const getIcdFormField = (value) => {
      const foundDiagnosis = patientDiagnosis?.find(({ diagnose }) => diagnose.code === value);
      const { diagnose } = foundDiagnosis || {};
      hicsDiagnosisForm.setFieldValue(['diagnosis', 'icdCodeName'], diagnose?.nameMn);
      setIsLoading(true);
      HealthInsuranceApi.getHicsCostByField(hicsSeal.hicsServiceId, value)
         .then(({ data }) => {
            if (data.code == 200) {
               if (Array.isArray(data.result)) {
                  setDrgCodes(data.result);
               } else {
                  setDrgCodes([]);
               }
            } else {
               setDrgCodes([]);
               openNofi('error', 'Амжилтгүй', data.description);
            }
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   const newOnFinish = async (diagnose) => {
      await PatientDiagnoseApi.post({
         patientId: patientId,
         usageType: usageType,
         diagnoseType: diagnose.diagnoseType,
         type: diagnose.type,
         diagnoseId: diagnose.id,
         appointmentId: appointmentId,
         inpatientRequestId: inpatientRequestId,
         diagnose: diagnose
      }).then(() => {
         getPatientDiagnosis();
      });
   };

   const DualDiagnose = () => {
      const renderForm = () => (
         <Form.Item
            label="Оношийн код-2"
            name={['diagnosis', 'icdCode1']}
            rules={[
               {
                  required: true,
                  message: 'Оношийн код-2 заавал'
               }
            ]}
         >
            <Select
               allowClear
               onClear={() => {
                  hicsDiagnosisForm.resetFields(['diagnosis', 'icdCode1', 'amount']);
               }}
               showSearch
               filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
               options={patientDiagnosis.map(({ diagnose }) => ({
                  value: diagnose.code,
                  label: diagnose.code
               }))}
            />
         </Form.Item>
      );
      if (hicsSeal.hicsServiceId === 20320) return renderForm();
      else if (hicsSeal.hicsServiceId === 20330) return renderForm();
      else if (hicsSeal.hicsServiceId === 20550) return renderForm();
      else if (hicsSeal.hicsServiceId === 20150) {
         if (['51300048', '51300037'].includes(selectedDrgCode)) {
            return renderForm();
         } else {
            return false;
         }
      } else if (
         selectedIcdCode &&
         ['C', 'D', 'Z'].some((char) => char.toLowerCase() === selectedIcdCode[0].toLowerCase())
      ) {
         return renderForm();
      }
      return false;
   };

   const EditModalContent = ({ row }) => (
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
               options={Object.entries(DiagnoseTypeEnum)?.map(([key, value]) => ({
                  label: value,
                  value: key
               }))}
            />
         </Form.Item>
      </Form>
   );

   const PatientDiagnoseTable = () => (
      <Table rowKey="id" bordered loading={isLoading} dataSource={patientDiagnosis} pagination={false}>
         <Column title="№" width={40} render={(_, _row, index) => index + 1} />
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
                           modal.confirm({
                              closable: true,
                              maskClosable: true,
                              content: <EditModalContent row={row} />,
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
                        modal.error({
                           content: 'Онош устгахдаа итгэлтэй байна уу',
                           onOk: () => deleteDiagnose(id)
                        });
                     }}
                  />
               </Space>
            )}
         />
      </Table>
   );

   const updateHics = async (type, values) => {
      const apiMap = {
         addHics: InsuranceApi.requestAddHics,
         hicsSeal: InsuranceApi.requestHicsSeal
      };
      const idMap = {
         addHics: addHics?.id,
         hicsSeal: hicsSeal?.id
      };
      const dispatchMap = {
         addHics: setAddHics,
         hicsSeal: setHicsSeal
      };
      try {
         const selectedApi = apiMap[type];
         const { amount, diagnosis } = values;
         await selectedApi(idMap[type], {
            ...amount,
            diagnosis
         }).then(({ data: { response } }) => {
            dispatch(dispatchMap[type](response));
            openNofi('success', 'Амжилттай', 'Эрүүл мэндийн мэдээлэл амжилттай хадгалагдлаа');
            setIsOpenModal(false);
         });
      } catch (error) {
         console.log('err', error);
      }
   };

   const openModal = () => {
      const data = addHics?.checkupId >= 1 ? addHics : hicsSeal;
      if (data?.diagnosis) {
         console.log('========>', data);
         getIcdFormField(data.diagnosis.icdCode);
         hicsDiagnosisForm.setFieldsValue({
            diagnosis: data.diagnosis,
            amount: {
               amountCit: data.amountCit,
               amountHi: data.amountHi,
               amountTotal: data.amountTotal
            }
         });
      }
      setIsOpenModal(true);
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
                  openModal();
               }}
            >
               Онош сонгох
            </Button>
            <PatientDiagnoseTable />
         </div>
         <Modal
            title="Онош"
            open={isOpenModal}
            onCancel={() => {
               setIsOpenModal(false);
            }}
            onOk={() => {
               if (hasInsurance) {
                  hicsDiagnosisForm?.validateFields().then((values) => {
                     if (addHics?.checkupId >= 1) {
                        updateHics('addHics', values);
                     } else {
                        updateHics('hicsSeal', values);
                     }
                  });
               } else {
                  setIsOpenModal(false);
               }
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
                           <p className="pb-3 font-semibold">Онош сонгох хэсэг:</p>
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
                                    render: (_, row) => (
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
                                          }}
                                       />
                                    )
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
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col gap-3">
                     <div className="flex flex-col gap-2">
                        <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                           <div className="p-3">
                              <p className="pb-3 font-semibold">Сонгогдсон онош:</p>
                              <PatientDiagnoseTable />
                           </div>
                        </div>
                        {hasInsurance ? (
                           <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                              <div className="p-3">
                                 <p className="pb-3 font-semibold">Өртгийн жин:</p>
                                 <Form
                                    form={hicsDiagnosisForm}
                                    layout="vertical"
                                    initialValues={{
                                       icdGroup: 1
                                    }}
                                 >
                                    <div className="grid grid-cols-3 gap-2">
                                       <Form.Item
                                          label="Оношийн код"
                                          name={['diagnosis', 'icdCode']}
                                          className="mb-0"
                                          rules={[
                                             {
                                                required: true,
                                                message: 'Онош заавал'
                                             }
                                          ]}
                                       >
                                          <Select
                                             allowClear
                                             onClear={() => {
                                                hicsDiagnosisForm.resetFields([
                                                   ['diagnosis', 'drgCode'],
                                                   ['diagnosis', 'icdCode'],
                                                   ['diagnosis', 'icdCode1']
                                                ]);
                                             }}
                                             showSearch
                                             filterOption={(input, option) =>
                                                option.label.toLowerCase().includes(input.toLowerCase())
                                             }
                                             options={patientDiagnosis.map(({ diagnose }) => ({
                                                value: diagnose.code,
                                                label: diagnose.code
                                             }))}
                                             onSelect={getIcdFormField}
                                          />
                                       </Form.Item>
                                       <Form.Item
                                          label="Хавсарсан оношийн код"
                                          name={['diagnosis', 'icdAddCode']}
                                          className="mb-0"
                                       >
                                          <Select
                                             allowClear
                                             showSearch
                                             onClear={() => {
                                                hicsDiagnosisForm.resetFields([['diagnosis', 'icdAddName']]);
                                             }}
                                             filterOption={(input, option) =>
                                                option.label.toLowerCase().includes(input.toLowerCase())
                                             }
                                             onChange={(code) => {
                                                const { diagnose } = patientDiagnosis?.find(
                                                   ({ diagnose }) => diagnose.code === code
                                                );
                                                hicsDiagnosisForm.setFieldValue(
                                                   ['diagnosis', 'icdAddName'],
                                                   diagnose?.nameMn
                                                );
                                             }}
                                             options={patientDiagnosis.map(({ diagnose }) => ({
                                                value: diagnose.code,
                                                label: diagnose.code
                                             }))}
                                          />
                                       </Form.Item>
                                       <DualDiagnose />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                       <Form.Item
                                          label="Оношийн хамааралтай бүлэг"
                                          name={['diagnosis', 'drgCode']}
                                          rules={[
                                             {
                                                required: true,
                                                message: 'Оношийн хамааралтай бүлэг'
                                             }
                                          ]}
                                       >
                                          <Select
                                             allowClear
                                             onClear={() => {
                                                hicsDiagnosisForm.resetFields([
                                                   ['diagnosis', 'drgTypeCode'],
                                                   ['amount', 'amountCit'],
                                                   ['amount', 'amountHi'],
                                                   ['amount', 'amountTotal']
                                                ]);
                                             }}
                                             popupClassName="whitespace-normal"
                                             onSelect={getHicsCostList}
                                             options={drgCodes.map((drgCode) => ({
                                                value: drgCode.drgCode,
                                                label: drgCode.drgName
                                             }))}
                                          />
                                       </Form.Item>
                                       <div className="rounded-md bg-[#f0e4e4] col-span-2">
                                          <div className="flex flex-row gap-1 p-2">
                                             <Form.Item label="Нийт дүн" name={['amount', 'amountHi']}>
                                                <InputNumber disabled />
                                             </Form.Item>
                                             <Form.Item label="Даатгалаас" name={['amount', 'amountHi']}>
                                                <InputNumber disabled />
                                             </Form.Item>
                                             <Form.Item label="Иргэн" name={['amount', 'amountCit']}>
                                                <InputNumber disabled />
                                             </Form.Item>
                                          </div>
                                       </div>
                                    </div>
                                    <Form.Item label="" name={['diagnosis', 'icdCodeName']} hidden>
                                       <Input />
                                    </Form.Item>
                                    <Form.Item label="" name={['diagnosis', 'drgTypeCode']} hidden>
                                       <InputNumber />
                                    </Form.Item>
                                    <Form.Item label="" name={['diagnosis', 'icdGroup']} hidden>
                                       <InputNumber />
                                    </Form.Item>
                                    <Form.Item label="" name={['diagnosis', 'icdGroupName']} hidden>
                                       <InputNumber />
                                    </Form.Item>
                                    <Form.Item label="" name={['diagnosis', 'icdAddName']} hidden>
                                       <Input />
                                    </Form.Item>
                                    <Form.Item label="" name={['diagnosis', 'icd9Name']} hidden>
                                       <Input />
                                    </Form.Item>
                                    {/* amount */}
                                    <Form.Item label="" name={['amount', 'amountCit']} hidden>
                                       <InputNumber />
                                    </Form.Item>
                                    <Form.Item label="" name={['amount', 'amountHi']} hidden>
                                       <InputNumber />
                                    </Form.Item>
                                    <Form.Item label="" name={['amount', 'amountTotal']} hidden>
                                       <InputNumber />
                                    </Form.Item>
                                    {/* amount */}
                                    <div className="grid grid-cols-2 gap-2">
                                       <Form.Item label="ICD-9 код" name={['diagnosis', 'icd9Code']}>
                                          <Select
                                             allowClear
                                             showSearch
                                             onClear={() => {
                                                hicsDiagnosisForm.resetFields([
                                                   ['diagnosis', 'icd9Code'],
                                                   ['diagnosis', 'icd9Name']
                                                ]);
                                             }}
                                             onSelect={(value) => {
                                                const current = patientDiagnosis?.find(
                                                   (diagnose) => diagnose.type === 1 && diagnose.diagnose.code === value
                                                );
                                                hicsDiagnosisForm.setFieldValue(
                                                   ['diagnosis', 'icd9Name'],
                                                   current?.diagnose?.nameMn
                                                );
                                             }}
                                             filterOption={(input, option) =>
                                                option.label.toLowerCase().includes(input.toLowerCase())
                                             }
                                             options={patientDiagnosis
                                                ?.filter((diagnose) => diagnose.type === 1)
                                                ?.map(({ diagnose }) => ({
                                                   value: diagnose.code,
                                                   label: diagnose.code
                                                }))}
                                          />
                                       </Form.Item>
                                       <Form.Item
                                          label="Хүндрэлийн зэрэг"
                                          name={['diagnosis', 'abcType']}
                                          className="mb-0"
                                          rules={[
                                             {
                                                required: true,
                                                message: 'Хүндрэлийн зэрэг заавал'
                                             }
                                          ]}
                                       >
                                          <Select
                                             options={[
                                                {
                                                   label: 'A',
                                                   value: 'A'
                                                },
                                                {
                                                   label: 'B',
                                                   value: 'B'
                                                },
                                                {
                                                   label: 'C',
                                                   value: 'C'
                                                }
                                             ]}
                                          />
                                       </Form.Item>
                                    </div>
                                 </Form>
                              </div>
                           </div>
                        ) : null}
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
};
export default NewDiagnose;
