import React, { useEffect, useState } from 'react';
import {
   Button,
   Card,
   ConfigProvider,
   DatePicker,
   Divider,
   Drawer,
   Empty,
   Form,
   Modal,
   Select,
   Space,
   Table
} from 'antd';
import { diagnoseTypeInfo, getAge, getGender, localMn, localMnC, openNofi } from '../../comman';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import {
   CheckOutlined,
   ExclamationCircleOutlined,
   EyeOutlined,
   MinusCircleOutlined,
   PlusCircleOutlined,
   PlusOutlined,
   ReloadOutlined
} from '@ant-design/icons';
import profile from '../../../assets/images/maleAvatar.svg';
//
import General from './General';
import { List } from './Surgery';
import jwtInterceopter from '../../jwtInterceopter';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setEmrData } from '../../../features/emrReducer';
import { useNavigate } from 'react-router-dom';
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
const { confirm } = Modal;

function Index(props) {
   // type ni 0 bol emch
   // type ni 1 bol suwilagch
   // type ni 2 bol tolowlolt hiih
   // type ni 3 bol zahiral confirm hiih
   const { type, currentColumnId } = props;
   ///
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [addForm] = Form.useForm();
   const today = new Date();
   //
   const [isLoadingConfirm, setIsLoadingConfirm] = useState(false);
   const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
   //
   const [isLoading, setIsLoading] = useState(false);
   const [surgeries, setSurgeries] = useState([]);
   const [metaSurgeries, setMetaSurgeries] = useState({});
   const [start, setStart] = useState('');
   const [end, setEnd] = useState('');
   const [patientDiagnosis, setPatientDiagnosis] = useState([]);
   //
   const [selectedSurgery, setSelectedSurgery] = useState({});
   const [filterType, setFIlterType] = useState(null);
   const [isOpenAddModal, setIsOpenAddModal] = useState(false);
   const [isOpenDrawer, setIsOpenDrawer] = useState(false);
   //
   const [selectedCost, setSelectedCost] = useState([]);
   //
   const getEMR = (row) => {
      const data = {
         patientId: row.patientId,
         usageType: 'OUT',
         isInsurance: true
      };
      dispatch(setEmrData(data));
      navigate(`/emr`, {
         state: data
      });
   };
   //
   const showConfirm = (id) => {
      confirm({
         okText: 'Балтах',
         title: 'Do you Want to delete these items?',
         icon: <ExclamationCircleOutlined />,
         content: 'Some descriptions',
         okButtonProps: {
            loading: isLoadingConfirm
         },
         async onOk() {
            setIsLoadingConfirm(true);
            await jwtInterceopter
               .post('tasks/confirm', {
                  columnId: 8,
                  description: 'TEST CONFIRM',
                  taskId: id
               })
               .finally(() => {
                  getSurgeries(1, 10, start, end);
                  setIsLoadingConfirm(false);
               });
         },
         onCancel() {
            console.log('Cancel');
         }
      });
   };
   //
   const handleClickDrawer = async (id, state) => {
      addForm.resetFields();
      await jwtInterceopter
         .get('tasks/' + id)
         .then((response) => {
            setSelectedSurgery(response.data.response);
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
            if (response.data.response?.usageType === 'OUT') {
               return {
                  appointmentId: response.data.response.appointmentId
               };
            } else {
               return {
                  inpatientRequestId: response.data.response.inpatientRequestId
               };
            }
         })
         .then(async (conf) => {
            await jwtInterceopter
               .get('emr/patient-diagnose', {
                  params: conf
               })
               .then((response) => {
                  const diagnosis = response.data.response?.data?.map((item) => {
                     return {
                        code: item.diagnose.code,
                        nameEn: item.diagnose.nameEn,
                        nameMn: item.diagnose.nameMn,
                        nameRu: item.diagnose.nameRu,
                        diagnoseType: item.diagnoseType
                     };
                  });
                  setPatientDiagnosis(diagnosis);
               });
         });
   };
   //
   const types = [
      {
         value: null,
         label: 'Бүх төлөв'
      },
      {
         value: 3,
         label: 'Захиалсан'
      },
      {
         value: 4,
         label: 'Төлөвлөсөн'
      },
      {
         value: 5,
         label: 'Батлагдсан'
      },
      {
         value: 6,
         label: 'Мэс заслын өрөөнд орсон'
      },
      {
         value: 7,
         label: 'Үргэлжилж байгаа'
      },
      {
         value: 8,
         label: 'Дууссан'
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
            return text === 'IN' ? 'Хэвтэн' : 'Амбултори';
         }
      },
      {
         title: 'Төрөл',
         dataIndex: 'taskType',
         render: (text) => {
            if (text === 1) {
               return (
                  <div
                     style={{
                        background: '#13baed',
                        padding: 2,
                        fontWeight: 400,
                        color: 'white'
                     }}
                  >
                     Төлөвлөгөөт
                  </div>
               );
            } else {
               return (
                  <div
                     style={{
                        background: '#e33d3d',
                        padding: 2,
                        fontWeight: 400,
                        color: 'white'
                     }}
                  >
                     Яаралтай
                  </div>
               );
            }
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
         key: 'action',
         render: (_text, row) => {
            return (
               <Space size="middle">
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
                  {type === 0 && row.currentColumn?.columnId === 5 ? (
                     <Button
                        icon={<PlusCircleOutlined />}
                        className="hover:border-[#5cb85c]"
                        style={{
                           display: 'flex',
                           flexDirection: 'row',
                           alignItems: 'center',
                           backgroundColor: '#5cb85c',
                           color: 'white',
                           height: 40
                        }}
                        onClick={() => getEMR(row)}
                     >
                        Үзлэг хийх
                     </Button>
                  ) : null}
                  {type === 2 && (row.currentColumn?.columnId === 3 || row.currentColumn?.columnId === 4) ? (
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
                  ) : null}
                  {type === 3 && row.currentColumn?.columnId === 4 ? (
                     <Button
                        icon={<CheckOutlined />}
                        style={{
                           display: 'flex',
                           flexDirection: 'row',
                           alignItems: 'center'
                        }}
                        onClick={() => showConfirm(row.id)}
                     >
                        Батлах
                     </Button>
                  ) : null}
               </Space>
            );
         }
      }
   ];
   //
   const getSurgeries = async (page, pageSize, start, end) => {
      setIsLoading(true);
      start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      await jwtInterceopter
         .get('tasks', {
            params: {
               page: page,
               limit: pageSize,
               columnId: filterType,
               startDate: moment(start).format('YYYY-MM-DD HH:mm'),
               endDate: moment(end).format('YYYY-MM-DD HH:mm')
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
            setStart(start);
            setEnd(end);
            setIsLoading(false);
         });
   };
   const configDate = (date) => {
      if (date) {
         return moment(date).format('YYYY/MM/DD');
      }
      return '?';
   };
   const onFinish = async (values) => {
      console.log('=->', values);
      const insuranceServiceId = selectedSurgery?.taskWorkers?.surgery.insuranceServiceId;
      if (insuranceServiceId && selectedCost?.length === 0) {
         openNofi('warning', 'Анхааруулга', 'Өртгийн жин заавал сонгох');
      } else {
         try {
            const taskData = {
               startDate: values.startDate,
               icdCode: values.icdCode,
               durationTime: moment(values.durationTime).format('HH:mm'),
               drgCode: insuranceServiceId ? selectedCost[0].drgCode : null,
               taskWorkers: {
                  id: selectedSurgery.taskWorkers.id,
                  operationId: values.taskWorkers.operationId,
                  firstHelperId: values.taskWorkers.firstHelperId,
                  secondHelperId: values.taskWorkers.secondHelperId
               }
            };
            await jwtInterceopter.patch('tasks/' + selectedSurgery.id, taskData);
            const planData = {
               columnId: 4,
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
            await jwtInterceopter.put('tasks/plan/' + selectedSurgery.id, planData);
         } catch (error) {
            console.log(error);
         }
      }
   };
   useEffect(() => {
      getSurgeries(1, 10, today, today, filterType);
   }, [filterType]);
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
                                 getSurgeries(1, 20, e[0], e[1]);
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
                  <ConfigProvider locale={localMn()}>
                     <Table
                        rowKey={'id'}
                        bordered
                        locale={{
                           emptyText: <Empty description={'Хоосон'} />
                        }}
                        loading={isLoading}
                        columns={columns}
                        dataSource={surgeries}
                        pagination={{
                           position: ['topCenter', 'bottomCenter'],
                           size: 'small',
                           current: metaSurgeries.page,
                           total: metaSurgeries.itemCount,
                           showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                           pageSize: metaSurgeries.limit,
                           showSizeChanger: true,
                           pageSizeOptions: ['5', '10', '20', '50'],
                           showQuickJumper: true,
                           onChange: (page, pageSize) => getSurgeries(page, pageSize, start, end, selectedTags)
                        }}
                     />
                  </ConfigProvider>
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
            <Form
               form={addForm}
               layout="vertical"
               initialValues={{
                  ICD10: null
               }}
            >
               <div className="grid grid-cols-2 gap-2">
                  <General
                     form={addForm}
                     selectedSurgery={selectedSurgery}
                     diagnosis={patientDiagnosis}
                     selectedCost={(e) => setSelectedCost(e)}
                  />
                  <div>
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
         <Modal open={isOpenConfirmModal} onCancel={() => setIsOpenConfirmModal(false)}></Modal>
      </div>
   );
}
export default Index;
