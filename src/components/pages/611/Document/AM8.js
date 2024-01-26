import React from 'react';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import dayjs from 'dayjs';

//маягт АМ-8
function AM8(props) {
   console.log('AM8 МАЯГТ', props);
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

   const returnQuestionCode = (key, question, val) => {
      return formData?.[key]?.includes(question) ? (
         formData?.[key]?.map((el, index) => {
            if (el == question) {
               return (
                  <span
                     key={index}
                     style={{ fontSize: 10, textAlign: 'center' }}
                     className={el === question ? 'underline' : ''}
                  >
                     {val}
                  </span>
               );
            }
         })
      ) : (
         <span style={{ fontSize: 10 }}>{val}</span>
      );
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
                  <span style={styles.generalText}>ЭМД: {formData?.q1}</span>
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
               <NewCheckboxGroup value={formData?.['q4']} className="dstory">
                  <NewCheckbox value={'q4-1'} className="test">
                     <span style={{ fontSize: 12 }}>өвчтэй байсан,</span>
                  </NewCheckbox>
                  <NewCheckbox value={'q4-2'} className="test">
                     <span style={{ fontSize: 12 }}>өвчтөн асрамжилсан,</span>
                  </NewCheckbox>
                  <NewCheckbox value={'q4-3'} className="test">
                     <span style={{ fontSize: 12 }}>хөл хоригдсон,</span>
                  </NewCheckbox>
                  <NewCheckbox value={'q4-4'} className="test">
                     <span style={{ fontSize: 12 }}>эмчид үзүүлсэн,</span>
                  </NewCheckbox>
                  <NewCheckbox value={'q4-5'} className="test">
                     <span style={{ fontSize: 12 }}>шинжилгээ,</span>
                  </NewCheckbox>
                  <NewCheckbox value={'q4-6'} className="test">
                     <span style={{ fontSize: 12 }}>ариутгал эмчилгээ,</span>
                  </NewCheckbox>
                  <NewCheckbox value={'q4-7'} className="test">
                     <span style={{ fontSize: 12 }}>протез</span>
                  </NewCheckbox>
               </NewCheckboxGroup>
               хийлгэсэн {dayjs(formData.q5)?.format('YYYY он MM сар DD өдрөөс ')}{' '}
               {dayjs(formData.q6)?.format('YYYY он MM сар DD өдөр')} хүртэл (зур)
               <span className={formData?.q7 == 'q7-1' ? 'underline' : ''}> ажлаас, </span>
               <span className={formData?.q7 == 'q7-2' ? 'underline' : ''}>хичээлээс </span> чөлөөлснийг магадлав.
            </div>
            <div style={styles.rowStyle}>9. Асрамжинд байсан хүний эцэг /эх/-ийн нэр, хэн болох: {formData?.q8}</div>
            <div style={styles.rowStyle}>10. Үндсэн онош: {formData?.q9}</div>
            <div style={styles.flexContainer}>
               <div style={styles.rowStyle}>Тэмдэг {dayjs(formData?.q13)?.format('YYYY он MM сар DD өдөр ')}</div>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={styles.rowStyle}>Ерөнхий эмч: {formData?.q10}</div>
                  <div style={styles.rowStyle}>Эмчлэгч эмч: {formData?.q11}</div>
               </div>
            </div>
            <div style={styles.rowStyle}>
               ___________________________________________________________________________________________________________________________________
            </div>
            <div style={{ ...styles.rowStyle, ...{ fontWeight: 'bold' } }}>Маягтын ар тал</div>
            <div style={{ ...styles.rowStyle, ...{ fontWeight: 'bold' } }}>СУНГАЛТ</div>
            {formData?.q12?.map((el, index) => {
               return (
                  <div key={index}>
                     <div style={styles.rowStyle}>
                        1. {dayjs(el?.['q12-1'])?.format('YYYY он MM сар DD өдрөөс ')}{' '}
                        {dayjs(el?.['q12-2'])?.format('YYYY он MM сар DD өдөр хүртэл нийт')} {el?.['q12-3']} хоногоор
                        сунгав
                     </div>
                     <div style={styles.flexContainer}>
                        <div style={styles.rowStyle}>Тэмдэг</div>
                        <div style={styles.rowStyle}>Эмчийн гарын үсэг___________________________________</div>
                     </div>
                  </div>
               );
            })}
            <div style={styles.rowStyle}>Тайлбар: Маягтыг эмчлэгч эмч олгоно.</div>
         </div>
      </div>
   );
}

export default AM8;
