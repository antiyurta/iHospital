import React from 'react';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import moment from 'moment';

//маягт АМ-21Г
function AM21D(props) {
   console.log('ASD', props);
   const {
      data: { formData, patientData },
      hospitalName
   } = props;
   const styles = {
      generalText: {
         fontSize: 10
      },
      rowStyle: {
         fontSize: 10
      },
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 18,
         height: 18
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
                     <span style={{ fontWeight: 'bold', fontSize: 10 }}>АМ-21Г</span>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 5 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 12 }}>Шинжилгээнд явуулах бичиг</span>
               </div>
               <span style={{ fontSize: 10 }}>Кабинетийн №____________</span>
               <div style={styles.rowStyle}>
                  {patientData?.lastName} овогтой {patientData?.firstName} нэр
               </div>
               <div style={styles.rowStyle}>
                  Нас: {patientData?.age} Хүйс: /зур/{' '}
                  <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
                  <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
               </div>

               <div style={styles.rowStyle}>
                  <div style={{ display: 'flex' }}>
                     <span style={{ marginRight: 5 }}>РД {patientData?.registerNumber}</span>
                  </div>
               </div>
               <div style={styles.rowStyle}>Онош {formData?.['AM21.1']}</div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ marginTop: 20 }
                  }}
               >
                  Нян судлалын шинжилгээний сорьц хийгдэх арга:
               </div>
               <NewCheckboxGroup value={formData?.['AM21.2']} className="dstory">
                  <NewCheckbox value={0} className="test">
                     <span style={{ fontSize: 12 }}>1. Цусны ариун чанар \ бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={1} className="test">
                     <span style={{ fontSize: 12 }}>2. Өтгөн \ бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={2} className="test">
                     <span style={{ fontSize: 12 }}>3. Шээс \ бичил харах, бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={3} className="test">
                     <span style={{ fontSize: 12 }}>4. Цэр бичил харах, бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={4} className="test">
                     <span style={{ fontSize: 12 }}>5. Шархны идээр \бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={5} className="test">
                     <span style={{ fontSize: 12 }}>6. Нүдний арчдас \бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={6} className="test">
                     <span style={{ fontSize: 12 }}>7. Хамар, залгиурын арчдас \бактер суплах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={7} className="test">
                     <span style={{ fontSize: 12 }}>8. Хамрын арчдас \бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={8} className="test">
                     <span style={{ fontSize: 12 }}>9. Үтрээний арчдас \бичил харах, бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={9} className="test">
                     <span style={{ fontSize: 12 }}>10. Амны хөндийн арчдас \бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={10} className="test">
                     <span style={{ fontSize: 12 }}>11. Плеврийн шингэн \ бичил харах, бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={11} className="test">
                     <span style={{ fontSize: 12 }}>12. Үений шингэн \ бичил харах, бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={11} className="test">
                     <span style={{ fontSize: 12 }}>13. Хэвлий хөндийн шингэн \ бичил харах, бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={11} className="test">
                     <span style={{ fontSize: 12 }}>14. Чихний арчдас \бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={11} className="test">
                     <span style={{ fontSize: 12 }}>15. Цөс \бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={11} className="test">
                     <span style={{ fontSize: 12 }}>16. Хүйн арчдас \бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={11} className="test">
                     <span style={{ fontSize: 12 }}>17. Задлангийн мат \ бичил харах, бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={11} className="test">
                     <span style={{ fontSize: 12 }}>18. Шимэгч хорхой илрүүлэх \бактер судлах\</span>
                  </NewCheckbox>
                  <br />
                  <NewCheckbox value={11} className="test">
                     <span style={{ fontSize: 12 }}>
                        19. Дисбактериоз \ам, арьс, гэдэсний хэвийн няи \бактер судлах\
                     </span>
                  </NewCheckbox>
               </NewCheckboxGroup>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ marginTop: 10 }
                  }}
               >
                  <span style={{ marginLeft: 30 }}>Эмч: _____________________/гарын үсэг/</span>
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ marginTop: 10 }
                  }}
               >
                  {moment(formData?.['AM21.3']).format('YYYY')} оны {moment(formData?.['AM21.3']).format('MM')} сарын{' '}
                  {moment(formData?.['AM21.3']).format('DD')} өдөр
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
               <div style={styles.rowStyle}>1. Цэрний шинжилгээ авах</div>
               <div style={styles.rowStyle}>
                  Цэрний сорьцыг өглөөгүүр өвчтөнг олон байхад амны хөндийг зайлуулж /ус, содын уусмалаар/ цэвэрлэгээ,
                  ханиалгаар эхний ялгарах цэрийг орхин дараагийн ялгарлаас 2мл-ээс багагүй шилэн саванд авч лабораторид
                  хүргэнэ.
               </div>
               <div style={styles.rowStyle}>2. Шээсний шинжилгээ авах</div>
               <div style={styles.rowStyle}>
                  Шээсний сорьц авахдаа өглөөний шээсний дунд хэсгээс ариун шилэн саванд 30 мл-ээс багагүй хэмжээтэй
                  авах ба урьдчилан гадна бэлэг эрхтэнийг усаар угаасан байвал зохино.
               </div>
               <div style={styles.rowStyle}>3. Өтгөний шинжилгээ авах</div>
               <div style={styles.rowStyle}>
                  Өтгөний сорьцыг аль болох өнгөр, залхаг, цус, салстай хэсгээс ариун модон савхаар 1 гр-аас багагүй авч
                  шилэн саванд хадгална.
               </div>
               <div style={styles.rowStyle}>
                  Урьдчилан хөтөвчийг 1% хлорамины уусмалаар халдваргүйжүүлж дахин ус хийж 30 минут буцалгах ба 2-3 удаа
                  буцалсан усаар зайлж халдваргүйжүүлэж бодисын үлдэгдлийг арилгана.
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

export default AM21D;
