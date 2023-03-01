import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-22Д
function AM22Д() {
  const styles = {
    generalText: {
      fontSize: 10,
    },
    rowStyle: {
      fontSize: 10,
    },
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 18,
      height: 18,
    },
    leftText: {
      textAlign: "left",
      verticalAlign: "middle",
      fontSize: 10,
      padding: 1,
      paddingLeft: 5,
      lineHeight: 1.3,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 10,
      padding: 1,
      lineHeight: 1.3,
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
      <div className="pageA5">
        <div className="subpageA5">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "right",
            }}
          >
            <span
              style={{
                ...styles.generalText,
                ...{ fontSize: 10 },
              }}
            >
              Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
            </span>
            <span
              style={{
                ...styles.generalText,
                ...{ fontSize: 10 },
              }}
            >
              A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </span>
            <div>
              <span
                style={{
                  ...styles.generalText,
                  ...{ float: "left" },
                }}
              >
                Эмнэлгийн нэр: ____________________
              </span>
              <span style={{ fontWeight: "bold", fontSize: 10 }}>АМ-22Д</span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 10 }}>
              ЦӨСНИЙ ШИНЖИЛГЭЭ №
            </span>
          </div>
          <span style={{ fontSize: 10 }}>
            Эцэг \эх\ийн нэр _________________________
          </span>
          <div style={{ fontSize: 10 }}>Нэр _____________________________</div>
          <div style={styles.rowStyle}>
            <div style={{ display: "flex" }}>
              <span style={{ marginRight: 5 }}>РД </span>
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
              <span style={{ marginLeft: 10 }}>
                Нас__________Хүйс: /зур/ эр, эм
              </span>
            </div>
          </div>
          <div style={styles.rowStyle}>
            _____ он ____ сар _____ өдөр ____ цаг ______ минут
          </div>
          <Table bordered className="document" style={{ marginTop: 20 }}>
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  style={{ ...styles.centerText, ...{ width: "40%" } }}
                >
                  Шинжилэгдэхүүн
                </td>
                <td style={{ ...styles.centerText, ...{ width: "30%" } }}>
                  Лавлах
                </td>
                <td style={{ ...styles.centerText, ...{ width: "30%" } }}>
                  Хариу
                </td>
              </tr>
              <tr>
                <td rowSpan={4} style={styles.verticalText}>
                  А цөс
                </td>
                <td style={styles.leftText}>Хэмжээ</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Өнгө</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Тунгалаг чанар</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>РН</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td rowSpan={4} style={styles.verticalText}>
                  B цөс
                </td>
                <td style={styles.leftText}>Хэмжээ</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Өнгө</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Тунгалаг чанар</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>РН</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td rowSpan={4} style={styles.verticalText}>
                  C цөс
                </td>
                <td style={styles.leftText}>Хэмжээ</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Өнгө</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Тунгалаг чанар</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>РН</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  style={{ ...styles.centerText, ...{ width: "40%" } }}
                >
                  Шинжилэгдэхүүн
                </td>
                <td style={{ ...styles.centerText, ...{ width: "30%" } }}>
                  Лавлах
                </td>
                <td style={{ ...styles.centerText, ...{ width: "30%" } }}>
                  Хариу
                </td>
              </tr>
              <tr>
                <td rowSpan={5} style={styles.verticalText}>
                  А цөс
                </td>
                <td style={styles.leftText}>Хучуур эс</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Цагаан эс</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Салс</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Холестерин</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Белирубинат кальцийн тест</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td rowSpan={5} style={styles.verticalText}>
                  B цөс
                </td>
                <td style={styles.leftText}>Хэмжээ</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Цагаан эс</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Салс</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Холестерин</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Белирубинат кальцийн тест</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td rowSpan={5} style={styles.verticalText}>
                  C цөс
                </td>
                <td style={styles.leftText}>Хэмжээ</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Цагаан эс</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Салс</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Холестерин</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Белирубинат кальцийн тест</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 10 },
            }}
          >
            <span style={{ marginLeft: 30 }}>
              Лаборантын нэр ____________________
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 10 },
            }}
          >
            <span style={{ marginLeft: 30 }}>
              Эмчийн нэр _________________________
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AM22Д;
