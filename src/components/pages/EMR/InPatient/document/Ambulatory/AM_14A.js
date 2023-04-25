import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-14А
function AM_14A() {
  const textStyle = {
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 100,
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
              Эрүүл мэндийн бүртгэлийн маягт АМ-14А
            </span>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontWeight: "bold", fontSize: 16 }}>
            ЖИРЭМСЭН ЭМЭГТЭЙЧҮҮДИЙН БҮРТГЭЛ
          </span>
        </div>
        <Table bordered className="document">
          <tbody>
            <tr>
              <td
                rowSpan={4}
                style={{ ...textStyle.centerText, ...{ width: 40 } }}
              >
                Д/д
              </td>
              <td
                rowSpan={4}
                colSpan={10}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 200 },
                }}
              >
                Эцэг /эх/-ийн нэр Нэр Регистрийн дугаар
              </td>
              <td
                rowSpan={4}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 40 },
                }}
              >
                Нас
              </td>
              <td
                rowSpan={4}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 150 },
                }}
              >
                Тогтмол хаяг
              </td>
              <td rowSpan={4} style={textStyle.verticalText}>
                Сүүлийн сарын тэмдэг ирсэн хугацаа
              </td>
              <td rowSpan={4} style={textStyle.verticalText}>
                Төрөх хугацаа
              </td>
              <td colSpan={8} style={textStyle.centerText}>
                Жирэмсний хяналтад орох үеийн мэдээлэл
              </td>
              <td colSpan={5} style={textStyle.centerText}>
                Хяналтаас гарсан тухай
              </td>
              <td rowSpan={4} style={textStyle.verticalText}>
                Амаржсан сар, өдөр
              </td>
              <td rowSpan={4} style={textStyle.verticalText}>
                Төрсний дараа хяналтад орсон сар, өдөр
              </td>
              <td colSpan={2} style={textStyle.centerText}>
                Цусны шинжилгээ эерэг (+) сөрөг (-)
              </td>
              <td colSpan={4} style={textStyle.centerText}>
                БЗДХ-ын шинжилгээ /он.сар.өдөр/ эерэг (+) сөрөг (-)
              </td>
              <td rowSpan={4} style={textStyle.verticalText}>
                Хөгжлийн бэрхшээлтэй эсэх
              </td>
            </tr>
            <tr>
              <td colSpan={2} style={textStyle.verticalText}>
                Хяналтад орсон тухай
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Хяналтад орох үеийн жирэмсний тээлтийн хугацаа
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Хэд дэх жирэмслэлт
              </td>
              <td colSpan={4} style={textStyle.centerText}>
                Өмнөх жирэмслэлтийн № тухай мэдээлэл
              </td>
              <td colSpan={2} style={textStyle.centerText}>
                Хэвийн төрсөн
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Үр хөндсөн, сар.өдөр
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Зулбасан, сар.өдөр
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Шилжсэн, сар.өдөр
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Вирүст хепатит В
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Вирүст хепатит С
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                ДОХ/ХДХВ
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Тэмбүү
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Заг хүйтэн
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Трихомониаз
              </td>
            </tr>
            <tr>
              <td rowSpan={2} style={textStyle.verticalText}>
                Шинээр орсон он.сар.өдөр
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Шилжиж ирсэн он.сар.өдөр
              </td>
              <td colSpan={2} style={textStyle.centerText}>
                Төрсөн
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Үр хөндөлт
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Зулбалт
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Гүйцэд
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Дутуу
              </td>
            </tr>
            <tr>
              <td style={textStyle.verticalText}>Гүйцэд</td>
              <td style={textStyle.verticalText}>Дутуу</td>
            </tr>
            <tr>
              {[...Array(28)].map((x, i) => (
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
            {[...Array(6)].map((x, i) => (
              <>
                <tr>
                  <td rowSpan={3} style={textStyle.centerText}></td>
                  {[...Array(21)].map((x, i) => (
                    <td
                      rowSpan={i == 0 ? 2 : 3}
                      colSpan={i == 0 ? 10 : 0}
                      style={textStyle.centerText}
                      key={i}
                    ></td>
                  ))}
                  <td
                    style={{
                      ...textStyle.centerText,
                      ...{ height: 20, padding: 2 },
                    }}
                  ></td>
                  <td
                    style={{
                      ...textStyle.centerText,
                      ...{ height: 20, padding: 2 },
                    }}
                  ></td>
                  <td
                    style={{
                      ...textStyle.centerText,
                      ...{ height: 20, padding: 2 },
                    }}
                  ></td>
                  <td
                    style={{
                      ...textStyle.centerText,
                      ...{ height: 20, padding: 2 },
                    }}
                  ></td>
                  <td
                    style={{
                      ...textStyle.centerText,
                      ...{ height: 20, padding: 2 },
                    }}
                  ></td>
                </tr>
                <tr>
                  <td
                    style={{
                      ...textStyle.centerText,
                      ...{ height: 20, padding: 2 },
                    }}
                  ></td>
                  <td
                    style={{
                      ...textStyle.centerText,
                      ...{ height: 20, padding: 2 },
                    }}
                  ></td>
                  <td
                    style={{
                      ...textStyle.centerText,
                      ...{ height: 20, padding: 2 },
                    }}
                  ></td>
                  <td
                    style={{
                      ...textStyle.centerText,
                      ...{ height: 20, padding: 2 },
                    }}
                  ></td>
                  <td
                    style={{
                      ...textStyle.centerText,
                      ...{ height: 20, padding: 2 },
                    }}
                  ></td>
                </tr>
                <tr>
                  {[...Array(16)].map((x, i) => (
                    <td
                      style={{
                        ...textStyle.centerText,
                        ...{ height: 20, padding: 2 },
                      }}
                      key={i}
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

export default AM_14A;
