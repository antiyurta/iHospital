import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-24Б
function AM24Б() {
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
    blankSpaces: {
      fontSize: 10,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 10,
    },
  };
  return (
    <div className="page">
      <div className="subpage">
        <span
          style={{
            ...styles.generalText,
            ...{ textAlign: "right", display: "block" },
          }}
        >
          Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <span style={styles.generalText}>
            Эмнэлгийн нэр ____________________
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={styles.generalText}>
              A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </span>
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              Эрүүл мэндийн бүртгэлийн маягт АМ-24Б
            </span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <span style={styles.generalText}>Эмнэлгийн код:</span>
          <div style={{ display: "flex", marginLeft: 5 }}>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}>
          <span style={{ fontWeight: "bold", fontSize: 16 }}>
            ХЭВЛИЙН ХӨНДИЙН ЭРХТНҮҮДИЙН ХЭТ АВИАН ОНОШИЛГОО
          </span>
        </div>
        <div style={{ ...styles.generalText, ...{ marginLeft: 550 } }}>
          <div>......он.....сар....өдөр</div>
        </div>
        <div style={styles.rowStyle}>
          Эцэг /эх/-ийн нэр _______________________________
          <span style={{ marginLeft: 50 }}>Нас ______Хүйс: /зур/ эр, эм</span>
        </div>
        <div style={styles.rowStyle}>
          Нэр _______________________________
          <span style={{ marginLeft: 50 }}></span>
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}>Элэг:</span> Хэмжээ
          _________________
          <span style={{ fontWeight: "bold" }}> Гадаргуу:</span> тэгш, тэгш бус
          <span style={{ fontWeight: "bold" }}> Бүтэц:</span> _________ жигд,
          жигд бус
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}>Эхо ойлт:</span> ________ хэвийн,
          ихэссэн, багассан,
          <span style={{ fontWeight: "bold" }}> Үүдэн венийн голч:</span>
          ___________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}> Голомтот:</span>өөрчлөлтгүй,
          өөрчлөлттэй
          __________________________________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          ____________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}> Бусад:</span>
          ____________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}> Цөсний хүүдий:</span>
          Байрлал, хэлбэр хэмжээ: _____________
          <span style={{ fontWeight: "bold" }}> Хана:</span>
          хэвийн, зузаарсан, нимгэрсэн ________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}>
            Агууламж, голомтот өөрчлөлт:
          </span>
          цөс, хэвийн, цөс өтгөрсөн, тунадастай, чулуутай, ургацагтай
          ___________
        </div>
        <div style={styles.rowStyle}>
          Цөсний ерөнхий цорго: өргөсөөгүй, өргөссөн голч__________, Бусад
          ____________________________________________
        </div>
        <div style={styles.rowStyle}>
          ____________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}> Нойр булчирхай:</span>
          Хэмжээ____________________,
          <span style={{ fontWeight: "bold" }}> Хүрээ:</span>
          тэгш, тэгш бус, Бүтэц: __________ жиг, жигд бус
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}> Эхо ойлт:</span>
          ________ хэвийн, ихэссэн, багассан,
          <span style={{ fontWeight: "bold" }}> Голомтот:</span>
          өөрчлөлтгүй, өөрчлөлттэй ____________________________________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}> Бусад:</span>
          ____________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}> Дэлүү:</span> Хэмжээ
          __________________________________
          <span style={{ fontWeight: "bold" }}> ДИ/дэлүүний индекс:</span>
          ____________________________
          <span style={{ fontWeight: "bold" }}> Бусад:</span>
          ________________________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}>Бөөр:</span> Баруун-байрлал:
          хэвийн, хэвийн бус,
          <span style={{ fontWeight: "bold" }}> Хэмжээ:</span>
          _________________________________
          <span style={{ fontWeight: "bold" }}> Хүрээ:</span> тэгш, тэгш бус
          __________________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}>АТ:</span> өргөсөөгүй, өргөссөн,
          сийрэгжсэн,
          <span style={{ fontWeight: "bold" }}> Голомтот:</span> өөрчлөлтгүй,
          өөрчлөлттэй __________________________________________________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}>Зүүн-байрлал:</span> хэвийн,
          хэвийн бус, сийрэгжсэн,
          <span style={{ fontWeight: "bold" }}> Хэмжээ:</span>
          _________________
          <span style={{ fontWeight: "bold" }}> Хүрээ:</span> тэгш, тэгш бус,
          <span style={{ fontWeight: "bold" }}> АТ:</span> өргөсөөгүй, өргөссөн,
          сийрэгжсэн
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}>Голомтот:</span>
          өөрчлөлтгүй, өөрчлөлттэй ______________________________________,
          <span style={{ fontWeight: "bold" }}> Бусад:</span>
          ___________________________________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}>Давсаг: </span>
          Хана: _________________________________,
          <span style={{ fontWeight: "bold" }}> Голомтот: </span>
          өөрчлөлтгүй, өөрчлөлттэй
          _______________________________________________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}>Хэвлийн хөндийд:</span>
          сул шингэнгүй, шингэнтэй
          ________________________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold" }}> Бусад:</span>
          ____________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          <span style={{ fontWeight: "bold", marginLeft: "40%" }}>
            Эмчийн нэр_____________________/_______________________
          </span>
        </div>
      </div>
    </div>
  );
}

export default AM24Б;
