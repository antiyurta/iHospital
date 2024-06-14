import React from 'react';
import Order from '../Order/Order';

export default function Ocs({ selectedPatient, UsageType, handleClick }) {
   const categories = [
      {
         //omnoh jor
         name: 'RecentRecipe',
         label: 'Өмнөх жор'
      },
      {
         //set order
         name: 'SetOrder',
         label: 'СетОрдер'
      },
      {
         //em
         name: 'Medicine',
         label: 'Эм'
      },
      {
         //shinejilgee
         name: 'Examination',
         label: 'Шинжилгээ'
      },
      {
         //onshilgoo
         name: 'Xray',
         label: 'Оношилгоо'
      },
      {
         //emchilgee
         name: 'Treatment',
         label: 'Эмчилгээ'
      },
      {
         //hagalgaa mes
         name: 'Surgery',
         label: 'Мэс засал'
      },
      {
         // mes ajilbar
         name: 'Operation',
         label: 'Мэс ажилбар'
      },
      {
         //bagts
         name: 'Package',
         label: 'Багц'
      },
      {
         //hewtuuleh
         name: 'Inpatient',
         label: 'Хэвтэн эмчлүүлэх'
      },
      {
         //dawtan
         name: 'Reinspection',
         label: 'Давтан цаг захиалах'
      }
   ];

   return (
      <div className="items-center">
         <Order
            isDoctor={true}
            isPackage={false}
            selectedPatient={selectedPatient}
            usageType={UsageType}
            categories={categories}
            save={handleClick}
         />
      </div>
   );
}
