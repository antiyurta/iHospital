import {
   DeleteOutlined,
   EditOutlined,
   PlusCircleOutlined,
   PlusOutlined,
   RightOutlined
} from '@ant-design/icons';
import {
   Button,
   Card,
   Empty,
   Form,
   Input,
   InputNumber,
   Modal,
   Select,
   Space,
   Table
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { checkNumber, Delete, Get, Patch, Post } from '../../comman';
import UTable from '../../UTable';
const { Search } = Input;
const { Option } = Select;
function ExaminationParams() {
   const token = useSelector(selectCurrentToken);
   const [editMode, setEditMode] = useState(false);
   const [editId, setEditId] = useState(Number);
   const [paraForm] = Form.useForm();
   const [measurements, setMeasurements] = useState([]);
   const [examinations, setExaminations] = useState([]);
   const [examinationPara, setExaminationPara] = useState([]);
   const [examinationParaLoading, setExaminationParaLoading] = useState(false);
   const [examinationLoading, setExaminationLoading] = useState(false);
   const [searchText, setSearchText] = useState('');
   const [selectedExaId, setSelectedExaId] = useState(Number);
   const [isOpenModalPara, setIsOpenModalPara] = useState(false);
   const getExamination = async () => {
      setExaminationLoading(true);
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get('service/examination', token, conf);
      setExaminations(response.data);
      setExaminationLoading(false);
   };
   const getMeasurement = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get('reference/measurement', token, conf);
      setMeasurements(response.data);
   };
   const getParams = async (id) => {
      setSelectedExaId(id);
      setExaminationParaLoading(true);
      const conf = {
         headers: {},
         params: {
            examinationId: id
         }
      };
      const response = await Get('service/parameter', token, conf);
      setExaminationPara(response.data);
      setExaminationParaLoading(false);
   };
   const filteredExamination = examinations.filter((examination) => {
      return examination.name.toLowerCase().includes(searchText.toLowerCase());
   });
   const onFinish = async (values) => {
      values['examinationId'] = selectedExaId;
      const conf = {
         headers: {},
         params: {}
      };
      if (editMode) {
         const response = await Patch(
            'service/parameter/' + editId,
            token,
            conf,
            values
         );
         if (response === 200) {
            setEditMode(false);
            setIsOpenModalPara(false);
            getParams(selectedExaId);
         }
      } else {
         const response = await Post('service/parameter', token, conf, values);
         if (response === 201) {
            setIsOpenModalPara(false);
            getParams(selectedExaId);
         }
      }
   };
   const deleteModal = (id) => {
      const conf = {
         headers: {},
         params: {}
      };
      Modal.error({
         title: 'Устгах',
         okText: 'Устгах',
         closable: true,
         content: <div>Устгасан дохиолдолд дахин сэргэхгүй болно</div>,
         async onOk() {
            await Delete('service/parameter/' + id, token, conf);
            getParams(selectedExaId);
         }
      });
   };
   const columnExam = [
      {
         title: '№',
         render: (_, row, rowIndex) => {
            return rowIndex + 1;
         }
      },
      {
         title: 'Нэр',
         dataIndex: 'name',
         render: (text) => {
            return <span className="whitespace-normal">{text}</span>;
         }
      },
      {
         title: 'Үйлдэл',
         dataIndex: 'id',
         render: (text) => {
            return (
               <>
                  <Button
                     icon={
                        <PlusCircleOutlined
                           title="Үзүүлэлт нэмэх"
                           style={{ color: 'green' }}
                        />
                     }
                     style={{ borderColor: 'green' }}
                     className="mr-1"
                     onClick={() => {
                        setSelectedExaId(text);
                        setIsOpenModalPara(true);
                        paraForm.resetFields();
                        setEditMode(false);
                     }}
                  />
                  <Button
                     icon={
                        <RightOutlined
                           title="Дэлгэрэнгүй"
                           style={{ color: 'blue' }}
                        />
                     }
                     style={{ borderColor: 'blue' }}
                     className="ml-1"
                     onClick={() => getParams(text)}
                  />
               </>
            );
         }
      }
   ];
   const columnExamPara = [
      {
         title: 'Үзүүлэлтийн нэр',
         dataIndex: 'parameterName',
         width: 25
      },
      {
         title: 'Үзүүлэлт',
         dataIndex: 'indicator'
      },
      {
         title: 'Хэмжих нэгж',
         dataIndex: 'measurementId',
         render: (text) => {
            return measurements.find((e) => e.id === text)?.name;
         }
      },
      {
         title: (
            <span className="whitespace-normal">Ердийн лавлах хэмжээ Их</span>
         ),
         dataIndex: 'high'
      },
      {
         title: (
            <span className="whitespace-normal">Ердийн лавлах хэмжээ Бага</span>
         ),
         dataIndex: 'low'
      },
      {
         title: (
            <span className="whitespace-normal">Эрэгтэй лавлах хэмжээ Их</span>
         ),
         dataIndex: 'manHigh'
      },
      {
         title: (
            <span className="whitespace-normal">
               Эрэгтэй лавлах хэмжээ Бага
            </span>
         ),
         dataIndex: 'manLow'
      },
      {
         title: (
            <span className="whitespace-normal">Эмэгтэй лавлах хэмжээ Их</span>
         ),
         dataIndex: 'womenHigh'
      },
      {
         title: (
            <span className="whitespace-normal">
               Эмэгтэй лавлах хэмжээ Бага
            </span>
         ),
         dataIndex: 'womenLow'
      },
      {
         title: 'насны доод хягаар',
         dataIndex: 'ageMin'
      },
      {
         title: 'насны дээд хягаар',
         dataIndex: 'ageMax'
      },
      {
         title: 'Үйлдэл',
         render: (_, row) => {
            return (
               <Space>
                  <Button
                     type="link"
                     onClick={() => {
                        setIsOpenModalPara(true);
                        paraForm.setFieldsValue(row);
                        setEditMode(true);
                        setEditId(row.id);
                     }}
                     title="Засах"
                     style={{ paddingRight: 5, paddingLeft: 5 }}
                  >
                     <EditOutlined />
                  </Button>
                  <Button
                     type="link"
                     onClick={() => {
                        deleteModal(row.id);
                     }}
                     title="Устгах"
                     style={{ paddingRight: 5, paddingLeft: 5 }}
                  >
                     <DeleteOutlined style={{ color: 'red' }} />
                  </Button>
               </Space>
            );
         }
      }
   ];
   useEffect(() => {
      getExamination();
      getMeasurement();
   }, []);
   return (
      <div>
         <div className="flex flex-wrap">
            <div className="w-1/3 p-1">
               <Card
                  bordered={false}
                  className="header-solid max-h-max rounded-md"
                  title="Шинжилгээ жагсаалт"
               >
                  <Search
                     placeholder="Нэрээр хайх"
                     allowClear
                     enterButton="Хайх"
                     size="large"
                     onSearch={(e) => setSearchText(e)}
                     className="pb-2"
                  />
                  <Table
                     rowKey={'id'}
                     size="small"
                     locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                     loading={{
                        spinning: examinationLoading,
                        tip: 'Уншиж байна....'
                     }}
                     scroll={{
                        y: 300,
                        x: null
                     }}
                     rowClassName={(record, index) => {
                        if (!record.isActive) {
                           return 'bg-red-200';
                        }
                     }}
                     bordered
                     columns={columnExam}
                     dataSource={filteredExamination}
                     pagination={false}
                  />
               </Card>
               <div className="pt-2">
                  <UTable
                     title={'Хэмжих нэгж'}
                     url={'reference/measurement'}
                     column={[
                        {
                           index: 'name',
                           label: 'Нэр',
                           isView: true,
                           isSearch: false,
                           input: 'input',
                           col: 12
                        }
                     ]}
                     isCreate={true}
                     isRead={false}
                     isUpdate={true}
                     isDelete={true}
                     width="40%"
                  />
               </div>
            </div>
            <div className="w-2/3 p-1">
               <Card
                  bordered={false}
                  className="header-solid max-h-max rounded-md"
                  title="Шинжилгээнд хамаарах үзүүлэлт"
               >
                  <Table
                     rowKey={'id'}
                     size="small"
                     locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                     loading={{
                        spinning: examinationParaLoading,
                        tip: 'Уншиж байна....'
                     }}
                     bordered
                     columns={columnExamPara}
                     dataSource={examinationPara}
                     pagination={false}
                  />
               </Card>
            </div>
            <div className="w-full pt-2"></div>
         </div>
         <Modal
            title={!editMode ? 'Үзүүлэлт нэмэх' : 'Үзүүлэлт засах'}
            okText="Хадгалах"
            cancelText="Болих"
            open={isOpenModalPara}
            onCancel={() => setIsOpenModalPara(false)}
            onOk={() =>
               paraForm.validateFields().then((values) => {
                  onFinish(values);
               })
            }
         >
            <Form layout="vertical" form={paraForm}>
               <div className="flex flex-wrap">
                  <div className="w-full">
                     <Form.Item
                        label="Үзүүлэлтийн нэр"
                        name="parameterName"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <Input />
                     </Form.Item>
                  </div>
                  <div className="w-full">
                     <Form.Item
                        label="Үзүүлэлт"
                        name="indicator"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <Input />
                     </Form.Item>
                  </div>
                  <div className="w-full">
                     <Form.Item
                        label="Хэмжих нэгж"
                        name="measurementId"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <Select>
                           {measurements?.map((measurement, index) => {
                              return (
                                 <Option key={index} value={measurement.id}>
                                    {measurement.name}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                  </div>
                  <div className="w-1/2 pr-1">
                     <Form.Item label="Ердийн лавлах хэмжээ их" name="high">
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                  </div>
                  <div className="w-1/2 pl-1">
                     <Form.Item label="Ердийн лавлах хэмжээ Бага" name="low">
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                  </div>
                  <div className="w-1/2 pr-1">
                     <Form.Item label="Эрэгтэй лавлах хэмжээ их" name="manHigh">
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                  </div>
                  <div className="w-1/2 pl-1">
                     <Form.Item
                        label="Эрэгтэй лавлах хэмжээ Бага"
                        name="manLow"
                     >
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                  </div>
                  <div className="w-1/2 pr-1">
                     <Form.Item
                        label="Эмэгтэй лавлах хэмжээ их"
                        name="womenHigh"
                     >
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                  </div>
                  <div className="w-1/2 pl-1">
                     <Form.Item
                        label="Эмэгтэй лавлах хэмжээ Бага"
                        name="womenLow"
                     >
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                  </div>
                  <div className="w-1/2 pr-1">
                     <Form.Item label="насны доод хягаар" name="ageMin">
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                  </div>
                  <div className="w-1/2 pl-1">
                     <Form.Item label="насны дээд хягаар" name="ageMax">
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                  </div>
               </div>
            </Form>
         </Modal>
      </div>
   );
}
export default ExaminationParams;
