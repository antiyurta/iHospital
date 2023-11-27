import React from 'react';
import { Table } from 'react-bootstrap';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import moment from 'moment';

//маягт АМ-28А
function AM28А(props) {
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
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-28А</span>
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
               <span style={{ fontWeight: 'bold', fontSize: 16 }}>ЗҮҮ ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ</span>
            </div>
            <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
               <div>Өрөөний №</div>
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
               1. Эцэг /эх/-ийн нэр {patientData?.lastName}
               <span style={{ marginLeft: 50 }}>Нэр {patientData?.firstName}</span>
            </div>
            <div style={styles.rowStyle}>
               2. Нас {patientData?.age}
               <span style={{ marginLeft: 50 }}>
                  Хүйс: /зур/
                  <span style={{ marginLeft: 30 }}>
                     <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
                     <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
                  </span>
               </span>
            </div>
            <div style={styles.rowStyle}>3. Үндсэн онош: {formData?.['AM28.1']}</div>
            <div style={styles.rowStyle}>4. Эмчилгээний зарчим: {formData?.['AM28.2']}</div>
            <div style={styles.rowStyle}>
               <NewCheckboxGroup value={formData?.['AM28.3']} className="dstory">
                  5. Зүү эмчилгээний төрөл:/зур/
                  <br />
                  <NewCheckbox value={0} className="test">
                     <span style={{ fontSize: 12 }}>Их биеийн зүү</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={1} className="test">
                     <span style={{ fontSize: 12 }}>Цахилгаан зүү</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={2} className="test">
                     <span style={{ fontSize: 12 }}>Усан зүү</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={3} className="test">
                     <span style={{ fontSize: 12 }}>Гарын зүү</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={4} className="test">
                     <span style={{ fontSize: 12 }}>Чихний зүү</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={5} className="test">
                     <span style={{ fontSize: 12 }}> Эмийн бодис</span>
                  </NewCheckbox>
               </NewCheckboxGroup>
            </div>
            <div style={styles.rowStyle}>
               6. Жор:
               {formData?.['AM28.4']}
            </div>
            <div style={styles.rowStyle}>
               Эмчилгээ хийсэн эмчийн нэр:{' '}
               <span className="underline">
                  {formData?.createdByName?.lastName.substring(0, 1) + '.' + formData?.createdByName?.firstName}
               </span>
            </div>
            <div style={styles.rowStyle}>Зүү эмчилгээ хийлгэхийг зөвшөөрсөн гарын үсэг:</div>
            <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
               <span style={{ fontWeight: 'bold', fontSize: 14 }}>Маягтын ар тал</span>
               <br />
               <span style={{ fontWeight: 'bold', fontSize: 14 }}>Б тал</span>
            </div>
            <Table bordered className="document" style={{ marginTop: 10 }}>
               <tbody>
                  <tr>
                     <td style={{ ...styles.centerText, ...{ width: 40 } }}>№</td>
                     <td style={{ ...styles.centerText, ...{ width: 70 } }}>Он сар өдөр</td>
                     <td style={{ ...styles.centerText, ...{ width: 70 } }}>Зүү засал</td>
                     <td style={styles.centerText}>Хавсран хийгдэх эмчилгээ</td>
                     <td style={styles.centerText}>Засал хийсэн эмчийн нэр</td>
                  </tr>
                  {formData?.['AM28.5']?.map((el, index) => {
                     return (
                        <tr key={index}>
                           <td style={styles.centerText}>{index + 1}</td>
                           <td style={styles.centerText}>{moment(el[0]).format('YYYY/MM/DD')}</td>
                           <td style={styles.centerText}>{el[1]}</td>
                           <td style={styles.centerText}>{el[2]}</td>
                           <td style={styles.centerText}>{el[3]}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </Table>
         </div>
      </div>
   );
}

export default AM28А;
