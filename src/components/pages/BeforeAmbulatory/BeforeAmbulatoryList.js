//Амбулаторийн үзлэгийн өмнөх жагсаалт
import React, { useState } from 'react';
import { Button, Card, Modal, Tabs } from 'antd';
//
import Ambulatory from './Lists/Ambulatory';
import PatientList from './Lists/PatientList';
import PreOrder from './Lists/PreOrder';
//
// tester hiiw
import Index from '../EMR/InPatient/document/Ambulatory/Index';
import InIndex from '../EMR/InPatient/document/DemoIndex';
//
export default function BeforeAmbulatoryList() {
   const items = [
      {
         label: 'Амбулатори',
         key: '1',
         children: <Ambulatory />
      },
      {
         label: 'Урьдчилсан сэргийлэх',
         key: '2',
         children: <PreOrder />
      },
      {
         label: 'Хэвтэн',
         key: '3',
         children: <PatientList />
      }
   ];
   const [open, setOpen] = useState(false);
   const [inOpen, setInOpen] = useState(false);
   return (
      <div>
         <div className="flex flex-wrap">
            <div className="w-full pb-2">
               <Card
                  className="header-solid max-h-max rounded-md"
                  bodyStyle={{
                     paddingTop: 10,
                     paddingLeft: 10,
                     paddingRight: 10,
                     paddingBottom: 10
                  }}
               >
                  <Button
                     type="primary"
                     className="mr-2"
                     onClick={() => setOpen(true)}
                  >
                     Амбулатори маягт
                  </Button>
                  <Button type="primary" onClick={() => setInOpen(true)}>
                     Хэвтэн маягт
                  </Button>
               </Card>
            </div>
         </div>
         <Modal
            title="Амбулатори"
            open={open}
            onCancel={() => setOpen(false)}
            width="80%"
         >
            <Index />
         </Modal>
         <Modal
            title="Хэвтэн"
            open={inOpen}
            onCancel={() => setInOpen(false)}
            width="80%"
         >
            <InIndex />
         </Modal>
         <Tabs type="card" items={items} />
      </div>
   );
}
