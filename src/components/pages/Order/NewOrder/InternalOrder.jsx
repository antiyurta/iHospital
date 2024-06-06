import React, { useState, useEffect, useContext } from 'react';
import { Button, Form } from 'antd';
import SetOrder from '../SetOrder';
import { Examination } from '../Examination';
import Xray from '../Xray';
import Treatment from '../Treatment';
import Medicine from '../Medicine';
import Surgery from '../Surgery';
import Operation from '../Operation';
import Package from '../Package';
import InpatientRequest from '../InpatientRequest';
import DoctorInspection from '../DoctorInspection';
import Reinspection from '../Reinspection';
import RecentRecipe from '../RecentRecipe';
import PackageTable from '../PackageTable/PackageTable';
import OrderTable from '../OrderTable/OrderTable';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
//common
import { numberToCurrency, openNofi } from '@Comman/common';
//redux
import {
   delOtsData,
   selectCurrentAddHics,
   selectCurrentEmrData,
   selectCurrentHicsSeal,
   selectCurrentOtsData,
   setAddHics,
   setOtsData
} from '@Features/emrReducer';
//api
import ServiceApi from '@ApiServices/service/service';
import SurgeryApi from '@ApiServices/service/surgery.api';
import InsuranceApi from '@ApiServices/healt-insurance/insurance';
import HealtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';

