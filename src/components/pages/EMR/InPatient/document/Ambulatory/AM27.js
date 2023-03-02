import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-27
function AM27() {
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
    numberText: {
      height: 25,
      width: 20,
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
              Эрүүл мэндийн бүртгэлийн маягт АМ-27
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Эмнэлгийн нэр: </span>
          </div>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              НАСТНЫ ЭРҮҮЛ МЭНДИЙН БҮРТГЭЛ
            </span>
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
                style={{
                  ...textStyle.centerText,
                  ...{ width: 100 },
                }}
              >
                Гэрийн хаяг
              </td>
              <td colSpan={3} style={textStyle.centerText}>
                Бие даах чадварын үнэлгээ
              </td>
              <td colSpan={3} style={textStyle.centerText}>
                Өдөр тутмын бүтээлч үйл
              </td>
              <td colSpan={3} style={textStyle.centerText}>
                Сэтгэц, танин мэдэхүйн чадвар
              </td>
              <td colSpan={3} style={textStyle.centerText}>
                Хоол тэжээлийн үнэлгээ
              </td>
              <td colSpan={3} style={textStyle.centerText}>
                Биеийн жингийн индекс
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 10 },
                }}
              >
                Үндсэн онош (ОУӨА-10)
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 50 },
                }}
              >
                Сэтгэц ба аягийн эмгэг (F00-F99)
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 50 },
                }}
              >
                Насны доройтол (R54)
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 50 },
                }}
              >
                Эрүүл мэндийн бүлэг
              </td>
            </tr>
            <tr>
              <td style={textStyle.verticalText}>Хэвийн</td>
              <td style={textStyle.verticalText}>Алдагдсан</td>
              <td style={textStyle.verticalText}>Хараат</td>
              <td style={textStyle.verticalText}>Хэвийн</td>
              <td style={textStyle.verticalText}>Алдагдсан</td>
              <td style={textStyle.verticalText}>Хараат</td>
              <td style={textStyle.verticalText}>Хэвийн</td>
              <td style={textStyle.verticalText}>Бага зэрэг буурсан</td>
              <td style={textStyle.verticalText}>Их буурсан</td>
              <td style={textStyle.verticalText}>Хэвийн</td>
              <td style={textStyle.verticalText}>Дутал үүсэх эрсдэлтэй</td>
              <td style={textStyle.verticalText}>Дуталтай</td>
              <td style={textStyle.verticalText}>Тураалтай</td>
              <td style={textStyle.verticalText}>Хэвийн</td>
              <td style={textStyle.verticalText}>Илүүдэл жинтэй</td>
            </tr>
            <tr>
              <td rowSpan={2} style={textStyle.numberText}>
                1
              </td>
              <td colSpan={10} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
              <td rowSpan={2} style={textStyle.numberText}></td>
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
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AM27;
