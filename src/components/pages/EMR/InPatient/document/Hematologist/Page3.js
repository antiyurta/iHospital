import { Table } from 'react-bootstrap';
import React from 'react';
function Page3() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="document">
               <thead>
                  <tr>
                     <td colSpan={3}>
                        <p>Бактер, вирус, маркерийн шинжилгээ:</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                     <td colSpan={3}>
                        <p>Дүгнэлт:</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={6}>Шээсэнд</td>
                  </tr>
                  <tr>
                     <td>Огноо</td>
                     <td></td>
                     <td></td>
                     <td rowSpan={10} colSpan={3}>
                        <p>Дүгнэлт:</p>
                     </td>
                  </tr>
                  <tr>
                     <td>Сахар</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>pH</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Уураг</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Цагаан эс</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Улаан эс</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Хувийн жин</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Гемосидерин</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Бенс-жонс уураг</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Гемоглобин</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td colSpan={6}>Цусанд:</td>
                  </tr>
                  <tr>
                     <td>Огноо</td>
                     <td></td>
                     <td></td>
                     <td colSpan={3} rowSpan={3}>
                        <p>Дүгнэлт:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td>Кумбсын шууд урвал</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Кумбсын шууд бус урвал</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td colSpan={3}>
                        <p>Бусад(PCR, молекул генетик цитогенетик, урсгал цитометр):</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                     <td>
                        <p>Дүгнэлт:</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={3}>Иммунологи</td>
                     <td colSpan={3}></td>
                  </tr>
                  <tr>
                     <td>Огноо</td>
                     <td></td>
                     <td></td>
                     <td colSpan={3} rowSpan={4}>
                        <p>Дүгнэлт:</p>
                     </td>
                  </tr>
                  <tr>
                     <td>IgG</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>IgM</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>IgA</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td colSpan={6}>
                        <p>Цусны бусад эмгэг өөрчлөлтүүд:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={6}>
                        <p>Эмнэл зүйн онош:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={6}>
                        <p>Зөвлөгөө, эмчилгээ:</p>
                     </td>
                  </tr>
                  <tr>
                     <th colSpan={6}>
                        <div className="flex flex-wrap">
                           <div className="basis-1/3">
                              <p className="font-normal">Эмчийн нэр:</p>
                           </div>
                           <div className="basis-1/3">
                              <p className="font-normal">Гарын үсэг:</p>
                           </div>
                           <div className="basis-1/3">
                              <p className="font-normal">он 2012 сар 17 өдөр 22</p>
                           </div>
                        </div>
                     </th>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page3;
