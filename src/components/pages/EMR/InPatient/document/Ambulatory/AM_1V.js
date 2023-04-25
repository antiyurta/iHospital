import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-1В
function AM_1V() {
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
    centerText: {
      padding: 1,
      textAlign: "center",
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
              Эрүүл мэндийн бүртгэлийн маягт АМ-1В
            </span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              БЗДХ-ЫН КАБИНЕТЫН ЭМЧИЙН ҮЗЛЭГИЙН БҮРТГЭЛ
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
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
            <div style={styles.leftText}>
              Кабинетийн нэр: ........................................
            </div>
          </div>
        </div>{" "}
        <Table bordered className="document" style={{ marginBottom: 0 }}>
          <tbody>
            <tr>
              <td rowSpan={3} style={styles.verticalText}>
                Он, сар, өдөр
              </td>
              <td rowSpan={3} style={styles.verticalText}>
                Д/Д
              </td>
              <td rowSpan={3} colSpan={10} style={styles.centerText}>
                Овог, нэр Регистрийн дугаар
              </td>
              <td rowSpan={3} style={styles.verticalText}>
                Нас{" "}
              </td>
              <td rowSpan={3} style={styles.verticalText}>
                Хүйс{" "}
              </td>
              <td rowSpan={3} style={styles.verticalText}>
                Жирэмсэн эсэх /1.1/
              </td>
              <td rowSpan={2} colSpan={2} style={styles.centerText}>
                Хөдөлмөр эрхлэлтийн байдал
              </td>
              <td
                rowSpan={3}
                style={{ ...styles.centerText, ...{ width: 200 } }}
              >
                Тогтмол хаяг
              </td>
              <td colSpan={5} style={styles.centerText}>
                Үзлэгийн төрөл
              </td>
              <td colSpan={4} style={styles.centerText}>
                Шинжилгээнд хамруулсан байдал
              </td>
              <td rowSpan={3} style={styles.verticalText}>
                Үйлчлүүлэгч хариугаа авсан эсэх 1- тийм, 2-үгүй
              </td>
              <td rowSpan={3} style={styles.centerText}>
                Үндсэн онош /ӨОУА-10/
              </td>
              <td rowSpan={3} style={styles.centerText}>
                Тусламж үйлчилгээ /эмчилгээнд хамрагдсан эсэх, шилжүүлсэн эсэх/
              </td>
            </tr>
            <tr>
              <td style={styles.verticalText} rowSpan={2}>
                Урьдчилан сэргийлэх үзлэг /2.1/
              </td>
              <td style={styles.verticalText} rowSpan={2}>
                Өвчний учир амбулаторт [анх2.2, давтан-2.3]
              </td>
              <td style={styles.verticalText} rowSpan={2}>
                Хяналт /2.4/
              </td>
              <td style={styles.verticalText} rowSpan={2}>
                Тандалт /хавьтлаар /3.1/
              </td>
              <td style={styles.verticalText} rowSpan={2}>
                Дуудлага /3.2/
              </td>
              <td style={styles.verticalText} rowSpan={2}>
                Нян судлал [анх-1, давтан-2]
              </td>
              <td colSpan={2} style={styles.centerText}>
                Ийлдэс судлал
              </td>
              <td rowSpan={2} style={styles.verticalText}>
                Бусад /ПГУ,/
              </td>
            </tr>
            <tr>
              <td style={{ ...styles.verticalText, ...{ width: 40 } }}>
                Хөдөлмөр эрхлэлт /код 01-07/
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 40 } }}>
                Хөдөлмөр эрхлэхгүй байгаа шалтгаан /код 01- 03/
              </td>
              <td style={styles.verticalText}>ХДХВ 1-анх, 2-давтан</td>
              <td style={styles.verticalText}>Тэмбүү 1-анх, 2-давтан</td>
            </tr>
            <tr>
              {[...Array(21)].map((x, i) => (
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
              {[...Array(18)].map((x, i) => (
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
              {[...Array(12)].map((x, i) => (
                <td
                  style={{ ...styles.centerText, ...{ width: 15, height: 15 } }}
                >
                  &nbsp;
                </td>
              ))}
            </tr>
            {[...Array(12)].map((x, i) => (
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
                  {[...Array(18)].map((x, i) => (
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
        <div style={styles.leftText}>
          <b> Хүн амын бүлэг:</b> 4.1 ЭБҮ, 4.2 ЭБЭ, 4.3 МБСТХ, 4.4 Гадаад иргэд
        </div>
      </div>
    </div>
  );
}

export default AM_1V;
