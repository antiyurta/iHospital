import { Table } from 'react-bootstrap';

function Index({ form }) {
   return (
      <page size="A4">
         <Table bordered className="document mb-0">
            <thead>
               <tr>
                  <th className="text-center" colSpan={3}>
                     КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ
                  </th>
               </tr>
               <tr>
                  <td colSpan={3}>
                     <p className="font-bold">Үндсэн онош</p>
                  </td>
               </tr>
               <tr>
                  <td colSpan={3}>
                     <p className="font-bold">Дагалдах онош</p>
                  </td>
               </tr>
               <tr>
                  <td colSpan={3}>
                     <p className="font-bold">Хүндрэл</p>
                  </td>
               </tr>
               <tr>
                  <td>
                     <p className="font-bold">Ялган оношлох эмгэгүүд</p>
                     <p className="font-bold">ба хам шинжүүд</p>
                  </td>
                  <td>
                     <p className="font-bold">Хийгдэх</p>
                     <p className="font-bold">шинжилгээ</p>
                  </td>
                  <td>
                     <p className="font-bold">Яаралтай хийгдэх эмчилгээ</p>
                  </td>
               </tr>
               <tr>
                  <th colSpan={3}>
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
export default Index;
