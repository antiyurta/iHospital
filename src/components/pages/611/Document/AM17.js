import React from 'react';
import { Table } from 'react-bootstrap';

//маягт AMе17
function AM17() {
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
         fontSize: 10
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
                  <div style={{ display: 'flex' }}></div>
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
                              Эрүүл мэндийн бүртгэлийн маягт АМ-17
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div
                  style={{
                     textAlign: 'center',
                     marginTop: 150,
                     marginBottom: 100
                  }}
               >
                  <span
                     style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 16,
                        width: 300,
                        display: 'inline-flex'
                     }}
                  >
                     ЭХИЙН ЭНДЭГДЭЛ, НОЦТОЙ ХҮНДРЭЛИЙГ МЭДЭЭЛЭХ МАЯГТ
                  </span>
               </div>
               <div style={styles.centerText}>Эцэг /эх/-ийн нэр _________________________________________</div>
               <div style={{ ...styles.centerText, ...{ marginTop: 50 } }}>
                  <span>Нэр _________________________________________________________</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
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
               <div
                  style={{
                     ...styles.leftText,
                     ...{ marginLeft: 150, marginTop: 50 }
                  }}
               >
                  Тогтмол хаяг
               </div>
               <div style={{ ...styles.centerText, ...{ marginTop: 50 } }}>
                  аймаг, хот ____________________________________________________
               </div>
               <div style={{ ...styles.centerText, ...{ marginTop: 50 } }}>
                  сум/дүүрэг ____________________________________________________
               </div>
               <div style={{ ...styles.centerText, ...{ marginTop: 50 } }}>
                  баг/хороо ____________________________________________________
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.leftText}>1. Эхийн жирэмсэн, төрөх, төрсний дараах үед (зур):</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>1.1 Хүндэрсэн
                  <span style={{ marginLeft: 100 }}>1.2 Эндсэн</span>
               </div>
               <div style={styles.leftText}>2. Эхийн хүндэрсэн, эндсэн газар</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>2.1 Гэрт
                  <span style={{ marginLeft: 100 }}>2.2 ӨЭМТ/СЭМТ</span>
                  <span style={{ marginLeft: 100 }}>2.3 Аймгийн эмнэлэг/БОЭТ</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>2.4 Хувийн эмнэлэгт
                  <span style={{ marginLeft: 30 }}>2.5 Амаржих газар</span>
                  <span style={{ marginLeft: 90 }}>2.6 Төрөлжсөн нарийн мэргэжлийн эмнэлэг</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>2.7 Төв эмнэлэг/Тусгай мэргэшлийн төв
                  <span style={{ marginLeft: 120 }}>2.8 Бусад</span>
               </div>
               <div style={styles.leftText}>3. Нас ______________</div>
               <div style={styles.leftText}>4. Ам бүл: ______________</div>
               <div style={styles.leftText}>5. Гэр бүлийн байдал: (зур) гэрлээгүй, хамтран амьдрагч,</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>гэрлэсэн, гэрлэсэн/тусдаа, салсан, бэлбэсэн, тодорхойгүй
                  ___________________
               </div>
               <div style={styles.leftText}>6. Боловсрол: (зур) боловсролгүй, бага, дунд,</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>мэргэжлийн болон техникийн, дээд, тодорхойгүй
                  ___________________
               </div>
               <div style={styles.leftText}>7. Нийгмийн байдал: ажилтай, ажилгүй, малчин, оюутан, сурагч, бусад</div>
               <div style={styles.leftText}>
                  8. Эмнэлэгт хэвтсэн __________он __________сар _____өдөр__________ цаг _____минут
               </div>
               <div style={styles.leftText}>9. Эмнэлэгт хэвтэх үеийн биеийн байдал: (зур) хөнгөн, дунд,</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>хүндэвтэр, хүнд, маш хүнд, бусад ___________________
               </div>
               <div style={styles.leftText}>10. Эмнэлэгт хэвтэх үеийн онош: (ӨОУА-10 кодлоно уу)</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Үндсэн онош:
                  ____________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>
                  ___________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хүндрэл:
                  __________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>
                  ___________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Дагалдах онош:
                  __________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>
                  ___________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>11. Биеийн жин ___________________________________________ кг</div>
               <div style={styles.leftText}>12. Өндөр ___________________________________________ см</div>
               <div style={styles.leftText}>
                  13. Цусны даралт: б ___________________ з ___________________ судасны цохилтын тоо _________
               </div>
               <div style={styles.leftText}>14. Хийгдсэн шинжилгээ: </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>14.1.
                  <span style={{ marginLeft: 30 }}>Цусны ерөнхий шинжилгээ:</span>
                  <span style={{ marginLeft: 100 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>14.2.
                  <span style={{ marginLeft: 30 }}>Шээсний шинжилгээ: </span>
                  <span style={{ marginLeft: 133 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>14.3.
                  <span style={{ marginLeft: 30 }}>Биохимийн шинжилгээ: </span>
                  <span style={{ marginLeft: 120 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>14.4.
                  <span style={{ marginLeft: 30 }}>Хэт авиан шинжилгээ: </span>
                  <span style={{ marginLeft: 128 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>14.5.
                  <span style={{ marginLeft: 30 }}>Рентген шинжилгээ:</span>
                  <span style={{ marginLeft: 142 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>14.6.
                  <span style={{ marginLeft: 30 }}>Зүрхний бичлэг:</span>
                  <span style={{ marginLeft: 162 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>14.7.
                  <span style={{ marginLeft: 30 }}>Каогулограмм:</span>
                  <span style={{ marginLeft: 170 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>14.8.
                  <span style={{ marginLeft: 30 }}>Компьютер томограф: </span>
                  <span style={{ marginLeft: 125 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>14.9.
                  <span style={{ marginLeft: 30 }}>
                     Бусад: /бичих/ _______________________________________________________
                  </span>
               </div>
               <div style={styles.leftText}>15. Жирэмслэлтийн тоо: (одоогийн жирэмслэлтийг оролцуулна)</div>
               <div style={styles.leftText}>16. Өмнөх төрөлтийн тоо: (одоогийн жирэмсний төгсгөл оролцуулахгүй)</div>
               <div style={styles.leftText}>
                  17. Өмнөх жирэмслэлт хэдэн онд байсан бэ? _______________________________________________________
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.leftText}>18. Өмнөх жирэмсний төгсгөл:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>18.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Эрт үеийн зулбалт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>18.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хожуу үеийн зулбалт(халдварлагдсан,халдварлагдаагүйг
                  зурах)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>18.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Үр хөндөлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>18.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умайн гадуурх жирэмсэн
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>18.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Өсөлтгүй жирэмсэн
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>18.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Дутуу төрөлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>18.7
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Гүйцэд төрөлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>18.8
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Илүү тээлттэй төрөлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>18.9
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөөгүй (жирэмсэн үргэлжлэн тээгдэж буй)
               </div>
               <div style={styles.leftText}>
                  19. Өмнөх жирэмсэн, төрөлт, төрсний дараа болон үр хөндөлттэй холбоотой
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>ямар нэгэн хүндрэл байсан уу?
                  <span style={{ marginLeft: 128 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>
                  20. Жирэмсний хяналтанд орсон эсэх:
                  <span style={{ marginLeft: 115 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>
                  21. Жирэмсний хяналтанд анх орсон хугацаа: долоо хоногоор _______________________
               </div>
               <div style={styles.leftText}>
                  22. Нийт хэдэн удаа үзүүлсэн: ___________________________________________________________
               </div>
               <div style={styles.leftText}>23. Жирэмсний хяналтанд байсан газар:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>23.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Улаанбаатар хот, ЭХЭМҮТ
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>23.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Улаанбаатар хот, Эрүүл мэндийн нэгдэл
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>23.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Улаанбаатар хот, Өрхийн Эрүүл мэндийн төв
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>23.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Аймгийн эмнэлэг/БОЭТ
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>23.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Аймаг сумын Өрхийн Эрүүл мэндийн төв
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>23.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хувийн эмнэлэгт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>23.7
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Багт
               </div>
               <div style={styles.leftText}>24. Жирэмсний хяналтын эмчийн мэргэжлийн түвшин</div>

               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>24.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Эх барих эмэгтэйчүүд
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>24.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Өөр мэргэжлийн их эмч
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>24.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Эх баригч
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>24.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Бага эмч
               </div>
               <div style={styles.leftText}>25. Жирэмсэн үед жирэмсэн, төрөлт, төрсний дараах үеийн тухай</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>эрүүл мэндийн хичээл сургалтанд оролцсон эсэх:
                  <span style={{ marginLeft: 50 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>26. Энэ жирэмсний үе дэх хавсарсан өвчин:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>26.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хавсарсан өвчингүй
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>26.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Халдварт ба шимэгчит зарим өвчин
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>26.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хавдар
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>26.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Цус, цус бүтээх эрхтний өвчин
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>26.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Дотоод шүүрэл, тэжээлийн ба бодисын солилцооны өвчин
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>26.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Мэдрэлийн тогтолцооны өвчин
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>26.7
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Цусны эргэлтийн тогтолцооны өвчин
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>26.8
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Амьсгалын тогтолцооны өвчин
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>26.9
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хоол шингээх тогтолцооны өвчин
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>26.10
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Шээс, бэлгэсийн тогтолцооны өвчин
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>26.11
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Бусад ______________________________
               </div>
               <div style={styles.leftText}>27. Одоогийн жирэмсний хүндрэл:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хүндрэлгүй
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Эрт үеийн хордлого
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хожуу хордлогын хөнгөн хэлбэр (манас таталтын урьдлын)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хожуу хордлогын хүнд хэлбэр (манас таталтын урьдлын)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Манас таталт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Цус алдалт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.7
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Судсанд цус түгээмлээр бүлэгнэх хам шинж
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.8
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Ихэс түрүүлэлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.9
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хэвийн байрласан ихэс цагаас урьтаж ховхрох
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.10
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Ураг орчмын шингэний ихдэлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.11
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Ураг орчмын шингэний багадалт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.12
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Ураг орчмын шингэний эрт гаралт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.13
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Хавсарсан өвчин
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.14
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Ургийн эмгэг (бүтэлт, өсөлтийн саатал)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>27.15
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Бусад (нэрлэ) ________________________
               </div>
               <div style={styles.leftText}>28. Жирэмсэн үед тусламж үзүүлсэн газар:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>28.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөлжсөн нарийн мэргэжлийн эмнэлэгт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>28.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төв эмнэлэг/Тусгай мэргэшлийн төв
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>28.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Амаржих газар
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>28.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Аймгийн эмнэлэг/БОЭТ
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>28.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>ӨЭМТ/СЭМТ
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>28.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хувийн эмнэлэг
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>28.7
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Бусад (нэрлэ) _______________________________
               </div>
               <div style={styles.leftText}>29. Төрөлтийн тусламж үзүүлсэн газар:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>29.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөлжсөн нарийн мэргэжлийн эмнэлэг
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>29.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төв эмнэлэг/Тусгай мэргэшлийн төв
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>29.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Амаржих газар
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>29.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Аймгийн эмнэлэг/БОЭТ
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>29.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>ӨЭМТ/СЭМТ
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>29.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хувийн эмнэлэг
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>29.7
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Бусад _______________________________
               </div>
               <div style={styles.leftText}>30. Төрөлт удирдсан хүн:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>30.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Эх барих эмэгтэйчүүдийн мэргэжлийн эмч
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>30.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Бусад мэргэжлийн эмч
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>30.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Эх баригч
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>30.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Бага эмч
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>30.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Эмнэлгийн бус хүн
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>30.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөлтөнд оролцсон хүнгүй
               </div>
               <div style={styles.leftText}>31. Эхийн жирэмсний хугацаа (долоо хоногоор): _______________</div>
               <div style={styles.leftText}>32. Одоогийн жирэмсний төгсгөл:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>32.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Эрт үеийн зулбалт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>32.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хожуу үеийн зулбалт (халдварлагдсан,халдварлагдаагүйг
                  зурах)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>32.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Үр хөндөлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>32.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умайн гадуурх жирэмсэн
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>32.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Өсөлтгүй жирэмсэн
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>32.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Дутуу төрөлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>32.7
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Гүйцэд төрөлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>32.8
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Илүү тээлттэй төрөлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>32.9
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөөгүй (жирэмсэн үргэлжлэн тээгдэж буй)
               </div>
               <div style={styles.leftText}>33. Төрсөн, үр хөндүүлсэн, зулбасан, мэс засал хийлгэсэн</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>өдөр (зур):______он____сар____өдөр
               </div>
               <div style={styles.leftText}>34. Төрөлтийн хэлбэр (ажилбар)</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>34.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөх замаар
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>34.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Вакум таталт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>34.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хавчуур
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>34.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Кесар хагалгаа
               </div>
               <div style={styles.leftText}>
                  35. Умай агшаах тариа хэрэглэсэн эсэх:
                  <span style={{ marginLeft: 80 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>36. Төрөлтийн үед умай агшаах тариаг хэзээ хэрэглэсэн:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>36.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөлтийн 1-р үе
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>36.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөлтийн 2-р үе
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>36.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөлтийн 3-р үе
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>36.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрсний дараа
               </div>
               <div style={styles.leftText}>37. Үр хөндөлтийн хэлбэр (ажилбар):</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>37.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Эмийн аргаар үр хөндүүлэх
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>37.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умайн хөндийгөөс соруулах
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>37.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умайн хөндийг хусах
               </div>
               <div style={styles.leftText}>
                  38. Мэс засал хийгдсэн эсэх:
                  <span style={{ marginLeft: 80 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>39. Мэс засал хийх болсон заалт:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>39.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Үр хөндөлтийн үеийн хүндрэл
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>39.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Халдварлагдсан зулбаа
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>39.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умайн гадуурх жирэмсэн
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>39.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хожуу хордлогын хүнд хэлбэр
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>39.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Манас таталт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>39.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Цус алдалт (умайн агшилт суларснаас)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>39.7
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Ихэс түрүүлэлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>39.8
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умайн тулгамдсан урагдал
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>39.9
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Давтан кесар хагалгаа
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>39.10
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Төрөх замын саатал
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>39.11
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Үжил халдвар
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>39.12
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Ургийн талын заалттай бол бичнэ үү (________________)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>39.13
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Бусад (нэрлэ)
                  ________________________________________________
               </div>
               <div style={styles.leftText}>40. Төрөх үеийн мэс ажилбар, мэс заслын тусламж:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Ихэс гардах
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умайн хөндийг гараар шалгах
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умайн хөндийг багажаар шалгах
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөх замын зөөлөн эдийн урагдал оёх
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хавчуур
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Вакуум
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.7
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Ураг эвдэх
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.8
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Кесар хагалгаа
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.9
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Кесар хагалгааг өргөтгөн, умайг үтрээн дээгүүр авах
                  хагалгаа
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.10
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Кесар хагалгааг өргөтгөн, умайг бүхэлд нь авах хагалгаа
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.11
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Кесар хагалгааг өргөтгөн хийгдсэн умайг тайрах/авах
                  хагалгааны заалт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.12
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Давтан хийгдсэн хагалгааны нэр
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.13
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Давтан хийгдсэн хагалгааны заалтыг бичих
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.14
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Давтан хагалгаа хийгдсэн _______он_____сар_____өдөр
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.15
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Умайн гадуурх жирэмсний улмаас хийгдсэн хагалгаа, нэр
                  ______________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>40.16
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Бусад (нэрлэ)
                  _____________________________________________
               </div>
               <div style={styles.leftText}>
                  41. Цус алдсан эсэх:
                  <span style={{ marginLeft: 80 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>42. Алдсан цусны хэмжээ (мл-р): _____________</div>
               <div style={styles.leftText}>43. Юүлсэн цусны хэмжээ (мл-р): _____________</div>
               <div style={styles.leftText}>44. Эх ноцтой хүндэрсэн эсвэл эндсэн үе (зурах)</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>44.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Эрт үеийн зулбалт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>44.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хожуу үеийн зулбалт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>44.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Жирэмсэн үед
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>44.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөх үед
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>44.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрсний дараа
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>44.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Өсөлтгүй жирэмсэн
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>44.7
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умайн гадуурх жирэмсэн
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>44.8
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Үр хөндөлтийн үед
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>44.9
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Үр хөндсөний дараа
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>44.10
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Бусад (нэрлэ)
                  _____________________________________________________________
               </div>
               <div style={styles.leftText}>45. Төрөх, төрсний дараах үеийн хүндрэл</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хожуу хордлогын хөнгөн хэлбэр
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хожуу хордлогын хүнд хэлбэр
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Манас таталт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Цус алдалт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Судсанд цус түгээмлээр бүлэгнэх хам шинж
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умайн урагдал
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.7
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Ихэс түрүүлэлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.8
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хэвийн байрласан ихэс цагаас урьтаж ховхрох
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.9
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Ихэс саатах
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.10
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөх хүчний гажуудал
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.11
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Ураг орчмын шингэний эрт гаралт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.12
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Ураг орчмын шингэний бөглөрөлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.13
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Хавсарсан өвчин
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>45.14
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Бусад (нэрлэ)
                  _______________________________________________________________
               </div>
               <div style={styles.leftText}>46. Цус алдалтын шалтгаан</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>46.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Үр хөндөлтийн улмаас цус алдсан
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>46.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умайн гадуурх жирэмсэн
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>46.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Ихэс түрүүлэх
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>46.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Ихэс шигдэх
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>46.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Ихэс ховхрох
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>46.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Ихсийн хэсэг үлдэх
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>46.7
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөх замын зөөлөн эдийн урагдал
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>46.8
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умай урагдсан
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>46.9
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрсний дараах цус алдалт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>46.10
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Эх барихын бусад цус алдалт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>46.11
                  <span style={{ marginLeft: 15 }}>&nbsp;</span>Бусад (нэрлэ)
                  _______________________________________________
               </div>
               <div style={styles.leftText}>47. Халдвар</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>47.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Үр хөндөлттэй холбоотой
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>47.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Төрөх үеийн умайн салстын үрэвсэл
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>47.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Ургийн шингэн цагаас өмнө гарч халдварлагдах
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>47.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Кесар хагалгааны дараах халдвар
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>47.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умайн хөндийг цэвэрлэснээс үүдэлтэй халдвар
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>47.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Пиелонефрит
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>47.7
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Томуу төст өвчин
               </div>
            </div>
         </div>

         <div className="page">
            <div className="subpage">
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>47.8
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Бусад системийн халдвар үрэвсэл/үжил
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>47.9
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Бусад (нэрлэ)
                  _______________________________________________
               </div>
               <div style={styles.leftText}>48. Эх хүндэрсэн тохиолдолд ямар нэгэн эрхтэн системийн үйл</div>
               <div style={styles.leftText}>
                  ажиллагааны алдагдал байсан эсэх:
                  <span style={{ marginLeft: 115 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.leftText}>49. Зүрх судасны үйл ажиллагааны алдагдал</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>49.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Шок (зүрх судасны хурц дутагдал)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>49.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Судас нарийсгагч эм үргэлжлүүлэн хэрэглэх
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>49.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Зүрх зогсох
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>49.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хүнд хэлбэрийн гипоперфузи(лактат&#62;5 ммоль/л эсвэл
                  45мг/дл)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>49.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хүнд хэлбэрийн хүчилшил (pH&#60;7.1)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>49.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Зүрх, уушгины амилуулалт
               </div>
               <div style={styles.leftText}>50. Амьсгалын эрхтний үйл ажиллагааны алдагдал</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>50.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Цочмог хөхрөлт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>50.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Таталдсан амьсгал (үхлийн өмнөх амьсгал)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>50.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Амьсгал хэт олшрох (амьсгал нэг минутанд &#62;40 олон)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>50.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Амьсгал хэт цөөрөх (амьсгал нэг минутанд &#60;6 цөөн)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>50.5
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хүнд хэлбэрийн гипоксеми (PаO2/FiO2&#60;200 эсвэл О2-ийн
                  ханамж
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 60 }}>&nbsp;</span>60 минутаас дээш хугацаанд 90%-с бага байх)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>50.6
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Мэдээгүйжүүлэгтэй холбоогүйгээр цагаан мөгөөрсөн хоолойд
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 60 }}>&nbsp;</span>гуурс тавьж амьсгалуулах
               </div>
               <div style={styles.leftText}>51. Бөөрний үйл ажиллагааны алдагдал</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>51.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Шингэн сэлбэлт эсвэл шээс хөөх эмчилгээнд үр дүнгүй шээс
                  багасах
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>51.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Бөөрний цочмог дутагдлын үед диалез хийсэн
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>51.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Цочмог хүнд хэлбэрийн азотеми
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 60 }}>&nbsp;</span>(креатинин&#62;300 ммоль/мл эсвэл 3.5 мг/дл буюу түүнээс
                  их)
               </div>
               <div style={styles.leftText}>52. Бүлэгнэлт, гематологийн алдагдал</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>52.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Бүлэн үүсэхгүй
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>52.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Цус эсвэл улаан эс их хэмжээгээр сэлбэх (5нэгжээс дээш)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>52.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Цочмог,хүнд хэлбэрийн ялтсын цөөрөл(50.000 ялтас/мл-с
                  бага)
               </div>
               <div style={styles.leftText}>53. Элэгний үйл ажиллагааны алдагдал</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>53.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Манас таталтын урьдалтай үед шарлах
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>53.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Цочмог, хүнд хэлбэрийн хурц гипербилирубинеми
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 60 }}>&nbsp;</span>(билирубин&#62;100 ммоль/л-ээс 6.0 мг/дл-с их)
               </div>
               <div style={styles.leftText}>54. Мэдрэлийн үйл ажиллагааны алдагдал</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>54.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Удаан хугацаагаар ухаангүй байх
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 60 }}>&nbsp;</span>(12 цаг болон түүнээс дээш хугацаагаар үргэлжилсэн
                  дугжраа)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>54.2
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Цус харвалт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>54.3
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Эпилепсийн байдал/хянаж чадахгүй байгаа таталт
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>54.4
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Бүтэн саажилт (тархмал)
               </div>
               <div style={styles.leftText}>55. Умайн үйл ажиллагааны алдагдал</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>55.1
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Умайг авахад хүргэсэн цус алдалт эсвэл халдвар:
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>&nbsp;</span>
                  <span style={{ marginLeft: 30 }}>1 тийм</span>
                  <span style={{ marginLeft: 30 }}>2 үгүй</span>
               </div>
               <div style={styles.leftText}>
                  56. Клиникийн төгсгөлийн онош:
                  <span style={{ marginLeft: 30 }}>/ӨОУА-10 кодлоно уу/</span>
               </div>

               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Үндсэн онош:
                  ____________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>
                  ___________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хүндрэл:
                  __________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>
                  ___________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Дагалдах онош:
                  __________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>
                  ___________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>57. Эмнэлгээс гарсан, шилжсэн, нас барсан (зур)</div>
               <div style={styles.leftText}>58. Эмэгтэй дээд шатлалын аль нэг эмнэлэгт шилжсэн:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>&nbsp;</span>
                  <span style={{ marginLeft: 30 }}>1 тийм</span>
                  <span style={{ marginLeft: 30 }}>2 үгүй</span>
               </div>
               <div style={styles.leftText}>
                  59. Эмнэлгээс гарсан, шилжсэн, нас барсан _________он _______сар ______өдөр
               </div>
               <div style={styles.leftText}>60. Ор хоног: _________хоног _________цаг _________минут</div>
               <div style={styles.leftText}>61. Эх эндсэн үед: Эмгэг судлалын шинжилгээ хийгдсэн эсэх</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>&nbsp;</span>
                  <span style={{ marginLeft: 30 }}>1. Хийгдсэн</span>
                  <span style={{ marginLeft: 30 }}>2. Хийгдээгүй</span>
               </div>
               <div style={styles.leftText}>62.1 Эхийн эндэгдэл</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>&nbsp;</span>Эмгэг судлалын шинжилгээний онош (ӨОУА-10 кодлох)
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Үндсэн онош:
                  ____________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>
                  ___________________________________________________________________________________________
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хүндрэл:
                  __________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>
                  ___________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Дагалдах онош:
                  __________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>
                  ___________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>62.2 Эхийн ноцтой хүндрэл</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>&nbsp;</span>Ихэс, умай, дайврыг гистологи шинжилгээнд илгээсэн эсэх
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>1. Илгээсэн</span>
                  <span style={{ marginLeft: 30 }}>2. Илгээгээгүй</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>Ихэс, умай, дайврын гистологи шинжилгээний дүгнэлт:</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Үндсэн онош:
                  ____________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>
                  ___________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Хүндрэл:
                  __________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>
                  ___________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>Дагалдах онош:
                  __________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 20 }}>&nbsp;</span>
                  ___________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>63. Онош тохирсон эсэх:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>1. Тохирсон</span>
                  <span style={{ marginLeft: 30 }}>2. Тохироогүй (зур)</span>
               </div>
               <div style={styles.leftText}>
                  64. Тохироогүй бол: 1. Үндсэн оношоор 2. Дагалдах оношоор 3. Хүндрэлээр (зур)
               </div>
               <div style={styles.leftText}>65. Эх барихын шалтгаантай эсэх:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>1. Тийм</span>
                  <span style={{ marginLeft: 30 }}>2. Үгүй</span>
               </div>
               <div style={styles.leftText}>66. Хожимдол 1: Тайлбараа бичих</div>
               <div style={styles.leftText}>65. Эх барихын шалтгаантай эсэх:</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     1. ________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     2. ________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>Хожимдол 2: Тайлбараа бичих</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     1. ________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     2. ________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>Хожимдол 3: Тайлбараа бичих</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     1. ________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     2. ________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     3. ________________________________________________________________________________________
                  </span>
               </div>
               <div style={styles.leftText}>67. Нярайн хүйс: 1. Хүү 2. Охин</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>Нярайн хүйс: 1. Хүү 2. Охин</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>Нярайн хүйс: 1. Хүү 2. Охин</span>
               </div>
               <div style={styles.leftText}>68. Биеийн жин...........гр, өндөр.......................см</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>Биеийн жин...........гр, өндөр.......................см</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>Биеийн жин...........гр, өндөр.......................см</span>
               </div>
               <div style={styles.leftText}>69. Нярайн байдал: амьд, амьгүй, нас барсан (зур)</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>Нярайн байдал: амьд, амьгүй, нас барсан (зур)</span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>Нярайн байдал: амьд, амьгүй, нас барсан (зур)</span>
               </div>
               <div style={styles.leftText}>70. Амьд бол 1 минутын дараах Апгарын үнэлгээ: ______________________</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     Амьд бол 1 минутын дараах Апгарын үнэлгээ: ______________________
                  </span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     Амьд бол 1 минутын дараах Апгарын үнэлгээ: ______________________
                  </span>
               </div>
               <div style={styles.leftText}>71. Амьд бол 5 минутын дараах Апгарын үнэлгээ: ______________________</div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     Амьд бол 5 минутын дараах Апгарын үнэлгээ: ______________________
                  </span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     Амьд бол 5 минутын дараах Апгарын үнэлгээ: ______________________
                  </span>
               </div>
               <div style={styles.leftText}>72. Гэрийн төрөлт бол:</div>
               <div style={styles.leftText}></div>
               <div style={styles.leftText}></div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     72.1 <span style={{ marginLeft: 30 }}>Эмч дуудсан хугацаа </span>
                     <span style={{ marginLeft: 30 }}>_______он _____сар _____өдөр _____цаг _____минут</span>
                  </span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     72.2 <span style={{ marginLeft: 30 }}>Төрсөн хугацаа </span>
                     <span style={{ marginLeft: 55 }}>_______он _____сар _____өдөр _____цаг _____минут</span>
                  </span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     72.3
                     <span style={{ marginLeft: 30 }}>Төрөөд эмнэлэгт хэвтсэн хугацаа</span>
                  </span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     72.4 <span style={{ marginLeft: 30 }}>Эмч очсон хугацаа </span>
                     <span style={{ marginLeft: 40 }}>_______он _____сар _____өдөр _____цаг _____минут</span>
                  </span>
               </div>
               <div style={styles.leftText}>
                  <span style={{ marginLeft: 30 }}>
                     <b>Мэдээлсэн</b>
                  </span>
               </div>
               <div style={styles.centerText}>Огноо: _____он ___сар ___өдөр ___цаг ___минут</div>
               <div style={styles.centerText}>
                  Аймаг /хот: _____________________________
                  <span>сум/дүүрэг: _____________________________</span>
               </div>
               <div style={styles.centerText}>
                  Эмнэлгийн нэр: _______________________________________________________________________________________
               </div>
               <div style={styles.centerText}>
                  Эмчийн нэр: _________________________________________________________________________________________
               </div>
               <div style={styles.centerText}>
                  Албан тушаал: ________________________________________________________________________________________
               </div>
            </div>
         </div>
      </>
   );
}

export default AM17;
