import moment from 'moment';
import React from 'react';
import { Table } from 'react-bootstrap';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import dayjs from 'dayjs';

//маягт АМ-2А
function AM2A(props) {
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
         fontSize: 9
      },
      blankSpaces: {
         fontSize: 9
      },
      rowStyle: {
         fontSize: 9
      },
      leftText: {
         padding: 1,
         verticalAlign: 'middle',
         fontSize: 9
      },
      rightText: {
         textAlign: 'right',
         padding: 1,
         verticalAlign: 'middle',
         fontSize: 9
      },
      centerText: {
         padding: 1,
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 9
      },
      flexContainerTop: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         fontSize: 9
      },
      flexContainer: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         fontSize: 9
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
         fontSize: 10,
         marginTop: 3
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
                           <span style={{ fontWeight: 'bold', fontSize: 9 }}>Эрүүл мэндийн бүртгэлийн маягт-АМ-2А</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 5 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 13 }}>
                     ХАЛДВАРТ ӨВЧНИЙ ХАМШИНЖ, СЭЖИГТЭЙ ТОХИОЛДЛЫГ МЭДЭЭЛЭХ ХУУДАС
                  </span>
               </div>
               <div style={styles.rowStyle}>
                  <b>Хамшинж, сэжигтэй тохиолдлын нэр: {formData?.q1}</b>
               </div>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b>1 дүгээр хэсэг</b>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Эцэг/эхийн нэр: {patientData?.lastName}</td>
                        <td style={styles.leftText}>Өөрийн нэр: {patientData?.firstName}</td>
                        <td style={styles.leftText}>Нас: {patientData?.age}</td>
                        <td style={styles.leftText}>
                           Хүйс: {patientData?.genderType === 'MAN' ? 'эрэгтэй' : 'эмэгтэй'}
                        </td>
                        <td style={styles.leftText}>Утасны дугаар: {patientData?.phoneNo}</td>
                     </tr>
                     <tr>
                        <td colSpan={2} style={styles.leftText}>
                           <span style={{ marginRight: 5 }}>Регистрийн дугаар </span>
                           <div style={{ display: 'flex' }}>
                              <div style={styles.rowCells}>{patientData?.registerNumber[0]}</div>
                              <div style={styles.rowCells}>{patientData?.registerNumber[1]}</div>
                              <div style={styles.rowCells}>{patientData?.registerNumber[2]}</div>
                              <div style={styles.rowCells}>{patientData?.registerNumber[3]}</div>
                              <div style={styles.rowCells}>{patientData?.registerNumber[4]}</div>
                              <div style={styles.rowCells}>{patientData?.registerNumber[5]}</div>
                              <div style={styles.rowCells}>{patientData?.registerNumber[6]}</div>
                              <div style={styles.rowCells}>{patientData?.registerNumber[7]}</div>
                              <div style={styles.rowCells}>{patientData?.registerNumber[8]}</div>
                              <div style={styles.rowCells}>{patientData?.registerNumber[9]}</div>
                           </div>
                           <div style={styles.leftText}>Оршин суугаа хаяг</div>
                           <div style={styles.leftText}>
                              Аймаг / Хот:
                              <span style={{ marginLeft: 75 }}>Сум / Дүүрэг:</span>
                           </div>
                           <div style={styles.leftText}>
                              Баг / Хороо: _________
                              <span style={{ marginLeft: 40 }}>Хэсэг / Хороолол: _______</span>
                           </div>
                           <div style={styles.leftText}>
                              Газар / Гудамж / Байр:_______
                              <span style={{ marginLeft: 20 }}>Тоот:___ </span>
                           </div>
                        </td>
                        <td colSpan={2} style={styles.leftText}>
                           <Table className="document">
                              <tbody>
                                 <tr>
                                    <td rowSpan={9} style={styles.centerText} className="border-0">
                                       <b>8. Боловсролын байдал</b>
                                    </td>
                                    <td style={styles.leftText} className="border-0">
                                       Боловсролгүй
                                    </td>
                                    <td style={styles.centerText} className="border-0">
                                       {returnQuestionCode('q2', 'q2-01', 1)}
                                    </td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText} className="border-0">
                                       Бага
                                    </td>
                                    <td style={styles.centerText} className="border-0">
                                       {returnQuestionCode('q2', 'q2-02', 2)}
                                    </td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText} className="border-0">
                                       Суурь боловсрол
                                    </td>
                                    <td style={styles.centerText} className="border-0">
                                       {returnQuestionCode('q2', 'q2-03', 3)}
                                    </td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText} className="border-0">
                                       Бүрэн дунд
                                    </td>
                                    <td style={styles.centerText} className="border-0">
                                       {returnQuestionCode('q2', 'q2-04', 4)}
                                    </td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText} className="border-0">
                                       Мэргэжлийн болон техникийн
                                    </td>
                                    <td style={styles.centerText} className="border-0">
                                       {returnQuestionCode('q2', 'q2-05', 5)}
                                    </td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText} className="border-0">
                                       Дипломын
                                    </td>
                                    <td style={styles.centerText} className="border-0">
                                       {returnQuestionCode('q2', 'q2-06', 6)}
                                    </td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText} className="border-0">
                                       Бакалавр
                                    </td>
                                    <td style={styles.centerText} className="border-0">
                                       {returnQuestionCode('q2', 'q2-07', 7)}
                                    </td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText} className="border-0">
                                       Магистр
                                    </td>
                                    <td style={styles.centerText} className="border-0">
                                       {returnQuestionCode('q2', 'q2-08', 8)}
                                    </td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText} className="border-0">
                                       Доктор
                                    </td>
                                    <td style={styles.centerText} className="border-0">
                                       {returnQuestionCode('q2', 'q2-09', 9)}
                                    </td>
                                 </tr>
                              </tbody>
                           </Table>
                        </td>
                        <td style={{ textAlign: 'start', fontSize: 10, padding: 1 }}>Ажлын хаяг:</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хөдөлмөр эрхлэлт</td>
                        <td style={styles.leftText}>Эмнэлэгт үзүүлсэн огноо</td>
                        <td colSpan={2} style={styles.leftText}>
                           Эмнэлэгт хэвтсэн эсэх
                        </td>
                        <td style={styles.leftText}>Өвчтөн нас барсан эсэх</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 15 } }}>{formData?.['AM2.2.1']}</td>
                        <td rowSpan={5} style={styles.leftText}>
                           {dayjs(formData.q4)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                        </td>
                        <td colSpan={2} rowSpan={5} style={styles.leftText}>
                           <NewCheckboxGroup value={formData?.['q5']} className="dstory">
                              <NewCheckbox value={'q5-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тийм</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q5-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Үгүй</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                           <div style={styles.leftText}>
                              <b>Тийм бол огноо:</b>
                           </div>
                           <div style={styles.leftText}>
                              {dayjs(formData?.['q5-1-1'])?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                           </div>
                        </td>
                        <td rowSpan={5} style={styles.leftText}>
                           <NewCheckboxGroup value={formData?.['q6']} className="dstory">
                              <NewCheckbox value={'q6-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тийм</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q6-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Үгүй</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                           <div style={styles.leftText}>
                              <b>Тийм бол огноо:</b>
                           </div>
                           <div style={styles.leftText}>
                              {dayjs(formData?.['q6-1-1'])?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           1. Хөдөлмөр эрхлэлтийн байдал:{' '}
                           {formData?.['q3-1-1']?.map((el, index) => {
                              return (
                                 <span key={index} style={{ fontSize: 10 }} className="font-bold">
                                    {el?.slice(-2)}
                                    {index === formData?.['q3-1-1'].length - 1 ? '' : ','}
                                 </span>
                              );
                           })}
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 15 } }}>
                           <div>{formData?.['q3-1-1Other'] ? formData?.['q3-1-1Other'] : null}</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           2. Хөдөлмөр эрхлэхгүй шалтгаан:{' '}
                           {formData?.['q3-2-1']?.map((el, index) => {
                              return (
                                 <span key={index} style={{ fontSize: 10 }} className="font-bold">
                                    {el?.slice(-2)}
                                    {index === formData?.['q3-2-1'].length - 1 ? '' : ','}
                                 </span>
                              );
                           })}
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 15 } }}>
                           <div>{formData?.['q3-2-1Other'] ? formData?.['q3-2-1Other'] : null}</div>
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b>Эмнэлзүйн мэдээлэл (хамшинж тэмдгийг бичнэ)</b>
                        </td>
                     </tr>
                     <tr>
                        <td
                           style={{
                              textAlign: 'start',
                              fontSize: 10,
                              padding: 1,
                              height: 60
                           }}
                        >
                           Хамшинж:
                           <br />
                           {formData?.q7}
                        </td>
                        <td colSpan={3} style={{ textAlign: 'start', fontSize: 10, padding: 1 }}>
                           Эмнэл зүйн шинж тэмдгийг онцлон бичнэ үү.
                           <br />
                           {formData?.q8}
                        </td>
                        <td style={{ textAlign: 'start', fontSize: 10, padding: 1 }}>
                           Илэрсэн огноо:
                           <br />
                           {dayjs(formData?.q9)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b>Тархвар судлалын холбогдол</b>
                        </td>
                     </tr>
                     <tr>
                        <td
                           style={{
                              textAlign: 'start',
                              fontSize: 10,
                              padding: 1
                           }}
                        >
                           Халдварын эх уурхай
                        </td>
                        <td colSpan={3} style={{ textAlign: 'start', fontSize: 10, padding: 1 }}>
                           Дамжих зам
                        </td>
                        <td
                           style={{
                              textAlign: 'start',
                              fontSize: 10,
                              padding: 1,
                              width: 150
                           }}
                        >
                           Халдварт өртсөн байж болзошгүй огноо:
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>
                           <NewCheckboxGroup value={formData?.['q10']} className="dstory">
                              <NewCheckbox value={'q10-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хүн</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q10-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Мал (төрөл){formData?.['q10-3-1']}</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q10-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Амьтан (төрөл){formData?.['q10-3-1']}</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q10-4'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тогтоогдоогүй</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td colSpan={2} style={styles.leftText}>
                           <NewCheckboxGroup value={formData?.['q11']} className="dstory">
                              <NewCheckbox value={'q11-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Ахуйн:</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q11-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Шууд хавьтал /ам мөр:</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q11-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Ус мөр:</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q11-4'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хүнс мөр:</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q11-5'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хөрс мөр:</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q11-6'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Бусад:______________ мөр:</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q11-7'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Агаар / дусал</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q11-8'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Дам халдвар</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q11-9'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Цусаар</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q11-10'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тодорхойгүй</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td
                           colSpan={2}
                           style={{
                              textAlign: 'start',
                              fontSize: 10,
                              padding: 1
                           }}
                        >
                           {dayjs(formData?.q12)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b>Эмнэлэгт хандахаас өмнөх эмчилгээ</b>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.leftText}>
                           <b>Хэрэглэсэн эмийн нэр</b>
                        </td>
                        <td style={styles.leftText}>
                           <b>Хэдэн ширхэг, хэдэн удаа</b>
                        </td>
                        <td style={styles.leftText}>
                           <b>Эмчилгээ эхэлсэн хугацаа</b>
                        </td>
                        <td style={styles.leftText}>
                           <b>Үргэлжилсэн хугацаа</b>
                        </td>
                        <td style={styles.leftText}>
                           <b>Сорьц авахаас өмнө хэрэглэсэн эмийн нэр, тун, хэмжээ</b>
                        </td>
                     </tr>
                     {formData?.q13?.map((el, index) => {
                        return (
                           <tr key={index}>
                              <td style={styles.leftText}>{el['q13-1']}</td>
                              <td style={styles.leftText}>{el['q13-2']}</td>
                              <td style={styles.leftText}>{el['q13-3']}</td>
                              <td style={styles.leftText}>{el['q13-4']}</td>
                              <td style={styles.leftText}>{el['q13-5']}</td>
                           </tr>
                        );
                     })}
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b className="mr-1">Урьдчилсан онош (ОУӨА-10): </b> {formData?.q14}
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b className="mr-1">Мэдээлсэн байгууллага</b>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.leftText}>
                           <b>Мэдээлсэн байгууллага</b>
                        </td>
                        <td style={styles.leftText}>
                           <b>Мэдээлсэн эмч / мэргэжилтэн / албан тушаалтны нэр</b>
                        </td>
                        <td style={styles.leftText}>
                           <b>Мэдээлсэн хэлбэр</b>
                        </td>
                        <td style={styles.leftText}>
                           <b>Мэдээлсэн хугацаа</b>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>{formData?.q15}</td>
                        <td style={styles.leftText}>{formData?.q16}</td>
                        <td style={styles.leftText}>
                           <NewCheckboxGroup value={formData?.['q17']} className="dstory">
                              <NewCheckbox value={'q17-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Утсаар</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q17-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Цахимаар</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q17-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Цаасаар</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td style={styles.leftText}>
                           {dayjs(formData?.q18)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b>2 дугаар хэсэг</b>
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b>Лабораторийн шинжилгээ </b>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.leftText}>
                           <b>Сорьцын нэр</b>
                        </td>
                        <td style={styles.leftText}>
                           <b>Сорьц авсан огноо</b>
                        </td>
                        <td style={styles.leftText}>
                           <b>Шинжилгээний төрөл</b>
                        </td>
                        <td style={styles.leftText}>
                           <b>Шинжилгээний дүн</b>
                        </td>
                        <td style={styles.leftText}>
                           <b>Лабораторийн нэр</b>
                        </td>
                     </tr>
                     {formData?.q19?.map((el, index) => {
                        return (
                           <tr key={index}>
                              <td style={styles.leftText}>{el['q19-1']}</td>
                              <td style={styles.leftText}>{el['q19-2']}</td>
                              <td style={styles.leftText}>{el['q19-3']}</td>
                              <td style={styles.leftText}>{el['q19-4']}</td>
                              <td style={styles.leftText}>{el['q19-5']}</td>
                           </tr>
                        );
                     })}
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.leftText}>
                           <b>Батлагдсан онош (ОУӨА-10): {formData?.q20}</b>
                           <NewCheckboxGroup
                              value={formData?.['q21']}
                              className="dstory"
                              style={{ display: 'flex', flexDirection: 'row' }}
                           >
                              <NewCheckbox value={'q21-1'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Эмнэлзүйгээр</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q21-2'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тархвар холбогдлоор</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={'q21-3'} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Лаборатороор</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <div style={styles.rowCellWithText}>
                              <b>Эмнэлгийн тусламж үйлчилгээтэй холбоотой халдвар</b>
                              <NewCheckboxGroup
                                 value={formData?.['q22']}
                                 className="dstory"
                                 style={{ display: 'flex', flexDirection: 'row' }}
                              >
                                 <NewCheckbox value={'q22-1'} className="test">
                                    <span style={{ fontSize: 10 }}>&#8226; Тийм</span>
                                 </NewCheckbox>
                                 <br />
                                 <NewCheckbox value={'q22-2'} className="test">
                                    <span style={{ fontSize: 10 }}>&#8226; Үгүй</span>
                                 </NewCheckbox>
                              </NewCheckboxGroup>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b>
                              Онош батлагдсан огноо:{' '}
                              {dayjs(formData?.q23)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}{' '}
                           </b>
                        </td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
      </>
   );
}

export default AM2A;
