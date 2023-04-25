import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-28Б
function AM28B() {
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
    blankSpaces: {
      fontSize: 10,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 10,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
    },
  };
  return (
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
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              Эрүүл мэндийн бүртгэлийн маягт АМ-28Б
            </span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <span style={styles.generalText}>Эмнэлгийн код:</span>
          <div style={{ display: "flex", marginLeft: 5 }}>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}>
          <span style={{ fontWeight: "bold", fontSize: 16 }}>
            ТӨӨНӨ ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ
          </span>
        </div>
        <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
          <div>Өрөөний №</div>
          <div style={{ display: "flex" }}>
            <span style={styles.generalText}>РД:</span>
            <div style={{ display: "flex", marginLeft: 5 }}>
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
          <div style={{ display: "flex", marginTop: 5 }}>
            <span style={styles.generalText}>ЭМД:</span>
            <div style={{ display: "flex", marginLeft: 5 }}>
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
        <div style={styles.rowStyle}>
          1. Эцэг /эх/-ийн нэр __________________________
          <span style={{ marginLeft: 50 }}>Нэр __________________________</span>
        </div>
        <div style={styles.rowStyle}>
          2. Нас ______
          <span style={{ marginLeft: 50 }}>Хүйс: /зур/ эрэгтэй, эмэгтэй</span>
        </div>
        <div style={styles.rowStyle}>
          3. Үндсэн онош: ________________________________________
        </div>
        <div style={styles.rowStyle}>4. Төөнө заслын төрөл: /зур/</div>
        <div style={styles.rowStyle}>
          <span style={{ marginLeft: 200 }}>Цахилгаан төөнө</span>
        </div>
        <div style={styles.rowStyle}>
          <span style={{ marginLeft: 200 }}>Монгол төөнө</span>
        </div>
        <div style={styles.rowStyle}>
          <span style={{ marginLeft: 200 }}>Шовгон төөнө</span>
        </div>
        <div style={styles.rowStyle}>
          <span style={{ marginLeft: 200 }}>Хайрцаган төөнө</span>
        </div>
        <div style={styles.rowStyle}>
          <span style={{ marginLeft: 200 }}>Харандаан төөнө</span>
        </div>
        <div style={styles.rowStyle}>
          5. Төөнө хийх бэлчир
          орон:___________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          Эмчилгээ хийсэн эмчийн нэр: ________________________________
        </div>
        <div style={styles.rowStyle}>
          Төөнө эмчилгээ хийлгэхийг зөвшөөрсөн гарын үсэг:
        </div>
        <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
          <span style={{ fontWeight: "bold", fontSize: 14 }}>
            Маягтын ар тал
          </span>
          <br />
          <span style={{ fontWeight: "bold", fontSize: 14 }}>Б тал</span>
        </div>
        <Table bordered className="document" style={{ marginTop: 10 }}>
          <tbody>
            <tr>
              <td style={{ ...styles.centerText, ...{ width: 40 } }}>№</td>
              <td style={{ ...styles.centerText, ...{ width: 70 } }}>
                Он сар өдөр
              </td>
              <td style={styles.centerText}>Төөнө засал</td>
              <td style={styles.centerText}>Засал хийсэн эмчийн нэр</td>
            </tr>
            <tr>
              <td style={styles.centerText}>1</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.centerText}>2</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.centerText}>3</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.centerText}>4</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.centerText}>5</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.centerText}>6</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.centerText}>7</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.centerText}>8</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.centerText}>9</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.centerText}>10</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AM28B;
