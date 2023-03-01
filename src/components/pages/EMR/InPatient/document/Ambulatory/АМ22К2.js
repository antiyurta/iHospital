import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-22К
function AM22К() {
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
                Эрүүл мэндийн бүртгэлийн маягт АМ-22К
              </span>
            </div>
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Өсгөвөр шинжилгээний дүн:
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: "10%", fontWeight: "bold" },
                  }}
                >
                  №
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: "35%", fontWeight: "bold" },
                  }}
                >
                  Үзүүлэлт
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: "20%", fontWeight: "bold" },
                  }}
                >
                  Лавлах хэмжээ
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: "35%", fontWeight: "bold" },
                  }}
                >
                  Үр дүн
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>1</td>
                <td style={styles.leftText}>Neisseria gonorrhoeae</td>
                <td style={styles.centerText}>Сөрөг</td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>2</td>
                <td style={styles.leftText}>Candidas</td>
                <td style={styles.centerText}>Сөрөг</td>
                <td style={styles.centerText}></td>
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
            Антибиотик мэдрэг чанар:
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td
                  colSpan={6}
                  style={{ ...styles.leftText, ...{ fontWeight: "bold" } }}
                >
                  Үүсгэгч:
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: "23%", fontWeight: "bold" },
                  }}
                >
                  Антибиотик
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: "10%", fontWeight: "bold" },
                  }}
                >
                  Дүн
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: "23%", fontWeight: "bold" },
                  }}
                >
                  Антибиотик
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: "10%", fontWeight: "bold" },
                  }}
                >
                  Дүн
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: "23%", fontWeight: "bold" },
                  }}
                >
                  Антибиотик
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: "10%", fontWeight: "bold" },
                  }}
                >
                  Дүн
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Azithromycin</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Cefotaxime</td>
                <td style={styles.centerText}></td>
                <td style={styles.leftText}>Ofloxacin</td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Benzyl Penicillin</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Ciprofloxacin</td>
                <td style={styles.centerText}></td>
                <td style={styles.leftText}>Spectinomycin</td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Ceftriaxone</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Nalidixic Acid</td>
                <td style={styles.centerText}></td>
                <td style={styles.leftText}>Tetracycline</td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 30, marginBottom: 100 },
            }}
          >
            Тайлбар: S-мэдрэг, I- дунд мэдрэг, R- тэсвэртэй
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 10 },
            }}
          >
            Шинжилгээ хийсэн: Техникч ..........................
            <span style={{ marginLeft: 30 }}>
              Хариу гарсан огноо:...........................
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 10 },
            }}
          >
            Баталгаажуулсан: Эмнэл зүйн эмгэг судлаач эмч
            .....................................................
          </div>
        </div>
      </div>
    </>
  );
}

export default AM22К;
