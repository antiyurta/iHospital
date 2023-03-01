import React from "react";
import { Table } from "react-bootstrap";

function Mayg1() {
  const styles = {
    generalText: {
      fontSize: 12,
      lineHeight: 1.1,
    },
    generalTextBold: {
      fontWeight: "bold",
      fontSize: 12,
      lineHeight: 1.1,
    },
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 12,
      height: 12,
    },
    checkContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 5,
    },
  };
  return (
    <div className="page">
      <div className="subpage">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
          }}
        >
          <span
            style={{
              ...styles.generalText,
              ...{},
            }}
          >
            Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
          </span>
          <span style={styles.generalText}>
            A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
          </span>
          <span style={{ fontWeight: "bold", fontSize: 12 }}>
            Эрүүл мэндийн бүртгэлийн маягт АМ-7
          </span>
        </div>
        <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
          <span style={{ fontWeight: "bold", fontSize: 14 }}>
            НАС БАРСАН ТУХАЙ ЭМНЭЛГИЙН ГЭРЧИЛГЭЭ
          </span>
        </div>
        <table className="w-100">
          <tr>
            <td
              style={{
                ...styles.generalTextBold,
                ...{ fontStyle: "italic" },
              }}
            >
              Эмнэлгийн нэр лого
            </td>
          </tr>
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "23%" } }}>
              Эцэг/эхийн нэр:..............................................
            </td>
            <td style={{ ...styles.generalText, ...{ width: "23%" } }}>
              Нэр:...............................................
            </td>
            <td style={{ ...styles.generalText, ...{ width: "23%" } }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  padding: 5,
                }}
              >
                <span style={{ marginRight: 5 }}>Хүйс</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={styles.checkContainer}>
                    <div>
                      <div style={styles.rowCells}></div>
                    </div>
                    <span style={{ marginLeft: 5 }}>Эмэгтэй</span>
                  </div>
                  <div style={styles.checkContainer}>
                    <div>
                      <div style={styles.rowCells}></div>
                    </div>
                    <span style={{ marginLeft: 5 }}>Эрэгтэй</span>
                  </div>
                </div>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "23%" } }}>
              РД:............................................
            </td>
            <td style={{ ...styles.generalText, ...{ width: "8%" } }}>Нас</td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "20%" } }}>
              Төрсөн өдөр, сар,он
            </td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ө</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ө</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>С</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>С</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ж</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ж</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ж</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ж</td>
            <td style={{ ...styles.generalText, ...{ width: "20%" } }}>
              Нас барсан огноо
            </td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ө</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ө</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>С</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>С</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ж</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ж</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ж</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ж</td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td style={styles.generalText}>
              Гэрийн хаяг:
              ____________________________________________________________________________________________
            </td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td style={styles.generalTextBold}>А хэсэг :</td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td
              rowSpan={5}
              style={{ ...styles.generalText, ...{ width: 170 } }}
            >
              1 Үхэлд шууд хүргэсэн өвчин ба эмгэг /а/
            </td>
            <td style={{ ...styles.generalText, ...{ width: 30 } }}></td>
            <td style={styles.generalText}></td>
            <td style={styles.generalText}>Нас баралтын шалтгаан:</td>
            <td style={{ ...styles.generalText, ...{ width: 100 } }}>
              Өвчин эхэлснээс хойш нас барах хүртэлх хугацаа
            </td>
            <td style={{ ...styles.generalText, ...{ width: 80 } }}>ӨОУА-10</td>
          </tr>
          <tr>
            <td rowSpan={2} style={styles.generalText}>
              ARROW
            </td>
            <td style={styles.generalText}>А</td>
            <td style={styles.generalText}></td>
            <td style={styles.generalText}></td>
          </tr>
          <tr>
            <td style={styles.generalText}>Б</td>
            <td style={styles.generalText}>Улмаас</td>
            <td style={styles.generalText}></td>
          </tr>
          <tr>
            <td rowSpan={2} style={styles.generalText}>
              ARROW
            </td>
            <td style={styles.generalText}>В</td>
            <td style={styles.generalText}>Улмаас</td>
            <td style={styles.generalText}></td>
          </tr>
          <tr>
            <td style={styles.generalText}>Г</td>
            <td style={styles.generalText}>Улмаас</td>
            <td style={styles.generalText}></td>
          </tr>
          <tr>
            <td
              style={{
                ...styles.generalTextBold,
                ...{ fontStyle: "italic" },
              }}
            >
              Үндсэн онош:
            </td>
            <td style={styles.generalText}></td>
            <td style={styles.generalText}></td>
            <td style={styles.generalText}></td>
            <td style={styles.generalText}></td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "40%" } }}>
              2 Нас барахад хүргэсэн бусад нөхцөл, шалтгаан
            </td>
            <td style={styles.generalTextBgeneralTextold}>
              .................................................................................
            </td>
          </tr>
        </table>
        <table className="w-100 mt-2">
          <tr>
            <td colSpan={10} style={styles.generalTextBold}>
              B хэсэг :
            </td>
          </tr>
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "30%" } }}>
              Сүүлийн 4 долоо хоногт мэс засал хийлгэсэн эсэх?
            </td>
            <td style={{ ...styles.generalText, ...{ alignItems: "center" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тийм</span>
              </div>
            </td>
            <td style={styles.generalText}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Үгүй</span>
              </div>
            </td>
            <td style={styles.generalText} colSpan={6}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Торорхойгүй</span>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "20%" } }}>
              Хэрэв тийм бол мэс засал хийлгэсэн огноо
            </td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ө</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ө</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>С</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>С</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ж</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ж</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ж</td>
            <td style={{ ...styles.generalText, ...{ width: "2%" } }}>Ж</td>
          </tr>
          <tr style={{ height: 40 }}>
            <td style={styles.generalText}>
              Мэс заслын шалтгааныг тодруулж бичих (өвчин ба шалтгаан)
            </td>
            <td style={styles.generalText} colSpan={5}></td>
            <td style={styles.generalText} colSpan={3}>
              ҮОУА-9
            </td>
          </tr>
          <tr>
            <td style={styles.generalText}>
              Асуумжаар дүгнэлт шинжилгээ (VA WHO 2016 standard) хийсэн эсэх ?
            </td>
            <td style={styles.generalText}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тийм</span>
              </div>
            </td>
            <td style={styles.generalText}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Үгүй</span>
              </div>
            </td>
            <td style={styles.generalText} colSpan={6}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Торорхойгүй</span>
              </div>
            </td>
          </tr>
          <tr>
            <td style={styles.generalText}>
              Хэрэв тийм бол онош баталгаажуулахад ашигласан эсэх?
            </td>
            <td style={styles.generalText}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тийм</span>
              </div>
            </td>
            <td style={styles.generalText}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Үгүй</span>
              </div>
            </td>
            <td style={styles.generalText} colSpan={6}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Торорхойгүй</span>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={10} style={styles.generalTextBold}>
              Нас барсан хэлбэр:
            </td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "33%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Өвчин</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "33%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Амиа хорлосон</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "33%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Бусад осол</span>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "33%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Зам тээврийн осол</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "33%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Бусдад хорлогдсон</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "33%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Үйлдвэрийн осол</span>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "33%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Хордлого</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "33%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>
                  Шалтгаан тогтоогдоогүй байгаа
                </span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "33%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тодорхойгүй</span>
              </div>
            </td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td style={styles.generalText}>
              Гадны шалтгаант болон хордлогын шалтгаант бол:
            </td>
            <td style={styles.generalText}>Гэмтсэн өдөр, сар, он</td>
            <td
              style={{
                ...styles.generalText,
                ...{ width: 20, textAlign: "center" },
              }}
            >
              Ө
            </td>
            <td
              style={{
                ...styles.generalText,
                ...{ width: 20, textAlign: "center" },
              }}
            >
              Ө
            </td>
            <td
              style={{
                ...styles.generalText,
                ...{ width: 20, textAlign: "center" },
              }}
            >
              С
            </td>
            <td
              style={{
                ...styles.generalText,
                ...{ width: 20, textAlign: "center" },
              }}
            >
              С
            </td>
            <td
              style={{
                ...styles.generalText,
                ...{ width: 20, textAlign: "center" },
              }}
            >
              Ж
            </td>
            <td
              style={{
                ...styles.generalText,
                ...{ width: 20, textAlign: "center" },
              }}
            >
              Ж
            </td>
            <td
              style={{
                ...styles.generalText,
                ...{ width: 20, textAlign: "center" },
              }}
            >
              Ж
            </td>
            <td
              style={{
                ...styles.generalText,
                ...{ width: 20, textAlign: "center" },
              }}
            >
              Ж
            </td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td style={styles.generalText}>
              Гадны шалтгааныг тодорхойлон бичих (Хэрэв хордлогын шалтгаант бол
              хордсон бодисыг бичих)
            </td>
            <td>
              ....................................................................................................................
              <br />
              ....................................................................................................................
            </td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td colSpan={10} style={styles.generalTextBold}>
              Нас барсан газар:
            </td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "15%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Эмнэлэгт</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "25%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Гэртээ</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "30%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>
                  Амьдрах зориулалттай тусгай байр
                </span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "35%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div>
                    <div style={styles.rowCells}></div>
                  </div>
                </div>
                <span style={{ marginLeft: 5 }}>
                  Сургууль, бусад олон нийтийн ба засаг захиргааны газрууд
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "15%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Гудамж ба зам</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "25%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>
                  Биеийн тамир, спортын талбай
                </span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "30%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>
                  Худалдаа үйлчилгээний газрууд
                </span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "35%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>
                  Үйлдвэрлэл ба барилгын газар
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan={3}
              style={{ ...styles.generalText, ...{ width: "15%" } }}
            >
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Бусад (тодорхойлж бичих):</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "35%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тодорхойгүй</span>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              style={{ ...styles.generalText, ...{ width: "15%" } }}
            >
              Эмнэлэгт нас барсан бол:
            </td>
            <td
              colSpan={3}
              style={{ ...styles.generalText, ...{ width: "35%" } }}
            >
              Эмнэлгээс гадуурх нас баралт бол: Нас барахаас өмнө эмнэлэгт
              хэвтсэн эсэх?
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              style={{ ...styles.generalText, ...{ width: "15%" } }}
            >
              Ор хоног
              <span style={{ marginLeft: 30 }}>
                ......өдөр ...... цаг.......минут
              </span>
            </td>
            <td
              colSpan={3}
              style={{
                ...styles.generalText,
                ...{ width: "35%" },
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={styles.checkContainer}>
                  <div>
                    <div style={styles.rowCells}></div>
                  </div>
                  <span style={{ marginLeft: 5 }}>Тийм</span>
                </div>
                <div style={styles.checkContainer}>
                  <div>
                    <div style={styles.rowCells}></div>
                  </div>
                  <span style={{ marginLeft: 5 }}>Үгүй</span>
                </div>
                <span style={{ marginLeft: 30 }}>
                  Хэрэв тийм бол:
                  <span style={{ marginLeft: 30 }}>
                    ....... өдөр...... сар ....... жил
                  </span>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              style={{ ...styles.generalText, ...{ width: "15%" } }}
            >
              Хорт хавдар, ДОХ/ХДХВ-ээр нас барсан бол оношлогдсоноос хойш
              амьдарсан хугацаа
            </td>
            <td
              colSpan={3}
              style={{
                ...styles.generalText,
                ...{ width: "35%", textAlign: "center" },
              }}
            >
              <span style={{ marginLeft: 30 }}>
                ....... Жил...... сар ....... хоног
              </span>
            </td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td colSpan={10} style={styles.generalTextBold}>
              Ураг болон нярайн эндэгдэл
            </td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "40%" } }}>
              Ихэр эсэх?
            </td>
            <td style={{ ...styles.generalText, ...{ width: "20%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тийм</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "20%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Үгүй</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "20%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тодорхойгүй</span>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "40%" } }}>
              Амьгүй төрөлт?
            </td>
            <td style={{ ...styles.generalText, ...{ width: "20%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тийм</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "20%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Үгүй</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "20%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тодорхойгүй</span>
              </div>
            </td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "50%" } }}>
              Хоног болоогүй нас баралт бол хугацааг бичих /цагаар/
            </td>
            <td style={{ ...styles.generalText, ...{ width: "4%" } }}></td>
            <td style={{ ...styles.generalText, ...{ width: "4%" } }}></td>
            <td style={{ ...styles.generalText, ...{ width: "20%" } }}>
              Төрөх үеийн жин (гр)
            </td>
            <td style={{ ...styles.generalText, ...{ width: "4%" } }}></td>
            <td style={{ ...styles.generalText, ...{ width: "4%" } }}></td>
            <td style={{ ...styles.generalText, ...{ width: "4%" } }}></td>
            <td style={{ ...styles.generalText, ...{ width: "10%" } }}></td>
          </tr>
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "50%" } }}>
              Жирэмсний хугацаа /7 хоногоор/
            </td>
            <td style={{ ...styles.generalText, ...{ width: "4%" } }}></td>
            <td style={{ ...styles.generalText, ...{ width: "4%" } }}></td>
            <td
              colSpan={3}
              style={{ ...styles.generalText, ...{ width: "20%" } }}
            >
              Эхийн нас
            </td>
            <td style={{ ...styles.generalText, ...{ width: "4%" } }}></td>
            <td style={{ ...styles.generalText, ...{ width: "10%" } }}></td>
          </tr>
          <tr>
            <td style={styles.generalText}>
              Перинаталь эндэгдэлд нөлөөлсөн эхийн эрүүл мэнд болон жирэмсэн ба
              төрөх үеийн хүндрэл /тодорхойлж бичих/
            </td>
            <td colSpan={7}>
              ..............................................................................ӨОУА-10
              <br />
              ..............................................................................
            </td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td
              colSpan={5}
              style={{ ...styles.generalText, ...{ width: "50%" } }}
            >
              Эхийн эндэгдэл мөн эсэх?
            </td>
            <td style={{ ...styles.generalText, ...{ width: "15%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тийм</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "15%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Үгүй</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "20%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тодорхойгүй</span>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan={5}
              style={{ ...styles.generalText, ...{ width: "50%" } }}
            >
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>
                  Жирэмсэн ба төрөх, төрсний дараах үе
                </span>
              </div>
            </td>
            <td
              colSpan={3}
              style={{ ...styles.generalText, ...{ width: "15%" } }}
            >
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>
                  Жирэмсэн ба төрсний дараа 42 хоногийн дотор
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan={5}
              style={{ ...styles.generalText, ...{ width: "50%" } }}
            >
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>
                  Жирэмслэлт, төрөлтийн дараа 42 хоногоос 1 жилийн дотор
                </span>
              </div>
            </td>
            <td
              colSpan={3}
              style={{ ...styles.generalText, ...{ width: "15%" } }}
            >
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тодорхойгүй</span>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan={5}
              style={{ ...styles.generalText, ...{ width: "50%" } }}
            >
              Жирэмслэлт нь нас баралтын шалтгаан болсон эсэх?
            </td>
            <td style={{ ...styles.generalText, ...{ width: "15%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тийм</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "15%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Үгүй</span>
              </div>
            </td>
            <td style={{ ...styles.generalText, ...{ width: "20%" } }}>
              <div style={styles.checkContainer}>
                <div>
                  <div style={styles.rowCells}></div>
                </div>
                <span style={{ marginLeft: 5 }}>Тодорхойгүй</span>
              </div>
            </td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "60%" } }}>
              Гэрчилгээ олгосон огноо
            </td>
            <td style={{ ...styles.generalText, ...{ width: "10%" } }}>Ө Ө</td>
            <td style={{ ...styles.generalText, ...{ width: "10%" } }}>С С</td>
            <td style={{ ...styles.generalText, ...{ width: "20%" } }}>
              Ж Ж Ж Ж
            </td>
          </tr>
        </table>
        <table className="w-100">
          <tr>
            <td
              rowSpan={2}
              style={{ ...styles.generalText, ...{ width: "10%" } }}
            >
              Тамга
            </td>
            <td style={{ ...styles.generalText, ...{ width: "30%" } }}>
              Эмчлэгч эмч, өрхийн эмч, бусад /зур/
            </td>
            <td style={{ ...styles.generalText, ...{ width: "30%" } }}>
              Нэр: ...................................
            </td>
            <td style={{ ...styles.generalText, ...{ width: "30%" } }}>
              Гарын үсэг .................................
            </td>
          </tr>
          <tr>
            <td style={{ ...styles.generalText, ...{ width: "30%" } }}>
              Гэрчилгээ олгосон эмч:
            </td>
            <td style={{ ...styles.generalText, ...{ width: "30%" } }}>
              Нэр: ...................................
            </td>
            <td style={{ ...styles.generalText, ...{ width: "30%" } }}>
              Гарын үсэг .................................
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Mayg1;
