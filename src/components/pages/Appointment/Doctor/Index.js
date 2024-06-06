import React, { useEffect } from 'react';
import { Button, Card, Modal, Segmented, Tabs } from 'antd';
import { useState } from 'react';
import { FullscreenExitOutlined, FullscreenOutlined, OrderedListOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import HealthInsuranceApi from '../../../../services/healt-insurance/healtInsurance';
import { openNofi } from '../../../common';
import { selectCurrentInsurance } from '../../../../features/authReducer';
import apiAppointmentService from '../../../../services/appointment/api-appointment-service';
import paymentApi from '@ApiServices/payment/payment';
import { inspectionColumns, insuranceColumns, paymentColumns } from './util';
import RendererComponent from './Renderer';

function Index({ PatientId, RegisterNumber }) {
   const [filter, setFilter] = useState(0);
   const [isFull, setIsFull] = useState(false);

   const isInsurance = useSelector(selectCurrentInsurance);

   // --- DATAS ---
   const [insuranceData, setInsuranceData] = useState(null);
   const [inspectionData, setInspectionData] = useState(null);
   const [paymentData, setPaymentData] = useState(null);

   // --- LOADING ---
   const [loading, setLoading] = useState({
      insurance: false,
      inspection: false,
      payment: false
   });

   useEffect(() => {
      if (RegisterNumber && isInsurance) {
         fetchData('insurance');
      }
      if (PatientId) {
         fetchData('inspection');
         fetchData('payment');
      }
   }, [RegisterNumber, PatientId]);

   const fetchData = async (type) => {
      try {
         setLoading((prev) => ({ ...prev, [type]: true }));
         let data;
         switch (type) {
            case 'insurance':
               ({ data } = await HealthInsuranceApi.getPatientData(RegisterNumber));
               if (data.code === 200 && data.result != null) {
                  setInsuranceData(
                     data.result.details?.sort((a, b) => new Date(b.outDateStr) - new Date(a.outDateStr))
                  );
               } else {
                  openNofi('info', 'Мэдээлэл', data.description);
               }
               break;
            case 'inspection':
               ({ data } = await apiAppointmentService.getAllStatusHistories({ patientId: PatientId }));
               if (data.success) {
                  setInspectionData(
                     (data.response || []).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
                  );
               }
               break;
            case 'payment':
               ({ data } = await paymentApi.get({ params: { patientId: PatientId, isPay: true } }));
               setPaymentData((data.response.data || []).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)));
               break;
            default:
               break;
         }
      } catch (error) {
         console.error(error);
      } finally {
         setLoading((prev) => ({ ...prev, [type]: false }));
      }
   };

   const items = [
      {
         key: 0,
         label: 'Даатгал',
         children: (
            <RendererComponent
               loading={loading.insurance}
               data={insuranceData}
               columns={insuranceColumns}
               rowKey={'serviceNumber'}
               emptyText="Иргэнд даатгалын түүх байхгүй"
            />
         )
      },
      {
         key: 1,
         label: 'Үзлэгийн түүх',
         children: (
            <RendererComponent
               rowKey={'id'}
               loading={loading.inspection}
               data={inspectionData}
               columns={inspectionColumns}
               emptyText="Үзлэгийн түүх хоосон байна."
            />
         )
      },
      {
         key: 2,
         label: 'Төлбөрийн мэдээлэл',
         children: (
            <RendererComponent
               rowKey={'id'}
               loading={loading.payment}
               data={paymentData}
               columns={paymentColumns}
               emptyText="Хоосон"
            />
         )
      }
   ];

   const Render = () => (
      <Card
         bordered={false}
         bodyStyle={{
            padding: 10,
            overflow: 'auto'
         }}
      >
         <Tabs type="card" items={items} tabBarExtraContent={!isFull && <FullScreen />} />
      </Card>
   );

   const FullScreen = () => (
      <Button
         title={isFull ? 'Жижигрүүлэх' : 'Томруулах'}
         onClick={() => setIsFull(!isFull)}
         icon={isFull ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
         className="absolute right-2 top-1 bg-white"
      />
   );

   return (
      <>
         {isFull && (
            <Modal title={'Мэдээлэл'} open={isFull} onCancel={() => setIsFull(false)} width={'60%'} footer={null}>
               <Render />
            </Modal>
         )}
         <Card
            className="h-full"
            bordered={false}
            bodyStyle={{
               padding: '10px'
            }}
         >
            <div className="flex flex-col gap-2">
               <Segmented
                  className="department-bed-segment"
                  size="small"
                  options={[
                     {
                        label: 'Даатгал',
                        value: 0,
                        icon: <OrderedListOutlined />
                     },
                     {
                        label: 'Үзлэгийн түүх',
                        value: 1,
                        icon: <OrderedListOutlined />
                     },
                     {
                        label: 'Төлбөрийн түүх',
                        value: 2,
                        icon: <OrderedListOutlined />
                     }
                  ]}
                  value={filter}
                  onChange={setFilter}
               />
               {items[filter]?.children}
               <FullScreen />
            </div>
         </Card>
      </>
   );
}
export default Index;
