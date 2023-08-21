import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-1Б
function AM1B() {
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
         verticalAlign: 'middle'
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
                  <span style={{ fontWeight: 'bold', fontSize: 12 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-1Б</span>
               </div>
               <div style={{ textAlign: 'center' }}>
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>ЭМЧИЙН ҮЗЛЭГИЙН БҮРТГЭЛ</span>
               </div>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column'
                  }}
               >
                  <span>Кабинетын нэр: </span>
                  <span>Эмчийн нэр: </span>
               </div>
            </div>
            <Table bordered className="document">
               <tbody>
                  <tr he>
                     <td rowSpan={3} style={textStyle.verticalText}>
                        Сар /өдөр
                     </td>
                     <td rowSpan={3} style={textStyle.centerText}>
                        №
                     </td>
                     <td
                        rowSpan={3}
                        colSpan={10}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 150 }
                        }}
                     >
                        Эцэг /эх/-ийн нэр, Нэр Регистрийн дугаар
                     </td>
                     <td
                        rowSpan={3}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 100 }
                        }}
                     >
                        Тогтмол хаяг
                     </td>
                     <td rowSpan={3} style={textStyle.verticalText}>
                        Ажил, мэргэжил
                     </td>
                     <td rowSpan={3} style={textStyle.verticalText}>
                        Боловсрол
                     </td>
                     <td
                        rowSpan={3}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 100 }
                        }}
                     >
                        Ажлын газар ЭМД-ын дугаар
                     </td>
                     <td rowSpan={3} style={textStyle.centerText}>
                        Нас
                     </td>
                     <td rowSpan={3} style={textStyle.centerText}>
                        Хүйс
                     </td>
                     <td colSpan={6} style={textStyle.centerText}>
                        Эмчийн үзлэг
                     </td>
                     <td
                        rowSpan={3}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 80 }
                        }}
                     >
                        Үзлэгийн төрөл /Z00-Z40/
                     </td>
                     <td
                        rowSpan={3}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 80 }
                        }}
                     >
                        Үндсэн онош /ӨОУА10/
                     </td>
                     <td
                        rowSpan={3}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 80 }
                        }}
                     >
                        Өвчний шалтгаан /ӨОУА10/
                     </td>
                     <td colSpan={2} style={textStyle.centerText}>
                        Өвчлөл
                     </td>
                     <td rowSpan={3} style={textStyle.verticalText}>
                        Дээд шатлалд илгээсэн эсэх тийм-(+), үгүй (-)
                     </td>
                     <td
                        rowSpan={3}
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 80 }
                        }}
                     >
                        Хийгдсэн ажилбар /ҮОУА-9/
                     </td>
                     <td rowSpan={3} style={textStyle.verticalText}>
                        Хүчирхийлэлд өртсөн эсэх тийм-(+), үгүй (-)
                     </td>
                     <td rowSpan={3} style={textStyle.verticalText}>
                        Хөдөлмөрийн чадвар түр алдалтын хоног
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={textStyle.verticalText}>
                        Өвчний учир амбулаторт
                     </td>
                     <td rowSpan={2} style={textStyle.verticalText}>
                        Урьдчилан сэргийлэх
                     </td>
                     <td rowSpan={2} style={textStyle.verticalText}>
                        Идэвхтэй хяналтаар
                     </td>
                     <td rowSpan={2} style={textStyle.verticalText}>
                        Гэрийн эргэлтээр
                     </td>
                     <td rowSpan={2} style={textStyle.verticalText}>
                        Дуудлагаар гэрийн
                     </td>
                     <td rowSpan={2} style={textStyle.verticalText}>
                        Шинэ
                     </td>
                     <td rowSpan={2} style={textStyle.verticalText}>
                        Хуучин
                     </td>
                  </tr>
                  <tr>
                     <td style={textStyle.verticalText}>Анх</td>
                     <td style={textStyle.verticalText}>Давтан</td>
                  </tr>
                  <tr>
                     <td>А</td>
                     <td>Б</td>
                     <td colSpan={10}>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                     <td>9</td>
                     <td>10</td>
                     <td>11</td>
                     <td>12</td>
                     <td>13</td>
                     <td>14</td>
                     <td>15</td>
                     <td>16</td>
                     <td>17</td>
                     <td>18</td>
                     <td>19</td>
                     <td>20</td>
                     <td>21</td>
                     <td>22 </td>
                  </tr>

                  <tr>
                     <td rowSpan={2}>aa</td>
                     <td rowSpan={2}>bb</td>
                     <td colSpan={10}>cc</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                     <td>9</td>
                     <td>10</td>
                     <td>11</td>
                     <td>12</td>
                     <td>13</td>
                     <td>14</td>
                     <td>15</td>
                     <td>16</td>
                     <td>17</td>
                     <td>18</td>
                     <td>19</td>
                     <td>20</td>
                     <td>21</td>
                     <td>22 </td>
                  </tr>
                  <tr>
                     <td>aa</td>
                     <td>bb</td>
                     <td>bb</td>
                     <td>bb</td>
                     <td>bb</td>
                     <td>bb</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td> </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
               </tbody>
            </Table>
         </div>
      </div>
   );
}

export default AM1B;
