import { DeleteOutlined, EditOutlined, MinusCircleOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {
   Button,
   Card,
   Divider,
   Form,
   Input,
   InputNumber,
   Modal,
   Pagination,
   Select,
   Space,
   Switch,
   Table,
   Tabs
} from 'antd';
import React, { useEffect, useState } from 'react';
// import { Spinner, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Delete, Get, Patch, Post } from '../../../comman';
import DURCriteria from './DURCriteria';
import GeneralDrugInformation from './GeneralDrugInformation';
import PurchaseInformation from './PurchaseInformation';

const { Option } = Select;
const { TextArea } = Input;

function Medicine() {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [medicines, setMedicines] = useState([]);
   const [outMedicines, setOutMedicines] = useState([]);
   const [meta, setMeta] = useState({});
   const [outMeta, setOutMeta] = useState({});
   const [id, setId] = useState(Number);
   const [atcCategories, setAtcCategories] = useState([]);
   const [medTreatmentTypes, setMedTreatmentTypes] = useState([]);
   const [measurements, setMeasurements] = useState([]);
   const [pregnancyWarning, setPregnancyWarnings] = useState([]);
   const [spinner, setSpinner] = useState(false);
   const [editMode, setEditMode] = useState(false);
   const [isOpenMedicineModal, setIsOpenMedicineModal] = useState(false);
   const [isOpenOutMedicineModal, setIsOpenOutMedicineModal] = useState(false);
   const [medicineForm] = Form.useForm();
   const [outMedicineForm] = Form.useForm();
   const [pIndex, setPindex] = useState('');
   const [pValue, setPvalue] = useState('');

   const addModal = (state, type) => {
      setEditMode(false);
      if (type === 0) {
         setIsOpenMedicineModal(state);
      } else {
         setIsOpenOutMedicineModal(state);
      }
   };

   const editModal = async (id) => {
      setEditMode(true);
      setId(id);
      const response = await Get('service/medicine/' + id, token, config);
      if (response.length != 0) {
         medicineForm.setFieldsValue(response);
         setIsOpenMedicineModal(true);
      }
   };
   const deleteModal = (id) => {
      Modal.error({
         title: 'Устгах',
         okText: 'Устгах',
         closable: true,
         content: <div>Устгасан тохиолдолд дахин сэргээгдэхгүй болно</div>,
         async onOk() {
            await Delete('service/medicine/' + id, token, config);
            getMedicines(1);
         }
      });
   };
   const onFinish = async (values) => {
      if (editMode) {
         const response = await Patch('service/medicine/' + id, token, config, values);
         if (response === 200) {
            setIsOpenMedicineModal(false);
            getMedicines(1);
         }
      } else {
         const response = await Post('service/medicine', token, config, values);
         if (response === 201) {
            setIsOpenMedicineModal(false);
            getMedicines(1);
         }
      }
   };
   const onFinishOut = async (values) => {
      if (editMode) {
         const response = await Patch('service/global-medicine/' + id, token, config, values);
         if (response === 200) {
            setIsOpenOutMedicineModal(false);
            getOutMedicines(1, 20);
         }
      } else {
         const response = await Post('service/global-medicine', token, config, values);
         if (response === 201) {
            // setIsOpenMedicineModal(false);
            // getMedicines(1);?
         }
      }
   };
   const getAtcCategory = async () => {
      config.params.type = 1;
      const response = await Get('medicine/reference', token, config);
      setAtcCategories(response.data);
   };
   const getMedTreatmentTypes = async () => {
      config.params.type = 2;
      const response = await Get('medicine/reference', token, config);
      setMedTreatmentTypes(response.data);
   };
   const getMeasurements = async () => {
      const response = await Get('reference/measurement', token, config);
      setMeasurements(response.data);
   };
   const getPregnancyWarnings = async () => {
      config.params.type = 4;
      const response = await Get('medicine/reference', token, config);
      setPregnancyWarnings(response.data);
   };
   const getMedicines = async (page, pageSize, value, index) => {
      setSpinner(false);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize
         }
      };
      if ((value, index)) {
         conf.params[index] = value;
         setPindex(index);
         setPvalue(value);
      }
      const response = await Get('service/medicine', token, conf);
      if (response.data.length > 0) {
         setMedicines(response.data);
         setMeta(response.meta);
         setSpinner(true);
      }
   };
   const getOutMedicines = async (page, pageSize, value, index) => {
      setSpinner(false);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize
         }
      };
      if ((value, index)) {
         conf.params[index] = value;
         setPindex(index);
         setPvalue(value);
      }
      const response = await Get('service/global-medicine', token, conf);
      if (response.data.length > 0) {
         setOutMedicines(response.data);
         setOutMeta(response.meta);
         setSpinner(true);
      }
   };
   const getTreatment = (value) => {
      var data = medTreatmentTypes.filter((e) => e.id === value);
      return data[0]?.name;
   };
   const getATC = (value) => {
      var data = atcCategories.filter((e) => e.id === value);
      return data[0]?.name;
   };
   useEffect(() => {
      getMedicines(1, 20);
      getOutMedicines(1, 20);
      getAtcCategory();
      getMedTreatmentTypes();
      getMeasurements();
      getPregnancyWarnings();
   }, []);
   const medicineItems = [
      {
         label: 'Эмийн ерөнхий мэдээлэл',
         key: '1',
         children: <GeneralDrugInformation />
      },
      {
         label: 'Худалдан авалтын мэдээлэл',
         key: '2',
         children: <PurchaseInformation />
      },
      { label: 'DUR шалгуур', key: '3', children: <DURCriteria /> }
   ];
   const inMedicineCols = [
      {
         title: '№',
         render: (_, record, index) => {
            return meta.page * meta.limit - (meta.limit - index - 1);
         }
      },
      {
         title: 'Нэр',
         dataIndex: 'name'
      },
      {
         title: 'Үнэ',
         dataIndex: 'price'
      },
      {
         title: 'Хэвтэнгийн үнэ',
         dataIndex: 'inpatientPrice'
      },
      {
         title: 'Үйлдэл',
         dataIndex: 'id',
         render: (text, row) => {
            return (
               <Space>
                  <Button
                     type="link"
                     // onClick={() => editModal(text)}
                     title="Засах"
                     style={{ paddingRight: 5, paddingLeft: 5 }}
                  >
                     <EditOutlined />
                  </Button>
                  <Button
                     type="link"
                     // onClick={() => editModal(text)}
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
   const outMedicineCols = [
      {
         title: '№',
         render: (_, record, index) => {
            return outMeta.page * outMeta.limit - (outMeta.limit - index - 1);
         }
      },
      {
         title: 'Эмийн код',
         dataIndex: 'barcode'
      },
      {
         title: 'Нэршил',
         children: [
            {
               title: 'Монгол',
               dataIndex: 'mnName'
            },
            {
               title: 'Олон улс',
               dataIndex: 'iName'
            }
         ]
      },
      {
         title: 'Засах',
         render: (_, row) => {
            return (
               <Button
                  onClick={() => {
                     outMedicineForm.setFieldsValue(row);
                     setId(row.id);
                     setIsOpenOutMedicineModal(true);
                     setEditMode(true);
                  }}
                  icon={<EditOutlined />}
               />
            );
         }
      }
   ];
   const IMedicine = ({ type }) => (
      <Card bordered={false} className="header-solid max-h-max rounded-md">
         <Button type="primary" icon={<PlusOutlined />} onClick={() => addModal(true, type)}>
            Нэмэх
         </Button>
         <Table
            rowKey={'id'}
            bordered
            columns={type === 0 ? inMedicineCols : outMedicineCols}
            dataSource={type === 0 ? medicines : outMedicines}
            pagination={{
               position: ['topCenter', 'bottomCenter'],
               size: 'small',
               current: type === 0 ? meta.page : outMeta.page,
               total: type === 0 ? meta.itemCount : outMeta.itemCount,
               showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
               pageSize: type === 0 ? meta.limit : outMeta.limit,
               total: type === 0 ? meta.itemCount : outMeta.itemCount,
               showSizeChanger: true,
               pageSizeOptions: ['5', '10', '20', '50'],
               showQuickJumper: true,
               onChange: (page, pageSize) =>
                  type === 0
                     ? getMedicines(page, pageSize, pValue, pIndex)
                     : getOutMedicines(page, pageSize, pValue, pIndex)
            }}
         />
      </Card>
   );
   return (
      <div>
         <Tabs
            type="card"
            items={[
               {
                  key: 1,
                  label: 'Дотоод эмийн сан',
                  children: <IMedicine type={0} />
               },
               {
                  key: 2,
                  label: 'Гадаад эмийн сан',
                  children: <IMedicine type={1} />
               }
            ]}
         />
         <Modal
            title="Гадаад эм нэмэх"
            open={isOpenOutMedicineModal}
            onOk={() =>
               outMedicineForm.validateFields().then((values) => {
                  onFinishOut(values);
               })
            }
            onCancel={() => setIsOpenOutMedicineModal(false)}
            width={'60%'}
            cancelText="Болих"
            okText="Хадгалах"
         >
            <Form
               form={outMedicineForm}
               labelAlign={'right'}
               labelCol={{
                  span: 8
               }}
               wrapperCol={{
                  span: 16
               }}
            >
               <Tabs type="card" items={medicineItems} />
            </Form>
         </Modal>
      </div>
   );
}
export default Medicine;
