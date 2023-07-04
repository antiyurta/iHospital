import { CloseCircleOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Input, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, localMn, openNofi } from '../../comman';
const { Search } = Input;
function Medicine({ usageType, handleclick }) {
   const token = useSelector(selectCurrentToken);
   const [loading, setLoading] = useState(false);
   const [medicines, setMedicines] = useState([]);
   const [medicineMeta, setMedicineMeta] = useState({});
   const [selectedMedicines, setSelectedMedicines] = useState([]);
   const [pIndex, setPindex] = useState('');
   const [pValue, setPvalue] = useState('');
   const [isOpenModal, setIsOpenModal] = useState(false);
   //
   const getMedicine = async (page, pageSize, value, index) => {
      setLoading(true);
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
      let url = '';
      if (usageType === 'OUT') {
         url = 'service/global-medicine';
      } else {
         url = 'medicine';
      }
      const response = await Get(url, token, conf);
      if (response) {
         setMedicines(response.data);
         setMedicineMeta(response.meta);
      }
      setLoading(false);
   };
   const add = (medicine) => {
      const state = selectedMedicines.includes(medicine);
      if (state) {
         openNofi('warning', 'Эм', 'эм сонгогдсон байна');
      } else if (medicine.price === 0) {
         openNofi('warning', 'Эм', 'Энэ эм эмийн санд байхгүй тул сонгох боломжгүй');
      } else {
         medicine.type = 8;
         setSelectedMedicines([...selectedMedicines, medicine]);
      }
   };
   const remove = (index) => {
      var arr = [...selectedMedicines];
      arr.splice(index, 1);
      setSelectedMedicines(arr);
   };
   const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({}) => (
         <div style={{ padding: 8 }}>
            <Search
               placeholder={`хайх`}
               allowClear
               onSearch={(e) => getMedicine(1, 20, e, dataIndex)}
               enterButton={'Хайх'}
            />
         </div>
      ),
      filterIcon: () => <SearchOutlined style={{ color: '#4a7fc1' }} />
   });
   const columns = [
      {
         title: 'Олон улсын нэршил',
         dataIndex: 'iName',
         ...getColumnSearchProps('iName')
      },
      {
         title: 'Монгол нэршил',
         dataIndex: 'mnName',
         ...getColumnSearchProps('mnName'),
         render: (text) => {
            return <p className="whitespace-pre-wrap text-black">{text}</p>;
         }
      },
      {
         title: 'Худалдааны нэршил',
         dataIndex: 'name',
         ...getColumnSearchProps('name')
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
         title: 'Олон улсын нэршил',
         dataIndex: 'iName'
      },
      {
         title: 'Монгол нэршил',
         dataIndex: 'mnName',
         render: (text) => {
            return <p className="whitespace-pre-wrap text-black">{text}</p>;
         }
      },
      {
         title: 'Худалдааны нэршил',
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
   ];
   //
   useEffect(() => {
      getMedicine(1, 10);
   }, []);

   return (
      <>
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
               setSelectedMedicines([]);
            }}
         >
            Эм
         </Button>
         <Modal
            title="Эм сонгох"
            width={'70%'}
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               handleclick(selectedMedicines);
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
                           loading={loading}
                           scroll={{
                              x: 500
                           }}
                           locale={{ emptyText: 'Мэдээлэл байхгүй' }}
                           columns={columns}
                           dataSource={medicines}
                           pagination={{
                              position: ['bottomCenter'],
                              size: 'small',
                              current: medicineMeta.page,
                              total: medicineMeta.itemCount,
                              showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                              pageSize: medicineMeta.limit,
                              showSizeChanger: true,
                              pageSizeOptions: ['5', '10', '20', '50'],
                              showQuickJumper: true,
                              onChange: (page, pageSize) => getMedicine(page, pageSize, pValue, pIndex)
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
                           dataSource={selectedMedicines}
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
export default Medicine;
