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
                     {formData?.['AM10_TABLE']?.map((el, index) => {
                        return (
                           <tr key={index}>
                              <td style={styles.centerText}>{index + 1}</td>
                              <td style={styles.centerText}>{el[0]}</td>
                              <td style={styles.centerText}>{el[1]}</td>
                              <td style={styles.centerText}>{el[2]}</td>
                              <td style={styles.centerText}></td>
                           </tr>
                        );
                     })}
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
