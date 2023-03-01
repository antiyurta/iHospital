import { CloseOutlined } from '@ant-design/icons';
import { Input, Modal, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { DefualtGet, Get, numberToCurrency, openNofi } from '../../comman';

function Medicine({ isOpen, isClose, handleclick }) {
   const token = useSelector(selectCurrentToken);
   const [loading, setLoading] = useState(false);
   const [medicines, setMedicines] = useState([]);
   const [medicineMeta, setMedicineMeta] = useState({});
   const [selectedMedicines, setSelectedMedicines] = useState([]);
   const [searchField, setSearchField] = useState('');
   //
   const [testField, setTestField] = useState('');
   const [testData, setTestData] = useState([]);
   //
   const config = {
      headers: {},
      params: {}
   };
   const getMedicine = async (page, pageSize) => {
      setLoading(true);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize
         }
      };
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
   const columns = [
      {
         title: 'Код',
         dataIndex: 'code'
      },
      {
         title: 'Худалдааны нэршил',
         dataIndex: 'name'
      },
      {
         title: 'Монгол нэршил',
         dataIndex: 'mnName',
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
   const dd = [
      {
         title: 'sad',
         dataIndex: 'tbltBarCode'
      },
      {
         title: 'sadsa',
         dataIndex: 'tbltNameMon'
      },
      {
         title: 'sada',
         dataIndex: 'tbltSizeMixture'
      }
   ];
   //
   // const filteredMedicine = medicines.filter((medicine) => {
   //    return medicine.m_name.toLowerCase().includes(searchField.toLowerCase());
   // });
   //
   const filteredMedicineTest = testData.filter((medicine) => {
      return medicine.tbltBarCode
         .toLowerCase()
         .includes(testField.toLowerCase());
   });
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
                  <Input
                     placeholder="Хайх"
                     allowClear
                     onChange={(e) => setSearchField(e.target.value)}
                  />
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
                              getMedicine(page, pageSize)
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
               <div className="w-full">
                  <Input
                     placeholder="Хайх"
                     allowClear
                     onChange={(e) => setTestField(e.target.value)}
                  />
                  <Table
                     rowKey={'id'}
                     columns={dd}
                     dataSource={filteredMedicineTest}
                  />
               </div>
            </div>
         </Modal>
      </div>
   );
}
export default Medicine;
