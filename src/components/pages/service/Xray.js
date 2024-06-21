import React, { useEffect, useState } from 'react';
//comp
import UTable from '../../UTable';
//api
import deviceApi from '@ApiServices/device.api';
import careTypeApi from '@ApiServices/reference/care-type.api';
import healtInsurance from '@ApiServices/healt-insurance/healtInsurance';
function Xray() {
   const [xrayTypeData, setXrayTypeData] = useState([]);
   const [devices, setDevices] = useState([]);
   const [hicsExams, setHicsExams] = useState([]);
   const getXrayTypeData = async () => {
      await careTypeApi
         .get({
            type: 1
         })
         .then(({ data: { response } }) => {
            setXrayTypeData(response.data);
         });
   };
   const getDevices = async () => {
      await deviceApi.get({}).then(({ data: { response } }) => {
         setDevices(response.data);
      });
   };
   const getHicsExams = async () => {
      await healtInsurance.getHicsExam().then(({ data }) => {
         if (data.code === 200) {
            setHicsExams(data.result);
         }
      });
   };

   useEffect(() => {
      getDevices();
      getXrayTypeData();
      getHicsExams();
   }, []);
   const column = [
      {
         index: 'xrayTypeId',
         label: 'Оношилгооны төрөл',
         isView: false,
         input: 'select',
         inputData: xrayTypeData,
         relIndex: 'name',
         col: 21
      },
      {
         label: 'Оношилгоо төрөл',
         isAdd: true,
         isView: false,
         index: 'name',
         type: 1,
         subInput: 'input',
         col: 3
      },
      {
         index: 'name',
         label: 'Нэр',
         isView: true,
         isSearch: true,
         input: 'input',
         col: 24
      },
      {
         index: 'deviceId',
         label: 'Төхөөрөмж сонгох',
         isView: true,
         isSearch: false,
         input: 'select',
         inputData: devices,
         relIndex: 'name',
         col: 24
      },
      {
         index: 'slotMinute',
         label: 'Үргэлжлэх хугацаа(МИН)',
         isView: true,
         isSearch: false,
         input: 'numberInput',
         col: 24
      },
      {
         index: 'isInsurance',
         label: 'Даатгал',
         isView: true,
         isSearch: false,
         input: 'switch',
         col: 12
      },
      {
         index: 'isActive',
         label: 'Идэвхтэй эсэх',
         isView: true,
         isSearch: false,
         input: 'switch',
         col: 12
      },
      {
         index: 'price',
         label: 'Үнэ',
         isView: true,
         isSearch: false,
         input: 'numberInput',
         col: 12
      },
      {
         index: 'inpatientPrice',
         label: 'Хэвтэн үнэ',
         isView: true,
         isSearch: false,
         input: 'numberInput',
         col: 12
      },
      {
         index: 'drgCode',
         label: 'DRGCODE',
         isView: true,
         isSearch: false,
         input: 'input',
         col: 12
      },
      {
         index: 'drgTypeCode',
         label: 'drgTypeCode',
         isView: true,
         isSearch: false,
         input: 'select',
         input: 'numberInput',
         col: 12
      }
   ];
   return (
      <div className="w-full bg-[#f5f6f7] p-3">
         <UTable
            title={'Оношилгоо'}
            url={'service/xray'}
            column={column}
            isCreate={true}
            isRead={false}
            isUpdate={true}
            isDelete={true}
            refresh={getXrayTypeData}
            width="40%"
         />
      </div>
   );
}
export default Xray;
