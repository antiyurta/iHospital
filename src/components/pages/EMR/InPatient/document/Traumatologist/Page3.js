import { Table } from 'react-bootstrap';
import Index from '../ClinicalDiagnosis/Index';
import React from 'react';
function Page3() {
   return (
      <div className="page">
         <div className="subpage">
            <div className="flex flex-wrap">
               <div className="basis-3/12 relative">
                  <Table bordered className="document absolute bottom-10">
                     <thead>
                        <tr className="bg-gray-300">
                           <th>Мэдрэлийн рефлекс</th>
                           <th>R</th>
                        </tr>
                        <tr>
                           <td>Biceps</td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>Triceps</td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>Supinator</td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>Knee</td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>Ankle</td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>Plantar</td>
                           <td></td>
                        </tr>
                     </thead>
                  </Table>
               </div>
               <div className="basis-6/12 px-6">
                  <Table bordered className="document">
                     <thead>
                        <tr>
                           <td>
                              <p>:</p>
                              <p>:</p>
                              <p>Хярзан</p>
                              <p>Шээсний сүв</p>
                              <p>Шулуун гэдэсний үзлэг</p>
                              <p>Бүдүүн гэдэсний реплекс</p>
                              <p>Үтрээний үзлэг</p>
                           </td>
                        </tr>
                     </thead>
                  </Table>
                  <Table bordered className="document">
                     <thead>
                        <tr>
                           <th className="text-center bg-gray-300">Нугас, нуруу</th>
                        </tr>
                        <tr>
                           <td>
                              <p>:</p>
                              <p>:</p>
                              <p>:</p>
                              <p>:</p>
                           </td>
                        </tr>
                     </thead>
                  </Table>
                  <Table bordered className="document">
                     <thead>
                        <tr>
                           <th className="text-center">Баруун</th>
                           <th colSpan={2} className="text-center bg-gray-300">
                              Дээд мөч
                           </th>
                           <th className="text-center">Зүүн</th>
                        </tr>
                        <tr>
                           <td colSpan={2}>
                              <p>Ясны гэмтэл</p>
                              <p>Үений гэмтэл</p>
                              <p>Судасны лугшилт</p>
                              <p>Хүч</p>
                              <p>:</p>
                              <p>Тонус</p>
                           </td>
                           <td colSpan={2}>
                              <p>Ясны гэмтэл</p>
                              <p>Үений гэмтэл</p>
                              <p>Судасны лугшилт</p>
                              <p>Хүч</p>
                              <p>:</p>
                              <p>Тонус</p>
                           </td>
                        </tr>
                     </thead>
                  </Table>
                  <Table bordered className="document">
                     <thead>
                        <tr>
                           <th className="text-center">Баруун</th>
                           <th colSpan={2} className="text-center bg-gray-300">
                              Дээд мөч
                           </th>
                           <th className="text-center">Зүүн</th>
                        </tr>
                        <tr>
                           <td colSpan={2}>
                              <p>Ясны гэмтэл</p>
                           </td>
                           <td colSpan={2}>
                              <p>Ясны гэмтэл</p>
                           </td>
                        </tr>
                        <tr>
                           <td colSpan={2}>
                              <p>Үений гэмтэл</p>
                           </td>
                           <td colSpan={2}>
                              <p>Үений гэмтэл</p>
                           </td>
                        </tr>
                        <tr>
                           <td colSpan={2}>
                              <p>Судасны лугшилт</p>
                           </td>
                           <td colSpan={2}>
                              <p>Судасны лугшилт</p>
                           </td>
                        </tr>
                        <tr>
                           <td colSpan={2}>
                              <p>Хүч</p>
                           </td>
                           <td colSpan={2}>
                              <p>Хүч</p>
                           </td>
                        </tr>
                        <tr>
                           <td colSpan={2}>
                              <p>Тонус</p>
                           </td>
                           <td colSpan={2}>
                              <p>Тонус</p>
                           </td>
                        </tr>
                     </thead>
                  </Table>
               </div>
               <div className="basis-3/12 relative">
                  <Table bordered className="document absolute bottom-10">
                     <thead>
                        <tr className="bg-gray-300">
                           <th>L</th>
                           <th>Мэдрэлийн рефлекс</th>
                        </tr>
                        <tr>
                           <td></td>
                           <td>Biceps</td>
                        </tr>
                        <tr>
                           <td></td>
                           <td>Triceps</td>
                        </tr>
                        <tr>
                           <td></td>
                           <td>Supinator</td>
                        </tr>
                        <tr>
                           <td></td>
                           <td>Knee</td>
                        </tr>
                        <tr>
                           <td></td>
                           <td>Ankle</td>
                        </tr>
                        <tr>
                           <td></td>
                           <td>Plantar</td>
                        </tr>
                     </thead>
                  </Table>
               </div>
            </div>
            <Index />
         </div>
      </div>
   );
}
export default Page3;
