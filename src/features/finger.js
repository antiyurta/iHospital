import React, { useEffect, useState } from 'react';
import { Badge, Button, Form, Input, Modal, Select, Steps } from 'antd';
import { openNofi } from '../components/comman';
import jwtInterceopter from '../components/jwtInterceopter';

const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;

function Finger(props) {
   const { text, isDanger, isFinger, steps, isPatientSheet, handleClick } = props;
   const [fingerForm] = Form.useForm();
   const socketUrl = 'ws://127.0.0.1:5021/FingerService';
   const [socket, setSocket] = useState(null);
   const [currentStep, setCurrentStep] = useState(0);
   const [isOpenFingerModal, setIsOpenFingerModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [isLoadingFetchData, setIsLoadingFetchData] = useState(false);
   const [isConnected, setIsConnected] = useState(false);
   const [receivedData, setReceivedData] = useState('');
   //sent reason
   const [sentReason, setSentReason] = useState([]);
   //sent reason
   useEffect(() => {
      if (socket) {
         socket.addEventListener('open', handleOpen);
         socket.addEventListener('error', handleError);
         socket.addEventListener('close', handleClose);
         socket.addEventListener('message', async (event) => {
            const message = JSON.parse(event.data);
            console.log(message);
            setReceivedData(message.result.image);
            setIsLoadingFetchData(false);
         });
      }

      return () => {
         if (socket) {
            socket.removeEventListener('open', handleOpen);
            socket.removeEventListener('error', handleError);
            socket.removeEventListener('close', handleClose);
         }
      };
   }, [socket, currentStep]);
   const handleConnect = () => {
      setIsLoading(true);
      const newSocket = new WebSocket(socketUrl); // Replace with your WebSocket URL
      setSocket(newSocket);
   };
   const handleOpen = () => {
      console.log('WebSocket connected');
      setIsLoading(false);
      setIsConnected(true);
   };

   const handleError = (_event) => {
      openNofi('error', 'Алдаа', 'Хуруу уншигч холбоогүй эсвэл iHospital Tool оруулаагүй байна');
      setIsLoading(false);
      setIsConnected(false);
   };

   const handleClose = () => {
      console.log('WebSocket closed');
      setIsLoading(false);
      setIsConnected(false);
   };
   const handleSendData = () => {
      setReceivedData('');
      setIsLoadingFetchData(true);
      if (socket && socket.readyState === WebSocket.OPEN) {
         const message = {
            deviceId: 123456789,
            command: 'ReadFinger',
            Parameters: null
         };
         socket.send(JSON.stringify(message));
      }
   };
   //
   const FormItemImg = (props) => {
      const { ...rest } = props;
      const Dummy = (props) => {
         if (props.value) {
            return <img className="m-auto" src={`data:image/jpeg;base64,${props.value}`} alt="finger" />;
         } else {
            return;
         }
      };
      return <Form.Item {...rest}>{<Dummy />}</Form.Item>;
   };
   const next = () => {
      setCurrentStep(currentStep + 1);
   };
   const getSentReason = async () => {
      await jwtInterceopter
         .get('health-insurance/sent-reason')
         .then((response) => {
            setSentReason(response.data.result);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   useEffect(() => {
      if (receivedData) {
         fingerForm.setFieldValue(`${steps[currentStep].path}`, receivedData);
      }
   }, [receivedData]);
   useEffect(() => {
      if (isOpenFingerModal) {
         handleConnect();
         setReceivedData('');
         getSentReason(); // ilgeeh shaltgaan
      }
   }, [isOpenFingerModal]);
   return (
      <>
         <Button danger={isDanger} type="primary" onClick={() => setIsOpenFingerModal(true)}>
            {text}
         </Button>
         <Modal
            title="Хуруу уншуулах"
            open={isOpenFingerModal}
            onCancel={() => {
               setIsOpenFingerModal(false);
               handleClose();
            }}
            onOk={() => {
               fingerForm
                  .validateFields()
                  .then((values) => {
                     console.log(values);
                     handleClick(values);
                     setIsOpenFingerModal(false);
                  })
                  .catch((error) => {
                     console.log(error);
                  });
            }}
            okText="Илгээх"
         >
            <div className="flex flex-col gap-3">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3">
                     <div className="flex justify-between">
                        <div className="flex justify-between items-center">
                           <p
                              style={{
                                 fontSize: 14,
                                 fontWeight: 500,
                                 paddingRight: 12
                              }}
                           >
                              Хуруу уншигч:
                           </p>
                           {isConnected ? (
                              <Badge status="success" text="Холбогдсон" />
                           ) : (
                              <Badge status="error" text="Холбогдоогүй" />
                           )}
                        </div>
                        <div>
                           <Button type="primary" loading={isLoading} onClick={handleConnect} disabled={isConnected}>
                              Холбох
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
               {isFinger ? (
                  <>
                     <div>
                        <Steps current={currentStep} size="small">
                           {steps?.map((step, index) => {
                              return <Step key={index} title={step.title} />;
                           })}
                        </Steps>
                     </div>
                     <div>
                        <Form form={fingerForm} layout="vertical" className="flex flex-col gap-3">
                           {steps?.map((step, index) => {
                              return (
                                 <FormItemImg
                                    className={index === currentStep ? 'block' : 'hidden'}
                                    key={index}
                                    name={step.path}
                                    rules={[
                                       {
                                          required: false,
                                          message: `${step.title} Заавал`
                                       }
                                    ]}
                                 >
                                    <Input />
                                 </FormItemImg>
                              );
                           })}
                           <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                              <div className="p-3">
                                 <div className="flex justify-between">
                                    <Button
                                       disabled={currentStep === 0 ? true : false}
                                       onClick={() => setCurrentStep(currentStep - 1)}
                                    >
                                       Өмнөх
                                    </Button>
                                    <Button
                                       disabled={currentStep === steps?.length - 1 ? true : false}
                                       onClick={() => next()}
                                    >
                                       Дараахь
                                    </Button>
                                 </div>
                              </div>
                           </div>
                           <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                              <div className="p-3">
                                 <div className="flex flex-col gap-3">
                                    <Button
                                       className="w-full"
                                       type="primary"
                                       loading={isLoadingFetchData}
                                       onClick={handleSendData}
                                       disabled={!isConnected}
                                    >
                                       Хуруу уншуулах
                                    </Button>
                                 </div>
                              </div>
                           </div>
                           {isPatientSheet ? (
                              <>
                                 <Form.Item
                                    label="Илгээсэн шалтгаан:"
                                    name="sentReason"
                                    rules={[
                                       {
                                          required: isPatientSheet,
                                          message: 'Шалтгаан заавал'
                                       }
                                    ]}
                                 >
                                    <Select>
                                       {sentReason?.map((reason, index) => {
                                          return (
                                             <Option key={index} value={reason.id}>
                                                {reason.name}
                                             </Option>
                                          );
                                       })}
                                    </Select>
                                 </Form.Item>
                                 <Form.Item
                                    label="Зөвлөгөө:"
                                    name="advice"
                                    rules={[
                                       {
                                          required: isPatientSheet,
                                          message: 'Шалтгаан заавал'
                                       }
                                    ]}
                                 >
                                    <TextArea />
                                 </Form.Item>
                              </>
                           ) : null}
                        </Form>
                     </div>
                  </>
               ) : (
                  <div></div>
               )}
            </div>
         </Modal>
      </>
   );
}
export default Finger;
