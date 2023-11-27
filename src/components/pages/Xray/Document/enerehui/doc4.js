import React from 'react';
import { NewCheckbox, NewCheckboxGroup } from '../../../../Input/Input';

const Doc4 = (props) => {
   const { data, patient } = props;
   console.log(props);
   return (
      <div>
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               gap: 12
            }}
         >
            <p
               style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  textAlign: 'center'
               }}
            >
               Түрүү булчирхайн хэт авиан оношилгоо
            </p>
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
               }}
            >
               <p> Шинжлүүлэгчийн нэр:{patient.firstName}</p>
               <p>нас:{patient.age}</p>
            </div>
            <p>
               <span
                  style={{
                     fontWeight: 'bold'
                  }}
               >
                  Хэмжээ
               </span>
               : өргөн
               <span
                  style={{
                     textDecoration: 'underline'
                  }}
               >
                  {data?.['xray1']?.['0']?.['xray1.1']}
               </span>
               , урт
               <span
                  style={{
                     textDecoration: 'underline'
                  }}
               >
                  {data?.['xray1']?.['0']?.['xray1.2']}
               </span>
               , зузаан
               <span
                  style={{
                     textDecoration: 'underline'
                  }}
               >
                  {data?.['xray1']?.['0']?.['xray1.3']}
               </span>
            </p>
            <div>
               <NewCheckboxGroup value={data?.['AM28.2']} className="dstory">
                  Хэмжээ:
                  <NewCheckbox value={0} className="test">
                     <span style={{ fontSize: 12 }}>Их биеийн зүү</span>
                  </NewCheckbox>
               </NewCheckboxGroup>
            </div>
         </div>
      </div>
   );
};
export default Doc4;
