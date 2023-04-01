import { Button, Space } from 'antd';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import AM1B from './AM1B';
import AM13A from './AM13A';
import AM23 from './AM23';
import AM24A from './AM24А';
import AM24B from './AM24Б';
import AM25A from './AM25A';
import AM25B from './AM25B';
import AM26A from './AM26А';
import AM26B from './AM26B';
import AM27 from './AM27';
import AM28A from './AM28А';
import AM29A from './AM29А';
import AM29B from './AM29B';
import AM29C from './AM29C';
import AM7 from './am7';
import AM9A from './am9A';
import AM9B from './AM9B';
import AM9C from './AM9C';
import AM9D from './AM9D';
import AM11 from './AM11';
import AM20 from './АМ20';
import AM21A from './AM21A';
import AM21B from './AM21B';
import AM21C from './AM21C';
import AM21D from './AM21D';
import AM22A from './AM22A';
import AM22B from './AM22B';
import AM22C from './AM22C';
import AM22G from './AM22G';
import AM22D from './AM22D';
import AM22E from './AM22E';
import AM22J from './AM22J';
import AM22Z from './AM22Z';
import AM22I from './AM22I';
import AM22K1 from './AM22K1';
import AM22K2 from './AM22K2';
import AM22L from './AM22L';
import AM22M from './AM22M';

function Index() {
   const [selected, setSelected] = useState(0);
   const items = [
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
                     <Button
                        type="primary"
                        onClick={() => setSelected(index)}
                        key={index}
                     >
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
