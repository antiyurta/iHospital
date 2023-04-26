import React from "react";

//маягт АМ-13А
//маягт АМ-13Б
function AM_13A_B() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 18,
      height: 18,
      borderColor: "black",
    },
    generalText: {
      fontSize: 12,
      lineHeight: 1.3,
    },
    blankSpaces: {
      fontSize: 10,
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
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              Эрүүл мэндийн бүртгэлийн маягт АМ-13Б
            </span>
          </div>
        </div>
        <span style={styles.generalText}>Бүртгэлийн код</span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 12, marginRight: 5 }}>РД </span>
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 12, marginRight: 5 }}>ЭМД </span>
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
        <div style={{ textAlign: "center", marginTop: 10, marginBottom: 15 }}>
          <span style={{ fontWeight: "bold", fontSize: 14 }}>
            ЭМНЭЛЭГТ ӨВЧТӨН ИЛГЭЭХ ХУУДАС
          </span>
        </div>
        <div style={styles.generalText}>
          1. Эцэг /эх/-ийн нэр ____________________ Нэр ___________________ Нас
          ______ 2. Хүйс /зур/ эр, эм
        </div>
        <div style={styles.generalText}>
          Шилжүүлж буй эмнэлгийн нэр
          _______________________________________________________________
        </div>
        <div style={styles.generalText}>
          3. Тогтмол хаяг:
          ___________________________________________________________________________
        </div>
        <div style={styles.generalText}>
          4. Ажлын газар, албан тушаал:
          ______________________________________________________________
        </div>
        <div style={styles.generalText}>
          5. Шилжүүлж буй эрүүл мэндийн байгууллагад хийгдсэн шинжилгээ (
          <span style={{ fontSize: 10, fontStyle: "italic" }}>
            шинжилгээний гол өөрчлөлтийг бичнэ
          </span>
          )
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            marginTop: 5,
          }}
        >
          <span>ЦЕШ</span>
          <span>
            ____________________________________________________________________________________________________________________________________
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
          }}
        >
          <span>ШЕШ</span>
          <span>
            ____________________________________________________________________________________________________________________________________
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
          }}
        >
          <span>Биохими</span>
          <span>
            ____________________________________________________________________________________________________________________________________
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
          }}
        >
          <span>Рентген</span>
          <span>
            ____________________________________________________________________________________________________________________________________
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
          }}
        >
          <span>Бусад</span>
          <span>
            ____________________________________________________________________________________________________________________________________
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
          }}
        >
          <span></span>
          <span>
            ____________________________________________________________________________________________________________________________________
          </span>
        </div>
        <div
          style={{
            ...styles.generalText,
            ...{
              marginTop: 5,
            },
          }}
        >
          6. Шилжүүлж буй эмнэлэгт хийгдсэн эмчилгээний үр дүн, өвчтөний биеийн
          байдал
        </div>
        <div style={styles.blankSpaces}>
          _____________________________________________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.blankSpaces}>
          _____________________________________________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.blankSpaces}>
          _____________________________________________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.blankSpaces}>
          _____________________________________________________________________________________________________________________________________________________________________________
        </div>
        <div
          style={{
            ...styles.generalText,
            ...{
              marginTop: 5,
            },
          }}
        >
          7. Үндсэн онош (Өвчний олон улсын 10-р ангиллын дагуу дэлгэрэнгүй
          бичнэ.)
        </div>
        <div style={styles.generalText}>
          Онош:
          _______________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.generalText}>
          8. Дараагийн шатлалын эмнэлэгт явуулж буй үндэслэл: (зур) 1. онош
          тодруулах 2. эмчилгээ хийх
        </div>
        <div
          style={{
            ...styles.generalText,
            ...{ display: "flex", marginTop: 5 },
          }}
        >
          <div style={{ width: "40%", textAlign: "center" }}>Тэмдэг</div>
          <div style={{ width: "60%", textAlign: "right", fontSize: 12 }}>
            <span>
              Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
            </span>
          </div>
        </div>
        <div
          style={{
            ...styles.generalText,
            ...{ display: "flex" },
          }}
        >
          <div style={{ width: "40%", textAlign: "right" }}>Эмчлэгч эмч</div>
          <div style={{ width: "60%", textAlign: "right" }}>
            <span>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
          </div>
        </div>
        <div style={{ ...styles.generalText, ...{ textAlign: "right" } }}>
          _________он______ сар_____ өдөр
        </div>
        <div style={styles.generalText}>
          ....................................................................................................................................................................................................................................................................................
        </div>
        <div style={{ ...styles.generalText, ...{ textAlign: "right" } }}>
          Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
        </div>
        <div style={{ ...styles.generalText, ...{ textAlign: "right" } }}>
          A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
        </div>
        <div
          style={{
            ...styles.generalText,
            ...{ textAlign: "right", fontWeight: "bold" },
          }}
        >
          Эрүүл мэндийн бүртгэлийн маягт АМ-13Б
        </div>
        <span style={styles.generalText}>Бүртгэлийн код</span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 14, marginRight: 5 }}>РД </span>
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 14, marginRight: 5 }}>ЭМД </span>
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
        <div style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}>
          <span style={{ fontWeight: "bold", fontSize: 14 }}>
            ЭМНЭЛЭГТ ӨВЧТӨН ИЛГЭЭХ ХУУДАС
          </span>
        </div>
        <div style={styles.generalText}>
          1. Эцэг /эх/-ийн нэр ____________________ Нэр ___________________ Нас
          ______ 2. Хүйс /зур/ эр, эм
        </div>
        <div style={styles.generalText}>
          Эмчилгээ оношлогоо хийлгэсэн эмнэлгийн нэр
          __________________________________________________________________________________________
        </div>
        <div style={styles.generalText}>
          Онош:
          _______________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.blankSpaces}>
          ___________________________________________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.generalText}>Хийгдсэн эмчилгээ:</div>
        <div style={{ ...styles.blankSpaces, ...{ marginLeft: 60 } }}>1</div>
        <div style={{ ...styles.blankSpaces, ...{ marginLeft: 60 } }}>2</div>
        <div style={{ ...styles.blankSpaces, ...{ marginLeft: 60 } }}>3</div>
        <div style={{ ...styles.blankSpaces, ...{ marginLeft: 60 } }}>4</div>
        <div style={styles.generalText}>
          Эмнэлгээс гарах үеийн биеийн байдал:
          ___________________________________________________________________________________________________
        </div>
        <div style={styles.blankSpaces}>
          ____________________________________________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.blankSpaces}>
          ____________________________________________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.blankSpaces}>
          ____________________________________________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.generalText}>Өвчтөнд өгсөн зөвлөгөө</div>
        <div style={styles.generalText}>
          Эмийн эмчилгээ
          ____________________________________________________________________________________________________________________________
        </div>
        <div style={styles.blankSpaces}>
          _____________________________________________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.generalText}>
          Эмийн бус эмчилгээ
          ________________________________________________________________________________________________________________________
        </div>
        <div style={styles.blankSpaces}>
          _____________________________________________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.generalText}>
          Хүлээн авч буй эрүүл мэндийн байгууллагад өгөх зөвлөмж:
        </div>
        <div style={styles.blankSpaces}>
          _____________________________________________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.blankSpaces}>
          _____________________________________________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.blankSpaces}>
          _____________________________________________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.generalText}>
          Шилжүүлж буй эмчийн нэр Хувийн тамга:
        </div>
        <div
          style={{
            ...styles.generalText,
            ...{ textAlign: "right", paddingRight: 40 },
          }}
        >
          _______ он _____ сар _____ өдөр
        </div>
      </div>
    </div>
  );
}

export default AM_13A_B;
