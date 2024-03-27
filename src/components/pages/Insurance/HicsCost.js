import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { DefualtGet, Get, Patch, Post, numberToCurrency } from '../../common';
import UTable from '../../UTable';
import { Button, Card, Form, Input, InputNumber, Modal, Select, Table } from 'antd';
import Support from './Support';
import { EditFilled } from '@ant-design/icons';
const { Option } = Select;
function HicsCost() {
   const token = useSelector(selectCurrentToken);
   const [drgType, setDrgType] = useState([]);
   const [drgCode, setDrgCode] = useState([]);
   const [ihsg, setIhsg] = useState([]);
   const [icd9, setIcd9] = useState([]);
   const [icd10, setIcd10] = useState([]);
   //
   const [hicsCosts, setHicsCosts] = useState([]);
   const [selectedRowId, setSelectedRowId] = useState(Number);
   const [hicsLoading, setHicsLoading] = useState(false);
   const [meta, setMeta] = useState({});
   const [editMode, setEditMode] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [form] = Form.useForm();
   const [isLoading, setIsLoading] = useState(false);
   const [query, setQuery] = useState({
      drgCode: null,
      icd10Code: null,
      groupId: null
   });
   //
   const conf = {
      headers: {},
      params: {}
   };
   const showModal = () => {
      setIsOpenModal(true);
   };
   const editModal = (row, id) => {
      form.setFieldsValue(row);
      setSelectedRowId(id);
      setEditMode(true);
      setIsOpenModal(true);
   };
   //
   const getRange = async () => {
      const conf = {
         header: {},
         params: {
            startCode: 'A00',
            endCode: 'A99'
         }
      };
      const response = await Get('reference/diagnose/between/code', token, conf);
      console.log(response);
   };
   //
   const getDrgType = async () => {
      const response = await DefualtGet('insurance/drg-type', token, conf);
      setDrgType(response.data);
   };
   const getDrgCode = async () => {
      const response = await DefualtGet('insurance/drg-code', token, conf);
      setDrgCode(response.data);
   };
   const getInsuranceHicsServiceGroup = async () => {
      const response = await DefualtGet('insurance/hics-service-group', token, conf);
      setIhsg(response.data);
   };
   const getICD9 = async () => {
      const conff = {
         headers: {},
         params: {
            type: 1
         }
      };
      const response = await Get('reference/diagnose', token, conff);
      setIcd9(response.data);
   };
   const getICD10 = async () => {
      const conff = {
         headers: {},
         params: {
            type: 0
         }
      };
      const response = await Get('reference/diagnose', token, conff);
      setIcd10(response.data);
   };
   const columns = [
      {
         title: 'Тусгай үйлчилгээний төрөл',
         dataIndex: 'groupId',
         key: 'groupId',
         render: (text) => ihsg.find((el) => el.id === text)?.name
      },
      {
         title: 'ОХБ Код',
         dataIndex: 'drgCode'
      },
      {
         title: 'ОХБ Нэр',
         dataIndex: 'drgName'
      },
      {
         title: 'ICD 10',
         dataIndex: 'icd10Codes',
         render: (text) => {
            var codes = '';
            text?.map((code) => {
               codes += `${code} ,`;
            });
            return codes;
         }
      },
      {
         title: 'Үйлдлийн ангилал',
         dataIndex: 'drgTypeCode',
         render: (text) => {
            return drgType.find((el) => el.id === text)?.name;
         }
      },
      {
         title: 'ICD 9',
         dataIndex: 'icd9Codes',
         render: (text) => {
            var codes = '';
            text?.map((code) => {
               codes += `${code} ,`;
            });
            return codes;
         }
      },
      {
         title: 'Өртгийн жин',
         dataIndex: 'drgCost'
      },
      {
         title: 'ЭМД аас төлөх',
         dataIndex: 'amountHi',
         render: (text) => {
            return numberToCurrency(text);
         }
      },
      {
         title: 'Иргэнээс төлөх',
         dataIndex: 'amountCit',
         render: (text) => {
            return numberToCurrency(text);
         }
      },
      {
         title: 'Нийт төлбөр',
         dataIndex: 'amountTotal',
         render: (text) => {
            return numberToCurrency(text);
         }
      },
      {
         title: 'Үйлдэл',
         dataIndex: 'id',
         render: (text, row) => {
            return <EditFilled onClick={() => editModal(row, text)} />;
         }
      }
   ];
   const getHicsCost = async (page, pageSize) => {
      setHicsLoading(true);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            ...query
         }
      };
      const response = await Get('hics-cost', token, conf);
      setHicsCosts(response.data);
      setMeta(response.meta);
      setHicsLoading(false);
   };
   //
   const findResult = (codes) => {
      var newData = [];
      var oldData = form.getFieldValue('icd10Codes');
      if (oldData) {
         const dups = codes.filter((code) => oldData?.some((e) => code.endsWith(e)));
         dups?.map((dup) => {
            oldData?.splice(
               oldData?.findIndex((e) => e === dup),
               1
            );
         });
         newData = [...oldData, ...codes];
      }
      form.setFieldValue('icd10Codes', newData);
   };
   const onFinish = async (values) => {
      setIsLoading(true);
      if (editMode) {
         console.log(editMode);
         const conf = {
            headers: {},
            params: {}
         };
         const response = await Patch('hics-cost/' + selectedRowId, token, conf, values);
         console.log(response);
      } else {
         const conf = {
            headers: {},
            params: {}
         };
         const response = await Post('hics-cost', token, conf, values);
         if (response === 201) {
            setIsOpenModal(false);
            form.resetFields();
         }
      }
      setIsLoading(false);
   };
   const filterGroupHicsCosts = async (groupId) => {
      setHicsLoading(true);
      const conf = {
         headers: {},
         params: {
            page: 1,
            limit: 10,
            groupId: groupId
         }
      };
      setQuery({ groupId: groupId });
      const response = await Get('hics-cost', token, conf);
      setHicsCosts(response.data);
      setMeta(response.meta);
      setHicsLoading(false);
   };
   //
   useEffect(() => {
      getDrgType();
      getDrgCode();
      getInsuranceHicsServiceGroup();
      getICD9();
      getICD10();
      getHicsCost(1, 10);
   }, []);
   return (
      <div>
         <Card
            bordered={false}
            className="header-solid max-h-max rounded-md"
            extra={
               <Button onClick={() => showModal()} type="primary">
                  Нэмэх
               </Button>
            }
         >
            Тусгай үйлчилгээний төрөл:&nbsp;
            <Select
               showSearch
               placeholder="Тусгай үйлчилгээний төрөл"
               optionFilterProp="children"
               filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
               onChange={filterGroupHicsCosts}
               options={ihsg.map((item) => ({
                  label: item.name,
                  value: item.id
               }))}
            />
            <Table
               rowKey={'id'}
               bordered
               columns={columns}
               dataSource={hicsCosts}
               loading={hicsLoading}
               pagination={{
                  position: ['topCenter', 'bottomCenter'],
                  size: 'small',
                  current: meta.page,
                  total: meta.itemCount,
                  showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                  pageSize: meta.limit,
                  showSizeChanger: true,
                  pageSizeOptions: ['5', '10', '20', '50'],
                  showQuickJumper: true,
                  onChange: (page, pageSize) => getHicsCost(page, pageSize)
               }}
            />
         </Card>
         <Modal
            title={editMode ? 'Засах' : 'Нэмэх'}
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => form.validateFields().then((values) => onFinish(values))}
            confirmLoading={isLoading}
            width={'80%'}
         >
            <Form form={form} layout="vertical">
               <div className="flex flex-wrap">
                  <div className="basis-1/2 p-1">
                     <Form.Item label="Тусгай үйлчилгээний төрөл" name="groupId">
                        <Select
                           allowClear
                           showSearch
                           placeholder="Сонгох"
                           optionFilterProp="children"
                           filterOption={(input, option) =>
                              (option?.children ?? '').toLowerCase().includes(input?.toLowerCase())
                           }
                        >
                           {ihsg?.map((item, index) => {
                              return (
                                 <Option key={index} value={item.id}>
                                    {item.name}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                  </div>
                  <div className="basis-1/2 p-1">
                     <Form.Item label="ОХБ Код" name="drgCode">
                        <Select
                           allowClear
                           showSearch
                           placeholder="Сонгох"
                           optionFilterProp="children"
                           filterOption={(input, option) =>
                              (option?.value ?? '').toLowerCase().includes(input?.toLowerCase())
                           }
                        >
                           {drgCode?.map((item, index) => {
                              return (
                                 <Option key={index} value={item.drgCode}>
                                    {item.drgCode}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                  </div>
                  <div className="basis-3/4 p-1">
                     <Form.Item label="ICD 10" name="icd10Codes">
                        <Select
                           mode="multiple"
                           allowClear
                           style={{
                              width: '100%'
                           }}
                        >
                           {icd10?.map((icd, index) => {
                              return (
                                 <Option key={index} value={icd.code}>
                                    {icd.code}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                  </div>
                  <div
                     className="basis-1/4 p-1"
                     style={{
                        backgroundColor: '#e0e0e0'
                     }}
                  >
                     <div className="inline-grid">
                        <Support result={findResult} />
                     </div>
                  </div>
                  <div className="basis-1/2 p-1">
                     <Form.Item label="Үйлдлийн ангилал" name="drgTypeCode">
                        <Select
                           allowClear
                           showSearch
                           placeholder="Сонгох"
                           optionFilterProp="children"
                           filterOption={(input, option) =>
                              (option?.children ?? '').toLowerCase().includes(input?.toLowerCase())
                           }
                        >
                           {drgType?.map((item, index) => {
                              return (
                                 <Option key={index} value={item.id}>
                                    {item.name}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                  </div>
                  <div className="basis-1/2 p-1">
                     <Form.Item label="ICD 9" name={'icd9Codes'}>
                        <Select
                           mode="multiple"
                           allowClear
                           style={{
                              width: '100%'
                           }}
                        >
                           {icd9?.map((item, index) => {
                              return (
                                 <Option key={index} value={item.code}>
                                    {item.code}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                  </div>
                  <div className="basis-1/3 p-1">
                     <Form.Item label="Өртгийн жин" name="drgCost">
                        <InputNumber />
                     </Form.Item>
                  </div>
                  <div className="basis-1/3 p-1">
                     <Form.Item label="ЭМД аас төлөх" name="amountHi">
                        <InputNumber />
                     </Form.Item>
                  </div>
                  <div className="basis-1/3 p-1">
                     <Form.Item label="Иргэнээс төлөх" name="amountCit">
                        <InputNumber />
                     </Form.Item>
                  </div>
               </div>
            </Form>
         </Modal>
      </div>
   );
}
export default HicsCost;
