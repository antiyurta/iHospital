import React from 'react';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import moment from 'moment';

//маягт АМ-21В
function AM21V(props) {
   console.log('ASD', props);
   const {
      data: { formData, patientData },
      hospitalName
   } = props;
   const styles = {
      generalText: {
         fontSize: 12
      },
      rowStyle: {
         fontSize: 12
      }
   };
   return (
      <>
         <div className="pageA5">
            <div className="subpageA5">
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
                  <div>
                     <span
                        style={{
                           ...styles.generalText,
                           ...{ float: 'left' }
                        }}
                     >
                        Эмнэлгийн нэр: {hospitalName}
                     </span>
                     <span style={{ fontWeight: 'bold', fontSize: 12 }}>АМ-21В</span>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 10, marginBottom: 15 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>Шинжилгээнд явуулах бичиг</span>
               </div>
               <span style={{ fontSize: 12 }}>Кабинетийн №____________</span>
               <div style={styles.rowStyle}>
                  {' '}
                  {patientData?.lastName} овогтой {patientData?.firstName} нэр
               </div>
               <div style={styles.rowStyle}>
                  Нас: {patientData?.age} Хүйс: /зур/{' '}
                  <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
                  <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
               </div>
               <div style={styles.rowStyle}>Онош: {formData?.['AM21.3']}</div>
               <div style={{ ...styles.rowStyle, ...{ textAlign: 'center' } }}>Өндөгний цусны шинжилгээ</div>
               <NewCheckboxGroup value={formData?.['АМ21.1.1']} className="dstory">
                  <NewCheckbox value={0} className="test">
                     <span style={{ fontSize: 12 }}>1. Ерөнхий шинжилгээ (Лейкоцит, Гемоглобин, СОЭ, Лейкограмм)</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={1} className="test">
                     <span style={{ fontSize: 12 }}>2. Дэлгэрэнгүй (ЦЕШ+Эритроцит, Тромбоцит, Гематокрит)</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={2} className="test">
                     <span style={{ fontSize: 12 }}>3. Цусны урсалт, гоожилт</span>
                  </NewCheckbox>
                  <br />
               </NewCheckboxGroup>
               <br />
               <NewCheckboxGroup value={null} className="dstory">
                  <NewCheckbox value={1} className="test">
                     <span style={{ fontSize: 12 }}>4. Бусад {formData?.['АМ21.1.2']}</span>
                  </NewCheckbox>
               </NewCheckboxGroup>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ marginTop: 10 }
                  }}
               >
                  Эмчийн нэр {formData?.['АМ21.4']}
                  <span style={{ marginLeft: 30 }}>/................................./</span>
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ marginTop: 10 }
                  }}
               >
                  {moment(formData?.['AM21.2']).format('YYYY')} оны {moment(formData?.['AM21.2']).format('MM')} сарын{' '}
                  {moment(formData?.['AM21.2']).format('DD')} өдөр
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ marginTop: 10 }
                  }}
               >
                  Ар тал
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ textAlign: 'center' }
                  }}
               >
                  Зөвлөмж
               </div>
               <div style={styles.rowStyle}>1. Судасны цусны шинжилгээ өгөхдөө урьд орой нь</div>
               <div style={styles.rowStyle}>2. Өглөө нь өлөн байвал сайн.</div>
               <div style={styles.rowStyle}>
                  3. Тухайн шинжилгээний өмнө рентген, эхо, дурангийн шинжилгээг хийж болохгүй.
               </div>
               <div style={styles.rowStyle}>
                  4. Шинжлүүлэгч сэтгэл санаа тайван, даарч ядраагүй, эм тариа хэрэглэхгүй байх.
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ textAlign: 'center' }
                  }}
               >
                  Танд баярлалаа
               </div>
            </div>
         </div>
      </>
   );
}

export default AM21V;
