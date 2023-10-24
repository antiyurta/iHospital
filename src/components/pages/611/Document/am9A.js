import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getGender } from '../../../comman';
import { useSelector } from 'react-redux';
import {
   selectCurrentFirstName,
   selectCurrentHospitalName,
   selectCurrentLastName,
   selectCurrentPhoneNo
} from '../../../../features/authReducer';

import patientDiagnoseService from '../../../../services/emr/patientDiagnose';
import moment from 'moment';

function am9A(props) {
   console.log('props', props);
   const {
      type,
      data: { formData, patientData },
      appointmentId,
      hospitalName
   } = props;
   const RpS = 3;
   const doctorPhoneNo = useSelector(selectCurrentPhoneNo);
   const doctorUserFirstName = useSelector(selectCurrentFirstName);
   const doctorUserLastName = useSelector(selectCurrentLastName);
   const [length, setLength] = useState(0);
   const [icdCode, setIcdCode] = useState('TEST');
   const styles = {
      generalText: {
         fontSize: 12,
         lineHeight: 1.3
      },
      blockContentLg: {
         fontSize: 13,
         display: 'block',
         width: '100%',
         height: 40
      },
      blockContentSm: {
         fontSize: 13,
         display: 'block',
         width: '100%',
         height: 30
      }
   };
   const UnderlineText = (props) => {
      return (
         <span
            style={{
               textDecoration: 'underline',
               paddingLeft: '3px',
               paddingRight: '3px'
            }}
         >
            {props.children}
         </span>
      );
   };
   const calcPage = () => {
      const length = Math.floor(formData['9A.3'].length / 3) + 1;
      setLength(length);
   };
   const getPatientDiagnose = async () => {
      patientDiagnoseService
         .getByPageFilter({
            params: {
               appointmentId: appointmentId,
               patientId: patientData?.id
            }
         })
         .then((response) => {
            console.log(response);
         });
   };
   useEffect(() => {
      calcPage();
   }, [formData]);
   useEffect(() => {
      getPatientDiagnose();
   }, [appointmentId]);
   return (
      <>
         {Array.from({ length: length }, (_, index) => (
            <div key={index}>
               <div className="pageMNS5376">
                  <div className="subpageMNS5376">
                     <p>MNS:5376:2016</p>
                     <div
                        style={{
                           border: '1px solid black'
                        }}
                     >
                        <div
                           style={{
                              padding: '0.3cm'
                           }}
                        >
                           <div style={{ textAlign: 'center' }}>
                              <span style={{ fontWeight: 'bold', fontSize: 13 }}>Энгийн эмийн жор</span>
                           </div>
                           <div className="flex justify-between">
                              <div></div>
                              <span
                                 style={{
                                    ...styles.generalText,
                                    paddingTop: 10
                                 }}
                              >
                                 {moment(formData?.['9A.1']).format('YYYY')} оны{' '}
                                 {moment(formData?.['9A.1']).format('MM')} сарын{' '}
                                 {moment(formData?.['9A.1']).format('DD')} өдөр
                              </span>
                           </div>
                           <span style={{ fontSize: 13 }}>
                              Өвчтөний овог, нэр:
                              <UnderlineText>
                                 {patientData?.lastName}.{patientData?.firstName}
                              </UnderlineText>
                           </span>
                           <br />
                           <span style={{ fontSize: 13 }}>
                              Нас:<UnderlineText>{patientData?.age}</UnderlineText>
                              Хүйс:<UnderlineText>{getGender(patientData?.registerNumber)}</UnderlineText>
                              Онош:<UnderlineText>{icdCode}</UnderlineText>
                           </span>
                           <br />
                           <span style={{ fontSize: 13 }}>____________________________________________</span>
                           <br />
                           <span style={{ fontSize: 13 }}>
                              Регистрийн №<UnderlineText>{patientData?.registerNumber}</UnderlineText>
                           </span>
                           <br />
                           {<p>asdasdassad {index * 3 + 1}</p>}
                           <div>
                              <span style={styles.blockContentLg}>Rp: {formData?.['9A.3']?.[`${index * 3}`]?.[0]}</span>
                              <span style={styles.blockContentLg}>S: {formData?.['9A.3']?.[`${index * 3}`]?.[1]}</span>
                              <div style={{ textAlign: 'center' }}>
                                 <span style={{ fontSize: 13 }}>#</span>
                              </div>
                           </div>
                           <div>
                              <span style={styles.blockContentLg}>
                                 Rp: {formData?.['9A.3']?.[`${index * 3 + 1}`]?.[0]}
                              </span>
                              <span style={styles.blockContentLg}>
                                 S: {formData?.['9A.3']?.[`${index * 3 + 1}`]?.[1]}
                              </span>
                              <div style={{ textAlign: 'center' }}>
                                 <span style={{ fontSize: 13 }}>#</span>
                              </div>
                           </div>
                           <div>
                              <span style={styles.blockContentLg}>
                                 Rp: {formData?.['9A.3']?.[`${index * 3 + 2}`]?.[0]}
                              </span>
                              <span style={styles.blockContentLg}>
                                 S: {formData?.['9A.3']?.[`${index * 3 + 2}`]?.[1]}
                              </span>
                              <div style={{ textAlign: 'center' }}>
                                 <span style={{ fontSize: 13 }}>#</span>
                              </div>
                           </div>
                           {/* <div>
                              <span style={styles.blockContentLg}>Rp: {formData?.['9A.3'][`${index}`][0]}</span>
                              <span style={styles.blockContentLg}>S: {formData?.['9A.3'][`${index}`][1]}</span>
                              <div style={{ textAlign: 'center' }}>
                                 <span style={{ fontSize: 13 }}>#</span>
                              </div>
                           </div>
                           <div>
                              <span style={styles.blockContentLg}>Rp: {formData?.['9A.3'][`${index + 1 * 3}`][0]}</span>
                              <span style={styles.blockContentLg}>S: {formData?.['9A.3'][`${index + 1}`][1]}</span>
                              <div style={{ textAlign: 'center' }}>
                                 <span style={{ fontSize: 13 }}>#</span>
                              </div>
                           </div> */}
                           {/* {Array.from({ length: 3 }, (_, idx) => (
                              <div>
                                 <span style={styles.blockContentLg}>
                                    Rp: {formData?.['9A.3'][`${index + 3 + idx}`][0]}
                                 </span>
                                 <span style={styles.blockContentLg}>S: {formData?.['9A.3'][`${index * idx}`][1]}</span>
                                 <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: 13 }}>#</span>
                                 </div>
                              </div>
                           ))} */}

                           {/* <div>
                              <span style={styles.blockContentLg}>
                                 Rp: {formData?.['9A.3'][`${index * 3 + 1}`][`0`]}
                              </span>
                              <span style={styles.blockContentLg}>
                                 S: {formData?.['9A.3'][`${index * 3 + 1}`][`1`]}
                              </span>
                              <div style={{ textAlign: 'center' }}>
                                 <span style={{ fontSize: 13 }}>#</span>
                              </div>
                           </div> */}
                           {/* <div>
                              <span style={styles.blockContentLg}>Rp: {formData?.['9A.3'][`${index * 3 + 2}`][0]}</span>
                              <span style={styles.blockContentLg}>S: {formData?.['9A.3'][`${index * 3 + 2}`][1]}</span>
                              <div style={{ textAlign: 'center' }}>
                                 <span style={{ fontSize: 13 }}>#</span>
                              </div>
                           </div> */}
                           <div
                              style={{
                                 borderWidth: 1,
                                 borderTopColor: 'black',
                                 borderBottomColor: 'black',
                                 borderLeftColor: 'white',
                                 borderRightColor: 'white',
                                 borderStyle: 'solid'
                              }}
                           >
                              <span style={{ fontSize: 13 }}>
                                 Жор бичсэн эмчийн нэр, утас, тэмдэг:
                                 <UnderlineText>
                                    {doctorUserLastName?.substring(0, 1) +
                                       ',' +
                                       doctorUserFirstName +
                                       ', ' +
                                       doctorPhoneNo}
                                 </UnderlineText>
                              </span>
                              <br />
                              <br />
                           </div>
                           <div
                              style={{
                                 borderWidth: 1,
                                 borderTopColor: 'white',
                                 borderBottomColor: 'black',
                                 borderLeftColor: 'white',
                                 borderRightColor: 'white',
                                 borderStyle: 'solid'
                              }}
                           >
                              <span style={{ fontSize: 13 }}>
                                 Эмнэлгийн нэр: <UnderlineText>{hospitalName}</UnderlineText>
                              </span>
                              {/* <p>_______________________________</p> */}
                              <br />
                           </div>
                           <span style={{ fontSize: 13 }}>
                              ---------------------------------------------------------------
                           </span>
                        </div>
                     </div>
                     <Table bordered className="document">
                        <thead>
                           <tr>
                              <th>№</th>
                              <th>Эмийн нэр, тун, хэмжээ, хэлбэр</th>
                              <th>Хэрэглэх арга, хугацаа</th>
                              <th>Олгосон /гарын үсэг/</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                           </tr>
                           <tr>
                              <td>2</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                           </tr>
                           <tr>
                              <td>3</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                           </tr>
                        </tbody>
                     </Table>
                  </div>
               </div>
               <div className="pageMNS5376">
                  <div className="subpageMNS5376">
                     <div
                        style={{
                           border: '1px solid black'
                        }}
                     >
                        <div
                           style={{
                              padding: '0.3cm'
                           }}
                        >
                           <span style={{ display: 'flex', fontSize: 12, textAlign: 'justify', marginTop: 50 }}>
                              Энгийн эмийн жорын маягтад 3-аас илүүгүй эмийг бичих ба энэхүү жор нь бичигдсэн өдрөөс
                              хойш 7 хүртэлх хоногийн хугацаанд хүчинтэй.
                           </span>
                           <br />
                           <span style={{ display: 'flex', fontSize: 12, textAlign: 'justify' }}>
                              Жорыг стандартын дагуу бүрэн бичээгүй, эмийн нэр, тун хэмжээг засварласан, эмчийн
                              тэмдэггүй тохиолдолд хүчингүйд тооцно.
                           </span>
                           <br />
                           <span style={{ display: 'flex', fontSize: 12, textAlign: 'justify' }}>
                              Жорыг иргэдээс хүлээн авсан жорын бүртгэлд бүртгэнэ.
                           </span>
                           <br />
                           <span style={{ display: 'flex', fontSize: 12, textAlign: 'justify' }}>
                              Жор баригч доорх мэдээллийг бүрэн хөтөлж, эмийг олгоно.
                           </span>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="px-[0.3cm]">
                           <span style={{ display: 'flex', fontSize: 12, textAlign: 'justify' }}>
                              Гарын үсэг, огноо:
                           </span>
                        </div>
                        <Table bordered className="document mb-0">
                           <thead>
                              <tr>
                                 <th>Жор хүлээн авсан</th>
                                 <th>Бэлтгэсэн</th>
                                 <th>Шалгасан</th>
                                 <th>Олгосон</th>
                                 <th>Огноо</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>1</td>
                                 <td>1</td>
                                 <td>1</td>
                                 <td>1</td>
                                 <td>1</td>
                              </tr>
                           </tbody>
                        </Table>
                        <div
                           style={{
                              padding: '0.3cm'
                           }}
                        >
                           <span className="w-full flex justify-center" style={{ fontSize: 13 }}>
                              ---------------------------------------------------------------
                           </span>
                           <span style={{ display: 'flex', fontSize: 12, textAlign: 'justify' }}>
                              Энэхүү хэсгийг жор баригч эмчийн бичсэн жорын дагуу олгох эмийг тэмдэглэн, тасархай
                              зураасын дагуу таслан, эмийн хамт иргэнд олгоно.
                              <br />
                              Эмчилгээний явцад гаж нөлөө илэрвэл жор бичсэн эмчдээ яаралтай хандана уу.
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
}

export default am9A;
