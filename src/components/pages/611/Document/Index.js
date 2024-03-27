import React, { useEffect, useState } from 'react';
import { CloseOutlined, EyeOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { openNofi } from '../../../common';
import { NewInput } from '../../../Input/Input';
import { NewColumn, NewTable } from '../../../Table/Table';
// AM start
import AM1B from './AM1B';
import AM_1V from './AM_1V';
import AM2A from './AM2A';
import AM2B from './AM2B';
import AM3 from './AM3';
import AM4 from './AM4';
import AM5 from './AM5';
import AM6 from './AM6';
import AM7 from './am7';
import AM8 from './AM8';
import AM9A from './am9A';
import AM9B from './AM9B';
import AM9C from './AM9C';
import AM9D from './AM9D';
import AM10 from './AM10';
import AM11 from './AM11';
import AM11H1 from './AM11H1';
import AM11H1_1 from './AM11H1.1';
import AM11H2 from './AM11H2';
import AM_12A from './AM_12A';
import AM12B from './AM_12B';
import AM13A from './AM13A';
import AM13B from './AM13B';
import AM13V from './AM_13V';
import AM14A from './AM_14A';
import AM14B from './AM_14B';
import AM14V from './AM_14V';
import AM15 from './AM15';
import AM16 from './AM16';
import AM17 from './AM17';
import AM18 from './AM18';
import AM19 from './AM_19';
import AM20 from './AM20';
import AM21A from './AM21A';
import AM21B from './AM21B';
import AM21V from './AM21V';
import AM21G from './AM21G';
import AM22A from './AM22A';
import AM22B from './AM22B';
import AM22V from './AM22V';
import AM22G from './AM22G';
import AM22D from './AM22D';
import AM22E from './AM22E';
import AM22J from './AM22J';
import AM22Z from './AM22Z';
import AM22II from './AM22II';
import AM22K from './AM22K1';
import AM22L from './AM22L';
import AM22M from './AM22M';
import AM23 from './AM23';
import AM24A from './AM24A';
import AM24B from './AM24Б';
import AM25A from './AM25A';
import AM25B from './AM25B';
import AM26A from './AM26А';
import AM26B from './AM26B';
import AM27 from './AM27';
import AM28A from './AM28А';
import AM28B from './AM28B';
import AM29A from './AM29A';
import AM29B from './AM29B';
import AM29V from './AM29V';
import AM30A from './AM30A';
import AM30B from './AM30B';
import AM31 from './AM31';
import AM32 from './AM32';
import AM33 from './AM33';
import AM34 from './AM34';
import AM35 from './AM35';
import AM36 from './AM36';
import AM37 from './AM37';
import AM38 from './AM38';
import AM39 from './AM39';
import AM40 from './AM40';
import AM41 from './AM41';
// AM end

import CT1Nuur from './CT_1_nuur';
import CT1Anamnes from './CT_1_ana';
import CT1Dotor from './CT_1_Dotor';
import CT1Nud from './CT_1_Nud';
import CT1Ulamjlalt from './CT_1_Ulamjlalt';
import CT1Medrel from './CT_1_Medrel';
import CT1Chih from './CT_1_Chih';
import CT1Aris from './CT_1_Aris';
import CT1Dotood from './CT_1_Dotood';
import CT1Gemtel from './CT_1_Gemtel';
import CT1Emegtei from './CT_1_Emegtei';
import CT1Tsus from './CT_1_Tsus';
import CT1Setgets from './CT_1_Setgets';
import CT1Hool from './CT_1_Hool';
import CT1Zurh from './CT_1_Zurh';
import CT1ClinalDiagnose from './CT_1_ClinicalDiagnose';
import CT1BaseOfClinicalDiagnose from './CT_1_BaseOfClinicalDiagnose';
import CT1Inspection from './CT_1_Inspection';
import CT1End from './CT_1_End';
import CT32A from './CT32A';
// EIM start
import EIM4_2 from './../EIM/EIM4_2';
import EIM5_2 from './../EIM/EIM5_2';
// EIM end

//CT
import CT1_2H2 from './CT_1_2H2';
import CT1_2H11 from './CT_1_2H11';
import CT1_2H12 from './CT_1_2H12';
import CT1_2H13 from './CT_1_2H13';
import CT1_2H14 from './CT_1_2H14';
//
//
import EMT201_4_2 from '../EMT/EMT201_4_2';
//
import A539H3 from './A539_H3';
//

import options from './options';

import OrganizationDocumentFormService from '../../../../services/organization/documentForm';

// nemelt tushaal
const C537M1 = React.lazy(() => import('../Command/537M1')); // tushaal maygt
const A293 = React.lazy(() => import('../Command/A293')); // ert seremjulleg yaralta
const FC537M1 = React.lazy(() => import('../Forms/Command/537M1')); // form
// nemelt tushaal

class ReturnByIdComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isOpenModal: false
      };
   }
   render() {
      return (
         <>
            <Button
               icon={<EyeOutlined />}
               onClick={() => {
                  this.setState({ isOpenModal: true });
               }}
            />
            <Modal
               title={options?.find((e) => e.value === this.props.value)?.label}
               open={this.state.isOpenModal}
               onCancel={() => this.setState({ isOpenModal: false })}
               width={'90%'}
               bodyStyle={{
                  overflow: 'auto'
               }}
            >
               <ReturnById type={true} id={this.props.value} />
            </Modal>
         </>
      );
   }
}

