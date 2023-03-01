import React from "react";

//маягт АМ-21Б
function AM21B() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 18,
      height: 18,
    },
    generalText: {
      fontSize: 12,
    },
    generalTextBold: {
      fontSize: 18,
      fontWeight: "bold",
    },
    boldTitle: {
      fontWeight: "bold",
      fontSize: 16,
    },
    blankSpaces: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 10,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 4,
      rotate: "180deg",
      lineHeight: 1,
      fontSize: 12,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      lineHeight: 1.3,
    },
  };
  return (
    <>
      <div className="pageA5">
        <div className="subpageA5">
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
            <div>
              <span
                style={{
                  ...styles.generalText,
                  ...{ float: "left" },
                }}
              >
                Эмнэлгийн нэр: ____________________
              </span>
              <span style={{ fontWeight: "bold", fontSize: 12 }}>АМ-21Б</span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 10, marginBottom: 15 }}>
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              Шинжилгээнд явуулах бичиг
            </span>
          </div>
          <span style={{ fontSize: 12 }}>Кабинетийн №____________</span>
          <div style={styles.rowStyle}>
            _____________овогтой________________нэр
          </div>
          <div style={styles.rowStyle}>Нас__________Хүйс: /зур/ эр, эм</div>
          <div style={styles.rowStyle}>
            Онош__________________________________
          </div>
          <div style={{ ...styles.rowStyle, ...{ textAlign: "center" } }}>
            Cудасны цусны шинжилгээ
          </div>
          <div style={styles.rowStyle}>
            1. Элэгний үйл ажиллагаа (АЛАТ, АСАТ, Билирубин, тимол, сульма)
          </div>
          <div style={styles.rowStyle}>
            2. Бөөрний үйл ажиллагаа (мочевин, креатинин, үлдэгдэл азот)
          </div>
          <div style={styles.rowStyle}>
            3. Микроэлементүүд (Na, K, CL, Ca, Fe, Mg, P)
          </div>
          <div style={styles.rowStyle}>
            4. Бусад (сахар, уураг, альбумин, холестерин, липид)
          </div>
          <div style={styles.rowStyle}>
            5. Өвөрмөц /АСЛО, РФ, C реак-уураг, ЛЕ эс/
          </div>
          <div style={styles.rowStyle}>6. Иммуны шинжилгээ /LgA, LgM, LgG/</div>
          <div style={styles.rowStyle}>7. Альфа амилаза</div>
          <div style={styles.rowStyle}>8. Фермент /КК, ГГТ, ШФ, КФ, ЛДГ/</div>
          <div style={styles.rowStyle}>
            9. Коагулограмм /РТ, ТТ, АРТВ, Фибриноген/
          </div>
          <div style={styles.rowStyle}>10. Хеликобактери /H pylori/</div>

          <div style={styles.rowStyle}>11. Серологи /RPR/</div>
          <div style={styles.rowStyle}>12. Бусад_______________</div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 10 },
            }}
          >
            Эмчийн нэр
            <span style={{ marginLeft: 30 }}>
              /................................./
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 10 },
            }}
          >
            20___оны_______сарын________өдөр
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 10 },
            }}
          >
            Ар тал
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ textAlign: "center" },
            }}
          >
            Зөвлөмж
          </div>
          <div style={styles.rowStyle}>
            1. Судасны цусны шинжилгээ өгөхдөө урьд орой нь өөх тостой, шарсан
            хуурсан хоол, архи, тамхи хэрэглэж болохгүй.
          </div>
          <div style={styles.rowStyle}>2. Өглөө нь өлөн байвал сайн.</div>
          <div style={styles.rowStyle}>
            3. Тухайн шинжилгээний өмнө рентген, эхо, дурангийн шинжилгээг хийж
            болохгүй.
          </div>
          <div style={styles.rowStyle}>
            4. Шинжлүүлэгч сэтгэл санаа тайван, даарч ядраагүй, эм тариа
            хэрэглэхгүй байх.
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ textAlign: "center" },
            }}
          >
            Танд баярлалаа
          </div>
        </div>
      </div>
    </>
  );
}

export default AM21B;
