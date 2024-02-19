import React, { useEffect, useState } from 'react';
import { formatNameForDoc, getAge } from '../../../comman';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

function CT_1_2H11(props) {
   const Slash = () => (
      <span role="img" className="flex justify-center">
         <svg width="13px" height="13px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3L8 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      </span>
   );
   const {
      data: { formData, patientData }
   } = props;
   const location = {};
   const form = [];
   const [chunks, setChunks] = useState();
   function sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
         const chunk = arr.slice(i, i + chunkSize);
         res.push(chunk);
      }
      return res;
   }
   useEffect(() => {
      console.log('formData', formData);
      setChunks(sliceIntoChunks(formData, 8));
   }, [formData]);
   return (
      <>
         {chunks?.map((chunk, index) => (
            <div key={index}>
               <div className="page">
                  <div className="subpage">
                     <div className="flow-root">
                        <p className="float-right" style={{ fontSize: 10 }}>
                           СМ-1-Хавсралт 11
                        </p>
                     </div>
                     <p className="font-bold text-center" style={{ fontSize: 16 }}>
                        СУВИЛАГЧ ЭМЧЛҮҮЛЭГЧИЙН БИЕИЙН БАЙДЛЫГ ҮНЭЛЭХ ХУУДАС
                     </p>
                     <div className="flow-root py-1">
                        <div className="float-left inline-flex">
                           <p style={{ fontSize: 10 }}>Эмчлүүлэгчийн овог, нэр:</p>
                           <p style={{ fontSize: 10 }}>
                              {formatNameForDoc(patientData?.lastName, patientData?.firstName)}
                           </p>
                        </div>
                        <div className="float-right inline-flex">
                           <p style={{ fontSize: 10 }}>Нас:</p>
                           <p style={{ fontSize: 10 }}>{getAge(patientData?.registerNumber)}</p>
                           <p style={{ fontSize: 10 }} className="pl-1">
                              Хүйс:
                           </p>
                           <p style={{ fontSize: 10 }}>{patientData?.genderType === 'MAN' ? 'Эр' : 'Эм'}</p>
                           <p style={{ fontSize: 10 }} className="pl-1">
                              Тасаг:
                           </p>
                           <p style={{ fontSize: 10 }}>{location?.state?.departmentName}</p>
                           <p style={{ fontSize: 10 }} className="pl-1">
                              Өрөө:
                           </p>
                           <p style={{ fontSize: 10 }}>{location?.state?.roomNumber}</p>
                        </div>
                     </div>
                     <Table bordered className="bcp">
                        <thead>
                           <tr>
                              <th rowSpan={2} colSpan={2}>
                                 Ангилал
                              </th>
                              <th colSpan={3}>Огноо/цаг/</th>
                              {chunk?.map((item, idx) => (
                                 <th key={idx} rowSpan={2}>
                                    {dayjs(item.createdAt).format('DD')}
                                 </th>
                              ))}
                              <th rowSpan={2}>Сувилгааны асуудал - #</th>
                           </tr>
                           <tr>
                              <th colSpan={3}>Үнэлгээ</th>
                           </tr>
                           <tr>
                              <th
                                 rowSpan={82}
                                 style={{
                                    writingMode: 'vertical-rl',
                                    textAlign: 'center',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 ӨДӨР ТУТМЫН ҮНЭЛГЭЭ
                              </th>
                              <th
                                 rowSpan={21}
                                 style={{
                                    writingMode: 'vertical-rl',
                                    textAlign: 'center',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 <p className="font-semibold" style={{ fontSize: 7 }}>
                                    1. Амьсгал/ Зүрх судас
                                 </p>
                              </th>
                              <th rowSpan={5} style={{ width: 70 }}>
                                 Амьсгалалт
                              </th>
                              <th colSpan={2}>Жигд</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q1 === 'q1-1' ? (
                                       <CheckOutlined />
                                    ) : item.data?.q1 === 'q1-3' ? (
                                       <Slash />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                              <td rowSpan={21} className="text-start" style={{ width: 115 }}>
                                 <p>#1. Амьсгалах хэв маягийн өөрчлөлт</p>
                                 <p>#2. Хийн солилцоо алдагдсан</p>
                                 <p>#3. Амьсгалын замын цэвэршилт алдагдсан</p>
                                 <p>#4. Хөдөлгөөний алдагдсан</p>
                                 <p>#5. Ядаргаа</p>
                                 <p>#7. Шокын эрсдэл</p>
                                 <p>#8. Захын мэдрэлийн үйл ажиллагаа алдагдах эрсдэл</p>
                                 <p>#9. Нойр хулжих</p>
                                 <p>#10. Нойргүйдэл</p>
                                 <p>#11. Хөдөлгөөн муудсан (ор, биеийн, шилжих, тэргэнцэр)</p>
                                 <p>#12. Тамиргүйдэх</p>
                              </td>
                           </tr>
                           <tr>
                              <th rowSpan={4} style={{ width: 70 }}>
                                 Жигд бус
                              </th>
                              <th style={{ width: 70 }}>Өнгөц</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q1 === 'q1-3' ? (
                                       <Slash />
                                    ) : item.data?.['q1-2-1'] === 'q1-2-1-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Гүн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q1 === 'q1-3' ? (
                                       <Slash />
                                    ) : item.data?.['q1-2-1'] === 'q1-2-1-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Тоо олширсон</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q1 === 'q1-3' ? (
                                       <Slash />
                                    ) : item.data?.['q1-2-1'] === 'q1-2-1-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Тоо цөөрсөн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q1 === 'q1-3' ? (
                                       <Slash />
                                    ) : item.data?.['q1-2-1'] === 'q1-2-1-4' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={3}>Чимээ</th>
                              <th colSpan={2}>Хэвийн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q2 === 'q2-3' ? (
                                       <Slash />
                                    ) : item.data?.['q2'] === 'q2-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={2}>Хэвийн бус</th>
                              <th>Сул</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q2 === 'q2-3' ? (
                                       <Slash />
                                    ) : item.data?.['q2-2-1'] === 'q2-2-1-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Тод</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q2 === 'q2-3' ? (
                                       <Slash />
                                    ) : item.data?.['q2-2-1'] === 'q2-2-1-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={3}>Ханиалгалт</th>
                              <th colSpan={2}>Үгүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q3 === 'q3-4' ? (
                                       <Slash />
                                    ) : item.data?.['q3'] === 'q3-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Цэргүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q3 === 'q3-4' ? (
                                       <Slash />
                                    ) : item.data?.['q3'] === 'q3-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Цэртэй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q3 === 'q3-4' ? (
                                       <Slash />
                                    ) : item.data?.['q3'] === 'q3-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={6}>Хаван</th>
                              <th colSpan={2}>Хавангүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q4 === 'q4-3' ? (
                                       <Slash />
                                    ) : item.data?.['q4'] === 'q4-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={5}>Хавантай</th>
                              <th>Бүр биеэр</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q4 === 'q4-3' ? (
                                       <Slash />
                                    ) : item.data?.['q4-2-1'] === 'q4-2-1-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Нүүрэнд</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q4 === 'q4-3' ? (
                                       <Slash />
                                    ) : item.data?.['q4-2-1'] === 'q4-2-1-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Зовхонд</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q4 === 'q4-3' ? (
                                       <Slash />
                                    ) : item.data?.['q4-2-1'] === 'q4-2-1-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Хэвлийд</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q4 === 'q4-3' ? (
                                       <Slash />
                                    ) : item.data?.['q4-2-1'] === 'q4-2-1-4' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Шилбэнд</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q4 === 'q4-3' ? (
                                       <Slash />
                                    ) : item.data?.['q4-2-1'] === 'q4-2-1-5' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2} rowSpan={2}>
                                 Хялгасан судасны дахин дүүрэлт
                              </th>
                              <th>2 секундээс бага</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q5 === 'q5-3' ? (
                                       <Slash />
                                    ) : item.data?.q5 === 'q5-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>2 секундээс удаан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q5 === 'q5-3' ? (
                                       <Slash />
                                    ) : item.data?.q5 === 'q5-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={2}>Зүрхний хэм</th>
                              <th colSpan={2}>Жигд</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q6 === 'q6-3' ? (
                                       <Slash />
                                    ) : item.data?.q6 === 'q6-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Хэм алдагдсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q6 === 'q6-3' ? (
                                       <Slash />
                                    ) : item.data?.q6 === 'q6-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th
                                 rowSpan={16}
                                 style={{
                                    writingMode: 'vertical-rl',
                                    textAlign: 'center',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 2. Хоол боловсруулалт
                              </th>
                              <th rowSpan={3}>Хоололт</th>
                              <th colSpan={2}>Амаар</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q7 === 'q7-4' ? (
                                       <Slash />
                                    ) : item.data?.q7 === 'q7-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                              <td rowSpan={16} className="text-start" style={{ width: 115 }}>
                                 <div className="ff">
                                    <p>#13. Амны салст бүрхүүл гэмтсэн</p>
                                    <p>
                                       #14. Хоол тэжээлийн тэнцвэр алдагдсан: Бие махбодид шаардлагатай хэмжээнээс их
                                    </p>
                                    <p>
                                       #15. Хоол тэжээлийн тэнцвэр алдагдсан: Бие махбодид шаардлагатай хэмжээнээс бага
                                    </p>
                                    <p>#16. Залгих чадварын алдагдал</p>
                                    <p>#17. Бөглөрөх эрсдэл</p>
                                    <p>#18. Бөөлжис цутгах</p>
                                    <p>#19. Шингэний хэмжээ ихсэлт</p>
                                    <p>#20. Шингэний дутагдал</p>
                                    <p>#21. Өтгөн хаталт</p>
                                    <p>#22. Суулгалт</p>
                                    <p>#23. Агаарын солилцооны алдагдал</p>
                                    <p>#24. Цусан дахь сахарын хэмжээ тогтворгүйжих эрсдэл</p>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th colSpan={2}>Гуурсаар</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q7 === 'q7-4' ? (
                                       <Slash />
                                    ) : item.data?.q7 === 'q7-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Бусад замаар (Судсаар........)</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q7 === 'q7-4' ? (
                                       <Slash />
                                    ) : item.data?.q7 === 'q7-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={2}>Хоолны дэглэм</th>
                              <th colSpan={2}>Хоол хориогүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q8 === 'q8-3' ? (
                                       <Slash />
                                    ) : item.data?.q8 === 'q8-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Хоол хориотой</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q8 === 'q8-3' ? (
                                       <Slash />
                                    ) : item.data?.q8 === 'q8-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={4}>Хоолны дуршил</th>
                              <th colSpan={2}>Хэвийн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q9 === 'q9-5' ? (
                                       <Slash />
                                    ) : item.data?.q9 === 'q9-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Өөрчлөлттэй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q9 === 'q9-5' ? (
                                       <Slash />
                                    ) : item.data?.q9 === 'q9-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Огиулалттай</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q9 === 'q9-5' ? (
                                       <Slash />
                                    ) : item.data?.q9 === 'q9-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Бөөлжүүлнэ</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q9 === 'q9-5' ? (
                                       <Slash />
                                    ) : item.data?.q9 === 'q9-4' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={3}>Хэвлий</th>
                              <th colSpan={2}>Хэвийн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q10 === 'q10-4' ? (
                                       <Slash />
                                    ) : item.data?.q10 === 'q10-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Цэрдийсэн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q10 === 'q10-4' ? (
                                       <Slash />
                                    ) : item.data?.q10 === 'q10-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Хонхойж татагдсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q10 === 'q10-4' ? (
                                       <Slash />
                                    ) : item.data?.q10 === 'q10-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={4}>Өтгөн</th>
                              <th colSpan={2}>Хэвийн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q11 === 'q11-5' ? (
                                       <Slash />
                                    ) : item.data?.q11 === 'q11-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Хатуу</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q11 === 'q11-5' ? (
                                       <Slash />
                                    ) : item.data?.q11 === 'q11-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Шингэн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q11 === 'q11-5' ? (
                                       <Slash />
                                    ) : item.data?.q11 === 'q11-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Өтгөн өөрчлөгдсөн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q11 === 'q11-5' ? (
                                       <Slash />
                                    ) : item.data?.q11 === 'q11-4' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th
                                 rowSpan={11}
                                 style={{
                                    writingMode: 'vertical-rl',
                                    textAlign: 'center',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 3. Шээс ялгаруулалт
                              </th>
                              <th rowSpan={11}>Шээс</th>
                              <th rowSpan={3}>Шээсний гарц</th>
                              <th>Хэвийн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q12 === 'q12-4' ? (
                                       <Slash />
                                    ) : item.data?.q12 === 'q12-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                              <td rowSpan={11} className="text-start" style={{ width: 115 }}>
                                 <p>#25. Шээс алдалт</p>
                                 <p>#26. Шээс хаагдсан</p>
                                 <p>#27. Шээс ялгаруулалт саатсан</p>
                              </td>
                           </tr>
                           <tr>
                              <th>Ихэссэн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q12 === 'q12-4' ? (
                                       <Slash />
                                    ) : item.data?.q12 === 'q12-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Багассан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q12 === 'q12-4' ? (
                                       <Slash />
                                    ) : item.data?.q12 === 'q12-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={4}>Зовиур</th>
                              <th>Өвдөлттэй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q13 === 'q13-5' ? (
                                       <Slash />
                                    ) : item.data?.q13 === 'q13-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Дүлэлттэй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q13 === 'q13-5' ? (
                                       <Slash />
                                    ) : item.data?.q13 === 'q13-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Тасалдсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q13 === 'q13-5' ? (
                                       <Slash />
                                    ) : item.data?.q13 === 'q13-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Задгайрсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q13 === 'q13-5' ? (
                                       <Slash />
                                    ) : item.data?.q13 === 'q13-4' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={2}>Өнгө, үнэр</th>
                              <th>Өөрчлөлтгүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q14 === 'q14-3' ? (
                                       <Slash />
                                    ) : item.data?.q14 === 'q14-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Өөрчлөлттэй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q14 === 'q14-3' ? (
                                       <Slash />
                                    ) : item.data?.q14 === 'q14-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Шээлгүүргүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q15 === 'q15-3' ? (
                                       <Slash />
                                    ) : item.data?.q15 === 'q15-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Шээлгүүртэй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q15 === 'q15-3' ? (
                                       <Slash />
                                    ) : item.data?.q15 === 'q15-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th
                                 rowSpan={20}
                                 style={{
                                    writingMode: 'vertical-rl',
                                    textAlign: 'center',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 4. Арьс
                              </th>
                              <th rowSpan={8}>Арьсны байдал</th>
                              <th colSpan={2}>Хэвийн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q16 === 'q16-3' ? (
                                       <Slash />
                                    ) : item.data?.q16 === 'q16-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                              <td rowSpan={20} className="text-start" style={{ width: 115 }}>
                                 <p>#28. Цус алдах эрсдэл</p>
                                 <p>#29. Хялдварын эрсдэл</p>
                                 <p>#30. Арьсны бүрэн бүтэн байдал алдагдал</p>
                                 <p>#31. Эдийн бүрэн бүтэн байдал алдагдал</p>
                                 <p>#32. Тодосгогч бодисонд харшлах</p>
                                 <p>#33. Халуурах</p>
                                 <p>#34. Халуун буурах</p>
                              </td>
                           </tr>
                           <tr>
                              <th rowSpan={7}>Өөрчлөлттэй</th>
                              <th>Улайсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q16 === 'q16-3' ? (
                                       <Slash />
                                    ) : item.data?.['q16-2-1'] === 'q16-2-1-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Хавдсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q16 === 'q16-3' ? (
                                       <Slash />
                                    ) : item.data?.['q16-2-1'] === 'q16-2-1-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Зүсэгдсэн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q16 === 'q16-3' ? (
                                       <Slash />
                                    ) : item.data?.['q16-2-1'] === 'q16-2-1-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Шүүс гарсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q16 === 'q16-3' ? (
                                       <Slash />
                                    ) : item.data?.['q16-2-1'] === 'q16-2-1-4' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Идээлсэн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q16 === 'q16-3' ? (
                                       <Slash />
                                    ) : item.data?.['q16-2-1'] === 'q16-2-1-5' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Тууралттай</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q16 === 'q16-3' ? (
                                       <Slash />
                                    ) : item.data?.['q16-2-1'] === 'q16-2-1-6' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Цооролттой</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q16 === 'q16-3' ? (
                                       <Slash />
                                    ) : item.data?.['q16-2-1'] === 'q16-2-1-7' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={6}>Арьсны эрүүл ахуй</th>
                              <th rowSpan={2}>Бүх биеийн угаалга хийх</th>
                              <th>Шаардлагагүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q17 === 'q17-4' ? (
                                       <Slash />
                                    ) : item.data?.['q17-1-1'] === 'q17-1-1-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Шаардлагатай</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q17 === 'q17-4' ? (
                                       <Slash />
                                    ) : item.data?.['q17-1-1'] === 'q17-1-1-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={2}>Хэсэгчилсэн угаалга хийх</th>
                              <th>Шаардлагагүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q17 === 'q17-4' ? (
                                       <Slash />
                                    ) : item.data?.['q17-2-1'] === 'q17-2-1-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Шаардлагатай</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q17 === 'q17-4' ? (
                                       <Slash />
                                    ) : item.data?.['q17-2-1'] === 'q17-2-1-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={2}>Ор цэвэрлэх</th>
                              <th>Шаардлагагүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q17 === 'q17-4' ? (
                                       <Slash />
                                    ) : item.data?.['q17-3-1'] === 'q17-3-1-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Шаардлагатай</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q17 === 'q17-4' ? (
                                       <Slash />
                                    ) : item.data?.['q17-3-1'] === 'q17-3-1-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={3}>Мэс заслын шарх</th>
                              <th rowSpan={2}>Боолт</th>
                              <th>Цэвэр</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q18 === 'q18-3' ? (
                                       <Slash />
                                    ) : item.data?.['q18-1-1'] === 'q18-1-1-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Бохир</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q18 === 'q18-3' ? (
                                       <Slash />
                                    ) : item.data?.['q18-1-1'] === 'q18-1-1-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Гуурстай</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q18 === 'q18-3' ? (
                                       <Slash />
                                    ) : item.data?.q18 === 'q18-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={3} colSpan={2}>
                                 Уян зүү тавьсан хэсэг
                              </th>
                              <th>Хэвийн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q19 === 'q19-4' ? (
                                       <Slash />
                                    ) : item.data?.q19 === 'q19-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Улайсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q19 === 'q19-4' ? (
                                       <Slash />
                                    ) : item.data?.q19 === 'q19-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th>Хавдсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q19 === 'q19-4' ? (
                                       <Slash />
                                    ) : item.data?.q19 === 'q19-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th
                                 rowSpan={21}
                                 style={{
                                    writingMode: 'vertical-rl',
                                    textAlign: 'center',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 5. Мэдрэл, сэтгэхүйн байдал
                              </th>
                              <th rowSpan={4}>Ухаан санааны байдал</th>
                              <th colSpan={2}>Хэвийн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q20 === 'q20-5' ? (
                                       <Slash />
                                    ) : item.data?.q20 === 'q20-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                              <td rowSpan={21} className="text-start" style={{ width: 115 }}>
                                 <div className="ff">
                                    <p>#35. Будилуу болох (цочмог, архаг)</p>
                                    <p>#36. Ой санамж муудсан</p>
                                    <p>#37. Ярих чадвар саатсан</p>
                                    <p>#38. Тархины дасан зохицох чадвар буурсан</p>
                                    <p>#39. Өвдөлт</p>
                                    <p>#40. Сэтгэл түгших</p>
                                    <p>#41. Айдас</p>
                                    <p>#42. Гашуудах</p>
                                    <p>#43. Итгэл алдарсан</p>
                                    <p>#44. Ганцаардах эрсдэл</p>
                                    <p>#45. Өөрийгөө зөв үнэлж чадахгүй болсон</p>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th colSpan={2}>Сэтгэл хөөрлийн байдалтай</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q20 === 'q20-5' ? (
                                       <Slash />
                                    ) : item.data?.q20 === 'q20-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Сэтгэл түгшсэн байдалтай</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q20 === 'q20-5' ? (
                                       <Slash />
                                    ) : item.data?.q20 === 'q20-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Ухаангүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q20 === 'q20-5' ? (
                                       <Slash />
                                    ) : item.data?.q20 === 'q20-4' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={3}>Орчиндоо (Бусадтай)</th>
                              <th colSpan={2}>Харьцаатай</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q21 === 'q21-4' ? (
                                       <Slash />
                                    ) : item.data?.q21 === 'q21-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Cул</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q21 === 'q21-4' ? (
                                       <Slash />
                                    ) : item.data?.q21 === 'q21-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Харьцаагүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q21 === 'q21-4' ? (
                                       <Slash />
                                    ) : item.data?.q21 === 'q21-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={2}>Өвдөлт</th>
                              <th colSpan={2}>Өвдөлтгүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q22 === 'q22-3' ? (
                                       <Slash />
                                    ) : item.data?.q22 === 'q22-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Өвдөлттэй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q22 === 'q22-3' ? (
                                       <Slash />
                                    ) : item.data?.q22 === 'q22-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={3}>Үе мөчний хөдөлгөөн</th>
                              <th colSpan={2}>Хэвийн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q23 === 'q23-4' ? (
                                       <Slash />
                                    ) : item.data?.q23 === 'q23-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Хязгаардлагдмал</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q23 === 'q23-4' ? (
                                       <Slash />
                                    ) : item.data?.q23 === 'q23-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={2}>Үений хавдалттай</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q23 === 'q23-4' ? (
                                       <Slash />
                                    ) : item.data?.q23 === 'q23-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                        </thead>
                     </Table>
                  </div>
               </div>
               <div className="page">
                  <div className="subpage">
                     <Table bordered className="bcp">
                        <thead>
                           <tr>
                              <th colSpan={50}>ӨДӨР ТУТМЫН СУВИЛГАА</th>
                           </tr>
                           <tr>
                              <th
                                 rowSpan={36}
                                 style={{
                                    writingMode: 'vertical-rl',
                                    textAlign: 'center',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 6. ӨДӨР ТУТМЫН СУВИЛГАА
                              </th>
                              <th rowSpan={2} colSpan={3}>
                                 Уян зүү
                              </th>
                              <th colSpan={3}>Тавьсан/сольсон</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q24 === 'q24-3' ? (
                                       <Slash />
                                    ) : item.data?.q24 === 'q24-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                              <td rowSpan={31} className="text-start" style={{ width: 101 }}>
                                 <p>#46. ЭМБ-ын мэдлэг олгох шаардлагатай</p>
                                 <p>#47. Хувийн эрүүл мэндээ зохицуулах чадваргүй болсон</p>
                                 <p>#48. Мэдлэгийн дутагдал</p>
                                 <p>#49. Өөрийгөө асрах чадваргүй болсон (усанд орох, хувцаслах, хооллох,бие засах)</p>
                                 <p>#50. Алхах чадвар алдагдсан</p>
                              </td>
                           </tr>
                           <tr>
                              <th colSpan={3}>Бэхэлгээ хийсэн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q24 === 'q24-3' ? (
                                       <Slash />
                                    ) : item.data?.q24 === 'q24-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={2} colSpan={3}>
                                 Гуурсны арчилгаа
                              </th>
                              <th colSpan={3}>Хийх шаардлагагүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q25 === 'q25-3' ? (
                                       <Slash />
                                    ) : item.data?.q25 === 'q25-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Хийгдсэн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q25 === 'q25-3' ? (
                                       <Slash />
                                    ) : item.data?.q25 === 'q25-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={3} colSpan={3}>
                                 Бургуй хийсэн
                              </th>
                              <th colSpan={3}>Цэвэрлэх бургуй/ тосон</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q26 === 'q26-4' ? (
                                       <Slash />
                                    ) : item.data?.q26 === 'q26-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Эмчилгээний бургуй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q26 === 'q26-4' ? (
                                       <Slash />
                                    ) : item.data?.q26 === 'q26-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Хий гаргах гуурс</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q26 === 'q26-4' ? (
                                       <Slash />
                                    ) : item.data?.q26 === 'q26-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={6} colSpan={3}>
                                 Хэсэгчилсэн асаргаа
                              </th>
                              <th colSpan={3}>Халуун жин тавьсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q27 === 'q27-7' ? (
                                       <Slash />
                                    ) : item.data?.q27 === 'q27-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Хүйтэн жин тавьсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q27 === 'q27-7' ? (
                                       <Slash />
                                    ) : item.data?.q27 === 'q27-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Халуун бигнүүр тавьсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q27 === 'q27-7' ? (
                                       <Slash />
                                    ) : item.data?.q27 === 'q27-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Хүйтэн бигнүүр тавьсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q27 === 'q27-7' ? (
                                       <Slash />
                                    ) : item.data?.q27 === 'q27-4' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Гич тавьсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q27 === 'q27-7' ? (
                                       <Slash />
                                    ) : item.data?.q27 === 'q27-5' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Бумба тавьсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q27 === 'q27-7' ? (
                                       <Slash />
                                    ) : item.data?.q27 === 'q27-6' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={2} colSpan={3}>
                                 ЭМБ/Зөвлөгөө өгөх
                              </th>
                              <th colSpan={3}>Өөрт нь зөвлөгөө өгсөн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q28 === 'q28-3' ? (
                                       <Slash />
                                    ) : item.data?.q28 === 'q28-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Гэр бүлд нь зөвлөгөө өгсөн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q28 === 'q28-3' ? (
                                       <Slash />
                                    ) : item.data?.q28 === 'q28-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={2} colSpan={3}>
                                 Нөхөн сэргийлэх
                              </th>
                              <th colSpan={3}>Дасгал хөдөлгөөн хийсэн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q29 === 'q29-3' ? (
                                       <Slash />
                                    ) : item.data?.q29 === 'q29-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Иллэг массаж хийсэн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q29 === 'q29-3' ? (
                                       <Slash />
                                    ) : item.data?.q29 === 'q29-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={2} colSpan={3}>
                                 Байрлал
                              </th>
                              <th colSpan={3}>Сольсон /Цаг/</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q30 === 'q30-3' ? (
                                       <Slash />
                                    ) : item.data?.q30 === 'q30-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Солих шаардлагагүй</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q30 === 'q30-3' ? (
                                       <Slash />
                                    ) : item.data?.q30 === 'q30-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={7} colSpan={1}>
                                 Ариун цэвэр
                              </th>
                              <th colSpan={3}>Цагаан хэрэглэл сольсон</th>
                              <td rowSpan={8} colSpan={2}>
                                 <p>СУ (Сувилагч)</p>
                                 <p>Ө (эмчлүүлэгч </p>
                                 <p>өөрөө)</p>
                                 <p>СА (сахиур)</p>
                              </td>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q31 === 'q31-4' ? <Slash /> : null}
                                    {item.data?.q31 === 'q31-1' ? 'СУ' : null}
                                    {item.data?.q31 === 'q31-2' ? 'Ө' : null}
                                    {item.data?.q31 === 'q31-3' ? 'СА' : null}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Үс угаасан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q32 === 'q32-4' ? <Slash /> : null}
                                    {item.data?.q32 === 'q32-1' ? 'СУ' : null}
                                    {item.data?.q32 === 'q32-2' ? 'Ө' : null}
                                    {item.data?.q32 === 'q32-3' ? 'СА' : null}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Үс самнасан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q33 === 'q33-4' ? <Slash /> : null}
                                    {item.data?.q33 === 'q33-1' ? 'СУ' : null}
                                    {item.data?.q33 === 'q33-2' ? 'Ө' : null}
                                    {item.data?.q33 === 'q33-3' ? 'СА' : null}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Сахал хуссан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q34 === 'q34-4' ? <Slash /> : null}
                                    {item.data?.q34 === 'q34-1' ? 'СУ' : null}
                                    {item.data?.q34 === 'q34-2' ? 'Ө' : null}
                                    {item.data?.q34 === 'q34-3' ? 'СА' : null}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Хувцас сольсон</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q35 === 'q35-4' ? <Slash /> : null}
                                    {item.data?.q35 === 'q35-1' ? 'СУ' : null}
                                    {item.data?.q35 === 'q35-2' ? 'Ө' : null}
                                    {item.data?.q35 === 'q35-3' ? 'СА' : null}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Хөл гарын хумс авсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q36 === 'q36-4' ? <Slash /> : null}
                                    {item.data?.q36 === 'q36-1' ? 'СУ' : null}
                                    {item.data?.q36 === 'q36-2' ? 'Ө' : null}
                                    {item.data?.q36 === 'q36-3' ? 'СА' : null}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Амны хөндий, шүд угаасан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q37 === 'q37-4' ? <Slash /> : null}
                                    {item.data?.q37 === 'q37-1' ? 'СУ' : null}
                                    {item.data?.q37 === 'q37-2' ? 'Ө' : null}
                                    {item.data?.q37 === 'q37-3' ? 'СА' : null}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={4}>Хооллосон</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q38 === 'q38-4' ? <Slash /> : null}
                                    {item.data?.q38 === 'q38-1' ? 'СУ' : null}
                                    {item.data?.q38 === 'q38-2' ? 'Ө' : null}
                                    {item.data?.q38 === 'q38-3' ? 'СА' : null}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={4} colSpan={3}>
                                 Аюулгүй байдал
                              </th>
                              <th colSpan={3}>Онцгой анхаарах тэмдэг</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q39 === 'q39-5' ? (
                                       <Slash />
                                    ) : item.data?.q39 === 'q39-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Унаж бэртэхээс сэргийлэх</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q39 === 'q39-5' ? (
                                       <Slash />
                                    ) : item.data?.q39 === 'q39-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Орны хашлага</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q39 === 'q39-5' ? (
                                       <Slash />
                                    ) : item.data?.q39 === 'q39-3' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>Тэргэнцэр, таяг</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q39 === 'q39-5' ? (
                                       <Slash />
                                    ) : item.data?.q39 === 'q39-4' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={5} colSpan={3}>
                                 Нэмэлт
                              </th>
                              <th colSpan={3}>Шинжилгээнд авч явсан</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q40 === 'q40-3' ? (
                                       <Slash />
                                    ) : item.data?.q40 === 'q40-1' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                              <th rowSpan={5}>
                                 {chunk?.map((item, indx) => (
                                    <td key={indx}>{item.data?.q44}</td>
                                 ))}
                              </th>
                           </tr>
                           <tr>
                              <th colSpan={3}>Өрөө тасаг, шилжүүлсэн</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q40 === 'q40-3' ? (
                                       <Slash />
                                    ) : item.data?.q40 === 'q40-2' ? (
                                       <CheckOutlined />
                                    ) : (
                                       <CloseOutlined />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>/</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q40 === 'q40-3' ? (
                                       <Slash />
                                    ) : item.data?.q41 ? (
                                       item.data?.q41
                                    ) : (
                                       <Slash />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>/</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q40 === 'q40-3' ? (
                                       <Slash />
                                    ) : item.data?.q42 ? (
                                       item.data?.q42
                                    ) : (
                                       <Slash />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={3}>/</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>
                                    {item.data?.q40 === 'q40-3' ? (
                                       <Slash />
                                    ) : item.data?.q43 ? (
                                       item.data?.q43
                                    ) : (
                                       <Slash />
                                    )}
                                 </td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={6} colSpan={3}>
                                 7. Сувилгааны асуудал - #
                              </th>
                              <th colSpan={4}>1. Амьсгал/Зүрх судас</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>{item.data?.q45}</td>
                              ))}
                              <th rowSpan={6}>
                                 {chunk?.map((item, indx) => (
                                    <td key={indx}>{item.data?.q51}</td>
                                 ))}
                              </th>
                           </tr>
                           <tr>
                              <th colSpan={4}>2. Хоол боловсруулах</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>{item.data?.q46}</td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={4}>3. Шээс ялгаруулалт</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>{item.data?.q47}</td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={4}>4. Арьс</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>{item.data?.q48}</td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={4}>5. Мэдрэл, сэтгэхүйн байдал</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>{item.data?.q49}</td>
                              ))}
                           </tr>
                           <tr>
                              <th colSpan={4}>6. Өдөр тутмын сувилгаа</th>
                              {chunk?.map((item, indx) => (
                                 <td key={indx}>{item.data?.q50}</td>
                              ))}
                           </tr>
                           <tr>
                              <th rowSpan={2} colSpan={3}>
                                 8. Үнэлгээ хийсэн сувилагч
                              </th>
                              <th colSpan={4}>Огноо / Цаг</th>
                              {chunk?.map((item, indx) => (
                                 <td rowSpan={2} key={indx}>
                                    <p>{dayjs(item.createdAt).format('MM-DD/HH')}</p>
                                    <p>{formatNameForDoc(item.createdBy?.lastName, item.createdBy?.firstName)}</p>
                                 </td>
                              ))}
                              <th rowSpan={4}></th>
                           </tr>
                           <tr>
                              <th colSpan={3}>Нэр /товчлохгүй/</th>
                           </tr>
                           <tr>
                              <td rowSpan={2} colSpan={3}>
                                 <p>9. Үнэлгээг давтан хийх хугацаа, </p>
                                 <p>нийт давтамжийн талаар ахлах</p>
                                 <p>сувилагчийн тэмдэглэл</p>
                              </td>
                              <th colSpan={4}>Огноо / Цаг</th>
                              {form?.map((item, index) => {
                                 return (
                                    <td rowSpan={2} key={index}>
                                       <p></p>
                                    </td>
                                 );
                              })}
                           </tr>
                           <tr>
                              <th colSpan={3}>Нэр /товчлохгүй/</th>
                           </tr>
                        </thead>
                     </Table>
                     <p style={{ fontSize: 10 }}>Хуудасыг хөтлөх заавар:</p>
                     <Table bordered className="bcp2">
                        <thead>
                           <tr>
                              <th>Тэмдэглэгээ</th>
                              <th></th>
                              <th colSpan={2}>Хөтлөх заавар</th>
                           </tr>
                           <tr>
                              <td rowSpan={3}>
                                 <p>"Y" хэсэгт</p>
                                 <p>дараах гурван</p>
                                 <p>тэмдэглэгээнээс</p>
                                 <p>хамаарахыг</p>
                                 <p>тавина</p>
                              </td>
                              <th>✓</th>
                              <th>Тийм</th>
                              <td>
                                 <p>
                                    Тийм* гэж үнэлсэн асуудал сувилгааны төлөвлөгөөнд оруулав. Ангилал бүрээс нэг
                                    асуудалтай бол
                                 </p>
                                 <p>
                                    тэрхүү асуудал бүрээр эмчлүүлэгчийн зовиурыг багасгах сувилгааны ажлын төлөвлөлтийг
                                    CT-3 хуудсанд
                                 </p>
                                 <p>тэмдэглэж хэрэгжүүлж дүгнэнэ.</p>
                              </td>
                           </tr>
                           <tr>
                              <th>╳</th>
                              <th>Үгүй</th>
                              <td>
                                 <p>
                                    Үгүй* бол сувилгааны төлөвлөгөөнд орох асуудал биш гэж үзэх тул сувилгааны
                                    төлөвлөгөөнд энэ
                                 </p>
                                 <p>чиглэлээр хийх ажил төлөвлөгдөхгүй гэж ойлгоно.</p>
                              </td>
                           </tr>
                           <tr>
                              <th>/</th>
                              <th>Хамаарахгүй</th>
                              <td>
                                 <p>
                                    Тухайн үнэлгээний асуулт эмчлүүлэгчид хамаарахгүй бол тэр бүлгийг бүхэлд нь (/)
                                    ташуу зураас татан
                                 </p>
                                 <p>хамаатуулахгүй орхиж болно.</p>
                              </td>
                           </tr>
                           <tr>
                              <th colSpan={2}>"#"</th>
                              <td>
                                 <p>Асуудлын</p>
                                 <p>дугаар</p>
                              </td>
                              <td>
                                 <p>
                                    Тухайн бүлэг асуудлыг үнэлж, түүний ард буй сувилгааны асуудлаас тохирох нэг
                                    асуудлыг сонгон авч
                                 </p>
                                 <p>
                                    "Сувилгааны асуудал" ангилалын арын тохирох хүснэгтэнд тэмдэглэнэ. Жишээ нь:
                                    Ханиалгалт, цэртэй гэж
                                 </p>
                                 <p>
                                    үнэлсэн бол "Амьсгалын замын цэвэршилт алдагдсан" гэсэн асуудлыг сонгон "#3"
                                    тэмдгийг тохирох
                                 </p>
                                 <p>нүдэнд тавина.</p>
                              </td>
                           </tr>
                           <tr>
                              <td colSpan={2} rowSpan={3}>
                                 <p>Эмчлүүлэгчийн</p>
                                 <p>ариун цэврийн</p>
                                 <p>хэсгийг дараах</p>
                              </td>
                              <th>СУ</th>
                              <th>Сувилагч хийсэн</th>
                           </tr>
                           <tr>
                              <th>Ө</th>
                              <th>Эмчлүүлэгч өөрөө хийсэн</th>
                           </tr>
                           <tr>
                              <th>СА</th>
                              <th>Сахиур хийсэн</th>
                           </tr>
                           <tr>
                              <td colSpan={2} rowSpan={3}>
                                 -*-
                              </td>
                              <th colSpan={2}>
                                 Өвдөлттэй бол өвдөлт үнэлэх хуудсыг сонгомолоор авч тухайн эмчлүүлэгчид хэрэглэнэ.
                              </th>
                           </tr>
                           <tr>
                              <td colSpan={2}>
                                 <p>
                                    Арьсны байдал өөрчлөлттэй гэж үнэлвэл цооролтын удирдамжийг /нэрийг магадлах/
                                    баримтлан сувилах төлөвлөгөөг
                                 </p>
                                 <p>боловсруулна.</p>
                              </td>
                           </tr>
                           <tr>
                              <th colSpan={2}>
                                 Шингэний балансыг үнэлэх хуудсыг сонгомолоор авч тухайн эмчлүүлэгчид хэрэглэнэ.
                              </th>
                           </tr>
                           <tr>
                              <th colSpan={2}>Саарал хүснэгт</th>
                              <th colSpan={2}>Хэвийн үзүүлэлтийг тодруулав.</th>
                           </tr>
                        </thead>
                     </Table>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
}
export default CT_1_2H11;
