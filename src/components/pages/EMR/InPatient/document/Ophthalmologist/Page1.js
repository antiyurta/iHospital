import { Table } from 'react-bootstrap';
import General from '../General';

function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-bold">НҮДНИЙ ЭМЧИЙН ҮЗЛЭГ</p>
            <General />
            <Table bordered className="document">
               <thead>
                  <tr className="border-t-0">
                     <th colSpan={4} className="text-center">
                        НҮДНИЙ ҮЗЛЭГ
                     </th>
                  </tr>
                  <tr>
                     <th>VOD</th>
                     <th></th>
                     <th>ph</th>
                     <th></th>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <p className="font-bold">Өнгө танилт:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <p className="font-bold">Нүдний хөдөлгөөн:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <p className="font-bold">Нулимс зам:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <p className="font-bold">Зовхи:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <p className="font-bold">Салст:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <p className="font-bold">Склер:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <p className="font-bold">Эвэрлэг:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <p className="font-bold">Өмнөд таславч:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <p className="font-bold">Солонгон бүрхүүл:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={4}>
                        <p className="font-bold">Хүүхэн хараа:</p>
                        <p>:</p>
                     </td>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page1;
