import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-24А
function AM24A() {
  const textStyle = {
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 100,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 12,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
    },
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "black",
      width: 25,
      height: 25,
    },
    numberText: {
      height: 25,
      width: 25,
      fontSize: 12,
      textAlign: "center",
      verticalAlign: "middle",
    },
  };
  return (
    <div className="page-landscape">
      <div className="subpage-landscape">
        <div>
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
              Эрүүл мэндийн бүртгэлийн маягт АМ-24А
            </span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ҮЙЛ ОНОШИЙН ШИНЖИЛГЭЭНИЙ БҮРТГЭЛ
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Эмнэлгийн нэр: </span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span style={{ marginRight: 5 }}>Эмнэлгийн код:</span>
              <div style={textStyle.rowCells}></div>
              <div style={textStyle.rowCells}></div>
              <div style={textStyle.rowCells}></div>
              <div style={textStyle.rowCells}></div>
              <div style={textStyle.rowCells}></div>
              <div style={textStyle.rowCells}></div>
            </div>
          </div>
        </div>
        <Table bordered className="document">
          <tbody>
            <tr>
              <td
                rowSpan={2}
                style={{ ...textStyle.centerText, ...{ width: 40 } }}
              >
                №
              </td>
              <td
                rowSpan={2}
                style={{ ...textStyle.centerText, ...{ width: 40 } }}
              >
                Сар, өдөр
              </td>
              <td
                rowSpan={2}
                colSpan={10}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 100 },
                }}
              >
                Эцэг /эх/-ийн нэр, Нэр Регистрийн дугаар
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 30 },
                }}
              >
                Нас
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 30 },
                }}
              >
                Хүйс
              </td>
              <td
                rowSpan={2}
                colSpan={9}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 100 },
                }}
              >
                Ажлын газрын хаяг, ЭМД-ын дугаар
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 100 },
                }}
              >
                Тогтмол хаяг
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 100 },
                }}
              >
                Ирүүлсэн тасгийн нэр
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 100 },
                }}
              >
                Явуулсан эмчийн онош
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 80 },
                }}
              >
                Илэрсэн өөрчлөлт, дүгнэлт
              </td>
              <td colSpan={2} style={textStyle.centerText}>
                Төлбөрийн хэлбэр
              </td>
            </tr>
            <tr>
              <td style={textStyle.verticalText}>Даатгалаас -1</td>
              <td style={textStyle.verticalText}>Хувиас-2</td>
            </tr>
            <tr>
              <td style={textStyle.numberText}>1</td>
              <td style={textStyle.numberText}>2</td>
              <td colSpan={10} style={textStyle.numberText}>
                3
              </td>
              <td style={textStyle.numberText}>4</td>
              <td style={textStyle.numberText}>5</td>
              <td colSpan={9} style={textStyle.numberText}>
                6
              </td>
              <td style={textStyle.numberText}>7</td>
              <td style={textStyle.numberText}>8</td>
              <td style={textStyle.numberText}>9</td>
              <td style={textStyle.numberText}>10</td>
              <td style={textStyle.numberText}>11</td>
              <td style={textStyle.numberText}>12</td>
            </tr>
            <tr>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td colSpan={10} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td colSpan={9} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
            </tr>
            <tr>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
              <td style={textStyle.numberText}></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AM24A;
