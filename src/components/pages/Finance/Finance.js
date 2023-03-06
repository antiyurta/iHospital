import React from 'react';
import UTable from '../../UTable';
function Finance() {
   const column = [
      {
         index: 'm_id',
         label: 'барааны ДДД',
         isView: true,
         input: 'input',
         col: 24
      },
      {
         index: 'b_id',
         label: 'байгууллага ID',
         isView: true,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'barcode',
         label: 'барааны баркод',
         isView: true,
         input: 'input',
         col: 24
      },
      {
         index: 'm_name',
         label: 'барааны нэр',
         isView: true,
         input: 'input',
         col: 24
      },
      {
         index: 'e_name',
         label: 'гадаад нэр захиалгад хэрэглэх',
         isView: true,
         input: 'input',
         col: 24
      },
      {
         index: 'mark',
         label: 'марк',
         isView: false,
         input: 'input',
         col: 24
      },
      {
         index: 'seri',
         label: 'сери эмийн санд хэрэглэх',
         isView: false,
         input: 'input',
         col: 24
      },
      {
         index: 'xn',
         label: 'хэмжих нэгж',
         isView: true,
         input: 'input',
         col: 24
      },
      {
         index: 'dotcode',
         label: 'дотоод код',
         isView: true,
         input: 'input',
         col: 24
      },
      {
         index: 'shortname',
         label: 'богино нэр ПОС-н талонд хэрэглэх',
         isView: false,
         input: 'input',
         col: 24
      },
      {
         index: 'atype_id',
         label: 'барааны төрөл',
         isView: false,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'agroup_id',
         label: 'барааны бүлэг',
         isView: false,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'm_brand',
         label: 'брэнд',
         isView: false,
         input: 'input',
         col: 24
      },
      {
         index: 'm_infos',
         label: 'нэмэлт тайлбар техникийн үзүүлэлт',
         isView: false,
         input: 'textarea',
         col: 24
      },
      {
         index: 'salepercent',
         label: 'хөнгөлөлтийн хувь',
         isView: false,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'mincount',
         label: 'Нөөцийн доод хэмжээ',
         isView: false,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'nodiscount',
         label: 'хөнгөлөлт үзүүлэх боломжгүй (1) эсэх',
         isView: true,
         input: 'switch',
         col: 24
      },
      {
         index: 'clientname',
         label: 'нийлүүлэгчийн нэр',
         isView: false,
         input: 'input',
         col: 24
      },
      {
         index: 'm_cost',
         label: 'нэгжийн өртөг дундаж',
         isView: true,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'price_low',
         label: 'үнэ',
         isView: true,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'price_big',
         label: 'бөөний үнэ',
         isView: true,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'price_lowV',
         label: 'үнэ валютаар',
         isView: false,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'price_bigV',
         label: 'бөөний үнэ валютаар',
         isView: false,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'sale_priority',
         label: 'борлуулалтын зэрэг',
         isView: false,
         input: 'input',
         col: 24
      },
      {
         index: 'm_mass',
         label: 'барааны жин',
         isView: false,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'pcount',
         label: 'бөөний тоо',
         isView: true,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'pcount_n',
         label: 'багцын тоо',
         isView: false,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'whcode',
         label: 'байршил',
         isView: false,
         input: 'input',
         col: 24
      },
      {
         index: 'regdate',
         label: 'бүртгэсэн огноо',
         isView: false,
         input: 'date',
         col: 24
      },
      {
         index: 'enddate',
         label: 'дуусах хугацаа',
         isView: false,
         input: 'date',
         col: 24
      },
      {
         index: 'ratecode',
         label: 'ашиглахгүй',
         isView: false,
         input: 'input',
         col: 24
      },
      {
         index: 'checked',
         label: 'тэмдэглэгээ',
         isView: false,
         input: 'switch',
         col: 24
      },
      {
         index: 'd_code',
         label: 'код',
         isView: false,
         input: 'input',
         col: 24
      },
      {
         index: 'clid',
         label: 'нийлүүлэгчийн ДДД',
         isView: false,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'm_id2',
         label: 'өмнөх бүртгэлийн барааны ДДД',
         isView: false,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'ct_per',
         label: 'НХАТ-н хувь',
         isView: false,
         input: 'inputNumber',
         col: 24
      },
      {
         index: 'adate',
         label: 'огноо',
         isView: false,
         input: 'date',
         col: 24
      },
      {
         index: 'updatePrice',
         label: 'шинэслэсэн огноо',
         isView: true,
         input: 'date',
         col: 24
      },
      {
         index: 't_sent',
         label: 'илгээсэн эсэх',
         isView: false,
         input: 'switch',
         col: 24
      },
      {
         index: 't_get',
         label: 'татсан эсэх',
         isView: false,
         input: 'switch',
         col: 24
      }
      // {
      //     index: "taxtype",
      //     label: "татварын төрөл",
      //     isView: true,
      //     input: "switch",
      //     col: 24,
      // },
   ];
   return (
      <>
         <UTable
            title={'Finance'}
            url={'finance/material'}
            column={column}
            width="30%"
            isCreate={true}
            isRead={true}
            isUpdate={true}
            isDelete={true}
            passParam={'m_id'} //Засах, Устгах үйлдлийн Service рүү дамжуулах парам
         />
      </>
   );
}
export default Finance;
