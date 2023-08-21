import React from 'react';
import { Table } from 'react-bootstrap';

//маягт ЭИМ-5.2
function EIM5_2() {
   const styles = {
      rowCells: {
         borderWidth: 1,
         borderStyle: 'solid',
         width: 20,
         height: 20,
         lineHeight: 1,
         minWidth: 15
      },
      generalText: {
         fontSize: 12
      },
      rowStyle: {
         fontSize: 12,
         marginTop: 5
      },
      leftText: {
         padding: 2,
         verticalAlign: 'middle',
         fontSize: 12
      },
      centerText: {
         padding: 2,
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 12
      },
      flexContainer: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         fontSize: 12
      },
      flexRow: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between'
      },
      topText: {
         padding: 2,
         fontSize: 12
      },
      rowCellWithText: {
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
         fontSize: 12,
         padding: 0,
         lineHeight: 1,
         marginTop: 5
      },
      verticalText: {
         writingMode: 'vertical-rl',
         verticalAlign: 'middle',
         padding: 5,
         rotate: '180deg',
         maxHeight: 100,
         maxWidth: 50,
         lineHeight: 1,
         fontSize: 12
      }
   };
   return (
      <>
         <div className="page">
            <div className="subpage">
               <div style={styles.flexContainer}>
                  <div style={{ display: 'flex' }}></div>
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
                           <span style={{ fontWeight: 'bold', fontSize: 12 }}>
                              Эрүүл мэндийн бүртгэлийн маягт ЭИМ-5.2
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 10 }}>
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>
                     УМАЙН ХҮЗҮҮНИЙ ХОРТ ХАВДРЫН ЭРТ ИЛРҮҮЛЭГ ҮЗЛЭГИЙН ХУУДАС
                  </span>
               </div>
               <div style={{ fontSize: 12, fontStyle: 'italic', textAlign: 'right' }}>Эх барих, эмэгтэйчүүдийн эмч</div>
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.topText, ...{ width: '50%' } }} colSpan={2}>
                           1. Эмнэлэгийн нэр, код
                           <div style={{ display: 'flex', marginLeft: 15 }}>
                              <div style={styles.rowCells}></div>
                              <div style={styles.rowCells}></div>
                              <div style={styles.rowCells}></div>
                              <div style={styles.rowCells}></div>
                              <div style={styles.rowCells}></div>
                              <div style={styles.rowCells}></div>
                              <div style={styles.rowCells}></div>
                              <div style={styles.rowCells}></div>
                              <div style={styles.rowCells}></div>
                              <div style={styles.rowCells}></div>
                           </div>
                        </td>
                        <td style={{ ...styles.leftText, ...{ width: '50%' } }} colSpan={3}>
                           2. РД
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText} colSpan={2}>
                           3.Эцэг, эхийн нэр:<div>&nbsp;</div>
                        </td>
                        <td style={styles.topText} colSpan={3}>
                           4.Өөрийн нэр:
                           <div>&nbsp;</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>5. Төрсөн ______ он _____ сар _____ өдөр</td>
                        <td style={styles.topText} rowSpan={2}>
                           7. Гэр бүлийн байдал:
                           <div style={styles.leftText}> Огт гэрлээгүй</div>
                           <div style={styles.leftText}> Батлуулсан гэр бүлтэй</div>
                           <div style={styles.leftText}> Батлуулаагүй гэр бүлтэй</div>
                           <div style={styles.leftText}> Тусгаарласан</div>
                           <div style={styles.leftText}> Цуцалсан</div>
                           <div style={styles.leftText}> Бэлбэсэн</div>
                        </td>
                        <td style={styles.leftText} rowSpan={2}>
                           8. Боловсрол:
                           <div style={styles.leftText}> Боловсролгүй</div>
                           <div style={styles.leftText}> Бага</div>
                           <div style={styles.leftText}> Суурь боловсрол</div>
                           <div style={styles.leftText}> Бүрэн дунд</div>
                           <div style={styles.leftText}> Мэргэжлийн болон техникийн</div>
                           <div style={styles.leftText}> Дипломын</div>
                           <div style={styles.leftText}> Бакалавр</div>
                           <div style={styles.leftText}> Магистр</div>
                           <div style={styles.leftText}> Доктор</div>
                        </td>
                        <td style={styles.topText} colSpan={2} rowSpan={2}>
                           9. Мэргэжил:
                           <div>&nbsp;</div>
                           <div>&nbsp;</div>
                           <div>&nbsp;</div>
                           <div style={styles.leftText}>10.Албан тушаал, ажлын газар</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>6. Нас ________</td>
                     </tr>
                     <tr>
                        <td rowSpan={2} colSpan={2}>
                           <div style={styles.leftText}>11. Тогтмол хаяг:</div>
                           <div style={styles.leftText}>Аймаг/хот: __________________________________</div>
                           <div style={styles.leftText}>Сум/дүүрэг: _________________________________</div>
                           <div style={styles.leftText}>Баг/хороо __________________________________</div>
                           <div style={styles.leftText}>Гудамж/Байшин: ___________________________</div>
                           <div style={styles.leftText}>тоот___________</div>
                           <div style={styles.leftText}>Утас: _____________</div>
                        </td>
                        <td style={styles.topText} colSpan={3}>
                           Асуумжийн хэсэг:
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>
                           12. Урьд нь өрх, сум тосгоны ЭМТ-д илрүүлэг үзлэгт хамрагдсан уу?
                           <div style={styles.leftText}> Тийм</div>
                           <div style={styles.leftText}> Үгүй</div>
                        </td>
                        <td colSpan={3} style={styles.topText}>
                           13.Цэвэршсэн эсэх:
                           <div style={styles.leftText}> Тийм  Үгүй</div>
                           <div style={styles.leftText}>Тийм бол хэдэн онд</div>
                           <div style={styles.leftText}>__________________</div>
                           <div style={styles.leftText}>14. Сүүлийн биеийн юм ирсэн эхний өдөр:</div>
                           <div style={styles.leftText}>______ он ____ сар ___ өдөр</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText}>
                           15. Жирэмслэлт, төрөлтийн байдал:
                           <div style={styles.leftText}>Жирэмслэлтийн тоо ______</div>
                           <div style={styles.leftText}>Төрөлтийн тоо ______</div>
                           <div style={styles.leftText}>Үр хөндөлтийн тоо ______</div>
                           <div style={styles.leftText}>Зулбалтын тоо ______</div>
                        </td>
                        <td style={styles.topText}>
                           16. Зовиур:
                           <div style={styles.leftText}> Бэлгийн хавьтлын үед өвдөх</div>
                           <div style={styles.leftText}> Бэлгийн хавьтлын дараа цус гарах</div>
                           <div style={styles.leftText}> Зовиургүй</div>
                        </td>
                        <td colSpan={2} style={styles.topText}>
                           17. Үтрээнээс ялгадас гардаг уу?
                           <div style={styles.leftText}> Цагаан юм гарах</div>
                           <div style={styles.leftText}> Үнэртэй</div>
                           <div style={styles.leftText}> Цусархаг</div>
                           <div style={styles.leftText}> Идээрхэг</div>
                           <div style={styles.leftText}> Гардаггүй</div>
                        </td>
                        <td style={styles.topText}>
                           18. Жирэмслэлтээс сэргийлэх арга хэрэглэдэг эсэх:
                           <div style={styles.leftText}> Ерөндөг</div>
                           <div style={styles.leftText}> Тарилга</div>
                           <div style={styles.leftText}> Суулгац</div>
                           <div style={styles.leftText}> Бэлгэвч</div>
                           <div style={styles.leftText}> Хэрэглэдэггүй</div>
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           17.Эсийн шинжилгээний дүгнэлт ( Бетэсда ангиллаар):
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           18. Хүний папиллом вирүсийн вакцин хийлгэсэн эсэх:  тийм  үгүй
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           19. Хүний папиллом вирүсийн илрүүлэх шинжилгээ хийлгэсэн эсэх:  тийм  үгүй
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           20. Тийм бол:  эерэг  сөрөг
                        </td>
                     </tr>
                     <tr>
                        <td colSpan={5} style={styles.leftText}>
                           21.Эх барих эмэгтэйчүүдийн үзлэг: /олон сонголттой байж болно/
                        </td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="document" style={{ marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           Үзлэг хийсэн огноо: _______ он ____ сар___өдөр
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} rowSpan={2}>
                           22. Гадна бэлэг эрхтний хөгжил:
                           <div style={styles.leftText}> Зөв</div>
                           <div style={styles.leftText}> Дутуу</div>
                           <div style={styles.leftText}> Эмгэгтэй</div>
                           <div style={styles.leftText}> Уужим</div>
                           <div style={styles.leftText}> Бачуу</div>
                        </td>
                        <td style={styles.leftText} colSpan={5}>
                           23. Умайн хүзүүний харагдах байдал:
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.topText} colSpan={3}>
                           <div style={styles.leftText}> Хэвийн</div>
                           <div style={styles.leftText}> Умайн хүзүүний уулзвар</div>
                           <div style={styles.leftText}>хэсэг бүтэн харагдана</div>
                           <div style={styles.leftText}> Уулзвар хэсэг харагдахгүй</div>
                           <div style={styles.leftText}> Үрэвсэлтэй</div>
                           <div style={styles.leftText}> Шархалсан</div>
                        </td>
                        <td style={styles.topText} colSpan={3}>
                           <div style={styles.leftText}> Ур ургацаг харагдана .... цагийн байрлалд ....хэмжээтэй</div>
                           <div style={styles.leftText}> Цайвар тов харагдана ...цагийн байрлалд ... хэмжээтэй</div>
                           <div style={styles.leftText}> Хавдрын сэжигтэй ... цагийн байрлалд ... хэмжээтэй</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           24. Үтрээний дурангийн шинжилгээ хийсэн үү?  Хийсэн  Хийгээгүй
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           25. Хэрэв хийсэн бол үтрээн дурангийн шинжилгээ хийх талаар үйлчлүүлэгчид таниулж зөвшөөрөл
                           авсан эмчийн нэр, гарын үсэг
                           /..................................../.............................................../
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           26. Үтрээн дурангийн шинжилгээ хийлгэхийг зөвшөөрсөн үйлчлүүлэгчийн нэр гарын үсэг
                           /......................................./........................................../
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           27. Үтрээн дурангийн шинжилгээний дүгнэлтийн хэсэг
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           Шинжилгээ  Хангалтттай  Хангалтгүй
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           Шилжилтийн бүс  Шилжилтийн бүс 1  Шилжилтийн бүс 2  Шилжилтийн бүс 3
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={3}>
                           Умайн хүзүүний өөрчлөлт:
                           <div style={styles.leftText}> Хэвийн</div>
                           <div style={styles.leftText}> Хэвийн бус</div>
                           <div style={styles.leftText}> Хавдар сэжиглэх</div>
                           <div style={styles.leftText}> Бусад өөрчлөлтүүд</div>
                        </td>
                        <td style={styles.leftText} colSpan={3}>
                           Үтрээний өөрчлөлт:
                           <div style={styles.leftText}> Хэвийн</div>
                           <div style={styles.leftText}> Хэвийн бус</div>
                           <div style={styles.leftText}> Хавдар сэжиглэх</div>
                           <div style={styles.leftText}> Бусад өөрчлөлтүүд</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           Эдийн шинжилгээ авах талбай сонгох боломжтой эсэх:  тийм  үгүй
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           Кольпоскоп шинжилгээний урьдчилсан онош :
                           <div style={styles.leftText}>ӨОУА-10 ________________________________</div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           28. Эдийн шинжилгээ авсан эсэх:  Тийм  Үгүй
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           29. Хэрэв тийм бол умайн хүзүүний эдийн шинжилгээ хийх талаар үйлчлүүлэгчид таниулж зөвшөөрөл
                           авсан эмчийн нэр, гарын үсэг
                           /................................../............................................./
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           30. Умайн хүзүүний эдийн шинжилгээ хийлгэхийг зөвшөөрсөн үйлчлүүлэгчийн нэр гарын үсэг
                           /...................................../......................................../
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           31. Эдийн шинжилгээнд сорьц илгээсэн огноо:
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           32. Эдийн шинжилгээний дүгнэлт:
                           <div style={styles.leftText}>
                              Эдийн шинжилгээний дүгнэлт илгээсэн лабораторын нэр, дугаар: .............................
                           </div>
                           <div style={styles.leftText}>
                              Эдийн шинжилгээний хариу хүлээн авсан огноо: _______ он ____ сар___өдөр
                           </div>
                           <div style={styles.leftText}>Эдийн шинжилгээний хариу: </div>
                        </td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={6}>
                           33. (Тохирох хариултын нүдэнд √ тэмдэглэнэ үү)
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>Д/Д</td>
                        <td style={{ ...styles.centerText, ...{ width: 350 } }} colSpan={2}>
                           ДЭМБ-ын ангилал
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.leftText, ...{ width: 350 } }} colSpan={2}></td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>1</td>
                        <td style={{ ...styles.leftText, ...{ width: 350 } }} colSpan={2}>
                           Онош тогтоох боломжгүй
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>6</td>
                        <td style={{ ...styles.leftText, ...{ width: 350 } }} colSpan={2}>
                           CIS /Байран өмөн /
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>2</td>
                        <td style={{ ...styles.leftText, ...{ width: 350 } }} colSpan={2}>
                           Хэвийн
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>7</td>
                        <td style={{ ...styles.leftText, ...{ width: 350 } }} colSpan={2}>
                           SCC /Цөмлөн түрсэн өмөн/
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>3</td>
                        <td style={{ ...styles.leftText, ...{ width: 350 } }} colSpan={2}>
                           CIN 1
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>8</td>
                        <td style={{ ...styles.leftText, ...{ width: 350 } }} colSpan={2}>
                           Аденокарцинома
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>4</td>
                        <td style={{ ...styles.leftText, ...{ width: 350 } }} colSpan={2}>
                           CIN 2
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>9</td>
                        <td style={{ ...styles.leftText, ...{ width: 350 } }} colSpan={2}>
                           Бусад
                        </td>
                     </tr>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}>5</td>
                        <td style={{ ...styles.leftText, ...{ width: 350 } }} colSpan={2}>
                           CIN 3
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 350 } }} colSpan={2}></td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div style={styles.leftText}>34. Эмэгтэйчүүдийн эмчийн дүгнэлт хэсэг</div>
               <div style={styles.leftText}>
                  Төгсгөлийн онош:  Хэвийн  Үрэвсэлтэй  CIN1  CIN2-CIN3  Байран өмөн  Цөмлөн түрсэн өмөн (SCC)
               </div>
               <div style={styles.leftText}>
                  ________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  ___________________________________________________________ӨОУА – 10 ________________
               </div>
               <div style={styles.leftText}>Арга хэмжээ авч эхэлсэн огноо: _______ он ____ сар___өдөр</div>
               <div style={styles.leftText}>35. Авсан арга хэмжээ:</div>
               <div style={styles.leftText}>
                   Давтан шинжилгээ хийх  Дараагийн илрүүлэг үзлэгт хамрагдахыг зөвлөсөн
               </div>
               <div style={styles.leftText}> Шаардлагатай эмийн эмчилгээг зөвлөсөн  LEEP  Конизаци</div>
               <div style={styles.leftText}> ХСҮТ-д эмчилгээ хийлгэхийг зөвлөсөн  Давтан хамрагдалт</div>
               <div style={styles.leftText}>36.Зөвлөмж, тэмдэглэгээ</div>
               <div style={styles.leftText}>
                  ________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  ________________________________________________________________________________________________________________
               </div>
               <div style={styles.leftText}>
                  Эмчийн нэр, дугаар ________________________/ __________________________________
               </div>
               <div style={styles.leftText}>
                  Заавар: Энэхүү маягтыг үзлэг хийсэн тухайн өдөрт нь Эргэн дуудах тогтолцооны програмд шивж оруулна.
                  Давтан авсан эсийн болон эдийн шинжилгээний хариу гарсны дараа дүгнэлтээ гаргаж, үлдсэн асуултуудыг
                  бүрэн бөглөсний дараа маягтыг програмд оруулан, цаасаар аймаг, дүүргийн статистикч (ХБА) эмчид
                  илгээнэ..
               </div>
               <div style={styles.leftText}>
                  Жич: Үйлчлүүлэгч өрх, сумын эрүүл мэндийн төвдөө үзүүлээгүй шууд эмэгтэйчүүдийн кабинетаар үйлчлүүлж,
                  зөвхөн эсийн шинжилгээ авсан тохиолдолд ЭИМ-3- г хөтөлнө. -Түүнчэн төрөлжсөн мэргэжлийн төв, тусгай
                  зөвшөөрөл бүхий хувийн хэвшлийн эмнэлгүүдэд эрт илрүүлэг үзлэг хийсэн хийсэн тохиолдолд эх барих
                  эмэгтэйчүүдийн эмчийн хөтлөх маягтыг хөтөлж, Эргэн дуудах тогтолцооны програмд оруулан мэдээллийн сан
                  үүсгэж , журмйн дагуу мэдээлнэ. Энэхү маягтын дагуу Эрт илрүүлэг эргэн дуудах тогтолцооны програм
                  ажиллах бөгөөд тухай бүрд хөгжүүлэлт хийх болон заавар зөвлөмж өгөх ажлыг ХСҮТ-ийн Хавдрын бүртгэл
                  тандалт эрт илрүүлгийн алба хариуцна.
               </div>
            </div>
         </div>
      </>
   );
}

export default EIM5_2;
