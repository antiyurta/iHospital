import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-38
function AM38() {
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
                  <span style={{ fontWeight: 'bold', fontSize: 12 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-38</span>
               </div>
               <div style={{ textAlign: 'center', marginBottom: 5 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>
                     НҮҮР АМНЫ МЭС ЗАСЛЫН ЭМЧИЙН ЭМЧИЛГЭЭНИЙ БҮРТГЭЛ
                  </span>
               </div>
            </div>
            <Table bordered className="document">
               <colgroup>
                  <col style={{ width: 10 }} />
                  <col style={{ width: 60 }} />
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
                           ...{ width: 20, height: 20 }
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
                     <td rowSpan={6} style={textStyle.verticalText}>
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
                        Давтан
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
                        У/сэргийлэх үзлэг
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
                     <td
                        colSpan={3}
                        style={{
                           ...textStyle.leftText,
                           ...{ width: 20, height: 20 }
                        }}
                     >
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
                     <td
                        colSpan={3}
                        style={{
                           ...textStyle.leftText,
                           ...{ width: 20, height: 20 }
                        }}
                     >
                        0-16 насны хүүхэд
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
                     <td
                        colSpan={3}
                        style={{
                           ...textStyle.leftText,
                           ...{ width: 20, height: 20 }
                        }}
                     >
                        5-6 насны хүүхэд
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
                     <td
                        colSpan={3}
                        style={{
                           ...textStyle.leftText,
                           ...{ width: 20, height: 20 }
                        }}
                     >
                        12 насны хүүхэд
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
                     <td
                        colSpan={3}
                        style={{
                           ...textStyle.leftText,
                           ...{ width: 20, height: 20 }
                        }}
                     >
                        18 насны хүүхэд
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
                     <td colSpan={2} style={textStyle.centerText}>
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
                     <td colSpan={2} style={textStyle.centerText}>
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
                     <td colSpan={2} style={textStyle.centerText}>
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
                     <td
                        colSpan={3}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 20, height: 20 }
                        }}
                     >
                        Сүүн шүд авах
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
                     <td rowSpan={3} style={textStyle.centerText}>
                        Тогтмол шүд авах
                     </td>
                     <td colSpan={2} style={textStyle.centerText}>
                        Цоо / хүнд/
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
                     <td colSpan={2} style={textStyle.centerText}>
                        Суларсан
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
                     <td colSpan={2} style={textStyle.centerText}>
                        Бусад
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
                     <td rowSpan={3} style={textStyle.centerText}>
                        Шүд авсаны дараах хүндрэл
                     </td>
                     <td colSpan={2} style={textStyle.centerText}>
                        Альвеолит
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
                     <td colSpan={2} style={textStyle.centerText}>
                        Цус алдалт
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
                     <td colSpan={2} style={textStyle.centerText}>
                        Ёзоор хугар
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
                     <td
                        colSpan={3}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 20, height: 20 }
                        }}
                     >
                        Амбулаторийн хагалгаа
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
                     <td rowSpan={2} colSpan={2} style={textStyle.centerText}>
                        Зөвлөгөө
                     </td>
                     <td style={textStyle.centerText}>Салст</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td style={textStyle.centerText}>Бусад</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td rowSpan={20} style={textStyle.verticalText}>
                        Хагалгааны төрөлүүд
                     </td>
                     <td rowSpan={2} style={textStyle.centerText}>
                        Шүдний гаралтай
                     </td>
                     <td style={textStyle.leftText}>Анх</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td style={textStyle.leftText}>Давтан</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td rowSpan={2} style={textStyle.centerText}>
                        Шүдний бус гаралтай
                     </td>
                     <td style={textStyle.leftText}>Анх</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td style={textStyle.leftText}>Давтан</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td rowSpan={2} style={textStyle.centerText}>
                        Шүлсний булчирхайн өвчин
                     </td>
                     <td style={textStyle.leftText}>Анх</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td style={textStyle.leftText}>Давтан</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td rowSpan={2} style={textStyle.centerText}>
                        Шүдний үений өвчинүүд
                     </td>
                     <td style={textStyle.leftText}>Анх</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td style={textStyle.leftText}>Давтан</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td rowSpan={2} style={textStyle.centerText}>
                        Мэдрэлийн өвчинүүд
                     </td>
                     <td style={textStyle.leftText}>Анх</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td style={textStyle.leftText}>Давтан</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td rowSpan={2} style={textStyle.centerText}>
                        Гэмтэлүүд
                     </td>
                     <td style={textStyle.leftText}>Анх</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td style={textStyle.leftText}>Давтан</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td rowSpan={2} style={textStyle.centerText}>
                        Хавдарууд
                     </td>
                     <td style={textStyle.leftText}>Анх</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td style={textStyle.leftText}>Давтан</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td rowSpan={2} style={textStyle.centerText}>
                        Остеомиелит
                     </td>
                     <td style={textStyle.leftText}>Анх</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td style={textStyle.leftText}>Давтан</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td rowSpan={2} style={textStyle.centerText}>
                        Шүдний гаралтай
                     </td>
                     <td style={textStyle.leftText}>Анх</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td style={textStyle.leftText}>Давтан</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td rowSpan={2} style={textStyle.centerText}>
                        Нөхөн сэргээх м/з
                     </td>
                     <td style={textStyle.leftText}>Анх</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td style={textStyle.leftText}>Давтан</td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
                     <td style={textStyle.numberText}></td>
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
                     <td
                        colSpan={3}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 20, height: 20 }
                        }}
                     >
                        Ажлын нэгж
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
                     <td
                        colSpan={3}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 20, height: 20 }
                        }}
                     >
                        Ажлын цаг
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

export default AM38;
