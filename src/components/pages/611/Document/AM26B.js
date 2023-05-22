import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-26Б
function AM26B() {
   const textStyle = {
      centerText: {
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 12,
         padding: 0,
         lineHeight: 1.3
      },
      verticalText: {
         writingMode: 'vertical-rl',
         verticalAlign: 'middle',
         padding: 5,
         rotate: '180deg',
         maxHeight: 100,
         maxWidth: 50,
         lineHeight: 1
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
                  <span style={{ fontWeight: 'bold', fontSize: 12 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-26Б</span>
               </div>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column'
                  }}
               >
                  <span>Эмнэлгийн нэр: </span>
               </div>
               <div style={{ textAlign: 'center', marginBottom: 10 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>
                     ХӨНГӨВЧЛӨХ ЭМЧИЛГЭЭНД ХАМРАГСДЫН БҮРТГЭЛ /СТАЦИОНАРТ/
                  </span>
               </div>
            </div>
            <Table bordered className="document">
               <tbody>
                  <tr>
                     <td rowSpan={2} style={{ ...textStyle.centerText, ...{ width: 40 } }}>
                        №
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
                     <td rowSpan={2} style={{ ...textStyle.centerText, ...{ width: 40 } }}>
                        Нас
                     </td>
                     <td rowSpan={2} style={{ ...textStyle.centerText, ...{ width: 40 } }}>
                        Хүйс
                     </td>
                     <td rowSpan={2} style={{ ...textStyle.centerText, ...{ width: 100 } }}>
                        Тогтмол хаяг
                     </td>
                     <td rowSpan={2} style={{ ...textStyle.centerText, ...{ width: 100 } }}>
                        Онош
                     </td>
                     <td rowSpan={2} style={{ ...textStyle.verticalText, ...{ width: 30 } }}>
                        Хэвтсэн
                     </td>
                     <td rowSpan={2} style={{ ...textStyle.verticalText, ...{ width: 30 } }}>
                        Гарсан
                     </td>
                     <td rowSpan={2} style={{ ...textStyle.verticalText, ...{ width: 30 } }}>
                        Нас барсан
                     </td>
                     <td rowSpan={2} style={{ ...textStyle.verticalText, ...{ width: 30 } }}>
                        Ор хоног
                     </td>
                     <td colSpan={2} style={textStyle.centerText}>
                        Тусламж үйлчилгээний төрөл
                     </td>
                     <td rowSpan={2} style={{ ...textStyle.centerText, ...{ width: 200 } }}>
                        Тайлбар
                     </td>
                  </tr>
                  <tr>
                     <td style={{ ...textStyle.centerText, ...{ width: 60 } }}>Үнэгүй эм олгосон</td>
                     <td style={{ ...textStyle.centerText, ...{ width: 60 } }}>Бусад</td>
                  </tr>
                  <tr style={{ height: 20 }}>
                     <td
                        style={{
                           ...textStyle.centerText,
                           ...{ height: 20 }
                        }}
                     ></td>
                     <td
                        colSpan={10}
                        style={{
                           ...textStyle.centerText,
                           ...{ height: 20 }
                        }}
                     >
                        1
                     </td>
                     <td
                        style={{
                           ...textStyle.centerText,
                           ...{ height: 20 }
                        }}
                     >
                        2
                     </td>
                     <td
                        style={{
                           ...textStyle.centerText,
                           ...{ height: 20 }
                        }}
                     >
                        3
                     </td>
                     <td
                        style={{
                           ...textStyle.centerText,
                           ...{ height: 20 }
                        }}
                     >
                        4
                     </td>
                     <td
                        style={{
                           ...textStyle.centerText,
                           ...{ height: 20 }
                        }}
                     >
                        5
                     </td>
                     <td
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 30 }
                        }}
                     >
                        6
                     </td>
                     <td
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 30 }
                        }}
                     >
                        7
                     </td>
                     <td
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 30 }
                        }}
                     >
                        8
                     </td>
                     <td
                        style={{
                           ...textStyle.centerText,
                           ...{ width: 30 }
                        }}
                     >
                        9
                     </td>
                     <td
                        style={{
                           ...textStyle.centerText,
                           ...{ height: 20 }
                        }}
                     >
                        10
                     </td>
                     <td
                        style={{
                           ...textStyle.centerText,
                           ...{ height: 20 }
                        }}
                     >
                        11
                     </td>
                     <td
                        style={{
                           ...textStyle.centerText,
                           ...{ height: 20 }
                        }}
                     >
                        12
                     </td>
                  </tr>
                  <tr>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td
                        colSpan={10}
                        style={{
                           ...textStyle.centerText,
                           ...{ height: 25 }
                        }}
                     ></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={textStyle.centerText}></td>
                     <td rowSpan={2} style={{ ...textStyle.centerText, ...{ width: 30 } }}></td>
                     <td rowSpan={2} style={{ ...textStyle.centerText, ...{ width: 30 } }}></td>
                     <td rowSpan={2} style={{ ...textStyle.centerText, ...{ width: 30 } }}></td>
                     <td rowSpan={2} style={{ ...textStyle.centerText, ...{ width: 30 } }}></td>
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

export default AM26B;
