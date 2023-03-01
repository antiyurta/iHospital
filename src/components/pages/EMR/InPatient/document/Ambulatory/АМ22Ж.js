import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-22Ж
function AM22Ж() {
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
              <span style={{ fontWeight: "bold", fontSize: 12 }}>АМ-22Ж</span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              ЦЭРИЙГ МИКРОСКОПООР ШИНЖЛЭХ
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
          <div style={{ ...styles.rowStyle, ...{ marginTop: 20 } }}>
            Шинж байдал ______________________________
          </div>
          <div style={styles.rowStyle}>
            Төлөв байдал _____________________________
          </div>
          <div style={styles.rowStyle}>
            Хольц _______________ үелэл ______________
          </div>
          <div style={styles.rowStyle}>Микроскопд: ( харах талбай )</div>
          <div style={styles.rowStyle}>Эсийн элемент</div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
            Цагаан эс _______________________________
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
            Улаан эс ________________________________
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
            Хавтгай хучуур эс __________________________
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
            Бортгон хучуур эс __________________________
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
            Макрофог _______________________________
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
            Хавдрын эс ______________________________
          </div>
          <div style={styles.rowStyle}>Утаслаг элемент</div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
            Шарко Лейдины талст ______________________
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
            Гемотоидины талст ________________________
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
            Холестерины талст ________________________
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
            Өөхний хүчлийн талст ______________________
          </div>
          <div style={styles.rowStyle}>Бусад элемент</div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
            Дитрихийн бөглөө __________________________
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
            Эрлихийн бөглөө __________________________
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 60 },
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

export default AM22Ж;
