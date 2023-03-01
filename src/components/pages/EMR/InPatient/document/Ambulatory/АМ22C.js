import React from "react";

//маягт АМ-22В
function AM22C() {
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
              <span style={{ fontWeight: "bold", fontSize: 12 }}>АМ-22В</span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              ЛАБОРАТОРИЙН ШИНЖИЛГЭЭНИЙ ХУУДСУУД
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
                  Шинжилэгдэхүүн
                </td>
                <td style={{ ...styles.centerText, ...{ width: "30%" } }}>
                  Лавлах хэмжээ
                </td>
                <td style={{ ...styles.centerText, ...{ width: "30%" } }}>
                  Хариу
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Билирубин нийт</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Шууд</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Холбоот</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Нийт уураг</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Альбумин</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Асат (ГОТ)</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Алат (ГПТ)</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Шүлтлэг фосфатаза</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хүчиллэг фосфатаза</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>& амилиза /цус/</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>глютамил-трансфереза</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>лактат дегидрогенеза /ПЛ/</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>глюкоз</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>холестерин</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>триглицерид</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>креатинин</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>мочевин</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>азот</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>шээсний хүчил</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>фосфор</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>натри</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>кали</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>кальци</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>магни</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>хлор</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>төмөр</td>
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

export default AM22C;
