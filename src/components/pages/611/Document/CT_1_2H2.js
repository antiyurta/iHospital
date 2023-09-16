import React from 'react';
import EarlyWarningPrint from '../../BeforeAmbulatory/EarlyWarningPrint';
function CT_1_2H2(props) {
   const {
      type,
      data: { formData, patientData },
      appointmentId,
      hospitalName
   } = props;
   console.log('=====', props);
   return (
      <>
         <div>
            <div className="">
               <div className="flow-root">
                  <div className="float-right">
                     <p>Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны</p>
                     <p>өдрийн A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
                     <p className="font-bold">Эрүүд мэндийн бүртгэлийн маягт CT-1,2 Хавсралт 2</p>
                  </div>
               </div>
               <p className="font-bold text-center" style={{ fontSize: 16 }}>
                  ЭМЧЛҮҮЛЭГЧИЙН АМИН ҮЗҮҮЛЭЛТИЙГ ХЯНАХ ХУУДАС
               </p>
               <div className="flow-root py-1">
                  <div className="float-left inline-flex">
                     <p
                        style={{
                           fontSize: 10,
                           fontWeight: 'bold'
                        }}
                     >
                        Эмчлүүлэгчийн овог, нэр:
                     </p>
                     <p
                        style={{
                           fontSize: 10,
                           fontWeight: 'bold'
                        }}
                     >
                        {patientData?.lastName.substring(0, 1) + '.' + patientData?.firstName}
                     </p>
                  </div>
                  <div className="float-right inline-flex">
                     <p
                        style={{
                           fontSize: 10,
                           fontWeight: 'bold'
                        }}
                     >
                        Нас:
                     </p>
                     <p
                        style={{
                           fontSize: 10,
                           fontWeight: 'bold'
                        }}
                     >
                        {patientData?.age}
                     </p>
                     <p
                        style={{
                           fontSize: 10,
                           fontWeight: 'bold'
                        }}
                        className="pl-1"
                     >
                        Хүйс:
                     </p>
                     <p
                        style={{
                           fontSize: 10,
                           fontWeight: 'bold'
                        }}
                     >
                        {patientData?.genderType === 'MAN' ? 'Эр' : 'Эм'}
                     </p>
                     <p
                        style={{
                           fontSize: 10,
                           fontWeight: 'bold'
                        }}
                        className="pl-1"
                     >
                        Тасаг:
                     </p>
                     <p
                        style={{
                           fontSize: 10,
                           fontWeight: 'bold'
                        }}
                     >
                        {/* {location?.state?.departmentName} */}
                     </p>
                     <p
                        style={{
                           fontSize: 10,
                           fontWeight: 'bold'
                        }}
                        className="pl-1"
                     >
                        Өрөө:
                     </p>
                     <p
                        style={{
                           fontSize: 10,
                           fontWeight: 'bold'
                        }}
                     >
                        {/* {location?.state?.roomNumber} */}
                     </p>
                  </div>
               </div>

               {/* <canvas
               className="absolute border-none p-0"
               style={{
                  marginTop: 99.2
               }}
               ref={vsCanvas}
            ></canvas> */}
               <EarlyWarningPrint />
            </div>
         </div>
      </>
   );
}
export default CT_1_2H2;
