import React from 'react';
import { Table } from 'react-bootstrap';

function Other() {
   return (
      <page size="A4">
         <Table bordered className="document mb-0">
            <thead>
               <tr>
                  <th className="w-21">Үзлэг хийсэн өдөр, цаг минут</th>
                  <th className="text-center align-middle">ҮЗЛЭГИЙН ТЭМДЭГЛЭЛ</th>
                  <th className="w-36 text-center align-middle">ЭМЧИЛГЭЭ, ХООЛ, СУВИЛГААНЫ ЗААЛТ</th>
               </tr>
            </thead>
         </Table>
      </page>
   );
}
export default Other;
