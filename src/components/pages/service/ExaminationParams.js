import React, { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined, PlusCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Card, Empty, Form, Input, InputNumber, Modal, Space, Table } from 'antd';
//api
import ServiceApi from '@ApiServices/service/service';
import examinationApi from '@ApiServices/service/examination.api';
//common
import { checkNumber } from '@Comman/common';
//defaults
const { Search } = Input;

function ExaminationParams() {
   const [editMode, setEditMode] = useState(false);
   const [editId, setEditId] = useState(Number);
   const [paraForm] = Form.useForm();
   const [examinations, setExaminations] = useState([]);
   const [examinationPara, setExaminationPara] = useState([]);
   const [examinationParaLoading, setExaminationParaLoading] = useState(false);
   const [examinationLoading, setExaminationLoading] = useState(false);
   const [searchText, setSearchText] = useState('');
   const [selectedExaId, setSelectedExaId] = useState(Number);
   const [isOpenModalPara, setIsOpenModalPara] = useState(false);
   const getExamination = async () => {
      setExaminationLoading(true);
      await examinationApi
         .get()
         .then(({ data: { response } }) => {
            setExaminations(response.data);
         })
         .finally(() => {
            setExaminationLoading(false);
         });
   };
   const getParams = async (id) => {
      setSelectedExaId(id);
      setExaminationParaLoading(true);
      await ServiceApi.getErequestParameter({
         params: {
            examinationId: id
         }
      })
         .then(({ data: { response } }) => {
            setExaminationPara(response.data);
         })
         .finally(() => {
            setExaminationParaLoading(false);
         });
   };
   const filteredExamination = examinations.filter((examination) => {
      return examination.name.toLowerCase().includes(searchText.toLowerCase());
   });
   const onFinish = async (values) => {
      values['examinationId'] = selectedExaId;
      if (editMode) {
         await ServiceApi.patchErequestParameter(editId, values).then(() => {
            setEditMode(false);
            setIsOpenModalPara(false);
            getParams(selectedExaId);
         });
      } else {
         await ServiceApi.postErequestParameter(values).then((response) => {
            setIsOpenModalPara(false);
            getParams(selectedExaId);
         });
      }
   };
   const deleteModal = (id) => {
      Modal.error({
         title: 'Устгах',
         okText: 'Устгах',
         closable: true,
         content: <div>Устгасан тохиолдолд дахин сэргээгдэхгүй болно</div>,
         async onOk() {
            await ServiceApi.deleteErequestParameter(id).then(() => {
               getParams(selectedExaId);
            });
         }
      });
   };
   const columnExam = [
      {
         title: '№',
         width: 80,
         render: (_, _row, rowIndex) => {
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
         width: 100,
         render: (text) => {
            return (
               <>
                  <Button
                     icon={<PlusCircleOutlined title="Үзүүлэлт нэмэх" style={{ color: 'green' }} />}
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
                     icon={<RightOutlined title="Дэлгэрэнгүй" style={{ color: 'blue' }} />}
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
         dataIndex: 'measurement'
      },
      {
         title: <span className="whitespace-normal">Ердийн лавлах хэмжээ Их</span>,
         dataIndex: 'high'
      },
      {
         title: <span className="whitespace-normal">Ердийн лавлах хэмжээ Бага</span>,
         dataIndex: 'low'
      },
      {
         title: <span className="whitespace-normal">Эрэгтэй лавлах хэмжээ Их</span>,
         dataIndex: 'manHigh'
      },
      {
         title: <span className="whitespace-normal">Эрэгтэй лавлах хэмжээ Бага</span>,
         dataIndex: 'manLow'
      },
      {
         title: <span className="whitespace-normal">Эмэгтэй лавлах хэмжээ Их</span>,
         dataIndex: 'womenHigh'
      },
      {
         title: <span className="whitespace-normal">Эмэгтэй лавлах хэмжээ Бага</span>,
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
   }, []);
   return (
      <div className="p-3 w-full h-full bg-[#f5f6f7]">
         <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
               <Card bordered={false} className="header-solid max-h-max rounded-md" title="Шинжилгээ жагсаалт">
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
                        x: 400
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
                     scroll={{
                        x: 400
                     }}
                     bordered
                     columns={columnExamPara}
                     dataSource={examinationPara}
                     pagination={false}
                  />
               </Card>
            </div>
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
                        name="measurement"
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
                     <Form.Item label="Эрэгтэй лавлах хэмжээ Бага" name="manLow">
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                  </div>
                  <div className="w-1/2 pr-1">
                     <Form.Item label="Эмэгтэй лавлах хэмжээ их" name="womenHigh">
                        <InputNumber onKeyPress={checkNumber} />
                     </Form.Item>
                  </div>
                  <div className="w-1/2 pl-1">
                     <Form.Item label="Эмэгтэй лавлах хэмжээ Бага" name="womenLow">
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
