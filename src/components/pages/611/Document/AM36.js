import React from 'react';
import { Table } from 'react-bootstrap';

//маягт АМ-36
function AM36() {
   const styles = {
      generalText: {
         fontSize: 12
      },
      leftText: {
         verticalAlign: 'middle',
         fontSize: 12,
         padding: 0,
         paddingLeft: 5
      },
      centerText: {
         textAlign: 'center',
         verticalAlign: 'middle',
         fontSize: 12,
         padding: 0
      },
      leftBold: {
         fontWeight: 'bold',
         fontSize: 12,
         marginTop: 10
      },
      verticalText: {
         writingMode: 'vertical-rl',
         verticalAlign: 'middle',
         padding: 4,
         rotate: '180deg',
         lineHeight: 1,
         fontSize: 12,
         textAlign: 'center'
      }
   };
   return (
      <>
         <div className="page">
            <div className="subpage">
               <span
                  style={{
                     ...styles.generalText,
                     ...{ textAlign: 'right', display: 'block' }
                  }}
               >
                  Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
               </span>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     justifyContent: 'space-between'
                  }}
               >
                  <div style={styles.leftBold}>Эмнэлгийн нэр: ______________________</div>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'right'
                     }}
                  >
                     <span style={styles.generalText}>A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</span>
                     <span style={{ fontWeight: 'bold', fontSize: 14 }}>Эрүүл мэндийн бүртгэлийн маягт АМ-36</span>
                  </div>
               </div>

               <div
                  style={{
                     textAlign: 'center',
                     marginTop: 15,
                     marginBottom: 15,
                     lineHeight: 1
                  }}
               >
                  <span style={{ fontWeight: 'bold', fontSize: 16 }}>
                     БҮХ НИЙТЭЭР ТЭМДЭГЛЭХ БАЯР, ТЭМДЭГЛЭЛТ ӨДРИЙН АМРАЛТЫН ҮЕИЙН ЭМНЭЛГИЙН ТУСЛАМЖ, ҮЙЛЧИЛГЭЭГ МЭДЭЭЛЭХ
                     БҮРТГЭЛ
                  </span>
               </div>
               <Table bordered className="document" style={{ marginTop: 0, marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td style={{ ...styles.centerText, ...{ width: 25 } }}>№</td>
                        <td colSpan={5} style={{ ...styles.centerText, ...{ width: 200 } }}>
                           Үзүүлэлт
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 25 } }}>№</td>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>Өрх сумын эрүүл мэндийн төв</td>
                        <td style={{ ...styles.centerText, ...{ width: 60 } }}>Аймаг, дүүргийн нэгдсэн эмнэлэг</td>
                        <td style={{ ...styles.centerText, ...{ width: 75 } }}>
                           Төв эмнэлэг, тусгай мэргэшлийн төвүүд
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}>Бусад</td>
                        <td style={{ ...styles.centerText, ...{ width: 60 } }}>Нийт дүн</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>А</td>
                        <td colSpan={5} style={styles.centerText}>
                           Б
                        </td>
                        <td style={styles.centerText}>В</td>
                        <td style={styles.centerText}>1</td>
                        <td style={styles.centerText}>2</td>
                        <td style={styles.centerText}>3</td>
                        <td style={styles.centerText}>4</td>
                        <td style={styles.centerText}>5</td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>1</td>
                        <td colSpan={5} style={styles.leftText}>
                           Төрсөн эхийн тоо
                        </td>
                        <td style={styles.centerText}>1</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>2</td>
                        <td colSpan={5} style={styles.leftText}>
                           Амьд төрсөн нярай
                        </td>
                        <td style={styles.centerText}>2</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>3</td>
                        <td colSpan={5} style={styles.leftText}>
                           Амьгүй төрсөн хүүхэд
                        </td>
                        <td style={styles.centerText}>3</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>4</td>
                        <td colSpan={5} style={styles.leftText}>
                           Нас барсан хүний тоо
                        </td>
                        <td style={styles.centerText}>4</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>5</td>
                        <td colSpan={5} style={styles.leftText}>
                           Үүнээс: эмнэлэгт
                        </td>
                        <td style={styles.centerText}>5</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>6</td>
                        <td colSpan={5} style={styles.leftText}>
                           Хоног болоогүй нас баралт
                        </td>
                        <td style={styles.centerText}>6</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>7</td>
                        <td colSpan={5} style={styles.leftText}>
                           1 хүртэлх насны хүүхдийн эндэгдэл
                        </td>
                        <td style={styles.centerText}>7</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>8</td>
                        <td colSpan={5} style={styles.leftText}>
                           1-5 хүртэлх насны хүүхдийн эндэгдэл
                        </td>
                        <td style={styles.centerText}>8</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>9</td>
                        <td colSpan={5} style={styles.leftText}>
                           Осол гэмтлийн улмаас нас барсан хүний тоо
                        </td>
                        <td style={styles.centerText}>9</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td rowSpan={6} style={styles.centerText}>
                           10
                        </td>
                        <td rowSpan={5} style={{ ...styles.verticalText, ...{ width: 100 } }}>
                           Үүнээс
                        </td>
                        <td colSpan={4} style={styles.leftText}>
                           Зам тээврийн ослоор
                        </td>
                        <td style={styles.centerText}>10</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           Хөлдөлт, осголт
                        </td>
                        <td style={styles.centerText}>11</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={2} rowSpan={3} style={styles.leftText}>
                           Хордлогоор
                        </td>
                        <td style={styles.leftText} colSpan={2}>
                           Архины шалтгаант
                        </td>
                        <td style={styles.centerText}>12</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Хоолны
                        </td>
                        <td style={styles.centerText}>13</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={2}>
                           Бусад
                        </td>
                        <td style={styles.centerText}>14</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText} colSpan={5}>
                           Бусад ослоор
                        </td>
                        <td style={styles.centerText}>15</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>11</td>
                        <td colSpan={5} style={styles.leftText}>
                           Амбулаторын нийт үзлэг
                        </td>
                        <td style={styles.centerText}>16</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.centerText}>12</td>
                        <td colSpan={5} style={styles.leftText}>
                           Үүнээс: Томуу, томуу төст өвчний учир
                        </td>
                        <td style={styles.centerText}>17</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td rowSpan={19} style={styles.centerText}>
                           13
                        </td>
                        <td rowSpan={19} style={styles.centerText}>
                           Хүлээн авах, яаралтай тусламжийн тасгаар үйлчлүүлсэн иргэдийн тоо
                        </td>
                        <td rowSpan={9} style={styles.verticalText}>
                           Насанд хүрэгчид
                        </td>
                        <td colSpan={3} style={styles.centerText}>
                           Нийт
                        </td>
                        <td style={styles.centerText}>18</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td rowSpan={6} style={styles.verticalText}>
                           Хэвтсэн
                        </td>
                        <td colSpan={2} style={styles.leftText}>
                           Яаралтай мэс засал
                        </td>
                        <td style={styles.centerText}>19</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td rowSpan={2} style={styles.leftText}>
                           Хордлого
                        </td>
                        <td style={styles.leftText}>Архи</td>
                        <td style={styles.centerText}>20</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Хоол</td>
                        <td style={styles.centerText}>21</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td rowSpan={3} style={styles.leftText}>
                           Осол гэмтэл
                        </td>
                        <td style={styles.leftText}>Авто осол</td>
                        <td style={styles.centerText}>22</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Түлэгдэлт</td>
                        <td style={styles.centerText}>23</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>бусад гэмтэл</td>
                        <td style={styles.centerText}>24</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={styles.leftText}>
                           Буцаасан
                        </td>
                        <td style={styles.centerText}>25</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={styles.leftText}>
                           Нас барсан
                        </td>
                        <td style={styles.centerText}>26</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td rowSpan={10} style={styles.verticalText}>
                           Хүүхэд
                        </td>
                        <td colSpan={3} style={styles.centerText}>
                           Нийт
                        </td>
                        <td style={styles.centerText}>27</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td rowSpan={6} style={styles.verticalText}>
                           Хэвтсэн
                        </td>
                        <td colSpan={2} style={styles.leftText}>
                           Яаралтай мэс засал
                        </td>
                        <td style={styles.centerText}>28</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={2} style={styles.leftText}>
                           Томуу, томуу төст өвчин, амьсгалын замын өвчлөл
                        </td>
                        <td style={styles.centerText}>29</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={2} style={styles.leftText}>
                           Хордлого
                        </td>
                        <td style={styles.centerText}>30</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td rowSpan={3} style={styles.leftText}>
                           Осол гэмтэл
                        </td>
                        <td style={styles.leftText}>Авто осол</td>
                        <td style={styles.centerText}>31</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>Түлэгдэлт</td>
                        <td style={styles.centerText}>32</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>бусад гэмтэл</td>
                        <td style={styles.centerText}>33</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={styles.leftText}>
                           Буцаасан
                        </td>
                        <td style={styles.centerText}>34</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={styles.leftText}>
                           Нас барсан
                        </td>
                        <td style={styles.centerText}>35</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={styles.leftText}>
                           Томуу, амьсгалын замын өвчний амбулаторийн үзлэгт эзлэх хувь
                        </td>
                        <td style={styles.centerText}>36</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td rowSpan={4} style={styles.leftText}></td>
                        <td rowSpan={4} style={styles.leftText}></td>
                        <td colSpan={4} style={styles.centerText}>
                           Нийт
                        </td>
                        <td style={styles.centerText}>37</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td rowSpan={3} style={styles.verticalText}>
                           Хүүхэд
                        </td>
                        <td colSpan={3} style={styles.centerText}>
                           0-5 насны хүүхдийн томуу, амьсгалын замын өвчлөл
                        </td>
                        <td style={styles.centerText}>38</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={styles.centerText}>
                           Хордлого
                        </td>
                        <td style={styles.centerText}>39</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={styles.centerText}>
                           Халдварт өвчин
                        </td>
                        <td style={styles.centerText}>40</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="document" style={{ marginTop: 0, marginBottom: 0 }}>
                  <tbody>
                     <tr>
                        <td rowSpan={7} style={{ ...styles.centerText, ...{ width: 25 } }}>
                           14
                        </td>
                        <td rowSpan={7} style={{ ...styles.centerText, ...{ width: 100 } }}>
                           Түргэн туслам жийн дуудлагын тоо
                        </td>
                        <td colSpan={4} style={styles.centerText}>
                           Нийт
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 25 } }}>41</td>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 60 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 75 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 70 } }}></td>
                        <td style={{ ...styles.centerText, ...{ width: 60 } }}></td>
                     </tr>
                     <tr>
                        <td rowSpan={5} style={styles.verticalText}>
                           Насанд хүрэгчид
                        </td>
                        <td rowSpan={2} style={styles.verticalText}>
                           Осол гэмтэл
                        </td>
                        <td colSpan={2} style={styles.leftText}>
                           Архи
                        </td>
                        <td style={styles.centerText}>42</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={2} style={styles.leftText}>
                           Хоол
                        </td>
                        <td style={styles.centerText}>43</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={styles.leftText}>
                           Төрөх
                        </td>
                        <td style={styles.centerText}>44</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={styles.leftText}>
                           Халдварт өвчин
                        </td>
                        <td style={styles.centerText}>45</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={3} style={styles.leftText}>
                           Бусад
                        </td>
                        <td style={styles.centerText}>46</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           Эмч очихоос өмнө нас барсан
                        </td>
                        <td style={styles.centerText}>47</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td rowSpan={5} style={styles.leftText}>
                           15
                        </td>
                        <td rowSpan={5} style={styles.centerText}>
                           Орон нутагт гарсан олныг хамарсан аюулд өртсөн хүний тоо
                        </td>
                        <td colSpan={4} style={styles.leftText}>
                           Осол, гэмтэл
                        </td>
                        <td style={styles.centerText}>48</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           Хордлого
                        </td>
                        <td style={styles.centerText}>49</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           Түлэгдэл
                        </td>
                        <td style={styles.centerText}>50</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           Үер, усны аюул
                        </td>
                        <td style={styles.centerText}>51</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td colSpan={4} style={styles.leftText}>
                           Нас баралт
                        </td>
                        <td style={styles.centerText}>52</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                     <tr>
                        <td style={styles.leftText}>16</td>
                        <td colSpan={5} style={styles.leftText}>
                           Зоонозын өвчний сэжигтэй тохиолдол
                        </td>
                        <td style={styles.centerText}>53</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                     </tr>
                  </tbody>
               </Table>
               <div style={styles.leftBold}>Мөрийн дагуу: 9= (10+11+12+13+14+15)</div>
            </div>
         </div>
      </>
   );
}

export default AM36;
