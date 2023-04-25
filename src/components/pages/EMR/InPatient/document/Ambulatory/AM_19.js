import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-19
function AM_19() {
  const textStyle = {
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 150,
      lineHeight: 1,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
    },
    generalText: {
      fontSize: 12,
    },
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "black",
      width: 25,
      height: 25,
    },
  };
  return (
    <div className="page-landscape">
      <div className="subpage-landscape">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Эмнэлгийн нэр: </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <span style={{ fontSize: 12 }}>
              Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
            </span>
            <span style={{ fontSize: 12 }}>
              A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </span>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              Эрүүл мэндийн бүртгэлийн маягт АМ-19
            </span>
          </div>
        </div>
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <span style={{ fontWeight: "bold", fontSize: 16 }}>
            ҮР ХӨНДӨЛТИЙН БҮРТГЭЛ
          </span>
        </div>
        <Table bordered className="document">
          <tbody>
            <tr>
              <td
                rowSpan={2}
                style={{ ...textStyle.verticalText, ...{ width: 50 } }}
              >
                Он, сар, өдөр
              </td>
              <td
                rowSpan={2}
                colSpan={10}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 200 },
                }}
              >
                Эцэг /эх/-ийн нэр Нэр Регистрийн дугаар
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Нас
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Боловсрол
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Ажил мэргэжил
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Ажлын газар
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Хөдөлмөр эрхлэлт
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Хөдөлмөр эрхлэхгүй шалтгаан
              </td>
              <td
                rowSpan={2}
                style={{ ...textStyle.centerText, ...{ width: 200 } }}
              >
                Тогтмол хаяг
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Жирэмсний хугацаа
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Хэд дэх жирэмслэлт
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Үр хөндүүлсэн удаа
              </td>
              <td colSpan={3} style={textStyle.centerText}>
                Гарсан хүндрэл (+), (-)
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Үр хөндөлт хийлгэсэн эмэгтэйчүүдэд ЖСЭХ хэрэглүүлсэн эсэх
              </td>
              <td
                rowSpan={2}
                style={{ ...textStyle.verticalText, ...{ width: 150 } }}
              >
                Эмчийн нэр
              </td>
            </tr>
            <tr>
              <td style={textStyle.verticalText}>Умай цоорсон</td>
              <td style={textStyle.verticalText}>Умайн агшилт суларч цус</td>
              <td style={textStyle.verticalText}>Үжил, халдвар</td>
            </tr>
            <tr>
              {[...Array(17)].map((x, i) => (
                <td
                  style={{
                    ...textStyle.centerText,
                    ...{ height: 20, padding: 2 },
                  }}
                  key={i}
                  colSpan={i == 1 ? 10 : 0}
                >
                  {i + 1}
                </td>
              ))}
            </tr>
            {[...Array(10)].map((x, m) => (
              <>
                <tr>
                  {[...Array(17)].map((x, i) => (
                    <td
                      key={i}
                      rowSpan={i == 1 ? null : 2}
                      colSpan={i == 1 ? 10 : null}
                      style={{
                        ...textStyle.centerText,
                        ...{ height: 20, padding: 2 },
                      }}
                    ></td>
                  ))}
                </tr>
                <tr>
                  {[...Array(10)].map((x, i) => (
                    <td
                      key={i}
                      style={{
                        ...textStyle.centerText,
                        ...{ height: 20, padding: 2 },
                      }}
                    ></td>
                  ))}
                </tr>
              </>
            ))}
          </tbody>
        </Table>
        <div style={textStyle.generalText}>
          <b>Тайлбар: ЖСЭХ:</b> 1. Жирэмслэхээс сэргийлэх эм, 2. Тариа, 3.
          Суулгац, 4. Бэлгэвч, 5. Ерөндөг, 6. Бусад
        </div>
      </div>
    </div>
  );
}

export default AM_19;
