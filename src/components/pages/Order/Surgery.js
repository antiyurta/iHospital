import React, { useMemo, useState } from 'react';
import {
   Button,
   Checkbox,
   ConfigProvider,
   DatePicker,
   Divider,
   Empty,
   Form,
   Modal,
   Select,
   Space,
   Table,
   TimePicker
} from 'antd';
import { CloseCircleOutlined, FormOutlined, PlusOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { ListCareType } from './list-type';
import { CARE_TYPE } from './care-enum';
import { ListSupport } from './list-support';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import locale from 'antd/es/locale/mn_MN';
import 'moment/locale/mn';
import moment from 'moment';
moment.updateLocale('mn', {
   week: {
      dow: 1
   }
});

const labelstyle = {
   fontSize: 14,
   color: 'black',
   fontWeight: 700
};
const contentStyle = {
   color: '#6B7785',
   fontWeight: 400,
   fontSize: 14
};

const rules = [
   {
      required: true,
      message: 'Заавал'
   }
];
//imgs
import surgeryIcon from './NewOrder/surgeryIcon.svg';
//common
import { TypeInfo } from '@Comman/ListInjection';
import { diagnoseTypeInfo, numberToCurrency, openNofi } from '@Comman/common';
//comp
import { EmployeeList, FormListEmployee } from './SurgeryEmployee';
//api
import RoomApi from '@ApiServices/organization/room';
import EmployeeApi from '@ApiServices/organization/employee';
import PatientDiagnoseApi from '@ApiServices/emr/patientDiagnose';
//redux
import { selectCurrentDepId } from '@Features/authReducer';
//defaults

const timeTable = () => {
   const data = [];
   for (let index = 8; index < 24; index++) {
      if (index.toString().length === 1) {
         data.push({
            time: `0${index}:00`
         });
      } else {
         data.push({
            time: `${index}:00`
         });
      }
   }
   for (let index = 0; index < 7; index++) {
      if (index.toString().length === 1) {
         data.push({
            time: `0${index}:00`
         });
      } else {
         data.push({
            time: `${index}:00`
         });
      }
   }
   return data;
};

function Surgery(props) {
   const { patientId, appointmentId, usageType, selectedSurgery, handleclick } = props;
   const depIds = useSelector(selectCurrentDepId);
   //tolowlogo
   const [form] = Form.useForm();
   const [diagnosis, setDiagnosis] = useState([]);
   const [rooms, setRooms] = useState([]);
   const [isAnes, setAnes] = useState(false);
   const [employees, setEmployess] = useState([]);
   const [selectedWeek, setWeek] = useState(moment().startOf('week').toDate());
   //tolowlogo
   const [isOpenModalPlan, setOpenModalPlan] = useState(false);
   const [isOpenModalWarning, setOpenModalWarning] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [selectedSurgeries, setSelectedSurgeries] = useState([]);
   const [selectedTypeId, setSelectedTypeId] = useState(null);

   const add = (surgery) => {
      const state = selectedSurgeries.some((surg) => surg.id === surgery.id);
      if (state) {
         openNofi('warning', 'Анхааруулга', 'Мэс ажилбар сонгогдсон байна');
      } else {
         const clone = { ...surgery };
         clone.type = surgery.type?.type;
         setSelectedSurgeries([...selectedSurgeries, clone]);
      }
   };
   const remove = (index) => {
      var arr = [...selectedSurgeries];
      arr.splice(index, 1);
      setSelectedSurgeries(arr);
   };
   const getRooms = async () => {
      await RoomApi.getByPageFilter({
         params: {
            isSurgury: true
         }
      }).then(({ data: { response } }) => {
         setRooms(response.data);
      });
   };
   const getPatientDiagnosis = async () => {
      await PatientDiagnoseApi.getByPageFilter({
         patientId: patientId,
         appointmentId: appointmentId
      }).then(({ data: { response } }) => {
         setDiagnosis(
            response.data?.map((item) => ({
               code: item.diagnose.code,
               nameEn: item.diagnose.nameEn,
               nameMn: item.diagnose.nameMn,
               nameRu: item.diagnose.nameRu,
               diagnoseType: diagnoseTypeInfo(item.diagnoseType)
            }))
         );
      });
   };
   const getEmployees = async () => {
      await EmployeeApi.getEmployee({
         params: {
            depId: depIds.toString()
         }
      }).then((response) => {
         setEmployess(response.data.response.data);
      });
   };

   const middleware = () => {
      if (selectedSurgery?.hasOwnProperty('surguryRequestId')) {
         setOpenModalWarning(true);
      } else {
         setIsOpenModal(true);
         setSelectedSurgeries([]);
      }
   };

   const timeColumns = useMemo(() => {
      var days = ['Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба', 'Ням'];
      const data = [
         {
            title: 'Цаг',
            dataIndex: 'time',
            className: 'text-[#A9AEB8] text-xs font-normal'
         }
      ];
      for (let index = 0; index < 7; index++) {
         data.push({
            title: (
               <>
                  <p className="text-[#A9AEB8] text-xs font-normal">{days[index]}</p>
                  <p className="text-[#A9AEB8] text-xs font-normal">
                     {selectedWeek.getMonth() + index + 1}/{selectedWeek.getDate() + index}
                  </p>
               </>
            ),
            dataIndex: 'time',
            render: (time) => (
               <Checkbox
                  onChange={(e) => {
                     console.log(e.target.checked);
                     console.log('alitsag', time);
                     console.log('ali odor', index);
                  }}
               />
            )
         });
      }
      return data;
   }, [selectedWeek]);

   return (
      <>
         <button
            className="yellow-order"
            onClick={(event) => {
               event.preventDefault();
               middleware();
            }}
         >
            <img src={surgeryIcon} />
            Мэс засал
         </button>
         <Modal
            title="Мэс засал сонгох"
            width={'80%'}
            open={isOpenModal}
            bodyStyle={{
               height: 600,
               maxHeight: 600,
               overflow: 'auto'
            }}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               handleclick(selectedSurgeries);
               setIsOpenModal(false);
            }}
            okText={'Хадгалах'}
            cancelText={'Болих'}
         >
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-3">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div
                     className="p-3"
                     style={{
                        height: 552,
                        overflow: 'auto'
                     }}
                  >
                     <div className="flex flex-col gap-2">
                        <ListCareType type={CARE_TYPE.Surgery} getTypeById={setSelectedTypeId} />
                     </div>
                  </div>
               </div>
               <div className="grid sm:grid-cols-1 sm:col-span-2 xl:grid-cols-2 lg:col-span-3 gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <ListSupport careType={CARE_TYPE.Surgery} careTypeId={selectedTypeId} add={add} />
                  </div>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <Table
                           rowKey={'id'}
                           bordered
                           scroll={{
                              y: 400
                           }}
                           locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                           columns={[
                              {
                                 title: 'Нэр',
                                 dataIndex: 'name',
                                 render: (text) => <p className="whitespace-normal text-black">{text}</p>
                              },
                              {
                                 title: 'Үнэ',
                                 dataIndex: usageType === 'OUT' ? 'price' : 'inpatientPrice',
                                 width: 100,
                                 render: (text) => numberToCurrency(text)
                              },
                              {
                                 title: '',
                                 width: 40,
                                 render: (_text, _row, index) => (
                                    <Button
                                       onClick={() => remove(index)}
                                       icon={
                                          <CloseCircleOutlined
                                             style={{
                                                color: 'red'
                                             }}
                                          />
                                       }
                                    />
                                 )
                              }
                           ]}
                           dataSource={selectedSurgeries}
                           pagination={false}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
         <Modal
            title="Сонгох"
            open={isOpenModalWarning}
            onCancel={() => {
               setOpenModalWarning(false);
            }}
            width={320}
            footer={null}
         >
            <Space align="center">
               <Button
                  type="primary"
                  icon={<FormOutlined />}
                  onClick={() => {
                     setOpenModalWarning(true);
                     setOpenModalPlan(true);
                     getPatientDiagnosis();
                     getEmployees();
                     getRooms();
                  }}
               >
                  Төлөвлөх
               </Button>
               <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => {
                     setOpenModalWarning(false);
                     setIsOpenModal(true);
                  }}
               >
                  Шинэ захиалга
               </Button>
            </Space>
         </Modal>
         <Modal
            title="Мэс засал төлөвлөх цонх"
            open={isOpenModalPlan}
            onCancel={() => {
               setOpenModalPlan(false);
            }}
            width={'80%'}
         >
            <Form
               form={form}
               layout="vertical"
               initialValues={{
                  taskDoctorRels: [
                     {
                        id: 1
                     }
                  ],
                  taskNurseRels: [
                     {
                        id: 1
                     }
                  ]
               }}
            >
               <div className="flex flex-row gap-2">
                  <div className="flex flex-col gap-2 bg-[#F7F8FA] rounded-lg p-2 w-[200px]">
                     <p style={labelstyle}>Мэс засал:</p>
                     <p style={contentStyle}>{selectedSurgery?.name}</p>
                     <p style={labelstyle}>Мэс заслын төрөл:</p>
                     {selectedSurgery?.isCito ? (
                        <TypeInfo bgColor="#e33d3d" textColor="white" text={'Яаралтай'} />
                     ) : (
                        <TypeInfo bgColor="#13baed" textColor="black" text={'Төлөвлөгөөт'} />
                     )}
                     <Form.Item className="mb-0" label="Онош" name="icdCode" rules={rules}>
                        <Select
                           options={diagnosis?.map((diagnose) => ({
                              label: `${diagnose.code} - ${diagnose.diagnoseType}`,
                              value: diagnose.code
                           }))}
                        />
                     </Form.Item>
                     <Form.Item className="mb-0" label="Огноо:" name="startDate" rules={rules}>
                        <DatePicker locale={mnMN} />
                     </Form.Item>
                     <Form.Item className="mb-0" label="Үргэлжлэх хугацаа:" name="durationTime" rules={rules}>
                        <TimePicker format={'HH:mm'} locale={mnMN} />
                     </Form.Item>
                     <Checkbox
                        onChange={(e) => {
                           setAnes(e.target.checked);
                        }}
                     >
                        <span
                           style={{
                              ...labelstyle,
                              whiteSpace: 'break-spaces'
                           }}
                        >
                           Мэдээгүйжүүлгийн эмчийн үзлэг захиалах
                        </span>
                     </Checkbox>
                  </div>
                  <div className="flex flex-col gap-2 bg-[#F7F8FA] rounded-lg p-2 min-w-[320px]">
                     <Divider className="my-0">Мэс заслын ажиллагааны баг</Divider>
                     <EmployeeList
                        label="Мэс заслын эмч:"
                        name={['taskWorkers', 'operationId']}
                        employees={employees}
                     />
                     <EmployeeList
                        label="1-р туслах эмч:"
                        name={['taskWorkers', 'firstHelperId']}
                        employees={employees}
                     />
                     <EmployeeList
                        label="2-р туслах эмч:"
                        name={['taskWorkers', 'secondHelperId']}
                        employees={employees}
                     />
                     {isAnes ? (
                        <EmployeeList label="Мэдээгүйжүүлэгч эмч:" name={['taskWorkers', 'dd']} employees={employees} />
                     ) : null}
                     <FormListEmployee formName="taskDoctorRels" label="Мэдээгүйжүүлэгч" employees={employees} />
                     <FormListEmployee formName="taskNurseRels" label="Сувилагч" employees={employees} />
                  </div>
                  <div className="flex flex-col gap-2 bg-[#F7F8FA] rounded-lg p-2 w-[500px] min-w-[500px]">
                     <Divider className="my-0">Өрөөний жагсаалт</Divider>
                     <div className="flex flex-row gap-3 items-end">
                        <Form.Item className="mb-0 w-full" label="Өрөө:" name="roomId" rules={rules}>
                           <Select
                              options={rooms?.map((room) => ({
                                 label: room.roomNumber,
                                 value: room.id
                              }))}
                           />
                        </Form.Item>
                        <ConfigProvider locale={locale}>
                           <DatePicker
                              picker="week"
                              className="w-60"
                              style={{
                                 height: 32
                              }}
                              placeholder="7 хоног сонгох"
                              onChange={(event) => {
                                 setWeek(new Date(event));
                              }}
                           />
                        </ConfigProvider>
                     </div>
                     <Table
                        rowKey="time"
                        bordered
                        columns={timeColumns}
                        scroll={{
                           y: 400
                        }}
                        dataSource={timeTable()}
                        pagination={false}
                     />
                  </div>
                  <div className="flex flex-col gap-2 bg-[#F7F8FA] rounded-lg p-2 w-full">
                     <Divider className="my-0">Мэс заслын үед хэрэглэгдэх эм,хэрэгсэл</Divider>
                     <Table />
                  </div>
               </div>
            </Form>
         </Modal>
      </>
   );
}
export default Surgery;
