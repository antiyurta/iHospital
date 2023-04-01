import React from "react";

//маягт АМ-21Г
function AM21D() {
  const styles = {
    generalText: {
      fontSize: 10,
    },
    rowStyle: {
      fontSize: 10,
    },
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 18,
      height: 18,
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
              <span style={{ fontWeight: "bold", fontSize: 10 }}>АМ-21Г</span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              Шинжилгээнд явуулах бичиг
            </span>
          </div>
          <span style={{ fontSize: 10 }}>Кабинетийн №____________</span>
          <div style={styles.rowStyle}>
            _____________овогтой________________нэр
          </div>
          <div style={styles.rowStyle}>Нас__________Хүйс: /зур/ эр, эм</div>

          <div style={styles.rowStyle}>
            <div style={{ display: "flex" }}>
              <span style={{ marginRight: 5 }}>РД </span>
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
          <div style={styles.rowStyle}>
            Онош__________________________________
          </div>
          <div style={styles.rowStyle}>
            1.Цусны ариун чанар \ бактер судлах\
          </div>
          <div style={styles.rowStyle}>2.Өтгөн \ бактер судлах\</div>
          <div style={styles.rowStyle}>
            3.Шээс \ бичил харах, бактер судлах\
          </div>
          <div style={styles.rowStyle}>4.Цэр бичил харах, бактер судлах\</div>
          <div style={styles.rowStyle}>5.Шархны идээр \бактер судлах\</div>
          <div style={styles.rowStyle}>6.Нүдний арчдас \бактер судлах\</div>
          <div style={styles.rowStyle}>
            7.Хамар, залгиурын арчдас \бактер суплах\
          </div>
          <div style={styles.rowStyle}>8.Хамрын арчдас \бактер судлах\</div>
          <div style={styles.rowStyle}>
            9.Үтрээний арчдас \бичил харах, бактер судлах\
          </div>
          <div style={styles.rowStyle}>
            10.Амны хөндийн арчдас \бактер судлах\
          </div>
          <div style={styles.rowStyle}>
            11.Плеврийн шингэн \ бичил харах, бактер судлах\
          </div>
          <div style={styles.rowStyle}>
            12.Үений шингэн \ бичил харах, бактер судлах\
          </div>
          <div style={styles.rowStyle}>
            13.Хэвлий хөндийн шингэн \ бичил харах, бактер судлах\
          </div>
          <div style={styles.rowStyle}>14.Чихний арчдас \бактер судлах\</div>
          <div style={styles.rowStyle}>15.Цөс \бактер судлах\</div>
          <div style={styles.rowStyle}>16.Хүйн арчдас \бактер судлах\</div>
          <div style={styles.rowStyle}>
            17.Задлангийн мат \ бичил харах, бактер судлах\
          </div>
          <div style={styles.rowStyle}>
            18.Шимэгч хорхой илрүүлэх \бактер судлах\
          </div>
          <div style={styles.rowStyle}>
            19.Дисбактериоз \ам, арьс, гэдэсний хэвийн няи \бактер судлах\
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 10 },
            }}
          >
            <span style={{ marginLeft: 30 }}>
              Эмч: _____________________/гарын үсэг/
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
          <div style={styles.rowStyle}>1. Цэрний шинжилгээ авах</div>
          <div style={styles.rowStyle}>
            Цэрний сорьцыг өглөөгүүр өвчтөнг олон байхад амны хөндийг зайлуулж
            /ус, содын уусмалаар/ цэвэрлэгээ, ханиалгаар эхний ялгарах цэрийг
            орхин дараагийн ялгарлаас 2мл-ээс багагүй шилэн саванд авч
            лабораторид хүргэнэ.
          </div>
          <div style={styles.rowStyle}>2. Шээсний шинжилгээ авах</div>
          <div style={styles.rowStyle}>
            Шээсний сорьц авахдаа өглөөний шээсний дунд хэсгээс ариун шилэн
            саванд 30 мл-ээс багагүй хэмжээтэй авах ба урьдчилан гадна бэлэг
            эрхтэнийг усаар угаасан байвал зохино.
          </div>
          <div style={styles.rowStyle}>3. Өтгөний шинжилгээ авах</div>
          <div style={styles.rowStyle}>
            Өтгөний сорьцыг аль болох өнгөр, залхаг, цус, салстай хэсгээс ариун
            модон савхаар 1 гр-аас багагүй авч шилэн саванд хадгална.
          </div>
          <div style={styles.rowStyle}>
            Урьдчилан хөтөвчийг 1% хлорамины уусмалаар халдваргүйжүүлж дахин ус
            хийж 30 минут буцалгах ба 2-3 удаа буцалсан усаар зайлж
            халдваргүйжүүлэж бодисын үлдэгдлийг арилгана.
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

export default AM21D;
