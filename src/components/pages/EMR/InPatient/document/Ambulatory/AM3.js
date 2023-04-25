import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-3
function AM3() {
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
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 10,
      padding: 0,
      lineHeight: 1,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div style={{ display: "flex" }}>
              <span style={{ marginRight: 5 }}>Эмнэлгийн нэр: </span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
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
                    Эрүүл мэндийн бүртгэлийн маягт АМ-3
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              БЗДХ-ЫГ МЭДЭЭЛЭХ ХУУДАС
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ display: "flex", flexDirection: "row" },
            }}
          >
            1. Эцэг /эх/-ийн нэр ______________________ 2. Нэр
            _______________________ 3. РД
            <div style={{ display: "flex", marginLeft: 15 }}>
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
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
            }}
          >
            <div style={{ display: "flex" }}>
              4. Нас:
              <div style={{ ...styles.rowCells, ...{ marginLeft: 20 } }}></div>
              <div style={styles.rowCells}></div>
            </div>
            <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
              5. Хүйс: /зур/ эрэгтэй, эмэгтэй
            </div>
            <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
              6. Жирэмсэн эсэх:
            </div>
            <div style={styles.rowCellWithText}>
              <div style={styles.rowCells}></div>&nbsp;тийм
            </div>
            <div style={{ ...styles.rowCellWithText, ...{ marginLeft: 20 } }}>
              <div style={styles.rowCells}></div>&nbsp;үгүй
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "48%" }}
            >
              <Table bordered className="document" style={{ marginTop: 10 }}>
                <tbody>
                  <tr>
                    <td style={styles.leftText}>
                      <b>7. Тогтмол хаяг: ________________________</b>
                      <div style={styles.rowStyle}>
                        ________________________________________________
                      </div>
                      <div style={styles.rowStyle}>
                        ________________________________________________
                      </div>
                      <div style={styles.rowStyle}>
                        ________________________________________________
                      </div>
                      <div style={styles.rowStyle}>Утасны дугаар:</div>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered className="document">
                <tbody>
                  <tr>
                    <td rowSpan={2} style={styles.centerText}>
                      <b>9. Хөдөлмөр эрхлэлт</b>
                    </td>
                    <td style={styles.leftText}>Хөдөлмөр эрхлэлтийн байдал</td>
                    <td style={styles.leftText}>
                      <div style={{ width: 20 }}></div>
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Хөдөлмөр эрхлэхгүй шалтгаан</td>
                    <td style={styles.leftText}></td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered className="document">
                <tbody>
                  <tr>
                    <td rowSpan={6} style={styles.centerText}>
                      <b>10. Гэр бүлийн байдал</b>
                    </td>
                    <td style={styles.leftText}>Огт гэрлээгүй</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Батлуулсан гэр бүлтэй</td>
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
              <Table bordered className="document">
                <tbody>
                  <tr>
                    <td rowSpan={4} style={styles.centerText}>
                      <b>10. Гэр бүлийн байдал</b>
                    </td>
                    <td style={styles.leftText}>ЭБҮ</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>ЭБЭ</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>МБСТХ</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Хөдөлгөөнт хүн ам</td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "48%",
                marginLeft: 20,
              }}
            >
              <Table
                bordered
                className="document"
                style={{ marginBottom: 10, marginTop: 10 }}
              >
                <tbody>
                  <tr>
                    <td rowSpan={9} style={styles.centerText}>
                      <b>8. Боловсролын байдал</b>
                    </td>
                    <td style={styles.leftText}>Боловсролгүй</td>
                    <td style={styles.leftText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Бага</td>
                    <td style={styles.leftText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Суурь боловсрол</td>
                    <td style={styles.leftText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Бүрэн дунд</td>
                    <td style={styles.leftText}>4</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Мэргэжлийн болон техникийн</td>
                    <td style={styles.leftText}>5</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Дипломын</td>
                    <td style={styles.leftText}>6</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Бакалавр</td>
                    <td style={styles.leftText}>7</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Магистр</td>
                    <td style={styles.leftText}>8</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Доктор</td>
                    <td style={styles.leftText}>9</td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered className="document" style={{ marginBottom: 10 }}>
                <tbody>
                  <tr>
                    <td rowSpan={5} style={styles.centerText}>
                      <b>11.Үзлэгийн төрөл</b>
                    </td>
                    <td style={styles.leftText}>Урьдчилан сэргийлэх үзлэг</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Өвчний учир амбулаторт</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Хяналт</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Тандалт /хавьтлаар/</td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Дуудлага</td>
                    <td style={styles.centerText}>5</td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered className="document" style={{ marginBottom: 10 }}>
                <tbody>
                  <tr>
                    <td rowSpan={3} style={styles.centerText}>
                      <b>12. Илрүүлсэн байгууллага</b>
                    </td>
                    <td style={styles.leftText}>Улсын ЭМБ</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Хувийн хэвшлийн ЭМБ </td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>ТББ</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered className="document" style={{ marginBottom: 10 }}>
                <tbody>
                  <tr>
                    <td
                      rowSpan={5}
                      style={{ ...styles.centerText, ...{ width: 200 } }}
                    >
                      <b>
                        14. Бэлгийн чиг баримжаа, хүйсийн баримжаа илэрхийлэл
                      </b>
                    </td>
                    <td style={styles.leftText}>Гетеросекс</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Гомосекс</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Бисекс</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Трансжендер</td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Тодорхой бус</td>
                    <td style={styles.centerText}>5</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <Table bordered className="document" style={{ marginBottom: 10 }}>
            <tbody>
              <tr>
                <td style={styles.centerText}>
                  <b>15.Үндсэн онош:</b>
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>1</td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 80, height: 50 },
                  }}
                ></td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>2</td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>3</td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>4</td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>5</td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>6</td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}></td>
              </tr>
            </tbody>
          </Table>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "48%" }}
            >
              <div style={styles.rowStyle}>
                <b>16. Халдвар дамжсан зам</b>
              </div>
              <Table bordered className="document" style={{ marginBottom: 10 }}>
                <tbody>
                  <tr>
                    <td rowSpan={6} style={styles.centerText}>
                      <div>Бэлгийн хавьтлаар</div>
                      <div style={{ marginTop: 30 }}>
                        Цус, цусан бүтээгдэхүүн
                      </div>
                    </td>
                    <td style={styles.leftText}>Байнгын бэлгийн хавьтагч</td>
                    <td style={styles.centerText}>1А</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Тохиолдлын бэлгийн хавьтагч</td>
                    <td style={styles.centerText}>1В</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Мэс ажилбар</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>МБСТХ</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Бохир зүү тариур</td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Цус сэлбүүлсэн</td>
                    <td style={styles.centerText}>5</td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={styles.leftText}>
                      Эхээс хүүхдэд халдварласан
                    </td>
                    <td style={styles.centerText}>6</td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={styles.leftText}>
                      Тодорхой бус
                    </td>
                    <td style={styles.centerText}>7</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "48%" }}
            >
              <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
                <b>17. Онош баталгаажилт</b>
              </div>
              <Table
                bordered
                className="document"
                style={{ marginBottom: 10, marginLeft: 20 }}
              >
                <tbody>
                  <tr>
                    <td style={styles.leftText}>Хурдавчилсан сорил</td>
                    <td style={styles.centerText}>1</td>
                    <td style={styles.leftText}>
                      Полимеразын гинжин урвал /PCR/
                    </td>
                    <td style={styles.centerText}>7</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>RPR</td>
                    <td style={styles.centerText}>2</td>
                    <td style={styles.leftText}>Нойтон түрхэц</td>
                    <td style={styles.centerText}>8</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>TPHA</td>
                    <td style={styles.centerText}>3</td>
                    <td style={styles.leftText}>Наац</td>
                    <td style={styles.centerText}>9</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>ФХЭБУ/ ELISA/ </td>
                    <td style={styles.centerText}>4</td>
                    <td style={styles.leftText}>Өсгөвөр</td>
                    <td style={styles.centerText}>10</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>FTA-abs</td>
                    <td style={styles.centerText}>5</td>
                    <td style={styles.leftText}>Эмнэл зүй</td>
                    <td style={styles.centerText}>11</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Бараан талбайд шууд харах</td>
                    <td style={styles.centerText}>6</td>
                    <td style={styles.leftText}>Бусад</td>
                    <td style={styles.centerText}>12</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 100 } }}>
            Эмчид үзүүлсэн: он ______________ сар _____________ өдөр ________
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 100 } }}>
            Мэдээлсэн их эмч:
          </div>
          <div style={styles.centerText}>
            _____________________
            <span style={{ marginLeft: 10 }}> ______________________</span>
            <span style={{ marginLeft: 10 }}>____________________________</span>
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 220 } }}>
            <span>/албан тушаал/</span>
            <span style={{ marginLeft: 30 }}>/гарын үсэг/</span>
            <span style={{ marginLeft: 60 }}>/нэр/</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AM3;
