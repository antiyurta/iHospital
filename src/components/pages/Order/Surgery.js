import React, { useEffect, useState } from 'react';
import { Button, Empty, Input, Modal, Form, Table, Select } from 'antd';
import jwtInterceopter from '../../jwtInterceopter';
import { numberToCurrency, openNofi } from '../../comman';
import { CloseCircleOutlined } from '@ant-design/icons';
import { ListCareType } from './list-type';
import { CARE_TYPE } from './care-enum';
import { ListSupport } from './list-support';

import surgeryIcon from './NewOrder/surgeryIcon.svg';

const { Search } = Input;
const { Option } = Select;

function Surgery(props) {
   const { usageType, appointmentId, handleclick } = props;
   const [form] = Form.useForm();
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isOpenSubModal, setIsOpenSubModal] = useState(false);
   const [surgery, setSurgery] = useState([]);
   const [diagnosis, setDiagnosis] = useState([]);
   const [metaSurgery, setMetaSurgery] = useState({});
   const [selectedSurgeries, setSelectedSurgeries] = useState([]);
   const [selectedTypeId, setSelectedTypeId] = useState(Number);
   const [surgeryId, setSurgeryId] = useState(Number);
   const [isLoading, setIsLoading] = useState(false);
   const getPatientDiagnosis = async () => {
      await jwtInterceopter
         .get('emr/patient-diagnose', {
            params: {
               appointmentId: appointmentId
            }
         })
         .then((response) => {
            const data = response.data.response.data;
            const diagnose = data?.map((diagnose) => {
               diagnose.diagnose['diagnoseType'] = diagnose.diagnoseType;
               return diagnose.diagnose;
            });
            setDiagnosis(diagnose);
         });
   };
   const onFinishSub = (values) => {
      const data = surgery.find((e) => e.id === surgeryId);
      data['diagnose'] = diagnosis;
      data['surgeryType'] = values.surgeryType;
      setSelectedSurgeries([...selectedSurgeries, data]);
   };
   const add = (surgery) => {
      const state = selectedSurgeries.includes(surgery);
      if (state) {
         openNofi('warning', 'Анхааруулга', 'Шинжилгээ сонгогдсон байна');
      } else {
         const clone = { ...surgery };
         clone.type = surgery.types.type;
         setSurgeryId(clone.id);
         setIsOpenSubModal(true);
      }
   };
   const remove = (index) => {
      var arr = [...selectedSurgeries];
      arr.splice(index, 1);
      setSelectedSurgeries(arr);
   };
   useEffect(() => {
      getPatientDiagnosis();
   }, []);
   return (
      <>
         <button
            className="gray-order"
            onClick={() => {
               setIsOpenModal(true);
               setSelectedSurgeryId(null);
               setSelectedSurgeries([]);
            }}
         >
            <img src={surgeryIcon} />
            Мэс засал
         </button>
         <Modal
            title="Мэс засал сонгох"
            width={'80%'}
            open={isOpenModal}
            bodyStyle={{
               height: 600,
               maxHeight: 600,
               overflow: 'auto'
            }}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               handleclick(selectedSurgeries);
               setIsOpenModal(false);
            }}
            okText={'Хадгалах'}
            cancelText={'Болих'}
         >
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-3">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div
                     className="p-3"
                     style={{
                        height: 552,
                        overflow: 'auto'
                     }}
                  >
                     <div className="flex flex-col gap-2">
                        <ListCareType type={CARE_TYPE.Surgery} getTypeById={setSelectedTypeId} />
                     </div>
                  </div>
               </div>
               <div className="grid sm:grid-cols-1 sm:col-span-2 xl:grid-cols-2 lg:col-span-3 gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <ListSupport careType={CARE_TYPE.Surgery} careTypeId={selectedTypeId} add={add} />
                  </div>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <Table
                           rowKey={'id'}
                           bordered
                           scroll={{
                              y: 400
                           }}
                           locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                           columns={[
                              {
                                 title: 'Нэр',
                                 dataIndex: 'name',
                                 render: (text) => {
                                    return (
                                       <p
                                          style={{
                                             whiteSpace: 'normal',
                                             color: 'black'
                                          }}
                                       >
                                          {text}
                                       </p>
                                    );
                                 }
                              },
                              {
                                 title: 'Төрөл',
                                 dataIndex: 'surgeryType',
                                 render: (text) => {
                                    if (text === 1) return 'Төлөвлөгөөт';
                                    return 'Яаралтай';
                                 }
                              },
                              {
                                 title: 'Үнэ',
                                 dataIndex: usageType === 'OUT' ? 'price' : 'inpatientPrice',
                                 width: 100,
                                 render: (text) => {
                                    return numberToCurrency(text);
                                 }
                              },
                              {
                                 title: '',
                                 width: 40,
                                 render: (_text, _row, index) => {
                                    return (
                                       <Button
                                          onClick={() => remove(index)}
                                          icon={
                                             <CloseCircleOutlined
                                                style={{
                                                   color: 'red'
                                                }}
                                             />
                                          }
                                       />
                                    );
                                 }
                              }
                           ]}
                           dataSource={selectedSurgeries}
                           pagination={false}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
         <Modal
            title="sad"
            open={isOpenSubModal}
            onCancel={() => setIsOpenSubModal(false)}
            onOk={() =>
               form.validateFields().then((values) => {
                  onFinishSub(values);
                  setIsOpenSubModal(false);
               })
            }
         >
            <div className="flex flex-col gap-3">
               <Form form={form}>
                  <div className="flex flex-col gap-3">
                     <Form.Item
                        name="surgeryType"
                        label="Мэс заслын төрөл"
                        rules={[
                           {
                              required: true,
                              message: 'Төрөл заавал'
                           }
                        ]}
                     >
                        <Select
                           style={{
                              width: '100%'
                           }}
                        >
                           <Option value={2}>Яаралтай</Option>
                           <Option value={1}>Төлөвлөгөөт</Option>
                        </Select>
                     </Form.Item>
                  </div>
               </Form>
            </div>
         </Modal>
      </>
   );
}
export default Surgery;
