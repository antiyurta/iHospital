import { Button, Space } from 'antd';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
// import AM1B from './AM1B';
// import AM13A from './AM13A';
// import AM23 from './AM23';
// import AM24A from './AM24А';
// import AM24B from './AM24Б';
// import AM25A from './AM25A';
// import AM25B from './AM25B';
// import AM26A from './AM26А';
// import AM26B from './AM26B';
// import AM27 from './AM27';
// import AM28A from './AM28А';
// import AM29A from './AM29А';
// import AM29B from './AM29B';
// import AM29C from './AM29C';
// import AM7 from './am7';
// import AM9A from './am9A';
// import AM9B from './AM9B';
// import AM9C from './AM9C';
// import AM9D from './AM9D';
// import AM11 from './AM11';
// import AM20 from './АМ20';
// import AM21A from './AM21A';
// import AM21B from './AM21B';
// import AM21C from './AM21C';
// import AM21D from './AM21D';
// import AM22A from './AM22A';
// import AM22B from './AM22B';
// import AM22C from './AM22C';
// import AM22G from './AM22G';
// import AM22D from './AM22D';
// import AM22E from './AM22E';
// import AM22J from './AM22J';
// import AM22Z from './AM22Z';
// import AM22I from './AM22I';
// import AM22K1 from './AM22K1';
// import AM22K2 from './AM22K2';
// import AM22L from './AM22L';
// import AM22M from './AM22M';
// // import AM1V from './AM_1V';
// import AM12A from './AM_12A';
// import AM12B from './AM_12B';
// import AM13AB from './AM_13A_B';
// import AM13V from './AM_13V';
// import AM14A from './AM_14A';
// import AM14B from './AM_14B';
// import AM14V from './AM_14V';
// import AM19 from './AM_19';
// import AM2A from './AM2A';
// import AM2B from './AM2B';
// import AM3 from './AM3';
// import AM4 from './AM4';
// import AM5 from './AM5';
// import AM6 from './AM6';
// import AM8 from './AM8';
// import AM10 from './AM10';
// import AM21V from './AM21V';
// import AM22II from './AM22II';
// import AM22V from './AM22V';
// import AM28А from './AM28А';
// import AM28B from './AM28B';
// import AM29V from './AM29V';
// import AM30A from './AM30A';
// import AM30B from './AM30B';
// import AM33 from './AM33';
// import AM34 from './AM34';
// import AM35 from './AM35';
// import AM37 from './AM37';
// import AM38 from './AM38';
// import AM39 from './AM39';
// import AM40 from './AM40';
// import AM41 from './AM41';
function Index() {
   const [selected, setSelected] = useState(0);
   const items = [
      {
         title: 'AM41',
         children: <AM41 />
      },
      {
         title: 'AM40',
         children: <AM40 />
      },
      {
         title: 'AM39',
         children: <AM39 />
      },
      {
         title: 'AM38',
         children: <AM38 />
      },
      {
         title: 'AM37',
         children: <AM37 />
      },
      {
         title: 'AM35',
         children: <AM35 />
      },
      {
         title: 'AM34',
         children: <AM34 />
      },
      {
         title: 'AM33',
         children: <AM33 />
      },
      {
         title: 'AM30B',
         children: <AM30B />
      },
      {
         title: 'AM30A',
         children: <AM30A />
      },
      {
         title: 'AM29V',
         children: <AM29V />
      },
      {
         title: 'AM28B',
         children: <AM28B />
      },
      {
         title: 'AM22V',
         children: <AM22V />
      },
      {
         title: 'AM22II',
         children: <AM22II />
      },
      {
         title: 'AM21V',
         children: <AM21V />
      },
      {
         title: 'AM10',
         children: <AM10 />
      },
      {
         title: 'AM8',
         children: <AM8 />
      },
      {
         title: 'AM6',
         children: <AM6 />
      },
      {
         title: 'AM5',
         children: <AM5 />
      },
      {
         title: 'AM4',
         children: <AM4 />
      },
      {
         title: 'AM3',
         children: <AM3 />
      },
      {
         title: 'AM2A',
         children: <AM2A />
      },
      {
         title: 'AM2B',
         children: <AM2B />
      },
      {
         title: 'AM19',
         children: <AM19 />
      },
      {
         title: 'AM14V',
         children: <AM14V />
      },
      {
         title: 'AM14B',
         children: <AM14B />
      },
      {
         title: 'AM14A',
         children: <AM14A />
      },
      {
         title: 'AM13V',
         children: <AM13V />
      },
      {
         title: 'AM12A',
         children: <AM12A />
      },
      {
         title: 'AM13A-B',
         children: <AM13AB />
      },
      {
         title: 'AM12A',
         children: <AM12B />
      },
      {
         title: 'AM1В',
         children: <AM1V />
      },
      {
         title: 'AM13A',
         children: <AM13A />
      },
      {
         title: 'AM1B',
         children: <AM1B />
      },
      {
         title: 'AM23',
         children: <AM23 />
      },
      {
         title: 'AM24A',
         children: <AM24A />
      },
      {
         title: 'AM24B',
         children: <AM24B />
      },
      {
         title: 'AM25A',
         children: <AM25A />
      },
      {
         title: 'AM25B',
         children: <AM25B />
      },
      {
         title: 'AM26A',
         children: <AM26A />
      },
      {
         title: 'AM26B',
         children: <AM26B />
      },
      {
         title: 'AM27',
         children: <AM27 />
      },
      {
         title: 'AM28A',
         children: <AM28A />
      },
      {
         title: 'AM29A',
         children: <AM29A />
      },
      {
         title: 'AM29B',
         children: <AM29B />
      },
      {
         title: 'AM29C',
         children: <AM29C />
      },
      {
         title: 'AM7',
         children: <AM7 />
      },
      {
         title: 'AM9A',
         children: <AM9A />
      },
      {
         title: 'AM9B',
         children: <AM9B />
      },
      {
         title: 'AM9C',
         children: <AM9C />
      },
      {
         title: 'AM9D',
         children: <AM9D />
      },
      {
         title: 'AM11',
         children: <AM11 />
      },
      {
         title: 'AM20',
         children: <AM20 />
      },
      {
         title: 'AM21A',
         children: <AM21A />
      },
      {
         title: 'AM21B',
         children: <AM21B />
      },
      {
         title: 'AM21C',
         children: <AM21C />
      },
      {
         title: 'AM21D',
         children: <AM21D />
      },
      {
         title: 'AM22A',
         children: <AM22A />
      },
      {
         title: 'AM22B',
         children: <AM22B />
      },
      {
         title: 'AM22B',
         children: <AM22B />
      },
      {
         title: 'AM22C',
         children: <AM22C />
      },
      {
         title: 'AM22G',
         children: <AM22G />
      },
      {
         title: 'AM22D',
         children: <AM22D />
      },
      {
         title: 'AM22E',
         children: <AM22E />
      },
      {
         title: 'AM22J',
         children: <AM22J />
      },
      {
         title: 'AM22Z',
         children: <AM22Z />
      },
      {
         title: 'AM22I',
         children: <AM22I />
      },
      {
         title: 'AM22K1',
         children: <AM22K1 />
      },
      {
         title: 'AM22K2',
         children: <AM22K2 />
      },
      {
         title: 'AM22L',
         children: <AM22L />
      },
      {
         title: 'AM22M',
         children: <AM22M />
      }
   ];
   const Render = () => {
      return items[selected].children;
   };
   return (
      <div className="flex flex-wrap">
         <div className="basis-1/3">
            <div className="grid grid-cols-4 gap-4">
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

export default Index;
