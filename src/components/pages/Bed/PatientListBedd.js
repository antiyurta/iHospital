import {
   Button,
   Card,
   ConfigProvider,
   Empty,
   Form,
   Modal,
   Select,
   Table,
   Tag
} from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, Patch, getAge, getGender, numberToCurrency } from '../../comman';
import orderType from './orderType.json';
import { localMn } from '../../comman';
import PatientInformation from '../PatientInformation';
const { CheckableTag } = Tag;
const { Option } = Select;
function PatientListBedd() {
   const token = useSelector(selectCurrentToken);
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
   const [selectedInpatientRequest, setSelectedInpatientRequest] =
      useState(Number);
   //
   const getInpatientRequests = async (page, pageSize, process) => {
      setIsLoading(true);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            process: process
         }
      };
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
   const getRooms = async () => {
      const conf = {
         headers: {},
         params: {
            isInpatient: true
         }
      };
      const response = await Get('organization/room', token, conf);
      setRooms(response.data);
   };
   //
   const filteredRooms = rooms?.filter(
      (room) => room.structureId === selectedDepartment
   );
   const filteredBed = rooms?.find((room) => room.id === selectedRoom)?.beds;
   //
   const openModal = (process, state, patient, rowId) => {
      setSelectedInpatientRequest(rowId);
      setSelectedPatient(patient);
      if (process === 0) {
         setIsOpenBedModal(state);
      }
   };
   const setPatientInBed = async (values) => {
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
      console.log(data);
      const response = await Patch(
         `service/inpatient-request/bed/${selectedInpatientRequest}`,
         token,
         conf,
         data
      );
      // console.log(response);
      if (response === 200) {
         // setTestParam(!testParam);
         // setActionType('');
         // setSelectedActionData('');
         setIsOpenBedModal(false);
      }
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
            await Patch(
               `service/inpatient-request/bed/${rowId}`,
               token,
               conf,
               data
            );
         }
      });
   };
   const column = [
      {
         title: '№',
         render: (_, _record, index) => {
            return (
               inpatientRequsetsMeta.page * inpatientRequsetsMeta.limit -
               (inpatientRequsetsMeta.limit - index - 1)
            );
         }
      },
      {
         title: 'Хүсэлт илгээсэн огноо',
         dataIndex: 'createdAt',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Захиалгын төрөл',
         key: 'type',
         render: (_, record, index) => {
            return (
               <div key={index}>
                  {orderType.map((item, index) => {
                     if (item.value === record.process) {
                        return (
                           <img
                              src={require(`../../../assets/bed/${
                                 orderType[item.value].img
                              }`)}
                              width="20"
                              className="inline-block"
                              key={index}
                           />
                        );
                     }
                  })}
               </div>
            );
         }
      },
      {
         title: 'Эмчийн мэдээлэл',
         children: [
            {
               title: 'Овог',
               dataIndex: ['employee', 'lastName']
            },
            {
               title: 'Нэр',
               dataIndex: ['employee', 'firstName']
            }
         ]
      },
      {
         title: 'Өвчтөний мэдээлэл',
         children: [
            {
               title: 'Овог',
               dataIndex: ['patient', 'lastName']
            },
            {
               title: 'Нэр',
               dataIndex: ['patient', 'firstName']
            },
            {
               title: 'Регистр',
               dataIndex: ['patient', 'registerNumber']
            },
            {
               title: 'Хүйс',
               dataIndex: ['patient', 'registerNumber'],
               render: (text) => {
                  return getGender(text);
               }
            },
            {
               title: 'Нас',
               dataIndex: ['patient', 'registerNumber'],
               render: (text) => {
                  return getAge(text);
               }
            }
         ]
      },
      {
         title: 'Хэвтэх үеийн мэдээлэл',
         children: [
            {
               title: 'Тасагын нэр',
               dataIndex: ['structure', 'name']
            },
            {
               title: 'Өрөөны №',
               dataIndex: ['rooms', 'roomNumber']
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
                  <Button
                     type="primary"
                     onClick={() => openModal(0, true, patient, row.id)}
                  >
                     Хэвтүүлэх
                  </Button>
               );
            } else if (row?.process === 2) {
               return (
                  <Button
                     type="primary"
                     onClick={() => setPatientOutBed(row?.bedId, row?.id)}
                  >
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
      getDepartments();
      getRooms();
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
                           <img
                              src={require(`../../../assets/bed/${tag.img}`)}
                              width="20"
                           />
                           {tag.label}
                        </div>
                     </CheckableTag>
                  );
               })}
            </div>
         </div>
         <div className="w-full pt-2">
            <Card
               title="Өвчтөний мэдээлэл"
               bordered={false}
               className="header-solid max-h-max rounded-md mb-2"
            >
               <ConfigProvider locale={localMn()}>
                  <Table
                     rowKey={'id'}
                     scroll={{
                        x: 1500
                     }}
                     bordered
                     rowClassName={'hover:cursor-pointer'}
                     locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                     loading={{
                        spinning: isLoading,
                        tip: 'Уншиж байна....'
                     }}
                     onRow={(row, _rowIndex) => {
                        return {
                           onDoubleClick: () => {
                              open;
                           }
                        };
                     }}
                     columns={column}
                     dataSource={inpatientRequests}
                     pagination={{
                        position: ['topCenter', 'bottomCenter'],
                        size: 'small',
                        current: inpatientRequsetsMeta.page,
                        total: inpatientRequsetsMeta.itemCount,
                        showTotal: (total, range) =>
                           `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                        pageSize: inpatientRequsetsMeta.limit,
                        showSizeChanger: true,
                        pageSizeOptions: ['5', '10', '20', '50'],
                        showQuickJumper: true
                        //  onChange: (page, pageSize) =>
                        //     getData(page, pageSize, pValue, pIndex)
                     }}
                  />
               </ConfigProvider>
            </Card>
         </div>
         <Modal
            title="Эмнэлэгт хэвтүүлэх хэсэг"
            open={isOpenInBedModal}
            onCancel={() => setIsOpenBedModal(false)}
            width="40%"
            bodyStyle={{
               background: '#f8fafc'
            }}
            footer={null}
         >
            <PatientInformation
               OCS={false}
               handlesearch={false}
               patient={selectedPatient}
            />
            <Card
               bordered={false}
               className="header-solid max-h-max rounded-md mt-2"
            >
               <Form onFinish={setPatientInBed}>
                  <Form.Item
                     label="Тасаг"
                     name="depId"
                     rules={[
                        {
                           required: true,
                           message: 'Тасаг заавал сонгоно'
                        }
                     ]}
                  >
                     <Select
                        allowClear
                        showSearch
                        size="small"
                        onSelect={(id) => setSelectedDepartment(id)}
                        placeholder="Сонгох"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                           option.children
                              .toLowerCase()
                              .includes(input.toLowerCase())
                        }
                        filterSort={(optionA, optionB) =>
                           optionA.children
                              .toLowerCase()
                              .localeCompare(optionB.children.toLowerCase())
                        }
                     >
                        {departments?.map((department, index) => {
                           return (
                              <Option key={index} value={department.id}>
                                 {department.name}
                              </Option>
                           );
                        })}
                     </Select>
                  </Form.Item>
                  <Form.Item
                     label="Өрөө"
                     name="roomId"
                     rules={[
                        {
                           required: true,
                           message: 'Өрөө заавал сонгоно'
                        }
                     ]}
                  >
                     <Select onSelect={(room) => setSelectedRoom(room)}>
                        {filteredRooms?.map((room, index) => {
                           return (
                              <Option key={index} value={room.id}>
                                 {`${room.roomNumber} -> ${numberToCurrency(
                                    room.price
                                 )}`}
                              </Option>
                           );
                        })}
                     </Select>
                  </Form.Item>
                  <Form.Item
                     label="Ор"
                     name="bedId"
                     rules={[
                        {
                           required: true,
                           message: 'Ор заавал сонгоно'
                        }
                     ]}
                  >
                     <Select>
                        {filteredBed?.map((bed, index) => {
                           if (bed.status === 3) {
                              return (
                                 <Option key={index} value={bed.id}>
                                    {bed.bedNumber}
                                 </Option>
                              );
                           }
                        })}
                     </Select>
                  </Form.Item>
                  <Form.Item>
                     <Button
                        style={{ width: '100%' }}
                        type="primary"
                        htmlType="submit"
                     >
                        Хэвтүүлэх
                     </Button>
                  </Form.Item>
               </Form>
            </Card>
         </Modal>
      </div>
   );
}
export default PatientListBedd;
