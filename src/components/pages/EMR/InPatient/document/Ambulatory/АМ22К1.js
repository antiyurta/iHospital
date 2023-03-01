import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-22К
function AM22К() {
  const styles = {
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
    },
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 18,
      height: 18,
    },
    leftText: {
      textAlign: "left",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 1,
      paddingLeft: 5,
      lineHeight: 1.3,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 1,
      lineHeight: 1.3,
    },
  };
  return (
    <>
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
                ...{ fontSize: 10 },
              }}
            >
              Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
            </span>
            <span
              style={{
                ...styles.generalText,
                ...{ fontSize: 10 },
              }}
            >
              A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </span>
            <div>
              <span
                style={{
                  ...styles.generalText,
                  ...{ float: "left" },
                }}
              ></span>
              <span style={{ fontWeight: "bold", fontSize: 12 }}>
                Эрүүл мэндийн бүртгэлийн маягт АМ-22К
              </span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              Шинжилгээний хариуны маягт
            </span>
          </div>
          <div style={{ textAlign: "center", marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              Нян судлалын лабораторийн шинжилгээний дүн
            </span>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 20, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td
                  colSpan={9}
                  style={{ ...styles.centerText, ...{ fontWeight: "bold" } }}
                >
                  Шинжилгээний мэдээлэл
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}>
                  Зорилго
                </td>
                <td colSpan={8} style={styles.centerText}>
                  БЗДХ-ын үүсгэгч илрүүлэх
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Төрөл</td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Наац
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}></td>
                <td style={styles.centerText}>Өсгөвөр</td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}></td>
                <td colSpan={3} style={styles.centerText}>
                  Ньюжентийн шалгуур
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Аргачлал
                </td>
                <td style={{ ...styles.centerText, ...{ width: 200 } }}></td>
                <td style={styles.centerText}>Үйлдвэрлэгчийн заавар</td>
                <td style={{ ...styles.centerText, ...{ width: 150 } }}></td>
              </tr>
              <tr>
                <td
                  colSpan={9}
                  style={{ ...styles.centerText, ...{ fontWeight: "bold" } }}
                >
                  Шинжлүүлэгчийн мэдээлэл
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Овог
                </td>
                <td style={styles.centerText}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>Нэр</td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Регистр
                </td>
                <td style={{ ...styles.centerText, ...{ width: 150 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>нас</td>
                <td style={styles.centerText}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  эрэгтэй
                </td>
                <td style={styles.centerText}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  эмэгтэй
                </td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Шинжилгээ өгөлт
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>анх</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={styles.centerText}>давтан</td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}></td>
                <td style={styles.centerText}>Жирэмсэн эсэх</td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  үгүй
                </td>
                <td style={styles.centerText}>тийм</td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Тасаг
                </td>
                <td style={styles.centerText}></td>
                <td style={{ ...styles.centerText, ...{ width: 300 } }}>
                  13 А маягтын дугаар
                </td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 150 } }}>
                  Үзлэгийн төрөл/код
                </td>
                <td style={styles.centerText}></td>
                <td style={{ ...styles.centerText, ...{ width: 150 } }}>
                  Хүн амын бүлэг/код
                </td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  style={{ ...styles.centerText, ...{ fontWeight: "bold" } }}
                >
                  Сорьцын мэдээлэл
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Илгээгч байгууллага
                </td>
                <td style={styles.centerText}></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Хүлээн авсан
                </td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Төрөл
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Ялгадас
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  Бусад
                </td>
                <td style={{ ...styles.centerText, ...{ width: 150 } }}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: "50%" } }}>
                  Сорьцын дугаар
                </td>
                <td style={{ ...styles.centerText, ...{ width: "50%" } }}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Сорьц авсан огноо
                </td>
                <td style={styles.centerText}>20... он...сар ...өдөр</td>
                <td style={{ ...styles.centerText, ...{ width: 150 } }}>
                  Лабораторид сорьц хүлээн авсан огноо
                </td>
                <td style={styles.centerText}>20... он...сар ...өдөр</td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: "20%" } }}>
                  Онош
                </td>
                <td style={{ ...styles.centerText, ...{ width: "80%" } }}></td>
              </tr>
            </tbody>
          </Table>
          <div
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Наацын шинжилгээний дүн:
          </div>
          <Table bordered className="document">
            <tbody>
              <tr>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: "25%" } }}
                >
                  Шинжлэгдэхүүн
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: "25%" } }}
                >
                  Эрэгтэй шээсний сүв
                </td>
                <td
                  colSpan={2}
                  style={{ ...styles.centerText, ...{ width: "50%" } }}
                >
                  Эмэгтэй
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: "25%" } }}>
                  Үтрээнд
                </td>
                <td style={{ ...styles.centerText, ...{ width: "25%" } }}>
                  Умайн хүзүүний суваг
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хучуур эс</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Цагаан эс</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Грам /-/ диплококк</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Трихомонад</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Кокк</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Мөөгний эс</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Савханцар</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Түлхүүр эс</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
            </tbody>
          </Table>
          <div
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Ньюжентийн шалгуур
          </div>
          <Table bordered className="document">
            <tbody>
              <tr>
                <td
                  style={{
                    ...styles.leftText,
                    ...{ width: "50%", fontWeight: "bold" },
                  }}
                >
                  Элементүүд
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: "50%", fontWeight: "bold" },
                  }}
                >
                  Тоо
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Лактобацилл</td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Гарднерелла</td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Мобилункус</td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Нийт дүн</td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хариу</td>
                <td style={styles.leftText}></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default AM22К;
