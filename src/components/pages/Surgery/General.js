import React from 'react';
import { DatePicker, Divider, Form, Select, Table, TimePicker } from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import { labelStyle, contentStyle } from './Index';
import { diagnoseTypeInfo, numberToCurrency, openNofi } from '../../common';
import { useEffect, useState } from 'react';
import jwtInterceopter from '../../jwtInterceopter';

const { Option } = Select;

function General(props) {
   const { form, selectedSurgery, diagnosis, selectedCost } = props;
   const [rooms, setRooms] = useState([]);
   const [hicsCost, setHicsCost] = useState([]);
   const [isLoadingHicsCost, setIsLoadingHicsCost] = useState(false);
   const surgeryType = (type) => {
      if (type === 1) return 'Төлөвлөгөөт';
      return 'Яаралтай';
   };
   const getRooms = async () => {
      await jwtInterceopter.get('organization/room').then((response) => {
         setRooms(response.data.response.data);
      });
   };
   const getHicsCost = async (value) => {
      const insuranceServiceId = selectedSurgery?.taskWorkers?.surgery.insuranceServiceId;
      if (value != undefined && insuranceServiceId != null) {
         setIsLoadingHicsCost(true);
         await jwtInterceopter
            .get('health-insurance/hics-cost-by-field', {
               params: {
                  icdCode: value,
                  serviceId: insuranceServiceId
               }
            })
            .then((response) => {
               openNofi('success', 'Амжилттай', response.data.description);
               setHicsCost(response.data.result);
            })
            .catch((error) => {
               console.log(error);
               openNofi('error', 'Алдаа', error.response?.data?.message?.replaceAll('HttpException:', ''));
            })
            .finally(() => {
               setIsLoadingHicsCost(false);
            });
      } else {
         console.log(insuranceServiceId);
      }
   };
   const rowSelection = {
      type: 'radio',
      onSelect: (record, selected, selectedRows) => {
         selectedCost(selectedRows);
      }
   };
   useEffect(() => {
      getRooms();
      setHicsCost([]);
   }, [selectedSurgery]);
   return (
      <div className="flex flex-col gap-2">
         <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
            <div className="p-3">
               <Divider className="mt-0">Ерөнхий мэдээлэл</Divider>
               <div className="grid grid-cols-2 justify-items-start gap-3">
                  <p style={labelStyle}>Овог:</p>
                  <p style={contentStyle}>{selectedSurgery?.lastName}</p>
                  <p style={labelStyle}>Нэр:</p>
                  <p style={contentStyle}>{selectedSurgery?.firstName}</p>
                  <p style={labelStyle}>Регистрийн дугаар:</p>
                  <p style={contentStyle}>{selectedSurgery?.registerNumber}</p>
                  <p style={labelStyle}>Онош:</p>
                  <p>
                     {diagnosis?.map((diagnose, index) => {
                        return (
                           <span key={index} className="flex flex-col">
                              <span className="font-semibold">{diagnoseTypeInfo(diagnose.diagnoseType)}: </span>
                              <span>{'[' + diagnose?.code + ']' + diagnose?.nameMn}</span>
                           </span>
                        );
                     })}
                  </p>
                  <p style={contentStyle}>Мэс засал:</p>
                  <p style={contentStyle}>{selectedSurgery?.taskWorkers?.surgery?.name}</p>
                  <p style={labelStyle}>Мэс заслын төрөл:</p>
                  <p style={contentStyle}>{surgeryType(selectedSurgery?.taskType)}</p>
               </div>
            </div>
         </div>
         <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
            <div className="p-3">
               <Divider className="mt-0">Даатгалд хамрагдах онош</Divider>
               <Form.Item
                  label="Онош"
                  name="icdCode"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Select allowClear onChange={getHicsCost}>
                     {diagnosis?.map((diagnose, index) => {
                        return (
                           <Option key={index} value={diagnose.code}>
                              {diagnose?.code}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <p
                  className="pb-3"
                  style={{
                     fontWeight: '600'
                  }}
               >
                  Өртгийн жин
               </p>
               <div className="max-w-[430px] overflow-auto">
                  <Table
                     size="small"
                     rowKey={'drgCode'}
                     loading={isLoadingHicsCost}
                     rowSelection={rowSelection}
                     columns={[
                        {
                           title: 'ICD 10',
                           dataIndex: 'icd10Code'
                        },
                        {
                           title: 'ICD 9',
                           dataIndex: 'icd9Code'
                        },
                        {
                           title: 'Үйлчилгээний нэр',
                           dataIndex: 'drgName'
                        },
                        {
                           title: 'Даатгалаас төлөх',
                           dataIndex: 'amountHi',
                           render: (text) => {
                              return numberToCurrency(text);
                           }
                        }
                     ]}
                     dataSource={hicsCost}
                     pagination={false}
                  />
               </div>
               <Divider className="mt-0">Хугацаа</Divider>
               <Form.Item
                  label="Огноо:"
                  name="startDate"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <DatePicker locale={mnMN} />
               </Form.Item>
               <Form.Item
                  label="Үргэлжлэх хугацаа:"
                  name="durationTime"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <TimePicker format={'HH:mm'} locale={mnMN} />
               </Form.Item>
               <Form.Item
                  label="Өрөө:"
                  name="roomId"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Select>
                     {rooms?.map((room, index) => {
                        return (
                           <Option key={index} value={room.id}>
                              {room.roomNumber}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
            </div>
         </div>
      </div>
   );
}
export default General;
