import { Button, Form, Input, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useMemo, useState } from 'react';
import ImageMarker from 'react-image-marker';
import humanHeadImg from '../../../../assets/images/humanHead.png';
import humanBodyImg from '../../../../assets/images/humanBody.jpg';
import { DeleteOutlined } from '@ant-design/icons';

const HumanParts = (props) => {
   const { part, name, currentData, handleClick, disabled } = props;
   const [markers, setMarkers] = useState([]);
   const [form] = Form.useForm();
   const [isOpenModal, setIsOpenModal] = useState(false);

   const configureImg = useMemo(() => {
      if (part === 'body') return humanBodyImg;
      else if (part === 'head') return humanHeadImg;
   }, [part]);

   const handleRemoveMarker = (index) => {
      form.resetFields([index]);
      const updatedMarkers = [...markers];
      updatedMarkers.splice(index, 1);
      setMarkers(updatedMarkers);
   };
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
            width={900}
         >
            <div className="flex flex-row gap-2">
               <div className="w-[400px]">
                  <ImageMarker
                     src={configureImg}
                     markers={markers}
                     onAddMarker={(marker) => {
                        form.validateFields().then(() => {
                           const newMarkers = [...markers, marker];
                           setMarkers(newMarkers);
                           const currentValues = form.getFieldValue(name);
                           if (currentValues?.length > 0) {
                              currentValues.push({
                                 desc: '',
                                 top: marker.top,
                                 left: marker.left
                              });
                              form.setFieldsValue({
                                 [`${name}`]: currentValues
                              });
                           } else {
                              form.setFieldsValue({
                                 [`${name}`]: [
                                    {
                                       desc: '',
                                       top: marker.top,
                                       left: marker.left
                                    }
                                 ]
                              });
                           }
                        });
                     }}
                  />
               </div>
               <div
                  className="flex flex-col gap-2 my-3 h-[500px] p-2 overflow-auto"
                  style={{
                     width: 'calc(100% - 400px)'
                  }}
               >
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
export default HumanParts;
