import { Button } from 'antd';
import React, { useState } from 'react';
//
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

function DemoIndex() {
   const [selected, setSelected] = useState(0);
   const items = [
      {
         title: 'ДОТООД ШҮҮРЭЛ СУДЛАЛЫН ЭМЧИЙН ҮЗЛЭГ',
         children: <Endocrinology />
      },
      {
         title: ' СЭРГЭЭН ЗАСАХЫН ЭМЧИЙН ҮЗЛЭГ',
         children: <Rebuildd />
      },
      {
         title: 'ДОТРЫН ЭМЧИЙН ҮЗЛЭГ',
         children: <InternalMedicine />
      },
      {
         title: 'ЧИХ ХАМАР ХООЛОЙН ЭМЧИЙН ҮЗЛЭГ',
         children: <Otolaryngologist />
      },
      {
         title: 'Уламжлалт',
         children: <Traditional />
      },
      {
         title: 'ЗҮРХНИЙ ЭМЧИЙН ҮЗЛЭГ',
         children: <Cardiologist />
      },
      {
         title: 'ГЭМТЛИЙН ЭМЧИЙН ҮЗЛЭГ',
         children: <Traumatologist />
      },
      {
         title: 'Эмэгтэйчүүд',
         children: <Gynecologist />
      },
      {
         title: 'Ерөнхий үзлэг',
         children: <GeneralPhysical />
      },
      {
         title: 'Aрьсны эмч',
         children: <Dermatologist />
      },
      {
         title: 'Цусны эмч',
         children: <Hematologist />
      },
      {
         title: 'нүдний эмч',
         children: <Ophthalmologist />
      },
      {
         title: 'хоол боловсруулах эрхтний',
         children: <Gastroenterologist />
      },
      {
         title: 'Мэдрэлийн эмчийн үзлэг',
         children: <Neurologist />
      }
   ];
   const Render = () => {
      return items[selected].children;
   };
   return (
      <div className="flex flex-wrap">
         <div className="basis-1/3">
            <div className="grid grid-cols-1 gap-4">
               {items?.map((item, index) => {
                  return (
                     <Button type="primary" onClick={() => setSelected(index)} key={index}>
                        {item.title}
                     </Button>
                  );
               })}
            </div>
         </div>
         <div className="basis-2/3">
            <Render />
         </div>
      </div>
   );
}
export default DemoIndex;
