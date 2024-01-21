import React from 'react';
import { Table } from 'react-bootstrap';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';
import dayjs from 'dayjs';

//маягт АМ-33
function AM33(props) {
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
      }
   };

   const returnQuestionCode = (key, question, val) => {
      return formData?.[key]?.includes(question) ? (
         formData?.[key]?.map((el, index) => {
            if (el === question) {
               return (
                  <span key={index} style={{ fontSize: 10 }} className="underline">
                     {val}
                  </span>
               );
            }
         })
      ) : (
         <span style={{ fontSize: 10 }} className="">
            {val}
         </span>
      );
   };

   return (
      <>
         <div className="page">
            <div className="subpage">
               <div style={styles.flexContainer}>
                  <div style={{ display: 'flex' }}>
                     <span style={{ marginRight: 5 }}>А1. Эмнэлгийн нэр: {hospitalName}</span>
                  </div>
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
                           <span style={{ fontWeight: 'bold', fontSize: 9 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-33</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 5 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 13 }}>ОСОЛ ГЭМТЛИЙН ТОХИОЛДЛЫГ БҮРТГЭХ ХУУДАС</span>
               </div>
               <div style={styles.rowStyle}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                     <span style={{ marginRight: 5 }}>Эрэмбэлэн ангилал </span>
                     <div
                        style={{
                           ...styles.rowCells,
                           ...{ width: 50, textAlign: 'center' }
                        }}
                     >
                        {returnQuestionCode('q1', 'q1-1', 'A')}
                     </div>
                     <div
                        style={{
                           ...styles.rowCells,
                           ...{ width: 50, textAlign: 'center' }
                        }}
                     >
                        {returnQuestionCode('q1', 'q1-2', 'B')}
                     </div>
                     <div
                        style={{
                           ...styles.rowCells,
                           ...{ width: 50, textAlign: 'center' }
                        }}
                     >
                        {returnQuestionCode('q1', 'q1-3', 'C')}
                     </div>
                     <div
                        style={{
                           ...styles.rowCells,
                           ...{ width: 50, textAlign: 'center' }
                        }}
                     >
                        {returnQuestionCode('q1', 'q1-4', 'D')}
                     </div>
                  </div>
               </div>
               <div
                  style={{
                     ...styles.rowStyle,
                     ...{ display: 'flex', flexDirection: 'row' }
                  }}
               >
                  А 2. Эцэг /эх/-ийн нэр: {patientData?.lastName} А3. Нэр: {patientData?.firstName} А4. РД:{' '}
                  {patientData?.registerNumber}
               </div>
               <div style={styles.flexRow}>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '48%' }}>
                     <div style={styles.flexRow}>
                        <div
                           style={{
                              ...styles.rowStyle,
                              ...{ display: 'flex', flexDirection: 'row', width: 200 }
                           }}
                        >
                           А5. Нас: {patientData?.age}
                        </div>
                        <Table bordered className="document" style={{ marginTop: 5 }}>
                           <tbody>
                              <tr>
                                 <td colSpan={2} style={styles.centerText}>
                                    А6. Хүйс
                                 </td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Эрэгтэй</td>
                                 <td
                                    style={styles.centerText}
                                    className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}
                                 >
                                    1
                                 </td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Эмэгтэй</td>
                                 <td
                                    style={styles.centerText}
                                    className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}
                                 >
                                    2
                                 </td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Тодорхойгүй</td>
                                 <td style={styles.centerText}>99</td>
                              </tr>
                           </tbody>
                        </Table>
                     </div>
                     <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={styles.rowStyle}>А7. ТОГТМОЛ ХАЯГ:</div>
                        <Table bordered className="document" style={{ marginTop: 5 }}>
                           <tbody>
                              <tr>
                                 <td style={styles.leftText}>
                                    <div style={styles.rowStyle}>
                                       ___________________________________________________
                                    </div>
                                    <div style={styles.rowStyle}>
                                       ____________________________________________________
                                    </div>
                                    <div style={styles.rowStyle}>
                                       ____________________________________________________
                                    </div>
                                    <div style={styles.rowStyle}>
                                       ____________________________________________________
                                    </div>
                                    <div style={styles.rowStyle}>А8. УТАС __________________</div>
                                    <div style={styles.rowStyle}>А9. АЖЛЫН ГАЗАР, АЛБАН ТУШААЛ</div>
                                    <div style={styles.rowStyle}>
                                       ____________________________________________________
                                    </div>
                                    <div style={styles.rowStyle}>
                                       ____________________________________________________
                                    </div>
                                    <div style={styles.rowStyle}>
                                       ____________________________________________________
                                    </div>
                                 </td>
                              </tr>
                           </tbody>
                        </Table>
                     </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                     <div style={styles.flexRow}>
                        <Table bordered className="document" style={{ marginTop: 5 }}>
                           <tbody>
                              <tr>
                                 <td colSpan={2} style={styles.centerText}>
                                    А10. Боловсрол
                                 </td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Боловсролгүй</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q2', 'q2-1', '1')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Бага</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q2', 'q2-2', '2')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Суурь боловсрол</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q2', 'q2-3', '3')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Бүрэн дунд</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q2', 'q2-4', '4')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Мэргэжлийн болон техникийн</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q2', 'q2-5', '5')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Дипломын</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q2', 'q2-6', '6')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Бакалавр</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q2', 'q2-7', '7')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Магистр</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q2', 'q2-8', '8')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Доктор</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q2', 'q2-9', '9')}</td>
                              </tr>
                           </tbody>
                        </Table>
                        <Table bordered className="document" style={{ marginTop: 5, marginLeft: 10 }}>
                           <tbody>
                              <tr>
                                 <td colSpan={2} style={styles.centerText}>
                                    А14. Өөр эмнэлэгт хандсан эсэх
                                 </td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Өрх ЭМТөв</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q3', 'q3-1', '1')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Сум, тосгон, сум дундын ЭМТ</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q3', 'q3-2', '2')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Аймаг, Дүүргийн НЭ</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q3', 'q3-3', '3')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>БОЭТ</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q3', 'q3-4', '4')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Төрөлжсөн мэргэжлийн эмнэлэг</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q3', 'q3-5', '5')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Бусад</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q3', 'q3-6', '98')}</td>
                              </tr>
                           </tbody>
                        </Table>
                     </div>
                     <div style={styles.flexRow}>
                        <Table bordered className="document" style={{ marginTop: 5, marginBottom: 5 }}>
                           <tbody>
                              <tr>
                                 <td colSpan={2} style={styles.centerText}>
                                    A11. Эмнэлэгт яаж ирсэн
                                 </td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Өөрөө</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q4', 'q3-1', '1')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Түргэн тусламжаар</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q4', 'q4-2', '2')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Бусад</td>
                                 <td style={styles.centerText}>{formData?.q4Other}</td>
                              </tr>
                           </tbody>
                        </Table>
                        <Table bordered className="document" style={{ marginTop: 5, marginLeft: 10, marginBottom: 5 }}>
                           <tbody>
                              <tr>
                                 <td colSpan={5} style={styles.leftText}>
                                    15.Гэмтсэн/он,сар,өдөр,цаг,мин/
                                 </td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText} colSpan={5}>
                                    {dayjs(formData.q5)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                                 </td>
                              </tr>
                              <tr>
                                 <td colSpan={5} style={styles.leftText}>
                                    16.Үзүүлсэн/он,сар,өдөр,цаг,мин/
                                 </td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText} colSpan={5}>
                                    {dayjs(formData.q6)?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                                 </td>
                              </tr>
                           </tbody>
                        </Table>
                     </div>
                  </div>
               </div>
               <Table bordered className="document">
                  <tbody>
                     <tr>
                        <td colSpan={2} style={styles.centerText}>
                           А12. Гэмтэл авах үедээ согтууруулах ундаа хэрэглэсэн байсан эсэх
                        </td>
                        <td rowSpan={6} style={{ fontSize: 9, width: '75%' }}>
                           А17.Осол болсон газар, байршил /дүүрэг, хороо, осол болсон цэгийг бичнэ үү!/:
                           <div>{formData?.q9}</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>Тийм</td>
                        <td style={styles.centerText}>
                           <span style={{ fontSize: 10 }} className={formData?.q7 === 'q7-1' ? 'underline' : ''}>
                              1
                           </span>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>Үгүй</td>
                        <td style={styles.centerText}>
                           <span style={{ fontSize: 10 }} className={formData?.q7 === 'q7-2' ? 'underline' : ''}>
                              2
                           </span>
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2} style={styles.centerText}>
                           А13. Гэмтэл авах үедээ мансууруулах бодис хэрэглэсэн байсан эсэх
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>Тийм</td>
                        <td style={styles.centerText}>
                           <span style={{ fontSize: 10 }} className={formData?.q8 === 'q8-1' ? 'underline' : ''}>
                              1
                           </span>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>Үгүй</td>
                        <td style={styles.centerText}>
                           <span style={{ fontSize: 10 }} className={formData?.q8 === 'q8-2' ? 'underline' : ''}>
                              2
                           </span>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document">
                  <tbody>
                     <tr>
                        <td colSpan={6} style={styles.centerText}>
                           Б 1. ОСОЛ ГАРАХ ҮЕИЙН БАЙРШИЛ
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 300 } }}>Гэртээ</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q10', 'q10-1', '1')}
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                        <td rowSpan={4} style={styles.centerText}>
                           Ажлын байранд
                        </td>
                        <td style={styles.leftText}>Үйлдвэрлэл</td>
                        <td style={styles.centerText}>{returnQuestionCode('q10', 'q10-8', '8')}</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 300 } }}>Сургууль, цэцэрлэг</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q10', 'q10-2', '2')}
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                        <td style={styles.leftText}>Барилга</td>
                        <td style={styles.centerText}>{returnQuestionCode('q10', 'q10-9', '9')}</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 300 } }}>Биеийн тамир, спортын талбай</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q10', 'q10-3', '3')}
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                        <td style={styles.leftText}>Уурхай</td>
                        <td style={styles.centerText}>{returnQuestionCode('q10', 'q10-10', '10')}</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 300 } }}>Гудамж, зам</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q10', 'q10-4', '4')}
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                        <td style={styles.leftText}>Албан тасалгаа</td>
                        <td style={styles.centerText}>{returnQuestionCode('q10', 'q10-11', '11')}</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 300 } }}>Худалдаа үйлчилгээний газар</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q10', 'q10-5', '5')}
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                        <td rowSpan={2} colSpan={2} style={styles.centerText}>
                           <div>Бусад / бичих /: {formData?.q10Other}</div>
                        </td>
                        <td rowSpan={2} style={styles.centerText}>
                           98
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 300 } }}>Хөдөө аж ахуй ба ферм</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q10', 'q10-6', '6')}
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 300 } }}>Олон нийтийн газар (бар, диско)</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q10', 'q10-7', '7')}
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                        <td colSpan={2} style={styles.leftText}>
                           Тодорхойгүй
                        </td>
                        <td style={styles.centerText}>{returnQuestionCode('q10', 'q10-12', '12')}</td>
                     </tr>
                  </tbody>
               </Table>
               <Table bordered className="document">
                  <tbody>
                     <tr>
                        <td colSpan={6} style={styles.centerText}>
                           Б 2. ОСОЛ ГЭМТЛИЙН ШАЛТГААН
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={2} style={{ ...styles.leftText, ...{ width: 300 } }}>
                           Зам тээврийн осол /V00-V99/
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q11', 'q11-1', '1')}
                        </td>
                        <td rowSpan={17} style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                        <td rowSpan={2} style={styles.centerText}>
                           <b>Амьтай механик хүчинд өртөх /W50-W59/ бүлгээс харах</b>
                        </td>
                        <td style={styles.leftText}>Нохойд хазуулах</td>
                        <td style={styles.centerText}>{returnQuestionCode('q16', 'q16-1', '17')}</td>
                     </tr>
                     <tr>
                        <td colSpan={2} style={{ ...styles.leftText, ...{ width: 300 } }}>
                           Хүчирхийлэл /X85-Y09/
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q11', 'q11-2', '2')}
                        </td>
                        <td style={styles.leftText}>
                           Бусад хүн, амьтанд хазуулах, хатгуулах, өшиглүүлэх /бичих/: {formData?.q16Other}
                        </td>
                        <td style={styles.centerText}>{returnQuestionCode('q16', 'q16-2', '18')}</td>
                     </tr>
                     <tr>
                        <td colSpan={2} style={{ ...styles.leftText, ...{ width: 300 } }}>
                           Амиа хорлохыг завдах /X60-X84/
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q11', 'q11-3', '3')}
                        </td>
                        <td colSpan={2} style={styles.leftText}>
                           Хорт амьтан, ургамалд өртөх /Х20-Х29/ бичих/: {formData?.q17}
                        </td>
                        <td style={styles.centerText}>19</td>
                     </tr>
                     <tr>
                        <td rowSpan={10} style={{ ...styles.centerText, ...{ width: 100 } }}>
                           <b>Уналт /W00-W19/ бүлгээс харах</b>
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 200 } }}>Цас, мөсөн дээр хальтарч унах</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q12', 'q12-1', '4')}
                        </td>
                        <td colSpan={2} style={styles.leftText}>
                           Усанд унах, живэх /W65-W74/ бичих/: {formData?.q18}
                        </td>
                        <td style={styles.centerText}>20</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 200 } }}>Явганаас унах</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q12', 'q12-2', '5')}
                        </td>
                        <td colSpan={2} style={styles.leftText}>
                           Байгалийн хүчинд өртөх /аянга, газар хөдлөлт /X30-39/ /бичих/: {formData?.q19}
                        </td>
                        <td style={styles.centerText}>21</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 200 } }}>Тэшүүр, цанаар гулгах үед унах</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q12', 'q12-3', '6')}
                        </td>
                        <td colSpan={2} style={styles.leftText}>
                           Үүнээс: осгох, хөлдөх /Х31/: {formData?.q20}
                        </td>
                        <td style={styles.centerText}>22</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 200 } }}>Хүнтэй мөргөлдөх, түлхэгдэн унах</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q12', 'q12-4', '7')}
                        </td>
                        <td rowSpan={9} style={styles.centerText}>
                           <b>Түлэгдэлт /W85- X19/ бүлгээс харах</b>
                        </td>
                        <td style={styles.leftText}>Цахилгаан гүйдэл</td>
                        <td style={styles.centerText}>{returnQuestionCode('q21', 'q21-1', '23')}</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 200 } }}>Ор, сандал, гэрийн тавилга /зур/</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q12', 'q12-5', '8')}
                        </td>
                        <td style={styles.leftText}>Гал, дөлд</td>
                        <td style={styles.centerText}>{returnQuestionCode('q21', 'q21-2', '24')}</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 200 } }}>Спортын хэрэгслээс унах</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q12', 'q12-6', '9')}
                        </td>
                        <td style={styles.leftText}>Халуун цай, хоол, тосонд</td>
                        <td style={styles.centerText}>{returnQuestionCode('q21', 'q21-3', '25')}</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 200 } }}>Шат, гишгүүрээс унах</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q12', 'q12-7', '10')}
                        </td>
                        <td style={styles.leftText}>Халуун усанд</td>
                        <td style={styles.centerText}>{returnQuestionCode('q21', 'q21-4', '26')}</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 200 } }}>Барилга, байгууламжаас унах</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q12', 'q12-8', '11')}
                        </td>
                        <td style={styles.leftText}>Халуун уур, агаар, хийнд</td>
                        <td style={styles.centerText}>{returnQuestionCode('q21', 'q21-5', '27')}</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 200 } }}>
                           Бусад уналт/бичих/: {formData?.q12Other}
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q12', 'q12-9', '12')}
                        </td>
                        <td style={styles.leftText}>Ахуйн халуун хэрэгсэлд</td>
                        <td style={styles.centerText}>{returnQuestionCode('q21', 'q21-6', '28')}</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 200 } }}>Тодорхойгүй уналт</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>
                           {returnQuestionCode('q12', 'q12-10', '13')}
                        </td>
                        <td style={styles.leftText}>Халаах хэрэгсэл, дулааны халаагуур</td>
                        <td style={styles.centerText}>{returnQuestionCode('q21', 'q21-7', '29')}</td>
                     </tr>
                     <tr>
                        <td rowSpan={4} style={{ ...styles.centerText, ...{ width: 100 } }}>
                           <b>Амьгүй механик хүчинд өртөх /W20- W49/ бүлгээс харах</b>
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: 200 } }}>Хурц зүйл /бичих/: {formData?.q13}</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>14</td>
                        <td style={styles.leftText}>Бусад түлэгдэл: {formData?.q21Other}</td>
                        <td style={styles.centerText}>{returnQuestionCode('q21', 'q21-8', '30')}</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ width: 200 } }}>Мохоо зүйлд /бичих/: {formData?.q14}</td>
                        <td style={{ ...styles.centerText, ...{ width: 20 } }}>15</td>
                        <td style={styles.leftText}>Тодорхойгүй</td>
                        <td style={styles.centerText}>{returnQuestionCode('q21', 'q21-9', '31')}</td>
                     </tr>
                     <tr>
                        <td rowSpan={2} style={{ ...styles.leftText, ...{ width: 200 } }}>
                           Бусад /бүх төрлийн буу, даралтат хийтэй зүйл, сальют гэх мэт бичих/: {formData?.q15}
                        </td>
                        <td rowSpan={2} style={{ ...styles.centerText, ...{ width: 20 } }}>
                           16
                        </td>
                        <td rowSpan={2} style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                        <td style={styles.leftText}>Бусад осол /бичих/: {formData?.q22}</td>
                        <td style={styles.centerText}>98</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Тодорхойгүй осол: {formData?.q23}</td>
                        <td style={styles.centerText}>99</td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>

         <div className="page">
            <div className="subpage">
               <div style={styles.centerText}>
                  <b>В. ЗАМ ТЭЭВРИЙН ОСОЛ V00-V99</b>
               </div>
               <div style={styles.flexRow}>
                  <Table bordered className="document" style={{ marginRight: 5 }}>
                     <tbody>
                        <tr>
                           <td colSpan={2} style={styles.centerText}>
                              <b>В1 Осол гарах үед та ямар тээврийн хэрэгслээр явж байсан бэ</b>
                           </td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Явган</td>
                           <td style={styles.centerText}>{returnQuestionCode('q24', 'q24-1', '1')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Унадаг дугуй, мопед</td>
                           <td style={styles.centerText}>{returnQuestionCode('q24', 'q24-2', '2')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Мотоцикл</td>
                           <td style={styles.centerText}>{returnQuestionCode('q24', 'q24-3', '3')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Суудлын тэрэг</td>
                           <td style={styles.centerText}>{returnQuestionCode('q24', 'q24-4', '4')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Ачааны тэрэг</td>
                           <td style={styles.centerText}>{returnQuestionCode('q24', 'q24-5', '5')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Нийтийн тээврийн хэрэгсэл</td>
                           <td style={styles.centerText}>{returnQuestionCode('q24', 'q24-6', '6')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Морь</td>
                           <td style={styles.centerText}>{returnQuestionCode('q24', 'q24-7', '7')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Галт тэрэг</td>
                           <td style={styles.centerText}>{returnQuestionCode('q24', 'q24-8', '8')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Онгоцны осол </td>
                           <td style={styles.centerText}>{returnQuestionCode('q24', 'q24-9', '9')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Бусад: {formData?.q24Other} </td>
                           <td style={styles.centerText}>98</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Тодорхойгүй</td>
                           <td style={styles.centerText}>{returnQuestionCode('q24', 'q24-10', '99')}</td>
                        </tr>
                     </tbody>
                  </Table>
                  <Table bordered className="document" style={{ marginRight: 5 }}>
                     <tbody>
                        <tr>
                           <td colSpan={2} style={styles.centerText}>
                              <b>В2 Та ослын үед замын хөдөлгөөнд яаж оролцож байсан бэ</b>
                           </td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Явган зорчигч</td>
                           <td style={styles.centerText}>{returnQuestionCode('q25', 'q25-1', '1')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Жолооч</td>
                           <td style={styles.centerText}>{returnQuestionCode('q25', 'q25-2', '2')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Зорчигч</td>
                           <td style={styles.centerText}>{returnQuestionCode('q25', 'q25-3', '3')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Уралдааны морь унаач</td>
                           <td style={styles.centerText}>{returnQuestionCode('q25', 'q25-4', '4')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Энгийн морь унаач </td>
                           <td style={styles.centerText}>{returnQuestionCode('q25', 'q25-5', '5')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>
                              <div style={styles.rowStyle}>Бусад: {formData?.q25Other}</div>
                           </td>
                           <td style={styles.centerText}>98</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>{returnQuestionCode('q25', 'q25-6', '99')}</td>
                           <td style={styles.centerText}>99</td>
                        </tr>
                     </tbody>
                  </Table>
                  <Table bordered className="document" style={{ marginRight: 5 }}>
                     <tbody>
                        <tr>
                           <td colSpan={2} style={styles.centerText}>
                              <b>В3 Та ослын үед ямар зүйлтэй мөргөлдсөн бэ</b>
                           </td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Явган хүн, мал амьтан</td>
                           <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-1', '1')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Унадаг дугуй</td>
                           <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-2', '2')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Мотоцикл</td>
                           <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-3', '3')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Суудлын машин ба бага даацын тээврийн хэрэгсэл</td>
                           <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-4', '4')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Автобус, ачааны машин</td>
                           <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-5', '5')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Галт тэрэг</td>
                           <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-6', '6')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Хөдөлгөөнгүй зүйл</td>
                           <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-7', '7')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Мөргөлдөөгүй /онхолдох/</td>
                           <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-8', '8')}</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>&nbsp;</td>
                           <td style={styles.centerText}>&nbsp;</td>
                        </tr>
                        <tr>
                           <td style={styles.leftText}>Тодорхойгүй</td>
                           <td style={styles.centerText}>{returnQuestionCode('q26', 'q26-9', '99')}</td>
                        </tr>
                     </tbody>
                  </Table>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <Table bordered className="document">
                        <tbody>
                           <tr>
                              <td colSpan={2} style={styles.centerText}>
                                 <b>В4 Осол гарах үед та ямар хамгаалалт хэрэглэсэн бэ</b>
                              </td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>
                                 <b>Хамгаалах бүс</b>
                              </td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Тийм</td>
                              <td style={styles.centerText}>
                                 <span
                                    style={{ fontSize: 10 }}
                                    className={formData?.q27 === 'q27-1' ? 'underline' : ''}
                                 >
                                    1
                                 </span>
                              </td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Үгүй</td>
                              <td style={styles.centerText}>
                                 <span
                                    style={{ fontSize: 10 }}
                                    className={formData?.q27 === 'q27-2' ? 'underline' : ''}
                                 >
                                    2
                                 </span>
                              </td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>
                                 <b>В5. Хамгаалалтын малгай</b>
                              </td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Тийм</td>
                              <td style={styles.centerText}>
                                 <span
                                    style={{ fontSize: 10 }}
                                    className={formData?.q28 === 'q28-1' ? 'underline' : ''}
                                 >
                                    1
                                 </span>
                              </td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Үгүй</td>
                              <td style={styles.centerText}>
                                 <span
                                    style={{ fontSize: 10 }}
                                    className={formData?.q28 === 'q28-2' ? 'underline' : ''}
                                 >
                                    2
                                 </span>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                     <Table bordered className="document" style={{ width: 120 }}>
                        <tbody>
                           <tr>
                              <td colSpan={3} style={styles.centerText}>
                                 <b>В6. Зам тээврийн осолд өртөгсдийн тоо</b>
                              </td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>{returnQuestionCode('q29', 'q29-1', '1')}</td>
                              <td style={styles.centerText}>{returnQuestionCode('q29', 'q29-2', '2')}</td>
                              <td style={styles.centerText}>{returnQuestionCode('q29', 'q29-3', '3')}</td>
                           </tr>
                           <tr>
                              <td colSpan={3} style={styles.centerText}>
                                 {returnQuestionCode('q29', 'q29-4', '4-өөс дээш')}
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </div>
               </div>
               <div style={styles.flexContainer}>
                  <div style={{ width: '49%', textAlign: 'center' }}>
                     <b>Г. ХҮЧИРХИЙЛЭЛ Х85-Y09</b>
                  </div>
                  <div style={{ width: '49%', textAlign: 'center' }}>
                     <b>Д. АМИА ХОРЛОХЫГ ЗАВДАХ Х60- Х84</b>
                  </div>
               </div>
               <div style={styles.flexContainerTop}>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: 10
                     }}
                  >
                     <Table bordered className="document">
                        <tbody>
                           <tr>
                              <td colSpan={2} style={styles.centerText}>
                                 <b>Г1. Хүчирхийлэлийн хэлбэр</b>
                              </td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Бие махбодын</td>
                              <td style={styles.centerText}>{returnQuestionCode('q30', 'q30-1', '1')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Сэтгэл санааны</td>
                              <td style={styles.centerText}>{returnQuestionCode('q30', 'q30-2', '2')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Бэлгийн хэлбэр</td>
                              <td style={styles.centerText}>{returnQuestionCode('q30', 'q30-3', '3')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Эдийн засгийн хэлбэр</td>
                              <td style={styles.centerText}>{returnQuestionCode('q30', 'q30-4', '4')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Хууль хяналтын байгууллагын дарамт</td>
                              <td style={styles.centerText}>{returnQuestionCode('q30', 'q30-5', '5')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Хар тамхитай холбоотой</td>
                              <td style={styles.centerText}>{returnQuestionCode('q30', 'q30-6', '6')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>
                                 <div>Бусад / бичих /: {formData?.q30Other}</div>
                              </td>
                              <td style={styles.centerText}>98</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Тодорхойгүй</td>
                              <td style={styles.centerText}>{returnQuestionCode('q30', 'q30-7', '99')}</td>
                           </tr>
                        </tbody>
                     </Table>
                     <Table bordered className="document">
                        <tbody>
                           <tr>
                              <td colSpan={2} style={styles.centerText}>
                                 <b>Г3. Хэдэн хүчирхийлэгч оролцсон бэ?</b>
                              </td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>1</td>
                              <td style={styles.centerText}>{returnQuestionCode('q32', 'q32-1', '1')}</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>2</td>
                              <td style={styles.centerText}>{returnQuestionCode('q32', 'q32-2', '2')}</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>3</td>
                              <td style={styles.centerText}>{returnQuestionCode('q32', 'q32-3', '3')}</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>4 ба дээш</td>
                              <td style={styles.centerText}>{returnQuestionCode('q32', 'q32-4', '4')}</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>Тодорхойгүй</td>
                              <td style={styles.centerText}>{returnQuestionCode('q32', 'q32-5', '99')}</td>
                           </tr>
                        </tbody>
                     </Table>
                     <Table bordered className="document">
                        <tbody>
                           <tr>
                              <td colSpan={2} style={styles.centerText}>
                                 <b>Г4. Гол хүчирхийлэгчийн хүйс</b>
                              </td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>Эрэгтэй</td>
                              <td style={styles.centerText}>{returnQuestionCode('q33', 'q33-1', '1')}</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>Эмэгтэй</td>
                              <td style={styles.centerText}>{returnQuestionCode('q33', 'q33-2', '2')}</td>
                           </tr>
                           <tr>
                              <td style={styles.centerText}>Тодорхойгүй</td>
                              <td style={styles.centerText}>{returnQuestionCode('q33', 'q33-2', '99')}</td>
                           </tr>
                        </tbody>
                     </Table>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: 10
                     }}
                  >
                     <Table bordered className="document">
                        <tbody>
                           <tr>
                              <td colSpan={3} style={styles.centerText}>
                                 <b>Г2. Хэрэглэсэн арга/ зүйл</b>
                              </td>
                           </tr>
                           <tr>
                              <td colSpan={2} style={styles.leftText}>
                                 Дүүжлэх, боймлох, боох /Х91/
                              </td>
                              <td style={styles.centerText}>{returnQuestionCode('q31', 'q31-1', '1')}</td>
                           </tr>
                           <tr>
                              <td colSpan={2} style={styles.leftText}>
                                 Усанд живүүлэх /Х92/
                              </td>
                              <td style={styles.centerText}>{returnQuestionCode('q31', 'q31-2', '2')}</td>
                           </tr>
                           <tr>
                              <td colSpan={2} style={styles.leftText}>
                                 Галт зэвсэг, буугаар халдах /Х93- Х95/
                              </td>
                              <td style={styles.centerText}>{returnQuestionCode('q31', 'q31-3', '3')}</td>
                           </tr>
                           <tr>
                              <td colSpan={2} style={styles.leftText}>
                                 Тэсрэх, дэлбэрэх зүйлээр халдах /Х96/
                              </td>
                              <td style={styles.centerText}>{returnQuestionCode('q31', 'q31-4', '4')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Утаа, гал дөлөөр түлэх /Х97/</td>
                              <td style={styles.centerText}>&nbsp;&nbsp;&nbsp;</td>
                              <td style={styles.centerText}>{returnQuestionCode('q31', 'q31-5', '5')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Халуун зүйлээр түлэх /Х98/</td>
                              <td style={styles.centerText}>&nbsp;</td>
                              <td style={styles.centerText}>{returnQuestionCode('q31', 'q31-6', '6')}</td>
                           </tr>
                           <tr>
                              <td colSpan={2} style={styles.leftText}>
                                 Иртэй зүйлээр /Х99/
                              </td>
                              <td style={styles.centerText}>{returnQuestionCode('q31', 'q31-7', '7')}</td>
                           </tr>
                           <tr>
                              <td colSpan={2} style={styles.leftText}>
                                 Мохоо зүйлээр /Ү00/
                              </td>
                              <td style={styles.centerText}>{returnQuestionCode('q31', 'q31-8', '8')}</td>
                           </tr>
                           <tr>
                              <td colSpan={2} style={styles.leftText}>
                                 Өндрөөс түлхэх /Y01-Y02/
                              </td>
                              <td style={styles.centerText}>{returnQuestionCode('q31', 'q31-9', '9')}</td>
                           </tr>
                           <tr>
                              <td colSpan={2} style={styles.leftText}>
                                 Тээврийн хэрэгслээр осол хийж хорлох /Ү03/
                              </td>
                              <td style={styles.centerText}>{returnQuestionCode('q31', 'q31-10', '10')}</td>
                           </tr>
                           <tr>
                              <td colSpan={2} style={styles.leftText}>
                                 Биеийн хүчээр халдах /Ү04-Ү05/
                              </td>
                              <td style={styles.centerText}>{returnQuestionCode('q31', 'q31-11', '11')}</td>
                           </tr>
                           <tr>
                              <td colSpan={2} style={styles.leftText}>
                                 Бусад /бичих/: {formData?.q31Other}
                              </td>
                              <td style={styles.centerText}>{returnQuestionCode('q31', 'q31-1', '98')}</td>
                           </tr>
                           <tr>
                              <td colSpan={2} style={styles.leftText}>
                                 Тодорхойгүй
                              </td>
                              <td style={styles.centerText}>{returnQuestionCode('q31', 'q31-1', '99')}</td>
                           </tr>
                        </tbody>
                     </Table>
                     <Table bordered className="document">
                        <tbody>
                           <tr>
                              <td colSpan={3} style={styles.centerText}>
                                 <b>Г5. Хүчирхийлэгч-хохирогч хоорондын холбоо</b>
                              </td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Гэр бүлийн хүн /хамтран амьдрагч</td>
                              <td style={styles.centerText}>{returnQuestionCode('q34', 'q34-1', '1')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Эх эцэг</td>
                              <td style={styles.centerText}>{returnQuestionCode('q34', 'q34-2', '2')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Бусад хамаатан</td>
                              <td style={styles.centerText}>{returnQuestionCode('q34', 'q34-3', '3')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Хамаатан биш харгалзагч</td>
                              <td style={styles.centerText}>{returnQuestionCode('q34', 'q34-4', '4')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Танил/найз</td>
                              <td style={styles.centerText}>{returnQuestionCode('q34', 'q34-5', '5')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Хууль цагдаагийн хүн</td>
                              <td style={styles.centerText}>{returnQuestionCode('q34', 'q34-6', '6')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Үл таних хүн</td>
                              <td style={styles.centerText}>{returnQuestionCode('q34', 'q34-7', '7')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Бусад: {formData?.q34Other}</td>
                              <td style={styles.centerText}>{returnQuestionCode('q34', 'q34-8', '98')}</td>
                           </tr>
                           <tr>
                              <td style={styles.leftText}>Тодорхойгүй</td>
                              <td style={styles.centerText}>{returnQuestionCode('q34', 'q34-9', '99')}</td>
                           </tr>
                        </tbody>
                     </Table>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'column',
                              marginRight: 10
                           }}
                        >
                           <Table bordered className="document">
                              <tbody>
                                 <tr>
                                    <td colSpan={2} style={styles.centerText}>
                                       <b>Д1. Амиа хорлоход хүргэсэн хэлбэр</b>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Биеийн өвчин</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q35', 'q35-1', '1')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Сэтгэл санааны</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q35', 'q35-2', '2')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Бэлгийн хэлбэр</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q35', 'q35-3', '3')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Эдийн засгийн хэлбэр</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q35', 'q35-4', '4')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Хууль хяналтын байгууллагын дарамт</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q35', 'q35-5', '5')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Сэтгэцийн эмгэгтэй</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q35', 'q35-6', '6')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Гэр бүлийн гишүүд маргалдах</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q35', 'q35-7', '7')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Ажлын байрны дарамт</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q35', 'q35-8', '8')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Бусад: {formData?.q35Other}</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q35', 'q35-9', '98')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Тодорхойгүй</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q35', 'q35-10', '99')}</td>
                                 </tr>
                              </tbody>
                           </Table>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                           <Table bordered className="document">
                              <tbody>
                                 <tr>
                                    <td colSpan={2} style={styles.centerText}>
                                       <b>Д2. Хэрэглэсэн арга/ зүйл</b>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Эмийн бодис /бичих/: {formData?.q36}</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q38', 'q38-1', '1')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Спирт, бусад бодис /бичих/: {formData?.q37}</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q38', 'q38-2', '2')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Дүүжлэх, боох /Х70/ </td>
                                    <td style={styles.centerText}>{returnQuestionCode('q38', 'q38-3', '3')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Усанд живэх /Х71/</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q38', 'q38-4', '4')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Галт зэвсэг, буу /Х72- Х74/</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q38', 'q38-5', '5')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Тэсрэх, дэлбэрэх /X75/ </td>
                                    <td style={styles.centerText}>{returnQuestionCode('q38', 'q38-6', '6')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Гал дөл, ууранд түлэх /Х76-Х77/</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q38', 'q38-7', '7')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Иртэй зүйлээр /Х78/</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q38', 'q38-8', '8')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Мохоо зүйлээр /Х79/</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q38', 'q38-9', '9')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Өндрөөс үсрэх /X80/</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q38', 'q38-10', '10')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Зам тээврийн осолд орох /X81-X82/</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q38', 'q38-11', '11')}</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>
                                       <div>Бусад / бичих /: {formData?.q38Other}</div>
                                    </td>
                                    <td style={styles.centerText}>98</td>
                                 </tr>
                                 <tr>
                                    <td style={styles.leftText}>Тодорхойгүй</td>
                                    <td style={styles.centerText}>{returnQuestionCode('q38', 'q38-12', '99')}</td>
                                 </tr>
                              </tbody>
                           </Table>
                        </div>
                     </div>
                     <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Table bordered className="document">
                           <tbody>
                              <tr>
                                 <td style={styles.centerText}>
                                    <b>Е2. ГЭМТЛИЙН ОНОШ</b>
                                 </td>
                              </tr>
                              <tr>
                                 <td style={{ ...styles.centerText, ...{ height: 100 } }}>{formData?.q40}</td>
                              </tr>
                           </tbody>
                        </Table>
                        <Table bordered className="document">
                           <tbody>
                              <tr>
                                 <td colSpan={4} style={styles.centerText}>
                                    <b>Е3 ШИЛЖҮҮЛСЭН ХЭЛБЭР</b>
                                 </td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Тасаг</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q41', 'q41-1', '1')}</td>
                                 <td style={styles.leftText}>Өрх</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q41', 'q41-4', '4')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Эрчимт эмчилгээ </td>
                                 <td style={styles.centerText}>{returnQuestionCode('q41', 'q41-2', '2')}</td>
                                 <td style={styles.leftText}>Аймаг/Дүүргийн НЭ</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q41', 'q41-5', '5')}</td>
                              </tr>
                              <tr>
                                 <td style={styles.leftText}>Нас барсан</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q41', 'q41-3', '3')}</td>
                                 <td style={styles.leftText}>Бусад</td>
                                 <td style={styles.centerText}>{returnQuestionCode('q41', 'q41-6', '99')}</td>
                              </tr>
                           </tbody>
                        </Table>
                     </div>
                  </div>
               </div>
               <div style={styles.flexRow}>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '48%' }}>
                     <Table bordered className="document">
                        <tbody>
                           <tr>
                              <td style={styles.centerText}>
                                 <b>Е1. ТУСГАЙ ТЭМДЭГЛЭЛ /Гэмтсэн шалтгаан, механизмыг дэлгэрэнгүй бичнэ./</b>
                              </td>
                           </tr>
                           <tr>
                              <td style={{ ...styles.centerText, ...{ height: 100 } }}>{formData?.q39}</td>
                           </tr>
                        </tbody>
                     </Table>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '48%' }}>
                     <Table bordered className="document">
                        <tbody>
                           <tr>
                              <td style={styles.centerText}>
                                 <b>Е4. АВСАН АРГА ХЭМЖЭЭ</b>
                              </td>
                           </tr>
                           <tr>
                              <td style={{ ...styles.centerText, ...{ height: 115 } }}>{formData?.q42}</td>
                           </tr>
                        </tbody>
                     </Table>
                  </div>
               </div>
               <div style={styles.centerText}>
                  <b>
                     Эмчийн нэр, гарын үсэг /тамга/ {formData?.q43} (<span style={{ marginLeft: 100 }}>)</span>
                  </b>
               </div>
            </div>
         </div>
      </>
   );
}

export default AM33;
