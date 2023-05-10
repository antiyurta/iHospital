import React from 'react';
import { Table } from 'react-bootstrap';
// import am34 from "./AM34.PNG";

//маягт АМ-34
function AM34() {
   const styles = {
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 18,
         height: 18
      },
      generalText: {
         fontSize: 12
      },
      rowStyle: {
         fontSize: 12,
         marginTop: 10
      },
      leftText: {
         verticalAlign: 'middle',
         fontSize: 12,
         padding: 0,
         paddingLeft: 5
      },
      centerText: {
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 12,
         padding: 0
      },
      flexContainer: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center'
      },
      centerBold: {
         fontWeight: 'bold',
         textAlign: 'center',
         fontSize: 12,
         marginTop: 10
      },
      centerBoldUnderline: {
         fontWeight: 'bold',
         textAlign: 'center',
         fontSize: 12,
         marginTop: 10,
         textDecoration: 'underline'
      },
      leftBold: {
         fontWeight: 'bold',
         fontSize: 12,
         marginTop: 10,
         textDecoration: 'underline'
      }
   };
   return (
      <>
         <div className="page">
            <div className="subpage">
               <span
                  style={{
                     ...styles.generalText,
                     ...{ textAlign: 'right', display: 'block' }
                  }}
               >
                  Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
               </span>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     justifyContent: 'flex-end'
                  }}
               >
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'right'
                     }}
                  >
                     <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                     <span style={{ fontWeight: 'bold', fontSize: 14 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-34</span>
                  </div>
               </div>

               <div
                  style={{
                     textAlign: 'center',
                     marginTop: 15,
                     marginBottom: 15
                  }}
               >
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>
                     ХӨДӨЛГӨӨН ЗАСАЛ ЭМЧИЛГЭЭНИЙ ҮНЭЛГЭЭНИЙ ХУУДАС
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  Эцэг /эх/-ийн нэр:______________________________________________ Нас: ______
                  <span style={{ marginLeft: 50 }}>Хүйс: Эрэгтэй, Эмэгтэй /зур</span>
               </div>
               <div style={styles.rowStyle}>
                  Гэрийн хаяг:
                  __________________________________________________________________________________________________________________________
               </div>
               <div style={styles.rowStyle}>
                  Амьдралын
                  нөхцөл:__________________________________________________________________________________________________________________
               </div>
               <div style={styles.rowStyle}>
                  Ажил эрхлэлт, ажлын нөхцөл:
                  _______________________________________________________________________________________________________
               </div>
               <div style={styles.rowStyle}>
                  Зовуурь:
                  ______________________________________________________________________________________________________________________________
               </div>
               <div style={styles.rowStyle}>
                  Өвчин эхэлсэн шалтгаан:
                  ____________________________________________________________________________________________________________
               </div>
               <div style={styles.rowStyle}>
                  Шинжилгээний дүгнэлт /MRI, CP,
                  X-Ray/:____________________________________________________________________________________________
               </div>
               <div style={styles.rowStyle}>
                  Үндсэн онош (ICD-10): __________________________________________
                  <span style={{ marginLeft: 50 }}>РТ/онош (ICF): ___________________________________________</span>
               </div>
               <div style={styles.rowStyle}>
                  Өвчин эхэлсэн:__________он________сар_____өдөр
                  <span style={{ marginLeft: 100 }}>Эмнэлэгт хэвтсэн: ________он ______сар____өдөр</span>
               </div>
               <div style={styles.rowStyle}>
                  Үнэлгээ хийсэн: ________он _______сар ______өдөр
                  <span style={{ marginLeft: 100 }}>ХЗЭ дууссан: __________он_______сар______өдөр</span>
               </div>
               <div style={styles.rowStyle}>Эмнэлгээс гарсан: ............он............сар..........өдөр</div>
               <div style={styles.centerBoldUnderline}>
                  /Өвдөлтийн үнэлгээ-ЭӨ/ ______________________________________ /Өвдөлтийн үнэлгээ-ЭД/
               </div>
               <div style={styles.centerBold}>
                  0 1 2 3 4 5 6 7 8 9 10
                  <span style={{ marginLeft: 200 }}>0 1 2 3 4 5 6 7 8 9 10</span>
               </div>
               <div style={styles.flexContainer}>
                  <div>
                     <div style={styles.rowStyle}>
                        <span>0-өвдөлтгүй</span>
                     </div>
                     <div style={styles.generalText}>
                        <span>1-2 маш бага өвдөлт</span>
                     </div>
                     <div style={styles.generalText}>
                        <span>3-4 бага өвдөлт</span>
                     </div>
                     <div style={styles.generalText}>
                        <span>5-6 дунд зэргийн өвдөлт</span>
                     </div>
                     <div style={styles.generalText}>
                        <span>7-8 их өвдөлт</span>
                     </div>
                     <div style={styles.generalText}>
                        <span>9-10 маш их өвдөлт</span>
                     </div>
                  </div>
                  <img src={am34} width={250} alt="34" />
               </div>
               <div style={styles.leftBold}>Өдөр тутмын үйл ажиллагааны чадвар /Modified Barthel Index/</div>
               <Table bordered className="document" style={{ marginTop: 10 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 200 } }}></td>
                        <td style={styles.centerText}>Гүйцэтгэж чадахгүй</td>

                        <td style={styles.centerText}>Нилээд тусламжтай</td>
                        <td style={styles.centerText}>Дунд зэргийн тусламжтай</td>
                        <td style={styles.centerText}>Бага зэргийн тусламжтай</td>
                        <td style={styles.centerText}>Бүрэн бие даасан</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хувийн ариун цэвэр </td>
                        <td style={styles.centerText}>0</td>
                        <td style={styles.centerText}>1</td>
                        <td style={styles.centerText}>3</td>
                        <td style={styles.centerText}>4</td>
                        <td style={styles.centerText}>5</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Усанд орох</td>
                        <td style={styles.centerText}>0</td>
                        <td style={styles.centerText}>1</td>
                        <td style={styles.centerText}>3</td>
                        <td style={styles.centerText}>4</td>
                        <td style={styles.centerText}>5</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хооллох</td>
                        <td style={styles.centerText}>0</td>
                        <td style={styles.centerText}>2</td>
                        <td style={styles.centerText}>5</td>
                        <td style={styles.centerText}>8</td>
                        <td style={styles.centerText}>10</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Бие засах</td>
                        <td style={styles.centerText}>0</td>
                        <td style={styles.centerText}>2</td>
                        <td style={styles.centerText}>5</td>
                        <td style={styles.centerText}>8</td>
                        <td style={styles.centerText}>10</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Шатаар өгсөх уруудах</td>
                        <td style={styles.centerText}>0</td>
                        <td style={styles.centerText}>2</td>
                        <td style={styles.centerText}>5</td>
                        <td style={styles.centerText}>8</td>
                        <td style={styles.centerText}>10</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хувцаслах</td>
                        <td style={styles.centerText}>0</td>
                        <td style={styles.centerText}>2</td>
                        <td style={styles.centerText}>5</td>
                        <td style={styles.centerText}>8</td>
                        <td style={styles.centerText}>10</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Шээх үйл ажиллагааг хянах</td>
                        <td style={styles.centerText}>0</td>
                        <td style={styles.centerText}>2</td>
                        <td style={styles.centerText}>5</td>
                        <td style={styles.centerText}>8</td>
                        <td style={styles.centerText}>10</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Баах үйл ажиллагааг хянах</td>
                        <td style={styles.centerText}>0</td>
                        <td style={styles.centerText}>2</td>
                        <td style={styles.centerText}>5</td>
                        <td style={styles.centerText}>8</td>
                        <td style={styles.centerText}>10</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Алхах</td>
                        <td style={styles.centerText}>0</td>
                        <td style={styles.centerText}>3</td>
                        <td style={styles.centerText}>8</td>
                        <td style={styles.centerText}>12</td>
                        <td style={styles.centerText}>15</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Тэнцвэртэй явах</td>
                        <td style={styles.centerText}>0</td>
                        <td style={styles.centerText}>1</td>
                        <td style={styles.centerText}>3</td>
                        <td style={styles.centerText}>4</td>
                        <td style={styles.centerText}>5</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Шилжих хөдөлгөөн хийх</td>
                        <td style={styles.centerText}>0</td>
                        <td style={styles.centerText}>3</td>
                        <td style={styles.centerText}>8</td>
                        <td style={styles.centerText}>12</td>
                        <td style={styles.centerText}>15</td>
                     </tr>
                     <tr>
                        <td
                           style={{
                              ...styles.leftText,
                              ...{ fontWeight: 'bold' }
                           }}
                        >
                           Нийт оноо/хувь
                        </td>
                        <td colSpan={5} style={styles.centerText}></td>
                     </tr>
                  </tbody>
               </Table>
               <div style={styles.flexContainer}>
                  <div>
                     <div style={styles.leftBold}>Төрх байдлын анализ:</div>
                     <div style={styles.rowStyle}>
                        <span>
                           .....................................................................................................................
                        </span>
                     </div>
                     <div style={styles.generalText}>
                        <span>
                           .....................................................................................................................
                        </span>
                     </div>
                     <div style={styles.generalText}>
                        <span>
                           .....................................................................................................................
                        </span>
                     </div>
                     <div style={styles.generalText}>
                        <span>
                           .....................................................................................................................
                        </span>
                     </div>
                  </div>
                  <div>
                     <div style={styles.leftBold}>Алхааны анализ:</div>
                     <div style={styles.rowStyle}>
                        <span>
                           .....................................................................................................................
                        </span>
                     </div>
                     <div style={styles.generalText}>
                        <span>
                           .....................................................................................................................
                        </span>
                     </div>
                     <div style={styles.generalText}>
                        <span>
                           .....................................................................................................................
                        </span>
                     </div>
                     <div style={styles.generalText}>
                        <span>
                           .....................................................................................................................
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.leftBold}>Үений далайц, булчингийн хүчний хэмжилт</div>
               <Table bordered className="document" style={{ marginTop: 10 }}>
                  <tbody>
                     <tr>
                        <td colSpan={2} style={styles.centerText}>
                           Булчингийн хүч
                        </td>
                        <td colSpan={2} style={styles.centerText}>
                           Үений далайц
                        </td>
                        <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 100 } }}>
                           Үе холбоос
                        </td>
                        <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 140 } }}></td>
                        <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 100 } }}>
                           Далайц
                        </td>
                        <td colSpan={2} style={styles.centerText}>
                           Булчингийн хүч
                        </td>
                        <td colSpan={2} style={styles.centerText}>
                           Үений далайц
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.centerText}>
                           Баруун
                        </td>
                        <td colSpan={4} style={styles.centerText}>
                           Зүүн
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td rowSpan={6} style={styles.centerText}>
                           Мөрний үе
                        </td>
                        <td style={styles.leftText}>Нугалах</td>
                        <td style={styles.centerText}>0-180</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Тэнийлгэх</td>
                        <td style={styles.centerText}>0-60</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Холдуулах</td>
                        <td style={styles.centerText}>0-180</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Ойртуулах</td>
                        <td style={styles.centerText}>0-45</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Гадагш эргүүлэх</td>
                        <td style={styles.centerText}>0-90</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Дотогш эргүүлэх</td>
                        <td style={styles.centerText}>0-90</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td rowSpan={2} style={styles.centerText}>
                           Тохойн үе
                        </td>
                        <td style={styles.leftText}>Нугалах</td>
                        <td style={styles.centerText}>0-150</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Тэнийлгэх</td>
                        <td style={styles.centerText}>0-10</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td rowSpan={2} style={styles.centerText}>
                           Шуу
                        </td>
                        <td style={styles.leftText}>Алга доош харуулах</td>
                        <td style={styles.centerText}>0-80-90</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Алга дээш харуулах</td>
                        <td style={styles.centerText}>0-80-90</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td rowSpan={2} style={styles.centerText}>
                           Бугуйн үе
                        </td>
                        <td style={styles.leftText}>Нугалах</td>
                        <td style={styles.centerText}>0-80</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Тэнийлгэх</td>
                        <td style={styles.centerText}>0-70</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td rowSpan={6} style={styles.centerText}>
                           Түнхний үе
                        </td>
                        <td style={styles.leftText}>Нугалах</td>
                        <td style={styles.centerText}>0-120</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Тэнийлгэх</td>
                        <td style={styles.centerText}>0-30</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Холдуулах</td>
                        <td style={styles.centerText}>0-45</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Ойртуулах</td>
                        <td style={styles.centerText}>0-30</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Гадагш эргүүлэх</td>
                        <td style={styles.centerText}>0-45</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Дотогш эргүүлэх</td>
                        <td style={styles.centerText}>0-35</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td rowSpan={2} style={styles.centerText}>
                           Өвдөгний үе
                        </td>
                        <td style={styles.leftText}>Нугалах</td>
                        <td style={styles.centerText}>0-135</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.leftText}>Тэнийлгэх</td>
                        <td style={styles.centerText}>0</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>&nbsp;</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={styles.centerText}>Шагайн үе</td>
                        <td style={styles.leftText}>Ээтийлгэх</td>
                        <td style={styles.centerText}>0-20</td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                     </tr>
                  </tbody>
               </Table>
               <div style={styles.rowStyle}>
                  Бэрхшээлтэй асуудлыг тодорхойлж жагсаах:
                  ___________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.rowStyle}>Богино хугацааны зорилго:</div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.rowStyle}>Урт хугацааны дараа хүрэх үр дүнгийн зорилго, хугацаа:</div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.rowStyle}>Хөдөлмөр засал эмчилгээний төлөвлөгөө:</div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.rowStyle}>Хийгдсэн эмчилгээ:</div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  ____________________________________________________________________________________________________________________________________________
               </div>
               <div style={{ ...styles.centerText, ...{ marginTop: 30 } }}>20 ..... оны .... сарын ...... өдөр</div>
            </div>
         </div>
      </>
   );
}

export default AM34;
