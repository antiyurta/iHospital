import React from 'react';
import { Table } from 'react-bootstrap';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import dayjs from 'dayjs';

//маягт АМ-29Б
function AM29B(props) {
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
      <div>
         <div>
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
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                  <span style={{ fontWeight: 'bold', fontSize: 12 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-29Б</span>
               </div>
            </div>
            <div style={{ ...styles.generalText, ...{ display: 'flex' } }}>
               <span style={{ marginRight: 5 }}>Эмнэлгийн код:</span>
               <div style={styles.rowCells}></div>
               <div style={styles.rowCells}></div>
               <div style={styles.rowCells}></div>
               <div style={styles.rowCells}></div>
               <div style={styles.rowCells}></div>
               <div style={styles.rowCells}></div>
               <div style={styles.rowCells}></div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
               <span style={{ fontWeight: 'bold', fontSize: 16 }}>БАРИА ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ</span>
            </div>
            <div
               style={{
                  ...styles.generalText,
                  ...{ marginLeft: 450, marginBottom: 5 }
               }}
            >
               Өрөөний №: {formData?.q1}
            </div>
            <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
               <div
                  style={{
                     ...styles.generalText,
                     ...{ display: 'flex', marginBottom: 5 }
                  }}
               >
                  <span style={{ marginRight: 5 }}>РД: {patientData?.registerNumber}</span>
               </div>
               <div style={{ ...styles.generalText, ...{ display: 'flex' } }}>
                  <span style={{ marginRight: 5 }}>ЭМД:</span>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
               </div>
            </div>
            <div style={styles.rowStyle}>
               1. Эцэг /эх/-ийн нэр: {patientData?.lastName}
               <span style={{ marginLeft: 50 }}>Нэр: {patientData?.firstName}</span>
            </div>
            <div style={styles.rowStyle}>
               2. Нас: {patientData?.age}
               <span style={{ marginLeft: 50 }}>
                  Хүйс: /зур/
                  <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
                  <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
               </span>
            </div>

            <div style={styles.rowStyle}>
               3. Үндсэн онош:
               {formData?.q2}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
               <div style={styles.generalText}>4. Барианы төрөл</div>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     marginLeft: '10%'
                  }}
               >
                  <span style={styles.generalText}>Бүтэн биеийн бариа :</span>
                  <NewCheckboxGroup value={formData?.['q3']} className="dstory">
                     <NewCheckbox value={'q3-1'} className="test">
                        <span style={{ fontSize: 12 }}>1. Бүтэн биеийн зөөлөн бариа</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q3-1'} className="test">
                        <span style={{ fontSize: 12 }}>2. Халуун тосон бариа</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q3-2'} className="test">
                        <span style={{ fontSize: 12 }}>3. Сүүн бариа</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q3-3'} className="test">
                        <span style={{ fontSize: 12 }}>4. Шөлөн бариа</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q3-4'} className="test">
                        <span style={{ fontSize: 12 }}>5. Арвайн бариа</span>
                     </NewCheckbox>
                     <br />
                     <div className="ml-2">
                        <span style={{ fontSize: 12 }}>Бусад: {formData?.q3Other}</span>
                     </div>
                  </NewCheckboxGroup>
               </div>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     marginLeft: '10%'
                  }}
               >
                  <span style={styles.generalText}>Хэсэгчилсэн бариа:</span>
                  <NewCheckboxGroup value={formData?.['q4']} className="dstory">
                     <NewCheckbox value={'q4-1'} className="test">
                        <span style={{ fontSize: 12 }}>1. Толгой, хүзүү, нуруу</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q4-2'} className="test">
                        <span style={{ fontSize: 12 }}>2. Нүүрний хэсэг</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q4-3'} className="test">
                        <span style={{ fontSize: 12 }}>3. Гарын /мөр, бугалга, шуу, тохой, сарвууны хэсэг/</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q4-4'} className="test">
                        <span style={{ fontSize: 12 }}>4. Сээр бүсэлхий ууц нуруу</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q4-5'} className="test">
                        <span style={{ fontSize: 12 }}>5. Хөлийн /түнх, гуя, өвдөг, шилбэ, тавхайн хэсэг/</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q4-6'} className="test">
                        <span style={{ fontSize: 12 }}>6. 4 тольтын бариа</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q4-7'} className="test">
                        <span style={{ fontSize: 12 }}>7. Даран бариа</span>
                     </NewCheckbox>
                     <br />
                     <div className="ml-2">
                        <span style={{ fontSize: 12 }}>Бусад: {formData?.q4Other}</span>
                     </div>
                  </NewCheckboxGroup>
               </div>
            </div>
            <div style={styles.rowStyle}>5. Анхаарах зүйл: {formData?.q5}</div>
            <div style={{ ...styles.rowStyle, ...{ textAlign: 'center' } }}>
               Эмчийн нэр: <span className="underline">{formData?.q6}</span>
            </div>
            <div
               style={{
                  width: '100%',
                  height: 2,
                  border: '1px dotted black',
                  marginTop: 12,
                  marginBottom: 12
               }}
            />
            <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
               <div>Маягтын ар тал</div>
               <div>Б тал</div>
            </div>
            <Table bordered style={{ marginTop: 20 }}>
               <thead>
                  <tr
                     style={{
                        verticalAlign: 'middle'
                     }}
                  >
                     <td
                        style={{
                           width: 40,
                           textAlign: 'center',
                           lineHeight: 1,
                           fontSize: 12
                        }}
                     >
                        <span>№</span>
                     </td>
                     <td
                        style={{
                           width: 40,
                           textAlign: 'center',
                           lineHeight: 1,
                           fontSize: 12
                        }}
                     >
                        <span>Он, сар, өдөр</span>
                     </td>
                     <td
                        style={{
                           width: 150,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        Барианы төрөл
                     </td>
                     <td style={{ width: 80, textAlign: 'center', fontSize: 12 }}>
                        <span>Хийгдсэн хугацаа</span>
                     </td>
                     <td
                        style={{
                           width: 100,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        <span>Сувилагчийн нэр</span>
                     </td>
                  </tr>
                  {formData?.['q7']?.map((el, index) => {
                     return (
                        <tr style={{ height: 30 }} key={index}>
                           <td
                              style={{
                                 textAlign: 'center',
                                 fontSize: 12,
                                 padding: 0,
                                 verticalAlign: 'middle'
                              }}
                           >
                              {index + 1}
                           </td>
                           <td style={styles.centerText}>{dayjs(el['q7-1'])?.format('YYYY он MM сар DD өдөр')}</td>
                           <td style={styles.centerText}>{el['q7-2']}</td>
                           <td style={styles.centerText}>{el['q7-3']}</td>
                           <td style={styles.centerText}>{el['q7-4']}</td>
                        </tr>
                     );
                  })}
               </thead>
            </Table>
         </div>
      </div>
   );
}

export default AM29B;
