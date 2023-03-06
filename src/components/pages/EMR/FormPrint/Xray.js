import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';
import logo from '../../../../assets/logo/universal.png';
import { Button } from 'antd';
import { useReactToPrint } from 'react-to-print';
function Xray({ printData, printSize }) {
   const printRef = useRef();
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [patientInfo, setPatientInfo] = useState([]);
   const [doctorId, setDoctorId] = useState([]);
   const getPatientInfo = async (patientId) => {
      const response = await Get('pms/patient/' + patientId, token, config);
      setPatientInfo(response);
   };
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   const RenderHTML = (data) => {
      return Object.entries(data.data).map(([key, value], index) => {
         return (
            <div key={index} className="inline-flex">
               <p className="font-semibold mx-2">{key}: </p>
               {Object.values(value).map((elValues, index) => {
                  return typeof elValues === 'string' ? (
                     <p key={index}>{elValues}</p>
                  ) : (
                     <div key={index}>
                        {elValues.map((el, index) => {
                           return <p key={index}>{el}</p>;
                        })}
                     </div>
                  );
               })}
            </div>
         );
      });
   };
   useEffect(() => {
      getPatientInfo(printData.patientId);
   }, [printData]);
   return (
      <>
         <div ref={printRef}>
            <div className="m-4">
               <div className="flex flex-wrap">
                  <div className="basis-1/2">
                     <img src={logo} />
                  </div>
               </div>
               <div className="flex flex-row">
                  <div className="basis-1/2 ml-6">
                     <div className="flex">
                        <p className="font-semibold mr-2">Эцэг эхийн нэр:</p>
                        <p className="pr-3">{patientInfo.lastName}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">РД:</p>
                        <p className="pr-3">{patientInfo.registerNumber}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">Хүйс:</p>
                        <p className="pr-3">{patientInfo.genderType}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">Тогтмол хаяг:</p>
                        <p className="pr-3">{patientInfo.address}</p>
                     </div>
                  </div>
                  <div className="basis-1/2 ml-6">
                     <div className="flex">
                        <p className="font-semibold mr-2">Нэр:</p>
                        <p className="pr-3">{patientInfo.firstName}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">Нас:</p>
                        <p className="pr-3">{patientInfo.age}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">Утас:</p>
                        <p className="pr-3">{patientInfo.phoneNo}</p>
                     </div>
                  </div>
               </div>
               <p
                  className="text-center py-10"
                  style={{ fontSize: '25px', fontWeight: 'bold' }}
               >
                  {printData?.xrays?.name}
               </p>
               {printData?.inspectionNotes?.map((note, index) => {
                  return (
                     <div key={index}>
                        <RenderHTML data={JSON.parse(note.conclusion)} />
                        <br />
                        <RenderHTML data={JSON.parse(note.advice)} />
                     </div>
                  );
               })}
               <p
                  className="text-center"
                  style={{ fontSize: '15px', fontWeight: 'bold' }}
               >
                  Дүгнэлт бичсэн эмч: {printData.employees?.firstName}
               </p>
            </div>
         </div>
         <Button type="primary" onClick={handlePrint}>
            Хэвлэх
         </Button>
      </>
   );
}
export default Xray;
