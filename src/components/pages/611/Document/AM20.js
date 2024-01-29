import React from 'react';
import { Table } from 'react-bootstrap';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import dayjs from 'dayjs';

//маягт АМ-20
function AM20(props) {
   console.log('AM20', props);
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
      }
   };
   return (
      <>
         <div className="page">
            <div className="subpage">
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     textAlign: 'right'
                  }}
               >
                  <span
                     style={{
                        ...styles.generalText,
                        ...{}
                     }}
                  >
                     Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
                  </span>
                  <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                  <span style={{ fontWeight: 'bold', fontSize: 12 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-20</span>
               </div>
               <div style={{ textAlign: 'center', marginTop: 10, marginBottom: 15 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>АМБУЛАТОРИОР ЭМЧЛҮҮЛЭГСДИЙН КАРТ №</span>
               </div>
               <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ width: '50%' }}>
                     <div style={{ fontSize: 12, textAlign: 'center' }}>Эмнэлэг: {hospitalName}</div>
                  </div>
                  <div style={{ width: '50%' }}>
                     <div style={{ fontSize: 12 }}>1. Эцэг /эх/-ийн нэр: {patientData?.lastName}</div>
                     <div style={{ fontSize: 12 }}>2. Нэр: {patientData?.firstName}</div>
                     <div style={{ fontSize: 12 }}>3. Нас: {patientData?.age} 4. Хүйс /зур/ 
                  <span style={{ marginLeft: 30 }}>
                     <span className={patientData?.genderType === 'MAN' ? 'underline font-bold' : ''}> эрэгтэй, </span>
                     <span className={patientData?.genderType === 'WOMAN' ? 'underline font-bold' : ''}>эмэгтэй</span>
                  </span></div>
                     <div style={{ fontSize: 12 }}>5. Яс үндэс _______________________________________________</div>
                     <div style={{ fontSize: 12 }}>6. Тогтмол хаяг __________________________________________</div>
                     <div style={{ fontSize: 12 }}>___________________________________________________________</div>
                     <div style={{ fontSize: 12 }}>___________________________________________________________</div>
                  </div>
               </div>
               <div style={{ marginTop: 200, marginBottom: 30 }}>
                  <span style={styles.generalTextBold}>2-р тал</span>
               </div>
               <div style={{ fontSize: 12, marginTop: 5 }}>
                  7. Ажлын газар: {formData?.q1}
               </div>
               <div style={{ fontSize: 12, marginTop: 5 }}>
                  8. Албан тушаал:  {formData?.q2}
                  
               </div>
               <div style={{ fontSize: 12, marginTop: 5 }}>
                  9. Мэргэжил: {formData?.q3} 10. Боловсрол: /зур/
                  <NewCheckboxGroup value={formData?.['q4']} className="dstory">
                     <NewCheckbox value={'q4-01'} className="test">
                        <span style={{ fontSize: 10 }}> Боловсролгүй,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q4-02'} className="test">
                        <span style={{ fontSize: 10 }}> Бага,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q4-03'} className="test">
                        <span style={{ fontSize: 10 }}> Бүрэн дунд,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q4-04'} className="test">
                        <span style={{ fontSize: 10 }}> Мэргэжлийн болон техникийн,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q4-05'} className="test">
                        <span style={{ fontSize: 10 }}> Дипломын,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q4-06'} className="test">
                        <span style={{ fontSize: 10 }}> Бакалавр,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q4-07'} className="test">
                        <span style={{ fontSize: 10 }}> Магистр,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q4-08'} className="test">
                        <span style={{ fontSize: 10 }}> Доктор</span>
                     </NewCheckbox>
                  </NewCheckboxGroup>       
               </div>
               <div style={{ fontSize: 12, marginTop: 5 }}>
                  10. Карт нээсэн {dayjs(formData.q5)?.format('YYYY он MM сар DD өдөр')} хаасан {dayjs(formData.q6)?.format('YYYY он MM сар DD өдөр')}
               </div>
               <Table bordered style={{ marginTop: 20 }} className="document">
                  <thead>
                     <tr>
                        <td rowSpan={2} style={{ ...styles.centerText, ...{ width: '45%' } }}>
                           Эмнэлгийн хуудас олгох болсон онош
                        </td>
                        <td colSpan={2} style={{ ...styles.centerText, ...{ width: '25%' } }}>
                           Чөлөө олголт
                        </td>
                        <td rowSpan={2} style={{ ...styles.centerText, ...{ width: '30%' } }}>
                           Эцсийн онош
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.verticalText, ...{ width: 20 } }}>Эхэлсэн</td>
                        <td style={{ ...styles.verticalText, ...{ width: 20 } }}>Дууссан</td>
                     </tr>
                     {formData?.q7?.map((el, index) => {
                        return (
                           <tr key={index}>
                              <td style={{ height: 30, width: 30 }}>{el['q7-1']}</td>
                              <td style={{ height: 30, width: 30 }}>{dayjs(el['q7-2'])?.format('YYYY-MM-DD')}</td>
                              <td style={{ height: 30, width: 30 }}>{dayjs(el['q7-3'])?.format('YYYY-MM-DD')}</td>
                              <td style={{ height: 30, width: 30 }}>{el['q7-4']}</td>
                           </tr>
                        );
                     })}
                  </thead>
               </Table>
            </div>
         </div>

         <div className="page">
            <div className="subpage">
               <span style={{ ...styles.generalText, ...{ fontWeight: 'bold' } }}>3-р тал</span>
               <Table bordered className="document">
                  <thead>
                     <tr>
                        <td
                           style={{
                              ...styles.verticalText,
                              ...{ width: '5%', height: 50 }
                           }}
                        >
                           Он сар өдөр
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: '50%' } }}>Эмчийн тэмдэглэл</td>
                        <td style={{ ...styles.centerText, ...{ width: '40%' } }}>заалт</td>
                     </tr>
                     {formData?.q8?.map((el, index) => {
                        return (
                           <tr key={index}>
                              <td>{dayjs(el['q8-1'])?.format('YYYY-MM-DD')}</td>
                              <td>{el['q8-2']}</td>
                              <td>{el['q8-3']}</td>
                           </tr>
                        );
                     })}
                  </thead>
               </Table>
               <span style={{ ...styles.generalText, ...{ fontWeight: 'bold' } }}>4, 16-р тал</span>
               <Table bordered className="document">
                  <thead>
                     <tr>
                        <td
                           style={{
                              ...styles.verticalText,
                              ...{ width: '5%', height: 50 }
                           }}
                        >
                           Он сар өдөр
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: '50%' } }}>Эмчийн тэмдэглэл</td>
                        <td style={{ ...styles.centerText, ...{ width: '40%' } }}>заалт</td>
                     </tr>
                     {formData?.q9?.map((el, index) => {
                        return (
                           <tr key={index}>
                              <td>{dayjs(el['q9-1'])?.format('YYYY-MM-DD')}</td>
                              <td>{el['q9-2']}</td>
                              <td>{el['q9-3']}</td>
                           </tr>
                        );
                     })}
                  </thead>
               </Table>
            </div>
         </div>
      </>
   );
}

export default AM20;
