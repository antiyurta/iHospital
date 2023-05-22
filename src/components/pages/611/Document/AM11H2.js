import React from 'react';
import { Table } from 'react-bootstrap';

function AM11H2() {
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
                     Эрүүл мэндийн бүртгэлийн маягт AM11 Хавсралт-2
                  </span>
               </div>
            </div>

            <span style={styles.generalText}>ЭМБ-ын нэр ____________________</span>
            <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 5 }}>
               <span style={{ fontWeight: 'bold', fontSize: 18 }}>НҮДНИЙ ЭМЧИЙН ХЯНАЛТ</span>
            </div>
            <span style={{ ...styles.generalText, ...{ padding: 10 } }}>
               1. Эцэг/эх/-ийн нэр: _________________________________________
               <span style={{ ...styles.generalText, ...{ marginLeft: 30 } }}>Нэр: ___________</span>
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
               </div>
            </div>
            <div style={{ display: 'flex', padding: 10 }}>
               <span style={styles.generalText}>
                  3. Хүйс (зур): <span style={{ ...styles.generalText, ...{ marginLeft: 30 } }}>Эрэгтэй, Эмэгтэй</span>
               </span>
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
                     <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 40 } }}>
                        Д/Д
                     </td>
                     <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 80 } }}>
                        Үзлэгийн Он/сар/өдөр
                     </td>
                     <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 80 } }}>
                        Харааны чадал
                     </td>
                     <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 80 } }}>
                        Нүдний даралт
                     </td>

                     <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 200 } }}>
                        Үзлэгт гарсан өөрчлөлт
                     </td>
                     <td colSpan={3} style={{ ...styles.centerText, ...{ width: 90 } }}>
                        Эмчилгээний үр дүн
                     </td>
                     <td style={{ ...styles.centerText, ...{ width: 90 } }}>Сайжирсан эсэх /Тийм/, /Үгүй/</td>
                  </tr>
                  <tr>
                     <td
                        style={{
                           ...styles.verticalText,
                           ...{ width: 30 }
                        }}
                     >
                        Эмийн
                     </td>
                     <td
                        style={{
                           ...styles.verticalText,
                           ...{ width: 30 }
                        }}
                     >
                        Мэс заслын
                     </td>
                     <td
                        style={{
                           ...styles.verticalText,
                           ...{ width: 30 }
                        }}
                     >
                        Бусад
                     </td>
                     <td>11</td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>1</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>2</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>3</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>4</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>5</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>6</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>7</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>8</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>9</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>10</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="document" style={{ marginTop: 40 }}>
               <thead>
                  <tr>
                     <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 40 } }}>
                        Д/Д
                     </td>
                     <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 80 } }}>
                        Үзлэгийн Он/сар/өдөр
                     </td>
                     <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 80 } }}>
                        Харааны чадал
                     </td>
                     <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 80 } }}>
                        Нүдний даралт
                     </td>

                     <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 200 } }}>
                        Үзлэгт гарсан өөрчлөлт
                     </td>
                     <td colSpan={3} style={{ ...styles.centerText, ...{ width: 90 } }}>
                        Эмчилгээний үр дүн
                     </td>
                     <td style={{ ...styles.centerText, ...{ width: 90 } }}>Сайжирсан эсэх /Тийм/, /Үгүй/</td>
                  </tr>
                  <tr>
                     <td
                        style={{
                           ...styles.verticalText,
                           ...{ width: 30 }
                        }}
                     >
                        Эмийн
                     </td>
                     <td
                        style={{
                           ...styles.verticalText,
                           ...{ width: 30 }
                        }}
                     >
                        Мэс заслын
                     </td>
                     <td
                        style={{
                           ...styles.verticalText,
                           ...{ width: 30 }
                        }}
                     >
                        Бусад
                     </td>
                     <td>11</td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>1</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>2</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>3</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>4</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>5</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>6</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>7</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>8</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>9</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 20, width: 20, padding: 0 }}>10</td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                     <td style={{ height: 20, width: 20, padding: 0 }}></td>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default AM11H2;
