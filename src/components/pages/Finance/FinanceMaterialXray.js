import React, { useEffect, useState } from 'react';
import { Button, Card, Empty, Modal, Select, Row, Col } from 'antd';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, Patch, Post, Delete } from '../../comman';
import { DeleteOutlined } from '@ant-design/icons';

function FinanceMaterialXray() {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [xrayList, setXrayList] = useState([]);
   const [xrays, setXrays] = useState([]);
   const [materials, setMaterials] = useState([]);
   const [selectedXrayMaterial, setSelectedXrayMaterial] = useState('');
   const [selectedXray, setSelectedXray] = useState('');
   const [selectedMaterial, setSelectedMaterial] = useState('');
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalType, setModalType] = useState('');
   const [data, setData] = useState({});

   const { Option } = Select;
   useEffect(() => {
      getXrayMaterial();
      getXrays();
      getMaterials();
   }, []);

   const showModal = (data, type) => {
      setIsModalOpen(true);
      setSelectedXrayMaterial(data);
      setModalType(type);
      if (type === 'edit') {
         setSelectedXray(data.serviceId);
         setSelectedMaterial(data.materialId);
      }
   };
   const handleCancel = () => {
      setIsModalOpen(false);
      setModalType('');
      setSelectedXray('');
      setSelectedMaterial('');
   };

   const getXrayMaterial = async () => {
      config.params.serviceType = 1;
      const response = await Get('service/service-material', token, config);
      console.log('Res', response);
      if (response.data.length > 0) {
         setXrayList(response.data);
      }
   };
   const getXrays = async () => {
      const response = await Get('service/xray', token, config);
      if (response.data.length > 0) {
         setXrays(response.data);
      }
   };
   const getMaterials = async () => {
      const response = await Get('finance/material', token, config);
      if (response.data.length > 0) {
         setMaterials(response.data);
      }
   };
   const save = async () => {
      data.serviceType = 1;
      data.serviceId = selectedXray;
      data.materialId = parseInt(selectedMaterial);
      const response = await Post(`service/service-material`, token, config, data);
      if (response === 201) {
         getXrayMaterial();
         handleCancel();
      }
   };
   const edit = async () => {
      data.serviceType = 1;
      data.serviceId = selectedXray;
      data.materialId = parseInt(selectedMaterial);
      const response = await Patch(`service/service-material/${selectedXrayMaterial.id}`, token, config, data);
      if (response === 200) {
         getXrayMaterial();
         handleCancel();
      }
   };
   const deleteItem = async (id) => {
      const response = await Delete(`service/service-material/${parseInt(id)}`, token, config);
      console.log('RES', response);
      if (response === 200) {
         getXrayMaterial();
      }
   };
   return (
      <Card
         title="Оношилгооны материалын жагсаалт"
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
                        <th>Оношилгоо</th>
                        <th>Материал</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody className="ant-table-tbody p-0">
                     {xrayList.length > 0 ? (
                        xrayList.map((ex, index) => {
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
               <Col span={4}>Оношилгоо</Col>
               <Col span={12}>
                  <Select
                     allowClear
                     value={selectedXray || undefined}
                     onChange={(e) => {
                        setSelectedXray(e);
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
                     {xrays?.map((el, index) => {
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
export default FinanceMaterialXray;
