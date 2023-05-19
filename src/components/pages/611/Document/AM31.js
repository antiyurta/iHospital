import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-31
function AM31() {
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
         marginTop: 0
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
                              Эрүүл мэндийн бүртгэлийн маягт АМ-31
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 10 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>
                     29 ХОНОГООС 5 ХҮРТЭЛХ НАСНЫ ХҮҮХДИЙН ЭНДЭГДЛИЙГ МЭДЭЭЛЭХ ХУУДАС
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <b>Мэдээлсэн газар:</b>
                  <span style={{ marginLeft: 30 }}>Аймаг/хот: __________________________</span>
                  <span style={{ marginLeft: 30 }}>Сум/дүүрэг: __________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 130 }}>
                     Эмнэлгийн нэр: __________________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 130 }}>
                     Эмчийн овог, нэр: _______________________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 130 }}>
                     Эмчийн холбоо барих утас: _____________________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <b>Мэдээлсэн огноо:</b>
                  <span style={{ marginLeft: 30 }}>______он ____сар ____өдөр ____цаг ____минут</span>
               </div>
               <div style={styles.rowStyle}>
                  <b>Ерөнхий мэдээлэл:</b>
               </div>
               <div style={styles.rowStyle}>1. Эцэг /эх/-ийн нэр: ____________________________</div>
               <div style={styles.rowStyle}>2. Хүүхдийн нэр: ____________________________</div>
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
                  3. Хүүхдийн регистрийн дугаар:
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
                  4. Оршин суугаа хаяг:
                  <span style={{ marginLeft: 30 }}>Аймаг/хот: __________________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 150 }}>Сум/дүүрэг: __________________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 150 }}>Баг/хороо: ___________________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  5. Эхийн боловсрол:
                  <span style={{ marginLeft: 30 }}>1. Боловсролгүй</span>
                  <span style={{ marginLeft: 30 }}>4. Мэргэжлийн ба техникийн</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 140 }}>2. Бага</span>
                  <span style={{ marginLeft: 85 }}>5. Дээд</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 140 }}>3. Дунд</span>
                  <span style={{ marginLeft: 80 }}>6. Мэдээлэлгүй</span>
               </div>
               <div style={styles.rowStyle}>
                  6. Ажил эрхлэлт:
                  <span style={{ marginLeft: 30 }}>1. Ажилтай</span>
                  <span style={{ marginLeft: 30 }}>3. Малчин</span>
                  <span style={{ marginLeft: 30 }}>5. Сурагч</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 120 }}>2. Ажилгүй</span>
                  <span style={{ marginLeft: 30 }}>4. Оюутан</span>
                  <span style={{ marginLeft: 30 }}>6. Бусад _________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  7. Хүүхдийн гэр бүл эмзэг бүлэгт хамаарагдах эсэх:
                  <span style={{ marginLeft: 30 }}>1. Тийм;</span>
                  <span style={{ marginLeft: 30 }}>2. Үгүй;</span>
                  <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй</span>
               </div>
               <div style={styles.rowStyle}>8. Тийм бол эмзэг бүлгийн аль хэсэгт хамаарагдах вэ?</div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 80 }}>1. Засгийн газраас тогтоосон амьжиргааны баталгаажих түвшнээс</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 80 }}>доогуур амьдралтай, орлого багатай, ажил эрхлээгүй</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 80 }}>
                     2. Нийгмийн байнгын анхаарал халамжид байхаас өөр аргагүй хэсэг
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 80 }}>3. Өрх толгойлсон эх/эцэг</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 80 }}>4. Архины хамааралтай хүн гэр бүлд нь байдаг</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 80 }}>5. Бусад ___________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <b>Хүүхдийн ерөнхий мэдээлэл:</b>
               </div>
               <div style={styles.rowStyle}>
                  9. Хүүхдийн төрсөн он, сар, өдөр:
                  <span style={{ marginLeft: 30 }}>_____он ___сар ___өдөр ___цаг ___минут</span>
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
                  10. Нас:
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div> &nbsp;нас
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div> &nbsp;сар
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div> &nbsp;хоног
                  </div>
               </div>
               <div style={styles.rowStyle}>
                  11. Хүйс:
                  <span style={{ marginLeft: 80 }}> 1. Эрэгтэй 2. Эмэгтэй</span>
               </div>
               <div style={styles.rowStyle}>
                  12. Хүүхдийн төрсөн газар :<span style={{ marginLeft: 30 }}>1. ЭХЭМҮТ </span>
                  <span style={{ marginLeft: 160 }}>6. Хувийн эмнэлэг</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 180 }}>2. Хотын амаржих газрууд </span>
                  <span style={{ marginLeft: 75 }}>7. Тээвэрлэх үед</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 180 }}>3. Аймгийн нэгдсэн эмнэлэг, БОЭТ</span>
                  <span style={{ marginLeft: 30 }}>8. Сумын эмнэлэг</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 180 }}>4. Дүүргийн эмнэлэг</span>
                  <span style={{ marginLeft: 110 }}>9. Бусад _________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 180 }}>5. Гэрт</span>
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
                  13. Төрөх үеийн биеийн жин:
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                  </div>
                  (гр)
               </div>
               <div style={styles.rowStyle}>14. Хүүхдийг анх амлуулсан хугацаа:</div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 110 }}>1. Төрөнгүүт нь 1 цагийн дотор</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 110 }}>2. Төрсний дараах эхний 1 хоногт</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 110 }}>3. 2 дахь хоног, түүнээс хойш хугацаанд</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 110 }}>4. Амлуулаагүй</span>
               </div>
               <div style={styles.rowStyle}>
                  15. Амьдралын эхний 6 сарын дотор хүүхдийг дан хөхний сүүгээр хооллосон уу?
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 110 }}>1. Тийм; 2. Үгүй</span>
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
                  16. Хүүхдийн одоогийн биеийн жин
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                  </div>
                  (гр)
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
                  17. Одоогийн биеийн өндөр
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                  </div>
                  (см)
               </div>
               <div style={styles.rowStyle}>
                  19. Дархлаажуулалтад хамрагдсан байдал (дархлаажуулалт хийгдсэн бол чагтална уу):
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>• БЦЖ</span>
                  <span style={{ marginLeft: 110 }}>□ 1 тун</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>• Тавт вакцин</span>
                  <span style={{ marginLeft: 70 }}>□ 1 тун</span>
                  <span style={{ marginLeft: 50 }}>□ 2 тун</span>
                  <span style={{ marginLeft: 50 }}>□ 3 тун</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>• УГУ (улаанууд, гахайн хавдар, улаанбурхан) вакцин</span>
                  <span style={{ marginLeft: 70 }}>□ 1 тун</span>
                  <span style={{ marginLeft: 50 }}>□ 2 тун</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>• В гепатит</span>
                  <span style={{ marginLeft: 110 }}>□ 1 тун</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>• Халдварт саа</span>
                  <span style={{ marginLeft: 50 }}>□ 1 тун</span>
                  <span style={{ marginLeft: 50 }}>□ 2 тун</span>
                  <span style={{ marginLeft: 50 }}>□ 3 тун</span>
                  <span style={{ marginLeft: 50 }}>□ 4 тун</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>• Сахуу татран</span>
                  <span style={{ marginLeft: 50 }}>□ 1 тун</span>
                  <span style={{ marginLeft: 50 }}>□ 2 тун</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 50 }}>• Бусад ____________________________________</span>
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.rowStyle}>
                  <b>Хүүхдийн өвчлөл, эндэгдлийн мэдээлэл:</b>
               </div>
               <div style={styles.rowStyle}>
                  20. Хүүхдийн нас барсан он, сар, өдөр, цаг, минут:
                  <span style={{ marginLeft: 50 }}>_____он ___сар ___өдөр ___цаг ___минут</span>
               </div>
               <div style={styles.rowStyle}>
                  21. Хүүхэд эндэхээс хэд хоногийн өмнө дараах шинж тэмдгүүдээс илэрч байсан эсэхийг сонгоно уу
               </div>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.topText, ...{ width: 50 } }}>№</td>

                        <td style={{ ...styles.centerText, ...{ width: 200 } }}>Өвчний шинж тэмдэг</td>

                        <td style={{ ...styles.centerText, ...{ width: 200 } }}>Хариултыг дугуйлна уу</td>
                        <td style={{ ...styles.centerText, ...{ width: 200 } }}>
                           Хэрэв тийм бол шинж тэмдэг үргэлжилсэн хугацааг бичнэ үү
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>1</td>
                        <td style={styles.leftText}>Хоол идэж чадахгүй</td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>2</td>
                        <td style={styles.leftText}>Халуурсан</td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>3</td>
                        <td style={styles.leftText}>Ханиалгасан</td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>4</td>
                        <td style={styles.leftText}>Амьсгал түргэссэн</td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>5</td>
                        <td style={styles.leftText}>Цээж хонхолзсон</td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>6</td>
                        <td style={styles.leftText}>Хөхөрсөн</td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>7</td>
                        <td style={styles.leftText}>Суулгасан</td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>8</td>
                        <td style={styles.leftText}>Бөөлжсөн</td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>9</td>
                        <td style={styles.leftText}>Гэдэс дүүрсэн</td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>10</td>
                        <td style={styles.leftText}>Татсан</td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>11</td>
                        <td style={styles.leftText}>Арьсаар ямар нэг тууралт гарсан</td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>12</td>
                        <td style={styles.leftText}>Осол гэмтэл</td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>13</td>
                        <td style={styles.leftText}>Хүчирхийлэлд өртсөн</td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>14</td>
                        <td style={styles.leftText}>
                           Хэрэв өөр шинж тэмдэг байсан бол дэлгэрэнгүй бичнэ үү
                           <div>_____________________</div>
                           <div>_____________________</div>
                           <div>_____________________</div>
                        </td>
                        <td style={styles.centerText}>Тийм / Үгүй</td>
                        <td style={styles.centerText}>___хоног</td>
                     </tr>
                  </tbody>
               </Table>
               <div style={styles.rowStyle}>
                  22. Дээрх шинж тэмдгийн үед эмчилгээ хийсэн эсэх:
                  <span style={{ marginLeft: 30 }}>1. Тийм; 2. Үгүй</span>
               </div>
               <div style={styles.rowStyle}>23. Тийм бол хаана эмчилсэн бэ?</div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>1. Өрхийн эмнэлэгт</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>2. Сумын эмнэлэгт</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>3. Хувийн эмнэлэгт</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>4. Аймгийн эмнэлэгт</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>5. Төв эмнэлэг, төрөлжсөн нарийн мэргэжлийн эмнэлэгт</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>6. Гэрт</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 60 }}>o Эмчийн заавраар</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 60 }}>o Өөрсдөө</span>
               </div>
               <div style={styles.rowStyle}>24. Хүүхэд эндсэн газар:</div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>1. эмнэлэгт</span>
                  <span style={{ marginLeft: 100 }}>4. тээврийн хэрэгсэлд</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>2. гэрт</span>
                  <span style={{ marginLeft: 125 }}>5. бусад ___________________</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>3. хээр, гадаа</span>
               </div>
               <div style={styles.rowStyle}>
                  25. Эмнэлэгт хэвтсэн он, сар, өдөр, цаг, минут:
                  <span style={{ marginLeft: 30 }}>_____он ___сар ___өдөр ___цаг ___минут</span>
               </div>
               <div style={styles.rowStyle}>
                  26. Хүүхдийг энэ өвчний үед нэг эмнэлгээс нөгөө эмнэлэг рүү шилжүүлсэн эсэх?
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>1. Тийм; 2. Үгүй</span>
               </div>
               <div style={styles.rowStyle}>27. Хүүхэд дээд шатлалын аль эмнэлэгт шилжиж, эмчлэгдсэн бэ:</div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>
                     1. 1-р шатлал (сум/өрх)→2-р шатлал (аймаг/дүүрэг/хувийн эмнэлэг)
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>
                     2. 1-р шатлал (сум/өрх)→3-р шатлал (төв эмнэлэг, төрөлжсөн нарийн мэргэжлийн эмнэлэг)
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>
                     3. 2-р шатлал (аймаг/дүүрэг)→3-р шатлал (төв эмнэлэг, төрөлжсөн нарийн мэргэжлийн эмнэлэг)
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>
                     4. 3-р шатлал (төв эмнэлэг, төрөлжсөн нарийн мэргэжлийн эмнэлэг)→1-р шатлал (сум/өрх) / 2-р шатлал
                     (аймаг/дүүрэг)
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>5. Хувийн эмнэлэг→Улсын эмнэлэг</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>6. Бусад ___________________________</span>
               </div>
               <div style={styles.rowStyle}>28. Хүүхэд шилжиж ирсэн үеийн биеийн байдал:</div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>1. дунд; 2. хүндэвтэр; 3. хүнд; 4. маш хүнд</span>
               </div>
               <div style={styles.rowStyle}>29. Эмнэлэгт хийгдсэн эмчилгээг дугуйлна уу:</div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>1. Сэхээн амьдруулалт</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>2. Хүчилтөрөгч эмчилгээ</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>3. Судсаар дусал шингэн залгасан</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>4. Антибиотик</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>5. Таталтын эсрэг эмчилгээ</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>6. Унтуулж, тайвшруулах эмчилгээ</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>7. Тархины бодисын солилцоог сайжруулдаг бэлдмэлүүд</span>
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>8. Гуурсан хоолой өргөсгөгч эмүүд</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>9. Цус, цусан бүтээгдэхүүн сэлбэсэн</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>10. Стеройдууд</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>11. Сүрьеэгийн эмчилгээ</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>12. Судас агшаагч эмүүд (допамин, добутамин, адреналин)</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>13. Амьсгал дэмжсэн (амьсгалын аппарат)</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>14. Халуун бууруулах, өвчин намдаах эмүүд</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>15. Мэс засал</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>16. Бусад ___________________________</span>
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
                  30. Эмнэлэгт эндсэн бол ор хоног:
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div> &nbsp;хоног
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div> &nbsp;цаг
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div> &nbsp;минут
                  </div>
               </div>
               <div style={styles.rowStyle}>31. Хүүхэд эндсэн тасгийн нэр:</div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>1. Эрчимт эмчилгээний тасаг</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>2. Яаралтай тусламжийн тасаг</span>
               </div>
               <div style={styles.rowStyle}>
                  <span style={{ marginLeft: 30 }}>
                     3. Бусад (нэрлэнэ үү) ____________________________________________
                  </span>
               </div>
               <div style={styles.rowStyle}>32. Эмнэлзүйн онош:</div>
               <div style={{ marginLeft: 30 }}>
                  <div style={styles.leftText}>
                     <span style={{ marginLeft: 20 }}>&nbsp;</span>Үндсэн онош:
                     _________________________________________________________________________________________
                  </div>
                  <div style={styles.leftText}>
                     <span style={{ marginLeft: 20 }}>&nbsp;</span>
                     _________________________________________________________________________________________________________
                  </div>
                  <div style={styles.leftText}>
                     <span style={{ marginLeft: 20 }}>&nbsp;</span>Хүндрэл:
                     _______________________________________________________________________________________________
                  </div>
                  <div style={styles.leftText}>
                     <span style={{ marginLeft: 20 }}>&nbsp;</span>
                     _________________________________________________________________________________________________________
                  </div>
                  <div style={styles.leftText}>
                     <span style={{ marginLeft: 20 }}>&nbsp;</span>Дагалдах онош (суурь өвчин байсан бол дурдана уу):
                     ______________________________________________
                  </div>
                  <div style={styles.leftText}>
                     <span style={{ marginLeft: 20 }}>&nbsp;</span>
                     _________________________________________________________________________________________________________
                  </div>
               </div>
               <div style={styles.rowStyle}>
                  33. Эмгэг судлалын шинжилгээнд орсон эсэх:
                  <span style={{ marginLeft: 30 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.rowStyle}>34. Эмгэг судлалын онош:</div>
               <div style={{ marginLeft: 30 }}>
                  <div style={styles.leftText}>
                     <span style={{ marginLeft: 20 }}>&nbsp;</span>Үндсэн онош:
                     _________________________________________________________________________________________
                  </div>
                  <div style={styles.leftText}>
                     <span style={{ marginLeft: 20 }}>&nbsp;</span>
                     _________________________________________________________________________________________________________
                  </div>
                  <div style={styles.leftText}>
                     <span style={{ marginLeft: 20 }}>&nbsp;</span>Хүндрэл:
                     _______________________________________________________________________________________________
                  </div>
                  <div style={styles.leftText}>
                     <span style={{ marginLeft: 20 }}>&nbsp;</span>
                     _________________________________________________________________________________________________________
                  </div>
                  <div style={styles.leftText}>
                     <span style={{ marginLeft: 20 }}>&nbsp;</span>Дагалдах онош:
                     _______________________________________________________________________________________
                  </div>
                  <div style={styles.leftText}>
                     <span style={{ marginLeft: 20 }}>&nbsp;</span>
                     _________________________________________________________________________________________________________
                  </div>
               </div>
               <div style={styles.rowStyle}>
                  35. Эмгэг судлалын онош тохирсон эсэх:
                  <span style={{ marginLeft: 30 }}>1. тийм</span>
                  <span style={{ marginLeft: 30 }}>2. үгүй</span>
               </div>
               <div style={styles.rowStyle}>
                  • 1-р хожимдол (гэр бүлийнх нь хүүхдийн өвчин хүндэрснийг мэдээгүй, тусламж хайгаагүй эмнэлэгт хожуу
                  үзүүлсэн)
               </div>
               <div style={styles.leftText}>
                  _________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  _________________________________________________________________________________________________________________________
               </div>
               <div style={styles.rowStyle}>
                  • 2-р хожимдол (эмнэлгийн байгууллагаас хол, тээврийн хэрэгсэл байгаагүй, цаг агаарын хэцүү нөхцөл)
               </div>
               <div style={styles.leftText}>
                  _________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  • 3-р хожимдол (тоног төхөөрөмж, эм тарианы дутагдал, эмчийн ур чадвар сул байх, эмчилгээний тактик
                  буруу, эмчилгээг оройтож эхэлсэн)
               </div>
               <div style={styles.leftText}>
                  _________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  _________________________________________________________________________________________________________________________
               </div>
            </div>
         </div>
      </>
   );
}

export default AM31;
