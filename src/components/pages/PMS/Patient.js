import React, { useEffect, useState } from 'react';
import { Button, Space, Form, Input, Modal, Card, Descriptions, Table, Empty, ConfigProvider } from 'antd';
import { EyeOutlined, EditOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import mnMN from 'antd/es/locale/mn_MN';
import UPatient from './Urgent/UPatient';
import PatientSupport from './patientSupport';
import dayjs from 'dayjs';
//common
import { openNofi } from '@Comman/common';
//api
import CountryApi from '@ApiServices/reference/country';
import PatientApi from '@ApiServices/pms/patient.api';
import RegisterPatient from './Patient/index';
//extends
const { Search } = Input;

function Patient() {
   const [mongoliaId, setMongoliaId] = useState(1);
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

   const getData = async (page, pageSize, value, index) => {
      setSpinner(true);
      setPindex(index);
      setPvalue(value);
      await PatientApi.getFilter({
         params: {
            page: page,
            limit: pageSize,
            [index]: value
         }
      })
         .then(({ data: { response } }) => {
            setData(response.data);
            setMeta(response.meta);
         })
         .finally(() => {
            setSpinner(false);
         });
   };
   const showModal = () => {
      setId(null);
      setEditMode(false);
      setIsModalVisible(true);
   };
   const showModalUrgent = () => {
      setIsOpenUrgent(true);
      urgentForm.resetFields();
      setUrgentEditMode(false);
   };
   const viewModal = async (id) => {
      await PatientApi.getById(id)
         .then((response) => {
            setView(response.data.response);
         })
         .catch((error) => {
            console.log(error);
         });
      setIsViewModalVisible(true);
   };
   const editModal = async (id, isEmergency) => {
      setId(id);
      if (isEmergency) {
         setUrgentEditMode(true);
         setIsOpenUrgent(true);
      } else {
         setEditMode(true);
         setIsModalVisible(true);
      }
   };
   const onFinishUrgent = async (data) => {
      data['isEmergency'] = true;
      data['isGlobalDb'] = false;
      if (!data.isMind) data['registerNumber'] = null;
      if (urgentEditMode) {
         await PatientApi.patch(id, data).then((response) => {
            if (response.status === 200) {
               setIsOpenUrgent(false);
               openNofi('success', 'Амжилттай', 'Амжиллтай хадгалагдсан');
               getData(1, 20);
            }
         });
      } else {
         await PatientApi.post(data)
            .then((response) => {
               if (response.status === 201) {
                  setIsOpenUrgent(false);
                  openNofi('success', 'Амжилттай', 'Амжиллтай хадгалагдсан');
                  getData(1, 20);
               }
            })
            .catch((error) => {
               openNofi('error', 'Амжилтгүй', `${error.response?.data?.message}`);
            });
      }
   };
   const onFinish = async (data) => {
      setIsConfirmLoading(true);
      data['isGlobalDb'] = isGlobalDb;
      data['isEmergency'] = false;
      let response;
      console.log('is working on finish');
      try {
         if (editMode) {
            response = await PatientApi.patch(id, data).then(({ data: { success } }) => success);
         } else {
            response = await PatientApi.post(data).then(({ data: { success } }) => success);
         }
         if (response) {
            getData(1, 20);
            setIsConfirmLoading(false);
            setIsModalVisible(false);
         }
      } catch (error) {
         openNofi('error', 'Алдаа', error.response.data.message);
      }
   };
   const getCitizens = async () => {
      await CountryApi.getByPageFilter({
         params: {
            type: 1
         }
      }).then(({ data: { response } }) => {
         findMongolId(response.data);
         setCitizens(response.data);
      });
   };
   const getProvices = async () => {
      await CountryApi.getByPageFilter({
         params: {
            type: 2
         }
      }).then(({ data: { response } }) => {
         setProvices(response.data);
      });
   };
   const getTowns = async () => {
      await CountryApi.getByPageFilter({
         params: {
            type: 3
         }
      }).then(({ data: { response } }) => {
         setTowns(response.data);
      });
   };
   const filterTowns = async (value) => {
      await CountryApi.getByPageFilter({
         params: {
            type: 3,
            parentId: value
         }
      }).then(({ data: { response } }) => {
         setTowns(response.data);
      });
   };
   const ddcitizen = (id) => {
      if (id != null) {
         return citizens.find((citizen) => citizen.id === id)?.name || 'Байхгүй';
      }
      return 'Байхгүй';
   };
   const ddprovices = (id, aimagCityName) => {
      if (id != null) {
         return provices.find((provice) => provice.id === id)?.name || 'Байхгүй';
      } else if (aimagCityName) {
         return aimagCityName;
      }
      return 'Байхгүй';
   };
   const ddtowns = (id, soumDistrictName) => {
      if (id != null) {
         return towns.find((town) => town.id === id)?.name || 'Байхгүй';
      } else if (soumDistrictName) {
         return soumDistrictName;
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
               render: (aimagId, row) => ddprovices(aimagId, row.aimagCityName)
            },
            {
               title: 'Сум/Дүүрэг',
               dataIndex: 'soumId',
               render: (soumId, row) => ddtowns(soumId, row.soumDistrictName)
            },
            {
               title: 'Баг/Хороо',
               dataIndex: 'bagKhorooName'
            },
            {
               title: 'Гудамж/Байшин',
               dataIndex: 'addressStreetName'
            },
            {
               title: 'Тоот',
               dataIndex: 'addressDetail'
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
         render: (text, row) => {
            return (
               <Space>
                  <Button type="link" onClick={() => viewModal(text)} title="Харах" style={{ paddingRight: 5 }}>
                     <EyeOutlined />
                  </Button>
                  <Button
                     type="link"
                     onClick={() => editModal(text, row.isEmergency)}
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
   const findMongolId = (incomeCitizens) => {
      const mongolia = incomeCitizens.find((citizen) => citizen.name === 'Монгол');
      setMongoliaId(mongolia?.id);
   };
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
            title={editMode ? 'Өвчтөн засах' : 'Өвчтөн бүртгэх'}
            open={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            width="16cm"
            footer={null}
            destroyOnClose
            confirmLoading={isConfirmLoading}
         >
            <RegisterPatient onFinish={onFinish} patientId={id} editMode={editMode} />
         </Modal>
         <Modal
            title="Яаралтай бүртгэл"
            open={isOpenUrgent}
            width="10cm"
            onCancel={() => setIsOpenUrgent(false)}
            footer={null}
         >
            <UPatient editMode={urgentEditMode} patientId={id} onFinish={onFinishUrgent} />
         </Modal>
      </div>
   );
}
export default Patient;
