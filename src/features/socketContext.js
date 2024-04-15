import React, { createContext, useContext, useEffect, useState } from 'react';
import { openNofi } from '../components/common';
import socketio from 'socket.io-client';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
   const [isLoadingSockets, setLoadingSockets] = useState({});
   const [isConnectedSockets, setConnectedSockets] = useState({});
   const [receivedDatas, setReceivedDatas] = useState({});
   const [webSockets, setWebSockets] = useState({});
   const [socketIOs, setSocketIOs] = useState({});

   const createData = (name, data) => {
      setReceivedDatas((prevReceived) => ({
         ...prevReceived,
         [name]: data
      }));
   };

   const createLoading = (name) => {
      setLoadingSockets((prevLoadingSockets) => ({
         ...prevLoadingSockets,
         [name]: true
      }));
   };
   const createConnected = (name) => {
      setConnectedSockets((prevConnectedSockets) => ({
         ...prevConnectedSockets,
         [name]: true
      }));
   };
   const createWebSocket = (url, name) => {
      createLoading(name);
      //SOCKET
      const newSocket = new WebSocket(url);
      setWebSockets((prevWebSockets) => ({
         ...prevWebSockets,
         [name]: newSocket
      }));
   };
   const createSocketIO = (url, name) => {
      createLoading(name);
      let tokens = JSON.parse(localStorage.getItem('tokens'));
      const newSocket = socketio.connect(url, {
         auth: {
            token: `${tokens?.accessToken}`
         },
         transports: ['websocket', 'polling']
      });
      setSocketIOs((prevSocketIOs) => ({
         ...prevSocketIOs,
         [name]: newSocket
      }));
   };
   //
   const sendDataWebSocketByName = (name, body) => {
      const socket = webSockets[name];
      if (socket && socket.readyState === WebSocket.OPEN) {
         createLoading(name);
         socket.send(JSON.stringify(body));
      }
   };
   //
   const removeConnectedByName = (name) => {
      setConnectedSockets((prevConnectedSockets) => ({
         ...prevConnectedSockets,
         [name]: false
      }));
   };
   const removeLoadingByName = (name) => {
      setLoadingSockets((prevLoadingSockets) => ({
         ...prevLoadingSockets,
         [name]: false
      }));
   };
   const removeWebSocketByName = (name) => {
      const { [name]: removedSocket, ...rest } = webSockets;
      if (removedSocket) {
         removeConnectedByName(name);
         removedSocket.close();
         setWebSockets(rest);
      }
   };

   useEffect(() => {
      Object.entries(webSockets)?.map(([name, socket]) => {
         if (socket) {
            socket.addEventListener('open', () => {
               console.log(`${name} WebSocket connected`);
               removeLoadingByName(name);
               createConnected(name);
            });
            socket.addEventListener('error', () => {
               console.log(`${name} WebSocket error`);
               openNofi('error', 'Алдаа', 'Socket холбогдож чадсангүй АДМИН-тай холбоо барина уу');
               socket.close();
            });
            socket.addEventListener('close', () => {
               console.log(`${name} WebSocket close`);
               removeConnectedByName(name);
               removeLoadingByName(name);
            });
            socket.addEventListener('message', async (event) => {
               const message = JSON.parse(event.data);
               createData(name, message);
               removeLoadingByName(name);
            });
         }
         return () => {
            if (socket) {
               socket.addEventListener('open', () => {
                  console.log(`${name} WebSocket2 connected`);
               });
               socket.addEventListener('error', () => {
                  console.log(`${name} WebSocket2 error`);
               });
               socket.addEventListener('close', () => {
                  console.log(`${name} WebSocket2 close`);
               });
            }
         };
      });
   }, [webSockets]);

   useEffect(() => {
      Object.entries(socketIOs)?.map(([name, socketIO]) => {
         socketIO.on('connect', () => {
            removeLoadingByName(name);
            console.log(`Connected to ${name} Socket.IO server`);
            createConnected(name);
         });
         if (!socketIO.connected) {
            removeLoadingByName(name);
         }
         socketIO.on('disconnect', () => {
            console.log('Disconnected from Socket.IO server');
         });
      });
   }, [socketIOs]);

   return (
      <SocketContext.Provider
         value={{
            createWebSocket,
            createSocketIO,
            removeWebSocketByName,
            isLoadingSockets,
            isConnectedSockets,
            receivedDatas,
            sendDataWebSocketByName
         }}
      >
         {children}
      </SocketContext.Provider>
   );
};

export const useSocketContext = () => {
   return useContext(SocketContext);
};
