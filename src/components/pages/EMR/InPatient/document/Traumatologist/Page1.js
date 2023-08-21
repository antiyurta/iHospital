import { Table } from 'react-bootstrap';
import General from '../General';
import React from 'react';
function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-bold">ГЭМТЛИЙН ЭМЧИЙН ҮЗЛЭГ</p>
            <General />
            <p className="text-center font-bold">АНХАН ШАТНЫ ҮЗЛЭГ БОЛОН СЭХЭЭН АМЬДРУУЛАХ</p>
            <Table bordered className="document">
               <thead>
                  <tr>
                     <th>A</th>
                     <th className="text-center">Амьсгалын зам болон хүзүү нуруу</th>
                  </tr>
                  <tr>
                     <td></td>
                     <td>
                        <p>Амьсгалын зам чөлөөтэй</p>
                        <p>Амьсгалж байгаа байдал</p>
                        <p>Эрүү нүүрний гэмтэл</p>
                        <p>Эмчилгээ:</p>
                        <p>:</p>
                        <p>Хүзүү, нурууны үнэлгээ:</p>
                        <p>:</p>
                        <p>Хүзүү, нурууны хөдөлгөөн хорих:</p>
                     </td>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="document">
               <thead>
                  <tr>
                     <th rowSpan={5}>B</th>
                     <th className="text-center" colSpan={6}>
                        Амьсгалын болон цээжинд өгөа үнэлгээ
                     </th>
                  </tr>
                  <tr>
                     <td>Амьсгал</td>
                     <td>Тусламжтай</td>
                     <td>Өөрөө</td>
                     <td className="w-6"></td>
                     <td>Амьсгалын аппарат</td>
                     <td>Тийм/үгүй</td>
                  </tr>
                  <tr>
                     <td colSpan={2}>Цээж рүү нэвтэрсэн гэмтэл</td>
                     <td>Тийм Үгүй</td>
                     <td></td>
                     <td colSpan={2}>Хэмжээ:</td>
                  </tr>
                  <tr>
                     <td colSpan={3}>Үзлэг:</td>
                     <td></td>
                     <td colSpan={2} rowSpan={2}></td>
                  </tr>
                  <tr>
                     <td colSpan={3}>Эмчилгээ:</td>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page1;
