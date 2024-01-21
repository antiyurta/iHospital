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
      input: 'numberInput',
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
      input: 'numberInput',
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
      input: 'numberInput',
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
      <div className="w-full bg-[#f5f6f7] p-3">
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
   );
}
export default Degree;
