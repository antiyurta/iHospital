import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-22З
function AM22З() {
  const styles = {
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
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
      fontSize: 12,
      padding: 1,
      lineHeight: 1.3,
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
              <span style={{ fontWeight: "bold", fontSize: 12 }}>АМ-22 З</span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              НИЧЕПОРЕНКИЙН СОРИЛООР ШЭЭСИЙГ ШИНЖЛЭХ
            </span>
          </div>
          <span style={{ fontSize: 12 }}>
            Эцэг \эх\ийн нэр _________________________
          </span>
          <div style={{ fontSize: 12 }}>Нэр _____________________________</div>
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
                <td style={{ ...styles.centerText, ...{ width: "40%" } }}>
                  Шинжлэгдэхүүн
                </td>
                <td style={{ ...styles.centerText, ...{ width: "30%" } }}>
                  1 мл шээсэнд
                </td>
                <td style={{ ...styles.centerText, ...{ width: "30%" } }}>
                  Хариу
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Эритроцит</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>Лейкоцит</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>Цилиндр</td>
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
                ...{ fontSize: 12 },
              }}
            >
              ЭМСайдын 2013 оны 11 сарын
            </span>
            <span
              style={{
                ...styles.generalText,
                ...{ fontSize: 12 },
              }}
            >
              450 тоот тушаалаар батлав.
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
              <span style={{ fontWeight: "bold", fontSize: 12 }}>АМ-22И</span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              АМБУРЖИЙН СОРИЛООР ШЭЭСИЙГ ШИНЖЛЭХ
            </span>
          </div>
          <span style={{ fontSize: 12 }}>
            Эцэг \эх\ийн нэр _________________________
          </span>
          <div style={{ fontSize: 12 }}>Нэр _____________________________</div>
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
                <td style={{ ...styles.centerText, ...{ width: "40%" } }}>
                  Шинжлэгдэхүүн
                </td>
                <td style={{ ...styles.centerText, ...{ width: "30%" } }}>
                  1 мл шээсээр ялгарах эс
                </td>
                <td style={{ ...styles.centerText, ...{ width: "30%" } }}>
                  Хариу
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Эритроцит</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>Лейкоцит</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>Цилиндр</td>
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

export default AM22З;
