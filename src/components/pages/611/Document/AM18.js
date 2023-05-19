import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-18
function AM18() {
   const styles = {
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 15,
         height: 12,
         lineHeight: 1
      },
      generalText: {
         fontSize: 12
      },
      rowStyle: {
         fontSize: 12,
         marginTop: 5
      },
      leftText: {
         padding: 1,
         verticalAlign: 'middle',
         fontSize: 12
      },
      centerText: {
         padding: 1,
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 12
      },
      flexContainer: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         fontSize: 12
      },
      flexRow: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between'
      },
      topText: {
         padding: 1,
         fontSize: 12
      },
      rowCellWithText: {
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
         fontSize: 12,
         padding: 0,
         lineHeight: 1,
         marginTop: 2
      },
      verticalText: {
         writingMode: 'vertical-rl',
         verticalAlign: 'middle',
         padding: 5,
         rotate: '180deg',
         maxHeight: 100,
         maxWidth: 50,
         lineHeight: 1,
         fontSize: 12
      }
   };
   return (
      <>
         <div className="page">
            <div className="subpage">
               <div style={styles.flexContainer}>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column'
                     }}
                  >
                     <div style={styles.leftText}>Эмнэлгийн нэр: ........................................</div>
                     <div style={styles.rowCellWithText}>
                        Эмнэлгийн код:&nbsp;
                        <div style={{ display: 'flex' }}>
                           <div style={styles.rowCells}></div>
                           <div style={styles.rowCells}></div>
                           <div style={styles.rowCells}></div>
                           <div style={styles.rowCells}></div>
                           <div style={styles.rowCells}></div>
                           <div style={styles.rowCells}></div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <span
                        style={{
                           ...styles.generalText,
                           ...{ textAlign: 'right', display: 'block' }
                        }}
                     >
                        Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
                     </span>
                     <div style={styles.flexRow}>
                        <span style={styles.generalText}>&nbsp;</span>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                           <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                           <span style={{ fontWeight: 'bold', fontSize: 12 }}>
                              Эрүүл мэндийн бүртгэлийн маягт АМ-18
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 10 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>ҮР ХӨНДӨЛТИЙН ТҮҮХ</span>
               </div>
               <div style={styles.rowStyle}>1. Эцэг /эх/-ийн нэр: _____________________________________________</div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ display: 'flex', flexDirection: 'row' }
                  }}
               >
                  Нэр _______________________
                  <span>Нас: ______</span>
                  <div style={{ marginLeft: 100, display: 'flex', flexDirection: 'row' }}>
                     <span style={styles.generalText}>РД:</span>
                     <div style={{ display: 'flex', marginLeft: 15 }}>
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
               </div>
               <div style={styles.rowStyle}>
                  <div style={{ display: 'flex' }}>
                     <span style={styles.generalText}>4. Нас:</span>
                     <div style={{ display: 'flex', marginLeft: 15 }}>
                        <div style={styles.rowCells}></div>
                        <div style={styles.rowCells}></div>
                     </div>
                     <span style={{ marginLeft: 50 }}>5. Төрсөн он _______ сар _____ өдөр ____</span>
                  </div>
               </div>
               <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '48%' }}>
                     <Table bordered className="document" style={{ marginBottom: 0 }}>
                        <tbody>
                           <tr>
                              <td style={styles.leftText}>
                                 <b>7. Тогтмол хаяг: ________________________</b>
                                 <div style={styles.rowStyle}>________________________________________________</div>
                                 <div style={styles.rowStyle}>________________________________________________</div>
                                 <div style={styles.rowStyle}>
                                    Утас _________________
                                    <span style={{ marginLeft: 30 }}>Ажлын газар _______________________________</span>
                                 </div>
                                 <div style={styles.rowStyle}>
                                    Мэргэжил ________________________________________________
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                     <div style={styles.rowStyle}>
                        <b>Хөдөлмөр эрхлэлт:</b>
                     </div>
                     <Table bordered className="document" style={{ marginBottom: 10 }}>
                        <tbody>
                           <tr>
                              <td style={styles.leftText}>1. Хөдөлмөр эрхлэлтийн байдал</td>
                              <td style={styles.leftText}>&nbsp;&nbsp;&nbsp;</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>2. Хөдөлмөр эрхлэхгүй шалтгаан</td>
                              <td style={styles.leftText}>&nbsp;&nbsp;&nbsp;</td>
                           </tr>
                        </tbody>
                     </Table>
                     <Table bordered className="document" style={{ marginBottom: 0 }}>
                        <tbody>
                           <tr>
                              <td style={styles.leftText}>Эмнэлэг</td>
                              <td style={styles.centerText}>Он</td>
                              <td style={styles.centerText}>Сар</td>
                              <td style={styles.centerText}>Өдөр</td>
                              <td style={styles.centerText}>Цаг</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Хэвтсэн</td>
                              <td style={styles.centerText}></td>
                              <td style={styles.centerText}></td>
                              <td style={styles.centerText}></td>
                              <td style={styles.centerText}></td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Үр хөндүүлсэн</td>
                              <td style={styles.centerText}></td>
                              <td style={styles.centerText}></td>
                              <td style={styles.centerText}></td>
                              <td style={styles.centerText}></td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Гарсан</td>
                              <td style={styles.centerText}></td>
                              <td style={styles.centerText}></td>
                              <td style={styles.centerText}></td>
                              <td style={styles.centerText}></td>
                           </tr>
                        </tbody>
                     </Table>
                     <div
                        style={{
                           ...styles.leftText,
                           ...{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center'
                           }
                        }}
                     >
                        Ор хоног
                        <div style={{ display: 'flex', marginLeft: 15 }}>
                           <div style={styles.rowCells}></div>
                           <div style={styles.rowCells}></div>
                           <div style={styles.rowCells}></div>
                        </div>
                     </div>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '48%',
                        marginLeft: 20
                     }}
                  >
                     <div style={styles.rowStyle}>
                        <b>Боловсрол:</b>
                     </div>
                     <Table bordered className="document" style={{ marginBottom: 10, marginTop: 0 }}>
                        <tbody>
                           <tr>
                              <td style={styles.centerText}>01</td>
                              <td style={styles.leftText}>Боловсролгүй</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>02</td>
                              <td style={styles.leftText}>Бага</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>03</td>
                              <td style={styles.leftText}>Суурь боловсрол</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>04</td>
                              <td style={styles.leftText}>Бүрэн дунд</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>05</td>
                              <td style={styles.leftText}>Мэргэжлийн болон техникийн</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>06</td>
                              <td style={styles.leftText}>Дипломын</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>07</td>
                              <td style={styles.leftText}>Бакалавр</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>08</td>
                              <td style={styles.leftText}>Магистр</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>09</td>
                              <td style={styles.leftText}>Доктор</td>
                           </tr>
                        </tbody>
                     </Table>
                     <Table bordered className="document">
                        <tbody>
                           <tr>
                              <td style={styles.verticalText} rowSpan={6}>
                                 Гэр бүлийн байдал
                              </td>
                              <td style={styles.leftText}>Огт гэрлээгүй</td>
                              <td style={styles.centerText}>1</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Батлуулсан гэр бүлтэй </td>
                              <td style={styles.centerText}>2</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Батлуулаагүй гэр бүлтэй</td>
                              <td style={styles.centerText}>3</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Тусгаарласан</td>
                              <td style={styles.centerText}>4</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Цуцалсан</td>
                              <td style={styles.centerText}>5</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Бэлбэсэн</td>
                              <td style={styles.centerText}>6</td>
                           </tr>
                        </tbody>
                     </Table>
                  </div>
               </div>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.centerText} rowSpan={3}>
                           Онош
                        </td>
                        <td style={styles.leftText}>Хэвтэх үеийн</td>
                        <td style={{ ...styles.leftText, ...{ width: 500 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Үндсэн</td>
                        <td style={styles.leftText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хүндрэлийн</td>
                        <td style={styles.leftText}></td>
                     </tr>
                  </tbody>
               </Table>
               <div style={styles.leftText}>
                  Биеийн юм _________________ насандаа ирсэн _______________ хоноод ___________ хоног үргэлжилнэ.
               </div>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     justifyContent: 'space-between'
                  }}
               >
                  <Table bordered className="document" style={{ marginBottom: 0 }}>
                     <tbody>
                        <tr>
                           <td style={styles.centerText} rowSpan={5}>
                              Биеийн юмны хэмжээ
                           </td>
                           <td style={styles.leftText}>Бага</td>
                           <td style={{ ...styles.centerText, ...{ width: 50 } }}>1</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Хэвийн</td>
                           <td style={styles.centerText}>2</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Элбэг</td>
                           <td style={styles.centerText}>3</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Өвдөлттэй</td>
                           <td style={styles.centerText}>4</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Өвдөлтгүй</td>
                           <td style={styles.centerText}>5</td>
                        </tr>
                     </tbody>
                  </Table>
                  <div style={{ width: 500, marginLeft: 50 }}>
                     <div style={styles.leftText}>Сүүлийн биеийн юм ирсэн _______ он ______ сар ____ өдөр</div>
                     <div style={styles.leftText}>Жирэмслэхээс /зур/ хамгаалдаг, үгүй</div>
                     <div style={styles.leftText}>Хамгаалдаг арга ____________________________________</div>
                  </div>
               </div>
               <div style={styles.leftText}>Жирэмсний хяналтад орсон эсэх: Хэд дэх жирэмслэлт _______</div>
               <div style={styles.leftText}>1. Тийм 2. Үгүй</div>
               <div style={styles.leftText}>
                  Үр хөндүүлсэн удаа _________ Үүнээс гүйцэд төрсөн хүүхэд ________ зулбасан ________
               </div>
               <div style={styles.leftText}>
                  Сүүлийн жирэмслэлт _________ онд Төгсгөл: /зур/ гүйцэд, дутуу төрсөн, зулбасан, үр хөндүүлсэн
               </div>
               <div style={styles.leftText}>
                  Үр хөндүүлсэн бол шалтгаан
                  ______________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  __________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  Одоогийн үр хөндүүлж буй шалтгаан
                  ________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  __________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  __________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  __________________________________________________________________________________________________________________________________
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.leftText}>
                  ..........................................................................................................................................................................................
                  ар тал
               </div>
               <div style={styles.leftText}>
                  Бодит үзлэг (Амьсгал, зүрх судас, хоол шингээх, шээс бэлгийн тогтолцоо)
               </div>
               {[...Array(10)].map((x, i) => (
                  <div style={styles.leftText} key={i}>
                     __________________________________________________________________________________________________________________________________
                  </div>
               ))}
               <div style={styles.leftText}>
                  Үтрээний үзлэг
                  _________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  __________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  __________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  Онош:
                  __________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  __________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  __________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>Ураг хөндүүлсэн тухай тэмдэглэл:</div>
               <div style={styles.leftText}>
                  Гадна бэлэг эрхтэнг _______________________ уусмалаар халдваргүйтгэж, үтрээнд толь тавьж, үтрээ болон
                  умайн
               </div>
               <div style={styles.leftText}>
                  хүзүүг ариутгав. Ажилбарын үед өвдөлт намдаалтыг: /зур/ умайн хүзүүний орчны эдэд хориг хийх,
                  бүсчилсэн
               </div>
               <div style={styles.leftText}>мэдээгүйжүүлэг, ерөнхий мэдээгүйжүүлэг хийв.</div>
               <div style={styles.leftText}>
                  Мэдээгүйжүүлгийн уусмал, тун хэмжээ: ____________________________________________________________
               </div>
               <div style={styles.leftText}>
                  Сэтгүүрийг умайн хүзүүгээр болгоомжтой оруулахад умайн байрлал _____________, чиглэл_____________,
                  умайн хөндийн
               </div>
               <div style={styles.leftText}>хэмжээ _________ см байв</div>
               <div style={styles.leftText}>
                  Умайн хүзүүг тэлсэн эсэх:
                  <span style={{ marginLeft: 30 }}>Тийм</span>
                  <span style={{ marginLeft: 30 }}>Үгүй</span>
               </div>
               <div style={styles.leftText}>
                  Тийм бол /бичих/: Гигарын тэлэгч № _____________, соруурын хошуу № ____________
               </div>
               <div style={styles.leftText}>
                  Умайн хөндийн агууламжийг № _______ хошуугаар соруулан, умайн хөндий хоосорсон эсэх /зур/: улаан ягаан
               </div>
               <div style={styles.leftText}>
                  цусархаг хөөс гарах, хүржигнэх чимээ сонсогдох, соруурт эд дахин орж ирээгүй-г шалгаж хавхлагыг хаасны
               </div>
               <div style={styles.leftText}>дараа хошууг умайд үлдээж, соруурыг салгаж авав.</div>
               <div style={styles.leftText}>Умайгаас авсан эд /зур/: бүрэн, бүрэн бус</div>
               <div style={styles.leftText}>
                  Умайгаас соруурын хошуу, суман хавчуур, үтрээний толийг авч ажилбарыг дуусгав
               </div>
               <div style={styles.leftText}>
                  Алдсан цус ________ мл. Ажилбарын үргэлжилсэн хугацаа __________________________________
               </div>
               <div style={styles.leftText}>
                  Хүндрэл гарсан эсэх:
                  <span style={{ marginLeft: 30 }}>Үгүй</span>
                  <span style={{ marginLeft: 30 }}>Тийм бол бичих: _________________________________________</span>
               </div>
               <div style={styles.leftText}>
                  __________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  Ажилбарын дараах үе:
                  ________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  __________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>Жирэмснээс сэргийлэх эм, хэрэгсэл хэрэглүүлсэн эсэх: Тийм, Үгүй</div>
               <div style={styles.leftText}>
                  Тийм бол /бичих/:______________________________________________________________________
               </div>
               <div style={styles.centerText}>Эмчлэгч эмч ____________________________</div>
               <div style={styles.centerText}>Эмчлэгч эмч ___________ он ________ сар ________ өдөр</div>
            </div>
         </div>
      </>
   );
}

export default AM18;