const NotFound = () => {
   return <div>NotFound</div>;
};

export function ReturnById({ type, id, appointmentId, data }) {
   //type ni maygt harulah esvel form harulah
   if (id === 1) return <AM1B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 2) return <AM_1V type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 3) return <AM2A type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 4) return <AM2B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 5) return <AM3 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 6) return <AM4 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 7) return <AM5 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 8) return <NotFound type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 9) return <AM6 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 10) return <AM7 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 11) return <AM8 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 12) return <AM9A type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 13) return <AM9B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 14) return <AM9C type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 15) return <AM9D type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 16) return <AM10 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 17) return <AM11 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 18) return <AM11H1 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 19) return <AM11H1_1 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 20) return <AM11H2 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 21) return <AM_12A type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 22) return <AM12B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 23) return <AM13A type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 24) return <AM13B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 25) return <AM13V type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 26) return <AM14A type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 27) return <AM14B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 28) return <AM14V type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 29) return <AM15 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 30) return <AM16 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 31) return <AM17 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 32) return <AM18 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 33) return <NotFound type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 34) return <AM19 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 35) return <AM20 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 36) return <AM21A type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 37) return <AM21B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 38) return <AM21V type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 39) return <AM21G type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 40) return <AM22A type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 41) return <AM22B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 42) return <AM22V type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 43) return <AM22G type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 44) return <AM22D type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 45) return <AM22E type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 46) return <AM22J type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 47) return <AM22Z type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 48) return <AM22II type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 49) return <AM22K type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 50) return <AM22L type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 51) return <AM22M type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 52) return <AM23 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 53) return <AM24A type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 54) return <AM24B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 55) return <AM25A type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 56) return <AM25B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 57) return <AM26A type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 58) return <AM26B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 59) return <AM27 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 60) return <AM28A type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 61) return <AM28B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 62) return <AM29A type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 63) return <AM29B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 64) return <AM29V type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 65) return <AM30A type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 66) return <AM30B type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 67) return <AM31 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 68) return <AM32 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 69) return <AM33 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 70) return <AM34 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 71) return <AM35 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 72) return <AM36 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 73) return <AM37 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 74) return <AM38 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 75) return <AM39 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 76) return <AM40 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 77) return <AM41 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 78) return <NotFound type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 79) return <EIM4_2 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 80) return <NotFound type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 81) return <NotFound type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 82) return <EIM5_2 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 83) return <CT1Nuur type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 84) return <CT1Anamnes type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 85) return <CT1Dotor type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 86) return <A293 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 87) return <CT1_2H2 type={type} data={data} appointmentId={appointmentId} />;
   else if (id === 88) {
      return <EMT201_4_2 type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 89) {
      return <CT1_2H11 type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 90) {
      return <CT1_2H12 type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 91) {
      return <CT1_2H13 type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 92) {
      return <CT1ClinalDiagnose type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 93) {
      return <CT1BaseOfClinicalDiagnose type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 94) {
      return <CT1Inspection type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 95) {
      return <CT1End type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 96) {
      return <CT1_2H14 type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 97) {
      return <A539H3 type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 98) {
      return <CT1Nud type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 99) {
      return <CT1Ulamjlalt type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 100) {
      return <CT1Medrel type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 101) {
      return <CT1Chih type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 102) {
      return <CT1Aris type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 103) {
      return <CT1Dotood type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 104) {
      return <CT1Gemtel type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 105) {
      return <CT1Emegtei type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 106) {
      return <CT1Tsus type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 107) {
      return <CT1Setgets type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 108) {
      return <CT1Hool type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 109) {
      return <CT1Zurh type={type} data={data} appointmentId={appointmentId} />;
   } else if (id === 110) {
      return <NotFound />;
   } else if (id === 111) {
      return <CT32A type={type} data={data} appointmentId={appointmentId} />;
   }
}

export function ReturnAll() {
   return options;
}

export function ReturnByIdToName(id) {
   return options.find((e) => e.value === id)?.docName;
}
export function ReturnByIdToCode(id) {
   return options.find((e) => e.value === id)?.label;
}

