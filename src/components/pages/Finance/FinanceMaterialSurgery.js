import React, { useEffect, useState } from 'react';
import { Button, Card, Empty, Modal, Select, Row, Col } from 'antd';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, Patch, Post, Delete } from '../../comman';
import { DeleteOutlined } from '@ant-design/icons';

function FinanceMaterialSurgery() {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [surgeryList, setSurgeryList] = useState([]);
   const [surgerys, setSurgerys] = useState([]);
   const [materials, setMaterials] = useState([]);
   const [selectedSurgeryMaterial, setSelectedSurgeryMaterial] = useState('');
   const [selectedSurgery, setSelectedSurgery] = useState('');
   const [selectedMaterial, setSelectedMaterial] = useState('');
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalType, setModalType] = useState('');
   const [data, setData] = useState({});

   const { Option } = Select;
   useEffect(() => {
      getSurgeryMaterial();
      getSurgeries();
      getMaterials();
   }, []);

   const showModal = (data, type) => {
      setIsModalOpen(true);
      setSelectedSurgeryMaterial(data);
      setModalType(type);
      if (type === 'edit') {
         setSelectedSurgery(data.serviceId);
         setSelectedMaterial(data.materialId);
      }
   };
   const handleCancel = () => {
      setIsModalOpen(false);
      setModalType('');
      setSelectedSurgery('');
      setSelectedMaterial('');
   };

   const getSurgeryMaterial = async () => {
      config.params.serviceType = 3;
      const response = await Get('service/service-material', token, config);
      if (response.data.length > 0) {
         setSurgeryList(response.data);
      }
   };
   const getSurgeries = async () => {
      const response = await Get('service/surgery', token, config);
      if (response.data.length > 0) {
         setSurgerys(response.data);
      }
   };
   const getMaterials = async () => {
      const response = await Get('finance/material', token, config);
      if (response.data.length > 0) {
         setMaterials(response.data);
      }
   };
   const save = async () => {
      data.serviceType = 3;
      data.serviceId = selectedSurgery;
      data.materialId = parseInt(selectedMaterial);
      const response = await Post(`service/service-material`, token, config, data);
      if (response === 201) {
         getSurgeryMaterial();
         handleCancel();
      }
   };
   const edit = async () => {
      data.serviceType = 3;
      data.serviceId = selectedSurgery;
      data.materialId = parseInt(selectedMaterial);
      const response = await Patch(`service/service-material/${selectedSurgeryMaterial.id}`, token, config, data);
      if (response === 200) {
         getSurgeryMaterial();
         handleCancel();
      }
   };
   const deleteItem = async (id) => {
      const response = await Delete(`service/service-material/${parseInt(id)}`, token, config);
      if (response === 200) {
         getSurgeryMaterial();
      }
   };
   return (
      <Card
         title="Мэс заслын материалын жагсаалт"
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
                        <th>Мэс засал</th>
                        <th>Материал</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody className="ant-table-tbody p-0">
                     {surgeryList.length > 0 ? (
                        surgeryList.map((ex, index) => {
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
               <Col span={4}>Мэс засал</Col>
               <Col span={12}>
                  <Select
                     allowClear
                     value={selectedSurgery || undefined}
                     onChange={(e) => {
                        setSelectedSurgery(e);
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
                     {surgerys?.map((el, index) => {
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
export default FinanceMaterialSurgery;
