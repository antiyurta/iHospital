import React, { useEffect, useState } from 'react';
import careTypeApi from '../../../services/reference/care-type.api';

export const ListCareType = ({ type, getTypeById }) => {
   const [types, setTypes] = useState([]);
   const getTypes = async () => {
      await careTypeApi.get({ type }).then(({ data }) => {
         setTypes(data.response.data);
      });
   };
   useEffect(() => {
      getTypes();
   }, []);
   return (
      <div className="flex flex-col gap-2">
         {types.map((type, index) => {
            return (
               <button
                  onClick={() => getTypeById(type.id)}
                  className="w-full bg-[#3d9970] text-white rounded-lg"
                  key={index}
               >
                  {type.name}
               </button>
            );
         })}
      </div>
   );
};
