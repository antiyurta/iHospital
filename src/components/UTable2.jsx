import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Card, ConfigProvider, Empty, Form, Input, Space, Table } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../features/authReducer';
import mnMN from 'antd/es/locale/mn_MN';
import { Get, Post, Patch, Delete, ScrollRef } from './comman';
const { Search } = Input;
function UTable2({ title, url, column, action }) {
   const token = useSelector(selectCurrentToken);
   const [data, setData] = useState([]); // data
   const [dataColumn, setDataColumn] = useState([]);
   const [meta, setMeta] = useState({}); // meta
   const [loading, setLoading] = useState(false); // load
   const [isOpenAddModal, setIsOpenAddModal] = useState(false); // shineer nemeh modal
   const [addForm, setAddForm] = Form.useForm();
   const searchInput = useRef(null);
   const [searchText, setSearchText] = useState('');
   const [pIndex, setPindex] = useState('');
   const [pValue, setPvalue] = useState('');
   // data tatah
   const getData = async (page, pageSize, value, index) => {
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
      const response = await Get(url, token, conf);
      setData(response.data);
      setMeta(response.meta);
      setLoading(false);
   };
   // data tatah
   // hailt
   const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      getData(1, 20, selectedKeys[0], dataIndex);
   };
   const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
      getData(1, 20);
   };
   const ddprsad = (dataIndex) => {
      return <div>asdsad</div>;
   };
   const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
         <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
            <Input
               ref={searchInput}
               placeholder={`Хайх`}
               value={selectedKeys[0]}
               onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
               onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
               style={{
                  marginBottom: 8,
                  display: 'block'
               }}
            />
            <Space>
               <Button
                  type="primary"
                  onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                  icon={<SearchOutlined />}
                  size="small"
                  style={{
                     width: 90
                  }}
               >
                  Хайх
               </Button>
               <Button
                  icon={<DeleteOutlined />}
                  onClick={() => clearFilters && handleReset(clearFilters)}
                  size="small"
                  style={{
                     width: 90
                  }}
               >
                  Цэвэрлэх
               </Button>
            </Space>
         </div>
      ),
      filterIcon: () => <SearchOutlined style={{ color: '#4a7fc1' }} />
   });
   // haitl
   // mor ynzlah
   const configureColumn = () => {
      let test = [
         {
            title: '№',
            render: (_, record, index) => {
               return index + 1;
            }
         }
      ];
      const dd = [...test, ...column];
      dd.map((colum) => {
         if (colum.isSearch?.length > 0) {
            // column.push(...getColumnSearchProps);
            Object.assign(colum, {
               ...getColumnSearchProps(`${colum.dataIndex}`)
            });
            console.log(colum);
         }
      });
      console.log(dd);
      setDataColumn(dd);
   };
   // mor ynzlah
   useEffect(() => {
      getData(1, 20);
      configureColumn();
   }, []);
   return (
      <Card
         className="header-solid max-h-max rounded-md"
         title={title}
         bordered={false}
         extra={
            action?.isCreate && (
               <Button
                  onClick={() => {
                     setIsOpenAddModal(true);
                     addForm.resetFields();
                  }}
                  type="primary"
               >
                  Нэмэх
               </Button>
            )
         }
      >
         <ConfigProvider locale={mnMN}>
            <Table
               rowKey={'id'}
               bordered
               size="small"
               locale={{ emptyText: <Empty description={'Хоосон'} /> }}
               loading={{
                  spinning: loading,
                  tip: 'Уншиж байна....'
               }}
               columns={dataColumn}
               dataSource={data}
               pagination={{
                  position: ['topCenter', 'bottomCenter'],
                  size: 'small',
                  current: meta.page,
                  total: meta.itemCount,
                  showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                  pageSize: meta.limit,
                  total: meta.itemCount,
                  current: meta.page,
                  pageSizeOptions: ['5', '10', '20', '50'],
                  showQuickJumper: true,
                  onChange: (page, pageSize) => getData(page, pageSize, pValue, pIndex)
               }}
            />
         </ConfigProvider>
      </Card>
   );
}
export default UTable2;
