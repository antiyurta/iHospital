import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-11
function AM11() {
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
      <>
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
                     <span
                        style={{
                           fontWeight: 'bold',
                           fontSize: 12,
                           textAlign: 'right'
                        }}
                     >
                        Эрүүл мэндийн бүртгэлийн маягт АМ-11
                     </span>
                  </div>
               </div>
               <div
                  style={{
                     ...styles.generalText,
                     ...{ display: 'flex', justifyContent: 'space-between' }
                  }}
               >
                  <span style={{ marginRight: 5 }}>Кабинетын нэр ____________________</span>
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
                  </div>
               </div>
               <div
                  style={{
                     textAlign: 'center',
                     marginTop: 100,
                     marginBottom: 100
                  }}
               >
                  <span style={{ fontWeight: 'bold', fontSize: 32 }}>ХЯНАЛТЫН КАРТ</span>
               </div>
               <div
                  style={{
                     ...styles.generalText,
                     ...{ textAlign: 'center', marginBottom: 50 }
                  }}
               >
                  <span>Эмчийн нэр ___________________ Карт нээсэн __________ он _____ сар ____ өдөр</span>
               </div>
               <div>
                  <span
                     style={{
                        fontWeight: 'bold',
                        fontSize: 38,
                        letterSpacing: 2
                     }}
                  >
                     ______________________________________
                  </span>
               </div>
               <span style={styles.generalText}>2-р тал</span>
               <div style={styles.rowStyle}>
                  <span style={{}}>
                     1. Эцэг /эх/-ийн нэр __________________________________ Нэр _________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{}}>2. Нас</span>
                  <span style={{ marginLeft: 200 }}>3. Хүйс: (зур) эр, эм</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{}}>4. Төрсөн ___________ он ______ сар ______ өдөр</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{}}>
                     5. Тогтмол хаяг _______________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 100 }}>Утас: __________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{}}>6. Ажлын газар: _______________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{}}>7. Ажил мэргэжил: ____________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{}}>8. Боловсрол:_________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{}}>
                     9. Хяналтанд авсан шалтгаан (Үндсэн онош) DS: ______________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{}}>
                     ___________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{}}>10. Хяналтанд хасагдсан __________ он ______ сар______ өдөр</span>
                  <span style={{ marginLeft: 50 }}>Бүлгийн зэрэг: _____</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{}}>11. Хяналтаас хасагдсан ________ он _____ сар _____ өдөр</span>
                  <span style={{ marginLeft: 70 }}>Бүлгийн зэрэг: _____</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{}}>12. Хасагдсан шалтгаан: (зур) эдгэрсэн, шилжсэн, нас барсан</span>
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <span style={styles.generalText}>3-р тал</span>
               <div style={styles.rowStyle}>
                  <span style={styles.boldTitle}>ОНОШИЙН ҮНДЭСЛЭЛ</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>1. Зовиур: ___________________________________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>
                     2. Өвчний түүхээс: ____________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>3. Асуумжаас: ________________________________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>
                     4. Үзлэг ______________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>
                     5. Шинжилгээ: _________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>
                     6. Онош DS: _____________________________________________________________
                  </span>
               </div>
               <div style={{ padding: 30 }}>
                  <div style={styles.rowStyle}>
                     <span style={styles.generalText}>Хяналтын эмч: _______________________</span>
                  </div>
                  <div style={styles.rowStyle}>
                     <span style={styles.generalText}>(Тамга)</span>
                  </div>
               </div>
               <div>
                  <span
                     style={{
                        fontWeight: 'bold',
                        fontSize: 38,
                        letterSpacing: 2
                     }}
                  >
                     ______________________________________
                  </span>
               </div>
               <span style={styles.generalText}>4-6-р тал</span>
               <div
                  style={{
                     textAlign: 'center',
                     marginTop: 10,
                     marginBottom: 15
                  }}
               >
                  <span style={{ fontWeight: 'bold', fontSize: 18 }}>ХЯНАЛТЫН ҮР ДҮНГИЙН ҮЗҮҮЛЭЛТ</span>
               </div>
               <Table bordered style={{ marginTop: 20 }} className="document">
                  <thead>
                     <tr>
                        <td rowSpan={2} style={{ ...styles.verticalText, ...{ width: 30 } }}>
                           Хяналтад ирэх он, сар, өдөр
                        </td>
                        <td
                           rowSpan={2}
                           style={{
                              ...styles.verticalText,
                              ...{ width: 30 }
                           }}
                        >
                           Хяналтад ирсэн он, сар, өдөр
                        </td>
                        <td rowSpan={2} style={{ ...styles.verticalText, ...{ width: 30 } }}>
                           ХЧТА-ын хувь
                        </td>
                        <td rowSpan={2} style={{ ...styles.verticalText, ...{ width: 30 } }}>
                           Группэд орсон тийм (+), үгүй (-)
                        </td>
                        <td rowSpan={2} style={{ ...styles.verticalText, ...{ width: 30 } }}>
                           Эрүүл мэндийн бүлгийн шилжилт
                        </td>
                        <td colSpan={8} style={{ ...styles.centerText, ...{ width: 100 } }}>
                           Нарийн мэргэжлийн эмчийн үзлэгт хамрагдсан байсан
                        </td>
                        <td colSpan={5} style={{ ...styles.centerText, ...{ width: 30 } }}>
                           Хийгдсэн шинжилгээ
                        </td>
                        <td colSpan={2} style={{ ...styles.verticalText, ...{ width: 30 } }}>
                           Эмчилгээ
                        </td>
                        <td colSpan={3} style={{ ...styles.verticalText, ...{ width: 30 } }}>
                           Заалт
                        </td>
                        <td colSpan={3} style={{ ...styles.centerText, ...{ width: 30 } }}>
                           Хяналтын хөдөлгөөн
                        </td>
                        <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 200 } }}>
                           Эмчийн гарын үсэг
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.verticalText, ...{ width: 20 } }}>Дотор</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Мэс засал</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмэгтэйчүүд</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Шүд</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Нүд</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Мэдрэл, сэтгэц</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Чих хамар, хоолой</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Бусад</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Шээс</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Биохими</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Флюрограф</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>ЭКГ</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Бусад</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмийн</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эмийн бус</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Стационарт</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Сувилалд</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>ЭМ-ийн зөвлөгөө</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Эдгэрсэн</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Шилжсэн</td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }}>Нас барсан</td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                     <tr>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                        <td style={{ height: 20, width: 20 }}></td>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={styles.generalText}>7-р тал</span>
                  <span
                     style={{
                        ...styles.generalText,
                        ...{ fontWeight: 'bold' }
                     }}
                  >
                     Хавсралт 1
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.boldTitle}>ОНОШИЙН ҮНДЭСЛЭЛ</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>1. Зовиур: ___________________________________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>
                     2. Өвчний түүхээс: ____________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>3. Асуумжаас: ________________________________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>
                     4. Үзлэг ______________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>
                     5. Шинжилгээ: _________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>
                     6. Онош DS: _____________________________________________________________
                  </span>
               </div>
               <div style={{ padding: 30 }}>
                  <div style={styles.rowStyle}>
                     <span style={styles.generalText}>Хяналтын эмч: _______________________</span>
                  </div>
                  <div style={styles.rowStyle}>
                     <span style={styles.generalText}>(Тамга)</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={styles.generalText}>8-р тал</span>
                  <span
                     style={{
                        ...styles.generalText,
                        ...{ fontWeight: 'bold' }
                     }}
                  >
                     Хавсралт 1
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.boldTitle}>ОНОШИЙН ҮНДЭСЛЭЛ</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>1. Зовиур: ___________________________________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>
                     2. Өвчний түүхээс: ____________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>3. Асуумжаас: ________________________________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>
                     4. Үзлэг ______________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>
                     5. Шинжилгээ: _________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={styles.generalText}>
                     6. Онош DS: _____________________________________________________________
                  </span>
               </div>
               <div style={{ padding: 30 }}>
                  <div style={styles.rowStyle}>
                     <span style={styles.generalText}>Хяналтын эмч: _______________________</span>
                  </div>
                  <div style={styles.rowStyle}>
                     <span style={styles.generalText}>(Тамга)</span>
                  </div>
               </div>
               <div>
                  <span
                     style={{
                        fontWeight: 'bold',
                        fontSize: 38,
                        letterSpacing: 2
                     }}
                  >
                     ______________________________________
                  </span>
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={styles.generalText}></span>
                  <span
                     style={{
                        ...styles.generalText,
                        ...{ fontWeight: 'bold' }
                     }}
                  >
                     Хавсралт 1
                  </span>
               </div>
               <div style={{ ...styles.rowStyle, ...{ textAlign: 'center' } }}>
                  <span style={styles.boldTitle}>Настны эрүүл мэндийн төлөвлөгөө</span>
               </div>
               <Table bordered className="document" style={{ marginTop: 20 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}>Үзүүлэлтүүд</td>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}>Төлөвлөгөө</td>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}>Хугацаа</td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={{ ...styles.centerText, ...{ width: 30 } }}>
                           Биеийн эрүүл мэнд
                        </td>
                     </tr>
                     <tr style={{ height: 80 }}>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}></td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={{ ...styles.centerText, ...{ width: 30 } }}>
                           Сэтгэц, танин мэдэхүй
                        </td>
                     </tr>
                     <tr style={{ height: 80 }}>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}></td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={{ ...styles.centerText, ...{ width: 30 } }}>
                           Үйл ажиллагаа
                        </td>
                     </tr>
                     <tr style={{ height: 80 }}>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}></td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={{ ...styles.centerText, ...{ width: 30 } }}>
                           Нийгмийн оролцоо
                        </td>
                     </tr>
                     <tr style={{ height: 80 }}>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: '33%' } }}></td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={{ marginTop: '75%' }}>
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                     }}
                  >
                     <span style={styles.generalText}></span>
                     <span
                        style={{
                           ...styles.generalText,
                           ...{ fontWeight: 'bold' }
                        }}
                     >
                        Хавсралт 2
                     </span>
                  </div>
                  <div style={{ ...styles.rowStyle, ...{ textAlign: 'center' } }}>
                     <span style={styles.boldTitle}>Настны үйл ажиллагааны хяналтын үнэлгээ</span>
                  </div>
                  <Table bordered style={{ marginTop: 20 }} className="document">
                     <thead>
                        <tr>
                           <td
                              rowSpan={2}
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 30 }
                              }}
                           >
                              Хяналтанд ирэх он сар өдөр
                           </td>
                           <td
                              colSpan={6}
                              style={{
                                 ...styles.centerText,
                                 ...{ width: 30 }
                              }}
                           >
                              Бие даах чадвар
                           </td>
                           <td
                              colSpan={6}
                              style={{
                                 ...styles.centerText,
                                 ...{ width: 30 }
                              }}
                           >
                              Багаж хэрэгсэлтэй ажиллах чадвар
                           </td>
                           <td
                              colSpan={6}
                              style={{
                                 ...styles.centerText,
                                 ...{ width: 30 }
                              }}
                           >
                              Бусад чадварууд
                           </td>
                        </tr>
                        <tr>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Хооллох
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Хувцаслах
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Усанд орох
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Хөдөлгөөн
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Бие засах
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Өтгөн шингэнээ барих
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Хоол бэлдэх
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Гэрийн ажил
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Хувцас угаах
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Эм уух
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Гадуур явах
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Худалдаа хийх
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Мөнгө зарцуулах
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Утсаар ярих
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Танин мэдэхүйн
                              <br /> чадвар(MMSE)
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Сэтгэл гутрал
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Хоол тэжээлийн байдал <br />
                              (MNA)
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Алхаа гишгээ
                           </td>
                           <td
                              style={{
                                 ...styles.verticalText,
                                 ...{ width: 20 }
                              }}
                           >
                              Тэнцвэр
                           </td>
                        </tr>
                        <tr>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                        </tr>
                        <tr>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                        </tr>
                        <tr>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                        </tr>
                        <tr>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                        </tr>
                        <tr>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                        </tr>
                        <tr>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                        </tr>
                        <tr>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                        </tr>
                        <tr>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                        </tr>
                        <tr>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                        </tr>
                        <tr>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                        </tr>
                        <tr>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                           <td style={{ width: 20, height: 20 }}></td>
                        </tr>
                     </thead>
                  </Table>
               </div>
            </div>
         </div>
      </>
   );
}

export default AM11;
