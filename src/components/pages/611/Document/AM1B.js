import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-1Б
function AM1B(props) {
   console.log('props', props);
   const { type, data, appointmentId, hospitalName, doctorName, cabinetName } = props;
   const [list, setList] = useState({});

   useEffect(() => {
      if (data) {
         const cloneData = { ...data };
         delete cloneData['65-150'];
         delete cloneData.Other;
         cloneData['65+'] = data['65-150'];
         setList(cloneData);
      }
   }, [data]);
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
         padding: 5,
         maxHeight: 130,
         maxWidth: 50,
         lineHeight: 1,
         fontSize: 12
      },
      circle: {
         borderRadius: 50,
         borderWidth: 1,
         padding: 5,
         borderColor: '#000'
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
                  <span>Кабинетын нэр: {cabinetName}</span>
                  <span>Эмчийн нэр: {doctorName}</span>
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
                        colSpan={10}
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
                     <td colSpan={10}>5</td>
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
                     <td>22</td>
                  </tr>

                  {props.data?.map((el, index) => {
                     return (
                        <>
                           <tr key={index}>
                              <td rowSpan={2}></td>
                              <td rowSpan={2}>{index + 1}</td>
                              <td colSpan={10}>
                                 {el.lastName?.substr(0, 1)}. {el.firstName}
                              </td>
                              <td rowSpan={2}>{el.address}</td>
                              <td rowSpan={2}>{el.jobPosition}</td>
                              <td rowSpan={2}>{el.educationType}</td>
                              <td colSpan={10}>{el.organization}</td>
                              <td rowSpan={2}>{el.age}</td>
                              <td rowSpan={2}>{el.genderType}</td>
                              <td rowSpan={2} style={{ verticalAlign: 'middle' }}>
                                 <span style={el.inspectionType === '1' ? textStyle.circle : null}>1</span>
                              </td>
                              <td rowSpan={2} style={{ verticalAlign: 'middle' }}>
                                 <span style={el.inspectionType === '2' ? textStyle.circle : null}>2</span>
                              </td>
                              <td rowSpan={2} style={{ verticalAlign: 'middle' }}>
                                 <span style={el.inspectionType === '3' ? textStyle.circle : null}>3</span>
                              </td>
                              <td rowSpan={2} style={{ verticalAlign: 'middle' }}>
                                 <span style={el.inspectionType === '4' ? textStyle.circle : null}>4</span>
                              </td>
                              <td rowSpan={2} style={{ verticalAlign: 'middle' }}>
                                 <span style={el.inspectionType === '5' ? textStyle.circle : null}>5</span>
                              </td>
                              <td rowSpan={2} style={{ verticalAlign: 'middle' }}>
                                 <span style={el.inspectionType === '6' ? textStyle.circle : null}>6</span>
                              </td>
                              <td rowSpan={2}></td>
                              <td rowSpan={2}></td>
                              <td rowSpan={2}></td>
                              <td rowSpan={2}></td>
                              <td rowSpan={2}></td>
                              <td rowSpan={2}></td>
                              <td rowSpan={2}></td>
                              <td rowSpan={2}></td>
                              <td rowSpan={2}></td>
                           </tr>
                           <tr key={index + 1}>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.registerNumber[0]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.registerNumber[1]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.registerNumber[2]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.registerNumber[3]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.registerNumber[4]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.registerNumber[5]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.registerNumber[6]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.registerNumber[7]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.registerNumber[8]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.registerNumber[9]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.cardNumber[0]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.cardNumber[1]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.cardNumber[2]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.cardNumber[3]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.cardNumber[4]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.cardNumber[5]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.cardNumber[6]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.cardNumber[7]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.cardNumber[8]}</td>
                              <td style={{ ...textStyle.centerText, ...{ width: 18 } }}>{el.cardNumber[9]}</td>
                           </tr>
                        </>
                     );
                  })}
               </tbody>
            </Table>
         </div>
      </div>
   );
}

export default AM1B;
