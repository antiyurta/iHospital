import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';
import General from '../General';
import React from 'react';
function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-bold">ЭМЭГТЭЙЧҮҮДИЙН ЭМЧИЙН ҮЗЛЭГ</p>
            <General />
            <Table bordered className="document">
               <thead>
                  <tr className="border-t-0">
                     <th className="text-center">ЭХ БАРИХ, ЭМЭГТЭЙЧҮҮДИЙН ҮЗЛЭГ</th>
                  </tr>
                  <tr>
                     <td>
                        <div className="flex flex-wrap">
                           <div className="basis-1/2">
                              <p>Анхны биений юм хэдэн настайд ирсэн _ _</p>
                           </div>
                           <div className="basis-1/2">
                              <p>Биеийн юмны мөчлөгийн хоног _ _</p>
                           </div>
                           <div className="basis-1/2">
                              <p>Биеийн юмны үргэлжлэх хугацаа _ _</p>
                           </div>
                           <div className="basis-1/2">
                              <p>Биеийн юмны хэмжээ: бага, дунд, их /зур/</p>
                           </div>
                           <div className="basis-1/2">
                              <p>Сүүлийн биеийн юм хэзээ ирсэн: ______</p>
                           </div>
                           <div className="basis-1/2">
                              <p>Цэвэршсэн: /зур/ тийм, үгүй Хэдэн онд_____</p>
                           </div>
                           <div className="basis-full">
                              <p>Жирэмслэлтийн тоо _ үүнээс төрсөн _ зулбасан _ үр хүндүүлсэн _ _</p>
                           </div>
                           <div className="basis-full">
                              <p>Эх барих, эмэгтэйчүүдийн тусгайлсан үзлэг:</p>
                              <p>_</p>
                              <p>_</p>
                              <p>_</p>
                              <p>_</p>
                              <p>_</p>
                              <p>_</p>
                           </div>
                        </div>
                     </td>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page1;
