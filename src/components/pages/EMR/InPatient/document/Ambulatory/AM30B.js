import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-30Б
function AM30B() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 15,
      lineHeight: 1,
    },
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 12,
    },
    rightText: {
      padding: 1,
      paddingRight: 3,
      textAlign: "right",
      verticalAlign: "middle",
      fontSize: 12,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 12,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div></div>
            <div>
              <span
                style={{
                  ...styles.generalText,
                  ...{ textAlign: "right", display: "block" },
                }}
              >
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <div style={styles.flexRow}>
                <span style={styles.generalText}>&nbsp;</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={styles.generalText}>
                    A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: 12 }}>
                    Эрүүл мэндийн бүртгэлийн маягт АМ-30Б
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              ӨДРИЙН ЭМЧИЛГЭЭНИЙ БҮРТГЭЛ /Насанд хүрэгчид/
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ display: "flex", flexDirection: "row" },
            }}
          >
            Эцэг /эх/ийн нэр: . . . . . . . . . . . . . . . . . . . . . . . . .
            . нэр. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            огноо: . . . . . . . . ./ . . . . . . ./ . . . .
          </div>
          <div style={styles.rowStyle}>
            РД. . . . . . . . . . . . . . . . . . . . . . . . . нас. . . . . . .
            . . . . . . эр / эм
            <span style={{ marginLeft: 20 }}>
              ӨЭ Хуудас №. . . . . . . . . . . . . . . . . . . . . . . . . .
            </span>
          </div>
          <div style={styles.rowStyle}>
            Мэс заслын өмнөх өрөөнд ирсэн: . . . . . . . цаг. . . . . . . . .
            минут.
            <span style={{ marginLeft: 100 }}>
              Сувилагч. . . . . . . . . . . . .
            </span>
          </div>

          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  Мэс заслын өмнөх
                </td>
                {[...Array(10)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={2}></td>
                ))}
                <td style={styles.centerText}>Илэрсэн шинж</td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  Мэс заслын дараах
                </td>
                {[...Array(10)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={2}></td>
                ))}
                <td style={styles.leftText} rowSpan={9}>
                  <div style={styles.leftText}>1. ( ) чичрэх</div>
                  <div style={styles.leftText}>2. ( ) өвдөх</div>
                  <div style={styles.leftText}>3. ( ) тайван бус</div>
                  <div style={styles.leftText}>4. ( ) хөхрөх</div>
                  <div style={styles.leftText}>5. ( ) цус шүүрэх</div>
                  <div style={styles.leftText}>6. ( ) огих, бөөлжих</div>
                  <div style={styles.leftText}>7. ( ) амьсгал өөрч-х</div>
                  <div style={styles.leftText}>8. ( ) эмийн гаж нөлөө</div>
                  <div style={styles.leftText}>9. ( ) булчин сулрах</div>
                  <div style={styles.leftText}>
                    10. ( ) . . . . . . . . . . . . . .
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  Цаг/ минут
                </td>
                {[...Array(10)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={2}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>ЗЦ</td>
                <td style={styles.centerText}>А</td>
                <td style={styles.centerText}>t°</td>
                <td style={styles.centerText}>АД</td>
                <td style={styles.centerText}>SpO2</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>150</td>
                <td style={styles.centerText}>55</td>
                <td style={styles.centerText}>40,5</td>
                <td style={styles.centerText}>140</td>
                <td style={styles.centerText}>100</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>140</td>
                <td style={styles.centerText}>50</td>
                <td style={styles.centerText}>40</td>
                <td style={styles.centerText}>130</td>
                <td style={styles.centerText}>98</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>130</td>
                <td style={styles.centerText}>45</td>
                <td style={styles.centerText}>39,5</td>
                <td style={styles.centerText}>120</td>
                <td style={styles.centerText}>96</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>120</td>
                <td style={styles.centerText}>40</td>
                <td style={styles.centerText}>39</td>
                <td style={styles.centerText}>110</td>
                <td style={styles.centerText}>94</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>110</td>
                <td style={styles.centerText}>35</td>
                <td style={styles.centerText}>38,5</td>
                <td style={styles.centerText}>100</td>
                <td style={styles.centerText}>92</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>100</td>
                <td style={styles.centerText}>30</td>
                <td style={styles.centerText}>38</td>
                <td style={styles.centerText}>90</td>
                <td style={styles.centerText}>90</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>90</td>
                <td style={styles.centerText}>25</td>
                <td style={styles.centerText}>37,5</td>
                <td style={styles.centerText}>80</td>
                <td style={styles.centerText}>88</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                <td style={styles.centerText}>Авсан арга хэмжээ</td>
              </tr>
              <tr>
                <td style={styles.centerText}>80</td>
                <td style={styles.centerText}>20</td>
                <td style={styles.centerText}>37</td>
                <td style={styles.centerText}>70</td>
                <td style={styles.centerText}>86</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                <td style={styles.leftText} rowSpan={10}>
                  <div style={styles.leftText}>1. ( ) хяналт</div>
                  <div style={styles.leftText}>2. ( ) нэмэлт О2 . . . л/м</div>
                  <div style={styles.leftText}>3. ( ) хэл дарагч</div>
                  <div style={styles.leftText}>4. ( ) соруулга</div>
                  <div style={styles.leftText}>5. ( ) ход/ гуурс</div>
                  <div style={styles.leftText}>6. ( ) шээс/гуурс</div>
                  <div style={styles.leftText}>7. ( ) боолт</div>
                  <div style={styles.leftText}>8. ( ) эмийн эмчилгээ</div>
                  <div style={styles.leftText}>9. ( ) эмчийн зөвлөгөө</div>
                  <div style={styles.leftText}>
                    10. ( ) . . . . . . . . . . . . . .
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>70</td>
                <td style={styles.centerText}>15</td>
                <td style={styles.centerText}>36,5</td>
                <td style={styles.centerText}>60</td>
                <td style={styles.centerText}>84</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>60</td>
                <td style={styles.centerText}>10</td>
                <td style={styles.centerText}>36</td>
                <td style={styles.centerText}>50</td>
                <td style={styles.centerText}>82</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>50</td>
                <td style={styles.centerText}>5</td>
                <td style={styles.centerText}>35,5</td>
                <td style={styles.centerText}>40</td>
                <td style={styles.centerText}>80</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>40</td>
                <td style={styles.centerText}>0</td>
                <td style={styles.centerText}>35</td>
                <td style={styles.centerText}>30</td>
                <td style={styles.centerText}>78</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  Хооллолт
                </td>
                {[...Array(20)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  Анхаарах асуудал
                </td>
                {[...Array(20)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3} rowSpan={3}>
                  Ялгаруулалт /давтамж/
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Өтгөн
                </td>
                {[...Array(20)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Шээс
                </td>
                {[...Array(20)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Боолт/гуурс
                </td>
                {[...Array(20)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            Үйлчлүүлэгч, түүний ар гэрт асаргаа, сувилгааны зөвлөгөө өгсөн /
            өгөөгүй (зур). Өдрийн эмчилгээний
          </div>
          <div style={styles.rowStyle}>
            хуудсыг хааж үйлчлүүлэгчийг аав/ ээж/ асран хамгаалагч/ . . . . . .
            . . . . . . . .тасагт хүлээлгэн өгөв:
          </div>
          <div style={styles.rowStyle}>
            Амин үзүүлэлт: Биеийн байдал . . . . . . . . . . , Ухаан санаа . . .
            . . . . . . . . . . . . . . . . . , Амьсгал. . . . . . . . ,
          </div>
          <div style={styles.rowStyle}>
            Зүрхний цохилт. . . . . . . . . , Артерийн даралт. . . . . /. . . .
            . . / . . . . , Биеийн хэм. . . . . . . , FiO2 . . . . . . ,
          </div>
          <div style={styles.rowStyle}>
            Цусны хүчилтөрөгчийн хангамж. . . . . . . , Хялгасан судасны эргэн
            дүүрэлт. . . . . . . . , Шарх. . . . . . . . . .
          </div>
          <div style={styles.centerText}>
            Эмч................................................../
            <span style={{ marginLeft: 140 }}>/</span>
          </div>
          <div style={styles.centerText}>
            Сувилагч......................................./
            <span style={{ marginLeft: 140 }}>/</span>
          </div>

          <div style={styles.rowStyle}>
            Үйлчлүүлэгч............................-ны аав/ ээж/ асран
            хамгаалагч (.........................) би хүүхдийнхээ асаргаа
            сувилгааны зөвлөгөөг авсан / аваагүй (зур). Зөвлөгөөг зааврын дагуу
            сахих болно.
          </div>
          <div style={styles.rowStyle}>
            Асран хамгаалагч: аав/ ээж/ өвөө/ эмээ/ ах/ эгч/ төрөл
            ...................................../
            <span style={{ marginLeft: 140 }}>/</span>
          </div>
          <div style={styles.centerText}>
            .................он
            ...........сар............өдөр...........цаг.............минут.
          </div>
          <div style={styles.rowStyle}>
            Нэмэлт тэмдэглэл: . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            .
          </div>
          <div style={styles.rowStyle}>
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . .
          </div>
          <div style={styles.rowStyle}>
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . .
          </div>
          <div style={styles.rowStyle}>
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . .
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            Өдрийн эмчилгээний дараах хяналтын өрөөнд хийгдсэн эмчилгээ,
            сувилгааны зарлагын хуудас
          </div>
          <div style={styles.rightText}>
            огноо: . . . . . . . . ./ . . . . . . ./ . . . . . .
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.centerText} rowSpan={2} colSpan={2}>
                  Эмийн нэр
                </td>
                <td style={styles.centerText} rowSpan={2}>
                  тун
                </td>
                <td style={styles.centerText} rowSpan={2}>
                  Хийх арга
                </td>
                <td style={styles.centerText} colSpan={6}>
                  Хийсэн цаг минут
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 80, height: 20 } }}
                  rowSpan={2}
                >
                  Зардал
                </td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 40, height: 20 } }}
                ></td>
                <td
                  style={{ ...styles.centerText, ...{ width: 40, height: 20 } }}
                ></td>
                <td
                  style={{ ...styles.centerText, ...{ width: 40, height: 20 } }}
                ></td>
                <td
                  style={{ ...styles.centerText, ...{ width: 40, height: 20 } }}
                ></td>
                <td
                  style={{ ...styles.centerText, ...{ width: 40, height: 20 } }}
                ></td>
                <td
                  style={{ ...styles.centerText, ...{ width: 40, height: 20 } }}
                ></td>
              </tr>
              <tr>
                <td style={styles.centerText}>1</td>
                <td style={styles.leftText}>Парацетамол лаа / таб</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>2</td>
                <td style={styles.leftText}>Ибупрофейн таб</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>3</td>
                <td style={styles.leftText}>Диклофенак лаа</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>4</td>
                <td style={styles.leftText}>Метамизол таб / тариа</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>5</td>
                <td style={styles.leftText}>Натрийн хлорид 0,9%</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>6</td>
                <td style={styles.leftText}>Чихрийн уусмал ........%</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>7</td>
                <td style={styles.leftText}>Рингерийн уусмал</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>8</td>
                <td style={styles.leftText}>Церукал таб / тариа</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>9</td>
                <td style={styles.leftText}>Ондацетрон тариа</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>10</td>
                <td style={styles.leftText}>Пропофол тариа</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>11</td>
                <td style={styles.leftText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>12</td>
                <td style={styles.leftText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              {[...Array(5)].map((x, i) => (
                <tr key={i}>
                  <td
                    style={{
                      ...styles.centerText,
                      ...{ width: 40, height: 20 },
                    }}
                  ></td>
                  <td style={styles.leftText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                </tr>
              ))}
              <tr>
                <td style={styles.centerText} colSpan={2}>
                  Нэг удаагийн хэрэгсэл
                </td>
                <td style={styles.centerText}>хэмжээ</td>
                <td style={styles.centerText}>Тоо ширхэг</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>1</td>
                <td style={styles.leftText}>Соруулах гуурс</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>2</td>
                <td style={styles.leftText}>Ходоодны гуурс</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>3</td>
                <td style={styles.leftText}>Спирт</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>4</td>
                <td style={styles.leftText}>Хөвөн</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>5</td>
                <td style={styles.leftText}>Бээлий</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>6</td>
                <td style={styles.leftText}>Систем</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>7</td>
                <td style={styles.leftText}>Уян зүү</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>8</td>
                <td style={styles.leftText} rowSpan={5}>
                  Тариур:
                </td>
                <td style={styles.centerText}>20 мл</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>9</td>
                <td style={styles.centerText}>10 мл</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>10</td>
                <td style={styles.centerText}>5 мл</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>11</td>
                <td style={styles.centerText}>3 мл</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>12</td>
                <td style={styles.centerText}>1 мл</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>13</td>
                <td style={styles.leftText}>Боолтын иж бүрдэл</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>14</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              {[...Array(2)].map((x, i) => (
                <tr key={i}>
                  <td
                    style={{
                      ...styles.centerText,
                      ...{ width: 40, height: 20 },
                    }}
                  ></td>
                  <td style={styles.leftText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                </tr>
              ))}
              <tr>
                <td style={styles.centerText}>14</td>
                <td style={styles.centerText}>
                  Хяналтын өрөөний эмчилгээний зардал
                </td>
                <td style={styles.centerText} colSpan={8}>
                  Зөвхөн хяналтын өрөөнд хэргэлсэн эм, хэрэгслийн зардлыг бичнэ.
                </td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.centerText} colSpan={3}>
                  Эмчилгээнйи нийт зардал /төгрөгөөр/
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>1</td>
                <td style={styles.rightText}>Мэс заслын нийт</td>
                <td style={styles.centerText}>
                  . . . . . . . . . . . . . . . . . . . . . . .₮
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>2</td>
                <td style={styles.rightText}>Мэдээгүйжүүлгийн</td>
                <td style={styles.centerText}>
                  . . . . . . . . . . . . . . . . . . . . . . .₮
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>3</td>
                <td style={styles.rightText}>Сэрээх өрөөний эмчилгээний</td>
                <td style={styles.centerText}>
                  . . . . . . . . . . . . . . . . . . . . . . .₮
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>4</td>
                <td style={styles.rightText}>Хяналтын өрөөний эмчилгээний</td>
                <td style={styles.centerText}>
                  . . . . . . . . . . . . . . . . . . . . . . .₮
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>5</td>
                <td style={styles.rightText}>Өдрийн эмчилгээний нийт</td>
                <td style={styles.centerText}>
                  . . . . . . . . . . . . . . . . . . . . . . .₮
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rightText}>
            Мэс заслын дараах хяналтын өрөөнд асаргаа, сувилгаа, эмчилгээ хийсэн
            хүний нэр, гарын үсэг:
          </div>
          <div style={styles.rightText}>
            1. Эмч / сувилагч: . . . . . . . . . . . . . . . . . . . . . . . ./{" "}
            <span style={{ marginLeft: 80 }}>/</span>
          </div>
          <div style={styles.rightText}>
            1. Эмч / сувилагч: . . . . . . . . . . . . . . . . . . . . . . . ./{" "}
            <span style={{ marginLeft: 80 }}>/</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AM30B;
