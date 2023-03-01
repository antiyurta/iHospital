import React from "react";

//маягт АМ-22А
function AM22A() {
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
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 10,
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
              <span style={{ fontWeight: "bold", fontSize: 12 }}>АМ-22А</span>
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
                <td
                  colSpan={2}
                  style={{ ...styles.centerText, ...{ width: "50%" } }}
                >
                  Шинжилэгдэхүүн
                </td>
                <td style={{ ...styles.centerText, ...{ width: "25%" } }}>
                  Лавлах хэмжээ
                </td>
                <td style={{ ...styles.centerText, ...{ width: "25%" } }}>
                  Хариу
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Лейкоцит
                </td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Эритроцит
                </td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Гемоглобин
                </td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Эритроцитын тунах хурд
                </td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Гемотокрит
                </td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Эритроцитын дундаж эзэлхүүн \mcv\
                </td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Эритроцит дахь гемоглобины дундаж концентраци \mchc\
                </td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Тробоцит \ялтаст эс\
                </td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Цус гоожилт
                </td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Цус бүлэгнэлт
                </td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Өнгө заалт
                </td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Ретикулоцит
                </td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td rowSpan={5} style={styles.verticalText}>
                  Лейкограмма
                </td>
                <td style={styles.leftText}>савхан бөөмт нейтрофил</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>тасархай бөөмт нейтрофил</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>эозонофил</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>лимфоцит</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>моноцит</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td rowSpan={7} style={styles.verticalText}>
                  Улаан эсийн морфлоги
                </td>
                <td style={styles.leftText}>анизоцитоз</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>пойкилоцитоз</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>сфероцит</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>гипохроми</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>полихормази</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>микроцит</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>макроцит</td>
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

export default AM22A;
