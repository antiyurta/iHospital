import React from 'react';
//img
import { biometerImg } from '@Assets/index';

const Viewer = ({ receivedData }) => {
   return (
      <div className="border border-[#d9d9d9] rounded-md">
         {receivedData ? (
            <img
               style={{
                  height: 160,
                  width: 120
               }}
               src={`data:image/jpeg;base64,${receivedData}`}
               alt="bio"
            />
         ) : (
            <img
               style={{
                  opacity: '0.6',
                  height: 160,
                  width: 160
               }}
               src={biometerImg}
               alt="bio"
            />
         )}
      </div>
   );
};
export default Viewer;
