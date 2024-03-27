import React, { useEffect, useState } from 'react';
import { Button, Form, Modal, Select, Table } from 'antd';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
//common
import { openNofi } from '@Comman/common';
//api
import UrgentApi from '@ApiServices/urgent/urgent.api';
import patientDiagnoseApi from '@ApiServices/emr/patientDiagnose';
import healtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
//redux
import { selectCurrentEmrData } from '@Features/emrReducer';

const { Option } = Select;
const CallAmbulance = ({ extraData }) => {
   const incomeENRData = useSelector(selectCurrentEmrData);
   const [emergencyForm] = Form.useForm();
   const [emergencies, setEmergencies] = useState([]);
   const [emergenciesMeta, setEmergenciesMeta] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [isConfirmLoading, setIsConfirmLoading] = useState(false);
   const [callServices, setCallServices] = useState([]);
   const [patientDiagnosis, setPatientDiagnosis] = useState([]);
   const [hicsCostByField, setHicsCostByField] = useState([]);
   const [isOpenEmergencyModal, setIsOpenEmergyncyModal] = useState(false);
   // yaralta duudlaga
   const getData = async (page, pageSize) => {
      setIsLoading(true);
      await UrgentApi.getCallEmergency({
         page: page,
         limit: pageSize,
         patientId: incomeENRData.patientId,
         appointmentId: incomeENRData.appointmentId
      })
         .then(({ data: { response } }) => {
            setEmergencies(response.data);
            setEmergenciesMeta(response.meta);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const getHicsServices = async () => {
      await healtInsuranceApi.getHicsService().then(({ data: { result } }) => {
         setCallServices(result?.filter((rslt) => rslt.groupId === 210));
      });
   };
   const getPatientDiagnosis = async () => {
      await patientDiagnoseApi
         .getByPageFilter({
            patientId: incomeENRData.patientId,
            appointmentId: incomeENRData.appointmentId
         })
         .then(({ data: { response } }) => {
            setPatientDiagnosis(response.data);
         });
   };
   const getHicsCostByField = async (value) => {
      const serviceId = emergencyForm.getFieldValue('hicsServiceId');
      await healtInsuranceApi
         .getHicsCostByField(serviceId, value)
         .then((response) => {
            setHicsCostByField(response.data.result);
         })
         .catch((error) => {
            if (error.response.status === 400) {
               openNofi('error', 'Алдаа', error.response.data.message);
            }
         });
   };

   const onFinishAmbulance = async (values) => {
      setIsConfirmLoading(true);
      await UrgentApi.postCallEmergency({
         patientId: incomeENRData.patientId,
         appointmentId: incomeENRData.appointmentId,
         departmentId: incomeENRData.cabinetId,
         drgCode: values.drgCode,
         hicsServiceId: values.hicsServiceId,
         icdCode: values.icdCode
      })
         .then((response) => {
            if (response.status === 201) {
               getData(1, 10);
               setIsOpenEmergyncyModal(false);
               openNofi('success', 'Амжилттай', 'Амжилттай хадгалагдсан');
            }
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsConfirmLoading(false);
         });
   };
   //
   useEffect(() => {
      getData(1, 10);
      getHicsServices();
      getPatientDiagnosis();
   }, []);
   return (
      <div>
         <div className="flex flex-col gap-3">
            <div className="flow-root">
               <div className="float-left">
                  <Button
                     type="primary"
                     onClick={() => {
                        setIsOpenEmergyncyModal(true);
                     }}
                     disabled={emergencies?.length > 0 ? true : false}
                  >
                     Бөглөх
                  </Button>
               </div>
            </div>
            <div>
               <Table
                  rowKey={'id'}
                  bordered
                  loading={isLoading}
                  columns={[
                     {
                        title: 'Огноо',
                        dataIndex: 'createAt',
                        render: (text) => {
                           return dayjs(text).format('YYYY-MM-DD HH:mm:ss');
                        }
                     },
                     {
                        title: 'Дуудлагын төрөл',
                        dataIndex: 'hicsServiceId',
                        render: (text) => {
                           return callServices?.find((e) => e.id === text)?.name;
                        }
                     },
                     {
                        title: 'Оношийн хамааралтай бүлэг',
                        dataIndex: 'drgCode'
                     },
                     {
                        title: 'ICD Код',
                        dataIndex: 'icdCode'
                     }
                  ]}
                  dataSource={emergencies}
                  pagination={{
                     position: ['bottomCenter'],
                     size: 'small',
                     current: emergenciesMeta.page,
                     total: emergenciesMeta.itemCount,
                     showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                     pageSize: emergenciesMeta.limit,
                     showSizeChanger: true,
                     pageSizeOptions: ['5', '10', '20', '50'],
                     showQuickJumper: true,
                     onChange: (page, pageSize) => getData(page, pageSize)
                  }}
               />
            </div>
         </div>
         <Modal
            title="Яаралтай дуудлага"
            open={isOpenEmergencyModal}
            confirmLoading={isConfirmLoading}
            onCancel={() => setIsOpenEmergyncyModal(false)}
            onOk={() =>
               emergencyForm.validateFields().then((values) => {
                  onFinishAmbulance(values);
               })
            }
         >
            <Form form={emergencyForm} layout="vertical">
               {extraData.reasonComming === 2 ? (
                  <Form.Item
                     label="Дуудлагын төрөл"
                     name="hicsServiceId"
                     rules={[
                        {
                           required: true,
                           message: 'Дуудлагын төрөл заавал'
                        }
                     ]}
                  >
                     <Select>
                        {callServices?.map((service, index) => {
                           return (
                              <Option key={index} value={service.id}>
                                 {service.name}
                              </Option>
                           );
                        })}
                     </Select>
                  </Form.Item>
               ) : null}
               <Form.Item label="Эмчийн сонгосон онош" name={'icdCode'}>
                  <Select onChange={(e) => getHicsCostByField(e)}>
                     {patientDiagnosis?.map((diagnose, index) => {
                        return (
                           <Option key={index} value={diagnose.diagnose?.code}>
                              {diagnose.diagnose?.code + '=> ' + diagnose.diagnose?.nameMn}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.Item
                  label="Оношийн хамааралтай бүлэг"
                  name="drgCode"
                  rules={[
                     {
                        required: true,
                        message: 'Оношийн хамааралтай бүлэг заавал'
                     }
                  ]}
               >
                  <Select disabled={hicsCostByField?.length > 0 ? false : true}>
                     {hicsCostByField?.map((cost, index) => {
                        return (
                           <Option key={index} value={cost.drgCode}>
                              {cost.drgName + '=>' + cost.amountHi}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
            </Form>
         </Modal>
      </div>
   );
};
export default CallAmbulance;
