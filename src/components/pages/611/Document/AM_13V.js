import moment from 'moment';
import React from 'react';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';

//маягт АМ-13В
function AM_13V(props) {
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
         fontSize: 14,
         lineHeight: 1.3,
         marginTop: 5
      },
      blankSpaces: {
         fontSize: 10
      },
      leftText: {
         verticalAlign: 'middle',
         fontSize: 14,
         padding: 0,
         paddingLeft: 5
      },
      centerText: {
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 14,
         padding: 0
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
                  <span style={styles.generalText}></span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                     <span style={{ fontWeight: 'bold', fontSize: 12 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-13В</span>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 10, marginBottom: 15 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>
                     ЭМНЭЛЭГТ ИРГЭНИЙГ ИЛГЭЭХ ЦАХИМ БҮРТГЭЛИЙН МАЯГТ
                  </span>
               </div>
               <div style={styles.leftText}>
                  <b>Паспортын хэсэг</b>
               </div>
               <div style={styles.generalText}>
                  1. Эцэг /эх/-ийн нэр {patientData?.lastName} Нэр {patientData?.firstName} Нас {patientData?.age}
               </div>
               <div
                  style={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     marginTop: 10,
                     marginBottom: 10
                  }}
               >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <span style={{ fontSize: 12, marginRight: 5 }}>РД {patientData?.registerNumber}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <span style={{ fontSize: 12, marginRight: 5 }}>ЭМД </span>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                  </div>
                  <div style={{ display: 'flex' }}>
                     <span style={{ fontSize: 12, marginRight: 5 }}>Цахим № </span>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                     <div style={styles.rowCells}></div>
                  </div>
               </div>
               <div style={{ height: 30 }}></div>
               <div style={styles.generalText}>
                  2.Хүйс (сонго)
                  <span style={{ marginLeft: 30 }}>
                     <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
                     <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
                  </span>
               </div>
               <div style={styles.generalText}>
                  3. Иргэний
                  <span style={{ marginLeft: 30 }}>гар утас: {patientData?.phoneNo}</span>
                  <span style={{ marginLeft: 30 }}>цахим хаяг: {patientData?.email}</span>
               </div>
               <div style={styles.generalText}>
                  4.Иргэний (асран хамгаалагчийн) утас______________ гар утас_______________цахим хаяг ______________
               </div>
               <div style={styles.generalText}>
                  5. Иргэний гэрийн /тогтмол/ хаяг: {patientData?.address}, {patientData?.building}
               </div>
               <div style={{ marginTop: 20, marginBottom: 20 }}>
                  <div style={styles.generalText}>
                     <b>“Илгээх” хэсэг</b>
                  </div>
               </div>
               <div style={styles.generalText}>
                  6.Илгээж байгаа байгууллагын нэр (сонго)................................код /автоматаар гарч ирнэ/
               </div>
               <div style={styles.generalText}>
                  7.Илгээсэн: {moment(formData?.['АМ13.1']).format('YYYY')} оны{' '}
                  {moment(formData?.['АМ13.1']).format('MM')} сарын {moment(formData?.['АМ13.1']).format('DD')} өдөр{' '}
                  {moment(formData?.['АМ13.1']).format('HH')} цаг {moment(formData?.['АМ13.1']).format('MM')} минут{' '}
                  {moment(formData?.['АМ13.1']).format('SS')} секунд
               </div>
               <div style={styles.generalText}>
                  8.Эмчлэгч эмчийн нэр .............................................хувийн дугаар
                  ........................
               </div>
               <div style={styles.generalText}>9.Хүлээн авах байгууллагын нэр (сонго){formData?.['АМ13.2']}</div>
               <div style={styles.generalText}>10.Иргэнийг илгээж байгаа шалтгаан (сонго)</div>
               <div style={{ marginLeft: 100 }}>
                  <NewCheckboxGroup value={formData?.['АМ13.3.1']} className="dstory">
                     <NewCheckbox value={0} className="test">
                        <span style={{ fontSize: 12 }}>- Онош тодруулах /сонго/</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={1} className="test">
                        <span style={{ fontSize: 12 }}>- Урьдчилан сэргийлэх үзлэг /сонго/</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={2} className="test">
                        <span style={{ fontSize: 12 }}>- Эмчилгээ /сонго/</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={3} className="test">
                        <span style={{ fontSize: 12 }}>- Эмчилгээний дараах хяналт /сонго/</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={4} className="test">
                        <span style={{ fontSize: 12 }}>- Жирэмсний болон төрөх үеийн тусламж, үйлчилгээ</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={5} className="test">
                        <span style={{ fontSize: 12 }}>- Хөнгөвчлөх эмчилгээ</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={6} className="test">
                        <span style={{ fontSize: 12 }}>- Сэргээн засах тусламж, үйлчилгээ</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={7} className="test">
                        <span style={{ fontSize: 12 }}>- Сувилахуйн тусламж, үйлчилгээ</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={8} className="test">
                        <span style={{ fontSize: 12 }}>- Давтан хяналт</span>
                     </NewCheckbox>
                  </NewCheckboxGroup>
                  <br />
                  <NewCheckboxGroup value={null} className="dstory">
                     <NewCheckbox value={1} className="test">
                        <span style={{ fontSize: 12 }}>- Бусад: {formData?.['АМ13.3.2']}</span>
                     </NewCheckbox>
                  </NewCheckboxGroup>
               </div>
               <div style={styles.generalText}>
                  11.Үндсэн онош (Өвчний олон улсын 10-р ангиллын дагуу дэлгэрэнгүй бичнэ) {formData?.['АМ13.4.1']}{' '}
                  /сонго/
               </div>
               <div style={{ marginLeft: 100 }}>
                  <div style={styles.generalText}>Хавсарсан онош /сонго/ {formData?.['АМ13.4.2']}</div>
                  <div style={styles.generalText}>Хавсарсан онош /сонго/ {formData?.['АМ13.4.3']}</div>
                  <div style={styles.generalText}>Хавсарсан онош /сонго/ {formData?.['АМ13.4.4']}</div>
                  <div style={styles.generalText}>Хавсарсан онош /сонго/ {formData?.['АМ13.4.5']}</div>
                  <div style={styles.generalText}>Тайлбар /бичих/{formData?.['АМ13.4.6']}</div>
               </div>
               <div style={styles.generalText}>
                  12. Шилжүүлэх болсон шалтгааныг үндэслэх шинжилгээ (програмын өгөгдлийг бөглөнө)
               </div>
               <div style={styles.generalText}>ЦЕШ_/сонгох/: {formData?.['АМ13.5.1']}</div>
               <div style={styles.generalText}>Биохими_/сонгох/: {formData?.['АМ13.5.2']}</div>
               <div style={styles.generalText}>ШЕШ_/сонгох/: {formData?.['АМ13.5.3']}</div>
            </div>
         </div>

         <div className="page">
            <div className="subpage">
               <div style={styles.generalText}>Рентген _/эмчийн хариуг бичих/</div>
               <div style={styles.generalText}>{formData?.['АМ13.5.4']}</div>
               <div style={styles.generalText}>Бусад /MRI, KTG/_/эмчийн хариуг бичих/ {formData?.['АМ13.5.5']}</div>
               <div style={{ marginTop: 20, marginBottom: 20 }}>
                  <div style={styles.generalText}>
                     <b>“Цаг товлох” хэсэг</b>
                  </div>
               </div>
               <div style={styles.generalText}>
                  13. Хүлээн авах эсэх шийдвэр (сонго)
                  <span className={formData?.['АМ13.6']?.[0] === 0 ? 'underline mr-1' : 'mr-1'}>1. тийм, </span>
                  <span className={formData?.['АМ13.6']?.[0] === 1 ? 'underline mr-1' : 'mr-1'}>2. үгүй </span>
               </div>
               <div style={styles.generalText}>
                  14.Хэрэв тийм бол үзлэгийн кабинетын нэр ........................тасгийн нэр /сонго/ .................
               </div>
               <div style={styles.generalText}>15.Хэрэв үгүй бол тайлбар, үндэслэл (сонго)</div>
               <div style={{ marginLeft: 50 }}>
                  <div style={styles.generalText}>
                     <span className={formData?.['АМ13.7.1']?.[0] === 1 ? 'underline mr-1' : 'mr-1'}>
                        - тухайн эмнэлэгт тусламж, үйлчилгээ авах боломжгүй
                     </span>
                  </div>
                  <div style={styles.generalText}>- бусад /бичих/ {formData?.['АМ13.7.2']}</div>
               </div>
               <div style={styles.generalText}>
                  16. Шийдвэр гаргасан {moment(formData?.['АМ13.8']).format('YYYY')} оны{' '}
                  {moment(formData?.['АМ13.8']).format('MM')} сарын {moment(formData?.['АМ13.8']).format('DD')} өдөр{' '}
                  {moment(formData?.['АМ13.8']).format('HH')} цаг {moment(formData?.['АМ13.8']).format('MM')} минут{' '}
                  {moment(formData?.['АМ13.8']).format('SS')} секунд
               </div>
               <div style={styles.generalText}>
                  17.Товлосон {moment(formData?.['АМ13.9']).format('YYYY')} оны{' '}
                  {moment(formData?.['АМ13.9']).format('MM')} сарын {moment(formData?.['АМ13.9']).format('DD')} өдөр{' '}
                  {moment(formData?.['АМ13.9']).format('HH')} цаг{' '}
               </div>
               <div style={{ marginTop: 20, marginBottom: 20 }}>
                  <div style={styles.generalText}>
                     <b>“Хүлээн авах” хэсэг</b>
                  </div>
               </div>
               <div style={styles.generalText}>
                  18. Хүлээн авсан {moment(formData?.['АМ13.10']).format('YYYY')} оны{' '}
                  {moment(formData?.['АМ13.10']).format('MM')} сарын {moment(formData?.['АМ13.10']).format('DD')} өдөр{' '}
                  {moment(formData?.['АМ13.10']).format('HH')} цаг Хүлээн авах эмчийн нэр: {formData?.['АМ13.11']}
               </div>
               <div style={styles.generalText}>
                  19. Хүлээн авсан: Үндсэн онош (Өвчний олон улсын 10-р ангиллын дагуу дэлгэрэнгүй бичнэ)
               </div>
               <div style={styles.generalText}>___Хавсарсан онош /сонго/: {formData?.['АМ13.12.1']}</div>
               <div style={styles.generalText}>Хавсарсан онош /сонго/: {formData?.['АМ13.12.2']}</div>
               <div style={styles.generalText}>
                  20. Эмчлүүлсэн: Үндсэн онош (Өвчний олон улсын 10-р ангиллын дагуу дэлгэрэнгүй бичнэ)
               </div>
               <div style={styles.generalText}> ___Хавсарсан онош /сонго/: {formData?.['АМ13.13.2']}</div>
               <div style={styles.generalText}>21.Эмнэлэгт хэвтсэн ор хоног /сонго/: {formData?.['АМ13.14']}</div>
               <div style={styles.generalText}>
                  22.Эмнэлгээс гарсан огноо, цаг: {moment(formData?.['АМ13.15']).format('YYYY-MM-DD HH:MM:SS')}
               </div>
               <div style={styles.generalText}>23.Эмнэлгээс гарах үеийн дүгнэлт</div>
               <div style={styles.generalText}>(эпикриз)_/бичих/: {formData?.['АМ13.16']}</div>
               <div style={styles.generalText}>
                  24.Эмчлэгч эмчийн нэр: {formData?.['АМ13.17.1']} утасны дугаар: {formData?.['АМ13.17.2']} цахим хаяг:{' '}
                  {formData?.['АМ13.17.3']}
               </div>
               <div style={{ marginTop: 20, marginBottom: 20 }}>
                  <div style={styles.generalText}>
                     <b>“Эргэх холбоо тогтоох” хэсэг</b>
                  </div>
               </div>
               <div style={styles.generalText}>
                  25. Илгээсэн байгууллагад өгөх зөвлөмж /бичих/: {formData?.['АМ13.18']}
               </div>
               <div style={styles.generalText}>
                  26. Зөвлөмжийг хүлээн авсан огноо
                  <span style={{ marginLeft: 20 }}>{moment(formData?.['АМ13.19']).format('YYYY-MM-DD HH:MM:SS')}</span>
               </div>
               <div style={styles.generalText}>
                  27. Иргэнийг хяналтад авсан эсэх (сонго)
                  <span style={{ marginLeft: 20 }}>
                     <span className={formData?.['АМ13.20']?.[0] === 0 ? 'underline mr-1' : 'mr-1'}>1.тийм</span>
                     <span className={formData?.['АМ13.20']?.[0] === 1 ? 'underline mr-1' : 'mr-1'}>2. үгүй</span>
                  </span>
               </div>
               <div style={styles.generalText}>
                  28. Иргэнийг хяналтад авсан эмчийн нэр {formData?.['АМ13.21.1']} утас: {formData?.['АМ13.21.2']}цахим
                  хаяг: {formData?.['АМ13.21.3']}
               </div>
            </div>
         </div>
      </>
   );
}

export default AM_13V;
