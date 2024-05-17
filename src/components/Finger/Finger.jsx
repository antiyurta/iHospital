import { Badge, Button, Form, Result, Spin } from 'antd';
import React, { useEffect, useMemo } from 'react';
//context
import { useSocketContext } from '@Features/socketContext';
//comp
import Viewer from './Viewer';
//img
import { biometerIcon } from '@Assets/index';
//externals
const socketUrl = process.env.REACT_APP_FINGER_SOCKET_URL;
//string
const messageIsNotInsurance = 'Даатгалгүй эмнэлэгт хамааралгүй';
const Finger = (props) => {
   const { insurance, form, ...rest } = props;
   const {
      createWebSocket,
      removeWebSocketByName,
      isLoadingSockets,
      isConnectedSockets,
      receivedDatas,
      sendDataWebSocketByName
   } = useSocketContext();

   const isLoading = useMemo(() => {
      return isLoadingSockets?.[`${rest.name}`] || false;
   }, [isLoadingSockets]);

   const isConnected = useMemo(() => {
      return isConnectedSockets?.[`${rest.name}`] || false;
   }, [isConnectedSockets]);

   useEffect(() => {
      if (receivedDatas[`${rest.name}`]) {
         console.log('end data=====>', rest);
         form.setFieldValue(`${rest.name}`, receivedDatas[`${rest.name}`].result.image);
      }
   }, [receivedDatas]);

   const handleSendData = () => {
      form.resetFields([[rest.name]]);
      sendDataWebSocketByName(`${rest.name}`, {
         deviceId: 123456789,
         command: 'ReadFinger',
         Parameters: null
      });
   };

   const Dummy = (props) => {
      return (
         <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 justify-between">
               <div className="flex justify-between items-center">
                  <Badge
                     status={isConnected ? 'success' : 'error'}
                     text={isConnected ? 'Холбогдсон' : 'Холбогдоогүй'}
                  />
               </div>
               <Button
                  type="primary"
                  loading={isLoading}
                  onClick={() => {
                     if (isConnected) removeWebSocketByName(`${rest.name}`);
                     else createWebSocket(socketUrl, `${rest.name}`);
                  }}
               >
                  {isConnected ? 'Салгах' : 'Холбох'}
               </Button>
            </div>
            <Spin spinning={isLoading} tip="Уншиж байна...">
               <div className="flex flex-col gap-2 items-center">
                  <Viewer receivedData={props.value} />
                  <Button
                     className="w-full flex flex-row gap-2 justify-center items-center"
                     disabled={!isConnected}
                     loading={isLoading}
                     onClick={() => {
                        handleSendData();
                     }}
                  >
                     <img
                        src={biometerIcon}
                        className={!isConnected ? 'fingerImg disabled' : 'fingerImg'}
                        alt="finger"
                     />
                     <p className="font-bold">Хуруу уншуулах</p>
                  </Button>
               </div>
            </Spin>
         </div>
      );
   };
   if (insurance) {
      return (
         <Form.Item {...rest}>
            <Dummy />
         </Form.Item>
      );
   }
   return (
      <Result
         status={'info'}
         style={{
            height: 'calc(100% - 24px)',
            padding: '32px 20px'
         }}
         subTitle={messageIsNotInsurance}
      />
   );
};
export default Finger;
