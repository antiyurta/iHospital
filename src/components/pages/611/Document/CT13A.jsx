import dayjs from 'dayjs';
import React from 'react';
import { Table } from 'react-bootstrap';
const CT13A = ({ data }) => {
   return (
      <div className="page-landscape">
         <div className="subpage">
            <div className="flex flex-col gap-1">
               <div className="flex flex-row justify-between">
                  <p>Эмнэлгийн нэр: Universal Med</p>
                  <div className="text-end">
                     <p>Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны</p>
                     <p>өдрийн А/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
                     <p className="font-semibold">Эрүүл мэндийн бүртгэлийн маягт СТ-13А</p>
                  </div>
               </div>
               <p
                  style={{
                     textAlign: 'center',
                     fontSize: '16pt'
                  }}
               >
                  ЭМЧЛҮҮЛЭГЧИЙГ ЭМНЭЛЭГ (СУВИЛАЛД) ХҮЛЭЭН АВСАН БҮРТГЭЛ
               </p>
               <Table bordered className="ct-13-a">
                  <thead>
                     <tr>
                        <th>Өвчний түүх №</th>
                        <th>Сар, өдөр,цаг,минут</th>
                        <th colSpan={10}>
                           <p>Эмчлүүлэгчийн</p>
                           <p>Эцэг / эх /-ийн нэр,</p>
                           <p>Өөрийн нэр, Регистрийн дугаар</p>
                        </th>
                        <th
                           className="rotate-180"
                           style={{
                              writingMode: 'vertical-lr',
                              textAlign: 'left',
                              verticalAlign: 'middle'
                           }}
                        >
                           ЭМД
                        </th>
                        <th>Нас хүйс</th>
                        <th> Тогтмол хаяг, утасны дугаар (гэрийн, ажлын) /тодорхой бичнэ/</th>
                        <th>Ирэх үеийн болон хүлээн авах тасгийн онош</th>
                        <th
                           className="rotate-180"
                           style={{
                              writingMode: 'vertical-lr',
                              textAlign: 'left',
                              verticalAlign: 'middle'
                           }}
                        >
                           Хэвтүүлсэн тасаг
                        </th>
                        <th>Явуулсан эмнэлэг, кабинет</th>
                     </tr>
                     <tr>
                        <th>1</th>
                        <th>2</th>
                        <th colSpan={10}>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                     </tr>
                  </thead>
                  <tbody>
                     {data?.map((item, index) => (
                        <React.Fragment key={index}>
                           <tr key={index}>
                              <td rowSpan={2}></td>
                              <td
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'left',
                                    verticalAlign: 'middle'
                                 }}
                                 rowSpan={2}
                              >
                                 {dayjs(item.startDate).format('MM/DD/hh/mm')}
                              </td>
                              <td colSpan={10}>{`${item.lastName} ${item.firstName}`}</td>
                              <td rowSpan={2}></td>
                              <td rowSpan={2}>
                                 <p>{item.age}</p>
                                 <p>{item.gender === 2 ? 'Эм' : 'Эр'}</p>
                              </td>
                              <td
                                 rowSpan={2}
                              >{`${item.aimagCityName || ''} ${item.soumDistrictName || ''} ${item.bagKhorooName || ''} ${item.phoneNo | ''}`}</td>
                              <td rowSpan={2}>{item.diagnose?.code}</td>
                              <td rowSpan={2}>{item.inStructure}</td>
                              <td rowSpan={2}>{item.orderStructure}</td>
                           </tr>
                           <tr>
                              <td>{item.registerNumber[0]}</td>
                              <td>{item.registerNumber[1]}</td>
                              <td>{item.registerNumber[2]}</td>
                              <td>{item.registerNumber[3]}</td>
                              <td>{item.registerNumber[4]}</td>
                              <td>{item.registerNumber[5]}</td>
                              <td>{item.registerNumber[6]}</td>
                              <td>{item.registerNumber[7]}</td>
                              <td>{item.registerNumber[8]}</td>
                              <td>{item.registerNumber[9]}</td>
                           </tr>
                        </React.Fragment>
                     ))}
                  </tbody>
               </Table>
            </div>
         </div>
      </div>
   );
};
export default CT13A;
