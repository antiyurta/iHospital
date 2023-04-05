import React, { useEffect, useRef, useState } from 'react';
import {
   Button,
   Space,
   Form,
   Input,
   Modal,
   Card,
   Descriptions,
   Table,
   Tabs,
   Empty,
   ConfigProvider
} from 'antd';
import { EyeOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { Delete, Get, openNofi, Patch, Post, ScrollRef } from '../../comman';
import axios from 'axios';
import 'moment/locale/mn';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import moment from 'moment';
import GeneralInfo from './Patient/GeneralInfo';
import MoreInfo from './Patient/MoreInfo';
import ResidentialAddress from './Patient/ResidentialAddress';
import Insurance from './Patient/Insurance';
import Contact from './Patient/Contact';
import mnMN from 'antd/es/locale/mn_MN';
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
   //
   const [id, setId] = useState([]);
   const [data, setData] = useState([]);
   const [meta, setMeta] = useState([]);
   const [view, setView] = useState([]);
   //
   const [citizens, setCitizens] = useState([]);
   const [provices, setProvices] = useState([]);
   const [towns, setTowns] = useState([]);
   //
   const [form] = Form.useForm();
   const scrollRef = useRef();
   //
   const dd = (value) => {
      setIsGlobalDb(value);
   };
   const items = [
      {
         label: 'Ерөнхий мэдээлэл',
         key: 1,
         children: <GeneralInfo form={form} gbase={dd} />
      },
      { label: 'Нэмэлт мэдээлэл', key: 2, children: <MoreInfo form={form} /> },
      {
         forceRender: true,
         label: 'Оршин суугаа хаяг',
         key: 3,
         children: <ResidentialAddress form={form} />
      },
      {
         label: 'Даатгалын харьяалал',
         key: 4,
         children: <Insurance form={form} />
      },
      {
         label: 'Холбоо барих хүний мэдээлэл',
         key: 5,
         children: <Contact form={form} />
      }
   ];
   //
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
      setIsModalVisible(true);
      form.resetFields();
      setEditMode(false);
   };
   const viewModal = async (id) => {
      await axios
         .get(DEV_URL + 'pms/patient/' + id, config)
         .then((response) => {
            setView(response.data.response);
         })
         .catch((error) => {
            console.log(error);
         });
      setIsViewModalVisible(true);
   };
   const editModal = async (id) => {
      await axios
         .get(DEV_URL + 'pms/patient/' + id, config)
         .then((response) => {
            response.data.response['birthDay'] = moment(
               response.data.response['birthDay']
            );
            filterTowns(response.data.response.aimagId);
            form.setFieldsValue(response.data.response);
         })
         .catch((error) => {
            console.log(error);
         });
      setId(id);
      setEditMode(true);
      setIsModalVisible(true);
   };
   const deleteModal = (id) => {
      Modal.error({
         title: 'Устгах',
         okText: 'Устгах',
         closable: true,
         content: <div>Устгасан дохиолдолд дахин сэргэхгүй болно</div>,
         async onOk() {
            await Delete('pms/patient/' + id, token, config);
            getData(1);
         }
      });
   };
   const handleOk = () => {
      setIsModalVisible(false);
   };
   const handleCancel = () => {
      setIsModalVisible(false);
   };
   const onFinish = async (data) => {
      setIsConfirmLoading(true);
      if (isGlobalDb) {
         data.isGlobalDb = true;
      } else {
         data.isGlobalDb = false;
      }
      const conf = {
         headers: {},
         params: {}
      };
      console.log(data);
      if (
         data?.contacts === undefined ||
         data?.contacts === null ||
         data?.contacts.length === 0
      ) {
         openNofi('warning', 'Заавал', 'Холбоо барих хүний мэдээлэл заавал');
      } else {
         if (editMode) {
            const response = await Patch(
               'pms/patient/' + id,
               token,
               conf,
               data
            );
            if (response === 200) {
               getData(1, 20);
               setIsConfirmLoading(false);
               setIsModalVisible(false);
            }
         } else {
            const response = await Post('pms/patient', token, conf, data);
            if (response === 201) {
               getData(1, 20);
               setIsConfirmLoading(false);
               setIsModalVisible(false);
            }
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
      const citizen = citizens.filter((citizen) => citizen.id === id);
      if (citizen.length > 0) {
         return citizen[0].name;
      } else {
         return 'Байхгүй';
      }
   };
   const ddprovices = (id) => {
      const provice = provices.filter((provice) => provice.id === id);
      if (provice.length > 0) {
         return provice[0].name;
      } else {
         return 'Байхгүй';
      }
   };
   const ddtowns = (id) => {
      const town = towns.filter((town) => town.id === id);
      if (town.length > 0) {
         return town[0].name;
      } else {
         return 'Байхгүй';
      }
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
      filterIcon: () => <SearchOutlined style={{ color: '#2d8cff' }} />
   });
   const colums = [
      {
         title: '№',
         render: (_, record, index) => {
            return meta.page * meta.limit - (meta.limit - index - 1);
         }
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
               render: (text) => {
                  if (text != null) {
                     return ddcitizen(text);
                  }
               }
            },
            {
               title: 'Аймаг/Хот',
               dataIndex: 'aimagId',
               render: (text) => {
                  if (text != null) {
                     return ddprovices(text);
                  } else {
                     return 'Байхгүй';
                  }
               }
            },
            {
               title: 'Сум/Дүүрэг',
               dataIndex: 'soumId',
               render: (text) => {
                  if (text != null) {
                     return ddtowns(text);
                  } else {
                     return 'Байхгүй';
                  }
               }
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
         render: (text) => {
            return moment(text).format('YYYY-MM-DD');
         }
      },
      {
         title: 'Үйлдэл',
         dataIndex: 'id',
         render: (text) => {
            return (
               <Space>
                  <Button
                     type="link"
                     onClick={() => viewModal(text)}
                     title="Харах"
                     style={{ paddingRight: 5 }}
                  >
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
      ScrollRef(scrollRef);
   }, []);
   return (
      <>
         <Card
            bordered={false}
            className="header-solid max-h-max rounded-md"
            title="Өвчтөн"
            extra={
               <Button type="primary" onClick={showModal}>
                  Нэмэх
               </Button>
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
                     showTotal: (total, range) =>
                        `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                     pageSize: meta.limit,
                     showSizeChanger: true,
                     pageSizeOptions: ['5', '10', '20', '50'],
                     showQuickJumper: true,
                     onChange: (page, pageSize) =>
                        getData(page, pageSize, pValue, pIndex)
                  }}
               />
            </ConfigProvider>
         </Card>
         <Modal
            title="Өвчтөн бүртгэх"
            open={isModalVisible}
            okText="Хадгалах"
            onOk={() => {
               form
                  .validateFields()
                  .then((values) => {
                     onFinish(values);
                  })
                  .catch((error) => {
                     onFinishFailed(error);
                  });
            }}
            cancelText="Болих"
            onCancel={handleCancel}
            width="18cm"
         >
            <Form form={form} layout="horizontal">
               <Tabs tabPosition="left" items={items} />
            </Form>
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
               <Descriptions.Item label="Картын дугаар">
                  {view.cardNumber}
               </Descriptions.Item>
               <Descriptions.Item label="Ургийн овог">
                  {view.familyName}
               </Descriptions.Item>
               <Descriptions.Item label="Овог">
                  {view.lastName}
               </Descriptions.Item>
               <Descriptions.Item label="Нэр">
                  {view.firstName}
               </Descriptions.Item>
               <Descriptions.Item label="Иргэншил">{}</Descriptions.Item>
               <Descriptions.Item label="Регистр дугаар">
                  {view.registerNumber}
               </Descriptions.Item>
               <Descriptions.Item label="Төрсөн огноо">{}</Descriptions.Item>
               <Descriptions.Item label="Утас">
                  {view.phoneNo}
               </Descriptions.Item>
               <Descriptions.Item label="Гэрийн утас">
                  {view.homePhoneNo}
               </Descriptions.Item>
               <Descriptions.Item label="И-мэйл">
                  {view.email}
               </Descriptions.Item>
               <Descriptions.Item label="Аймаг/Дүүрэг">
                  {view.countries?.name}
               </Descriptions.Item>
            </Descriptions>
         </Modal>
      </>
   );
}
export default Patient;
