import React, { useContext, useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button, Spin, Input, List } from 'antd';
import { useSelector } from 'react-redux';
import { selectAuthReducer } from '@Features/authReducer';
//comp
import Rooms from '@Chat/Rooms';
import ListUserInfo from '@Chat/ListUserInfo';
//imgs
import { expandIconChat } from '@Assets/index';
import { DashOutlined, ReloadOutlined, SearchOutlined } from '@ant-design/icons';
//context
import { useSocketContext } from '@Features/socketContext';
import AuthContext from '@Features/AuthContext';
//api
import ChatService from '@ApiServices/chat/chat';
//defaults
// const socketUrl = 'https://www.ihospital.mn/';
const socketUrl = undefined;

const ChatLayout = () => {
   const { user } = useContext(AuthContext);
   const { firstName, lastName, phoneNo } = useSelector(selectAuthReducer);
   const [isReloadRoom, setIsReloadRoom] = useState(false);
   const [isReload, setReload] = useState(false);
   const [isExpand, setExpand] = useState(false);
   const [users, setUsers] = useState([]);
   const [meta, setMeta] = useState({
      page: 1,
      limit: 2
   });
   const { createSocketIO, isConnectedSockets, isLoadingSockets } = useSocketContext();

   const isLoading = useMemo(() => {
      return isLoadingSockets?.['chatSocket'] || false;
   }, [isLoadingSockets]);

   const isConnected = useMemo(() => {
      return isConnectedSockets?.['chatSocket'] || false;
   }, [isConnectedSockets]);

   const loadMoreData = async (page) => {
      await ChatService.getOnlineUsers({ page: page, limit: 2 }).then(({ data: { response } }) => {
         const data = response.data?.filter((usr) => usr.id != user.userId);
         if (page === 1) {
            setUsers(data);
         } else {
            setUsers([...users, ...data]);
         }
         setMeta(response.meta);
      });
   };
   const findUserInfo = (userId) => {
      return users.find((user) => user.id === userId);
   };
   const showRoom = async (roomId) => {
      await ChatService.updateRoom(roomId, {
         isActive: true
      }).then(() => {
         setIsReloadRoom(true);
      });
   };
   const createRoom = async (userId) => {
      await ChatService.postRoom({
         name: 'test',
         path: 'hi test hiij bna',
         users: [userId, user.userId]
      }).then((response) => {
         if (response.data.status === 200) {
            if (response.data.response?.length > 0) {
               showRoom(response.data.response[0]._id);
            } else {
               showRoom(response.data.response._id);
            }
         }
      });
   };

   useEffect(() => {
      createSocketIO(socketUrl, 'chatSocket');
   }, [isReload]);

   useEffect(() => {
      isConnected && loadMoreData(1);
   }, [isConnected]);

   return (
      <Spin spinning={isLoading}>
         <section className={isExpand ? 'chat-layout expanded' : 'chat-layout'}>
            {isConnected ? (
               <div className="test">
                  <div className="header">
                     <div className="flex flex-row gap-3">
                        <img
                           className="w-8 h-8 hover:cursor-pointer"
                           src={expandIconChat}
                           onClick={() => {
                              setExpand(!isExpand);
                           }}
                           alt="expandIcon"
                        />
                        {isExpand ? <p className="text-[#86909C] text-[20px] font-normal">Мессежүүд</p> : null}
                     </div>
                     {isExpand ? <DashOutlined className="text-lg" rotate={90} /> : null}
                  </div>
                  <ListUserInfo
                     isExpand={isExpand}
                     user={{
                        lastName: lastName,
                        firstName: firstName,
                        phoneNo: phoneNo
                     }}
                  />
                  <div className="bg-[#E5E6EB] h-[1px] w-full" />
                  <Input prefix={<SearchOutlined />} placeholder="Хайх..." />
                  <div id="scrollableDiv" className="h-full w-full overflow-auto">
                     <InfiniteScroll
                        dataLength={users.length}
                        next={() => loadMoreData(Number(meta.page) + 1)}
                        hasMore={meta.hasNextPage}
                        scrollableTarget="scrollableDiv"
                     >
                        <List
                           locale={{
                              emptyText: ' '
                           }}
                           dataSource={users}
                           renderItem={(item) => (
                              <List.Item
                                 key={item.email}
                                 onClick={() => createRoom(item.id)}
                                 className="hover:cursor-pointer hover:bg-red-50"
                              >
                                 <ListUserInfo
                                    isExpand={isExpand}
                                    user={{
                                       lastName: item.lastName,
                                       firstName: item.firstName,
                                       phoneNo: item.phoneNo || item.email
                                    }}
                                 />
                              </List.Item>
                           )}
                        />
                     </InfiniteScroll>
                     <Rooms
                        isExpand={isExpand}
                        isRender={isConnected}
                        isReloadRoom={isReloadRoom}
                        backSetIsReloadRoom={(props) => setIsReloadRoom(props.state)}
                        findUserInfo={findUserInfo}
                     />
                  </div>
               </div>
            ) : (
               <Button
                  icon={<ReloadOutlined />}
                  onClick={() => {
                     setReload(!isReload);
                  }}
               />
            )}
         </section>
      </Spin>
   );
};
export default ChatLayout;
