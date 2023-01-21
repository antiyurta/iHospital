// import Endocrinology from './Endocrinology';
import Endocrinology from './Endocrinology/Index'; // // ДОТООД ШҮҮРЭЛ СУДЛАЛЫН ЭМЧИЙН ҮЗЛЭГ
import Rebuild from './Rebuild'; // СЭРГЭЭН ЗАСАХЫН ЭМЧИЙН ҮЗЛЭГ
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

function Index({ id, data }) {
   /// id nas depId ym ennes hamarch hewleh maygt oor2 bn
   console.log(id);
   return (
      <>
         {/* {data.inpatientRequestId === 31 && <Rebuild data={data} />} */}
         {/* {id === 31 && <Rebuild data={data} />} */}
         {/* {id === 2 && <Endocrinology data={data} />} */}
         <Gastroenterologist data={data} />
      </>
   );
}
export default Index;
