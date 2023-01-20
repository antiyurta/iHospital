import React from 'react';

export default function Birth(props) {
   return (
      <div>
         {props.data?.hasOwnProperty('birthDate') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Хэдэн онд: </p>
               <p className="">{props.data['birthDate']?.substr(0, 10)}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('locate') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Хаана: </p>
               <p className="">{props.data['locate']}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('whatBorn') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Яаж төрсөн: </p>
               <p className="">
                  {props.data['whatBorn']
                     ? 'Кесар хагалгаагаар'
                     : 'Төрөх замаар'}
               </p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('stateTime') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Хугацаандаа: </p>
               <p className="">
                  {props.data['stateTime'] === '0' && 'Хугацаандаа'}
                  {props.data['stateTime'] === '1' && 'Дутуу'}
                  {props.data['stateTime'] === '2' && 'Илүү'}
               </p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('fewWeeks') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Хэдэн долоо хоног: </p>
               <p className="">{props.data['fewWeeks']}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('whatBorn') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Бага насны өсөлт, бойжилт: </p>
               <p className="">
                  {props.data['whatBorn'] === 'NORMAL'
                     ? 'Хэвийн'
                     : 'Хэвийн бус'}
               </p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('isKindergarden') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Цэцэрлэгт явсан эсэх: </p>
               <p className="">
                  {props.data['isKindergarden'] ? 'Тийм' : 'Үгүй'}
               </p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('isSchool') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Сургуульд сурсан эсэх: </p>
               <p className="">{props.data['isSchool'] ? 'Тийм' : 'Үгүй'}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('isVaccination') ? (
            <div className="flex">
               <p className="font-semibold mr-2">
                  Товлолын дагуу вакцинууддаа хамрагдсан эсэх:
               </p>
               <p className="">
                  {props.data['isVaccination'] ? 'Тийм' : 'Үгүй'}
               </p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('painChildhood') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Багадаа өвдсөн өвчин: </p>
               <p className="">{props.data['painChildhood']}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('height') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Биеийн өндөр (см): </p>
               <p className="">{props.data['height']}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('weight') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Биеийн жин (кг): </p>
               <p className="">{props.data['weight']}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('systol') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Систол даралт: </p>
               <p className="">{props.data['systol']}</p>
            </div>
         ) : null}
         {props.data?.hasOwnProperty('distol') ? (
            <div className="flex">
               <p className="font-semibold mr-2">Диастол даралт: </p>
               <p className="">{props.data['distol']}</p>
            </div>
         ) : null}
      </div>
   );
}
