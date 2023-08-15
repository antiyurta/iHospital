import { CloseCircleOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Empty, Input, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { localMn, numberToCurrency, openNofi } from '../../comman';
import jwtInterceopter from '../../jwtInterceopter';

const { Search } = Input;

function Treatment({ handleclick }) {
   const [isLoading, setIsLoading] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [selectedTreatmentId, setSelectedTreatmentId] = useState(null);
   const [treatments, setTreatments] = useState([]);
   const [treatment, setTreatment] = useState([]);
   const [metaTreatment, setMetaTreatment] = useState({});
   const [selectedTreatments, setSelectedTreatments] = useState([]);
   const [filterValue, setFilterValue] = useState('');
   const getTreatment = async () => {
      await jwtInterceopter
         .get('service/type', {
            params: {
               type: 2
            }
         })
         .then((response) => {
            setTreatments(response.data.response?.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const getTypeById = async (id, page, pageSize, filterValue) => {
      setIsLoading(true);
      setFilterValue(filterValue);
      await jwtInterceopter
         .get('service/treatment', {
            params: {
               treatmentTypeId: id,
               page: page,
               limit: pageSize,
               name: filterValue ? filterValue : null
            }
         })
         .then((response) => {
            setSelectedTreatmentId(id);
            setTreatment(response.data.response.data);
            setMetaTreatment(response.data.response.meta);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const add = (treatment) => {
      const state = selectedTreatments.includes(treatment);
      if (state) {
         openNofi('warning', 'Анхааруулга', 'Шинжилгээ сонгогдсон байна');
      } else {
         treatment.type = treatment.types.type;
         setSelectedTreatments([...selectedTreatments, treatment]);
      }
   };
   const remove = (index) => {
      var arr = [...selectedTreatments];
      arr.splice(index, 1);
      setSelectedTreatments(arr);
   };
   useEffect(() => {
      getTreatment();
   }, []);
   return (
      <>
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
               setSelectedTreatmentId(null);
               setSelectedTreatments([]);
            }}
         >
            Эмчилгээ
         </Button>
         <Modal
            title="Эмчилгээ сонгох"
            width={'80%'}
            open={isOpenModal}
            bodyStyle={{
               height: 600,
               maxHeight: 600,
               overflow: 'auto'
            }}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               handleclick(selectedTreatments);
               setIsOpenModal(false);
            }}
            okText={'Хадгалах'}
            cancelText={'Болих'}
         >
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-3">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div
                     className="p-3"
                     style={{
                        height: 552,
                        overflow: 'auto'
                     }}
                  >
                     <div className="flex flex-col gap-2">
                        {treatments.map((treatment, index) => {
                           return (
                              <button
                                 onClick={() => getTypeById(treatment.id, 1, 10)}
                                 className="w-full bg-[#3d9970] text-white rounded-lg"
                                 key={index}
                              >
                                 {treatment.name}
                              </button>
                           );
                        })}
                     </div>
                  </div>
               </div>
               <div className="grid sm:grid-cols-1 sm:col-span-2 xl:grid-cols-2 lg:col-span-3 gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <Search
                           className="mb-3"
                           placeholder="Хайх"
                           allowClear
                           enterButton={
                              <SearchOutlined
                                 style={{
                                    fontSize: 16,
                                    color: 'white'
                                 }}
                              />
                           }
                           onSearch={(e) => {
                              if (selectedTreatmentId === null) {
                                 openNofi('warning', 'Анхааруулга', 'Төрөл сонгоно уу');
                              } else {
                                 getTypeById(selectedTreatmentId, 1, 10, e);
                              }
                           }}
                        />
                        <ConfigProvider locale={localMn()}>
                           <Table
                              rowKey={'id'}
                              bordered
                              scroll={{
                                 y: 400
                              }}
                              loading={isLoading}
                              locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                              columns={[
                                 {
                                    title: 'Нэр',
                                    dataIndex: 'name',
                                    render: (text) => {
                                       return (
                                          <p
                                             style={{
                                                whiteSpace: 'normal',
                                                color: 'black'
                                             }}
                                          >
                                             {text}
                                          </p>
                                       );
                                    }
                                 },
                                 {
                                    title: 'Үнэ',
                                    dataIndex: 'price',
                                    width: 100,
                                    render: (text) => {
                                       return numberToCurrency(text);
                                    }
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
                              dataSource={treatment}
                              pagination={{
                                 position: ['bottomCenter'],
                                 size: 'small',
                                 current: metaTreatment.page,
                                 total: metaTreatment.itemCount,
                                 showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                                 pageSize: metaTreatment.limit,
                                 showSizeChanger: true,
                                 pageSizeOptions: ['5', '10', '20', '50'],
                                 showQuickJumper: true,
                                 onChange: (page, pageSize) =>
                                    getTypeById(selectedTreatmentId, page, pageSize, filterValue)
                              }}
                           />
                        </ConfigProvider>
                     </div>
                  </div>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <Table
                           rowKey={'id'}
                           bordered
                           scroll={{
                              y: 400
                           }}
                           locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                           columns={[
                              {
                                 title: 'Нэр',
                                 dataIndex: 'name',
                                 render: (text) => {
                                    return (
                                       <p
                                          style={{
                                             whiteSpace: 'normal',
                                             color: 'black'
                                          }}
                                       >
                                          {text}
                                       </p>
                                    );
                                 }
                              },
                              {
                                 title: 'Үнэ',
                                 dataIndex: 'price',
                                 width: 100,
                                 render: (text) => {
                                    return numberToCurrency(text);
                                 }
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
                           dataSource={selectedTreatments}
                           pagination={false}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </>
   );
}
export default Treatment;
