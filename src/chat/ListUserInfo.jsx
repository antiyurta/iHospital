import React from 'react';
import { Avatar } from 'antd';

const ListUserInfo = ({ isExpand, user }) => {
   return (
      <div className="flex flex-row gap-2 items-center">
         <Avatar size="large" />
         {isExpand ? (
            <div>
               <p className="text-[#1D2129] text-xl font-bold">{`${user?.firstName} ${user.lastName}`}</p>
               <p className="text-[#A9AEB8] text-base font-normal">{user.phoneNo}</p>
            </div>
         ) : null}
      </div>
   );
};
export default ListUserInfo;
