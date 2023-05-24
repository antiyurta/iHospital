import React, { useEffect, useState } from 'react';
import jwtInterceopter from '../../jwtInterceopter';
import { Button, Card, ConfigProvider, DatePicker, Form, Input, Modal, Progress, Table } from 'antd';
import { localMn, numberToCurrency } from '../../comman';
import { CheckCircleOutlined, EditOutlined, ExclamationCircleOutlined, EyeOutlined } from '@ant-design/icons';
import MonitorCriteria from './MonitorCriteria';
import mnMN from 'antd/es/calendar/locale/mn_MN';

const { RangePicker } = DatePicker;

function InsuranceDocterList() {
   const [data, setData] = useState([]);
   const [meta, setMeta] = useState({});
   const [filterForm] = Form.useForm();
   const [isLoading, setIsLoading] = useState(false);
   //
   const [monitorData, setMonitorData] = useState({});
   //
   const getList = async (page, pageSize, filterValues) => {
      setIsLoading(true);
      console.log(filterValues);
      const conf = {
         params: {
            page: page,
            limit: pageSize
         }
      };
      if (filterValues) {
         const start = moment(filterValues.date[0]).set({ hour: 0, minute: 0, second: 0 });
         const end = moment(filterValues.date[1]).set({ hour: 23, minute: 59, second: 59 });
         conf.params.startDate = moment(start).format('YYYY-MM-DD HH:mm');
         conf.params.endDate = moment(end).format('YYYY-MM-DD HH:mm');
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
   const getInfoProcess = (process) => {
      if (process === 0) {
         return 'Битүүмж үүсээгүй байна.';
      } else if (process === 1) {
         return 'Битүүмж амжилттай үүссэн байна.';
      } else if (process === 2) {
         return 'Төлбөрийн мэдээлэл илгээгүй байна.';
      } else {
         return 'Төлбөрийн мэдээлэл илгээсэн байна.';
      }
   };
   const columns = [
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
         dataIndex: 'gpa'
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
      }
   ];
   useEffect(() => {
      getList(1, 10, null);
   }, []);
   return (
      <div className="flex flex-col gap-3">
         <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
            <div className="p-3">
               <Form form={filterForm}>
                  <div className="grid grid-cols-4 gap-3">
                     <Form.Item label="Огноо" name="date">
                        <RangePicker locale={mnMN} />
                     </Form.Item>
                     <Form.Item label="Бүлэг" name="icdGroup" className="mb-0">
                        <Input />
                     </Form.Item>
                     <Form.Item label="Төрөл" name="serviceType" className="mb-0">
                        <Input />
                     </Form.Item>
                     <Form.Item label="РД Дугаар" name="regno" className="mb-0">
                        <Input />
                     </Form.Item>
                     <Form.Item label="Овог" name="lastname" className="mb-0">
                        <Input />
                     </Form.Item>
                     <Form.Item label="Нэр" name="firstname" className="mb-0">
                        <Input />
                     </Form.Item>
                     <Form.Item label="Урсгал" name="process" className="mb-0">
                        <Input />
                     </Form.Item>
                     <Form.Item label="RКод" name="resCode" className="mb-0">
                        <Input />
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
                     position: ['bottomCenter', 'topCenter'],
                     size: 'small',
                     current: meta.page,
                     total: meta.itemCount,
                     showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                     pageSize: meta.limit,
                     showSizeChanger: true,
                     pageSizeOptions: ['5', '10', '20', '50'],
                     showQuickJumper: true,
                     onChange: (page, pageSize) => getList(page, pageSize)
                  }}
               />
            </ConfigProvider>
         </Card>
      </div>
   );
}
export default InsuranceDocterList;
