import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-14В
function AM_14V() {
  const textStyle = {
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 250,
      lineHeight: 1,
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

            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: 5 }}>Эмнэлгийн код:</span>
              <div style={textStyle.rowCells}></div>
              <div style={textStyle.rowCells}></div>
              <div style={textStyle.rowCells}></div>
              <div style={textStyle.rowCells}></div>
              <div style={textStyle.rowCells}></div>
              <div style={textStyle.rowCells}></div>
            </div>
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
              Эрүүл мэндийн бүртгэлийн маягт АМ-14В
            </span>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontWeight: "bold", fontSize: 16, marginBottom: 10 }}>
            АМАРЖИХ ГАЗАР /ТӨРӨХ ТАСАГ/ ТЭМБҮҮ ИЛРҮҮЛЭХ ШИНЖИЛГЭЭНИЙ БҮРТГЭЛ
          </span>
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
                colSpan={10}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 200 },
                }}
              >
                Эцэг /эх/-ийн нэр Нэр Регистрийн дугаар
              </td>
              <td rowSpan={2} style={textStyle.centerText}>
                Нас
              </td>
              <td rowSpan={2} style={textStyle.centerText}>
                Хаяг /Үндсэн хаяг, одоо амьдарч байгаа хаяг/
              </td>
              <td colSpan={5} style={textStyle.centerText}>
                Тэмбүүгийн хурдавчилсан шинжилгээнд хамруулсан шалтгаан
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Тэмбүүгийн хурдавчилсан шинжилгээний дүн /+, -/
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Эмчилгээний эхний тун авсан огноо
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                TPHA, RPR, RPR-ийн титр
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Зөвлөгөө өгч, аймаг, дүүрэгт мэдээлсэн
              </td>
              <td colSpan={3} style={textStyle.centerText}>
                Төрөлхийн тэмбүүтэй хүүхэд төрсөн бол
              </td>
              <td rowSpan={2} style={textStyle.centerText}>
                Бүртгэл хийсэн эмчийн нэр
              </td>
            </tr>
            <tr>
              <td style={textStyle.verticalText}>
                Жирэмсний хяналтанд ороогүй
              </td>
              <td style={textStyle.verticalText}>
                Хожуу үеийн зулбалт /13-21 долоо хоног/
              </td>
              <td style={textStyle.verticalText}>
                Дутуу төрөлт /22-с дээш долоо хоног/
              </td>
              <td style={textStyle.verticalText}>Амьгүй төрөлт</td>
              <td style={textStyle.verticalText}>
                Давтан шинжилгээнд хамрагдаагүй-1,
              </td>
              <td style={textStyle.verticalText}>Амьд</td>
              <td style={textStyle.verticalText}>Амьгүй төрөлт</td>
              <td style={textStyle.verticalText}>Нас барсан</td>
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
                  {i == 0 ? "А" : i == 1 ? "Б" : i - 1}
                </td>
              ))}
            </tr>
            {[...Array(6)].map((x, m) => (
              <>
                <tr>
                  {[...Array(17)].map((x, i) => (
                    <td
                      key={i}
                      rowSpan={i == 1 ? null : 2}
                      colSpan={i == 1 ? 10 : null}
                      style={{
                        ...textStyle.centerText,
                        ...{ height: 25, padding: 2 },
                      }}
                    >
                      {i == 0 ? <>{m + 1}</> : null}{" "}
                    </td>
                  ))}
                </tr>
                <tr>
                  {[...Array(10)].map((x, i) => (
                    <td
                      key={i}
                      style={{
                        ...textStyle.centerText,
                        ...{ height: 25, padding: 2 },
                      }}
                    ></td>
                  ))}
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AM_14V;
