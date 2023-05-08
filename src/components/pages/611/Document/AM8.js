import React from "react";

//маягт АМ-8
function AM8() {
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
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: 10,
      marginBottom: 10,
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
              Эрүүл мэндийн бүртгэлийн маягт АМ-8
            </span>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}>
          <span style={{ fontWeight: "bold", fontSize: 16 }}>
            ЭМНЭЛГИЙН МАГАДЛАГАА
          </span>
        </div>
        <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
          <div style={{ display: "flex", marginTop: 5 }}>
            <span style={styles.generalText}>ЭМД:</span>
            <div style={{ display: "flex", marginLeft: 5 }}>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: 5 }}>
            <span style={styles.generalText}>РД:</span>
            <div style={{ display: "flex", marginLeft: 15 }}>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
        </div>
        <div style={styles.rowStyle}>
          1. Эцэг /эх/-ийн
          нэр_________________________Нэр________________________2. Хүйс:(зур)
          эрэгтэй, эмэгтэй
        </div>
        <div style={styles.rowStyle}>
          3. Нас________________4. Өвчний түүх (ИЭМД)-ийн
          дугаар__________________________________
        </div>
        <div style={styles.rowStyle}>
          5. Тогтмол
          хаяг____________________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          6. Ажлын газар, албан
          тушаал__________________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          7.
          Мэргэжил______________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          8. (зур) өвчтэй байсан, өвчтөн асрамжилсан, хөл хоригдсон, эмчид
          үзүүлсэн, шинжилгээ, ариутгал эмчилгээ, протез
          хийлгэсэн________оны_____сарын____өдрөөс______оны____сарын____өдөр
          хүртэл (зур) ажлаас, хичээлээс) чөлөөлснийг магадлав.
        </div>
        <div style={styles.rowStyle}>
          9. Асрамжинд байсан хүний эцэг /эх/-ийн нэр, хэн
          болох____________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          ___________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          10. Үндсэн
          онош___________________________________________________________________
        </div>
        <div style={styles.flexContainer}>
          <div style={styles.rowStyle}>
            Тэмдэг ________он_______сар________өдөр
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={styles.rowStyle}>
              Ерөнхий эмч________________________
            </div>
            <div style={styles.rowStyle}>
              Эмчлэгч эмч_______________________
            </div>
          </div>
        </div>
        <div style={styles.rowStyle}>
          ___________________________________________________________________________________________________________________________________
        </div>
        <div style={{ ...styles.rowStyle, ...{ fontWeight: "bold" } }}>
          Маягтын ар тал
        </div>
        <div style={{ ...styles.rowStyle, ...{ fontWeight: "bold" } }}>
          СУНГАЛТ
        </div>
        <div style={styles.rowStyle}>
          1.
          ______оны__________сарын____________өдрөөс________оны__________сарын________өдөр
          хүртэл нийт _______хоногоор сунгав
        </div>
        <div style={styles.flexContainer}>
          <div style={styles.rowStyle}>Тэмдэг</div>
          <div style={styles.rowStyle}>
            Эмчийн гарын үсэг___________________________________
          </div>
        </div>
        <div style={styles.rowStyle}>
          2.
          ______оны__________сарын____________өдрөөс________оны__________сарын________өдөр
          хүртэл нийт _______хоногоор сунгав
        </div>
        <div style={styles.flexContainer}>
          <div style={styles.rowStyle}>Тэмдэг</div>
          <div style={styles.rowStyle}>
            Эмчийн гарын үсэг___________________________________
          </div>
        </div>
        <div style={styles.rowStyle}>
          3.
          ______оны__________сарын____________өдрөөс________оны__________сарын________өдөр
          хүртэл нийт _______хоногоор сунгав
        </div>
        <div style={styles.flexContainer}>
          <div style={styles.rowStyle}>Тэмдэг</div>
          <div style={styles.rowStyle}>
            Эмчийн гарын үсэг___________________________________
          </div>
        </div>
        <div style={styles.rowStyle}>Тайлбар: Маягтыг эмчлэгч эмч олгоно.</div>
      </div>
    </div>
  );
}

export default AM8;
