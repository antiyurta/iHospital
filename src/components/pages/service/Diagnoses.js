import { Tabs } from 'antd';
import React from 'react';
import UTable from '../../UTable';
function Diagnoses() {
   const configureCol = (data) => {
      return [
         {
            index: 'code',
            label: 'Код',
            isView: true,
            input: 'input',
            col: 24
         },
         {
            index: 'nameMn',
            label: 'Монгол нэр',
            isView: true,
            input: 'input',
            col: 24
         },
         {
            index: 'nameEn',
            label: 'Англи нэр',
            isView: true,
            input: 'input',
            col: 24
         },
         {
            index: 'nameRu',
            label: 'Орос нэр',
            isView: true,
            input: 'input',
            col: 24
         },
         {
            index: 'type',
            label: 'Төрөл',
            isView: true,
            input: 'select',
            inputData: [
               {
                  id: data.t,
                  label: data.l
               }
            ],
            relIndex: 'label',
            col: 24
         }
      ];
   };
   const Diagnose = ({ title, type }) => (
      <UTable
         title={title}
         url={'reference/diagnose'}
         params={{
            params: {
               types: type
            }
         }}
         column={configureCol({ l: title, t: type })}
         isCreate={true}
         isRead={true}
         isUpdate={true}
         isDelete={true}
         width="50%"
      />
   );
   const items = [
      {
         key: 1,
         label: 'ICD9',
         children: <Diagnose title="ICD9" type={[1]} />
      },
      {
         key: 2,
         label: 'ICD10',
         children: <Diagnose title="ICD10" type={[0]} />
      },
      {
         key: 3,
         label: 'Уламжлалт',
         children: <Diagnose title="Уламжлалт" type={[2]} />
      }
   ];
   return (
      <div>
         <Tabs type="card" items={items} />
      </div>
   );
}
export default Diagnoses;
