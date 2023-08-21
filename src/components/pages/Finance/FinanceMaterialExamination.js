import React, { useEffect, useState } from 'react';
import { Button, Card, Empty, Modal, Select, Row, Col } from 'antd';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, Patch, Post, Delete } from '../../comman';
import { DeleteOutlined } from '@ant-design/icons';

function FinanceMaterialExamination() {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [examinationList, setExaminationList] = useState([]);
   const [examinations, setExaminations] = useState([]);
   const [materials, setMaterials] = useState([]);
   const [selectedExMaterial, setSelectedExMaterial] = useState('');
   const [selectedEx, setSelectedEx] = useState('');
   const [selectedMaterial, setSelectedMaterial] = useState('');
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalType, setModalType] = useState('');
   const [data, setData] = useState({});

   const { Option } = Select;
   useEffect(() => {
      getExamniationMaterial();
      getExamniations();
      getMaterials();
   }, []);

   const showModal = (data, type) => {
      setIsModalOpen(true);
      setSelectedExMaterial(data);
      setModalType(type);
      if (type === 'edit') {
         setSelectedEx(data.serviceId);
         setSelectedMaterial(data.materialId);
      }
   };
   const handleCancel = () => {
      setIsModalOpen(false);
      setModalType('');
      setSelectedEx('');
      setSelectedMaterial('');
   };

   const getExamniationMaterial = async () => {
      config.params.serviceType = 0;
      const response = await Get('service/service-material', token, config);
      if (response.data.length > 0) {
         setExaminationList(response.data);
      }
   };
   const getExamniations = async () => {
      const response = await Get('service/examination', token, config);
      if (response.data.length > 0) {
         setExaminations(response.data);
      }
   };
   const getMaterials = async () => {
      const response = await Get('finance/material', token, config);
      if (response.data.length > 0) {
         setMaterials(response.data);
      }
   };
   const save = async () => {
      data.serviceType = 0;
      data.serviceId = selectedEx;
      data.materialId = parseInt(selectedMaterial);
      const response = await Post(`service/service-material`, token, config, data);
      if (response === 201) {
         getExamniationMaterial();
         handleCancel();
      }
   };
   const edit = async () => {
      data.serviceType = 0;
      data.serviceId = selectedEx;
      data.materialId = parseInt(selectedMaterial);
      const response = await Patch(`service/service-material/${selectedExMaterial.id}`, token, config, data);
      if (response === 200) {
         getExamniationMaterial();
         handleCancel();
      }
   };
   const deleteItem = async (id) => {
      const response = await Delete(`service/service-material/${parseInt(id)}`, token, config);
      if (response === 200) {
         getExamniationMaterial();
      }
   };
   return (
      <Card
         title="Шинжилгээний материалын жагсаалт"
         bordered={false}
         className="header-solid max-h-max rounded-md"
         extra={
            <>
               <Button className="mx-1" type="primary" onClick={() => showModal('', 'add')}>
                  Нэмэх
               </Button>
            </>
         }
      >
         <div>
            <div className="table-responsive" id="style-8">
               <Table bordered className="ant-border-space" style={{ width: '100%' }}>
                  <thead className="ant-table-thead bg-slate-200">
                     <tr>
                        <th>Шинжилгээ</th>
                        <th>Материал</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody className="ant-table-tbody p-0">
                     {examinationList.length > 0 ? (
                        examinationList.map((ex, index) => {
                           return (
                              <tr
                                 className="ant-table-row ant-table-row-level-0 hover: cursor-pointer"
                                 key={index}
                                 onDoubleClick={() => showModal(ex, 'edit')}
                              >
                                 <td>{ex.serviceName}</td>
                                 <td>{ex.materialName}</td>
                                 <td>
                                    <Button
                                       type="primary"
                                       shape="circle"
                                       icon={<DeleteOutlined />}
                                       onClick={() => deleteItem(ex.id)}
                                    />
                                 </td>
                              </tr>
                           );
                        })
                     ) : (
                        <tr>
                           <td colSpan={13}>
                              <Empty />
                           </td>
                        </tr>
                     )}
                  </tbody>
               </Table>
            </div>
         </div>

         <Modal
            title={
               <div className="grid">
                  <span>Материал бүртгэх</span>
               </div>
            }
            open={isModalOpen}
            onCancel={handleCancel}
            onOk={() => (modalType === 'add' ? save() : edit())}
            width={500}
            okText="Бүртгэх"
            cancelText="Хаах"
         >
            <Row className="items-center justify-evenly">
               <Col span={4}>Шинжилгээ</Col>
               <Col span={12}>
                  <Select
                     allowClear
                     value={selectedEx || undefined}
                     onChange={(e) => {
                        setSelectedEx(e);
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
                     {examinations?.map((el, index) => {
                        return (
                           <Option value={el.id} key={index}>
                              {el.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Col>
            </Row>
            <Row className="items-center justify-evenly mt-4">
               <Col span={4}>Материал</Col>
               <Col span={12}>
                  <Select
                     allowClear
                     value={selectedMaterial || undefined}
                     onChange={(e) => {
                        setSelectedMaterial(e);
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
                     {materials?.map((el, index) => {
                        return (
                           <Option value={parseInt(el.m_id)} key={index}>
                              {el.m_name}
                           </Option>
                        );
                     })}
                  </Select>
               </Col>
            </Row>
         </Modal>
      </Card>
   );
}
export default FinanceMaterialExamination;