export function ReturnDetails({ type, oldDocuments, handleClick }) {
   // type = 0 bol list awah 1 bol select
   const [documentForms, setDocumentForms] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [searchValueSelect, setSearchValueSelect] = useState('');
   const [documentId, setDocumentId] = useState(Number);
   const [selectedOptions, setSelectedOptions] = useState([]);
   const filteredOptions = options?.filter((e) => {
      return e.label.toLowerCase().includes(searchValue.toLowerCase());
   });
   const filteredOptionsSelectDf = documentForms?.filter((e) => {
      return e.label.toLowerCase().includes(searchValue.toLowerCase());
   });
   const filteredOptionsSelect = options?.filter((e) => {
      return e.docName.toLowerCase().includes(searchValueSelect.toLowerCase());
   });
   const add = (row) => {
      const result = selectedOptions?.find((option) => {
         return option.formId === row.formId;
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

   const getDocumentForms = async () => {
      await OrganizationDocumentFormService.getByPageFilter({
         params: {
            type: 'FORM'
         }
      }).then(({ data: { response } }) => {
         setDocumentForms(
            response.map((res) => ({
               value: res.documentValue,
               docName: ReturnByIdToName(res.documentValue),
               label: ReturnByIdToCode(res.documentValue),
               formId: res.id,
               formType: res.formType
            }))
         );
      });
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
   useEffect(() => {
      getDocumentForms();
   }, []);
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
                     <NewInput
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
               <NewInput onChange={(e) => setSearchValueSelect(e.target.value)} placeholder="Хайх" />
               <NewTable
                  prop={{
                     rowKey: 'value',
                     bordered: true,
                     scroll: {
                        y: 500
                     },
                     dataSource: filteredOptionsSelectDf
                  }}
                  meta={{
                     page: 1,
                     limit: filteredOptionsSelectDf.length
                  }}
                  isLoading={false}
                  isPagination={false}
               >
                  <NewColumn
                     title="Баримт бичгийн нэр"
                     dataIndex="docName"
                     render={(text) => {
                        return <p className="whitespace-normal text-start text-black">{text}</p>;
                     }}
                  />
                  <NewColumn
                     title="Тушаал шийдвэрийн дугаар"
                     dataIndex="label"
                     render={(text) => {
                        return <p className="whitespace-normal text-start text-black">{text}</p>;
                     }}
                  />
                  <NewColumn
                     title="FORM ID"
                     dataIndex="formId"
                     render={(text) => {
                        return <p className="whitespace-normal text-start text-black">{text}</p>;
                     }}
                  />
                  <NewColumn
                     title="FORM TYPE"
                     dataIndex="formType"
                     render={(text) => {
                        console.log(text);
                        return <p className="whitespace-normal text-start text-black">{text}</p>;
                     }}
                  />
                  <NewColumn
                     title=""
                     width={40}
                     render={(_text, row) => {
                        return (
                           <Button
                              onClick={() => add(row)}
                              icon={
                                 <RightOutlined
                                    style={{
                                       color: 'blue'
                                    }}
                                 />
                              }
                           />
                        );
                     }}
                  />
               </NewTable>
            </div>
            <div className="grid gap-6">
               <NewTable
                  prop={{
                     rowKey: 'value',
                     bordered: true,
                     scroll: {
                        y: 500
                     },
                     dataSource: selectedOptions
                  }}
                  meta={{
                     page: 1,
                     limit: selectedOptions.length
                  }}
                  isLoading={false}
                  isPagination={false}
               >
                  <NewColumn
                     title="Баримт бичгийн нэр"
                     dataIndex="docName"
                     render={(text) => {
                        return <p className="whitespace-normal text-start text-black">{text}</p>;
                     }}
                  />
                  <NewColumn
                     title="Тушаал шийдвэрийн дугаар"
                     dataIndex="label"
                     render={(text) => {
                        return <p className="whitespace-normal text-start text-black">{text}</p>;
                     }}
                  />
                  <NewColumn
                     title=" asd"
                     dataIndex="formType"
                     render={(text) => {
                        return <p className="whitespace-normal text-start text-black">{text}</p>;
                     }}
                  />
                  <NewColumn
                     title=""
                     width={40}
                     dataIndex="formId"
                     render={(_text, _row, index) => {
                        return (
                           <CloseOutlined
                              style={{
                                 color: 'red'
                              }}
                              onClick={() => remove(index)}
                           />
                        );
                     }}
                  />
               </NewTable>
               <Button type="primary" onClick={() => handleClick(selectedOptions)}>
                  Хадгалах
               </Button>
            </div>
         </div>
      );
   }
}

export { ReturnByIdComponent };
