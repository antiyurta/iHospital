import React from 'react';
import moment from 'moment';
import { Table } from 'react-bootstrap';

function AM9C(props) {
   console.log('ASD', props);
   const {
      data: { formData, patientData },
      hospitalName
   } = props;
   const styles = {
      generalText: {
         fontSize: 12,
         lineHeight: 1.3
      },
      blockContentLg: {
         fontSize: 12,
         display: 'block',
         width: '100%',
         height: 230,
         fontWeight: 'bold'
      },
      blockContentSm: {
         fontSize: 12,
         display: 'block',
         width: '100%',
         height: 50,
         fontWeight: 'bold'
      }
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
               <span style={{ fontWeight: 'bold', fontSize: 12 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-9C</span>
            </div>
            <div style={{ textAlign: 'center', marginTop: 10, marginBottom: 15 }}>
               <span style={{ fontWeight: 'bold', fontSize: 14 }}>Мансууруулах эмийн жорын маягт</span>
            </div>
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
               }}
            >
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     width: '48%'
                  }}
               >
                  <div className="cross">
                     <div className="diag1"></div>
                     <div style={{ borderWidth: 1, borderStyle: 'solid' }}>
                        <div
                           style={{
                              textAlign: 'center',
                              marginTop: 10,
                              marginBottom: 15
                           }}
                        >
                           <span style={{ fontWeight: 'bold', fontSize: 14 }}>Мансууруулах эмийн жор</span>
                        </div>
                        <div style={{ marginTop: 10 }}>
                           <span
                              style={{
                                 ...styles.generalText,
                                 ...{ paddingRight: 30 }
                              }}
                           >
                              Индекс: Хэвлэмэл дугаар байна
                              <span style={{ marginLeft: 30 }}>
                                 {moment(formData[0]?.data?.['AM9C.1']).format('YYYY')} оны{' '}
                                 {moment(formData[0]?.data?.['AM9C.1']).format('MM')} сарын{' '}
                                 {moment(formData[0]?.data?.['AM9C.1']).format('DD')} өдөр
                              </span>
                           </span>
                        </div>
                        <span style={{ fontSize: 12 }}>Өвчтөний овог: {patientData?.lastName}</span>
                        <br />
                        <span style={{ fontSize: 12 }}>
                           Нэр: {patientData?.firstName} Нас:{patientData?.age} Хүйс:{' '}
                           {patientData?.genderType === 'MAN' ? 'эрэгтэй' : 'эмэгтэй'}
                        </span>
                        <br />
                        <span style={{ fontSize: 12 }}>Онош: {formData[0]?.data?.['AM9C.2']}</span>
                        <br />
                        <span style={{ fontSize: 12 }}>Регистрийн № {patientData?.registerNumber}</span>
                        <br />
                        <span style={styles.blockContentSm}>Rp: {formData[0]?.data?.['AM9C.3.1']}</span>
                        <br />
                        <span style={styles.blockContentLg}>S: {formData[0]?.data?.['AM9C.3.2']}</span>
                        <br />
                        <div style={{ textAlign: 'center' }}>
                           <span style={{ fontSize: 12 }}>#</span>
                        </div>
                     </div>
                     <div style={{ borderWidth: 1, borderStyle: 'solid' }}>
                        <span style={{ fontSize: 12 }}>Жор бичсэн эмчийн нэр, утас, тэмдэг: ___________________</span>
                        <br />

                        <span style={{ fontSize: 12 }}>Ерөнхий эмчийн гарын үсэг: {formData[0]?.data?.['AM9C.4']}</span>
                        <br />
                        <span style={{ fontSize: 12 }}>Эмнэлгийн нэр: {hospitalName}</span>
                        <br />
                     </div>
                     <div style={{ borderWidth: 1, borderStyle: 'solid' }}>
                        <span style={{ fontSize: 12 }}>
                           ------------------------------------------------------------------
                        </span>
                        <br />
                        <span style={{ fontSize: 12 }}>Индекс: Хэвлэмэл дугаар байна.</span>
                     </div>
                     <Table bordered>
                        <thead>
                           <tr
                              style={{
                                 verticalAlign: 'middle'
                              }}
                           >
                              <td
                                 style={{
                                    width: '10%',
                                    textAlign: 'center',
                                    fontSize: 12
                                 }}
                              >
                                 <span>№</span>
                              </td>
                              <td
                                 style={{
                                    width: '35%',
                                    textAlign: 'center',
                                    fontSize: 12
                                 }}
                              >
                                 <span>Эмийн нэр, тун, хэмжээ, хэлбэр</span>
                              </td>
                              <td
                                 style={{
                                    width: '35%',
                                    textAlign: 'center',
                                    fontSize: 12
                                 }}
                              >
                                 <span>Хэрэглэх арга, хугацаа</span>
                              </td>
                              <td
                                 style={{
                                    width: '20%',
                                    textAlign: 'center',
                                    fontSize: 12
                                 }}
                              >
                                 <span>Олгосон /гарын үсэг/</span>
                              </td>
                           </tr>
                           <tr style={{ height: 90 }}>
                              <td style={styles.generalText}>1</td>
                              <td style={styles.generalText}></td>
                              <td style={styles.generalText}></td>
                              <td style={styles.generalText}></td>
                           </tr>
                        </thead>
                     </Table>
                  </div>
                  <div
                     style={{
                        textAlign: 'center',
                        marginTop: 10,
                        marginBottom: 15
                     }}
                  >
                     <span style={{ fontSize: 12 }}>Урд тал</span>
                  </div>
               </div>
               <div
                  style={{
                     width: '48%',
                     display: 'flex',
                     flexDirection: 'column'
                  }}
               >
                  <div
                     style={{
                        borderWidth: 1,
                        borderStyle: 'solid',
                        display: 'flex',
                        flexDirection: 'column'
                     }}
                  >
                     <span style={{ fontSize: 12, paddingTop: 30 }}>
                        Мансууруулах эмийн жорын маягтад 1 эм бичих ба энэхүү жор нь бичигдсэн өдрөөс хойш 7 хүртэлх
                        хоногийн хугацаанд хүчинтэй.
                     </span>
                     <span style={{ fontSize: 12, paddingTop: 40 }}>
                        Жорыг стандартын дагуу бүрэн бичээгүй, эмийн нэр, тун хэмжээг засварласан, эмч болон эмнэлгийн
                        тэмдэггүй тохиолдолд хүчингүйд тооцно.
                     </span>
                     <span style={{ fontSize: 12, paddingTop: 30 }}>
                        Жорыг иргэдээс хүлээн авсан жорын бүртгэлд бүртгэнэ.
                     </span>
                     <span style={{ fontSize: 12 }}>Жор баригч доорх мэдээллийг бүрэн хөтөлж, эмийг олгоно</span>
                     <span style={{ fontSize: 12, paddingTop: 10 }}>
                        Өвчтөний регистрийн дугаар: __________________
                     </span>
                     <span style={{ fontSize: 12, paddingTop: 10 }}>
                        Эм хүлээн авсан хүний нэр: _____________________
                     </span>
                     <span style={{ fontSize: 12, paddingTop: 10 }}>
                        Регистрийн дугаар: ____________________________
                     </span>
                     <span style={{ fontSize: 12, paddingTop: 10 }}>
                        Утасны дугаар: ________________________________
                     </span>
                     <span
                        style={{
                           fontSize: 12,
                           paddingTop: 10,
                           paddingBottom: 100
                        }}
                     >
                        Гарын үсэг, огноо:
                     </span>
                  </div>
                  <table>
                     <thead>
                        <tr
                           style={{
                              verticalAlign: 'middle'
                           }}
                        >
                           <td
                              style={{
                                 width: '20%',
                                 textAlign: 'center',
                                 fontSize: 12
                              }}
                           >
                              <span>Жор хүлээн авсан</span>
                           </td>
                           <td
                              style={{
                                 width: '20%',
                                 textAlign: 'center',
                                 fontSize: 12
                              }}
                           >
                              <span>Бэлтгэсэн</span>
                           </td>
                           <td
                              style={{
                                 width: '20%',
                                 textAlign: 'center',
                                 fontSize: 12
                              }}
                           >
                              <span>Шалгасан</span>
                           </td>
                           <td
                              style={{
                                 width: '20%',
                                 textAlign: 'center',
                                 fontSize: 12
                              }}
                           >
                              <span>Олгосон</span>
                           </td>
                           <td
                              style={{
                                 width: '20%',
                                 textAlign: 'center',
                                 fontSize: 12
                              }}
                           >
                              <span>Огноо</span>
                           </td>
                        </tr>
                        <tr style={{ height: 60 }}>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                     </thead>
                  </table>
                  <div
                     style={{
                        borderWidth: 1,
                        borderStyle: 'solid',
                        display: 'grid'
                     }}
                  >
                     <span style={{ fontSize: 12 }}>
                        ------------------------------------------------------------------
                     </span>
                     <span
                        style={{
                           fontSize: 12,
                           paddingTop: 50,
                           paddingBottom: 50
                        }}
                     >
                        Энэхүү хэсгийг жор баригч эмчийн бичсэн жорын дагуу олгох эмийг тэмдэглэж, тасархай зураасын
                        дагуу таслан, эмийн хамт иргэнд олгоно. Эмчилгээний явцад гаж нөлөө илэрвэл жор бичсэн эмчдээ
                        яаралтай хандана уу.
                     </span>
                  </div>
                  <div
                     style={{
                        textAlign: 'center',
                        marginTop: 10,
                        marginBottom: 15
                     }}
                  >
                     <span style={{ fontSize: 12 }}>Ар тал</span>
                  </div>
               </div>
            </div>
            <span style={{ fontSize: 12 }}>
               <span style={{ fontWeight: 'bold', fontSize: 12 }}>АНХААР:</span>
               Сэтгэцэд нөлөөт эмийн жорын маягтыг “Эмийн жорын маягт, жор бичилт” MNS 5376:2016 стандартад заасан
               загвар, хэмжээтэй хэвлэнэ.
            </span>
         </div>
      </div>
   );
}

export default AM9C;
