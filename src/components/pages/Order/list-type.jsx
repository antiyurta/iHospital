import React, { useEffect, useState } from 'react';
import careTypeApi from '../../../services/reference/care-type.api';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

export const ListCareType = ({ type, getTypeById }) => {
   console.log(type);
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
