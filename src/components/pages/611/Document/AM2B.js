import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-2Б
function AM2B() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
    },
    rowCellsSm: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 8,
      height: 8,
      lineHeight: 1,
    },
    generalText: {
      fontSize: 10,
    },
    rowStyle: {
      fontSize: 10,
    },
    topText: {
      padding: 1,
      fontSize: 10,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 10,
    },
    rightText: {
      textAlign: "right",
      padding: 1,
      verticalAlign: "middle",
      fontSize: 10,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 10,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 10,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 10,
      marginTop: 3,
      padding: 0,
      lineHeight: 1,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 100,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 10,
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
                  <span style={{ fontWeight: "bold", fontSize: 10 }}>
                    Эрүүл мэндийн бүртгэлийн маягт АМ-2Б
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 13 }}>
              ВИРҮСТ ХЕПАТИТИЙН СЭЖИГТЭЙ ТОХИОЛДЛЫГ МЭДЭЭЛЭХ ХУУДАС
            </span>
          </div>
          <div style={styles.rowStyle}>
            Вирүст хепатитийн сэжигтэй тохиолдлын нэр:
            ______________________________________________
          </div>
          <div style={styles.rowStyle}>
            Мэдээлсэн огноо: ______________________________________________
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText}>1.Эцэг/эхийн нэр</td>
                <td style={styles.leftText}>2.Өөрийн нэр</td>
                <td style={styles.leftText}>3.Нас</td>
                <td style={styles.leftText}>4.Хүйс</td>
                <td style={styles.leftText}>5.Утасны дугаар</td>
                <td style={styles.leftText}>6.Ам бүл</td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.topText}>
                  <span style={{ marginRight: 5 }}>7.Регистрийн дугаар </span>
                  <div style={{ display: "flex" }}>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                  </div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.leftText}>8. Оршин суугаа хаяг</div>
                  <div style={styles.leftText}>Аймаг / Хот:</div>
                  <div style={styles.leftText}>
                    Сум / Дүүрэг: _______________
                  </div>
                  <div style={styles.leftText}>
                    Баг / Хороо: _______________
                  </div>
                  <div style={styles.leftText}>
                    Хэсэг / Хороолол: ___________
                  </div>
                  <div style={styles.leftText}>
                    Газар / Гудамж / Байр:_______
                  </div>
                  <div style={styles.leftText}>Тоот: ____________</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.leftText}>9. Ажлын газар:</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <div style={styles.leftText}>10. Албан тушаал:</div>
                  <div style={styles.leftText}>
                    <b>Хөдөлмөр эрхлэлт:</b>
                  </div>

                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Хөдөлмөр
                    эрхлэлтийн байдал
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Хөдөлмөр
                    эрхлэхгүй шалтгаан
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.leftText}>11.Хэрвээ хүүхэд бол</div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Сургууль
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Цэцэрлэг
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Гэртээ
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Дотуур байр
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Хүүхэд асрах төв
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>
                    &nbsp;Бусад_______________
                  </div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.leftText}>11.Хэрвээ хүүхэд бол</div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Боловсролгүй
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Бага
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Суурь боловсрол
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Бүрэн дунд
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Мэргэжлийн болон
                    техникийн
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Дипломын
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Бакалавр
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Магистр
                    <div style={styles.rowCellsSm}></div>&nbsp;Доктор
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>13.Эмнэлэгт үзүүлсэн огноо</div>
                  <div style={styles.rowStyle}>_______/он/</div>
                  <div style={styles.rowStyle}>_______/сар/</div>
                  <div style={styles.rowStyle}>______/өдөр/</div>
                  <div style={styles.rowStyle}>____/цаг мин/</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>14.Эмнэлэгт хэвтсэн эсэх</div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Тийм
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Үгүй
                  </div>
                  <div style={styles.rowStyle}>Тийм бол огноо:</div>
                  <div style={styles.rowStyle}>__________</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>15.Цочмог эхэлсэн эсэх: </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Тийм
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Үгүй
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    16. Арьс салст шарласан эсэх:
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Тийм
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Үгүй
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    17.Эмнэлзүйн шинж тэмдэг эхэлсэн
                  </div>
                  <div style={styles.rowStyle}>_______/он/</div>
                  <div style={styles.rowStyle}>_______/сар/</div>
                  <div style={styles.rowStyle}>______/өдөр/</div>
                  <div style={styles.rowStyle}>____/цаг мин/</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>18.Шинжилгээ авсан эсэх: </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Тийм
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Үгүй
                  </div>
                  <div style={styles.rowStyle}>Тийм бол огноо:</div>
                  <div style={styles.rowStyle}>__________</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>19.Өвчтөн нас барсан эсэх?</div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Тийм
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Үгүй
                  </div>
                  <div style={styles.rowStyle}>Тийм бол огноо:</div>
                  <div style={styles.rowStyle}>__________</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    20.Вирүст хепатитийн эсрэг дархлаажуулалт
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Тийм
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Үгүй
                  </div>
                  <div style={styles.rowStyle}>А хепатитийн вакцин</div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Тийм
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Үгүй
                  </div>
                  <div style={styles.rowStyle}>B хепатитийн вакцин</div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Тийм
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;Үгүй
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td colSpan={2} style={styles.centerText}>
                  21.Өмнө нь архаг хепатитийн халдвартай
                </td>
                <td colSpan={2} style={styles.centerText}>
                  22.Халдварын эх уурхай
                </td>
                <td colSpan={4} style={styles.centerText}>
                  <div style={styles.centerText}>
                    23.Лабораторийн шинжилгээ хийсэн: тийм-1 үгүй-2
                  </div>
                  <div style={styles.centerText}>
                    Аланинаминотрансфераз (АЛАТ)-ын түвшин: ОУН.......
                  </div>
                  <div style={styles.centerText}>
                    Аспаргиннаминотрансфераз (АСАТ)-ын түвшин: ОУН.....
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Архаг В вирүсийн халдвар</td>
                <td style={styles.centerText}>1</td>
                <td style={styles.leftText}>Өвчтөн</td>
                <td style={styles.centerText}>1</td>
                <td style={styles.leftText}>Anti-HAV IgM</td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
                <td style={styles.leftText}>Anti-HBs</td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Архаг C вирүсийн халдвар</td>
                <td style={styles.centerText}>2</td>
                <td style={styles.leftText}>Вирус тээгч</td>
                <td style={styles.centerText}>2</td>
                <td style={styles.leftText}>Anti-HAV IgG </td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
                <td style={styles.leftText}>Anti-HDV </td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
              </tr>
              <tr>
                <td rowSpan={6} style={styles.topText}>
                  Архаг В, D вирүсийн халдвар
                </td>
                <td rowSpan={6} style={styles.centerText}>
                  3
                </td>
                <td rowSpan={6} style={styles.topText}>
                  Тодорхойгүй
                </td>
                <td rowSpan={6} style={styles.centerText}>
                  3
                </td>
                <td style={styles.leftText}>HBsAg</td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
                <td style={styles.leftText}>Anti-HDV IgM</td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Anti-HBcIgM</td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
                <td style={styles.leftText}>Anti-HCV</td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>HBeAg </td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
                <td style={styles.leftText}>HCV RNA</td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Anti-HBc</td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
                <td style={styles.leftText}>HCV genotype</td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>HBV DNA</td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
                <td style={styles.leftText}>Anti-HEV IgM </td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Anti-HBe</td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
                <td style={styles.leftText}>Anti-HGV IgM</td>
                <td style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCellsSm}></div>&nbsp;эерэг
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td colSpan={6} style={styles.centerText}>
                  24. Эрсдэлт хүчин зүйл
                </td>
              </tr>
              <tr>
                <td rowSpan={8} style={styles.verticalText}>
                  Эмнэлгийн тусламж үйлчилгээтэй холбоотой
                </td>
                <td style={styles.leftText}>Эмнэлэгт хэвтэж байсан</td>
                <td style={styles.leftText}>1</td>
                <td rowSpan={12} style={styles.verticalText}>
                  Бусад эрсдэлт хүчин зүйл
                </td>
                <td style={styles.leftText}>
                  Баталгаагүй эх үүсвэрээс ундны ус уусан
                </td>
                <td style={styles.leftText}>11</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Мэс ажилбар хийлгэсэн</td>
                <td style={styles.leftText}>2</td>
                <td style={styles.leftText}>
                  Баталгаагүй хүнсний бүтээгдэхүүн хэрэглэсэн
                </td>
                <td style={styles.leftText}>12</td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Цус цусан бүтээгдэхүүн сэлбүүлсэн
                </td>
                <td style={styles.leftText}>3</td>
                <td style={styles.leftText}>
                  Өвчлөл гарсан хүүхдийн байгууллагын хүүхэд эсвэл ажилтан
                </td>
                <td style={styles.leftText}>13</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Шүд эмчлүүлсэн</td>
                <td style={styles.leftText}>4</td>
                <td style={styles.leftText}>
                  Вирүст хепатитийн өвчлөл өндөртэй газар очсон
                </td>
                <td style={styles.leftText}>14</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Үр хөндөлт хийлгэсэн</td>
                <td style={styles.leftText}>5</td>
                <td style={styles.leftText}>
                  Гэр бүлд вирүсийн халдвартай хүн байгаа
                </td>
                <td style={styles.leftText}>15</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Уламжлалт эмчилгээ хийлгэсэн</td>
                <td style={styles.leftText}>6</td>
                <td style={styles.leftText}>
                  Шүдний сойз, сахлын хутга, хумсны хутга гэх мэт хувийн ариун
                  цэврийн хэрэглэлийг дамжуулан хэрэглэдэг
                </td>
                <td style={styles.leftText}>16</td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Арьс цоолох, гоо сайхны эмчилгээ үйлчилгээ хийлгэсэн
                </td>
                <td style={styles.leftText}>7</td>
                <td style={styles.leftText}>
                  Эрчүүдтэй бэлгийн хавьталд ордог эрчүүд
                </td>
                <td style={styles.leftText}>17</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Гемодиализ эмчилгээ хийлгэдэг</td>
                <td style={styles.leftText}>8</td>
                <td style={styles.leftText}>Бэлгийн олон хавьтагчтай</td>
                <td style={styles.leftText}>18</td>
              </tr>
              <tr>
                <td rowSpan={4} style={styles.verticalText}>
                  Ажил мэргэжилтэй холбоотой
                </td>
                <td style={styles.leftText}>
                  Эмнэлгийн ажилтан тусламж үйлчилгээ хийж байх үедээ өвчтөний
                  цусанд хүрсэн
                </td>
                <td style={styles.leftText}>9</td>
                <td style={styles.leftText}>
                  Мансууруулах бодис хэрэглэдэг, бэлгийн харьцаанд орсон
                </td>
                <td style={styles.leftText}>19</td>
              </tr>
              <tr>
                <td rowSpan={3} style={styles.leftText}>
                  Хүний цустай харьцдаг эм, биобэлдмэлийн үйлдвэр, цусны төвд
                  ажилладаг
                </td>
                <td rowSpan={3} style={styles.leftText}>
                  10
                </td>
                <td style={styles.leftText}>Бэртэл гэмтэл</td>
                <td style={styles.leftText}>20</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Гэрээр тариа хийлгэсэн</td>
                <td style={styles.leftText}>21</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Бусад</td>
                <td style={styles.leftText}>22</td>
              </tr>
              <tr>
                <td colSpan={6} style={styles.centerText}>
                  <div style={styles.rowCellWithText}>
                    <b>Батлагдсан онош (ОУӨА-10)</b>
                    <div
                      style={{ ...styles.rowCellsSm, ...{ marginLeft: 50 } }}
                    ></div>
                    &nbsp;Эмнэлзүйгээр
                    <div
                      style={{ ...styles.rowCellsSm, ...{ marginLeft: 50 } }}
                    ></div>
                    &nbsp;Тархвар судлалын асуумж
                    <div
                      style={{ ...styles.rowCellsSm, ...{ marginLeft: 50 } }}
                    ></div>
                    &nbsp;Лабораториор
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={6} style={styles.leftText}>
                  Онош батлагдсан огноо:
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default AM2B;
