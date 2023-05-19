import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-16А
function AM16A() {
   const styles = {
      verticalText: {
         writingMode: 'vertical-rl',
         verticalAlign: 'middle',
         padding: 5,
         rotate: '180deg',
         maxWidth: 50,
         lineHeight: 1,
         fontSize: 16
      },
      verticalTextCenter: {
         writingMode: 'vertical-rl',
         verticalAlign: 'middle',
         padding: 5,
         rotate: '180deg',
         maxWidth: 50,
         lineHeight: 1,
         fontSize: 16,
         textAlign: 'center'
      },
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 20,
         height: 20,
         lineHeight: 1,
         minWidth: 15,
         display: 'inline-flex'
      },
      leftText: {
         padding: 0,
         verticalAlign: 'middle',
         fontSize: 16
      },
      rightText: {
         textAlign: 'right',
         padding: 0,
         verticalAlign: 'middle',
         fontSize: 16
      },
      centerTextSmall: {
         padding: 0,
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 10
      },
      centerText: {
         padding: 0,
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 16
      },
      leftTextTable: {
         padding: 0,
         verticalAlign: 'middle',
         fontSize: 12,
         height: 10
      }
   };

   return (
      <>
         <div className="page-landscape">
            <div className="subpage-landscape">
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     justifyContent: 'space-between'
                  }}
               >
                  <div style={{ width: '70%' }}>
                     <span
                        style={{
                           ...styles.rightText,
                           ...{ textAlign: 'right', display: 'block', fontSize: 16 }
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
                        <div>
                           <div
                              style={{
                                 ...styles.leftText,
                                 ...{ display: 'flex', justifyContent: 'space-between' }
                              }}
                           >
                              <div style={styles.leftText}>Эмнэлгийн нэр: _____________________</div>
                           </div>
                           <div
                              style={{
                                 ...styles.leftText,
                                 ...{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginTop: 10,
                                    fontSize: 16
                                 }
                              }}
                           >
                              <div
                                 style={{
                                    alignItems: 'center',
                                    display: 'flex'
                                 }}
                              >
                                 <span style={{ marginRight: 5 }}>Эмнэлгийн код: </span>
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
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                           <span style={styles.rightText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                           <span
                              style={{
                                 fontWeight: 'bold',
                                 fontSize: 16,
                                 textAlign: 'right'
                              }}
                           >
                              Эрүүл мэндийн бүртгэлийн маягт АМ-16А
                           </span>
                        </div>
                     </div>
                     <div style={{ fontSize: 16, textAlign: 'center' }}>
                        <b>СОЛИЛЦОХ ХУУДАС А</b>
                     </div>
                     <div style={{ fontSize: 16, textAlign: 'center' }}>(зөвлөгөө өгөх газрын)</div>
                     <div style={styles.leftText}>
                        1. Эцэг, /эх/-ийн нэр: _________________________________ Нэр:
                        ___________________________________ Нас: ___________
                        <span style={{ marginLeft: 50 }}>2. Цусны бүлэг: ___________</span>
                     </div>
                     <div style={styles.leftText}>
                        3. Тогтмол хаяг: _______________________________________________________
                     </div>
                     <div style={styles.leftText}>
                        4. Ажил, мэргэжил: _______________________________________________________________, Ажлын газар:
                        _________________________________________________________
                     </div>
                     <div style={styles.leftText}>
                        5. Анх хяналтанд орсон хугацаа: ________________________ жирэмсний __________ 7 хоног _________
                        он _______ сар______ өдөр
                     </div>
                     <div style={styles.leftText}>
                        ________________________________________________________________________________________________________________________________________________
                     </div>
                     <div style={styles.leftText}>
                        6. Онцгой хяналтанд орсон хугацаа:
                        ________________________________________________________________________________________________
                     </div>
                     <div style={styles.leftText}>7. Амралт олгосон: ____________ он _________ сар ________ өдөр</div>
                     <div style={styles.leftText}>
                        8. Төрөх хугацаа: сүүлийн сарын тэмдгээр: __________ он ________ сар _______ өдөр
                     </div>
                     <div style={styles.leftText}>
                        9. Өмнөх жирэмслэлт, төрөлт, үр хөндөлт, зулбалтын байдал: Жирэмслэлтийн тоо: ________ дутуу
                        төрсөн: ________, зулбасан _________
                     </div>
                     <div style={styles.leftText}>
                        үр хөндүүлсэн _________, сүүлчийн жирэмслэлт: __________ онд төгссөн.
                     </div>
                     <Table bordered className="document" style={{ marginBottom: 0, marginTop: 0 }}>
                        <tbody>
                           <tr>
                              <td style={styles.centerText}>Жирэмслэлтийн тоо</td>
                              <td style={{ ...styles.centerText, ...{ width: 100 } }}>Он</td>
                              <td style={styles.centerText}>Жирэмсний хүндрэл</td>
                              <td style={styles.centerText}>Төрөх болон төрсний дараах хүндрэл</td>
                              <td style={styles.centerText}>Төрсөн хүүхдийн жин, хүйс, одоо амьд эсэх /хүндрэл/</td>
                           </tr>
                           {[...Array(10)].map((x, i) => (
                              <tr key={i}>
                                 <td style={{ height: 25 }}></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                              </tr>
                           ))}
                        </tbody>
                     </Table>
                     <div style={styles.leftText}>
                        10. Өвчилсөн өвчнүүд: А15-A19, А52-A53, A54, вирүст хепатит, ангина, кариес, эмэгтэйчүүдийн ба
                        бусад өвчин (зур)
                     </div>
                     <div style={styles.leftText}>
                        Тусгай тэмдэглэл:
                        ______________________________________________________________________________________________
                     </div>
                     <div style={styles.leftText}>
                        10. Өвчилсөн өвчнүүд: сүрьеэ, тэмбүү, заг хүйтэн, вируст гепатит, ангина, кариес, эмэгтэйчүүдийн
                        ба бусад өвчин (зур)
                     </div>
                  </div>
                  <div
                     style={{
                        width: '22%',
                        display: 'flex',
                        flexDirection: 'row',
                        borderLeftStyle: 'dashed',
                        borderLeftWidth: 2,
                        paddingLeft: 10,
                        height: '100%'
                     }}
                  >
                     <div style={styles.verticalTextCenter}>СОЛИЛЦОХ ХУУДАС Б </div>
                     <div style={styles.verticalText}>
                        1. Төрөх газар, тасгийн нэр:
                        ___________________________________________________________________________
                     </div>
                     <div style={styles.verticalText}>
                        2. Эцэг /эх/-ийн нэр: _______________________________________ Нэр:
                        _____________________________________ Нас: __________
                     </div>
                     <div style={styles.verticalText}>3. Тогтмол хаяг: _______________________</div>
                     <div style={styles.verticalText}>
                        4. Төрсөн: ______________ он ______ сар _____ өдөр _____ цаг 5. Төрөхөд хэвтсэн хоног:
                        __________
                     </div>
                     <div style={styles.verticalText}>
                        6. Үндсэн онош, хүндрэлүүд: __________________________________
                     </div>
                     <div style={styles.verticalText}>
                        7. Төрөх үед хийгдсэн мэс ажилбар _____________________________________________________
                     </div>
                     <div style={styles.verticalText}>
                        8. Төрөлтийн дараагийн үе: ___________________________________________
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="page-landscape">
            <div className="subpage-landscape">
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     justifyContent: 'space-between'
                  }}
               >
                  <div
                     style={{
                        width: '18%',
                        display: 'flex',
                        flexDirection: 'row',
                        borderRightStyle: 'dashed',
                        borderRightWidth: 2,
                        paddingLeft: 10,
                        height: '100%'
                     }}
                  >
                     <div style={styles.verticalText}>9. Төрсний дараах өдөртөө (зур) :гарсан, шилжсэн</div>
                     <div style={styles.verticalText}>
                        10. Гарах үеийн эхийн биеийн байдал _____________________________________________
                     </div>
                     <div style={styles.verticalText}>
                        11. Эх, хүүхдэд өгсөн зөвлөгөө: _______________________________
                     </div>
                     <div style={styles.verticalText}>12. Их эмчийн гарын үсэг ________________________________</div>
                     <div style={styles.verticalText}>13. Эмнэлгээс гарсан ___________ он ______ сар_____ өдөр</div>
                     <div style={styles.verticalText}>СОЛИЛЦОХ</div>
                  </div>
                  <div style={{ width: '70%' }}>
                     <div
                        style={{
                           display: 'flex',
                           flexDirection: 'row',
                           justifyContent: 'space-between'
                        }}
                     >
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between'
                           }}
                        >
                           <div
                              style={{
                                 ...styles.leftText,
                                 ...{ height: '32%', width: 100 }
                              }}
                           >
                              Он, сар, өдөр Жир. Хугацаа Биеийн жин
                           </div>
                           <div style={{ ...styles.verticalText, ...{ height: '32%' } }}>
                              Ургийн зүрхний цохилт
                              <div style={{ fontSize: 16 }}>Артерийн даралт </div>
                           </div>
                           <div style={{ ...styles.verticalText, ...{ height: '32%' } }}>
                              Умайн ёроолын өндөр см-ээр
                           </div>
                        </div>
                        <Table bordered className="document" style={{ marginBottom: 0, marginTop: 0 }}>
                           <tbody>
                              <tr>
                                 <td style={{ fontSize: 8, padding: 0, height: 13 }}></td>
                                 {[...Array(38)].map((x, i) => (
                                    <td
                                       style={{
                                          padding: 0,
                                          height: 10,
                                          width: 10,
                                          fontSize: 8
                                       }}
                                       key={i}
                                    ></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td style={{ fontSize: 8, padding: 0, height: 13 }}></td>
                                 {[...Array(38)].map((x, i) => (
                                    <td
                                       style={{
                                          padding: 0,
                                          height: 10,
                                          width: 10,
                                          textAlign: 'center',
                                          fontSize: 9
                                       }}
                                       key={i}
                                    >
                                       {i + 5}
                                    </td>
                                 ))}
                              </tr>
                              <tr>
                                 <td style={{ fontSize: 8, padding: 0, height: 13 }}></td>
                                 {[...Array(38)].map((x, i) => (
                                    <td
                                       style={{
                                          padding: 0,
                                          height: 10,
                                          width: 10,
                                          fontSize: 8
                                       }}
                                       key={i}
                                    ></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    220
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 17, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    200
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    180
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    160
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    150
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    140
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    130
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    120
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    110
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    100
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    90
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    80
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    60
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td style={{ fontSize: 8, padding: 0, height: 13 }}></td>
                                 {[...Array(38)].map((x, i) => (
                                    <td
                                       style={{
                                          padding: 0,
                                          height: 10,
                                          width: 10,
                                          fontSize: 8
                                       }}
                                       key={i}
                                    ></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    40
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    45
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td style={{ fontSize: 8, padding: 0, height: 13 }}></td>
                                 {[...Array(38)].map((x, i) => (
                                    <td
                                       style={{
                                          padding: 0,
                                          height: 10,
                                          width: 10,
                                          fontSize: 8
                                       }}
                                       key={i}
                                    ></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                    height={10}
                                 >
                                    40
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    35
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    30
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    25
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    20
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                              <tr>
                                 <td
                                    style={{
                                       paddingRight: 10,
                                       fontSize: 9,
                                       padding: 0,
                                       textAlign: 'right'
                                    }}
                                    width={17}
                                 >
                                    10
                                 </td>
                                 {[...Array(38)].map((x, i) => (
                                    <td style={{ padding: 0, height: 10, width: 10 }} key={i}></td>
                                 ))}
                              </tr>
                           </tbody>
                        </Table>
                     </div>
                     <div style={styles.centerTextSmall}>
                        <b>Шинжилгээний хариу</b>
                     </div>
                     <Table bordered className="document" style={{ marginBottom: 0 }}>
                        <tbody>
                           <tr>
                              <td style={styles.centerTextSmall}>Шээсний ерөнхий шинжилгээ</td>
                              <td style={{ ...styles.centerTextSmall, ...{ width: 60 } }}>I</td>
                              <td style={{ ...styles.centerTextSmall, ...{ width: 60 } }}>II</td>
                              <td style={{ ...styles.centerTextSmall, ...{ width: 60 } }}>III</td>
                              <td style={styles.centerTextSmall}>Цусны ерөнхий шинжилгээ</td>
                              <td style={{ ...styles.centerTextSmall, ...{ width: 60 } }}>I</td>
                              <td style={{ ...styles.centerTextSmall, ...{ width: 60 } }}>II</td>
                              <td style={{ ...styles.centerTextSmall, ...{ width: 60 } }}>III</td>
                              <td style={styles.centerTextSmall}>Үтрээний наалдац</td>
                              <td style={{ ...styles.centerTextSmall, ...{ width: 60 } }}>I</td>
                              <td style={{ ...styles.centerTextSmall, ...{ width: 60 } }}>II</td>
                              <td style={{ ...styles.centerTextSmall, ...{ width: 60 } }}>III</td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}>Он, сар, өдөр</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Он, сар, өдөр</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Он, сар, өдөр</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}>Хэмжээ</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Гемоглобин</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Лейкоцит</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}>Өнгө</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Эритроцит</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Трихомоноцит A59</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}>Цөсний пигмент</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Лейкоцит</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Гонококк A54</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}>Хувийн жин</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Тромбоцит</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Бактери</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}>Уураг</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Моноцит</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Цэвэршил.зэрэг</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}>Эпители эс</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>СОЭ</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall} colSpan={4}>
                                 Серологийн шинжилгээ
                              </td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}>Бактери</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall} colSpan={4}>
                                 Биохими
                              </td>
                              <td style={styles.centerTextSmall}>Он, сар, өдөр</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}>Лейкоцит</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Он, сар, өдөр</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Тэмбүү A51</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Билирубин</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>ДОХ/ХДХВ/ B20-B23</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Уураг</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>HBsAg</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>АЛАТ</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>HCV</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>АСАТ</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                           </tr>
                           <tr>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}>Бусад</td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                              <td style={styles.centerTextSmall}></td>
                           </tr>
                        </tbody>
                     </Table>
                     <div style={styles.leftTextTable}>
                        Жирэмснийг хянасан: зур (ЭБЭ-ийн эмч, өрхийг эмч)-ийн нэр: ____________________________________
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default AM16A;
