import { CheckOutlined, MinusOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Empty, Form, Modal, Table, Upload } from 'antd';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentToken } from '../../../features/authReducer';
import { formatNameForDoc, getAge, getGender, openNofi, Patch } from '../../comman';
import { setEmrData } from '../../../features/emrReducer';
import MonitorCriteria from '../Insurance/MonitorCriteria';
import DocumentShow from '../611/DocumentShow';
import ServiceService from '../../../services/service/service';
import ScheduleTypeInfo from '../BeforeAmbulatory/Lists/Index/scheduleTypeInfo';
import ListFilter from '../BeforeAmbulatory/Lists/Index/listFilter';
import dayjs from 'dayjs';
import InspectionTypeInfo from '../BeforeAmbulatory/Lists/Index/inspectionTypeInfo';
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
function IndexAfter({ type, params }) {
   const token = useSelector(selectCurrentToken);
   const dispatch = useDispatch();
   const config = {
      headers: {},
      params: {}
   };
   const [xrayLists, setXrayLists] = useState([]);
   const [meta, setMeta] = useState({
      page: 1,
      limit: 10
   });
   const [xrayModal, setXrayModal] = useState(false);
   const [form] = Form.useForm();
   const [photoIds, setPhotoIds] = useState([]);
   const [editMode, setEditMode] = useState(false);
   const [id, setId] = useState(Number);
   const navigate = useNavigate();
   const [spinner, setSpinner] = useState(false);
   const getXrayRequest = async (page, pageSize, start, end) => {
      setSpinner(true);
      await ServiceService.getXrayRequest({
         params: {
            xrayProcess: params,
            page: page,
            limit: pageSize,
            deviceType: type,
            startDate: dayjs(start).format('YYYY-MM-DD HH:mm'),
            endDate: dayjs(end).format('YYYY-MM-DD HH:mm')
         }
      })
         .then(({ data: { response } }) => {
            setXrayLists(response.data);
            setMeta(response.meta);
         })
         .finally(() => {
            setSpinner(false);
         });
   };
   const headers = {
      Authorization: `Bearer ${token}`,
      'x-api-key': API_KEY
   };
   const handleChange = (info) => {
      if (info.file.status === 'uploading') {
         // setLoading(true);
         return;
      }
      if (info.file.status === 'done') {
         console.log(info.file.response.response.id);
         setPhotoIds([...photoIds, info.file.response.response.id]);
         // Get this url from response in real world.
         // setPhotoId(info.file.response.response.id);
         // getBase64(info.file.originFileObj, (url) => {
         //     setLoading(false);
         //     setImageUrl(url);
         // });
      }
   };
   const handleRemove = (info) => {
      console.log(info.response.response.id);
   };
   const onFinish = async (values) => {
      const response = await Patch('service/xrayRequest/' + id, token, config, values);
      if (response === 200) {
         setXrayModal(false);
         getXrayRequest();
      }
   };
   const checkType = (process) => {
      if (process === 0) {
         return <MinusOutlined style={{ color: 'red' }} />;
      } else if (process === 1) {
         return <PlusOutlined style={{ color: '#F09833' }} />;
      } else {
         return <CheckOutlined style={{ color: '#22A06B' }} />;
      }
   };
   const getEMR = (row) => {
      // status heregteii anhan dawtan
      // tolbor shalgah
      if (row.xrayProcess === 0 && row.deviceType === 0) {
         openNofi('warning', 'Зураг', 'Зураг оруулагүй');
      } else if (!row.isPayment && row.usageType === 'OUT') {
         openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй');
      } else {
         if (row.confirmedDate === null) {
            ServiceService.patchXrayRequest({
               confirmedDate: new Date()
            });
         }
         if (row.startAt === null) {
            ServiceService.patchXrayRequest(row.id, {
               startAt: new Date()
            });
         }
         const data = {
            usageType: 'OUT',
            xrayRequestId: row.Id,
            patientId: row.patientId,
            cabinetId: row.cabinetId,
            inspection: row.deviceType === 0 ? 11 : 12,
            xrayId: row.xrayId,
            startDate: row.startAt || new Date()
         };
         dispatch(setEmrData(data));
         navigate(`/main/emr`, {
            state: data
         });
      }
   };
   const getTypeInfo = (begin, end) => {
      if (begin === undefined && end === undefined) {
         return (
            <p
               className="bg-[#f0ad4e] text-white"
               style={{
                  padding: '4px 8px',
                  borderRadius: 15
               }}
            >
               Шууд
            </p>
         );
      } else {
         const beginTime = begin?.split(':');
         const endTime = end?.split(':');
         return (
            <p
               className="bg-[#5cb85c] text-white"
               style={{
                  padding: '4px 8px',
                  borderRadius: 15
               }}
            >
               {beginTime[0] + ':' + beginTime[1] + '-' + endTime[0] + ':' + endTime[1]}
            </p>
         );
      }
   };
   const getUsageTypeInfo = (type) => {
      if (type === 'IN') {
         return (
            <p
               className="bg-[#5bc0de] text-white"
               style={{
                  padding: '4px 8px',
                  borderRadius: 15
               }}
            >
               Хэвтэн
            </p>
         );
      } else {
         return (
            <p
               className="bg-[#5cb85c] text-white"
               style={{
                  padding: '4px 8px',
                  borderRadius: 15
               }}
            >
               Амбулатори
            </p>
         );
      }
   };
   const xrayRequestColumns = [
      {
         title: 'Төрөл',
         dataIndex: 'usageType',
         render: (text) => {
            return getUsageTypeInfo(text);
         }
      },
      {
         title: 'Он сар',
         dataIndex: 'updatedAt',
         render: (text) => {
            return dayjs(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Оношилгооны нэр',
         dataIndex: ['xray', 'name'],
         render: (text) => {
            return <div className="whitespace-pre-wrap text-start">{text}</div>;
         }
      },
      {
         title: 'Үзлэгийн цаг',
         dataIndex: 'deviceSlots',
         render: (deviceSlots) => {
            return getTypeInfo(deviceSlots?.startTime, deviceSlots?.endTime);
         }
      },
      {
         title: 'Үзлэг',
         dataIndex: 'xrayProcess',
         render: (text) => {
            return checkType(text);
         }
      },
      {
         title: 'Овог, Нэр',
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
         render: (registerNumber) => {
            return getAge(registerNumber);
         }
      },
      {
         title: 'Хүйс',
         dataIndex: ['patient', 'genderType'],
         render: (genderType) => {
            return getGender(genderType);
         }
      },
      {
         title: 'Эмч',
         dataIndex: 'employee',
         render: (employee) => {
            return (
               <div className="ambo-list-user">
                  <Avatar
                     style={{
                        minWidth: 32
                     }}
                  />
                  <div className="info">
                     <p className="name">{formatNameForDoc(employee?.lastName, employee?.firstName)}</p>
                     <p>{employee?.registerNumber}</p>
                  </div>
               </div>
            );
         }
      }
   ];
   return (
      <>
         <div className="flex flex-wrap gap-2">
            <ScheduleTypeInfo />
            <InspectionTypeInfo />
            <ListFilter
               meta={meta}
               appointmentsLength={xrayLists?.length || 0}
               selectedTags={null}
               getList={getXrayRequest}
            />
            <div className="w-full">
               <Card
                  bordered={false}
                  className="header-solid max-h-max rounded-md"
                  bodyStyle={{
                     padding: 8
                  }}
               >
                  <Table
                     rowKey={'id'}
                     locale={{
                        emptyText: <Empty description={'Хоосон'} />
                     }}
                     rowClassName="hover: cursor-pointer"
                     onRow={(row, _rowIndex) => {
                        return {
                           onDoubleClick: () => {
                              getEMR(row);
                           }
                        };
                     }}
                     columns={xrayRequestColumns}
                     dataSource={xrayLists}
                     scroll={{
                        x: 1000
                     }}
                     loading={{
                        spinning: spinner,
                        tip: 'Уншиж байна....'
                     }}
                     pagination={false}
                  />
               </Card>
            </div>
         </div>
         <Modal
            title="Зураг оруулах"
            open={xrayModal}
            onCancel={() => setXrayModal(false)}
            onOk={() =>
               form.validateFields().then((values) => {
                  values['photoIds'] = photoIds;
                  onFinish(values);
               })
            }
         >
            <Form form={form}>
               <Form.Item valuePropName="fileList">
                  <Upload
                     multiple={true}
                     headers={headers}
                     action={`${DEV_URL}local-files/fileUpload`}
                     onChange={handleChange}
                     onRemove={handleRemove}
                  >
                     <Button icon={<UploadOutlined />}>Зураг оруулах</Button>
                  </Upload>
               </Form.Item>
            </Form>
         </Modal>
      </>
   );
}
export default IndexAfter;
