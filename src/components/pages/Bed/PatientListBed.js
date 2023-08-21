import { Col, Row, Button, Tag, Modal, Input, Select, notification } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import UTable from '../../UTable';
import orderType from './orderType.json';
import { Get, Patch } from '../../comman';
import PatientListBedd from './PatientListBedd';

function PatientListBed() {
   const token = useSelector(selectCurrentToken);
   const [selectedTags, setSelectedTags] = useState([]);
   const [testParam, setTestParam] = useState(true);
   const [searchValue, setSearchValue] = useState('');
   const [patientList, setPatientList] = useState([]);
   const [selectedActionData, setSelectedActionData] = useState('');
   const [actionType, setActionType] = useState('');
   const [department, setDepartment] = useState(''); //Тасаг
   const [roomsOfDef, setRoomsOfDef] = useState('');
   const [selectedDep, setSelectedDep] = useState(''); //Сонгогдсон Тасаг
   const [selectedRoom, setSelectedRoom] = useState(''); //Сонгогдсон Өрөө
   const [selectedNewBed, setSelectedNewBed] = useState(''); //Сонгогдсон Ор
   const [beds, setBeds] = useState([]); //ор

   const [data, setData] = useState({});
   const { CheckableTag } = Tag;
   const { Search } = Input;

   const config = {
      headers: {},
      params: {}
   };
   const getDepartment = async () => {
      config.params.type = 2;
      config.params.startDate = null;
      config.params.endDate = null;
      const response = await Get('organization/structure', token, config);
      // console.log("response", response);
      if (response.data.length != 0) {
         response.data.map((el, index) => {
            setDepartment((department) => [...department, { label: el.name, value: el.id }]);
         });
      }
   };
   const getPatientListData = async () => {
      const response = await Get(`service/inpatient-request`, token, config);
      // console.log("xxxxxxxxxxxxxx ====>", response);
      if (response.data) {
         setPatientList(response.data);
      } else {
      }
   };

   const [isModalOpen, setIsModalOpen] = useState(false);
   const handleCancel = () => {
      setIsModalOpen(false);
   };

   const handleChangeTransfer = (value) => {
      setRoomsOfDef([]);
      setSelectedDep(value);
   };
   const handleChangeRoom = (value) => {
      setBeds([]);
      setSelectedRoom(value);
   };
   const handleChangeBed = (value) => {
      setSelectedNewBed(value);
   };

   useEffect(() => {
      setRoomsOfDef([]);
      setSelectedRoom('');
      setSelectedNewBed('');
      getRoomsOfDep();
   }, [selectedDep]);
   const column = [
      {
         index: ['patient', 'lastName'],
         label: '',
         isView: true,
         input: 'input',
         relation: true,
         staticData: (data) => {
            return <>{data?.substr(0, 1)}.</>;
         },
         col: 6
      },
      {
         index: ['patient', 'firstName'],
         label: 'Овог Нэр',
         isView: true,
         input: 'input',
         col: 24,
         relation: true
      },
      {
         index: ['rooms', 'roomNumber'],
         label: 'Өрөө',
         isView: true,
         input: 'input',
         col: 24,
         relation: true
      },
      {
         index: ['patient', 'cardNumber'],
         label: 'Картын дугаар',
         isView: true,
         input: 'input',
         col: 24,
         relation: true
      },
      {
         index: ['patient', 'registerNumber'],
         label: 'Регистр',
         isView: true,
         input: 'input',
         col: 24,
         relation: true
      },
      {
         index: ['patient', 'genderType'],
         label: 'Хүйс',
         isView: true,
         input: 'input',
         col: 24,
         relation: true
      },
      {
         index: ['patient', 'age'],
         label: 'Нас',
         isView: true,
         input: 'input',
         col: 24,
         relation: true
      },
      {
         index: ['structure', 'name'],
         label: 'Хэвтэх тасаг',
         isView: true,
         input: 'input',
         col: 24,
         relation: true
      },
      {
         index: 'startDate',
         label: 'Хэвтэх өдөр',
         isView: true,
         input: 'date',
         col: 24,
         staticData: (data) => {
            return <>{data?.substr(0, 10)}</>;
         }
      },
      {
         index: 'endDate',
         label: 'Гарах өдөр',
         isView: true,
         input: 'date',
         col: 24,
         staticData: (data) => {
            return <>{data?.substr(0, 10)}</>;
         }
      },
      {
         index: 'outDate',
         label: 'Гарсан өдөр',
         isView: true,
         input: 'date',
         col: 24,
         staticData: (data) => {
            return <>{data?.substr(0, 10)}</>;
         }
      },
      {
         index: 'process',
         label: 'Захиалгын төрөл',
         isView: true,
         input: 'input',
         staticData: (type) => {
            return (
               <img src={require(`../../../assets/bed/${orderType[type].img}`)} width="20" className="inline-block" />
            );
         },
         col: 24
      },
      {
         index: 'id',
         label: 'Хэвтүүлэх',
         isView: true,
         input: 'input',
         staticData: (data) => {
            return (
               <Button
                  type="primary"
                  className="custom-primary-btn"
                  onClick={() => {
                     setActionType('inbed');
                     patientList.map((el, index) => {
                        if (el.id === data) {
                           setSelectedActionData(el);
                        }
                     });
                  }}
               >
                  Хэвтүүлэх
               </Button>
            );
         },
         col: 24
      },
      {
         index: 'id',
         label: 'Гаргах',
         isView: true,
         input: 'input',
         staticData: (data) => {
            return (
               <Button
                  type="primary"
                  className="custom-primary-btn"
                  onClick={() => {
                     setActionType('outbed');
                     patientList.map((el, index) => {
                        if (el.id === data) {
                           setSelectedActionData(el);
                        }
                     });
                  }}
               >
                  Гаргах
               </Button>
            );
         },
         col: 24
      }
   ];

   const getRoomsOfDep = async () => {
      config.params.structureId = selectedDep;
      const response = await Get('organization/room', token, config);
      // console.log("response InformationBed", response);
      if (response.data.length != 0) {
         response.data.map((el, index) => {
            setRoomsOfDef((roomsOfDef) => [...roomsOfDef, { label: el.roomNumber, value: el.id, beds: el.beds }]);
         });
      }
   };

   const handleChangeTag = (tag, checked) => {
      const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
      setSelectedTags(nextSelectedTags);
   };

   useEffect(() => {
      getDepartment();
      getPatientListData();
   }, []);
   useEffect(() => {
      setTestParam(!testParam);
   }, [selectedTags]);

   useEffect(() => {
      setTestParam(!testParam);
   }, [searchValue]);

   //Өвчтөнг орноос гаргах
   const outBed = async () => {
      data.isOut = true;
      data.process = 2;
      data.bedId = selectedActionData.bedId;
      const response = await Patch(`service/inpatient-request/bed/${selectedActionData.id}`, token, config, data);
      if (response === 200) {
         setTestParam(!testParam);
         setActionType('');
         setSelectedActionData('');
      }
   };
   //Оронд хуваарилж хэвтүүлэх
   const setPatientBed = async () => {
      if (selectedRoom === '') {
         notification['warning']({
            message: `Өрөө сонгоно уу.`,
            description: ``,
            duration: 2
         });
      } else if (selectedNewBed === '') {
         notification['warning']({
            message: `Өвчтөн хэвтүүлэх ор сонгоно уу.`,
            description: ``,
            duration: 2
         });
      } else {
         data.roomId = selectedRoom;
         data.bedId = selectedNewBed;
         data.isOut = false;
         data.process = 0;
         console.log(selectedActionData);
         console.log(data);
         // const response = await Patch(
         //    `service/inpatient-request/bed/${selectedActionData.id}`,
         //    token,
         //    config,
         //    data
         // );
         // if (response === 200) {
         //    setTestParam(!testParam);
         //    setActionType('');
         //    setSelectedActionData('');
         //    setIsModalOpen(false);
         // }
      }
   };
   useEffect(() => {
      if (actionType == 'inbed') {
         setIsModalOpen(true);
         // setPatientBed();
      } else if (actionType == 'outbed') {
         outBed();
      }
   }, [actionType, selectedActionData]);

   useEffect(() => {
      setSelectedNewBed('');
      roomsOfDef &&
         roomsOfDef?.map((el) => {
            if (el.value === selectedRoom) {
               el.beds.map((el, bedIndex) => {
                  if (el.status === 3) {
                     //Зөвхөн сул ор харуулах
                     setBeds((beds) => [...beds, { label: el.bedNumber, value: el.id }]);
                  }
               });
            }
         });
   }, [selectedRoom]);
   return (
      <div className="p-6">
         <PatientListBedd />
         <Row>
            <Col span={6}>
               <Search placeholder="" allowClear enterButton="Хайх" size="large" onSearch={(e) => setSearchValue(e)} />
            </Col>
         </Row>
         <Row className="mt-4">
            <Col span={2} className="contents">
               {orderType.map((tag) => {
                  return (
                     <div key={tag.value} className="border-blue-400 rounded-sm border mr-2 mb-2">
                        <CheckableTag
                           checked={selectedTags.includes(tag.value)}
                           onChange={(checked) => {
                              handleChangeTag(tag.value, checked);
                           }}
                           style={{
                              display: 'flex',
                              fontSize: 14,
                              width: '100%'
                           }}
                        >
                           <div
                              className="mr-2"
                              style={{
                                 display: 'flex',
                                 alignItems: 'center'
                              }}
                           >
                              <img src={require(`../../../assets/bed/${tag.img}`)} width="20" />
                           </div>
                           {tag.label}
                        </CheckableTag>
                     </div>
                  );
               })}
            </Col>
         </Row>
         <Row gutter={[24, 6]} className="mt-4">
            <Col className="gutter-row" span={24}>
               <UTable
                  title={'Өвчтөний мэдээлэл'}
                  url={'service/inpatient-request'}
                  params={{
                     params: {
                        process: selectedTags.toString(),
                        filter: searchValue
                     }
                  }}
                  column={column}
                  width="60%"
                  isCreate={false}
                  isRead={true}
                  isUpdate={true}
                  isDelete={false}
                  isRefresh={testParam}
               />
            </Col>
         </Row>
         <Modal title="Өвчтөн хуваарилах" open={isModalOpen} onCancel={handleCancel} footer={false}>
            <div>
               <div className="text-right">
                  <Row>
                     <Col span={4}>Тасаг</Col>
                     <Col span={12}>
                        <Select
                           allowClear
                           style={{
                              width: 200
                           }}
                           onChange={handleChangeTransfer}
                           value={selectedDep || undefined}
                           options={department}
                           placeholder="Сонгох"
                        />
                     </Col>
                  </Row>
                  <Row className="mt-2">
                     <Col span={4}>Өрөө</Col>
                     <Col span={12}>
                        <Select
                           allowClear
                           style={{
                              width: 200
                           }}
                           onChange={handleChangeRoom}
                           value={selectedRoom || undefined}
                           options={roomsOfDef}
                           placeholder="Сонгох"
                        />
                     </Col>
                  </Row>
                  <Row className="mt-2">
                     <Col span={4}>Ор</Col>
                     <Col span={12}>
                        <Select
                           allowClear
                           style={{
                              width: 200
                           }}
                           onChange={handleChangeBed}
                           value={selectedNewBed || undefined}
                           options={beds}
                           placeholder="Сонгох"
                        />
                     </Col>
                  </Row>
                  <Row className="mt-2">
                     <Col span={4}></Col>
                     <Col span={12}>
                        <Button
                           style={{
                              width: 200
                           }}
                           type="primary"
                           className="custom-primary-btn"
                           onClick={() => setPatientBed()}
                        >
                           Хадгалах
                        </Button>
                     </Col>
                  </Row>
               </div>
            </div>
         </Modal>
      </div>
   );
}

export default PatientListBed;
