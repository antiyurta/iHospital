import moment from 'moment';
import React from 'react';
import { Table } from 'react-bootstrap';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';

//маягт АМ-25А
function AM25A(props) {
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
         height: 18,
         borderColor: 'black'
      },
      generalText: {
         fontSize: 12
      },
      blankSpaces: {
         fontSize: 10
      },
      rowStyle: {
         fontSize: 12,
         marginTop: 10
      }
   };
   return (
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
               <span style={styles.generalText}>Эмнэлгийн нэр {hospitalName}</span>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-25А</span>
               </div>
            </div>
            <span style={styles.generalText}>Эмнэлгийн код:</span>
            <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
               <span style={{ fontWeight: 'bold', fontSize: 16 }}>СЭРГЭЭН ЗАСАХ ЭМЧИЛГЭЭНИЙ КАРТ</span>
            </div>
            <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
               <div>РД: {patientData?.registerNumber}</div>
               <div>ЭМД:</div>
            </div>
            <div style={styles.rowStyle}>
               1. Эцэг /эх/-ийн нэр {patientData?.lastName}
               <span style={{ marginLeft: 50 }}>Нэр {patientData?.firstName}</span>
            </div>
            <div style={styles.rowStyle}>
               2. Нас {patientData?.age}
               <span style={{ marginLeft: 50 }}>
                  Хүйс: /зур/
                  <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
                  <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
               </span>
            </div>
            <div style={styles.rowStyle}>
               3. Эмчилгээ эхэлсэн {moment(formData?.['AM25.1']?.[0]).format('YYYY')} он{' '}
               {moment(formData?.['AM25.1']?.[0]).format('MM')} сар {moment(formData?.['AM25.1']?.[0]).format('DD')}{' '}
               өдөр,
               <span style={{ marginLeft: 20 }}>
                  Эмчилгээ дууссан {moment(formData?.['AM25.1']?.[1]).format('YYYY')} он{' '}
                  {moment(formData?.['AM25.1']?.[1]).format('MM')} сар {moment(formData?.['AM25.1']?.[1]).format('DD')}{' '}
                  өдөр,
               </span>
            </div>

            <div style={styles.rowStyle}>
               4. Ажлын газар, албан тушаал {patientData?.organization}, {patientData?.jobPosition}
            </div>
            <div
               style={{
                  ...styles.rowStyle,
                  ...{ display: 'flex' }
               }}
            >
               <div>
                  <div>5. Үндсэн онош: {formData?.['AM25.2']}</div>
                  <div style={styles.rowStyle}>
                     6. Хэдэн удаа эмчилсэн:{formData?.['AM25.3']}
                     <span style={{ marginLeft: 50 }}>Удаа /зур/: </span>
                     <span style={{ marginLeft: 20 }}>
                        <span className={formData?.['AM25.4'] === 0 ? 'underline mr-1' : 'mr-1'}> анх, </span>
                        <span className={formData?.['AM25.4'] === 1 ? 'underline mr-1' : 'mr-1'}>давтан</span>{' '}
                     </span>
                  </div>

                  <div style={styles.rowStyle}>7. Мэргэжлийн эмчийн заалт {formData?.['AM25.18']}</div>
               </div>
               <div style={{ display: 'flex' }}>
                  <div
                     style={{
                        writingMode: 'vertical-rl',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        rotate: '180deg',
                        marginLeft: 30
                     }}
                  >
                     Өвчний төгсгөл
                  </div>
                  <div style={{ width: '100%' }}>
                     <NewCheckboxGroup value={formData?.['AM25.5']} className="dstory">
                        <NewCheckbox value={0} className="test">
                           <span style={{ fontSize: 12 }}>Эдгэрсэн</span>
                        </NewCheckbox>
                        <br />
                        <NewCheckbox value={1} className="test">
                           <span style={{ fontSize: 12 }}>Сайжирсан</span>
                        </NewCheckbox>
                        <br />
                        <NewCheckbox value={2} className="test">
                           <span style={{ fontSize: 12 }}>Хэвэндээ</span>
                        </NewCheckbox>
                        <br />
                        <NewCheckbox value={3} className="test">
                           <span style={{ fontSize: 12 }}>Дутуу</span>
                        </NewCheckbox>
                     </NewCheckboxGroup>
                  </div>
               </div>
            </div>
            <Table bordered style={{ marginTop: 20 }}>
               <thead>
                  <tr
                     style={{
                        verticalAlign: 'middle'
                     }}
                  >
                     <td
                        style={{
                           width: 300,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        <span>Эмчилгээний нэр</span>
                     </td>
                     <td
                        style={{
                           width: 80,
                           textAlign: 'center',
                           lineHeight: 1,
                           fontSize: 12
                        }}
                     >
                        <span>Ямар эрхтэнд</span>
                     </td>
                     <td style={{ width: 80, textAlign: 'center', fontSize: 12 }}>
                        <span>Зай</span>
                     </td>
                     <td style={{ width: 80, textAlign: 'center', fontSize: 12 }}>
                        <span>Тун</span>
                     </td>
                     <td
                        style={{
                           width: 90,
                           textAlign: 'center',
                           lineHeight: 1,
                           fontSize: 12
                        }}
                     >
                        <span>Үргэлжлэх хугацаа</span>
                     </td>
                     <td
                        style={{
                           width: 100,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        <span>Давтамж</span>
                     </td>
                     <td
                        style={{
                           width: 120,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        <span>Хэдэн удаа</span>
                     </td>
                  </tr>

                  {formData?.['AM25_TABLE1']?.map((el, index) => {
                     return (
                        <tr style={{ height: 30 }} key={index}>
                           <td>{el[0]}</td>
                           <td>{el[1]}</td>
                           <td>{el[2]}</td>
                           <td>{el[3]}</td>
                           <td>{el[4]}</td>
                           <td>{el[5]}</td>
                           <td>{el[6]}</td>
                        </tr>
                     );
                  })}
               </thead>
            </Table>
            <div style={styles.rowStyle}>
               ...................................................................................................................................................................................................................................................................................
            </div>
            <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
               <div>Маягтын ар тал</div>
               <div>Б тал</div>
            </div>
            <div style={styles.rowStyle}>8. Илгээсэн эмч, кабинетийн нэр: {formData?.['AM25.9']}</div>
            <div style={styles.rowStyle}>8. Сэргээн засах эмчилгээний эмч: {formData?.['AM25.10']}</div>
            <div style={styles.rowStyle}>8. Зөвлөгөө өгсөн байдал: {formData?.['AM25.11']}</div>
            <Table bordered style={{ marginTop: 20 }}>
               <thead>
                  <tr
                     style={{
                        verticalAlign: 'middle'
                     }}
                  >
                     <td
                        style={{
                           width: 60,
                           textAlign: 'center',
                           lineHeight: 1,
                           fontSize: 12
                        }}
                     >
                        <span>Он, сар, өдөр</span>
                     </td>
                     <td
                        style={{
                           width: 60,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        Удаа
                     </td>
                     <td
                        style={{
                           width: 120,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        <span>Эмчилгээний нэр</span>
                     </td>
                     <td style={{ width: 80, textAlign: 'center', fontSize: 12 }}>
                        <span>Ямар эрхтэнд</span>
                     </td>
                     <td
                        style={{
                           width: 90,
                           textAlign: 'center',
                           lineHeight: 1,
                           fontSize: 12
                        }}
                     >
                        <span>Хугацаа</span>
                     </td>
                     <td style={{ width: 80, textAlign: 'center', fontSize: 12 }}>
                        <span>Тун</span>
                     </td>
                     <td
                        style={{
                           width: 120,
                           textAlign: 'center',
                           fontSize: 12
                        }}
                     >
                        <span> Гарын үсэг</span>
                     </td>
                  </tr>
                  {formData?.['AM25_TABLE2']?.map((el, index) => {
                     return (
                        <tr style={{ height: 30 }} key={index}>
                           <td>{moment(el[0]).format('YYYY/MM/DD')}</td>
                           <td>{el[1]}</td>
                           <td>{el[2]}</td>
                           <td>{el[3]}</td>
                           <td>{el[4]}</td>
                           <td>{el[5]}</td>
                        </tr>
                     );
                  })}
               </thead>
            </Table>
         </div>
      </div>
   );
}

export default AM25A;
