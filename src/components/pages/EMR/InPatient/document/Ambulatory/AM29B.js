import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-29Б
function AM29B() {
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
               <span style={styles.generalText}>
                  Эмнэлгийн нэр ____________________
               </span>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={styles.generalText}>
                     A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <span style={{ fontWeight: 'bold', fontSize: 12 }}>
                     Эрүүл мэндийн бүртгэлийн маягт АМ-29Б
                  </span>
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
            <div
               style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}
            >
               <span style={{ fontWeight: 'bold', fontSize: 16 }}>
                  БАРИА ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ
               </span>
            </div>
            <div
               style={{
                  ...styles.generalText,
                  ...{ marginLeft: 450, marginBottom: 5 }
               }}
            >
               Өрөөний № ________
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
               <span style={{ marginLeft: 50 }}>
                  Нэр _______________________________
               </span>
            </div>
            <div style={styles.rowStyle}>
               2. Нас ______
               <span style={{ marginLeft: 50 }}>
                  Хүйс: /зур/ эрэгтэй, эмэгтэй
               </span>
            </div>

            <div style={styles.rowStyle}>
               3. Үндсэн онош:
               ___________________________________________________________________________________________________
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
               <div style={styles.generalText}>4. Барианы төрөл</div>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     marginLeft: '10%'
                  }}
               >
                  <span style={styles.generalText}>Бүтэн биеийн бариа :</span>
                  <span style={styles.generalText}>
                     1. Бүтэн биеийн зөөлөн бариа
                  </span>
                  <span style={styles.generalText}>2. Халуун тосон бариа</span>
                  <span style={styles.generalText}>3. Сүүн бариа</span>
                  <span style={styles.generalText}>4. Шөлөн бариа</span>
                  <span style={styles.generalText}>5. Арвайн бариа</span>
                  <span style={styles.generalText}>
                     6. Бусад бариа ....................
                  </span>
                  <span style={styles.generalText}>
                     ....................................................
                  </span>
               </div>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     marginLeft: '10%'
                  }}
               >
                  <span style={styles.generalText}>Хэсэгчилсэн бариа:</span>
                  <span style={styles.generalText}>
                     1. Толгой, хүзүү, нуруу
                  </span>
                  <span style={styles.generalText}>2. Нүүрний хэсэг</span>
                  <span style={styles.generalText}>
                     3. Гарын /мөр, бугалга, шуу, тохой, сарвууны хэсэг/
                  </span>
                  <span style={styles.generalText}>
                     4. Сээр бүсэлхий ууц нуруу
                  </span>
                  <span style={styles.generalText}>
                     5. Хөлийн /түнх, гуя, өвдөг, шилбэ, тавхайн хэсэг/
                  </span>
                  <span style={styles.generalText}>6. 4 тольтын бариа</span>
                  <span style={styles.generalText}>7. Даран бариа</span>
                  <span style={styles.generalText}>8. Бусад бариа</span>
               </div>
            </div>
            <div style={styles.rowStyle}>
               5. Анхаарах
               зүйл:________________________________________________________________________________________
            </div>
            <div style={{ ...styles.rowStyle, ...{ textAlign: 'center' } }}>
               Эмчийн нэр: __________________________
            </div>
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
                        Барианы төрөл
                     </td>
                     <td
                        style={{ width: 80, textAlign: 'center', fontSize: 12 }}
                     >
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

export default AM29B;
