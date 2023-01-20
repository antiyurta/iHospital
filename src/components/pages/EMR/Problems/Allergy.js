import React from 'react';

export default function Allergy(props) {
   return (
      <div>
         {props.data?.hasOwnProperty('isAllergy') ? (
            <div className="flex">
               <p className="font-semibold mr-2">
                  Ямар нэг зүйлд харшилдаг уу:{' '}
               </p>
               <p className="">{props.data['isAllergy'] ? 'Тийм' : 'Үгүй'}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('food') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Хүнс: </p>
               <p className="">{props.data['food']}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('medicine') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Эм: </p>
               <p className="">{props.data['medicine']}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('other') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Бусад бодис: </p>
               <p className="">{props.data['other']}</p>
            </div>
         ) : null}
      </div>
   );
}
