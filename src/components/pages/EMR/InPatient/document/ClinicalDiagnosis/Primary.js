import { Table } from 'react-bootstrap';

function Primary() {
   return (
      <page size="A4">
         <Table bordered className="document mb-0">
            <thead>
               <tr>
                  <th className="text-center">КЛИНИКИЙН ОНОШИЙН ҮНДЭСЛЭЛ</th>
               </tr>
               <tr>
                  <td>
                     <p className="font-bold">Зовиураас:</p>
                  </td>
               </tr>
               <tr>
                  <td>
                     <p className="font-bold">Бодит үзлэгээс:</p>
                  </td>
               </tr>
               <tr>
                  <td>
                     <p className="font-bold">Лабораторийн шинжилгээ:</p>
                  </td>
               </tr>
               <tr>
                  <td>
                     <p className="font-bold">Үйл оношийн шинжилгээ:</p>
                  </td>
               </tr>
               <tr>
                  <td>
                     <p className="font-bold">Үндсэн онош:</p>
                  </td>
               </tr>
               <tr>
                  <td>
                     <p className="font-bold">Дагалдах онош:</p>
                  </td>
               </tr>
               <tr>
                  <td>
                     <p className="font-bold">Хүндрэл:</p>
                  </td>
               </tr>
               <tr>
                  <th>
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
      </page>
   );
}
export default Primary;
