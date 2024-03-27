import React, { useEffect, useState, useMemo } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
//api
import careTypeApi from '@ApiServices/reference/care-type.api';

export const ListCareType = ({ type, getTypeById }) => {
   const [searchValue, setSearchValue] = useState('');
   const [activeKey, setActiveKey] = useState();
   const [types, setTypes] = useState([]);
   const getTypes = async () => {
      await careTypeApi.get({ type }).then(({ data }) => {
         setTypes(data.response.data);
      });
   };
   const filteredTypes = useMemo(() => {
      return types.filter((type) => type.name.toLowerCase().includes(searchValue.toLowerCase()));
   }, [types, searchValue]);
   useEffect(() => {
      getTypes();
   }, []);
   return (
      <div className="flex flex-col gap-2">
         <Input
            prefix={<SearchOutlined />}
            placeholder="Хайх ..."
            onChange={({ target: { value } }) => {
               setSearchValue(value);
            }}
         />
         {filteredTypes.map((type, index) => (
            <button
               key={index}
               onClick={() => {
                  setActiveKey(type.id);
                  getTypeById(type.id);
               }}
               className={`list-type ${activeKey === type.id ? 'active' : ''}`}
            >
               {type.name}
            </button>
         ))}
      </div>
   );
};
