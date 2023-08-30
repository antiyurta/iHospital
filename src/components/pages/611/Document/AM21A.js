import React from 'react';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import moment from 'moment';

//маягт АМ-21A
function AM21A(props) {
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
         fontSize: 12,
         marginTop: 10
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
                     <span style={{ fontWeight: 'bold', fontSize: 12 }}>АМ-21А</span>
                  </div>
               </div>
               <div
                  style={{
                     textAlign: 'center',
                     marginTop: 10,
                     marginBottom: 15
                  }}
               >
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>Шинжилгээнд явуулах бичиг</span>
               </div>
               <span style={{ fontSize: 12 }}>Кабинетийн №____________</span>
               <div style={styles.rowStyle}>
                  {patientData?.lastName} овогтой {patientData?.firstName} нэр
               </div>
               <div style={styles.rowStyle}>
                  Нас: {patientData?.age} Хүйс: /зур/{' '}
                  <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
                  <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
               </div>
               <div style={styles.rowStyle}>Онош: {formData[0]?.data?.['AM21.1']}</div>
               <div style={{ ...styles.rowStyle, ...{ textAlign: 'center' } }}>Шээсний шинжилгээ</div>
               <NewCheckboxGroup value={formData[0]?.data?.['AM21.2.1']} className="dstory">
                  <NewCheckbox value={0} className="test">
                     <span style={{ fontSize: 12 }}>1. Шээсний ерөнхий шинжилгээ</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={1} className="test">
                     <span style={{ fontSize: 12 }}>2. Амбуржийн сорил</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={2} className="test">
                     <span style={{ fontSize: 12 }}>3. Зимницкийн сорил</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={3} className="test">
                     <span style={{ fontSize: 12 }}>4. Ничепоренкогийн сорил</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={4} className="test">
                     <span style={{ fontSize: 12 }}>5. Аддис-каковскийн сорил</span>
                  </NewCheckbox>
               </NewCheckboxGroup>
               <br />
               <NewCheckboxGroup value={null} className="dstory">
                  <NewCheckbox value={1} className="test">
                     <span style={{ fontSize: 12 }}>6. {formData[0]?.data?.['AM21.2.2']}</span>
                  </NewCheckbox>
               </NewCheckboxGroup>
               <div style={styles.rowStyle}>
                  Эмчийн нэр {formData[0]?.data?.['AM21.3']}
                  <span style={{ marginLeft: 10 }}>/................................./</span>
               </div>
               <div style={styles.rowStyle}>
                  {moment(formData[0]?.data?.['AM21.4']).format('YYYY')} оны{' '}
                  {moment(formData[0]?.data?.['AM21.4']).format('MM')} сарын{' '}
                  {moment(formData[0]?.data?.['AM21.4']).format('DD')} өдөр
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ display: 'flex', flexDirection: 'column' }
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
               <div style={styles.rowStyle}>
                  1. Маш сайн угааж цэвэрлэж хатаасан, өргөн амтай, шилэндээ тохирсон таглаатай, бараан биш шилэнд
                  өглөөний өлөн үед авсан шээсийг хөөсрүүлж сэгсрэхгүй авчирна.
               </div>
               <div style={styles.rowStyle}>
                  2. Шээсний ерөнхий шинжилгээ өгөхийн өмнө бэлэг эрхтэнээ сайтар угаасны дараа тусгай бэлдсэн шилэндээ
                  шээснийхээ дунд хэсгээс 100-200 мл шээс авна.
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

export default AM21A;
