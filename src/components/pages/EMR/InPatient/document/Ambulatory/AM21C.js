import React from "react";

//маягт АМ-21В
function AM21C() {
  const styles = {
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
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
              <span style={{ fontWeight: "bold", fontSize: 12 }}>АМ-21В</span>
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
            Өндөгний цусны шинжилгээ
          </div>
          <div style={styles.rowStyle}>
            1. Ерөнхий шинжилгээ (Лейкоцит, Гемоглобин, СОЭ, Лейкограмм)
          </div>
          <div style={styles.rowStyle}>
            2. Дэлгэрэнгүй (ЦЕШ+Эритроцит, Тромбоцит, Гематокрит)
          </div>
          <div style={styles.rowStyle}>3. Цусны урсалт, гоожилт</div>
          <div style={styles.rowStyle}>4. _______________________________</div>
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
            _______оны_______сарын________өдөр
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
            1. Судасны цусны шинжилгээ өгөхдөө урьд орой нь
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

export default AM21C;
