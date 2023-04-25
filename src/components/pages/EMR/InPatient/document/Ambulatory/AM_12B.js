import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-12Б
function AM_12B() {
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
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 12,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
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
            <div>
              <div
                style={{
                  ...styles.generalText,
                  ...{ display: "flex", justifyContent: "space-between" },
                }}
              >
                <div style={styles.leftText}>
                  Эмнэлгийн нэр: _____________________
                </div>
              </div>
              <div
                style={{
                  ...styles.generalText,
                  ...{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 10,
                  },
                }}
              >
                <div style={{ display: "flex" }}>
                  <span style={{ marginRight: 5 }}>Эмнэлгийн код: </span>
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
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={styles.generalText}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                  textAlign: "right",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                Эрүүл мэндийн бүртгэлийн маягт АМ-12Б
              </span>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              КОМИССЫН ШИЙДВЭР
            </span>
          </div>
          <div style={styles.flexRow}>
            <div style={styles.leftText}>Дугаар № _____</div>
            <div
              style={{
                borderTopWidth: 2,
                borderBottomWidth: 2,
                fontSize: 12,
                borderStyle: "solid",
                borderLeftWidth: 0,
                borderRightWidth: 0,
                padding: 5,
              }}
            >
              Тамга тэмдэггүй, засвартай бол хүчингүй
            </div>
          </div>
          <div style={styles.leftText}>
            ___________ оны ________ сарын ________ өдөр
          </div>
          <div style={styles.leftText}>
            __________________________ аймаг /хот/-ийн ____________________ сум
            /дүүрэг/-ын _______________ баг
          </div>
          <div style={styles.leftText}>/хэсэг/хороо/-ийн харъяат</div>
          <div style={styles.leftText}>
            Эцэг /эх/-ийн нэр ___________________________{" "}
            <span style={{ marginLeft: 30 }}>Нэр ________________________</span>
          </div>
          <div style={styles.leftText}>
            Хүйс: /зур/ эрэгтэй, эмэгтэй
            <span style={{ marginLeft: 30 }}> Нас _______</span>
          </div>
          <div style={styles.leftText}>
            Ажлын газар: ________________________________
          </div>
          <div style={styles.leftText}>
            Ажил, мэргэжил: _____________________________
          </div>
          <div style={styles.leftText}>
            Онош:
            _______________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Үндэслэн:
            ______________________________________________________________
            комиссоос тогтоох нь:
          </div>
          <div
            style={{
              borderWidth: 2,
              borderStyle: "solid",
              marginTop: 20,
              marginBottom: 15,
            }}
          ></div>
          <div style={styles.leftText}>
            <b>Маягтын ар тал</b>
          </div>
          <div style={styles.leftText}>
            Шийдвэр:
            ______________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________________
          </div>
          <div style={{ ...styles.flexRow, ...{ marginTop: 50 } }}>
            <div style={styles.leftText}>Тэмдэг</div>
            <div>
              <div style={styles.leftText}>
                Комиссын дарга: _____________________
              </div>
              <div style={styles.leftText}>
                Нарийн бичгийн дарга: ______________________
              </div>
              <div style={styles.leftText}>
                Гишүүд: 1. _________________________
              </div>
              <div style={{ ...styles.leftText, ...{ marginLeft: 45 } }}>
                2. _________________________
              </div>
              <div style={{ ...styles.leftText, ...{ marginLeft: 45 } }}>
                3. _________________________
              </div>
              <div style={{ ...styles.leftText, ...{ marginLeft: 45 } }}>
                4. _________________________
              </div>
              <div style={{ ...styles.leftText, ...{ marginLeft: 45 } }}>
                5. _________________________
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AM_12B;
