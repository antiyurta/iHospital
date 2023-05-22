import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-32
function AM32() {
   const styles = {
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 20,
         height: 20,
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
                  ></div>
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
                              Эрүүл мэндийн бүртгэлийн маягт АМ-32
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 10 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>
                     29 ХОНОГ - 5 ХҮРТЭЛХ НАСНЫ ХҮҮХДИЙН ТӨРӨЛХИЙН ХӨГЖЛИЙН ГАЖГИЙГ МЭДЭЭЛЭХ ХУУДАС
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <b>Ерөнхий мэдээлэл:</b>
               </div>
               <div style={styles.rowStyle}>
                  1. Мэдээлсэн газар:
                  <span style={{ marginLeft: 30 }}>
                     Аймаг/хот: ______________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 135 }}>
                     Сум/дүүрэг: ______________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  2. Мэдээлсэн эмнэлгийн нэр: __________________________________________________________________
               </div>
               <div style={styles.rowStyle}>
                  3. Мэдээлсэн эмчийн нэр: ________________________________________________________________________
               </div>
               <div style={styles.rowStyle}>
                  4. Мэдээлсэн огноо:
                  <span style={{ marginLeft: 30 }}>_______он _____сар _____өдөр</span>
               </div>
               <div style={styles.rowStyle}>
                  <b>Гэрийн хаяг:</b>
               </div>
               <div style={styles.rowStyle}>
                  1. Хүүхдийн гэрийн хаяг:
                  <span style={{ marginLeft: 30 }}>
                     Аймаг/хот: ______________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 163 }}>
                     Сум/дүүрэг: ______________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 163 }}>
                     Баг/хороо: _______________________________________________________
                  </span>
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                     }
                  }}
               >
                  2. Холбоо барих утас:
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
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
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
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
               <div style={styles.rowStyle}>
                  <b>Эцэг, эхийн мэдээлэл:</b>
               </div>
               <div style={styles.rowStyle}>1. Эцгийн овог, нэр: ________________________________</div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                     }
                  }}
               >
                  2. Эцгийн нас:
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                  </div>
               </div>
               <div style={styles.rowStyle}>3. Эхийн овог, нэр: ________________________________</div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                     }
                  }}
               >
                  4. Эхийн нас:
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                  </div>
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                     }
                  }}
               >
                  5. Жирэмслэлтийн тоо: (одоогийн жирэмслэлтийг оролцуулна)
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                  </div>
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                     }
                  }}
               >
                  6. Өмнөх төрөлтийн тоо: (одоогийн жирэмсний төгсгөл оролцуулахгүй)
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                  </div>
               </div>
               <div style={styles.rowStyle}>7. Эцэг, эх нь ураг төрлийн холбоотой эсэх: 1. Тийм 2. Үгүй</div>
               <div style={styles.rowStyle}>8. Хэрэв тийм бол тодруулна уу</div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 120 }}>a. Төрсөн ах дүүс</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 120 }}>b. Төрсөн ах дүүсийн хүүхдүүд</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 120 }}>c. Бусад ______________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <b>Хүүхдийн мэдээлэл:</b>
               </div>
               <div style={styles.rowStyle}>
                  <b>9. Хүүхдийн нэр:</b>
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                     }
                  }}
               >
                  10. Хүүхдийн регистрийн дугаар:
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
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
                     ...styles.rowStyle,
                     ...{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                     }
                  }}
               >
                  11. Хүүхдийн нас:
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                  </div>
               </div>
               <div style={styles.rowStyle}>
                  12. Хүйс: <span style={{ marginLeft: 30 }}>1. Хүү </span>
                  <span style={{ marginLeft: 30 }}>2. Охин </span>
                  <span span style={{ marginLeft: 30 }}>
                     3. Тодорхойгүй
                  </span>
               </div>
               <div style={styles.rowStyle}>13. Хүүхдийн төрөх үеийн жин: _____________(гр)</div>
               <div style={styles.rowStyle}>14. Хүүхдийн төрөх үеийн өндөр: _____________(гр)</div>
               <div style={styles.rowStyle}>
                  15. Хүүхэд дутуу төрсөн эсэх:
                  <span style={{ marginLeft: 30 }}>1. Тийм </span>
                  <span style={{ marginLeft: 30 }}>2. Үгүй </span>
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                     }
                  }}
               >
                  16. Хэрэв тийм бол төрсөн үеийн тээлтийн нас
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}>
                     долоо хоног
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                  </div>
               </div>
               <div style={styles.rowStyle}>
                  17. Хүүхэд ихэр эсэх:
                  <span style={{ marginLeft: 30 }}>1. Нэг </span>
                  <span style={{ marginLeft: 30 }}>2. Хоёр ихэр </span>
                  <span span style={{ marginLeft: 30 }}>
                     3. Гурав ба түүнээс олон ихэр
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <b>Төрөлхийн хөгжлийн гажгийн мэдээлэл:</b>
               </div>
               <div style={styles.rowStyle}>
                  18. Төрөлхийн хөгжлийн гажиг оношлогдсон:
                  <span style={{ marginLeft: 120 }}>______он ____сар ____өдөр</span>
               </div>
               <div style={styles.rowStyle}>19. Оношлогдсон төрөлхийн хөгжлийн гажгууд:</div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     a ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     b ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     c ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     d ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}></div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     e ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     f ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     g ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     h ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     i ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     j ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  20. Хүүхэд эндсэн эсэх
                  <span style={{ marginLeft: 30 }}>1. Тийм </span>
                  <span style={{ marginLeft: 30 }}>2. Үгүй </span>
               </div>
               <div style={styles.rowStyle}>
                  21. Хэрэв тийм бол хүүхэд эндсэн:
                  <span style={{ marginLeft: 120 }}>______он ____сар ____өдөр</span>
               </div>
               <div style={styles.rowStyle}>22. Эндсэн шалтгаан:</div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     ___________________________________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     ___________________________________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     ___________________________________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  23. Эмгэг судлалын шинжилгээнд орсон эсэх:
                  <span style={{ marginLeft: 30 }}>1. Тийм </span>
                  <span style={{ marginLeft: 30 }}>2. Үгүй </span>
               </div>
               <div style={styles.rowStyle}>24. Эмгэг судлалын шинжилгээнд илэрсэн төрөлхийн хөгжлийн гажгууд:</div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     a ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     b ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     c ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     d ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     e ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     f ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     g ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     h ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     i ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     j ______________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>25. Нэмэлт тайлбар:</div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     ___________________________________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     ___________________________________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     ___________________________________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     ___________________________________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>
                     ___________________________________________________________________________________________________________________
                  </span>
               </div>
            </div>
         </div>
      </>
   );
}

export default AM32;
