import '../../../style/Hospital.css';
import React, { useEffect, useMemo, useState } from 'react';
import { Modal, Form, Input, message, Table, Card, Button, Tabs, InputNumber } from 'antd';

import UTable from '../../UTable';
import { Patch, openNofi } from '../../common';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';

import hospitalApi from '@ApiServices/organization/hospital.api';

import insuranceApi from '../../../services/healt-insurance/insurance';
import healtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
import zoneApi from '@ApiServices/reference/zone';
import provinceApi from '@ApiServices/reference/province';
import districtApi from '@ApiServices/reference/district';
import { CheckOutlined, CloseOutlined, EditOutlined, SwapOutlined } from '@ant-design/icons';

//

import General from './Hospital/General';
import Hics from './Hospital/Hics';
import Vatpos from './Hospital/Vatpos';

function Hospital() {
   const [hospitalForm] = Form.useForm();
   const hospitalHasInsurance = Form.useWatch('isInsurance', hospitalForm);
   const [editMode, setMode] = useState(false);
   const [isLoading, setLoading] = useState(false);
   const [hospitals, setHospitals] = useState([]);
   const [isOpenModal, setOpenModal] = useState(false);
   const [tabItems, setTabItems] = useState([
      {
         key: 1,
         label: 'Eрөнхий',
         children: <General form={hospitalForm} />
      },
      {
         key: 2,
         label: 'VAT',
         children: <Vatpos />
      }
   ]);

   const getHospitals = async () => {
      setLoading(true);
      await hospitalApi
         .get()
         .then(({ data: { response } }) => {
            setHospitals(response.data || []);
         })
         .finally(() => {
            setLoading(false);
         });
   };

   const columns = [
      {
         title: '№',
         width: 50,
         render: (_, _row, index) => index + 1
      },
      {
         title: 'Эмнэлэгийн нэр',
         width: 120,
         dataIndex: 'name'
      },
      {
         title: 'Дата басс нэр',
         width: 120,
         dataIndex: 'databaseName'
      },
      {
         title: 'Регистр дугаар',
         width: 120,
         dataIndex: 'registerNumber'
      },
      {
         title: 'Идэвхтэй эсэх',
         width: 50,
         dataIndex: 'isActive',
         render: (isActive) =>
            isActive ? <CheckOutlined className="text-green-600" /> : <CloseOutlined className="text-red-600" />
      },
      {
         title: 'Даатгалтай эсэх',
         width: 50,
         dataIndex: 'isInsurance',
         render: (isInsurance) =>
            isInsurance ? <CheckOutlined className="text-green-600" /> : <CloseOutlined className="text-red-600" />
      },
      {
         title: 'XYP-тай эсэх',
         width: 50,
         dataIndex: 'isXyp',
         render: (isXyp) =>
            isXyp ? <CheckOutlined className="text-green-600" /> : <CloseOutlined className="text-red-600" />
      },
      {
         title: 'Дараа төлбөрт эсэх',
         width: 50,
         dataIndex: 'isAfterPay',
         render: (isAfterPay) =>
            isAfterPay ? <CheckOutlined className="text-green-600" /> : <CloseOutlined className="text-red-600" />
      },
      {
         title: 'Салбартай эсэх',
         width: 50,
         dataIndex: 'hasBranch',
         render: (hasBranch) =>
            hasBranch ? <CheckOutlined className="text-green-600" /> : <CloseOutlined className="text-red-600" />
      },
      {
         title: 'Бүсчлэл',
         width: 50,
         dataIndex: 'districtId'
      },
      {
         title: 'Цагийн хуваарь',
         width: 100,
         dataIndex: 'hsTimetable'
      },
      {
         title: 'Засах',
         render: (_, row) => (
            <Button
               icon={<EditOutlined className="text-green-600" />}
               onClick={() => {
                  setMode(true);
                  hospitalForm.resetFields();
                  hospitalForm.setFieldsValue(row);
                  setOpenModal(true);
               }}
            />
         )
      },
      {
         title: 'ЭМД Sync 4.56',
         render: (_, row) => (
            <Button
               icon={<SwapOutlined />}
               onClick={() => {
                  syncHospital();
               }}
            />
         )
      }
   ];

   const syncHospital = async () => {
      await hospitalApi
         .syncHospital()
         .then(() => {
            openNofi('success', 'Амжилттай', 'Амжилттай');
         })
         .catch((error) => {
            console.log(error);
            openNofi('error', 'Амжилтгүй', 'Амжилтгүй');
         });
   };

   const onFinish = async (values) => {
      try {
         setLoading(true);
         if (editMode) {
            await hospitalApi.patch(values.id, {
               ...values,
               hasInsurance: values.isInsurance ? 1 : 0,
               hasBranch: values?.branch?.length > 0 ? 1 : 0
            });
         } else {
            await hospitalApi.post({
               ...values,
               hasInsurance: values.isInsurance ? 1 : 0,
               hasBranch: values?.branch?.length > 0 ? 1 : 0
            });
         }
         setLoading(false);
         setOpenModal(false);
         getHospitals();
      } catch (error) {
         console.log(error);
         message.error(error);
      }
   };

   useEffect(() => {
      if (hospitalHasInsurance) {
         setTabItems((prevValues) => [
            ...prevValues.filter((item) => item.key !== 3),
            {
               key: 3,
               label: 'Даатгал',
               children: <Hics />
            }
         ]);
      } else {
         setTabItems((prevValues) => prevValues.filter((item) => item.key !== 3));
      }
   }, [hospitalHasInsurance]);

   useEffect(() => {
      getHospitals();
   }, []);

   return (
      <div className="p-3 w-full h-full bg-[#f5f6f7]">
         <Card
            title="Байгууллага"
            extra={
               <Button
                  type="primary"
                  onClick={() => {
                     hospitalForm.resetFields();
                     setMode(false);
                     setOpenModal(true);
                  }}
               >
                  Нэмэх
               </Button>
            }
            bordered={false}
            className="header-solid rounded-md"
            bodyStyle={{
               padding: 8
            }}
         >
            <Table
               rowKey="id"
               bordered
               loading={isLoading}
               className="hospital-table"
               columns={columns}
               dataSource={hospitals}
            />
         </Card>
         <Modal
            title="Байгууллага"
            open={isOpenModal}
            confirmLoading={isLoading}
            onCancel={() => {
               setOpenModal(false);
            }}
            onOk={() => {
               hospitalForm.validateFields().then(onFinish);
            }}
            cancelText="Болих"
            okText="Хадгалах"
         >
            <Form form={hospitalForm} layout="vertical">
               <Tabs tabPosition="left" items={tabItems} />
            </Form>
         </Modal>
      </div>
   );
}

export default Hospital;
