import React from "react";

//маягт АМ-13В
function AM_13V() {
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
      marginTop: 5,
    },
    blankSpaces: {
      fontSize: 10,
    },
    leftText: {
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      paddingLeft: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
    },
  };
  return (
    <>
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
            <span style={styles.generalText}></span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={styles.generalText}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span style={{ fontWeight: "bold", fontSize: 12 }}>
                Эрүүл мэндийн бүртгэлийн маягт АМ-13В
              </span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 10, marginBottom: 15 }}>
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              ЭМНЭЛЭГТ ИРГЭНИЙГ ИЛГЭЭХ ЦАХИМ БҮРТГЭЛИЙН МАЯГТ
            </span>
          </div>
          <div style={styles.leftText}>
            <b>Паспортын хэсэг</b>
          </div>
          <div style={styles.generalText}>
            1. Эцэг /эх/-ийн нэр ________________________ Нэр
            _______________________ Нас __________
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
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
            <div style={{ display: "flex" }}>
              <span style={{ fontSize: 12, marginRight: 5 }}>Цахим № </span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div style={{ height: 30 }}></div>
          <div style={styles.generalText}>
            2.Хүйс (сонго)
            <span style={{ marginLeft: 30 }}>1. эрэгтэй 2. эмэгтэй</span>
          </div>
          <div style={styles.generalText}>
            3. Иргэний
            <span style={{ marginLeft: 50 }}>утас____________</span>
            <span style={{ marginLeft: 30 }}>гар утас_____________</span>
            <span style={{ marginLeft: 30 }}>цахим хаяг ____________</span>
          </div>
          <div style={styles.generalText}>
            4.Иргэний (асран хамгаалагчийн) утас______________ гар
            утас_______________цахим хаяг ______________
          </div>
          <div style={styles.generalText}>
            5. Иргэний гэрийн /тогтмол/ хаяг:
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <div style={styles.generalText}>
              <b>“Илгээх” хэсэг</b>
            </div>
          </div>
          <div style={styles.generalText}>
            6.Илгээж байгаа байгууллагын нэр
            (сонго)................................код /автоматаар гарч ирнэ/
          </div>
          <div style={styles.generalText}>
            7.Илгээсэн
            ..............он......сар..............өдөр..........цаг..........минут
          </div>
          <div style={styles.generalText}>
            8.Эмчлэгч эмчийн нэр
            .............................................хувийн дугаар
            ........................
          </div>
          <div style={styles.generalText}>
            9.Хүлээн авах байгууллагын нэр
            (сонго).........................................................
          </div>
          <div style={styles.generalText}>
            10.Иргэнийг илгээж байгаа шалтгаан (сонго)
          </div>
          <div style={{ marginLeft: 100 }}>
            <div style={styles.generalText}>- Онош тодруулах /сонго/</div>
            <div style={styles.generalText}>
              - Урьдчилан сэргийлэх үзлэг /сонго/
            </div>
            <div style={styles.generalText}>- Эмчилгээ /сонго/</div>
            <div style={styles.generalText}>
              - Эмчилгээний дараах хяналт /сонго/
            </div>
            <div style={styles.generalText}>
              - Жирэмсний болон төрөх үеийн тусламж, үйлчилгээ
            </div>
            <div style={styles.generalText}>- Хөнгөвчлөх эмчилгээ</div>
            <div style={styles.generalText}>
              - Сэргээн засах тусламж, үйлчилгээ
            </div>
            <div style={styles.generalText}>
              - Сувилахуйн тусламж, үйлчилгээ
            </div>
            <div style={styles.generalText}>- Давтан хяналт</div>
            <div style={styles.generalText}>- Бусад: /тодорхой бичих/</div>
          </div>
          <div style={styles.generalText}>
            11.Үндсэн онош (Өвчний олон улсын 10-р ангиллын дагуу дэлгэрэнгүй
            бичнэ) ____________/сонго/
          </div>
          <div style={{ marginLeft: 100 }}>
            <div style={styles.generalText}>
              Хавсарсан онош /сонго/
              _______________________________________________________
            </div>
            <div style={styles.generalText}>
              Хавсарсан онош /сонго/
              _______________________________________________________
            </div>
            <div style={styles.generalText}>
              Хавсарсан онош /сонго/
              _______________________________________________________
            </div>
            <div style={styles.generalText}>
              Хавсарсан онош /сонго/
              _______________________________________________________
            </div>
            <div style={styles.generalText}>
              Хавсарсан онош /сонго/
              _______________________________________________________
            </div>
            <div style={styles.generalText}>
              Тайлбар /бичих/_________________________________________________
            </div>
          </div>
          <div style={styles.generalText}>
            12. Шилжүүлэх болсон шалтгааныг үндэслэх шинжилгээ (програмын
            өгөгдлийг бөглөнө)
          </div>
          <div style={styles.generalText}>
            ЦЕШ_/сонгох/___________________________________________________________________________________________
          </div>
          <div style={styles.generalText}>
            Биохими_/сонгох/______________________________________________________________________________________
          </div>
          <div style={styles.generalText}>
            ШЕШ_/сонгох/__________________________________________________________________________________________
          </div>
        </div>
      </div>

      <div className="page">
        <div className="subpage">
          <div style={styles.generalText}>Рентген _/эмчийн хариуг бичих/</div>
          <div style={styles.generalText}>
            _______________________________________________________________________________________________________
          </div>
          <div style={styles.generalText}>
            Бусад /MRI, KTG/_/эмчийн хариуг бичих/
            _______________________________________________________________
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <div style={styles.generalText}>
              <b>“Цаг товлох” хэсэг</b>
            </div>
          </div>
          <div style={styles.generalText}>
            13. Хүлээн авах эсэх шийдвэр (сонго) 1.тийм 2.үгүй
          </div>
          <div style={styles.generalText}>
            14.Хэрэв тийм бол үзлэгийн кабинетын нэр
            ........................тасгийн нэр /сонго/ .................
          </div>
          <div style={styles.generalText}>
            15.Хэрэв үгүй бол тайлбар, үндэслэл (сонго)
          </div>
          <div style={{ marginLeft: 50 }}>
            <div style={styles.generalText}>
              - тухайн эмнэлэгт тусламж, үйлчилгээ авах боломжгүй
            </div>
            <div style={styles.generalText}>- бусад /бичих/</div>
          </div>
          <div style={styles.generalText}>
            16. Шийдвэр гаргасан
            ................он......сар..............өдөр…........цаг….........минут
          </div>
          <div style={styles.generalText}>
            17.Товлосон
            ............сар.................өдөр...................цаг
            ................
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <div style={styles.generalText}>
              <b>“Хүлээн авах” хэсэг</b>
            </div>
          </div>
          <div style={styles.generalText}>
            18. Хүлээн авсан
            сар.........................өдөр...........................цаг
            ...................Хүлээн авах эмчийн нэр...........................
          </div>
          <div style={styles.generalText}>
            19. Хүлээн авсан: Үндсэн онош (Өвчний олон улсын 10-р ангиллын дагуу
            дэлгэрэнгүй бичнэ)
          </div>
          <div style={styles.generalText}>___Хавсарсан онош</div>
          <div style={styles.generalText}>
            /сонго/___________________________________________________________________________________
          </div>
          <div style={styles.generalText}>Хавсарсан онош</div>
          <div style={styles.generalText}>
            /сонго/___________________________________________________________________________________
          </div>
          <div style={styles.generalText}>
            20. Эмчлүүлсэн: Үндсэн онош (Өвчний олон улсын 10-р ангиллын дагуу
            дэлгэрэнгүй бичнэ)
          </div>
          <div style={styles.generalText}> ___Хавсарсан онош</div>
          <div style={styles.generalText}>
            /сонго/___________________________________________________________________________________
          </div>
          <div style={styles.generalText}>
            21.Эмнэлэгт хэвтсэн ор хоног /сонго/
          </div>
          <div style={styles.generalText}>
            ___________________________________________________________________________________
          </div>
          <div style={styles.generalText}>22.Эмнэлгээс гарсан огноо, цаг</div>
          <div style={styles.generalText}>
            (сонго)____________________________________________________________
          </div>
          <div style={styles.generalText}>23.Эмнэлгээс гарах үеийн дүгнэлт</div>
          <div style={styles.generalText}>
            (эпикриз)_/бичих/___________________________________________________
          </div>
          <div style={styles.generalText}>
            24.Эмчлэгч эмчийн нэр..................................утасны
            дугаар................................, цахим
            хаяг..........................................
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <div style={styles.generalText}>
              <b>“Эргэх холбоо тогтоох” хэсэг</b>
            </div>
          </div>
          <div style={styles.generalText}>
            25. Илгээсэн байгууллагад өгөх зөвлөмж /бичих/
          </div>
          <div style={styles.generalText}>
            26. Зөвлөмжийг хүлээн авсан огноо
            <span style={{ marginLeft: 40 }}>
              ......он…….сар.......өдөр….....цаг…......минут
            </span>
          </div>
          <div style={styles.generalText}>
            27. Иргэнийг хяналтад авсан эсэх (сонго)
            <span style={{ marginLeft: 20 }}>1.тийм 2. үгүй</span>
          </div>
          <div style={styles.generalText}>
            28. Иргэнийг хяналтад авсан эмчийн нэр ..........................
            утас .......................цахим хаяг .........................
          </div>
        </div>
      </div>
    </>
  );
}

export default AM_13V;
