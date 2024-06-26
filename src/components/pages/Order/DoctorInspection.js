import React, { useEffect, useState } from 'react';
import { Button, ConfigProvider, Modal, Table } from 'antd';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { localMn, openNofi } from '../../common';
import jwtInterceopter from '../../jwtInterceopter';
import { CloseCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

function DoctorInspection({ handleclick }) {
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [inspections, setInspections] = useState([]);
   const [metaInspections, setMetaInspections] = useState({});
   const [selectedInspections, setSelectedInspections] = useState([]);
   const getInspections = async (page, pageSize) => {
      config.params.type = 3;
      setIsLoading(true);
      await jwtInterceopter
         .get('organization/structure', {
            params: {
               page: page,
               limit: pageSize,
               type: 3
            }
         })
         .then((response) => {
            setInspections(response.data.response.data);
            setMetaInspections(response.data.response.meta);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const add = (inspection) => {
      const state = selectedInspections.includes(inspection);
      if (state) {
         openNofi('warning', 'Анхааруулга', 'Эмчийн үзлэг сонгогдсон байна');
      } else {
         inspection.type = 5;
         setSelectedInspections([...selectedInspections, inspection]);
      }
   };
   const remove = (index) => {
      var arr = [...selectedInspections];
      arr.splice(index, 1);
      setSelectedInspections(arr);
   };
   useEffect(() => {
      getInspections(1, 10);
   }, []);
   return (
      <>
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
               setSelectedInspections([]);
            }}
         >
            Эмчийн үзлэг
         </Button>
         <Modal
            title="Үзлэг сонгох"
            width={'80%'}
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               handleclick(selectedInspections);
               setIsOpenModal(false);
            }}
         >
            <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-3">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3">
                     <p className="font-bold mb-3">Жагсаалт</p>
                     <ConfigProvider locale={localMn()}>
                        <Table
                           rowKey={'id'}
                           bordered
                           loading={isLoading}
                           scroll={{
                              x: 500
                           }}
                           locale={{ emptyText: 'Мэдээлэл байхгүй' }}
                           columns={[
                              {
                                 title: 'Нэр',
                                 dataIndex: 'name'
                              },
                              {
                                 title: '',
                                 width: 40,
                                 render: (_text, row) => {
                                    return (
                                       <Button
                                          onClick={() => add(row)}
                                          icon={
                                             <PlusCircleOutlined
                                                style={{
                                                   color: 'green'
                                                }}
                                             />
                                          }
                                       />
                                    );
                                 }
                              }
                           ]}
                           dataSource={inspections}
                           pagination={{
                              position: ['bottomCenter'],
                              size: 'small',
                              current: metaInspections.page,
                              total: metaInspections.itemCount,
                              showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                              pageSize: metaInspections.limit,
                              showSizeChanger: true,
                              pageSizeOptions: ['5', '10', '20', '50'],
                              showQuickJumper: true,
                              onChange: (page, pageSize) => getInspections(page, pageSize)
                           }}
                        />
                     </ConfigProvider>
                  </div>
               </div>
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3">
                     <p className="font-bold mb-3">Сонгогдсон</p>
                     <ConfigProvider locale={localMn()}>
                        <Table
                           rowKey={'id'}
                           bordered
                           locale={{ emptyText: 'Мэдээлэл байхгүй' }}
                           columns={[
                              {
                                 title: 'Нэр',
                                 dataIndex: 'name'
                              },
                              {
                                 title: '',
                                 width: 40,
                                 render: (_text, _row, index) => {
                                    return (
                                       <Button
                                          onClick={() => remove(index)}
                                          icon={
                                             <CloseCircleOutlined
                                                style={{
                                                   color: 'red'
                                                }}
                                             />
                                          }
                                       />
                                    );
                                 }
                              }
                           ]}
                           dataSource={selectedInspections}
                           pagination={false}
                        />
                     </ConfigProvider>
                  </div>
               </div>
            </div>
         </Modal>
      </>
   );
}
export default DoctorInspection;
