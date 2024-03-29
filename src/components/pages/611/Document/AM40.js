import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-40
function AM40() {
   const textStyle = {
      centerText: {
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 10,
         padding: 0
      },
      numberText: {
         height: 20,
         width: 20,
         fontSize: 10,
         textAlign: 'center',
         verticalAlign: 'middle',
         padding: 0
      },
      leftText: {
         textAlign: 'left',
         verticalAlign: 'middle',
         fontSize: 10,
         padding: 0,
         paddingLeft: 5
      },
      verticalText: {
         writingMode: 'vertical-rl',
         verticalAlign: 'middle',
         padding: 5,
         rotate: '180deg',
         maxHeight: 100,
         maxWidth: 50,
         lineHeight: 1,
         fontSize: 10,
         textAlign: 'center'
      }
   };
   return (
      <div className="page">
         <div className="subpage">
            <div>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'flex-end'
                  }}
               >
                  <span style={{ fontSize: 12 }}>Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн</span>
                  <span style={{ fontSize: 12 }}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                  <span style={{ fontWeight: 'bold', fontSize: 12 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-40</span>
               </div>
               <div style={{ textAlign: 'center', marginBottom: 5 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>
                     НҮҮР АМНЫ ГАЖИГ ЗАСЛЫН ЭМЧИЙН ЭМЧИЛГЭЭНИЙ БҮРТГЭЛ
                  </span>
               </div>
            </div>
            <Table bordered className="document">
               <colgroup>
                  <col style={{ width: 30 }} />
                  <col style={{ width: 70 }} />
                  <col style={{ width: 80 }} />
               </colgroup>
               <tbody>
                  <tr>
                     <td colSpan={3} width={100} style={textStyle.centerText}>
                        Сар өдөр
                     </td>
                     <td style={textStyle.numberText}>1</td>
                     <td style={textStyle.numberText}>2</td>
                     <td style={textStyle.numberText}>3</td>
                     <td style={textStyle.numberText}>4</td>
                     <td style={textStyle.numberText}>5</td>
                     <td style={textStyle.numberText}>6</td>
                     <td style={textStyle.numberText}>7</td>
                     <td style={textStyle.numberText}>8</td>
                     <td style={textStyle.numberText}>9</td>
                     <td style={textStyle.numberText}>10</td>
                     <td style={textStyle.numberText}>11</td>
                     <td style={textStyle.numberText}>12</td>
                     <td style={textStyle.numberText}>13</td>
                     <td style={textStyle.numberText}>14</td>
                     <td style={textStyle.numberText}>15</td>
                     <td style={textStyle.numberText}>16</td>
                     <td style={textStyle.numberText}>17</td>
                     <td style={textStyle.numberText}>18</td>
                     <td style={textStyle.numberText}>19</td>
                     <td style={textStyle.numberText}>20</td>
                     <td style={textStyle.numberText}>21</td>
                     <td style={textStyle.numberText}>22</td>
                     <td style={textStyle.numberText}>23</td>
                     <td style={textStyle.numberText}>24</td>
                     <td style={textStyle.numberText}>25</td>
                     <td style={textStyle.numberText}>26</td>
                     <td style={textStyle.numberText}>27</td>
                     <td style={textStyle.numberText}>28</td>
                     <td style={textStyle.numberText}>29</td>
                     <td style={textStyle.numberText}>30</td>
                     <td style={textStyle.numberText}>31</td>
                     <td style={{ ...textStyle.numberText, ...{ width: 50 } }}>Бүгд</td>
                  </tr>
                  <tr>
                     <td
                        colSpan={3}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 20, height: 18 }
                        }}
                     >
                        Хүний тоо
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td rowSpan={10} style={textStyle.verticalText}>
                        Үүнээс
                     </td>
                     <td colSpan={2} style={textStyle.leftText}>
                        Эрэгтэй
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Эмэгтэй
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td rowSpan={2} style={textStyle.leftText}>
                        Анхан
                     </td>
                     <td style={textStyle.numberText}>Хотын</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td style={textStyle.leftText}>Хөдөөгийн</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td rowSpan={2} style={textStyle.leftText}>
                        Давтан
                     </td>
                     <td style={textStyle.numberText}>Хотын</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td style={textStyle.leftText}>Хөдөөгийн</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Диспансерийн хяналт
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        У/Сэргийлэх үзлэг
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Зөвөлгөө
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Эрүүлжсэн
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td rowSpan={7} style={textStyle.verticalText}>
                        Ортодонтын үзлэг
                     </td>
                     <td colSpan={2} style={textStyle.leftText}>
                        Бүгд
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Анх
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Давтан / хяналт /
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        0 -16 насны
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        5-6 нас
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        12 нас
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        18 нас
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td rowSpan={3} style={textStyle.verticalText}>
                        Бусад
                     </td>
                     <td colSpan={2} style={textStyle.leftText}>
                        Тэтгэвэрт
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Групп
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Хөгжлийн бэрхшээлтэй
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td rowSpan={14} style={textStyle.verticalText}>
                        Ортодонтын зэмсэгүүд
                     </td>
                     <td colSpan={2} style={textStyle.leftText}>
                        Загвар
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Энглийн нум
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Катцийн бүрээс
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Капп
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Эрэгт ялтас
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Нэмэгдэл хэсэгтэй /я
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Налуутай ялтас
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Френкелийн зэмсэг
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        У/ с зэмсэг
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Бэхжүүлэх зэмсэг
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Пүржинт ялтас
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Бракет
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}>
                        Шаазан брекет
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.leftText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>{' '}
                  <tr>
                     <td
                        colSpan={3}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 20, height: 18 }
                        }}
                     >
                        Бүгд хийсэн зэмсэг
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>{' '}
                  <tr>
                     <td
                        colSpan={3}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 20, height: 18 }
                        }}
                     >
                        Бүгд нэгж
                     </td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                  </tr>
               </tbody>
            </Table>
         </div>
      </div>
   );
}

export default AM40;
