import { Button, Form, Modal, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import jwtInterceopter from '../../../jwtInterceopter';
import { openNofi } from '../../../comman';
import moment from 'moment';

const { Option } = Select;

import { CT1and2Index } from './ct1,2/index';
import { A539Index } from './A539/index';

function Index({ document }) {
   // yaralta duudlaga
   // const [emergencyForm] = Form.useForm();
   // const [emergencies, setEmergencies] = useState([]);
   // const [emergenciesMeta, setEmergenciesMeta] = useState({});
   // const [isLoading, setIsLoading] = useState(false);
   // const [isConfirmLoading, setIsConfirmLoading] = useState(false);
   // const [callServices, setCallServices] = useState([]);
   // const [patientDiagnosis, setPatientDiagnosis] = useState([]);
   // const [hicsCostByField, setHicsCostByField] = useState([]);
   // const [isOpenEmergencyModal, setIsOpenEmergyncyModal] = useState(false);
   // // yaralta duudlaga
   // const getData = async (page, pageSize) => {
   //    setIsLoading(true);
   //    await jwtInterceopter
   //       .get('call-emergency', {
   //          patientId: patientId,
   //          appointmentId,
   //          page: page,
   //          limit: pageSize
   //       })
   //       .then((response) => {
   //          setEmergencies(response.data.response.data);
   //          setEmergenciesMeta(response.data.response.meta);
   //       })
   //       .finally(() => {
   //          setIsLoading(false);
   //       });
   // };
   // const getHicsServices = async () => {
   //    await jwtInterceopter
   //       .get('insurance/hics-service', {
   //          params: {
   //             groupId: 210
   //          }
   //       })
   //       .then((response) => {
   //          setCallServices(response.data.data);
   //       });
   // };
   // const getPatientDiagnosis = async () => {
   //    await jwtInterceopter
   //       .get('emr/patient-diagnose', {
   //          params: {
   //             appointmentId: appointmentId,
   //             patientId: patientId
   //          }
   //       })
   //       .then((response) => {
   //          setPatientDiagnosis(response.data.response.data);
   //       });
   // };
   // const getHicsCostByField = async (value) => {
   //    const serviceId = emergencyForm.getFieldValue('hicsServiceId');
   //    await jwtInterceopter
   //       .get('health-insurance/hics-cost-by-field', {
   //          params: {
   //             serviceId: serviceId,
   //             icdCode: value
   //          }
   //       })
   //       .then((response) => {
   //          console.log(response);
   //          setHicsCostByField(response.data.result);
   //       })
   //       .catch((error) => {
   //          console.log('=======>', error);
   //          if (error.response.status === 400) {
   //             openNofi('error', 'Алдаа', error.response.data.message);
   //          }
   //       });
   // };
   // const onFinishEmergyncy = async (values) => {
   //    setIsConfirmLoading(true);
   //    const data = {
   //       patientId: patientId,
   //       appointmentId: appointmentId,
   //       drgCode: values.drgCode,
   //       hicsServiceId: values.hicsServiceId,
   //       icdCode: values.icdCode
   //    };
   //    await jwtInterceopter
   //       .post('call-emergency', data)
   //       .then((response) => {
   //          console.log(response);
   //          if (response.status === 201) {
   //             setIsOpenEmergyncyModal(false);
   //             openNofi('success', 'Амжилттай', 'Амжилттай хадгалагдсан');
   //          }
   //       })
   //       .catch((error) => {
   //          console.log(error);
   //       })
   //       .finally(() => {
   //          setIsConfirmLoading(false);
   //       });
   // };
   // //
   // useEffect(() => {
   //    if (reasonComming === 2) {
   //       getData(1, 10);
   //       getHicsServices();
   //       getPatientDiagnosis();
   //    }
   // }, [reasonComming]);
   // if (documentValue === 'EMERGENCY') {
   //    return (
   //       <div>
   //          <div className="flex flex-col gap-3">
   //             <div className="flow-root">
   //                <div className="float-left">
   //                   <Button type="primary" onClick={() => setIsOpenEmergyncyModal(true)}>
   //                      Бөглөх
   //                   </Button>
   //                </div>
   //             </div>
   //             <div>
   //                <Table
   //                   rowKey={'id'}
   //                   bordered
   //                   loading={isLoading}
   //                   columns={[
   //                      {
   //                         title: 'Огноо',
   //                         dataIndex: 'createAt',
   //                         render: (text) => {
   //                            return moment(text).format('YYYY-MM-DD HH:mm:ss');
   //                         }
   //                      },
   //                      {
   //                         title: 'Дуудлагын төрөл',
   //                         dataIndex: 'hicsServiceId',
   //                         render: (text) => {
   //                            return callServices?.find((e) => e.id === text)?.name;
   //                         }
   //                      },
   //                      {
   //                         title: 'Оношийн хамааралтай бүлэг',
   //                         dataIndex: 'drgCode'
   //                      },
   //                      {
   //                         title: 'ICD Код',
   //                         dataIndex: 'icdCode'
   //                      }
   //                   ]}
   //                   dataSource={emergencies}
   //                   pagination={{
   //                      position: ['bottomCenter'],
   //                      size: 'small',
   //                      current: emergenciesMeta.page,
   //                      total: emergenciesMeta.itemCount,
   //                      showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
   //                      pageSize: emergenciesMeta.limit,
   //                      showSizeChanger: true,
   //                      pageSizeOptions: ['5', '10', '20', '50'],
   //                      showQuickJumper: true,
   //                      onChange: (page, pageSize) => getData(page, pageSize)
   //                   }}
   //                />
   //             </div>
   //          </div>
   //          <Modal
   //             title="asdas"
   //             open={isOpenEmergencyModal}
   //             confirmLoading={isConfirmLoading}
   //             onCancel={() => setIsOpenEmergyncyModal(false)}
   //             onOk={() =>
   //                emergencyForm.validateFields().then((values) => {
   //                   onFinishEmergyncy(values);
   //                })
   //             }
   //          >
   //             <Form form={emergencyForm} layout="vertical">
   //                {reasonComming === 2 ? (
   //                   <Form.Item
   //                      label="Дуудлагын төрөл"
   //                      name="hicsServiceId"
   //                      rules={[
   //                         {
   //                            required: true,
   //                            message: 'Дуудлагын төрөл заавал'
   //                         }
   //                      ]}
   //                   >
   //                      <Select>
   //                         {callServices?.map((service, index) => {
   //                            return (
   //                               <Option key={index} value={service.id}>
   //                                  {service.name}
   //                               </Option>
   //                            );
   //                         })}
   //                      </Select>
   //                   </Form.Item>
   //                ) : null}
   //                <Form.Item label="Эмчийн сонгосон онош" name={'icdCode'}>
   //                   <Select onChange={(e) => getHicsCostByField(e)}>
   //                      {patientDiagnosis?.map((diagnose, index) => {
   //                         return (
   //                            <Option key={index} value={diagnose.diagnose?.code}>
   //                               {diagnose.diagnose?.code + '=> ' + diagnose.diagnose?.nameMn}
   //                            </Option>
   //                         );
   //                      })}
   //                   </Select>
   //                </Form.Item>
   //                <Form.Item
   //                   label="Оношийн хамааралтай бүлэг"
   //                   name="drgCode"
   //                   rules={[
   //                      {
   //                         required: true,
   //                         message: 'Оношийн хамааралтай бүлэг заавал'
   //                      }
   //                   ]}
   //                >
   //                   <Select disabled={hicsCostByField?.length > 0 ? false : true}>
   //                      {hicsCostByField?.map((cost, index) => {
   //                         return (
   //                            <Option key={index} value={cost.drgCode}>
   //                               {cost.drgName + '=>' + cost.amountHi}
   //                            </Option>
   //                         );
   //                      })}
   //                   </Select>
   //                </Form.Item>
   //             </Form>
   //          </Modal>
   //       </div>
   //    );
   // }
   if (document.value === 87 || document.value === 91) {
      return <CT1and2Index document={document} />;
   } else if (document.value === 90) {
      return <CT1and2Index document={document} />;
   } else if (document.value === 96) {
      return <CT1and2Index document={document} />;
   } else if (document.value === 97) {
      return <A539Index document={document} />;
   }
   return <div>...</div>;
}
export default Index;
