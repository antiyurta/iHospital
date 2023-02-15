import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-29В
function AM29C() {
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
         fontSize: 12
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
                     Эрүүл мэндийн бүртгэлийн маягт АМ-29В
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
                  ХАТГАХ ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ
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
            <div style={styles.rowStyle}>
               4. Эмчилгээний төрөл, талбай, байрлал: _________
            </div>
            <div style={styles.rowStyle}>
               <div style={{ ...styles.rowStyle, ...{ marginLeft: 100 } }}>
                  Ханасан судасны нэр: __________________________
               </div>
               <div style={{ ...styles.rowStyle, ...{ marginLeft: 100 } }}>
                  Самнуур: ________________________________________
               </div>
               <div style={{ ...styles.rowStyle, ...{ marginLeft: 100 } }}>
                  Шивүүр: _________________________________________
               </div>
               <div style={{ ...styles.rowStyle, ...{ marginLeft: 100 } }}>
                  Түрэм: ___________________________________________
               </div>
            </div>
            <div style={styles.rowStyle}>
               5. Эмчилгээний талаар зөвлөгөө өгсөн эсэх: _____________ тийм
               ____________ үгүй
            </div>
            <div style={styles.rowStyle}>
               6. Гарсан хүндрэл:
               __________________________________________________________________________
            </div>
            <div style={styles.rowStyle}>
               7. Авсан арга хэмжээ:
               ______________________________________________________________________
            </div>
            <div style={styles.blankSpaces}>
               ______________________________________________________________________________________________________________________________
            </div>
            <div style={styles.blankSpaces}>
               ______________________________________________________________________________________________________________________________
            </div>
            <div style={{ ...styles.rowStyle, ...{ textAlign: 'center' } }}>
               Эмчилгээ хийсэн эмчийн нэр: ___________________________
            </div>
            <div style={{ ...styles.rowStyle, ...{ textAlign: 'center' } }}>
               Хатгах засал хийхийг зөвшөөрсөн өвчтөний нэр:
               ______________________
            </div>
         </div>
      </div>
   );
}

export default AM29C;
