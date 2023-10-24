import moment from 'moment';
import React from 'react';
import { Table } from 'react-bootstrap';
import { NewCheckbox, NewCheckboxGroup } from '../../../Input/Input';

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
                  <b>
                     Хамшинж, сэжигтэй тохиолдлын нэр:
                     {formData['AM2.1']}
                  </b>
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
                        <td style={styles.leftText}>Нас</td>
                        <td style={styles.leftText}>Хүйс</td>
                        <td style={styles.leftText}>Утасны дугаар</td>
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
                           <b>Боловсролын байдал:</b>
                           <div style={styles.leftText}>
                              1. Боловсролгүй
                              <span style={{ marginLeft: 20 }}>2. Бага</span>
                           </div>
                           <div style={styles.leftText}>3. Суурь боловсрол</div>
                           <div style={styles.leftText}>4. Бүрэн дунд</div>
                           <div style={styles.leftText}>5. Мэргэжлийн болон техникийн</div>
                           <div style={styles.leftText}>
                              6. Дипломын
                              <span style={{ marginLeft: 20 }}>7. Бакалавр</span>
                           </div>
                           <div style={styles.leftText}>
                              8. Магистр <span style={{ marginLeft: 20 }}>9. Доктор</span>
                           </div>
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
                           <div style={styles.rightText}>
                              <b>{moment(formData?.['AM2.3']).format('YYYY')} /он/</b>
                           </div>
                           <div style={styles.rightText}>
                              <b>{moment(formData?.['AM2.3']).format('MM')} /сар/</b>
                           </div>
                           <div style={styles.rightText}>
                              <b>{moment(formData?.['AM2.3']).format('DD')} /өдөр/</b>
                           </div>
                           <div style={styles.rightText}>
                              <b>{moment(formData?.['AM2.3']).format('HH:MM')} /цаг мин/</b>
                           </div>
                        </td>
                        <td colSpan={2} rowSpan={5} style={styles.leftText}>
                           <NewCheckboxGroup value={formData?.['AM2.4.1']} className="dstory">
                              <NewCheckbox value={0} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тийм</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={1} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Үгүй</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                           <div style={styles.leftText}>
                              <b>Тийм бол огноо:</b>
                           </div>
                           <div style={styles.leftText}>{moment(formData?.['AM2.4.2']).format('YYYY/MM/DD HH:mm')}</div>
                        </td>
                        <td rowSpan={5} style={styles.leftText}>
                           <NewCheckboxGroup value={formData?.['AM2.5.1']} className="dstory">
                              <NewCheckbox value={0} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тийм</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={1} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Үгүй</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                           <div style={styles.leftText}>
                              <b>Тийм бол огноо:</b>
                           </div>
                           <div style={styles.leftText}>{moment(formData?.['AM2.5.2']).format('YYYY/MM/DD HH:mm')}</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>1. Хөдөлмөр эрхлэлтийн байдал</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 15 } }}>{formData?.['AM2.2.2']}</td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>2. Хөдөлмөр эрхлэхгүй шалтгаан</td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.leftText, ...{ height: 15 } }}>{formData?.['AM2.2.3']}</td>
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
                           {formData?.['AM2.6']}
                        </td>
                        <td colSpan={3} style={{ textAlign: 'start', fontSize: 10, padding: 1 }}>
                           Эмнэл зүйн шинж тэмдгийг онцлон бичнэ үү.
                           <br />
                           {formData?.['AM2.7']}
                        </td>
                        <td style={{ textAlign: 'start', fontSize: 10, padding: 1 }}>
                           Илэрсэн огноо:
                           <br />
                           {moment(formData?.['AM2.8']).format('YYYY/MM/DD HH:mm')}
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
                           <NewCheckboxGroup value={formData?.['AM2.9']} className="dstory">
                              <NewCheckbox value={0} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хүн</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={1} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Мал (төрөл)________</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={2} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Амьтан (төрөл)______</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={3} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тогтоогдоогүй</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td colSpan={2} style={styles.leftText}>
                           <NewCheckboxGroup value={formData?.['AM2.10']} className="dstory">
                              <NewCheckbox value={0} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Ахуйн:</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={1} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Шууд хавьтал /ам мөр:</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={2} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Ус мөр:</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={3} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хүнс мөр:</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={4} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Хөрс мөр:</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={5} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Бусад:______________ мөр:</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={6} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Агаар / дусал</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={7} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Дам халдвар</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={8} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Цусаар</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={9} className="test">
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
                           {moment(formData?.['AM2.11']).format('YYYY/MM/DD HH:mm')}
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
                     {formData?.['AM2.12']?.map((el, index) => {
                        return (
                           <tr key={index}>
                              <td style={styles.leftText}>{el[0]}</td>
                              <td style={styles.leftText}>{el[1]}</td>
                              <td style={styles.leftText}>{el[2]}</td>
                              <td style={styles.leftText}>{el[3]}</td>
                              <td style={styles.leftText}>{el[4]}</td>
                           </tr>
                        );
                     })}
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b className="mr-1">Урьдчилсан онош (ОУӨА-10)</b> {formData?.['AM2.13']}
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
                        <td style={styles.leftText}>{formData?.['AM2.14']}</td>
                        <td style={styles.leftText}>{formData?.['AM2.15']}</td>
                        <td style={styles.leftText}>
                           <NewCheckboxGroup value={formData?.['AM2.16']} className="dstory">
                              <NewCheckbox value={0} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Утсаар</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={1} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Цахимаар</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={2} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Цаасаар</span>
                              </NewCheckbox>
                           </NewCheckboxGroup>
                        </td>
                        <td style={styles.leftText}>{moment(formData?.['AM2.17']).format('YYYY/MM/DD HH:mm')}</td>
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
                     {formData?.['AM2.18']?.map((el, index) => {
                        return (
                           <tr key={index}>
                              <td style={styles.leftText}>{el[0]}</td>
                              <td style={styles.leftText}>{el[1]}</td>
                              <td style={styles.leftText}>{el[2]}</td>
                              <td style={styles.leftText}>{el[3]}</td>
                              <td style={styles.leftText}>{el[4]}</td>
                           </tr>
                        );
                     })}
                  </tbody>
               </Table>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.leftText}>
                           <b>Батлагдсан онош (ОУӨА-10)</b>
                           <NewCheckboxGroup
                              value={formData?.['AM2.19']}
                              className="dstory"
                              style={{ display: 'flex', flexDirection: 'row' }}
                           >
                              <NewCheckbox value={0} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Эмнэлзүйгээр</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={1} className="test">
                                 <span style={{ fontSize: 10 }}>&#8226; Тархвар холбогдлоор</span>
                              </NewCheckbox>
                              <br />
                              <NewCheckbox value={2} className="test">
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
                                 value={formData?.['AM2.20']}
                                 className="dstory"
                                 style={{ display: 'flex', flexDirection: 'row' }}
                              >
                                 <NewCheckbox value={0} className="test">
                                    <span style={{ fontSize: 10 }}>&#8226; Тийм</span>
                                 </NewCheckbox>
                                 <br />
                                 <NewCheckbox value={1} className="test">
                                    <span style={{ fontSize: 10 }}>&#8226; Үгүй</span>
                                 </NewCheckbox>
                              </NewCheckboxGroup>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           <b>Онош батлагдсан огноо: {moment(formData?.['AM2.21']).format('YYYY/MM/DD HH:mm')} </b>
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
