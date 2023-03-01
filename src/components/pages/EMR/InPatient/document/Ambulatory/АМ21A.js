import React from "react";

//маягт АМ-21A
function AM21A() {
  const styles = {
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 10,
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
              <span style={{ fontWeight: "bold", fontSize: 12 }}>АМ-21А</span>
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
            Шээсний шинжилгээ
          </div>
          <div style={styles.rowStyle}>1. Шээсний ерөнхий шинжилгээ</div>
          <div style={styles.rowStyle}>2. Амбуржийн сорил</div>
          <div style={styles.rowStyle}>3. Зимницкийн сорил</div>
          <div style={styles.rowStyle}>4. Ничепоренкогийн сорил</div>
          <div style={styles.rowStyle}>5. Аддис-каковскийн сорил</div>
          <div style={styles.rowStyle}>6__________________________________</div>
          <div style={styles.rowStyle}>
            Эмчийн нэр
            <span style={{ marginLeft: 30 }}>
              /................................./
            </span>
          </div>
          <div style={styles.rowStyle}>20___оны_______сарын________өдөр</div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ display: "flex", flexDirection: "column" },
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
            1. Маш сайн угааж цэвэрлэж хатаасан, өргөн амтай, шилэндээ тохирсон
            таглаатай, бараан биш шилэнд өглөөний өлөн үед авсан шээсийг
            хөөсрүүлж сэгсрэхгүй авчирна.
          </div>
          <div style={styles.rowStyle}>
            2. Шээсний ерөнхий шинжилгээ өгөхийн өмнө бэлэг эрхтэнээ сайтар
            угаасны дараа тусгай бэлдсэн шилэндээ шээснийхээ дунд хэсгээс
            100-200 мл шээс авна.
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

export default AM21A;
