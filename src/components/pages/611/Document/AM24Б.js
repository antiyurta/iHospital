import dayjs from 'dayjs';
import moment from 'moment';
import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-24Б
function AM24Б(props) {
   console.log('AM24Б', props);
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
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-24Б</span>
               </div>
            </div>
            <div style={{ display: 'flex' }}>
               <span style={styles.generalText}>Эмнэлгийн код:</span>
               <div style={{ display: 'flex', marginLeft: 5 }}>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
               </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
               <span style={{ fontWeight: 'bold', fontSize: 16 }}>ХЭВЛИЙН ХӨНДИЙН ЭРХТНҮҮДИЙН ХЭТ АВИАН ОНОШИЛГОО</span>
            </div>
            <div style={{ ...styles.generalText, ...{ marginLeft: 550 } }}>
               <div>{dayjs(formData.q1)?.format('YYYY он MM сар DD өдөр')}</div>
            </div>
            <div style={styles.rowStyle}>
               Эцэг /эх/-ийн нэр: {patientData?.lastName} Нас: {patientData?.age} Хүйс: /зур/{' '}
               <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
               <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
            </div>
            <div style={styles.rowStyle}>
               Нэр: {patientData?.firstName}
               <span style={{ marginLeft: 50 }}></span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Элэг:</span> Хэмжээ {formData?.q2}
               <span style={{ fontWeight: 'bold' }}> Гадаргуу:</span>
               <span className={formData?.q3 === 'q3-1' ? 'underline mr-1' : 'mr-1'}> тэгш, </span>
               <span className={formData?.q3 === 'q3-2' ? 'underline mr-1' : 'mr-1'}> тэгш бус </span>
               <span style={{ fontWeight: 'bold' }}> Бүтэц: {formData?.['q4-2-1']}</span>
               <span className={formData?.q4 === 'q4-1' ? 'underline mr-1' : 'mr-1'}> жигд, </span>
               <span className={formData?.q4 === 'q4-2' ? 'underline mr-1' : 'mr-1'}> жигд бус </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Эхо ойлт: </span>
               {formData?.['q5-3-1']}
               <span className={formData?.q5 === 'q5-1' ? 'underline mr-1' : 'mr-1'}> хэвийн, </span>
               <span className={formData?.q5 === 'q5-2' ? 'underline mr-1' : 'mr-1'}> ихэссэн, </span>
               <span className={formData?.q5 === 'q5-3' ? 'underline mr-1' : 'mr-1'}> багассан </span>
               <span style={{ fontWeight: 'bold' }}> Үүдэн венийн голч: </span>
               {formData?.q6}
               {formData?.['AM24B.6']}
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Голомтот:</span>
               <span className={formData?.['AM24B.7'] === 0 ? 'underline mr-1' : 'mr-1'}> өөрчлөлтгүй, </span>
               <span className={formData?.['AM24B.7'] === 1 ? 'underline mr-1' : 'mr-1'}> өөрчлөлттэй </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Бусад:</span>
               {formData?.q7}
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Цөсний хүүдий: </span>
               Байрлал, хэлбэр хэмжээ: {formData?.q8}
               <span style={{ fontWeight: 'bold' }}> Хана:</span>
               <span className={formData?.q9 === 'q9-1' ? 'underline mr-1' : 'mr-1'}> хэвийн, </span>
               <span className={formData?.q9 === 'q9-2' ? 'underline mr-1' : 'mr-1'}> зузаарсан, </span>
               <span className={formData?.q9 === 'q9-3' ? 'underline mr-1' : 'mr-1'}> нимгэрсэн </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Агууламж, голомтот өөрчлөлт:</span>
               <span className={formData?.q10 === 'q10-1' ? 'underline mr-1' : 'mr-1'}> хэвийн, </span>
               <span className={formData?.q10 === 'q10-2' ? 'underline mr-1' : 'mr-1'}> цөс өтгөрсөн, </span>
               <span className={formData?.q10 === 'q10-3' ? 'underline mr-1' : 'mr-1'}> тунадастай, </span>
               <span className={formData?.q10 === 'q10-4' ? 'underline mr-1' : 'mr-1'}> чулуутай, </span>
               <span className={formData?.q10 === 'q10-5' ? 'underline mr-1' : 'mr-1'}> ургацагтай </span>
               {formData?.['q10-4-1']}
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Цөсний ерөнхий цорго:</span>
               <span className={formData?.q11 === 'q11-1' ? 'underline mr-1' : 'mr-1'}> өргөсөөгүй, </span>
               <span className={formData?.q11 === 'q11-2' ? 'underline mr-1' : 'mr-1'}> өргөссөн голч</span>
               {formData?.['q11-2-1']},
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Нойр булчирхай:</span>
               Хэмжээ {formData?.q12},<span style={{ fontWeight: 'bold' }}> Хүрээ:</span>
               <span className={formData?.q13 === 'q13-1' ? 'underline mr-1' : 'mr-1'}> тэгш, </span>
               <span className={formData?.q13 === 'q13-2' ? 'underline mr-1' : 'mr-1'}> тэгш бус </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Бүтэц: </span>
               {formData?.['q14-2-1']}
               <span className={formData?.q14 === 'q14-1' ? 'underline mr-1' : 'mr-1'}> жигд, </span>
               <span className={formData?.q14 === 'q14-2' ? 'underline mr-1' : 'mr-1'}> жигд бус </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Эхо ойлт:</span> {formData?.['q15-3-1']}
               <span className={formData?.q15 === 'q15-1' ? 'underline mr-1' : 'mr-1'}> хэвийн, </span>
               <span className={formData?.q15 === 'q15-2' ? 'underline mr-1' : 'mr-1'}> ихэссэн, </span>
               <span className={formData?.q15 === 'q15-3' ? 'underline mr-1' : 'mr-1'}> багассан, </span>
               <span style={{ fontWeight: 'bold' }}> Голомтот:</span>
               <span className={formData?.q16 === 'q16-1' ? 'underline mr-1' : 'mr-1'}> өөрчлөлтгүй, </span>
               <span className={formData?.q16 === 'q16-2' ? 'underline mr-1' : 'mr-1'}> өөрчлөлттэй, </span>
               {formData?.['q16-2-1']}
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Бусад: {formData?.q17}</span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Дэлүү:</span> Хэмжээ {formData?.q18}
               <span style={{ fontWeight: 'bold' }}> ДИ/дэлүүний индекс:</span>
               {formData?.q19}
               <span style={{ fontWeight: 'bold' }}> Бусад:</span>
               {formData?.q20}
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Бөөр: </span> Баруун-байрлал:
               <span className={formData?.q21 === 'q21-1' ? 'underline mr-1' : 'mr-1'}> хэвийн, </span>
               <span className={formData?.q21 === 'q21-2' ? 'underline mr-1' : 'mr-1'}> хэвийн бус </span>
               <span style={{ fontWeight: 'bold' }}> Хэмжээ: </span>
               {formData?.q22}
               <span style={{ fontWeight: 'bold' }}> Хүрээ: </span>
               <span className={formData?.q23 === 'q23-1' ? 'underline mr-1' : 'mr-1'}> тэгш, </span>
               <span className={formData?.q23 === 'q23-2' ? 'underline mr-1' : 'mr-1'}> тэгш бус </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>АТ:</span>
               <span className={formData?.q24 === 'q24-1' ? 'underline mr-1' : 'mr-1'}> өргөсөөгүй, </span>
               <span className={formData?.q24 === 'q24-2' ? 'underline mr-1' : 'mr-1'}> өргөссөн, </span>
               <span className={formData?.q24 === 'q24-3' ? 'underline mr-1' : 'mr-1'}> сийрэгжсэн </span>
               <span style={{ fontWeight: 'bold' }}> Голомтот:</span>
               <span className={formData?.q25 === 'q25-1' ? 'underline mr-1' : 'mr-1'}> өөрчлөлтгүй, </span>
               <span className={formData?.q25 === 'q25-2' ? 'underline mr-1' : 'mr-1'}> өөрчлөлттэй </span>
               {formData?.['q25-2-1']}
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Зүүн-байрлал:</span>
               <span className={formData?.q26 === 'q26-1' ? 'underline mr-1' : 'mr-1'}> хэвийн, </span>
               <span className={formData?.q26 === 'q26-2' ? 'underline mr-1' : 'mr-1'}> хэвийн бус, </span>
               <span className={formData?.q26 === 'q26-3' ? 'underline mr-1' : 'mr-1'}> сийрэгжсэн </span>
               <span style={{ fontWeight: 'bold' }}> Хэмжээ: {formData?.q27}</span>
               <span style={{ fontWeight: 'bold' }}> Хүрээ:</span>
               <span className={formData?.q28 === 'q28-1' ? 'underline mr-1' : 'mr-1'}> тэгш, </span>
               <span className={formData?.q28 === 'q28-2' ? 'underline mr-1' : 'mr-1'}> тэгш бус </span>
               {formData?.['q28-2-1']}
               <span style={{ fontWeight: 'bold' }}> АТ:</span>
               <span className={formData?.q29 === 'q29-1' ? 'underline mr-1' : 'mr-1'}> өргөсөөгүй, </span>
               <span className={formData?.q29 === 'q29-2' ? 'underline mr-1' : 'mr-1'}> өргөссөн, </span>
               <span className={formData?.q29 === 'q29-3' ? 'underline mr-1' : 'mr-1'}> сийрэгжсэн </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Голомтот:</span>
               <span className={formData?.q30 === 'q30-1' ? 'underline mr-1' : 'mr-1'}> өөрчлөлтгүй, </span>
               <span className={formData?.q30 === 'q30-2' ? 'underline mr-1' : 'mr-1'}> өөрчлөлттэй, </span>
               {formData?.['q30-2-1']}
               <span style={{ fontWeight: 'bold' }}> Бусад: {formData?.q31}</span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Давсаг: </span>
               Хана: {formData?.q32},<span style={{ fontWeight: 'bold' }}> Голомтот: </span>
               <span className={formData?.q33 === 'q33-1' ? 'underline mr-1' : 'mr-1'}> өөрчлөлтгүй, </span>
               <span className={formData?.q33 === 'q33-2' ? 'underline mr-1' : 'mr-1'}> өөрчлөлттэй, </span>
               {formData?.['q33-2-1']}
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Хэвлийн хөндийд:</span>
               <span className={formData?.q34 === 'q34-1' ? 'underline mr-1' : 'mr-1'}> сул шингэнгүй, </span>
               <span className={formData?.q34 === 'q34-2' ? 'underline mr-1' : 'mr-1'}> шингэнтэй, </span>
               {formData?.['q34-2-1']}
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Бусад: </span>
               {formData?.q35}
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold', marginLeft: '40%' }}>Эмчийн нэр: </span>
               {formData?.q36}/_______________________
            </div>
         </div>
      </div>
   );
}

export default AM24Б;
