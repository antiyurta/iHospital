// Ene code baij baig daraani saijruulj awnaa

// import React, { Fragment, useEffect, useState } from 'react';
// import { DynamicComp } from '../../utils';
// import healtInsurance from '../../../../../../services/healt-insurance/healtInsurance';

// const statusOptions = [
//    { value: 0, label: 'Идэвхгүй' },
//    { value: 1, label: 'Идэвхтэй' }
// ];

// const formItems = [
//    { name: 'regNum', label: 'Регистрийн дугаар' },
//    { name: 'hospitalName', label: 'Нэр' },
//    { name: 'hospitalType', label: 'Төрөл' },
//    { name: 'hsPhone', label: 'Утасны дугаар' },
//    { name: 'hsPersonPhone', label: 'Холбоо барих хүний дугаар' },
//    { name: 'hsEmail', label: 'Имэйл хаяг' },
//    { name: 'hsSocial', label: 'Сошиал хаяг' },
//    { name: 'hsAddress', label: 'Хаяг' },
//    { name: 'hsLat', label: 'Өргөрөг', number: true },
//    { name: 'hsLng', label: 'Уртраг', number: true },
//    { name: 'hsTimetable', label: 'Цагийн хуваарь' },
//    { name: 'hsCapacity', label: 'Багтаамж /нийт орны тоо/', number: true },
//    { name: 'hsIntroduction', label: 'Танилцуулга' },
//    { name: 'numberOfBeds', label: 'Сул орны тоо', number: true },
//    { name: 'hasInsurance', label: 'ЭМД гэрээтэй эсэх', checkbox: true, number: true },
//    { name: 'hasBranch', label: 'Салбартай эсэх', checkbox: true, number: true }
// ];

// const extraFormItems = [
//    { name: 'branchId', label: 'Салбарын дугаар', number: true },
//    { name: 'hospitalName', label: 'Салбарын нэр' },
//    { name: 'hsPhone', label: 'Салбарын холбогдох утас' },
//    { name: 'hsPersonPhone', label: 'Холбоо барих хүний дугаар' },
//    { name: 'hshsEmailSocial', label: 'Салбарын имэйл хаяг' },
//    { name: 'hsSocial', label: 'Салбарын сошиал хаяг' },
//    { name: 'address', label: 'Салбарын хаяг, байршил' },
//    { name: 'hsLat', label: 'Салбарын өргөрөг', number: true },
//    { name: 'hsLng', label: 'Салбарын уртраг', number: true },
//    { name: 'hsTimetable', label: 'Салбарын цагийн хуваарь' },
//    { name: 'hsCapacity', label: 'Салбарын нийт орны тоо', number: true },
//    {
//       name: 'status',
//       label: 'Төлөв/',
//       number: true,
//       select: true,
//       selectOptions: statusOptions
//    },
//    { name: 'numberOfBeds', label: 'Салбарын сул орны тоо', number: true },
//    { name: 'hsIntroduction', label: 'Салбарын товч танилцуулга' },

//    { name: 'id', label: 'ID', key: 'operationList' },
//    {
//       name: 'status',
//       label: 'Төлөв',
//       number: true,
//       select: true,
//       selectOptions: statusOptions,
//       key: 'operationList'
//    }
// ];

// const extraFormItems2 = [];

// export const SendHostpitalInfo = ({ form, lists, setLists }) => {
//    const [industry, setIndustry] = useState(0);
//    const [hospitals, setHospitals] = useState([]);

//    useEffect(() => {
//       form.setFieldsValue({
//          operationList: {
//             id: 1,
//             status: 1
//          }
//       });
//    }, []);

//    const handleChange = (val, name) => {
//       if (name === 'hasBranch') {
//          setIndustry(val);
//       }
//    };

//    const handleSetList = (value, name, key) => {
//       if (key === 'operationList') {
//          form.setFieldsValue({
//             operationList: {
//                [name]: value
//             }
//          });
//       } else {
//          setLists((prev) => {
//             return { ...prev, [name]: value };
//          });
//       }
//    };

//    const getHospitalList = async () => {
//       await healtInsurance.getHostpitalOperation().then((response) => {
//          if (response.status == 200) {
//             setHospitals(response.data.result);
//          }
//       });
//    };

//    useEffect(() => {
//       getHospitalList();
//    }, []);

//    return (
//       <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//          <DynamicComp items={formItems} onChange={handleChange} />

//          {industry === 1 && (
//             <>
//                <h1 style={{ fontWeight: 'bold', fontSize: '20px', margin: '2rem 0' }}>Салбарын мэдээлэл</h1>
//                <DynamicComp items={extraFormItems} noForm onChange={handleSetList} isList />
//             </>
//          )}
//       </div>
//    );
// };

