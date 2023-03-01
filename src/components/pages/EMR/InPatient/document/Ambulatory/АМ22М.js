import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-22М
function AM22М() {
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
      fontSize: 12,
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
      <div className="page">
        <div className="subpage">
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
              ></span>
              <span style={{ fontWeight: "bold", fontSize: 12 }}>
                Эрүүл мэндийн бүртгэлийн маягт АМ-22М
              </span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              Шинжилгээний хариуны маягт
            </span>
          </div>
          <div style={{ textAlign: "center", marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              ТЭМБҮҮГИЙН ҮҮСГЭГЧ ИЛРҮҮЛЭХ ШИНЖИЛГЭЭНИЙ ДҮН
            </span>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 20, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td
                  colSpan={9}
                  style={{ ...styles.centerText, ...{ fontWeight: "bold" } }}
                >
                  Шинжилгээний мэдээлэл
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}>
                  Зорилго
                </td>
                <td colSpan={6} style={styles.centerText}>
                  Тэмбүүгийн халдвар илрүүлэх
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Төрөл</td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  ФХЭБУ
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Наалдуулах
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>ПГУ</td>
              </tr>
              <tr>
                <td style={styles.centerText}>Аргачлал</td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Үйлдвэрлэгчийн заавар
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Үйлдвэрлэгчийн заавар
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Үйлдвэрлэгчийн заавар
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td
                  colSpan={9}
                  style={{ ...styles.centerText, ...{ fontWeight: "bold" } }}
                >
                  Шинжлүүлэгчийн мэдээлэл
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Овог
                </td>
                <td style={styles.centerText}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>Нэр</td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Регистр
                </td>
                <td style={{ ...styles.centerText, ...{ width: 150 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>нас</td>
                <td style={styles.centerText}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  эрэгтэй
                </td>
                <td style={styles.centerText}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  эмэгтэй
                </td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Шинжилгээ өгөлт
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>анх</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.centerText}>давтан</td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}></td>
                <td style={styles.centerText}>Жирэмсэн эсэх</td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  үгүй
                </td>
                <td style={styles.centerText}>тийм</td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Тасаг
                </td>
                <td style={styles.centerText}></td>
                <td style={{ ...styles.centerText, ...{ width: 300 } }}>
                  Өвчний түүхийн дугаар
                </td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 150 } }}>
                  Үзлэгийн төрөл/код
                </td>
                <td style={styles.centerText}></td>
                <td style={{ ...styles.centerText, ...{ width: 150 } }}>
                  Хүн амын бүлэг/код
                </td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  style={{ ...styles.centerText, ...{ fontWeight: "bold" } }}
                >
                  Сорьцын мэдээлэл
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Илгээгч байгууллага
                </td>
                <td style={styles.centerText}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Хүлээн авсан
                </td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  Төрөл
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Цус</td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Ийлдэс
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: "20%" } }}>
                  Дугаар
                </td>
                <td style={{ ...styles.centerText, ...{ width: "30%" } }}></td>
                <td style={{ ...styles.centerText, ...{ width: "20%" } }}>
                  Хэмжээ
                </td>
                <td style={{ ...styles.centerText, ...{ width: "30%" } }}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Сорьц авсан огноо
                </td>
                <td style={styles.centerText}>20... он...сар ...өдөр</td>
                <td style={{ ...styles.centerText, ...{ width: 150 } }}>
                  Лабораторид сорьц хүлээн авсан огноо
                </td>
                <td style={styles.centerText}>20... он...сар ...өдөр</td>
              </tr>
            </tbody>
          </Table>
          <div
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Шинжилгээний дүн:
          </div>
          <Table bordered className="document">
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: "5%" } }}>№</td>
                <td style={{ ...styles.centerText, ...{ width: "20%" } }}>
                  Шинжилгээний төрөл
                </td>
                <td style={{ ...styles.centerText, ...{ width: "20%" } }}>
                  Лавлах хэмжээ
                </td>
                <td style={{ ...styles.centerText, ...{ width: "20%" } }}>
                  Үр дүн
                </td>
                <td style={{ ...styles.centerText, ...{ width: "15%" } }}>
                  Тайлбар
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>1.</td>
                <td style={styles.centerText}>RPR</td>
                <td style={styles.centerText}>negative</td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>2.</td>
                <td style={styles.centerText}>RPR титр</td>
                <td style={styles.centerText}>-</td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>3.</td>
                <td style={styles.centerText}>TPHA</td>
                <td style={styles.centerText}>negative</td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>4.</td>
                <td style={styles.centerText}>Anti-syphilis IgG</td>
                <td style={styles.centerText}>negative</td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>5.</td>
                <td style={styles.centerText}>Anti-syphilis IgM</td>
                <td style={styles.centerText}>negative</td>
                <td style={styles.leftText}></td>
              </tr>
            </tbody>
          </Table>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 50 },
            }}
          >
            Шинжилгээ эхэлсэн огноо:................................... Дууссан
            огноо: ................................
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 10 },
            }}
          >
            Шинжилгээ хийсэн: Лаборант .............................. Шинжээч
            эмч: .................................
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 10 },
            }}
          >
            Хянасан: Лабораторийн
            эмч:.....................................................................................
          </div>
        </div>
      </div>
    </>
  );
}

export default AM22М;
