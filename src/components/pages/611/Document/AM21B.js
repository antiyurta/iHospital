import React from 'react';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import moment from 'moment';

//маягт АМ-21Б
function AM21B(props) {
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
                     <span style={{ fontWeight: 'bold', fontSize: 12 }}>АМ-21Б</span>
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
               <div style={{ ...styles.rowStyle, ...{ textAlign: 'center' } }}>Cудасны цусны шинжилгээ</div>
               <NewCheckboxGroup value={formData[0]?.data?.['AM21.2.1']} className="dstory">
                  <NewCheckbox value={0} className="test">
                     <span style={{ fontSize: 12 }}>
                        1. Элэгний үйл ажиллагаа (АЛАТ, АСАТ, Билирубин, тимол, сульма)
                     </span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={1} className="test">
                     <span style={{ fontSize: 12 }}>2. Бөөрний үйл ажиллагаа (мочевин, креатинин, үлдэгдэл азот)</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={2} className="test">
                     <span style={{ fontSize: 12 }}>3. Микроэлементүүд (Na, K, CL, Ca, Fe, Mg, P)</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={3} className="test">
                     <span style={{ fontSize: 12 }}>4. Бусад (сахар, уураг, альбумин, холестерин, липид)</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={4} className="test">
                     <span style={{ fontSize: 12 }}>5. Өвөрмөц /АСЛО, РФ, C реак-уураг, ЛЕ эс/</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={5} className="test">
                     <span style={{ fontSize: 12 }}>6. Иммуны шинжилгээ /LgA, LgM, LgG/</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={6} className="test">
                     <span style={{ fontSize: 12 }}>7. Альфа амилаза</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={7} className="test">
                     <span style={{ fontSize: 12 }}>8. Фермент /КК, ГГТ, ШФ, КФ, ЛДГ/</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={8} className="test">
                     <span style={{ fontSize: 12 }}>9. Коагулограмм /РТ, ТТ, АРТВ, Фибриноген/</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={9} className="test">
                     <span style={{ fontSize: 12 }}>10. Хеликобактери /H pylori/</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={10} className="test">
                     <span style={{ fontSize: 12 }}>11. Серологи /RPR/</span>
                  </NewCheckbox>
                  <br />
               </NewCheckboxGroup>
               <br />
               <NewCheckboxGroup value={null} className="dstory">
                  <NewCheckbox value={1} className="test">
                     <span style={{ fontSize: 12 }}>12. Бусад {formData[0]?.data?.['AM21.2.2']}</span>
                  </NewCheckbox>
               </NewCheckboxGroup>
               <div style={styles.rowStyle}>
                  Эмчийн нэр {formData[0]?.data?.['AM21.3']}
                  <span style={{ marginLeft: 10 }}>/................................./</span>
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ marginTop: 10 }
                  }}
               >
                  {moment(formData[0]?.data?.['AM21.4']).format('YYYY')} оны{' '}
                  {moment(formData[0]?.data?.['AM21.4']).format('MM')} сарын{' '}
                  {moment(formData[0]?.data?.['AM21.4']).format('DD')} өдөр
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
               <div style={styles.rowStyle}>
                  1. Судасны цусны шинжилгээ өгөхдөө урьд орой нь өөх тостой, шарсан хуурсан хоол, архи, тамхи хэрэглэж
                  болохгүй.
               </div>
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

export default AM21B;
