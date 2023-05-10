import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-25Б
function AM25B() {
   const textStyle = {
      verticalText: {
         writingMode: 'vertical-rl',
         verticalAlign: 'middle',
         padding: 5,
         rotate: '180deg',
         maxHeight: 100,
         maxWidth: 50,
         lineHeight: 1
      },
      centerText: {
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 12
      },
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         borderColor: 'black',
         width: 25,
         height: 25
      }
   };
   return (
      <div className="page-landscape">
         <div className="subpage-landscape">
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
                  <span style={{ fontWeight: 'bold', fontSize: 12 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-25Б</span>
               </div>
               <div style={{ textAlign: 'center' }}>
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>СЭРГЭЭН ЗАСАХ ЭМЧИЛГЭЭНИЙ БҮРТГЭЛ</span>
               </div>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column'
                  }}
               >
                  <span>Эмнэлгийн нэр: </span>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <span style={{ marginRight: 5 }}>Эмнэлгийн код:</span>
                     <div style={textStyle.rowCells}></div>
                     <div style={textStyle.rowCells}></div>
                     <div style={textStyle.rowCells}></div>
                     <div style={textStyle.rowCells}></div>
                     <div style={textStyle.rowCells}></div>
                     <div style={textStyle.rowCells}></div>
                  </div>
                  <span>Эмчилгээний төрөл: </span>
               </div>
            </div>
            <Table bordered className="document">
               <tbody>
                  <tr>
                     <td rowSpan={2} style={{ ...textStyle.centerText, ...{ width: 40 } }}>
                        Д/д
                     </td>
                     <td rowSpan={2} style={{ ...textStyle.centerText, ...{ width: 40 } }}>
                        Сар, өдөр
                     </td>
                     <td
                        rowSpan={2}
                        colSpan={10}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 100 }
                        }}
                     >
                        Эцэг /эх/-ийн нэр, Нэр Регистрийн дугаар
                     </td>
                     <td rowSpan={2} style={textStyle.centerText}>
                        Нас
                     </td>
                     <td rowSpan={2} style={textStyle.centerText}>
                        Хүйс
                     </td>
                     <td rowSpan={2} style={textStyle.centerText}>
                        Онош
                     </td>
                     <td rowSpan={2} style={textStyle.centerText}>
                        Тасаг
                     </td>
                     <td rowSpan={2} style={textStyle.centerText}>
                        Эмчилгээ хийх удаа
                     </td>
                     <td colSpan={10} style={textStyle.centerText}>
                        Эмчилгээ хийсэн өдрүүд
                     </td>
                     <td rowSpan={2} style={textStyle.verticalText}>
                        Эдгэрсэн
                     </td>
                     <td rowSpan={2} style={textStyle.verticalText}>
                        Сайжирсан
                     </td>
                     <td rowSpan={2} style={textStyle.verticalText}>
                        Хэвэндээ
                     </td>
                     <td rowSpan={2} style={textStyle.centerText}>
                        Бүгд
                     </td>
                  </tr>
                  <tr>
                     <td style={{ ...textStyle.centerText, ...{ width: 30 } }}>1</td>
                     <td style={{ ...textStyle.centerText, ...{ width: 30 } }}>2</td>
                     <td style={{ ...textStyle.centerText, ...{ width: 30 } }}>3</td>
                     <td style={{ ...textStyle.centerText, ...{ width: 30 } }}>4</td>
                     <td style={{ ...textStyle.centerText, ...{ width: 30 } }}>5</td>
                     <td style={{ ...textStyle.centerText, ...{ width: 30 } }}>6</td>
                     <td style={{ ...textStyle.centerText, ...{ width: 30 } }}>7</td>
                     <td style={{ ...textStyle.centerText, ...{ width: 30 } }}>8</td>
                     <td style={{ ...textStyle.centerText, ...{ width: 30 } }}>9</td>
                     <td style={{ ...textStyle.centerText, ...{ width: 30 } }}>10</td>
                  </tr>
                  <tr>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td colSpan={10} style={{ ...textStyle.centerText, ...{ width: 30 } }}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                  </tr>
                  <tr>
                     <td style={{ height: 25, width: 25 }}></td>
                     <td style={{ height: 25, width: 25 }}></td>
                     <td style={{ height: 25, width: 25 }}></td>
                     <td style={{ height: 25, width: 25 }}></td>
                     <td style={{ height: 25, width: 25 }}></td>
                     <td style={{ height: 25, width: 25 }}></td>
                     <td style={{ height: 25, width: 25 }}></td>
                     <td style={{ height: 25, width: 25 }}></td>
                     <td style={{ height: 25, width: 25 }}></td>
                     <td style={{ height: 25, width: 25 }}></td>
                  </tr>
               </tbody>
            </Table>
         </div>
      </div>
   );
}

export default AM25B;
