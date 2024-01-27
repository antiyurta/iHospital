import dayjs from 'dayjs';
import React from 'react';
import { Table } from 'react-bootstrap';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';

//маягт АМ-30А
function AM30A(props) {
   const {
      data: { formData, patientData },
      hospitalName
   } = props;
   console.log('аягт 30А', props);
   const styles = {
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 15,
         height: 15,
         lineHeight: 1
      },
      generalText: {
         fontSize: 12
      },
      rowStyle: {
         fontSize: 12
      },
      leftText: {
         padding: 1,
         verticalAlign: 'middle',
         fontSize: 12
      },
      centerText: {
         padding: 1,
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 12
      },
      flexContainer: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         fontSize: 12
      },
      flexRow: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between'
      },
      rowCellWithText: {
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
         fontSize: 12,
         padding: 0,
         lineHeight: 1
      }
   };
   const returnQuestionCode = (key, question, val) => {
      return formData?.[key]?.includes(question) ? (
         formData?.[key]?.map((el, index) => {
            if (el === question) {
               return (
                  <span
                     key={index}
                     style={{
                        fontSize: 10,
                        textAlign: 'center',
                        textDecoration: formData[key].includes(question) ? 'underline' : 'none'
                     }}
                  >
                     {val}
                  </span>
               );
            }
         })
      ) : (
         <span style={{ fontSize: 10 }}>{val}</span>
      );
   };
   return (
      <>
         <div className="page">
            <div className="subpage">
               <div style={styles.flexContainer}>
                  <div></div>
                  <div>
                     <span
                        style={{
                           ...styles.generalText,
                           ...{ textAlign: 'right', display: 'block' }
                        }}
                     >
                        Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
                     </span>
                     <div style={styles.flexRow}>
                        <span style={styles.generalText}>&nbsp;</span>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                           <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                           <span style={{ fontWeight: 'bold', fontSize: 12 }}>
                              Эрүүл мэндийн бүртгэлийн маягт АМ-30А
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 5 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 14 }}>ӨДРИЙН ЭМЧИЛГЭЭНИЙ БҮРТГЭЛ /Хүүхэд/</span>
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ display: 'flex', flexDirection: 'row' }
                  }}
               >
                  Дугаар №
               </div>
               <div style={styles.rowStyle}>
                  Өдрийн эмчилгээний хуудас нээсэн огноо: {dayjs(formData?.q1)?.format('YYYY он MM сар DD өдөр')}
               </div>
               <div style={styles.rowStyle}>
                  Эмнэлгийн нэр: {hospitalName} Тасаг, кабинетийн нэр: {formData?.q2}
               </div>
               <div style={styles.rowStyle}>
                  Эцэг /эх/-ийн нэр: {patientData?.lastName} Нэр: {patientData?.firstName}
                  <span style={{ marginLeft: 30 }}>Нас: {patientData?.age}</span>
                  <span style={{ marginLeft: 30 }}>
                     Хүйс: {patientData?.genderType === 'MAN' ? 'Эрэгтэй' : 'Эмэгтэй'}
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  Регистрийн дугаар: {patientData?.registerNumber}
                  <span style={{ marginLeft: 30 }}>ЭМДаатгал №: ...........................</span>
               </div>
               <div style={styles.rowStyle}>
                  <div style={styles.rowCellWithText}>
                     Цусны бүлэг: ( эцэг эхийн үгээр / {formData?.q3} эмнэлэгт тодорхойлсон бол хэзээ?{' '}
                     {dayjs(formData?.q4)?.format('YYYY он MM сар DD өдөр')})
                  </div>
               </div>
               <div style={styles.rowStyle}>
                  Тодорхойлсон эмч, сувилагч: {formData?.q5} огноо:{' '}
                  {dayjs(formData?.q6)?.format('YYYY он MM сар DD өдөр')}
               </div>
               <div style={styles.rowStyle}>
                  Тогтмол хаяг:
                  ............................................................................................................................................................................................
               </div>
               <div style={styles.rowStyle}>
                  Холбоо барих утас:{' '}
                  {formData?.q8?.map((el, index) => {
                     return (
                        <span key={index}>
                           {el['q8-1']}, {el['q8-2']}, {el['q8-3']}
                        </span>
                     );
                  })}
               </div>
               <div style={styles.rowStyle}>
                  Нарийн мэргэжлийн эмчид үзүүлсэн: {dayjs(formData?.q9)?.format('YYYY он MM сар DD өдөр')}
               </div>
               <div style={styles.rowStyle}>
                  Явуулсан эмнэлэг: {formData?.q10}
                  <span style={{ marginLeft: 30 }}>Үйлчлүүлэгчийн өвчний онош: </span>
               </div>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.leftText}></td>
                        <td style={styles.centerText}>Онош</td>
                        <td style={styles.centerText}>ӨОУА-10 код</td>
                        <td style={styles.centerText}>Огноо</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>1. Үндсэн</td>
                        <td style={styles.centerText}>{formData?.q11}</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}>{dayjs(formData?.q11CreatedAt)?.format('YYYY-MM-DD')}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>2. Хавсарсан</td>
                        <td style={styles.centerText}>{formData?.q12}</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}>{dayjs(formData?.q12CreatedAt)?.format('YYYY-MM-DD')}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>3. Хүндрэл</td>
                        <td style={styles.centerText}>{formData?.q13}</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}>{dayjs(formData?.q13CreatedAt)?.format('YYYY-MM-DD')}</td>
                     </tr>
                     <tr>
                        <td colSpan={2} style={styles.centerText}>
                           Мэс засал / ажилбарын нэр: {formData?.q14}, огноо:{' '}
                           {dayjs(formData?.q15)?.format('YYYY/MM/DD')}
                        </td>
                        <td style={styles.centerText}>ӨОУА-9 код</td>
                        <td style={styles.centerText}>нийт зардал</td>
                     </tr>
                     <tr>
                        <td colSpan={2} style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}>{formData?.q16} ₮</td>
                     </tr>
                  </tbody>
               </Table>
               <div style={styles.rowStyle}>Эмчийн үзлэг:</div>
               <div style={styles.rowStyle}>Өгүүлэмж: {formData?.q17}</div>
               <div style={styles.rowCellWithText}>
                  Харшил:{' '}
                  <div style={styles.rowCellWithText}>
                     <span className={formData?.q18 === 'q18-1' ? 'underline mr-1' : 'mr-1'}> эм, </span>
                     <span className={formData?.q18 === 'q18-2' ? 'underline mr-1' : 'mr-1'}> хоол, </span>
                     <span className={formData?.q18 === 'q18-3' ? 'underline mr-1' : 'mr-1'}>
                        {' '}
                        бусад: {formData?.['q18-3-1']},{' '}
                     </span>
                  </div>
               </div>

               <div style={styles.rowStyle}>
                  Хүүхдийн амин үзүүлэлт: Биеийн байдал: {formData?.q19}, Ухаан санаа:
                  {formData?.q20} ,
               </div>
               <div style={styles.rowStyle}>
                  Амьсгал: {formData?.q21}, Зүрхний цохилт: {formData?.q22}, Артерийн дарал: {formData?.q23}, Биеийн
                  хэм: {formData?.q24} ,
               </div>
               <div style={styles.rowStyle}>
                  Цусны хүчилтөрөгчийн хангамж: {formData?.q25} , Хялгасан судасны эргэн дүүрэлт: {formData?.q26} ,
                  FiO2: {formData?.q27} ,
               </div>
               <div style={styles.rowStyle}>Ерөнхий үзлэг: {formData?.q28}</div>
               <div style={styles.rowStyle}>Хэсэг газрын үзлэг: {formData?.q29}</div>
               <div style={styles.rowStyle}>
                  Шинжилгээний үзүүлэлтүүд{' '}
                  <span className={formData?.q30 === 'q30-1' ? 'underline mr-1' : 'mr-1'}> хэвийн, </span> /{' '}
                  <span className={formData?.q30 === 'q30-2' ? 'underline mr-1' : 'mr-1'}> хэвийн бус: </span>
                  {formData?.['q30-2-1']}
               </div>
               <div style={styles.rowStyle}>
                  Хавсаргасан шинжилгээ:
                  <NewCheckboxGroup value={formData?.['q31']} className="dstory">
                     <NewCheckbox value={'q31-1'} className="test">
                        <span style={{ fontSize: 12 }}>ЦЕШ,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q31-2'} className="test">
                        <span style={{ fontSize: 12 }}>ШЕШ,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q31-3'} className="test">
                        <span style={{ fontSize: 12 }}>Rё зураг/харалт,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q31-4'} className="test">
                        <span style={{ fontSize: 12 }}>Биохими,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q31-5'} className="test">
                        <span style={{ fontSize: 12 }}>Бүлэгнэлт,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q31-6'} className="test">
                        <span style={{ fontSize: 12 }}>Вирус,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q31-7'} className="test">
                        <span style={{ fontSize: 12 }}>Бак</span>
                     </NewCheckbox>
                  </NewCheckboxGroup>
               </div>
               <div style={styles.rowStyle}>
                  Өдрийн ( мэс засал / эмийн ) оношлогоо/эмчилгээний үндэслэл: {formData?.q32}
               </div>
               <div style={styles.rowStyle}>Төлөвлөж буй мэдээгүйжүүлгийн хэлбэр: {formData?.q33}</div>
               <div style={styles.rowStyle}>Төлөвлөж буй мэс засал/ажилбар: {formData?.q34}</div>
               <div style={styles.rowStyle}>
                  Мэс заслын өмнөх өвөрмөц бэлтгэл, гарч болох хүндрэл, түүнээс сэргийлэн авсан арга хэмжээ:{' '}
                  {formData?.['q34-1-1']}
               </div>
               <div style={styles.rowStyle}>Үйлчлүүлэгчээс тавьсан асуулт: {formData?.q35}</div>
               <div style={styles.rowStyle}>Хариулт: {formData?.q36}</div>
               <div style={styles.rowStyle}></div>
               <div style={styles.rowStyle}>
                  <NewCheckboxGroup value={formData?.['q37']} className="dstory">
                     <span style={styles.leftText}>Өвчтөн –н</span>
                     <NewCheckbox value={'q37-1'} className="test">
                        <span style={{ fontSize: 12 }}>аав,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q37-2'} className="test">
                        <span style={{ fontSize: 12 }}>ээж,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q37-3'} className="test">
                        <span style={{ fontSize: 12 }}>ах,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q37-4'} className="test">
                        <span style={{ fontSize: 12 }}>эгч,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q37-5'} className="test">
                        <span style={{ fontSize: 12 }}>эмээ,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q37-6'} className="test">
                        <span style={{ fontSize: 12 }}>өвөө,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q37-7'} className="test">
                        <span style={{ fontSize: 12 }}>асран хамгаалагч</span>
                     </NewCheckbox>
                  </NewCheckboxGroup>{' '}
                  (доогуур зур) би хүүхэддээ өдрийн мэс засал / эмийн эмчилгээг хийлгэхийг зөвшөөрч байна
               </div>
               <div style={styles.rowStyle}>
                  Үйлчлүүлэгч/асран хамгаалагчийн овог, нэр: {formData?.q38} Гарын үсэг /
                  <span style={{ marginLeft: 100 }}>/,</span>
               </div>
               <div style={styles.rowStyle}>{dayjs(formData?.q39)?.format('YYYY он MM сар DD өдөр')}</div>
               <div style={{ ...styles.rowStyle, ...{ marginLeft: 80 } }}>
                  Эмчлэгч эмч: {formData?.q40}/<span style={{ marginLeft: 100 }}>/,</span>
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.rowStyle}>Мэдээгүйжүүлэлтийн хэлбэр:</div>
               <div style={styles.rowCellWithText}>
                  <div style={styles.rowCellWithText}>
                     <NewCheckboxGroup value={formData?.['q41']} className="dstory">
                        <NewCheckbox value={'q41-1'} className="test">
                           <span style={{ fontSize: 12 }}>Хэсэг газарт нэвчүүлэн ,</span>
                        </NewCheckbox>
                        <NewCheckbox value={'q41-2'} className="test">
                           <span style={{ fontSize: 12 }}>Бүсчилсэн/ мэд.хориг,</span>
                        </NewCheckbox>
                        <NewCheckbox value={'q41-3'} className="test">
                           <span style={{ fontSize: 12 }}>Ерөнхий ( ETT / LMA / FM ) үгүй,</span>
                        </NewCheckbox>
                     </NewCheckboxGroup>
                  </div>
               </div>
               <div style={{ marginTop: 5 }}>
                  <div style={styles.rowCellWithText}>
                     <div style={styles.rowCellWithText}>
                        Мэс засал / ажилбар:
                        <NewCheckboxGroup value={formData?.['q42']} className="dstory">
                           <NewCheckbox value={'q42-1'} className="test">
                              <span style={{ fontSize: 12 }}>цэвэр / ,</span>
                           </NewCheckbox>
                           <NewCheckbox value={'q42-2'} className="test">
                              <span style={{ fontSize: 12 }}>идээт</span>
                           </NewCheckbox>{' '}
                           (зур)
                        </NewCheckboxGroup>
                     </div>
                  </div>
               </div>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.leftText}>Огноо: {dayjs(formData?.q43)?.format('YYYY-MM-DD')}</td>
                        <td style={styles.centerText}>Эхэлсэн</td>
                        <td style={styles.centerText}>Дууссан</td>
                        <td style={styles.centerText}>Нийт</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Мэдээгүйжүүлэг</td>
                        <td style={styles.centerText}>{dayjs(formData?.q44)?.format('HH цаг MM минут')}</td>
                        <td style={styles.centerText}>{dayjs(formData?.q45)?.format('HH цаг MM минут')}</td>
                        <td style={styles.centerText}>{formData?.q46}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Мэс засал / ажилбар</td>
                        <td style={styles.centerText}>{dayjs(formData?.q47)?.format('HH цаг MM минут')}</td>
                        <td style={styles.centerText}>{dayjs(formData?.q48)?.format('HH цаг MM минут')}</td>
                        <td style={styles.centerText}>{formData?.q49}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Эмийн эмчилгээ</td>
                        <td style={styles.centerText}>{dayjs(formData?.q50)?.format('HH цаг MM минут')}</td>
                        <td style={styles.centerText}>{dayjs(formData?.q51)?.format('HH цаг MM минут')}</td>
                        <td style={styles.centerText}>{formData?.q52}</td>
                     </tr>
                  </tbody>
               </Table>
               <div style={styles.rowStyle}>Мэс заслын/ ажилбарын/ эмийн эмчилгээний тэмдэглэл: {formData?.q53}</div>
               <div style={styles.rowStyle}>
                  Мэс засал/ ажилбарын үед авсан эдийн болон бусад шинжилгээ авсан эсэх:{' '}
                  <NewCheckboxGroup value={formData?.['q54']} className="dstory">
                     <NewCheckbox value={'q54-1'} className="test">
                        <span style={{ fontSize: 12 }}>тийм / ,</span>
                     </NewCheckbox>
                     <NewCheckbox value={'q54-2'} className="test">
                        <span style={{ fontSize: 12 }}>үгүй</span>
                     </NewCheckbox>{' '}
                     (зур)
                  </NewCheckboxGroup>
               </div>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.leftText}></td>
                        <td style={styles.leftText}>Эдийн сорьц</td>
                        <td style={styles.leftText}>Нян судлалын сорьц</td>
                        <td style={styles.leftText}>Цусны сорьц</td>
                        <td style={styles.leftText}>Бусад: </td>
                     </tr>
                     {formData?.['q54-2-2'].map((el, index) => {
                        return (
                           <tr key={index}>
                              <td style={styles.leftText}>{index + 1}</td>
                              <td style={styles.leftText}>{el?.['q54-2-2-1']}</td>
                              <td style={styles.leftText}>{el?.['q54-2-2-2']}</td>
                              <td style={styles.leftText}>{el?.['q54-2-2-3']}</td>
                              <td style={styles.leftText}>{el?.['q54-2-2-4']}</td>
                           </tr>
                        );
                     })}
                  </tbody>
               </Table>
               <div style={styles.rowStyle}>Мэс засал / ажилбарын дараах онош: {formData?.q55}</div>
               <div style={styles.rowStyle}>Оёдолд хэрэглэсэн утас: {formData?.q56}</div>
               <div style={styles.rowStyle}>
                  Хэрэглэсэн антибиотик мэс заслын өмнө, мэс заслын үед, дараа нь: {formData?.q57}
               </div>
               {/* <div style={{ ...styles.rowStyle, ...{ marginLeft: 100 } }}>
                  Мэс заслын өмнө:
                  .........................................................................................................................
               </div>
               <div style={{ ...styles.rowStyle, ...{ marginLeft: 100 } }}>
                  Мэс заслын үед:
                  ...........................................................................................................................
               </div>
               <div style={{ ...styles.rowStyle, ...{ marginLeft: 100 } }}>
                  Мэс заслын дараа:
                  .......................................................................................................................
               </div> */}
               <div style={styles.rowStyle}>Үйлчлүүлэгчид өгсөн зөвлөгөө: {formData?.q58}</div>
               <div style={styles.rowStyle}>Өдрийн эмчилгээний баг: {formData?.q59}</div>
            </div>
         </div>
      </>
   );
}

export default AM30A;
