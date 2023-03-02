import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { getAge } from '../../../../comman';

function Page1({ patientData, form }) {
   let location = useLocation();
   return (
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
                     {form?.map((item, index) => {
                        return (
                           <th key={index} rowSpan={2}>
                              {moment(item.createdAt).format('MM/DD')}
                           </th>
                        );
                     })}
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
                           verticalAlign: 'middle',
                        }}
                     >
                        ӨДӨР ТУТМЫН ҮНЭЛГЭЭ
                     </th>
                     <th
                        rowSpan={21}
                        style={{
                           writingMode: 'vertical-rl',
                           textAlign: 'center',
                           verticalAlign: 'middle',
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
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.breathing === 'Жигд' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.breathing ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
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
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.breathing === 'Өнгөц' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.breathing ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Гүн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.breathing === 'Гүн' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.breathing ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Тоо олширсон</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.breathing ===
                              'Тоо олширсон' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.breathing ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Тоо цөөрсөн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.breathing === 'Тоо цөөрсөн' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.breathing ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={3}>Чимээ</th>
                     <th colSpan={2}>Хэвийн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.noise === 'Хэвийн' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.noise === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={2}>Хэвийн бус</th>
                     <th>Сул</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.noise === 'Сул' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.noise === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Тод</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.noise === 'Тод' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.noise === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={3}>Ханиалгалт</th>
                     <th colSpan={2}>Үгүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.cough === 'Үгүй' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.cough === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Цэргүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.cough === 'Цэргүй' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.cough === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Цэртэй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.cough === 'Цэртэй' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.cough === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={6}>Хаван</th>
                     <th colSpan={2}>Хавангүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.edema === 'Хавангүй' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.edema === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={5}>Хавантай</th>
                     <th>Бүр биеэр</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.edema === 'Бүр биеэр' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.edema === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Нүүрэнд</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.edema === 'Нүүрэнд' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.edema === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Зовхонд</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.edema === 'Зовхонд' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.edema === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Хэвлийд</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.edema === 'Хэвлийд' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.edema === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Шилбэнд</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.edema === 'Шилбэнд' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.edema === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2} rowSpan={2}>
                        Хялгасан судасны дахин дүүрэлт
                     </th>
                     <th>2 секундээс бага</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.capillary ===
                              '2 секундээс бага' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.capillary ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>2 секундээс удаан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.capillary ===
                              '2 секундээс удаан' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.capillary ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={2}>Зүрхний хэм</th>
                     <th colSpan={2}>Жигд</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.heartPoint === 'Жигд' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.heartPoint ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Хэм алдагдсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.respiratory?.heartPoint ===
                              'Хэм алдагдсан' ? (
                                 <CheckOutlined />
                              ) : item.respiratory?.heartPoint ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
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
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.eat === 'Амаар' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.eat === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
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
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.eat === 'Гуурсаар' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.eat === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Бусад замаар (Судсаар........)</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.eat === 'Бусад замаар' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.eat === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={2}>Хоолны дэглэм</th>
                     <th colSpan={2}>Хоол хориогүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.sitiology ===
                              'Хоол хориогүй' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.sitiology ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Хоол хориотой</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.sitiology ===
                              'Хоол хориотой' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.sitiology ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={4}>Хоолны дуршил</th>
                     <th colSpan={2}>Хэвийн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.appetite === 'Хэвийн' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.appetite ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Өөрчлөлттэй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.appetite === 'Өөрчлөлттэй' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.appetite ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Огиулалттай</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.appetite === 'Огиулалттай' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.appetite ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Бөөлжүүлнэ</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.appetite === 'Бөөлжүүлнэ' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.appetite ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={3}>Хэвлий</th>
                     <th colSpan={2}>Хэвийн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.stomach === 'Хэвийн' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.stomach ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Цэрдийсэн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.stomach === 'Цэрдийсэн' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.stomach ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Хонхойж татагдсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.stomach ===
                              'Хонхойж татагдсан' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.stomach ===
                                'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={4}>Өтгөн</th>
                     <th colSpan={2}>Хэвийн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.grease === 'Хэвийн' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.grease === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Хатуу</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.grease === 'Хатуу' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.grease === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Шингэн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.grease === 'Шингэн' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.grease === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Өтгөн өөрчлөгдсөн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.indigestion?.grease ===
                              'Өнгө өөрчлөгдсөн' ? (
                                 <CheckOutlined />
                              ) : item.indigestion?.grease === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
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
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.pee?.peeOut === 'Хэвийн' ? (
                                 <CheckOutlined />
                              ) : item.pee?.peeOut === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
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
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.pee?.peeOut === 'Ихэссэн' ? (
                                 <CheckOutlined />
                              ) : item.pee?.peeOut === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Багассан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.pee?.peeOut === 'Багассан' ? (
                                 <CheckOutlined />
                              ) : item.pee?.peeOut === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={4}>Зовиур</th>
                     <th>Өвдөлттэй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.pee?.peePain === 'Өвдөлттэй' ? (
                                 <CheckOutlined />
                              ) : item.pee?.peePain === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Дүлэлттэй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.pee?.peePain === 'Дүлэлттэй' ? (
                                 <CheckOutlined />
                              ) : item.pee?.peePain === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Тасалдсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.pee?.peePain === 'Тасалдсан' ? (
                                 <CheckOutlined />
                              ) : item.pee?.peePain === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Задгайрсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.pee?.peePain === 'Задгайрсан' ? (
                                 <CheckOutlined />
                              ) : item.pee?.peePain === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={2}>Өнгө, үнэр</th>
                     <th>Өөрчлөлтгүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.pee?.peeColor === 'Өөрчлөлтгүй' ? (
                                 <CheckOutlined />
                              ) : item.pee?.peeColor === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Өөрчлөлттэй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.pee?.peeColor === 'Өөрчлөлттэй' ? (
                                 <CheckOutlined />
                              ) : item.pee?.peeColor === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Шээлгүүргүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.pee?.peeStatus === 'Шээлгүүргүй' ? (
                                 <CheckOutlined />
                              ) : item.pee?.peeStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Шээлгүүртэй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.pee?.peeStatus === 'Шээлгүүртэй' ? (
                                 <CheckOutlined />
                              ) : item.pee?.peeStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
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
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.skinStatus === 'Шээлгүүртэй' ? (
                                 <CheckOutlined />
                              ) : item.skin?.skinStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
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
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.skinStatus === 'Улайсан' ? (
                                 <CheckOutlined />
                              ) : item.skin?.skinStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Хавдсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.skinStatus === 'Хавдсан' ? (
                                 <CheckOutlined />
                              ) : item.skin?.skinStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Зүсэгдсэн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.skinStatus === 'Зүсэгдсэн' ? (
                                 <CheckOutlined />
                              ) : item.skin?.skinStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Шүүс гарсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.skinStatus === 'Шүүс гарсан' ? (
                                 <CheckOutlined />
                              ) : item.skin?.skinStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Идээлсэн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.skinStatus === 'Идээлсэн' ? (
                                 <CheckOutlined />
                              ) : item.skin?.skinStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Тууралттай</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.skinStatus === 'Тууралттай' ? (
                                 <CheckOutlined />
                              ) : item.skin?.skinStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Цооролттой</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.skinStatus === 'Цооролттой' ? (
                                 <CheckOutlined />
                              ) : item.skin?.skinStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={6}>Арьсны эрүүл ахуй</th>
                     <th rowSpan={2}>Бүх биеийн угаалга хийх</th>
                     <th>Шаардлагагүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.bodyWash === 'Шаардлагагүй' ? (
                                 <CheckOutlined />
                              ) : item.skin?.bodyWash === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Шаардлагатай</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.bodyWash === 'Шаардлагатай' ? (
                                 <CheckOutlined />
                              ) : item.skin?.bodyWash === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={2}>Хэсэгчилсэн угаалга хийх</th>
                     <th>Шаардлагагүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.partWash === 'Шаардлагагүй' ? (
                                 <CheckOutlined />
                              ) : item.skin?.partWash === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Шаардлагатай</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.partWash === 'Шаардлагатай' ? (
                                 <CheckOutlined />
                              ) : item.skin?.partWash === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={2}>Ор цэвэрлэх</th>
                     <th>Шаардлагагүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.bedWash === 'Шаардлагагүй' ? (
                                 <CheckOutlined />
                              ) : item.skin?.bedWash === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Шаардлагатай</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.bedWash === 'Шаардлагатай' ? (
                                 <CheckOutlined />
                              ) : item.skin?.bedWash === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={3}>Мэс заслын шарх</th>
                     <th rowSpan={2}>Боолт</th>
                     <th>Цэвэр</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.surgery === 'Цэвэр' ? (
                                 <CheckOutlined />
                              ) : item.skin?.surgery === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Бохир</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.surgery === 'Бохир' ? (
                                 <CheckOutlined />
                              ) : item.skin?.surgery === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Гуурстай</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.surgery === 'Гуурстай' ? (
                                 <CheckOutlined />
                              ) : item.skin?.surgery === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={3} colSpan={2}>
                        Уян зүү тавьсан хэсэг
                     </th>
                     <th>Хэвийн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.targetNeedle === 'Хэвийн' ? (
                                 <CheckOutlined />
                              ) : item.skin?.targetNeedle === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Улайсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.targetNeedle === 'Улайсан' ? (
                                 <CheckOutlined />
                              ) : item.skin?.targetNeedle === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th>Хавдсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.skin?.targetNeedle === 'Хавдсан' ? (
                                 <CheckOutlined />
                              ) : item.skin?.targetNeedle === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
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
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.mind?.mindStatus === 'Хэвийн' ? (
                                 <CheckOutlined />
                              ) : item.mind?.mindStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
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
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.mind?.mindStatus ===
                              'Сэтгэл хөөрлийн байдалтай' ? (
                                 <CheckOutlined />
                              ) : item.mind?.mindStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Сэтгэл түгшсэн байдалтай</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.mind?.mindStatus ===
                              'Сэтгэл түгшсэн байдалтай' ? (
                                 <CheckOutlined />
                              ) : item.mind?.mindStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Ухаангүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.mind?.mindStatus === 'Ухаангүй' ? (
                                 <CheckOutlined />
                              ) : item.mind?.mindStatus === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={3}>Орчиндоо (Бусадтай)</th>
                     <th colSpan={2}>Харьцаатай</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.mind?.roomTemp === 'Харьцаатай' ? (
                                 <CheckOutlined />
                              ) : item.mind?.roomTemp === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Cул</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.mind?.roomTemp === 'Сул' ? (
                                 <CheckOutlined />
                              ) : item.mind?.roomTemp === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Харьцаагүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.mind?.roomTemp === 'Харьцаагүй' ? (
                                 <CheckOutlined />
                              ) : item.mind?.roomTemp === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={2}>Өвдөлт</th>
                     <th colSpan={2}>Өвдөлтгүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.mind?.pain === 'Өвдөлтгүй' ? (
                                 <CheckOutlined />
                              ) : item.mind?.pain === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Өвдөлттэй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.mind?.pain === 'Өвдөлттэй' ? (
                                 <CheckOutlined />
                              ) : item.mind?.pain === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={3}>Үе мөчний хөдөлгөөн</th>
                     <th colSpan={2}>Хэвийн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.mind?.bodyShake === 'Хэвийн' ? (
                                 <CheckOutlined />
                              ) : item.mind?.bodyShake === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Хязгаардлагдмал</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.mind?.bodyShake === 'Хязгаардлагдмал' ? (
                                 <CheckOutlined />
                              ) : item.mind?.bodyShake === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={2}>Үений хавдалттай</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.mind?.bodyShake === 'Үений хавдалттай' ? (
                                 <CheckOutlined />
                              ) : item.mind?.bodyShake === 'Хамаарахгүй' ? (
                                 '/'
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page1;
