import { Button, Form, Input, Modal, Popconfirm } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useCallback, useEffect, useState } from 'react';
import { BodyComponent } from 'reactjs-human-body';
import Model from 'react-body-highlighter';
import { i18Little } from '../../../documentInjection';
import ImageMarker from 'react-image-marker';

import humanBodyImg from '../../../../assets/images/humanBody.jpg';
import { DeleteOutlined } from '@ant-design/icons';

const Humanbody = (props) => {
   const { name, currentData, handleClick, params, disabled } = props;
   const [markers, setMarkers] = useState([]);
   const [form] = Form.useForm();
   const [changedParts, setChangedParts] = useState({});
   const onChange = (parts) => {
      setChangedParts(parts);
   };
   const onClick = (type, { muscle }) => {
      console.log(muscle);
      var muscles = data[0]?.muscles;
      const state = muscles?.includes(muscle);
      if (state) {
         const index = muscles.findIndex((oldMuscle) => oldMuscle === muscle);
         const newMuscles = muscles.slice(0, index);
         setData([
            {
               name: 'press',
               muscles: newMuscles
            }
         ]);
      } else {
         setData([
            {
               name: 'press',
               muscles: [...muscles, muscle]
            }
         ]);
      }
   };
   const handleRemoveMarker = (index) => {
      form.resetFields([index]);
      const updatedMarkers = [...markers];
      updatedMarkers.splice(index, 1);
      setMarkers(updatedMarkers);
   };
   const CustomMarker = (props) => {
      return (
         <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => {
               console.log('items', props);
               var newMarkers = markers;
               const cMarkers = newMarkers.splice(0, props.itemNumber - 1);
               console.log(cMarkers);
            }}
            okText="Yes"
            cancelText="No"
         >
            <p className="custom-marker">{props.itemNumber}</p>
         </Popconfirm>
      );
      return;
   };
   const [isOpenModal, setIsOpenModal] = useState(false);
   useEffect(() => {
      if (currentData?.length > 0) {
         form.setFieldValue(name, currentData);
         setMarkers(currentData?.filter(Boolean));
      }
   }, [currentData]);
   return (
      <>
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
            }}
            style={{
               minWidth: 120
            }}
            disabled={disabled}
         >
            Байрлал сонгох
         </Button>
         <Modal
            title="Body"
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               form.validateFields().then((values) => {
                  handleClick(values);
                  setIsOpenModal(false);
               });
            }}
            width={730}
         >
            <div className="flex flex-row gap-2">
               <div className="w-[400px]">
                  <ImageMarker
                     src={humanBodyImg}
                     markers={markers}
                     onAddMarker={(marker) => {
                        form.validateFields().then(() => {
                           const newMarkers = [...markers, marker];
                           setMarkers(newMarkers);
                           const currentValues = form.getFieldValue(name);
                           currentValues.push({
                              desc: '',
                              top: marker.top,
                              left: marker.left
                           });
                           form.setFieldsValue({
                              [`${name}`]: currentValues
                           });
                        });
                     }}
                  />
               </div>
               <div className="flex flex-col gap-2 my-3 h-[500px] p-2 overflow-auto">
                  <Form form={form} layout="vertical">
                     <Form.List name={name}>
                        {(fields, { add, remove }) => {
                           return (
                              <div className="flex flex-col gap-2">
                                 {fields.map((field) => (
                                    <div key={field.name} className="document-form">
                                       <div className="form-left" />
                                       <div className="form-inputs">
                                          <Form.Item
                                             shouldUpdate
                                             label={`${field.name + 1} цэгийн өвдөлт`}
                                             rules={[
                                                {
                                                   required: true,
                                                   message: 'Заавал'
                                                }
                                             ]}
                                             name={[field.name, 'desc']}
                                          >
                                             <TextArea placeholder="Өвдөлт бичих" />
                                          </Form.Item>
                                          <div className="hidden">
                                             <Form.Item className="mb-0" name={[field.name, 'top']}>
                                                <Input disabled />
                                             </Form.Item>
                                          </div>
                                          <div className="hidden">
                                             <Form.Item className="mb-0 opacity-30 hidden" name={[field.name, 'left']}>
                                                <Input disabled />
                                             </Form.Item>
                                          </div>
                                          <Button
                                             danger
                                             className="w-full"
                                             icon={<DeleteOutlined />}
                                             onClick={() => {
                                                remove(field.name);
                                                handleRemoveMarker(field.name);
                                             }}
                                          >
                                             устгах
                                          </Button>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           );
                        }}
                     </Form.List>
                  </Form>
               </div>
            </div>
         </Modal>
      </>
   );
};
export default Humanbody;