const InternalOrder = (props) => {
   const { isPackage, usageType, selectedPatient, categories, save } = props;
   const dispatch = useDispatch();
   const hicsSeal = useSelector(selectCurrentHicsSeal);
   const addHics = useSelector(selectCurrentAddHics);
   const IncomeOTSData = useSelector(selectCurrentOtsData);
   const IncomeEMRData = useSelector(selectCurrentEmrData);
   const [hicsExams, setHicsExams] = useState([]);
   const [isLoadingOrderTable, setIsLoadingOrderTable] = useState(false);
   const [orderForm] = Form.useForm();
   const [showMedicine, setShowMedicine] = useState(false);
   const [showExamination, setShowExamination] = useState(false);
   const [showTreatment, setShowTreatment] = useState(false);
   const [showXray, setShowXray] = useState(false);
   const [showSurgery, setShowSurgery] = useState(false);
   const [showOperation, setShowOperation] = useState(false);
   const [showInpatient, setShowInpatient] = useState(false);
   const [showPackage, setShowPackage] = useState(false);
   const [showSetOrder, setShowSetOrder] = useState(false);
   const [showDoctorInspection, setShowDoctorInspection] = useState(false);
   const [showReinspection, setShowReinspection] = useState(false);
   const [showRecentRepice, setShowRecentRepice] = useState(false);
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
         } else if (category.name === 'Treatment') {
            setShowTreatment(true);
         } else if (category.name === 'Surgery') {
            setShowSurgery(true);
         } else if (category.name === 'Operation') {
            setShowOperation(true);
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
   const handleclick = async (value) => {
      try {
         setIsLoadingOrderTable(true);
         var services = [];
         if (isPackage) {
            value.map((item, index) => {
               services.push({
                  unikey: index,
                  serviceId: item.id,
                  serviceName: item.name,
                  serviceType: item.type
               });
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
            await Promise.all(
               value.map(async (item) => {
                  let service = {
                     isCito: false,
                     id: item.id,
                     name: item.name,
                     type: item.type,
                     typeId: null,
                     specimen: item.specimen,
                     description: item.description,
                     examCode: item.examCode,
                     amountCit: null,
                     amountHi: null,
                     price: usageType === 'IN' ? item.inpatientPrice : item.price,
                     oPrice: usageType === 'IN' ? item.inpatientPrice : item.price,
                     requestDate: dayjs(new Date()).format('YYYY-MM-DD'),
                     sealData: null
                  };
                  if (item.examCode) {
                     const currentSeal = addHics || hicsSeal;
                     const currentExam = hicsExams.find((exam) => exam.examCode === item.examCode);
                     let newExam = currentExam;
                     const freeTypeId = 0;
                     const selectedIcdCode = currentSeal?.diagnosis?.icdCode || undefined;
                     if (currentExam.drgCode && currentExam.serviceId === 20200) {
                        const {
                           data: { result, description, code }
                        } = await HealtInsuranceApi.getHicsCostByField(20200, currentSeal.diagnosis.icdCode);
                        if (code === 200) {
                           const exam = result.find((item) => item.drgCode === currentExam.drgCode);
                           newExam = exam;
                           service.sealData = {
                              serviceId: exam.serviceId,
                              drgCode: exam.drgCode,
                              oldServiceId: currentSeal.hicsServiceId
                           };
                        } else {
                           openNofi('error', 'Алдаа', description);
                        }
                     }
                     service.amountCit = newExam?.amountCit || 0;
                     service.amountHi = newExam?.amountHi || 0;
                     service.price = newExam?.amountTotal || 0;
                     service.oPrice = newExam?.amountTotal || 0;
                     if (
                        (newExam.amountCit > 0 && freeTypeId > 0) ||
                        (newExam.amountCit > 0 &&
                           selectedIcdCode &&
                           ['A', 'B', 'P', 'F', 'O'].some(
                              (char) => char.toLowerCase() === selectedIcdCode[0].toLowerCase()
                           ))
                     ) {
                        service.amountCit = 0;
                        service.price -= newExam?.amountCit;
                        service.oPrice -= newExam?.amountCit;
                     }
                  }

                  switch (item.type) {
                     case 0:
                        service.typeId = item.examinationTypeId;
                        break;
                     case 1:
                        service.deviceType = item.device?.deviceType;
                        service.deviceId = item.deviceId;
                        service.typeId = item.xrayTypeId;
                        break;
                     case 2:
                        service.qty = item.qty || 1;
                        service.repeatTime = 1;
                        service.dayCount = 1;
                        service.typeId = item.treatmentTypeId;
                        if (service.qty !== 1) {
                           service.price = item.calCprice;
                           service.oPrice = item.price;
                        }
                        break;
                     case 3:
                        service.diagnose = item.diagnose;
                        service.surgeryType = item.surgeryType;
                        break;
                     case 7:
                        service.services = item.services;
                        break;
                     case 8:
                        service.name = item.iName;
                        service.dose = item.dose;
                        service.price = 0;
                        service.oPrice = item.price;
                        service.medicineType = item.medicineType;
                        service.repeatTime = 1;
                        service.dayCount = 1;
                        service.total = 0;
                        break;
                  }

                  services.push(service);
               })
            );
            // Replace OTS data
            replaceOtsData([...(IncomeOTSData?.services || []), ...services]);
         }
         setIsLoadingOrderTable(false);
      } catch (error) {
         console.log('error', error);
      }
   };
   const replaceOtsData = (services) => {
      const newServices = services?.map((service) => {
         if (service.type === 2 || service.type === 8) {
            return {
               ...service,
               total: service.dayCount * service.repeatTime,
               price: service.dayCount * service.repeatTime * service.oPrice
            };
         } else {
            return service;
         }
      });
      const totalAmount = newServices?.reduce((sum, service) => {
         if (service.type === 2 || service.type === 8) {
            return sum + (service.oPrice || 0) * service.total;
         } else {
            return sum + service.oPrice || 0;
         }
      }, 0);
      dispatch(
         setOtsData({
            services: newServices,
            total: totalAmount
         })
      );
   };
   const surgeryRequestClick = async (values) => {
      await SurgeryApi.postRequest({
         ...values,
         appointmentId: IncomeEMRData.appointmentId,
         inpatientRequestId: IncomeEMRData.inpatientRequestId,
         usageType: usageType
      })
         .then((response) => {
            if (response.status === 201) {
               openNofi('success', 'Амжиллтай', 'Хэвтүүлэх хүсэлт амжилттай илгээгдлээ');
            }
         })
         .catch((err) => {
            console.log(err);
         });
   };
   const updateAddHics = async (services) => {
      if (hicsSeal?.hicsServiceId === 20120) {
         const exams = services.filter((service) => service.type === 0 || service.type === 1);
         if (exams?.length > 0) {
            await InsuranceApi.requestAddHics(addHics.id, {
               amountCit: hicsSeal.amountCit,
               amountHi: hicsSeal.amountHi,
               amountTotal: hicsSeal.amountTotal,
               hasExam: true,
               diagnosis: hicsSeal.diagnosis
            }).then(({ data: { response } }) => {
               dispatch(setAddHics(response));
            });
         }
      }
      save(services);
   };

   const inpatientRequestClick = async (values) => {
      await ServiceApi.postInpatientRequest({
         ...values,
         isInsurance: IncomeEMRData.isInsurance,
         appointmentId: IncomeEMRData.appointmentId
      })
         .then((response) => {
            if (response.status === 201) {
               openNofi('success', 'Амжиллтай', 'Хэвтүүлэх хүсэлт амжилттай илгээгдлээ');
            }
         })
         .catch((err) => {
            console.log(err);
         });
   };
   const handleClickSetOrder = async (setOrders) => {
      const { services } = setOrders;
      setIsLoadingOrderTable(true);
      var newServices = [];
      services?.medicines?.map((medicine) => newServices.push(medicine));
      services?.examinations?.map((examination) => newServices.push(examination));
      services?.xrays?.map((xray) => newServices.push(xray));
      handleclick(newServices);
   };

   const getExams = async () => {
      await HealtInsuranceApi.getHicsExam().then(({ data }) => {
         setHicsExams(data?.result);
      });
   };

   useEffect(() => {
      // replaceOtsData([], 0);
      if (IncomeOTSData?.services?.length > 0) {
         console.log('asdasdasd', IncomeOTSData);
         orderForm.setFieldValue('services', IncomeOTSData.services);
      } else {
         orderForm.resetFields();
      }
   }, [IncomeOTSData]);
   useEffect(() => {
      RenderCategories();
      getExams();
   }, []);
   return (
      <div className="flex flex-col gap-3">
         <div className={isPackage ? 'grid grid-cols-3 gap-3' : 'flex flex-wrap gap-3'}>
            {showSetOrder && <SetOrder handleclick={handleClickSetOrder} />}
            {showRecentRepice && <RecentRecipe />}
            {showSetOrder || showRecentRepice ? <div className="h-full w-[1px] bg-[#c9cdd4]" /> : null}
            {showExamination && <Examination handleclick={handleclick} />}
            {showXray && <Xray handleclick={handleclick} />}
            {showTreatment && <Treatment handleclick={handleclick} />}
            {showMedicine && <Medicine usageType={usageType} handleclick={handleclick} />}
            {showSurgery && (
               <Surgery
                  patientId={IncomeEMRData?.patientId}
                  appointmentId={IncomeEMRData?.appointmentId}
                  usageType={usageType}
                  selectedSurgery={IncomeEMRData?.surgery}
                  handleclick={surgeryRequestClick}
               />
            )}
            {showOperation && <Operation usageType={usageType} handleclick={handleclick} />}
            {showPackage && <Package registerNumber={selectedPatient.registerNumber} handleclick={handleclick} />}
            {showInpatient && (
               <InpatientRequest selectedPatient={selectedPatient} handleClick={inpatientRequestClick} />
            )}
            {showDoctorInspection && <DoctorInspection handleclick={handleclick} />}
            {showReinspection && (
               <Reinspection
                  selectedPatient={selectedPatient}
                  appointmentId={IncomeEMRData?.appointmentId}
                  hicsSealId={hicsSeal.id}
               />
            )}
         </div>
         <div className="flex flex-wrap">
            <div className="w-full">
               <Form
                  form={orderForm}
                  onValuesChange={(_changedValue, allValues) => {
                     replaceOtsData(allValues?.services);
                  }}
               >
                  <Form.List name="services">
                     {(services, { remove }) => {
                        if (isPackage) {
                           return <PackageTable form={orderForm} services={services} remove={remove} />;
                        } else {
                           return (
                              <OrderTable
                                 selectedPatient={selectedPatient}
                                 setLoading={setIsLoadingOrderTable}
                                 isLoading={isLoadingOrderTable}
                                 usageType={usageType}
                                 form={orderForm}
                                 services={services}
                                 remove={remove}
                              />
                           );
                        }
                     }}
                  </Form.List>
               </Form>
            </div>
         </div>
         <div className="w-full flex flex-row gap-2 justify-between">
            <div className="flex flex-row gap-3">
               <p className="font-extrabold">Нийт дүн: {numberToCurrency(IncomeOTSData?.total || 0)}</p>
               <p className="font-extrabold">Даатгал дүн: {numberToCurrency(hicsSeal?.amountTotal || 0)}</p>
            </div>
            <Button
               type="primary"
               onClick={() =>
                  orderForm
                     .validateFields()
                     .then((values) => {
                        if (isPackage) {
                           save(values.services);
                           orderForm.resetFields();
                        } else {
                           const services = values.services || [];
                           const errors = services.filter(
                              (service) => !service.orderTime && service.type !== 0 && !service.isCito
                           );
                           if (errors?.length > 0) {
                              errors?.map((error) => {
                                 openNofi('error', 'Алдаа', `${error.name} Цаг оруулах`);
                              });
                           } else {
                              const newServices = services.filter(
                                 (service) => !service.requestId && !service.invoiceId
                              );
                              updateAddHics(newServices);
                              orderForm.resetFields();
                              dispatch(delOtsData());
                           }
                        }
                     })
                     .catch((error) => {
                        console.log('er', error);
                        error.errorFields?.map((errorField) => {
                           openNofi('error', 'Алдаа', errorField.errors[0]);
                        });
                     })
               }
            >
               {isPackage ? 'Хадгалах' : 'OTS Хадгалах'}
            </Button>
         </div>
      </div>
   );
};
export default InternalOrder;
