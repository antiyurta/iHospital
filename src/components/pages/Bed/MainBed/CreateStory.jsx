import { Button, ConfigProvider, DatePicker, Form, Input, InputNumber, Radio, Select, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import PatientInformation from '../../PatientInformation';
import DoctorNotes from '../../EMR/DoctorNotes';
//
import { formatNameForDoc, numberToCurrency, openNofi } from '../../../common';
import dayjs from 'dayjs';
import { RollbackOutlined } from '@ant-design/icons';
import locale from 'antd/es/locale/mn_MN';
import 'moment/locale/mn';
//
import OrganizationDocumentRoleServices from '../../../../services/organization/documentRole';
import InpatientApi from '../../../../services/service/inpatient';
import OrganizationStructureApi from '../../../../services/organization/structure';
import OrganizationFloorApi from '../../../../services/organization/floor';
import OrganizationEmployeeApi from '../../../../services/organization/employee';
import DiagnoseWindow from '../../service/DiagnoseWindow';
import { useLocation } from 'react-router-dom';
//
const { Option } = Select;
const { RangePicker } = DatePicker;
const CreateStory = () => {
   const {
      state: { patient, inpatientRequestId, roomInfo }
   } = useLocation();
   const [form] = Form.useForm();
   const [isLoading, setIsLoading] = useState(false);
   const [departments, setDepartments] = useState([]);
   const [floorIds, setFloorIds] = useState([]);
   const [floors, setFloors] = useState([]);
   const [rooms, setRooms] = useState([]);
   const [filteredRooms, setFilteredRooms] = useState([]);
   const [beds, setBeds] = useState([]);
   const [isDuration, setIsDuration] = useState(true);
   const [doctors, setDoctors] = useState([]);
   const [documentInfo, setDocumentInfo] = useState({});
   const getDepartments = async () => {
      setIsLoading(true);
      await OrganizationStructureApi.get({
         params: {
            type: 2
         }
      })
         .then(({ data: { response } }) => {
            setDepartments(response.data);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const getFloors = async () => {
      await OrganizationFloorApi.get({
         params: {
            ids: floorIds.toString()
         }
      })
         .then(({ data: { response } }) => {
            setFloors(response.data);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const getDoctors = async (id) => {
      await OrganizationEmployeeApi.getEmployee({
         params: {
            depId: id
         }
      })
         .then(({ data: { response } }) => {
            setDoctors(response.data);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const onSelectDep = (id) => {
      setIsLoading(true);
      const rooms = departments.find((department) => department.id === id)?.rooms;
      const floorIds = rooms?.filter((room) => room.isInpatient)?.map((fRoom) => fRoom.floorId);
      const unDupFloorIds = floorIds?.filter((item, index) => floorIds.indexOf(item) === index);
      setFloorIds(unDupFloorIds);
      setFloors([]);
      form.resetFields([
         ['roomInfo', 'floorId'],
         ['roomInfo', 'roomId'],
         ['roomInfo', 'bedId']
      ]);
      getDoctors(id);
      setRooms(rooms);
   };
   const onSelectFloor = (id) => {
      const filteredRooms = rooms?.filter((room) => room.floorId === id && room.isInpatient);
      console.log('filteredRooms', filteredRooms);
      setFilteredRooms(filteredRooms);
      form.resetFields([['roomInfo', 'roomId']]);
   };
   const onSelectRoom = (id, incomeRooms) => {
      if (incomeRooms) {
         setFilteredRooms(incomeRooms);
      }
      const currentRooms = incomeRooms || rooms;
      const beds = currentRooms.find((room) => room.id === id)?.beds;
      setBeds(beds?.filter((bed) => bed.isActive));
   };
   const onSelectDoctor = async (id) => {
      const doctor = doctors?.find((doctor) => doctor.id === id);
      await OrganizationDocumentRoleServices.getByPageFilterShow({
         params: {
            employeePositionIds: doctor.appIds,
            structureIds: doctor.depIds,
            usageType: 'IN',
            documentType: 0
         }
      }).then(({ data: { response } }) => {
         if (response.length > 0) {
            var data = {};
            response?.map((item) => {
               item?.documents?.map((document) => {
                  if (document.value === 83) {
                     data = document;
                  }
               });
            });
            if (data.hasOwnProperty('value')) {
               setDocumentInfo({
                  formId: data.formId,
                  optionId: data.optionId
               });
            } else {
               openNofi('error', 'Алдаа', 'Тухай эмчид 611 маягт зөвшөөрөөгүй байна');
            }
         } else {
            openNofi('error', 'Алдаа', 'Тухай эмчид 611 маягт зөвшөөрөөгүй байна');
         }
      });
   };
   const setInpatient = () => {
      form.validateFields().then(async (values) => {
         values['isOut'] = false;
         values['process'] = 0;
         values['patientId'] = patient.id;
         values['documentInfo'] = documentInfo;
         await InpatientApi.patch(inpatientRequestId, { ...values, ...documentInfo }).then(({ data }) => {
            openNofi('success', 'Амжилттай', 'Амжиллтай');
            window.history.back();
         });
      });
   };

   const setIncomeRoomInfo = () => {
      const rooms = departments?.find((department) => department.id === roomInfo.depId)?.rooms;
      const floorIds = rooms?.filter((room) => room.isInpatient)?.map((fRoom) => fRoom.floorId);
      setFloorIds(floorIds);
      onSelectRoom(roomInfo.roomId, rooms);
      form.setFieldValue('roomInfo', roomInfo);
      getDoctors(roomInfo?.depId);
   };

   useEffect(() => {
      floorIds?.length > 0 && getFloors();
   }, [floorIds]);
   useEffect(() => {
      if (roomInfo && Object.entries(roomInfo)?.length > 0 && departments?.length > 0) {
         setIncomeRoomInfo();
      }
   }, [roomInfo, departments]);
   useEffect(() => {
      getDepartments();
   }, []);
   return (
      <div className="w-full">
         <Spin tip={'Уншиж байна'} spinning={isLoading}>
            <div className="flex flex-col">
               <div
                  className="flex flex-row justify-between p-2 bg-white"
                  style={{
                     borderBottom: '1px solid #e5e6eb'
                  }}
               >
                  <PatientInformation OCS={false} handlesearch={false} patient={patient} />
                  <div className="flex flex-row gap-2">
                     <div className="max-w-[350px]">
                        <DoctorNotes patientId={patient.id} />
                     </div>
                     <div className="flex flex-col gap-2">
                        <Button>ЭМД</Button>
                        <Button type="primary" onClick={() => setInpatient()}>
                           Өвчтөнг хэвтүүлэх
                        </Button>
                        <Button danger icon={<RollbackOutlined />} onClick={() => window.history.back()}>
                           Буцах
                        </Button>
                     </div>
                  </div>
               </div>
               <div
                  className="overflow-auto bg-[#f5f6f7] p-3"
                  style={{
                     height: 'calc(100vh - 190px)'
                  }}
               >
                  <Form form={form} layout="vertical">
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
                              <div>
                                 <Form.Item
                                    className="mb-1"
                                    label="Тасаг:"
                                    name={['roomInfo', 'depId']}
                                    rules={[
                                       {
                                          required: true,
                                          message: 'Заавал'
                                       }
                                    ]}
                                 >
                                    <Select
                                       onSelect={onSelectDep}
                                       options={departments?.map((department) => ({
                                          label: department.name,
                                          value: department.id
                                       }))}
                                    />
                                 </Form.Item>
                                 <Form.Item
                                    className="mb-1"
                                    label="Давхар:"
                                    name={['roomInfo', 'floorId']}
                                    rules={[
                                       {
                                          required: true,
                                          message: 'Заавал'
                                       }
                                    ]}
                                 >
                                    <Select
                                       onSelect={onSelectFloor}
                                       options={floors?.map((floor) => ({
                                          label: floor.name,
                                          value: floor.id
                                       }))}
                                    />
                                 </Form.Item>
                                 <div className="grid grid-cols-2 gap-1">
                                    <Form.Item
                                       className="mb-1"
                                       label="Өрөөны дугаар / Үнэ:"
                                       name={['roomInfo', 'roomId']}
                                       rules={[
                                          {
                                             required: true,
                                             message: 'Заавал'
                                          }
                                       ]}
                                    >
                                       <Select onSelect={(id) => onSelectRoom(id, null)}>
                                          {filteredRooms?.map((room, index) => (
                                             <Option
                                                key={index}
                                                value={room.id}
                                                disabled={room.beds?.length > 0 ? false : true}
                                             >
                                                <span>
                                                   {room.roomNumber}-/-{numberToCurrency(room.price)}
                                                </span>
                                             </Option>
                                          ))}
                                       </Select>
                                    </Form.Item>
                                    <Form.Item
                                       className="mb-1"
                                       label="Орны дугаар:"
                                       name={['roomInfo', 'bedId']}
                                       rules={[
                                          {
                                             required: true,
                                             message: 'Заавал'
                                          }
                                       ]}
                                    >
                                       <Select
                                          options={beds?.map((bed) => ({
                                             label: bed.bedNumber,
                                             value: bed.id
                                          }))}
                                       />
                                    </Form.Item>
                                 </div>
                                 <Form.Item
                                    label="Хэвтэх төрөл"
                                    name="InType"
                                    rules={[
                                       {
                                          required: true,
                                          message: 'Заавал'
                                       }
                                    ]}
                                 >
                                    <Select
                                       onChange={(e) => {
                                          if (e === 'PLAN') {
                                             setIsDuration(false);
                                          } else {
                                             form.resetFields(['dateDuration']);
                                             setIsDuration(true);
                                          }
                                       }}
                                       options={[
                                          { value: 'EMERGENCY', label: 'Яаралтай' },
                                          { value: 'PLAN', label: 'Төлөвлөгөөт' }
                                       ]}
                                    />
                                 </Form.Item>
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
                                 Үргэлжлэх хугацаа
                              </p>
                              <div className="h-[1px] w-full bg-[#C9CDD4]" />
                              <ConfigProvider locale={locale}>
                                 <Form.Item
                                    label="Хэвтэх хугацаа"
                                    name="dateDuration"
                                    rules={[
                                       {
                                          required: !isDuration,
                                          message: 'Заавал'
                                       }
                                    ]}
                                 >
                                    <RangePicker
                                       disabled={isDuration}
                                       format={'YYYY/MM/DD'}
                                       disabledDate={(current) => {
                                          return dayjs().add(-7, 'days') >= current;
                                       }}
                                    />
                                 </Form.Item>
                              </ConfigProvider>
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
                              <Form.Item
                                 className="mb-1"
                                 label="Эмчлэгч эмч:"
                                 name={['inpatientInfo', 'doctorId']}
                                 rules={[
                                    {
                                       required: true,
                                       message: 'Заавал'
                                    }
                                 ]}
                              >
                                 <Select
                                    onSelect={onSelectDoctor}
                                    options={doctors?.map((doctor) => ({
                                       label: formatNameForDoc(doctor?.lastName, doctor.firstName),
                                       value: doctor.id
                                    }))}
                                 />
                              </Form.Item>
                              <div className="flex flex-row gap-2 items-end">
                                 <Form.Item
                                    className="mb-0"
                                    label="Оношийн код:"
                                    name={['inpatientInfo', 'icdCode']}
                                    rules={[
                                       {
                                          required: true,
                                          message: 'Заавал'
                                       }
                                    ]}
                                 >
                                    <Input disabled />
                                 </Form.Item>
                                 <DiagnoseWindow
                                    handleClick={(diagnose) => {
                                       form.setFieldValue(['inpatientInfo', 'icdCode'], diagnose.code);
                                    }}
                                 />
                              </div>
                              <Form.Item className="mb-1" label="Оношийн бүлэг:" name={['inpatientInfo', 'icdGroup']}>
                                 <Select />
                              </Form.Item>
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
                              <Form.Item className="mb-1" label="Төлбөрын төрөл:" name={['paymentInfo', 'paymentType']}>
                                 <Select
                                    options={[
                                       {
                                          label: 'Төр хариуцсан',
                                          value: 'q22-1'
                                       },
                                       {
                                          label: '15%',
                                          value: 'q22-2'
                                       },
                                       {
                                          label: '10%',
                                          value: 'q22-3'
                                       },
                                       {
                                          label: 'Өвчтөн хариуцсан',
                                          value: 'q22-4'
                                       }
                                    ]}
                                 />
                              </Form.Item>
                              <Form.Item className="mb-1" label="Тариф:" name={['paymentInfo', 'amount']}>
                                 <InputNumber />
                              </Form.Item>
                              <Form.Item className="mb-1" label="ЭМД:" name={['paymentInfo', 'insuranceAmount']}>
                                 <InputNumber />
                              </Form.Item>
                              <Form.Item className="mb-1" label="Иргэн:" name={['paymentInfo', 'patientAmount']}>
                                 <InputNumber />
                              </Form.Item>
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
                           <div className="h-[550px] overflow-auto pr-2">
                              <div className="document-form">
                                 <div className="form-left" />
                                 <div className="form-inputs">
                                    <Form.Item
                                       className="mb-0"
                                       label="Харияаллын бус:"
                                       name={['extraInfo', 'isForeign']}
                                    >
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
                                    <Form.Item
                                       className="mb-0"
                                       label="Хөдөөнөөс ирсэн:"
                                       name={['extraInfo', 'isCountry']}
                                    >
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
                                    <Form.Item
                                       className="mb-0"
                                       label="Давтан хэвтсэн:"
                                       name={['extraInfo', 'isRepeat']}
                                    >
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
                                    <Form.Item
                                       className="mb-0"
                                       label="Доод шатлалаас:"
                                       name={['extraInfo', 'isUnderStage']}
                                    >
                                       <Radio.Group>
                                          <Radio value="q23-1">Тийм</Radio>
                                          <Radio value="q23-2">Үгүй</Radio>
                                       </Radio.Group>
                                    </Form.Item>
                                 </div>
                              </div>
                              <div className="document-form">
                                 <div className="form-left" />
                                 <div className="form-inputs">
                                    <Form.Item
                                       className="mb-0"
                                       label="Саажилттай эсэх:"
                                       name={['extraInfo', 'isParalysis']}
                                    >
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
                                    <Form.Item
                                       className="mb-0"
                                       label="Хаанаас хэвтсэн:"
                                       name={['extraInfo', 'whereIsFrom']}
                                    >
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
                                    <Form.Item className="mb-0" label="Өндөр:" name={['extraInfo', 'height']}>
                                       <InputNumber />
                                    </Form.Item>
                                 </div>
                              </div>
                              <div className="document-form">
                                 <div className="form-left" />
                                 <div className="form-inputs">
                                    <Form.Item className="mb-0" label="Жин:" name={['extraInfo', 'weight']}>
                                       <InputNumber />
                                    </Form.Item>
                                 </div>
                              </div>
                              <div className="document-form">
                                 <div className="form-left" />
                                 <div className="form-inputs">
                                    <Form.Item
                                       className="mb-0"
                                       label="Систолын даралт:"
                                       name={['extraInfo', 'highPressureRight']}
                                    >
                                       <InputNumber />
                                    </Form.Item>
                                 </div>
                              </div>
                              <div className="document-form">
                                 <div className="form-left" />
                                 <div className="form-inputs">
                                    <Form.Item
                                       className="mb-0"
                                       label="Диастолын даралт:"
                                       name={['extraInfo', 'lowPressureRight']}
                                    >
                                       <InputNumber />
                                    </Form.Item>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Form>
               </div>
            </div>
         </Spin>
      </div>
   );
};
export default CreateStory;
