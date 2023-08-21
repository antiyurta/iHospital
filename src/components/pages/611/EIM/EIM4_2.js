import React from 'react';
import { Table } from 'react-bootstrap';
import image1 from './EIM4_2.jpeg';

//маягт ЭИМ-4.2
function EIM_4_2() {
   const styles = {
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 20,
         height: 20,
         lineHeight: 1,
         minWidth: 15
      },
      generalText: {
         fontSize: 10
      },
      rowStyle: {
         fontSize: 10,
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
         fontSize: 10
      },
      flexContainer: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         fontSize: 10
      },
      flexRow: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between'
      },
      topText: {
         padding: 1,
         fontSize: 10
      },
      rowCellWithText: {
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
         fontSize: 10,
         padding: 0,
         lineHeight: 1,
         marginTop: 5
      },
      verticalText: {
         writingMode: 'vertical-rl',
         verticalAlign: 'middle',
         padding: 5,
         rotate: '180deg',
         maxHeight: 100,
         maxWidth: 50,
         lineHeight: 1,
         fontSize: 10
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
                           <span style={{ fontWeight: 'bold', fontSize: 10 }}>
                              Эрүүл мэндийн бүртгэлийн маягт ЭИМ-4.2
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 10 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>ХОРТ ХАВДРЫГ МЭДЭЭЛЭХ ХУУДАС</span>
               </div>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.topText, ...{ width: '50%' } }} colSpan={2}>
                           1. Эмнэлэгийн нэр, код
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
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: '50%' } }} colSpan={3}>
                           2. РД
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText} colSpan={2}>
                           3.Эцэг, эхийн нэр:<div>&nbsp;</div>
                        </td>
                        <td style={styles.topText} colSpan={3}>
                           4.Өөрийн нэр:
                           <div>&nbsp;</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>5. Төрсөн ______ он _____ сар _____ өдөр</td>
                        <td style={styles.leftText} rowSpan={2} colSpan={2}>
                           8. Боловсрол:
                           <div style={styles.leftText}> Боловсролгүй</div>
                           <div style={styles.leftText}> Бага</div>
                           <div style={styles.leftText}> Суурь боловсрол</div>
                           <div style={styles.leftText}> Бүрэн дунд</div>
                           <div style={styles.leftText}> Мэргэжлийн болон техникийн</div>
                           <div style={styles.leftText}> Дипломын</div>
                           <div style={styles.leftText}> Бакалавр</div>
                           <div style={styles.leftText}> Магистр</div>
                           <div style={styles.leftText}> Доктор</div>
                        </td>
                        <td style={styles.topText} colSpan={2} rowSpan={2}>
                           <div style={styles.leftText}>9. Тогтмол хаяг:</div>
                           <div style={styles.leftText}>Аймаг/хот: __________________________________</div>
                           <div style={styles.leftText}>Сум/дүүрэг: _________________________________</div>
                           <div style={styles.leftText}>Баг/хороо __________________________________</div>
                           <div style={styles.leftText}>Гудамж/Байшин: ___________________________</div>
                           <div style={styles.leftText}>тоот___________</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>
                           6. Нас ________
                           <div style={styles.leftText}>7.Гэр бүлийн байдал:</div>
                           <div style={styles.leftText}> Огт гэрлээгүй</div>
                           <div style={styles.leftText}> Батлуулсан</div>
                           <div style={styles.leftText}> Батлуулаагүй</div>
                           <div style={styles.leftText}> Тусгаарласан</div>
                           <div style={styles.leftText}> Цуцалсан</div>
                           <div style={styles.leftText}> Бэлбэсэн</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>
                           10. Мэргэжил: <div>&nbsp;</div>
                        </td>
                        <td style={styles.topText}>11.Албан тушаал</td>
                        <td style={styles.topText} colSpan={3}>
                           12 .Ажлын газар
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b>Үзлэгийн хэсэг</b>
                           <div style={styles.leftText}>
                              <b>Үзлэг хийсэн огноо: ______ он ____ сар ____ өдөр</b>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b>Өрх, сум тосгоны ЭМТ-д илрүүлэг үзлэгт хамрагдсан уу:  Тийм  Үгүй</b>
                           <div style={styles.leftText}>
                              <b>13 Үзлэгийн хэлбэрүүдийн аль тохирохыг √ тэмдэглэнэ үү.</b>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           1.Умайн хүзүүний өмөнгийн илрүүлэгтэй зэрэгцэн хийгдэж буй хөхний өмөнгийн илрүүлэг үзлэг
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           2.Боломжит илрүүлгийн бусад хэлбэр: Хөхний өмөнгөөр өвдөх өндөр эрсдэлтэй бүлгийн илрүүлэг
                        </td>
                        <td style={styles.leftText}></td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           <span style={{ marginLeft: 50 }}>2а.Урьд нь хөхний өмөнгөөр өвдөж байсан</span>
                        </td>
                        <td style={styles.leftText}></td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           <span style={{ marginLeft: 50 }}>
                              2б.Ойрын садан төрөл нь өвдөж байсан удамшилын өгүүлэлтэй
                           </span>
                        </td>
                        <td style={styles.leftText}></td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           <span style={{ marginLeft: 50 }}>2в.Бусад</span>
                        </td>
                        <td style={styles.leftText}></td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           3.Илрүүлэг үзлэг бус, эмнэлзүйн шалтгаанаар үзүүлэхээр ирсэн
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           <span style={{ marginLeft: 50 }}>3а.Хөхөө өөрөө тэмтрэх аргаар үзэхэд бэрсүү илэрсэн</span>
                        </td>
                        <td style={styles.leftText}></td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           <span style={{ marginLeft: 50 }}>3б.Бусад</span>
                        </td>
                        <td style={styles.leftText}></td>
                     </tr>
                     <tr>
                        <td style={styles.topText} colSpan={5}>
                           <b>Үзлэгээр илэрсэн эмгэг өөрчлөлт зураг</b>
                           <div
                              style={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 justifyContent: 'space-around'
                              }}
                           >
                              <div>
                                 <b>Баруун хөх </b>
                              </div>
                              <div>
                                 <b>Зүүн хөх </b>
                              </div>
                           </div>
                           <img src={image1} width="100%" style={{ paddingLeft: 100, paddingRight: 100 }} />
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText} colSpan={5}>
                           14.Хэрэв тийм бол, эмгэг өөрчлөлт илэрсэн хэсгийг зураг дээрх тэмдэглэгээнээс харж,
                           хүснэгтийн нүдэнд √тэмдэглэнэ үү
                        </td>
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
                        <td style={{ ...styles.topText, ...{ width: 100 } }} colSpan={2} rowSpan={3}>
                           Байршлын дугаарыг зургаас харна уу
                        </td>
                        <td style={{ ...styles.topText, ...{ width: 100 } }}>
                           <b>Нүдээр харах тэмтрэхэ д хэвийн байна уу</b>
                        </td>
                        <td style={styles.topText} colSpan={2}>
                           Бэрсүү байна ууу
                        </td>
                        <td style={styles.topText} colSpan={2}>
                           <b>Бэлэгдсэн /хөдөлгөөн/ байдал</b>
                        </td>
                        <td style={{ ...styles.topText, ...{ width: 100 } }}>
                           <b>Жүржийн хальсны шинж /арьсны шархлаа/ зангилаа</b>
                        </td>
                        <td style={{ ...styles.topText, ...{ width: 100 } }}>
                           <b>Хөхний толгой цааш татагдсан</b>
                        </td>
                        <td style={{ ...styles.topText, ...{ width: 100 } }}>
                           <b>Хөхний толгойноос шүүрэл гарах</b>
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 100 } }} rowSpan={2}>
                           Тийм/ Үгүй
                        </td>
                        <td style={{ ...styles.verticalText, ...{ width: 50 } }} rowSpan={2}>
                           Тийм/ Үгүй
                        </td>
                        <td style={{ ...styles.verticalText, ...{ width: 50 } }} rowSpan={2}>
                           Хэмжээ /mm/
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>Арьс</td>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>Цээжний хана</td>
                        <td style={{ ...styles.centerText, ...{ width: 100 } }} rowSpan={2}>
                           Тийм/ Үгүй
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 100 } }} rowSpan={2}>
                           Тийм/ Үгүй
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 100 } }} rowSpan={2}>
                           Тийм/ Үгүй
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>Тийм/ Үгүй</td>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>Тийм/ Үгүй</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.verticalText, ...{ width: 40 } }} rowSpan={5}>
                           Баруун
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>R1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{ ...styles.verticalText, ...{ width: 40 } }} rowSpan={4}></td>
                        <td style={{ ...styles.verticalText, ...{ width: 40 } }} rowSpan={4}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>R2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>R3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>R4</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>R5</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.verticalText, ...{ width: 40 } }} rowSpan={5}>
                           Зүүн
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>R1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{ ...styles.verticalText, ...{ width: 40 } }} rowSpan={4}></td>
                        <td style={{ ...styles.verticalText, ...{ width: 40 } }} rowSpan={4}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>R2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>R3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>R4</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>R5</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td colSpan={10} style={styles.leftText}>
                           <b>15.Тунгалгийн булчирхай:  тэмтрэгдэхгүй  тэмтрэгдэнэ  үнэлэх боломжгүй</b>
                           <div>&nbsp;</div>
                           <div style={styles.leftText}>16.Хэрэв тэмтрэгдэж байвал: дараах хэсэгт тэмдэглэнэ үү,</div>
                           <div>&nbsp;</div>
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={10} style={styles.centerText}>
                           <b>Байршлын дугаар</b>
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.centerText}>
                           R – Баруун тал
                        </td>
                        <td colSpan={5} style={styles.centerText}>
                           L – Зүүн тал
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2} style={styles.centerText}>
                           Суганы
                        </td>
                        <td style={styles.centerText}>Эгэмний дээд</td>
                        <td style={styles.centerText}>Эгэмний доод</td>
                        <td style={styles.centerText}>Хүзүүний</td>
                        <td style={styles.centerText}>Суганы</td>
                        <td style={styles.centerText}>Эгэмний дээд</td>
                        <td style={styles.centerText}>Эгэмний доод</td>
                        <td colSpan={2} style={styles.centerText}>
                           Хүзүүний
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2} style={styles.leftText}>
                           R6
                        </td>
                        <td style={styles.leftText}>R7</td>
                        <td style={styles.leftText}>R8</td>
                        <td style={styles.leftText}>R9</td>
                        <td style={styles.leftText}>L6</td>
                        <td style={styles.leftText}>L7</td>
                        <td style={styles.leftText}>L8</td>
                        <td colSpan={2} style={styles.leftText}>
                           L9
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <div>&nbsp;</div>
               <div style={styles.leftText}>17.Хийгдсэн мэс ажилбар (Тохирох хариултын нүдэнд ✓ тэмдэглэнэ үү)</div>
               <Table bordered className="document" style={{ marginBottom: 0, marginTop: 10 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 60 } }} rowSpan={3}>
                           <b>Хийгдсэн үйлдэл</b>
                        </td>
                        <td style={styles.centerText} colSpan={18}>
                           <b>Зургийг ашиглан байрлалыг тодорхойлох</b>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.centerText} colSpan={5}>
                           Баруун хөх
                        </td>
                        <td style={styles.centerText} colSpan={5}>
                           Зүүн хөх
                        </td>
                        <td style={styles.centerText} colSpan={4}>
                           Тунгалагийн булчирхай -баруун талд
                        </td>
                        <td style={styles.centerText} colSpan={4}>
                           Тунгалагийн булчирхай - зүүн талд
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>R1</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>R2</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>R3</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>R4</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>R5</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>L1</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>L2</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>L3</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>L4</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>L5</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>R6</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>R7</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>R8</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>R9</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>L6</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>L7</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>L8</td>
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>L9</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>Хатгалт хийж эсийн шинжилгээ авсан</td>
                        {[...Array(18)].map((x, i) => (
                           <td key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.centerText}>Хатгалт хийж эдийн шинжилгээ авсан</td>
                        {[...Array(18)].map((x, i) => (
                           <td key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.centerText}>Зүсэлт хийж эдийн шинжилгээ авсан</td>
                        {[...Array(18)].map((x, i) => (
                           <td key={i}></td>
                        ))}
                     </tr>
                     <tr>
                        <td style={styles.centerText}>Мэс заслын аргаар эдийн шинжилгээ авсан</td>
                        {[...Array(18)].map((x, i) => (
                           <td key={i}></td>
                        ))}
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="document" style={{ marginBottom: 0, marginTop: 10 }}>
                  <tbody>
                     <tr>
                        <td style={styles.leftText}>
                           Хөхний эсийн, эдийн (зур) шинжилгээ авах талаар үйлчлүүлэгчид таниулж зөвшөөрөл авсан эмчийн
                           нэр, гарын үсэг /____________________
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           Хөхний эсийн, эдийн (зур) шинжилгээ авахыг зөвшөөрсөн үйлчлүүлэгчийн нэр, гарын үсэг
                           /__________________ / ____________________ /<div>&nbsp;</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           <b>18.Хийгдсэн шинжилгээ :</b>
                           <span style={{ marginLeft: 100 }}>
                              Эсийн  Эдийн  Хэт авиа  Маммограмм  Бусад эрхтний эхо  КТГ  MRI 
                           </span>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Эсийн шинжилгээний дүгнэлт : Хэвийн  Хэвийн бус  Хийгдээгүй </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           Хөхний хэт авиан шинжилгээний дүгнэлт: Хэвийн  Хэвийн бус  Хийгдээгүй 
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Маммограммын дүгнэлт : Хэвийн  Хэвийн бус  Хийгдээгүй </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           Бусад эрхтний хэт авиан шинжилгээний дүгнэлт: : Хэвийн  Хэвийн бус  Хийгдээгүй 
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>КТГ шинжилгээний дүгнэлт: Хэвийн  Хэвийн бус  Хийгдээгүй </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>MRI шинжилгээний дүгнэлт: Хэвийн  Хэвийн бус  Хийгдээгүй </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           <b>19. Мэс заслын эмчийн дүгнэлт</b>
                           <div style={styles.leftText}>Төгсгөлийн онош: ӨОУА -10 ,,,,,,,,,,,,,,,,,,,,,,</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           20. Шинжилгээний хариу хүлээн авсны дараа арга хэмжээг хэрэгжүүлсэн огноо
                           <div style={styles.leftText}>(оооо/сс/өө):</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           21.Авсан арга хэмжээ :
                           <div style={styles.leftText}>
                               Давтан шинжилгээ хийх  Дэраагийн илрүүлэг үзлэгт хамрагдахыг зөвлөх
                           </div>
                           <div style={styles.leftText}>ХСҮТ-д онош тодоруулах  ХСҮТ-д эмчилгээ хийлгэх</div>
                           <div style={styles.leftText}> Мэс заслын болон хавдрын эмчийн хяналтад байхыг зөвлөх</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Үзлэг хийсэн эмчийн нэр, дугаар: ______________________</td>
                     </tr>
                  </tbody>
               </Table>
               <div style={styles.leftText}>
                  <b>Заавар:</b>
                  <span>
                     Энэхүү маягтын эхний асуултыг бөглөж тухайн өдөрт нь Эргэн дуудах тогтолцооны програмд шивж
                     оруулна, дүрс оношлогооны болон эс, эдийн шинжилгээний хариу гарсны дараа 17.1-ээс эхлэх
                     асуултуудыг бөглөн, өөрийн дүгнэлтээ гаргаж, үлдсэн асуултуудыг бүрэн бөглөсний дараа маягтыг
                     цаасаар аймаг, дүүргийн хавдар бүртгэгчид илгээнэ. Эрт илрүүлэг эргэн дуудах тогтолцооны програмд
                     эмчлэгч эмч оруулна. Оношийг ӨОУА-10 ангилалын дагуу
                  </span>
                  <div style={{ display: 'flex', marginLeft: 15 }}>
                     <div style={styles.rowCells}>N</div>
                     <div style={styles.rowCells}>6</div>
                     <div style={styles.rowCells}>4</div>
                     <div style={styles.rowCells}>.</div>
                     <div style={styles.rowCells}>9</div>
                  </div>
                  <span>гэж кодлоно.</span>
               </div>
               <div style={styles.leftText}>
                  <b>Энэ маягтын эх хувь нь хадгалах хугацааны туршид Хавдар бүртгэгчид хадгалагдана.</b>
               </div>
            </div>
         </div>
      </>
   );
}

export default EIM_4_2;
