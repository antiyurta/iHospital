import React, { useEffect, useState } from 'react';
import {
   Button,
   Card,
   ConfigProvider,
   DatePicker,
   Form,
   Input,
   InputNumber,
   Modal,
   Select,
   Table,
   message
} from 'antd';
import { localMn, openNofi } from '../../common';
import { CloseOutlined, EditOutlined, RollbackOutlined } from '@ant-design/icons';
import MonitorCriteria from './MonitorCriteria';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
//comp
import { ListPatientInfo } from '../../ListInjection';
//api
import insuranceApi from '@ApiServices/healt-insurance/insurance';
import healtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';

//request service uud

const { RangePicker } = DatePicker;
const { Option } = Select;
const { TextArea } = Input;

const basicRule = [
   {
      required: true,
      message: 'Заавал'
   }
];

function InsuranceDocterList() {
   const [cancelForm] = Form.useForm();
   const [editForm] = Form.useForm();
   const [data, setData] = useState([]);
   const [meta, setMeta] = useState({});
   const [filterForm] = Form.useForm();
   const [isLoading, setIsLoading] = useState(false);
   const [hicsGroups, setHicsGroups] = useState([]);
   const [hicsService, setHicsService] = useState([]);
   const [isOpenCancelModal, setOpenCancelModal] = useState(false);
   const [isOpenEditModal, setIsOpenEditModal] = useState(false);
   //
   const getList = async (page, pageSize, filterValues) => {
      setIsLoading(true);
      const params = {
         page: page,
         limit: pageSize
      };
      if (filterValues) {
         if (filterValues.date) {
            const start = moment(filterValues.date[0]).set({ hour: 0, minute: 0, second: 0 });
            const end = moment(filterValues.date[1]).set({ hour: 23, minute: 59, second: 59 });
            params.fromAt = moment(start).format('YYYY-MM-DD HH:mm');
            params.endAt = moment(end).format('YYYY-MM-DD HH:mm');
         }
         params.groupId = filterValues.groupId;
         params.serviceType = filterValues.serviceType;
         params.patient = filterValues.patient;
         params.process = filterValues.process;
      }
      await insuranceApi
         .getAllHicsSeals(params)
         .then(({ data }) => {
            if (data.success) {
               setData(data.response.data);
               setMeta(data.response.meta);
            }
         })
         .finally(setIsLoading(false));
   };
   const getById = async (data) => {
      editForm.setFieldsValue({
         patientRegno: data.patient.registerNumber,
         serviceNumber: data.hicsSealCode,
         drgCode: data.diagnosis.drgCode,
         icdCode: data.diagnosis.icdCode,
         icd9Code: data.diagnosis.icd9Code
      });
      setIsOpenEditModal(true);
   };
   const getCancelInsurance = async (values) => {
      await insuranceApi
         .requestHicsSealCancel(values.hicsSealId, {
            reason: values.reason
         })
         .then(({ data }) => {
            if (data.code === 201 || data.code === 200) {
               openNofi(data.code === 200 ? 'success' : 'info', 'Даатгал буцаалт', data.description);
            }
            cancelForm.resetFields();
            setOpenCancelModal(false);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            // getList(1, 10, filterForm.getFieldsValue());
         });
   };
   const getRepairInsurance = async (values) => {
      await healtInsuranceApi.postRepair(values).then((response) => {
         if (response.data.code === 400) {
            openNofi('warning', 'Анхааруулга', response.data.description);
         } else if (response.data.code === 200) {
            openNofi('warning', 'Анхааруулга', response.data.description);
            setIsOpenEditModal(false);
         }
      });
   };
   const getHicsGroups = async () => {
      await healtInsuranceApi
         .getHicsServiceGroup()
         .then(({ data }) => {
            if (data.code == 200) {
               console.log('dada', data);
               setHicsGroups(data.result);
            } else {
               message.warn(data.description);
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const getHicsService = async () => {
      await healtInsuranceApi.getHicsService().then(({ data }) => {
         setHicsService(data.result);
      });
   };
   const confirmPackage = async (row) => {
      await insuranceApi.requestHicsSealConfirm(row.id).then(({ data }) => {
         console.log('=========>', data);
      });
   };
   const getInfoProcess = (process) => {
      if (process === 0) {
         return 'Битүүмж үүсээгүй байна.';
      } else if (process === 1) {
         return 'Битүүмж амжилттай үүссэн байна.';
      } else if (process === 2) {
         return 'Төлбөрийн мэдээлэл илгээгүй байна.';
      } else if (process === 3) {
         return 'Төлбөрийн мэдээлэл илгээсэн байна.';
      } else if (process === 4) {
         return 'Буцаалт хийгдсэн.';
      }
   };
   const columns = [
      {
         title: 'Эхэлсэн огноо',
         dataIndex: 'startAt',
         width: 100,
         render: (text) => {
            if (text) {
               return moment(text).format('YYYY-MM-DD hh:mm:ss');
            }
            return;
         }
      },
      {
         title: 'Дууссан огноо',
         dataIndex: 'endAt',
         width: 100,
         render: (text) => {
            if (text) {
               return moment(text).format('YYYY-MM-DD hh:mm:ss');
            }
            return;
         }
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
         width: 170,
         render: (patient) => <ListPatientInfo patientData={patient} />
      },
      {
         title: 'Тасаг',
         children: [
            {
               title: 'Нэр',
               width: 150,
               dataIndex: ['department', 'name']
            },
            {
               title: 'Эмч',
               dataIndex: 'patient',
               width: 170,
               render: (patient) => <ListPatientInfo patientData={patient} />
            }
         ]
      },
      {
         title: 'Хугацаа',
         dataIndex: 'startAt',
         render: (text) => {
            const date1 = new Date(text);
            const date2 = new Date();
            var delta = Math.abs(date2 - date1) / 1000;
            var days = Math.floor(delta / 86400);
            delta -= days * 86400;
            var hours = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;
            var minutes = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;
            if (days * 24 + hours > 48) {
               return 'Засах хугацаа дууссан';
            }
            return `${hours + days * 24}:${minutes}`;
         }
      },
      {
         width: 100,
         title: 'Үйлчилгээний нэр',
         dataIndex: 'hicsServiceId',
         render: (text) => hicsService.find((service) => service.id === text)?.name
      },
      {
         title: 'Урсгал',
         dataIndex: 'process',
         render: (text) => {
            return getInfoProcess(text);
         }
      },
      {
         title: '',
         render: (_text, row) => {
            return <MonitorCriteria props={{ serviceId: row.serviceId, serviceType: row.serviceType }} />;
         }
      },
      {
         title: 'Засах',
         dataIndex: 'process',
         render: (process, row) => {
            if (process === 3) {
               return <Button onClick={() => getById(row)} icon={<EditOutlined style={{ color: 'blue' }} />} />;
            }
         }
      },
      {
         title: 'Цуцлах',
         dataIndex: 'process',
         render: (process, row) => {
            if (process === 1 || process === 2 || process === 3) {
               return (
                  <Button
                     onClick={() => {
                        cancelForm.setFieldsValue({
                           hicsSealId: row.id,
                           reason: null
                        });
                        setOpenCancelModal(true);
                     }}
                     icon={<RollbackOutlined style={{ color: 'red' }} />}
                  />
               );
            }
         }
      },
      {
         title: 'Дуусгах',
         dataIndex: 'hicsServiceId',
         render: (hicsServiceId, row) => {
            if (hicsServiceId === 20120) {
               return (
                  <Button
                     danger
                     icon={<CloseOutlined />}
                     onClick={() => {
                        confirmPackage(row);
                     }}
                  />
               );
            }
         }
      }
   ];
   useEffect(() => {
      getList(1, 10, null);
      getHicsService();
      getHicsGroups();
   }, []);
   return (
      <>
         <div className="w-full h-screen bg-[#f5f6f7] p-3">
            <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
               <div className="p-3">
                  <Form form={filterForm}>
                     <div className="grid grid-cols-4 gap-3">
                        <Form.Item label="Огноо" name="date">
                           <RangePicker locale={mnMN} />
                        </Form.Item>
                        <Form.Item label="Бүлэг" name="groupId" className="mb-0">
                           <Select
                              allowClear
                              options={hicsGroups.map((hicsGroup) => ({ value: hicsGroup.id, label: hicsGroup.name }))}
                           />
                        </Form.Item>
                        <Form.Item label="Өвчтөн" tooltip="Регистр, Овог, Нэр-р хайх" name="patient" className="mb-0">
                           <Input />
                        </Form.Item>
                        <Form.Item label="Урсгал" name="process" className="mb-0">
                           <Select
                              allowClear
                              options={[
                                 { value: 0, label: 'Битүүмж үүсээгүй байна.' },
                                 { value: 1, label: 'Битүүмж амжилттай үүссэн байна.' },
                                 { value: 2, label: 'Төлбөрийн мэдээлэл илгээгүй байна.' },
                                 { value: 3, label: 'Төлбөрийн мэдээлэл илгээсэн байна.' },
                                 { value: 4, label: 'Цуцалсан хийгдсэн.' }
                              ]}
                           />
                        </Form.Item>
                     </div>
                  </Form>
                  <div className="flow-root pt-3">
                     <div className="float-right">
                        <Button
                           loading={isLoading}
                           onClick={() => getList(1, 10, filterForm.getFieldsValue())}
                           type="primary"
                        >
                           Хайх
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
            <Card bordered={false} className="header-solid max-h-max rounded-md" title="Жагсаалт">
               <ConfigProvider locale={localMn()}>
                  <Table
                     rowKey={'id'}
                     bordered
                     loading={isLoading}
                     columns={columns}
                     dataSource={data}
                     pagination={{
                        position: ['bottomCenter'],
                        size: 'small',
                        current: meta.page,
                        total: meta.itemCount,
                        showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                        pageSize: meta.limit,
                        showSizeChanger: true,
                        pageSizeOptions: ['5', '10', '20', '50'],
                        showQuickJumper: true,
                        onChange: (page, pageSize) => getList(page, pageSize, filterForm.getFieldsValue())
                     }}
                  />
               </ConfigProvider>
            </Card>
         </div>
         <Modal
            title="Цуцлах"
            open={isOpenCancelModal}
            onCancel={() => setOpenCancelModal(false)}
            onOk={() => {
               cancelForm.validateFields().then(getCancelInsurance);
            }}
         >
            <Form form={cancelForm} layout="vertical">
               <Form.Item hidden name={'hicsSealId'}>
                  <InputNumber disabled={true} />
               </Form.Item>
               <Form.Item
                  name={'reason'}
                  label="Цуцлах болсон шалтгаан"
                  rules={[
                     {
                        required: true,
                        message: 'Цуцлах болсон шалтгаан заавал'
                     },
                     {
                        min: 30,
                        message: 'Үйлчилгээг цуцлаж байгаа шалтгаан 30-с багагүй'
                     }
                  ]}
               >
                  <TextArea />
               </Form.Item>
            </Form>
         </Modal>
         <Modal
            title="Битүүмж засах"
            open={isOpenEditModal}
            onCancel={() => setIsOpenEditModal(false)}
            onOk={() => {
               editForm.validateFields().then((values) => {
                  getRepairInsurance(values);
               });
            }}
         >
            <Form form={editForm} layout="vertical">
               <div className="flex flex-col gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <div className="flex flex-col gap-3">
                           <div className="flex justify-between">
                              <p>Үйлчилгээний бүртгэлийн дугаар:</p>
                              <Form.Item noStyle shouldUpdate>
                                 {() => {
                                    return (
                                       <p
                                          style={{
                                             fontWeight: 600
                                          }}
                                       >
                                          {editForm.getFieldValue('serviceNumber')}
                                       </p>
                                    );
                                 }}
                              </Form.Item>
                           </div>
                           <div className="flex justify-between">
                              <p>Иргэний регистр:</p>
                              <Form.Item noStyle shouldUpdate>
                                 {() => {
                                    return (
                                       <p
                                          style={{
                                             fontWeight: 600
                                          }}
                                       >
                                          {editForm.getFieldValue('patientRegno')}
                                       </p>
                                    );
                                 }}
                              </Form.Item>
                           </div>
                           <div className="flex justify-between">
                              <p>ОХБ-ийн дугаар:</p>
                              <Form.Item noStyle shouldUpdate>
                                 {() => {
                                    return (
                                       <p
                                          style={{
                                             fontWeight: 600
                                          }}
                                       >
                                          {editForm.getFieldValue('drgCode')}
                                       </p>
                                    );
                                 }}
                              </Form.Item>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <Form.Item label="ICD 10 Код:" name="icdCode" rules={basicRule}>
                  <Input />
               </Form.Item>
               <Form.Item label="ICD 9 Код:" name="icd9Code" rules={basicRule}>
                  <Input />
               </Form.Item>
               <Form.Item label="Засварлаж буй шалтгаан:" name="repairDesc" rules={basicRule}>
                  <TextArea />
               </Form.Item>
            </Form>
         </Modal>
      </>
   );
}
export default InsuranceDocterList;
