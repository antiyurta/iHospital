import React from 'react';
import UTable from '../../UTable';

const column = [
   {
      index: 'name',
      label: 'Нэр',
      isView: true,
      input: 'input',
      rules: [
         {
            required: true,
            message: 'Хоосон байж болохгүй'
         }
      ],
      col: 24
   },
   {
      index: 'inspectionPrice',
      label: 'Үзлэгийн үнэ',
      isView: true,
      input: 'inputNumber',
      rules: [
         {
            required: true,
            message: 'Хоосон байж болохгүй'
         }
      ],
      col: 24
   },
   {
      index: 'inspectionTwicePrice',
      label: 'Үзлэгийн үнэ давтан',
      isView: true,
      input: 'inputNumber',
      rules: [
         {
            required: true,
            message: 'Хоосон байж болохгүй'
         }
      ],
      col: 24
   },
   {
      index: 'emergencyPrice',
      label: 'Үзлэгийн үнэ яаралтай',
      isView: true,
      input: 'inputNumber',
      rules: [
         {
            required: true,
            message: 'Хоосон байж болохгүй'
         }
      ],
      col: 24
   }
];

function Degree() {
   return (
      <div className="flex flex-wrap">
         <div className="w-full">
            <UTable
               title={'Зэрэг'}
               url={'reference/degree'}
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
               column={column}
               width="50%"
            />
         </div>
      </div>
   );
}
export default Degree;
