import React, { useEffect, useState, useRef } from 'react';
import { MinusOutlined, PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import {
   Button,
   Input,
   InputNumber,
   Modal,
   Collapse,
   Col,
   Row,
   Radio,
   Divider,
   TimePicker,
   Spin,
   DatePicker,
   Select,
   Table,
   Form
} from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, Post } from '../../../comman';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
const { RangePicker } = DatePicker;

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const { Option } = Select;
function BST({ PatientId, ListId }) {
   const today = new Date();
   const [form] = Form.useForm();
   const token = useSelector(selectCurrentToken);
   const [isOpenBSTModal, setIsOpenBSTModal] = useState(false);
   const [unitList, setUnitList] = useState([]);
   const [lineBSTData, setLineBSTData] = useState([]);
   const [lineLabels, setLineLabels] = useState([]);
   const [meta, setMeta] = useState({});
   const [spinner, setSpinner] = useState(false);
   const [start, setStart] = useState('');
   const [end, setEnd] = useState('');
   const checkNumber = (event) => {
      var charCode = event.charCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
         event.preventDefault();
      } else {
         return true;
      }
   };
   const options = {
      responsive: true,
      plugins: {
         legend: {
            display: true,
            position: 'bottom'
         },
         title: {
            display: true,
            position: 'top',
            text: 'VS - ын диаграмм'
         }
      },
      scales: {
         y: {
            title: {
               display: true,
               text: 'Хэмжих нэгж(ммоль/л)'
            }
         }
      }
   };
   const cookInfo = (text) => {
      if (text === 1) {
         return 'Өлөн үед';
      } else if (text === 2) {
         return 'Хоолны өмнө';
      } else if (text === 3) {
         return 'Хоолны дараа';
      } else {
         return 'Ачаалалтай үед';
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
         title: 'Хэмжсэн цаг',
         dataIndex: 'createdAt',
         render: (text) => {
            return moment(text).format('HH:mm');
         }
      },
      {
         title: 'Сахарын хэмжээ',
         dataIndex: 'sugarAmount'
      },
      {
         title: 'Нэгж',
         dataIndex: 'measurement'
      },
      {
         title: 'Хэзээ / хоолны',
         dataIndex: 'whereCook',
         render: (text) => {
            return cookInfo(text);
         }
      },
      {
         title: 'Сувилагч',
         render: (_, row) => {
            return row.createdLastName.substring(0, 1) + '.' + row.createdFirstName;
         }
      }
   ];
   const getBSTDatas = async (page, pageSize, start, end) => {
      setSpinner(true);
      start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            patientId: PatientId,
            startDate: moment(start).format('YYYY-MM-DD HH:mm'),
            endDate: moment(end).format('YYYY-MM-DD HH:mm')
         }
      };
      setStart(start);
      setEnd(end);
      const response = await Get('inpatient/bst', token, conf);
      if (response.data.length <= 7) {
         var demoLineLabels = [];
         var demoBSTDatas = [];
         response.data.map((data) => {
            demoLineLabels.push(moment(data.createdAt).format('YYYY-MM-DD HH:mm'));
            demoBSTDatas.push(data.sugarAmount);
         });
         setLineLabels(demoLineLabels);
         setLineBSTData(demoBSTDatas);
      } else {
      }
      setUnitList(response.data);
      setMeta(response.meta);
      setSpinner(false);
   };
   const onFinish = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      values['patientId'] = PatientId;
      const response = await Post('inpatient/bst', token, conf, values);
      if (response === 201) {
         getBSTDatas(1, 10, start, end);
         setIsOpenBSTModal(false);
      }
   };
   const data = {
      labels: lineLabels.reverse(),
      datasets: [
         {
            label: 'BST',
            data: lineBSTData.reverse(),
            borderColor: ['#c51ceb'],
            backgroundColor: '#c51ceb',
            borderWidth: 1
         }
      ]
   };
   useEffect(() => {
      getBSTDatas(1, 10, today, today);
   }, []);
   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full p-1">
               <div className="float-left">
                  <RangePicker locale={mnMN} />
               </div>
            </div>
            <div className="w-full p-1">
               <div className="flex flex-wrap">
                  <div className="md:w-1/2 sm:w-full p-1">
                     <Line options={options} data={data} />
                  </div>
                  <div className="md:w-1/2 sm:w-full p-1">
                     <div className="flex flex-wrap">
                        <div className="w-full p-1">
                           <div className="float-left">
                              <Button
                                 className="add-button"
                                 onClick={() => {
                                    setIsOpenBSTModal(true);
                                    form.resetFields();
                                 }}
                              >
                                 Нэмэх
                              </Button>
                           </div>
                           <div className="float-right">
                              <Button title="Сэргээх" type="primary" onClick={() => getBSTDatas(1, 10, start, end)}>
                                 <ReloadOutlined spin={spinner} />
                              </Button>
                           </div>
                        </div>
                     </div>
                     <Table
                        bordered
                        rowKey={'id'}
                        className="whitespace-pre-wrap"
                        locale={{ emptyText: 'Мэдээлэл байхгүй' }}
                        loading={spinner}
                        columns={columns}
                        dataSource={unitList}
                        pagination={{
                           simple: true,
                           pageSize: 20,
                           total: meta.itemCount,
                           current: meta.page,
                           onChange: (page, pageSize) => getBSTDatas(page, pageSize, start, end)
                        }}
                     />
                  </div>
               </div>
            </div>
            <Modal
               open={isOpenBSTModal}
               title="BST бичих"
               onCancel={() => setIsOpenBSTModal(false)}
               onOk={() => {
                  form.validateFields().then((values) => {
                     onFinish(values);
                  });
               }}
               cancelText="Болих"
               okText="Хадгалах"
               width={'11cm'}
            >
               <Form form={form} layout="vertical">
                  <Form.Item label="Сахарын хэмжээ" name="sugarAmount" rules={[{ required: true, message: 'Заавал' }]}>
                     <InputNumber onKeyPress={checkNumber} />
                  </Form.Item>
                  <Form.Item label="Нэгж" name="measurement" rules={[{ required: true, message: 'Заавал' }]}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Хэзээ/хоолны" name="whereCook" rules={[{ required: true, message: 'Заавал' }]}>
                     <Select>
                        <Option value={0}>Өлөн үед</Option>
                        <Option value={1}>Хоолны өмнө</Option>
                        <Option value={2}>Хоолны дараа</Option>
                        <Option value={3}>Ачаалалтай үед</Option>
                     </Select>
                  </Form.Item>
               </Form>
            </Modal>
         </div>
      </>
   );
}

export default BST;
