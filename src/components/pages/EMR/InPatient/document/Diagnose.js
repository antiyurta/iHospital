import { CloseOutlined } from '@ant-design/icons';
import {
   Button,
   DatePicker,
   Divider,
   Form,
   Input,
   Modal,
   Pagination
} from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../../features/authReducer';
import { Get, openNofi } from '../../../../comman';
const { Search } = Input;
function Diagnose({ form, name, formName }) {
   const token = useSelector(selectCurrentToken);
   const [isOpen, setIsOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const [meta, setMeta] = useState({});
   const [diagnoses, setDiagnoses] = useState([]);
   const [param, setParam] = useState('');
   const [paramValue, setParamValue] = useState('');
   const [selectedDiagnoses, setSelectedDiagnoses] = useState([]);
   const getDiagnoses = async (page, pageSize, e, v) => {
      setLoading(true);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize
         }
      };
      if (e && v) {
         setParam(v);
         setParamValue(e);
         conf.params[v] = e;
      }
      const response = await Get('reference/diagnose', token, conf);
      setDiagnoses(response.data);
      setMeta(response.meta);
      setLoading(false);
   };
   const add = (diagnose) => {
      const state = selectedDiagnoses.includes(diagnose);
      if (state) {
         openNofi('warning', 'EXA', 'EXA сонгогдсон байна');
      } else {
         setSelectedDiagnoses([...selectedDiagnoses, diagnose]);
      }
   };
   const remove = (index) => {
      var arr = [...selectedDiagnoses];
      arr.splice(index, 1);
      setSelectedDiagnoses(arr);
   };
   const handleClick = () => {
      form.setFieldValue(['patient', formName], selectedDiagnoses);
      form.setFieldValue(['patient', `${formName}Date`], moment());
      setIsOpen(false);
   };
   useEffect(() => {
      getDiagnoses(1, 10, paramValue, param);
   }, []);
   return (
      <div>
         <Divider>{name}</Divider>
         <span>
            <Button onClick={() => setIsOpen(true)} className="diagnoseButton">
               ICD10
            </Button>
         </span>
         <Form.List name={['patient', formName]}>
            {(fields) => (
               <>
                  {fields.map((field, index) => {
                     return (
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           key={index}
                        >
                           {() => {
                              return (
                                 <span>
                                    {form.getFieldValue([
                                       'patient',
                                       formName,
                                       field.name,
                                       'nameMn'
                                    ])}
                                    -
                                    {form.getFieldValue([
                                       'patient',
                                       formName,
                                       field.name,
                                       'code'
                                    ])}
                                    &nbsp;
                                 </span>
                              );
                           }}
                        </Form.Item>
                     );
                  })}
               </>
            )}
         </Form.List>
         <h2>
            <Form.Item
               shouldUpdate
               className="mb-0"
               noStyle
               name={['patient', `${formName}Date`]}
               getValueProps={(i) => ({ value: moment(i) })}
            >
               <DatePicker disabled={true} format={'YYYY он MM сар DD өдөр'} />
            </Form.Item>
         </h2>
         <Modal
            title="sadad"
            open={isOpen}
            onOk={() => {
               handleClick(selectedDiagnoses);
            }}
            onCancel={() => setIsOpen(false)}
            width="90%"
         >
            <div className="flex flex-wrap">
               <div className="w-2/3">
                  <div
                     className="table-responsive px-4 pb-4"
                     id="style-8"
                     style={{ maxHeight: '500px' }}
                  >
                     <Table
                        className="ant-border-space"
                        style={{ width: '100%' }}
                     >
                        <thead className="ant-table-thead bg-slate-200">
                           <tr>
                              <th
                                 className="font-bold text-sm align-middle"
                                 style={{ minWidth: 230 }}
                              >
                                 Код
                              </th>
                              <th className="font-bold text-sm align-middle">
                                 Монгол нэр
                              </th>
                              <th className="font-bold text-sm align-middle">
                                 Англи нэр
                              </th>
                              <th className="font-bold text-sm align-middle">
                                 Орос нэр
                              </th>
                           </tr>
                           <tr>
                              <th>
                                 <Search
                                    placeholder={'Хайх'}
                                    allowClear
                                    onSearch={(e) =>
                                       getDiagnoses(1, 10, e, 'code')
                                    }
                                    enterButton={'Хайх'}
                                 />
                              </th>
                              <th>
                                 <Search
                                    placeholder={'Хайх'}
                                    allowClear
                                    onSearch={(e) =>
                                       getDiagnoses(1, 10, e, 'nameMn')
                                    }
                                    enterButton={'Хайх'}
                                 />
                              </th>
                              <th>
                                 <Search
                                    placeholder={'Хайх'}
                                    allowClear
                                    onSearch={(e) =>
                                       getDiagnoses(1, 10, e, 'nameEn')
                                    }
                                    enterButton={'Хайх'}
                                 />
                              </th>
                              <th>
                                 <Search
                                    placeholder={'Хайх'}
                                    allowClear
                                    onSearch={(e) =>
                                       getDiagnoses(1, 10, e, 'nameRu')
                                    }
                                    enterButton={'Хайх'}
                                 />
                              </th>
                           </tr>
                        </thead>
                        <tbody className="ant-table-tbody p-0">
                           {diagnoses.map((item, index) => {
                              return (
                                 <tr
                                    onDoubleClick={() => add(item)}
                                    key={index}
                                    className="ant-table-row ant-table-row-level-0 hover:cursor-pointer"
                                 >
                                    <td
                                       className="whitespace-pre-line"
                                       style={{ width: 50, maxWidth: 50 }}
                                    >
                                       {item.code}
                                    </td>
                                    <td
                                       className="whitespace-pre-line"
                                       style={{ maxWidth: 50 }}
                                    >
                                       {item.nameMn}
                                    </td>
                                    <td
                                       className="whitespace-pre-line"
                                       style={{ maxWidth: 50 }}
                                    >
                                       {item.nameEn}
                                    </td>
                                    <td
                                       className="whitespace-pre-line"
                                       style={{ maxWidth: 50 }}
                                    >
                                       {item.nameRu}
                                    </td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </Table>
                  </div>
                  <div>
                     <Pagination
                        simple={true}
                        className="pagination"
                        pageSize={10}
                        total={meta.itemCount}
                        onChange={(page, pageSize) =>
                           getDiagnoses(page, pageSize, paramValue, param)
                        }
                     />
                  </div>
               </div>
               <div className="w-1/3">
                  <div
                     className="table-responsive px-4 pb-4"
                     id="style-8"
                     style={{ maxHeight: '500px' }}
                  >
                     <Table
                        className="ant-border-space"
                        style={{ width: '100%' }}
                     >
                        <thead className="ant-table-thead bg-slate-200">
                           <tr>
                              <th>Код</th>
                              <th>Монгол нэр</th>
                              <th></th>
                           </tr>
                        </thead>
                        <tbody>
                           {selectedDiagnoses.map((item, index) => {
                              return (
                                 <tr
                                    key={index}
                                    className="ant-table-row ant-table-row-level-0 hover:cursor-pointer"
                                 >
                                    <td
                                       className="whitespace-pre-line"
                                       style={{ width: 50, maxWidth: 50 }}
                                    >
                                       {item.code}
                                    </td>
                                    <td
                                       className="whitespace-pre-line"
                                       style={{ maxWidth: 50 }}
                                    >
                                       {item.nameMn}
                                    </td>
                                    <td
                                       onDoubleClick={() => remove(index)}
                                       className="hover:cursor-pointer"
                                    >
                                       <CloseOutlined
                                          style={{
                                             color: 'red',
                                             verticalAlign: 'middle'
                                          }}
                                       />
                                    </td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </Table>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
}
export default Diagnose;
