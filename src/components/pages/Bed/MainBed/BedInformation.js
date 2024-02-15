import React, { useState, useEffect, useContext, useMemo } from 'react';
import {
   Segmented,
   Col,
   Row,
   Card,
   Input,
   Tag,
   Modal,
   Divider,
   Collapse,
   Button,
   notification,
   Select,
   Spin,
   Form
} from 'antd';
import {
   AppstoreFilled,
   BorderOutlined,
   LineOutlined,
   SearchOutlined,
   SwapOutlined,
   ToolOutlined,
   UnorderedListOutlined
} from '@ant-design/icons';
import { numberToCurrency, openNofi } from '../../../comman';
import orderType from '../orderType.js';
import roomType from '../roomType.js';
//
import femaleImg from '../../../../assets/bed/female.png';
import manImg from '../../../../assets/bed/male.png';
import otherImg from '../../../../assets/bed/empty_room.png';
//
import BedManagementContext from '../../../../features/BedContext';
import OrganizationStructureServices from '../../../../services/organization/structure';
import OrganizationRoomServices from '../../../../services/organization/room';
import InpatientRequestServices from '../../../../services/service/inpatient';
import { useNavigate } from 'react-router-dom';

const { Panel } = Collapse;

const statusList = [
   { id: 0, label: 'Дүүрсэн' },
   { id: 1, label: 'Цэвэрлэх' },
   { id: 2, label: 'Засвартай' },
   { id: 3, label: 'Сул' }
];

