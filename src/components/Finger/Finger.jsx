import { Badge, Button, Result, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
//img
import FingerIcon from './fingerIcon.svg';
//common
import { openNofi } from '@Comman/common';
//externals
const socketUrl = process.env.REACT_APP_FINGER_SOCKET_URL;
//string
const messageIsNotInsurance = 'Даатгалгүй эмнэлэгт хамааралгүй';
const Finger = ({ isInsurance }) => {
   const [socket, setSocket] = useState(null);
   const [isLoading, setLoading] = useState(false);
   const [isConnected, setConnected] = useState(false);
   const [receivedData, setReceivedData] = useState('');
   //socket sent data
   const handleSendData = () => {
      setReceivedData('');
      setLoading(true)
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
   const handleConnect = () => {
      setLoading(true);
      const newSocket = new WebSocket(socketUrl); // Replace with your WebSocket URL
      setSocket(newSocket);
   };
   // socket connect
   const handleOpen = () => {
      console.log('WebSocket connected');
      setLoading(false);
      setConnected(true);
   };
   //socket error
   const handleError = (_event) => {
      openNofi('error', 'Алдаа', 'Хуруу уншигч холбоогүй эсвэл iHospital Tool оруулаагүй байна');
      setLoading(false);
      setConnected(false);
   };
   //socket close
   const handleClose = () => {
      console.log('WebSocket closed');
      if (socket) {
         socket.close()
      }
      setLoading(false);
      setConnected(false);
   };
   useEffect(() => {
      if (socket) {
         socket.addEventListener('open', handleOpen);
         socket.addEventListener('error', handleError);
         socket.addEventListener('close', handleClose);
         socket.addEventListener('message', async (event) => {
            const message = JSON.parse(event.data);
            setReceivedData(message.result.image);
            setLoading(false)
         });
      }

      return () => {
         if (socket) {
            socket.removeEventListener('open', handleOpen);
            socket.removeEventListener('error', handleError);
            socket.removeEventListener('close', handleClose);
         }
      };
   }, [socket]);
   if (isInsurance) {
      return <div className="flex flex-col gap-2">
         <div className="flex flex-row gap-2 justify-between">
            <div className="flex justify-between items-center">
               {isConnected ? (
                  <Badge status="success" text="Холбогдсон" />
               ) : (
                  <Badge status="error" text="Холбогдоогүй" />
               )}
            </div>
            <Button type="primary" loading={isLoading} onClick={() => {
               if (isConnected) handleClose()
               else handleConnect()
            }} >
               {isConnected ? "Салгах" : "Холбох"}
            </Button>
         </div>
         <Spin spinning={isLoading} tip="Уншиж байна...">
            <div className='flex flex-col gap-2 items-center'>
               {receivedData ? <img style={{
                  height: 160,
                  width: 120
               }} src={`data:image/jpeg;base64,${receivedData}`} alt="fingerTouch" /> : null}
               <Button className="w-full flex flex-row gap-2 justify-center items-center" disabled={!isConnected} loading={isLoading} onClick={() => {
                  handleSendData()
               }}>
                  <img src={FingerIcon} className={!isConnected ? 'fingerImg disabled' : 'fingerImg'} alt="finger" />
                  <p className="font-bold">Хуруу уншуулах</p>
               </Button>
            </div>
         </Spin>
      </div>
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
