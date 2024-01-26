import React from 'react';
import { Table } from 'react-bootstrap';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import dayjs from 'dayjs';
//маягт АМ-5
function AM5(props) {
   const {
      data: { formData, patientData },
      hospitalName
   } = props;
   console.log('аягт АМ-5', props);
   const styles = {
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 15,
         height: 12,
         lineHeight: 1,
         minWidth: 15
      },
      generalText: {
         fontSize: 10
      },
      rowStyle: {
         fontSize: 10,
         marginTop: 5
      },
      leftText: {
         padding: 1,
         verticalAlign: 'middle',
         fontSize: 10
      },
      centerText: {
         padding: 1,
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 10
      },
      flexContainer: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         fontSize: 10
      },
      flexRow: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between'
      },
      topText: {
         padding: 1,
         fontSize: 10
      },
      rowCellWithText: {
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
         fontSize: 10,
         padding: 0,
         lineHeight: 1,
         marginTop: 5
      },
      verticalText: {
         writingMode: 'vertical-rl',
         verticalAlign: 'middle',
         padding: 5,
         rotate: '180deg',
         maxHeight: 100,
         maxWidth: 50,
         lineHeight: 1,
         fontSize: 10
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
                  <div style={{ display: 'flex' }}></div>
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
                           <span style={{ fontWeight: 'bold', fontSize: 10 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-5</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 10 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>ХОРТ ХАВДРЫГ МЭДЭЭЛЭХ ХУУДАС</span>
               </div>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.topText, ...{ width: 300 } }} rowSpan={2} colSpan={2}>
                           Эмнэлгийн нэр, лого: {hospitalName}
                        </td>
                        <td style={styles.leftText} colSpan={6}>
                           РД: {patientData?.registerNumber}
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText} colSpan={6}>
                           Тохиолдлын дугаар: {formData?.q1}
                           <div>&nbsp;</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText} colSpan={2}>
                           Бүртгэлийн байдал: <div>&nbsp;</div>
                        </td>
                        <td
                           style={styles.topText}
                           className={formData?.q2 === 'q2-1' ? 'underline font-bold' : ''}
                           colSpan={2}
                        >
                           Эрт илрүүлэг
                        </td>
                        <td
                           style={styles.topText}
                           className={formData?.q2 === 'q2-2' ? 'underline font-bold' : ''}
                           colSpan={2}
                        >
                           Идэвхтэй хайлт
                        </td>
                        <td
                           style={styles.topText}
                           className={formData?.q2 === 'q2-3' ? 'underline font-bold' : ''}
                           colSpan={2}
                        >
                           Урьдчилан сэргийлэх үзлэгээр
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText} colSpan={2}>
                           Эцэг, эхийн нэр: {patientData?.lastName}
                           <div>&nbsp;</div>
                        </td>
                        <td style={styles.topText} colSpan={6}>
                           Өөрийн нэр: {patientData?.firstName}
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>
                           Төрсөн:
                           <div>
                              {patientData?.birthDate.substring(0, 4)}он{patientData?.birthDate.substring(5, 7)}сар
                              {patientData?.birthDate.substring(8, 10)}өдөр
                           </div>
                           <div>&nbsp;</div>
                           <div>Яс үндэс: </div>
                           <div>&nbsp;</div>
                        </td>
                        <td style={styles.topText}>
                           Нас [ &nbsp; {patientData?.age} &nbsp; ]<div>Хүйс: </div>
                           <div style={styles.rowCellWithText}>
                              <div style={styles.rowCells}></div>&nbsp;Эрэгтэй
                           </div>
                           <div style={styles.rowCellWithText}>
                              <div style={styles.rowCells}></div>&nbsp;Эмэгтэй
                           </div>
                           <div style={styles.rowCellWithText}>
                              <div style={styles.rowCells}></div>&nbsp;Тодорхойгүй
                           </div>
                        </td>
                        <td style={styles.topText} colSpan={6}>
                           <div>Ажлын газар, албан тушаал {patientData?.organization}</div>
                           <div>&nbsp;</div>
                           <div>Мэргэжил: {patientData?.jobPosition} </div>
                           <div>&nbsp;</div>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.topText}>
                           <b>Тогтмол хаяг:</b>
                           <div style={styles.leftText}>Аймаг/хот:________________________</div>
                           <div style={styles.leftText}>Сум/дүүрэг:________________________</div>
                           <div style={styles.leftText}>Баг/хороо:________________________</div>
                           <div style={styles.leftText}>Гудамж/Байшин: ________ Тоот _____</div>
                           <div style={styles.leftText}>
                              <b>Холбоо барих утасны дугаар: </b>
                           </div>
                           <div style={styles.leftText}>________________________________</div>
                        </td>
                        <td style={styles.leftText} colSpan={2}>
                           <NewCheckboxGroup value={formData?.['q3']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Боловсрол:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q3-01'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Боловсролгүй</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q3-02'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Бага</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q3-03'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Суурь боловсрол</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q3-04'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Бүрэн дунд</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q3-05'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Мэргэжлийн болон техникийн</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q3-06'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Дипломын</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q3-07'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Бакалавр</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q3-08'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Магистр</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q3-09'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Доктор</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td style={styles.leftText} colSpan={2}>
                           <NewCheckboxGroup value={formData?.['q4']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Гэр бүлийн байдал:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q4-01'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Огт гэрлээгүй</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q4-02'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Батлуулсан</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q4-03'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Батлуулаагүй</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q4-04'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тусгаарласан</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q4-05'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Цуцалсан</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q4-06'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Бэлбэсэн</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>
                           <b>Хавдар оношлогдсон огноо: </b>
                           <div style={styles.centerText}>{dayjs(formData?.q5)?.format('YYYY он MM сар DD өдөр')}</div>
                        </td>
                        <td style={styles.leftText} colSpan={2}>
                           <NewCheckboxGroup value={formData?.['q6']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Өвчтөний одоогийн байдал:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q6-01'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Амьд – 1</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q6-02'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Нас барсан -2</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q6-03'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тодорхойгүй - 3</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.leftText}>
                           <b>Анхдагч хавдрын байрлалын онош /ICDO-3 /: </b> {formData?.q7}
                        </td>
                        <td style={styles.leftText}>
                           <b>С_____/___ </b>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           <b>Бүтэц зүйн онош: </b>
                           {formData?.q8}
                        </td>
                        <td style={styles.leftText}>
                           <b>М_____/___ </b>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           <b>Торонтогийн хүүхдийн хавдрын ангилал: </b>
                           {formData?.q9}
                        </td>
                        <td style={styles.leftText}>
                           <b>С_____/___ </b>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>
                           <NewCheckboxGroup value={formData?.['q10']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Хорт хавдар Toronto Tier үе шатны ангиллаар:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q10-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тoronto Tier – 1 </span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q10-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Toronto Tier - 2</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           <b>Хүүхдийн хавдрын ангилал / ICCC-3/: </b> {formData?.q11}
                        </td>
                        <td style={styles.leftText}>
                           <b>_____/___ </b>
                        </td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b>Хорт хавдар TNM үе шатны ангиллаар: Т –</b>
                           <NewCheckboxGroup value={formData?.q12} className="dstory">
                              <NewCheckbox value={'q12-1'} className="test">
                                 <span style={{ fontSize: 10 }}>is,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q12-2'} className="test">
                                 <span style={{ fontSize: 10 }}>1,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q12-3'} className="test">
                                 <span style={{ fontSize: 10 }}>2,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q12-4'} className="test">
                                 <span style={{ fontSize: 10 }}>3,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q12-5'} className="test">
                                 <span style={{ fontSize: 10 }}>4,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q12-6'} className="test">
                                 <span style={{ fontSize: 10 }}>5</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                           <NewCheckboxGroup value={formData?.q13} className="dstory">
                              <b>N - </b>
                              <NewCheckbox value={'q13-1'} className="test px-0">
                                 <span style={{ fontSize: 10 }}>1,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q13-2'} className="test">
                                 <span style={{ fontSize: 10 }}>2,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q13-3'} className="test">
                                 <span style={{ fontSize: 10 }}>3,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q13-4'} className="test">
                                 <span style={{ fontSize: 10 }}>4,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q13-5'} className="test">
                                 <span style={{ fontSize: 10 }}>X</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                           <NewCheckboxGroup value={formData?.q14} className="dstory">
                              {' '}
                              <b>M - </b>
                              <NewCheckbox value={'q14-1'} className="test">
                                 <span style={{ fontSize: 10 }}>0,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q14-2'} className="test">
                                 <span style={{ fontSize: 10 }}>1,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q14-3'} className="test">
                                 <span style={{ fontSize: 10 }}>X</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={4}>
                           <NewCheckboxGroup value={formData?.['q15']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Хавдрын төлөв:</b>
                              </span>
                              <NewCheckbox value={'q15-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Байран өмөн – 2</span>
                              </NewCheckbox>

                              <NewCheckbox value={'q15-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хортой – 3</span>
                              </NewCheckbox>

                              <NewCheckbox value={'q15-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Үсэрхийлсэн - 6</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           <NewCheckboxGroup value={formData?.['q16']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Эсийн ялгарал:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q16-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Өндөр ялгаралтай-1</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q16-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Дунд ялгаралтай-2</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q16-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Бага ялгаралтай-3</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q16-4'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Ялгаралгүй-4</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q16-5'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Ялгарлын зэрэг тодорхойгүй-9</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td style={styles.leftText} colSpan={2}>
                           <NewCheckboxGroup value={formData?.['q17']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Лимфома, лейкемийн эсийн ялгарал:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q17-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Т-эсийн – 5</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q17-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; В-эсийн /pre-B,B-precursor/ -6</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q17-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Null эсийн / non-Т, non-B/ -7</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q17-4'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Киллер эсийн /natural/-8</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q17-5'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Эсийн төрөл тодорхойгүй-9</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={4}>
                           <NewCheckboxGroup value={formData?.['q18']} className="dstory">
                              <b style={styles.leftText}>Хэрвээ 0-19 насны хүүхдийн хавдрын тохиолдол бол</b>
                              <br />
                              <NewCheckbox value={'q18-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хурц лимфобласт лейкеми</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хурц миелоид лейкеми</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Ходжкины лимфом</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-4'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Ходжкины бус лимфом</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-5'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Нейробластом</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-6'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Вильямсын хавдар</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-7'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Рабдомиосарком</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-8'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Рабдо бус миосарком, зөөлөн эдийн сарком</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-9'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Остеосарком</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-10'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Ивингийн сарком</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-11'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Ретинобластом</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-12'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Гепатобластом</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-13'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Өндгөвчний хавдар</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-14'} className="test">
                                 <span style={{ fontSize: 10 }}>
                                    &#8226; Медуллобластом, бусад хөврөлийн, төв мэдрэлийн системийн хавдар
                                 </span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-15'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Эпендимом</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>
                           <NewCheckboxGroup value={formData?.['q19']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Анхдагч олон байрлалын хавдар мөн эсэх:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q19-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Анхдагч ганц байрлалын хавдар-1</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q19-2'} className="test">
                                 <span style={{ fontSize: 10 }}>
                                    &#8226; Анхдагч олон байрлалын хавдрын нэг тохиолдол- 2
                                 </span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q19-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тодорхойгүй- 9</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td style={styles.topText} colSpan={3}>
                           <NewCheckboxGroup value={formData?.['q20']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Хос эрхтнийг хамарсан эсэх:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q20-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Баруун-1</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q20-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Зүүн-2</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q20-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; 1 талыг хамарсан боловч ялгаж тусгаагүй-3</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q20-4'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хоёр талын хамарсан-4</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q20-5'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хос эрхтэн бус-5</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>
                           <b>Бичил харуурын бус</b>
                        </td>
                        <td style={styles.centerText} colSpan={3}>
                           <b>Бичил харуурын</b>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>
                           <NewCheckboxGroup value={formData?.['q21']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Хос эрхтнийг хамарсан эсэх:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q21-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; 1- Нас баралтын гэрчилгээгээр</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q21-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; 2- Эмнэл зүйн бүрдэл шинжээр</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q21-3'} className="test">
                                 <span style={{ fontSize: 10 }}>
                                    &#8226; 3- Дүрс оношилгоо /КТГ, дуран, рентген, ЭХО, MRI, оношлогооны лапротоми аль
                                    нь болохыг доогуур нь зурж өөрчлөлт, хэмжээг тавих {formData?.['q21-3-1']}
                                 </span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q21-4'} className="test">
                                 <span style={{ fontSize: 10 }}>
                                    &#8226; 4-Лабораторийн оношлуур /цус, хавдрын өвөрмөц маркер, иммунологи аль нь
                                    болохыг доогуур нь зурж өөрчлөлт, хэмжээг тавих {formData?.['q21-3-1']}
                                 </span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td style={styles.topText} colSpan={3}>
                           <NewCheckboxGroup value={formData?.['q22']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Хос эрхтнийг хамарсан эсэх:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q22-0'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; 5-Эсийн шинжилгээ</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q22-1'} className="test">
                                 <span style={{ fontSize: 10 }}>
                                    &#8226; 6-Эдийн шинжилгээ үсэрхийлсэн эдээс /задлан шинжилгээний эд хамаарна/
                                 </span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q22-2'} className="test">
                                 <span style={{ fontSize: 10 }}>
                                    &#8226; 7 - Эдийн шинжилгээ анхдагч эдээс /задлан шинжилгээний эд, ясны эд хамаарна/{' '}
                                    {formData?.['q21-3-1']}
                                 </span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q22-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; 8- Мэдэхгүй</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'xxxxxx'} className="test">
                                 <span style={{ fontSize: 10 }}>
                                    Эд, эсийн шинжилгээ хийсэн эмнэлгийн нэр: {formData?.q23}
                                 </span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'xxxxxx'} className="test">
                                 <span style={{ fontSize: 10 }}>
                                    Эд, эсийн шинжилгээний баримтын дугаар: {formData?.q24}
                                 </span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginTop: 10 }}>
                  <tbody>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           Хавдрын эмнэл зүйн бүлэг:{' '}
                           <NewCheckboxGroup value={formData?.q25} className="dstory">
                              <NewCheckbox value={'q25-1'} className="test">
                                 <span style={{ fontSize: 10 }}>Ia,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q25-2'} className="test">
                                 <span style={{ fontSize: 10 }}>Ia,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q25-3'} className="test">
                                 <span style={{ fontSize: 10 }}>II,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q25-4'} className="test">
                                 <span style={{ fontSize: 10 }}>IIa,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q25-5'} className="test">
                                 <span style={{ fontSize: 10 }}>III,</span>
                              </NewCheckbox>
                              <NewCheckbox value={'q25-6'} className="test">
                                 <span style={{ fontSize: 10 }}>IV</span>
                              </NewCheckbox>
                              <span style={styles.leftText}>ба үүнээс өөрөөр бичигдэх бол: {formData?.q25Other}</span>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                     <tr>
                        <td rowSpan={9} style={styles.topText}>
                           Хийгдсэн эмчилгээ
                        </td>
                        <td style={styles.leftText}>Мэс засал</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-1', 1)}</td>
                        <td style={styles.leftText}>Хими+даавар эмчилгээ</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-10', 10)}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>RPA</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-2', 2)}</td>
                        <td style={styles.leftText}>Дурангийн мэс засал</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-11', 11)}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>PEI</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-3', 3)}</td>
                        <td style={styles.leftText}>Даавар эмчилгээ</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-12', 12)}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Туяа</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-4', 4)}</td>
                        <td style={styles.leftText}>Хөнгөвчлөх мэс засал </td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-13', 13)}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хими</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-5', 5)}</td>
                        <td style={styles.leftText}>
                           TACE / эрт үе шатанд хийгдсэн, хөнгөвчлөх зорилгоор / аль нь болохыг зур
                        </td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-14', 14)}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Мэс засал+туяа</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-6', 6)}</td>
                        <td style={styles.leftText}>Хөнгөвчлөх хими</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-15', 15)}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Мэс засал+хими</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-7', 7)}</td>
                        <td style={styles.leftText}>Хөнгөвчлөх туяа</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-16', 16)}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Туяа+хими+мэс засал</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-8', 8)}</td>
                        <td style={styles.leftText}>Бусад хөнгөвлөх эмчилгээ ба тусламж /эмийн эмчилгээ /</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-17', 17)}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хими+туяа</td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-9', 9)}</td>
                        <td style={styles.leftText}>Эмчилгээнээс татгалзсан </td>
                        <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-18', 18)}</td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={styles.leftText}>
                           Хийгдсэн мэс заслын нэр: {formData?.q27}
                        </td>
                        <td colSpan={5} style={styles.leftText}>
                           /Үйлдлийн ОУ-9 ангиллаар тавих, кодлох/
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.topText}>
                           <div style={styles.leftText}>
                              Мэс засал хийгдсэн: {dayjs(formData?.q28)?.format('YYYY он MM сар DD өдөр')}
                           </div>
                           <div style={styles.leftText}>
                              Хагалгаа хийсэн эмчийн нэр, эмчийн утасны дугаар: {formData?.q30}, {formData?.q31}
                           </div>
                           <div style={styles.leftText}>Мэс засал хийсэн эмнэлгийн нэр: {formData?.q29}</div>
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2} style={styles.topText}>
                           Эмчлэгч эмчийн нэр: {formData?.q32}
                        </td>
                        <td colSpan={3} style={styles.topText}>
                           Мэдээлсэн огноо: {dayjs(formData?.q33)?.format('YYYY он MM сар DD өдөр')}
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>Тамга</td>
                        <td colSpan={4} style={styles.topText}>
                           Мэдээлсэн албан тушаалтан: {formData?.q34}
                           <span>/</span>
                           <span style={{ marginLeft: 150 }}>/</span>
                           <div>&nbsp;</div>
                        </td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
      </>
   );
}

export default AM5;
