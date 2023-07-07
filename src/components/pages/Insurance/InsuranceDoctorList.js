import React, { useEffect, useState } from 'react';
import jwtInterceopter from '../../jwtInterceopter';
import { Button, Card, ConfigProvider, DatePicker, Form, Input, Modal, Progress, Select, Table } from 'antd';
import { localMn, numberToCurrency, openNofi } from '../../comman';
import { EditOutlined, RollbackOutlined } from '@ant-design/icons';
import MonitorCriteria from './MonitorCriteria';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Option } = Select;
const { TextArea } = Input;

function InsuranceDocterList() {
   const [returnForm] = Form.useForm();
   const [data, setData] = useState([]);
   const [meta, setMeta] = useState({});
   const [filterForm] = Form.useForm();
   const [isLoading, setIsLoading] = useState(false);
   const [icdGroup, setIcdGroup] = useState([]);
   const [isOpenReturnModal, setIsOpenReturnModal] = useState(false);
   //
   const getList = async (page, pageSize, filterValues) => {
      setIsLoading(true);
      const conf = {
         params: {
            page: page,
            limit: pageSize
         }
      };
      if (filterValues) {
         if (filterValues.date) {
            const start = moment(filterValues.date[0]).set({ hour: 0, minute: 0, second: 0 });
            const end = moment(filterValues.date[1]).set({ hour: 23, minute: 59, second: 59 });
            conf.params.startDate = moment(start).format('YYYY-MM-DD HH:mm');
            conf.params.endDate = moment(end).format('YYYY-MM-DD HH:mm');
         }
         conf.params.icdGroup = filterValues.icdGroup;
         conf.params.serviceType = filterValues.serviceType;
         conf.params.firstname = filterValues.firstname;
         conf.params.lastname = filterValues.lastname;
         conf.params.regno = filterValues.regno;
         conf.params.process = filterValues.process;
         conf.params.resCode = filterValues.resCode;
      }
      jwtInterceopter
         .get('insurance-seal', conf)
         .then((response) => {
            setData(response.data.response.data);
            setMeta(response.data.response.meta);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const returnInsurance = (serviceNumber) => {
      returnForm.setFieldsValue({
         serviceNumber: serviceNumber
      });
      setIsOpenReturnModal(true);
   };
   const getReturnInsurance = async (values) => {
      await jwtInterceopter
         .post('health-insurance/cancel-service', values)
         .then((response) => {
            console.log(response);
            if (response.data.code === 201 || response.data.code === 200) {
               openNofi(response.data.code === 200 ? 'success' : 'info', 'Даатгал буцаалт', response.data.description);
            }
            returnForm.resetFields();
            setIsOpenReturnModal(false);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            getList(1, 10, filterForm.getFieldsValue());
         });
   };
   const getIcdGroup = async () => {
      await jwtInterceopter
         .get('insurance/hics-service-group')
         .then((response) => {
            setIcdGroup(response.data.data);
         })
         .catch((error) => {
            console.log(error);
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
      } else {
         return 'Буцаалт хийгдсэн.';
      }
   };
   const columns = [
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD');
         }
      },
      {
         title: 'Тасаг',
         dataIndex: 'departName'
      },
      {
         title: 'Овог',
         dataIndex: 'patientLastname'
      },
      {
         title: 'Нэр',
         dataIndex: 'patientFirstname'
      },
      {
         title: 'Регистр',
         dataIndex: 'patientRegno'
      },
      {
         title: 'Хувь',
         dataIndex: 'gpa',
         render: (text) => {
            return `${text}%`;
         }
      },
      {
         title: 'Үйлчилгээний нэр',
         dataIndex: 'icdGroupName'
      },
      {
         title: 'Хөнгөлөлт үнэ',
         dataIndex: 'discountAmount',
         render: (text) => {
            return numberToCurrency(text);
         }
      },
      {
         title: 'Нийт үнэ',
         dataIndex: 'totalAmount',
         render: (text) => {
            return numberToCurrency(text);
         }
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
         title: '',
         dataIndex: 'process',
         render: (text) => {
            if (text === 2) {
               return <Button icon={<EditOutlined style={{ color: 'blue' }} />} />;
            }
         }
      },
      {
         title: '',
         dataIndex: 'process',
         render: (text, row) => {
            if (text === 1 || text === 2 || text === 3) {
               return (
                  <Button
                     onClick={() => returnInsurance(row.hicsServiceNo)}
                     icon={<RollbackOutlined style={{ color: 'red' }} />}
                  />
               );
            }
         }
      }
   ];
   useEffect(() => {
      getList(1, 10, null);
      getIcdGroup();
   }, []);
   return (
      <>
         <div className="flex flex-col gap-3">
            <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
               <div className="p-3">
                  <Form form={filterForm}>
                     <div className="grid grid-cols-4 gap-3">
                        <Form.Item label="Огноо" name="date">
                           <RangePicker locale={mnMN} />
                        </Form.Item>
                        <Form.Item label="Бүлэг" name="icdGroup" className="mb-0">
                           <Select allowClear>
                              {icdGroup?.map((group, index) => {
                                 return (
                                    <Option key={index} value={group.id}>
                                       {group.name}
                                    </Option>
                                 );
                              })}
                           </Select>
                        </Form.Item>
                        <Form.Item label="Төрөл" name="serviceType" className="mb-0">
                           <Select allowClear>
                              <Option value={0}>Шинжилгээ</Option>
                              <Option value={1}>Оношилгоо</Option>
                              <Option value={2}>Эмчилгээ</Option>
                              <Option value={3}>Мэс засал</Option>
                              <Option value={4}>Дуран</Option>
                              <Option value={5}>Үзлэг</Option>
                              <Option value={6}>Хэвтэн</Option>
                              <Option value={7}>Багц</Option>
                              <Option value={8}>Эм</Option>
                              <Option value={9}>Өрөө</Option>
                              <Option value={10}>Утаснаас</Option>
                           </Select>
                        </Form.Item>
                        <Form.Item label="РД Дугаар" name="regno" className="mb-0">
                           <Input />
                        </Form.Item>
                        <Form.Item label="Овог" name="lastname" className="mb-0">
                           <Input allowClear />
                        </Form.Item>
                        <Form.Item label="Нэр" name="firstname" className="mb-0">
                           <Input allowClear />
                        </Form.Item>
                        <Form.Item label="Урсгал" name="process" className="mb-0">
                           <Select allowClear>
                              <Option value={0}>Битүүмж үүсээгүй байна.</Option>
                              <Option value={1}>Битүүмж амжилттай үүссэн байна.</Option>
                              <Option value={2}>Төлбөрийн мэдээлэл илгээгүй байна.</Option>
                              <Option value={3}>Төлбөрийн мэдээлэл илгээсэн байна.</Option>
                              <Option value={4}>Буцаалт хийгдсэн.</Option>
                           </Select>
                        </Form.Item>
                        <Form.Item label="RКод" name="resCode" className="mb-0">
                           <Select allowClear>
                              <Option value={200}>Амжиллтай</Option>
                              <Option value={400}>Амжилтгүй</Option>
                           </Select>
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
                     rowClassName={(record, _index) => {
                        if (record.process === 4) {
                           return 'bg-red-400';
                        } else if (record.gpa) {
                           const value = Math.floor(record.gpa / 10);
                           // return 'bg-color-range-5';
                           return `bg-color-range-${value}`;
                        }
                     }}
                     pagination={{
                        position: ['bottomCenter', 'topCenter'],
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
            title="Буцаах"
            open={isOpenReturnModal}
            onCancel={() => setIsOpenReturnModal(false)}
            onOk={() => {
               returnForm.validateFields().then((values) => {
                  getReturnInsurance(values);
               });
            }}
         >
            <Form form={returnForm} layout="vertical">
               <div className="hidden">
                  <Form.Item name={'serviceNumber'}>
                     <Input disabled={true} />
                  </Form.Item>
               </div>
               <Form.Item
                  name={'reason'}
                  label="Буцаах болсон шалтгаан"
                  rules={[
                     {
                        required: true,
                        message: 'Буцаах шалтгаан заавал'
                     }
                  ]}
               >
                  <TextArea />
               </Form.Item>
            </Form>
         </Modal>
      </>
   );
}
export default InsuranceDocterList;
