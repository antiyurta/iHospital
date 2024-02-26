import React, { useEffect, useState } from 'react';
import { formatNameForDoc, getAge, getGenderInType } from '../../../comman';
import bodyImg from './611Body.jpg';
import dayjs from 'dayjs';
import ImageMarker from 'react-image-marker';
import { CheckOutlined } from '@ant-design/icons';
const CT_1_2H14 = (props) => {
   const {
      data: { formData }
   } = props;
   const [chunks, setChunks] = useState();
   function sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
         const chunk = arr.slice(i, i + chunkSize);
         res.push(chunk);
      }
      return res;
   }
   const renderOtherImg = (chunkSize) => {
      var imgs = [];
      for (let index = 0; index < 4 - chunkSize; index++) {
         imgs.push({
            src: bodyImg
         });
      }
      return imgs;
   };
   const trueFalseRender = (state1, state2) => {
      return (
         <p className="text-[8px]">
            <span className={`text-[9px] ${state1 ? 'underline' : ''}`}>Тийм</span>
            {` / `}
            <span className={`text-[9px] ${state2 ? 'underline' : ''}`}>Үгүй</span>
         </p>
      );
   };
   useEffect(() => {
      console.log('formData', formData);
      setChunks(sliceIntoChunks(formData, 4));
   }, [formData]);
   return (
      <>
         {chunks?.map((chunk, index) => (
            <div key={index} className="page">
               <div className="subpage">
                  <div className="flow-root">
                     <p className="float-right" style={{ fontSize: 14 }}>
                        СМ-2-Хавсралт 14
                     </p>
                  </div>
                  <p className="font-bold text-center" style={{ fontSize: 16 }}>
                     ӨВДӨЛТИЙГ ХЯНАХ ХУУДАС
                  </p>
                  <div className="flex flex-row gap-1 justify-between">
                     <div className="inline-flex gap-1">
                        <p className="text-[12px]">Эмчлүүлэгчийн овог, нэр:</p>
                        <p className="underline text-[12px]">
                           {`${chunk[0]?.history?.patientData?.lastName} ${chunk[0]?.history?.patientData?.firstName}`}
                        </p>
                     </div>
                     <div className="flex flex-row gap-1">
                        <p className="text-[12px]">Өвчний түүх №:</p>
                        <p className="underline text-[12px]">{chunk[0]?.history?.historyNumber}</p>
                     </div>
                     <div className="inline-flex gap-1">
                        <p className="text-[12px]">Нас:</p>
                        <p className="underline text-[12px]">
                           {getAge(chunk[0]?.history?.patientData?.registerNumber)}
                        </p>
                        <p className="pl-1 text-[12px]">Хүйс:</p>
                        <p className="underline text-[12px]">
                           {getGenderInType(chunk[0]?.history?.patientData?.genderType)}
                        </p>
                        <p className="pl-1 text-[12px]">Тасаг:</p>
                        <p className="underline text-[12px]">{chunk[0]?.history?.cabinetName}</p>
                        <p className="pl-1 text-[12px]">Өрөө:</p>
                        <p className="underline text-[12px]">{chunk[0]?.history?.roomNumber}</p>
                     </div>
                  </div>
                  <table className="table table-bordered attac14">
                     <thead>
                        <tr>
                           <th colSpan={2}>Сар/Өдөр</th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>{dayjs(doc.createdAt)?.format('MM/DD')}</th>
                           ))}
                        </tr>
                        <tr>
                           <th colSpan={2}>Мэс заслын дараах хоног</th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>{doc.data?.q1}</th>
                           ))}
                        </tr>
                        <tr>
                           <th colSpan={2}>Цаг</th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>{dayjs(doc.data?.q2)?.format('HH:mm')}</th>
                           ))}
                        </tr>
                        <tr>
                           <th className="align-middle" colSpan={2}>
                              Өвдөлтийн байрлал
                           </th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>
                                 <ImageMarker
                                    src={bodyImg}
                                    alt="asdasd"
                                    markers={doc.data?.q3 || []}
                                    extraClass="image"
                                 />
                              </th>
                           ))}
                           {renderOtherImg(chunk?.length)?.map((img, indx) => (
                              <th key={indx}>
                                 <img
                                    style={{
                                       minWidth: 150
                                    }}
                                    src={img.src}
                                    alt="img"
                                 />
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th className="align-middle" rowSpan={10}>
                              Өвдөлтийн хүч*
                           </th>
                           <th>1–бага</th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>{doc.data?.q4 === '1' ? <CheckOutlined /> : null}</th>
                           ))}
                        </tr>
                        <tr>
                           <th>2</th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>{doc.data?.q4 === '2' ? <CheckOutlined /> : null}</th>
                           ))}
                        </tr>
                        <tr>
                           <th>3</th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>{doc.data?.q4 === '3' ? <CheckOutlined /> : null}</th>
                           ))}
                        </tr>
                        <tr>
                           <th>4</th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>{doc.data?.q4 === '4' ? <CheckOutlined /> : null}</th>
                           ))}
                        </tr>
                        <tr>
                           <th>5</th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>{doc.data?.q4 === '5' ? <CheckOutlined /> : null}</th>
                           ))}
                        </tr>
                        <tr>
                           <th>6</th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>{doc.data?.q4 === '6' ? <CheckOutlined /> : null}</th>
                           ))}
                        </tr>
                        <tr>
                           <th>7</th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>{doc.data?.q4 === '7' ? <CheckOutlined /> : null}</th>
                           ))}
                        </tr>
                        <tr>
                           <th>8</th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>{doc.data?.q4 === '8' ? <CheckOutlined /> : null}</th>
                           ))}
                        </tr>
                        <tr>
                           <th>9</th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>{doc.data?.q4 === '9' ? <CheckOutlined /> : null}</th>
                           ))}
                        </tr>
                        <tr>
                           <th>10–маш хүчтэй</th>
                           {chunk?.map((doc, indx) => (
                              <th key={indx}>{doc.data?.q4 === '10' ? <CheckOutlined /> : null}</th>
                           ))}
                        </tr>
                        <tr>
                           <th colSpan={2}>Ямар өвдөлт байгаа вэ? /Жишээ нь чинэрч өвдөх, хатгаж өвдөх/</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-baseline" key={indx}>
                                 {doc.data?.q3?.map((item) => item.desc)?.join(',')}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th className="align-middle" rowSpan={3}>
                              Өвдөлтийн давтамж
                           </th>
                           <th>Босч явах үед</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-middle text-center" key={indx}>
                                 {doc.data?.q5 === 'q5-1' ? trueFalseRender(true, false) : null}
                                 {doc.data?.q5 === 'q5-2' ? trueFalseRender(false, true) : null}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th>Дандаа</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-middle text-center" key={indx}>
                                 {doc.data?.q6 === 'q6-1' ? trueFalseRender(true, false) : null}
                                 {doc.data?.q6 === 'q6-2' ? trueFalseRender(false, true) : null}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th>Өвдөөд унтаж чадахгүй</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-middle text-center" key={indx}>
                                 {doc.data?.q7 === 'q7-1' ? trueFalseRender(true, false) : null}
                                 {doc.data?.q7 === 'q7-2' ? trueFalseRender(false, true) : null}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th className="align-middle" rowSpan={4}>
                              Өвдөлт, үйл ажиллагааны байршлаар
                           </th>
                           <th>Хооллоход</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-middle text-center" key={indx}>
                                 {doc.data?.q8 === 'q8-1' ? trueFalseRender(true, false) : null}
                                 {doc.data?.q8 === 'q8-2' ? trueFalseRender(false, true) : null}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th>Ялгаруулалтын үед</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-middle text-center" key={indx}>
                                 {doc.data?.q9 === 'q9-1' ? trueFalseRender(true, false) : null}
                                 {doc.data?.q9 === 'q9-2' ? trueFalseRender(false, true) : null}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th>Сууж/босоход</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-middle text-center" key={indx}>
                                 {doc.data?.q10 === 'q10-1' ? trueFalseRender(true, false) : null}
                                 {doc.data?.q10 === 'q10-2' ? trueFalseRender(false, true) : null}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th>Бусад хөдөлгөөн хийхэд</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-baseline" key={indx}>
                                 {doc.data?.q11}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th className="align-middle" rowSpan={7}>
                              Эмийн бус аргууд
                           </th>
                           <th>Халуун жин</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-baseline" key={indx}>
                                 {doc.data?.q12}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th>Хүйтэн жин</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-baseline" key={indx}>
                                 {doc.data?.q13}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th>Зүү</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-baseline" key={indx}>
                                 {doc.data?.q14}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th>Дасгал</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-baseline" key={indx}>
                                 {doc.data?.q15}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th>Массаж</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-baseline" key={indx}>
                                 {doc.data?.q16}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th>Физик эмчилгээ</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-baseline" key={indx}>
                                 {doc.data?.q17}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th>Бусад</th>
                           {chunk?.map((doc, indx) => (
                              <th className="align-baseline" key={indx}>
                                 {doc.data?.q18}
                              </th>
                           ))}
                        </tr>
                        <tr>
                           <th colSpan={5}>Өвдөлт намдаах эмийн тун, хэрэглэх зам</th>
                        </tr>
                        <tr>
                           <th>1</th>
                        </tr>
                        <tr>
                           <th>2</th>
                        </tr>
                        <tr>
                           <th>3</th>
                        </tr>
                        <tr>
                           <th>4</th>
                        </tr>
                        <tr>
                           <th>5</th>
                        </tr>
                        <tr>
                           <th>6</th>
                        </tr>
                        <tr>
                           <th>7</th>
                        </tr>
                        <tr>
                           <th className="align-middle" rowSpan={3}>
                              Сувилагчийн гарын үсэг
                           </th>
                           <th>Өглөөний ээлж</th>
                        </tr>
                        <tr>
                           <th>Өдрийн ээлж</th>
                        </tr>
                        <tr>
                           <th>Оройн ээлж</th>
                        </tr>
                     </thead>
                  </table>
                  <p>
                     * Өвдөлтийн хүчийг үнэлэхдээ өвчтөнөөс асуухаас гадна хавсаргасан өвдөлтийн хүч үнэлэх хуудсыг
                     ашиглаж болно
                  </p>
               </div>
            </div>
         ))}
      </>
   );
};
export default CT_1_2H14;
