import moment from 'moment';
import React from 'react';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import dayjs from 'dayjs';

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
                  1. Эцэг /эх/-ийн нэр: {patientData?.lastName} Нэр: {patientData?.firstName} Нас: {patientData?.age}
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
                     <span style={{ fontSize: 12, marginRight: 5 }}>РД: {patientData?.registerNumber}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <span style={{ fontSize: 12, marginRight: 5 }}>ЭМД: {formData?.q1}</span>
                  </div>
                  <div style={{ display: 'flex' }}>
                     <span style={{ fontSize: 12, marginRight: 5 }}>Цахим №: {formData?.q2}</span>
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
                  3. Иргэний гар утас:
                  <span style={{ marginLeft: 30 }}>{patientData?.phoneNo}</span>
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
               <div style={styles.generalText}>6.Илгээж байгаа байгууллагын нэр {formData?.q3}</div>
               <div style={styles.generalText}>
                  7.Илгээсэн: {dayjs(formData.q4)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
               </div>
               <div style={styles.generalText}>
                  8.Эмчлэгч эмчийн нэр {formData?.q5} хувийн дугаар {formData?.q6}
               </div>
               <div style={styles.generalText}>9.Хүлээн авах байгууллагын нэр {formData?.q7}</div>
               <div style={styles.generalText}>10.Иргэнийг илгээж байгаа шалтгаан (сонго)</div>
               <div style={{ marginLeft: 100 }}>
                  <NewCheckboxGroup value={formData?.q8} className="dstory">
                     <NewCheckbox value={'q8-1'} className="test">
                        <span style={{ fontSize: 12 }}>- Онош тодруулах /сонго/</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q8-2'} className="test">
                        <span style={{ fontSize: 12 }}>- Урьдчилан сэргийлэх үзлэг /сонго/</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q8-3'} className="test">
                        <span style={{ fontSize: 12 }}>- Эмчилгээ /сонго/</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q8-4'} className="test">
                        <span style={{ fontSize: 12 }}>- Эмчилгээний дараах хяналт /сонго/</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q8-5'} className="test">
                        <span style={{ fontSize: 12 }}>- Жирэмсний болон төрөх үеийн тусламж, үйлчилгээ</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q8-6'} className="test">
                        <span style={{ fontSize: 12 }}>- Хөнгөвчлөх эмчилгээ</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q8-7'} className="test">
                        <span style={{ fontSize: 12 }}>- Сэргээн засах тусламж, үйлчилгээ</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q8-8'} className="test">
                        <span style={{ fontSize: 12 }}>- Сувилахуйн тусламж, үйлчилгээ</span>
                     </NewCheckbox>
                     <br />
                     <NewCheckbox value={'q8-9'} className="test">
                        <span style={{ fontSize: 12 }}>- Давтан хяналт</span>
                     </NewCheckbox>
                  </NewCheckboxGroup>
                  <br />
                  <NewCheckboxGroup value={null} className="dstory">
                     <NewCheckbox value={1} className="test">
                        <span style={{ fontSize: 12 }}>- Бусад: {formData?.q8Other}</span>
                     </NewCheckbox>
                  </NewCheckboxGroup>
               </div>
               <div style={styles.generalText}>
                  11.Үндсэн онош (Өвчний олон улсын 10-р ангиллын дагуу дэлгэрэнгүй бичнэ) {formData?.q9}{' '}
               </div>
               <div style={{ marginLeft: 100 }}>
                  <div style={styles.generalText}>Хавсарсан онош /сонго/ {formData?.q10}</div>
                  <div style={styles.generalText}>Тайлбар /бичих/{formData?.q11}</div>
               </div>
               <div style={styles.generalText}>
                  12. Шилжүүлэх болсон шалтгааныг үндэслэх шинжилгээ (програмын өгөгдлийг бөглөнө)
               </div>
               <div style={styles.generalText}>ЦЕШ_: {formData?.q12}</div>
               <div style={styles.generalText}>Биохими_: {formData?.q13}</div>
               <div style={styles.generalText}>ШЕШ_: {formData?.q14}</div>
            </div>
         </div>

         <div className="page">
            <div className="subpage">
               <div style={styles.generalText}>Рентген _/эмчийн хариуг бичих/: {formData?.q15}</div>
               <div style={styles.generalText}>Бусад /MRI, KTG/_/эмчийн хариуг бичих/: {formData?.q16}</div>
               <div style={{ marginTop: 20, marginBottom: 20 }}>
                  <div style={styles.generalText}>
                     <b>“Цаг товлох” хэсэг</b>
                  </div>
               </div>
               <div style={styles.generalText}>
                  13. Хүлээн авах эсэх шийдвэр (сонго)
                  <span className={formData?.q17 === 'q17-1' ? 'underline mr-1' : 'mr-1'}>1. тийм, </span>
                  <span className={formData?.q17 === 'q17-2' ? 'underline mr-1' : 'mr-1'}>2. үгүй </span>
               </div>
               <div style={styles.generalText}>
                  14.Хэрэв тийм бол үзлэгийн кабинетын нэр ........................тасгийн нэр /сонго/ .................
               </div>
               <div style={styles.generalText}>15.Хэрэв үгүй бол тайлбар, үндэслэл (сонго)</div>
               <div style={{ marginLeft: 50 }}>
                  <div style={styles.generalText}>
                     <span className="">- тухайн эмнэлэгт тусламж, үйлчилгээ авах боломжгүй</span>
                  </div>
                  <div style={styles.generalText}>- бусад /бичих/: </div>
               </div>
               <div style={styles.generalText}>
                  16. Шийдвэр гаргасан {dayjs(formData.q18)?.format('YYYY он MM сар DD өдөр')}
               </div>
               <div style={styles.generalText}>17.Товлосон {dayjs(formData.q19)?.format('YYYY он MM сар DD өдөр')}</div>
               <div style={{ marginTop: 20, marginBottom: 20 }}>
                  <div style={styles.generalText}>
                     <b>“Хүлээн авах” хэсэг</b>
                  </div>
               </div>
               <div style={styles.generalText}>
                  18. Хүлээн авсан {dayjs(formData.q20)?.format('YYYY он MM сар DD өдөр')}
               </div>
               <div style={styles.generalText}>Хүлээн авах эмчийн нэр {formData?.q21}</div>
               <div style={styles.generalText}>19. Хүлээн авсан: {formData?.q22}</div>
               <div style={styles.generalText}>Хавсарсан онош /сонго/: {formData?.q23}</div>
               <div style={styles.generalText}>20. Эмчлүүлсэн: Үндсэн онош :{formData?.q24}</div>
               <div style={styles.generalText}> Хавсарсан онош /сонго/: {formData?.q25}</div>
               <div style={styles.generalText}>21.Эмнэлэгт хэвтсэн ор хоног /сонго/: {formData?.q26}</div>
               <div style={styles.generalText}>
                  22.Эмнэлгээс гарсан огноо, цаг: {dayjs(formData.q27)?.format('YYYY он MM сар DD өдөр')}
               </div>
               <div style={styles.generalText}>23.Эмнэлгээс гарах үеийн дүгнэлт: {formData?.q28}</div>
               <div style={styles.generalText}>
                  24.Эмчлэгч эмчийн нэр: {formData?.q29} утасны дугаар: {formData?.q30} цахим хаяг: {formData?.q31}
               </div>
               <div style={{ marginTop: 20, marginBottom: 20 }}>
                  <div style={styles.generalText}>
                     <b>“Эргэх холбоо тогтоох” хэсэг</b>
                  </div>
               </div>
               <div style={styles.generalText}>25. Илгээсэн байгууллагад өгөх зөвлөмж /бичих/: {formData?.q32}</div>
               <div style={styles.generalText}>
                  26. Зөвлөмжийг хүлээн авсан огноо
                  <span style={{ marginLeft: 20 }}>{dayjs(formData.q33)?.format('YYYY он MM сар DD өдөр')}</span>
               </div>
               <div style={styles.generalText}>
                  27. Иргэнийг хяналтад авсан эсэх (сонго)
                  <span style={{ marginLeft: 20 }}>
                     <span className={formData?.q34 === 'q34-1' ? 'underline mr-1' : 'mr-1'}>1. тийм</span>
                     <span className={formData?.q34 === 'q34-2' ? 'underline mr-1' : 'mr-1'}>2. үгүй</span>
                  </span>
               </div>
               <div style={styles.generalText}>
                  28. Иргэнийг хяналтад авсан эмчийн нэр: {formData?.q35} утас: {formData?.q36} цахим хаяг:{' '}
                  {formData?.q37}
               </div>
            </div>
         </div>
      </>
   );
}

export default AM_13V;
