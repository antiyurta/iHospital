import React, { useEffect, useState } from 'react';
import UTable from '../../UTable';
//api
import CountryApi from '@ApiServices/reference/country';
function CountryDictionary() {
   const [provice, setProvice] = useState([]);
   const [country, setCountry] = useState([]);
   const getProvice = async () => {
      await CountryApi.getByPageFilter({
         params: {
            type: 2
         }
      })
         .then(({ data: { response } }) => {
            setProvice(response.data);
         })
         .catch(() => {
            console.log('dasd');
         });
   };
   const getCountry = async () => {
      await CountryApi.getByPageFilter({
         params: {
            type: 1
         }
      })
         .then(({ data: { response } }) => {
            setCountry(response.data);
         })
         .catch(() => {
            console.log('dasd');
         });
   };

   useEffect(() => {
      getProvice();
      getCountry();
   }, []);

   const CountryColumn = [
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
         index: 'parentId',
         label: 'Эцэг',
         isView: false,
         input: 'select',
         inputData: [
            {
               id: 1,
               label: 'Улс'
            }
         ],
         relIndex: 'label',
         col: 24
      },
      {
         index: 'position',
         label: 'Байрлал',
         isView: true,
         input: 'numberInput',
         col: 24
      },
      {
         index: 'type',
         label: 'Төрөл',
         isView: false,
         input: 'select',
         inputData: [
            {
               id: 1,
               label: 'Улс'
            }
         ],
         relIndex: 'label',
         col: 24
      }
   ];
   const ProviceColumn = [
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
         index: 'parentId',
         label: 'Эцэг',
         isView: true,
         input: 'select',
         inputData: country,
         relIndex: 'name',
         col: 24
      },
      {
         index: 'position',
         label: 'Байрлал',
         isView: true,
         input: 'numberInput',
         col: 24
      },
      {
         index: 'type',
         label: 'Төрөл',
         isView: false,
         input: 'select',
         inputData: [
            {
               id: 2,
               label: 'Аймаг / Дүүрэг'
            }
         ],
         relIndex: 'label',
         col: 24
      }
   ];
   const TownColumn = [
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
         index: 'parentId',
         label: 'Эцэг',
         isView: true,
         input: 'select',
         inputData: provice,
         relIndex: 'name',
         col: 24
      },
      {
         index: 'position',
         label: 'Байрлал',
         isView: true,
         input: 'numberInput',
         col: 24
      },
      {
         index: 'type',
         label: 'Төрөл',
         isView: false,
         input: 'select',
         inputData: [
            {
               id: 3,
               label: 'Сум/Дүүрэг'
            }
         ],
         relIndex: 'label',
         col: 24
      }
   ];
   const countryParams = {
      params: {
         type: 1
      }
   };
   const ProviceParams = {
      params: {
         type: 2
      }
   };
   const TownParams = {
      params: {
         type: 3
      }
   };
   return (
      <div className="flex flex-wrap">
         <div className="lg:w-1/2 md:w-full p-1">
            <UTable
               title={'Улс'}
               url={'reference/country'}
               params={countryParams}
               column={CountryColumn}
               width="50%"
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
            />
         </div>
         <div className="lg:w-1/2 md:w-full p-1">
            <UTable
               title={'Аймаг/ Хот'}
               url={'reference/country'}
               params={ProviceParams}
               column={ProviceColumn}
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
               width="50%"
            />
         </div>
         <div className="lg:w-1/2 md:w-full p-1">
            <UTable
               title={'Сум / Дүүрэг'}
               url={'reference/country'}
               params={TownParams}
               column={TownColumn}
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
               width="50%"
            />
         </div>
      </div>
   );
}
export default CountryDictionary;
