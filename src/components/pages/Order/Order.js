import { Button, Form } from 'antd';
import RecentRecipe from './RecentRecipe';
import SetOrder from './SetOrder';
import Medicine from './Medicine';
import Examination from './Examination';
import Xray from './Xray';
import Treatment from './Treatment';
import Surgery from './Surgery';
import Endo from './Endo';
import Package from './Package';
import InpatientRequest from './InpatientRequest';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { DefaultPost, numberToCurrency } from '../../comman';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import DoctorInspection from './DoctorInspection';
import Reinspection from './Reinspection';
import OrderTable from './OrderTable/OrderTable';
import PackageTable from './PackageTable/PackageTable';
///
import ExaminationService from '../../../services/service/examination';
import TreatmentService from '../../../services/service/treatment';
import XrayService from '../../../services/service/xray';
//
function Order({ isPackage, selectedPatient, isDoctor, usageType, categories, appointmentHasInsurance, save }) {
   const token = useSelector(selectCurrentToken);
   const IncomePatientId = useLocation()?.state?.patientId;
   const IncomeCabinetId = useLocation()?.state?.cabinetId;
   const IncomeAppointmentId = useLocation()?.state?.appointmentId;
   const [isLoadingOrderTable, setIsLoadingOrderTable] = useState(false);
   const config = {
      headers: {},
      params: {}
   };
   const [total, setTotal] = useState(Number);

   const handleclick = async (value) => {
      setIsLoadingOrderTable(true);
      if (isPackage) {
         var services = [];
         value.map((item, index) => {
            const service = {};
            service.unikey = index;
            service.serviceId = item.id;
            service.serviceName = item.name;
            service.serviceType = item.type;
            services.push(service);
         });
         var datas = await orderForm.getFieldsValue();
         var data = [];
         if (datas.services === undefined) {
            data = services;
         } else {
            data = datas.services.concat(services);
         }
         orderForm.setFieldsValue({ services: data });
      } else {
         var services = [];
         var subTotal = 0;
         value.map((item, index) => {
            var service = {};
            service.unikey = index;
            service.id = item.id;
            service.name = item.name;
            service.type = item.types?.type;
            if (usageType === 'IN') {
               service.price = item.inpatientPrice;
               service.oPrice = item.inpatientPrice;
            } else {
               service.price = item.price;
               service.oPrice = item.price;
            }
            if (item.type === 3) {
               service.diagnose = item.diagnose;
               service.surgeryType = item.surgeryType;
            }
            if (item.type === 8) {
               service.id = item.id;
               service.name = item.iName;
               service.dose = item.dose;
               service.price = 0;
               service.oPrice = item.price;
               service.type = item.type;
               service.medicineType = null;
               service.description = '';
               service.repeatTime = 1;
               service.dayCount = 1;
               service.total = 0;
            } else if (service.type === 2 || item.type === 2) {
               service.name = item.name;
               service.qty = item.qty ? item.qty : 1;
               service.repeatTime = 1;
               service.dayCount = 1;
               if (service.qty != 1) {
                  service.price = item.calCprice;
                  service.oPrice = item.price;
               }
            } else if (item.type === 7) {
               service.type = item.type;
               service.services = item.services;
               service.price = item.price;
            }
            service.isCito = false;
            if (item.type === 1) {
               service.deviceType = item.device?.deviceType;
               service.deviceId = item.deviceId;
               service.typeId = item.xrayTypeId;
            } else if (item.type === 0) {
               service.typeId = item.examinationTypeId;
               service.requestDate = new Date();
            } else {
               service.requestDate = new Date();
            }
            service.requestDate = moment(new Date()).format('YYYY-MM-DD');
            subTotal += service.price;
            services.push(service);
         });
         var datas = await orderForm.getFieldsValue();
         var data = [];
         if (datas.services === undefined) {
            data = services;
         } else {
            data = datas.services.concat(services);
         }
         orderForm.setFieldsValue({ services: data });
         setTotal(total + subTotal);
      }
      setIsLoadingOrderTable(false);
   };
   const handleClickSetOrder = async (services) => {
      setIsLoadingOrderTable(true);
      var newServices = [];
      await Promise.all(
         services?.map(async (service) => {
            if (service.serviceType === 0) {
               await ExaminationService.getById(service.serviceId).then((response) => {
                  newServices.push(response.data.response);
               });
            } else if (service.serviceType === 1) {
               await XrayService.getById(service.serviceId).then((response) => {
                  console.log(response);
                  newServices.push(response.data.response);
               });
            } else if (service.serviceType === 2) {
               await TreatmentService.getById(service.serviceId).then((response) => {
                  console.log(response);
                  newServices.push(response.data.response);
               });
            }
         })
      );
      handleclick(newServices);
   };

   const [showMedicine, setShowMedicine] = useState(false);
   const [showExamination, setShowExamination] = useState(false);
   const [showTreatment, setShowTreatment] = useState(false);
   const [showXray, setShowXray] = useState(false);
   const [showSurgery, setShowSurgery] = useState(false);
   const [showInpatient, setShowInpatient] = useState(false);
   const [showPackage, setShowPackage] = useState(false);
   const [showSetOrder, setShowSetOrder] = useState(false);
   const [showRecentRepice, setShowRecentRepice] = useState(false);
   //
   const [showDoctorInspection, setShowDoctorInspection] = useState(false);
   const [showReinspection, setShowReinspection] = useState(false);
   const [inPatientId, setInPatientId] = useState(Number);
   //
   const [orderForm] = Form.useForm();
   const inpatientRequestClick = async (values) => {
      values.patientId = IncomePatientId;
      values.cabinetId = IncomeCabinetId;
      values.appointmentId = IncomeAppointmentId;
      values.isInsurance = appointmentHasInsurance;
      const response = await DefaultPost('service/inpatient-request', token, config, values);
      if (response) {
         setInPatientId(response.id);
      }
   };
   const RenderCategories = () => {
      categories?.map((category) => {
         if (category.name === 'Examination') {
            setShowExamination(true);
         } else if (category.name === 'Xray') {
            setShowXray(true);
         } else if (category.name === 'Medicine') {
            setShowMedicine(true);
         } else if (category.name === 'SetOrder') {
            setShowSetOrder(true);
         } else if (category.name === 'RecentRecipe') {
            setShowRecentRepice(true);
            // setModalBody(<RecentRecipe handleclick={handleclick} />);
            // setModalTitle('Өмнөх жор сонгох');
         } else if (category.name === 'Treatment') {
            setShowTreatment(true);
         } else if (category.name === 'Surgery') {
            setShowSurgery(true);
         } else if (category.name === 'Endo') {
            // setModalBody(<Endo handleclick={handleclick} />);
            // setModalTitle('Дуран сонгох');
         } else if (category.name === 'Package') {
            setShowPackage(true);
         } else if (category.name === 'Inpatient') {
            setShowInpatient(true);
         } else if (category.name === 'doctorInspection') {
            setShowDoctorInspection(true);
         } else if (category.name === 'Reinspection') {
            setShowReinspection(true);
         }
      });
   };
   useEffect(() => {
      orderForm.resetFields();
      setTotal(0);
   }, [selectedPatient]);
   useEffect(() => {
      RenderCategories();
   }, []);

   return (
      <div className="flex flex-col gap-3">
         <div
            className={
               isPackage
                  ? 'grid grid-cols-3 gap-3'
                  : 'grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3'
            }
         >
            {showExamination && <Examination handleclick={handleclick} />}
            {showXray && <Xray handleclick={handleclick} />}
            {showTreatment && <Treatment handleclick={handleclick} />}
            {showMedicine && <Medicine usageType={usageType} handleclick={handleclick} />}
            {showSetOrder && <SetOrder handleclick={handleClickSetOrder} />}
            {showRecentRepice && <RecentRecipe />}
            {showSurgery && (
               <Surgery
                  usageType={usageType}
                  selectedPatient={selectedPatient}
                  appointmentId={IncomeAppointmentId}
                  handleclick={handleclick}
               />
            )}
            {showPackage && <Package registerNumber={selectedPatient.registerNumber} handleclick={handleclick} />}
            {showInpatient && <InpatientRequest handleClick={inpatientRequestClick} />}
            {showDoctorInspection && <DoctorInspection handleclick={handleclick} />}
            {showReinspection && <Reinspection selectedPatient={selectedPatient} appointmentId={IncomeAppointmentId} />}
         </div>
         <div className="flex flex-wrap">
            <div className="w-full">
               <Form form={orderForm}>
                  <Form.List name="services">
                     {(services, { add, remove }) => {
                        if (isPackage) {
                           return <PackageTable form={orderForm} services={services} remove={remove} />;
                        } else {
                           return (
                              <OrderTable
                                 isLoading={isLoadingOrderTable}
                                 usageType={usageType}
                                 form={orderForm}
                                 services={services}
                                 remove={remove}
                                 setTotal={setTotal}
                              />
                           );
                        }
                     }}
                  </Form.List>
               </Form>
               <div className="flow-root py-3">
                  <p className="float-left font-extrabold">Нийт Үнэ</p>
                  <p className="float-right font-extrabold">{numberToCurrency(total)}</p>
               </div>
            </div>
            <div className="w-full pb-4">
               <Button
                  className="float-right"
                  type="primary"
                  onClick={() =>
                     orderForm.validateFields().then((values) => {
                        save(values.services);
                        orderForm.resetFields();
                     })
                  }
               >
                  {isPackage ? 'Хадгалах' : 'OTS Хадгалах'}
               </Button>
            </div>
         </div>
      </div>
   );
}
export default Order;
