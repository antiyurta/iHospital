import React, { useContext, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import ChatService from '../services/chat/chat';
import AuthContext from '../features/AuthContext';
import { formatNameForDoc } from '../components/common';
import { Avatar, Badge, Button } from 'antd';
import { CloseOutlined, MinusOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

const SOCKET_URL = 'https://ihospital.mn/';

import Taudio from './xaxa.mp3';

const Room = (props) => {
   const { room, findUserInfo, getRooms } = props;
   const { user } = useContext(AuthContext);
   const ref = useRef();
   const [messages, setMessages] = useState([]);
   const [inputValue, setInputValue] = useState('');
   const playSound = () => {
      // const audio = new Audio(Taudio);
      // audio.play();
   };
   const getCurrentRoomMessage = async (roomId) => {
      await ChatService.getRoomMessages(roomId, 1, 10).then((response) => {
         setMessages(response.data.response);
      });
   };
   const configHeader = (roomInfo) => {
      const roomUsers = roomInfo.roomUsers?.split(',')?.filter((userId) => user?.userId !== Number(userId));
      const users = roomUsers?.map((userId) => findUserInfo(Number(userId)));
      if (users?.length === 1)
         return (
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 12,
                  padding: 6,
                  alignItems: 'center'
               }}
            >
               <Badge dot status={roomInfo?.isOnline ? 'success' : 'error'}>
                  <Avatar size={36} icon={<UserOutlined />} />
               </Badge>
               <p
                  style={{
                     fontWeight: 'bold',
                     fontSize: 14
                  }}
               >
                  {formatNameForDoc(users[0]?.lastName, users[0]?.firstName)}
               </p>
            </div>
         );
      return (
         <p
            style={{
               fontWeight: 'bold',
               fontSize: 14
            }}
         >
            {roomInfo.name}
         </p>
      );
   };
   const Content = (props) => {
      const { message } = props;
      return (
         <div
            style={{
               display: 'flex',
               flexDirection: message.from === user.userId ? 'row-reverse' : 'row',
               alignSelf: 'center',
               gap: 3,
               padding: '6px 0px',
               width: '100%'
            }}
         >
            <Avatar />
            <div
               style={{
                  backgroundColor: message.from === user.userId ? '#40a9ff' : '#f0f0f0',
                  padding: 5,
                  borderRadius: 5
               }}
            >
               <p
                  style={{
                     maxWidth: 220,
                     color: message.from === user.userId ? 'white' : 'black'
                  }}
               >
                  {message.msg}
               </p>
            </div>
         </div>
      );
   };
   const deActiveRoom = async (roomId) => {
      await ChatService.updateRoom(roomId, {
         isActive: false
      }).then((response) => {
         if (response.data.status === 200) {
            getRooms();
         }
      });
   };
   const hideRoom = async (roomId) => {
      await ChatService.updateRoom(roomId, {
         isHide: true
      }).then((response) => {
         if (response.data.status === 200) {
            getRooms();
         }
      });
   };
   const sendMessage = (message, to) => {
      let tokens = JSON.parse(localStorage.getItem('tokens'));
      const socket = io.connect(SOCKET_URL, {
         auth: {
            token: `${tokens.accessToken}`
         },
         transports: ['websocket', 'polling']
      });
      socket.emit('send', {
         to: to,
         msg: message,
         msgType: 0
      });
      setInputValue('');
   };
   useEffect(() => {
      let tokens = JSON.parse(localStorage.getItem('tokens'));
      const socket = io.connect(SOCKET_URL, {
         auth: {
            token: `${tokens.accessToken}`
         },
         transports: ['websocket', 'polling']
      });
      socket.on('receive', async (roomId) => {
         console.log(roomId);
         if (roomId === room._id) {
            getCurrentRoomMessage(roomId);
            playSound();
         }
      });
      return () => {
         socket.disconnect();
      };
   }, []);
   useEffect(() => {
      getCurrentRoomMessage(room._id);
   }, []);
   useEffect(() => {
      if (messages && ref) {
         if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
         }
      }
   }, [messages]);
   return (
      <div
         style={{
            maxWidth: 300,
            minWidth: 300,
            backgroundColor: 'white',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            padding: 6,
            boxShadow: '0 12px 28px 0 rgba(0, 0, 0, 0.1),0 2px 4px 0 rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
         }}
      >
         <div
            style={{
               display: 'flex',
               flexDirection: 'row',
               justifyContent: 'space-between',
               alignItems: 'center',
               borderBottom: '1px solid black',
               minHeight: 49,
               maxHeight: 49
            }}
         >
            {configHeader(room)}
            <div>
               <Button
                  onClick={() => hideRoom(room._id)}
                  title="Нуух"
                  type="link"
                  icon={
                     <MinusOutlined
                        style={{
                           fontSize: 16
                        }}
                     />
                  }
               />
               <Button
                  onClick={() => deActiveRoom(room._id)}
                  title="Гарах"
                  type="link"
                  icon={
                     <CloseOutlined
                        style={{
                           fontSize: 16
                        }}
                     />
                  }
               />
            </div>
         </div>
         <div
            ref={ref}
            style={{
               overflowY: 'auto',
               marginBottom: 6
            }}
         >
            {messages?.map((message) => {
               return <Content key={message._id} message={message} />;
            })}
         </div>
         <div
            style={{
               display: 'flex',
               flexDirection: 'row',
               gap: 8
            }}
         >
            <TextArea
               value={inputValue}
               // rows={4}
               style={{
                  backgroundColor: '#F2F3F5'
               }}
               autoSize={{ minRows: 1, maxRows: 6 }}
               onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
               title="Илгээх"
               style={{
                  minHeight: '100%'
               }}
               type="primary"
               icon={
                  <SendOutlined
                     style={{
                        color: 'white',
                        fill: 'red'
                     }}
                  />
               }
               onClick={() => {
                  sendMessage(inputValue, room._id);
               }}
            />
         </div>
      </div>
   );
};
export default Room;
