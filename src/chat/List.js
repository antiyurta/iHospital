import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Divider, Input, List, Skeleton } from 'antd';

import ChatService from '../services/chat/chat';
import { UserOutlined } from '@ant-design/icons';
function ListIndex(props) {
   const { isRender } = props;
   const [loading, setLoading] = useState(false);
   const [users, setUsers] = useState([]);
   const [meta, setMeta] = useState({
      page: 1,
      limit: 2
   });
   const loadMoreData = async (page) => {
      if (loading) {
         return;
      }
      setLoading(true);
      await ChatService.getOnlineUsers({ page: page, limit: 2 })
         .then((response) => {
            if (page === 1) {
               setUsers(response.data?.response);
            } else {
               setUsers([...users, ...response.data?.response]);
            }
            setMeta(response.data?.page);
            setLoading(false);
         })
         .catch(() => {
            setLoading(false);
         });
   };
   useEffect(() => {
      if (isRender) {
         loadMoreData(1);
      }
   }, [isRender]);
   return (
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
                           onClick={() => console.log('=>', item)}
                           className="p-3 hover:cursor-pointer hover:bg-red-50"
                        >
                           <List.Item.Meta
                              avatar={<Avatar size={48} icon={<UserOutlined />} />}
                              title={<p className="whitespace-nowrap">{item.lastName + ' ' + item.firstName}</p>}
                              description={item.email}
                           />
                        </List.Item>
                     )}
                  />
               </InfiniteScroll>
            </div>
         </div>
      </div>
   );
}
export default ListIndex;
