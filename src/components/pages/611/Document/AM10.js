import moment from 'moment';
import React from 'react';
import { Table } from 'react-bootstrap';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';

//маягт АМ-10
function AM10(props) {
   console.log('ASD', props);
   const {
      data: { formData, patientData },
      hospitalName
   } = props;
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
      generalTextBold: {
         fontSize: 18,
         fontWeight: 'bold'
      },
      boldTitle: {
         fontWeight: 'bold',
         fontSize: 16
      },
      blankSpaces: {
         fontSize: 12
      },
      rowStyle: {
         fontSize: 12,
         marginTop: 10
      },
      verticalText: {
         writingMode: 'vertical-rl',
         verticalAlign: 'middle',
         padding: 4,
         rotate: '180deg',
         lineHeight: 1,
         fontSize: 12
      },
      centerText: {
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 12,
         padding: 0,
         lineHeight: 1.3
      },
      leftText: {
         padding: 1,
         verticalAlign: 'middle',
         fontSize: 12
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
                     justifyContent: 'space-between'
                  }}
               >
                  <div
                     style={{
                        width: 120,
                        height: 130,
                        borderWidth: 1,
                        borderStyle: 'solid'
                     }}
                  ></div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                     <span
                        style={{
                           fontWeight: 'bold',
                           fontSize: 12,
                           textAlign: 'right',
                           marginTop: 10,
                           marginBottom: 10
                        }}
                     >
                        Эрүүл мэндийн бүртгэлийн маягт АМ-10
                     </span>
                     <div
                        style={{
                           ...styles.generalText,
                           ...{ display: 'flex', justifyContent: 'space-between' }
                        }}
                     >
                        <div style={{ display: 'flex' }}>
                           <span style={{ marginRight: 5 }}>ЭМД </span>
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
                     <div
                        style={{
                           ...styles.generalText,
                           ...{
                              display: 'flex',
                              justifyContent: 'space-between',
                              marginTop: 10
                           }
                        }}
                     >
                        <div style={{ display: 'flex' }}>
                           <span style={{ marginRight: 5 }}>РД: {patientData?.registerNumber}</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div style={{ textAlign: 'center' }}>
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>ЭРҮҮЛ МЭНДИЙН ХУУДАС</span>
               </div>
               <div style={styles.leftText}>Эмнэлгийн нэр {hospitalName}</div>
               <div style={styles.leftText}>
                  Олгосон {moment(formData?.['AM10.1']).format('YYYY')} он {moment(formData?.['AM10.1']).format('MM')}{' '}
                  сар {moment(formData?.['AM10.1']).format('DD')} өдөр{' '}
                  <span style={{ marginLeft: 30 }}>Дугаар _____________________</span>
               </div>
               <div style={styles.leftText}>
                  Эцэг /эх/-ийн нэр {patientData?.lastName} Нэр {patientData?.firstName} Нас {patientData?.age} Хүйс:
                  (зур){' '}
                  <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
                  <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
               </div>
               <div style={styles.leftText}>
                  Зориулалт: (зур)
                  <NewCheckboxGroup value={formData?.['AM10.2']} className="dstory">
                     <NewCheckbox value={0} className="test">
                        <span style={{ fontSize: 12 }}>ажилд орох,</span>
                     </NewCheckbox>
                     <NewCheckbox value={1} className="test">
                        <span style={{ fontSize: 12 }}>суралцах,</span>
                     </NewCheckbox>
                     <NewCheckbox value={2} className="test">
                        <span style={{ fontSize: 12 }}>гэр бүл болох,</span>
                     </NewCheckbox>
                  </NewCheckboxGroup>
               </div>
               <div style={styles.leftText}>бусад {formData?.['AM10.3']}</div>
               <Table bordered className="document" style={{ marginTop: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.centerText} rowSpan={2}>
                           №
                        </td>
                        <td style={styles.centerText} colSpan={2}>
                           Хийсэн шинжилгээ
                        </td>
                        <td style={styles.centerText} rowSpan={2}>
                           Он, Сар, Өдөр
                        </td>
                        <td style={styles.centerText} rowSpan={2}>
                           Эмчийн гарын үсэг
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>Үзлэг</td>
                        <td style={styles.centerText}>Онош, дүгнэлт</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>1</td>
                        <td style={styles.centerText}>Дотор</td>
                        <td style={styles.centerText}>{formData?.['AM10.4.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.4.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>2</td>
                        <td style={styles.centerText}>Мэдрэл</td>
                        <td style={styles.centerText}>{formData?.['AM10.5.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.5.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>3</td>
                        <td style={styles.centerText}>Чих, хамар, хоолой</td>
                        <td style={styles.centerText}>{formData?.['AM10.6.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.6.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>4</td>
                        <td style={styles.centerText}>Нүд</td>
                        <td style={styles.centerText}>{formData?.['AM10.7.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.7.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>5</td>
                        <td style={styles.centerText}>Шүд</td>
                        <td style={styles.centerText}>{formData?.['AM10.8.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.8.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>6</td>
                        <td style={styles.centerText}>Мэс засал</td>
                        <td style={styles.centerText}>{formData?.['AM10.9.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.9.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>7</td>
                        <td style={styles.centerText}>Эмэгтэйчүүд</td>
                        <td style={styles.centerText}>{formData?.['AM10.10.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.10.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>8</td>
                        <td style={styles.centerText}>Зүрх, судас</td>
                        <td style={styles.centerText}>{formData?.['AM10.11.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.11.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>9</td>
                        <td style={styles.centerText}>Сүрьеэ</td>
                        <td style={styles.centerText}>{formData?.['AM10.12.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.12.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>10</td>
                        <td style={styles.centerText}>Арьс, харшил</td>
                        <td style={styles.centerText}>{formData?.['AM10.13.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.13.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>11</td>
                        <td style={styles.centerText}>Халдварт</td>
                        <td style={styles.centerText}>{formData?.['AM10.14.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.14.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>12</td>
                        <td style={styles.centerText}>Сэтгэц мэдрэл</td>
                        <td style={styles.centerText}>{formData?.['AM10.15.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.15.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>13</td>
                        <td style={styles.centerText}>Гэмтэл согог</td>
                        <td style={styles.centerText}>{formData?.['AM10.16.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.16.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>14</td>
                        <td style={styles.centerText}>БЗДХ</td>
                        <td style={styles.centerText}>{formData?.['AM10.17.1']}</td>
                        <td style={styles.centerText}>{moment(formData?.['AM10.17.2']).format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}></td>
                     </tr>
                  </tbody>
               </Table>
               <div style={styles.leftText}>Ерөнхий эмч (эмнэлэг эрхэлсэн орлогч)-ийн дүгнэлт шийдвэр:</div>
               <div style={styles.leftText}>{formData?.['AM10.18']}</div>
               <div style={styles.leftText}>
                  Дүгнэлт, шийдвэр гаргасан {moment(formData?.['AM10.19']).format('YYYY')} он{' '}
                  {moment(formData?.['AM10.19']).format('MM')} сар {moment(formData?.['AM10.19']).format('DD')} өдөр{' '}
               </div>
               <div style={styles.centerText}>Амбулаторийн эрхлэгч _________________________</div>
               <div style={styles.centerText}>(тамга)</div>
            </div>
         </div>
      </>
   );
}

export default AM10;
