import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-29А
function AM29A() {
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
               <span style={styles.generalText}>Эмнэлгийн нэр ____________________</span>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                  <span style={{ fontWeight: 'bold', fontSize: 12 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-29А</span>
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
               <span style={{ fontWeight: 'bold', fontSize: 16 }}>ДЭВТЭЭЛГЭ ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ</span>
            </div>
            <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
               <div
                  style={{
                     ...styles.generalText,
                     ...{ display: 'flex', marginBottom: 5 }
                  }}
               >
                  <span style={{ marginRight: 5 }}>РД:</span>
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
               1. Эцэг /эх/-ийн нэр _______________________________
               <span style={{ marginLeft: 50 }}>Нэр _______________________________</span>
            </div>
            <div style={styles.rowStyle}>
               2. Нас ______
               <span style={{ marginLeft: 50 }}>Хүйс: /зур/ эрэгтэй, эмэгтэй</span>
            </div>
            <div style={styles.rowStyle}>
               3. Эмчилгээ эхэлсэн _____ он ___ сар ___ өдөр,
               <span style={{ marginLeft: 20 }}>Эмчилгээ дууссан он сар өдөр _____ он ___ сар ___ өдөр</span>
            </div>

            <div style={styles.rowStyle}>
               4. Үндсэн онош:
               ___________________________________________________________________________________________________
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
               <div style={styles.generalText}>5. Эмчилгээний төрөл ________________</div>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     marginLeft: '10%'
                  }}
               >
                  <span style={styles.generalText}>Таван рашаан</span>
                  <span style={styles.generalText}>Барагшуны рашаан</span>
                  <span style={styles.generalText}>Халгайн рашаан</span>
                  <span style={styles.generalText}>Шимт рашаан</span>
                  <span style={styles.generalText}>Циркуляр душ</span>
                  <span style={styles.generalText}>Өгсүүр душ</span>
                  <span style={styles.generalText}>Шарко</span>
                  <span style={styles.generalText}>Саун</span>
                  <span style={styles.generalText}>Сувдан ванн</span>
                  <span style={styles.generalText}>Бусад</span>
               </div>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     marginLeft: '10%'
                  }}
               >
                  <span style={styles.generalText}>6. Ороолт:</span>
                  <span style={styles.generalText}>Эмийн бодис: ______________</span>
                  <span style={styles.generalText}>Бэлчир орон: ______________</span>
               </div>
            </div>
            <div style={styles.rowStyle}>Эмчилгээ хийсэн эмчийн нэр: ___________________________</div>
            <div style={styles.rowStyle}>
               ...................................................................................................................................................................................................................................................................................
            </div>
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
                        Дэвтээлгийн төрөл
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
                  <tr style={{ height: 30 }}>
                     <td
                        style={{
                           textAlign: 'center',
                           fontSize: 12,
                           padding: 0,
                           verticalAlign: 'middle'
                        }}
                     >
                        1
                     </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td
                        style={{
                           textAlign: 'center',
                           fontSize: 12,
                           padding: 0,
                           verticalAlign: 'middle'
                        }}
                     >
                        2
                     </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td
                        style={{
                           textAlign: 'center',
                           fontSize: 12,
                           padding: 0,
                           verticalAlign: 'middle'
                        }}
                     >
                        3
                     </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td
                        style={{
                           textAlign: 'center',
                           fontSize: 12,
                           padding: 0,
                           verticalAlign: 'middle'
                        }}
                     >
                        4
                     </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td
                        style={{
                           textAlign: 'center',
                           fontSize: 12,
                           padding: 0,
                           verticalAlign: 'middle'
                        }}
                     >
                        5
                     </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td
                        style={{
                           textAlign: 'center',
                           fontSize: 12,
                           padding: 0,
                           verticalAlign: 'middle'
                        }}
                     >
                        6
                     </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td
                        style={{
                           textAlign: 'center',
                           fontSize: 12,
                           padding: 0,
                           verticalAlign: 'middle'
                        }}
                     >
                        7
                     </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td
                        style={{
                           textAlign: 'center',
                           fontSize: 12,
                           padding: 0,
                           verticalAlign: 'middle'
                        }}
                     >
                        8
                     </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td
                        style={{
                           textAlign: 'center',
                           fontSize: 12,
                           padding: 0,
                           verticalAlign: 'middle'
                        }}
                     >
                        9
                     </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td
                        style={{
                           textAlign: 'center',
                           fontSize: 12,
                           padding: 0,
                           verticalAlign: 'middle'
                        }}
                     >
                        10
                     </td>
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

export default AM29A;
