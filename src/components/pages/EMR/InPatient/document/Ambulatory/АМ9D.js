import React from "react";

function Mayg1() {
  const styles = {
    generalText: {
      fontSize: 12,
      lineHeight: 1.3,
    },
    blockContentLg: {
      fontSize: 12,
      display: "block",
      width: "100%",
      height: 230,
      fontWeight: "bold",
    },
    blockContentSm: {
      fontSize: 12,
      display: "block",
      width: "100%",
      height: 50,
      fontWeight: "bold",
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
            Эрүүл мэндийн бүртгэлийн маягт АМ-9D
          </span>
        </div>
        <div style={{ textAlign: "center", marginTop: 10, marginBottom: 15 }}>
          <span style={{ fontWeight: "bold", fontSize: 14 }}>
            Уламжлалт эмийн жорын маягт
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "48%" }}
          >
            <div style={{ borderWidth: 1, borderStyle: "solid" }}>
              <div
                style={{
                  textAlign: "center",
                  marginTop: 10,
                  marginBottom: 15,
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: 14 }}>
                  Уламжлалт эмийн жор
                </span>
              </div>
              <div style={{ textAlign: "right", marginRight: 20 }}>
                <span style={{ fontSize: 12 }}>..... оны ....сарын ....</span>
              </div>
              <br />
              <span style={{ fontSize: 12 }}>
                Өвчтөний овог, нэр: ____________________
              </span>
              <br />
              <span style={{ fontSize: 12 }}>Нас:_____ Хүйс:__</span>
              <br />
              <span style={{ fontSize: 12 }}>
                Уламжлалт анагаахын онош:____________
              </span>
              <br />
              <span style={{ fontSize: 12 }}>
                ____________________________________________
              </span>
              <br />
              <br />
            </div>
            <table>
              <thead>
                <tr
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  <td
                    style={{
                      width: "20%",
                      textAlign: "center",
                      fontSize: 12,
                    }}
                  >
                    <span>Эмийн нэр</span>
                  </td>
                  <td
                    style={{
                      width: "20%",
                      textAlign: "center",
                      fontSize: 12,
                    }}
                  >
                    <span>Хэмжээ</span>
                  </td>
                  <td
                    style={{
                      width: "60%",
                      textAlign: "center",
                      fontSize: 12,
                    }}
                  >
                    <span>Эм уух арга</span>
                  </td>
                </tr>
                <tr>
                  <td style={styles.generalText} rowSpan={4}>
                    Rp:
                  </td>
                  <td style={styles.generalText} rowSpan={4}>
                    <span>Тун:</span>
                    <br />
                    <br />
                    <span>Цаг:</span>
                    <br />
                  </td>
                  <td style={styles.generalText}>1. Буцалгаж уух</td>
                </tr>
                <tr>
                  <td style={styles.generalText}>2. Буцалсан усаар уух</td>
                </tr>
                <tr>
                  <td style={styles.generalText}>3. Залгиж уух</td>
                </tr>
                <tr>
                  <td style={styles.generalText}>4. Бүрж уух</td>
                </tr>
                <tr>
                  <td style={styles.generalText} rowSpan={4}>
                    Rp:
                  </td>
                  <td style={styles.generalText} rowSpan={4}>
                    <span>Тун:</span>
                    <br />
                    <br />
                    <span>Цаг:</span>
                    <br />
                  </td>
                  <td style={styles.generalText}>1. Буцалгаж уух</td>
                </tr>
                <tr>
                  <td style={styles.generalText}>2. Буцалсан усаар уух</td>
                </tr>
                <tr>
                  <td style={styles.generalText}>3. Залгиж уух</td>
                </tr>
                <tr>
                  <td style={styles.generalText}>4. Бүрж уух</td>
                </tr>
                <tr>
                  <td style={styles.generalText} rowSpan={4}>
                    Rp:
                  </td>
                  <td style={styles.generalText} rowSpan={4}>
                    <span>Тун:</span>
                    <br />
                    <br />
                    <span>Цаг:</span>
                    <br />
                  </td>
                  <td style={styles.generalText}>1. Буцалгаж уух</td>
                </tr>
                <tr>
                  <td style={styles.generalText}>2. Буцалсан усаар уух</td>
                </tr>
                <tr>
                  <td style={styles.generalText}>3. Залгиж уух</td>
                </tr>
                <tr>
                  <td style={styles.generalText}>4. Бүрж уух</td>
                </tr>
              </thead>
            </table>
            <div style={{ borderWidth: 1, borderStyle: "solid" }}>
              <span style={{ fontSize: 12 }}>
                Эмнэлгийн нэр: _______________________
              </span>
              <br />
              <span style={{ fontSize: 12 }}>
                Эмчийн хувийн тэмдэглэл:_________________
              </span>
              <br />
              <br />
            </div>
            <div style={{ borderWidth: 1, borderStyle: "solid" }}>
              <span style={{ fontSize: 12 }}>
                Хаяг, харилцах утас: __________________________________
              </span>
              <br />
              <span style={{ fontSize: 12 }}>
                ____________________________________________________________
              </span>
              <br />
              <br />
            </div>
          </div>
          <div
            style={{
              width: "48%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span style={{ fontSize: 12 }}>Ар тал</span>
              <span style={{ fontSize: 12, paddingTop: 30 }}>
                Анхаарах зүйл:
              </span>
              <span style={{ fontSize: 12 }}>
                1. Буцалгаж уухдаа 1-2 ширхэг эмийг 200-250мл усанд 3/1-ыг
                ширгэтэл зөөлөн буцалгаж /халуун, бүлээн, хүйтэн/ ууна
              </span>
              <span style={{ fontSize: 12 }}>
                2. Буцалсан усаар бүрж уухдаа 200-250 мл халуун устай аяганд
                эмээ хийж таглаад бүлээсгэж ууна.
              </span>
              <span style={{ fontSize: 12 }}>
                3. Шимт 3 ясны /Далны маяа, борви тойг/, хонины бор махны шөлөөр
                даруулж ууна.
              </span>
              <span style={{ fontSize: 12 }}>
                4. Буцсалсан усанд бурам, зөгийн бал, мөсөн чихрийг найруулж,
                эмийг даруулж ууна.
              </span>
              <span style={{ fontSize: 12 }}>
                5. Эмийн зөвхөн эмчийн зааврын дагуу ууж хэрэглэнэ.
              </span>
              <span style={{ fontSize: 12 }}>
                6. Эм уух явцад сөрөг нөлөө илэрвэл эмчид хандана уу
              </span>
              <span style={{ fontSize: 12 }}>
                7. Энэхүү жор бичигдсанаас хойш 10 хоногийн дотор хүчинтэй.
              </span>
              <span style={{ fontSize: 12 }}>
                8. Жир бичсэн эмийн нэр, тун хэмжээг засварласан тохиолдолд
                хүчингүйд тооцно.
              </span>
              <span style={{ fontSize: 12 }}>
                9. Жорыг дамжуулах, эмийг илүүдэл хэмжээгээр хадгалах нь эмийг
                зүй бусаар хэрэглэх эрсдэлийг нэмэгдүүлж Таны болон бусдын эрүүл
                мэндэд халтай.
              </span>
              <span style={{ fontSize: 12, paddingTop: 35, paddingBottom: 30 }}>
                Гарын үсэг, огноо:_______________________________
              </span>
              <span style={{ fontSize: 12, paddingTop: 10, paddingBottom: 30 }}>
                Гарын үсэг, огноо:
              </span>
            </div>
            <table>
              <thead>
                <tr
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  <td
                    style={{ width: "20%", textAlign: "center", fontSize: 12 }}
                  >
                    <span>Жор хүлээн авсан</span>
                  </td>
                  <td
                    style={{ width: "20%", textAlign: "center", fontSize: 12 }}
                  >
                    <span>Бэлтгэсэн</span>
                  </td>
                  <td
                    style={{ width: "20%", textAlign: "center", fontSize: 12 }}
                  >
                    <span>Шалгасан</span>
                  </td>
                  <td
                    style={{ width: "20%", textAlign: "center", fontSize: 12 }}
                  >
                    <span>Олгосон</span>
                  </td>
                  <td
                    style={{ width: "20%", textAlign: "center", fontSize: 12 }}
                  >
                    <span>Огноо</span>
                  </td>
                </tr>
                <tr style={{ height: 60 }}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mayg1;
