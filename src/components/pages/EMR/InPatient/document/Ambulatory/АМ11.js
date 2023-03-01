import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-11
function AM11() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 18,
      height: 18,
    },
    generalText: {
      fontSize: 12,
    },
    generalTextBold: {
      fontSize: 18,
      fontWeight: "bold",
    },
    boldTitle: {
      fontWeight: "bold",
      fontSize: 16,
    },
    blankSpaces: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 10,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 4,
      rotate: "180deg",
      lineHeight: 1,
      fontSize: 12,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      lineHeight: 1.3,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <span
            style={{
              ...styles.generalText,
              ...{ textAlign: "right", display: "block" },
            }}
          >
            Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span style={styles.generalText}>
              Эмнэлгийн нэр ____________________
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={styles.generalText}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span
                style={{ fontWeight: "bold", fontSize: 12, textAlign: "right" }}
              >
                Эрүүл мэндийн бүртгэлийн маягт АМ-11
              </span>
            </div>
          </div>
          <div
            style={{
              ...styles.generalText,
              ...{ display: "flex", justifyContent: "space-between" },
            }}
          >
            <span style={{ marginRight: 5 }}>
              Кабинетын нэр ____________________
            </span>
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
            </div>
          </div>
          <div
            style={{ textAlign: "center", marginTop: 100, marginBottom: 100 }}
          >
            <span style={{ fontWeight: "bold", fontSize: 32 }}>
              ХЯНАЛТЫН КАРТ
            </span>
          </div>
          <div
            style={{
              ...styles.generalText,
              ...{ textAlign: "center", marginBottom: 50 },
            }}
          >
            <span>
              Эмчийн нэр ___________________ Карт нээсэн __________ он _____ сар
              ____ өдөр
            </span>
          </div>
          <div>
            <span
              style={{ fontWeight: "bold", fontSize: 38, letterSpacing: 2 }}
            >
              ______________________________________
            </span>
          </div>
          <span style={styles.generalText}>2-р тал</span>
          <div style={styles.rowStyle}>
            <span style={{}}>
              1. Эцэг /эх/-ийн нэр __________________________________ Нэр
              _________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{}}>2. Нас</span>
            <span style={{ marginLeft: 200 }}>3. Хүйс: (зур) эр, эм</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{}}>
              4. Төрсөн ___________ он ______ сар ______ өдөр
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{}}>
              5. Тогтмол хаяг
              _______________________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 100 }}>Утас: __________________</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{}}>6. Ажлын газар: _______________________</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{}}>7. Ажил мэргэжил: ____________________</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{}}>8. Боловсрол:_________________________</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{}}>
              9. Хяналтанд авсан шалтгаан (Үндсэн онош) DS:
              ______________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{}}>
              ___________________________________________________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{}}>
              10. Хяналтанд хасагдсан __________ он ______ сар______ өдөр
            </span>
            <span style={{ marginLeft: 50 }}>Бүлгийн зэрэг: _____</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{}}>
              11. Хяналтаас хасагдсан ________ он _____ сар _____ өдөр
            </span>
            <span style={{ marginLeft: 70 }}>Бүлгийн зэрэг: _____</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{}}>
              12. Хасагдсан шалтгаан: (зур) эдгэрсэн, шилжсэн, нас барсан
            </span>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <span style={styles.generalText}>3-р тал</span>
          <div style={styles.rowStyle}>
            <span style={styles.boldTitle}>ОНОШИЙН ҮНДЭСЛЭЛ</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              1. Зовиур: ___________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              2. Өвчний түүхээс: ____________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              3. Асуумжаас: ________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              4. Үзлэг ______________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              5. Шинжилгээ: _________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              6. Онош DS:
              _____________________________________________________________
            </span>
          </div>
          <div style={{ padding: 30 }}>
            <div style={styles.rowStyle}>
              <span style={styles.generalText}>
                Хяналтын эмч: _______________________
              </span>
            </div>
            <div style={styles.rowStyle}>
              <span style={styles.generalText}>(Тамга)</span>
            </div>
          </div>
          <div>
            <span
              style={{ fontWeight: "bold", fontSize: 38, letterSpacing: 2 }}
            >
              ______________________________________
            </span>
          </div>
          <span style={styles.generalText}>4-6-р тал</span>
          <div style={{ textAlign: "center", marginTop: 10, marginBottom: 15 }}>
            <span style={{ fontWeight: "bold", fontSize: 18 }}>
              ХЯНАЛТЫН ҮР ДҮНГИЙН ҮЗҮҮЛЭЛТ
            </span>
          </div>
          <Table bordered style={{ marginTop: 20 }} className="document">
            <thead>
              <tr>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Хяналтад ирэх он, сар, өдөр
                </td>
                <td
                  rowSpan={2}
                  style={{
                    ...styles.verticalText,
                    ...{ width: 30 },
                  }}
                >
                  Хяналтад ирсэн он, сар, өдөр
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  ХЧТА-ын хувь
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Группэд орсон тийм (+), үгүй (-)
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Эрүүл мэндийн бүлгийн шилжилт
                </td>
                <td
                  colSpan={8}
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                >
                  Нарийн мэргэжлийн эмчийн үзлэгт хамрагдсан байсан
                </td>
                <td
                  colSpan={5}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  Хийгдсэн шинжилгээ
                </td>
                <td
                  colSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Эмчилгээ
                </td>
                <td
                  colSpan={3}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Заалт
                </td>
                <td
                  colSpan={3}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  Хяналтын хөдөлгөөн
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 200 } }}
                >
                  Эмчийн гарын үсэг
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                  Дотор
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Мэс засал
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Эмэгтэйчүүд
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Шүд
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Нүд
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Мэдрэл, сэтгэц
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Чих хамар, хоолой
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Бусад
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Шээс
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Биохими
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Флюрограф
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  ЭКГ
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Бусад
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Эмийн
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Эмийн бус
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Стационарт
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Сувилалд
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  ЭМ-ийн зөвлөгөө
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Эдгэрсэн
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Шилжсэн
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Нас барсан
                </td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
                <td style={{ height: 20, width: 20 }}></td>
              </tr>
            </thead>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={styles.generalText}>7-р тал</span>
            <span style={{ ...styles.generalText, ...{ fontWeight: "bold" } }}>
              Хавсралт 1
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.boldTitle}>ОНОШИЙН ҮНДЭСЛЭЛ</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              1. Зовиур: ___________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              2. Өвчний түүхээс: ____________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              3. Асуумжаас: ________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              4. Үзлэг ______________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              5. Шинжилгээ: _________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              6. Онош DS:
              _____________________________________________________________
            </span>
          </div>
          <div style={{ padding: 30 }}>
            <div style={styles.rowStyle}>
              <span style={styles.generalText}>
                Хяналтын эмч: _______________________
              </span>
            </div>
            <div style={styles.rowStyle}>
              <span style={styles.generalText}>(Тамга)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={styles.generalText}>8-р тал</span>
            <span style={{ ...styles.generalText, ...{ fontWeight: "bold" } }}>
              Хавсралт 1
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.boldTitle}>ОНОШИЙН ҮНДЭСЛЭЛ</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              1. Зовиур: ___________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              2. Өвчний түүхээс: ____________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              3. Асуумжаас: ________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              4. Үзлэг ______________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              5. Шинжилгээ: _________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={styles.generalText}>
              6. Онош DS:
              _____________________________________________________________
            </span>
          </div>
          <div style={{ padding: 30 }}>
            <div style={styles.rowStyle}>
              <span style={styles.generalText}>
                Хяналтын эмч: _______________________
              </span>
            </div>
            <div style={styles.rowStyle}>
              <span style={styles.generalText}>(Тамга)</span>
            </div>
          </div>
          <div>
            <span
              style={{ fontWeight: "bold", fontSize: 38, letterSpacing: 2 }}
            >
              ______________________________________
            </span>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={styles.generalText}></span>
            <span style={{ ...styles.generalText, ...{ fontWeight: "bold" } }}>
              Хавсралт 1
            </span>
          </div>
          <div style={{ ...styles.rowStyle, ...{ textAlign: "center" } }}>
            <span style={styles.boldTitle}>
              Настны эрүүл мэндийн төлөвлөгөө
            </span>
          </div>
          <Table bordered className="document" style={{ marginTop: 20 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}>
                  Үзүүлэлтүүд
                </td>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}>
                  Төлөвлөгөө
                </td>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}>
                  Хугацаа
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  Биеийн эрүүл мэнд
                </td>
              </tr>
              <tr style={{ height: 80 }}>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}></td>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}></td>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}></td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  Сэтгэц, танин мэдэхүй
                </td>
              </tr>
              <tr style={{ height: 80 }}>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}></td>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}></td>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}></td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  Үйл ажиллагаа
                </td>
              </tr>
              <tr style={{ height: 80 }}>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}></td>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}></td>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}></td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  Нийгмийн оролцоо
                </td>
              </tr>
              <tr style={{ height: 80 }}>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}></td>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}></td>
                <td style={{ ...styles.centerText, ...{ width: "33%" } }}></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={{ marginTop: "75%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={styles.generalText}></span>
              <span
                style={{ ...styles.generalText, ...{ fontWeight: "bold" } }}
              >
                Хавсралт 2
              </span>
            </div>
            <div style={{ ...styles.rowStyle, ...{ textAlign: "center" } }}>
              <span style={styles.boldTitle}>
                Настны үйл ажиллагааны хяналтын үнэлгээ
              </span>
            </div>
            <Table bordered style={{ marginTop: 20 }} className="document">
              <thead>
                <tr>
                  <td
                    rowSpan={2}
                    style={{ ...styles.verticalText, ...{ width: 30 } }}
                  >
                    Хяналтанд ирэх он сар өдөр
                  </td>
                  <td
                    colSpan={6}
                    style={{
                      ...styles.centerText,
                      ...{ width: 30 },
                    }}
                  >
                    Бие даах чадвар
                  </td>
                  <td
                    colSpan={6}
                    style={{
                      ...styles.centerText,
                      ...{ width: 30 },
                    }}
                  >
                    Багаж хэрэгсэлтэй ажиллах чадвар
                  </td>
                  <td
                    colSpan={6}
                    style={{
                      ...styles.centerText,
                      ...{ width: 30 },
                    }}
                  >
                    Бусад чадварууд
                  </td>
                </tr>
                <tr>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Хооллох
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Хувцаслах
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Усанд орох
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Хөдөлгөөн
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Бие засах
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Өтгөн шингэнээ барих
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Хоол бэлдэх
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Гэрийн ажил
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Хувцас угаах
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Эм уух
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Гадуур явах
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Худалдаа хийх
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Мөнгө зарцуулах
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Утсаар ярих
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Танин мэдэхүйн
                    <br /> чадвар(MMSE)
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Сэтгэл гутрал
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Хоол тэжээлийн байдал <br />
                    (MNA)
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Алхаа гишгээ
                  </td>
                  <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                    Тэнцвэр
                  </td>
                </tr>
                <tr>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                </tr>
                <tr>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                </tr>
                <tr>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                </tr>
                <tr>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                </tr>
                <tr>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                </tr>
                <tr>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                </tr>
                <tr>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                </tr>
                <tr>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                </tr>
                <tr>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                </tr>
                <tr>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                </tr>
                <tr>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                  <td style={{ width: 20, height: 20 }}></td>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <span
            style={{
              ...styles.generalText,
              ...{ textAlign: "right", display: "block" },
            }}
          >
            Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span style={styles.generalText}></span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={styles.generalText}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span
                style={{ fontWeight: "bold", fontSize: 12, textAlign: "right" }}
              >
                Эрүүл мэндийн бүртгэлийн маягт AM11 Хавсралт-1
              </span>
            </div>
          </div>

          <span style={styles.generalText}>
            ЭМБ-ын нэр ____________________
          </span>
          <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
            <span style={{ fontWeight: "bold", fontSize: 18 }}>
              АРТЕРИЙН ГИПЕРТЕНЗИЙН ХЯНАЛТ
            </span>
          </div>
          <span style={{ ...styles.generalText, ...{ padding: 10 } }}>
            1. Эцэг/эх/-ийн нэр ________________________
            <span style={{ ...styles.generalText, ...{ marginLeft: 30 } }}>
              Нэр: _____________________________
            </span>
          </span>
          <div style={styles.rowStyle}>
            <div style={{ display: "flex", padding: 10 }}>
              <span style={{ marginRight: 5 }}>2. Регистрийн дугаар: </span>
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
              <span style={{ ...styles.generalText, ...{ marginLeft: 30 } }}>
                3. Хүйс: Эрэгтэй, Эмэгтэй
              </span>
            </div>
          </div>
          <div style={{ display: "flex", padding: 10 }}>
            <span style={styles.generalText}>
              4. Утасны дугаар: ______________
              <span style={{ ...styles.generalText, ...{ marginLeft: 30 } }}>
                5. Анх хяналтад орсон огноо__________________________
              </span>
            </span>
          </div>
          <Table bordered className="document">
            <thead>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                  Үзлэгийн огноо
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Артерийн даралтын хэмжилт (мм МУБ)
                </td>
                <td style={{ ...styles.centerText, ...{ width: 350 } }}>
                  Эмийн нэр, тун
                </td>
                <td style={{ ...styles.centerText, ...{ width: 90 } }}>
                  Эмээ эмчийн зааврын дагуу уусан эсэх (тийм-1, үгүй-2)
                </td>

                <td style={{ ...styles.centerText, ...{ width: 90 } }}>
                  Дараагийн үзлэгийн огноо
                </td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
          </Table>
          <Table bordered style={{ marginTop: 60 }} className="document">
            <thead>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                  Үзлэгийн огноо
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Артерийн даралтын хэмжилт (мм МУБ)
                </td>
                <td style={{ ...styles.centerText, ...{ width: 350 } }}>
                  Эмийн нэр, тун
                </td>
                <td style={{ ...styles.centerText, ...{ width: 90 } }}>
                  Эмээ эмчийн зааврын дагуу уусан эсэх (тийм-1, үгүй-2)
                </td>

                <td style={{ ...styles.centerText, ...{ width: 90 } }}>
                  Дараагийн үзлэгийн огноо
                </td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <span
            style={{
              ...styles.generalText,
              ...{ textAlign: "right", display: "block" },
            }}
          >
            Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span style={styles.generalText}></span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={styles.generalText}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span
                style={{ fontWeight: "bold", fontSize: 12, textAlign: "right" }}
              >
                Эрүүл мэндийн бүртгэлийн маягт AM11 Хавсралт-1.1
              </span>
            </div>
          </div>

          <span style={styles.generalText}>
            ЭМБ-ын нэр ____________________
          </span>
          <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
            <span style={{ fontWeight: "bold", fontSize: 18 }}>
              ЧИХРИЙН ШИЖИНГИЙН ХЯНАЛТЫН КАРТ
            </span>
          </div>
          <span style={{ ...styles.generalText, ...{ padding: 10 } }}>
            Овог, Нэр: _________________________________________
            <span style={{ ...styles.generalText, ...{ marginLeft: 30 } }}>
              Нас, Хүйс: ___________
            </span>
          </span>
          <div style={styles.rowStyle}>
            <div style={{ display: "flex", padding: 10 }}>
              <span style={{ marginRight: 5 }}>Регистрийн дугаар: </span>
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
          <div style={{ display: "flex", padding: 10 }}>
            <span style={styles.generalText}>
              Утасны дугаар: ______________
              <span style={{ ...styles.generalText, ...{ marginLeft: 30 } }}>
                Анх хяналтад орсон огноо__________________________
              </span>
            </span>
          </div>
          <Table bordered className="document">
            <thead>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                  Үзлэгийн огноо
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Артерийн даралтын хэмжилт (мм МУБ)
                </td>
                <td style={{ ...styles.centerText, ...{ width: 350 } }}>
                  Эмийн нэр, тун
                </td>
                <td style={{ ...styles.centerText, ...{ width: 90 } }}>
                  Эмээ эмчийн зааврын дагуу уусан эсэх (тийм-1, үгүй-2)
                </td>

                <td style={{ ...styles.centerText, ...{ width: 90 } }}>
                  Дараагийн үзлэгийн огноо
                </td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
          </Table>
          <Table bordered style={{ marginTop: 60 }} className="document">
            <thead>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                  Үзлэгийн огноо
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Артерийн даралтын хэмжилт (мм МУБ)
                </td>
                <td style={{ ...styles.centerText, ...{ width: 350 } }}>
                  Эмийн нэр, тун
                </td>
                <td style={{ ...styles.centerText, ...{ width: 90 } }}>
                  Эмээ эмчийн зааврын дагуу уусан эсэх (тийм-1, үгүй-2)
                </td>

                <td style={{ ...styles.centerText, ...{ width: 90 } }}>
                  Дараагийн үзлэгийн огноо
                </td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ height: 30 }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <span style={styles.generalText}>9-р тал</span>
          <div style={{ ...styles.rowStyle, ...{ textAlign: "center" } }}>
            <span style={styles.boldTitle}>Хяналтын үечилсэн дүгнэлт</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ ...styles.generalText, ...{ padding: 10 } }}>
              _________ он ______ сар ______ өдөр
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ ...styles.generalText, ...{ padding: 10 } }}>
              Зовиур:
              ________________________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ ...styles.generalText, ...{ padding: 10 } }}>
              Бодит үзлэгээр илэрсэн өөрчлөлт __________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ ...styles.generalText, ...{ padding: 10 } }}>
              ______________________________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ ...styles.generalText, ...{ padding: 10 } }}>
              Шинжилгээний өөрчлөлтүүд: ______________________________________
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ display: "flex", flexDirection: "column", padding: 10 },
            }}
          >
            <span style={styles.generalText}>Хяналтын үр дүн:</span>
            <span style={styles.generalText}>
              Биеийн байдал: хэвэндээ, сайжирсан, дордсон, сэдэрсэн
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ ...styles.generalText, ...{ padding: 10 } }}>
              Бүлгийн шилжилтийн байдал: (зур)
            </span>
            <span
              style={{
                ...styles.generalText,
                ...{ padding: 10, marginLeft: 30 },
              }}
            >
              I, II, III, IV, V
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ ...styles.boldTitle, ...{ padding: 10 } }}>
              ДҮГНЭЛТ: _______________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ ...styles.boldTitle, ...{ padding: 10 } }}>
              __________________________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ ...styles.generalText, ...{ padding: 10 } }}>
              Цаашид хэрэгжүүлэх арга хэмжээ, заалт:
              __________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ ...styles.generalText, ...{ padding: 10 } }}>
              ______________________________________________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span
              style={{
                ...styles.generalText,
                ...{ padding: 10, marginLeft: 20 },
              }}
            >
              Эмчийн нэр: ________________________
            </span>
          </div>
          <div>
            <span
              style={{ fontWeight: "bold", fontSize: 38, letterSpacing: 2 }}
            >
              ______________________________________
            </span>
          </div>
          <span style={styles.generalText}>10-р тал</span>
          <Table bordered className="document">
            <thead>
              <tr>
                <td
                  style={{
                    ...styles.verticalText,
                    ...{ width: "5%", height: 50 },
                  }}
                >
                  Он сар өдөр
                </td>
                <td style={{ ...styles.centerText, ...{ width: "50%" } }}>
                  Эмчийн тэмдэглэл
                </td>
                <td style={{ ...styles.centerText, ...{ width: "40%" } }}>
                  Эмчилгээний заалт
                </td>
              </tr>
              <tr style={{ height: 450 }}>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <span
            style={{
              ...styles.generalText,
              ...{ textAlign: "right", display: "block" },
            }}
          >
            Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span style={styles.generalText}></span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={styles.generalText}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span
                style={{ fontWeight: "bold", fontSize: 12, textAlign: "right" }}
              >
                Эрүүл мэндийн бүртгэлийн маягт AM11 Хавсралт-2
              </span>
            </div>
          </div>

          <span style={styles.generalText}>
            ЭМБ-ын нэр ____________________
          </span>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 18 }}>
              НҮДНИЙ ЭМЧИЙН ХЯНАЛТ
            </span>
          </div>
          <span style={{ ...styles.generalText, ...{ padding: 10 } }}>
            1. Эцэг/эх/-ийн нэр: _________________________________________
            <span style={{ ...styles.generalText, ...{ marginLeft: 30 } }}>
              Нэр: ___________
            </span>
          </span>
          <div style={styles.rowStyle}>
            <div style={{ display: "flex", padding: 10 }}>
              <span style={{ marginRight: 5 }}>2. Регистрийн дугаар: </span>
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
          <div style={{ display: "flex", padding: 10 }}>
            <span style={styles.generalText}>
              3. Хүйс (зур):{" "}
              <span style={{ ...styles.generalText, ...{ marginLeft: 30 } }}>
                Эрэгтэй, Эмэгтэй
              </span>
            </span>
          </div>
          <div style={{ display: "flex", padding: 10 }}>
            <span style={styles.generalText}>
              4. Утасны дугаар: ______________
              <span style={{ ...styles.generalText, ...{ marginLeft: 30 } }}>
                5. Анх хяналтад орсон огноо__________________________
              </span>
            </span>
          </div>
          <Table bordered className="document">
            <thead>
              <tr>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 40 } }}
                >
                  Д/Д
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Үзлэгийн Он/сар/өдөр
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Харааны чадал
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Нүдний даралт
                </td>

                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 200 } }}
                >
                  Үзлэгт гарсан өөрчлөлт
                </td>
                <td
                  colSpan={3}
                  style={{ ...styles.centerText, ...{ width: 90 } }}
                >
                  Эмчилгээний үр дүн
                </td>
                <td style={{ ...styles.centerText, ...{ width: 90 } }}>
                  Сайжирсан эсэх /Тийм/, /Үгүй/
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.verticalText,
                    ...{ width: 30 },
                  }}
                >
                  Эмийн
                </td>
                <td
                  style={{
                    ...styles.verticalText,
                    ...{ width: 30 },
                  }}
                >
                  Мэс заслын
                </td>
                <td
                  style={{
                    ...styles.verticalText,
                    ...{ width: 30 },
                  }}
                >
                  Бусад
                </td>
                <td>11</td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>1</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>2</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>3</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>4</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>5</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>6</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>7</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>8</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>9</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>10</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
            </thead>
          </Table>
          <Table bordered className="document" style={{ marginTop: 40 }}>
            <thead>
              <tr>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 40 } }}
                >
                  Д/Д
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Үзлэгийн Он/сар/өдөр
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Харааны чадал
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Нүдний даралт
                </td>

                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 200 } }}
                >
                  Үзлэгт гарсан өөрчлөлт
                </td>
                <td
                  colSpan={3}
                  style={{ ...styles.centerText, ...{ width: 90 } }}
                >
                  Эмчилгээний үр дүн
                </td>
                <td style={{ ...styles.centerText, ...{ width: 90 } }}>
                  Сайжирсан эсэх /Тийм/, /Үгүй/
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.verticalText,
                    ...{ width: 30 },
                  }}
                >
                  Эмийн
                </td>
                <td
                  style={{
                    ...styles.verticalText,
                    ...{ width: 30 },
                  }}
                >
                  Мэс заслын
                </td>
                <td
                  style={{
                    ...styles.verticalText,
                    ...{ width: 30 },
                  }}
                >
                  Бусад
                </td>
                <td>11</td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>1</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>2</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>3</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>4</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>5</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>6</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>7</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>8</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>9</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
              <tr>
                <td style={{ height: 20, width: 20, padding: 0 }}>10</td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
                <td style={{ height: 20, width: 20, padding: 0 }}></td>
              </tr>
            </thead>
          </Table>
        </div>
      </div>
    </>
  );
}

export default AM11;
