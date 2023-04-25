import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-6
function AM6() {
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
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 5,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 12,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 12,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    topText: {
      padding: 1,
      fontSize: 12,
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 12,
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
      fontSize: 12,
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
                  <span style={{ fontWeight: "bold", fontSize: 12 }}>
                    Эрүүл мэндийн бүртгэлийн маягт АМ-6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ГЕМОДИАЛИЗ ХЯНАЛТЫН КАРТ
            </span>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td
                  style={{ ...styles.topText, ...{ width: 200 } }}
                  rowSpan={4}
                  colSpan={2}
                >
                  Эмнэлгийн нэр, лого
                </td>
                <td style={styles.leftText} colSpan={2}>
                  РД
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  ЭМД
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Өвчний түүх нээсэн _______Он ____сар ____өдөр
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Тасгийн нэр
                </td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.topText, ...{ width: 200 } }}
                  colSpan={2}
                >
                  Эцэг /эх/-ийн нэр<div>&nbsp;</div>
                </td>
                <td
                  style={{ ...styles.topText, ...{ width: 200 } }}
                  colSpan={2}
                >
                  Өөрийн нэр:
                </td>
              </tr>

              <tr>
                <td style={styles.topText}>
                  Төрсөн _______Он ____сар ____өдөр
                </td>
                <td style={styles.topText}>
                  Хүйс
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Эрэгтэй
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Эмэгтэй
                  </div>
                </td>
                <td style={styles.topText}>
                  <b>Гэрлэлтийн байдал</b>
                  <div style={styles.leftText}>1. Огт гэрлээгүй</div>
                  <div style={styles.leftText}>2. Батлуулсан гэр бүлтэй</div>
                  <div style={styles.leftText}>3. Батлуулаагүй гэр бүлтэй</div>
                  <div style={styles.leftText}>4. Тусгаарласан</div>
                  <div style={styles.leftText}>5. Цуцалсан</div>
                  <div style={styles.leftText}>6. Бэлбэсэн</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.leftText}>Биеийн өндөр: ........</div>
                  <div style={styles.leftText}>Биеийн жин: ........</div>
                  <div style={styles.leftText}>Цусны бүлэг ........</div>
                  <div style={styles.leftText}>Вирусны маркер: ...</div>
                  <div style={styles.leftText}>
                    <b>Вакцинжуулалт:</b>
                  </div>
                  <div style={styles.leftText}>
                    <div style={{ display: "flex" }}>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Тийм
                        <div
                          style={{ ...styles.rowCells, ...{ marginLeft: 10 } }}
                        ></div>
                        &nbsp;Үгүй
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <div style={styles.leftText}>
                    Үндсэн захиргаа:
                    ..............................................
                  </div>
                  <div style={styles.leftText}>
                    Аймаг/хот:
                    ........................................................
                  </div>
                  <div style={styles.leftText}>
                    Сум/дүүрэг:
                    ......................................................
                  </div>
                  <div style={styles.leftText}>Утас: ……….…………….</div>
                </td>

                <td style={styles.topText}>
                  <b>Хөдөлмөр эрхлэлт:</b>
                  <div style={styles.rowCellWithText}>
                    Ажлын газар&nbsp;<div style={styles.rowCells}></div>
                  </div>
                  <div style={styles.rowCellWithText}>
                    Мэргэжил&nbsp;<div style={styles.rowCells}></div>
                  </div>
                  <div style={styles.rowCellWithText}>
                    Хөдөлмөр эрхлэлтийн байдал&nbsp;
                    <div style={styles.rowCells}></div>
                  </div>
                  <div style={styles.rowCellWithText}>
                    Хөдөлмөр эрхлэхгүй шалтгаан&nbsp;
                    <div style={styles.rowCells}></div>
                  </div>
                </td>
                <td style={styles.topText}>
                  <b>Боловсролын ангилал:</b>
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
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>ТӨГСГӨЛИЙН ЭПИКРИЗ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>
                    Үндсэн онош <div>&nbsp;</div>
                  </b>
                </td>
                <td style={styles.topText}>ӨОУА код</td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>
                    Дагалдах онош <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </b>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>
                    Хүндрэл <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </b>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>
                    Үйлдлийн онош <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </b>
                </td>
                <td style={styles.topText}>ҮОУА-9</td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Бөөр шилжүүлэн суулгасан: ______он ____сар ____өдөр
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>
                    Нас барсан: ______он ____сар ____өдөр
                    <div>&nbsp;</div>
                  </div>
                  <div style={styles.leftText}>Нийт сеансын тоо .........</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Өвчин эхэлсэн: ______ он ____ сар ___ өдөр
                  <div style={styles.leftText}>
                    БАД эхэлсэн: ______ он ____ сар ____ өдөр
                  </div>
                  <div style={styles.leftText}>
                    Гемодиализ эхэлсэн: ____ он __ сар ___ өдөр
                  </div>
                  <div style={styles.leftText}>
                    АВ фистул: _____ он ____ сар ___ өдөр
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Эмчлэгч эмчийн нэр, гарын үсэг
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Төвийн эрхлэгч: _____ он ____ сар ___ өдөр
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ЭМЧЛҮҮЛЭГЧИЙН АНАМНЕЗ</b>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.topText, ...{ height: 200 } }}>
                  Өвчний түүх:
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ height: 200 } }}>
                  Амьдралын түүх:
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ height: 200 } }}>
                  Ам бүл:
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>
                    Урьд өвчилсөн өвчин эмгэгийн байдал:
                  </div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>Халдварт:</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>Халдварт бус:</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>Мэс засал:</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
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
                <td style={styles.centerText} colSpan={25}>
                  <b>ДИАЛИЗ ЭМЧИЛГЭЭНИЙ КАРТ ID</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={25}>
                  <b>
                    Овог ............................................. Нэр
                    .........................................
                  </b>
                  <div>
                    <b>Хуурай жин ..............................</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={25}>
                  Диализын оролт /7 хоногт ........................ удаа
                  ................ цаг/
                  <div style={styles.leftText}>Бикарбонатын, ацетатны</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>
                    Холболт: A-V фистула, дабль гуурс, тунель гуурс, байнгын
                    гуурс
                  </div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  _______Он ____сар ____өдөр
                </td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
              </tr>
              <tr>
                <td style={styles.topText}>HD/HDF дугаар</td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Эхэлсэн ба дууссан цаг</td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Диализатор</td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Диализатор хэрэглэсэн давтамж</td>
                {[...Array(24)].map((x, i) => (
                  <td style={styles.topText}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText}>Диализатор ө/жин</td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Диализатор д/жин</td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Нэмэгдсэн/жин</td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
              </tr>
              <tr>
                <td style={styles.topText}>УФ (кг) /ИУФ (кг) </td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Гепарин</td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
              </tr>
              <tr>
                <td style={styles.topText}>АД/пульс д/өмнө</td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
              </tr>
              <tr>
                <td style={styles.topText}>АД/ пульс 1 цаг</td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>АД/ пульс 2 цаг</td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>АД/ пульс 3 цаг</td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>АД/ пульс 4 цаг</td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>АД/ пульс 5 цаг</td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={3}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ height: 100 } }}>
                  Клиник шинж тэмдэг
                </td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ height: 80 } }}>
                  Эмийн эмчилгээ
                </td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Эмч</td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Сувилагч</td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
                <td style={styles.topText} colSpan={4}></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default AM6;
