import React, { useRef, useState, useEffect } from 'react';
import {
   CheckOutlined,
   MinusOutlined,
   PlusOutlined,
   UploadOutlined,
   DeleteOutlined,
   BarcodeOutlined
} from '@ant-design/icons';
import { Button, Card, Form, Modal, Upload, Select, InputNumber, Table } from 'antd';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, getAge, getGenderInType, openNofi, Post, ScrollRef } from '../../comman';
import jwtInterceopter from '../../jwtInterceopter';
import { ListPatientInfo, TypeInfo } from '../../ListInjection';
import dayjs from 'dayjs';
import Barcode from 'react-barcode';
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

import ServiceApi from '../../../services/service/service';
import ListFilter from '../BeforeAmbulatory/Lists/Index/listFilter';
import ScheduleTypeInfo from '../BeforeAmbulatory/Lists/Index/scheduleTypeInfo';
import InspectionTypeInfo from '../BeforeAmbulatory/Lists/Index/inspectionTypeInfo';

function IndexBefore({ type }) {
   const today = new Date();
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const { Option } = Select;
   const scrollRef = useRef();
   const [xrayLists, setXrayLists] = useState([]);
   const [meta, setMeta] = useState({});
   const [xrayModal, setXrayModal] = useState(false);
   const [form] = Form.useForm();
   const [photoIds, setPhotoIds] = useState([]);
   const [editMode, setEditMode] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [xRayMaterialList, setXRayMaterialList] = useState([]);
   const [usedMaterials, setUsedMaterials] = useState([{}]);
   const [id, setId] = useState(Number);
   const [start, setStart] = useState('');
   const [end, setEnd] = useState('');
   const [spinner, setSpinner] = useState(false);
   const getXrayMaterials = async () => {
      config.params.serviceType = 1;
      const response = await Get('service/service-material', token, config);
      console.log('RES getXrayMaterials==============>', response);
      if (response.data.length > 0) {
         setXRayMaterialList(response.data);
      }
   };
   const getXrayRequest = async (page, pageSize, start, end) => {
      setSpinner(true);
      await ServiceApi.getXrayRequest({
         params: {
            xrayProcess: '0,1',
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
   const handleRemove = async (info) => {
      console.log(info.response.response);
      const id = info.response.response.id;
      await jwtInterceopter.delete('local-files/' + id).then((response) => {
         if (response.status === 200) {
            var clone = photoIds;
            var index = clone.indexOf(id);
            clone.splice(index, 1);
            setPhotoIds(clone);
         }
      });
   };
   const newModal = (id, isPayment, usageType) => {
      form.resetFields();
      if (usageType === 'OUT') {
         if (!isPayment) {
            openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй');
         } else {
            setId(id);
            setEditMode(true);
            setPhotoIds([]);
            setXrayModal(true);
         }
      } else {
         setId(id);
         setEditMode(true);
         setPhotoIds([]);
         setXrayModal(true);
      }
   };
   const onFinish = async (values) => {
      await ServiceApi.patchXrayRequest(id, values).then(({ data: { success } }) => {
         if (success) {
            setXrayModal(false);
            getXrayRequest(1, 10, today, today);
         }
      });
   };
   const checkType = (process) => {
      if (process === 0) {
         return <MinusOutlined style={{ color: 'red' }} />;
      } else if (process === 1) {
         return <PlusOutlined style={{ color: 'blue' }} />;
      } else {
         return <CheckOutlined style={{ color: 'green' }} />;
      }
   };
   const getPaymentInfo = (state) => {
      if (state) {
         return <TypeInfo bgColor="#5cb85c" textColor="white" text={'Төлсөн'} />;
      }
      return <TypeInfo bgColor="#ef4444" textColor="white" text={'Төлөгдөөгүй'} />;
   };
   useEffect(() => {
      getXrayRequest(1, 10, today, today);
      // getXrayMaterials();
      ScrollRef(scrollRef);
   }, []);

   const showModal = () => {
      setIsModalOpen(true);
      setUsedMaterials([{}]);
   };
   const handleCancel = () => {
      setIsModalOpen(false);
      setUsedMaterials([{}]);
   };
   const handleChangeMaterial = (idx, e, type) => {
      const rows = [...usedMaterials];
      if (type === 'material') {
         rows[idx] = {
            ...rows[idx],
            ['materialId']: e
         };
      } else if (type === 'quantity') {
         rows[idx] = {
            ...rows[idx],
            ['count']: e
         };
      }
      setUsedMaterials(rows);
   };
   const saveUsedMaterials = async () => {
      const response = await Post(`finance/create-expenses`, token, config, usedMaterials);
      if (response === 201) {
         setIsModalOpen(false);
         setUsedMaterials([{}]);
      }
   };
   const handleAddRow = () => {
      const item = {
         materialId: '',
         count: ''
      };
      setUsedMaterials((usedMaterials) => [...usedMaterials, item]);
   };
   const handleRemoveSpecificRow = (idx) => () => {
      const rows = [...usedMaterials];
      rows.splice(idx, 1);
      setUsedMaterials(rows);
   };
   const getTypeInfo = (begin, end, usageType) => {
      if (begin === undefined && end === undefined) {
         if (usageType === 'OUT') {
            return <TypeInfo bgColor="#ffbb00" textColor="black" text={'Цаг оруулаагүй'} />;
         }
         return <TypeInfo bgColor="#f0ad4e" textColor="white" text={'Шууд'} />;
      } else {
         const beginTime = begin.substring(0, 5);
         const endTime = end.substring(0, 5);
         return <TypeInfo bgColor="#5cb85c" textColor="white" text={beginTime + '-' + endTime} />;
      }
   };
   const getUsageTypeInfo = (type) => {
      if (type === 'IN') {
         return <TypeInfo bgColor="#5bc0de" textColor="white" text={'Хэвтэн'} />;
      } else {
         return <TypeInfo bgColor="#5cb85c" textColor="white" text={'Амбулатори'} />;
      }
   };
   const xrayRequestColumns = [
      {
         title: 'Он сар',
         dataIndex: 'requestDate',
         render: (requestDate) => dayjs(requestDate).format('YYYY-MM-DD')
      },
      {
         title: 'Төрөл',
         dataIndex: 'usageType',
         width: 100,
         render: (usageType) => getUsageTypeInfo(usageType)
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
         width: 170,
         render: (patient) => <ListPatientInfo patientData={patient} />
      },
      {
         title: 'Нас',
         width: 40,
         dataIndex: ['patient', 'registerNumber'],
         render: (registerNumber) => getAge(registerNumber)
      },
      {
         title: 'Хүйс',
         width: 40,
         dataIndex: ['patient', 'genderType'],
         render: (genderType) => getGenderInType(genderType)
      },
      {
         title: 'Оношилгооны нэр',
         dataIndex: ['xray', 'name'],
         render: (name) => <div className="whitespace-pre-wrap">{name}</div>
      },
      {
         title: 'Орох цаг',
         width: 90,
         render: (_, row) => getTypeInfo(row.deviceSlot?.startTime, row.deviceSlot?.endTime, row.usageType)
      },
      {
         title: 'Үзлэг',
         dataIndex: 'xrayProcess',
         render: (xrayProcess) => checkType(xrayProcess)
      },
      {
         title: 'Эмч',
         dataIndex: 'employee',
         width: 170,
         render: (employee) => <ListPatientInfo patientData={employee} />
      },
      {
         title: 'Даатгал',
         width: 100,
         dataIndex: 'isInsurance',
         render: (text) => getPaymentInfo(text)
      },
      {
         title: 'Төлбөр',
         width: 60,
         dataIndex: 'isPayment',
         render: (text) => getPaymentInfo(text)
      },
      {
         title: 'Бар код',
         dataIndex: 'serialNumber',
         render: (barcode) => {
            if (barcode) {
               return (
                  <Button
                     icon={<BarcodeOutlined />}
                     onClick={() => {
                        Modal.info({
                           content: <Barcode value={barcode?.toString()} height={40} fontSize={10} width={3} />
                        });
                     }}
                  />
               );
            }
            return;
         }
      },
      {
         title: 'Зураг',
         render: (_, row) => {
            return row.photos.length > 0 ? (
               <ul className="list-disc list-inside">
                  {row.photos?.map((photo, index) => {
                     return <li key={index}>{photo.filename}</li>;
                  })}
               </ul>
            ) : (
               <Button
                  type="primary"
                  onClick={() => newModal(row.id, row?.isPayment || row?.isInsurance, row?.usageType)}
               >
                  Зураг оруулах
               </Button>
            );
         }
      }
   ];
   const normFile = (e) => {
      if (Array.isArray(e)) {
         return e;
      }
      return e && e.fileList;
   };
   return (
      <div className="w-full h-screen bg-[#f5f6f7] p-3">
         <div className="flex flex-col gap-2">
            <ScheduleTypeInfo />
            <InspectionTypeInfo />
            <ListFilter
               meta={meta}
               appointmentsLength={xrayLists?.length || 0}
               selectedTags={0}
               getList={getXrayRequest}
            />
            <Card
               title={type === 0 ? 'Оношилгооны өмнөх жагсаалт' : 'ЭКГ жагсаалт'}
               bordered={false}
               className="header-solid rounded-md"
               bodyStyle={{
                  padding: 8
               }}
            >
               <Table
                  rowKey={'id'}
                  locale={{ emptyText: 'Мэдээлэл байхгүй' }}
                  columns={xrayRequestColumns}
                  dataSource={xrayLists}
                  scroll={{
                     x: 1500
                  }}
                  loading={spinner}
                  pagination={{
                     simple: true,
                     pageSize: 10,
                     total: meta.itemCount,
                     current: meta.page,
                     onChange: (page, pageSize) => getXrayRequest(page, pageSize, start, end)
                  }}
               />
            </Card>
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
               <Form.Item
                  label="Зураг"
                  name="file"
                  getValueFromEvent={normFile}
                  rules={[
                     {
                        required: true,
                        message: 'Зураг оруулах!'
                     }
                  ]}
                  valuePropName="fileList"
               >
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
         <Modal
            title="Материал зарлагадах"
            open={isModalOpen}
            onOk={saveUsedMaterials}
            onCancel={handleCancel}
            okText="Хадгалах"
            cancelText="Хаах"
            width={800}
         >
            <div className="container">
               <div className="row clearfix">
                  <div className="col-md-12 column">
                     <table className="table table-bordered table-hover" id="tab_logic">
                        <thead>
                           <tr>
                              <th className="text-center"> # </th>
                              <th className="text-center"> Материал </th>
                              <th className="text-center"> Тоо ширхэг </th>
                              <th />
                           </tr>
                        </thead>
                        <tbody>
                           {usedMaterials.map((item, idx) => (
                              <tr id="addr0" key={idx}>
                                 <td className="text-center">{idx + 1}</td>
                                 <td className="text-center">
                                    <Select
                                       allowClear
                                       value={usedMaterials[idx].materialId || undefined}
                                       onChange={(e) => {
                                          // setSelectedMaterial(e);
                                          handleChangeMaterial(idx, e, 'material');
                                       }}
                                       showSearch
                                       style={{
                                          minWidth: 200
                                       }}
                                       size="small"
                                       placeholder="Сонгох"
                                       optionFilterProp="children"
                                       filterOption={(input, option) => option.children.includes(input)}
                                       filterSort={(optionA, optionB) =>
                                          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                       }
                                    >
                                       {xRayMaterialList?.map((el, index) => {
                                          return (
                                             <Option value={el.materialId} key={index}>
                                                {el.materialName}
                                             </Option>
                                          );
                                       })}
                                    </Select>
                                 </td>
                                 <td className="text-center">
                                    <InputNumber
                                       style={{
                                          width: 200
                                       }}
                                       value={usedMaterials[idx].count}
                                       onChange={(e) => handleChangeMaterial(idx, e, 'quantity')}
                                       className="width-200"
                                    />
                                 </td>
                                 <td className="text-center">
                                    <button
                                       className="btn btn-outline-danger btn-sm"
                                       onClick={handleRemoveSpecificRow(idx)}
                                    >
                                       <DeleteOutlined />
                                    </button>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                     <button onClick={handleAddRow} className="btn btn-primary">
                        Нэмэх
                     </button>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
}
export default IndexBefore;
