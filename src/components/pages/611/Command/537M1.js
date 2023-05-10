import React from 'react';
import { Table } from 'react-bootstrap';

function C537M1(props) {
   return (
      <div className="page-landscape">
         <div className="subpage-landscape">
            <div className="grid grid-cols-3">
               <div></div>
               <div>
                  <p
                     style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                        textAlign: 'center'
                     }}
                  >
                     ТӨВЛӨРСӨН АРИУТГАЛЫН ТАСАГ /НЭГЖ/-Т БАГАЖ, МАТЕРИАЛЫГ ХҮЛЭЭН АВСАН БҮРТГЭЛИЙН ХУУДАС
                  </p>
               </div>
               <div
                  style={{
                     textAlign: 'end'
                  }}
               >
                  <p style={{ fontWeight: 'bold', fontSize: 14 }}>Маягт 1</p>
               </div>
            </div>
            <div className="w-full">
               <p style={{ fontWeight: 'bold', fontSize: 14 }}>Эмнэлэг, Тасгийн нэр:</p>
            </div>
            <div
               className="w-full"
               style={{
                  textAlign: 'end'
               }}
            >
               <p style={{ fontWeight: 'bold', fontSize: 14 }}>
                  20....оны.....сарын.......өдөр..........цаг...........минут
               </p>
            </div>
            <div className="w-full">
               <Table bordered>
                  <thead>
                     <tr>
                        <th>№</th>
                        <th>Багаж материалын нэр</th>
                        <th>Тоо ширхэг</th>
                        <th>Хүлээлгэж өгсөн хүний нэр</th>
                        <th>Хүлээж авсан хүний нэр</th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
}
export default C537M1;
