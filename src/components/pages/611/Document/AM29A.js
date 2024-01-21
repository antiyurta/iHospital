import React from 'react';
import { Table } from 'react-bootstrap';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import dayjs from 'dayjs';

//маягт АМ-29А
function AM29A(props) {
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
      centerText: {
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 12
      },
      flexCotnainer: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between'
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
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-29А</span>
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
               <span style={{ fontWeight: 'bold', fontSize: 16 }}>ДЭВТЭЭЛГЭ ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ</span>
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
               2. Нас: {patientData?.age}
               <span style={{ marginLeft: 50 }}>
                  Хүйс: /зур/
                  <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
                  <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
               </span>
            </div>
            <div style={styles.rowStyle}>
               3. Эмчилгээ эхэлсэн {dayjs(formData?.q2)?.format('YYYY он MM сар DD өдөр')}
               <span style={{ marginLeft: 20 }}>
                  Эмчилгээ дууссан {dayjs(formData?.q3)?.format('YYYY он MM сар DD өдөр')}
               </span>
            </div>
            <div style={styles.rowStyle}>4. Үндсэн онош: {formData?.q4}</div>
            <div style={styles.flexCotnainer}>
               <div style={styles.rowStyle}>5. Эмчилгээний төрөл ________________</div>
               <NewCheckboxGroup value={formData?.['q5']} className="dstory">
                  <NewCheckbox value={'q5-1'} className="test">
                     <span style={{ fontSize: 12 }}>Таван рашаан</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={'q5-2'} className="test">
                     <span style={{ fontSize: 12 }}>Барагшуны рашаан</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={'q5-3'} className="test">
                     <span style={{ fontSize: 12 }}>Халгайн рашаан</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={'q5-4'} className="test">
                     <span style={{ fontSize: 12 }}>Шимт рашаан</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={'q5-5'} className="test">
                     <span style={{ fontSize: 12 }}>Циркуляр душ</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={'q5-6'} className="test">
                     <span style={{ fontSize: 12 }}>Өгсүүр душ</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={'q5-7'} className="test">
                     <span style={{ fontSize: 12 }}>Шарко</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={'q5-8'} className="test">
                     <span style={{ fontSize: 12 }}>Саун</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={'q5-9'} className="test">
                     <span style={{ fontSize: 12 }}>Сувдан ванн</span>
                  </NewCheckbox>
                  <div className="ml-2">
                     <span style={{ fontSize: 12 }}>Бусад: {formData?.q5Other}</span>
                  </div>
               </NewCheckboxGroup>
               <div>
                  <div style={styles.rowStyle}>
                     <span>6. Ороолт</span>
                  </div>
                  <div style={styles.generalText}>
                     <span>Эмийн бодис: {formData?.q6}</span>
                  </div>
                  <div style={styles.generalText}>
                     <span>Бэлчир орон: {formData?.q7}</span>
                  </div>
               </div>
            </div>
            <div style={styles.rowStyle}>Эмчилгээ хийсэн эмчийн нэр: {formData?.q8}</div>

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
                     <td style={styles.centerText}>Дэвтээлгийн төрөл</td>
                     <td style={styles.centerText}>Хийгдсэн хугацаа</td>
                     <td style={styles.centerText}>Сувилагчийн нэр</td>
                  </tr>
                  {formData?.['q9']?.map((x, i) => (
                     <tr key={i}>
                        <td style={styles.centerText}>{i + 1}</td>
                        <td style={styles.centerText}>{dayjs(x['q9-1'])?.format('YYYY он MM сар DD өдөр')}</td>
                        <td style={styles.centerText}>{x['q9-2']}</td>
                        <td style={styles.centerText}>{x['q9-3']}</td>
                        <td style={styles.centerText}>{x['q9-4']}</td>
                     </tr>
                  ))}
               </tbody>
            </Table>
         </div>
      </div>
   );
}

export default AM29A;
