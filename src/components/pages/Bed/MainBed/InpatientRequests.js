import { Avatar, Button, Card, ConfigProvider, Empty, Form, Input, InputNumber, Modal, Radio, Table, Tag } from 'antd';
import roomType from '../roomType.js';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, Patch, formatNameForDoc, getAge, getGender } from '../../../comman';
import orderType from '../orderType.js';
import { localMn } from '../../../comman';
import PatientInformation from '../../PatientInformation';
import dayjs from 'dayjs';
import { Link, useNavigate } from 'react-router-dom';
const { CheckableTag } = Tag;
const { Search } = Input;
function InpatientRequests() {
   const navigate = useNavigate();
   const token = useSelector(selectCurrentToken);
   const [form] = Form.useForm();
   const [isLoading, setIsLoading] = useState(false);
   const [inpatientRequests, setInpatientRequests] = useState([]);
   const [inpatientRequsetsMeta, setInpatientRequestsMeta] = useState({});
   const [checkedKey, setCheckedKey] = useState(0);
   const [selectedPatient, setSelectedPatient] = useState({});
   const [isOpenInBedModal, setIsOpenBedModal] = useState(false);
   const [departments, setDepartments] = useState([]);
   const [selectedDepartment, setSelectedDepartment] = useState(Number);
   const [rooms, setRooms] = useState([]);
   const [selectedRoom, setSelectedRoom] = useState(Number);
   const [selectedInpatientRequest, setSelectedInpatientRequest] = useState(Number);
   const [patientInBedLoading, setPatientInBedLoading] = useState(false);
   //
   const [pValue, setPvalue] = useState('');
   const getInpatientRequests = async (page, pageSize, process, value) => {
      setIsLoading(true);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            process: process
         }
      };
      if (value) {
         conf.params['filter'] = value;
         setPvalue(value);
      }
      const response = await Get('service/inpatient-request', token, conf);
      setInpatientRequests(response.data);
      setInpatientRequestsMeta(response.meta);
      setIsLoading(false);
   };
   const getDepartments = async () => {
      const conf = {
         headers: {},
         params: {
            type: 2
         }
      };
      const response = await Get('organization/structure', token, conf);
      setDepartments(response.data);
   };
   const getRooms = async (depId) => {
      const conf = {
         headers: {},
         params: {
            isInpatient: true,
            structureId: depId
         }
      };
      const response = await Get('organization/room', token, conf);
      setRooms(response.data);
   };
   //
   const filteredRooms = rooms?.filter((room) => room.structureId === selectedDepartment);
   const filteredBed = rooms?.find((room) => room.id === selectedRoom)?.beds;
   //
   const openModal = (process, state, patient, row) => {
      form.resetFields();
      form.setFieldsValue({ depId: row.inDepartmentId });
      setSelectedDepartment(row.inDepartmentId);
      setSelectedInpatientRequest(row.id);
      setSelectedPatient(patient);
      if (process === 0) {
         setIsOpenBedModal(state);
      }
   };
   const setPatientInBed = async (values) => {
      setPatientInBedLoading(true);
      const conf = {
         headers: {},
         params: {}
      };
      const data = {
         roomId: values.roomId,
         bedId: values.bedId,
         isOut: false,
         process: 0
      };
      const response = await Patch(`service/inpatient-request/bed/${selectedInpatientRequest}`, token, conf, data);
      if (response === 200) {
         setIsOpenBedModal(false);
         getInpatientRequests(inpatientRequsetsMeta.page, inpatientRequsetsMeta.limit, checkedKey);
      }
      setPatientInBedLoading(false);
   };
   const setPatientOutBed = async (bedId, rowId) => {
      const conf = {
         headers: {},
         params: {}
      };
      const data = {
         isOut: true,
         process: 2,
         bedId: bedId
      };
      Modal.info({
         title: 'Эмнэлгээс гаргах',
         okText: 'Гаргах',
         closable: true,
         content: <div>Та эмнэлгээс гаргахдаа итгэлтэй байна уу</div>,
         async onOk() {
            await Patch(`service/inpatient-request/bed/${rowId}`, token, conf, data);
            getInpatientRequests(inpatientRequsetsMeta.page, inpatientRequsetsMeta.limit, checkedKey);
         }
      });
   };
   const column = [
      {
         title: '№',
         render: (_, _record, index) => {
            return inpatientRequsetsMeta.page * inpatientRequsetsMeta.limit - (inpatientRequsetsMeta.limit - index - 1);
         }
      },
      {
         title: 'Хүсэлт илгээсэн огноо',
         dataIndex: 'createdAt',
         render: (text) => {
            return dayjs(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Захиалсан',
         dataIndex: 'requestEmployee',
         render: (object) => {
            return (
               <div className="ambo-list-user">
                  <Avatar
                     style={{
                        minWidth: 32
                     }}
                  />
                  <div className="info">
                     <p className="name">{formatNameForDoc(object?.lastName, object?.firstName)}</p>
                     <p>{object?.registerNumber}</p>
                  </div>
               </div>
            );
         }
      },
      {
         title: 'Эмч',
         dataIndex: 'doctor',
         render: (object) => {
            return (
               <div className="ambo-list-user">
                  <Avatar
                     style={{
                        minWidth: 32
                     }}
                  />
                  <div className="info">
                     <p className="name">{formatNameForDoc(object?.lastName, object?.firstName)}</p>
                     <p>{object?.registerNumber}</p>
                  </div>
               </div>
            );
         }
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
         render: (object) => {
            return (
               <div className="ambo-list-user">
                  <Avatar
                     style={{
                        minWidth: 32
                     }}
                  />
                  <div className="info">
                     <p className="name">{formatNameForDoc(object.lastName, object.firstName)}</p>
                     <p>{object?.registerNumber}</p>
                  </div>
               </div>
            );
         }
      },
      {
         title: 'Нас',
         width: 40,
         dataIndex: ['patient', 'registerNumber'],
         render: (text) => {
            return getAge(text);
         }
      },
      {
         title: 'Хүйс',
         width: 40,
         dataIndex: ['patient', 'genderType'],
         render: (text) => {
            return getGender(text);
         }
      },
      {
         title: 'Хэвтэх үеийн мэдээлэл',
         children: [
            {
               title: 'Тасгийн нэр',
               dataIndex: ['structure', 'name']
            },
            {
               title: 'Өрөө №',
               dataIndex: ['room', 'roomNumber']
            },
            {
               title: 'Ор №',
               dataIndex: ['bed', 'bedNumber']
            }
         ]
      },
      {
         title: 'Хэвтэх өдөр',
         dataIndex: 'startDate',
         render: (text) => {
            if (text != null) {
               return moment(text).format('YYYY-MM-DD');
            }
            return;
         }
      },
      {
         title: 'Гарах өдөр',
         dataIndex: 'endDate',
         render: (text) => {
            if (text != null) {
               return moment(text).format('YYYY-MM-DD');
            }
            return;
         }
      },
      {
         title: 'Гарсан өдөр',
         dataIndex: 'outDate',
         render: (text) => {
            if (text != null) {
               return moment(text).format('YYYY-MM-DD');
            }
            return;
         }
      },
      {
         title: 'Үйдэл',
         dataIndex: 'patient',
         render: (patient, row) => {
            if (row?.process === 0) {
               return (
                  <Link
                     className="app-button-regular"
                     to="/main/bed_management/create"
                     state={{
                        isRead: true,
                        patient: patient,
                        inpatientRequestId: row.id
                     }}
                  >
                     Хэвтүүлэх
                  </Link>
               );
            } else if (row?.process === 2) {
               return (
                  <Button type="primary" onClick={() => setPatientOutBed(row?.bedId, row?.id)}>
                     Гаргах
                  </Button>
               );
            }
         }
      }
   ];
   useEffect(() => {
      getInpatientRequests(1, 10, checkedKey);
   }, [checkedKey]);
   useEffect(() => {
      getRooms(selectedDepartment);
      console.log(selectedDepartment);
   }, [selectedDepartment]);
   useEffect(() => {
      getDepartments();
      getInpatientRequests(1, 10, 0);
   }, []);
   return (
      <div className="flex flex-wrap">
         <div className="w-full">
            <div className="bg-[#1890ff] checkTag">
               {orderType.map((tag, index) => {
                  return (
                     <CheckableTag
                        key={index}
                        checked={checkedKey === tag.value}
                        onChange={() => {
                           setCheckedKey(tag.value);
                        }}
                        className="text-white m-1"
                     >
                        <div className="flex">
                           <img src={require(`../../../../assets/bed/${tag.img}`)} width="20" />
                           {tag.label}
                        </div>
                     </CheckableTag>
                  );
               })}
            </div>
         </div>
         <div className="w-full mt-2">
            <Card title="Өвчтөний мэдээлэл" bordered={false} className="header-solid max-h-max rounded-md mb-2">
               <div className="py-2">
                  <Search
                     placeholder="Өвчтний нэр, регистр дугаар, Тасаг"
                     allowClear
                     enterButton="Хайх"
                     size="large"
                     onSearch={(e) => getInpatientRequests(1, 20, checkedKey, e)}
                  />
               </div>
               <ConfigProvider locale={localMn()}>
                  <Table
                     rowKey={'id'}
                     scroll={{
                        x: 1000
                     }}
                     rowClassName={'hover:cursor-pointer'}
                     locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                     loading={{
                        spinning: isLoading,
                        tip: 'Уншиж байна....'
                     }}
                     onRow={(row, _rowIndex) => {
                        return {
                           onDoubleClick: () => {
                              open();
                           }
                        };
                     }}
                     columns={column}
                     dataSource={inpatientRequests}
                     pagination={{
                        position: ['bottomCenter'],
                        size: 'small',
                        current: inpatientRequsetsMeta.page,
                        total: inpatientRequsetsMeta.itemCount,
                        showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                        pageSize: inpatientRequsetsMeta.limit,
                        showSizeChanger: true,
                        pageSizeOptions: ['5', '10', '20', '50'],
                        showQuickJumper: true,
                        onChange: (page, pageSize) => getInpatientRequests(page, pageSize, checkedKey, pValue)
                     }}
                  />
               </ConfigProvider>
            </Card>
         </div>
         <Modal
            title="Эмнэлэгт хэвтүүлэх хэсэг"
            open={isOpenInBedModal}
            onCancel={() => setIsOpenBedModal(false)}
            width="80%"
            bodyStyle={{
               background: '#f5f6f7',
               height: 540
            }}
            footer={null}
         >
            <div className="flex flex-col gap-2">
               <PatientInformation OCS={false} handlesearch={false} patient={selectedPatient} />
               <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col gap-2">
                     <div className="bg-white p-2 rounded-lg flex flex-col gap-1">
                        <p
                           style={{
                              color: '#272E3B',
                              fontSize: 14,
                              fontWeight: 700
                           }}
                        >
                           Өрөөний мэдээлэл
                        </p>
                        <div className="h-[1px] w-full bg-[#C9CDD4]" />
                     </div>
                     <div className="bg-white p-2 rounded-lg flex flex-col gap-1">
                        <p
                           style={{
                              color: '#272E3B',
                              fontSize: 14,
                              fontWeight: 700
                           }}
                        >
                           Үргэлжлэх хугацаа
                        </p>
                        <div className="h-[1px] w-full bg-[#C9CDD4]" />
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <div className="bg-white p-2 rounded-lg flex flex-col gap-1">
                        <p
                           style={{
                              color: '#272E3B',
                              fontSize: 14,
                              fontWeight: 700
                           }}
                        >
                           Хэвтэн эмчлүүлэхийн мэдээлэл
                        </p>
                        <div className="h-[1px] w-full bg-[#C9CDD4]" />
                     </div>
                     <div className="bg-white p-2 rounded-lg flex flex-col gap-1">
                        <p
                           style={{
                              color: '#272E3B',
                              fontSize: 14,
                              fontWeight: 700
                           }}
                        >
                           Төлбөрийн мэдээлэл
                        </p>
                        <div className="h-[1px] w-full bg-[#C9CDD4]" />
                     </div>
                  </div>
                  <div className="bg-white p-2 rounded-lg flex flex-col gap-1">
                     <p
                        style={{
                           color: '#272E3B',
                           fontSize: 14,
                           fontWeight: 700
                        }}
                     >
                        Нэмэлт мэдээлэл
                     </p>
                     <div className="h-[1px] w-full bg-[#C9CDD4]" />
                     <div className="h-[350px] overflow-auto">
                        <Form layout="vertical">
                           <div className="document-form">
                              <div className="form-left" />
                              <div className="form-inputs">
                                 <Form.Item className="mb-0" label="Харияаллын бус:" name="sdad">
                                    <Radio.Group>
                                       <Radio value={true}>Тийм</Radio>
                                       <Radio value={false}>Үгүй</Radio>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="document-form">
                              <div className="form-left" />
                              <div className="form-inputs">
                                 <Form.Item className="mb-0" label="Хөдөөнөөс ирсэн:" name="isCountry">
                                    <Radio.Group>
                                       <Radio value={true}>Тийм</Radio>
                                       <Radio value={false}>Үгүй</Radio>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="document-form">
                              <div className="form-left" />
                              <div className="form-inputs">
                                 <Form.Item className="mb-0" label="Давтан хэвтсэн:" name="isCountry">
                                    <Radio.Group>
                                       <Radio value={true}>Тийм</Radio>
                                       <Radio value={false}>Үгүй</Radio>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="document-form">
                              <div className="form-left" />
                              <div className="form-inputs">
                                 <Form.Item className="mb-0" label="Доод шатлалаас:" name="isCountry">
                                    <Radio.Group>
                                       <Radio value={true}>Тийм</Radio>
                                       <Radio value={false}>Үгүй</Radio>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="document-form">
                              <div className="form-left" />
                              <div className="form-inputs">
                                 <Form.Item className="mb-0" label="Саажилттай эсэх:" name="isCountry">
                                    <Radio.Group>
                                       <Radio value={true}>Тийм</Radio>
                                       <Radio value={false}>Үгүй</Radio>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="document-form">
                              <div className="form-left" />
                              <div className="form-inputs">
                                 <Form.Item className="mb-0" label="Хаанаас хэвтсэн:" name="isCountry">
                                    <Radio.Group>
                                       <Radio value={true}>Гаднаас хэвтсэн</Radio>
                                       <Radio value={false}>Тасгаас хэвтсэн</Radio>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="document-form">
                              <div className="form-left" />
                              <div className="form-inputs">
                                 <Form.Item className="mb-0" label="Өндөр:" name="isCountry">
                                    <InputNumber />
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="document-form">
                              <div className="form-left" />
                              <div className="form-inputs">
                                 <Form.Item className="mb-0" label="Жин:" name="isCountry">
                                    <InputNumber />
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="document-form">
                              <div className="form-left" />
                              <div className="form-inputs">
                                 <Form.Item className="mb-0" label="Систолын даралт:" name="isCountry">
                                    <InputNumber />
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="document-form">
                              <div className="form-left" />
                              <div className="form-inputs">
                                 <Form.Item className="mb-0" label="Диастолын даралт:" name="isCountry">
                                    <InputNumber />
                                 </Form.Item>
                              </div>
                           </div>
                        </Form>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
}
export default InpatientRequests;
