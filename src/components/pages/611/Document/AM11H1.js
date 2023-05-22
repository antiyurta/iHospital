import React from 'react';
import { Table } from 'react-bootstrap';
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
   generalTextBold: {
      fontSize: 18,
      fontWeight: 'bold'
   },
   boldTitle: {
      fontWeight: 'bold',
      fontSize: 16
   },
   blankSpaces: {
      fontSize: 12
   },
   rowStyle: {
      fontSize: 12,
      marginTop: 10
   },
   verticalText: {
      writingMode: 'vertical-rl',
      verticalAlign: 'middle',
      padding: 4,
      rotate: '180deg',
      lineHeight: 1,
      fontSize: 12
   },
   centerText: {
      textAlign: 'center',
      verticalAlign: 'middle',
      fontSize: 12,
      padding: 0,
      lineHeight: 1.3
   }
};
function AM11H1() {
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
               <span style={styles.generalText}></span>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                  <span
                     style={{
                        fontWeight: 'bold',
                        fontSize: 12,
                        textAlign: 'right'
                     }}
                  >
                     Эрүүл мэндийн бүртгэлийн маягт AM11 Хавсралт-1
                  </span>
               </div>
            </div>

            <span style={styles.generalText}>ЭМБ-ын нэр ____________________</span>
            <div
               style={{
                  textAlign: 'center',
                  marginTop: 20,
                  marginBottom: 20
               }}
            >
               <span style={{ fontWeight: 'bold', fontSize: 18 }}>АРТЕРИЙН ГИПЕРТЕНЗИЙН ХЯНАЛТ</span>
            </div>
            <span style={{ ...styles.generalText, ...{ padding: 10 } }}>
               1. Эцэг/эх/-ийн нэр ________________________
               <span style={{ ...styles.generalText, ...{ marginLeft: 30 } }}>Нэр: _____________________________</span>
            </span>
            <div style={styles.rowStyle}>
               <div style={{ display: 'flex', padding: 10 }}>
                  <span style={{ marginRight: 5 }}>2. Регистрийн дугаар: </span>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <span style={{ ...styles.generalText, ...{ marginLeft: 30 } }}>3. Хүйс: Эрэгтэй, Эмэгтэй</span>
               </div>
            </div>
            <div style={{ display: 'flex', padding: 10 }}>
               <span style={styles.generalText}>
                  4. Утасны дугаар: ______________
                  <span style={{ ...styles.generalText, ...{ marginLeft: 30 } }}>
                     5. Анх хяналтад орсон огноо__________________________
                  </span>
               </span>
            </div>
            <Table bordered className="document">
               <thead>
                  <tr>
                     <td style={{ ...styles.centerText, ...{ width: 80 } }}>Үзлэгийн огноо</td>
                     <td style={{ ...styles.centerText, ...{ width: 100 } }}>Артерийн даралтын хэмжилт (мм МУБ)</td>
                     <td style={{ ...styles.centerText, ...{ width: 350 } }}>Эмийн нэр, тун</td>
                     <td style={{ ...styles.centerText, ...{ width: 90 } }}>
                        Эмээ эмчийн зааврын дагуу уусан эсэх (тийм-1, үгүй-2)
                     </td>

                     <td style={{ ...styles.centerText, ...{ width: 90 } }}>Дараагийн үзлэгийн огноо</td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
               </thead>
            </Table>
            <Table bordered style={{ marginTop: 60 }} className="document">
               <thead>
                  <tr>
                     <td style={{ ...styles.centerText, ...{ width: 80 } }}>Үзлэгийн огноо</td>
                     <td style={{ ...styles.centerText, ...{ width: 100 } }}>Артерийн даралтын хэмжилт (мм МУБ)</td>
                     <td style={{ ...styles.centerText, ...{ width: 350 } }}>Эмийн нэр, тун</td>
                     <td style={{ ...styles.centerText, ...{ width: 90 } }}>
                        Эмээ эмчийн зааврын дагуу уусан эсэх (тийм-1, үгүй-2)
                     </td>

                     <td style={{ ...styles.centerText, ...{ width: 90 } }}>Дараагийн үзлэгийн огноо</td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default AM11H1;
