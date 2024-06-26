import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-22Г
function AM22G() {
   const styles = {
      generalText: {
         fontSize: 12
      },
      rowStyle: {
         fontSize: 12
      },
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 18,
         height: 18
      },
      leftText: {
         textAlign: 'left',
         verticalAlign: 'middle',
         fontSize: 10,
         padding: 1,
         paddingLeft: 5,
         lineHeight: 1.3
      },
      centerText: {
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 12,
         padding: 1,
         lineHeight: 1.3
      }
   };
   return (
      <>
         <div className="pageA5">
            <div className="subpageA5">
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     textAlign: 'right'
                  }}
               >
                  <span
                     style={{
                        ...styles.generalText,
                        ...{ fontSize: 10 }
                     }}
                  >
                     Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
                  </span>
                  <span
                     style={{
                        ...styles.generalText,
                        ...{ fontSize: 10 }
                     }}
                  >
                     A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <div>
                     <span
                        style={{
                           ...styles.generalText,
                           ...{ float: 'left' }
                        }}
                     >
                        Эмнэлгийн нэр: ____________________
                     </span>
                     <span style={{ fontWeight: 'bold', fontSize: 12 }}>АМ-22Г</span>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 5 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 12 }}>ИММУНОЛОГИЙН ШИНЖИЛГЭЭ №</span>
               </div>
               <span style={{ fontSize: 12 }}>Эцэг \эх\ийн нэр _________________________</span>
               <div style={{ fontSize: 12 }}>Нэр _____________________________</div>
               <div style={styles.rowStyle}>
                  <div style={{ display: 'flex' }}>
                     <span style={{ marginRight: 5 }}>РД </span>
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
                     <span style={{ marginLeft: 10 }}>Нас__________Хүйс: /зур/ эр, эм</span>
                  </div>
               </div>
               <div style={styles.rowStyle}>_____ он ____ сар _____ өдөр ____ цаг ______ минут</div>
               <Table bordered className="document" style={{ marginTop: 20 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: '40%' } }}>Шинжилэгдэхүүн</td>
                        <td style={{ ...styles.centerText, ...{ width: '30%' } }}>Лавлах хэмжээ</td>
                        <td style={{ ...styles.centerText, ...{ width: '30%' } }}>Хариу</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>АСЛО</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Ревтатиод фактор</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>С улвалжийн уураг</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>фетопротейн</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>иммунологлобулин G</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>иммунологлобулин А</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>иммунологлобулин М</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Hbs Ag</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Hbe Ag</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Hbs Ab</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Anti HCV</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                  </tbody>
               </Table>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ marginTop: 10 }
                  }}
               >
                  <span style={{ marginLeft: 30 }}>Лаборантын нэр ____________________</span>
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ marginTop: 10 }
                  }}
               >
                  <span style={{ marginLeft: 30 }}>Эмчийн нэр _________________________</span>
               </div>
            </div>
         </div>
      </>
   );
}

export default AM22G;
