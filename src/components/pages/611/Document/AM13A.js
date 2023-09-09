import React from 'react';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import moment from 'moment';

function AM13A(props) {
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
               <span style={styles.generalText}>Эмнэлгийн нэр {hospitalName}</span>
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
               1. Эцэг /эх/-ийн нэр {patientData?.lastName} Нэр {patientData?.firstName} Нас: {patientData?.age} 2. Хүйс
               /зур/
               <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
               <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
            </div>
            <div style={styles.generalText}>
               Шилжүүлж буй эмнэлгийн нэр _______________________________________________________________
            </div>
            <div style={styles.generalText}>
               3. Тогтмол хаяг: {patientData?.address}, {patientData?.building}
            </div>
            <div style={styles.generalText}>
               4. Ажлын газар, албан тушаал: {patientData?.organization}, {patientData?.jobPosition}
            </div>
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
               <span>{formData?.['АМ13.1.1']}</span>
            </div>
            <div
               style={{
                  display: 'flex',
                  fontSize: 12
               }}
            >
               <span className="mr-1">ШЕШ:</span>
               <span>{formData?.['АМ13.1.2']}</span>
            </div>
            <div
               style={{
                  display: 'flex',
                  fontSize: 12
               }}
            >
               <span className="mr-1">Биохими:</span>
               <span>{formData?.['АМ13.1.3']}</span>
            </div>
            <div
               style={{
                  display: 'flex',
                  fontSize: 12
               }}
            >
               <span className="mr-1">Рентген: </span>
               <span>{formData?.['АМ13.1.4']}</span>
            </div>
            <div
               style={{
                  display: 'flex',
                  fontSize: 12
               }}
            >
               <span className="mr-1">Бусад: </span>
               <span> {formData?.['АМ13.1.5']}</span>
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
            <div style={styles.blankSpaces}>{formData?.['АМ13.2']}</div>
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
               {formData?.['АМ13.3']}
            </div>
            <div style={styles.generalText}>
               8. Дараагийн шатлалын эмнэлэгт явуулж буй үндэслэл: (зур)
               <NewCheckboxGroup value={formData?.['АМ13.4']} className="dstory">
                  <NewCheckbox value={0} className="test">
                     <span style={{ fontSize: 12 }}>1. онош тодруулах</span>
                  </NewCheckbox>
                  <NewCheckbox value={1} className="test">
                     <span style={{ fontSize: 12 }}>2. эмчилгээ хийхгүй</span>
                  </NewCheckbox>
               </NewCheckboxGroup>
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
               {moment(formData?.['АМ13.5']).format('YYYY')} оны {moment(formData?.['АМ13.5']).format('MM')} сарын{' '}
               {moment(formData?.['АМ13.5']).format('DD')} өдөр
            </div>
            <div style={styles.generalText}>
               ....................................................................................................................................................................................................................................................................................
            </div>
         </div>
      </div>
   );
}
export default AM13A;
