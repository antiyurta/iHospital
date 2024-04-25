import React, { useState } from 'react';
import {
   Button,
   Checkbox,
   DatePicker,
   Divider,
   Empty,
   Form,
   Input,
   Modal,
   Radio,
   Select,
   Table,
   TimePicker
} from 'antd';
import { CloseCircleOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { ListCareType } from './list-type';
import { CARE_TYPE } from './care-enum';
import { ListSupport } from './list-support';
import mnMN from 'antd/es/calendar/locale/mn_MN';
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

const { TextArea } = Input;

//imgs
import surgeryIcon from './NewOrder/surgeryIcon.svg';
//common
import { diagnoseTypeInfo, numberToCurrency, openNofi } from '@Comman/common';
//comp
import { EmployeeList, FormListEmployee } from './SurgeryEmployee';
//api
import SurgeryApi from '@ApiServices/service/surgery.api';
import RoomApi from '@ApiServices/organization/room';
import EmployeeApi from '@ApiServices/organization/employee';
import PatientDiagnoseApi from '@ApiServices/emr/patientDiagnose';
//redux
import { selectCurrentDepId } from '@Features/authReducer';
import dayjs from 'dayjs';

function Surgery(props) {
   const { patientId, appointmentId, usageType, selectedSurgery, handleclick } = props;
   const depIds = useSelector(selectCurrentDepId);
   //tolowlogo
   const [form] = Form.useForm();
   const [diagnosis, setDiagnosis] = useState([]);
   const [rooms, setRooms] = useState([]);
   const [isAnes, setAnes] = useState(false);
   const [employees, setEmployess] = useState([]);
   const [isLoadingPlan, setLoadingPlan] = useState(false);
   //tolowlogo
   const [isOpenModalPlan, setOpenModalPlan] = useState(false);
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

   const middleware = async () => {
      if (selectedSurgery?.hasOwnProperty('surguryRequestId')) {
         await SurgeryApi.getRequestById(selectedSurgery.surguryRequestId)
            .then(({ data: { response, success } }) => {
               if (success) {
                  if (response.taskDoctorRels?.length > 0) {
                     setAnes(true);
                  }
                  const [hours, minute] = response.durationTime.split(':');
                  form.setFieldsValue({
                     ...response,
                     surgeries: response.taskWorkers.surgeries,
                     description: response.currentColumn.description,
                     durationTime: response.durationTime
                        ? moment().set({
                             hour: hours,
                             minute: minute
                          })
                        : undefined
                  });
                  setOpenModalPlan(true);
                  getPatientDiagnosis();
                  getEmployees();
                  getRooms();
               }
            })
            .catch((error) => {
               console.log(error);
            });
      } else {
         if (!patientId) {
            openNofi('error', 'Алдаа', 'Өвчтөн сонгогдоогүй байна');
         } else {
            Modal.confirm({
               title: 'Мэс заслын хүсэлт',
               content: (
                  <div>
                     <p>Та мэс заслын хүсэлт илгээх гэж байна</p>
                  </div>
               ),
               cancelText: 'Болих',
               okText: 'Захиалах',
               async onOk() {
                  handleclick({
                     patientId: patientId
                  });
               }
            });
         }
      }
   };

   const onUpdateTask = async (values) => {
      setLoadingPlan(true);
      await SurgeryApi.patchRequest(selectedSurgery.surguryRequestId, {
         startDate: values.startDate,
         icdCode: values.icdCode,
         durationTime: dayjs(values.durationTime).format('HH:mm'),
         taskType: values.taskType,
         drgCode: null,
         taskWorkers: {
            id: selectedSurgery.taskWorkersId,
            surgeryIds: values.surgeries?.map((surgery) => surgery.id),
            operationId: values.taskWorkers.operationId,
            firstHelperId: values.taskWorkers.firstHelperId,
            secondHelperId: values.taskWorkers.secondHelperId
         }
      })
         .then(async () => {
            await SurgeryApi.putRequestPlan(selectedSurgery.surguryRequestId, {
               columnId: 3,
               roomId: values.roomId,
               description: values.description,
               nurses: values.taskNurseRels?.map((nurse) => nurse.userId.toString()),
               doctors: values.taskDoctorRels?.map((doctor) => doctor.userId.toString())
            })
               .then(() => {
                  openNofi('success', 'Ажилттай', 'Мэс засал төлөвлөлт амжилттай');
                  setOpenModalPlan(false);
               })
               .catch((error) => {
                  console.log('PutRequestPlan error', error);
               })
               .finally(() => {
                  setLoadingPlan(false);
               });
         })
         .catch((error) => {
            console.log('PatchRequest error', error);
         })
         .finally(() => {
            setLoadingPlan(false);
         });
   };

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
               form.setFieldValue('surgeries', selectedSurgeries);
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
            title="Мэс засал төлөвлөх цонх"
            open={isOpenModalPlan}
            onCancel={() => {
               setOpenModalPlan(false);
            }}
            onOk={() => {
               form
                  .validateFields()
                  .then(onUpdateTask)
                  .catch((error) => {
                     error.errorFields?.map((errField) => {
                        openNofi('error', 'Алдаа', errField.errors[0]);
                     });
                     console.log(error);
                  });
            }}
            confirmLoading={isLoadingPlan}
            width={'80%'}
            cancelText="Болих"
            okText="Төлөвлөх"
         >
            <Form
               form={form}
               layout="vertical"
               initialValues={{
                  surgeries: [{}],
                  taskDoctorRels: [{}],
                  taskNurseRels: [{}]
               }}
            >
               <div className="flex flex-row gap-2">
                  <div className="flex flex-col gap-2 bg-[#F7F8FA] rounded-lg p-2 min-w-[200px]">
                     <Divider className="my-0">Ерөнхий мэдээлэл</Divider>
                     <p style={labelstyle}>Мэс засал:</p>
                     <Form.List
                        name="surgeries"
                        rules={[
                           {
                              validator: (_, value) => {
                                 if (!value || value.length < 1) {
                                    return Promise.reject(new Error('Багада 1 хагалгаа'));
                                 }
                                 return Promise.resolve();
                              }
                           }
                        ]}
                     >
                        {(fields, { add, remove }) => (
                           <>
                              {fields.map(({ key, name, ...restField }) => (
                                 <div key={key} className="flex flex-row gap-2 justify-between">
                                    <Form.Item className="mb-0" {...restField} name={[name, 'name']} rules={rules}>
                                       <Input disabled />
                                    </Form.Item>
                                    <div className="bg-red-500 p-1 rounded-md flex items-center">
                                       <MinusCircleOutlined
                                          className="p-[2px] text-white text-base"
                                          onClick={() => remove(name)}
                                       />
                                    </div>
                                 </div>
                              ))}
                              <Form.Item>
                                 <Button
                                    className="bg-green-500 text-white"
                                    type="dashed"
                                    onClick={() => {
                                       setIsOpenModal(true);
                                    }}
                                    block
                                    icon={<PlusOutlined />}
                                 >
                                    Нэмэх
                                 </Button>
                              </Form.Item>
                           </>
                        )}
                     </Form.List>
                     <p style={labelstyle}>Мэс заслын төрөл:</p>
                     <Form.Item noStyle name="taskType" rules={rules}>
                        <Radio.Group>
                           <Radio value={2}>Яаралтай</Radio>
                           <Radio value={1}>Төлөвлөгөөт</Radio>
                        </Radio.Group>
                     </Form.Item>
                     <Form.Item className="mb-0" label="Өрөө:" name="roomId" rules={rules}>
                        <Select
                           options={rooms?.map((room) => ({
                              label: room.roomNumber,
                              value: room.id
                           }))}
                        />
                     </Form.Item>
                     <Form.Item className="mb-0" label="Онош" name="icdCode" rules={rules}>
                        <Select
                           options={diagnosis?.map((diagnose) => ({
                              label: `${diagnose.code} - ${diagnose.diagnoseType}`,
                              value: diagnose.code
                           }))}
                        />
                     </Form.Item>
                     <Form.Item
                        className="mb-0"
                        label="Огноо:"
                        name="startDate"
                        rules={rules}
                        getValueProps={(i) => {
                           if (i) {
                              return { value: moment(i) };
                           } else {
                              return;
                           }
                        }}
                     >
                        <DatePicker locale={mnMN} />
                     </Form.Item>
                     <Form.Item
                        className="mb-0"
                        label="Үргэлжлэх хугацаа:"
                        name="durationTime"
                        getValueProps={(i) => {
                           if (i) {
                              return { value: moment(i) };
                           } else {
                              return;
                           }
                        }}
                        rules={rules}
                     >
                        <TimePicker format={'HH:mm'} locale={mnMN} />
                     </Form.Item>
                     <Checkbox
                        defaultChecked={isAnes}
                        onChange={(e) => {
                           if (!e.target.checked) {
                              form.resetFields([['taskDoctorRels']]);
                           }
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
                        <>
                           <p style={labelstyle}>Мэдээгүйжүүлэгч:</p>
                           <FormListEmployee
                              formName="taskDoctorRels"
                              label="Мэдээгүйжүүлэгч"
                              employees={employees}
                              rules={null}
                           />
                        </>
                     ) : null}
                     <p style={labelstyle}>Сувилагч:</p>
                     <FormListEmployee
                        formName="taskNurseRels"
                        label="Сувилагч"
                        employees={employees}
                        rules={[
                           {
                              validator: (_, value) => {
                                 if (!value || value.length < 1) {
                                    return Promise.reject(new Error('Багада 1 Сувилагч'));
                                 }
                                 return Promise.resolve();
                              }
                           }
                        ]}
                     />
                  </div>
                  <div className="flex flex-col gap-2 bg-[#F7F8FA] rounded-lg p-2 min-w-[320px]">
                     <Form.Item name="description" label="Нэмэлт мэдээлэл" rules={rules}>
                        <TextArea />
                     </Form.Item>
                  </div>
               </div>
            </Form>
         </Modal>
      </>
   );
}
export default Surgery;