const BedInformation = () => {
   const { bedStatus, setBedStatus } = useContext(BedManagementContext);
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false);
   const [isLoadingModal, setIsLoadingModal] = useState(false);
   const [rooms, setRooms] = useState([]); // all oroo
   const [selectedRoom, setSelectedRoom] = useState(''); //Сонгогдсон Өрөө
   const [departments, setDepartments] = useState([]); // all deps
   const [selectedDepId, setSelectedDepId] = useState(null); // songogdson depId
   const [searchValue, setSearchValue] = useState(''); // oro toot haih utga
   const [selectedBed, setSelectedBed] = useState(''); //Сонгогдсон ор
   const [transferRooms, setTransferRooms] = useState([]); // shiljuuleh ued oroonuud
   const [transferBeds, setTransferBeds] = useState([]); // shiljuuleh ued ornuud
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [orderedPatientList, setOrderedPatientList] = useState([]); //Эмнэлэгт хэвтэхээр захиалга өгсөн өвчтөний жагсаалт
   const [patientInfoOfBed, setPatientInfoOfBed] = useState(''); //Оронд хэвтэж буй өвчтөний мэдээлэл
   const [isTransfer, setIsTransfer] = useState(false);

   //Орон дээр хэвтэж буй өвчтөний мэдээлэл
   const getPatientInformationOfBed = async () => {
      setIsLoadingModal(true);
      await InpatientRequestServices.getBedPatient(selectedBed.id)
         .then(({ data: { response } }) => {
            setPatientInfoOfBed(response);
         })
         .catch(() => {
            setPatientInfoOfBed(null);
         })
         .finally(() => {
            setIsLoadingModal(false);
         });
   };
   //Эмнэлэгт хэвтэхээр захиалга өгсөн өвчтөний жагсаалт авах
   const getOrderedPatient = async () => {
      setOrderedPatientList([]);
      await InpatientRequestServices.getInpatient({
         params: {
            process: '0,1'
         }
      }).then(({ data: { response } }) => {
         setOrderedPatientList(response.data);
      });
   };

   //Өвчтөнг орноос гаргах
   const outPatientBed = async (inpatient_request_id) => {
      setIsLoadingModal(true);
      await InpatientRequestServices.patch(inpatient_request_id, {
         isOut: true,
         process: 2,
         bedId: selectedBed.id
      })
         .then(({ data: { success } }) => {
            if (success) {
               openNofi('success', 'Амжилттай', 'Өвчтөнг амжиллтай шилжүүллээ');
               setIsModalOpen(false);
               getRooms(null);
               setIsTransfer(false);
               setSelectedBed({});
               setPatientInfoOfBed(null);
               getOrderedPatient();
            }
         })
         .finally(() => {
            setIsLoadingModal(false);
         });
   };
   const getDepartment = async () => {
      await OrganizationStructureServices.get({
         params: {
            type: 2
         }
      }).then(({ data: { response } }) => {
         setDepartments(response.data);
      });
   };
   const getRoomsForTransfer = async (depId) => {
      setIsLoadingModal(true);
      await OrganizationRoomServices.getByPageFilter({
         params: {
            structureId: depId,
            status: 3,
            isInpatient: true
         }
      })
         .then(({ data: { response } }) => {
            setTransferRooms(response.data);
         })
         .finally(() => {
            setIsLoadingModal(false);
         });
   };
   const getRooms = async (depId) => {
      setIsLoading(true);
      await OrganizationRoomServices.getByPageFilter({
         params: {
            structureId: depId,
            status: bedStatus === 1 ? null : bedStatus,
            isInpatient: true
         }
      })
         .then(({ data: { response } }) => {
            setRooms(response.data);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   //Оронд хуваарилж хэвтүүлэх
   const setPatientBed = async (inpatient_request_id, patient) => {
      if (selectedBed === '' || selectedBed.status !== 3) {
         notification['warning']({
            message: `Өвчтөн хэвтүүлэх ор сонгоно уу.`,
            description: ``,
            duration: 2
         });
      } else {
         navigate('/main/bed_management/create', {
            state: {
               isRead: true,
               patient: patient,
               roomInfo: {
                  depId: selectedRoom.structureId,
                  floorId: selectedRoom.floorId,
                  roomId: selectedBed.roomId,
                  bedId: selectedBed.id
               },
               inpatientRequestId: inpatient_request_id
            }
         });
      }
   };

   const filteredRooms = useMemo(() => {
      return rooms?.filter((room) => room.roomNumber.includes(searchValue));
   }, [searchValue, rooms]);

   useEffect(() => {
      if (selectedBed.status === 0) {
         getPatientInformationOfBed();
      } else if (selectedBed.status === 3) {
         getOrderedPatient();
      }
   }, [selectedBed]);

   useEffect(() => {
      getRooms(null);
      setSelectedDepId(null);
      setSearchValue('');
   }, [bedStatus]);
   useEffect(() => {
      getDepartment();
   }, []);

   const transferPatient = async (values) => {
      // Өвчтөн шилжүүлэх
      setIsLoadingModal(true);
      await InpatientRequestServices.bedSwitch(patientInfoOfBed.id, {
         ...values,
         process: 2,
         bedOutId: selectedBed.id
      })
         .then(({ data: { success } }) => {
            if (success) {
               openNofi('success', 'Амжилттай', 'Өвчтөнг амжиллтай шилжүүллээ');
               setIsModalOpen(false);
               getRooms(null);
               setIsTransfer(false);
               setSelectedBed({});
               setPatientInfoOfBed(null);
            }
         })
         .finally(() => {
            setIsLoadingModal(false);
         });
   };
   return (
      <>
         <Spin spinning={isLoading}>
            <div className="flex flex-col gap-2">
               <div className="bg-white rounded-xl w-full p-2">
                  <div className="flex justify-between gap-2">
                     <Segmented
                        className="department-bed-segment self-center"
                        size="small"
                        options={[
                           {
                              label: 'Бүгд',
                              value: 1,
                              icon: <UnorderedListOutlined />
                           },
                           {
                              label: 'Сул өрөө',
                              value: 3,
                              icon: <BorderOutlined />
                           },
                           {
                              label: 'Засвартай өрөө',
                              value: 2,
                              icon: <ToolOutlined />
                           },
                           {
                              label: 'Дүүрсэн өрөө',
                              value: 0,
                              icon: <AppstoreFilled />
                           }
                        ]}
                        value={bedStatus}
                        onChange={setBedStatus}
                     />
                     <Select
                        allowClear
                        style={{
                           width: 400
                        }}
                        value={selectedDepId}
                        onChange={(depId) => {
                           setSelectedDepId(depId);
                           getRooms(depId);
                           setSearchValue('');
                        }}
                        options={departments?.map((department) => ({
                           label: department.name,
                           value: department.id
                        }))}
                        placeholder="Тасаг сонгох"
                     />
                     <Input
                        style={{
                           width: 400
                        }}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Өрөө хайх"
                        prefix={<SearchOutlined />}
                     />
                  </div>
               </div>
               <div style={{ height: 780, overflow: 'auto' }}>
                  <div className="grid grid-cols-3 gap-2">
                     {filteredRooms?.map((room, index) => (
                        <Card
                           key={index}
                           style={styles.cardStyle}
                           className="rounded-xl cursor-pointer"
                           bodyStyle={styles.cardBodyStyle}
                           onClick={() => {
                              setPatientInfoOfBed(null);
                              setSelectedRoom(room);
                              setIsModalOpen(true);
                           }}
                        >
                           <div style={{ width: '15%' }}>
                              <img
                                 src={
                                    room.genderType === 'WOMAN'
                                       ? femaleImg
                                       : room.genderType === 'MAN'
                                       ? manImg
                                       : otherImg
                                 }
                                 style={styles.iconStyle}
                                 alt="iconStyle"
                              />
                           </div>
                           <div style={{ width: '85%' }}>
                              <div style={styles.cardRowContainer} className="mb-6">
                                 <div>
                                    <p
                                       style={{
                                          ...styles.total,
                                          ...{
                                             color: '#4a7fc1'
                                          }
                                       }}
                                    >
                                       {room.structure?.name}
                                    </p>
                                    <p style={styles.total}>
                                       {room.roomNumber} -{' '}
                                       {roomType.map((item, index) => {
                                          if (item.value === room.roomType) {
                                             return <span key={index}>{item.label}</span>;
                                          }
                                       })}
                                       - {numberToCurrency(room.price)}
                                    </p>
                                 </div>
                                 <p style={styles.total}>Орны тоо: {room.beds.length}</p>
                              </div>
                              <div style={styles.statusRowContainer}>
                                 <Tag color="success" className="rounded-xl">
                                    Сул:{' '}
                                    <span>
                                       {room.beds?.reduce((sum, val) => {
                                          if (val.status === 3) {
                                             sum += 1;
                                          }
                                          return sum;
                                       }, 0)}
                                    </span>
                                 </Tag>
                                 <Tag color="error" className="rounded-xl">
                                    Засвартай:{' '}
                                    <span>
                                       {room.beds?.reduce((sum, val) => {
                                          if (val.status === 2) {
                                             sum += 1;
                                          }
                                          return sum;
                                       }, 0)}
                                    </span>
                                 </Tag>
                                 <Tag color="warning" className="rounded-xl">
                                    Дүүрсэн:{' '}
                                    <span>
                                       {room.beds?.reduce((sum, val) => {
                                          if (val.status === 0) {
                                             sum += 1;
                                          }
                                          return sum;
                                       }, 0)}
                                    </span>
                                 </Tag>
                              </div>
                           </div>
                        </Card>
                     ))}
                  </div>
               </div>
            </div>
         </Spin>
         <Modal
            title={
               <div className="grid">
                  <span>Өрөөний мэдээлэл</span>
                  <span className="text-xs">
                     <b>Тасаг</b>: {selectedRoom?.structure?.name} <LineOutlined /> <b>Өрөө:</b>{' '}
                     {selectedRoom?.roomNumber} <LineOutlined /> <b>Орны тоо:</b> {selectedRoom?.beds?.length}
                  </span>
               </div>
            }
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            width={800}
            footer={null}
         >
            <Spin spinning={isLoadingModal} tip="Уншиж байна...">
               <Row
                  gutter={{
                     xs: 8,
                     sm: 16,
                     md: 24,
                     lg: 32
                  }}
               >
                  {selectedRoom?.beds?.length > 0 ? (
                     <>
                        {selectedRoom?.beds?.map((bed, index) => (
                           <Col className="gutter-row mb-4 text-center" span={6} key={index}>
                              <div
                                 style={{
                                    ...styles.bedContainer,
                                    ...{
                                       borderColor: selectedBed?.id === bed.id ? '#4a7fc1' : null
                                    }
                                 }}
                                 onClick={() => {
                                    setIsTransfer(false);
                                    setSelectedBed(bed);
                                 }}
                              >
                                 <img
                                    src={
                                       bed.status === 0
                                          ? require('../../../../assets/bed/hunte.png')
                                          : bed.status === 1
                                          ? require('../../../../assets/bed/tsewerleh.png')
                                          : bed.status === 2
                                          ? require('../../../../assets/bed/zaswartai.png')
                                          : bed.status === 3
                                          ? require('../../../../assets/bed/sul.png')
                                          : require('../../../../assets/bed/sul.png')
                                    }
                                    style={{ zIndex: 1, display: 'inline' }}
                                    draggable="false"
                                 />
                              </div>
                              <span style={styles.bedText}>
                                 № {bed.bedNumber} -{' '}
                                 {statusList.map((i) => {
                                    return i.id === bed.status ? i.label : '';
                                 })}
                              </span>
                           </Col>
                        ))}
                     </>
                  ) : (
                     <div className="text-center w-100">
                        <p>Бүртгэлтэй ор байхгүй байна.</p>
                     </div>
                  )}
               </Row>
               <Divider orientation="left" className="text-sm my-2" style={{ color: '#4a7fc1' }}>
                  Өвчтөний мэдээлэл
               </Divider>
               <Col className="gutter-row" span={24}>
                  <Card style={styles.cardStyle} className="rounded-xl" bodyStyle={styles.containerCardBodyStyle}>
                     <div className="w-3/12 pl-4 font-bold">Нэр</div>
                     <div className="w-2/12 font-bold">Регистр</div>
                     <div className="w-2/12 font-bold">Картын дугаар</div>
                     <div className="w-1/12 font-bold">Хүйс</div>
                     <div className="w-3/12 font-bold">Хэвтэх тасаг</div>
                     <div className="w-3/12 font-bold">Захиалга</div>
                  </Card>
               </Col>
               <Col className="gutter-row mt-2" span={24}>
                  {selectedBed.status === 0
                     ? patientInfoOfBed && (
                          <Collapse accordion expandIconPosition="end" ghost className="bed-collapse">
                             <Panel
                                header={
                                   <div
                                      style={{
                                         ...styles.cardBodyStyleList,
                                         ...{}
                                      }}
                                      className="rounded-xl cursor-pointer"
                                   >
                                      <div className="w-3/12 pl-4">
                                         {patientInfoOfBed.patient?.lastName?.substr(0, 1)}.{' '}
                                         {patientInfoOfBed.patient?.firstName}
                                      </div>
                                      <div className="w-2/12 text-xs">{patientInfoOfBed.patient?.registerNumber}</div>
                                      <div className="w-2/12">{patientInfoOfBed.patient?.cardNumber}</div>
                                      <div className="w-1/12">
                                         {patientInfoOfBed.patient?.genderType === 'MAN' ? 'Эр' : 'Эм'}
                                      </div>
                                      <div className="w-3/12">-</div>
                                      <div className="w-3/12">
                                         {orderType.map((item, index) => {
                                            if (item.value === patientInfoOfBed.process) {
                                               return (
                                                  <div key={index}>
                                                     <img
                                                        src={require(`../../../../assets/bed/${item.img}`)}
                                                        width="20"
                                                        className="inline-block"
                                                        key={index}
                                                     />
                                                     <span>{item.label}</span>
                                                  </div>
                                               );
                                            }
                                         })}
                                      </div>
                                   </div>
                                }
                                key="1"
                             >
                                <div>
                                   <div className="text-right">
                                      <Button
                                         className="mr-3"
                                         icon={<SwapOutlined />}
                                         onClick={() => setIsTransfer(!isTransfer)}
                                      >
                                         Шилжүүлэх
                                      </Button>
                                      <Button
                                         type="primary"
                                         className="custom-primary-btn"
                                         onClick={() => outPatientBed(patientInfoOfBed.id)}
                                      >
                                         Гаргах
                                      </Button>
                                   </div>
                                   {isTransfer ? (
                                      <Form layout="vertical" onFinish={transferPatient}>
                                         <div className="border-solid grid grid-cols-3 gap-2 border p-4 rounded-xl mt-2">
                                            <Form.Item
                                               label="Тасаг"
                                               name="departmentId"
                                               rules={[
                                                  {
                                                     required: true,
                                                     message: 'Заавал'
                                                  }
                                               ]}
                                            >
                                               <Select
                                                  allowClear
                                                  onChange={getRoomsForTransfer}
                                                  options={departments?.map((department) => ({
                                                     label: department.name,
                                                     value: department.id
                                                  }))}
                                                  placeholder="Сонгох"
                                               />
                                            </Form.Item>
                                            <Form.Item
                                               label="Өрөө"
                                               name="roomId"
                                               rules={[
                                                  {
                                                     required: true,
                                                     message: 'Заавал'
                                                  }
                                               ]}
                                            >
                                               <Select
                                                  onSelect={(roomId) => {
                                                     setTransferBeds(
                                                        transferRooms?.find((room) => room.id == roomId)?.beds
                                                     );
                                                  }}
                                                  options={transferRooms?.map((room) => ({
                                                     label: room.roomNumber,
                                                     value: room.id
                                                  }))}
                                               />
                                            </Form.Item>
                                            <Form.Item
                                               label="Ор"
                                               name="bedInId"
                                               rules={[
                                                  {
                                                     required: true,
                                                     message: 'Заавал'
                                                  }
                                               ]}
                                            >
                                               <Select
                                                  options={transferBeds?.map((bed) => ({
                                                     label: bed.bedNumber,
                                                     value: bed.id
                                                  }))}
                                               />
                                            </Form.Item>
                                            <Button htmlType="submit" type="primary">
                                               Хадгалах
                                            </Button>
                                         </div>
                                      </Form>
                                   ) : null}
                                </div>
                             </Panel>
                          </Collapse>
                       )
                     : orderedPatientList &&
                       orderedPatientList.map((el, index) => {
                          return (
                             <Collapse accordion expandIconPosition="end" ghost className="bed-collapse" key={index}>
                                <Panel
                                   header={
                                      <div
                                         style={{
                                            ...styles.cardBodyStyleList,
                                            ...{}
                                         }}
                                         className="rounded-xl cursor-pointer"
                                      >
                                         <div className="w-3/12 pl-4">
                                            {el.patient?.lastName?.substr(0, 1)}. {el.patient?.firstName}
                                         </div>
                                         <div className="w-2/12 text-xs">{el.patient?.registerNumber}</div>
                                         <div className="w-2/12">{el.patient?.cardNumber}</div>
                                         <div className="w-1/12">{el.patient?.genderType === 'MAN' ? 'Эр' : 'Эм'}</div>
                                         <div className="w-3/12">{el.structure?.name}</div>
                                         <div className="w-3/12">
                                            {orderType.map((item, index) => {
                                               if (item.value === el.process) {
                                                  return (
                                                     <div key={index}>
                                                        <img
                                                           src={require(`../../../../assets/bed/${item.img}`)}
                                                           width="20"
                                                           className="inline-block"
                                                           key={index}
                                                        />
                                                        <span>{item.label}</span>
                                                     </div>
                                                  );
                                               }
                                            })}
                                         </div>
                                      </div>
                                   }
                                   key="1"
                                >
                                   <div>
                                      <div className="text-right">
                                         <Button
                                            type="primary"
                                            className="custom-primary-btn"
                                            onClick={() => setPatientBed(el.id, el.patient)}
                                         >
                                            Хэвтүүлэх
                                         </Button>
                                      </div>
                                   </div>
                                </Panel>
                             </Collapse>
                          );
                       })}
               </Col>
            </Spin>
         </Modal>
      </>
   );
};
const styles = {
   cardStyle: {},
   cardBodyStyle: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      padding: 12,
      paddingRight: 10,
      paddingLeft: 10,
      width: '100%'
   },
   iconStyle: {
      borderRadius: 6,
      fontSize: 16,
      color: '#fff',
      width: '80%'
   },
   total: {
      fontSize: 16,
      fontWeight: 'bold'
   },
   cardRowContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   statusRowContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end'
   },
   bedContainer: {
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 10,
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvent: 'none',
      borderWidth: 2,
      backgroundColor: 'rgb(188 218 230 / 40%)'
   },
   bedText: {
      fontWeight: 'bold'
   },
   containerCardBodyStyle: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      padding: 5,
      alignItems: 'center',
      width: '100%'
   },
   cardBodyStyleList: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      padding: 5,
      paddingLeft: 0,
      alignItems: 'center',
      width: '100%',
      borderWidth: 1,
      marginTop: 5
   },
   patientInformationContainer: {}
};
export default BedInformation;
