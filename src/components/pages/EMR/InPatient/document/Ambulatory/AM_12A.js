import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-12А
function AM_12A() {
  const styles = {
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 130,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 10,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 10,
    },
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
      minWidth: 15,
      display: "inline-flex",
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 10,
      marginTop: 3,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 9,
    },
    rightText: {
      textAlign: "right",
      padding: 1,
      verticalAlign: "middle",
      fontSize: 9,
    },
  };

  return (
    <div className="page-landscape">
      <div className="subpage-landscape">
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <span style={{ fontSize: 10 }}>
              Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
            </span>
            <span style={{ fontSize: 10 }}>
              A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </span>
            <span style={{ fontWeight: "bold", fontSize: 10 }}>
              Эрүүл мэндийн бүртгэлийн маягт АМ-12А
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={styles.leftText}>
              Эмнэлгийн нэр: ........................................
            </div>
            <div style={styles.rowCellWithText}>
              Эмнэлгийн код:&nbsp;
              <div style={{ display: "flex" }}>
                <div style={styles.rowCells}></div>
                <div style={styles.rowCells}></div>
                <div style={styles.rowCells}></div>
                <div style={styles.rowCells}></div>
                <div style={styles.rowCells}></div>
                <div style={styles.rowCells}></div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              ЭМНЭЛЭГ ХЯНАЛТЫН КОМИССООР ОРОГЧДЫН БҮРТГЭЛ
            </span>
          </div>
        </div>{" "}
        <Table bordered className="document" style={{ marginBottom: 0 }}>
          <tbody>
            <tr>
              <td rowSpan={2} style={styles.centerText}>
                Д/Д
              </td>
              <td rowSpan={2} style={styles.verticalText}>
                Он, сар, өдөр
              </td>
              <td rowSpan={2} colSpan={10} style={styles.centerText}>
                Эцэг /эх/-ийн нэр, Нэр Регистрийн дугаар
              </td>
              <td rowSpan={2} style={styles.centerText}>
                Нас{" "}
              </td>
              <td rowSpan={2} style={styles.centerText}>
                Хүйс{" "}
              </td>
              <td
                rowSpan={2}
                style={{ ...styles.centerText, ...{ width: 200 } }}
              >
                Тогтмол хаяг
              </td>
              <td
                rowSpan={2}
                style={{ ...styles.centerText, ...{ width: 200 } }}
              >
                Ажлын газар
              </td>
              <td rowSpan={2} style={styles.centerText}>
                Ажил, мэргэжил
              </td>
              <td rowSpan={2} style={styles.centerText}>
                Онош /ӨОУА-10/
              </td>
              <td rowSpan={2} style={styles.centerText}>
                Заалт
              </td>
              <td style={styles.centerText} colSpan={2}>
                Комиссоор орж буй удаа
              </td>
              <td style={styles.centerText} colSpan={2}>
                Комиссын шийдвэр
              </td>
            </tr>
            <tr>
              <td style={styles.verticalText}>Анх</td>
              <td style={styles.verticalText}>Давтан</td>
              <td style={styles.verticalText}>Шалтгаан</td>
              <td style={styles.verticalText}>Хугацаа</td>
            </tr>
            <tr>
              {[...Array(14)].map((x, i) => (
                <td
                  style={styles.centerText}
                  key={i}
                  colSpan={i == 2 ? 10 : null}
                >
                  {i + 1}
                </td>
              ))}
            </tr>
            <tr>
              <td
                rowSpan={2}
                style={{ ...styles.centerText, ...{ height: 15 } }}
              >
                &nbsp;
              </td>
              <td
                rowSpan={2}
                style={{ ...styles.centerText, ...{ height: 15 } }}
              >
                &nbsp;
              </td>
              <td
                colSpan={10}
                style={{ ...styles.centerText, ...{ height: 15 } }}
              ></td>
              {[...Array(11)].map((x, i) => (
                <td
                  rowSpan={2}
                  key={i}
                  style={{ ...styles.centerText, ...{ height: 15 } }}
                >
                  &nbsp;
                </td>
              ))}
            </tr>
            <tr>
              {[...Array(10)].map((x, i) => (
                <td
                  style={{ ...styles.centerText, ...{ width: 15, height: 15 } }}
                >
                  &nbsp;
                </td>
              ))}
            </tr>
            {[...Array(8)].map((x, i) => (
              <>
                <tr>
                  <td
                    rowSpan={2}
                    style={{ ...styles.centerText, ...{ height: 15 } }}
                  >
                    &nbsp;
                  </td>
                  <td
                    rowSpan={2}
                    style={{ ...styles.centerText, ...{ height: 15 } }}
                  >
                    &nbsp;
                  </td>
                  <td colSpan={10}></td>
                  {[...Array(11)].map((x, i) => (
                    <td
                      rowSpan={2}
                      key={i}
                      style={{ ...styles.centerText, ...{ height: 15 } }}
                    >
                      &nbsp;
                    </td>
                  ))}
                </tr>
                <tr>
                  {[...Array(10)].map((x, i) => (
                    <td
                      key={i}
                      style={{
                        ...styles.centerText,
                        ...{ width: 15, height: 15 },
                      }}
                    >
                      &nbsp;
                    </td>
                  ))}
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AM_12A;
