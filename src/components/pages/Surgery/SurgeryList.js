import React, { useEffect, useState } from 'react';
import {
   Button,
   Card,
   ConfigProvider,
   DatePicker,
   Descriptions,
   Divider,
   Drawer,
   Form,
   Modal,
   Select,
   Table,
   Tabs
} from 'antd';
import { diagnoseTypeInfo, getAge, getGender, localMnC } from '../../comman';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import {
   EditOutlined,
   EyeOutlined,
   MinusCircleOutlined,
   PlusCircleOutlined,
   PlusOutlined,
   ReloadOutlined
} from '@ant-design/icons';
import profile from '../../../assets/images/maleAvatar.svg';
//
import General from './General';
import Surgery, { List } from './Surgery';
import jwtInterceopter from '../../jwtInterceopter';
import moment, { duration } from 'moment';
//
export const labelStyle = {
   fontSize: 16,
   color: 'black'
};
export const contentStyle = {
   fontWeight: 700,
   fontSize: 16
};
//
const { RangePicker } = DatePicker;
const { Option } = Select;

function SurgeryList() {
   const [addForm] = Form.useForm();
   //
   const [isLoading, setIsLoading] = useState(false);
   const [surgeries, setSurgeries] = useState([]);
   const [metaSurgeries, setMetaSurgeries] = useState({});
   const [diagnosis, setDiagnosis] = useState([]);
   //
   const [selectedSurgery, setSelectedSurgery] = useState({});
   const [filterType, setFIlterType] = useState(0);
   const [isOpenAddModal, setIsOpenAddModal] = useState(false);
   const [isOpenDrawer, setIsOpenDrawer] = useState(false);
   //
   const handleClickDrawer = async (id, state) => {
      await jwtInterceopter.get('tasks/' + id).then((response) => {
         setSelectedSurgery(response.data.response);
         getPatientDiagnosis(response.data.response.patientId, response.data.response.usageType);
         if (state) {
            let data = Object.assign({}, response.data.response);
            if (data.taskDoctorRels?.length === 0) {
               data.taskDoctorRels = [{}];
            }
            if (data.taskNurseRels?.length === 0) {
               data.taskNurseRels = [{}];
            }
            if (data.startDate) {
               data.startDate = moment(data.startDate);
            }
            if (data.durationTime) {
               const [hours, minutes] = data.durationTime.split(':').map(Number);
               data.durationTime = moment().set({
                  hour: hours,
                  minutes: minutes
               });
            }
            addForm.setFieldsValue(data);
            setIsOpenAddModal(true);
         } else {
            setIsOpenDrawer(true);
         }
      });
   };
   //
   const tabsItems = [
      {
         key: 1,
         label: 'Ерөнхий мэдээлэл',
         children: <General form={addForm} selectedSurgery={selectedSurgery} />
      },
      {
         key: 2,
         label: 'Мэс засал',
         children: <Surgery />
      },
      {
         key: 3,
         label: 'Мэдээгүйжүүлэгч / Сувилагч'
      }
   ];
   const types = [
      {
         value: 0,
         label: 'Бүх төлөв'
      },
      {
         value: 1,
         label: 'Энгийн'
      },
      {
         value: 2,
         label: 'Батлагдсан'
      },
      {
         value: 3,
         label: 'Төлөвлөгөөт'
      },
      {
         value: 4,
         label: 'Эрчимт рүү шилжсэн'
      },
      {
         value: 5,
         label: 'Мэс заслын өрөөнд орсон'
      },
      {
         value: 6,
         label: 'Үргэлжилж байгаа'
      },
      {
         value: 7,
         label: 'Дууссан'
      }
   ];
   const testData = [
      {
         id: 1,
         usageType: 'IN',
         type: 1,
         lastName: 'test'
      }
   ];
   const columns = [
      {
         title: '№',
         render: (_, _record, index) => {
            return metaSurgeries.page * metaSurgeries.limit - (metaSurgeries.limit - index - 1);
         }
      },
      {
         title: 'Захиалсан Огноо',
         dataIndex: 'createdAt',
         width: 120,
         render: (text) => {
            return moment(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Хаанаас',
         dataIndex: 'usageType',
         render: (text) => {
            return text === 'IN' ? 'Амбултори' : 'Хэвтэн';
         }
      },
      {
         title: 'Төрөл',
         dataIndex: 'taskType',
         render: (text) => {
            return text === 1 ? 'Яаралтай' : 'Төлөвлөгөөт';
         }
      },
      {
         title: 'Овог',
         dataIndex: 'lastName'
      },
      {
         title: 'Нэр',
         dataIndex: 'firstName'
      },
      {
         title: 'Нас / Хүйс',
         dataIndex: 'registerNumber',
         render: (text) => {
            return (
               <div>
                  {getAge(text)} / {getGender(text)}
               </div>
            );
         }
      },
      {
         title: 'Мэс засал',
         dataIndex: ['taskWorkers', 'surgery', 'name']
      },
      {
         title: 'Хугацаа',
         dataIndex: 'durationTime',
         render: (text) => {
            if (text) return text;
            return '?';
         }
      },
      {
         title: 'Өрөө',
         dataIndex: ['room', 'roomNumber']
      },
      {
         title: 'Төлөв',
         dataIndex: ['currentColumn', 'column', 'name']
      },
      {
         title: '',
         width: 70,
         render: (_text, row) => {
            return (
               <div className="flex justify-between">
                  <Button
                     icon={
                        <EyeOutlined
                           style={{
                              color: 'blue'
                           }}
                        />
                     }
                     onClick={() => handleClickDrawer(row.id, false)}
                  />
                  <Button
                     icon={
                        <PlusCircleOutlined
                           style={{
                              color: 'green'
                           }}
                        />
                     }
                     onClick={() => {
                        handleClickDrawer(row.id, true);
                     }}
                  />
               </div>
            );
         }
      }
   ];
   //
   const getSurgeries = async (page, pageSize) => {
      setIsLoading(true);
      await jwtInterceopter
         .get('tasks', {
            params: {
               page: page,
               limit: pageSize
            }
         })
         .then((response) => {
            setSurgeries(response.data.response.data);
            setMetaSurgeries(response.data.response.meta);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const configDate = (date) => {
      if (date) {
         return moment(date).format('YYYY/MM/DD');
      }
      return '?';
   };
   const getPatientDiagnosis = async (patientId, usageType) => {
      await jwtInterceopter
         .get('emr/patient-diagnose', {
            params: {
               patientId: patientId,
               usageType: usageType
            }
         })
         .then((response) => {
            console.log(response);
            setDiagnosis(response.data.response.data);
         });
   };
   const onFinish = async (values) => {
      try {
         const taskData = {
            startDate: values.startDate,
            durationTime: moment(values.durationTime).format('HH:mm'),
            taskWorkers: {
               id: selectedSurgery.taskWorkers.id,
               operationId: values.taskWorkers.operationId,
               firstHelperId: values.taskWorkers.firstHelperId,
               secondHelperId: values.taskWorkers.secondHelperId
            }
         };
         await jwtInterceopter.patch('tasks/' + selectedSurgery.id, taskData);
         const planData = {
            columnId: 2,
            roomId: values.roomId,
            doctorId: values.taskWorkers.operationId,
            description: 'TEST SHU',
            nurses: values.taskNurseRels?.map((nurse) => {
               return nurse.userId.toString();
            }),
            doctors: values.taskDoctorRels?.map((doctor) => {
               return doctor.userId.toString();
            })
         };
         console.log(planData);
         await jwtInterceopter.put('tasks/plan/' + selectedSurgery.id, planData);
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      getSurgeries(1, 10);
   }, []);
   return (
      <div>
         <Card bordered={false} className="header-solid max-h-max rounded-md">
            <div className="flex flex-col gap-3">
               <div className="flex justify-between">
                  <div className="flex flex-row gap-3">
                     <ConfigProvider locale={localMnC()}>
                        <RangePicker
                           style={{
                              width: 500
                           }}
                           onChange={(e) => {
                              if (e != null) {
                                 //   getAppointment(1, 20, e[0], e[1], selectedTags);
                              }
                           }}
                           locale={mnMN}
                        />
                     </ConfigProvider>
                     <div>
                        <Select
                           style={{
                              width: 200
                           }}
                           defaultValue={filterType}
                           onChange={(e) => setFIlterType(e)}
                           placeholder="Төрөл сонгох"
                        >
                           {types?.map((type, index) => {
                              return (
                                 <Option key={index} value={type.value}>
                                    {type.label}
                                 </Option>
                              );
                           })}
                        </Select>
                     </div>
                  </div>
                  <div>
                     <Button title="Сэргээх" type="primary" onClick={() => getSurgeries(1, 10)}>
                        <ReloadOutlined />
                     </Button>
                  </div>
               </div>
               <div>
                  <Table rowKey={'id'} bordered loading={isLoading} columns={columns} dataSource={surgeries} />
               </div>
            </div>
         </Card>
         <Modal
            title="Мэс засал"
            open={isOpenAddModal}
            onCancel={() => setIsOpenAddModal(false)}
            onOk={() => addForm.validateFields().then((values) => onFinish(values))}
            width={'60%'}
            forceRender={true}
         >
            <Form form={addForm} layout="vertical">
               <div className="flex flex-wrap">
                  <div className="basis-1/3 pr-1">
                     <General form={addForm} selectedSurgery={selectedSurgery} />
                  </div>
                  <div className="basis-2/3 pl-1">
                     <div className="flex flex-col gap-2">
                        <List label="Оператор" name={['taskWorkers', 'operationId']} />
                        <List label="Нэгдүгээр туслах эмч" name={['taskWorkers', 'firstHelperId']} />
                        <List label="2 дугаар туслах эмч" name={['taskWorkers', 'secondHelperId']} />
                        <Form.List name="taskDoctorRels">
                           {(fields, { add, remove }) => (
                              <>
                                 {fields.map(({ key, name, ...restField }) => (
                                    <div key={key} className="flex flex-row gap-2">
                                       <List
                                          {...restField}
                                          label={`Мэдээгүйжүүлэгч ${key + 1}`}
                                          name={[name, 'userId']}
                                       />
                                       <div
                                          style={{
                                             background: 'red',
                                             padding: 3,
                                             borderRadius: 6,
                                             display: 'flex',
                                             alignItems: 'center'
                                          }}
                                       >
                                          <MinusCircleOutlined
                                             style={{
                                                padding: 1,
                                                color: 'white',
                                                fontSize: 16
                                             }}
                                             onClick={() => remove(name)}
                                          />
                                       </div>
                                    </div>
                                 ))}
                                 <Form.Item>
                                    <Button
                                       style={{
                                          background: 'green',
                                          color: 'white'
                                       }}
                                       type="dashed"
                                       onClick={() => add()}
                                       block
                                       icon={<PlusOutlined />}
                                    >
                                       Нэмэх
                                    </Button>
                                 </Form.Item>
                              </>
                           )}
                        </Form.List>
                        <Form.List name="taskNurseRels">
                           {(fields, { add, remove }) => (
                              <>
                                 {fields.map(({ key, name, ...restField }) => (
                                    <div key={key} className="flex flex-row gap-2">
                                       <List {...restField} label={`Сувилагч ${key + 1}`} name={[name, 'userId']} />
                                       <div
                                          style={{
                                             background: 'red',
                                             padding: 3,
                                             borderRadius: 6,
                                             display: 'flex',
                                             alignItems: 'center'
                                          }}
                                       >
                                          <MinusCircleOutlined
                                             style={{
                                                padding: 1,
                                                color: 'white',
                                                fontSize: 16
                                             }}
                                             onClick={() => remove(name)}
                                          />
                                       </div>
                                    </div>
                                 ))}
                                 <Form.Item>
                                    <Button
                                       style={{
                                          background: 'green',
                                          color: 'white'
                                       }}
                                       type="dashed"
                                       onClick={() => add()}
                                       block
                                       icon={<PlusOutlined />}
                                    >
                                       Нэмэх
                                    </Button>
                                 </Form.Item>
                              </>
                           )}
                        </Form.List>
                     </div>
                  </div>
               </div>
            </Form>
         </Modal>
         <Drawer title="Мэс заслын мэдээлэл" width={'30%'} open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
            <div className="flex flex-col gap-3">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3">
                     <Divider
                        orientation="left"
                        className="self-center"
                        style={{
                           fontWeight: 700,
                           fontSize: 18,
                           marginTop: 0
                        }}
                     >
                        Үндсэн мэдээлэл
                     </Divider>
                     <div className="grid grid-cols-2 justify-items-start gap-2">
                        <p style={labelStyle}>Овог:</p>
                        <p style={contentStyle}>{selectedSurgery?.lastName}</p>
                        <p style={labelStyle}>Нэр:</p>
                        <p style={contentStyle}>{selectedSurgery?.firstName}</p>
                        <p style={labelStyle}>Регистрийн дугаар:</p>
                        <p style={contentStyle}>{selectedSurgery?.registerNumber}</p>
                        <p style={labelStyle}>Онош:</p>
                        <p>
                           {selectedSurgery.diagnose?.map((diagnose, index) => {
                              return (
                                 <span key={index} className="flex flex-col">
                                    <span className="font-semibold">{diagnoseTypeInfo(diagnose.diagnoseType)}: </span>
                                    <span>{'[' + diagnose?.code + ']' + diagnose?.nameMn}</span>
                                 </span>
                              );
                           })}
                        </p>
                        <p style={labelStyle}>Огноо:</p>
                        <p style={contentStyle}>{configDate(selectedSurgery?.startDate)}</p>
                        <p style={labelStyle}>Үргэжлэх хугацаа:</p>
                        <p style={contentStyle}>{selectedSurgery?.durationTime}</p>
                     </div>
                  </div>
               </div>
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3">
                     <div className="grid grid-cols-2 my-3">
                        <p style={contentStyle}>Мэс засал:</p>
                        <p style={contentStyle}>{selectedSurgery?.taskWorkers?.surgery?.name}</p>
                     </div>
                     <Divider orientation="left" className="self-center">
                        Эмч нар
                     </Divider>
                     <div className="flex flex-row gap-3 justify-center">
                        {selectedSurgery?.taskWorkers?.operation ? (
                           <div className="flex flex-row gap-1">
                              <img src={profile} className="w-12" />
                              <div className="">
                                 <p style={labelStyle}>{selectedSurgery?.taskWorkers?.operation?.lastName}</p>
                                 <p>{selectedSurgery?.taskWorkers?.operation?.firstName}</p>
                              </div>
                           </div>
                        ) : null}
                        {selectedSurgery?.taskWorkers?.firstHelper ? (
                           <div className="flex flex-row gap-1">
                              <img src={profile} className="w-12" />
                              <div className="">
                                 <p style={labelStyle}>{selectedSurgery?.taskWorkers?.firstHelper?.lastName}</p>
                                 <p>{selectedSurgery?.taskWorkers?.firstHelper?.firstName}</p>
                              </div>
                           </div>
                        ) : null}
                        {selectedSurgery?.taskWorkers?.secondHelper ? (
                           <div className="flex flex-row gap-1">
                              <img src={profile} className="w-12" />
                              <div className="">
                                 <p style={labelStyle}>{selectedSurgery?.taskWorkers?.secondHelper?.lastName}</p>
                                 <p>{selectedSurgery?.taskWorkers?.secondHelper?.firstName}</p>
                              </div>
                           </div>
                        ) : null}
                     </div>
                     <Divider orientation="left" className="self-center">
                        Мэдээгүйжүүлэгч
                     </Divider>
                     <Divider orientation="left" className="self-center">
                        Сувилагч нар
                     </Divider>
                  </div>
               </div>
            </div>
         </Drawer>
      </div>
   );
}
export default SurgeryList;
