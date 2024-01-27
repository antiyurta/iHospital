import dayjs from 'dayjs';
import React from 'react';
import { Table } from 'react-bootstrap';

function am7(props) {
   console.log('props am7', props);
   const {
      type,
      data: { formData, patientData },
      appointmentId,
      hospitalName
   } = props;
   const styles = {
      generalText: {
         fontSize: 12,
         lineHeight: 1.1
      },
      generalTextBold: {
         fontWeight: 'bold',
         fontSize: 12,
         lineHeight: 1.1,
         padding: 3
      },
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 12,
         height: 12
      },
      checkContainer: {
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
         paddingLeft: 5
      }
   };

   const returnQuestionCode = (key, question, val) => {
      return formData?.[key]?.includes(question) ? (
         formData?.[key]?.map((el, index) => {
            if (el == question) {
               return (
                  <span
                     key={index}
                     style={{ fontSize: 12, textAlign: 'center' }}
                     className={el === question ? 'underline font-bold' : ''}
                  >
                     {val}
                  </span>
               );
            }
         })
      ) : (
         <span style={{ fontSize: 12 }}>{val}</span>
      );
   };

   return (
      <div className="page">
         <div className="subpage">
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
               <span style={{ fontWeight: 'bold', fontSize: 12 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-7</span>
            </div>
            <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 5 }}>
               <span style={{ fontWeight: 'bold', fontSize: 14 }}>НАС БАРСАН ТУХАЙ ЭМНЭЛГИЙН ГЭРЧИЛГЭЭ</span>
            </div>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td
                        style={{
                           ...styles.generalTextBold,
                           ...{ fontStyle: 'italic' }
                        }}
                        colSpan={5}
                     >
                        Эмнэлгийн нэр лого
                     </td>
                  </tr>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '23%' } }}>
                        Эцэг/эхийн нэр: {patientData?.lastName}
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '23%' } }}>Нэр: {patientData?.firstName}</td>
                     <td style={{ ...styles.generalText, ...{ width: '23%' } }}>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              padding: 5
                           }}
                        >
                           <span style={{ marginRight: 5 }}>Хүйс: </span>
                           <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <span
                                 style={{ fontSize: 12 }}
                                 className={patientData?.genderType === 'MAN' ? 'underline mr-1' : 'mr-1'}
                              >
                                 {' '}
                                 эрэгтэй,{' '}
                              </span>
                              <span
                                 style={{ fontSize: 12 }}
                                 className={patientData?.genderType === 'WOMAN' ? 'underline mr-1' : 'mr-1'}
                              >
                                 эмэгтэй
                              </span>
                           </div>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '23%' } }}>РД: {patientData?.registerNumber}</td>
                     <td style={{ ...styles.generalText, ...{ width: '8%' } }}>Нас: {patientData?.age}</td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>Төрсөн өдөр, сар,он</td>
                     <td style={{ ...styles.generalText, ...{ width: '16%' } }} colSpan={8}>
                        {dayjs(formData.patientData?.birthDate)?.format('YYYY-MM-DD')}
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>Нас барсан огноо</td>
                     <td style={{ ...styles.generalText, ...{ width: '16%' } }} colSpan={8}>
                        {dayjs(formData?.q1)?.format('YYYY-MM-DD')}
                     </td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td style={styles.generalText}>
                        Гэрийн хаяг:
                        ____________________________________________________________________________________________
                     </td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td style={styles.generalTextBold}>А хэсэг :</td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td rowSpan={5} style={{ ...styles.generalText, ...{ width: 170 } }}>
                        1. Үхэлд шууд хүргэсэн өвчин ба эмгэг /а/: {formData?.q2}
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: 30 } }}></td>
                     <td style={styles.generalText}></td>
                     <td style={styles.generalText}>Нас баралтын шалтгаан: {formData?.q3}</td>
                     <td style={{ ...styles.generalText, ...{ width: 100 } }}>
                        Өвчин эхэлснээс хойш нас барах хүртэлх хугацаа: {dayjs(formData?.q4)?.format('YYYY-MM-DD')}
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: 80 } }}>ӨОУА-10: {formData?.q5}</td>
                  </tr>
                  <tr>
                     <td rowSpan={2} style={styles.generalText}>
                        ARROW
                     </td>
                     <td style={styles.generalText}>А</td>
                     <td style={styles.generalText}></td>
                     <td style={styles.generalText}></td>
                  </tr>
                  <tr>
                     <td style={styles.generalText}>Б</td>
                     <td style={styles.generalText}>Улмаас</td>
                     <td style={styles.generalText}></td>
                  </tr>
                  <tr>
                     <td rowSpan={2} style={styles.generalText}>
                        ARROW
                     </td>
                     <td style={styles.generalText}>В</td>
                     <td style={styles.generalText}>Улмаас</td>
                     <td style={styles.generalText}></td>
                  </tr>
                  <tr>
                     <td style={styles.generalText}>Г</td>
                     <td style={styles.generalText}>Улмаас</td>
                     <td style={styles.generalText}></td>
                  </tr>
                  <tr>
                     <td
                        style={{
                           ...styles.generalTextBold,
                           ...{ fontStyle: 'italic' }
                        }}
                     >
                        Үндсэн онош: {formData?.q6}
                     </td>
                     <td style={styles.generalText}></td>
                     <td style={styles.generalText}></td>
                     <td style={styles.generalText}></td>
                     <td style={styles.generalText}></td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '40%' } }}>
                        2. Нас барахад хүргэсэн бусад нөхцөл, шалтгаан
                     </td>
                     <td style={styles.generalTextBgeneralTextold}>{formData?.q7}</td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td colSpan={10} style={styles.generalTextBold}>
                        B хэсэг :
                     </td>
                  </tr>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '30%' } }}>
                        Сүүлийн 4 долоо хоногт мэс засал хийлгэсэн эсэх?
                     </td>
                     <td
                        style={{
                           ...styles.generalText,
                           ...{ alignItems: 'center' }
                        }}
                     >
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.q8 === 'q8-1' ? 'underline font-bold' : ''}
                           >
                              Тийм
                           </span>
                        </div>
                     </td>
                     <td style={styles.generalText}>
                        <span style={{ fontSize: 12 }} className={formData?.q8 === 'q8-2' ? 'underline font-bold' : ''}>
                           Үгүй
                        </span>
                     </td>
                     <td style={styles.generalText} colSpan={6}>
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.q8 === 'q8-3' ? 'underline font-bold' : ''}
                           >
                              Торорхойгүй
                           </span>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        Хэрэв тийм бол мэс засал хийлгэсэн огноо
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '16%' } }} colSpan={16}>
                        {dayjs(formData?.['q8-1-1'])?.format('YYYY-MM-DD')}
                     </td>
                  </tr>
                  <tr style={{ height: 40 }}>
                     <td style={styles.generalText}>Мэс заслын шалтгааныг тодруулж бичих (өвчин ба шалтгаан)</td>
                     <td style={styles.generalText} colSpan={5}>
                        {formData?.q9}
                     </td>
                     <td style={styles.generalText} colSpan={3}>
                        ҮОУА-9: {formData?.q10}
                     </td>
                  </tr>
                  <tr>
                     <td style={styles.generalText}>
                        Асуумжаар дүгнэлт шинжилгээ (VA WHO 2016 standard) хийсэн эсэх ?
                     </td>
                     <td style={styles.generalText}>
                        <span
                           style={{ fontSize: 12 }}
                           className={formData?.q11 === 'q11-1' ? 'underline font-bold' : ''}
                        >
                           Тийм
                        </span>
                     </td>
                     <td style={styles.generalText}>
                        <span
                           style={{ fontSize: 12 }}
                           className={formData?.q11 === 'q11-2' ? 'underline font-bold' : ''}
                        >
                           Үгүй
                        </span>
                     </td>
                     <td style={styles.generalText} colSpan={6}>
                        <span
                           style={{ fontSize: 12 }}
                           className={formData?.q11 === 'q11-3' ? 'underline font-bold' : ''}
                        >
                           Торорхойгүй
                        </span>
                     </td>
                  </tr>
                  <tr>
                     <td style={styles.generalText}>Хэрэв тийм бол онош баталгаажуулахад ашигласан эсэх?</td>
                     <td style={styles.generalText}>
                        <span
                           style={{ fontSize: 12 }}
                           className={formData?.['q11-1-1'] === 'q11-1-1-1' ? 'underline font-bold' : ''}
                        >
                           Тийм
                        </span>
                     </td>
                     <td style={styles.generalText}>
                        <span
                           style={{ fontSize: 12 }}
                           className={formData?.['q11-1-1'] === 'q11-1-1-2' ? 'underline font-bold' : ''}
                        >
                           Үгүй
                        </span>
                     </td>
                     <td style={styles.generalText} colSpan={6}>
                        <span
                           style={{ fontSize: 12 }}
                           className={formData?.['q11-1-1'] === 'q11-1-1-3' ? 'underline font-bold' : ''}
                        >
                           Торорхойгүй
                        </span>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={10} style={styles.generalTextBold}>
                        Нас барсан хэлбэр:
                     </td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '33%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>{returnQuestionCode('q12', 'q12-1', 'Өвчин')}</span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '33%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>{returnQuestionCode('q12', 'q12-4', 'Амиа хорлосон')}</span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '33%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>{returnQuestionCode('q12', 'q12-7', 'Бусад осол')}</span>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '33%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>
                              {returnQuestionCode('q12', 'q12-2', 'Зам тээврийн осол')}
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '33%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>
                              {returnQuestionCode('q12', 'q12-5', 'Бусдад хорлогдсон')}
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '33%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>
                              {returnQuestionCode('q12', 'q12-8', 'Үйлдвэрийн осол')}
                           </span>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '33%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>{returnQuestionCode('q12', 'q12-3', 'Хордлого')}</span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '33%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>
                              {returnQuestionCode('q12', 'q12-6', 'Шалтгаан тогтоогдоогүй байгаа')}
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '33%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>{returnQuestionCode('q12', 'q12-9', 'Тодорхойгүй')}</span>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td style={styles.generalText}>Гадны шалтгаант болон хордлогын шалтгаант бол:</td>
                     <td style={styles.generalText}>Гэмтсэн өдөр, сар, он</td>
                     <td
                        style={{
                           ...styles.generalText,
                           ...{ width: 160, textAlign: 'center' }
                        }}
                        colSpan={8}
                     >
                        {dayjs(formData?.q14)?.format('YYYY-MM-DD')}
                     </td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td style={styles.generalText}>
                        Гадны шалтгааныг тодорхойлон бичих (Хэрэв хордлогын шалтгаант бол хордсон бодисыг бичих)
                     </td>
                     <td>{formData?.q15}</td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td colSpan={10} style={styles.generalTextBold}>
                        Нас барсан газар:
                     </td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '15%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>{returnQuestionCode('q16', 'q16-1', 'Эмнэлэгт')}</span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '25%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>{returnQuestionCode('q16', 'q16-2', 'Гэртээ')}</span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '30%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>
                              {returnQuestionCode('q16', 'q16-5', 'Амьдрах зориулалттай тусгай байр')}
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '35%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>
                              {returnQuestionCode(
                                 'q16',
                                 'q16-7',
                                 'Сургууль, бусад олон нийтийн ба засаг захиргааны газрууд'
                              )}
                           </span>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '15%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>{returnQuestionCode('q16', 'q16-3', 'Гудамж ба зам')}</span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '25%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>
                              {returnQuestionCode('q16', 'q16-4', 'Биеийн тамир, спортын талбай')}
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '30%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>
                              {returnQuestionCode('q16', 'q16-6', 'Худалдаа үйлчилгээний газрууд')}
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '35%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>
                              {returnQuestionCode('q16', 'q16-8', 'Үйлдвэрлэл ба барилгын газар')}
                           </span>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3} style={{ ...styles.generalText, ...{ width: '15%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>Бусад (тодорхойлж бичих): {formData?.q16Other}</span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '35%' } }}>
                        <div style={styles.checkContainer}>
                           <span style={{ marginLeft: 5 }}>{returnQuestionCode('q16', 'q16-9', 'Тодорхойгүй')}</span>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={{ ...styles.generalText, ...{ width: '15%' } }}>
                        <span
                           style={{ fontSize: 12 }}
                           className={formData?.['q17'] === 'q17-1' ? 'underline font-bold' : ''}
                        >
                           Эмнэлэгт нас барсан
                        </span>
                     </td>
                     <td colSpan={3} style={{ ...styles.generalText, ...{ width: '35%' } }}>
                        <span
                           style={{ fontSize: 12 }}
                           className={formData?.['q17'] === 'q17-2' ? 'underline font-bold' : ''}
                        >
                           Эмнэлгээс гадуурх нас баралт
                        </span>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={{ ...styles.generalText, ...{ width: '15%' } }}>
                        Ор хоног {formData?.['q17-1-1']}
                        <br />
                        <span style={{ fontSize: 12 }}>
                           {dayjs(formData?.['q17-1-2'])?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                        </span>
                     </td>
                     <td
                        colSpan={3}
                        style={{
                           ...styles.generalText,
                           ...{ width: '35%' }
                        }}
                     >
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                           <span style={{ fontSize: 12 }}>
                              Хэрэв тийм бол: {formData?.['q17-1-1']}
                              <br />
                              <span style={{ fontSize: 12 }}>
                                 {dayjs(formData?.['q17-1-2'])?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                              </span>
                           </span>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={2} style={{ ...styles.generalText, ...{ width: '15%' } }}>
                        Хорт хавдар, ДОХ/ХДХВ-ээр нас барсан бол оношлогдсоноос хойш амьдарсан хугацаа
                     </td>
                     <td
                        colSpan={3}
                        style={{
                           ...styles.generalText,
                           ...{ width: '35%', textAlign: 'center' }
                        }}
                     >
                        <span style={{ fontSize: 12 }}>
                           {dayjs(formData?.['q18'])?.format('YYYY он MM сар DD өдөр HH цаг MM минут')}
                        </span>
                     </td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td colSpan={10} style={styles.generalTextBold}>
                        Ураг болон нярайн эндэгдэл
                     </td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '40%' } }}>Ихэр эсэх?</td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.['q19'] === 'q19-1' ? 'underline font-bold' : ''}
                           >
                              Тийм
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.['q19'] === 'q19-2' ? 'underline font-bold' : ''}
                           >
                              Үгүй
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.['q19'] === 'q19-3' ? 'underline font-bold' : ''}
                           >
                              Тодорхойгүй
                           </span>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '40%' } }}>Амьгүй төрөлт?</td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.['q20'] === 'q20-1' ? 'underline font-bold' : ''}
                           >
                              Тийм
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.['q20'] === 'q20-2' ? 'underline font-bold' : ''}
                           >
                              Үгүй
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.['q20'] === 'q20-3' ? 'underline font-bold' : ''}
                           >
                              Тодорхойгүй
                           </span>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '50%' } }}>
                        Хоног болоогүй нас баралт бол хугацааг бичих /цагаар/
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '8%' } }} colSpan={2}>
                        {formData?.q21}
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>Төрөх үеийн жин (гр)</td>
                     <td style={{ ...styles.generalText, ...{ width: '22%' } }} colSpan={4}>
                        {formData?.q22}
                     </td>
                  </tr>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '50%' } }}>Жирэмсний хугацаа /7 хоногоор/</td>
                     <td style={{ ...styles.generalText, ...{ width: '8%' } }} colSpan={2}>
                        {' '}
                        {formData?.q23}
                     </td>
                     <td colSpan={3} style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        Эхийн нас
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '14%' } }} colSpan={2}>
                        {' '}
                        {formData?.q24}
                     </td>
                  </tr>
                  <tr>
                     <td style={styles.generalText}>
                        Перинаталь эндэгдэлд нөлөөлсөн эхийн эрүүл мэнд болон жирэмсэн ба төрөх үеийн хүндрэл
                        /тодорхойлж бичих/
                     </td>
                     <td colSpan={7}>
                        {formData?.q25}
                        <br />
                        ӨОУА-10: {formData?.q26}
                     </td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td colSpan={5} style={{ ...styles.generalText, ...{ width: '50%' } }}>
                        Эхийн эндэгдэл мөн эсэх?
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.['q27'] === 'q27-1' ? 'underline font-bold' : ''}
                           >
                              Тийм
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.['q27'] === 'q27-2' ? 'underline font-bold' : ''}
                           >
                              Үгүй
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.['q27'] === 'q27-3' ? 'underline font-bold' : ''}
                           >
                              Тодорхойгүй
                           </span>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={5} style={{ ...styles.generalText, ...{ width: '50%' } }}>
                        {returnQuestionCode('q28', 'q28-1', 'Жирэмсэн ба төрөх, төрсний дараах үе')}
                     </td>
                     <td colSpan={3} style={{ ...styles.generalText, ...{ width: '15%' } }}>
                        {returnQuestionCode('q28', 'q28-3', 'Жирэмсэн ба төрсний дараа 42 хоногийн дотор')}
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={5} style={{ ...styles.generalText, ...{ width: '50%' } }}>
                        {returnQuestionCode('q28', 'q28-2', 'Жирэмслэлт, төрөлтийн дараа 42 хоногоос 1 жилийн дотор')}
                     </td>
                     <td colSpan={3} style={{ ...styles.generalText, ...{ width: '15%' } }}>
                        {returnQuestionCode('q28', 'q28-4', 'Тодорхойгүй')}
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={5} style={{ ...styles.generalText, ...{ width: '50%' } }}>
                        Жирэмслэлт нь нас баралтын шалтгаан болсон эсэх?
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.['q29'] === 'q29-1' ? 'underline font-bold' : ''}
                           >
                              Тийм
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.['q29'] === 'q29-2' ? 'underline font-bold' : ''}
                           >
                              Үгүй
                           </span>
                        </div>
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '20%' } }}>
                        <div style={styles.checkContainer}>
                           <span
                              style={{ fontSize: 12 }}
                              className={formData?.['q29'] === 'q29-3' ? 'underline font-bold' : ''}
                           >
                              Тодорхойгүй
                           </span>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '60%' } }}>Гэрчилгээ олгосон огноо</td>
                     <td style={{ ...styles.generalText, ...{ width: '40%' } }} colSpan={3}>
                        {dayjs(formData?.['q30'])?.format('YYYY-MM-DD')}
                     </td>
                  </tr>
               </tbody>
            </Table>
            <Table bordered className="document mb-0">
               <tbody>
                  <tr>
                     <td rowSpan={2} style={{ ...styles.generalText, ...{ width: '10%' } }}>
                        Тамга
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '30%' } }}>
                        <span
                           style={{ fontSize: 12 }}
                           className={formData?.['q31'] === 'q31-1' ? 'underline font-bold' : ''}
                        >
                           Эмчлэгч эмч
                        </span>
                        ,{' '}
                        <span
                           style={{ fontSize: 12 }}
                           className={formData?.['q31'] === 'q31-2' ? 'underline font-bold' : ''}
                        >
                           өрхийн эмч
                        </span>
                        ,{' '}
                        <span
                           style={{ fontSize: 12 }}
                           className={formData?.['q31'] === 'q31-3' ? 'underline font-bold' : ''}
                        >
                           бусад
                        </span>{' '}
                        /зур/
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '30%' } }}>
                        Нэр: ...................................
                     </td>
                     <td style={{ ...styles.generalText, ...{ width: '30%' } }}>
                        Гарын үсэг .................................
                     </td>
                  </tr>
                  <tr>
                     <td style={{ ...styles.generalText, ...{ width: '30%' } }}>Гэрчилгээ олгосон эмч:</td>
                     <td style={{ ...styles.generalText, ...{ width: '30%' } }}>Нэр: {formData?.q33}</td>
                     <td style={{ ...styles.generalText, ...{ width: '30%' } }}>
                        Гарын үсэг .................................
                     </td>
                  </tr>
               </tbody>
            </Table>
         </div>
      </div>
   );
}
export default am7;
