import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Table } from 'react-bootstrap';

function Page2({ form }) {
   return (
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
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.needle === 'Тавьсан/Сольсон' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                     <td
                        rowSpan={31}
                        className="text-start"
                        style={{ width: 101 }}
                     >
                        <p>#46. ЭМБ-ын мэдлэг олгох шаардлагатай</p>
                        <p>
                           #47. Хувийн эрүүл мэндээ зохицуулах чадваргүй болсон
                        </p>
                        <p>#48. Мэдлэгийн дутагдал</p>
                        <p>
                           #49. Өөрийгөө асрах чадваргүй болсон (усанд орох,
                           хувцаслах, хооллох,бие засах)
                        </p>
                        <p>#50. Алхах чадвар алдагдсан</p>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={3}>Бэхэлгээ хийсэн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.needle === 'Бэхэлгээ хийсэн' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={2} colSpan={3}>
                        Гуурсны арчилгаа
                     </th>
                     <th colSpan={3}>Хийх шаардлагагүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.tubeCare === 'Хийх шаардлагагүй' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Хийгдсэн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.tubeCare === 'Хийгдсэн' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={3} colSpan={3}>
                        Бургүй хийсэн
                     </th>
                     <th colSpan={3}>Цэвэрлэх бургуй/ тосон</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.burgui ===
                              'Цэвэрлэх бургуй/ тосгон' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Эмчилгээний бургуй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.burgui === 'Эмчилгээний бургуй' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Хий гаргах гуурс</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.burgui === 'Хий гаргах гуурс' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={6} colSpan={3}>
                        Хэсэгчилсэн асаргаа
                     </th>
                     <th colSpan={3}>Халуун жин тавьсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.partCare === 'Халуун жин тавьсан' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Хүйтэн жин тавьсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.partCare === 'Хүйтэн жин тавьсан' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Халуун бигнүүр тавьсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.partCare ===
                              'Халуун бигнүүр тавьсан' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Хүйтэн бигнүүр тавьсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.partCare ===
                              'Хүйтэн бигнүүр тавьсан' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Гич тавьсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.partCare === 'Гич тавьсан' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Бумба тавьсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.partCare === 'Бумба тавьсан' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={2} colSpan={3}>
                        ЭМБ/Зөвлөгөө өгөх
                     </th>
                     <th colSpan={3}>Өөрт нь зөвлөгөө өгсөн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.advice ===
                              'Өөрт нь зөвлөгөө өгсөн' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Гэр бүлд нь зөвлөгөө өгсөн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.advice ===
                              'Гэр бүлд нь зөвлөгөө өгсөн' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={2} colSpan={3}>
                        Нөхөн сэргийлэх
                     </th>
                     <th colSpan={3}>Дасгал хөдөлгөөн хийсэн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.reHealt ===
                              'Дасгал хөдөлгөөн хийлгэсэн' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Иллэг массаж хийсэн</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.reHealt === 'Иллэг массаж хийсэн' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={2} colSpan={3}>
                        Байрлал
                     </th>
                     <th colSpan={3}>Сольсон /Цаг/</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.position ===
                              'Иллэг массаж хийсэн' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Солих шаардлагагүй</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.position === 'Солих шаардлагагүй' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
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
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.cwb === 'СУ(сувилагч)' && 'СУ'}
                              {item.daily?.cwb === 'Ө(эмчлүүлэгч өөрөө)' && 'Ө'}
                              {item.daily?.cwb === 'СА(сахиур)' && 'СА'}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Үс угаасан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.whead === 'СУ(сувилагч)' && 'СУ'}
                              {item.daily?.whead === 'Ө(эмчлүүлэгч өөрөө)' &&
                                 'Ө'}
                              {item.daily?.whead === 'СА(сахиур)' && 'СА'}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Үс самнасан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.hair === 'СУ(сувилагч)' && 'СУ'}
                              {item.daily?.hair === 'Ө(эмчлүүлэгч өөрөө)' &&
                                 'Ө'}
                              {item.daily?.hair === 'СА(сахиур)' && 'СА'}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Сахал хуссан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.beard === 'СУ(сувилагч)' && 'СУ'}
                              {item.daily?.beard === 'Ө(эмчлүүлэгч өөрөө)' &&
                                 'Ө'}
                              {item.daily?.beard === 'СА(сахиур)' && 'СА'}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Хувцас сольсон</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.clothes === 'СУ(сувилагч)' && 'СУ'}
                              {item.daily?.clothes === 'Ө(эмчлүүлэгч өөрөө)' &&
                                 'Ө'}
                              {item.daily?.clothes === 'СА(сахиур)' && 'СА'}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Хөл гарын хумс авсан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.nails === 'СУ(сувилагч)' && 'СУ'}
                              {item.daily?.nails === 'Ө(эмчлүүлэгч өөрөө)' &&
                                 'Ө'}
                              {item.daily?.nails === 'СА(сахиур)' && 'СА'}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Амны хөндий, шүд угаасан</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.tooth === 'СУ(сувилагч)' && 'СУ'}
                              {item.daily?.tooth === 'Ө(эмчлүүлэгч өөрөө)' &&
                                 'Ө'}
                              {item.daily?.tooth === 'СА(сахиур)' && 'СА'}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={4}>Хооллосон</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.food === 'СУ(сувилагч)' && 'СУ'}
                              {item.daily?.food === 'Ө(эмчлүүлэгч өөрөө)' &&
                                 'Ө'}
                              {item.daily?.food === 'СА(сахиур)' && 'СА'}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={4} colSpan={3}>
                        Аюулгүй байдал
                     </th>
                     <th colSpan={3}>Онцгой анхаарах тэмдэг</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.security ===
                              'Онцгой анхаарах тэмдэг' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Унаж бэртэхээс сэргийлэх</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.security ===
                              'Унаж бэртэхээс сэргийлэх' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Орны хашлага</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.security === 'Орны хашлага' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>Тэргэнцэр, таяг</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.daily?.security === 'Тэргэнцэр, таяг' ? (
                                 <CheckOutlined />
                              ) : (
                                 <CloseOutlined />
                              )}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={5} colSpan={3}>
                        Нэмэлт
                     </th>
                     <th colSpan={3}>Шинжилгээнд авч явсан</th>
                     {form?.map((item, index) => {
                        return <td key={index}></td>;
                     })}
                     <th rowSpan={5}></th>
                  </tr>
                  <tr>
                     <th colSpan={3}>Өрөө тасаг, шилжүүлсэн</th>
                     {form?.map((item, index) => {
                        return <td key={index}></td>;
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>/</th>
                     {form?.map((item, index) => {
                        return <td key={index}></td>;
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>/</th>
                     {form?.map((item, index) => {
                        return <td key={index}></td>;
                     })}
                  </tr>
                  <tr>
                     <th colSpan={3}>/</th>
                     {form?.map((item, index) => {
                        return <td key={index}></td>;
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={6} colSpan={3}>
                        7. Сувилгааны асуудал - #
                     </th>
                     <th colSpan={4}>1. Амьсгал/Зүрх судас</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.nursing?.breathing === 'Тийм' && (
                                 <CheckOutlined />
                              )}
                              {item.nursing?.breathing === 'Үгүй' && (
                                 <CloseOutlined />
                              )}
                              {item.nursing?.breathing === 'Хамаарахгүй' && '/'}
                           </td>
                        );
                     })}
                     <th rowSpan={6}></th>
                  </tr>
                  <tr>
                     <th colSpan={4}>2. Хоол боловсруулах</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.nursing?.food === 'Тийм' && (
                                 <CheckOutlined />
                              )}
                              {item.nursing?.food === 'Үгүй' && (
                                 <CloseOutlined />
                              )}
                              {item.nursing?.food === 'Хамаарахгүй' && '/'}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={4}>3. Шээс ялгаруулалт</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.nursing?.peeOut === 'Тийм' && (
                                 <CheckOutlined />
                              )}
                              {item.nursing?.peeOut === 'Үгүй' && (
                                 <CloseOutlined />
                              )}
                              {item.nursing?.peeOut === 'Хамаарахгүй' && '/'}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={4}>4. Арьс</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.nursing?.skin === 'Тийм' && (
                                 <CheckOutlined />
                              )}
                              {item.nursing?.skin === 'Үгүй' && (
                                 <CloseOutlined />
                              )}
                              {item.nursing?.skin === 'Хамаарахгүй' && '/'}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={4}>5. Мэдрэл, сэтгэхүйн байдал</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.nursing?.mind === 'Тийм' && (
                                 <CheckOutlined />
                              )}
                              {item.nursing?.mind === 'Үгүй' && (
                                 <CloseOutlined />
                              )}
                              {item.nursing?.mind === 'Хамаарахгүй' && '/'}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th colSpan={4}>6. Өдөр тутмын сувилгаа</th>
                     {form?.map((item, index) => {
                        return (
                           <td key={index}>
                              {item.nursing?.daily === 'Тийм' && (
                                 <CheckOutlined />
                              )}
                              {item.nursing?.daily === 'Үгүй' && (
                                 <CloseOutlined />
                              )}
                              {item.nursing?.daily === 'Хамаарахгүй' && '/'}
                           </td>
                        );
                     })}
                  </tr>
                  <tr>
                     <th rowSpan={2} colSpan={3}>
                        8. Үнэлгээ хийсэн сувилагч
                     </th>
                     <th colSpan={4}>Огноо / Цаг</th>
                     {form?.map((item, index) => {
                        return (
                           <td rowSpan={2} key={index}>
                              <p>{moment(item.createdAt).format('DD/hh')}</p>
                           </td>
                        );
                     })}
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
                              <p>{moment(item.createdAt).format('DD/hh')}</p>
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
                           Тийм* гэж үнэлсэн асуудал сувилгааны төлөвлөгөөнд
                           оруулав. Ангилал бүрээс нэг асуудалтай бол
                        </p>
                        <p>
                           тэрхүү асуудал бүрээр эмчлүүлэгчийн зовиурыг багасгах
                           сувилгааны ажлын төлөвлөлтийг CT-3 хуудсанд
                        </p>
                        <p>тэмдэглэж хэрэгжүүлж дүгнэнэ.</p>
                     </td>
                  </tr>
                  <tr>
                     <th>╳</th>
                     <th>Үгүй</th>
                     <td>
                        <p>
                           Үгүй* бол сувилгааны төлөвлөгөөнд орох асуудал биш
                           гэж үзэх тул сувилгааны төлөвлөгөөнд энэ
                        </p>
                        <p>чиглэлээр хийх ажил төлөвлөгдөхгүй гэж ойлгоно.</p>
                     </td>
                  </tr>
                  <tr>
                     <th>/</th>
                     <th>Хамаарахгүй</th>
                     <td>
                        <p>
                           Тухайн үнэлгээний асуулт эмчлүүлэгчид хамаарахгүй бол
                           тэр бүлгийг бүхэлд нь (/) ташуу зураас татан
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
                           Тухайн бүлэг асуудлыг үнэлж, түүний ард буй
                           сувилгааны асуудлаас тохирох нэг асуудлыг сонгон авч
                        </p>
                        <p>
                           "Сувилгааны асуудал" ангилалын арын тохирох
                           хүснэгтэнд тэмдэглэнэ. Жишээ нь: Ханиалгалт, цэртэй
                           гэж
                        </p>
                        <p>
                           үнэлсэн бол "Амьсгалын замын цэвэршилт алдагдсан"
                           гэсэн асуудлыг сонгон "#3" тэмдгийг тохирох
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
                        Өвдөлттэй бол өвдөлт үнэлэх хуудсыг сонгомолоор авч
                        тухайн эмчлүүлэгчид хэрэглэнэ.
                     </th>
                  </tr>
                  <tr>
                     <td colSpan={2}>
                        <p>
                           Арьсны байдал өөрчлөлттэй гэж үнэлвэл цооролтын
                           удирдамжийг /нэрийг магадлах/ баримтлан сувилах
                           төлөвлөгөөг
                        </p>
                        <p>боловсруулна.</p>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={2}>
                        Шингэний балансыг үнэлэх хуудсыг сонгомолоор авч тухайн
                        эмчлүүлэгчид хэрэглэнэ.
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
   );
}
export default Page2;
