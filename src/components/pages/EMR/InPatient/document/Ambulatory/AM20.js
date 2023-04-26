import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-20
function AM20() {
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
                ...{},
              }}
            >
              Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
            </span>
            <span style={styles.generalText}>
              A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </span>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              Эрүүл мэндийн бүртгэлийн маягт АМ-20
            </span>
          </div>
          <div style={{ textAlign: "center", marginTop: 10, marginBottom: 15 }}>
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              АМБУЛАТОРИОР ЭМЧЛҮҮЛЭГСДИЙН КАРТ №
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50%" }}>
              <div style={{ fontSize: 12, textAlign: "center" }}>Эмнэлэг</div>
              <div style={{ fontSize: 12 }}>
                _________________________________________________________________
              </div>
              <div style={{ fontSize: 12 }}>
                _________________________________________________________________
              </div>
              <div style={{ fontSize: 12 }}>
                _________________________________________________________________
              </div>
              <div style={{ fontSize: 12 }}>
                _________________________________________________________________
              </div>
              <div style={{ fontSize: 12 }}>
                _________________________________________________________________
              </div>
              <div style={{ fontSize: 12 }}>
                _________________________________________________________________
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div style={{ fontSize: 12 }}>
                1. Эцэг /эх/-ийн нэр ____________________________________
              </div>
              <div style={{ fontSize: 12 }}>
                2. Нэр ___________________________________________________
              </div>
              <div style={{ fontSize: 12 }}>
                3. Нас ____________ 4. Хүйс /зур/ Эрэгтэй, Эмэгтэй
              </div>
              <div style={{ fontSize: 12 }}>
                5. Яс үндэс _______________________________________________
              </div>
              <div style={{ fontSize: 12 }}>
                6. Тогтмол хаяг __________________________________________
              </div>
              <div style={{ fontSize: 12 }}>
                ___________________________________________________________
              </div>
              <div style={{ fontSize: 12 }}>
                ___________________________________________________________
              </div>
            </div>
          </div>
          <div style={{ marginTop: 200, marginBottom: 30 }}>
            <span style={styles.generalTextBold}>2-р тал</span>
          </div>
          <div style={{ fontSize: 12, marginTop: 5 }}>
            7. Ажлын газар
            _______________________________________________________________________________________
          </div>
          <div style={{ fontSize: 12, marginTop: 5 }}>
            ___________________________________________________________________________________________________________
          </div>
          <div style={{ fontSize: 12, marginTop: 5 }}>
            8. Албан тушаал
            _______________________________________________________________________________________
          </div>
          <div style={{ fontSize: 12, marginTop: 5 }}>
            9. Мэргэжил __________________________________ 10. Боловсрол: /зур/
            Боловсролгүй, Бага, Бүрэн дунд
          </div>
          <div style={{ fontSize: 12, marginTop: 5 }}>
            Мэргэжлийн болон техникийн, Дипломын, Бакалавр, Магистр, Доктор
          </div>
          <div style={{ fontSize: 12, marginTop: 5 }}>
            10. Карт нээсэн _______ он ___ сар ___ өдөр хаасан _______ он ____
            сар ____ өдөр
          </div>
          <Table bordered style={{ marginTop: 20 }} className="document">
            <thead>
              <tr>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: "45%" } }}
                >
                  Эмнэлгийн хуудас олгох болсон онош
                </td>
                <td
                  colSpan={2}
                  style={{ ...styles.centerText, ...{ width: "25%" } }}
                >
                  Чөлөө олголт
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: "30%" } }}
                >
                  Эцсийн онош
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                  Эхэлсэн
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 20 } }}>
                  Дууссан
                </td>
              </tr>
              <tr>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
              </tr>
              <tr>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
              </tr>
              <tr>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
              </tr>
              <tr>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
              </tr>
              <tr>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
              </tr>
              <tr>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
              </tr>
              <tr>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
              </tr>
              <tr>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
                <td style={{ height: 30, width: 30 }}></td>
              </tr>
            </thead>
          </Table>
        </div>
      </div>

      <div className="page">
        <div className="subpage">
          <span style={{ ...styles.generalText, ...{ fontWeight: "bold" } }}>
            3-р тал
          </span>
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
                  заалт
                </td>
              </tr>
              <tr style={{ height: 430 }}>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
          </Table>
          <span style={{ ...styles.generalText, ...{ fontWeight: "bold" } }}>
            4, 16-р тал
          </span>
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
                  заалт
                </td>
              </tr>
              <tr style={{ height: 430 }}>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
          </Table>
        </div>
      </div>
    </>
  );
}

export default AM20;
