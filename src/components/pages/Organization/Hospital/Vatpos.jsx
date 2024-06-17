import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
//common
import { openNofi } from '@Comman/common';
//api
import ebarimtApi from '@ApiServices/ebarimt/ebarimt';
import districtApi from '@ApiServices/reference/district';
const Vatpos = ({ form }) => {
   const merchantTin = Form.useWatch('merchantTin', form);
   const [accounts, setAccounts] = useState([]);
   const [districtList, setDistrictList] = useState([]);
   const getAccountsTin = async () => {
      try {
         const res = await ebarimtApi.getAccountsByTin(merchantTin);
         if (res.data.response) {
            setAccounts(res.data.response);
            openNofi('success', 'Амжилттай', 'Амжилттай.');
         } else {
            openNofi('error', 'Алдаа', 'Утгаар мэдээлэл олдохгүй байна.');
         }
      } catch (error) {
         console.error('Error fetching district list:', error);
      }
   };
   const fetchDistrictList = async () => {
      try {
         const res = await districtApi.get();
         const district = res.data.response || [];
         setDistrictList(district);
      } catch (error) {
         console.error('Error fetching district list:', error);
      }
   };

   useEffect(() => {
      fetchDistrictList();
   }, []);
   return (
      <div>
         <Form.Item label="Сум/Дүүрэг" name="districtId">
            <Select
               allowClear
               showSearch
               filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
               options={districtList?.map((district) => ({
                  label: `${district.province?.zone?.name} -> ${district.province?.name} -> ${district.name}`,
                  value: district.id
               }))}
            />
         </Form.Item>
         <div className="flex flex-row gap-2 items-center">
            <Form.Item label="Баримт олгогчийн татвар төлөгчийн дугаар" name="merchantTin">
               <Input />
            </Form.Item>
            <Button
               onClick={() => {
                  getAccountsTin();
               }}
            >
               DO
            </Button>
         </div>
         <Form.Item label="Банк сонгох" name="bankId">
            <Select
               onSelect={(value) => {
                  const current = accounts.find((account) => account.id === value);
                  console.log(current);
                  form.setFieldsValue({
                     bankName: current.bankName,
                     bankAccountNo: current.bankAccountNo
                  });
               }}
               options={accounts?.map((account) => ({
                  label: `${account.bankName} - ${account.bankAccountNo}`,
                  value: account.id
               }))}
            />
         </Form.Item>
         <Form.Item label="Банк нэр" name="bankName">
            <Input disabled />
         </Form.Item>
         <Form.Item label="Банк данс" name="bankAccountNo">
            <Input disabled />
         </Form.Item>
      </div>
   );
};
export default Vatpos;
