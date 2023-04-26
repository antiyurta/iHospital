import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-35
function AM35() {
  const styles = {
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 10,
    },
    leftText: {
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      paddingLeft: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
    },
    leftBold: {
      fontWeight: "bold",
      fontSize: 12,
      marginTop: 10,
    },
    centerBold: {
      fontWeight: "bold",
      fontSize: 12,
      marginTop: 30,
      textAlign: "center",
    },
    rightText: {
      textAlign: "right",
      fontSize: 12,
      fontWeight: "bold",
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
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
              }}
            >
              <span style={styles.generalText}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span style={{ fontWeight: "bold", fontSize: 14 }}>
                Эрүүл мэндийн бүртгэлийн маягт АМ-35
              </span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ХӨДӨЛМӨР ЗАСЛЫН ҮНЭЛГЭЭНИЙ ХУУДАС
            </span>
          </div>
          <div style={styles.rowStyle}>
            Эцэг /эх/-ийн нэр:______________________________________________
            Нас: ______
            <span style={{ marginLeft: 50 }}>Хүйс: Эрэгтэй, Эмэгтэй /зур</span>
          </div>
          <div style={styles.rowStyle}>
            Үндсэн онош (ICD-10): _________________________________
            <span style={{ marginLeft: 20 }}>
              Хөдөлмөр засалчийн онош (ICF): _________________________________
            </span>
          </div>
          <div style={styles.leftBold}>
            Modified Barthel Index (өдөр тутмын үйл ажиллагааны чадвар)
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 200 } }}></td>
                <td style={styles.centerText}>Гүйцэтгэж чадахгүй</td>

                <td style={styles.centerText}>Нилээд тусламжтай</td>
                <td style={styles.centerText}>Дунд зэргийн тусламжтай</td>
                <td style={styles.centerText}>Бага зэргийн тусламжтай</td>
                <td style={styles.centerText}>Бүрэн бие даасан</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хувийн ариун цэвэр </td>
                <td style={styles.centerText}>0</td>
                <td style={styles.centerText}>1</td>
                <td style={styles.centerText}>3</td>
                <td style={styles.centerText}>4</td>
                <td style={styles.centerText}>5</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Усанд орох</td>
                <td style={styles.centerText}>0</td>
                <td style={styles.centerText}>1</td>
                <td style={styles.centerText}>3</td>
                <td style={styles.centerText}>4</td>
                <td style={styles.centerText}>5</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хооллох</td>
                <td style={styles.centerText}>0</td>
                <td style={styles.centerText}>2</td>
                <td style={styles.centerText}>5</td>
                <td style={styles.centerText}>8</td>
                <td style={styles.centerText}>10</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Бие засах</td>
                <td style={styles.centerText}>0</td>
                <td style={styles.centerText}>2</td>
                <td style={styles.centerText}>5</td>
                <td style={styles.centerText}>8</td>
                <td style={styles.centerText}>10</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Шатаар өгсөх уруудах</td>
                <td style={styles.centerText}>0</td>
                <td style={styles.centerText}>2</td>
                <td style={styles.centerText}>5</td>
                <td style={styles.centerText}>8</td>
                <td style={styles.centerText}>10</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хувцаслах</td>
                <td style={styles.centerText}>0</td>
                <td style={styles.centerText}>2</td>
                <td style={styles.centerText}>5</td>
                <td style={styles.centerText}>8</td>
                <td style={styles.centerText}>10</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Шээх үйл ажиллагааг хянах</td>
                <td style={styles.centerText}>0</td>
                <td style={styles.centerText}>2</td>
                <td style={styles.centerText}>5</td>
                <td style={styles.centerText}>8</td>
                <td style={styles.centerText}>10</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Баах үйл ажиллагааг хянах</td>
                <td style={styles.centerText}>0</td>
                <td style={styles.centerText}>2</td>
                <td style={styles.centerText}>5</td>
                <td style={styles.centerText}>8</td>
                <td style={styles.centerText}>10</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Алхах</td>
                <td style={styles.centerText}>0</td>
                <td style={styles.centerText}>3</td>
                <td style={styles.centerText}>8</td>
                <td style={styles.centerText}>12</td>
                <td style={styles.centerText}>15</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Тэнцвэртэй явах</td>
                <td style={styles.centerText}>0</td>
                <td style={styles.centerText}>1</td>
                <td style={styles.centerText}>3</td>
                <td style={styles.centerText}>4</td>
                <td style={styles.centerText}>5</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Шилжих хөдөлгөөн хийх</td>
                <td style={styles.centerText}>0</td>
                <td style={styles.centerText}>3</td>
                <td style={styles.centerText}>8</td>
                <td style={styles.centerText}>12</td>
                <td style={styles.centerText}>15</td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rightText}>Нийт оноо: ............</div>
          <div style={styles.leftBold}>
            Үений далайц, булчингийн хүчний хэмжилт
          </div>
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td colSpan={2} style={styles.centerText}>
                  Булчингийн хүч
                </td>
                <td colSpan={2} style={styles.centerText}>
                  Үений далайц
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                >
                  Үе холбоос
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 140 } }}
                ></td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                >
                  Далайц
                </td>
                <td colSpan={2} style={styles.centerText}>
                  Булчингийн хүч
                </td>
                <td colSpan={2} style={styles.centerText}>
                  Үений далайц
                </td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.centerText}>
                  Баруун
                </td>
                <td colSpan={4} style={styles.centerText}>
                  Зүүн
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td rowSpan={6} style={styles.centerText}>
                  Мөрний үе
                </td>
                <td style={styles.leftText}>Нугалах</td>
                <td style={styles.centerText}>0-180</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Тэнийлгэх</td>
                <td style={styles.centerText}>0-60</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Холдуулах</td>
                <td style={styles.centerText}>0-180</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Ойртуулах</td>
                <td style={styles.centerText}>0-45</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Гадагш эргүүлэх</td>
                <td style={styles.centerText}>0-90</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Дотогш эргүүлэх</td>
                <td style={styles.centerText}>0-90</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td rowSpan={2} style={styles.centerText}>
                  Тохойн үе
                </td>
                <td style={styles.leftText}>Нугалах</td>
                <td style={styles.centerText}>0-150</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Тэнийлгэх</td>
                <td style={styles.centerText}>0-10</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td rowSpan={2} style={styles.centerText}>
                  Шуу
                </td>
                <td style={styles.leftText}>Алга доош харуулах</td>
                <td style={styles.centerText}>0-80-90</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Алга дээш харуулах</td>
                <td style={styles.centerText}>0-80-90</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td rowSpan={2} style={styles.centerText}>
                  Бугуйн үе
                </td>
                <td style={styles.leftText}>Нугалах</td>
                <td style={styles.centerText}>0-80</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Тэнийлгэх</td>
                <td style={styles.centerText}>0-70</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td rowSpan={6} style={styles.centerText}>
                  Түнхний үе
                </td>
                <td style={styles.leftText}>Нугалах</td>
                <td style={styles.centerText}>0-120</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Тэнийлгэх</td>
                <td style={styles.centerText}>0-30</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Холдуулах</td>
                <td style={styles.centerText}>0-45</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Ойртуулах</td>
                <td style={styles.centerText}>0-30</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Гадагш эргүүлэх</td>
                <td style={styles.centerText}>0-45</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Дотогш эргүүлэх</td>
                <td style={styles.centerText}>0-35</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td rowSpan={2} style={styles.centerText}>
                  Өвдөгний үе
                </td>
                <td style={styles.leftText}>Нугалах</td>
                <td style={styles.centerText}>0-135</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Тэнийлгэх</td>
                <td style={styles.centerText}>0</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td rowSpan={2} style={styles.centerText}>
                  Шагайн үе
                </td>
                <td style={styles.leftText}>Ээтийлгэх</td>
                <td style={styles.centerText}>0-20</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  &nbsp;
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.leftText}>Жийх</td>
                <td style={styles.centerText}>0-50</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.rowStyle}>
            1. Бэрхшээлтэй асуудлыг тодорхойлж жагсаах:
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>2. Богино хугацааны зорилго:</div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            3. Урт хугацааны дараа хүрэх үр дүнгийн зорилго, хугацаа:
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            4. Хөдөлмөр засал эмчилгээний төлөвлөгөө:
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>5. Хийгдсэн эмчилгээ:</div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.centerBold}>
            Хөдөлмөр засалч /Ахуй засалч/: ___________________________
          </div>
          <div style={{ ...styles.centerText, ...{ marginTop: 30 } }}>
            20 ..... оны .... сарын ...... өдөр
          </div>
        </div>
      </div>
    </>
  );
}

export default AM35;
