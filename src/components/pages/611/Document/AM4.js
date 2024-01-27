import moment from 'moment';
import React from 'react';
import { Table } from 'react-bootstrap';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import dayjs from 'dayjs';

//маягт АМ-4
function AM4(props) {
   console.log('ASD', props);
   const {
      data: { formData, patientData },
      hospitalName
   } = props;
   const styles = {
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 15,
         height: 12,
         lineHeight: 1
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
         marginTop: 2
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
            if (el == question) {
               return (
                  <span
                     key={index}
                     style={{ fontSize: 10, textAlign: 'center' }}
                     className={el === question ? 'underline' : ''}
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
                           <span style={{ fontWeight: 'bold', fontSize: 10 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-4</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 10 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>СҮРЬЕЭГИЙН ТОХИОЛДЛЫГ МЭДЭЭЛЭХ ХУУДАС</span>
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ display: 'flex', flexDirection: 'row' }
                  }}
               >
                  Эрүүл мэндийн байгууллагын нэр: {formData?.q1}
                  <span
                     style={{
                        ...styles.generalText,
                        ...{ marginLeft: 40 }
                     }}
                  >
                     Мэдээлсэн огноо: {dayjs(formData?.q2)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                  </span>
               </div>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           <NewCheckboxGroup value={formData?.['q3']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Тохиолдлын тодорхойлолт:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q3-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Шинэ</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q3-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Дахилт</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q3-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Эмчилгээ үр дүнгүй болсны дараах</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q3-4'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хяналт алдагдсаны дараах</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q3-5'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Эмчилгээний үр дүн тодорхойгүй</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q3-6'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Өмнөх эмчилгээний түүх тодорхойгүй</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td style={styles.leftText} colSpan={12}>
                           <NewCheckboxGroup value={formData?.['q4']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Тохиолдлын илрүүлсэн арга:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q4-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Өвчний учир амбулаториор /идэвхигүй/</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q4-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Идэвхитэй илрүүлэлтээр</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q4-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хавьтлын илрүүлэлтээр</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q4-4'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Урьдчилан сэргийлэх үзлэгээр</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q4-5'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Бусад /задлан шинжилгээ-нас барсан</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                           <div style={styles.leftText}>
                              Огноо: {dayjs(formData?.q5)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText} rowSpan={2}>
                           <b>Эцэг, эхийн нэр: {patientData?.lastName}</b>
                        </td>
                        <td style={styles.topText} rowSpan={2}>
                           <b>Өөрийн нэр: {patientData?.firstName}</b>
                        </td>
                        <td style={styles.topText} colSpan={10}>
                           <b>Регистрийн дугаар:</b>
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 40 } }}>
                           <b>Нас </b>
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 50 } }}>
                           <b>Хүйс</b>
                        </td>
                     </tr>
                     <tr>
                        <td
                           style={{
                              ...styles.leftText,
                              ...{ width: 20, height: 15 }
                           }}
                        >
                           {patientData?.registerNumber[0]}
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}>{patientData?.registerNumber[1]}</td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}>{patientData?.registerNumber[2]}</td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}>{patientData?.registerNumber[3]}</td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}>{patientData?.registerNumber[4]}</td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}>{patientData?.registerNumber[5]}</td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}>{patientData?.registerNumber[6]}</td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}>{patientData?.registerNumber[7]}</td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}>{patientData?.registerNumber[8]}</td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}>{patientData?.registerNumber[9]}</td>
                        <td style={{ ...styles.leftText, ...{ width: 40 } }}>{patientData?.age}</td>
                        <td style={{ ...styles.leftText, ...{ width: 50 } }}>
                           <span> {patientData?.genderType === 'MAN' ? 'эрэгтэй' : 'эмэгтэй'} </span>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           <b>Тогтмол хаяг</b>
                           <div style={styles.rowStyle}>Аймаг/хот:_______________________</div>
                           <div style={styles.rowStyle}>Сум/дүүрэг: _____________________</div>
                           <div style={styles.rowStyle}>Баг/хороо:_______________________</div>
                           <div style={styles.rowStyle}>Хаяг:________________ тоот_________</div>
                        </td>
                        <td style={styles.leftText} colSpan={12}>
                           <b>Огноо:</b>
                           <div style={styles.rowStyle}>
                              Өвчин эхэлсэн: {dayjs(formData?.q6)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                           </div>
                           <div style={styles.rowStyle}>
                              Эмчид үзүүлсэн: {dayjs(formData?.q7)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                           </div>
                           <div style={styles.rowStyle}>
                              Оношлогдсон: {dayjs(formData?.q8)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                           </div>
                           <div style={styles.rowStyle}>
                              Бүртгэлд авсан: {dayjs(formData?.q9)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                           </div>
                           <div style={styles.rowStyle}>
                              Эмчилгээ эхэлсэн: {dayjs(formData?.q10)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           <b>Хөдөлмөр эрхлэлтийн байдал</b>
                        </td>
                        <td style={styles.leftText} colSpan={12}>
                           <b> Боловсролын ангилал:</b>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2} rowSpan={3}>
                           <div style={styles.leftText}>
                              <NewCheckboxGroup value={formData?.['AM4.10']} className="dstory">
                                 <span style={{ fontSize: 10 }}>
                                    <b>Тохиолдлын илрүүлсэн арга:</b>
                                 </span>
                                 <br />
                                 <NewCheckbox value={0} className="test">
                                    <span style={{ fontSize: 10 }}>
                                       &#8226; 1. Хөдөлмөр эрхлэлтийн байдал:{' '}
                                       {formData?.['q11']?.map((el, index) => {
                                          return (
                                             <span key={index} style={{ fontSize: 10 }} className="font-bold">
                                                {el?.slice(-2)}
                                                {index === formData?.q11.length - 1 ? '' : ','}
                                             </span>
                                          );
                                       })}
                                       {formData?.q11Other ? formData?.q11Other : null}
                                    </span>
                                 </NewCheckbox>
                                 <br />
                                 <NewCheckbox value={1} className="test">
                                    <span style={{ fontSize: 10 }}>
                                       &#8226; 2. Хөдөлмөр эрхлэхгүй шалтгаан:{' '}
                                       {formData?.['q12']?.map((el, index) => {
                                          return (
                                             <span key={index} style={{ fontSize: 10 }} className="font-bold">
                                                {el?.slice(-2)}
                                                {index === formData?.q12.length - 1 ? '' : ','}
                                             </span>
                                          );
                                       })}
                                       {formData?.q12Other ? formData?.q12Other : null}
                                    </span>
                                 </NewCheckbox>
                              </NewCheckboxGroup>
                           </div>
                        </td>
                        <td style={styles.leftText} colSpan={11}>
                           Боловсролгүй
                        </td>
                        <td style={styles.centerText}>{returnQuestionCode('q14', 'q14-01', '01')}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={11}>
                           Бага
                        </td>
                        <td style={styles.centerText}>{returnQuestionCode('q14', 'q14-02', '02')}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={11}>
                           Суурь боловсрол
                        </td>
                        <td style={styles.centerText}>{returnQuestionCode('q14', 'q14-03', '03')}</td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td rowSpan={6} style={styles.verticalText}>
                           Гэр бүлийн байдал:
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 375 } }}>
                           {returnQuestionCode('q13', 'q13-01', 'Огт гэрлээгүй')}
                        </td>
                        <td style={styles.leftText} colSpan={11}>
                           Бүрэн дунд
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                           {returnQuestionCode('q14', 'q14-04', '04')}
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>{returnQuestionCode('q13', 'q13-02', 'Батлуулсан гэр бүлтэй')}</td>
                        <td style={styles.leftText} colSpan={11}>
                           Мэргэжлийн болон техникийн
                        </td>
                        <td style={styles.centerText}>{returnQuestionCode('q14', 'q14-05', '05')}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           {returnQuestionCode('q13', 'q13-02', 'Батлуулаагүй гэр бүлтэй')}
                        </td>
                        <td style={styles.leftText} colSpan={11}>
                           Дидломын
                        </td>
                        <td style={styles.centerText}>{returnQuestionCode('q14', 'q14-06', '06')}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>{returnQuestionCode('q13', 'q13-04', 'Тусгаарласан')}</td>
                        <td style={styles.leftText} colSpan={11}>
                           Бакалавр
                        </td>
                        <td style={styles.centerText}>{returnQuestionCode('q14', 'q14-07', '07')}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>{returnQuestionCode('q13', 'q13-05', 'Цуцалсан')}</td>
                        <td style={styles.leftText} colSpan={11}>
                           Магистр
                        </td>
                        <td style={styles.centerText}>{returnQuestionCode('q14', 'q14-08', '08')}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>{returnQuestionCode('q13', 'q13-06', 'Бэлбэсэн')}</td>
                        <td style={styles.leftText} colSpan={11}>
                           Доктор
                        </td>
                        <td style={styles.centerText}>{returnQuestionCode('q14', 'q14-09', '09')}</td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.topText}>
                           <b>Ажлын газар, албан тушаал:</b>
                           <div>{formData?.q15}</div>
                           <b>Мэргэжил:</b>
                           <div>{formData?.q16}</div>
                        </td>
                        <td style={styles.topText}>
                           <NewCheckboxGroup value={formData?.['q17']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Ханиалгах шинж тэмдэг: </b>
                              </span>
                              <br />
                              <NewCheckbox value={'q17-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Илэрсэн {formData?.['q17-1-1']} хоног</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q17-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Илрээгүй</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td style={styles.topText} rowSpan={2}>
                           <NewCheckboxGroup value={formData?.['q20']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Онош баталгаажилт:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q20-1'} className="test">
                                 <span style={{ fontSize: 10 }}>Нян судлалаар батлагдсан:</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckboxGroup value={formData?.['q20-1-1']} className="dstory">
                                 <NewCheckbox value={'q20-1-1-1'} className="test">
                                    <span style={{ fontSize: 10, marginLeft: 20 }}>&#8226; Түрхэцээр</span>
                                 </NewCheckbox>
                                 <br />
                                 <NewCheckbox value={'q20-1-1-2'} className="test">
                                    <span style={{ fontSize: 10, marginLeft: 20 }}>&#8226; Бусад шинжилгээгээр</span>
                                 </NewCheckbox>
                              </NewCheckboxGroup>
                              <br />
                              <NewCheckbox value={'q20-2'} className="test">
                                 <span style={{ fontSize: 10 }}>Эмнэлзүйгээр оношлогдсон</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>
                           <NewCheckboxGroup value={formData?.['q18']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>БЦЖ вакцины сорвитой эсэх:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q18-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тийм</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q18-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Үгүй</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td style={styles.topText}>
                           <NewCheckboxGroup value={formData?.['q19']} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Сүрьеэгийн хэлбэр:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q19-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Уушгины</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q19-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Уушгины бус</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.topText} colSpan={2}>
                           <b>Онош</b>
                           <div>{formData?.q21}</div>
                        </td>
                        <td style={styles.topText}>
                           <b>ӨОУА: А1{formData?.q22}</b>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>
                           <NewCheckboxGroup value={formData?.q23} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Цээжний рентген зургийн дүгнэлт:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q23-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хэвийн</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q23-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хэвийн бус-хөндийгүй</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q23-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хэвийн бус-хөндийтэй</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q23-4'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хийгдээгүй</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q23-5'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тодорхойгүй</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td
                           style={{
                              ...styles.topText,
                              ...{ display: 'flex', flexDirection: 'row' }
                           }}
                        >
                           <NewCheckboxGroup value={formData?.q24} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Эрсдэлт хүчин зүйлс:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q24-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Сүрьеэгийн хавьтал</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q24-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Өмнө нь эмчлэгдсэн</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q24-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Чихрийн шижин</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q24-4'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; ХДХВ/ДОХ</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q24-5'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Орон гэргүй</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q24-6'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Эрүүл мэндийн ажилтан</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q24-7'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Уул уурхай</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                           <div style={{ display: 'flex', flexDirection: 'row' }}>
                              <div style={{ marginLeft: 15 }}>
                                 <NewCheckboxGroup value={formData?.['q24']} className="dstory">
                                    <NewCheckbox value={'q24-8'} className="test">
                                       <span style={{ fontSize: 10 }}>&#8226; Жирэмслэлт</span>
                                    </NewCheckbox>
                                    <br />
                                    <NewCheckbox value={'q24-9'} className="test">
                                       <span style={{ fontSize: 10 }}>&#8226; Гэр хороолол</span>
                                    </NewCheckbox>
                                    <br />
                                    <NewCheckbox value={'q24-10'} className="test">
                                       <span style={{ fontSize: 10 }}>&#8226; Дархлал дарангуйлах эмчилгээ</span>
                                    </NewCheckbox>
                                    <br />
                                    <NewCheckbox value={'q24-11'} className="test">
                                       <span style={{ fontSize: 10 }}>&#8226; Өдөр бүр тамхи татах</span>
                                    </NewCheckbox>
                                    <br />
                                    <NewCheckbox value={'q24-12'} className="test">
                                       <span style={{ fontSize: 10 }}>&#8226; Архи хэтрүүлэн хэрэглэх</span>
                                    </NewCheckbox>
                                    <br />
                                    <NewCheckbox value={12} className="test">
                                       <span style={{ fontSize: 10 }}>{formData?.q24Other}</span>
                                    </NewCheckbox>
                                 </NewCheckboxGroup>
                              </div>
                           </div>
                        </td>
                        <td style={styles.topText}>
                           <NewCheckboxGroup value={formData?.q25} className="dstory">
                              <span style={{ fontSize: 10 }}>
                                 <b>Халдварын эх уурхай:</b>
                              </span>
                              <br />
                              <NewCheckbox value={'q25-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Өрхийн хавьтал</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q25-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Ойрын хавьтал</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q25-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тодорхойгүй</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                           <br />
                           <b>Өрхийн хавьтлын тоо: {formData?.['q25-1-1']}</b>
                           <div style={styles.leftText}>Насанд хүрэгчид:</div>
                           <div style={styles.leftText}>{formData?.['q25-1-2']}</div>
                           <div style={styles.leftText}>Хүүхэд /0-15 нас/</div>
                           <div style={styles.leftText}>{formData?.['q25-1-3']}</div>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>ЭМЧТ шинжилгээнд хамрагдсан эсэх?</td>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                           Тийм бол, ЭМЧТШ дугаар: {formData?.['q26-1-1']}
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>Тэсвэртэй эмүүд:</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                           <NewCheckboxGroup value={formData?.q26} className="dstory">
                              <NewCheckbox value={'q26-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тийм</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q26-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Үгүй</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                           Огноо: {dayjs(formData?.['q26-1-2'])?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                           <NewCheckboxGroup value={formData?.['q26-1-3']} className="dstory">
                              <div>
                                 <NewCheckbox value={'q26-1-3-1'} className="test">
                                    <span style={{ fontSize: 10 }}>&#8226; H</span>
                                 </NewCheckbox>
                                 <NewCheckbox value={'q26-1-3-2'} className="test">
                                    <span style={{ fontSize: 10 }}>&#8226; E</span>
                                 </NewCheckbox>
                                 <NewCheckbox value={'q26-1-3-3'} className="test">
                                    <span style={{ fontSize: 10 }}>&#8226; Am</span>
                                 </NewCheckbox>
                                 <NewCheckbox value={'q26-1-3-4'} className="test">
                                    <span style={{ fontSize: 10 }}>&#8226; Ofl</span>
                                 </NewCheckbox>
                                 <NewCheckbox value={'q26-1-3-5'} className="test">
                                    <span style={{ fontSize: 10 }}>&#8226; R</span>
                                 </NewCheckbox>
                                 <NewCheckbox value={'q26-1-3-6'} className="test">
                                    <span style={{ fontSize: 10 }}>&#8226; S</span>
                                 </NewCheckbox>
                                 <NewCheckbox value={'q26-1-3-7'} className="test">
                                    <span style={{ fontSize: 10 }}>&#8226; Km</span>
                                 </NewCheckbox>
                                 <NewCheckbox value={'q26-1-3-8'} className="test">
                                    <span style={{ fontSize: 10 }}>&#8226; FQ</span>
                                 </NewCheckbox>
                              </div>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <div style={styles.rowStyle}>
                  Тамга{' '}
                  <span style={{ marginLeft: 50 }}>
                     Мэдээлсэн эмчийн нэр: <b>{formData?.q27}</b> Гарын үсэг: /___________________ /
                  </span>
               </div>
            </div>
         </div>
      </>
   );
}

export default AM4;
