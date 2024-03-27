import Table from 'react-bootstrap/Table';
import {
   Card,
   Modal,
   Input,
   Form,
   Row,
   Col,
   Switch,
   Button,
   Select,
   Descriptions,
   DatePicker,
   InputNumber,
   Pagination,
   Popconfirm
} from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {
   EditOutlined,
   DeleteOutlined,
   PlusOutlined,
   EyeOutlined,
   CheckOutlined,
   CloseOutlined
} from '@ant-design/icons';
import { Get, Post, Patch, Delete, ScrollRef } from './common';
import TextArea from 'antd/lib/input/TextArea';
import mn from 'antd/es/calendar/locale/mn_MN';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../features/authReducer';
import moment from 'moment';

const { Search } = Input;
const { Option } = Select;

function UTable(props) {
   const navigate = useNavigate();
   const token = useSelector(selectCurrentToken);
   const [data, setData] = useState([]);
   const [meta, setMeta] = useState([]);
   const [view, setView] = useState([]);
   const [searchValue, setSearchValue] = useState();
   const [id, setId] = useState([]);
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [isViewModalVisible, setIsViewModalVisible] = useState(false);
   const [isSubModalVisible, setIsSubModalVisible] = useState(false);
   const [editMode, setEditMode] = useState(false);
   const [isConfirmLoading, setIsConfirmLoading] = useState(false);
   const [spinner, setSpinner] = useState(false);
   const [form] = Form.useForm();
   const [AddSubForm] = Form.useForm();
   const scrollRef = useRef();
   //
   const [type, setType] = useState();
   const [typesData, setTypesData] = useState([]);

   const [dependShow, setDependShow] = useState(false); //Хамааралтай hide/show байвал энэ хувсагч харуулах эсэхийг шийднэ
   //
   const config = {
      headers: {},
      params: {
         page: 1,
         limit: 10
      }
   };
   const onSearch = (value, index) => {
      config.params[index] = value;
      onStart(meta.page, 10);
   };
   const showModal = () => {
      setEditMode(false);
      form.resetFields();
      setIsModalVisible(true);
   };
   const viewModal = (row) => {
      setView(row);
      setIsViewModalVisible(true);
      // const response = await Get(props.url + "/" + id, token, config);
      // if (response.length != 0) {
      //   setView(response);
      //   console.log("=======>", response);
      //   setIsViewModalVisible(true);
      // }
   };
   const editModal = async (id) => {
      setEditMode(true);
      setId(id);
      const response = await Get(props.url + '/' + id, token, config);
      props.column.map((element) => {
         if (element.input === 'date') {
            response[`${element.index}`] = moment(response[`${element.index}`]);
         }
      });
      if (response.length != 0) {
         form.setFieldsValue(response);
         setIsModalVisible(true);
      }
   };
   const deleteModal = (id) => {
      Modal.error({
         title: 'Устгах',
         okText: 'Устгах',
         closable: true,
         content: <div>Устгасан тохиолдолд дахин сэргээгдэхгүй болно</div>,
         async onOk() {
            await Delete(props.url + '/' + id, token, config);
            onStart(meta.page, 10);
         }
      });
   };
   const onStart = async (page, pageSize) => {
      setSpinner(false);
      config.params.page = page;
      config.params.limit = pageSize;
      if (props.params) {
         config.params = { ...config.params, ...props.params.params };
      }
      const response = await Get(props.url, token, config);
      if (response.status === 401) {
         navigate('/login');
      } else {
         if (response.data.length != 0) {
            setData(response.data);
            setMeta(response.meta);
         } else {
            setData([]);
            setMeta({});
         }
      }
      setSpinner(true);
   };
   const onFinish = async (data) => {
      setIsConfirmLoading(true);
      var response = null;
      if (editMode) {
         response = await Patch(props.url + '/' + parseInt(id), token, config, data);
         if (response === 200) {
            setIsModalVisible(false);
            onStart(meta.page, 10);
            setSpinner(true);
         }
      } else {
         response = await Post(props.url, token, config, data);
         console.log(response);
         if (response === 201) {
            setIsConfirmLoading(false);
            setIsModalVisible(false);
            onStart(meta.page, 10);
            setSpinner(true);
         }
      }
      setIsConfirmLoading(false);
   };
   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };
   const inputChecker = (index, row) => {
      if (props.column[index]?.input === 'multipleSelect') {
         var string = '';
         row?.map((item) => {
            string += `${item}|`;
         });
         return string;
      } else if (props.column[index]?.input === 'select') {
         return props.column[index]?.inputData?.map((data) => {
            if (props.column[index]?.relValueIndex) {
               if (data[`${props.column[index]?.relValueIndex}`] === row) {
                  return data[`${props.column[index]?.relIndex}`];
               }
            } else if (data.id === row) return data[`${props.column[index]?.relIndex}`];
         });
      } else if (props.column[index]?.input === 'switch') {
         return row ? <CheckOutlined className="text-green-600" /> : <CloseOutlined className="text-red-600" />;
      }
      return row;
   };
   const checkNumber = (event) => {
      var charCode = event.charCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
         event.preventDefault();
      } else {
         return true;
      }
   };
   const getTypesDatas = async (type) => {
      setType(type);
      config.params.type = type;
      const response = await Get('reference-care-type', token, config);
      setTypesData(response.data);
   };
   useEffect(() => {
      onStart(1, 10);
      ScrollRef(scrollRef);
   }, [props.isRefresh]);

   const handleFormValuesChange = (changedValues) => {
      // Хамааралтай hide/show тохируулах
      const fieldName = Object.keys(changedValues)[0];
      const fieldVal = Object.values(changedValues)[0];
      if (fieldName === props.dependCol && fieldVal === props.dependVal) {
         console.log('changed', changedValues);
         console.log('fieldName', fieldName);
         console.log('fieldVal', fieldVal);
         setDependShow(true);
      } else {
         setDependShow(false);
      }
   };

   const getInputs = (element, inputType) => {
      switch (inputType) {
         case 'select':
            return (
               <Form.Item label={element.label} name={element.index} rules={element.rules}>
                  <Select
                     allowClear
                     showSearch
                     placeholder={element.label}
                     optionFilterProp="children"
                     filterOption={(input, option) => {
                        return (option?.children ?? '').toLowerCase().includes(input?.toLowerCase());
                     }}
                  >
                     {element.inputData?.map((data, index) => {
                        return (
                           <Option
                              key={index}
                              value={element.relValueIndex ? data[`${element.relValueIndex}`] : data.id}
                           >
                              {data[`${element.relIndex}`]}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
            );
         case 'multipleSelect':
            return (
               <Form.Item label={element.label} name={element.index} rules={element.rules}>
                  <Select mode="multiple" allowClear placeholder={element.label}>
                     {element.inputData?.map((data, index) => {
                        return (
                           <Option
                              key={index}
                              value={element.relValueIndex ? data[`${element.relValueIndex}`] : data.id}
                           >
                              {data[`${element.relIndex}`]}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
            );
         case 'input':
            return (
               <Form.Item label={element.label} name={element.index} rules={element.rules}>
                  <Input placeholder={element.label} />
               </Form.Item>
            );
         case 'switch':
            return (
               <Form.Item label={element.label} name={element.index} rules={element.rules} valuePropName="checked">
                  <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
               </Form.Item>
            );
         case 'numberInput':
            return (
               <Form.Item label={element.label} name={element.index} rules={element.rules}>
                  <InputNumber placeholder={element.label} onKeyPress={checkNumber} />
               </Form.Item>
            );
         case 'textarea':
            return (
               <Form.Item label={element.label} name={element.index} rules={element.rules}>
                  <TextArea />
               </Form.Item>
            );
         case 'date':
            return (
               <Form.Item label={element.label} name={element.index} rules={element.rules}>
                  <DatePicker locale={mn} />
               </Form.Item>
            );
         case 'inputDefValueHide':
            return (
               <Form.Item
                  style={{
                     display: 'none'
                  }}
                  label={element.label}
                  name={element.index}
                  rules={element.rules}
               >
                  <InputNumber placeholder={element.label} onKeyPress={checkNumber} />
               </Form.Item>
            );
         default:
            return;
      }
   };

   return (
      <>
         <Card
            bordered={false}
            className="header-solid rounded-md"
            title={props.title}
            bodyStyle={{ padding: 8 }}
            extra={
               props.isCreate && (
                  <Button onClick={showModal} type="primary">
                     Нэмэх
                  </Button>
               )
            }
         >
            <div className="table-responsive p-4" id="style-8" ref={scrollRef}>
               <Table bordered className="ant-border-space" style={{ width: '100%' }}>
                  <thead className="ant-table-thead bg-slate-200">
                     <tr>
                        <th className="font-bold text-sm align-middle" rowSpan={2}>
                           №
                        </th>
                        {props.column.map((element, index) => {
                           return (
                              element.isView && (
                                 <th
                                    key={index}
                                    rowSpan={element.isSearch ? 1 : 2}
                                    className="font-bold text-sm align-middle"
                                 >
                                    {element.label}
                                 </th>
                              )
                           );
                        })}
                        <th className="w-3 font-bold text-sm align-middle" rowSpan={2}>
                           Үйлдэл
                        </th>
                        {props.isFinance ? (
                           <th className="w-3 font-bold text-sm align-middle" rowSpan={2}>
                              Санхүү
                           </th>
                        ) : null}
                        {props.isInsurance ? (
                           <th className="w-3 font-bold text-sm align-middle" rowSpan={2}>
                              Даатгал
                           </th>
                        ) : null}
                        {props.insuranceSync ? (
                           <th className="w-3 font-bold text-sm align-middle" rowSpan={2}>
                              Даатгал Дата
                           </th>
                        ) : null}
                     </tr>
                     <tr>
                        {props.column.map((element, index) => {
                           return (
                              element.isView &&
                              element.isSearch && (
                                 <td key={index}>
                                    <Search
                                       placeholder={element.label + ' Хайх'}
                                       allowClear
                                       onSearch={(e) => onSearch(e, element.index)}
                                       enterButton={'Хайх'}
                                    />
                                 </td>
                              )
                           );
                        })}
                     </tr>
                  </thead>
                  <tbody className="ant-table-tbody p-0">
                     {spinner ? (
                        data.map((row, indexData) => {
                           return (
                              <tr key={indexData} className="ant-table-row ant-table-row-level-0">
                                 <td className="ant-table-row-cell-break-word">
                                    {meta.page * meta.limit - (meta.limit - indexData - 1)}
                                 </td>
                                 {props.column?.map((column, index) => {
                                    return column.relation && row[`${column.index[0]}`] !== null ? (
                                       <td
                                          key={index}
                                          style={{
                                             maxWidth: column.width,
                                             whiteSpace: 'pre-line'
                                          }}
                                       >
                                          {column?.staticData
                                             ? column.staticData(row[`${column.index[0]}`][`${column.index[1]}`])
                                             : inputChecker(index, row[`${column.index[0]}`][`${column.index[1]}`])}
                                       </td>
                                    ) : (
                                       column.isView && (
                                          <td
                                             key={index}
                                             style={{
                                                maxWidth: column.width,
                                                whiteSpace: 'pre-line'
                                             }}
                                          >
                                             {column.staticData
                                                ? column.staticData(row[`${column.index}`])
                                                : inputChecker(index, row[`${column.index}`])}
                                          </td>
                                       )
                                    );
                                 })}
                                 <td className="ant-table-row-cell-break-word">
                                    {props.isRead && (
                                       <Button
                                          type="link"
                                          onClick={() => viewModal(row)}
                                          title="Харах"
                                          style={{ paddingRight: 5 }}
                                       >
                                          <EyeOutlined />
                                       </Button>
                                    )}
                                    {props.isUpdate && (
                                       <Button
                                          type="link"
                                          onClick={() => editModal(props.passParam ? row[props.passParam] : row.id)}
                                          title="Засах"
                                          style={{
                                             paddingRight: 5,
                                             paddingLeft: 5
                                          }}
                                       >
                                          <EditOutlined />
                                       </Button>
                                    )}
                                    {props.isDelete && (
                                       <Button
                                          type="link"
                                          onClick={() => deleteModal(props.passParam ? row[props.passParam] : row.id)}
                                          title="Устгах"
                                          style={{ paddingLeft: 5 }}
                                       >
                                          <DeleteOutlined style={{ color: 'red' }} />
                                       </Button>
                                    )}
                                 </td>
                                 {props.isFinance ? (
                                    <td className="p-2">
                                       {row.isStorage ? (
                                          <CheckOutlined className="text-green-600" />
                                       ) : (
                                          <Button
                                             onClick={() => props.financeFunction(row)}
                                             type="text"
                                             className="text-sky-500 font-semibold"
                                          >
                                             Холбох
                                          </Button>
                                       )}
                                    </td>
                                 ) : null}
                                 {props.isInsurance ? (
                                    <td className="p-2">
                                       {!row.isInsurance ? (
                                          <CloseOutlined className="text-red-600" />
                                       ) : (
                                          <Button
                                             onClick={() => props.insuranceFunction(row)}
                                             type="text"
                                             className="text-sky-500 font-semibold"
                                          >
                                             {row.insurancePassword != null && row.insuranceUsername != null
                                                ? 'Засах'
                                                : 'Холбох'}
                                          </Button>
                                       )}
                                    </td>
                                 ) : null}
                                 {props.insuranceSync ? (
                                    <td className="p-2">
                                       <Button.Group>
                                          <Button
                                             onClick={() => props.insuranceSyncFunction(true, row.id)}
                                             type="text"
                                             className="text-sky-500 font-semibold"
                                          >
                                             Async
                                          </Button>
                                          <Button
                                             onClick={() => {
                                                props.insuranceSyncFunction(false, row.id);
                                             }}
                                             type="text"
                                             className="text-sky-500 font-semibold"
                                          >
                                             Харах
                                          </Button>
                                       </Button.Group>
                                    </td>
                                 ) : null}
                                 {props.isHospital ? (
                                    <td className="p-2">
                                       {row.financeOrganizationId ? (
                                          <CheckOutlined className="text-green-600" />
                                       ) : (
                                          <Button
                                             onClick={() => props.hospitalFunction(row)}
                                             type="text"
                                             className="text-sky-500 font-semibold"
                                          >
                                             Холбох
                                          </Button>
                                       )}
                                    </td>
                                 ) : null}
                              </tr>
                           );
                        })
                     ) : (
                        <tr>
                           <td
                              colSpan={props.column.length + 2}
                              size="lg"
                              style={{
                                 backgroundColor: 'white',
                                 textAlign: 'center'
                              }}
                           >
                              <Spinner animation="grow" style={{ color: '#1890ff' }} />
                           </td>
                        </tr>
                     )}
                  </tbody>
               </Table>
            </div>
            <div>
               <Pagination
                  simple={true}
                  className="pagination"
                  pageSize={10}
                  current={meta.page}
                  total={meta.itemCount}
                  onChange={onStart}
               />
            </div>
         </Card>
         <Modal
            title={props.title}
            width={props.width}
            open={isViewModalVisible}
            footer={null}
            onCancel={() => {
               setIsViewModalVisible(false);
            }}
         >
            <Descriptions bordered>
               {props.column.map((element, idx) => {
                  return (
                     <Descriptions.Item key={idx} label={element.label}>
                        {inputChecker(idx, view[`${element.index}`])}
                        {element.relation
                           ? inputChecker(idx, view[`${element.index[0]}`]?.[`${element.index[1]}`])
                           : inputChecker(idx, view[`${element.index}`])}
                     </Descriptions.Item>
                  );
               })}
            </Descriptions>
         </Modal>
         <Modal
            title={editMode ? props.title + ' засах' : props.title + ' нэмэх'}
            open={isModalVisible}
            onOk={() => {
               form
                  .validateFields()
                  .then((values) => {
                     onFinish(values);
                  })
                  .catch((error) => {
                     onFinishFailed(error);
                  });
            }}
            onCancel={() => {
               setIsModalVisible(false);
            }}
            confirmLoading={isConfirmLoading}
            width={props.width}
            cancelText="Болих"
            okText="Хадгалах"
         >
            <Form
               form={form}
               wrapperCol={{ span: 14 }}
               initialValues={props.initialValues}
               // onValuesChange={handleFormValuesChange}
            >
               <Row gutter={[24, 6]}>
                  {props.column.map((element, index) => {
                     return (
                        <Col span={element.col} key={index}>
                           {element.isAdd && !editMode && (
                              <Button
                                 type="link"
                                 title="Төрөл нэмэх"
                                 onClick={() => {
                                    setIsSubModalVisible(true);
                                    getTypesDatas(element.type);
                                 }}
                              >
                                 <PlusOutlined
                                    style={{
                                       fontSize: '20px',
                                       color: 'green',
                                       textAlign: 'center'
                                    }}
                                 />
                              </Button>
                           )}
                           {getInputs(element, element.input)}
                        </Col>
                     );
                  })}
               </Row>
            </Form>
         </Modal>
         <Modal
            title={props.title + ' төрөл нэмэх'}
            open={isSubModalVisible}
            onOk={() => {
               AddSubForm.validateFields()
                  .then(async (values) => {
                     let type;
                     props.column.map((item) => {
                        if (item.isAdd) {
                           type = item.type;
                        }
                     });
                     values.type = type;
                     const response = await Post('reference-care-type', token, config, values);
                     if (response.length != 0) {
                        props.refresh();
                        setIsSubModalVisible(false);
                     }
                  })
                  .catch((error) => {
                     console.log(error);
                  });
            }}
            cancelText="Болих"
            okText="Хадгалах"
            onCancel={() => {
               setIsSubModalVisible(false);
               props.refresh();
            }}
         >
            <Form form={AddSubForm}>
               {props.column.map((element, index) => {
                  return (
                     <Col span={24} key={index}>
                        {element.isAdd && element.subInput === 'input' && (
                           <Form.Item label={element.label} name={element.index} rules={element.rules}>
                              <Input placeholder={element.label} />
                           </Form.Item>
                        )}
                     </Col>
                  );
               })}
            </Form>
            <div className="table-responsive p-4" id="style-8" ref={scrollRef}>
               <Table className="ant-border-space" style={{ width: '100%' }}>
                  <thead className="ant-table-thead bg-slate-200">
                     <tr>
                        <th className="font-bold text-sm align-middle">Нэр</th>
                        <th className="font-bold text-sm align-middle">Үйлдэл</th>
                     </tr>
                  </thead>
                  <tbody className="ant-table-tbody p-0">
                     {typesData.map((data, index) => {
                        return (
                           <tr key={index}>
                              <td>{data.name}</td>
                              <td>
                                 <Popconfirm
                                    title="Устгасан дохиолдолд сэргээх боломжгүй"
                                    onConfirm={async () => {
                                       const response = await Delete('reference-care-type/' + data.id, token, config);
                                       if (response === 200) {
                                          getTypesDatas(data.type);
                                       }
                                    }}
                                    okText="Тийм"
                                    cancelText="Үгүй"
                                 >
                                    <DeleteOutlined style={{ color: 'red' }} />
                                 </Popconfirm>
                              </td>
                           </tr>
                        );
                     })}
                  </tbody>
               </Table>
            </div>
         </Modal>
      </>
   );
}
export default UTable;
