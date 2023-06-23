import { DatePicker, Divider, Form, Input, Select, Table, TimePicker } from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import { labelStyle, contentStyle } from './SurgeryList';
import { diagnoseTypeInfo } from '../../comman';
import { useEffect, useState } from 'react';
import moment from 'moment';
import jwtInterceopter from '../../jwtInterceopter';

const { Option } = Select;
const { Column } = Table;

function General(props) {
   const { form, selectedSurgery } = props;
   const [rooms, setRooms] = useState([]);
   const surgeryType = (type) => {
      if (type === 1) return 'Яаралтай';
      return 'Төлөвлөгөөт';
   };
   const getRooms = async () => {
      await jwtInterceopter.get('organization/room').then((response) => {
         setRooms(response.data.response.data);
      });
   };
   useEffect(() => {
      getRooms();
   }, []);
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
                     {selectedSurgery.diagnose?.map((diagnose, index) => {
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
