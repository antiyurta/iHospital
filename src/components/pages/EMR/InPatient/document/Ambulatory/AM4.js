import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-4
function AM4() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
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
      marginTop: 2,
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
                    Эрүүл мэндийн бүртгэлийн маягт АМ-4
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              СҮРЬЕЭГИЙН ТОХИОЛДЛЫГ МЭДЭЭЛЭХ ХУУДАС
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ display: "flex", flexDirection: "row" },
            }}
          >
            Эрүүл мэндийн байгууллагын нэр: ________________
            <span style={{ marginLeft: 40 }}>
              Мэдээлсэн огноо: ____/____/___
            </span>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  <b>Тохиолдлын тодорхойлолт:</b>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Шинэ
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Дахилт
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Эмчилгээ үр дүнгүй
                    болсны дараах
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Хяналт алдагдсаны
                    дараах
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Эмчилгээний үр дүн
                    тодорхойгүй
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Өмнөх эмчилгээний
                    түүх тодорхойгүй
                  </div>
                </td>
                <td style={styles.leftText} colSpan={12}>
                  <b>Тохиолдлын илрүүлсэн арга:</b>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Өвчний учир
                    амбулаториор /идэвхигүй/
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Идэвхитэй
                    илрүүлэлтээр
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Хавьтлын
                    илрүүлэлтээр
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Урьдчилан сэргийлэх
                    үзлэгээр
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Бусад /задлан
                    шинжилгээ-нас барсан
                  </div>
                  <div style={styles.leftText}>Огноо: ______/____/____</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} rowSpan={2}>
                  <b>Эцэг, эхийн нэр: </b>
                </td>
                <td style={styles.topText} rowSpan={2}>
                  <b>Өөрийн нэр:</b>
                </td>
                <td style={styles.topText} colSpan={10}>
                  <b>Регистрийн дугаар:</b>
                </td>
                <td style={{ ...styles.leftText, ...{ width: 40 } }}>
                  <b>Нас</b>
                </td>
                <td style={{ ...styles.leftText, ...{ width: 50 } }}>
                  <b>Хүйс</b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.leftText,
                    ...{ width: 20, height: 15 },
                  }}
                ></td>
                <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 40 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  <b>Тогтмол хаяг</b>
                  <div style={styles.rowStyle}>
                    Аймаг/хот:_______________________
                  </div>
                  <div style={styles.rowStyle}>
                    Сум/дүүрэг: _____________________
                  </div>
                  <div style={styles.rowStyle}>
                    Баг/хороо:_______________________
                  </div>
                  <div style={styles.rowStyle}>
                    Хаяг:________________ тоот_________
                  </div>
                </td>
                <td style={styles.leftText} colSpan={12}>
                  <b>Огноо:</b>
                  <div style={styles.rowStyle}>
                    Өвчин эхэлсэн: ____/____/____
                  </div>
                  <div style={styles.rowStyle}>Эмчид үзүүлсэн: ___/___/___</div>
                  <div style={styles.rowStyle}>Оношлогдсон: ____/____/____</div>
                  <div style={styles.rowStyle}>
                    Бүртгэлд авсан: ____/____/____
                  </div>
                  <div style={styles.rowStyle}>
                    Эмчилгээ эхэлсэн: ___/____/______
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  <b>Хөдөлмөр эрхлэлтийн байдал:</b>
                </td>
                <td style={styles.leftText} colSpan={12}>
                  <b> Боловсролын ангилал:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2} rowSpan={3}>
                  <div style={styles.leftText}>
                    <div style={styles.rowCellWithText}>
                      1. Хөдөлмөр эрхлэлтийн байдал&nbsp;&nbsp;
                      <div style={styles.rowCells}></div>
                    </div>
                    <div style={styles.rowCellWithText}>
                      2. Хөдөлмөр эрхлэхгүй шалтгаан:&nbsp;
                      <div style={styles.rowCells}></div>
                    </div>
                  </div>
                </td>
                <td style={styles.leftText} colSpan={11}>
                  Боловсролгүй
                </td>
                <td style={styles.centerText}>01</td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={11}>
                  Бага
                </td>
                <td style={styles.centerText}>02</td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={11}>
                  Суурь боловсрол
                </td>
                <td style={styles.centerText}>03</td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td rowSpan={6} style={styles.verticalText}>
                  Гэр бүлийн байдал:
                </td>
                <td style={styles.leftText}>Огт гэрлээгүй</td>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                  </div>
                </td>
                <td style={styles.leftText} colSpan={11}>
                  Бүрэн дунд
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>04</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Батлуулсан гэр бүлтэй</td>
                <td style={styles.leftText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                  </div>
                </td>
                <td style={styles.leftText} colSpan={11}>
                  Мэргэжлийн болон техникийн
                </td>
                <td style={styles.centerText}>05</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Батлуулаагүй гэр бүлтэй</td>
                <td style={styles.leftText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                  </div>
                </td>
                <td style={styles.leftText} colSpan={11}>
                  Дидломын
                </td>
                <td style={styles.centerText}>06</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Тусгаарласан</td>
                <td style={styles.leftText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                  </div>
                </td>
                <td style={styles.leftText} colSpan={11}>
                  Бакалавр
                </td>
                <td style={styles.centerText}>07</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Цуцалсан</td>
                <td style={styles.leftText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                  </div>
                </td>
                <td style={styles.leftText} colSpan={11}>
                  Магистр
                </td>
                <td style={styles.centerText}>08</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Бэлбэсэн</td>
                <td style={styles.leftText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                  </div>
                </td>
                <td style={styles.leftText} colSpan={11}>
                  Доктор
                </td>
                <td style={styles.centerText}>09</td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.topText}>
                  <b>Ажлын газар, албан тушаал:</b>
                  <div>&nbsp;</div>
                  <b>Мэргэжил:</b>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}>
                  <b>Ханиалгах шинж тэмдэг:</b>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Илэрсэн ______
                    хоног
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Илрээгүй
                  </div>
                </td>
                <td style={styles.topText} rowSpan={2}>
                  <b>Онош баталгаажилт:</b>
                  <div style={styles.leftText}>Нян судлалаар батлагдсан:</div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Түрхэцээр
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Бусад шинжилгээгээр
                  </div>
                  <div style={styles.leftText}>Эмнэлзүйгээр оношлогдсон</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>БЦЖ вакцины сорвитой эсэх::</b>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Тийм
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Үгүй
                  </div>
                </td>
                <td style={styles.topText}>
                  <b>Сүрьеэгийн хэлбэр:</b>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Уушгины
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Уушгины бус
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <b>Онош</b>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}>
                  <b>ӨОУА: А1 ___,___</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Цээжний рентген зургийн дүгнэлт:</b>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Хэвийн
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Хэвийн
                    бус-хөндийгүй
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Хэвийн
                    бус-хөндийтэй
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Хийгдээгүй
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Тодорхойгүй
                  </div>
                </td>
                <td style={styles.topText}>
                  <b>Эрсдэлт хүчин зүйлс:</b>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Сүрьеэгийн
                        хавьтал
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Өмнө нь
                        эмчлэгдсэн
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Чихрийн шижин
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;ХДХВ/ДОХ
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Орон гэргүй
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Эрүүл мэндийн
                        ажилтан
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Уул уурхай
                      </div>
                    </div>
                    <div style={{ marginLeft: 15 }}>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Жирэмслэлт
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Гэр хороолол
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Дархлал
                        дарангуйлах эмчилгээ
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp; Өдөр бүр тамхи
                        татах
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Архи хэтрүүлэн
                        хэрэглэх
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;_____________
                      </div>
                    </div>
                  </div>
                </td>
                <td style={styles.topText}>
                  <b>Халдварын эх уурхай:</b>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp; Өрхийн хавьтал
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp; Ойрын хавьтал
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Тодорхойгүй
                  </div>
                  <b>Өрхийн хавьтлын тоо: _____</b>
                  <div style={styles.leftText}>Насанд хүрэгчид:</div>
                  <div style={styles.leftText}>_______</div>
                  <div style={styles.leftText}>Хүүхэд /0-15 нас/</div>
                  <div style={styles.leftText}>_______</div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  ЭМЧТ шинжилгээнд хамрагдсан эсэх?
                </td>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Тийм бол, ЭМЧТШ дугаар:
                </td>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Тэсвэртэй эмүүд:
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Тийм
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Үгүй
                  </div>
                </td>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Огноо: _____/____/____
                </td>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;H
                    </div>
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;E
                    </div>
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;Am
                    </div>
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;Ofl
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;R
                    </div>
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;S
                    </div>
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;Km
                    </div>
                    <div style={styles.rowCellWithText}>
                      <div style={styles.rowCells}></div>&nbsp;FQ
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>
              Тамга{" "}
              <span style={{ marginLeft: 50 }}>
                Мэдээлсэн эмчийн нэр: __________________________ Гарын үсэг:
                /___________________ /
              </span>
            </b>
          </div>
        </div>
      </div>
    </>
  );
}

export default AM4;
