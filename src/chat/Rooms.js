import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../features/AuthContext';
import ChatService from '../services/chat/chat';
import Room from './Room';

const Rooms = ({ isExpand, isRender, isReloadRoom, backSetIsReloadRoom, findUserInfo }) => {
   const { user } = useContext(AuthContext);
   const [activeMyRooms, setActiveMyRooms] = useState([]);
   const [hidedMyRooms, setHidedMyRooms] = useState([]);
   const getRooms = async () => {
      await ChatService.getRooms(user.userId).then(async (response) => {
         const rooms = response.data.response.rooms;
         setActiveMyRooms(rooms.filter((room) => room.room.isActive && !room.room.isHide));
         setHidedMyRooms(rooms.filter((room) => room.room.isHide));
      });
   };
   const showRoom = async (roomId) => {
      await ChatService.updateRoom(roomId, {
         isHide: false
      }).then(() => {
         getRooms();
      });
   };
   useEffect(() => {
      getRooms();
   }, [isRender]);
   useEffect(() => {
      if (isReloadRoom) {
         getRooms();
         backSetIsReloadRoom({
            state: false
         });
      }
   }, [isReloadRoom]);
   return (
      <>
         <div
            style={{
               position: 'absolute',
               bottom: 0,
               right: isExpand ? 300 : 65,
               height: 400,
               display: 'flex',
               flexDirection: 'row',
               gap: 3,
               maxWidth: 1200
            }}
         >
            {activeMyRooms?.map((myRoom, index) => {
               return <Room key={index} room={myRoom.room} findUserInfo={findUserInfo} getRooms={getRooms} />;
            })}
         </div>
         <div>
            {hidedMyRooms?.map((hidedRoom, index) => {
               return (
                  <div key={index} onClick={() => showRoom(hidedRoom.room._id)}>
                     {hidedRoom.room._id}
                  </div>
               );
            })}
         </div>
      </>
   );
};
export default Rooms;
