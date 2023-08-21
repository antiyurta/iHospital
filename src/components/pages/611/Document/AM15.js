import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-15
function AM15() {
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
      rowStyle: {
         fontSize: 11
      },
      leftText: {
         verticalAlign: 'middle',
         fontSize: 11,
         padding: 0,
         paddingLeft: 5,
         marginTop: 5
      },
      centerText: {
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 11,
         padding: 2
      },
      flexContainer: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-evenly',
         alignItems: 'center',
         marginTop: 10,
         marginBottom: 10
      },
      verticalText: {
         writingMode: 'vertical-rl',
         verticalAlign: 'middle',
         padding: 4,
         rotate: '180deg',
         lineHeight: 1,
         fontSize: 11,
         textAlign: 'center'
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
                  <span style={styles.generalText}></span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                     <span style={{ fontWeight: 'bold', fontSize: 14 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-15</span>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>ЖИРЭМСЭН ЭМЭГТЭЙН ХЯНАЛТЫН ХӨТӨЧ КАРТ №</span>
               </div>
               <div style={{ ...styles.generalText, ...{ marginLeft: 0 } }}>
                  <div style={{ display: 'flex', marginTop: 5 }}>
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
                  <div style={{ display: 'flex', marginTop: 5 }}>
                     <span style={styles.generalText}>ЭМД:</span>
                     <div style={{ display: 'flex', marginLeft: 5 }}>
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
                  ХОТ, АЙМАГ, СУМ, БАГ, ХОРОО
                  ____________________________________________________________________________________________
               </div>
               <div style={styles.rowStyle}>
                  ЭМНЭЛЭГ
                  ____________________________________________________________________________________________________________________
               </div>
               <Table
                  bordered
                  className="document"
                  width={700}
                  style={{ borderWidth: 2, borderColor: '#000', marginTop: 5 }}
               >
                  <tbody>
                     <tr>
                        <td style={styles.leftText}>
                           <b>ХӨТЛӨХ ЗААВАР: Жирэмсэн эмэгтэйд энэ хөтөчийг хөтөлнө.</b>
                           <div style={styles.leftText}>-(*) тэмдэглэгээтэй хэсгийг нөхөж бичнэ.</div>
                           <div style={styles.leftText}>-(□) Цагаан байгаа нүд бүрийг заавал үзэж тэмдэглэнэ.</div>
                           <div style={styles.leftText}>
                              -(**) тэмдэглэгээтэй хэсгийг Тийм бол (T). Үгүй бол (Ү) гэж. Тодруулах шаардлагатай
                           </div>
                           <div style={styles.leftText}>
                              үзүүлэлтүүдийг эхний хүснэгтэнд байгаа тэмдэглэгээний дагуу тэмдэглэнэ.
                           </div>
                           <div style={styles.leftText}>
                              -Шаардлага үзлэг шинжилгээг (Чанд авиа. Зүрхний бичлэг. Элэгний шинжилгээ ... гэх мэт)
                              хугацаа харгалзахгүй хийж. Бусад гэсэн хэсгэт эсвэл арын нэмэлт хуудсанд тэмдэглэнэ.
                           </div>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <div style={{ ...styles.centerText, ...{ marginTop: 100 } }}>
                  <b>I. ЛАВЛАГААНЫ ХЭСЭГ</b>
               </div>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     justifyContent: 'space-between'
                  }}
               >
                  <div style={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
                     <div style={styles.leftText}>
                        <b>1. *Овог __________________________</b>
                     </div>
                     <div style={styles.leftText}>Эцэг /эх/-ийн нэр __________________</div>
                     <div style={styles.leftText}>Нэр _____________________________</div>
                     <div style={styles.leftText}>
                        <b>2. *Төрсөн _______ он ____ сар ____ өдөр</b>
                     </div>
                     <div style={styles.leftText}>
                        <b>3. Жирэмсэн эмэгтэйн цусны бүлэг</b>
                     </div>
                     <div style={styles.leftText}>1-р бүлэг □ 2-р бүлэг □ 3-р бүлэг □ 4-р бүлэг</div>
                     <div style={styles.leftText}>резус бүлэг эерэг □ сөрөг □</div>
                     <div style={styles.leftText}>
                        <b>4. *Яс үндэс _______________________________ </b>
                     </div>
                     <div style={styles.leftText}>
                        <b>5. *Тогтмол хаяг, гэрийн болон гар утас ________ </b>
                     </div>
                     <div style={styles.leftText}>
                        <b>___________________________________________ </b>
                     </div>
                     <div style={styles.leftText}>
                        <b>6. *Ажлын газар. Албан тушаал. Утас __________ </b>
                     </div>
                     <div style={styles.leftText}>
                        <b>___________________________________________ </b>
                     </div>
                     <div style={styles.leftText}>
                        <b>7. *Мэргэжил _______________________________ </b>
                     </div>
                     <div style={styles.leftText}>
                        <b>8. Боловсролын байдал ** </b>
                     </div>
                     <div
                        style={{
                           ...styles.leftText,
                           ...{ display: 'flex', flexDirection: 'column', width: 200 }
                        }}
                     >
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Боловсролгүй <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Бага <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Суурь боловсрол <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Бүрэн дунд <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Мэргэжлийн болон техникийн <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Дидломын <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Бакалавр <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Магистр <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Доктор <span>□</span>
                        </div>
                     </div>
                     <div style={styles.leftText}>
                        <b>13.1 Архи хэрэглэдэг эсэх? /зур/ тийм/үгүй </b>
                     </div>
                     <div style={styles.leftText}>
                        <b>13.2 Тамхи хэрэглэдэг эсэх? /зур/ тийм/үгүй </b>
                     </div>
                     <div style={styles.leftText}>
                        <b>
                           14. Урт хугацааны эм биологийн идэвхит бүтээгдэхүүн тогтмол хэрэглэдэг эсэх? /зур/ Тийм /
                           Үгүй
                        </b>
                     </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
                     <div style={styles.leftText}>
                        <b> 9. Хөдөлмөр эрхлэлтийн байдал</b>
                     </div>
                     <div
                        style={{
                           ...styles.leftText,
                           ...{ display: 'flex', flexDirection: 'column', width: 250 }
                        }}
                     >
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Цалин хөлстэй ажиллагч <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Ажил олгогч <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Хувиараа хөдөлмөр эрхлэгч<span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Нөхөрлөл хоршооны гишүүн
                           <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Мал аж ахуй эхрлэгч <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Өрхийн үйлдвэрлэл, үйлчилгээнд цалин <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Бусад /бичнэ/ ____________________________
                        </div>
                     </div>
                     <div style={styles.leftText}>
                        <b>10. Хөдөлмөр эрхлэхгүй шалтгаан</b>
                     </div>
                     <div
                        style={{
                           ...styles.leftText,
                           ...{ display: 'flex', flexDirection: 'column', width: 250 }
                        }}
                     >
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Сургуульд сурдаг <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Тэтгэвэрт <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Хөдөлмөр эрхлэх чадваргүй <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Гэрийн ажилтай <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Тохирох ажил олдохгүй <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Ажил хайж байгаа
                           <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Ажиллах сонирхолгүй <span>□</span>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           Бусад /бичнэ/ ____________________________
                        </div>
                     </div>
                     <div style={styles.leftText}>
                        <b>11. Гэр бүлийн байдал</b>
                     </div>
                     <div style={styles.leftText}>
                        Огт гэрлээгүй <span style={{ marginLeft: 10 }}>□</span>
                        <span style={{ marginLeft: 30 }}>Тусгаарласан</span>
                        <span style={{ marginLeft: 10 }}>□</span>
                     </div>
                     <div style={styles.leftText}>
                        Батлуулсан <span style={{ marginLeft: 10 }}>□</span>
                        <span style={{ marginLeft: 30 }}>Цуцалсан</span>
                        <span style={{ marginLeft: 10 }}>□</span>
                     </div>
                     <div style={styles.leftText}>
                        Батлуулаагүй <span style={{ marginLeft: 10 }}>□</span>
                        <span style={{ marginLeft: 30 }}>Бэлбэсэн</span>
                        <span style={{ marginLeft: 10 }}>□</span>
                     </div>
                     <div style={styles.leftText}>
                        <b>12. Хөгжлийн бэрхшээлтэй эсэх</b>
                     </div>
                     <div style={styles.leftText}>
                        Тийм <span style={{ marginLeft: 10 }}>□</span>
                     </div>
                     <div style={styles.leftText}>
                        Үгүй <span style={{ marginLeft: 10 }}>□</span>
                     </div>
                     <div style={styles.leftText}>*Ажлын нөхцөл</div>
                     <div style={styles.leftText}>
                        Ердийн <span style={{ marginLeft: 10 }}>□</span>
                        <span style={{ marginLeft: 30 }}>Хүнд</span>
                        <span style={{ marginLeft: 10 }}>□</span>
                        <span style={{ marginLeft: 30 }}>Хортой</span>
                        <span style={{ marginLeft: 10 }}>□</span>
                     </div>
                     <div style={styles.leftText}>* Ам бүлийн тоо ______</div>
                     <div style={styles.leftText}>
                        <b>Тийм бол бичих: ________________________</b>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.centerText}>
                  <b>II. ӨМНӨХ ЖИРЭМСЛЭЛТ, ТӨРӨЛТИЙН БАЙДАЛ*</b>
               </div>
               <Table bordered className="document">
                  <tbody>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 100 } }}>Хэд дэх жирэмслэлт</td>
                        <td style={{ ...styles.centerText, ...{ width: 80 } }}>Он</td>
                        <td style={{ ...styles.centerText, ...{ width: 250 } }}>
                           Жирэмсний төгсгөл (үр хөндөлт, зулбалт, төрөлт алин болохыг бич)
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 100 } }}>Жирэмсний хүндрэл</td>
                        <td style={{ ...styles.centerText, ...{ width: 100 } }}>Төрөлтийн хүндрэл</td>
                        <td style={{ ...styles.centerText, ...{ width: 120 } }}>Төрсний дараах хүндрэл</td>
                        <td style={{ ...styles.centerText, ...{ width: 100 } }}>Хүүхдийн жин, хүйс, амьд эсэх</td>
                     </tr>
                     {[...Array(8)].map((x, i) => (
                        <tr key={i}>
                           <td style={styles.leftText}>{i + 1}</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                     ))}
                  </tbody>
               </Table>
               <Table bordered className="document">
                  <tbody>
                     <tr>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }} rowSpan={2}>
                           Эрсдлийн бүлэг
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }} rowSpan={2}>
                           Он
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 380 } }} rowSpan={2}>
                           Нөлөөлөх хүчин зүйлс
                        </td>
                        <td style={styles.centerText} colSpan={5}>
                           Жирэмсний хугацаа (долоо хоногоор)
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>Анх удаа</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>20</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>28</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>32</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>36</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           Огноо
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} rowSpan={4} width={30}>
                           А. Нийгэм биологийн хүчин зүйлс
                        </td>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           18-аас доош. 35-аас дээш насны тулгар төрөгч
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Байнга тамхи татдаг. Архи уудаг. Мансууруулах бодис хэрэглэдэг /доогуур зур/
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Гэр бүлд хүчирхийлэлийн орчин байгаа эсэх
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Жирэмслэхээс өмнөх нэг жилд жирэмслэхээс сэргийлэх арга хэрэглэж байсан эсэх (ЕрөндөгЕ, Уух
                           эм-У, Тарилга-Т, Суулгац-С, Бэлгэвч-Б, Бусад арга- Б/А, Үгүй- Ү гэж тэмдэглэнэ)
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} rowSpan={10} width={30}>
                           Б. Эх барихын ужиг дурдатгал
                        </td>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Өмнөх жирэмслэлт, төрөлт, төрсний дараах үед цус алдаж байсан О20
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Өмнөх жирэмслэлт, төрөлтийг мэс засал, мэс ажилбараар төгссөн (кесар, хавчуураар төрсөн,
                           умдагны үеэр салсан, бусад)
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Өмнөх жирэмсэлтийн үед манас таталтын урьдал, манас таталт О15, үжил халдвар О85-О86 - аар
                           хүндэрсэн
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Зуршсан зулбалт-О03, үр хөндөлт-О04, дутуу төрөлт-О60, умайн гаднах жирэмсэлт-О00, цулцант
                           хураа-О01
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Өсөлтгүй жирэмслэж байсан эсэх
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Ураг, нярай нь эндэж байсан (жирэмсэн, төрөх, төрсний дараах үед)
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Эрхтэн тогтолцооны гажигтай болон оюун санааны эмгэгтэй хүүхэд төрүүлж байсан
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Эмэгтэйчүүдийн мэс ажилбар хийгдэж байсан-умайн хавдар авахуулсан, хярзанд мэс ажилбар
                           хийгдсэн бусад
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Үргүйдэлтэй байсан N97
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Нөхөн үржихүйн эрхтний гажиг хөгжил
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} rowSpan={6} width={30}>
                           &nbsp;
                        </td>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           <b> Зүрх судасны өвчин: </b>Артерийн даралт ихсэх өвчин- I10- I15, xэрлэг-I 00 –I 09,
                           төрөлхийн гажиг-Q20-Q28, бусад-I20-I99
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Амьсгалын замын өвчин: Багтраа- J45, Хатгалгаа-J20-J18, бусад-J00-J99
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           <b>Ходоод элэг цөсны өвчин:</b> Ходоодны шархлаа- К25, элэгний архаг үрэвсэл К73, элэгний
                           хатуурал К74, бусад- К00-К93
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           Бөөр, шээсний замын өвчин N00-N39: Өрөөсөн бөөртэй Q60, гидронефроз-Q61, нефрит- N10- N16,
                           бөөрний хурц ба архаг дутагдал- N17-N19
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           <b>Дотоод шүүрлийн булчирхайн өвчин:</b>
                           Бамбайн эмгэг E00-E07, Чихрийн шижин E10-E14, Тураал, хоол тэжээлийн дутагдал Е40-Е46,
                           аминдэм эрдэс бодисын дутагдал Е50-Е64, бусад Е65-Е68
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           <b>Цусны өвчин:</b> Цус багадлын 2,3-р зэрэг D50-D53, цусны бусад өвчин D55-D77
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.verticalText} rowSpan={11} width={30}>
                           В. Эрхтэн тогтолцооны өвчний дурдатгал
                        </td>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           <b> Хөхний болон эмэгтэйчүүдийн өвчин:</b> Хөхний эмгэгүүд N60-N64, дайвруудын үрэвсэл N70,
                           умай умайн хүзүүний үрэвсэл-N71-N72, эндометроз N80, бусад N70-N99
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>20</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>28</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>32</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>36</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>36</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           <b>Халдварт өвчин:</b> Сүрьеэ-A15-A19; тэмбүү-A51-A52; заг хүйтэн- A54; трихомоназ- A59,
                           хламид-A 70-А74 , элэгний хурц үрэвсэл- B15-B19, бэлгийн эрхтний хомхой- А60, бусад А64
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 30 } }} colSpan={2}>
                           <b>Нүдний өвчин Н00-Н59:</b> холын харалган-2,3-р зэрэг Н53, нүдний даралт ихдэлт H40-H42,
                           бусад
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           <b>Сонсголын эрхтний эмгэг: </b>Н60-Н95
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Сэтгэцийн өвчин F00-F99
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Мэдрэлийн өвчин G00-G99
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           <b>Холбогч эдийн өвчин:</b> L00-L99, M00-M99
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Удамшлын өвчин Q00-Q99
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Хавдар С00-D48
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           <b>Харшил өгдөг эсэх:</b> Юунд;
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           <b>Таргалалт</b>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} rowSpan={10} width={30}>
                           Г.Тухайн жирэмсний үеийн хүндрэлтэй
                        </td>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Жирэмсний эрт үеийн хордлогын хүнд хэлбэр О21
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Жирэмсний үеийн цус алдалт О20
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Манас таталтын урьдал О15
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Ургийн буруу байрлал О21
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Ургийн гаж хөгжил O35
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Ихэр жирэмсэн О30
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Ураг орчмын шингэний ихдэлт О40
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Ураг орчмын шингэний багадалт
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Ургийн өсөлтийн саатал Р05
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Ургийн бүтэлт Р20
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} width={30}></td>
                        <td style={{ ...styles.leftText, ...{ height: 20 } }} colSpan={2}>
                           Эмзэг байдлын эцсийн дүгнэлт
                           <div>&nbsp;</div>
                           <div>&nbsp;</div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                  </tbody>
               </Table>
               <div style={styles.leftText}>Биений юмны талаарх асуумж</div>
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
                        width: '50%',
                        justifyContent: 'space-between'
                     }}
                  >
                     <div style={styles.leftText}>
                        *Анх хэдэн насанд ирсэн
                        <span style={{ marginLeft: 10 }}>□</span>
                     </div>
                     <div style={styles.leftText}>
                        *Одоо хэд хоноод ирдэг <span style={{ marginLeft: 13 }}>□</span>
                     </div>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50%',
                        justifyContent: 'space-between'
                     }}
                  >
                     <div style={styles.leftText}>
                        Хэд хоног үргэлжилдэг <span style={{ marginLeft: 58 }}>□</span>
                     </div>
                     <div style={styles.leftText}>
                        Сүүлийн биений юм хэзээ ирсэн
                        <span style={{ marginLeft: 10 }}>□</span>
                     </div>
                  </div>
               </div>
               <div style={{ ...styles.centerText, ...{ marginTop: 50 } }}>
                  <b>III. ОДООГИЙН ЖИРЭМСНИЙ ЯВЦ</b>
               </div>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.verticalText} width={40}>
                           * Хэд дэх жирэмсэн
                        </td>
                        <td style={styles.verticalText} width={40}>
                           Хяналтанд авсан он, сар, өдөр
                        </td>
                        <td style={styles.verticalText} width={60}>
                           * Хяналтанд орох үеийн жирэмсний хугацаа
                        </td>
                        <td style={styles.verticalText} width={80}>
                           *Хичээлд суусан удаа
                        </td>
                        <td style={styles.verticalText} width={80}>
                           *Онцгой хяналтанд авсан он, сар, өдөр
                        </td>
                        <td style={styles.verticalText} width={80}>
                           *Онцгой хяналтанд авсан шалтгаан
                        </td>
                        <td style={styles.verticalText} width={100}>
                           Урьдчилсан төрөх хугацаа
                        </td>
                        <td style={styles.verticalText} width={40}>
                           *Амралт авсан огноо
                        </td>
                        <td style={styles.verticalText} width={50}>
                           Жирэмсний төгсгөлийн онош, огноо
                        </td>
                     </tr>
                     <tr>
                        {[...Array(9)].map((x, i) => (
                           <td style={styles.centerText} key={i}>
                              {i + 1}
                           </td>
                        ))}
                     </tr>
                     <tr>
                        {[...Array(9)].map((x, i) => (
                           <td style={styles.centerText} key={i}>
                              <div style={{ height: 100 }}>&nbsp;</div>
                           </td>
                        ))}
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.centerText}>
                  <b>IV. ЭНЭ ЖИРЭМСНИЙ ХУГАЦААНД ХИЙГДСЭН ҮЗЛЭГ, ШИНЖИЛГЭЭ</b>
               </div>
               <div style={styles.leftText}>
                  <b>Заавар:</b>
               </div>
               <div style={styles.leftText}>1. Үзлэг хийхийн өмнө үйлдлийн талаар заавал тайлбарлана.</div>
               <div style={styles.leftText}>2. Үйлчлүүлэгчийн асуусан асуултанд хариулна.</div>
               <div style={styles.leftText}>3. Үзлэг хийхдээ үйлчлүүлэгчийн нууцлалыг хадгалсан орчинд хийнэ.</div>
               <div style={styles.leftText}>
                  4. Хэрэв үйлчлүүлэгчид ямар нэг ажилбар хийхээр шийдвэрлэвэл заавал тайлбарлаж, зөвшөөрөл авсан байх
                  шаардлагатай
               </div>
               <div style={styles.leftText}>
                  5. Шаардлагатай тохиолдолд үзлэг, шинжилгээг хугацаа харгалзахгүй шийдвэрлэнэ
               </div>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.centerText} colSpan={3}>
                           Үзлэгийн дугаар
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           I
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           II
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           III
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           IV
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           V
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VI
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VII
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VIII
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>Төрсний дараа</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           Жирэмсэн эмэгтэйд үзлэг хийх товлол
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           &#60;12
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           16
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           20
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           28
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           32
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           36
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           38
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           39-40
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           *Үзлэгт орсон огноо
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           * Үзлэгт ирсэн жирэмсний хугацаа
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           *Хэвийн үеийн артерийн даралт
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           * Биеийн жингийн индекс /жирэмслэхээс өмнө үеийн жин ................/
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           * Биеийн жингийн зөрүү
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           * Биеийн өндөр
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }} colSpan={2} rowSpan={4}>
                           *Аарцгийн хэмжээ
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>Sp</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Cr</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Tr</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>C.Ex</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginTop: 20 }}>
                  <tbody>
                     <tr>
                        <td style={styles.centerText} colSpan={3}>
                           Үзлэгийн дугаар
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           I
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           II
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           III
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           IV
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           V
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VI
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VII
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VIII
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>Төрсний дараа</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           Жирэмсэн эмэгтэйд үзлэг хийх товлол
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           &#60;12
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           16
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           20
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           28
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           32
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           36
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           38
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           39-40
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td rowSpan={18} style={styles.verticalText}>
                           *Зовиур
                        </td>
                        <td style={styles.leftText}>Хагалгааны сорвиор өвдөх</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Дотор муухайрах</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Нойргүйдэх</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Нүд бүрэлзэх</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Аюулхай орчим өвдөх</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Амьсгаадах</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Халуурах /биеийн хэм ...../</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хавагнах</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} rowSpan={4}>
                           Ургийн хөдөлгөөн
                        </td>
                        <td style={styles.leftText}>Хэвийн</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Олширсон</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Цөөрсөн</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Мэдрэгдэхгүй</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} rowSpan={4}>
                           Үтрээгээр ялгарал гарах
                        </td>
                        <td style={styles.leftText}>Хэвийн</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Усархаг</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Идээрхэг</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Цусархаг</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Хэвлийн доогуур өвдөх
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           <div>&nbsp;</div>
                           *Бусад/бичих
                           <div>&nbsp;</div>
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.centerText} colSpan={3}>
                           Үзлэгийн дугаар
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           I
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           II
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           III
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           IV
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           V
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VI
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VII
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VIII
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>Төрсний дараа</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           Жирэмсэн эмэгтэйд үзлэг хийх товлол
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           &#60;12
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           16
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           20
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           28
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           32
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           36
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           38
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           39-40
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2} rowSpan={2}>
                           **Өвдөг, тохой рефлекс
                        </td>
                        <td style={styles.leftText}>Ихэссэн</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Багассан</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.verticalText, ...{ width: 50 } }} rowSpan={5}>
                           **Зүрх судасны тогтолцоо
                        </td>
                        <td style={styles.leftText} rowSpan={2}>
                           Артерийн даралт /Жирэмслэхээс өмнө үеийн АД/
                        </td>
                        <td style={styles.leftText}>Баруун</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Зүүн</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Судасны цохилтын тоо/1минутад
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Зүрхний авиа (Т-тод, Б-бүдэг, Ж-жигд, ЖБ-жигд бус)
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Амьсгалын тоо/1минутад
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td
                           style={{
                              ...styles.verticalText,
                              ...{ maxHeight: 70, width: 50 }
                           }}
                        >
                           *Амьсгалын тогтолцоо
                        </td>
                        <td style={styles.leftText} colSpan={2}>
                           Уушги чагнахад (цулцангын, ширүүн, хэржигнүүр, бронхиалный)
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           **Хэвлийн эмзэглэл байгаа эсэх
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           Мэс заслын сорви эмзэглэлтэй эсэх
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} rowSpan={4}>
                           **Хаван
                        </td>
                        <td style={styles.leftText} colSpan={2}>
                           Нүүр
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Гар, хөл
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Хэвлий
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Бүх биеэр
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} rowSpan={8}>
                           Эх барихын тусгайлсан үзлэг
                        </td>
                        <td style={styles.leftText} colSpan={2}>
                           *Умайн өндөр (см)
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           *Хэвлийн эргэн тойрон (см)
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} rowSpan={2}>
                           **Түрүүлсэн хэсэг
                        </td>
                        <td style={styles.leftText}>Толгой</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Өгзөг</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} rowSpan={4}>
                           *Ургийн байрлал
                        </td>
                        <td style={styles.leftText}>Дагуу</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хөндлөн</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Ташуу</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Тодорхойгүй</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginTop: 10 }}>
                  <tbody>
                     <tr>
                        <td style={styles.centerText} colSpan={3}>
                           Үзлэгийн дугаар
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           I
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           II
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           III
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           IV
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           V
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VI
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VII
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VIII
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>Төрсний дараа</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           Жирэмсэн эмэгтэйд үзлэг хийх товлол
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           &#60;12
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           16
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           20
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           28
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           32
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           36
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           38
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           39-40
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.verticalText, ...{ width: 50 } }} rowSpan={17}>
                           Эх барихын тусгайлсан үзлэг
                        </td>
                        <td style={styles.centerText} rowSpan={3}>
                           **Ургийн зүрхний цохилт
                        </td>
                        <td style={styles.leftText}>Тод-Т, Бүдэг-Б</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Жигд-Ж, жигд бусЖБ</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Цохилтын тоо/1 минутад</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText} rowSpan={3}>
                           **Хөхний товч
                        </td>
                        <td style={styles.leftText}>Товгор</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хавтгай</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хонхор</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} rowSpan={4}>
                           Гадна бэлэг эрхтний үзлэг
                        </td>
                        <td style={styles.leftText}>**Хэвийн</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Үүсвэр</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Гажиг</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Тодруулж бич</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} rowSpan={3}>
                           Үтрээний үзлэг
                        </td>
                        <td style={styles.leftText}>**Уйтан</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Уужим</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Сорвитой</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} rowSpan={4}>
                           Умайн үзлэг
                        </td>
                        <td style={styles.leftText}>*Хэмжээ</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Чангаралтай</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Хөдөлгөөнтэй</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Эмзэгтэй эсэх</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.centerText} colSpan={4}>
                           Үзлэгийн дугаар
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           I
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           II
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           III
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           IV
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           V
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VI
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VII
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VIII
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>Төрсний дараа</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={4}>
                           Жирэмсэн эмэгтэйд үзлэг хийх товлол
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           &#60;12
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           16
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           20
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           28
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           32
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           36
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           38
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           39-40
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td rowSpan={16} style={{ ...styles.verticalText, ...{ width: 30 } }}>
                           Эх барихын тусгайлсан үзлэг
                        </td>
                        <td style={styles.verticalText} rowSpan={5}>
                           **Үтрээний шинжилгээ
                        </td>
                        <td style={styles.verticalText} rowSpan={4}>
                           Дайварууд
                        </td>
                        <td style={styles.leftText}>*Баруун тэмтрэгдэнэ /хэмжээ бич/</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Эмзэглэлтэй эсэх</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Зүүн тэмтрэгдэнэ /хэмжээ бич/.</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Эмзэглэлтэй эсэх</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           **Хүнхрээ чөлөөтэй эсэх
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} rowSpan={11}>
                           **Толины шинжилгээ
                        </td>
                        <td style={styles.verticalText} rowSpan={7}>
                           Умайн хүзүү
                        </td>
                        <td style={styles.leftText}>**Шовх</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Бортгон</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Цэвэр</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Шархтай</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Урагдсан</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Эргэсэн</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Умайн хүзүүний эсийн шинжилгээ /заалтаар/</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.verticalText} rowSpan={4}>
                           Үтрээний ялгаралн
                        </td>
                        <td style={styles.leftText}>**Хэвийн</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Идээрхэг</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Усархаг</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>**Цусархаг</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.centerText} colSpan={4}>
                           Үзлэгийн дугаар
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           I
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           II
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           III
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           IV
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           V
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VI
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VII
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VIII
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>Төрсний дараа</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={4}>
                           Жирэмсэн эмэгтэйд үзлэг хийх товлол
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           &#60;12
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           16
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           20
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           28
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           32
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           36
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           38
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           39-40
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }} rowSpan={27}>
                           Шинжилгээ
                        </td>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }} rowSpan={11}>
                           **Шээсний ерөнхий шинжилгээ
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 180 } }} colSpan={2}>
                           Огноо
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           *Хэмжээ
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           *Өнгө (шар)
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           *Цөсний пигмент (-)
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           *Хувийн жин 1015-1025
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           *Уураг (-)
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           *pH 5.0-6.0
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           *Эпители эс 0-4х/т
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           *Бактери
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           *Цагаан эсүүд 0-4х/т
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           *Улаан эсүүд 0-1х/т
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.verticalText, ...{ width: 30 } }} rowSpan={11}>
                           ***Цусны ерөнхий шинжилгээ
                        </td>
                        <td style={styles.leftText} colSpan={2}>
                           Огноо
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Гемоглобин 130-160 г/л
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Цагаан эсүүд 4*109/л-8*109/л
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Улаан эсүүд 3.7*1012/л4.7*1012/л
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Тромбоцит 180*109/л320/109/л
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Моноцит 2-9%
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Улаан эсийн тунах хурд 2-12 мм/цаг
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Гематокрит
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Витамин Д хэмжээ үзэх /заалтаар/
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Кальцын хэмжээ үзэх /заалтаар/
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           T эсийн лемпотрофик вирүс*
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           Шинж тэмдэггүй бактериурийг илрүүлэх /заалтаар/
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           "TORCH" халдварыг илрүүлэх /заалтаар/
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.verticalText, ...{ maxHeight: 80 } }} colSpan={2} rowSpan={3}>
                           В С вирүсын маркер илрүүлэх шинжилгээ
                        </td>
                        <td style={styles.leftText}>Огноо</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>HBS Ag</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>HCV</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td colSpan={3} style={styles.leftText}>
                           Стрептококкын халдварыг үзэх
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                  </tbody>
               </Table>
               <div style={styles.leftText}>
                  Тайлбар: *- T эсийн лемпотрофик вирүсийн шинжилгээг хөхний сүүний донор болох хүсэлтэй эхчүүд өгнө.
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.centerText} colSpan={3}>
                           Үзлэгийн дугаар
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           I
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           II
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           III
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           IV
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           V
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VI
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VII
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           VIII
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>Төрсний дараа</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           Жирэмсэн эмэгтэйд үзлэг хийх товлол
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           &#60;12
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           16
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           20
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           28
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           32
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           36
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           38
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           39-40
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 40 } }}></td>
                        <td style={styles.centerText} rowSpan={4}>
                           Нойтон түрхэц
                        </td>
                        <td style={styles.leftText}>Огноо</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 40 } }}></td>
                        <td style={styles.leftText}>Трихомониаз (-)</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.verticalText, ...{ width: 40 } }} rowSpan={17}>
                           Шинжилгээ/шаардлагатай бол биохими, маркер үзэх
                        </td>
                        <td style={styles.leftText}>Мөөгөнцөр (-)</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Түлхүүр эс (-)</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText} rowSpan={2}>
                           Орчин рН
                        </td>
                        <td style={styles.leftText}>Хүчиллэг</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Шүлтлэг</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText} rowSpan={2}>
                           КОН сорил
                        </td>
                        <td style={styles.leftText}>Онцын үнэргүй</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Үмхий үнэртэй</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText} rowSpan={9}>
                           Үтрээний наац
                        </td>
                        <td style={styles.leftText}>Огноо</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Дедерлейний савханцар (+++эсвэл++++)</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Цагаан эсүүд 0-4х/т</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Грам сөрөг диплококк (- эсвэл+)</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Бактери (-эсвэл+)</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Мөөгөнцөр (-)</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Түлхүүр эс (-)</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Нянгийн гаралтай үтрээний үрэвсэл (-)</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Огноо</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText} rowSpan={2}>
                           Тэмбүүгийн сорил
                        </td>
                        <td style={styles.leftText}>Он сар өдөр</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Эерэг эсэх /т/ү/</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 40 } }}></td>
                        <td style={styles.centerText} rowSpan={4}>
                           ХДХВ/ДОХ
                        </td>
                        <td style={styles.leftText}>Шинжилгээний өмнөх зөвлөгөө</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 40 } }}></td>
                        <td style={styles.leftText}>Он сар өдөр</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 40 } }}></td>
                        <td style={styles.leftText}>Эерэг эсэх (Т/Ү)</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 40 } }}></td>
                        <td style={styles.leftText}>Шинжилгээний дараах зөвлөгөө</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.verticalText, ...{ width: 40 } }} rowSpan={18}>
                           ** Зөвлөгөө
                        </td>
                        <td style={styles.leftText} colSpan={2}>
                           Жирэмсний хяналтын ач холбогдол
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Амны хөндийн эрүүл мэнд
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Жирэмсэн үеийн хоол
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Хорт зуршил, архи, тамхины хор
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           БЗДХ, сэргийлэх тухай
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Жирэмсний эмгэг байдал/аюултай шинжүүд
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Жирэмсэн төрөлттэй холбоотой, хууль эрхзүйн ойлголт
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Төмрийн бэлдмэл, фолийн хүчил уухын ач холбогдол
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Зулбалт, дутуу төрөлтөөс сэргийлэх тухай
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Цус багадалт үүсч болох тухай
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Эрхтэн тогтолцооны эмгэг
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Төрөлтийн тухай
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Жирэмсний хожуу хордлогын тухай
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Хөх арчлах тухай
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Төрөлтөд бэлтгэх
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Хүчирхийллээс ангид байх
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Эх хүүхдэд дамжих халдвар /ХДХВ/ДОХ, Тэмбүү, Гепатит В/
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Сэтгэл зүйн бэлтгэл
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.verticalText, ...{ width: 40 } }} rowSpan={6}>
                           &nbsp;
                        </td>
                        <td style={styles.leftText}>Илүү тээлт</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Төрөх үеийн өвдөлтийг бууруулах аргууд</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Төрсний дараа үе</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Нярайн асаргаа</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Гэр бүл төлөвлөлт</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Халдварт өвчин илэрсэн бол холбогдох зөвлөгөөг өгөх</td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Дараагийн ирэлтийг товлосон хугацаа
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Зөвлөгөө авсан жирэмсэн эхийн гарын үсэг
                           <div>&nbsp;</div>
                           <div>&nbsp;</div>
                           <div>&nbsp;</div>
                           <div>&nbsp;</div>
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Эмчийн гарын үсэг
                           <div>&nbsp;</div>
                           <div>&nbsp;</div>
                           <div>&nbsp;</div>
                        </td>
                        {[...Array(16)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 25 } }} key={i}></td>
                        ))}
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={{ ...styles.centerText, ...{ marginTop: 550 } }}>
                  <b>ЧАНД АВИАН ШИНЖИЛГЭЭ</b>
               </div>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 250 } }}>&nbsp;</td>
                        <td style={styles.centerText} colSpan={2}>
                           I
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           II
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           III
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           IV
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Үзлэгийн дугаар</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Сар өдөр</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Үзүүлэлтүүд</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Ургийн цэврүүний дундаж хэмжээ</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Зулай ахар сүүлний хэмжээ /КТР/</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Толгойн хөндлөн хэмжээ /БПР/</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Дунд чөмөгний үрт /ДБК/</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хэвлийн тойрог</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Толгойн тойрог</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Ургийн байрлал</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Түрүүлсэн хэсэг</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Ургийн зүрхний цохилт</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Үзлэгийн</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Эхсийн бойжилт</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Усны хэмжээ индексээр</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Ясжилтын цэг</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Ургийн эрхтэн тогтолцооны бүтэц зүйн өөрчлөлт</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хүйн тогтоц</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           <div>&nbsp;</div>
                           <div>&nbsp;</div>Онош, онцгой тэмдэглэл
                        </td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           Бусад эрхтэн<div>&nbsp;</div>
                           <div>&nbsp;</div>
                        </td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Эмчийн гарын үсэг</td>
                        {[...Array(8)].map((x, i) => (
                           <td style={{ ...styles.centerText, ...{ width: 70 } }} key={i}></td>
                        ))}
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="document" style={{ marginBottom: 0, marginTop: 0 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: '70%' } }}>
                           Жирэмсний явцыг удирдах /шийдвэрлэх төлөвлөгөө:
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: '30%' } }}>Эмчилгээ</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: '70%' } }}>
                           Эхний үзлэгээр __________________________________________________________________
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              Үзлэг №2 _______________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              Үзлэг №3 _______________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              Үзлэг №4 _______________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              Үзлэг №5 _______________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              Үзлэг №6 _______________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              Үзлэг №7 _______________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              Үзлэг №8 ________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              ___________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              ___________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              Үзлэг __________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _________________________________________________________________________________
                           </div>
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: '30%' } }}>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                           <div style={styles.leftText}>
                              _______________________________________________________________
                           </div>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginBottom: 0, marginTop: 5 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>Огноо</td>
                        <td style={{ ...styles.centerText, ...{ width: 150 } }}>Мэргэжлийн чиглэл</td>
                        <td style={{ ...styles.centerText, ...{} }}>Огноо</td>
                        <td style={{ ...styles.centerText, ...{ width: 100 } }}>Эмчилгээ</td>
                        <td style={{ ...styles.centerText, ...{ width: 100 } }}>Гарын үсэг</td>
                     </tr>
                     <tr>
                        <td></td>
                        <td style={styles.leftText}>Дотор</td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td style={styles.leftText}>Нүд</td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td style={styles.leftText}>Шүд</td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td style={styles.leftText}>Мэдрэл</td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td style={styles.leftText}>Зүрх судас</td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td style={styles.leftText}>Цусны эмгэг</td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td style={styles.leftText}>Бөөр</td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td style={styles.leftText}>Чих, хамар, хоолой</td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td style={styles.leftText}>Эндокринолог</td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td style={styles.leftText}>Сүрьеэ</td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td style={styles.leftText}>БЗДХ</td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td style={styles.leftText}>Бусад</td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.centerText}>
                  <b>ТӨРСНИЙ ДАРААХ ҮЗЛЭГ</b>
               </div>
               <div style={styles.leftText}>
                  Төрөх үеийн (эрт болон хожуу үр хөндүүлсэн, зулбасан, дутуу төрсөн) онош
                  ____________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  _________________________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  _________________________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  _________________________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.centerText}>Төрсөн (жирэмслэлт төгссөн) огноо</div>
               <div style={styles.leftText}>
                  _________________________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  _________________________________________________________________________________________________________________________________________________________
               </div>
               <Table bordered className="document" style={{ marginBottom: 0, marginTop: 15 }}>
                  <tbody>
                     <tr>
                        <td style={styles.leftText}>Огноо</td>
                        <td style={{ ...styles.centerText, ...{ width: '18%' } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: '18%' } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: '18%' } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: '18%' } }}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Зовиур</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Биеийн халуун</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Арьс салст</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Артерийн даралт</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Судасны лугшилт</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хөхний байдал</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Сүүний гарц</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Умайн ёроол</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Шавхарга (хэмжээ, өнгө, үнэр)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хярзан /хэвлийн шархны байдал</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Шээсний гарц</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Асаргаа зөвлөгөө</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Эхийн гарын үсэг</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Эмчийн гарын үсэг</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                  </tbody>
               </Table>
               <div>&nbsp;</div>
               <div style={styles.leftText}>
                  Тэмдэглэл
                  _____________________________________________________________________________________________________________________________________________
               </div>

               {[...Array(25)].map((x, i) => (
                  <div style={styles.leftText} key={i}>
                     _________________________________________________________________________________________________________________________________________________________
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}

export default AM15;
