import React from 'react';
function AM13B() {
   const styles = {
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 18,
         height: 18,
         borderColor: 'black'
      },
      generalText: {
         fontSize: 12,
         lineHeight: 1.3
      },
      blankSpaces: {
         fontSize: 10
      }
   };
   return (
      <div className="page">
         <div className="subpage">
            <div style={{ ...styles.generalText, ...{ textAlign: 'right' } }}>
               Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
            </div>
            <div style={{ ...styles.generalText, ...{ textAlign: 'right' } }}>
               A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </div>
            <div
               style={{
                  ...styles.generalText,
                  ...{ textAlign: 'right', fontWeight: 'bold' }
               }}
            >
               Эрүүл мэндийн бүртгэлийн маягт АМ-13Б
            </div>
            <span style={styles.generalText}>Бүртгэлийн код</span>
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
               }}
            >
               <div style={{ display: 'flex' }}>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
               </div>
               <div style={{ display: 'flex', alignItems: 'center' }}>
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
               <div style={{ display: 'flex', alignItems: 'center' }}>
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
            <div style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
               <span style={{ fontWeight: 'bold', fontSize: 14 }}>ЭМНЭЛЭГТ ӨВЧТӨН ИЛГЭЭХ ХУУДАС</span>
            </div>
            <div style={styles.generalText}>
               1. Эцэг /эх/-ийн нэр ____________________ Нэр ___________________ Нас ______ 2. Хүйс /зур/ эр, эм
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
            <div style={styles.generalText}>Хүлээн авч буй эрүүл мэндийн байгууллагад өгөх зөвлөмж:</div>
            <div style={styles.blankSpaces}>
               _____________________________________________________________________________________________________________________________________________________________________________
            </div>
            <div style={styles.blankSpaces}>
               _____________________________________________________________________________________________________________________________________________________________________________
            </div>
            <div style={styles.blankSpaces}>
               _____________________________________________________________________________________________________________________________________________________________________________
            </div>
            <div style={styles.generalText}>Шилжүүлж буй эмчийн нэр Хувийн тамга:</div>
            <div
               style={{
                  ...styles.generalText,
                  ...{ textAlign: 'right', paddingRight: 40 }
               }}
            >
               _______ он _____ сар _____ өдөр
            </div>
         </div>
      </div>
   );
}
export default AM13B;
