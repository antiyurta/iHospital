import React from 'react';
import moment from 'moment';
import dayjs from 'dayjs';

function AM13A(props) {
   const {
      data: { formData, patientData },
      hospitalName
   } = props;
   const styles = {
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 18,
         height: 18,
         borderColor: 'black'
      },
      generalText: {
         fontSize: 12,
         lineHeight: 1.3
      },
      blankSpaces: {
         fontSize: 10
      }
   };
   return (
      <div className="page">
         <div className="subpage">
            <span
               style={{
                  ...styles.generalText,
                  ...{ textAlign: 'right', display: 'block' }
               }}
            >
               Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
            </span>
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
               }}
            >
               <span style={styles.generalText}>Эмнэлгийн нэр: {hospitalName}</span>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                  <span style={{ fontWeight: 'bold', fontSize: 12 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-13A</span>
               </div>
            </div>
            <span style={styles.generalText}>Бүртгэлийн код</span>
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
               }}
            >
               <div style={{ display: 'flex' }}>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
               </div>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, marginRight: 5 }}>РД {patientData?.registerNumber}</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, marginRight: 5 }}>ЭМД </span>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
               </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 10, marginBottom: 15 }}>
               <span style={{ fontWeight: 'bold', fontSize: 14 }}>ЭМНЭЛЭГТ ӨВЧТӨН ИЛГЭЭХ ХУУДАС</span>
            </div>
            <div style={styles.generalText}>
               1. Эцэг /эх/-ийн нэр: {patientData?.lastName} Нэр: {patientData?.firstName} Нас: {patientData?.age} 2.
               Хүйс /зур/
               <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
               <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
            </div>
            <div style={styles.generalText}>Шилжүүлж буй эмнэлгийн нэр {formData?.q2}</div>
            <div style={styles.generalText}>3. Тогтмол хаяг: {formData?.q3}</div>
            <div style={styles.generalText}>4. Ажлын газар, албан тушаал: {formData?.q4}</div>
            <div style={styles.generalText}>
               5. Шилжүүлж буй эрүүл мэндийн байгууллагад хийгдсэн шинжилгээ (
               <span style={{ fontSize: 10, fontStyle: 'italic' }}>шинжилгээний гол өөрчлөлтийг бичнэ</span>)
            </div>
            <div
               style={{
                  display: 'flex',
                  fontSize: 12,
                  marginTop: 5
               }}
            >
               <span className="mr-1">ЦЕШ:</span>
               <span>{formData?.q5}</span>
            </div>
            <div
               style={{
                  display: 'flex',
                  fontSize: 12
               }}
            >
               <span className="mr-1">ШЕШ:</span>
               <span>{formData?.q6}</span>
            </div>
            <div
               style={{
                  display: 'flex',
                  fontSize: 12
               }}
            >
               <span className="mr-1">Биохими:</span>
               <span>{formData?.q7}</span>
            </div>
            <div
               style={{
                  display: 'flex',
                  fontSize: 12
               }}
            >
               <span className="mr-1">Рентген: </span>
               <span>{formData?.q8}</span>
            </div>
            <div
               style={{
                  display: 'flex',
                  fontSize: 12
               }}
            >
               <span className="mr-1">Бусад: </span>
               <span>{formData?.q9}</span>
            </div>
            <div
               style={{
                  ...styles.generalText,
                  ...{
                     marginTop: 5
                  }
               }}
            >
               6. Шилжүүлж буй эмнэлэгт хийгдсэн эмчилгээний үр дүн, өвчтөний биеийн байдал
            </div>
            <div style={styles.blankSpaces}>{formData?.q10}</div>
            <div
               style={{
                  ...styles.generalText,
                  ...{
                     marginTop: 5
                  }
               }}
            >
               7. Үндсэн онош (Өвчний олон улсын 10-р ангиллын дагуу дэлгэрэнгүй бичнэ.)
            </div>
            <div style={styles.generalText}>
               Онош:
               {formData?.q11}
            </div>
            <div style={styles.generalText}>
               8. Дараагийн шатлалын эмнэлэгт явуулж буй үндэслэл: (зур)
               {formData?.q12?.includes('q12-1') ? (
                  formData?.q12?.map((el, index) => {
                     if (el === 'q12-1') {
                        return (
                           <span key={index} style={{ fontSize: 10 }} className="underline mr-2">
                              1. онош тодруулах
                           </span>
                        );
                     }
                  })
               ) : (
                  <span style={{ fontSize: 10 }} className="mr-2">
                     1. онош тодруулах
                  </span>
               )}
               {formData?.q12?.includes('q12-2') ? (
                  formData?.q12?.map((el, index) => {
                     if (el === 'q12-2') {
                        return (
                           <span key={index} style={{ fontSize: 10 }} className="underline ml-2">
                              2. эмчилгээ хийхгүй
                           </span>
                        );
                     }
                  })
               ) : (
                  <span style={{ fontSize: 10 }} className="ml-2">
                     2. эмчилгээ хийхгүй
                  </span>
               )}
            </div>
            <div
               style={{
                  ...styles.generalText,
                  ...{ display: 'flex', marginTop: 5 }
               }}
            >
               <div style={{ width: '40%', textAlign: 'center' }}>Тэмдэг</div>
               <div style={{ width: '60%', textAlign: 'right', fontSize: 12 }}>
                  <span>Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн</span>
               </div>
            </div>
            <div
               style={{
                  ...styles.generalText,
                  ...{ display: 'flex' }
               }}
            >
               <div style={{ width: '40%', textAlign: 'right' }}>Эмчлэгч эмч</div>
               <div style={{ width: '60%', textAlign: 'right' }}>
                  <span>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
               </div>
            </div>
            <div style={{ ...styles.generalText, ...{ textAlign: 'right' } }}>
               {dayjs(formData.q19)?.format('YYYY он MM сар DD өдөр')}
            </div>
         </div>
      </div>
   );
}
export default AM13A;
