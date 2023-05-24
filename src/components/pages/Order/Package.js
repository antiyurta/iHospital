import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, getAge, localMn, openNofi } from '../../comman';
import { CloseCircleOutlined, CloseOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Modal, Table } from 'antd';
import jwtInterceopter from '../../jwtInterceopter';

function Package({ registerNumber, handleclick }) {
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [packages, setPackages] = useState([]);
   const [metaPackages, setMetaPackages] = useState([]);
   const [selectedPackages, setSelectedPackages] = useState([]);

   const getPackages = async (page, pageSize) => {
      setIsLoading(true);
      await jwtInterceopter
         .get('service/package', {
            params: {
               page: page,
               limit: pageSize
            }
         })
         .then((response) => {
            setPackages(response.data.response.data);
            setMetaPackages(response.data.response.meta);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const add = (packge) => {
      if (packge && registerNumber) {
         const age = getAge(registerNumber);
         console.log(age);
         if (packge.minAge <= age && packge.maxAge >= age) {
            const state = selectedPackages.includes(packge);
            if (state) {
               openNofi('warning', 'Анхааруулга', 'Багц сонгогдсон байна');
            } else {
               packge.type = 7;
               setSelectedPackages([...selectedPackages, packge]);
            }
         } else {
            openNofi('warning', 'Анхааруулга', 'Багцын насны ангилалд багтахгүй');
         }
      }
   };
   const remove = (index) => {
      var arr = [...selectedPackages];
      arr.splice(index, 1);
      setSelectedPackages(arr);
   };
   const columns = [
      {
         title: 'Нэр',
         dataIndex: 'name'
      },
      {
         title: 'Үнэ',
         dataIndex: 'price'
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
   ];
   const selectedColumns = [
      {
         title: 'Нэр',
         dataIndex: 'name'
      },
      {
         title: 'Үнэ',
         dataIndex: 'price'
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
   ];
   useEffect(() => {
      getPackages(1, 10);
   }, []);

   return (
      <>
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
            }}
         >
            Багц
         </Button>
         <Modal
            title="Багц сонгох"
            width={'80%'}
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               handleclick(selectedPackages);
               setIsOpenModal(false);
            }}
            okText={'Хадгалах'}
            cancelText={'Болих'}
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
                           locale={{ emptyText: 'Мэдээлэл байхгүй' }}
                           columns={columns}
                           dataSource={packages}
                           pagination={{
                              position: ['bottomCenter'],
                              size: 'small',
                              current: metaPackages.page,
                              total: metaPackages.itemCount,
                              showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                              pageSize: metaPackages.limit,
                              showSizeChanger: true,
                              pageSizeOptions: ['5', '10', '20', '50'],
                              showQuickJumper: true,
                              onChange: (page, pageSize) => getPackages(page, pageSize)
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
                           columns={selectedColumns}
                           dataSource={selectedPackages}
                           pagination={false}
                        />
                     </ConfigProvider>
                  </div>
               </div>
            </div>
            {/* <div className="flex flex-row">
               <div className="basis-1/2">
                  <div className="table-responsive px-4 pb-4" id="style-8" style={{ maxHeight: '500px' }}>
                     <Table className="ant-border-space" style={{ width: '100%' }}>
                        <thead className="ant-table-thead bg-slate-200">
                           <tr>
                              <th className="font-bold text-sm align-middle">Нэр</th>
                              <th className="font-bold text-sm align-middle">Үнэ</th>
                           </tr>
                        </thead>
                        <tbody className="ant-table-tbody p-0">
                           {packages.map((item, index) => {
                              return (
                                 <tr
                                    onDoubleClick={() => add(item)}
                                    key={index}
                                    className="ant-table-row ant-table-row-level-0 hover:cursor-pointer"
                                 >
                                    <td className="whitespace-pre-line">{item.name}</td>
                                    <td className="whitespace-pre-line">{item.price}</td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </Table>
                  </div>
               </div>
               <div className="basis-1/2">
                  <div className="table-responsive px-4 pb-4" id="style-8" style={{ maxHeight: '500px' }}>
                     <Table className="ant-border-space" style={{ width: '100%' }}>
                        <thead className="ant-table-thead bg-slate-200">
                           <tr>
                              <th className="font-bold text-sm align-middle">Нэр</th>
                              <th className="font-bold text-sm align-middle">Үнэ</th>
                           </tr>
                        </thead>
                        <tbody className="ant-table-tbody p-0">
                           {selectedPackages.map((item, index) => {
                              return (
                                 <tr key={index} className="ant-table-row ant-table-row-level-0">
                                    <td className="whitespace-pre-line">{item.name}</td>
                                    <td className="whitespace-pre-line">{item.price}</td>
                                    <td onDoubleClick={() => remove(index)} className="hover:cursor-pointer">
                                       <CloseOutlined
                                          style={{
                                             color: 'red',
                                             verticalAlign: 'middle'
                                          }}
                                       />
                                    </td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </Table>
                  </div>
               </div>
            </div> */}
         </Modal>
      </>
   );
}
export default Package;
