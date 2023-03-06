import {
   DeleteOutlined,
   EditOutlined,
   MinusCircleOutlined,
   PlusCircleOutlined,
   PlusOutlined
} from '@ant-design/icons';
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
   Switch,
   Tabs
} from 'antd';
import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
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
   const [meta, setMeta] = useState([]);
   const [id, setId] = useState(Number);
   const [atcCategories, setAtcCategories] = useState([]);
   const [medTreatmentTypes, setMedTreatmentTypes] = useState([]);
   const [measurements, setMeasurements] = useState([]);
   const [pregnancyWarning, setPregnancyWarnings] = useState([]);
   const [spinner, setSpinner] = useState(false);
   const [editMode, setEditMode] = useState(false);
   const [isOpenMedicineModal, setIsOpenMedicineModal] = useState(false);
   const [medicineForm] = Form.useForm();

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
         content: <div>Устгасан дохиолдолд дахин сэргэхгүй болно</div>,
         async onOk() {
            await Delete('service/medicine/' + id, token, config);
            getMedicines(1);
         }
      });
   };
   const onFinish = async (values) => {
      if (editMode) {
         const response = await Patch(
            'service/medicine/' + id,
            token,
            config,
            values
         );
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
      config.params.type = 3;
      const response = await Get('medicine/reference', token, config);
      setMeasurements(response.data);
   };
   const getPregnancyWarnings = async () => {
      config.params.type = 4;
      const response = await Get('medicine/reference', token, config);
      setPregnancyWarnings(response.data);
   };
   const getMedicines = async (page) => {
      setSpinner(false);
      config.params.page = page;
      config.params.limit = 10;
      const response = await Get('service/medicine', token, config);
      if (response.data.length > 0) {
         setMedicines(response.data);
         setMeta(response.meta);
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
      getMedicines(1);
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
   return (
      <div className="flex flex-wrap">
         <div className="w-full">
            <Card
               bordered={false}
               className="header-solid max-h-max rounded-md"
               title={'Medicine'}
               extra={
                  <>
                     <Button
                        className="btn-add"
                        onClick={() => {
                           setIsOpenMedicineModal(true);
                           setEditMode(false);
                           // medicineForm.resetFields();
                        }}
                     >
                        Нэмэх
                     </Button>
                  </>
               }
            >
               <div className="table-responsive p-4" id="style-8">
                  <Table className="ant-border-space" style={{ width: '100%' }}>
                     <thead className="ant-table-thead bg-slate-200">
                        <tr>
                           <th className="font-bold text-sm align-middle">№</th>
                           <th className="font-bold text-sm align-middle">
                              Эмийн код
                           </th>
                           <th className="font-bold text-sm align-middle">
                              Олон улсын нэршил
                           </th>
                           <th className="font-bold text-sm align-middle">
                              Эмийн нэр
                           </th>
                           <th className="font-bold text-sm align-middle">
                              Эмийн хэлбэр
                           </th>
                           <th className="font-bold text-sm align-middle">
                              Тун
                           </th>
                           <th className="font-bold text-sm align-middle">
                              ATC ангилал
                           </th>
                           <th className="font-bold text-sm align-middle">
                              Эмчилгээний төрөл
                           </th>
                           <th className="font-bold text-sm align-middle">
                              Үнэ
                           </th>
                           <th className="font-bold text-sm align-middle">
                              Идэвхтэй эсэх
                           </th>
                        </tr>
                     </thead>
                     <tbody className="ant-table-tbody p-0">
                        {spinner ? (
                           medicines?.map((medicine, index) => {
                              return (
                                 <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{medicine.code}</td>
                                    <td>{medicine.iName}</td>
                                    <td>{medicine.name}</td>
                                    <td>
                                       {getTreatment(medicine.medTreatmentId)}
                                    </td>
                                    <td>{}</td>
                                    <td>{getATC(medicine.atcCategoryId)}</td>
                                    <td>
                                       <Button
                                          type="link"
                                          onClick={() => editModal(medicine.id)}
                                          title="Засах"
                                          style={{
                                             paddingRight: 5,
                                             paddingLeft: 5
                                          }}
                                       >
                                          <EditOutlined />
                                       </Button>
                                       <Button
                                          type="link"
                                          onClick={() =>
                                             deleteModal(medicine.id)
                                          }
                                          title="Устгах"
                                          style={{ paddingLeft: 5 }}
                                       >
                                          <DeleteOutlined
                                             style={{ color: 'red' }}
                                          />
                                       </Button>
                                    </td>
                                 </tr>
                              );
                           })
                        ) : (
                           <tr>
                              <td
                                 colSpan={11}
                                 size="lg"
                                 style={{
                                    backgroundColor: 'white',
                                    textAlign: 'center'
                                 }}
                              >
                                 <Spinner
                                    animation="grow"
                                    style={{ color: '#1890ff' }}
                                 />
                              </td>
                           </tr>
                        )}
                     </tbody>
                  </Table>
               </div>
               <div>
                  <Pagination
                     className="pagination"
                     pageSize={10}
                     total={meta.itemCount}
                     onChange={getMedicines}
                  />
               </div>
            </Card>
         </div>
         <Modal
            title={editMode ? 'Эм засах' : 'Эм нэмэх'}
            open={isOpenMedicineModal}
            onOk={() =>
               medicineForm.validateFields().then((values) => {
                  onFinish(values);
               })
            }
            onCancel={() => {
               setIsOpenMedicineModal(false);
            }}
            width={'60%'}
            cancelText="Болих"
            okText="Хадгалах"
         >
            <Form
               form={medicineForm}
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
