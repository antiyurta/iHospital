import { CloseOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Input, Select, Table } from 'antd';
import React, { Suspense, useEffect, useState } from 'react';
import { openNofi } from '../../../comman';
const AM1B = React.lazy(() => import('./AM1B'));
const AM8 = React.lazy(() => import('./AM8'));
// nemelt tushaal
const C537M1 = React.lazy(() => import('../Command/537M1')); // tushaal maygt
const FC537M1 = React.lazy(() => import('../Forms/Command/537M1')); // form
// nemelt tushaal
const { Search } = Input;
const { Option } = Select;

const options = [
   {
      value: 1,
      label: 'A/611 AM-1Б',
      docName: 'Эмчийн үзлэгийн бүртгэл'
   },
   {
      value: 2,
      label: 'A/611 AM-8',
      docName: 'Эмнэлгийн магадлагаа'
   },
   {
      value: 3,
      label: 'ЭМС-ын А/537-р тушаалын 1-р хавсралт',
      docName: 'Төвлөрсөн ариутгалын хуудас'
   }
];

export function ReturnById({ type, id, isOpen }) {
   //type ni maygt harulah esvel form harulah
   if (id === 1) {
      return (
         <Suspense fallback={'<div>Loading</div>'}>
            <AM1B />
         </Suspense>
      );
   } else if (id === 2) {
      return (
         <Suspense fallback={'<div>Loading</div>'}>
            <AM8 />
         </Suspense>
      );
   } else if (id === 3) {
      return <Suspense fallback={'<div>Loading</div>'}>{type ? <C537M1 /> : <FC537M1 isOpen={isOpen} />}</Suspense>;
   }
}

export function ReturnAll() {
   return options;
}

export function ReturnDetails({ type, oldDocuments, handleClick }) {
   // type = 0 bol list awah 1 bol select
   const [searchValue, setSearchValue] = useState('');
   const [searchValueSelect, setSearchValueSelect] = useState('');
   const [documentId, setDocumentId] = useState(Number);
   const [selectedOptions, setSelectedOptions] = useState([]);
   const filteredOptions = options?.filter((e) => {
      return e.label.toLowerCase().includes(searchValue.toLowerCase());
   });
   const filteredOptionsSelect = options?.filter((e) => {
      return e.docName.toLowerCase().includes(searchValueSelect.toLowerCase());
   });
   const add = (row) => {
      const result = selectedOptions?.find((option) => {
         return option.value === row.value;
      });
      if (result === undefined || result === null) {
         if (selectedOptions?.length === 0) {
            setSelectedOptions([row]);
         } else {
            setSelectedOptions([...selectedOptions, row]);
         }
      } else {
         openNofi('warning', 'Анхааруулга', `${result.label} орсон байна.`);
      }
   };
   const remove = (index) => {
      var arr = [...selectedOptions];
      arr.splice(index, 1);
      setSelectedOptions(arr);
   };
   useEffect(() => {
      if (type === 1) {
         if (oldDocuments === undefined || oldDocuments === null) {
            setSelectedOptions([]);
         } else {
            setSelectedOptions(oldDocuments);
         }
      }
   }, [oldDocuments]);
   if (type === 0) {
      return (
         <div className="flex flex-row gap-3">
            <div className="sm:w-full md:w-1/12 lg:w-1/12">
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     gap: '6px'
                  }}
               >
                  <div>
                     <Input
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Хайх"
                        style={{
                           width: '100%'
                        }}
                     />
                  </div>
                  {filteredOptions?.map((option, index) => {
                     return (
                        <button
                           style={{
                              border: '1px solid black'
                           }}
                           key={index}
                           onClick={() => setDocumentId(option.value)}
                        >
                           {option.label}
                        </button>
                     );
                  })}
               </div>
            </div>
            <div className="sm:w-full md:w-11/12 lg:w-11/12">
               <div
                  style={{
                     transform: 'scale(0.7)',
                     transformOrigin: 'top center'
                  }}
               >
                  <ReturnById type={true} id={documentId} />
               </div>
            </div>
         </div>
      );
   } else if (type === 1) {
      return (
         <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-6">
               <Input onChange={(e) => setSearchValueSelect(e.target.value)} placeholder="Хайх" />
               <Table
                  rowKey={'value'}
                  bordered
                  scroll={{
                     y: 500
                  }}
                  columns={[
                     {
                        title: '№',
                        dataIndex: 'value',
                        width: 40
                     },
                     {
                        title: 'Баримт бичгийн нэр',
                        dataIndex: 'docName'
                     },
                     {
                        title: 'Тушаал шийдвэрийн дугаар',
                        dataIndex: 'label'
                     },
                     {
                        title: '',
                        width: 40,
                        render: (_text, row) => {
                           return (
                              <RightOutlined
                                 style={{
                                    color: 'blue'
                                 }}
                                 onClick={() => add(row)}
                              />
                           );
                        }
                     }
                  ]}
                  dataSource={filteredOptionsSelect}
                  pagination={false}
               />
            </div>
            <div className="grid gap-6">
               <Table
                  rowKey={'value'}
                  bordered
                  scroll={{
                     y: 500
                  }}
                  columns={[
                     {
                        title: '№',
                        dataIndex: 'value',
                        width: 40
                     },
                     {
                        title: 'Баримт бичгийн нэр',
                        dataIndex: 'docName'
                     },
                     {
                        title: 'Тушаал шийдвэрийн дугаар',
                        dataIndex: 'label'
                     },
                     {
                        title: '',
                        width: 40,
                        dataIndex: 'value',
                        render: (_text, _row, index) => {
                           return (
                              <CloseOutlined
                                 style={{
                                    color: 'red'
                                 }}
                                 onClick={() => remove(index)}
                              />
                           );
                        }
                     }
                  ]}
                  dataSource={selectedOptions}
                  pagination={false}
               />
               <Button type="primary" onClick={() => handleClick(selectedOptions)}>
                  Хадгалах
               </Button>
            </div>
         </div>
      );
   }
}
