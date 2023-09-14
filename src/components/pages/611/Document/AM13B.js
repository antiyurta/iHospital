import moment from 'moment';
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
                  <span style={{ fontSize: 14, marginRight: 5 }}>РД {patientData?.registerNumber}</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, marginRight: 5 }}>ЭМД </span>
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
            <div style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
               <span style={{ fontWeight: 'bold', fontSize: 14 }}>ЭМНЭЛЭГТ ӨВЧТӨН ИЛГЭЭХ ХУУДАС</span>
            </div>
            <div style={styles.generalText}>
               1. Эцэг /эх/-ийн нэр{patientData?.lastName} Нэр {patientData?.firstName} Нас: {patientData?.age} 2. Хүйс
               /зур/
               <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
               <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
            </div>
            <div style={styles.generalText}>
               Эмчилгээ оношлогоо хийлгэсэн эмнэлгийн нэр
               {hospitalName}
            </div>
            <div style={styles.generalText}>
               Онош:
               {formData?.['АМ13.1']}
            </div>
            <div style={styles.generalText}>Хийгдсэн эмчилгээ:</div>
            <div style={{ ...styles.blankSpaces, ...{ marginLeft: 60 } }}>1. {formData?.['АМ13.2.1']}</div>
            <div style={{ ...styles.blankSpaces, ...{ marginLeft: 60 } }}>2. {formData?.['АМ13.2.2']}</div>
            <div style={{ ...styles.blankSpaces, ...{ marginLeft: 60 } }}>3. {formData?.['АМ13.2.3']}</div>
            <div style={{ ...styles.blankSpaces, ...{ marginLeft: 60 } }}>4. {formData?.['АМ13.2.4']}</div>
            <div style={styles.generalText}>
               Эмнэлгээс гарах үеийн биеийн байдал:
               {formData?.['АМ13.3']}
            </div>
            <div style={styles.generalText}>Өвчтөнд өгсөн зөвлөгөө :{formData?.['АМ13.4']}</div>
            <div style={styles.generalText}>
               Эмийн эмчилгээ:
               {formData?.['АМ13.5']}
            </div>
            <div style={styles.generalText}>
               Эмийн бус эмчилгээ:
               {formData?.['АМ13.6']}
            </div>
            <div style={styles.generalText}>
               Хүлээн авч буй эрүүл мэндийн байгууллагад өгөх зөвлөмж:
               {formData?.['АМ13.7']}
            </div>
            <div style={styles.generalText}>Шилжүүлж буй эмчийн нэр Хувийн тамга:</div>
            <div
               style={{
                  ...styles.generalText,
                  ...{ textAlign: 'right', paddingRight: 40 }
               }}
            >
               {moment(formData?.['АМ13.8']).format('YYYY')} оны {moment(formData?.['АМ13.8']).format('MM')} сарын{' '}
               {moment(formData?.['АМ13.8']).format('DD')} өдөр
            </div>
         </div>
      </div>
   );
}
export default AM13B;
