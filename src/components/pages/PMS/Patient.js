import React, { useEffect, useState } from 'react';
import { Button, Space, Form, Input, Modal, Card, Descriptions, Table, Empty, ConfigProvider } from 'antd';
import { EyeOutlined, EditOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Get, openNofi, Patch, Post } from '../../comman';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import mnMN from 'antd/es/locale/mn_MN';
import UPatient from './Urgent/UPatient';
import patientApi from '../../../services/pms/patient.api';
import { selectHospitalIsXyp } from '../../../features/hospitalReducer';
import PatientSupport from './patientSupport';
import dayjs from 'dayjs';
const { Search } = Input;

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Patient() {
   const token = useSelector(selectCurrentToken);
   const [isGlobalDb, setIsGlobalDb] = useState(false);
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [isViewModalVisible, setIsViewModalVisible] = useState(false);
   const [isConfirmLoading, setIsConfirmLoading] = useState(false);
   const [spinner, setSpinner] = useState(false);
   const [editMode, setEditMode] = useState(false);
   const [pIndex, setPindex] = useState('');
   const [pValue, setPvalue] = useState('');
   const [id, setId] = useState([]);
   const [data, setData] = useState([]);
   const [meta, setMeta] = useState([]);
   const [view, setView] = useState([]);
   const [citizens, setCitizens] = useState([]);
   const [provices, setProvices] = useState([]);
   const [towns, setTowns] = useState([]);
   // urgent
   const [urgentForm] = Form.useForm();
   const [urgentEditMode, setUrgentEditMode] = useState(false);
   const [isOpenUrgent, setIsOpenUrgent] = useState(false);

   const config = {
      headers: {
         Authorization: `Bearer ${token}`,
         'x-api-key': API_KEY
      },
      params: {
         page: 1,
         limit: 5
      }
   };
   const getData = async (page, pageSize, value, index) => {
      setSpinner(true);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize
         }
      };
      if ((value, index)) {
         conf.params[index] = value;
         setPindex(index);
         setPvalue(value);
      }
      const response = await Get('pms/patient', token, conf);
      setData(response.data);
      setMeta(response.meta);
      setSpinner(false);
   };
   const showModal = () => {
      setEditMode(false);
      setIsModalVisible(true);
   };
   const showModalUrgent = () => {
      setIsOpenUrgent(true);
      urgentForm.resetFields();
      setUrgentEditMode(false);
   };
   const viewModal = async (id) => {
      await patientApi
         .getById(id)
         .then((response) => {
            setView(response.data.response);
         })
         .catch((error) => {
            console.log(error);
         });
      setIsViewModalVisible(true);
   };
   const editModal = async (id) => {
      setId(id);
      setEditMode(true);
      setIsModalVisible(true);
   };
   const handleCancel = () => {
      setIsModalVisible(false);
   };
   const onFinishUrgent = async (data) => {
      data['isEmergency'] = true;
      data['isGlobalDb'] = false;
      await patientApi.post(data).then((response) => {
         console.log(response);
         if (response.status === 201) {
            setIsOpenUrgent(false);
            openNofi('success', 'Амжиллтай', 'Амжиллтай хадгалагдсан');
            getData(1, 20);
         }
      });
   };
   const onFinish = async (data) => {
      setIsConfirmLoading(true);
      data['isGlobalDb'] = isGlobalDb;
      data['isEmergency'] = false;
      const conf = {
         headers: {},
         params: {}
      };
      if (data?.contacts === undefined || data?.contacts === null || data?.contacts.length === 0) {
         openNofi('warning', 'Заавал', 'Холбоо барих хүний мэдээлэл заавал');
      } else {
         var response;
         if (editMode) {
            response = await Patch('pms/patient/' + id, token, conf, data);
         } else {
            response = await Post('pms/patient', token, conf, data);
         }
         if (response === 200 || response === 201) {
            getData(1, 20);
            setIsConfirmLoading(false);
            setIsModalVisible(false);
         }
      }
   };
   const onFinishFailed = (errorInfo) => {
      errorInfo?.errorFields?.map((error) => {
         return openNofi('warning', 'Заавал', error.errors[0]);
      });
   };
   const getCitizens = async () => {
      config.params.type = 1;
      config.params.limit = null;
      config.params.page = null;
      await axios
         .get(DEV_URL + 'reference/country', config)
         .then((response) => {
            setCitizens(response.data.response.data);
         })
         .catch(() => {
            console.log('dasd');
         });
   };
   const getProvices = async () => {
      config.params.type = 2;
      config.params.limit = null;
      config.params.page = null;
      await axios
         .get(DEV_URL + 'reference/country', config)
         .then((response) => {
            setProvices(response.data.response.data);
         })
         .catch(() => {
            console.log('dasd');
         });
   };
   const getTowns = async () => {
      const conf = {
         headers: {},
         params: {
            type: 3
         }
      };
      const response = await Get('reference/country', token, conf);
      setTowns(response.data);
   };
   const filterTowns = async (value) => {
      config.params.type = 3;
      config.params.parentId = value;
      config.params.limit = null;
      config.params.page = null;
      await axios
         .get(DEV_URL + 'reference/country', config)
         .then((response) => {
            setTowns(response.data.response.data);
         })
         .catch(() => {
            console.log('dasd');
         });
   };
   const ddcitizen = (id) => {
      if (id != null) {
         return citizens.find((citizen) => citizen.id === id)?.name || 'Байхгүй';
      }
      return 'Байхгүй';
   };
   const ddprovices = (id) => {
      if (id != null) {
         return provices.find((provice) => provice.id === id)?.name || 'Байхгүй';
      }
      return 'Байхгүй';
   };
   const ddtowns = (id) => {
      if (id != null) {
         return towns.find((town) => town.id === id)?.name || 'Байхгүй';
      }
      return 'Байхгүй';
   };
   //
   const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({}) => (
         <div style={{ padding: 8 }}>
            <Search
               placeholder={`хайх`}
               allowClear
               onSearch={(e) => getData(1, 20, e, dataIndex)}
               enterButton={'Хайх'}
            />
         </div>
      ),
      filterIcon: () => <SearchOutlined style={{ color: '#4a7fc1' }} />
   });
   const colums = [
      {
         title: '№',
         render: (_, _record, index) => meta.page * meta.limit - (meta.limit - index - 1)
      },
      {
         title: 'Картын №',
         dataIndex: 'cardNumber',
         ...getColumnSearchProps('cardNumber')
      },
      {
         title: 'Овог',
         dataIndex: 'lastName',
         ...getColumnSearchProps('lastName')
      },
      {
         title: 'Нэр',
         dataIndex: 'firstName',
         ...getColumnSearchProps('firstName')
      },
      {
         title: 'Регистр №',
         dataIndex: 'registerNumber',
         ...getColumnSearchProps('registerNumber')
      },
      {
         title: 'Утас',
         dataIndex: 'phoneNo',
         ...getColumnSearchProps('phoneNo')
      },
      {
         title: 'Гэрийн хаяг',
         children: [
            {
               title: 'Улс',
               dataIndex: 'countryId',
               render: (countryId) => ddcitizen(countryId)
            },
            {
               title: 'Аймаг/Хот',
               dataIndex: 'aimagId',
               render: (aimagId) => ddprovices(aimagId)
            },
            {
               title: 'Сум/Дүүрэг',
               dataIndex: 'soumId',
               render: (soumId) => ddtowns(soumId)
            },
            {
               title: 'Баг/Хороо',
               dataIndex: 'committee'
            },
            {
               title: 'Гудамж/Байшин',
               dataIndex: 'building'
            },
            {
               title: 'Тоот',
               dataIndex: 'address'
            }
         ]
      },
      {
         title: 'Карт нээлгэсэн огноо',
         dataIndex: 'createdAt',
         render: (createdAt) => dayjs(createdAt).format('YYYY/MM/DD HH:mm')
      },
      {
         title: 'Үйлдэл',
         dataIndex: 'id',
         render: (text) => {
            return (
               <Space>
                  <Button type="link" onClick={() => viewModal(text)} title="Харах" style={{ paddingRight: 5 }}>
                     <EyeOutlined />
                  </Button>
                  <Button
                     type="link"
                     onClick={() => editModal(text)}
                     title="Засах"
                     style={{ paddingRight: 5, paddingLeft: 5 }}
                  >
                     <EditOutlined />
                  </Button>
               </Space>
            );
         }
      }
   ];
   //
   useEffect(() => {
      getData(1, 20);
      getCitizens();
      getProvices();
      getTowns();
   }, []);
   return (
      <div className="p-3 w-full h-screen bg-[#f5f6f7] overflow-auto">
         <Card
            bordered={false}
            className="header-solid max-h-max rounded-md"
            title="Өвчтөн"
            extra={
               <div className="flex flex-row gap-3">
                  <Button
                     className="bg-red-500"
                     type="danger"
                     icon={<PlusCircleOutlined />}
                     onClick={() => showModalUrgent()}
                  >
                     Яаралтай нэмэх
                  </Button>
                  <Button type="primary" onClick={() => showModal()} icon={<PlusCircleOutlined />}>
                     Нэмэх
                  </Button>
               </div>
            }
         >
            <ConfigProvider locale={mnMN}>
               <Table
                  rowKey={'id'}
                  bordered
                  size="small"
                  columns={colums}
                  dataSource={data}
                  scroll={{
                     x: 1500
                  }}
                  locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                  loading={{
                     spinning: spinner,
                     tip: 'Уншиж байна...'
                  }}
                  pagination={{
                     position: ['topCenter', 'bottomCenter'],
                     size: 'small',
                     current: meta.page,
                     total: meta.itemCount,
                     showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                     pageSize: meta.limit,
                     showSizeChanger: true,
                     pageSizeOptions: ['5', '10', '20', '50'],
                     showQuickJumper: true,
                     onChange: (page, pageSize) => getData(page, pageSize, pValue, pIndex)
                  }}
               />
            </ConfigProvider>
         </Card>
         <Modal
            title={editMode ? 'Өвчтөн засах' : 'Өвчтөн бүртгэх'}
            open={isModalVisible}
            onCancel={handleCancel}
            width="18cm"
            footer={null}
            confirmLoading={isConfirmLoading}
         >
            <PatientSupport
               editMode={editMode}
               patientId={id}
               setGlobalDb={(state) => {
                  setIsGlobalDb(state);
               }}
               filterTowns={(result) => {
                  filterTowns(result);
               }}
               onFinish={onFinish}
            />
         </Modal>
         <Modal
            title="Өвчтөн"
            width="80%"
            open={isViewModalVisible}
            footer={null}
            onCancel={() => {
               setIsViewModalVisible(false);
            }}
         >
            <Descriptions bordered>
               <Descriptions.Item label="Картын дугаар">{view.cardNumber}</Descriptions.Item>
               <Descriptions.Item label="Ургийн овог">{view.familyName}</Descriptions.Item>
               <Descriptions.Item label="Овог">{view.lastName}</Descriptions.Item>
               <Descriptions.Item label="Нэр">{view.firstName}</Descriptions.Item>
               <Descriptions.Item label="Иргэншил">{view.countryId}</Descriptions.Item>
               <Descriptions.Item label="Регистр дугаар">{view.registerNumber}</Descriptions.Item>
               <Descriptions.Item label="Төрсөн огноо">{dayjs(view.birthDate).format('YYYY-MM-DD')}</Descriptions.Item>
               <Descriptions.Item label="Утас">{view.phoneNo}</Descriptions.Item>
               <Descriptions.Item label="Гэрийн утас">{view.homePhoneNo}</Descriptions.Item>
               <Descriptions.Item label="И-мэйл">{view.email}</Descriptions.Item>
               <Descriptions.Item label="Цусны бүлэг">{view.bloodType}</Descriptions.Item>
               <Descriptions.Item label="Аймаг/Дүүрэг">{view.countries?.name}</Descriptions.Item>
            </Descriptions>
         </Modal>
         <Modal
            title="Яаралтай бүртгэл"
            open={isOpenUrgent}
            onCancel={() => setIsOpenUrgent(false)}
            okText="Хадгалах"
            cancelText="Болих"
            onOk={() => {
               urgentForm
                  .validateFields()
                  .then((values) => {
                     onFinishUrgent(values);
                  })
                  .catch((error) => {
                     onFinishFailed(error);
                  });
            }}
         >
            <Form
               form={urgentForm}
               labelCol={{
                  span: 8
               }}
               wrapperCol={{
                  span: 14
               }}
               initialValues={{
                  lastName: 'EMERGENCY',
                  firstName: `EMERGENCY ${dayjs(new Date()).format('HH:mm:ss')}`,
                  birthDate: dayjs(new Date())
               }}
            >
               <UPatient />
            </Form>
            <div className="flex flex-row gap-3">
               {/* <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3">
                     <div className="flow-root">
                        <div className="float-left">
                           <p
                              style={{
                                 fontWeight: 600
                              }}
                           ></p>
                        </div>
                        <div className="float-right">
                           <Switch
                              className="bg-[#4a7fc1]"
                              checkedChildren="Тийм"
                              unCheckedChildren="Үгүй"
                              defaultChecked={false}
                              checked={stateInsurance}
                              onChange={(e) => {
                                 setStateInsurance(e);
                                 setIsSent(e);
                                 setNotInsuranceInfo([]);
                              }}
                           />
                        </div>
                     </div>
                  </div>
               </div> */}
            </div>
         </Modal>
      </div>
   );
}
export default Patient;
