import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { DefualtGet, Get, numberToCurrency, openNofi } from '../../comman';
const { Search } = Input;
function Medicine({ isOpen, isClose, handleclick }) {
   const token = useSelector(selectCurrentToken);
   const [loading, setLoading] = useState(false);
   const [medicines, setMedicines] = useState([]);
   const [medicineMeta, setMedicineMeta] = useState({});
   const [selectedMedicines, setSelectedMedicines] = useState([]);
   const [pIndex, setPindex] = useState('');
   const [pValue, setPvalue] = useState('');
   //
   const [testField, setTestField] = useState('');
   const [testData, setTestData] = useState([]);
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
      const response = await Get('service/medicine', token, conf);
      if (response) {
         setMedicines(response.data);
         setMedicineMeta(response.meta);
      }
      setLoading(false);
   };
   const getHealtInsurance = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await DefualtGet(
         'health-insurance/tablets',
         token,
         conf
      );
      setTestData(response);
   };
   const add = (medicine) => {
      const state = selectedMedicines.includes(medicine);
      if (state) {
         openNofi('warning', 'Эм', 'эм сонгогдсон байна');
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
      filterIcon: () => <SearchOutlined style={{ color: '#2d8cff' }} />
   });
   const columns = [
      {
         title: 'Код',
         dataIndex: 'code',
         ...getColumnSearchProps('code')
      },
      {
         title: 'Худалдааны нэршил',
         dataIndex: 'name',
         ...getColumnSearchProps('name')
      },
      {
         title: 'Монгол нэршил',
         dataIndex: 'mnName',
         ...getColumnSearchProps('mnName'),
         render: (text) => {
            return <p className="whitespace-pre-wrap text-black">{text}</p>;
         }
      },
      // {
      //    title: 'Үлдэгдэл',
      //    dataIndex: 'countC2'
      // },
      // {
      //    title: 'Хэмжих нэгж',
      //    dataIndex: 'ratecode',
      //    width: 90
      // },
      {
         title: 'Үнэ',
         dataIndex: 'price',
         render: (text) => {
            return numberToCurrency(text);
         }
      }
   ];
   const selectedColumns = [
      {
         title: 'Код',
         dataIndex: 'code'
      },
      {
         title: 'Нэр',
         dataIndex: 'name'
      },
      {
         title: 'Үйлдэл',
         render: (_, row, rowIndex) => {
            return (
               <p
                  onClick={() => remove(rowIndex)}
                  className="hover:cursor-pointer"
               >
                  <CloseOutlined
                     style={{
                        color: 'red',
                        verticalAlign: 'middle'
                     }}
                  />
               </p>
            );
         }
      }
   ];
   //
   useEffect(() => {
      getMedicine(1, 10);
      // getHealtInsurance();
   }, [isOpen]);

   return (
      <div>
         <Modal
            title="Эм сонгох"
            width={'70%'}
            open={isOpen}
            onCancel={() => isClose('medicine', false)}
            onOk={() => {
               handleclick(selectedMedicines);
               isClose('medicine', false);
            }}
            okText={'Хадгалах'}
            cancelText={'Болих'}
         >
            <div className="flex flex-wrap">
               <div className="w-2/3">
                  <div className="p-2">
                     <Table
                        rowKey={'id'}
                        bordered
                        loading={loading}
                        rowClassName="hover: cursor-pointer"
                        // scroll={{
                        //    y: 400
                        // }}
                        onRow={(row, rowIndex) => {
                           return {
                              onDoubleClick: () => {
                                 add(row);
                              }
                           };
                        }}
                        locale={{ emptyText: 'Мэдээлэл байхгүй' }}
                        columns={columns}
                        dataSource={medicines}
                        // dataSource={filteredMedicine}
                        pagination={{
                           simple: true,
                           pageSize: 10,
                           total: medicineMeta.itemCount,
                           current: medicineMeta.page,
                           onChange: (page, pageSize) =>
                              getMedicine(page, pageSize, pValue, pIndex)
                        }}
                     />
                  </div>
               </div>
               <div className="w-1/3">
                  <div className="p-2">
                     <Table
                        rowKey={'id'}
                        bordered
                        locale={{ emptyText: 'Мэдээлэл байхгүй' }}
                        columns={selectedColumns}
                        dataSource={selectedMedicines}
                        pagination={false}
                     />
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
}
export default Medicine;
