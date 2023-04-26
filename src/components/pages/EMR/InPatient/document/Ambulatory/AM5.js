import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-5
function AM5() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
      minWidth: 15,
    },
    generalText: {
      fontSize: 10,
    },
    rowStyle: {
      fontSize: 10,
      marginTop: 5,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 10,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 10,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 10,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    topText: {
      padding: 1,
      fontSize: 10,
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 10,
      padding: 0,
      lineHeight: 1,
      marginTop: 5,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 100,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 10,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div style={{ display: "flex" }}></div>
            <div>
              <span
                style={{
                  ...styles.generalText,
                  ...{ textAlign: "right", display: "block" },
                }}
              >
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <div style={styles.flexRow}>
                <span style={styles.generalText}>&nbsp;</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={styles.generalText}>
                    A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: 10 }}>
                    Эрүүл мэндийн бүртгэлийн маягт АМ-5
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ХОРТ ХАВДРЫГ МЭДЭЭЛЭХ ХУУДАС
            </span>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td
                  style={{ ...styles.topText, ...{ width: 300 } }}
                  rowSpan={2}
                  colSpan={2}
                >
                  Эмнэлгийн нэр, лого
                </td>
                <td style={styles.leftText} colSpan={6}>
                  РД
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={6}>
                  Тохиолдлын дугаар:<div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Бүртгэлийн байдал:<div>&nbsp;</div>
                </td>
                <td style={styles.topText}>Эрт илрүүлэг</td>
                <td style={{ ...styles.topText, ...{ width: 20 } }}></td>
                <td style={styles.topText}>Идэвхтэй хайлт</td>
                <td style={{ ...styles.topText, ...{ width: 20 } }}></td>
                <td style={styles.topText}>Урьдчилан сэргийлэх үзлэгээр</td>
                <td style={{ ...styles.topText, ...{ width: 20 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Эцэг, эхийн нэр:<div>&nbsp;</div>
                </td>
                <td style={styles.topText} colSpan={6}>
                  Өөрийн нэр:
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Төрсөн:
                  <div>_______он ____сар ____өдөр</div>
                  <div>&nbsp;</div>
                  <div>Яс үндэс: </div>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}>
                  Нас [ &nbsp; &nbsp; ]<div>Хүйс: </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Эрэгтэй
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Эмэгтэй
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Тодорхойгүй
                  </div>
                </td>
                <td style={styles.topText} colSpan={6}>
                  <div>Ажлын газар, албан тушаал </div>
                  <div>&nbsp;</div>
                  <div>Мэргэжил: </div>
                  <div>&nbsp;</div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.topText}>
                  <b>Тогтмол хаяг:</b>
                  <div style={styles.leftText}>
                    Аймаг/хот:________________________
                  </div>
                  <div style={styles.leftText}>
                    Сум/дүүрэг:________________________
                  </div>
                  <div style={styles.leftText}>
                    Баг/хороо:________________________
                  </div>
                  <div style={styles.leftText}>
                    Гудамж/Байшин: ________ Тоот _____
                  </div>
                  <div style={styles.leftText}>
                    <b>Холбоо барих утасны дугаар: </b>
                  </div>
                  <div style={styles.leftText}>
                    ________________________________
                  </div>
                </td>
                <td style={styles.topText}>
                  <b>Тогтмол хаяг:</b>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Боловсролгүй
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Бага
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Суурь боловсрол
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Бүрэн дунд
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Мэргэжлийн болон
                    техникийн
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Дипломын
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Бакалавр
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Магистр
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Доктор
                  </div>
                </td>
                <td style={styles.topText}>
                  <b>Тогтмол хаяг:</b>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Огт гэрлээгүй
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Батлуулсан
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Батлуулаагүй
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Тусгаарласан
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Цуцалсан
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Бэлбэсэн
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Хавдар оношлогдсон огноо: </b>
                  <div style={styles.centerText}>
                    он _______ сар _____ өдөр _____
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <b>Өвчтөний одоогийн байдал: </b>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Амьд – 1
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp; Нас барсан -2
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Тодорхойгүй - 3
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText}>
                  <b>Анхдагч хавдрын байрлалын онош /ICDO-3 /: </b>
                </td>
                <td style={styles.leftText}>
                  <b>С_____/___ </b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <b>Бүтэц зүйн онош </b>
                </td>
                <td style={styles.leftText}>
                  <b>М_____/___ </b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <b>Торонтогийн хүүхдийн хавдрын ангилал </b>
                </td>
                <td style={styles.leftText}>
                  <b>С_____/___ </b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  <b>
                    Хорт хавдар Toronto Tier үе шатны ангиллаар: Тoronto Tier –
                    1, Toronto Tier - 2
                  </b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <b>Хүүхдийн хавдрын ангилал / ICCC-3/ </b>
                </td>
                <td style={styles.leftText}>
                  <b>_____/___ </b>
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
                <td colSpan={5} style={styles.leftText}>
                  <b>
                    Хорт хавдар TNM үе шатны ангиллаар: Т – is, 1, 2, 3, 4, X
                    <span style={{ marginLeft: 20 }}>N – 0, 1, 2, 3, X</span>
                    <span style={{ marginLeft: 20 }}>M – 0, 1, X</span>
                  </b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <b>Хавдрын төлөв: </b>
                    <span style={{ marginLeft: 20, display: "flex" }}>
                      <span style={styles.rowCellWithText}>
                        <span style={styles.rowCells}></span>&nbsp;Байран өмөн –
                        2
                      </span>
                      <span
                        style={{
                          ...styles.rowCellWithText,
                          ...{ marginLeft: 30 },
                        }}
                      >
                        <span style={styles.rowCells}></span>&nbsp;Хортой – 3
                      </span>
                      <span
                        style={{
                          ...styles.rowCellWithText,
                          ...{ marginLeft: 30 },
                        }}
                      >
                        <span style={styles.rowCells}></span>&nbsp;Үсэрхийлсэн -
                        6
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Эсийн ялгарал:</b>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Өндөр ялгаралтай-1
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Дунд ялгаралтай-2
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Бага ялгаралтай-3
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Ялгаралгүй-4
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Ялгарлын зэрэг
                    тодорхойгүй-9
                  </div>
                </td>
                <td style={styles.topText}>
                  <b>Лимфома, лейкемийн эсийн ялгарал:</b>
                  <div style={{ display: "flex" }}>
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;Т-эсийн – 5,
                    </div>
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;В-эсийн
                      /pre-B,B-precursor/ -6
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;Null эсийн /
                      non-Т, non-B/ -7
                    </div>
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;Киллер эсийн
                      /natural/-8,
                    </div>
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;эсийн төрөл
                      тодорхойгүй-9
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  <b>Хэрвээ 0-19 насны хүүхдийн хавдрын тохиолдол бол</b>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Хурц лимфобласт
                    лейкеми
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Хурц миелоид
                    лейкеми
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Ходжкины лимфом
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Ходжкины бус лимфом
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Нейробластом
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Вильямсын хавдар
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Рабдомиосарком
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Рабдо бус
                    миосарком, зөөлөн эдийн сарком
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Остеосарком
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Ивингийн сарком
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Ретинобластом
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Гепатобластом
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Өндгөвчний хавдар
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Медуллобластом,
                    бусад хөврөлийн, төв мэдрэлийн системийн хавдар
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Эпендимом
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Анхдагч олон байрлалын хавдар мөн эсэх: </b>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Анхдагч ганц
                    байрлалын хавдар-1
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Анхдагч олон
                    байрлалын хавдрын нэг тохиолдол- 2
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp; Тодорхойгүй- 9
                  </div>
                </td>
                <td style={styles.topText}>
                  <b>Хос эрхтнийг хамарсан эсэх:</b>
                  <div style={{ display: "flex" }}>
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;Баруун-1
                    </div>
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;Зүүн-2
                    </div>
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;1 талыг хамарсан
                    боловч ялгаж тусгаагүй-3
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Хоёр талын
                    хамарсан-4
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Хос эрхтэн бус-5
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  <b>Бичил харуурын бус</b>
                </td>
                <td style={styles.centerText}>
                  <b>Бичил харуурын</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;1- Нас баралтын
                    гэрчилгээгээр
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;2- Эмнэл зүйн
                    бүрдэл шинжээр
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;
                    <span style={{ marginLeft: 10 }}>
                      3- Дүрс оношилгоо /КТГ, дуран, рентген, ЭХО, MRI,
                      оношлогооны лапротоми аль нь болохыг доогуур нь зурж
                      өөрчлөлт, хэмжээг тавих………………………………
                    </span>
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;4-Лабораторийн
                    оношлуур /цус, хавдрын өвөрмөц маркер, иммунологи аль нь
                    болохыг доогуур нь зурж өөрчлөлт, хэмжээг тавих………………………………
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;5-Эсийн шинжилгээ
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;6-Эдийн шинжилгээ
                    үсэрхийлсэн эдээс /задлан шинжилгээний эд хамаарна/
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;7 - Эдийн шинжилгээ
                    анхдагч эдээс /задлан шинжилгээний эд, ясны эд хамаарна/
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;8- Мэдэхгүй
                  </div>
                  <div style={styles.topText}>
                    Эд, эсийн шинжилгээ хийсэн эмнэлгийн
                    нэр:___________________________________
                  </div>
                  <div style={styles.topText}>
                    Эд, эсийн шинжилгээний баримтын дугаар:
                    _______________________________________
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td colSpan={5} style={styles.leftText}>
                  Хавдрын эмнэл зүйн бүлэг: Ia, Ib. II, IIa. III, IV ба үүнээс
                  өөрөөр бичигдэх бол:____________
                </td>
              </tr>
              <tr>
                <td rowSpan={9} style={styles.topText}>
                  Хийгдсэн эмчилгээ
                </td>
                <td style={styles.leftText}>Мэс засал</td>
                <td style={styles.centerText}>1</td>
                <td style={styles.leftText}>Хими+даавар эмчилгээ</td>
                <td style={styles.centerText}>10</td>
              </tr>
              <tr>
                <td style={styles.leftText}>RPA</td>
                <td style={styles.centerText}>2</td>
                <td style={styles.leftText}>Дурангийн мэс засал</td>
                <td style={styles.centerText}>11</td>
              </tr>
              <tr>
                <td style={styles.leftText}>PEI</td>
                <td style={styles.centerText}>3</td>
                <td style={styles.leftText}>Даавар эмчилгээ</td>
                <td style={styles.centerText}>12</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Туяа</td>
                <td style={styles.centerText}>4</td>
                <td style={styles.leftText}>Хөнгөвчлөх мэс засал </td>
                <td style={styles.centerText}>13</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хими</td>
                <td style={styles.centerText}>5</td>
                <td style={styles.leftText}>
                  TACE / эрт үе шатанд хийгдсэн, хөнгөвчлөх зорилгоор / аль нь
                  болохыг зур
                </td>
                <td style={styles.centerText}>14</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Мэс засал+туяа</td>
                <td style={styles.centerText}>6</td>
                <td style={styles.leftText}>Хөнгөвчлөх хими</td>
                <td style={styles.centerText}>15</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Мэс засал+хими</td>
                <td style={styles.centerText}>7</td>
                <td style={styles.leftText}>Хөнгөвчлөх туяа</td>
                <td style={styles.centerText}>16</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Туяа+хими+мэс засал</td>
                <td style={styles.centerText}>8</td>
                <td style={styles.leftText}>
                  Бусад хөнгөвлөх эмчилгээ ба тусламж /эмийн эмчилгээ /
                </td>
                <td style={styles.centerText}>17</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хими+туяа</td>
                <td style={styles.centerText}>9</td>
                <td style={styles.leftText}>Эмчилгээнээс татгалзсан </td>
                <td style={styles.centerText}>18</td>
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Хийгдсэн мэс заслын нэр:<div>&nbsp;</div>
                </td>
                <td colSpan={5} style={styles.leftText}>
                  /Үйлдлийн ОУ-9 ангиллаар тавих, кодлох/
                </td>
              </tr>
              <tr>
                <td colSpan={5} style={styles.topText}>
                  Мэс засал хийгдсэн: _______он _____сар _____өдөр
                  <span style={{ marginLeft: 200 }}>
                    Мэс засал хийсэн эмнэлгийн нэр:
                  </span>
                  <div style={styles.leftText}>
                    Хагалгаа хийсэн эмчийн нэр:
                    <span style={{ marginLeft: 300 }}>
                      эмчийн утасны дугаар:__________
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Эмчлэгч эмчийн нэр: <div>&nbsp;</div>
                </td>
                <td colSpan={3} style={styles.topText}>
                  Мэдээлсэн огноо: _______он ____сар ____өдөр
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Тамга</td>
                <td colSpan={4} style={styles.topText}>
                  Мэдээлсэн албан тушаалтан:{" "}
                  <span style={{ marginLeft: 150 }}>/</span>
                  <span style={{ marginLeft: 150 }}>/</span>
                  <div>&nbsp;</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default AM5;
