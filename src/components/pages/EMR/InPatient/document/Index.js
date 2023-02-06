// import Endocrinology from './Endocrinology';
import Endocrinology from './Endocrinology/Index'; // // ДОТООД ШҮҮРЭЛ СУДЛАЛЫН ЭМЧИЙН ҮЗЛЭГ
import Rebuildd from './Rebuild'; // СЭРГЭЭН ЗАСАХЫН ЭМЧИЙН ҮЗЛЭГ
import InternalMedicine from './InternalMedicine/Index'; // ДОТРЫН ЭМЧИЙН ҮЗЛЭГ
import Otolaryngologist from './Otolaryngologist/Index'; // ЧИХ ХАМАР ХООЛОЙН ЭМЧИЙН ҮЗЛЭГ
import Traditional from './Traditional/Index'; // Уламжлалт
import Cardiologist from './Cardiologist/Index'; // ЗҮРХНИЙ ЭМЧИЙН ҮЗЛЭГ
import Traumatologist from './Traumatologist/Index'; // ГЭМТЛИЙН ЭМЧИЙН ҮЗЛЭГ
import Gynecologist from './Gynecologist/Index'; // Эмэгтэйчүүд
import GeneralPhysical from './GeneralPhysical/Index'; //Ерөнхий үзлэг
import Dermatologist from './Dermatologist/Index'; // арьсны эмч
import Hematologist from './Hematologist/Index'; // цусны эмч
import Ophthalmologist from './Ophthalmologist/Index'; // нүдний эмч
import Gastroenterologist from './Gastroenterologist/Index'; // хоол боловсруулах эрхтний
import Neurologist from './Neurologist/Index'; // Мэдрэлийн эмчийн үзлэг
import Rebuild from './Rebuild/Index';
import { Button } from 'antd';
import Painstory from './painStory/Index';

function Index({ handleClick }) {
   /// id nas depId ym ennes hamarch hewleh maygt oor2 bn
   const items = [
      {
         label: 'ДОТРЫН ЭМЧИЙН ҮЗЛЭГ',
         key: 1,
         children: <Painstory id={1} />
      }
   ];
   return (
      <>
         {/* {data.inpatientRequestId === 31 && <Rebuild data={data} />} */}
         {/* {id === 31 && <Rebuild data={data} />} */}
         {/* {id === 2 && <Endocrinology data={data} />} */}
         {/* <Rebuild data={data} /> */}
         {items.map((item) => {
            return (
               <Button key={item.key} onClick={() => handleClick(item)}>
                  {item.label}
               </Button>
            );
         })}
      </>
   );
}
export default Index;
