import React, { useEffect, useState } from 'react';
import { Badge, Button, Modal } from 'antd';
import { openNofi } from '../components/comman';

function Finger({ handleClick }) {
   const socketUrl = 'ws://127.0.0.1:5021/FingerService';
   const [socket, setSocket] = useState(null);
   const [isOpenFingerModal, setIsOpenFingerModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [isLoadingFetchData, setIsLoadingFetchData] = useState(false);
   const [isConnected, setIsConnected] = useState(false);
   const [receivedData, setReceivedData] = useState('');

   useEffect(() => {
      if (socket) {
         socket.addEventListener('open', handleOpen);
         socket.addEventListener('error', handleError);
         socket.addEventListener('close', handleClose);
         socket.addEventListener('message', (event) => {
            const message = JSON.parse(event.data);
            setReceivedData(message.result);
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
   }, [socket]);
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
            command: 'Read',
            Parameters: null
         };
         socket.send(JSON.stringify(message));
      }
   };
   useEffect(() => {
      if (isOpenFingerModal) {
         handleConnect();
         setReceivedData('');
      }
   }, [isOpenFingerModal]);
   return (
      <>
         <Button type="primary" onClick={() => setIsOpenFingerModal(true)}>
            Даатгал шалгах
         </Button>
         <Modal
            title="Хуруу уншуулах"
            open={isOpenFingerModal}
            onCancel={() => {
               setIsOpenFingerModal(false);
               handleClose();
            }}
            okButtonProps={{
               disabled: !isConnected
            }}
            onOk={() => {
               if (receivedData.data) {
                  handleClick(receivedData.data);
                  handleClose();
                  setIsOpenFingerModal(false);
               } else {
                  openNofi('warning', 'Анхааруулга', 'Хуруу хээ уншуулна уу');
               }
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
                        {receivedData ? (
                           <img src={`data:image/jpeg;base64,${receivedData.image}`} alt="finger" />
                        ) : null}
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </>
   );
}
export default Finger;
