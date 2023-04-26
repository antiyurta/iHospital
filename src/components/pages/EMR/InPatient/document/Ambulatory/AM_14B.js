import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-14Б
function AM_14B() {
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
              Эрүүл мэндийн бүртгэлийн маягт АМ-14Б
            </span>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontWeight: "bold", fontSize: 16, marginBottom: 10 }}>
            ТЭМБҮҮГИЙН ХАЛДВАРТАЙ ЖИРЭМСЭН ЭМЭГТЭЙН ХЯНАЛТЫН БҮРТГЭЛ
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
              <td rowSpan={2} style={textStyle.verticalText}>
                Анх хяналтанд орсон жирэмсний хугацаа
              </td>
              <td colSpan={2} style={textStyle.centerText}>
                Тэмбүүгийн хурдавчилсан шинжилгээнд хамрагдалт
              </td>
              <td style={textStyle.centerText}>Оношийн баталгаажилт</td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Үндсэн онош
              </td>
              <td colSpan={3} style={textStyle.centerText}>
                Эмчилгээний тун /Бензатин пенициллин G/
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Бусад стандарт эмчилгээ авсан
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Эмчилгээний явцад гаж нөлөө өгсөн эсэх /+,-/
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Бүрэн эмчлэгдсэн эсэх /+,-/
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Дахин халдвар авсан эсэх /+,-/
              </td>
              <td colSpan={3} style={textStyle.centerText}>
                Өвчлөлөөс илэрсэн хавьтал
              </td>
              <td colSpan={2} style={textStyle.centerText}>
                Хавьтагчийн эмчилгээ /Бензатин пенициллин G/
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Дараагийн шатанд шилжүүлсэн эсэх /+,-/
              </td>
            </tr>
            <tr>
              <td style={textStyle.verticalText}>Анх удаа</td>
              <td style={textStyle.verticalText}>Давтан</td>
              <td style={textStyle.verticalText}>RPR, TPHA</td>
              <td style={textStyle.verticalText}>Анхны тун</td>
              <td style={textStyle.verticalText}>2 дахь тун</td>
              <td style={textStyle.verticalText}>3 дахь тун</td>
              <td style={textStyle.verticalText}>Тэмбүүгийн хурдавчилсан</td>
              <td style={textStyle.verticalText}>RPR,TPHA</td>
              <td style={textStyle.verticalText}>Үндсэн онош /ОУӨА-10/</td>
              <td style={textStyle.verticalText}>Анхны тун авсан</td>
              <td style={textStyle.verticalText}>Бүрэн эмчлэгдсэн</td>
            </tr>
            <tr>
              {[...Array(21)].map((x, i) => (
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
            {[...Array(6)].map((x, i) => (
              <>
                <tr>
                  {[...Array(21)].map((x, i) => (
                    <td
                      key={i}
                      rowSpan={i == 0 ? 3 : i == 1 ? 2 : null}
                      colSpan={i == 1 ? 10 : null}
                      style={{
                        ...textStyle.centerText,
                        ...{ height: 20, padding: 2 },
                      }}
                    ></td>
                  ))}
                </tr>
                <tr>
                  {[...Array(19)].map((x, i) => (
                    <td
                      key={i}
                      style={{
                        ...textStyle.centerText,
                        ...{ height: 20, padding: 2 },
                      }}
                    ></td>
                  ))}
                </tr>
                <tr>
                  {[...Array(29)].map((x, i) => (
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
      </div>
    </div>
  );
}

export default AM_14B;
