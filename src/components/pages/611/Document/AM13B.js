import dayjs from 'dayjs';
import React from 'react';
function AM13B(props) {
   console.log('ASD', props);
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
         fontSize: 14,
         lineHeight: 1.3,
         marginTop: 5
      },
      blankSpaces: {
         fontSize: 14
      }
   };
   return (
      <div className="page">
         <div className="subpage">
            <div style={{ ...styles.generalText, ...{ textAlign: 'right' } }}>
               Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
            </div>
            <div style={{ ...styles.generalText, ...{ textAlign: 'right' } }}>
               A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </div>
            <div
               style={{
                  ...styles.generalText,
                  ...{ textAlign: 'right', fontWeight: 'bold' }
               }}
            >
               Эрүүл мэндийн бүртгэлийн маягт АМ-13Б
            </div>
            <span style={styles.generalText}>Бүртгэлийн код: {formData?.q1}</span>
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
               }}
            >
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, marginRight: 5 }}>РД: {patientData?.registerNumber}</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, marginRight: 5 }}>ЭМД: {formData?.q2} </span>
               </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
               <span style={{ fontWeight: 'bold', fontSize: 14 }}>ЭМНЭЛЭГТ ӨВЧТӨН ИЛГЭЭХ ХУУДАС</span>
            </div>
            <div style={styles.generalText}>
               1. Эцэг /эх/-ийн нэр: {patientData?.lastName} Нэр: {patientData?.firstName} Нас: {patientData?.age} 2.
               Хүйс /зур/
               <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
               <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
            </div>
            <div style={styles.generalText}>Эмчилгээ оношлогоо хийлгэсэн эмнэлгийн нэр: {hospitalName}</div>
            <div style={styles.generalText}>
               Онош:
               {formData?.q4}
            </div>
            <div style={styles.generalText}>Хийгдсэн эмчилгээ: {formData?.q5}</div>
            <div style={styles.generalText}>Эмнэлгээс гарах үеийн биеийн байдал: {formData?.q6}</div>
            <div style={styles.generalText}>Өвчтөнд өгсөн зөвлөгөө: {formData?.q7}</div>
            <div style={styles.generalText}>Эмийн эмчилгээ: {formData?.q8}</div>
            <div style={styles.generalText}>Эмийн бус эмчилгээ: {formData?.q9}</div>
            <div style={styles.generalText}>
               Хүлээн авч буй эрүүл мэндийн байгууллагад өгөх зөвлөмж: {formData?.q10}
            </div>
            <div style={styles.generalText}>Шилжүүлж буй эмчийн нэр:</div>
            <div style={styles.generalText}>Хувийн тамга:</div>
            <div
               style={{
                  ...styles.generalText,
                  ...{ textAlign: 'right', paddingRight: 40 }
               }}
            >
               {dayjs(formData.q11)?.format('YYYY он MM сар DD өдөр')}
            </div>
         </div>
      </div>
   );
}
export default AM13B;
