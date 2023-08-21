import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-25А
function AM25A() {
   const styles = {
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 18,
         height: 18,
         borderColor: 'black'
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
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-25А</span>
               </div>
            </div>
            <span style={styles.generalText}>Эмнэлгийн код:</span>
            <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
               <span style={{ fontWeight: 'bold', fontSize: 16 }}>СЭРГЭЭН ЗАСАХ ЭМЧИЛГЭЭНИЙ КАРТ</span>
            </div>
            <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
               <div>РД:</div>
               <div>ЭМД:</div>
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
               4. Ажлын газар, албан тушаал ___________________________________________________________________
            </div>
            <div
               style={{
                  ...styles.rowStyle,
                  ...{ display: 'flex', justifyContent: 'space-between' }
               }}
            >
               <div>
                  <div>5. Үндсэн онош: ________________________________________</div>
                  <div style={styles.rowStyle}>
                     6. Хэдэн удаа эмчилсэн ________
                     <span style={{ marginLeft: 50 }}>Удаа</span>
                     <span style={{ marginLeft: 20 }}>/зур/ анх, давтан</span>
                  </div>

                  <div style={styles.rowStyle}>
                     7. Мэргэжлийн эмчийн заалт _______________________________________________
                  </div>
               </div>
               <div style={{ display: 'flex' }}>
                  <div
                     style={{
                        writingMode: 'vertical-rl',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        rotate: '180deg'
                     }}
                  >
                     Өвчний төгсгөл
                  </div>
                  <div style={{ width: '100%', marginLeft: 10 }}>
                     <div style={{ display: 'flex' }}>
                        <div style={styles.rowCells}></div>
                        <div style={{ textAlign: 'center', marginLeft: 10 }}>
                           <span>Эдгэрсэн</span>
                        </div>
                     </div>
                     <div style={{ display: 'flex', marginTop: 5 }}>
                        <div style={styles.rowCells}></div>
                        <span style={{ textAlign: 'center', marginLeft: 10 }}>Сайжирсан</span>
                     </div>
                     <div style={{ display: 'flex', marginTop: 5 }}>
                        <div style={styles.rowCells}></div>
                        <span style={{ textAlign: 'center', marginLeft: 10 }}>Хэвэндээ</span>
                     </div>
                     <div style={{ display: 'flex', marginTop: 5 }}>
                        <div style={styles.rowCells}></div>
                        <span style={{ textAlign: 'center', marginLeft: 10 }}>Дутуу</span>
                     </div>
                  </div>
               </div>
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
                           width: 300,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        <span>Эмчилгээний нэр</span>
                     </td>
                     <td
                        style={{
                           width: 80,
                           textAlign: 'center',
                           lineHeight: 1,
                           fontSize: 12
                        }}
                     >
                        <span>Ямар эрхтэнд</span>
                     </td>
                     <td style={{ width: 80, textAlign: 'center', fontSize: 12 }}>
                        <span>Зай</span>
                     </td>
                     <td style={{ width: 80, textAlign: 'center', fontSize: 12 }}>
                        <span>Тун</span>
                     </td>
                     <td
                        style={{
                           width: 90,
                           textAlign: 'center',
                           lineHeight: 1,
                           fontSize: 12
                        }}
                     >
                        <span>Үргэлжлэх хугацаа</span>
                     </td>
                     <td
                        style={{
                           width: 100,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        <span>Давтамж</span>
                     </td>
                     <td
                        style={{
                           width: 120,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        <span>Хэдэн удаа</span>
                     </td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
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
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
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
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
               </thead>
            </Table>
            <div style={styles.rowStyle}>
               ...................................................................................................................................................................................................................................................................................
            </div>
            <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
               <div>Маягтын ар тал</div>
               <div>Б тал</div>
            </div>
            <div style={styles.rowStyle}>
               8. Илгээсэн эмч, кабинетийн нэр:
               __________________________________________________________________________________________________________
            </div>
            <div style={styles.rowStyle}>
               8. Сэргээн засах эмчилгээний эмч:
               _________________________________________________________________________________________________________
            </div>
            <div style={styles.rowStyle}>
               8. Зөвлөгөө өгсөн байдал:
               __________________________________________________________________________________________________________________
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
                           width: 60,
                           textAlign: 'center',
                           lineHeight: 1,
                           fontSize: 12
                        }}
                     >
                        <span>Он, сар, өдөр</span>
                     </td>
                     <td
                        style={{
                           width: 60,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        Удаа
                     </td>
                     <td
                        style={{
                           width: 120,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        <span>Эмчилгээний нэр</span>
                     </td>
                     <td style={{ width: 80, textAlign: 'center', fontSize: 12 }}>
                        <span>Ямар эрхтэнд</span>
                     </td>
                     <td
                        style={{
                           width: 90,
                           textAlign: 'center',
                           lineHeight: 1,
                           fontSize: 12
                        }}
                     >
                        <span>Хугацаа</span>
                     </td>
                     <td style={{ width: 80, textAlign: 'center', fontSize: 12 }}>
                        <span>Тун</span>
                     </td>
                     <td
                        style={{
                           width: 120,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        <span> Гарын үсэг</span>
                     </td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
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
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
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
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
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
                     <td></td>
                     <td></td>
                  </tr>
                  <tr style={{ height: 30 }}>
                     <td></td>
                     <td></td>
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
                     <td></td>
                     <td></td>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}

export default AM25A;
