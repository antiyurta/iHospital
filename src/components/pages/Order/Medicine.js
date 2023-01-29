import { CloseOutlined } from '@ant-design/icons';
import { Modal, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { DefualtGet, openNofi } from '../../comman';

function Medicine({ isOpen, isClose, handleclick }) {
   const token = useSelector(selectCurrentToken);
   const [loading, setLoading] = useState(false);
   const [medicines, setMedicines] = useState([]);
   const [selectedMedicines, setSelectedMedicines] = useState([]);
   const [searchField, setSearchField] = useState('');
   const config = {
      headers: {},
      params: {}
   };
   const getMedicine = async () => {
      setLoading(true);
      config.params.depId = 4079;
      config.params.typeId = 13;
      const response = await DefualtGet(
         'finance/type-materials',
         token,
         config
      );
      if (response) {
         setMedicines(response);
      }
      setLoading(false);
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
         dataIndex: 'barcode'
      },
      {
         title: 'Нэр',
         dataIndex: 'm_name'
      },
      {
         title: 'Тоо ширхэг',
         dataIndex: 'countC2'
      }
   ];
   const selectedColumns = [
      {
         title: 'Код',
         dataIndex: 'barcode'
      },
      {
         title: 'Нэр',
         dataIndex: 'm_name'
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
   const filteredMedicine = medicines.filter((medicine) => {
      return medicine.name.toLowerCase().includes(searchField.toLowerCase());
   });
   useEffect(() => {
      getMedicine();
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
                        className="whitespace-pre-wrap"
                        scroll={{
                           y: 200
                        }}
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
                        pagination={false}
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
