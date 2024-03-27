import React from 'react';
import { Table } from 'react-bootstrap';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import { formatNameForDoc } from '../../../common';

//маягт АМ-29В
function AM29V(props) {
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
      blankSpaces: {
         fontSize: 10
      },
      rowStyle: {
         fontSize: 12,
         marginTop: 10
      },
      centerText: {
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 12
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
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-29В</span>
               </div>
            </div>
            <div style={{ display: 'flex' }}>
               <span style={styles.generalText}>Эмнэлгийн код:</span>
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
            <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
               <span style={{ fontWeight: 'bold', fontSize: 16 }}>ХАТГАХ ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ</span>
            </div>
            <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
               <div>Өрөөний №: {formData?.q1}</div>
               <div style={{ display: 'flex' }}>
                  <span style={styles.generalText}>РД: {patientData?.registerNumber}</span>
               </div>
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
            </div>
            <div style={styles.rowStyle}>
               1. Эцэг /эх/-ийн нэр: {patientData?.lastName}
               <span style={{ marginLeft: 50 }}>Нэр: {patientData?.firstName}</span>
            </div>
            <div style={styles.rowStyle}>
               2. Нас: <span className="underline">{patientData?.age}</span>
               <span style={{ marginLeft: 50 }}>
                  Хүйс: /зур/
                  <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
                  <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
               </span>
            </div>
            <div style={styles.rowStyle}>3. Үндсэн онош: {formData?.q2}</div>
            <div style={styles.rowStyle}>4. Эмчилгээний төрөл, талбай, байрлал: {formData?.q3}</div>
            <div style={styles.rowStyle}>
               <span style={{ marginLeft: 50 }}>Ханасан судасны нэр: {formData?.q4}</span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ marginLeft: 50 }}>Самнуур: {formData?.q5}</span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ marginLeft: 50 }}>Шивүүр: {formData?.q6}</span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ marginLeft: 50 }}>Түрэм: {formData?.q7}</span>
            </div>
            <div style={styles.rowStyle}>
               5. Эмчилгээний талаар зөвлөгөө өгсөн эсэх:
               <NewCheckboxGroup value={formData?.['q8']} className="dstory">
                  <NewCheckbox value={'q8-1'} className="test">
                     <span style={{ fontSize: 12 }}>Тийм</span>
                  </NewCheckbox>
                  <NewCheckbox value={'q8-2'} className="test">
                     <span style={{ fontSize: 12 }}>Үгүй</span>
                  </NewCheckbox>
               </NewCheckboxGroup>
            </div>
            <div style={styles.rowStyle}>6. Гарсан хүндрэл: {formData?.q9}</div>
            <div style={styles.rowStyle}>7. Авсан арга хэмжээ: {formData?.q10}</div>
            <div style={{ marginTop: 20, textAlign: 'center' }}>
               <div style={styles.rowStyle}>
                  Эмчилгээ хийсэн эмчийн нэр:
                  <span className="">{formData?.q11}</span>
               </div>
               <div style={styles.rowStyle}>Хатгах засал хийхийг зөвшөөрсөн өвчтөний нэр: {formData?.q12}</div>
            </div>
         </div>
      </div>
   );
}

export default AM29V;
