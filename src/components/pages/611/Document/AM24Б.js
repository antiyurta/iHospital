import moment from 'moment';
import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-24Б
function AM24Б(props) {
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
               <div>
                  {moment(formData?.['AM24B.1']).format('YYYY')} оны {moment(formData?.['AM24B.1']).format('MM')} сарын{' '}
                  {moment(formData?.['AM24B.1']).format('DD')} өдөр
               </div>
            </div>
            <div style={styles.rowStyle}>
               Эцэг /эх/-ийн нэр {patientData?.lastName} Нас: {patientData?.age} Хүйс: /зур/{' '}
               <span className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}> эрэгтэй, </span>
               <span className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}>эмэгтэй</span>
            </div>
            <div style={styles.rowStyle}>
               Нэр {patientData?.firstName}
               <span style={{ marginLeft: 50 }}></span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Элэг:</span> Хэмжээ {formData?.['AM24B.2']}
               <span style={{ fontWeight: 'bold' }}> Гадаргуу:</span>
               <span className={formData?.['AM24B.3'] === 0 ? 'underline mr-1' : 'mr-1'}> тэгш, </span>
               <span className={formData?.['AM24B.3'] === 1 ? 'underline mr-1' : 'mr-1'}> тэгш бус </span>
               <span style={{ fontWeight: 'bold' }}> Бүтэц:</span>
               <span className={formData?.['AM24B.4'] === 0 ? 'underline mr-1' : 'mr-1'}> жигд, </span>
               <span className={formData?.['AM24B.4'] === 1 ? 'underline mr-1' : 'mr-1'}> жигд бус </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Эхо ойлт:</span>
               <span className={formData?.['AM24B.5'] === 0 ? 'underline mr-1' : 'mr-1'}> хэвийн, </span>
               <span className={formData?.['AM24B.5'] === 1 ? 'underline mr-1' : 'mr-1'}> ихэссэн, </span>
               <span className={formData?.['AM24B.5'] === 1 ? 'underline mr-1' : 'mr-1'}> багассан </span>
               <span style={{ fontWeight: 'bold' }}> Үүдэн венийн голч:</span>
               {formData?.['AM24B.6']}
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Голомтот:</span>
               <span className={formData?.['AM24B.7'] === 0 ? 'underline mr-1' : 'mr-1'}> өөрчлөлтгүй, </span>
               <span className={formData?.['AM24B.7'] === 1 ? 'underline mr-1' : 'mr-1'}> өөрчлөлттэй </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Бусад:</span>
               {formData?.['AM24B.8']}
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Цөсний хүүдий:</span>
               Байрлал, хэлбэр хэмжээ: {formData?.['AM24B.9']}
               <span style={{ fontWeight: 'bold' }}> Хана:</span>
               <span className={formData?.['AM24B.10'] === 0 ? 'underline mr-1' : 'mr-1'}> хэвийн, </span>
               <span className={formData?.['AM24B.10'] === 1 ? 'underline mr-1' : 'mr-1'}> зузаарсан, </span>
               <span className={formData?.['AM24B.10'] === 2 ? 'underline mr-1' : 'mr-1'}> нимгэрсэн </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Агууламж, голомтот өөрчлөлт:</span>
               <span className={formData?.['AM24B.11'] === 0 ? 'underline mr-1' : 'mr-1'}> хэвийн, </span>
               <span className={formData?.['AM24B.11'] === 1 ? 'underline mr-1' : 'mr-1'}> цөс өтгөрсөн, </span>
               <span className={formData?.['AM24B.11'] === 2 ? 'underline mr-1' : 'mr-1'}> тунадастай, </span>
               <span className={formData?.['AM24B.11'] === 3 ? 'underline mr-1' : 'mr-1'}> чулуутай, </span>
               <span className={formData?.['AM24B.11'] === 4 ? 'underline mr-1' : 'mr-1'}> ургацагтай </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Цөсний ерөнхий цорго:</span>
               <span className={formData?.['AM24B.12'] === 0 ? 'underline mr-1' : 'mr-1'}> өргөсөөгүй, </span>
               <span className={formData?.['AM24B.12'] === 1 ? 'underline mr-1' : 'mr-1'}> өргөссөн </span>
               голч {formData?.['AM24B.13']},
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Бусад </span>
               {formData?.['AM24B.14']}
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Нойр булчирхай:</span>
               Хэмжээ {formData?.['AM24B.15']},<span style={{ fontWeight: 'bold' }}> Хүрээ:</span>
               <span className={formData?.['AM24B.16'] === 0 ? 'underline mr-1' : 'mr-1'}> тэгш, </span>
               <span className={formData?.['AM24B.16'] === 1 ? 'underline mr-1' : 'mr-1'}> тэгш бус </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Бүтэц:</span>
               <span className={formData?.['AM24B.39'] === 0 ? 'underline mr-1' : 'mr-1'}> жигд, </span>
               <span className={formData?.['AM24B.39'] === 1 ? 'underline mr-1' : 'mr-1'}> жигд бус </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Эхо ойлт:</span>
               <span className={formData?.['AM24B.17'] === 0 ? 'underline mr-1' : 'mr-1'}> хэвийн, </span>
               <span className={formData?.['AM24B.17'] === 1 ? 'underline mr-1' : 'mr-1'}> ихэссэн, </span>
               <span className={formData?.['AM24B.17'] === 2 ? 'underline mr-1' : 'mr-1'}> багассан, </span>
               <span style={{ fontWeight: 'bold' }}> Голомтот:</span>
               <span className={formData?.['AM24B.18'] === 0 ? 'underline mr-1' : 'mr-1'}> өөрчлөлтгүй, </span>
               <span className={formData?.['AM24B.18'] === 1 ? 'underline mr-1' : 'mr-1'}> өөрчлөлттэй, </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Бусад: {formData?.['AM24B.19']}</span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Дэлүү:</span> Хэмжээ {formData?.['AM24B.20']}
               <span style={{ fontWeight: 'bold' }}> ДИ/дэлүүний индекс:</span>
               {formData?.['AM24B.21']}
               <span style={{ fontWeight: 'bold' }}> Бусад:</span>
               {formData?.['AM24B.22']}
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Бөөр:</span> Баруун-байрлал:
               <span className={formData?.['AM24B.23'] === 0 ? 'underline mr-1' : 'mr-1'}> хэвийн, </span>
               <span className={formData?.['AM24B.23'] === 1 ? 'underline mr-1' : 'mr-1'}> хэвийн бус </span>
               <span style={{ fontWeight: 'bold' }}> Хэмжээ:</span>
               {formData?.['AM24B.24']}
               <span style={{ fontWeight: 'bold' }}> Хүрээ:</span>
               <span className={formData?.['AM24B.25'] === 0 ? 'underline mr-1' : 'mr-1'}> тэгш, </span>
               <span className={formData?.['AM24B.25'] === 1 ? 'underline mr-1' : 'mr-1'}> тэгш бус </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>АТ:</span>
               <span className={formData?.['AM24B.26'] === 0 ? 'underline mr-1' : 'mr-1'}> өргөсөөгүй, </span>
               <span className={formData?.['AM24B.26'] === 1 ? 'underline mr-1' : 'mr-1'}> өргөссөн, </span>
               <span className={formData?.['AM24B.26'] === 2 ? 'underline mr-1' : 'mr-1'}> сийрэгжсэн </span>
               <span style={{ fontWeight: 'bold' }}> Голомтот:</span>
               <span className={formData?.['AM24B.27'] === 0 ? 'underline mr-1' : 'mr-1'}> өөрчлөлтгүй, </span>
               <span className={formData?.['AM24B.27'] === 1 ? 'underline mr-1' : 'mr-1'}> өөрчлөлттэй </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Зүүн-байрлал:</span>
               <span className={formData?.['AM24B.28'] === 0 ? 'underline mr-1' : 'mr-1'}> хэвийн, </span>
               <span className={formData?.['AM24B.28'] === 1 ? 'underline mr-1' : 'mr-1'}> хэвийн бус, </span>
               <span className={formData?.['AM24B.28'] === 2 ? 'underline mr-1' : 'mr-1'}> сийрэгжсэн </span>
               <span style={{ fontWeight: 'bold' }}> Хэмжээ: {formData?.['AM24B.29']}</span>
               <span style={{ fontWeight: 'bold' }}> Хүрээ:</span>
               <span className={formData?.['AM24B.30'] === 0 ? 'underline mr-1' : 'mr-1'}> тэгш, </span>
               <span className={formData?.['AM24B.30'] === 1 ? 'underline mr-1' : 'mr-1'}> тэгш бус </span>
               <span style={{ fontWeight: 'bold' }}> АТ:</span>
               <span className={formData?.['AM24B.31'] === 0 ? 'underline mr-1' : 'mr-1'}> өргөсөөгүй, </span>
               <span className={formData?.['AM24B.31'] === 1 ? 'underline mr-1' : 'mr-1'}> өргөссөн, </span>
               <span className={formData?.['AM24B.31'] === 2 ? 'underline mr-1' : 'mr-1'}> сийрэгжсэн </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Голомтот:</span>
               <span className={formData?.['AM24B.32'] === 0 ? 'underline mr-1' : 'mr-1'}> өөрчлөлтгүй, </span>
               <span className={formData?.['AM24B.32'] === 1 ? 'underline mr-1' : 'mr-1'}> өөрчлөлттэй, </span>
               <span style={{ fontWeight: 'bold' }}> Бусад: {formData?.['AM24B.33']}</span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Давсаг: </span>
               Хана: {formData?.['AM24B.34']},<span style={{ fontWeight: 'bold' }}> Голомтот: </span>
               <span className={formData?.['AM24B.35'] === 0 ? 'underline mr-1' : 'mr-1'}> өөрчлөлтгүй, </span>
               <span className={formData?.['AM24B.35'] === 1 ? 'underline mr-1' : 'mr-1'}> өөрчлөлттэй, </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}>Хэвлийн хөндийд: </span>
               <span className={formData?.['AM24B.36'] === 0 ? 'underline mr-1' : 'mr-1'}> сул шингэнгүй, </span>
               <span className={formData?.['AM24B.36'] === 1 ? 'underline mr-1' : 'mr-1'}> шингэнтэй, </span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold' }}> Бусад: {formData?.['AM24B.37']}</span>
            </div>
            <div style={styles.rowStyle}>
               <span style={{ fontWeight: 'bold', marginLeft: '40%' }}>
                  Эмчийн нэр {formData?.['AM24B.38']}/_______________________
               </span>
            </div>
         </div>
      </div>
   );
}

export default AM24Б;
