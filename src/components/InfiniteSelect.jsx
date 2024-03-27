import React, { useEffect, useState } from 'react';
import { Divider, Form, List, Select } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

const { Option } = Select;

const InfiniteSelect = ({ isRender }) => {
   const [data, setData] = useState([
      {
         name: 1,
         id: 1
      },
      {
         name: 2,
         id: 2
      }
   ]);
   const [meta, setMeta] = useState({
      page: 1,
      limit: 10,
      hasNextPage: false
   });
   const [loading, setLoading] = useState(false);
   const loadMoreData = async (page) => {
      console.log('[age');
      if (loading) {
         return;
      }
      //   setLoading(true);
      //   await ChatService.getOnlineUsers({ page: page, limit: 2 })
      //      .then((response) => {
      //         const data = response.data?.response?.data?.filter((usr) => usr.id != user.userId);
      //         if (page === 1) {
      //            setUsers(data);
      //         } else {
      //            setUsers([...users, ...data]);
      //         }
      //         setMeta(response.data?.response.meta);
      //         setLoading(false);
      //      })
      //      .catch(() => {
      //         setLoading(false);
      //      });
   };
   useEffect(() => {
      if (isRender) {
         loadMoreData(1);
      }
   }, [isRender]);
   const DropDownRender = ({ menu }) => (
      <InfiniteScroll
         dataLength={data.length}
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
         {menu}
         {/* <List
            dataSource={data}
            renderItem={(item) => (
               <List.Item
                  key={item.email}
                  //   onClick={() => createRoom(item.id)}
                  className="p-3 hover:cursor-pointer hover:bg-red-50"
               >
                  asdas
               </List.Item>
            )}
         /> */}
      </InfiniteScroll>
   );
   return (
      <Form.Item label="Test" name="test">
         <Select
            style={{
               width: 250
            }}
            dropdownRender={(menu) => <DropDownRender menu={menu} />}
            options={data?.map((item) => ({
               label: item.name,
               value: item.id
            }))}
         />
      </Form.Item>
   );
};
export default InfiniteSelect;
