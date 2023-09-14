import React from 'react';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import moment from 'moment';

//маягт АМ-8
function AM8(props) {
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
         height: 18
      },
      generalText: {
         fontSize: 12
      },
      rowStyle: {
         fontSize: 12,
         marginTop: 10
      },
      flexContainer: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-evenly',
         alignItems: 'center',
         marginTop: 10,
         marginBottom: 10
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
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-8</span>
               </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
               <span style={{ fontWeight: 'bold', fontSize: 16 }}>ЭМНЭЛГИЙН МАГАДЛАГАА</span>
            </div>
            <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
               <div style={{ display: 'flex', marginTop: 5 }}>
                  <span style={styles.generalText}>ЭМД:</span>
                  <div style={{ display: 'flex', marginLeft: 5 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                  </div>
               </div>
               <div style={{ display: 'flex', marginTop: 5 }}>
                  <span style={styles.generalText}>РД: {patientData?.registerNumber}</span>
               </div>
            </div>
            <div style={styles.rowStyle}>
               1. Эцэг /эх/-ийн нэр {patientData?.lastName} Нэр {patientData?.firstName}2. Хүйс:(зур)
               <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
               <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
            </div>
            <div style={styles.rowStyle}>
               3. Нас: {patientData?.age} 4. Өвчний түүх (ИЭМД)-ийн дугаар__________________________________
            </div>
            <div style={styles.rowStyle}>
               5. Тогтмол хаяг: {patientData?.address}, {patientData?.building}
            </div>
            <div style={styles.rowStyle}>
               6. Ажлын газар, албан тушаал: {patientData?.organization}, {patientData?.jobPosition}
            </div>
            <div style={styles.rowStyle}>
               7. Мэргэжил______________________________________________________________________
            </div>
            <div style={styles.rowStyle}>
               8. (зур)
               <NewCheckboxGroup value={formData?.['AM8.8']} className="dstory">
                  <NewCheckbox value={0} className="test">
                     <span style={{ fontSize: 12 }}>өвчтэй байсан,</span>
                  </NewCheckbox>
                  <NewCheckbox value={1} className="test">
                     <span style={{ fontSize: 12 }}>өвчтөн асрамжилсан,</span>
                  </NewCheckbox>
                  <NewCheckbox value={2} className="test">
                     <span style={{ fontSize: 12 }}>хөл хоригдсон,</span>
                  </NewCheckbox>
                  <NewCheckbox value={3} className="test">
                     <span style={{ fontSize: 12 }}>эмчид үзүүлсэн,</span>
                  </NewCheckbox>
                  <NewCheckbox value={4} className="test">
                     <span style={{ fontSize: 12 }}>шинжилгээ,</span>
                  </NewCheckbox>
                  <NewCheckbox value={5} className="test">
                     <span style={{ fontSize: 12 }}>ариутгал эмчилгээ,</span>
                  </NewCheckbox>
                  <NewCheckbox value={6} className="test">
                     <span style={{ fontSize: 12 }}>протез</span>
                  </NewCheckbox>
               </NewCheckboxGroup>
               хийлгэсэн {moment(formData?.['AM8.8.1']?.[0]).format('YYYY')} оны{' '}
               {moment(formData?.['AM8.8.1']?.[0]).format('MM')} сарын {moment(formData?.['AM8.8.1']?.[0]).format('DD')}{' '}
               өдрөөс {moment(formData?.['AM8.8.1']?.[1]).format('YYYY')} оны{' '}
               {moment(formData?.['AM8.8.1']?.[1]).format('MM')} сарын {moment(formData?.['AM8.8.1']?.[1]).format('DD')}{' '}
               өдөр хүртэл (зур)
               <span className={formData?.['AM8.8.2'] ? 'underline mr-1' : 'mr-1'}> ажлаас, </span>
               <span className={!formData?.['AM8.8.2'] ? 'underline mr-1' : 'mr-1'}>хичээлээс </span>) чөлөөлснийг
               магадлав.
            </div>
            <div style={styles.rowStyle}>
               9. Асрамжинд байсан хүний эцэг /эх/-ийн нэр, хэн болох: {formData?.['AM8.9']}
            </div>
            <div style={styles.rowStyle}>10. Үндсэн онош: {formData?.['AM8.10']}</div>
            <div style={styles.flexContainer}>
               <div style={styles.rowStyle}>
                  Тэмдэг {moment(formData?.['AM8.10.1']).format('YYYY')} он{' '}
                  {moment(formData?.['AM8.10.1']).format('MM')} сар {moment(formData?.['AM8.10.1']).format('DD')} өдөр
               </div>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={styles.rowStyle}>Ерөнхий эмч: {formData?.['AM8.10.2']}</div>
                  <div style={styles.rowStyle}>Эмчлэгч эмч: {formData?.['AM8.10.3']}</div>
               </div>
            </div>
            <div style={styles.rowStyle}>
               ___________________________________________________________________________________________________________________________________
            </div>
            <div style={{ ...styles.rowStyle, ...{ fontWeight: 'bold' } }}>Маягтын ар тал</div>
            <div style={{ ...styles.rowStyle, ...{ fontWeight: 'bold' } }}>СУНГАЛТ</div>
            <div style={styles.rowStyle}>
               1. {moment(formData?.['AM8.SUNGALT.1.1']?.[0]).format('YYYY')} оны{' '}
               {moment(formData?.['AM8.SUNGALT.1.1']?.[0]).format('MM')} сарын{' '}
               {moment(formData?.['AM8.SUNGALT.1.1']?.[0]).format('DD')} өдрөөс{' '}
               {moment(formData?.['AM8.SUNGALT.1.1']?.[1]).format('YYYY')} оны{' '}
               {moment(formData?.['AM8.SUNGALT.1.1']?.[1]).format('MM')} сарын{' '}
               {moment(formData?.['AM8.SUNGALT.1.1']?.[1]).format('DD')} өдөр хүртэл нийт{' '}
               {formData?.['AM8.SUNGALT.1.2']} хоногоор сунгав
            </div>
            <div style={styles.flexContainer}>
               <div style={styles.rowStyle}>Тэмдэг</div>
               <div style={styles.rowStyle}>Эмчийн гарын үсэг___________________________________</div>
            </div>
            <div style={styles.rowStyle}>
               1. {moment(formData?.['AM8.SUNGALT.2.1']?.[0]).format('YYYY')} оны{' '}
               {moment(formData?.['AM8.SUNGALT.2.1']?.[0]).format('MM')} сарын{' '}
               {moment(formData?.['AM8.SUNGALT.2.1']?.[0]).format('DD')} өдрөөс{' '}
               {moment(formData?.['AM8.SUNGALT.2.1']?.[1]).format('YYYY')} оны{' '}
               {moment(formData?.['AM8.SUNGALT.2.1']?.[1]).format('MM')} сарын{' '}
               {moment(formData?.['AM8.SUNGALT.2.1']?.[1]).format('DD')} өдөр хүртэл нийт{' '}
               {formData?.['AM8.SUNGALT.2.2']} хоногоор сунгав
            </div>
            <div style={styles.flexContainer}>
               <div style={styles.rowStyle}>Тэмдэг</div>
               <div style={styles.rowStyle}>Эмчийн гарын үсэг___________________________________</div>
            </div>
            <div style={styles.rowStyle}>
               1. {moment(formData?.['AM8.SUNGALT.3.1']?.[0]).format('YYYY')} оны{' '}
               {moment(formData?.['AM8.SUNGALT.3.1']?.[0]).format('MM')} сарын{' '}
               {moment(formData?.['AM8.SUNGALT.3.1']?.[0]).format('DD')} өдрөөс{' '}
               {moment(formData?.['AM8.SUNGALT.3.1']?.[1]).format('YYYY')} оны{' '}
               {moment(formData?.['AM8.SUNGALT.3.1']?.[1]).format('MM')} сарын{' '}
               {moment(formData?.['AM8.SUNGALT.3.1']?.[1]).format('DD')} өдөр хүртэл нийт{' '}
               {formData?.['AM8.SUNGALT.3.2']} хоногоор сунгав
            </div>
            <div style={styles.flexContainer}>
               <div style={styles.rowStyle}>Тэмдэг</div>
               <div style={styles.rowStyle}>Эмчийн гарын үсэг___________________________________</div>
            </div>
            <div style={styles.rowStyle}>Тайлбар: Маягтыг эмчлэгч эмч олгоно.</div>
         </div>
      </div>
   );
}

export default AM8;
