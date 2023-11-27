import React, { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Button, Divider, Input, List, Result } from 'antd';

import ChatService from '../services/chat/chat';
import { UserOutlined } from '@ant-design/icons';
import AuthContext from '../features/AuthContext';
import Rooms from './Rooms';

function ListIndex(props) {
   const { isRender, isConnected, refresh } = props;
   const { user } = useContext(AuthContext);
   const [isReloadRoom, setIsReloadRoom] = useState(false);
   const [loading, setLoading] = useState(false);
   const [users, setUsers] = useState([]);
   const [meta, setMeta] = useState({
      page: 1,
      limit: 2
   });

   const findUserInfo = (userId) => {
      return users.find((user) => user.id === userId);
   };
   const loadMoreData = async (page) => {
      if (loading) {
         return;
      }
      setLoading(true);
      await ChatService.getOnlineUsers({ page: page, limit: 2 })
         .then((response) => {
            const data = response.data?.response?.data?.filter((usr) => usr.id != user.userId);
            if (page === 1) {
               setUsers(data);
            } else {
               setUsers([...users, ...data]);
            }
            setMeta(response.data?.response.meta);
            setLoading(false);
         })
         .catch(() => {
            setLoading(false);
         });
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
      if (isRender) {
         loadMoreData(1);
      }
   }, [isRender]);
   return (
      <>
         {isConnected ? (
            <div>
               <div>
                  <div className="p-3">
                     <Input className="rounded-full" placeholder="Хайх" />
                  </div>
                  <div className="px-3">
                     <div
                        id="scrollableDiv"
                        style={{
                           height: '100%',
                           overflow: 'auto'
                        }}
                     >
                        <InfiniteScroll
                           dataLength={users.length}
                           next={() => loadMoreData(Number(meta.page) + 1)}
                           hasMore={meta.hasNextPage}
                           //   loader={
                           //      <Skeleton
                           //         avatar
                           //         paragraph={{
                           //            rows: 1
                           //         }}
                           //         active
                           //      />
                           //   }
                           endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                           scrollableTarget="scrollableDiv"
                        >
                           <List
                              dataSource={users}
                              renderItem={(item) => (
                                 <List.Item
                                    key={item.email}
                                    onClick={() => createRoom(item.id)}
                                    className="p-3 hover:cursor-pointer hover:bg-red-50"
                                 >
                                    <List.Item.Meta
                                       avatar={<Avatar size={48} icon={<UserOutlined />} />}
                                       title={
                                          <p className="whitespace-nowrap">{item.lastName + ' ' + item.firstName}</p>
                                       }
                                       description={item.email}
                                    />
                                 </List.Item>
                              )}
                           />
                        </InfiniteScroll>
                     </div>
                  </div>
               </div>
               <Rooms
                  render={isRender}
                  isReloadRoom={isReloadRoom}
                  backSetIsReloadRoom={(props) => setIsReloadRoom(props.state)}
                  findUserInfo={findUserInfo}
               />
            </div>
         ) : (
            <Result
               title="Your operation has been executed"
               extra={
                  <Button type="primary" key="console" onClick={() => refresh()}>
                     Дахин ачааллах
                  </Button>
               }
            />
         )}
      </>
   );
}
export default ListIndex;
