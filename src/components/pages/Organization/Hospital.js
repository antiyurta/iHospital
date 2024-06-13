import '../../../style/Hospital.css';
import React, { useEffect, useMemo, useState } from 'react';
import { Modal, Form, Input, message } from 'antd';

import UTable from '../../UTable';
import { Patch } from '../../common';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import insuranceApi from '../../../services/healt-insurance/insurance';
import healtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
import zoneApi from '@ApiServices/reference/zone';
import provinceApi from '@ApiServices/reference/province';
import districtApi from '@ApiServices/reference/district';

function Hospital() {
   const token = useSelector(selectCurrentToken);
   const [insuranceForm] = Form.useForm();
   const [isOpenInsurance, setIsOpenInsurance] = useState(false);
   const [selectedRow, setSelectedRow] = useState({});
   const [isRefresh, setIsRefresh] = useState(true);
   const [operationList, setOperationList] = useState([]);
   const [zoneList, setZoneList] = useState([]);
   const [provinceList, setProvinceList] = useState([]);
   const [districtList, setDistrictList] = useState([]);
   //
   const [changedValues, setChangedValues] = useState({});

   const filteredProvinceList = useMemo(() => {
      if (changedValues.zoneId) {
         return provinceList.filter((pro) => pro.zoneId === changedValues.zoneId);
      }
      return provinceList;
   }, [changedValues]);
   const filteredDistrictList = useMemo(() => {
      if (changedValues.provinceId) {
         return districtList.filter((dist) => dist.provinceId === changedValues.provinceId);
      }
      return districtList;
   }, [changedValues]);

   const fetchOperationList = async () => {
      try {
         const res = await healtInsuranceApi.getHospitalOperation();
         const operations = res.data.result || [];
         setOperationList(
            operations.map((op) => ({
               id: op.id,
               label: op.name,
               value: op.id
            }))
         );
      } catch (error) {
         console.error('Error fetching operation list:', error);
      }
   };
   const fetchZoneList = async () => {
      try {
         const res = await zoneApi.get();
         const zone = res.data.response || [];
         setZoneList(zone);
      } catch (error) {
         console.error('Error fetching zone list:', error);
      }
   };
   const fetchProvinceList = async () => {
      try {
         const res = await provinceApi.get();
         const province = res.data.response || [];
         setProvinceList(province);
      } catch (error) {
         console.error('Error fetching province list:', error);
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
      fetchOperationList();
      fetchZoneList();
      fetchProvinceList();
      fetchDistrictList();
   }, []);

   const column = [
      {
         index: 'name',
         label: 'Нэр',
         isView: true,
         input: 'input',
         col: 12
      },
      {
         index: 'zoneId',
         label: 'Бүсчлэл',
         isView: true,
         input: 'select',
         inputData: zoneList,
         relValueIndex: 'id',
         relIndex: 'name',
         col: 12
      },
      {
         index: 'provinceId',
         label: 'Аймаг/Хот',
         isView: true,
         input: 'select',
         inputData: filteredProvinceList,
         relValueIndex: 'id',
         relIndex: 'name',
         col: 12
      },
      {
         index: 'districtCode',
         label: 'Сум/Дүүрэг',
         isView: true,
         input: 'select',
         inputData: filteredDistrictList,
         relValueIndex: 'code',
         relIndex: 'name',
         col: 12
      },
      {
         index: 'databaseName',
         label: 'Дата басс нэр',
         isView: true,
         input: 'input',
         col: 12
      },
      {
         index: 'hospitalType',
         label: 'Лавлагаа ЭМБ гм',
         isView: true,
         input: 'input',
         col: 12
      },

      {
         index: 'registerNumber',
         label: 'Регистр дугаар',
         isView: true,
         input: 'input',
         col: 12
      },
      {
         index: 'email',
         label: 'И-мэйл',
         rules: [
            {
               required: true,
               message: 'Хоосон байж болохгүй'
            },
            {
               type: 'email',
               message: 'Хэлбэрийн алдаа'
            },
            {
               validator: async (_, email) => {
                  if (email?.length < 10) {
                     return Promise.reject(new Error(''));
                  }
               }
            }
         ],
         isView: true,
         input: 'input',
         col: 12
      },
      {
         index: 'phone',
         label: 'Утас(1)',
         isView: true,
         input: 'input',
         col: 12
      },
      {
         index: 'hsPersonPhone',
         label: 'Утас(2)',
         isView: false,
         input: 'input',
         col: 12
      },
      {
         index: 'hsLng',
         label: 'Уртраг',
         isView: false,
         input: 'numberInput',
         col: 12
      },
      {
         index: 'hsLat',
         label: 'Өргөрөг',
         isView: false,
         input: 'numberInput',
         col: 12
      },
      {
         index: 'hsCapacity',
         label: 'Нийт орны тоо',
         isView: true,
         input: 'numberInput',
         col: 12
      },
      {
         index: 'hsSocial',
         label: 'Сошиал хаяг',
         isView: false,
         input: 'input',
         col: 12
      },
      {
         index: 'hsIntroduction',
         label: 'Танилцуулга',
         isView: false,
         input: 'textarea',
         col: 12
      },
      {
         index: 'hsTimetable',
         label: 'Цагийн хуваарь',
         isView: false,
         input: 'input',
         col: 12
      },
      {
         index: 'address',
         label: 'Хаяг байршил',
         isView: false,
         input: 'textarea',
         col: 12
      },
      {
         index: 'hasInsurance',
         label: 'ЭМД гэрээтэй эсэх',
         isView: false,
         input: 'switch',
         col: 8
      },
      {
         index: 'isActive',
         label: 'Идэвхтэй эсэх',
         isView: true,
         input: 'switch',
         col: 8
      },
      {
         index: 'isXyp',
         label: 'Xyp-тай эсэх',
         isView: true,
         input: 'switch',
         col: 8
      },
      {
         index: 'isInsurance',
         label: 'Даатгалтай эсэх',
         isView: false,
         input: 'switch',
         col: 8
      },
      {
         index: 'isAfterPay',
         label: 'Дараа төлбөрт эсэх',
         isView: true,
         input: 'switch',
         col: 8
      },
      {
         index: 'hasBranch',
         label: 'Салбартай эсэх',
         isView: true,
         input: 'switch',
         col: 8,
         child: true
      },
      {
         index: 'branchList',
         label: 'Салбар нэмэх',
         isView: false,
         input: 'formList',
         childrenColumns: [
            {
               index: 'branchId',
               label: 'Салбарын дугаар',
               input: 'input',
               isView: false,
               col: 12
            },
            {
               index: 'hospitalName',
               label: 'Салбарын нэр',
               input: 'input',
               isView: false,
               col: 12
            },
            {
               index: 'hsPhone',
               label: 'Холбогдох утасны дугаар',
               input: 'input',
               isView: false,
               col: 12
            },
            {
               index: 'hsPersonPhone',
               label: 'Холбоо барих хүний дугаар',
               input: 'input',
               isView: false,
               col: 12
            },
            {
               index: 'hsEmail',
               label: 'Салбарын имэйл хаяг',
               input: 'input',
               isView: false,
               col: 12
            },
            {
               index: 'hsSocial',
               label: 'Салбарын сошиал хаяг',
               input: 'input',
               isView: false,
               col: 12
            },
            {
               index: 'address',
               label: 'Салбарын хаяг, байршил',
               input: 'input',
               isView: false,
               col: 24
            },
            {
               index: 'hsLat',
               label: 'Салбарын өргөрөг',
               input: 'input',
               isView: false,
               col: 12
            },
            {
               index: 'hsLng',
               label: 'Салбарын уртраг',
               input: 'input',
               isView: false,
               col: 12
            },
            {
               index: 'hsTimetable',
               label: 'Салбарын цагийн хуваарь',
               input: 'input',
               isView: false,
               col: 12
            },
            {
               index: 'hsCapacity',
               label: 'Салбарын нийт орны тоо',
               input: 'numberInput',
               isView: false,
               col: 12
            },
            {
               index: 'status',
               label: 'Төлөв /0-идэвхгүй, 1-идэвхтэй/',
               input: 'select',
               inputData: [
                  {
                     label: 'идэвхгүй',
                     value: 0
                  },
                  {
                     label: 'идэвхтэй',
                     value: 1
                  }
               ],
               relValueIndex: 'value',
               relIndex: 'label',
               isView: false,
               col: 12
            },
            {
               index: 'numberOfBeds',
               label: 'Салбарын сул орны тоо',
               input: 'numberInput',
               isView: false,
               col: 12
            },
            {
               index: 'hsIntroduction',
               label: 'Салбарын товч танилцуулга',
               input: 'textarea',
               isView: false,
               col: 24
            }
         ],
         col: 24
      },
      {
         index: 'operationList',
         label: 'Үйл ажиллагааны чиглэлийн мэдээлэл',
         isView: false,
         input: 'formList',
         childrenColumns: [
            {
               index: 'id',
               label: 'Үйл ажиллагааны чиглэлийн дугаар',
               input: 'select',
               inputData: operationList,
               isView: false,
               relValueIndex: 'id',
               relIndex: 'label',
               col: 24
            },
            {
               index: 'status',
               label: 'Төлөв /0-идэвхгүй, 1-идэвхтэй/',
               input: 'select',
               inputData: [
                  {
                     label: 'идэвхгүй',
                     value: 0
                  },
                  {
                     label: 'идэвхтэй',
                     value: 1
                  }
               ],
               relValueIndex: 'value',
               relIndex: 'label',
               isView: false,
               col: 12
            }
         ],
         col: 24
      }
   ];

   const updateHospital = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Patch('organization/hospital/' + selectedRow.id, token, conf, values);
      if (response === 200) {
         setIsOpenInsurance(false);
      }
      setIsRefresh(!isRefresh);
   };
   const insuranceFunction = async (row) => {
      if (row) {
         setIsOpenInsurance(true);
         insuranceForm.setFieldValue('insuranceUsername', row.insuranceUsername);
         insuranceForm.setFieldValue('insurancePassword', row.insurancePassword);
         setSelectedRow(row);
      }
   };
   const insuranceSyncFunction = async () => {
      await insuranceApi.createHicsExams().then(({ data }) => {
         if (data.code == 200) {
            message.success(data.description);
         } else {
            message.warn(data.description);
         }
      });
   };

   return (
      <div className="w-full bg-[#f5f6f7] p-3">
         <UTable
            title={'Байгууллага'}
            url={'organization/hospital'}
            onValuesChange={setChangedValues}
            column={column}
            isCreate={true}
            isRead={true}
            isUpdate={true}
            isDelete={true}
            width="30%"
            isInsurance={true}
            insuranceSync={true}
            insuranceFunction={insuranceFunction}
            insuranceSyncFunction={insuranceSyncFunction}
            isRefresh={isRefresh}
            // initialValues={{
            //    hospitalType: 'test',
            //    address: 'dasd',
            //    branchList_address: 'asd',
            //    branchList_branchId: 123,
            //    branchList_hospitalName: 'asd',
            //    branchList_hsCapacity: 123,
            //    branchList_hsEmail: 'asd12@gmail.com',
            //    branchList_hsLat: 1223,
            //    branchList_hsLng: 213,
            //    branchList_hsPersonPhone: 'asd',
            //    branchList_hsPhone: 'asd',
            //    branchList_hsSocial: 'as',
            //    branchList_hsTimetable: 'asdsa',
            //    branchList_numberOfBeds: 100,
            //    branchList_status: undefined,
            //    databaseName: 'as',
            //    email: 'dasd@gmail.com',
            //    hasBranch: undefined,
            //    hasInsurance: 1,
            //    hsCapacity: 123,
            //    hsIntroduction: 'asdas',
            //    hsLat: 123,
            //    hsLng: 123,
            //    hsPersonPhone: 'das',
            //    hsSocial: 'as',
            //    isActive: undefined,
            //    isAfterPay: undefined,
            //    isInsurance: undefined,
            //    isXyp: undefined,
            //    name: 'asdas',
            //    phone: 'asdasd',
            //    registerNumber: 'asasd'
            // }}
         />
         <Modal
            open={isOpenInsurance}
            onCancel={() => {
               setIsOpenInsurance(false);
               insuranceForm.resetFields();
            }}
            onOk={() => insuranceForm.validateFields().then((values) => updateHospital(values))}
            okText="Хадагалах"
            cancelText="Болих"
         >
            <Form form={insuranceForm} layout="vertical">
               <Form.Item
                  label="Даатгалын нэвтрэх нэр"
                  name="insuranceUsername"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  label="Даатгалын нууц үг"
                  name="insurancePassword"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Form>
         </Modal>
      </div>
   );
}

export default Hospital;
