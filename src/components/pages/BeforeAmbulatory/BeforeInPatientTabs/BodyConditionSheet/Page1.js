import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { getAge } from '../../../../comman';

function Page1({ patientData }) {
   let location = useLocation();
   return (
      <>
         <page size="A4">
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
                     {patientData?.lastName.substring(0, 1) +
                        '.' +
                        patientData?.firstName}
                  </p>
               </div>
               <div className="float-right inline-flex">
                  <p style={{ fontSize: 10 }}>Нас:</p>
                  <p style={{ fontSize: 10 }}>
                     {getAge(patientData?.registerNumber)}
                  </p>
                  <p style={{ fontSize: 10 }} className="pl-1">
                     Хүйс:
                  </p>
                  <p style={{ fontSize: 10 }}>
                     {patientData?.genderType === 'MAN' ? 'Эр' : 'Эм'}
                  </p>
                  <p style={{ fontSize: 10 }} className="pl-1">
                     Тасаг:
                  </p>
                  <p style={{ fontSize: 10 }}>
                     {location?.state?.departmentName}
                  </p>
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
                     <th rowSpan={2}>9/10</th>
                     <th rowSpan={2}>9/11</th>
                     <th rowSpan={2}>9/12</th>
                     <th rowSpan={2}>9/13</th>
                     <th rowSpan={2}>9/14</th>
                     <th rowSpan={2}>9/15</th>
                     <th rowSpan={2}>9/16</th>
                     <th rowSpan={2}>9/17</th>
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
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                     <td
                        rowSpan={21}
                        className="text-start"
                        style={{ width: 115 }}
                     >
                        <p>#1. Амьсгалах хэв маягийн өөрчлөлт</p>
                        <p>#2. Хийн солилцоо алдагдсан</p>
                        <p>#3. Амьсгалын замын цэвэршилт алдагдсан</p>
                        <p>#4. Хөдөлгөөний алдагдсан</p>
                        <p>#5. Ядаргаа</p>
                        <p>#7. Шокын эрсдэл</p>
                        <p>#8. Захын мэдрэлийн үйл ажиллагаа алдагдах эрсдэл</p>
                        <p>#9. Нойр хулжих</p>
                        <p>#10. Нойргүйдэл</p>
                        <p>
                           #11. Хөдөлгөөн муудсан (ор, биеийн, шилжих,
                           тэргэнцэр)
                        </p>
                        <p>#12. Тамиргүйдэх</p>
                     </td>
                  </tr>
                  <tr>
                     <th rowSpan={4} style={{ width: 70 }}>
                        Жигд бус
                     </th>
                     <th style={{ width: 70 }}>Өнгөц</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th>Гүн</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th>Тоо олширсон</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th>Тоо цөөрсөн</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th rowSpan={3}>Чимээ</th>
                     <th colSpan={2}>Хэвийн</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th rowSpan={2}>Хэвийн бус</th>
                     <th>Сул</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th>Тод</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th rowSpan={3}>Ханиалгалт</th>
                     <th colSpan={2}>Үгүй</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th colSpan={2}>Цэргүй</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th colSpan={2}>Цэртэй</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th rowSpan={6}>Хаван</th>
                     <th colSpan={2}>Хавангүй</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th rowSpan={5}>Хавантай</th>
                     <th>Бүр биеэр</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th>Нүүрэнд</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th>Зовхонд</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th>Хэвлийд</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th>Шилбэнд</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th colSpan={2} rowSpan={2}>
                        Хялгасан судасны дахин дүүрэлт
                     </th>
                     <th>2 секундээс бага</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th>2 секундээс удаан</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th rowSpan={2}>Зүрхний хэм</th>
                     <th colSpan={2}>Жигд</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                  </tr>
                  <tr>
                     <th colSpan={2}>Хэм алдагдсан</th>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
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
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                     <td
                        rowSpan={16}
                        className="text-start"
                        style={{ width: 115 }}
                     >
                        <div className="ff">
                           <p>#13. Амны салст бүрхүүл гэмтсэн</p>
                           <p>
                              #14. Хоол тэжээлийн тэнцвэр алдагдсан: Бие
                              махбодид шаардлагатай хэмжээнээс их
                           </p>
                           <p>
                              #15. Хоол тэжээлийн тэнцвэр алдагдсан: Бие
                              махбодид шаардлагатай хэмжээнээс бага
                           </p>
                           <p>#16. Залгих чадварын алдагдал</p>
                           <p>#17. Бөглөрөх эрсдэл</p>
                           <p>#18. Бөөлжис цутгах</p>
                           <p>#19. Шингэний хэмжээ ихсэлт</p>
                           <p>#20. Шингэний дутагдал</p>
                           <p>#21. Өтгөн хаталт</p>
                           <p>#22. Суулгалт</p>
                           <p>#23. Агаарын солилцооны алдагдал</p>
                           <p>
                              #24. Цусан дахь сахарын хэмжээ тогтворгүйжих
                              эрсдэл
                           </p>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={2}>Гуурсаар</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Бусад замаар (Судсаар........)</th>
                  </tr>
                  <tr>
                     <th rowSpan={2}>Хоолны дэглэм</th>
                     <th colSpan={2}>Хоол хориогүй</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Хоол хориотой</th>
                  </tr>
                  <tr>
                     <th rowSpan={4}>Хоолны дуршил</th>
                     <th colSpan={2}>Хэвийн</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Өөрчлөлттэй</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Огиулалттай</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Бөөлжүүлнэ</th>
                  </tr>
                  <tr>
                     <th rowSpan={3}>Хэвлий</th>
                     <th colSpan={2}>Хэвийн</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Цэрдийсэн</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Хонхойж татагдсан</th>
                  </tr>
                  <tr>
                     <th rowSpan={4}>Өтгөн</th>
                     <th colSpan={2}>Хэвийн</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Хатуу</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Шингэн</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Өтгөн өөрчлөгдсөн</th>
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
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                     <td
                        rowSpan={11}
                        className="text-start"
                        style={{ width: 115 }}
                     >
                        <p>#25. Шээс алдалт</p>
                        <p>#26. Шээс хаагдсан</p>
                        <p>#27. Шээс ялгаруулалт саатсан</p>
                     </td>
                  </tr>
                  <tr>
                     <th>Ихэссэн</th>
                  </tr>
                  <tr>
                     <th>Багассан</th>
                  </tr>
                  <tr>
                     <th rowSpan={4}>Зовиур</th>
                     <th>Өвдөлттэй</th>
                  </tr>
                  <tr>
                     <th>Дүлэлттэй</th>
                  </tr>
                  <tr>
                     <th>Тасалдсан</th>
                  </tr>
                  <tr>
                     <th>Задгайрсан</th>
                  </tr>
                  <tr>
                     <th rowSpan={2}>Өнгө, үнэр</th>
                     <th>Өөрчлөлтгүй</th>
                  </tr>
                  <tr>
                     <th>Өөрчлөлттэй</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Шээлгүүргүй</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Шээлгүүртэй</th>
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
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                     <td
                        rowSpan={20}
                        className="text-start"
                        style={{ width: 115 }}
                     >
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
                  </tr>
                  <tr>
                     <th>Хавдсан</th>
                  </tr>
                  <tr>
                     <th>Зүсэгдсэн</th>
                  </tr>
                  <tr>
                     <th>Шүүс гарсан</th>
                  </tr>
                  <tr>
                     <th>Идээлсэн</th>
                  </tr>
                  <tr>
                     <th>Тууралттай</th>
                  </tr>
                  <tr>
                     <th>Цооролттой</th>
                  </tr>
                  <tr>
                     <th rowSpan={6}>Арьсны эрүүл ахуй</th>
                     <th rowSpan={2}>Бүх биеийн угаалга хийх</th>
                     <th>Шаардлагагүй</th>
                  </tr>
                  <tr>
                     <th>Шаардлагатай</th>
                  </tr>
                  <tr>
                     <th rowSpan={2}>Хэсэгчилсэн угаалга хийх</th>
                     <th>Шаардлагагүй</th>
                  </tr>
                  <tr>
                     <th>Шаардлагатай</th>
                  </tr>
                  <tr>
                     <th rowSpan={2}>Ор цэвэрлэх</th>
                     <th>Шаардлагагүй</th>
                  </tr>
                  <tr>
                     <th>Шаардлагатай</th>
                  </tr>
                  <tr>
                     <th rowSpan={3}>Мэс заслын шарх</th>
                     <th rowSpan={2}>Боолт</th>
                     <th>Цэвэр</th>
                  </tr>
                  <tr>
                     <th>Бохир</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Гуурстай</th>
                  </tr>
                  <tr>
                     <th rowSpan={3} colSpan={2}>
                        Уян зүү тавьсан хэсэг
                     </th>
                     <th>Хэвийн</th>
                  </tr>
                  <tr>
                     <th>Улайсан</th>
                  </tr>
                  <tr>
                     <th>Хавдсан</th>
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
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                     <td>5</td>
                     <td>6</td>
                     <td>7</td>
                     <td>8</td>
                     <td
                        rowSpan={21}
                        className="text-start"
                        style={{ width: 115 }}
                     >
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
                  </tr>
                  <tr>
                     <th colSpan={2}>Сэтгэл түгшсэн байдалтай</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Ухаангүй</th>
                  </tr>
                  <tr>
                     <th rowSpan={3}>Орчиндоо (Бусадтай)</th>
                     <th colSpan={2}>Харьцаатай</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Cул</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Харьцаагүй</th>
                  </tr>
                  <tr>
                     <th rowSpan={2}>Өвдөлт</th>
                     <th colSpan={2}>Өвдөлтгүй</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Өвдөлттэй</th>
                  </tr>
                  <tr>
                     <th rowSpan={3}>Үе мөчний хөдөлгөөн</th>
                     <th colSpan={2}>Хэвийн</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Хязгаардлагдмал</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Үений хавдалттай</th>
                  </tr>
               </thead>
            </Table>
         </page>
      </>
   );
}
export default Page1;
