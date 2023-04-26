import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-2А
function AM2A() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
    },
    generalText: {
      fontSize: 9,
    },
    blankSpaces: {
      fontSize: 9,
    },
    rowStyle: {
      fontSize: 9,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 9,
    },
    rightText: {
      textAlign: "right",
      padding: 1,
      verticalAlign: "middle",
      fontSize: 9,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 9,
    },
    flexContainerTop: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: 9,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 9,
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
                  <span style={{ fontWeight: "bold", fontSize: 9 }}>
                    Эрүүл мэндийн бүртгэлийн маягт-АМ-2А
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 13 }}>
              ХАЛДВАРТ ӨВЧНИЙ ХАМШИНЖ, СЭЖИГТЭЙ ТОХИОЛДЛЫГ МЭДЭЭЛЭХ ХУУДАС
            </span>
          </div>
          <div style={styles.rowStyle}>
            <b>
              Хамшинж, сэжигтэй тохиолдлын нэр:
              ___________________________________________________________________________
            </b>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td colSpan={5} style={styles.leftText}>
                  <b>1 дүгээр хэсэг</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Эцэг/эхийн нэр</td>
                <td style={styles.leftText}>Өөрийн нэр</td>
                <td style={styles.leftText}>Нас</td>
                <td style={styles.leftText}>Хүйс</td>
                <td style={styles.leftText}>Утасны дугаар</td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  <span style={{ marginRight: 5 }}>Регистрийн дугаар </span>
                  <div style={{ display: "flex" }}>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                  </div>
                  <div style={styles.leftText}>Оршин суугаа хаяг</div>
                  <div style={styles.leftText}>
                    Аймаг / Хот:
                    <span style={{ marginLeft: 75 }}>Сум / Дүүрэг:</span>
                  </div>
                  <div style={styles.leftText}>
                    Баг / Хороо: _________
                    <span style={{ marginLeft: 40 }}>
                      Хэсэг / Хороолол: _______
                    </span>
                  </div>
                  <div style={styles.leftText}>
                    Газар / Гудамж / Байр:_______
                    <span style={{ marginLeft: 20 }}>Тоот:___ </span>
                  </div>
                </td>
                <td colSpan={2} style={styles.leftText}>
                  <b>Боловсролын байдал:</b>
                  <div style={styles.leftText}>
                    1. Боловсролгүй
                    <span style={{ marginLeft: 20 }}>2. Бага</span>
                  </div>
                  <div style={styles.leftText}>3. Суурь боловсрол</div>
                  <div style={styles.leftText}>4. Бүрэн дунд</div>
                  <div style={styles.leftText}>
                    5. Мэргэжлийн болон техникийн
                  </div>
                  <div style={styles.leftText}>
                    6. Дипломын
                    <span style={{ marginLeft: 20 }}>7. Бакалавр</span>
                  </div>
                  <div style={styles.leftText}>
                    8. Магистр <span style={{ marginLeft: 20 }}>9. Доктор</span>
                  </div>
                </td>
                <td style={{ textAlign: "start", fontSize: 10, padding: 1 }}>
                  Ажлын хаяг:
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хөдөлмөр эрхлэлт</td>
                <td style={styles.leftText}>Эмнэлэгт үзүүлсэн огноо</td>
                <td colSpan={2} style={styles.leftText}>
                  Эмнэлэгт хэвтсэн эсэх
                </td>
                <td style={styles.leftText}>Өвчтөн нас барсан эсэх</td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ height: 15 } }}></td>
                <td rowSpan={5} style={styles.leftText}>
                  <div style={styles.rightText}>
                    <b>_______/он/</b>
                  </div>
                  <div style={styles.rightText}>
                    <b>_______/сар/</b>
                  </div>
                  <div style={styles.rightText}>
                    <b>______/өдөр/</b>
                  </div>
                  <div style={styles.rightText}>
                    <b>____/цаг мин/</b>
                  </div>
                </td>
                <td colSpan={2} rowSpan={5} style={styles.leftText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Тийм
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Үгүй
                  </div>
                  <div style={styles.leftText}>
                    <b>Тийм бол огноо:</b>
                  </div>
                  <div style={styles.leftText}>_________</div>
                </td>
                <td rowSpan={5} style={styles.leftText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Тийм
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Үгүй
                  </div>
                  <div style={styles.leftText}>
                    <b>Тийм бол огноо:</b>
                  </div>
                  <div style={styles.leftText}>_________</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>1. Хөдөлмөр эрхлэлтийн байдал</td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ height: 15 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>2. Хөдөлмөр эрхлэхгүй шалтгаан</td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ height: 15 } }}></td>
              </tr>
              <tr>
                <td colSpan={5} style={styles.leftText}>
                  <b>Эмнэлзүйн мэдээлэл (хамшинж тэмдгийг бичнэ)</b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "start",
                    fontSize: 10,
                    padding: 1,
                    height: 60,
                  }}
                >
                  Хамшинж:
                </td>
                <td
                  colSpan={3}
                  style={{ textAlign: "start", fontSize: 10, padding: 1 }}
                >
                  Эмнэл зүйн шинж тэмдгийг онцлон бичнэ үү.
                </td>
                <td style={{ textAlign: "start", fontSize: 10, padding: 1 }}>
                  Илэрсэн огноо:
                </td>
              </tr>
              <tr>
                <td colSpan={5} style={styles.leftText}>
                  <b>Тархвар судлалын холбогдол</b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "start",
                    fontSize: 10,
                    padding: 1,
                  }}
                >
                  Халдварын эх уурхай
                </td>
                <td
                  colSpan={3}
                  style={{ textAlign: "start", fontSize: 10, padding: 1 }}
                >
                  Дамжих зам
                </td>
                <td
                  style={{
                    textAlign: "start",
                    fontSize: 10,
                    padding: 1,
                    width: 150,
                  }}
                >
                  Халдварт өртсөн байж болзошгүй огноо:
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Хүн
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Мал (төрөл)________
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Амьтан
                    (төрөл)______
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Тогтоогдоогүй
                  </div>
                </td>
                <td colSpan={2} style={styles.leftText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Ахуйн:
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>&nbsp;Шууд хавьтал /ам
                    мөр:
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>&nbsp;Ус мөр:
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>&nbsp;Хүнс мөр:
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>&nbsp;Хөрс мөр:
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    &nbsp;Бусад:______________ мөр:
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Агаар / дусал
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Дам халдвар
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Цусаар
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Тодорхойгүй
                  </div>
                </td>
                <td
                  colSpan={2}
                  style={{
                    textAlign: "start",
                    fontSize: 10,
                    padding: 1,
                  }}
                >
                  ____________________________
                </td>
              </tr>
              <tr>
                <td colSpan={5} style={styles.leftText}>
                  <b>Эмнэлэгт хандахаас өмнөх эмчилгээ</b>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText}>
                  <b>Хэрэглэсэн эмийн нэр</b>
                </td>
                <td style={styles.leftText}>
                  <b>Хэдэн ширхэг, хэдэн удаа</b>
                </td>
                <td style={styles.leftText}>
                  <b>Эмчилгээ эхэлсэн хугацаа</b>
                </td>
                <td style={styles.leftText}>
                  <b>Үргэлжилсэн хугацаа</b>
                </td>
                <td style={styles.leftText}>
                  <b>Сорьц авахаас өмнө хэрэглэсэн эмийн нэр, тун, хэмжээ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td colSpan={5} style={styles.leftText}>
                  <b>Урьдчилсан онош (ОУӨА-10)</b>
                </td>
              </tr>
              <tr>
                <td colSpan={5} style={styles.leftText}>
                  <b>Мэдээлсэн байгууллага</b>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText}>
                  <b>Мэдээлсэн байгууллага</b>
                </td>
                <td style={styles.leftText}>
                  <b>Мэдээлсэн эмч / мэргэжилтэн / албан тушаалтны нэр</b>
                </td>
                <td style={styles.leftText}>
                  <b>Мэдээлсэн хэлбэр</b>
                </td>
                <td style={styles.leftText}>
                  <b>Мэдээлсэн хугацаа</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Утсаар
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Цахимаар
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Цаасаар
                  </div>
                </td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td colSpan={5} style={styles.leftText}>
                  <b>2 дугаар хэсэг</b>
                </td>
              </tr>
              <tr>
                <td colSpan={5} style={styles.leftText}>
                  <b>Лабораторийн шинжилгээ</b>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText}>
                  <b>Сорьцын нэр</b>
                </td>
                <td style={styles.leftText}>
                  <b>Сорьц авсан огноо</b>
                </td>
                <td style={styles.leftText}>
                  <b>Шинжилгээний төрөл</b>
                </td>
                <td style={styles.leftText}>
                  <b>Шинжилгээний дүн</b>
                </td>
                <td style={styles.leftText}>
                  <b>Лабораторийн нэр</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText}>
                  <div style={styles.rowCellWithText}>
                    <b>Батлагдсан онош (ОУӨА-10)</b>
                    <div
                      style={{ ...styles.rowCells, ...{ marginLeft: 10 } }}
                    ></div>
                    &nbsp;Эмнэлзүйгээр
                    <div
                      style={{ ...styles.rowCells, ...{ marginLeft: 10 } }}
                    ></div>
                    &nbsp;Тархвар холбогдлоор
                    <div
                      style={{ ...styles.rowCells, ...{ marginLeft: 10 } }}
                    ></div>
                    &nbsp;Лаборатороор
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={5} style={styles.leftText}>
                  <div style={styles.rowCellWithText}>
                    <b>Эмнэлгийн тусламж үйлчилгээтэй холбоотой халдвар</b>
                    <div
                      style={{ ...styles.rowCells, ...{ marginLeft: 10 } }}
                    ></div>
                    &nbsp;Тийм
                    <div
                      style={{ ...styles.rowCells, ...{ marginLeft: 10 } }}
                    ></div>
                    &nbsp;Үгүй
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={5} style={styles.leftText}>
                  <b>Онош батлагдсан огноо: </b>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default AM2A;
