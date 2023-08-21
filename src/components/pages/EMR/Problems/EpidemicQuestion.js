import React from 'react';

export default function EpidemicQuestion(props) {
   return (
      <div>
         {props.data?.hasOwnProperty('isTravel') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Сүүлийн 3-6 сарын дотор гадны улсад зорчсон уу:</p>
               <p className="">{props.data['isTravel'] ? 'Тийм' : 'Үгүй'}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('travelDesc') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Ямар зорилгоор: </p>
               <p className="">{props.data['travelDesc']}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('isUseBlood') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Сүүлийн 3-6 сарын дотор цус цусан бүтээгдэхүүн сэлбүүлсэн үү:</p>
               <p className="">{props.data['isUseBlood'] ? 'Тийм' : 'Үгүй'}</p>
            </div>
         ) : null}
      </div>
   );
}
